
export default utilmethods;
class utilmethods {
    buildStructure(element1, passArray, passIndexNumber, passCityarr) {
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')

        cy.get(element1).each((el, index) => {
            if (el.text() == passArray[index]) {
                cy.get('table.tsc_table_s13 tbody tr').eq(index).find('td').eq(passIndexNumber).then(el => {
                    expect(el.text()).to.eq(passCityarr[index])
                })
            }

        })
    }
}