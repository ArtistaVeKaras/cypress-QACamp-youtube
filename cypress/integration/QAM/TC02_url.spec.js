describe('Create and mark unmark favorites',function () {
    it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/login?_k=xny21f')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('input[type=\'email\']').type('akira@gmail.com')
        cy.get('input[type=\'password\']').type('portugal01')
        cy.get('.btn').contains('Sign in').click()
        cy.contains('Your Feed',{timeout: 1000}).should('be.visible')
    })
    
    it('Create a post', function () {
        cy.contains("New Post").click()
        cy.hash.should('include','#/editor').
        cy.get('.form-control.form-control-lg').type('Test')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea').type('#Simple Test')
        cy.get('.btn').click()
        cy.url.should('include','article')
    });
    
    it('mark unmark the article as favorite', function () {
        cy.get('.nav-link').contains('akira_000').click()
        cy.contains('My Article').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorite Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here.. yet').should('be.visible')
        cy.go('back')
    });
})