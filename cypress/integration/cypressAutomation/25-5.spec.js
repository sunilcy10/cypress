///<reference types="cypress" />


// describe('verify the contact us form along with navigation',function(){

//     it('verify the contact us form',function(){
//         //<h1 class = "one" id = "two" name = "nm">Hello</h1>
//         cy.visit('https://webdriveruniversity.com/')
//         cy.get('#contact-us').invoke('removeAttr','target').click()
//         cy.get('.section_header').should('have.text','CONTACT US')
//         cy.get('.section_header').invoke('text').then(function(str){
//             expect(str).to.eql('CONTACT US')
//         })
//          //expect(str).to.eql('CONTACT US')
//         //cy.get('#contact-us').click() (it will not work)
//         cy.get('input[name="first_name"]').type('chinmay')
//         cy.get('input[name="last_name"]').type('deshpande')
//         cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
//         cy.get('textarea[name="message"]').type('I am learning js')
//         cy.get('input[value="SUBMIT"]').click()
//         cy.get('h1').should('have.text','Thank You for your Message!')

//     })

//     it('verify the contact us form reset functionality',function(){
//         //<h1 class = "one" id = "two" name = "nm">Hello</h1>
//         cy.visit('https://webdriveruniversity.com/')
//         cy.get('#contact-us').invoke('removeAttr','target').click()
//         cy.get('.section_header').should('have.text','CONTACT US')
//         cy.get('.section_header').invoke('text').then(function(str){
//             expect(str).to.eql('CONTACT US')
//         })
//          //expect(str).to.eql('CONTACT US')
//         //cy.get('#contact-us').click() (it will not work)
//         cy.get('input[name="first_name"]').type('chinmay')
//         cy.get('input[name="last_name"]').type('deshpande')
//         cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
//         cy.get('textarea[name="message"]').type('I am learning js')
//         cy.get('input[value="RESET"]').click()
//         cy.get('input[name="first_name"]').should('have.text',"")
//         cy.get('input[name="last_name"]').should('have.text',"")
//         cy.get('input[name="email"]').should('have.text',"")
//         cy.get('textarea[name="message"]').should('have.text',"")

//     })

//     it('verify the contact us form',function(){
//         //<h1 class = "one" id = "two" name = "nm">Hello</h1>
//         cy.visit('https://webdriveruniversity.com/')
//         cy.get('#contact-us').invoke('removeAttr','target').click()
//         cy.get('.section_header').should('have.text','CONTACT US')
//         cy.get('.section_header').invoke('text').then(function(str){
//             expect(str).to.eql('CONTACT US')
//         })
//          //expect(str).to.eql('CONTACT US')
//         //cy.get('#contact-us').click() (it will not work)
//         cy.get('input[name="first_name"]').type('chinmay')
//         cy.get('input[name="last_name"]').type('deshpande')
//         cy.get('input[name="email"]').type('chinmaydeshpande010gmail.com')
//         cy.get('textarea[name="message"]').type('I am learning js')
//         cy.get('input[value="SUBMIT"]').click()
//         cy.get('html').should('contain','Invalid')

//     })

//     it.only('verify the contact us form',function(){
//         //<h1 class = "one" id = "two" name = "nm">Hello</h1>
//         cy.visit('https://webdriveruniversity.com/')
//         cy.get('#contact-us').invoke('removeAttr','target').click()
//         cy.get('.section_header').should('have.text','CONTACT US')
//         cy.get('.section_header').invoke('text').then(function(str){
//             expect(str).to.eql('CONTACT US')
//         })
//          //expect(str).to.eql('CONTACT US')
//         //cy.get('#contact-us').click() (it will not work)
//         cy.get('input[name="first_name"]').type('chinmay')
//         cy.get('input[name="last_name"]').type('deshpande')
//         cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
//         cy.get('input[value="SUBMIT"]').click()
//         cy.get('html').should('contain','all fields')


// })


//     //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     //https://webdriveruniversity.com/

//     // <h1 class = "one" id = "two" name = "nm">Hello</h1>
//     // invoke()?

//     // cypress -- jquery


// })

describe('verify the contact us',()=>{
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })
        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
    })
    it.only('verify the contact us form with correct credentials and clicking submit',function(){
        cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        // cy.contains('CONTACT US').should('be.visible')
        // cy.debug()
        cy.log(Cypress.browser)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
    it('verify the contact us form reset functionality',function(){
        cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[value="RESET"]').click()
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")
    })
    it('verify the contact us form with incorrect credentials and clicking submit',()=>{
        cy.get('input[name="email"]').type('chinmaydeshpande010gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','Invalid')
    })
    it('verify the contact us form without filling all the fields ',()=>{
        cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','all fields')
    })
})

///////////////////----------------by using comment------------------///////////////////

// describe('verify the commentt Us', () => {
//     it('verify the contact us for valid credentials', () => {
//         cy.commentUS('sunil', 'chougale', 'sunilcy10@gmail.com', 'default')
//         cy.get('input[value="SUBMIT"]').click()
//         cy.get('h1').should('have.text', 'Thank You for your Message!')
//     })
//     it('verify the contact us form reset functionality', () => {
//         cy.commentUS('sunil', 'chougale', 'sunilcy1011@gmail.com', 'default')
//         cy.get('input[value="RESET"]').click()
//         cy.get('input[name="first_name"]').should('have.text', "")
//         cy.get('input[name="last_name"]').should('have.text', "")
//         cy.get('input[name="email"]').should('have.text', "")
//         cy.get('textarea[name="message"]').should('have.text', "")
//     })
//     it('verify the contact us form with incorrect credentials and clicking submit', () => {
//         cy.commentUS('sunil', 'chougale', 'sunilcy1011@gmail', 'default')
//         cy.get('input[value="SUBMIT"]').click()
//         cy.get('html').should('contain', 'Invalid')
//     })
//     it.only('verify the contact us form without filling all the fields', () => {
//         cy.commentUS('sunil', 'chougale', 'sunilcy1011@gmail.com','{backspace}')
//         cy.get('input[value="SUBMIT"]').click()
        
//         // cy.get('[type="submit"]').click()
//         // cy.get('html').should('contain', 'all fields')
//     })
// })