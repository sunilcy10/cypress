///////////// below fixture file should 1st save in fixture folder(filename.jason)  & this file name should call in cy.fixture('fixture file name')
// {
//     "fname": "sunil",
//     "lname": "chougale",
//     "email": "sunilcyes1011@gmail.com",
//     "comment": "default"
// }

///fixture file is made for repetative use



/////////////////////>>>>>>>>>>>>>>>>>>>>My Code<<<<<<<<<<<<<<<<<<<<<<<--------------

describe('verify the fixture file', () => {
    // // beforeEach(function(){
    // //     cy.fixture('username').then((data) => {
    // //         //cy.log(data)

    // //     })
    // // })
    it('filling the form with valid inputs', () => {
        cy.fixture('username').then((data)=>{

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.log(data)
        cy.get('input[name="first_name"]').type(data.fname)
        cy.get('input[name="last_name"]').type(data.lname)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.comment)
        cy.get('input[type="submit"]').click()
        cy.get("#contact_reply").should('contain', 'Thank You for your Message!')
         })
    })

    //})
    //})

    it('filling the form with invalid email', () => {
        cy.fixture('username').then((data) => {
            data.email = 'sunil'
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            //cy.log(data)
            cy.get('input[name="first_name"]').type(data.fname)
            cy.get('input[name="last_name"]').type(data.lname)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comment)
            cy.get('input[type="submit"]').click()
            cy.get("body").should('contain', ' Invalid email address')
        })
    })
    it('validate reset button with first name box', () => {
        cy.fixture('username').then((data) => {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            //cy.log(data)
            cy.get('input[name="first_name"]').type(data.fname)
            cy.get('input[name="last_name"]').type(data.lname)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comment)
            cy.get('input[type="reset"]').click()
            cy.get('input[name="first_name"]').should('contain', '')
        })
    })
    it('validate reset button with last name box', () => {
        cy.fixture('username').then((data) => {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            //cy.log(data)
            cy.get('input[name="first_name"]').type(data.fname)
            cy.get('input[name="last_name"]').type(data.lname)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comment)
            cy.get('input[type="reset"]').click()
            cy.get('input[name="last_name"]').should('contain', '')
        })
    })
    it('validate reset button with email box', () => {
        cy.fixture('username').then((data) => {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            //cy.log(data)
            cy.get('input[name="first_name"]').type(data.fname)
            cy.get('input[name="last_name"]').type(data.lname)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comment)
            cy.get('input[type="reset"]').click()
            cy.get('input[name="email"]').should('contain', '')
        })
    })
    it('validate reset button with comment box', () => {
        cy.fixture('username').then((data) => {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            //cy.log(data)
            cy.get('input[name="first_name"]').type(data.fname)
            cy.get('input[name="last_name"]').type(data.lname)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comment)
            cy.get('input[type="reset"]').click()
            cy.get('textarea[name="message"]').should('contain', '')
        })
    })
    // describe('verify the fixture file',()=>{
    //     // beforeEach(function(){
            
    //     // })
    //     it('filling the form',()=>{
    //         cy.fixture('username').then((data)=>{
    //             cy.log(data)
                       
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(data.fname)
    //         cy.get('input[name="last_name"]').type(data.lname)
    //         cy.get('input[name="email"]').type(data.email)
    //         cy.get('textarea[name="message"]').type(data.comment)
    //         cy.get('input[type="submit"]').click()
    //         cy.get('h1').should('have.text','Thank You for your Message!')
    //     })
    // })
    // })
})



////////////////////////////////////////////////////////////////////////////////
//-------------------------------->>>>>>>>>>>>>>>>>>>>.sircode<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-------------------------------



// describe('verify sign up form using fixture', function () {
//     // global
//     before(() => {
//         cy.fixture("users").then((data) => {
//             this.data = data
//         })
//     })



//     it('verify the functionality for sign - up form with fixture', () => {

//         /---------/
//         //    cy.log(this.data.firstName)
//         //    cy.log(this.data)
//         //    this.data['firstName'] = "ram"
//         //    cy.log(this.data)

//         cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type(this.data.firstName)
//         cy.get('input[name="last_name"]').type(this.data.lastName)
//         cy.get('input[name="email"]').type(this.data.email)
//         cy.get('textarea[name="message"]').type(this.data.comments)
//         cy.get('input[type="submit"]').click()
//         cy.get('h1').should('have.text', 'Thank You for your Message!')

//     })



//     it('verify the functionality for sign - up form fixture -2', () => {
//         cy.fixture('users').then(function (data) {
//             cy.log(data)
//             cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
//             cy.get('input[name="first_name"]').type(data.firstName)
//             cy.get('input[name="last_name"]').type(data.lastName)
//             cy.get('input[name="email"]').type(data.email)
//             cy.get('textarea[name="message"]').type(data.comments)
//             cy.get('input[type="submit"]').click()
//             cy.get('h1').should('have.text', 'Thank You for your Message!')
//         })

//     })

//     it('verify the functionality for sign - up form reset button', () => {
//         cy.fixture('users').then(function (data) {
//             cy.log(data)
//             cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
//             cy.get('input[name="first_name"]').type(data.firstName)
//             cy.get('input[name="last_name"]').type(data.lastName)
//             cy.get('input[name="email"]').type(data.email)
//             cy.get('textarea[name="message"]').type(data.comments)
//             cy.get('input[type="reset"]').click()
//             cy.get('input[name="first_name"]').should('have.text','')
//         })

//     })

//     it.only('verify the functionality for sign - up form', () => {
//         cy.fixture('users').then(function (data) {
//             cy.log(data)

//             data.email = "chinmay.com"
//             cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
//             cy.get('input[name="first_name"]').type(data.firstName)
//             cy.get('input[name="last_name"]').type(data.lastName)
//             cy.get('input[name="email"]').type(data.email)
//             cy.get('textarea[name="message"]').type(data.comments)
//             cy.get('input[type="submit"]').click()
//             //cy.get('input[name="first_name"]').should('have.text','')
//             cy.get('body').should('contain',"Error:")
//         })

//     })

//     it('verify the contact url',function(){

//         cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('h2[name="contactme"]').should('have.text','CONTACT US')
//     })



// })
