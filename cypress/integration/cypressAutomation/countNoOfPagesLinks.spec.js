

// context("Task", () => {
//     specify("Get links on page", () => {
//         cy.visit("https://www.google.co.in/");
//         cy.get(".gLFyf.gsfi").type("Cypress{enter}");
//         cy.get("a").each((el) => {
//             cy.log(el.prop("href"));
//         });
//     });

//     specify("Get last no of page", () => {
//         cy.visit("https://www.google.co.in/");
//         cy.get(".gLFyf.gsfi").type("Cypress{enter}");
//         function load() {
//             cy.get(".SJajHc").parent("a").last().then((el) => {
//                 if (el.text() == "Next") {
//                     cy.wrap(el).click();
//                     load();
//                 } else {
//                     cy.log(`Last Page NO.  ${Number(el.text()) + 1}`);
//                 };
//             });
//         };
//         load();
//     });
// })

describe("counting no. of links and Pages", () => {
    it.only('verify the no. of links ', () => {
        cy.visit("https://www.google.co.in/webhp?hl=en&sa=X&ved=0ahUKEwi5pMfR9Zv4AhWHNZQKHa7YCuk4ChA8CAg")
        //  cy.get('.gLFyf').type('Cypress{enter}')
        //    let a=[]
        cy.get(".gLFyf.gsfi").type('Cypress{enter}')
        cy.wait(4000)
        cy.get('a').each((el, index, arr) => {
            // cy.log(el)
            cy.log(el.prop('href'))                           //////print links
            // a.push(el.prop('href').length)
            // cy.log(arr.length)
            // return arr
        }).then((arr)=>{
            cy.log(arr.length)                                           /////counting no of links
            
        })

    })
    it('verify the no. of pages', () => {
        cy.visit("https://www.google.co.in/webhp?hl=en&sa=X&ved=0ahUKEwi5pMfR9Zv4AhWHNZQKHa7YCuk4ChA8CAg")
        //  cy.get('.gLFyf').type('Cypress{enter}')
        cy.get(".gLFyf.gsfi").type('Cypress{enter}')
        function load() {
            cy.get(".SJajHc.NVbCr").parent('a').last().then((el) => {
                if (el.text() == 'Next') {
                    cy.wrap(el).click();
                    load();
                } else {
                    cy.log(`Number of pages ${Number(el.text()) + 1}`)
                }
            })
        }
        load();
    })
})