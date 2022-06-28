///<reference types="cypress" />
describe('verify the url',function(){

    it.only('handling cookies in cypress',function(){

     cy.visit('http://127.0.0.1:5500/cypress/index.html')

      // local storage ==>
      // session session ==>
      // cookies

      cy.setCookie('minskole','Qa automation')
      cy.getCookie('minskole').then(function(obj){
        cy.log(obj.value)   
      })
      cy.setCookie('minskole','update QA testautomation')
      cy.setCookie('minskole2','update QA testautomation2')
      cy.clearCookie('minskole')
      cy.getCookie('minskole2').then(function(obj){
        cy.log(obj.value)   
      })
      cy.clearCookies()
      cy.getCookies().should('be.empty')
     
      cy.window().then(function(win){
        win.localStorage.setItem('p','hello')
     })

     cy.clearLocalStorage()
     




    })


})