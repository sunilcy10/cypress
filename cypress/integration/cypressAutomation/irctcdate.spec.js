//< referance type= "cypress" />


describe(' irctc Date function', () => {

    // if('verify locators',()=>{
    //     cy.visit('https://demo.nopcommerce.com/')
    //     cy.get('[id="small-searchterms"]').type('Apple MacBook Pro 13-inch')
    //     cy.get('[type="submit"]').click()
    //     cy.get('[id="add-to-cart-button-4"]').click()
    //     cy.get('[class="ico-cart"]').click()

    // })

    it('date change', () => {
        cy.visit('https://www.irctc.co.in/nget/train-search')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('.ui-calendar > .ng-tns-c59-10').click()
        // cy.get('input[type="text"]').eq(3).click()
        cy.get('td[class="ng-tns-c59-10 ng-star-inserted"]').eq(18).click()

    })

    //     let bookingDate = new Date()
    //     bookingDate.setDate(bookingDate.getDate() + 4)
    //     let year = bookingDate.getFullYear()
    //     let month = bookingDate.toLocaleDateString('default', { month: 'long' })
    //     let day = bookingDate.getDay()

    //     function setyear() {
    //         cy.get('span[class="ui-datepicker-year ng-tns-c59-10 ng-star-inserted"]').then((el) => {

    //             if (!el.text().includes(year)) {
    //                 cy.get('span[class="ui-datepicker-next-icon pi pi-chevron-right ng-tns-c59-10"]').click()
    //                 setyear()
    //             }
    //         })
    //     }

    //     function setMonth() {
    //         cy.get('span[class="ui-datepicker-month ng-tns-c59-10 ng-star-inserted"]').then((el) => {
    //             if (!el.text().includes(month)) {
    //                 cy.get('span[class="ui-datepicker-next-icon pi pi-chevron-right ng-tns-c59-10"]').click()
    //                 setyear()
    //                 setMonth()
    //             }
    //         })

    //     }
    //     function setDate() {
    //         cy.contains('[class="ui-state-default ui-state-disabled ng-tns-c59-10 ng-star-inserted"]', day).click()
    //     }
    //     setyear()
    //     setMonth()
    //     setDate()
    // })

    // it('change date verify',()=>{
    //     cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    //     cy.get('.input-group-addon').click()

    //     let bookdate = new Date()

    //     bookdate.setDate(bookdate.getDate()+10)

    //     let year = bookdate.getFullYear()
    //     let month = bookdate.toLocaleString('default',{month:'long'})
    //     let day = bookdate.getDate()

    //     function selectdate(){
    //         cy.get('.datepicker-switch').first().then((el)=>{
    //             if(!el.text().includes(year)){
    //                 cy.get('.next').first().click()
    //                 selectdate()
    //             }
    //         }).then(()=>{
    //             cy.get('.datepicker-switch').first().then((el)=>{
    //                 if(!el.text().includes(month)){
    //                     cy.get('.next').first().click()
    //                     selectdate()
    //                 }
    //             })
    //         })
    //     }
    //     function selectday(){
    //         cy.contains('[class="day"]',day).click()
    //     }
    //     selectdate()
    //     selectday()
    // })

})