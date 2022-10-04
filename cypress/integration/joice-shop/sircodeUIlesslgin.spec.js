describe(' Verify Login', function () {

    it('verify login with UI', function () {

        cy.visit('http://localhost:3000/#/login')
        cy.get('.close-dialog > .mat-button-wrapper > .mat-icon').click({ force: true })
        cy.get('[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('[name="password"]').type('chinmay123')
        cy.get('[aria-label="Login"]').click()
        cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('have.text', 0)

    })

    it('verify UI login', function () {
        let token = ""
        cy.request({
            method: "POST",
            url: "http://localhost:3000/rest/user/login",
            body: {
                "email": "chinmaydeshpande010@gmail.com",
                "password": "chinmay123"
            }
        }).then(function (response) {
            //cy.log(response.body.authentication.token)
            token = response.body.authentication.token
            cy.visit('http://localhost:3000/#/login')
            cy.get('.close-dialog > .mat-button-wrapper > .mat-icon').click({ force: true })
            window.localStorage.setItem('token', token)
            //window.localStorage.setItem('user', 'chinmay')
            cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('have.text', 0)
        })

    })


    it.only('verify UI login', function () {
        let token = ""
        cy.request({
            method: "POST",
            url: "http://localhost:3000/rest/user/login",
            body: {
                "email": "chinmaydeshpande010@gmail.com",
                "password": "chinmay123"
            }
        }).then(function (response) {
            //cy.log(response.body.authentication.token)
            token = response.body.authentication.token
            cy.visit('http://localhost:3000/#/login', {
                onBeforeLoad: (contentWindow) => {
                    contentWindow.localStorage.setItem('token', token)
                }
            })
            cy.get('.close-dialog > .mat-button-wrapper > .mat-icon').click({ force: true })
            cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('have.text', 0)

        })


    })
})

// cypress tester --- session----->cy.session()