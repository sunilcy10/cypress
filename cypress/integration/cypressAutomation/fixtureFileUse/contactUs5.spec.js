


describe('verify the functionality of fixture',function(){
    beforeEach(function(){
        cy.fixture('username').then((data)=>{
            this.data = data
            cy.log(this.data)
        })
    })
    it('verify the fixture file',function(){
        cy.log(this.data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.fname)
        cy.get('input[name="last_name"]').type(this.data.lname)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('textarea[name="message"]').type(this.data.comment)
        cy.get('input[value="SUBMIT"]').click()
    })

})

///in this it block run only one time