describe('verify the regitration of opencart by using fixture', () => {
    it.only('verify the regitration of opencart', () => {
        cy.fixture('userforopencart').then((data) => {
            cy.visit('https://www.opencart.com/index.php?route=account/register')
            cy.get('#input-username').type(data.username)
            cy.get('#input-firstname').type(data.fname)
            cy.get('#input-lastname').type(data.lname)
            cy.get('#input-email').type('sunilcy10@gmail.com')
            cy.get('#input-country').click().each((el,index)=>{
                let country = el.text()
                if(country =='India'){
                    cy.wrap(el).click()
                }
            })
            cy.get('#input-password').type(data.password)
        })

    })
    it('to test dynamic dropDown', () => {
        cy.visit('https://paytm.com/train-tickets')
        cy.get('[data-reactid="164"] > ._2WNb > .fl-input-container > #text-box').clear().type('del')
        cy.get('#input-country').find('option').each((el, index) => {
         cy.log(el.text())
        
          if (el.text() == 'India'){
           cy.wrap(el.text()).click()
          }
        })
    
      })
})


// "username":"sunil",
// "fname":"sunil",
// "lname":"chougale",
// "email":"sunilcy10@gmail.com",
// "country":"india",
// "password":"123456789"
// }

