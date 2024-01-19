// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('visitUrl', (URL) => {
    cy.visit(URL)
})

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).click()
})

Cypress.Commands.add('clickElementHasText', (element, text) => {
    cy.contains(element, text).click()
})

Cypress.Commands.add('inputValue', (element, text) => {
    cy.get(element).should('be.visible').clear()
    cy.get(element).should('be.visible').type(text).should('have.value', text)
})

Cypress.Commands.add('inputText', (element, text) => {
    cy.get(element).should('be.visible').type(text)
})

Cypress.Commands.add('doubleClick', (element) => {
    cy.get(element).should('be.visible', { timeout: 10000 }).dblclick();
})

Cypress.Commands.add('waitForAllElements', { prevSubject: 'element' }, (tbodyElement, timeout = 5000) => {
    cy.wrap(tbodyElement, { timeout }).find('tr').should('have.length.gt', 0).each(($row) => {
        cy.wrap($row).should('be.visible');
    })
})

Cypress.Commands.add('checkElementHasText', (element, text) => {
    cy.get(element, { timeout: 10000 }).should('have.text', text)
})
