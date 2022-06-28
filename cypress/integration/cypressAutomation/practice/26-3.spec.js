


// describe('verify ckeckebox,dropdownn,radio button, table',()=>{
//     // it('verrify the dropdown',()=>{
//     //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     //     cy.get('#dropdowm-menu-1').select('python').should('have.value',"python")
//     // })
//     // it('verrify the checkbox',()=>{
//     //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     //     cy.get('input[value="option-2"]').check().should('be.checked')
//     //     cy.get('input[value="option-2"]').click().should('be.not.checked')
//     // })
//     // it('verrify the radio button',()=>{
//     //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     //     cy.get('input[value="blue"]').click().should('be.checked')
//     // })
//     // it('verrify the dropdown',()=>{
//     //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     //     let select = ['c#','maven','css'] 
//     //     let text = ['C#','Maven','CSS']
//     //     cy.get('div[class="section-title"]').first().children().should('have.length',3)
//     //     cy.get('div[class="section-title"]').first().children().each((el,index)=>{
//     //       cy.wrap(el).select(select[index]).should('have.contain',text[index])
//     //     })
//     // })
//     // it('verrify the radio button',()=>{
//     //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     //     cy.get('#radio-buttons').find('input[name="color"]').should('have.length',5)
//     //     cy.get('#radio-buttons').find('input[name="color"]').each((el)=>{
//     //         cy.wrap(el).click().should('be.checked')
//     //     })
//     // })
//     // it('verrify the checkbox',()=>{
//     //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//     //     let sum = 0
//     //     cy.get('#t01').children().find('tr').each((el,index)=>{
//     //         if(index != 0){
//     //             sum = sum + Number((el).children().last().text())
//     //         }
//     //     }).then(()=>{
//     //         expect(sum).to.equal(159)
//     //     })
//     // })
//     // it('verify table',()=>{
//     //     cy.tableverify('#t02',163)
//     // })
//     // it('verify the iframe',()=>{
//     //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//     //     cy.get('#frame').then((el)=>{
//     //       cy.wrap((el).contents().find('body')).as('iframe')
//     //       cy.get('@iframe').find('.active').find('a').should('contain','Home')
//     //     })
//     // })
//     // it('verify the iframe',()=>{
//     //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//     //     cy.get('#frame').then((el)=>{
//     //         cy.wrap((el[0].contentDocument.body)).as('iframe')
//     //         cy.get('@iframe').find('.active').find('a').should('contain','Home')
//     //     })
//     // })
//     it('verify the intercept',()=>{
//         cy.intercept({
//             method:'GET',
//             url:'https://jsonplaceholder.cypress.io/comments/1'
//         }).as('getcomment')
//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.get('button[class="network-btn btn btn-primary"]').click()
//         cy.wait('@getcomment')
//         cy.get('.network-comment').should('contain','laudantium')
//     })
//    it('verify the post comment by intercept',()=>{
//         cy.intercept({
//             method:'POST',
//             url:'https://jsonplaceholder.cypress.io/comments'
//         }).as("postcomment")
//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.get('.network-post.btn').click()
//         cy.wait('@postcomment')
//         cy.get('.network-post-comment').should('contain',"POST successful!")
//    })
//    it.only('verify the post comment by intercept',()=>{
//        cy.intercept({
//            method:'GET',
//            url:'https://jsonplaceholder.cypress.io/comments/1'
//        }).as('getcomment')
//        cy.visit("https://example.cypress.io/commands/network-requests")
//        cy.get('button[class="network-btn btn btn-primary"]').click()
//        cy.wait('@getcomment').then((ab)=>{
//            //cy.log(ab)
//            expect(ab.response.statusCode).to.eq(200)
//        })
//    })
// })


describe("Dynamic dropdown", () => {
    it('dropdown testing', () => {
        cy.visit('https://paytm.com/train-tickets')
        cy.get('div[data-reactid="164"] >._2WNb >div[class="fl-input-container"] >#text-box').clear().type('chen')
        cy.get('div[class="16Y"]').find('._3ewH').find('div[class="_3sXO"]').each((el, index) => {
            let station = el.text()
            if (station == 'MAS - MGR Chennai Central') {
                cy.wrap(el).click()
            }
        })
    })
    it('Dynamic dropdown', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#autocomplete').clear().type('indi')
        cy.get('li[class="ui-menu-item"]').each((el, index) => {
            let ele = el.text()
            if (ele == 'India') {
                cy.wrap(el).click()
            }
        })
    })
    it('Dynamic dropdown', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#autocomplete').clear().type('ind')
        cy.get('div[class="ui-menu-item-wrapper"]').each((el, index) => {
            if (el.text() == 'India') {
                cy.wrap(el).click()
            }
        })
    })


    it('checkbox assertion', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        //   cy.get('input[id="checkBoxOption1"]').check()
        cy.get('input[id="checkBoxOption1"]').check().should('be.checked')
        cy.get('input[id="checkBoxOption2"]').check().should('be.checked')
        cy.get('input[id="checkBoxOption3"]').check().should('be.checked')


    })


    it('radio button', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('input[value="radio1"]').click().should('be.checked')
        cy.get('input[value="radio2"]').click().should('be.checked')
        cy.get('input[value="radio3"]').click().should('be.checked')

    })

    it.only('mouseover', () => {
        cy.visit('https://www.aubank.in/personal-banking/savings-account')
        cy.get('a[class="navtext hidden-xs"]').first().find('span').trigger('mouseover')
    })

})