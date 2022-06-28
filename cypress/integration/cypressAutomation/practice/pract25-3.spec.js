// ///<reference types="cypress" />
// // // describe('traverse methods',() => {
// // //     it ('verify children method',() => {
// // //         cy.visit('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=486458706470&hvpos=&hvnetw=g&hvrand=2602357585887981246&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301900&hvtargid=kwd-10573980&hydadcr=14453_2154373&gclid=EAIaIQobChMI1KP587Ph9gIVbtOWCh3PAAYyEAAYASAAEgK8TPD_BwE')
// // //         cy.get('ol[class="a-carousel"]').children().should('have.length', 8)
// // //     })
// // // })



// // const { expect } = require("chai");
// // const { describe } = require("mocha");

// //<referance type="cypress"></referance>

// // const { expect } = require("chai")

// // const { describe } = require("mocha");




// // describe('Js alerts',()=>{
// //     it('normal js alert',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         Cypress.on('uncaught:exception', (err, runnable) => {
// //             return false
// //         })
// //         cy.contains('Click for JS Alert').click()
// //         cy.on('window:alert',(str)=>{
// //             expect(str).to.equals('I am a JS Alert')
// //         })
// //         cy.get('#result').should('be.visible')

// //     })

// //     it('confirm js alert for cancel',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         Cypress.on('uncaught:exception', (err, runnable) => {
// //             return false
// //         })
// //         cy.contains('Click for JS Confirm').click()
// //         cy.on('window:confirm',(str)=>{
// //             expect(str).to.equals('I am a JS Confirm')
// //             return false
// //         })
// //         cy.get('#result').should('have.text','You clicked: Cancel')

// //     })

// //     it('confirm js alert for ok',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         Cypress.on('uncaught:exception', (err, runnable) => {
// //             return false
// //         })
// //         cy.contains('Click for JS Confirm').click()
// //         cy.on('window:confirm',(str)=>{
// //             expect(str).to.equals('I am a JS Confirm')
// //             return true
// //         })
// //         cy.get('#result').should('have.text','You clicked: Ok')
// //     })


// //     it('prompt js alert for ok',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         Cypress.on('uncaught:exception', (err, runnable) => {
// //             return false
// //         })
// //         cy.contains('Click for JS Confirm').click()
// //         cy.on('window:confirm',(str)=>{
// //             expect(str).to.equals('I am a JS Confirm')
// //             return true
// //         })
// //         cy.get('#result').should('have.text','You clicked: Ok')
// //     })

// //     // stub driver
// //     it('prompt js alert for ok',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         Cypress.on('uncaught:exception', (err, runnable) => {
// //             return false
// //         })

// //         cy.window().then((el)=>{
// //             cy.stub(el,'prompt').returns("Hello I am new")
// //             cy.contains(/^Click for JS Prompt/).click()
// //         })

// //         cy.get('#result').should('contain','Hello I am new')

// //     })

// //     it('prompt js alert for ok',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         Cypress.on('uncaught:exception', (err, runnable) => {
// //             return false
// //         })

// //         cy.window().then((el)=>{
// //             cy.stub(el,'confirm').returns(true)
// //             cy.contains('Click for JS Confirm').click()
// //             cy.get('#result').should('have.text','You clicked: Ok')
// //         })
// //     })
// // })


// // it('verify the alert box', () => {
// //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //     cy.get('button[onclick="jsAlert()"]').click()
// //     cy.on('window:alert', (str) => {
// //         expect(str).to.equal('I am a JS Alert')
// //     })
// //     cy.get('#result').should('contain', 'You successfully clicked an alert')
// // })
// // it('verify the alert box', () => {
// //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //     cy.get('button[onclick="jsConfirm()"]').click()
// //     cy.on('window:confirm', (str) => {
// //         expect(str).to.equal('I am a JS Confirm')
// //     })
// //     cy.get('#result').should('contain', 'Ok')
// // })
// // it('verify the alert box', () => {
// //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

// //     cy.window().then((el) => {
// //         cy.stub(el, 'prompt').returns('abcd')

// //     })
// //     cy.get('button[onclick="jsPrompt()"]').click()
// //     cy.get('#result').should('contain', 'abcd')
// // })
// // it('verify the iframe by jquery', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el.contents().find('body')).as('iframe')
// //         cy.get('@iframe').find('.active').find('a').should('have.text', 'Home')
// //     })
// // })
// // it('verify the iframe by jquery', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el[0].contentDocument.body).as('iframe')
// //         cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
// //     })
// // })
// // it('verify iframe by jquery', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el.contents().find('body')).as('iframe')
// //         cy.get('@iframe').find('.active').find('a').should('have.text', 'Home')
// //     })
// //     })
// // it("Handling iframes with jquery", () => {
// //     cy.visit('https://the-internet.herokuapp.com/iframe')
// //     cy.get('#mce_0_ifr').then($el => {
// //         cy.wrap($el.contents().find('body')).as('iframeBody');
// //         cy.get('@iframeBody').find('p').should('have.text', "Your content goes here.");
// //         cy.get('@iframeBody').find('p').click().clear()
// //             .then(() => {
// //                 cy.get('@iframeBody').type("welcome to the world of Automation");
// //             })
// //     })
// // })
// // // 
// // it('verify the js window:alert', () => {
// //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //     cy.window().then(function (el) {
// //         cy.stub(el, 'prompt').returns(() => null)
// //     })
// //     cy.contains('Click for JS Prompt').click()
// //     cy.get('#result').should('contain', " ")

// // })
// // it('verify the fixture',()=>{
// //     cy.fixture('username').then((data)=>{
// //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
// //     cy.get('input[name="first_name"]').type(data.fname)
// //     cy.get('input[name="last_name"]').type(data.lname)
// //     cy.get('input[name="email"]').type(data.email)
// //     cy.get('textarea[name="message"]').type(data.comment)
// //     cy.get('input[type="submit"]').click()
// //     cy.get('#contact_reply').should('contain','Thank You')
// // })
// // })
// // it.only('verify the table by using commands',()=>{
// //     cy.tableverify('#t01',159)
// // })
// // it('verify the iframe witt jquery', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el.contents().find('body')).as('iframe')
// //         cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
// //     })
// // })
// //     it('verify the iframe with java',()=>{
// //         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //         cy.get('#frame').then((el)=>{
// //             cy.wrap(el[0].contentDocument.body).as('iframe')
// //             cy.get('@iframe').find('.active').find('a').should('contain','Home')
// //         })
// // })

// // it('verify the iframe with jquery', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el.contents().find('body')).as('iframebody')
// //         cy.get('@iframebody').find('.active').find('a').should('contain', 'Home')
// //     })
// // })
// // it('verify the iframe with jquery', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el.contents().find('body')).as('iframe')
// //         cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
// //     })
// // })
// // it('verify the iframe with java', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el['0'].contentDocument.body).as('iframe')
// //         cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
// //     })
// // })
// //     it('verify the alert box', () => {
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.get('button[onclick="jsAlert()"]').click()
// //         cy.on('window:alert',(str)=>{
// //         expect(str).to.equal('I am a JS Alert')
// //         return true
// //         })
// //         cy.get('#result').should('contain','You successfully clicked an alert')
// //     })
// //     it('verify the confirm box', () => {
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.get('button[onclick="jsConfirm()"]').click()
// //         cy.on('window:alert',(str)=>{
// //             expect(str).to.equal('I am a JS Confirm')
// //             return true
// //         })
// //         cy.get('#result').should('contain','Ok')
// //     })
// //     it('verify the prompt box', () => {
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.window().then((el)=>{
// //             cy.stub(el,'prompt').returns('happy')
// //         })
// //         cy.get('button[onclick="jsPrompt()"]').click()
// //         cy.get('#result').should('contain','happy')
// //     })

// // })
// // it('verify the js window:alert', () => {
// //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //     cy.window().then(function (el) {
// //         cy.stub(el, 'prompt').returns("Here we go!")
// //     })
// //     cy.contains('Click for JS Prompt').click()
// //     cy.get('#result').should('contain', "Here we go!")

// // })
// // })

// // const { expect } = require("chai")
// // / <reference types="cypress" />

// // describe('verify the iframe', () => {
// //     it('verify the iframe by jquery', () => {
// //         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //         cy.get('#frame').then((el) => {
// //             cy.wrap(el.contents().find('body')).as('iframe')
// //             cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
// //         })
// //     })
// //     it('verify the iframe by java', () => {
// //         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //         cy.get('#frame').then((el) => {
// //             cy.wrap(el[0].contentDocument.body).as('iframe')
// //             cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
// //         })
// //     })
// //     it('verify the checkbox',()=>{
// //      cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
// //      let a =['java','maven','css']
// //      cy.get('.section-title').first().children().should('have.length',3)
// //      cy.get('.section-title').first().children().each((el,index)=>{
// //          cy.wrap(el).select(a[index]).should('have.value',a[index])
// //      })
// //     })
// //     it('verify the checkbox',()=>{
// //         cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
// //         cy.get('#radio-buttons').find('input[name="color"]').should('have.length',5)
// //         cy.get('#radio-buttons').find('input[name="color"]').each((el)=>{
// //            cy.wrap(el).click().should('be.checked')
// //        })
// //     })
// //     it.only('verify the get request',()=>{
// //         cy.request({
// //             method :'GET',
// //             url : 'https://reqres.in/api/users?page=2'
// //         }).then((obj)=>{
// //             cy.log(obj)
// //             expect(obj.status).to.eq(200)
// //             //expect(obj.body.data).to.have.all.keys('id','first_name','last_name','email','avatar')
// //             obj.body.data.forEach(element => {
// //                 expect(element).to.have.all.keys('id','first_name','last_name','email','avatar')
// //             });
// //         })
// //     })
// // })

// // describe('verify opencart',()=>{
// //     it('verify with valid credentials',()=>{
// //         cy.visit('https://www.opencart.com/index.php?route=account/login')
// //         cy.get('#input-email').type('sunilcy10@gmail.com')
// //         cy.get('#input-password').type('123456789')
// //         cy.get('button[class="btn btn-primary btn-lg hidden-xs"]').click({force:true})
// //         //cy.wait(30000)
// //         cy.get('h2').should('contain','Please confirm who you are!')
// //     })
// //     it.only('verify with valid credentials',()=>{
// //         cy.visit('https://www.opencart.com/index.php?route=account/login')
// //         cy.get('#input-email').type('sunilcy10@gmail.com')
// //         cy.get('#input-password').type('12345678')
// //         cy.get('button[class="btn btn-primary btn-lg hidden-xs"]').click({force:true})
// //         //cy.wait(30000)
// //         cy.get('div[class="alert alert-danger"]').should('contain',' No match for E-Mail and/or Password.')
// //     })
// // })

// // describe('verify the get request', () => {

// //     it('verify the GET user request', () => {
// //         cy.request({
// //             method: 'GET',
// //             url: "https://gorest.co.in/public/v2/users",
// //             headers: {
// //                 Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
// //             }
// //         }).then(function (res) {
// //             let r = res.body.some(function (el) {
// //                 return el.name.startsWith('G')
// //             })
// //             expect(r).to.eq(true)

// //         })

// //     })

// //     it('verify the GET request for post', () => {
// //         cy.request({
// //             method: 'GET',
// //             url: "https://gorest.co.in/public/v2/posts",
// //             headers: {
// //                 Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
// //             }
// //         }).then(function (res) {

// //             expect(res.status).to.eq(200)
// //             res.body.forEach(element => {
// //                 expect(element.body.length)
// //                     .to.be.gt(1)

// //             });
// //             // let r = res.body.some(function(el){
// //             //     return el.name.startsWith('G')
// //             // })
// //             // expect(r).to.eq(true)
// //         })

// //     })


// //     it('verify Create API for users', () => {
// //         cy.request({
// //             method: 'POST',
// //             url: "https://gorest.co.in/public/v2/users",
// //             headers: {
// //                 Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
// //             },
// //             body: {
// //                 name: "Tenali Ramakrishna",
// //                 gender: "male",
// //                 email: `tei.ramakrissa${Math.random() * 100}@15ce.com`,
// //                 status: "active"
// //             }
// //         }).then(function (res) {
// //             expect(res.status).to.eql(201)
// //             expect(res.body).to.have.property('id')
// //             //cy.log(res

// //         })

// //     })

// //     //GET -//https://gorest.co.in/public/v2/users ==> take one single id

// //     //PUT - https://gorest.co.in/public/v2/users/2775 ===> payload(changes)

// //     // GET - https://gorest.co.in/public/v2/users/2775  ===? validate payload


// //     it.only('verify Create API for users', () => {

// //         let updateEmail = 'ram2@gmail.com'
// //         let id = ""
// //         cy.request({
// //             method: 'GET',
// //             url: "https://gorest.co.in/public/v2/users",
// //             headers: {
// //                 Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
// //             }
// //         }).then(function (res) {
// //             expect(res.status).to.eql(200)
// //             id = res.body[0].id

// //         }).then(function () {

// //             cy.request({
// //                 method: 'PUT',
// //                 url: `https://gorest.co.in/public/v2/users/${id}`,
// //                 headers: {
// //                     Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
// //                 },

// //                 body: {
// //                     "name": "Allasani Peddana",
// //                     "email": updateEmail,
// //                     "status": "active"
// //                 }
// //             })

// //         }).then(function() {

// //             cy.request({
// //                 method: 'GET',
// //                 url: `https://gorest.co.in/public/v2/users/${id}`,
// //                 headers: {
// //                     Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
// //                 }
// //             }).then(function (res) {
// //                 expect(res.body.email).to.equal(updateEmail)
// //             })

// //         })

// //     })

// // })

// // delete

// // curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPATCH "https://gorest.co.in/public/v2/users/123" -d '{"name":"Allasani Peddana", "email":"allasani.peddana@15ce.com", "status":"active"}'

// // describe('verify iframe', () => {
// // it('verify the iframe by jquery', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el.contents().find('body')).as('iframe')
// //         cy.get('@iframe').find('.active').find('a').should('have.text', "Home")
// //     })
// // })
// // it('verify the iframe by java', () => {
// //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
// //     cy.get('#frame').then((el) => {
// //         cy.wrap(el['0'].contentDocument.body).as('iframe')
// //         cy.get('@iframe').find('.active').find('a').should('have.text', 'Home')
// //     })
// // // })
// // it('verify the alert on cy.on', () => {
// //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //     cy.get('button[onclick="jsAlert()"]').click()
// //     cy.on('window:alert', (str) => {
// //         expext(str).to.equal('I am a JS Alert')
// //         //return true
// //     })
// //     //cy.get('#result').should('contain','Ok')
// // })
// // it('to test dynamic dropDown', () => {
// //     cy.visit('https://paytm.com/train-tickets')
// //     cy.get('[data-reactid="164"] > ._2WNb > .fl-input-container > #text-box').clear().type('del')
// //     cy.get('div[class="16Y"]').find('._3ewH').find('div[class="_3sXO"]').each((el, index) => {
// //         let station = el.text()
// //         //cy.log(station)
// //         if (station == 'NZM - Hazrat Nizamuddin Delhi') {
// //             cy.wrap(el).eq(index).click();
// //         }
// //     })
// // })
// // it.only('to test dynamic dropDown', () => {
// //     cy.visit('https://www.opencart.com/index.php?route=account/register')
// //     cy.get('#input-country').clear().type('ind')
// //     cy.get('option').each((el, index) => {
// //         let station = el.value()
// //         //cy.log(station)
// //         if (station == 99
// //             ) {
// //             cy.wrap(el).eq(index).click();
// //         }
// //     })
// // })
// //     it('verify rhe alert',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.get('button[onclick="jsAlert()"]').click()
// //         cy.on('window:alert',(str)=>{
// //             expect(str).to.eq('I am a JS Alert')
// //         })
// //         cy.get('#result').should('contain','You successfully clicked an alert')
// //     })
// //     it('verify rhe alert',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.get('button[onclick="jsConfirm()"]').click()
// //         cy.on('window:confirm',(str)=>{
// //             expect(str).to.eq('I am a JS Confirm')
// //             //return true
// //         })
// //         cy.get('#result').should('contain','You clicked: Ok')
// //     })
// //     it('verify rhe alert',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.window().then((el)=>{
// //         //   cy.log(el)
// //         //   expect(el.jsPrompt).to.returned("good morning")
// //           //return true
// //           cy.stub(el,'prompt').returns('good morning')
// //         })
// //         cy.get('button[onclick="jsPrompt()"]').click()
// //         cy.get('#result').should('contain','good morning')
// //     })
// //     it('verify rhe alert',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.window().then((el)=>{
// //             cy.stub(el,'alert').as('alert')
// //         })
// //         cy.get('button[onclick="jsAlert()"]').click()
// //         cy.get('@alert').should('have.been.calledOnceWith','I am a JS Alert')
// //     })
// //     it.only('verify confirm',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.window().then((el)=>{
// //             cy.stub(el,'confirm').as('confirm')
// //             return true
// //         })
// //         cy.get('button[onclick="jsConfirm()"]').click()
// //         cy.get('@confirm').should('have.been.calledOnce','I am a JS Confirm')
// //         cy.get('#result').should('contain','You clicked: Ok')
// //     })
// //     it('verify confirm',()=>{
// //         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
// //         cy.window().then((el)=>{
// //      cy.stub(el,'prompt').returns(()=>null)
// //         })
// //         cy.get('button[onclick="jsPrompt()"]').click()
// //         cy.get('#result').should('contain','')
// //     })
// // })

// //////////////////////------------------------------------------------------------------------______________________________________________
// describe('verify the alerts', () => {
//     // it('verify the alert by on', () => {
//     //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     //     cy.get('button[onclick="jsAlert()"]').click()
//     //     cy.on('window:alert', (el) => {
//     //         expect(el).to.equal('I am a JS Alert')
//     //         // return true
//     //     })
//     //     //cy.get('#result').should('have.text','You successfully clicked an alert')
//     // })
//     // // it.only('verify the alert by on', () => {
//     // //     cy.visit('https://www.irctc.co.in/nget/train-search')
//     // //     cy.get('button[onclick="jsAlert()"]').click()
//     // //     cy.on('window:alert', (el) => {
//     // //         expect(el).to.equal('I am a JS Alert')
//     // //        // return true
//     // //     })
//     // //     //cy.get('#result').should('have.text','You successfully clicked an alert')
//     // // })
//     // it('verify the alert by window', () => {
//     //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

//     //     cy.window().then((el) => {
//     //         cy.stub(el, 'alert').as('alet')
//     //     })
//     //     cy.get('button[onclick="jsAlert()"]').click()
//     //     cy.get('#result').should('have.text', 'You successfully clicked an alert')

//     // })
//     // it('verify the confirm box by on', () => {
//     //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     //     cy.get('button[onclick="jsConfirm()"]').click()
//     //     cy.on('window:confirm', (el) => {
//     //         expect(el).to.equal('I am a JS Confirm')
//     //         return true
//     //     })
//     //     cy.get('#result').should('have.text', 'You clicked: Ok')
//     // })
//     // it('verify the confirm box by on', () => {
//     //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     //     cy.get('button[onclick="jsConfirm()"]').click()
//     //     cy.on('window:confirm', (el) => {
//     //         expect(el).to.equal('I am a JS Confirm')
//     //         return false
//     //     })
//     //     cy.get('#result').should('have.text', 'You clicked: Cancel')
//     // })
//     // it('verify the confirm box by on', () => {
//     //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     //     cy.window().then((el) => {
//     //         cy.stub(el, 'confirm').returns(true)
//     //     })
//     //     cy.get('button[onclick="jsConfirm()"]').click()
//     //     cy.get('#result').should('have.text', 'You clicked: Ok')
//     // })
//     // it('verify the confirm box by on', () => {
//     //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     //     cy.window().then((el) => {
//     //         cy.stub(el, 'confirm').returns(false)
//     //     })
//     //     cy.get('button[onclick="jsConfirm()"]').click()
//     //     cy.get('#result').should('have.text', 'You clicked: Cancel')
//     // })
//     // it('verify the confirm box by on', () => {
//     //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     //     cy.window().then((el)=>{
//     //         cy.stub(el,'prompt').returns('good morning')
//     //     })
//     //     cy.get('button[onclick="jsPrompt()"]').click()
//     //     cy.get('#result').should('have.text', 'You entered: good morning')
//     // })
//     // it.only('verify the confirm box by on', () => {
//     //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     //     cy.window().then((el)=>{
//     //         cy.stub(el,'prompt').returns(() => null)
//     //     })
//     //     cy.get('button[onclick="jsPrompt()"]').click()
//     //     cy.get('#result').should('contain', ' ')
//     // })
//     // it('au finance',()=>{
//     //     cy.visit('https://www.aubank.in/')
//     //     cy.contains('Accounts').click().children().should('have.length',4)
//     // })

//     it('iframe ',()=>{
//         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then((el)=>{
//             cy.wrap(el.contents().find('body')).as('iframe')
//         })
//         cy.get('@iframe').find('.active').find('a').should('have.text','Home')
//     })
//     // it('verify the iframe with jquery', () => {
//     //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//     //     cy.get('#frame').then((el) => {
//     //         cy.wrap(el.contents().find('body')).as('iframebody')
//     //         cy.get('@iframebody').find('.active').find('a').should('contain', 'Home')
//     //     })
//     // })
// })

// // it('events', () =>{
// //     cy.visit('https://www.orangehrm.com/');
// //     cy.get('a[class="link"]').eq(0).trigger('mouseover')
// //     cy.get('div[class="secondary"]').eq(0).invoke('show')
// //     .should('be.visible')


// // })

// describe('links', () => {
    // it('total links', () => {
    //     cy.visit('https://www.google.com/search?q=Cascading+Dropdown+how+to+test+in+cypress&oq=Cascading+Dropdown+how+to+test+in+cypress&aqs=chrome..69i57j33i160l2j33i22i29i30.11932j0j15&sourceid=chrome&ie=UTF-8')
    //     let count = 0
    //     // cy.get('<a>').should('have.length',74)
    //     // cy.get('<a>').siblings().should('have.length',74)
    //     // cy.get('a[href*="http"]').should('have.length',74)
    //     // cy.get('a[href*="http"]').siblings().should('have.length',22)
    //     // cy.get('<a>').siblings().should('have.length',74)
    //    cy.contains('Next').then((el)=>{
           
    //     while(cy.wrap(el).should('be.visible')){
    //         count++
    //         cy.wrap(el).click()
    //       el++
    //     }
    //         cy.log(count)
      
        

    //    })
    // })
    //<reference types="cypress" />

context("Task", () => {
    specify("Get links on page", () => {
        cy.visit("https://www.google.co.in/");
        cy.get(".gLFyf.gsfi").type("Cypress{enter}");
        cy.get("a").each((el) => {
            cy.log(el.prop("href"));
        });
    });

    specify("Get last no of page", () => {
        cy.visit("https://www.google.co.in/");
        cy.get(".gLFyf.gsfi").type("Cypress{enter}");
        function load() {
            cy.get(".SJajHc").parent("a").last().then((el) => {
                if (el.text() == "Next") {
                    cy.wrap(el).click();
                    load();
                } else {
                    cy.log(`Last Page NO.  ${Number(el.text()) + 1}`);
                };
            });
        };
        load();
    });
});
// })