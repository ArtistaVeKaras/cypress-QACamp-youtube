describe('API Testing', () => {

    Cypress.config("baseUrl", "http://dummy.restapiexample.com")

    it('GET -read', function () {
        cy.request('GET', '/api/v1/employees')
            .then((response) => {
            expect(response).to.be.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
            })
    });
    it('POST - create', function () {
        const item = {'name': "test","salary":"123","age":"23"}
        cy.request('POST', 'create',item)
            .its('body')
            .its('data')
            .should('include', {name:'test'})
    });
    it('PUT - update', function () {
        const item = {"name":"test1"}
       // cy.request('PUT', url:'/update',body:item)
    });
})