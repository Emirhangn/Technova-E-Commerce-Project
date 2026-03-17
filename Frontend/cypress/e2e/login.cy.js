describe('Technovo E-Ticaret Sistemi', () => {

  it('Kullanıcı başarıyla giriş yapıp ana sayfaya yönlendirilmeli', () => {

    cy.visit('http://localhost:5173/auth')

    cy.get('input[type="email"]').type('test@test.com')

    cy.get('input[type="password"]').type('123')

    cy.contains('Sign In').click()

    cy.url().should('eq', 'http://localhost:5173/')

    cy.contains('Log Out').click()

    cy.visit('http://localhost:5173/auth')

    cy.get('input[type="email"]').type('admin@example.com')

    cy.get('input[type="password"]').type('123')

    cy.contains('Sign In').click()

    cy.url().should('include', '/auth')
    
  })

})