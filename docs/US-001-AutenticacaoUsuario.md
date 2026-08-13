## US-001 — Autenticação de usuário

**Como** usuário do sistema SauceDemo
**Eu quero** fazer login com minhas credenciais
**Para que** eu possa acessar o catálogo de produtos e realizar compras

### Critérios de Aceite (Gherkin)

Cenário: Login com credenciais válidas
  Dado que estou na página de login
  Quando eu preencho "Username" com um usuário válido
  E preencho "Password" com "secret_sauce"
  E clico em "Login"
  Então devo ser redirecionado para a página de produtos

Cenário: Login com usuário bloqueado
  Dado que estou na página de login
  Quando eu preencho "Username" com "locked_out_user"
  E preencho "Password" com "secret_sauce"
  E clico em "Login"
  Então devo ver a mensagem "Epic sadface: Sorry, this user has been locked out."
  E devo permanecer na página de login

Cenário: Login com campo obrigatório vazio
  Dado que estou na página de login
  Quando eu deixo o campo "Username" vazio
  E clico em "Login"
  Então devo ver a mensagem "Epic sadface: Username is required"

Cenário: Tentativa de acesso direto sem autenticação
  Dado que não estou autenticado
  Quando eu acesso a URL "/inventory.html" diretamente
  Então devo ser redirecionado para a página de login
  E devo ver uma mensagem de erro

### Regras de Negócio
- RN01: A senha é a mesma (`secret_sauce`) para todos os usuários de teste
- RN02: O sistema não diferencia usuário inexistente de senha errada na mensagem 
  de erro — isso é padrão de segurança (evita enumeração de usuários), não lacuna
- RN03: Não existe recuperação de senha implementada neste sistema

### Definição de Pronto (DoD)
- [ ] Todos os cenários acima cobertos por teste automatizado
- [ ] Bug reports abertos para qualquer divergência encontrada
- [ ] Documentação revisada por outro QA/dev