describe('Products page', () => {
    it('Filters products list', () => {
      cy.visit('http://localhost:8080')
   
      cy.get('.column.is-12-mobile.is-6-tablet.is-4-desktop').should('have.length', 13)

      cy.get('input').type('Pantalon Bicolor')
      cy.get('.column.is-12-mobile.is-6-tablet.is-4-desktop').should('have.length', 1)

      cy.get('input').clear().type('Sweater')
      cy.get('.column.is-12-mobile.is-6-tablet.is-4-desktop').should('have.length', 4)
    })

    it('Añade productos al Carrito', () => {
        cy.visit('http://localhost:8080')
        cy.get('input').clear()
        cy.get('.card button.is-pulled-right').first().click()
        cy.get('.navbar-burger').click()
        cy.get('span.tag.has-background-grey-dark').contains('1')
    })
    it('Elimina productos del Carrito', () => {
        cy.visit('http://localhost:8080')
        cy.get('.card button.is-pulled-right').first().click()
        cy.get('.navbar-burger').click()
        cy.get('[data-testId="cart"]').click()
        cy.get('.modal-card-body').find('div.card-content').should('have.length',1)
        cy.get('.modal-card-body').find('button.has-background-danger.has-text-white.is-small').click()
        cy.get('.modal-card-body').find('div.card-content').should('have.length', 0)
    })


})