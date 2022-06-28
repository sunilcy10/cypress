import data from '../../../fixtures/username2.json'

describe('verify the fixture file', function () {
    data.forEach(function (element){
        it('verify the fixture file', function () {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(element.fname)
            cy.get('input[name="last_name"]').type(element.lname)
            cy.get('input[name="email"]').type(element.email)
            cy.get('textarea[name="message"]').type(element.comment)
            cy.get('input[value="SUBMIT"]').click()
        })

    })

})

///in this it block run two times separately