// describe('verify the various js alert',function(){
//     // window object
//         it('validate JS window:alert',function(){
//             cy.on('window:alert',function(str){
//                 expect(str).to.eq('I am an alert box!')
//             })
//             cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//             cy.get('#button1').click()
//         })

//         it('validate JS window:confirm ok',function(){
//             cy.on('window:confirm',function(str){
//                 console.log(str)
//                 return true
//             })
//             cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//             cy.get('#button4').click()
//             cy.get('#confirm-alert-text').should('have.text',"You pressed OK!")
//         })

//         it('validate JS window:confirm cancel',function(){
//             cy.on('window:confirm',function(str){
//                 expect(str).to.eq('Press a button!')
//                 return false
//             })
//             cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//             cy.get('#button4').click()
//             cy.get('#confirm-alert-text').should('have.text',"You pressed Cancel!")

//         })


//         // window -- object ==> 3 alert ---> js alert , confirm , prompt


//         it('validate JS window:prompt Ok',function(){
//             let text = "hello"
//             cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//             cy.window().then(function(obj){
//                     //cy.log(obj)
//                     cy.stub(obj,'prompt').returns(text)
//             })
//             cy.contains('Click for JS Prompt').click()
//             cy.get('#result').should('have.text',`You entered: ${text}`)

//         })

//         it('PROMPT js alert for null/cancel',()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//             cy.window().then((el)=>{
//                 cy.stub(el,'prompt').callsFake(()=> null)
//                 cy.contains('Click for JS Prompt').click()
//                 cy.get('#result').should('have.text','You entered:null')
//             })
//         })

//         // prompt cancel click 

//     })


describe('alert boxes', () => {
    it('verify the alert', function () {

        cy.on('window:alert', function (str) {
            expect(str).to.eql('I am an alert box!')
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get("#button1").click()
    })
    it('verify the confirm box positively', () => {
        cy.on("window:confirm", (str) => {
            console.log(str)
            return true
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get("#button4").click()
        cy.get('#confirm-alert-text').should('have.text', "You pressed OK!")
    })

    it('verify the confirm  box nagatively', () => {

        cy.on('window:confirm', (str) => {
            console.log(str)
            return false
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get("#button4").click()
        cy.get('#confirm-alert-text').should('have.text', "You pressed Cancel!")
    })
    it.only('verify the promt box positively', () => {
        let a = "hello"
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns(a)
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'hello')
    })

    it('validate JS window:prompt Ok', function () {
        let text = "hello"
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (obj) {
            //cy.log(obj)
            cy.stub(obj, 'prompt').returns(text)
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('have.text', `You entered: ${text}`)

    })
    it('verify the prompt negatively',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns(null)
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'hello')
    })
})