
describe('verify the fixture file',()=>{
      let data;                                       //////ethe data define karan garjech aahe
    before(function(){                               //////ethe fixture call kartana function expression/ arrow function kontahi wapara
        cy.fixture('username2').then((el)=>{
            data = el
        })
    
    })

    it('verify the fixture file',function(){                                           //////ethe fixture call kartana function expression/ arrow function kontahi wapara
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[0].fname)
        cy.get('input[name="last_name"]').type(data[0].lname)
        cy.get('input[name="email"]').type(data[0].email)
        cy.get('textarea[name="message"]').type(data[0].comment)
        cy.get('input[value="SUBMIT"]').click()
    })
    it('verify the fixture file',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[1].fname)
        cy.get('input[name="last_name"]').type(data[1].lname)
        cy.get('input[name="email"]').type(data[1].email)
        cy.get('textarea[name="message"]').type(data[1].comment)
        cy.get('input[value="SUBMIT"]').click()
    })
})