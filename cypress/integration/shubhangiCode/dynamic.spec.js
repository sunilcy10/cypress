it.skip(' to test that the element is disabled', ()=>{
    cy.visit('https://www.testingwithtechbrothers99.com/common-elements');
    cy.get('div[class="radio disabled"]').should('have.class', 'radio disabled')// attrr & its value
    cy.get('input[id="optionsRadios4"]').should('have.attr', 'disabled')// only validating if attribute given attribute is there

    cy.get('div[class="checkbox disabled"]').should('have.class', 'checkbox disabled')
    cy.get('input[value="checkbox-disabled"]').should('have.attr', 'disabled')
  })
  it.skip(' to test that the dropdown with select ', ()=>{
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
   cy.get('[data-reactid="164"] > ._2WNb > .fl-input-container > #text-box').clear().type('del')
   cy.get('div[class="16Y"]').find('._3ewH').find('div[class="_3sXO"]').each(($el,$index)=>{
      let station = el.text()
      //cy.log(station)
      if(station == 'NZM - Hazrat Nizamuddin Delhi'){
        cy.wrap(el).click();
      }
   })

 })