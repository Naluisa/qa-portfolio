## CT-003 — Checkout com campo First Name vazio

**Pré-condição:** Login com standard_user, 1 item no carrinho, na tela 
"Checkout: Your Information"

**Passos:**
1. Deixar "First Name" vazio
2. Preencher "Last Name" e "Zip Code" normalmente
3. Clicar em "Continue"

**Resultado esperado:**
- Mensagem de erro: "Error: First Name is required"
- Não avança para a tela "Overview"

**Prioridade:** Alta
**Técnica aplicada:** Partição de Equivalência (partição "campo obrigatório vazio")