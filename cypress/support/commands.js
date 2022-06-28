// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
Cypress.Commands.add('login',(username,password)=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
    cy.get('#btnLogin').click()
})

Cypress.Commands.add('tableverify',(id,value)=>{
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get(`${id}`).children().find('tr').each(function(el,index){
          if(index !=0){
              sum = sum + Number((el).children().last().text())
          }
        }).then(()=>{
            expect(sum).to.equal(value)
        })
})

Cypress.Commands.add('commentUS',(fname,lname,email,msg)=>{
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]').type(fname)
    cy.get('input[name="last_name"]').type(lname)
    cy.get('input[name="email"]').type(email)
    cy.get('textarea[name="message').type(msg)
})

// Cypress.Commands.add('dropdown',(value)=>{
//     cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     let a= ['java','c#','python','sql']
//     let b = value.toLowerCase()
//     cy.get('#dropdowm-menu-1').select(value).should('have.value',b)
//     // cy.get('#dropdowm-menu-1').select(value).then((el)=>{
//     //  expect(a.includes(el.value)).to.be.true
//     // })
// })
Cypress.Commands.add('dropDown', (Country, state, city) => {                   ////dependent dropdown
    cy.get('select').first().select(Country).then((allStates)=>{
        cy.wrap(allStates).each((statelist)=>{
            cy.log(statelist)
        })
        cy.get('select').eq(1).select(state).then((allCity)=>{
            cy.wrap(allCity).each((citylist)=>{
                cy.log(citylist)
            })
            cy.get('select').last().select(city)
        })
    })   
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
