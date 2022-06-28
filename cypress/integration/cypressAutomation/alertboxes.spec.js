//const { expect } = require("chai")

describe('verify the js window:alert', () => {
    it('verify the alert box', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (el) {
            let ab = el.alert()
            expect(ab).to.equal(true)
        })
    })
    it('verify the js window:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })
    it('verify the js window:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return true
        })
        cy.get("#confirm-alert-text").should('have.text', 'You pressed OK!')

    })
    it('verify the js window:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return false
        })
        cy.get("#confirm-alert-text").should('have.text', 'You pressed Cancel!')
    })

    it('verify the js window:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            cy.stub(el, 'confirm').returns(true)
        })
        cy.get('#button4').click()
        cy.get("#confirm-alert-text").should('have.text', 'You pressed OK!')
    })
    it('verify the js window:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            cy.stub(el, 'confirm').returns(false)
        })
        cy.get('#button4').click()
        cy.get("#confirm-alert-text").should('have.text', 'You pressed Cancel!')
    })
    it('verify the js window alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(el){
            cy.stub(el,'prompt').returns('Here we goooo')
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('contain','Here we goooo')
    })
    it('verify the empty js prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(el){
            cy.stub(el,'prompt').returns(() => null)
          
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('contain',' ')
    })
    it('verify the js window alert',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
      cy.window().then((el)=>{
          cy.stub(el,'alert').as('alert')
      })
      cy.get('#button1').click()
      cy.get('@alert').should('contain','I am an alert box!') 
    
    })
    it('using window object', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button2').click()
        cy.get('.modal-title').should('have.text','It’s that Easy!!  Well I think it is.....')
        cy.contains(/close/i).click()
    })

})

