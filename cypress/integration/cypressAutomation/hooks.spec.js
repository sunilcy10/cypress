describe('verify the concept of hooks',()=>{


    before(function(){
        cy.log('Before block')
    })


    beforeEach(function(){
        cy.log('Before Each')
    })


    it('Test case One',function(){
        cy.log('Testcase One')
    })
    it('Test case Two',function(){
        cy.log('Testcase Two')
    })


    afterEach(function(){
        cy.log('After Each')
    })


    after(function(){
        console.log('After')
    })




})