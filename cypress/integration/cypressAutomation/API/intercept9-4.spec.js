

describe('verify the functionality for intercept',()=>{
    it('verify the functionality for GET comment',()=>{
        cy.intercept({
            method :'GET',
            url : 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn ').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain','laudantium')
    })
it.only('verify the get by intercept',()=>{
    cy.intercept({
        method :'GET',
        url :'https://jsonplaceholder.cypress.io/comments/1'
    }).as('getcomment')
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.get(".network-btn").click()
    cy.wait('@getcomment').then((xy)=>{
       // cy.log(xy)
       expect(xy.response.statusCode).to.eq(200)
       expect(xy.response.body.id).to.eq(1)
       cy.get('.network-comment').should('contain','laudantium')
    })
})
    it('verify the functionality of Post comment',()=>{
        cy.intercept({
            method :'POST',
            url : 'https://jsonplaceholder.cypress.io/comments'
        }).as('postcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains(/^Post Comment$/).click()
        cy.wait('@postcomment')
        cy.get('.network-post-comment')
        .should('be.visible')
        .and('have.text','POST successful!')
    })


    
})

