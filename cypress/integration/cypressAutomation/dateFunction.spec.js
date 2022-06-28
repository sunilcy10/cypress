// describe('Date function', () => {
//     it('verify the date function', () => {
//         cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
//         cy.get('.input-group-addon').click()

//         let bookingDate = new Date()
//         bookingDate.setDate(bookingDate.getDate() + 400)

//         let year = bookingDate.getFullYear()
//         let month = bookingDate.toLocaleString('default', { month: 'long' })
//         let day = bookingDate.getDay()

//         // console.log(bookingDate)

//         // console.log(year)
//         // console.log(month)
//         // console.log(day)

//         function selectMonthday() {

//             cy.get('.datepicker-switch').first().then((el) => {

//                 if (!el.text().includes(year)) {
//                     cy.get('.next').first().click()
//                     selectMonthday()
//                 }

//             }).then(() => {
//                 cy.get('.datepicker-switch').first().then((el) => {
//                     if (!el.text().includes(month)) {
//                         cy.get('.next').first().click()
//                         selectMonthday()
//                     }
//                 })

//             })
//         }
//         function selectDate() {
//             cy.contains('[class="day"]', day).click()
//         }
//         selectMonthday()
//         selectDate()
//     })

// })
//------------------------------------------------------------
describe('datefunction', () => {
    it('date', () => {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('[class="glyphicon glyphicon-calendar"]').click()
        let date = new Date()
        date.setDate(date.getDate() + 500)
        let month = date.toLocaleString('default',{month:'long'})
        let day = date.getDay()
        let year = date.getFullYear()

        function months() {
            cy.get('[class="datepicker-switch"]').first().then((el) => {
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    months()
                }
            }).then((el) => {
                cy.get('[class="datepicker-switch"]').first().then((el) => {
                    if (!el.text().includes(month)) {
                        cy.get('.next').first().click()
                        months()
                    }
                })
            })
        }
        function seledate(){
            cy.contains('[class="day"]',day).click()
        }
        months()
        seledate()
    })
})


// ///////sir code
// / object === > property and method

// let dateA =  new Date()
// console.log(dateA.getDate()+2)
// console.log(dateA.getMonth())
// console.log(dateA.getFullYear())
// january - 0

// let dateToSelect = new Date()
// dateToSelect.setDate(dateToSelect.getDate() + 400)

// let year = dateToSelect.getFullYear()
// let day = dateToSelect.getDate()
// let wordM = dateToSelect.toLocaleString('default', { month: 'long' })

// console.log(year)
// console.log(day)
// console.log(wordM)

// describe('verify the datepicker', () => {

//     it('verify the  calender', function () {

//         cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
//         cy.get('#datepicker').click()

//         let dateToSelect = new Date()
//         dateToSelect.setDate(dateToSelect.getDate() + 400)

//         let year = dateToSelect.getFullYear()
//         let day = dateToSelect.getDate()
//         let wordM = dateToSelect.toLocaleString('default', { month: 'long' })
//         // console.log(year)
//         // console.log(day)
//         // console.log(wordM)np



//         function selectMonthAndDate() {

//             // year
//             cy.get('.datepicker-switch').first().then(el => {
//                 // Janaury 2023
//                 if (!el.text().includes(year)) {
//                     cy.get('.next').first().click()
//                     selectMonthAndDate()
//                 }

//             }).then(() => {
//                 // mont
//                 cy.get('.datepicker-switch').first().then(el => {
//                     // Janaury 2023
//                     if (!el.text().includes(wordM)) {
//                         cy.get('.next').first().click()
//                         selectMonthAndDate()
//                     }

//                 })

//             })

//         }
//         function selectDate(){
//             cy.contains('[class="day"]',day).click()
//         }
//         selectMonthAndDate()
//         selectDate()


//     })


// })


