

describe('asserting the input tag given text',()=>{
    it('assert google search',()=>{
        cy.visit('https://www.google.com/')
        cy.get('[class="gLFyf gsfi"]').type('Sunil')
        cy.get('[class="gLFyf gsfi"]').should('have.value','Sunil')
    })
})