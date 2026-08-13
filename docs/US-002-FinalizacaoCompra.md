## US-002 — Finalização de compra (Checkout)

**Como** usuário autenticado com itens no carrinho
**Eu quero** finalizar minha compra informando meus dados
**Para que** eu receba a confirmação do pedido

### Critérios de Aceite (Gherkin)

Cenário: Checkout completo com sucesso
  Dado que tenho pelo menos 1 item no carrinho
  E estou na página "Your Cart"
  Quando clico em "Checkout"
  E preencho "First Name", "Last Name" e "Zip/Postal Code"
  E clico em "Continue"
  Então devo ver a página "Overview" com o resumo do pedido
  Quando clico em "Finish"
  Então devo ver a mensagem "Thank you for your order!"
  E o carrinho deve estar vazio

Cenário: Checkout com campo obrigatório vazio
  Dado que estou na página "Checkout: Your Information"
  Quando deixo o campo "First Name" vazio
  E clico em "Continue"
  Então devo ver a mensagem "Error: First Name is required"
  E não devo avançar para a página "Overview"

Cenário: Cancelar checkout na etapa de informações
  Dado que estou na página "Checkout: Your Information"
  Quando clico em "Cancel"
  Então devo retornar para a página "Your Cart"

Cenário: Cancelar checkout na etapa de overview
  Dado que estou na página "Checkout: Overview"
  Quando clico em "Cancel"
  Então devo retornar para a página de produtos (Inventory)
  E os itens devem permanecer no carrinho

### Regras de Negócio
- RN04: O total exibido = soma dos preços dos itens + taxa (tax), calculada automaticamente
- RN05: O sistema não valida formato dos campos (aceita números em "First Name") 
  — comportamento conhecido, não bug
- RN06: "Cancel" na etapa 1 e na etapa 2 têm destinos DIFERENTES — ponto de 
  atenção documentado para evitar falso bug report

### Definição de Pronto (DoD)
- [ ] Todos os cenários cobertos por teste automatizado (Parte 6)
- [ ] Cálculo de tax/total validado com massa de dados variada
- [ ] RN06 documentada explicitamente para o time, por ser contraintuitiva