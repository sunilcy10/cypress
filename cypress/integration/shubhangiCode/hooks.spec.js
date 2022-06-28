describe('Hooks Concept', function() {
    //before block will execeute here
    // before(function(){
    //     cy.log('this will execute before all TC at Once only')
    // })
    // after(function(){
    //     cy.log('this will execute after all TC at once only')
    // })
    
    beforeEach(() =>{
        cy.visit('/')
        cy.get('form .input-group > #user_email').eq(0).type('shubhangi5693@gmail.com')
        cy.get('.form-control.password.optional').eq(0).type('Test@123')
        cy.get('button[class="btn btn-primary submit "]').eq(0).click()

        cy.log('Runs before each test case')
    })
    afterEach(() =>{
        cy.get('a[class="user-profile dropdown-toggle"]').click()
        cy.get('a[href="/users/sign_out"]')
        cy.log('Runs after each test case')
    })//
it('validate image', function() {
cy.get('a img[class="avatar small"]').should('have.attr', 'title', 'shubhangi5693@gmail.com' )

})//
//
it('validate test is dashboard on The page', function() {

cy.get('span[class="hidden-sm-down"]').eq(0).should('have.text', 'Dashboard')



})
//


////after block will execute her

})




// describe.skip('hooks', function () {
//     before(function(){
        
//         cy.log('i am before')
//     })
//     after(function(){
//         cy.log('i am after')
//     })
      
//     beforeEach(() =>{
//         cy.visit('/')
//         cy.log('Runs before each test case')
//     })
//     afterEach(() =>{
//         cy.log('Runs after each test case')
//     })
//     it('test1', function () {
//    cy.log('i am test 1')
//     })
//     it('test2', function () {
// cy.log('i am test 2')
//     })

// })

describe('hooks concept',()=>{
    before(()=>{
        cy.log('run before all tc')
    })
    beforeEach(()=>{
        cy.log('Run before every it block')
    })
    afterEach(()=>{
        cy.log('run after every tc')
    })
    it('test1',()=>{
        cy.log('i am tc 1')
    })
    it('test2',()=>{
        cy.log('i am tc 2')
    })
   
    after(()=>{
        cy.log('run after all tc completed ')
    })
})