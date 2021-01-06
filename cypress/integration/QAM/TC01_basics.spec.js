describe('Login',function () {
    it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/login?_k=xny21f')
        cy.get('input[type=\'email\']')
            .type('akira@gmail.com')
        cy.get('input[type=\'password\']')
            .type('portugal01')
        cy.get('.btn').contains('Sign in')
            .click()
    });
})