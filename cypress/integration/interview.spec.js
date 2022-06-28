

describe('amazon India', () => {
    it('counting number of items after searching hello kitty bag on 2nd page', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('hello')
        cy.wait(4000)
        cy.get('div[class="s-suggestion-container"]').each((el, index) => {
            if (el.text() == "hello kitty bag") {
                cy.wrap(el).eq(index).click({force:true})
            }

        })
        cy.wait(4000)
        // cy.get('[href="/s?k=hello+kitty+bag&page=2&crid=2E0UIWVDC0VRN&qid=1656319124&sprefix=hello%2Caps%2C3485&ref=sr_pg_2"]').click()
        cy.contains('Next').click()
        cy.wait(4000)
        cy.get('div[class="a-section a-spacing-base a-text-center"]').each((el,index,arr) => {
            // cy.log(arr.length)
            let x = arr.length
            return x
        }).then((x) => {
            cy.log(x)
           
        })
    })
})