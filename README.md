# Hesperon

Site estático (HTML + CSS + JavaScript) com banco e login no Supabase, pronto para a Vercel.

## Estrutura

    index.html          página
    css/style.css       estilos
    js/config.js        URL e chave do Supabase (edite este)
    js/db.js            acesso ao banco (Supabase)
    js/app.js           lógica do site
    vendor/             biblioteca do Supabase (hospedada junto, sem CDN)
    assets/             logo, ícones, imagem e vídeo
    vercel.json         cache e cabeçalhos de segurança

## 1. Banco (Supabase)

1. Crie um projeto em supabase.com.
2. Abra **SQL Editor > New query**, cole o conteúdo de `hesperon-supabase.sql` e clique em **Run**.
3. Em **Project Settings > API**, copie a **Project URL** e a chave **anon / publishable**.
4. Cole os dois valores em `js/config.js`. Nunca use a chave `service_role` / `secret`.
5. Em **Authentication > Providers > Email**:
   - Com **Confirm email** desligado, quem se cadastra entra na hora.
   - Com ele ligado, o usuário precisa clicar no link do e-mail antes de entrar.
6. Depois do deploy, em **Authentication > URL Configuration**, ponha o endereço da Vercel em **Site URL** e em **Redirect URLs**.

## 2. Deploy (Vercel)

- **Pelo GitHub:** suba esta pasta para um repositório, importe na Vercel, deixe *Framework Preset: Other* e sem comando de build.
- **Pelo terminal:** dentro da pasta, rode `npx vercel` e depois `npx vercel --prod`.

## Testar no computador

    npx serve .

## Observações

- A chave anon é pública por natureza. Quem protege os dados são as regras RLS do SQL: cada pessoa só vê o que é dela.
- Entrar com apelido funciona por uma função do banco que devolve o e-mail daquele apelido. Se não quiser isso, remova a função `email_for_login` do SQL e o campo passa a aceitar só e-mail.
- Os dados antigos salvos no navegador (versão de arquivo único) não são migrados: as contas passam a ser criadas no Supabase.
- Se trocar um arquivo de `css/` ou `js/`, o navegador pode levar até 1 hora para pegar a versão nova (cache configurado no `vercel.json`).
