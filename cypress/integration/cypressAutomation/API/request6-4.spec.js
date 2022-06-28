

describe('verify the get comment in API', () => {
    it('GET comment', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).then(function (request) {
            cy.log(request)
            expect(request.status).to.equal(200)
            expect(request.body.body).to.includes('laudantium')
        })
    })
    it('GET comment', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).then(function (request) {
            expect(request.status).to.equal(200)
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.get('.network-comment').should('have.text', request.body.body)            /////this is the example of end to end testing fornt end approach is assign by api request
        })
    })
    it('GET comment', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (resqest) {
            cy.log(resqest)
            // expect(resqest.duration).to.eq(158)
            expect(resqest.body.per_page).to.eq(6)
        })
    })
    it.only('GET comment', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (resqest) {
            return resqest
        }).then(function (resqest) {
            return resqest.body.data.find(function (el) {
                return el.first_name == "Michael"
            })
        }).then(function (obj) {
            expect(obj.first_name).to.eq("Michael")

        })
    })

})

