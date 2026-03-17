describe('Sepet (Cart) Akışı Testleri', () => {

  it('Müşteri ürünü sepete ekleyip, ardından sepetten silebilmeli', () => {
    
    cy.visit('http://localhost:5173/')

    cy.contains('Add to Cart').first().click()

    cy.get('nav').contains('1').should('be.visible').click()

    cy.contains('Your Cart (1 Items)').should('be.visible')

    cy.contains('Proceed to Checkout').should('be.visible')

    cy.get('button.text-red-400').click()

    cy.contains('Your cart is empty.').should('be.visible')

    cy.get('nav').should('not.contain', '1')
    
  })

})