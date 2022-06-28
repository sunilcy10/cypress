describe('verify the forward & backward on browser', () => {
    it('verify the various windom command for reload page , forward , back via javascript', () => {
        cy.login('Admin', 'admin123')
        cy.window().then((win) => {
            win.location.reload()
        })
        cy.window().then(function(win){
            win.history.forward()
        })
        cy.window().then(function(win){
            win.history.back()
        })
        cy.window().then(function(win){
            expect(win.location.href).to.eql('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        })
        
    })
    it('verify the various windom command for reload page , forward , back via javascript', () => {
        cy.login('Admin','admin123')
        cy.reload()
        cy.go('forward')    // cy.go(1)                            
        cy.go('back')      // cy.go(-1)                       
        cy.url().should('contain','open')

    })
})