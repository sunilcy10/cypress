describe('validate the login functionality',function(){
    it('check login function for zoomin',function(){
        cy.visit('https://www.zoomin.com/sign-up?%2F%27')
        cy.get('input[name="name"]').type('chinmay010')
        cy.get('input[name="email"]').type('chougalesunil10@gmail.com')
        cy.get('input[class="number-input"]').type('7709192442')
        cy.get('input[name="password"]').type('@Chinmay123')
        cy.contains('SIGN UP').click()
        cy.get('a[href="/sign-up?%2F%27"]').should('be.visible')    //// this is assersion which is used for validation of test it will give at last of after complition of specific code 
        //cy.url('https://www.zoomin.com/sign-in?%2F%27').should('be.visible')
    })


    it.only('login with invalid credintial',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('span[id="nav-link-accountList-nav-line-1"]').click()
        cy.get('input[id="ap_email"]').type('8806486190')
        cy.get('input[id="continue"]').click()
        cy.get('input[id="ap_password"]').type('9112967373')
        cy.get('input[id="signInSubmit"]').click()
        cy.get('h4[class="a-alert-heading"]').should('be.visible')  ///this also a asssersion 

    })
})


