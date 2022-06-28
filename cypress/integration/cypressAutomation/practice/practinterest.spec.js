
describe('test on tntercept', () => {
    // it('verify the get command', () => {
    //     cy.intercept({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.cypress.io/comments/1',
    //     }).as('getcomment')
    //     cy.visit('https://example.cypress.io/commands/network-requests')
    //     cy.get('button[class="network-btn btn btn-primary"]').click()
    //     cy.wait('@getcomment')
    //     cy.get('.network-comment').should('contain','laudantium')
    // })

    // it('verify post button',()=>{
    //     cy.intercept({
    //         method:'POST',
    //         url:'https://jsonplaceholder.cypress.io/comments'
    //     }).as('postcomment')
    //     cy.visit('https://example.cypress.io/commands/network-requests')
    //     cy.get('button[class="network-post btn btn-success"]').click()
    //     cy.wait('@postcomment').then((res)=>{
    //         cy.log(res)
    //     })
    //     cy.get('.network-post-comment').should('contain','POST successful!')
    // })

    // it('verify the get command', () => {
    //     cy.intercept({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.cypress.io/comments/1',
    //     }).as('getcomment')
    //     cy.visit('https://example.cypress.io/commands/network-requests')
    //     cy.get('button[class="network-btn btn btn-primary"]').click()
    //     cy.wait('@getcomment').then((res)=>{
    //         // cy.log(res)
    //         expect(res.response.statusCode).to.equal(200)
    //     })
    it.skip('paytm ticket booking', () => {
        cy.visit('https://paytm.com/train-tickets')
        cy.get('[data-reactid="151"] > ._2WNb > .fl-input-container > #text-box').click().clear().type('pu')
        // cy.get('div[class="_3sXO"]').each((el)=>{
        //     if (el.text() == 'PUNE - Pune Jn') {
        //         cy.wrap(el).click()
        //     }
        // })
    })

    it('')

})

