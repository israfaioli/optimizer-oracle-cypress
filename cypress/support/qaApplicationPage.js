const locators = {
    ORDER_FILTER_BUTTON: 'th[role="columnheader"] > span',
    ORDER_FILTER_INPUT: 'div.a-IRR-sortWidget-search > input',
    ORDER_QUANTITY_INPUT: 'tbody > tr > td:nth-child(5)',
    ORDER_CUSTOMER_INPUT: 'tbody > tr > td:nth-child(6)',
    ORDER_CUSTOMER_BUTTON: 'tbody > tr > td:nth-child(6) > div > div > button',
    SEARCH_CUSTOMER_INPUT: 'div.a-PopupLOV-searchBar > input',
    SEARCH_CUSTOMER_BUTTON: 'div.a-PopupLOV-searchBar > button'
}

Cypress.Commands.add('clickOrderFilter', () => {
    cy.clickElementHasText(locators.ORDER_FILTER_BUTTON, 'Order')
    cy.get('div > a[data-return-value]').should('be.visible', { timeout: 5000 })
})

Cypress.Commands.add('filterOrder', (order) => {
    cy.inputValue(locators.ORDER_FILTER_INPUT, order)
    cy.clickElementHasText('div > a[data-return-value]', order)
    cy.wait(2000)
})

Cypress.Commands.add('changeOrderQuantity', (quantity) => {
    cy.doubleClick(locators.ORDER_QUANTITY_INPUT)
    cy.inputText(locators.ORDER_QUANTITY_INPUT, quantity)
    cy.clickElement(locators.ORDER_CUSTOMER_INPUT)
    cy.clickElementHasText('button', 'Save')
    cy.wait(2000)
    cy.checkElementHasText(locators.ORDER_QUANTITY_INPUT, quantity)
})

Cypress.Commands.add('changeOrderCustomer', (customer) => {
    cy.doubleClick(locators.ORDER_CUSTOMER_INPUT)
    cy.clickElement(locators.ORDER_CUSTOMER_BUTTON)
    cy.searchCustomer(customer)
    cy.clickElementHasText('button', 'Save')
    cy.wait(2000)
    cy.checkElementHasText(locators.ORDER_CUSTOMER_INPUT, customer)
})

Cypress.Commands.add('searchCustomer', (customer) => {
    cy.inputText(locators.SEARCH_CUSTOMER_INPUT, customer)
    cy.clickElement(locators.SEARCH_CUSTOMER_BUTTON)
    cy.clickElementHasText('div[class="a-PopupLOV-results a-TMV"] > div > div:nth-child(3) > ul > li', customer)

})

Cypress.Commands.add('GetAndSaveGraphValuesBefore', () => {
    const beforeValue = [];

    cy.get('#R65063055755571431993_jet')
        .find('polygon')
        .each(($polygon) => {
            const points = $polygon.attr('points');
            const values = points.split(' ').map((ponto) => parseFloat(ponto));
            beforeValue.push(values);
        })
        .then(() => {
            cy.wrap(beforeValue).as('beforeValue')
        })
})

Cypress.Commands.add('GetAndSaveGraphValuesAfter', () => {
    const afterValue = [];

    cy.get('#R65063055755571431993_jet') // Use o seletor apropriado para o seu elemento gráfico
        .find('polygon')
        .each(($polygon) => {
            const points = $polygon.attr('points');
            const values = points.split(' ').map((ponto) => parseFloat(ponto));
            afterValue.push(values);
        })
        .then(() => {
            cy.wrap(afterValue).as('afterValue')
        })
})

Cypress.Commands.add('compareGraphValues', () => {
    cy.get('@beforeValue').then((beforeValue) => {
        cy.get('@afterValue').then((afterValue) => {
            expect(beforeValue).to.not.deep.equal(afterValue)
        })
    })
})