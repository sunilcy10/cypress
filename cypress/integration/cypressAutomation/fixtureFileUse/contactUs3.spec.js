describe('verify the fixture file',()=>{
    let data;
    before(()=>{
        cy.fixture('username2').then((el)=>{
            data=el
        })
    })
    it('verify the fixture file',()=>{
        data.forEach(element=>{
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(element.fname)
            cy.get('input[name="last_name"]').type(element.lname)
            cy.get('input[name="email"]').type(element.email)
            cy.get('textarea[name="message"]').type(element.comment)
            cy.get('input[value="SUBMIT"]').click()
        })
    })
})

//here it block run continuiously 2 times not we get separate two test resulgt
//also we not get exact error here