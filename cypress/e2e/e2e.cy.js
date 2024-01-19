/// <reference types = "cypress"/>

describe('Testes automatizados end to end para entrevista Optimizer', () => {
    beforeEach(() => {
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })

    it('Oracle Retail Customer Value - JS/Cypress', () => {
        cy.loginApplication('ISRAFAIOLI@GMAIL.COM')
        cy.clickOrderFilter()
        cy.filterOrder('10')
        cy.changeOrderQuantity('10')
        cy.wait(3000)
        cy.changeOrderCustomer('Deli')
        cy.wait(2000)
        cy.GetAndSaveGraphValuesBefore()
        cy.clickOrderFilter()
        cy.filterOrder('10')
        cy.changeOrderQuantity('20')
        cy.wait(5000)
        cy.GetAndSaveGraphValuesAfter()
        cy.compareGraphValues()
    })
})