describe('alert boxes',()=>{
    it('alert boxes',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert',function(str){
            expect(str).to.equal('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('be.visible').and('have.text','You successfully clicked an alert')
    })
    // it('verify the js alert ', function () {
    //     cy.on('window:alert', function (str) {
    //         expect(str).to.eqls('I am a JS Alert')
    //     })
    //     cy.contains('Click for JS Alert').click()
    //     cy.get('#result').should('be.visible')
    //         .and('have.text', 'You successfully clicked an alert')
       
    // })
    it('confirm boxes',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(str){
            expect(str).to.equal('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('be.visible').and('have.text','You clicked: Ok')
    })
    // it('verify the js confirm - OK ', function () {
    //     cy.on('window:confirm', function (str) {
    //         expect(str).to.equal('I am a JS Confirm')
    //         return true
    //     })
    //     cy.contains('Click for JS Confirm').click()
    //     cy.get('#result').should('be.visible')
    //     .and('have.text', 'You clicked: Ok')

    // })
    it('confirm boxes',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(str){
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('be.visible').and('have.text','You clicked: Cancel')
    })

    // it('verify the js confirm - Cancel ', function () {
    //     cy.on('window:confirm', function (str) {
    //         expect(str).to.equal('I am a JS Confirm')
    //         return false
    //     })
    //     cy.contains('Click for JS Confirm').click()
    //     cy.get('#result').should('be.visible')
    //     .and('have.text', 'You clicked: Cancel')

    // })
    it('prompt box',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     
        cy.window().then(function(el){
            cy.stub(el,'prompt').returns('hello')
        })
       
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('be.visible').and('have.text','You entered: hello')
    })
    it.only('prompt box',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el,'prompt').returns(() => null)
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('be.visible').and('contain',' ')
    })
})
