
export default assertFunc;
class assertFunc {

    invokeTextAndAssert(element, index, expectedtext) {
        cy.get(element).eq(index).then((el, i) => {
            expect(el.text()).to.eq(expectedtext);
        })
    }
    invokeTextAndAssertIncludes(element, index, expectedtext) {
        cy.get(element).eq(index).then((el, i) => {
            expect(el.text()).to.includes(expectedtext);
        })
    }
}
