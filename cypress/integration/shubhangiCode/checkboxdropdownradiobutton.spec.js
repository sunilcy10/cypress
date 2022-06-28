/// <reference types="cypress" />

describe('day2 of automation',()=>{
    it.skip('to test the single single checkboxes',()=>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="option-1"]').check()
        cy.get('input[value="option-1"]').should('be.checked');
        cy.get('input[value="option-2"]').check().should('be.checked');
    })
    it.skip('to test the single checkbox is unchecked',()=>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="option-3"]').uncheck()
        cy.get('input[value="option-3"]').should('not.be.checked');
        
    })
    it.skip('to test theall checkbox are checked using each',()=>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[type="checkbox"]').each((el,index)=>{
            cy.wrap(el).check()
        })
        
        
    })
    it.skip('to test the all checkbox are checked by passing the options',()=>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
     })
        
        
     it('to test the radio button is checked',()=>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="green"]').check()
        cy.get('input[value="green"]').should('be.checked')
        cy.get('input[value="blue"]').check().should('be.checked')
        cy.get('input[value="green"]').should('not.be.checked')
        
     })
        
    })