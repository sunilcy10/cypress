// your T.C. is to buy a product from amazon: 1)login with valid creedential,2)Search for product , 3)Go to product's single view page
// 4)Add to vishlist ,5)Add to cart ,5)Go to the wishlistr, 6)Go to the cart , 7)click on payment button

// describe('inspect amazon site end to end testing', () => {
    // it('verify the shop items prise',()=>{
    //     cy.visit('https://www.lovelocal.in/shops')
    //     cy.get('a[class="text-white"]').eq(1).click({force:true})
    //     cy.get('a[class="text-black"]').should('contain','Pune')
    //     cy.get('input[spellcheck="false"]').click().clear().type('rice')
    //     // cy.get('#Oval').last().click()
    //     cy.get('div[class="pb-1 text-black font-weight-bold"]').each((el,index)=>{
    //         if(el.text()=='Jeera Rice'){
    //             cy.wrap(el).click()
    //         }
    //     })
    //     // cy.get('div[class="py-4 row"]').children().find('Red Rice').click()


    // })
    // // it('flipcart',()=>{
    // //     cy.visit('https://www.flipkart.com/')
    // //     cy.get('button[class="_2KpZ6l _2doB4z"]').click()
    // //     cy.get('input[name="q"]').click().clear().type()
    // // })


    // it('login to amazon', () => {
    //     cy.visit('https://www.amazon.in/')
    //     cy.get('#nav-link-accountList-nav-line-1').click({ force: true })
    //     cy.get('#ap_email').type('chougalesunil10@gmail.com')
    //     cy.get('#continue').click()
    //     cy.get('#ap_password').type('8806486190')
    //     cy.get('#signInSubmit').click()
    //     cy.get('#twotabsearchtextbox').click().clear().type('shoes')
    //     cy.wait(1000)
    //     cy.get('div[role="button"]').each((el) => {
    //         if (el.text() == 'shoes for men') {
    //             cy.wrap(el).click()
    //         }
    //     })
    // //     // cy.get('a[class="a-link-normal s-no-outline').first().invoke('removeAttr', 'target').click()
    // //     // cy.url().should('have.class', "a-link-normal s-no-outline")
    // //     // cy.get('a[class="a-link-normal s-no-outline"]').first().removeAttr('target')
    //     cy.get('div[data-asin="B01MSOPR4M"]').click().then(() => {
    //         cy.get('a[class="a-link-normal s-no-outline').first().invoke('removeAttr', 'target').click()
    //         cy.get('#add-to-cart-button').click()
    //         cy.get('#nav-cart-count').click()
    //         cy.get('.a-button-input').first().click()
    //         cy.get('h1.a-spacing-base').should('contain', 'Select a delivery address')
    //     })
    // })

    // // it('login with valid credential', () => {
    // //     cy.visit('https://www.amazon.in/')
    // //     cy.get('#nav-link-accountList-nav-line-1').click({ force: true })
    //     cy.get('#ap_email').type('chougalesunil10@gmail.com')
    //     cy.get('#continue').click()
    //     cy.get('#ap_password').type('8806486190')
    //     cy.get('#signInSubmit').click()

    // })
    // it('search for a product', () => {
    //     cy.visit('https://www.amazon.in/')
    //     cy.get('#twotabsearchtextbox').click().clear().type('shoes')
    //     cy.get('div[class="s-suggestion-container"]').each((el) => {
    //         if (el.text() == 'shoes for men') {
    //             cy.wrap(el).click()
    //         }
    //     })
    // })
    // it('go to the product single view page', () => {
    //     cy.visit('https://www.amazon.in/s?k=shoes+for+men&i=todays-deals&crid=2VROGPGH7VWLC&sprefix=%2Ctodays-deals%2C275&ref=nb_sb_ss_recent_1_0_recent')
    //     cy.get('div[class="a-section a-spacing-base a-text-center"]').first().click().then(() => {
    //         cy.get('a[class="a-link-normal s-no-outline').first().invoke('removeAttr', 'target').click()
    //     })
    // })
    // it.only('Add to wish list', () => {
    //     cy.visit('ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUlFEWFVTWkZCS0pYJmVuY3J5cHRlZElkPUEwMjc3MjEwMURPWEg3SkE5VVIwRCZlbmNyeXB0ZWRBZElkPUEwNzc1MDUzM0RCNUgxOUlCS0daVyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU')
    //     cy.get("#add-to-wishlist-button-submit").click()
    //     cy.get('button[aria-label="Close"]').first().click()

    // })

    // it('go to wishlist', () => {
    //     cy.visit('https://www.amazon.in/')

    // })
    // it('Add to cart', () => {
    //     cy.visit('https://www.amazon.in/')

    // })
    // it('Go to the cart', () => {
    //     cy.visit('https://www.amazon.in/')

    // })
    // it('click on the payment button', () => {

    // })
// })

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('verify the functionality for fixture', function () {
    after(function(){


    })


    it('verify the functionality for fixture', function () {

        cy.fixture('example3').then(function(obj){
            cy.request({
                method:"POST",
                url:"https://reqres.in/api/users",
                body:obj
            }).then(function(res){
                //cy.log(res)
                expect(res.status).to.equal(201)
            })

        })

 

      })

      
    it('verify the functionality for fixture', function () {

        cy.fixture('example3').then(function(obj){
            cy.request({
                method:"POST",
                url:"https://reqres.in/api/users",
                body:obj
            }).then(function(res){
                cy.writeFile(`cypress/fixtures/example4.json`,res.body)
            })
        })

      })

      it('verify the functionality for fixture', function () {

        cy.fixture('example4').then(function(obj){
            cy.request({
                method:"GET",
                url:`https://reqres.in/api/users/${obj.id}`,
            }).then(function(res){
                expect(res.status).to.equal(200)
            })
            })
        })


        
      it('verify the functionality for fixture', function () {

        cy.fixture('example4').then(function(obj){
            cy.request({
                method:"GET",
                url:`https://reqres.in/api/users/${obj.id}`,
            }).then(function(res){
                expect(res.status).to.equal(200)
            })
            })
        })


              
    it('verify the functionality for fixture', function () {

        cy.fixture('example3').then(function(obj){
            cy.request({
                method:"POST",
                url:"https://reqres.in/api/users",
                body:obj
            }).then(function(){
                cy.writeFile(`cypress/fixtures/example5.json`,{
                    "firstName":"chinmay",
                    "lastName":"deshpande"

                })
            })
        })

      })

      it('verify the functionality for fixture', function () {
        cy.fixture('example3').then(function(obj){
            cy.request({
                method:"POST",
                url:"https://reqres.in/api/users",
                body:obj
            }).then(function(){
                cy.readFile('cypress/fixtures/example4.json').then(function(obj){
                    if(obj.name == "morpheus"){
                        obj.name = "chinmay"
                        cy.writeFile('cypress/fixtures/example4.json',obj)

                    }

                })
                
            })
        })

      })


      })