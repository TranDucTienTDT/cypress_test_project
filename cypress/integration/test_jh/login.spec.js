describe('My Login to Talent Partner Test', () => {
    it('Visit login Talent Partner page with valid account', () => {
        cy.visit('/')
        cy.url().should('include', '/login')
        
    })
  })