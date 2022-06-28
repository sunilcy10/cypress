describe('Learn retries and other commands', () => {

    it('test case 1 retries in open mode', () => {
        cy.visit('https://www.amazon.in/')
        cy.title().should('include', 'amazon')

    })
    it('test case 2  title', () => {
        cy.visit('https://www.amazon.in/')
        cy.title()
            .should('have.text', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })
    it.skip('test case 3 Go', () => {

    })
    it('test case 4 Reload', () => {
        cy.visit('https://www.amazon.in/')
        cy.reload()
    })
})