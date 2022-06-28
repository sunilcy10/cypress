


describe('verify the functionality of fixture', function () {
    let info1 = {
        firstname: 'sunil',
        lastname: 'chougale',
        email: 'sunilcy10@gmail.com',
        comment: 'default'
    }
    let info2 = {
        firstname: 'Anil',
        lastname: 'chougale',
        email: 'sunilcy1120@gmail.com',
        comment: 'default'
    }

    it('verify functionality of fixture', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('sunil')
        cy.get('input[name="last_name"]').type('chougale')
        cy.get('input[name="email"]').type('sunilcy10@gmail.com')
        cy.get('textarea[name="message"]').type('default')
        cy.get('input[value="SUBMIT"]').click()
    })
    it('verify functionality of fixture', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info1.firstname)
        cy.get('input[name="last_name"]').type(info1.lastname)
        cy.get('input[name="email"]').type(info1.email)
        cy.get('textarea[name="message"]').type(info1.comment)
        cy.get('input[value="SUBMIT"]').click()
    })
    it('verify functionality of fixture', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info2.firstname)
        cy.get('input[name="last_name"]').type(info2.lastname)
        cy.get('input[name="email"]').type(info2.email)
        cy.get('textarea[name="message"]').type(info2.comment)
        cy.get('input[value="SUBMIT"]').click()
    })
    it.only('verify functionality of fixture', function () {
        cy.fixture('username').then((el)=> {                                        //////ethe fixture call kartana function expression/ arrow function kontahi wapara
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.fname)
            cy.get('input[name="last_name"]').type(el.lname)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comment)
            cy.get('input[value="SUBMIT"]').click()
        })
    })
})


// for the last it block save this below file in fixture folder by name username.json & below data
// {
//     "fname": "sunil",
//     "lname": "chougale",
//     "email": "sunilcyes1011@gmail.com",
//     "comment": "default"
// }