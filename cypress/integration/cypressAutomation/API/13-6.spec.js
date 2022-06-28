// describe('verify the Intercept call',function(){
//     it('verify the getComment functionality',function(){
//         cy.intercept({
//             method:"GET",
//             url:"https://jsonplaceholder.cypress.io/comments/1"
//         }).as('getComment')
//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.contains('Get Comment').click()
//         cy.wait('@getComment')
//         cy.get('.network-comment').should('contain','laudantium') 
//     })





//     it('verify the getComment functionality',function(){
//         cy.intercept({
//             method:"GET",
//             url:"https://jsonplaceholder.cypress.io/comments/1"
//         }).as('getComment')
//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.contains('Get Comment').click()
//         cy.wait('@getComment').then(function(rs){
//             return rs.response.body.body
//         }).then(function(comment){
//             cy.get('.network-comment').should('have.text',comment) 
//         })

//     })

// })

describe('verify the intercept call', () => {
    it('verify the get comment', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((res) => {
            cy.log(res)
        })
    })

    it.only('validating GET request', () => {
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: 'GET'
        }).then((res) => {
            //  cy.log(res.body.data)
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
            expect(res.body.data.length).to.eq(6)
            expect(res.body).to.have.property('per_page')
            // cy.log(res.body .data)
            return res.body.data
        }).then((ress) => {
           
            // expect(ress[0]).to.have.property('avatar')
           expect(ress.every(function (el){
             el.includes('avatar')
           })).to.eqls(true)
        })
    })
  

})