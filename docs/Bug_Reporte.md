## BUG-001 — Botão "Remove" não funciona no carrinho para error_user

**Ambiente:** Chrome 12x, https://www.saucedemo.com
**Usuário de teste:** error_user / secret_sauce
**Severidade:** Alta
**Prioridade:** Alta
**Status:** Aberto

### Passos para reproduzir:
1. Fazer login com error_user
2. Adicionar qualquer produto ao carrinho
3. Ir para a página do carrinho ("Your Cart")
4. Clicar no botão "Remove" do item adicionado

### Resultado esperado:
O item deveria ser removido do carrinho e o contador atualizado.

### Resultado obtido:
O botão não responde ao clique. O item permanece no carrinho.

### Evidência:
[anexar screenshot ou vídeo aqui — use docs/images/, como já configuramos]

### Observação adicional:
Testado 5x, consistente em 100% das tentativas. Não ocorre com standard_user 
no mesmo fluxo, confirmando que é específico da conta error_user.