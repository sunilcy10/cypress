describe('Automate Dependant dropdown', () => {
    it('dependant dropdown', () => {
        cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/')
        cy.dropDown('India', 'Maharashtra', 'Pune')
    })
    it.only('automate dependent dropdown', () => {
        cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/')
        cy.get('select').first().select('India').then((allStates) => {
            cy.wrap(allStates).each((statelist) => {
                cy.log(statelist)
            })
            cy.get('select').eq(1).select('Maharashtra').then((el) => {
                cy.wrap(el).each((a) => {
                    cy.log(a)
                })
                cy.get('select').last().select('Pune')
            })
        })
    })
    it('asserting simple select dropdown',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('pyth').then((el)=>{
            cy.wrap(el).each((aa)=>{
                cy.log(aa)
            })
        })
    })
})