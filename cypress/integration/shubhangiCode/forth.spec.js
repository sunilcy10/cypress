describe('day2 of automation',()=>{
  
    it('to test the single single checkboxes',()=>{
        cy.visit('http://webdriveruniversity.com/');
        // cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        // cy.get('input[value="option-1"]').check()
        // cy.get('input[value="option-1"]').should('be.checked');
        // cy.get('input[value="option-2"]').check().should('be.checked');
        // var texto = cy.get('a[id="contact-us"] h1').its('text')
        // cy.log(texto)
        // cy.get('a[id="contact-us"] h1').then((returnedText)=>{
        //   cy.log(returnedText.text())
        //   expect(returnedText.text()).to.eq('CONTACT US')
        //   cy.wrap(returnedText).should('have.text','CONTACT US')
        //cy.get('a[id="contact-us"] h1').should('have.text','CONTACT US')
        // })
    })
    it('to test the single single checkboxes',()=>{
      cy.visit('http://webdriveruniversity.com/');
      
      var texto = cy.get('a[id="contact-us"] h1').its('text')
      cy.log(texto)
      cy.get('a[id="contact-us"] h1').then((returnedText)=>{
        cy.log(returnedText.text())
        expect(returnedText.text()).to.eq('CONTACT US')
        cy.wrap(returnedText).should('have.text','CONTACT US')
      cy.get('a[id="contact-us"] h1').should('have.text','CONTACT US')
      })
  })
    it('to test the single checkbox is unchecked',()=>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="option-3"]').uncheck()
        cy.get('input[value="option-3"]').should('not.be.checked');
        
    })
    it('to test theall checkbox are checked using each',()=>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[type="checkbox"]').each((el,index)=>{
            cy.wrap(el).check()
        })
        
        
    })
    it('to test the all checkbox are checked by passing the options',()=>{
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
     it(' to test that the element is disabled', ()=>{
       cy.visit('https://www.testingwithtechbrothers99.com/common-elements');
       cy.get('div[class="radio disabled"]').should('have.class', 'radio disabled')// attrr & its value
       cy.get('input[id="optionsRadios4"]').should('have.attr', 'disabled')// only validating if attribute given attribute is there

       cy.get('div[class="checkbox disabled"]').should('have.class', 'checkbox disabled')
       cy.get('input[value="checkbox-disabled"]').should('have.attr', 'disabled')
     })
     it(' to test that the dropdown with select ', ()=>{
      cy.visit('https://www.testingwithtechbrothers99.com/common-elements');
      //1st way
      cy.get('select[class="form-control"]')
      .first()
      .select('Option1')
      .should('have.value', '1')
      /////2nd way
      cy.get('select[class="form-control"]')
      .first()
      .select('1')
      .should('have.contain', 'Option1')
      cy.get('select[class="form-control"]').first().find('option').eq(1).then((el,i)=>
      {
        var elText = el.text()
        cy.log(elText)
      })
    })
    it('to test dynamic dropDown', ()=>{
      cy.visit('https://paytm.com/train-tickets')
      cy.get('div[data-reactid="164"] > div[class="_2WNb"] > div > input').clear().type('del')
      cy.get('div[class="16Y"]').find('._3ewH').find('div[class="_3sXO"]').each((el,index)=>{
         let station = el.text()
         
         //cy.log(station)
         if(station == 'NZM - Hazrat Nizamuddin Delhi'){
           cy.wrap(el).click();
         }
      })
      cy.get('div[data-reactid="164"] > div[class="_2WNb"] > div > input')
      .should('have.value', 'NZM - Hazrat Nizamuddin Delhi')
      .and('have.attr', 'value', 'NZM - Hazrat Nizamuddin Delhi')
      .and('have.attr', 'class', 'fl-input fl-valid')
      .and('have.attr', 'tabindex')
   
    })
        
    })