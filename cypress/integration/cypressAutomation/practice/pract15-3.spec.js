


// describe(' traverse method in javascript', () => {
//     it('To get a DOM element at a specific index, use the .eq() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('li').eq(1).should('have.text', 'About Us')
//     })
//     it('To get the first DOM element within elements, use the .first() command', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('ul').first().should('have.class', 'list-group')
//     })
//     it('To get the first DOM element within elements, use the .Last() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('ul').last().should('have.class', 'menu')
//         //cy.get('ul').last().children().should('have.length','3')
//     })
//     it('To get children of DOM elements, use the .children() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('ul[class="traversal-food-list"]').children().should('have.length', '11')
//     })
//     it('To get the next sibling DOM element within elements, use the .next() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('li[id="espresso"]').next().should('have.id', 'sugar')
//     })
//     it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('li[id="espresso"]').prev().should('have.text', 'Milk')
//     })
//     it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('li[id="coffee"]').nextAll().should('have.length', '4')
//     })
//     it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('li[id="sugar"]').prevAll().should('have.length', '4')
//     })
//     it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('li[id="coffee"]').nextAll().first('have.text', 'Tea')
//     })
//     it('To get DOM elements that match a specific selector, use the .filter() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('div[class="traversal-button-states"]').children().filter('button[class="btn btn-outline-warning disabled"]').should('have.text', 'Warning')
//     })
//     it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('input[class="btn btn-primary"]').siblings().first('have.type', 'submit')
//     })

//     it('verify the no. of links ', () => {
//         cy.visit("https://www.google.co.in/webhp?hl=en&sa=X&ved=0ahUKEwi5pMfR9Zv4AhWHNZQKHa7YCuk4ChA8CAg")
//         //  cy.get('.gLFyf').type('Cypress{enter}')
//         let a = []
//         cy.get(".gLFyf.gsfi").type('Cypress{enter}')
//         cy.get('a').each((el) => {
//             a.push(el.prop('href').length)
//         })
//         cy.log(a.length)
//     })
//     it('verify the no. of pages', () => {
//         cy.visit("https://www.google.co.in/webhp?hl=en&sa=X&ved=0ahUKEwi5pMfR9Zv4AhWHNZQKHa7YCuk4ChA8CAg")
//         //  cy.get('.gLFyf').type('Cypress{enter}')
//         cy.get(".gLFyf.gsfi").type('Cypress{enter}')
//         function load() {
//             cy.get(".SJajHc.NVbCr").parent('a').last().then((el) => {
//                 if (el.text() == 'Next') {
//                     cy.wrap(el).click();
//                     load();
//                 } else {
//                     cy.log(`Number of pages ${Number(el.text()) + 1}`)
//                 }
//             })
//         }
//         load();
//     })
//     it('Dropdown', () => {
//         //  cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         //  let a= ['java','c#','python','sql']
//         //  cy.get('#dropdowm-menu-1').select('Python').should('have.text','Python')
//         // cy.dropdown('Python')
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         let a = ['java', 'c#', 'python', 'sql']
//         // cy.get('#dropdowm-menu-1').select('c#').should('have.value','java').and('c#')//.and('have.value','python').and('have.value','sql')
//         // // cy.get('#dropdowm-menu-1').select('Python').then(()=>{

//         //     expect(a.includes('Python')).to.true
//         // })
//         // cy.get('#dropdowm-menu-1').select('Python').expect(a.includes('Python')).to.be.true
//         // // then(function () {
//         // expect("Python").to.be.true
//         // cy.log(el)
//         // cy.get('#dropdowm-menu-1').select('c#').then((el)=>{
//         //     // expect(el.select('python')).to.be.includes(a)
//         //     cy.log(el.value)
//         // })
//         cy.dropdown('python')

//     })

// })


describe('Automate Dependant dropdown', () => {
    it('dependant dropdown', () => {
        cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/')
        cy.dropDown('India', 'Maharashtra', 'Pune')
    })
    it('automate dependent dropdown', () => {
        cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/')
        cy.get('select').first().select('India').then((allStates) => {
            cy.wrap(allStates).each((statelist) => {
                cy.log(statelist)
            })
            cy.get('select').eq(1).select('Maharashtra').then((el) => {
                cy.wrap(el).each((a) => {
                    cy.log(a)
                })
            //     cy.get('select').last().select('Pune')
            })
        })
    })
    it.only('select',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('pyth').then((el)=>{
            cy.wrap(el).each((aa)=>{
                cy.log(aa)
            })
        })
    })
})

// Cypress.Commands.add('dropDown', (Country, state, city) => {
//     cy.get('select').first().select(Country).then((allStates) => {
//         cy.wrap(allStates).each((statelist) => {
//             cy.log(statelist)
//         })
//         cy.get('select').eq(1).select(state).then((allCity) => {
//             cy.wrap(allCity).each((citylist) => {
//                 cy.log(citylist)
//             })
//             cy.get('select').last().select(city)
//         })
//     })
// })