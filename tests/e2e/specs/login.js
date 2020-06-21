describe('Login', () => {
    it('Redirecciona al home si el login es exitoso', ()=> {
        cy.visit('http://localhost:8080/login')
        cy.get('#email').type('rocio.agurto1986@gmail.com')
        cy.get('#password').type('rocio1986')
        cy.get('.button.has-background-warning-dark').click()
        cy.get('.navbar-burger').click()
        cy.get('.usuario').contains('Hola!')
    })
})