export default class utilmethods {


    static buildStructure(element1, passArray, passIndexNumber, passCityarr) {
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')

        cy.get(element1).each((el, index) => {
            if (el.text() == passArray[index]) {
                cy.get('table.tsc_table_s13 tbody tr').eq(index).find('td').eq(passIndexNumber).then(el => {
                    expect(el.text()).to.eq(passCityarr[index])
                })
            }

        })
    }

    static invokeTextAndAssert(element, index, expectedtext) {
        cy.get(element).eq(index).then((el, i) => {
            expect(el.text()).to.eq(expectedtext);
        })
    }

    
    static invokeTextAndAssertIncludes(element, index, expectedtext) {
        cy.get(element).eq(index).then((el, i) => {
            expect(el.text()).to.includes(expectedtext);
        })
    }



    static getElement(element) {
        cy.get(element).type()
    }


    static clickOnElement(element) {
        cy.get(element).click()
    }



    static dropDown() {
        cy.get('#lst').each((el, i) => {
            cy.log(el.text())
            if (el.text() == 'Orchid') {
                cy.get('subLst').trigger('mouseover').click()
            }
        })
    }

}