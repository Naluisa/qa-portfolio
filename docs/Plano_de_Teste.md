# Plano de Teste — SauceDemo E-commerce

## 1. Objetivo
Validar o fluxo de autenticação, navegação de produtos, carrinho de compras 
e checkout do sistema SauceDemo, garantindo que os principais fluxos de 
usuário funcionem conforme esperado e identificando defeitos de UI e de 
regras de negócio.

## 2. Escopo
### Dentro do escopo:
- Login e autenticação (usuários válidos, inválidos, bloqueados)
- Listagem e ordenação de produtos
- Adição/remoção de itens no carrinho
- Fluxo de checkout (informações do cliente, revisão, finalização)
- Logout

### Fora do escopo:
- Testes de carga em produção (feito à parte, ver Parte 11)
- Testes de penetração completos (ver checklist OWASP, Parte 12)
- Integração com gateway de pagamento real (o site é uma simulação)

## 3. Estratégia de Teste
- Teste manual exploratório inicial (reconhecimento)
- Testes funcionais baseados em casos de teste formais
- Testes de regressão após cada rodada de automação (Parte 6)

## 4. Critérios de Entrada
- Ambiente saucedemo.com acessível
- Casos de teste revisados e aprovados

## 5. Critérios de Saída
- 100% dos casos de teste críticos executados
- Nenhum bug de severidade crítica/alta em aberto sem justificativa
- Taxa de aprovação mínima de 90% nos casos de teste totais

## 6. Ambiente de Teste
- URL: https://www.saucedemo.com
- Navegadores: Chrome (principal), Firefox (secundário)
- Usuários de teste: standard_user, locked_out_user, problem_user, 
  performance_glitch_user, error_user, visual_user

  ## 7. Riscos
| Risco | Impacto | Mitigação |
|---|---|---|
| Site de terceiros pode sofrer mudanças sem aviso | Médio | Revalidar casos de teste periodicamente |
| Comportamentos "bugados" propositais podem ser confundidos com falha real | Alto | Documentar comportamento esperado de cada usuário de teste |