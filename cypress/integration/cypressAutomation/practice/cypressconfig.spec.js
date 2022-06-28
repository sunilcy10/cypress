// import {Utility} from "../support/utility"

describe('validate  the login functionality',function(){


    // localhost:8080/login
    // https://opensource-demo.orangehrmlive.com/login
    // https://orangehrmlive.com/login


    // // https://opensource-demo.orangehrmlive.com/index.php/auth/requestPasswordResetCode


    // let rr = new Utility()
    beforeEach(function(){
        cy.visit('/')
        cy.log(Cypress.config().baseUrl)
        cy.log(Cypress.config().username)
        cy.log(Cypress.config().password)
        // cy.log(Cypress.config().age)
        // cy.wait(10000)

        // let rr = new Utility()
    })

    it('check login with invalid credentials',function(){
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[id="btnLogin"]').click()
        // Assertion
        cy.get('span[id="spanMessage"]').should('have.text',"Invalid credentials")

    })
    it('check login with valid credentails',function(){
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[id="btnLogin"]').click()
        // asset any thing on dashbord

    })

    // it.only('check login with valid credentails',function(){
    //    let url = rr.getBaseUrl()
    //    cy.visit(url)
    // })




})
