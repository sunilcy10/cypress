/// <reference types="cypress" />
var arr = ['ipad-2','ipad-mini','macbook-11','samsung-note9']

describe('Learn Viewports', () => {
    
    it('test case 1 with preset', () => {
      cy.viewport('iphone-8');
      cy.visit('https://www.amazon.in/ref=nav_logo')
        
    })
    it('test case 2 in macbook', () => {
       cy.viewport('macbook-16')
       cy.visit('https://www.amazon.in/ref=nav_logo')
     })
     it('test for the various devices', () => {
       
      for(let i of arr){
       cy.viewport(i)
       cy.visit('https://www.amazon.in/ref=nav_logo')
       
      }
      
     })
     it('test with the width and height', () => {
        cy.viewport(414,896)
        cy.visit('https://www.amazon.in/ref=nav_logo')
      })
})
