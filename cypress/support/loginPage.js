const locators = {
    EMAIL: '#P9999_USERNAME',
    PASSWORD: '#P9999_PASSWORD',
    LOGIN_BUTTON: 'div.t-Login-buttons > button',
    USERNAME_MENU_BUTTON: 'li[class="t-NavigationBar-item has-username"] > button > span.t-Button-label',
    ORDER_TABLE: 'table[role="presentation"] > tbody'
}

Cypress.Commands.add('loginApplication', function (username) {
    cy.fixture('login').as('loginJson').then(() => {
        cy.visitUrl('https://apex.oracle.com/pls/apex/r/faioli/qa-application')
        cy.inputValue(locators.EMAIL, this.loginJson.email)
        cy.inputValue(locators.PASSWORD, this.loginJson.senha)
        cy.clickElement(locators.LOGIN_BUTTON)
        cy.checkElementHasText(locators.USERNAME_MENU_BUTTON, username)
        cy.get(locators.ORDER_TABLE).waitForAllElements(10000)
        cy.wait(1000)
    })
})