class LoginPage {
    //GETTERS - só localizam o elemento, sem ação nenhuma
    inputUsername() {
        return cy.get('[data-test="username"]');
    }

    inputPassword() {
        return cy.get('[data-test="password"]');
    }

    buttonLogin() {
        return cy.get('[data-test="login-button"]')
    }

    ErrorMessage() {
        return cy.get('[data-test="error"]');
    }

    //Ações - Usam os getters acima, cada um faz uma coisa
    digitaUsername(username) {
        this.inputUsername().type(username)
    }

    digitaPassword(password){
        this.inputPassword().type(password)
    }

    clicaBotaoLogin(){
        this.buttonLogin().click()
    }

    logaSistema(username, password) {
        this.digitaUsername(username);
        this.digitaPassword(password);
        this.clicaBotaoLogin();
    }

    limpaCampos(){
        this.inputUsername().clear()
        this.inputPassword().clear()
        this.clicaBotaoLogin()
    }
}

export default new LoginPage();