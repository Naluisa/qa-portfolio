## CT-001 — Login com usuário bloqueado

**Pré-condição:** Estar na página https://www.saucedemo.com (deslogado)

**Passos:**
1. Preencher o campo "Username" com `locked_out_user`
2. Preencher o campo "Password" com `secret_sauce`
3. Clicar no botão "Login"

**Resultado esperado:**
- O sistema não permite o login
- Mensagem de erro exibida: "Epic sadface: Sorry, this user has been locked out."
- Usuário permanece na tela de login

**Prioridade:** Alta
**Técnica aplicada:** Partição de Equivalência (partição "usuário inválido/bloqueado")