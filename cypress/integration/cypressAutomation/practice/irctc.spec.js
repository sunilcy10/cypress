describe('verifying irctc site',()=>{
    it('irctc ticketing website',()=>{
        cy.visit('https://www.irctc.co.in/nget/train-search')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('input[aria-autocomplete="list"]').first().clear().type('pun')
        cy.get('li[role="option"]').each((el,index)=>{
             if(el.text()=='PUNE JN - PUNE'){
                 cy.wrap(el).click()
             }
        })
        cy.get('input[aria-autocomplete="list"]').last().clear().type('tir')
        cy.get('li[role="option"]').each((el,index)=>{
             if(el.text()=='TIRUPATI - TPTY'){
                 cy.wrap(el).click()
             }
        })
        cy.get('input[type="text"]').eq(3)
        cy.get('a[class="ui-state-default ng-tns-c59-66 ng-star-inserted"]').first().click()
        // cy.get('button[label="Find Trains"]').click()
        // cy.wait(20000)
        // cy.get('table[class="ng-tns-c80-42"]').find('td').should('have.length',4)
    })
 
})

// it('To verify the dynamic dropdown', () =>{
//     cy.visit('https://www.ebay.com/n/all-categories#ebay-motors')
//     cy.get('div[id="gh-cat-box"]').click()
//     cy.get('select[aria-label="Select a category for search"] option').each((el,indx)=>{
//         var categoryName = el.text()
//         if(categoryName == 'Baby'){
//             cy.wrap(el).click({force: true} )
//         }
//     })