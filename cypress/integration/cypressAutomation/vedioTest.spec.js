describe('test the vedio', () => {
    it('testing uploaded vedio', () => {
        // Cypress.on('uncaught:exception', (err, runnable) => {

        //     return false
        // })
        cy.visit('https://www.youtube.com/watch?v=H7Km_06Q4MI')
        // cy.get('#ytplayer-0').scrollIntoView().click()//.should('have.prop', 'ended', false)
        cy.get(".ytp-miniplayer-scrim").should('have.prop', 'paused', true)
            .and('have.prop', 'ended', false)
            .then(($vedio) => {
                $vedio[0].play()
            })
        cy.get('video', { timeout: 2310 }).should('have.prop', 'ended', true)
    })
    it.only('system video', () => {
        cy.visit('videoCheck.html')
        cy.get("video").should('have.prop', 'paused', true)
            .and('have.prop', 'ended', false)
            .then(($vedio) => {
                $vedio[0].play()
            })
        cy.get('video', { timeout: 1100 }).should('have.prop', 'ended', true)
    })
})