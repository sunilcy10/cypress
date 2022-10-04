
describe('practice',()=>{
    it('alert',()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert',function(str){
            expect(str).to.equal('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
        // cy.get('#result').should('be.visible').and('have.text','You successfully clicked an alert')
    })
    it.skip('alert boxes',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert',function(str){
            expect(str).to.equal('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('be.visible').and('have.text','You successfully clicked an alert')
    })
    it('confirm',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(str){
            expect(str).to.equal('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    it('prompt',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(rl=>{
            cy.stub(rl,'prompt').returns('hello')
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('have.text','You entered: hello')
    })
    it.only('Download',()=>{
        cy.visit('')
        cy.downloadFile()

    })

})
// // describe('verify the login functinality', () => {
// //     it('table verification', () => {
// //         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
// //         let sum = 0;
// //         cy.get('#t01').find('tr').each((el, index) => {
// //             if (index != 0) {
// //                 sum += Number(el.children().last().text())
// //             }
// //         }).then(() => {
// //             expect(sum).to.eq(159)
// //         })

// const { describe } = require("mocha");

// import { Context } from "mocha";


// //     })
// //     it('verify the table',()=>{
// //         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
// //         let sum = 0;
// //         cy.get('#t02').find('tr').each((el,index)=>{
// //             if(index!=0){
// //                 sum += Number(el.children().last().text())
// //             }
// //         }).then(()=>{
// //             expect(sum).to.eq(163)
// //         })
// //     })
// //     it('verify the iframe',()=>{
// //         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //         cy.get('#frame').then((el)=>{
// //             cy.wrap(el.contents().find('body')).as('iframe')
// //             cy.get('@iframe').find('.active').find('a').should('contain','Home')
// //         })
// //     })
// //     it('verify the iframe',()=>{
// //         cy.get('#frame').then((el)=>{
// //             cy.wrap(el.contentDocument().body).as('iframe')
// //             cy.get('@iframe').find('.active').find('a').should('contain','Home')
// //         })
// //     })
// //     it.only('verify the alarm',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.window().then((el)=>{
// //             cy.stub(el,'alert').as('alert1')
// //         })
// //         cy.get('button[onclick="jsAlert()"]').click()
// //         cy.get('@alert1').should('have.been.CalledOnceWith','I am a JS Alert')
// //     })

// //     it('verify the confirm box',()=>{
// //         cy.window().then((el)=>{
// //             cy.stub(el,'confirm').as('confirm')
// //         })
// //         cy.get('button[onclick="jsConfirm()"]').click()
// //         cy.get('@confirm').should('have.text','I am a JS Confirm')
// //     })

// //     it.only('using window object', () => {
// //         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
// //         cy.window().then((win) => {
// //             cy.stub(win, 'alert').as('alert')
// //             //cy.wrap(win.alert).as('alert')
// //         })
// //         cy.get('#button1').click()
// //         cy.get('@alert').should('have.been.calledOnceWith', "I am an alert box!")
// //     })

// // })


// describe('validate recamanded movies name ',()=>{
//     it('validate movies name',()=>{
//         cy.on('uncaught:exception',()=>{
//             return false
//         })
//         cy.visit('https://in.bookmyshow.com/explore/home/pune')
//         cy.get('div[class="sc-lnhrs7-0 bKwTw"]').find('a').each((el)=>{
//             let name = el.text()
//             cy.log(name)
//         })
//         // cy.get('div[class="sc-lnhrs7-0 bKwTw"]').find('a').then((el)=>{
//         //          let name = el.text()
//         //          cy.log(name)
//         //     })


//     })
//     it('validate the movie',()=>{
//         cy.on('uncaught:exception',()=>{
//             return false 
//         })
//         cy.visit('https://in.bookmyshow.com/explore/home/pune')

//         cy.get('div[class="sc-lnhrs7-0 bKwTw"]').find('a').each((el)=>{                  ////div[class="sc-lnhrs7-2 eQezya"]
//             let aa = el.text()
//             cy.log(aa)
//         })
//     })
// // })

// // describe('validating flipcart site ',()=>{
// //     it('validating flipcart site number of pages ',()=>{
// //         cy.visit('https://www.flipkart.com/')
// //         cy.get('._3704LK').type('mobile {enter}')
// //         cy.get('select[class="_2YxCDZ"]').first().select('7000')
// //         cy.get('select[class="_2YxCDZ"]').last().select('20000')
// //         cy.get('[class="_4921Z t0pPfW"]').eq(3).click()
// //         cy.get('[class="_10Ermr"]').should('have.text','Showing 1 – 24 of 407 results for "mobile "')
// //         cy.get('[class="_1fQZEK"]').eq(6).invoke('removeAttr','target').click()
// //         // cy.get('[class="_2KpZ6l _2U9uOA ihZ75k _3AWRsL"]').click()
// //         cy.get('[class="_1_3w1N"]').click()
// //         cy.get('[class="IiD88i _351hSN"]').first().type('9049128830')
// //         cy.get('[class="IiD88i _351hSN"]').last().type('Y9@1994y')
// //         cy.get('[class="_2KpZ6l _2HKlqd _3AWRsL"]').click()
// //         cy.get('form > ._2KpZ6l').realClick()
// //         // cy.get('.row > :nth-child(1) > ._2KpZ6l').click({force:true})
// //         cy.get('form > ._2KpZ6l').should('be.visible')

// //         // cy.get('[class="_2KpZ6l _2U9uOA ihZ75k _3AWRsL"]').click()

// //         // // cy.get('[class="_1p3MFP dTTu2M"]>UL>LI').last().click()


// //        // cy.get('#result-stats').should('have.text','About 1,15,00,00,000 results (0.46 seconds) ')
// //     })
// // })

// context('verify iframe', () => {
//     specify.skip('i frame by jquery', () => {
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then((el) => {
//             cy.wrap(el.contents().find('body')).as('iframe')
//             cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
//         })
//     })
//     specify.skip('iframe by java', () => {
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then((el) => {
//             cy.wrap(el['0'].contentDocument.body).as('iframe')
//             cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
//         })
//     })
//     specify.skip('parents', () => {
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.wait(4000)
//         cy.get('input[name="first_name"]').parents().eq(2).should('have.class', "container")///.should('have.id',"before-appbar")
//     })
//     specify.skip('amazon', () => {
//         cy.visit('https://www.amazon.in/')
//         cy.get('#twotabsearchtextbox').click().type('bag')
//         cy.get('[class="s-suggestion-container"]').each((el, index) => {
//             if (el.text() == "bags for mens") {
//                 cy.wrap(el).eq(index).clcik()
//             }
//         })

//     })
//     // describe('verify the shadow DOM element',function(){
//     it.only('verify the shadow DOM element text', function () {
//         cy.visit('http://127.0.0.1:5501/index.html')
//         cy.get('button').click()
//         cy.wait(2000)
//         cy.get('div#shadowHost').shadow().find('h2')
//         cy.get('#name').type('hello')

//     })

//     it.skip('verify  the book app', function () {

//         cy.visit('https://books-pwakit.appspot.com/')
//         cy.get('book-app').shadow()
//             .find('app-toolbar')
//             .find('input')
//             .type('hello')

//     })

//     it('verify the shadow DOM element text', function () {
//         cy.visit('http://127.0.0.1:5501/index.html')
//         cy.get('button').click()
//         cy.wait(2000)
//         cy.get('div#shadowHost').find('h2')
//         cy.get('#name').type('hello')

//     })

//     it('verify  the book app', function () {
//         cy.visit('https://books-pwakit.appspot.com/')
//         cy.get('book-app')
//             .find('app-toolbar')
//             .find('input')
//             .type('hello')

//         // })


//     })
// })


// describe('api', () => {
//     it('verify the create user API', function () {
//         let payload =
//         {
//             "name": "Tenali Ramakrishna",
//             "gender": "male",
//             "email": `${Math.random() * 730}tenali.ramakrishna@17775ce.com`,
//             "status": "active"
//         }

//         cy.request({
//             method: "POST",
//             url: "https://gorest.co.in/public/v2/users",
//             Headers: {
//                 Authorization: token
//             },
//             {
//                 body: payload

//                 // body: {
//                 //     "name": "Tenali Ramakrishna",
//                 //     "gender": "male",
//                 //     "email": `${Math.random() * 730}tenali.ramakrishna@17775ce.com`,
//                 //     "status": "active"

//                 // }

//             }

//         }).then(function (response) {
//                 cy.log(response)
//             })
// })

// describe('api', () => {
//     it('post request', () => {
//         cy.request({
//             method: 'POST',
//             url: "https://gorest.co.in/public/v2/users",
//             headers: {
//                 Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
//             },
//             body: {
//                 "name": "Tenali Ramakrishna",
//                 "gender": "male",
//                 "email": `tenali${Math.random() * 730}.ramakrishna@17775ce.com`,
//                 "status": "active"
//             }

//         }).then(function (res) {
//             cy.log(res)
//         })
//     })
// })
