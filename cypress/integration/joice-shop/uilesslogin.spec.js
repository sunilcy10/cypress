
describe('UI less login', () => {

    it('register user', () => {
        cy.visit('http://localhost:3000/#/login')
        cy.get('.close-dialog > .mat-button-wrapper > .mat-icon').click()
        cy.contains('Not yet a customer?').click({ force: true })
        cy.get("#emailControl").type('sunilcy10@gmail.com')
        cy.get('#passwordControl').type('sunil123')
        cy.get('#repeatPasswordControl').type('sunil123')
        cy.get('[class="mat-select-arrow-wrapper ng-tns-c130-15"]').click()
        cy.get('mat-option span').each((el) => {
            // cy.log(el.text())
            if (el.text() == 'Your eldest siblings middle name?') {
                cy.wrap(el).click()
            }
        })
        cy.get('input[id="securityAnswerControl"]').type('anil', { force: true })
        cy.get('.cc-btn').click()
        cy.contains('Register').click({ force: true })
    })
    it('login', () => {
        cy.visit('http://localhost:3000/#/login')
        cy.get('.close-dialog > .mat-button-wrapper > .mat-icon').click()
        cy.get('#email').type('sunilcy10@gmail.com')
        cy.get('#password').type('sunil123')
        cy.get('#loginButton').click({ force: true })
        cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('have.text', 0)
    })
    it('uiless login by using local storage', () => {
        let token 
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/rest/user/login',
            body: {
                email: "sunilcy10@gmail.com",
                password: "sunil123"
            }
        }).then((response)=>{
            // cy.log(response)
            expect(response.status).to.eq(200)
            // cy.log(response.body.authentication.token)
            token=response.body.authentication.token
            cy.visit('http://localhost:3000/#/')
            cy.get(".close-dialog > .mat-button-wrapper > .mat-icon").click({force:true})
            window.localStorage.setItem('token', token)
            cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('have.text', 0)
        })
    })
    it('uiless login by using',()=>{
        let token 
        cy.request({
            method:'POST',
            url:'http://localhost:3000/rest/user/login',
            body: {
                email: "sunilcy10@gmail.com",
                password: "sunil123"
            }
        }).then((res)=>{
            // cy.log(res.body.authentication.token)
            token= res.body.authentication.token
            cy.visit('http://localhost:3000/#/',{
                onBeforeLoad: (contentWindow) => {
                    contentWindow.localStorage.setItem('token', token)
                }
            })
            cy.get(".close-dialog > .mat-button-wrapper > .mat-icon").click({force:true})
            cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('have.text', 0)
        })
    })
    
})