// describe('Date Piker()', () => {
//     it.only('strat the date piker()', () => {
//         let date1 = new Date()
//         date1.setDate(date1.getDate() + 500)
//         let year = date1.getFullYear()
//         // let month = date1.toLocaleString('default', { month: 'long' })
//         // let da = date1.getDate()

//         let month=date1.getMonth() + 1 
//         let curr_da = date1.getDate()
//         cy.log(year)
//         cy.log(month)
//         cy.log(curr_da)
//         cy.visit('http://demo.automationtesting.in/Datepicker.html')
//         cy.get('div[class="col-xs-1"]').click()
//         function SetYear() {
//             cy.get('div[class="ui-datepicker-title"]').then((el) => {
//                 cy.log(el.text())
//                 if (!el.text().includes(year)) {
//                     cy.get('.ui-datepicker-next.ui-corner-all').click()
//                     SetYear()
//                 }

//             })
//             cy.get('div[class="ui-datepicker-title"]').then((el) => {
//                 cy.log(el.text())
//                 if (!el.text().includes(month)) {
//                     cy.get('.ui-datepicker-next.ui-corner-all').click()
//                     SetYear()
//                 }
//             })
//             function cur_Date(){
//        cy.get('.ui-state-default').contains(curr_da).click({force:true})
//             }
//              cur_Date()
//         }
//         SetYear()

//     })
// })

