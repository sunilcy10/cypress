// describe('Verify IRCTC ticket window', () => {
    
//       it('alert',()=>{
//           cy.visit
//           cy.get('button[type="submit"]').click()
//       })

//     it('irctc dynamic drop down', () => {
//         cy.visit('https://www.irctc.co.in/nget/train-search')
//         cy.window().then(function (el) {
//             cy.stub(el, 'prompt').returns(true)
//         })
//         cy.get('button[type="submit"]').click()
//         cy.get('input[class="ng-tns-c58-8 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]')
//             .click().clear().type('pun')
//         cy.get('li[role="option"]').each((el, index) => {
//             if (el.text() == 'PUNE JN - PUNE') {
//                 cy.wrap(el).click()
//             }
//         })
//     })
//     it('open cart dynamic drop down', () => {
//         cy.visit('https://www.opencart.com/index.php?route=account/register')
//         cy.get("#input-country").click().type('ind')
//             .slelect('option[value="99"]').click()
//         // cy.get('option').then((el,index)=>{
//         //     if(el.text()== 'India'){
//         //         cy.wrap(el).click()
//         //     }
//         // })
//     })
//     it('fixture use', () => {
//         cy.fixture('username').then((data) => {
//             cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//             cy.get('input[name="first_name"]').type(data.fname)
//             cy.get('input[name="last_name"]').type(data.lname)
//             cy.get('input[name="email"]').type(data.email)
//             cy.get('textarea[name="message"]').type(data.comment)
//             cy.get('input[type="submit"]').click()
//             cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
//             cy.go(-1)
//         })
//     })
//     it('drop down and buttuns use', () => {
//         cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('#dropdowm-menu-1').select('JAVA').should('have.value', 'java')
//         let abc = ['c#', 'testng', 'css']
//         cy.get('div[class="section-title"]').first().children().each((el, index) => {
//             cy.wrap(el).select(abc[index]).should('have.value', abc[index])
//         })
//         cy.get('input[value="option-2"]').click().should('be.checked')
//         cy.get('input[value="blue"]').check().should('be.checked')
//         //cy.get('input[value="blue"]').check().should('be.checked')

//     })
//     it('iframe', () => {
//         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then((el) => {
//             cy.wrap(el.contents().find('body')).as('iframe')
//         })
//         cy.get('@iframe').find('.active').find('a').should('contain', 'Home')
//     })
//     it('table', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         let sum =0;
//         cy.get('#t01').find('tr').each((el,index)=>{
//             if(index != 0){
//                sum = sum + Number(el.children().last().text())
//             }

//         }).then((total)=>{
//             expect(sum).to.equal(159)
//         })
        
//     })
//     it('calling common',()=>{
//         cy.visit('')
//         cy.get('#t02').children().find('tr').each((el,index)=>{
//             if(index != 0){
//                 sum = sum + Number(el.children().last().text())
//             }
//         }).then(()=>{
//             expect(sum).to.eq(61)
//         })
//     })
//     it.only('alert',()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//            cy.window().then((el)=>{
               
//            })
//         cy.get('button[onclick="jsAlert()"]').click()
//         })

// })

describe('Learn Automation', () =>{
    it('test case 1', () =>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click();
        //implicite aasertion-> should
        //explicite -> expect
        cy.url().should('include', 'Contact-Us');
        cy.url().then((url) =>{
            expect(url).to.equal('http://webdriveruniversity.com/Contact-Us/contactus.html');
        })

    })
    it.only('Test the application form', () => {
        cy.visit('/');
        cy.get('input[class="feedback-input"]').eq(0).type('Aayush');
        cy.get('input[class="feedback-input"]').eq(1).type('Pawar');
        cy.get('input[class="feedback-input"]').eq(2).type('minskole@gmail.com');
        cy.get('textarea[name="message"]').type('We are learning Cypress');
        cy.get('input[type="submit"]').click();
        cy.get('div[id="contact_reply"] > h1').should('have.text','Thank You for your Message!');
    })
    it('use of each method',()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[class="feedback-input"]').each((element,index) =>{
           cy.wrap(element).type('minskole')


        })
    })
})