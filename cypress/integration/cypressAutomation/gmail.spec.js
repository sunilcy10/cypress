describe('gmail', () => {
    it('login', () => {
        cy.visit('https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        cy.get('identifierId').type('sunilcy10@gmail.com')
        cy.contains('Next').click()
        cy.get('input[type="password"]').type('Su^il10@')
        cy.contains('Next').click().then(() => {
            cy.get('img[class="gb_xc"]').should('be.visible')
        }).catch(() => {
            cy.get('div[jsname="B34EJ"]').first().should('contain','Wrong password. Try again or click Forgot password to reset it.')
        })
    })
})


