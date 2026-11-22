var LOGO='assets/logo.png',FOLDER='assets/folder.png',MARK='assets/mark.png',POSTER='assets/poster.jpg',VIDEO='assets/hero.mp4';
function ic(d){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>'}
var I={geral:'<rect x="3" y="4.5" width="18" height="16.5" rx="3.5"/><path d="M3 10h18M8 2.8v3.4M16 2.8v3.4"/>',trabalho:'<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5.5C9 4.7 9.7 4 10.5 4h3c.8 0 1.5.7 1.5 1.5V7M3 13h18"/>',ensino:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5M22 9v6"/>',dia:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',contas:'<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19M6.5 15h4"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>',
us:'<circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"/>',ml:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/>',lk:'<rect x="4.5" y="10.5" width="15" height="10" rx="3"/><path d="M8 10.5V8a4 4 0 018 0v2.5"/>',th:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 000-18z" fill="currentColor"/>',lo:'<path d="M9 4H6a2 2 0 00-2 2v12a2 2 0 002 2h3M16 8l4 4-4 4M20 12H9"/>',tr:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 7V4h6v3"/>',eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',ch:'<path d="M9 6l6 6-6 6"/>',bk:'<path d="M15 6l-6 6 6 6"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
plus:'<path d="M12 5v14M5 12h14"/>',rep:'<path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3"/>',ck:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',tg:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>'};
var CATS={trabalho:{n:'Trabalho',nw:'Nova tarefa',c:'#0071e3',t:'Entregas e compromissos, <b>sem perder prazo</b>.',ph:'Ex.: Enviar relatório mensal',dl:'Data de entrega'},ensino:{n:'Ensino',nw:'Nova atividade',c:'#9b51e0',t:'Atividades e datas importantes, <b>tudo num só lugar</b>.',ph:'Ex.: Entregar trabalho de história',dl:'Data de entrega'},dia:{n:'Dia a dia',nw:'Novo compromisso',c:'#30b050',t:'Consultas e lembretes, <b>do jeito que o dia pede</b>.',ph:'Ex.: Consulta no dentista',dl:'Data'},contas:{n:'Contas',nw:'Nova conta',c:'#ff5e3a',t:'Saiba <b>qual dia</b> cada conta vence. Só datas, sem valores.',ph:'Ex.: Internet, aluguel, cartão',dl:'Dia do vencimento'}};
var TN={geral:'Visão geral',trabalho:'Trabalho',ensino:'Ensino',dia:'Dia a dia',contas:'Contas'},TABS=['geral','trabalho','ensino','dia','contas'];
var MES=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],MS=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],TL={auto:'Automático',light:'Claro',dark:'Escuro'};

/* camada de dados: js/db.js (Supabase) */

function g(i){return document.getElementById(i)}
function emp(){var m=gm();return '<div class="emp2"><img src="'+FOLDER+'" alt="" width="260"><h2>'+(m?'Nenhuma meta ainda.':'Nada por aqui ainda.')+'</h2><p>'+(m?'Crie uma meta e depois adicione as etapas com os dias e as horas de estudo.':'Você ainda não adicionou nenhum item nesta seção.')+'</p><button class="eb" onclick="openAdd(this)">'+ic(I.plus)+(m?'Adicionar meta':'Adicionar novo item')+'</button></div>'}
function EYE(id){return '<button type="button" class="au-eye" aria-label="Mostrar senha" aria-pressed="false" onclick="eye(\''+id+'\',this)"><svg class="eye-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.1A10.6 10.6 0 0 1 12 5c5.5 0 9 4.5 10 7a12.5 12.5 0 0 1-3.2 4.3M6.5 6.8C4.3 8.3 2.7 10.4 2 12c1 2.5 4.5 7 10 7 1.6 0 3-.4 4.2-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg><svg class="eye-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12c1-2.5 4.5-7 10-7s9 4.5 10 7c-1 2.5-4.5 7-10 7S3 14.5 2 12Z"/><circle cx="12" cy="12" r="3"/></svg></button>'}
var me=null,remember=false,view='login',tab='geral',sel=null,items=[],cm=new Date(),lastTg='',tt,pref='auto';
try{pref=localStorage.getItem('tp-t')||'auto'}catch(e){}
cm.setDate(1);
function applyT(){var r=document.documentElement;if(pref==='auto')r.removeAttribute('data-theme');else r.setAttribute('data-theme',pref)}
function cyc(){pref={auto:'light',light:'dark',dark:'auto'}[pref];try{localStorage.setItem('tp-t',pref)}catch(e){}applyT();sheet()}
function uid(){try{return crypto.randomUUID()}catch(e){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}}
function p(n){return String(n).padStart(2,'0')}
function ymd(d){return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function dim(y,m){return new Date(y,m,0).getDate()}
function rs(i){var a=i.date.split('-').map(Number),n=new Date(),k0=a[0]*12+a[1]-1,last=Math.max(k0,n.getFullYear()*12+n.getMonth()),y,m,key,d;
for(var k=k0;k<=last;k++){y=Math.floor(k/12);m=k%12;key=y+'-'+p(m+1);d=key+'-'+p(Math.min(a[2],dim(y,m+1)));if(i.paid.indexOf(key)<0)return{date:d,done:false}}
return{date:d,done:true}}
function eff(i){return i.rec?rs(i).date:i.date}
function isDone(i){return i.rec?rs(i).done:i.done}
function occ(i,ds){if(!i.rec)return i.date===ds;if(ds<i.date)return false;var a=ds.split('-').map(Number);return Math.min(+i.date.slice(8),dim(a[0],a[1]))===a[2]}
function occDone(i,ds){return i.rec?i.paid.indexOf(ds.slice(0,7))>=0:i.done}
function cmp(a,b){var x=eff(a),y=eff(b);return x<y?-1:x>y?1:0}
function pending(){return items.filter(function(i){return !isDone(i)})}
function lbl(ds){var t=new Date();t.setDate(t.getDate()+1);if(ds===ymd(new Date()))return'Hoje';if(ds===ymd(t))return'Amanhã';return new Date(ds+'T12:00').toLocaleDateString('pt-BR',{weekday:'short',day:'numeric',month:'short'})}

function card(i,sc){var e=eff(i),dn=isDone(i),T=ymd(new Date()),late=!dn&&e<T,tod=!dn&&e===T,C=CATS[i.cat],d=new Date(e+'T12:00'),col=late?'var(--rd)':'var(--gn)',wd=d.toLocaleDateString('pt-BR',{weekday:'long'});wd=wd.charAt(0).toUpperCase()+wd.slice(1);
return '<div class="it'+(dn?' dn':'')+'" style="--c:'+col+'"><div class="tile"><b>'+d.getDate()+'</b><span>'+MS[d.getMonth()]+'</span></div><div class="itx"><b>'+esc(i.title)+'</b><span class="m2">'+(i.rec?ic(I.rep)+'Todo dia '+(+i.date.slice(8)):wd)+(i.time?' · '+i.time:'')+'</span>'+(i.note?'<span class="m2 nt">'+esc(i.note)+'</span>':'')+((late||tod||sc)?'<span class="bds">'+(late?'<em class="bd r">Atrasado</em>':'')+(tod?'<em class="bd g">Hoje</em>':'')+(sc?'<em class="bd" style="--c:'+C.c+'">'+C.n+'</em>':'')+'</span>':'')+'</div><button class="cb2'+(dn?' y':'')+(i.id===lastTg?' pp':'')+'" onclick="tg(\''+i.id+'\')" aria-label="'+(i.rec?'Marcar como pago':'Concluir')+'">'+ic(I.ck)+'</button><button class="x" onclick="rm(\''+i.id+'\')" aria-label="Excluir">'+ic(I.x)+'</button></div>'}
function sec(t,l,c,sc){return '<div class="sec"><h3>'+t+'</h3><span class="cnt '+(c||'')+'">'+l.length+'</span></div>'+l.map(function(i){return card(i,sc)}).join('')}
async function tg(id){var i=items.filter(function(x){return x.id===id})[0];if(!i)return;lastTg=id;if(i.rec){var k=eff(i).slice(0,7);await DB.items.update(me.email,id,{paid:isDone(i)?i.paid.filter(function(x){return x!==k}):i.paid.concat(k)})}else await DB.items.update(me.email,id,{done:!i.done});items=await DB.items.list(me.email);refresh();setTimeout(function(){lastTg=''},700)}
async function rm(id){await DB.items.remove(me.email,id);items=await DB.items.list(me.email);refresh()}
function mv(n){cm=new Date(cm.getFullYear(),cm.getMonth()+n,1);refresh()}
function goNow(){cm=new Date();cm.setDate(1);refresh()}
function pick(ds){sel=sel===ds?null:ds;refresh();if(sel){var d=g('day');if(d)d.scrollIntoView({behavior:'smooth',block:'nearest'})}}
function mn(){var n=new Date(),cur=cm.getFullYear()===n.getFullYear()&&cm.getMonth()===n.getMonth();return '<button class="circ" onclick="mv(-1)" aria-label="Mês anterior">←</button><button class="mlab" onclick="goNow()" aria-label="Ir para o mês atual"><strong>'+MES[cm.getMonth()]+' '+cm.getFullYear()+'</strong>'+(cur?'':'<small>Voltar para hoje</small>')+'</button><button class="circ" onclick="mv(1)" aria-label="Próximo mês">→</button>'}
function st(){var pd=pending(),T=ymd(new Date()),w=new Date();w.setDate(w.getDate()+7);var W=ymd(w),late=pd.filter(function(i){return eff(i)<T}).length,hj=pd.filter(function(i){return eff(i)===T}).length,ct=pd.filter(function(i){return i.cat==='contas'}),cw=ct.filter(function(i){return eff(i)>=T&&eff(i)<=W}).length;
function c(l,col,n,s){return '<div class="card"><span class="lb">'+l+'</span><b class="big" style="color:'+col+'">'+n+'</b><span class="mt">'+s+'</span></div>'}
return '<div class="sg">'+c('Pendentes','var(--blue)',pd.length,'em todas as abas')+c('Atrasados','var(--rd)',late,late?'pedem atenção':'tudo em dia')+c('Para hoje','var(--gn)',hj,hj?'para concluir':'nada marcado')+c('Contas a pagar',CATS.contas.c,ct.length,ct.length?(cw?cw+(cw>1?' vencem em 7 dias':' vence em 7 dias'):'nenhuma vence em 7 dias'):'nenhuma cadastrada')+'</div>'}
function cal(){var y=cm.getFullYear(),m=cm.getMonth(),T=ymd(new Date()),f=new Date(y,m,1).getDay(),n=dim(y,m+1),pool=gm()?[]:items.filter(function(i){return tab==='geral'||i.cat===tab});
var o='<div class="card"><div class="dw">'+['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map(function(d){return '<span>'+d+'</span>'}).join('')+'</div><div class="dg">';
for(var k=0;k<f;k++)o+='<span></span>';
for(var d=1;d<=n;d++){var ds=y+'-'+p(m+1)+'-'+p(d),cs=[];pool.forEach(function(i){if(!occ(i,ds))return;var c=!occDone(i,ds)&&ds<T?'var(--rd)':'var(--gn)';if(cs.indexOf(c)<0&&cs.length<3)cs.push(c)});if(gm())goals.forEach(function(go){go.steps.forEach(function(s){if(!sOcc(s,ds))return;var c=!s.log[ds]&&ds<T?'var(--rd)':'var(--gn)';if(cs.indexOf(c)<0&&cs.length<3)cs.push(c)})});
o+='<button class="dc'+(ds===T?' t':'')+(ds===sel?' s':'')+(cs.length?' h':'')+'" style="--c:'+(cs[0]||'transparent')+'" onclick="pick(\''+ds+'\')" aria-label="Dia '+d+'"><span class="n">'+d+'</span><span class="dots">'+cs.map(function(c){return '<i style="background:'+c+'"></i>'}).join('')+'</span></button>'}
return o+'</div></div>'}
function day(){if(!sel)return '';if(gm()){var sl=[];goals.forEach(function(go){go.steps.forEach(function(s){if(sOcc(s,sel))sl.push(scard(go,s,sel))})});return '<div class="card"><div class="fil"><h3>'+lbl(sel)+'</h3></div>'+(sl.length?sl.join(''):'<p class="empty">Nenhum estudo marcado neste dia.</p>')+'</div>'}var l=items.filter(function(i){return occ(i,sel)&&(tab==='geral'||i.cat===tab)});return '<div class="card"><div class="fil"><h3>'+lbl(sel)+'</h3>'+(tab==='geral'?'':'<button class="lk" onclick="openAdd(this,sel)">Adicionar</button>')+'</div>'+(l.length?l.map(function(i){return card(i,tab==='geral')}).join(''):'<p class="empty">Nada neste dia.</p>')+'</div>'}
function lst(){if(gm())return goals.length?goals.map(gcard).join(''):emp();var T=ymd(new Date()),pd=pending();
if(tab==='geral'){var late=pd.filter(function(i){return eff(i)<T}).sort(cmp),nx=pd.filter(function(i){return eff(i)>=T}).sort(cmp).slice(0,8);
return (late.length?sec('Atrasados',late,'r',1):'<div class="sec"><h3>Atrasados</h3><span class="cnt">0</span></div><p class="empty" style="padding:0 6px">Nenhum atraso. Continue assim.</p>')+(nx.length?sec('Próximos',nx,'',1):'<div class="sec"><h3>Próximos</h3><span class="cnt">0</span></div><p class="empty" style="padding:0 6px">Nada agendado por enquanto.</p>')}
var l=items.filter(function(i){return i.cat===tab}).sort(cmp);
if(!l.length)return emp();
var G=[[],[],[],[]];l.forEach(function(i){var e=eff(i);G[isDone(i)?3:e<T?0:e===T?1:2].push(i)});
return (G[0].length?sec('Atrasados',G[0],'r'):'')+(G[1].length?sec('Hoje',G[1],'g'):'')+(G[2].length?sec('Próximos',G[2]):'')+(G[3].length?sec(tab==='contas'?'Pagas':'Concluídos',G[3]):'')}
var goals=[],dsec='itens',WD=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],LET=['D','S','T','Q','Q','S','S'];
function gm(){return tab==='ensino'&&dsec==='metas'}
function has(){return gm()?goals.length>0:items.some(function(i){return tab==='geral'||i.cat===tab})}
function setSec(s){dsec=s;sel=null;refresh()}
function hero(){var e=!has();
if(tab==='geral')return (e?'<p class="hi">Olá, <b>'+esc(me.nick)+'</b></p>':'')+'<h1>Calendário do mês</h1>';
return '<h1>'+CATS[tab].n+'</h1>'+(e?'<p class="sub">'+(gm()?'Crie uma meta e defina <b>os dias de estudo</b> de cada etapa.':CATS[tab].t)+'</p>':'')+(tab==='ensino'?'<div class="sg2"><button class="'+(gm()?'':'on')+'" onclick="setSec(\'itens\')">Atividades</button><button class="'+(gm()?'on':'')+'" onclick="setSec(\'metas\')">Metas</button></div>':'')}
function fh(h){return String(Math.round(h*100)/100).replace('.',',')+'h'}
function sOcc(s,ds){return s.days.indexOf(new Date(ds+'T12:00').getDay())>=0&&ds>=s.start&&(!s.end||ds<=s.end)}
function wk(){var n=new Date(),a=[];for(var k=0;k<7;k++)a.push(ymd(new Date(n.getFullYear(),n.getMonth(),n.getDate()-n.getDay()+k,12)));return a}
function sblock(go,s){var T=ymd(new Date()),fim=!!s.end&&s.end<T,pl=0,dn=0,tot=Object.keys(s.log).length,ch=wk().map(function(ds){var on=sOcc(s,ds),ok=!!s.log[ds],late=on&&!ok&&ds<T;if(on){pl++;if(ok)dn++}
return '<button class="wc'+(on?' on':'')+(ok?' ok':'')+(late?' late':'')+(ds===T?' td':'')+'"'+(on?' onclick="stg(\''+go.id+'\',\''+s.id+'\',\''+ds+'\')" aria-label="'+(ok?'Desmarcar':'Marcar')+' estudo de '+lbl(ds)+'"':' disabled tabindex="-1"')+'><small>'+LET[new Date(ds+'T12:00').getDay()]+'</small><b>'+(ok?ic(I.ck):+ds.slice(8))+'</b></button>'}).join('');
return '<div class="stp'+(fim?' fim':'')+'"><div class="sph"><b>'+esc(s.title)+'</b>'+(fim?'<em class="bd">Encerrada</em>':'')+'<button class="x" onclick="srm(\''+go.id+'\',\''+s.id+'\')" aria-label="Excluir etapa">'+ic(I.x)+'</button></div><span class="m2">'+s.days.slice().sort().map(function(k){return WD[k]}).join(', ')+' · '+fh(s.hours)+' por dia'+(s.end?(fim?' · terminou em ':' · até ')+new Date(s.end+'T12:00').toLocaleDateString('pt-BR',{day:'numeric',month:'short',year:'numeric'}):'')+'</span><div class="pb"><i style="width:'+(pl?Math.round(dn/pl*100):0)+'%"></i></div><span class="m2">'+fh(dn*s.hours)+' de '+fh(pl*s.hours)+' esta semana · '+fh(tot*s.hours)+' no total</span><div class="wk">'+ch+'</div></div>'}
function gcard(go){var n=go.steps.length;return '<div class="gc"><div class="gh"><div class="tile" style="--c:var(--gn)">'+ic(I.tg)+'</div><div class="itx"><b>'+esc(go.title)+'</b><span class="m2">'+(n?n+(n>1?' etapas':' etapa'):'Sem etapas ainda')+'</span></div><button class="x" onclick="grm(\''+go.id+'\')" aria-label="Excluir meta">'+ic(I.x)+'</button></div>'+go.steps.map(function(s){return sblock(go,s)}).join('')+(n?'':'<p class="empty" style="padding:2px 4px 12px">Adicione a primeira etapa: o que você precisa fazer para alcançar essa meta.</p>')+'<button class="ab2" onclick="openAdd(this,\'\',stepForm(\''+go.id+'\'))">'+ic(I.plus)+'Adicionar etapa</button></div>'}
function scard(go,s,ds){var ok=!!s.log[ds],late=!ok&&ds<ymd(new Date()),d=new Date(ds+'T12:00');return '<div class="it'+(ok?' dn':'')+'" style="--c:'+(late?'var(--rd)':'var(--gn)')+'"><div class="tile"><b>'+d.getDate()+'</b><span>'+MS[d.getMonth()]+'</span></div><div class="itx"><b>'+esc(s.title)+'</b><span class="m2">'+esc(go.title)+' · '+fh(s.hours)+'</span></div><button class="cb2'+(ok?' y':'')+'" onclick="stg(\''+go.id+'\',\''+s.id+'\',\''+ds+'\')" aria-label="Marcar estudo">'+ic(I.ck)+'</button></div>'}
function goalForm(){return '<form onsubmit="return addGoal(event)"><div class="mh"><h3>Nova meta</h3><button class="xb" type="button" onclick="closeAdd()" aria-label="Fechar">'+ic(I.x)+'</button></div><label class="lf"><span>Qual é a sua meta?</span><input class="in" id="ft" required maxlength="120" placeholder="Ex.: Ser desenvolvedor back-end"></label><p class="hint">Depois de criar, adicione as etapas: o que fazer, os dias de estudo e as horas por dia.</p><button class="pill sm" type="submit">Criar meta</button></form>'}
function stepForm(gid){return '<form onsubmit="return addStep(event,\''+gid+'\')"><div class="mh"><h3>Nova etapa</h3><button class="xb" type="button" onclick="closeAdd()" aria-label="Fechar">'+ic(I.x)+'</button></div><label class="lf"><span>O que preciso fazer</span><input class="in" id="ft" required maxlength="120" placeholder="Ex.: Aprender banco de dados"></label><div class="lf"><span>Dias de estudo</span><div class="wds">'+WD.map(function(d,k){return '<label><input type="checkbox" name="wd" value="'+k+'"'+(k>0&&k<6?' checked':'')+'><span>'+d+'</span></label>'}).join('')+'</div></div><div class="two"><label class="lf"><span>Horas por dia</span><input class="in" type="number" id="gh" min="0.5" max="24" step="0.5" value="1" required></label><label class="lf"><span>Até quando (opcional)</span><input class="in" type="date" id="ge" min="'+ymd(new Date())+'"></label></div><p class="err" id="se2" role="alert"></p><button class="pill sm" type="submit">Adicionar etapa</button></form>'}
async function addGoal(e){e.preventDefault();var t=g('ft').value.trim();if(!t)return false;await DB.goals.create(me.email,{id:uid(),title:t,steps:[],createdAt:new Date().toISOString()});goals=await DB.goals.list(me.email);closeAdd();refresh();toast('Meta criada');return false}
async function addStep(e,gid){e.preventDefault();var d=[].slice.call(document.querySelectorAll('input[name=wd]:checked')).map(function(x){return +x.value}),t=g('ft').value.trim(),h=parseFloat(g('gh').value),go=goals.filter(function(x){return x.id===gid})[0];
if(!t||!go)return false;if(!d.length){g('se2').textContent='Escolha pelo menos um dia de estudo.';return false}if(!(h>0)){g('se2').textContent='Informe quantas horas por dia.';return false}var en=g('ge').value;if(en&&en<ymd(new Date())){g('se2').textContent='A data final precisa ser hoje ou depois.';return false}
await DB.steps.create(gid,{id:uid(),title:t,days:d,hours:h,start:ymd(new Date()),end:g('ge').value||'',log:{}});goals=await DB.goals.list(me.email);closeAdd();refresh();toast('Etapa adicionada');return false}
async function stg(gid,sid,ds){var go=goals.filter(function(x){return x.id===gid})[0],s=go&&go.steps.filter(function(x){return x.id===sid})[0];if(!s)return;var l=Object.assign({},s.log);if(l[ds])delete l[ds];else l[ds]=1;await DB.steps.setLog(sid,l);goals=await DB.goals.list(me.email);refresh()}
async function srm(gid,sid){await DB.steps.remove(sid);goals=await DB.goals.list(me.email);refresh()}
async function grm(gid){await DB.goals.remove(me.email,gid);goals=await DB.goals.list(me.email);refresh()}
function refresh(){var m=g('mn'),s=g('st'),h=has(),a=g('ab');g('hero').innerHTML=hero();if(a)a.style.display=h?'':'none';if(m)m.innerHTML=h?mn():'';if(s)s.innerHTML=st();g('cal').innerHTML=h?cal():'';g('day').innerHTML=h?day():'';g('lst').innerHTML=lst()}

/* modal de adicionar */
function addForm(){var k0=tab==='geral'?'trabalho':tab,C=CATS[k0];
return '<form onsubmit="return add(event)"><div class="mh"><h3 id="mt">'+C.nw+'</h3><button class="xb" type="button" onclick="closeAdd()" aria-label="Fechar">'+ic(I.x)+'</button></div><div class="seg'+(tab==='geral'?'':' h')+'">'+Object.keys(CATS).map(function(k){return '<label><input type="radio" name="fc" value="'+k+'" onchange="cs()"'+(k===k0?' checked':'')+'><span>'+CATS[k].n+'</span></label>'}).join('')+'</div><label class="lf"><span>Título</span><input class="in" id="ft" required maxlength="120" placeholder="'+C.ph+'"></label><div class="two" id="dtw"><label class="lf"><span id="dl">'+C.dl+'</span><input class="in" type="date" id="fd" required></label><label class="lf" id="tm"><span>Horário (opcional)</span><input class="in" type="time" id="fh"></label></div><label class="lf"><span>Observação (opcional)</span><input class="in" id="fn" maxlength="200" placeholder="Algum detalhe importante"></label><label class="chk" id="rp"><input type="checkbox" id="fr" checked> Repete todo mês neste dia</label><button class="pill sm" type="submit">Adicionar</button></form>'}
function cs(){var c=document.querySelector('input[name=fc]:checked').value,C=CATS[c],b=c==='contas';g('mt').textContent=C.nw;g('ft').placeholder=C.ph;g('dl').textContent=C.dl;g('tm').style.display=b?'none':'';g('rp').style.display=b?'':'none';g('dtw').className='two'+(b?' one':'')}
function openAdd(b,d,h){var m=g('md');if(h)m.innerHTML=h;else if(gm())m.innerHTML=goalForm();else{m.innerHTML=addForm();g('fd').value=d||sel||ymd(new Date());cs()}var r=b.getBoundingClientRect();b.classList.add('go');setTimeout(function(){b.classList.remove('go')},800);g('mw').classList.add('on');m.style.transformOrigin=(r.left+r.width/2-m.offsetLeft)+'px '+(Math.max(0,Math.min(r.top+r.height/2,innerHeight))-m.offsetTop)+'px';setTimeout(function(){var t=g('ft');if(t)t.focus()},500)}
function closeAdd(){g('mw').classList.remove('on')}
async function add(e){e.preventDefault();var c=document.querySelector('input[name=fc]:checked').value,d=g('fd').value,t=g('ft').value.trim();if(!t||!d)return false;
await DB.items.create(me.email,{id:uid(),cat:c,title:t,date:d,time:c==='contas'?'':g('fh').value,note:g('fn').value.trim(),rec:c==='contas'&&g('fr').checked,done:false,paid:[],createdAt:new Date().toISOString()});
items=await DB.items.list(me.email);closeAdd();cm=new Date(d+'T12:00');cm.setDate(1);refresh();toast(CATS[c].n+': item adicionado');return false}
function toast(s){var t=g('tip');t.textContent=s;t.style.left='50%';t.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('on')},1800)}

function dock(){g('dock').innerHTML=TABS.map(function(t){return '<button class="tb'+(t===tab?' on':'')+'" onclick="go(\''+t+'\',this)" aria-label="'+TN[t]+'" aria-current="'+(t===tab)+'">'+ic(I[t])+'<span class="tp">'+TN[t]+'</span></button>'}).join('')}
function tip(s,b){var r=b.getBoundingClientRect(),t=g('tip');t.textContent=s;t.style.left=Math.min(Math.max(r.left+r.width/2,64),innerWidth-64)+'px';t.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('on')},1500)}
function go(t,b){if(innerWidth<768)tip(TN[t],b);if(t!==tab){tab=t;sel=null;render();window.scrollTo(0,0)}}
function render(){var a=g('app');g('gnav').style.display=view==='app'?'':'none';
if(view!=='app'){a.innerHTML=auth();authVideo();return}
var G=tab==='geral';
a.innerHTML='<div class="wrap"><header class="top"><img class="logo" src="'+LOGO+'" alt="Hesperon"><div class="hb">'+(G?'':'<button class="add" id="ab" onclick="openAdd(this)" aria-label="Adicionar">'+ic(I.plus)+'</button>')+'</div></header><div class="view '+(G?'g':'c')+'"><div class="hero" id="hero">'+hero()+'</div>'+(G?'<div class="mn" id="mn"></div><div id="st"></div><div id="cal"></div><div id="day"></div><div id="lst"></div>':'<div id="lst"></div><div class="mn" id="mn"></div><div id="cal"></div><div id="day"></div>')+'</div></div>';refresh();dock()}

/* login e cadastro */
var AU={us:'M12 12.2a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2Zm0 2.3c-4.1 0-8 2-8 4.7V21h16v-1.8c0-2.7-3.9-4.7-8-4.7Z',ml:'M4.5 4.5h15A2.5 2.5 0 0 1 22 7v10a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17V7a2.5 2.5 0 0 1 2.5-2.5Zm-.1 2.1 7.6 5.3 7.6-5.3a.5.5 0 0 0-.1-.1h-15a.5.5 0 0 0-.1.1Z',lk:'M17 9V7.2a5 5 0 0 0-10 0V9H5.5A1.5 1.5 0 0 0 4 10.5v9A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 18.5 9H17ZM9 7.2a3 3 0 0 1 6 0V9H9V7.2Zm4 8.8v2h-2v-2a1.7 1.7 0 1 1 2 0Z'};
function fl(k,id,ph,type,ac,x){return '<div class="au-field"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="'+AU[k]+'"/></svg><input id="'+id+'" type="'+type+'" placeholder="'+ph+'" autocomplete="'+ac+'" autocapitalize="none" spellcheck="false">'+(x||'')+'</div>'}
function auth(){
var CK='<label class="au-check"><input type="checkbox" id="lr"><span class="box"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Lembrar de mim</label>';
var BUB=['b1','b2','b3','b4','b5','b6','b7','b8','b9'].map(function(c){return '<span class="'+c+'"></span>'}).join('');
return '<div class="auth" id="auth"><div class="au-stage"><div class="au-bubbles" aria-hidden="true">'+BUB+'</div>'
+'<a class="au-logo" href="#" onclick="show(\'login\');return false" aria-label="Hesperon"><img src="'+LOGO+'" alt="Hesperon"></a>'
+'<div class="au-col">'
+'<section class="au-pane" id="pane-login"'+(view==='reg'?' hidden':'')+'><h1>Bem-vindo de volta!</h1><p class="au-lead">Faça login para continuar</p>'
+'<form novalidate onsubmit="return login(event)">'+fl('us','le','E-mail ou usuário','text','username')+fl('lk','lp','Senha','password','current-password',EYE('lp'))+'<div class="au-row">'+CK+'</div><p class="au-msg" role="alert" aria-live="polite"></p><button class="au-btn" type="submit">Entrar</button></form>'
+'<div class="au-divider">ou</div><p class="au-switch">Não tem uma conta? <a href="#" onclick="show(\'reg\');return false">Cadastre-se</a></p></section>'
+'<section class="au-pane" id="pane-reg"'+(view==='reg'?'':' hidden')+'><h1>Crie sua conta</h1><p class="au-lead">Leva menos de um minuto</p>'
+'<form novalidate onsubmit="return reg(event)">'+fl('us','rn','Apelido','text','nickname')+fl('ml','re','E-mail','email','email')+fl('lk','rp','Senha (mín. 6 caracteres)','password','new-password',EYE('rp'))+fl('lk','rc','Confirmar senha','password','new-password',EYE('rc'))+'<p class="au-msg" role="alert" aria-live="polite"></p><button class="au-btn" type="submit">Criar conta</button></form>'
+'<div class="au-divider">ou</div><p class="au-switch">Já tem uma conta? <a href="#" onclick="show(\'login\');return false">Entrar</a></p></section>'
+'</div><div class="au-media"><video muted loop playsinline preload="none" poster="'+POSTER+'" aria-hidden="true"></video></div></div></div>'}
/* vídeo só em telas largas: o arquivo só é baixado quando precisa (no celular nem é pedido) */
var mqW=window.matchMedia('(min-width:901px)');
function authVideo(){var v=document.querySelector('.au-media video');if(!v)return;
if(mqW.matches){if(!v.getAttribute('src'))v.src=VIDEO;var pr=v.play();if(pr&&pr.catch)pr.catch(function(){})}else v.pause()}
if(mqW.addEventListener)mqW.addEventListener('change',authVideo);
function show(m){view=m;var pl=g('pane-login'),pr=g('pane-reg');
if(pl&&pr&&(m==='login'||m==='reg')){pl.hidden=m!=='login';pr.hidden=m!=='reg';document.querySelectorAll('.au-msg').forEach(function(x){x.textContent=''});document.querySelectorAll('.au-field input').forEach(function(x){x.removeAttribute('aria-invalid')})}else render()}
function eye(id,b){var i=g(id),on=i.type==='password';i.type=on?'text':'password';if(b){b.setAttribute('aria-pressed',on);b.setAttribute('aria-label',on?'Ocultar senha':'Mostrar senha')}}
function okm(m){var p=document.querySelector('.au-pane:not([hidden])');if(!p)return;var q=p.querySelector('.au-msg');q.textContent=m;q.className='au-msg ok'}
function bad(m){var p=document.querySelector('.au-pane:not([hidden])');if(!p)return;var q=p.querySelector('.au-msg');q.textContent=m;q.className='au-msg err';p.querySelectorAll('.au-field input').forEach(function(i){i.setAttribute('aria-invalid','true')})}
async function login(e){e.preventDefault();var b=e.target.querySelector('.au-btn');b.disabled=true;try{var rm2=g('lr').checked,u=await DB.users.signIn(g('le').value,g('lp').value,rm2);await enter(u,rm2)}catch(x){bad(x.message)}b.disabled=false;return false}
async function reg(e){e.preventDefault();var n=g('rn').value.trim(),v=g('re').value.trim().toLowerCase(),pw=g('rp').value,m='';if(pw!==g('rc').value)m='As senhas não coincidem.';
if(!n)m='Digite um apelido.';else if(!/^\S+@\S+\.\S+$/.test(v))m='Digite um e-mail válido.';else if(pw.length<6)m='A senha precisa de 6 caracteres ou mais.';
var r=null;if(!m){try{r=await DB.users.create(n,v,pw)}catch(x){m=x.message}}
if(m){bad(m);return false}
if(r.confirm){show('login');okm('Conta criada! Enviamos um link de confirmação para o seu e-mail.');return false}
try{await enter(r.user,true)}catch(x){bad(x.message)}return false}
async function enter(u,rem){me=u;remember=rem;items=await DB.items.list(u.email);goals=await DB.goals.list(u.email);dsec='itens';view='app';tab='geral';sel=null;render()}
async function lo(){try{await DB.session.clear()}catch(x){}closeSheet();me=null;items=[];goals=[];view='login';render()}

/* configurações */
function openSheet(){sv='';sheet();g('shw').classList.add('on')}
function closeSheet(){g('shw').classList.remove('on')}
function bg(e){if(e.target===g('shw'))closeSheet()}
var sv='';
function sub(k){sv=k;sheet()}
function r2(ico,col,lab,val,act,cls){return '<button class="sr '+(cls||'')+'" onclick="'+act+'"><span class="si" style="background:'+col+'1f;color:'+col+'">'+ic(ico)+'</span><span class="sl">'+lab+'</span><span class="sv">'+esc(val||'')+'</span>'+(act==='lo()'?'':ic(I.ch))+'</button>'}
function sheet(){var T={nick:'Apelido',mail:'E-mail',pw:'Alterar senha',del:'Excluir conta'},b,pw=function(id,ph){return '<input class="in" id="'+id+'" type="password" placeholder="'+ph+'" autocomplete="current-password">'};
if(!sv)b='<div class="av">'+esc(me.nick.charAt(0).toUpperCase())+'</div><h2 class="nm">'+esc(me.nick)+'</h2><p class="em">'+esc(me.email)+'</p><p class="gl">Preferências</p><div class="grp">'+r2(I.th,'#9b51e0','Tema',TL[pref],'cyc()')+'</div><p class="gl">Conta</p><div class="grp">'+r2(I.us,'#c2570c','Apelido',me.nick,"sub('nick')")+r2(I.ml,'#4f46e5','E-mail',me.email,"sub('mail')")+r2(I.lk,'#1f9d4d','Alterar senha','',"sub('pw')")+'</div><div class="grp" style="margin-top:20px">'+r2(I.lo,'#6e6e73','Sair da conta','','lo()')+'</div><div class="grp" style="margin-top:16px">'+r2(I.tr,'#d70015','Excluir conta','',"sub('del')",'red')+'</div>';
else{b=sv==='nick'?'<input class="in" id="n1" value="'+esc(me.nick)+'" maxlength="30" placeholder="Seu apelido">':sv==='mail'?'<input class="in" id="n1" type="email" value="'+esc(me.email)+'" placeholder="Novo e-mail">':sv==='pw'?pw('p0','Senha atual')+pw('p1','Nova senha (mín. 6 caracteres)'):'<p class="hint">Isso apaga sua conta e todos os seus dados. Não dá para desfazer.</p>'+pw('p0','Digite sua senha para confirmar');
b='<div class="sp">'+b+'<p class="err" id="se" role="alert"></p><button class="pill sm'+(sv==='del'?' red':'')+'" onclick="ok()">'+(sv==='del'?'Excluir conta':'Salvar')+'</button></div>'}
g('sh').innerHTML='<div class="hd"></div><div class="shh">'+(sv?'<button class="xb" onclick="sub(\'\')" aria-label="Voltar">'+ic(I.bk)+'</button>':'<span></span>')+'<strong>'+(sv?T[sv]:'Configurações')+'</strong><button class="xb" onclick="closeSheet()" aria-label="Fechar">'+ic(I.x)+'</button></div><div class="shb">'+b+'</div>'}
async function ok(){var e='',n=g('n1'),a=n?n.value.trim():'',p0=g('p0')?g('p0').value:'',p1=g('p1')?g('p1').value:'';
try{
if(sv==='nick'){if(!a)e='Digite um apelido.';else{await DB.users.setNick(me.email,a);me.nick=a}}
else if(sv==='mail'){var v=a.toLowerCase();if(!/^\S+@\S+\.\S+$/.test(v))e='Digite um e-mail válido.';else if(v!==me.email){var rr=await DB.users.setEmail(me.email,v);if(rr.pending){sv='';sheet();toast('Enviamos um link de confirmação para o novo e-mail.');return}me.email=v}}
else if(sv==='pw'){if(!(await DB.users.verify(me.email,p0)))e='Senha atual incorreta.';else if(p1.length<6)e='A nova senha precisa de 6 caracteres ou mais.';else await DB.users.setPass(me.email,p1)}
else if(sv==='del'){if(!(await DB.users.verify(me.email,p0)))e='Senha incorreta.';else{await DB.users.remove(me.email);lo();return}}
}catch(x){e=x.message}
if(e){g('se').textContent=e;return}sv='';sheet();render()}

document.addEventListener('input',function(e){var f=e.target.closest&&e.target.closest('.au-field');if(f){var p=f.closest('.au-pane');p.querySelectorAll('.au-field input').forEach(function(i){i.removeAttribute('aria-invalid')});p.querySelector('.au-msg').textContent=''}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeSheet();closeAdd()}});
applyT();
g('gmk').src=MARK;g('gear').innerHTML=ic(I.gear);
/* guarda contra falhas de rede/banco nas ações do usuário */
function guard(fn){return async function(){try{return await fn.apply(this,arguments)}catch(x){console.error(x);toast(x&&x.pt?x.message:'Não foi possível salvar. Tente de novo.')}}}
['tg','rm','add','addGoal','addStep','stg','srm','grm'].forEach(function(n){window[n]=guard(window[n])});
/* se a sessão acabar em outra aba, volta para o login */
DB.session.onSignOut(function(){if(view==='app'){me=null;items=[];goals=[];closeSheet();closeAdd();view='login';render()}});
/* início */
(async function(){
if(!DB.session.has()){render();return}
g('gnav').style.display='none';g('app').innerHTML='<div class="boot" aria-label="Carregando"><i></i></div>';
var u=null;try{u=await DB.users.current()}catch(x){}
if(!u){render();return}
try{await enter(u,DB.session.remember())}catch(x){console.error(x);view='login';render()}
})();

