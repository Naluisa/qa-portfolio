/// <reference types="cypress" />
import LoginPage from "./pages/LoginPage"

describe('Login - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('deve logar com sucesso usando standard_user', () => {

        LoginPage.logaSistema('standard_user', 'secret_sauce')

        cy.url().should('include', '/inventory.html')
    })

    it('deve bloquear login de locked_out_user', () => {

        LoginPage.logaSistema('locked_out_user', 'secret_sauce')

        LoginPage.ErrorMessage().should('contain.text', 'Sorry, this user has been locked out')
    })

    it('deve exigir preenchimento do username', () => {

        LoginPage.digitaPassword('secret_sauce');
        LoginPage.clicaBotaoLogin()

        LoginPage.ErrorMessage().should('contain.text', 'Username is required')
    })

    it('deve exigir preenchimento do password', () => {

        LoginPage.digitaUsername('standard_user')
        LoginPage.clicaBotaoLogin()

        LoginPage.ErrorMessage().should('contain.text', 'Password is required')
    })

    it('Login com usuario problem_user', () => {
        LoginPage.logaSistema('problem_user', 'secret_sauce')

        cy.url().should('include', '/inventory')
    })

    it('Login com usuario performance_glitch_user', () => {

        const inicio = Date.now() //Captura o tempo antes do login
        LoginPage.logaSistema('performance_glitch_user', 'secret_sauce')

        cy.url().should('include', '/inventory')

        const fim = Date.now() //Captura o tempo depois do login

        const tempoTotal = fim - inicio //Calcula o tempo total entre o tempo de inicio e fim

        cy.log(`Tempo de login: ${tempoTotal} ms`)

    })

    it('Login com usuario error_user', () => {
        LoginPage.logaSistema('error_user', 'secret_sauce')

        cy.url().should('include', '/inventory')
    })

    it('Login com usuario visual_user', () => {
        LoginPage.logaSistema('visual_user', 'secret_sauce')

        cy.url().should('include', '/inventory')
    })

    it('Login com usuario inexistente', () => {
        LoginPage.logaSistema('asdf', 'fdsa')

        LoginPage.ErrorMessage().should('contain.text', 'Username and password do not match any user in this service')
    })

    it('Login com senha errada e usuário válido', () => {
        LoginPage.logaSistema('standard_user', 'fdsa')

        LoginPage.ErrorMessage().should('contain.text', 'Username and password do not match any user in this service')
    })

    it('Login com campos vazios', () => {
        LoginPage.limpaCampos()

        LoginPage.ErrorMessage().should('contain.text', 'Username is required')
    })
})