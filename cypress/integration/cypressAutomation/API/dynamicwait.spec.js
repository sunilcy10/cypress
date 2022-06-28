// // <reference  types = "cypress"/>

// describe('verify the intercept concept for get request',function(){
//     it('verify the GET comment functionality',function(){
//         //  // Listerner
//         cy.intercept({
//             method:"GET",
//             url:'https://jsonplaceholder.cypress.io/comments/1'
//         }).as('getComment')
//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.contains('Get Comment').click()
//         //cy.wait(2000)
//         cy.wait('@getComment')
//         //cy.get('.network-comment').should('contain','laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium')
//         cy.get('.network-comment').should('be.visible')
//         cy.get('.network-comment').should('contain','laudantium')

//     })

//     it('verify the GET comment functionality',function(){
//         cy.intercept({
//             method:"POST",
//             url:'https://jsonplaceholder.cypress.io/comments'
//         }).as('postComment')

//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.contains('Post Comment').click()
//         //cy.wait(2000)
//         cy.wait('@postComment')
//         cy.get('.network-post-comment').should('be.visible')
//         cy.get('.network-post-comment').should('have.text','POST successful!')

//     })


// })

describe('dynamic wait', () => {
    it('post request', () => {
        cy.intercept({
            method: 'post',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('post')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@post')
        cy.get('.network-post-comment').should('have.text', 'POST successful!')
    })
    it.only('verify the get request', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('get')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@get')
        cy.get('.network-comment').should('contain', 'laudantium')
        // cy.get('div[class="network-comment"]').should('contain','laudantium')
    })
    

})