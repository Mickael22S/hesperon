/* ============ CAMADA DE DADOS (Supabase) ============
   Tudo que lê ou grava passa por DB. Tabelas: profiles, items, goals, steps
   (veja hesperon-supabase.sql). Cada usuário só enxerga os próprios dados (RLS). */
var DB=(function(){
var cfg=window.HESPERON_CONFIG||{};
var ok=!!cfg.SUPABASE_URL&&!!cfg.SUPABASE_ANON_KEY&&cfg.SUPABASE_URL.indexOf('SEU-PROJETO')<0&&cfg.SUPABASE_ANON_KEY.indexOf('SUA-CHAVE')<0;
var SK='hesperon-auth',RK='hesperon-remember';

/* "Lembrar de mim": sessão em localStorage (fica) ou sessionStorage (some ao fechar o navegador) */
function remember(){try{return localStorage.getItem(RK)!=='0'}catch(e){return true}}
var store={
getItem:function(k){try{return localStorage.getItem(k)||sessionStorage.getItem(k)}catch(e){return null}},
setItem:function(k,v){try{var r=remember();(r?localStorage:sessionStorage).setItem(k,v);(r?sessionStorage:localStorage).removeItem(k)}catch(e){}},
removeItem:function(k){try{localStorage.removeItem(k);sessionStorage.removeItem(k)}catch(e){}}};

var sb=null;
if(ok&&window.supabase){sb=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY,{auth:{storage:store,storageKey:SK,persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}})}

function E(m){var x=new Error(m);x.pt=true;return x}
function need(){if(!sb)throw E('Supabase não configurado. Edite o arquivo js/config.js.')}
function perr(x){
if(x&&x.pt)return x;
var m=((x&&x.message)||'').toLowerCase(),c=(x&&(x.code||x.error_code))||'';
console.error(x);
if(c==='invalid_credentials'||m.indexOf('invalid login')>=0)return E('E-mail/usuário ou senha incorretos.');
if(c==='email_not_confirmed'||m.indexOf('not confirmed')>=0)return E('Confirme seu e-mail antes de entrar.');
if(c==='user_already_exists'||m.indexOf('already registered')>=0)return E('Este e-mail já tem cadastro. Faça login.');
if(c==='weak_password')return E('Senha fraca. Use 6 caracteres ou mais.');
if(c==='same_password')return E('A nova senha precisa ser diferente da atual.');
if(c==='over_request_rate_limit'||c==='over_email_send_rate_limit'||(x&&x.status===429))return E('Muitas tentativas. Aguarde um pouco e tente de novo.');
if(c==='23505')return E('Este apelido já está em uso.');
if(m.indexOf('failed to fetch')>=0||m.indexOf('network')>=0||m.indexOf('load failed')>=0)return E('Sem conexão com o servidor. Tente de novo.');
return E('Algo deu errado. Tente de novo.')}
function chk(r){if(r&&r.error)throw perr(r.error);return r}

async function myId(){need();var r=await sb.auth.getSession();var s=r.data&&r.data.session;if(!s)throw E('Sessão expirada. Entre novamente.');return s.user.id}
async function profileOf(u){
var r=await sb.from('profiles').select('nick').eq('id',u.id).maybeSingle();chk(r);
var nick=r.data&&r.data.nick;
if(!nick){nick=((u.user_metadata&&u.user_metadata.nick)||(u.email||'').split('@')[0]||'usuário').slice(0,30);
try{await sb.from('profiles').insert({id:u.id,nick:nick})}catch(e){}}
return{email:u.email,nick:nick}}

/* conversão app <-> banco */
function rowItem(r){return{id:r.id,cat:r.cat,title:r.title,date:r.due_date,time:r.due_time||'',note:r.note||'',rec:!!r.rec,done:!!r.done,paid:r.paid||[],createdAt:r.created_at}}
function colItem(p){var o={};if('cat'in p)o.cat=p.cat;if('title'in p)o.title=p.title;if('date'in p)o.due_date=p.date;if('time'in p)o.due_time=p.time||'';if('note'in p)o.note=p.note||'';if('rec'in p)o.rec=p.rec;if('done'in p)o.done=p.done;if('paid'in p)o.paid=p.paid;return o}
function rowStep(r){return{id:r.id,title:r.title,days:r.days||[],hours:Number(r.hours),start:r.start_date,end:r.end_date||'',log:r.log||{}}}

return{
configured:ok,
users:{
current:async function(){need();var r=await sb.auth.getUser();if(r.error||!r.data||!r.data.user){try{await sb.auth.signOut({scope:'local'})}catch(e){}return null}return profileOf(r.data.user)},
signIn:async function(login,pw,rem){need();
try{localStorage.setItem(RK,rem?'1':'0')}catch(e){}
var q=(login||'').trim().toLowerCase(),email=q;
if(!q||!pw)throw E('E-mail/usuário ou senha incorretos.');
if(q.indexOf('@')<0){var f=await sb.rpc('email_for_login',{p_login:q});chk(f);email=f.data;if(!email)throw E('E-mail/usuário ou senha incorretos.')}
var r=await sb.auth.signInWithPassword({email:email,password:pw});chk(r);
return profileOf(r.data.user)},
create:async function(n,e,pw){need();
try{localStorage.setItem(RK,'1')}catch(x){}
var a=await sb.rpc('nick_available',{p_nick:n});chk(a);if(a.data===false)throw E('Este apelido já está em uso.');
var r=await sb.auth.signUp({email:e,password:pw,options:{data:{nick:n},emailRedirectTo:location.origin}});chk(r);
var u=r.data&&r.data.user;
if(u&&u.identities&&u.identities.length===0)throw E('Este e-mail já tem cadastro. Faça login.');
if(!r.data.session)return{confirm:true};
return{confirm:false,user:{email:e,nick:n}}},
verify:async function(e,pw){need();
var t=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}});
var r=await t.auth.signInWithPassword({email:e,password:pw});
return !r.error},
setNick:async function(e,n){var id=await myId();chk(await sb.from('profiles').update({nick:n}).eq('id',id))},
setPass:async function(e,pw){need();chk(await sb.auth.updateUser({password:pw}))},
setEmail:async function(o,n){need();chk(await sb.auth.updateUser({email:n},{emailRedirectTo:location.origin}));
var g=await sb.auth.getUser();return{pending:!(g.data&&g.data.user&&g.data.user.email===n)}},
remove:async function(e){need();chk(await sb.rpc('delete_my_account'));try{await sb.auth.signOut({scope:'local'})}catch(x){}}},
items:{
list:async function(e){var r=await sb.from('items').select('*').order('created_at',{ascending:true}).range(0,4999);chk(r);return r.data.map(rowItem)},
create:async function(e,it){var o=colItem(it);o.id=it.id;chk(await sb.from('items').insert(o));return it},
update:async function(e,id,p){chk(await sb.from('items').update(colItem(p)).eq('id',id))},
remove:async function(e,id){chk(await sb.from('items').delete().eq('id',id))}},
/* metas: goals(id,title) e etapas steps(id,goal_id,title,days[],hours,start_date,end_date,log{data:true}) */
goals:{
list:async function(e){var r=await sb.from('goals').select('id,title,created_at,steps(*)').order('created_at',{ascending:true}).order('created_at',{referencedTable:'steps',ascending:true});chk(r);
return r.data.map(function(x){return{id:x.id,title:x.title,createdAt:x.created_at,steps:(x.steps||[]).map(rowStep)}})},
create:async function(e,go){chk(await sb.from('goals').insert({id:go.id,title:go.title}));return go},
remove:async function(e,id){chk(await sb.from('goals').delete().eq('id',id))}},
steps:{
create:async function(gid,s){chk(await sb.from('steps').insert({id:s.id,goal_id:gid,title:s.title,days:s.days,hours:s.hours,start_date:s.start,end_date:s.end||null,log:s.log||{}}));return s},
setLog:async function(id,log){chk(await sb.from('steps').update({log:log}).eq('id',id))},
remove:async function(id){chk(await sb.from('steps').delete().eq('id',id))}},
session:{
has:function(){try{return !!(localStorage.getItem(SK)||sessionStorage.getItem(SK))}catch(e){return false}},
remember:remember,
clear:async function(){if(sb)await sb.auth.signOut({scope:'local'});store.removeItem(SK)},
onSignOut:function(fn){if(sb)sb.auth.onAuthStateChange(function(ev){if(ev==='SIGNED_OUT')fn()})}}
}})();
/* ============ FIM DA CAMADA DE DADOS ============ */
