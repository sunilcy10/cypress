// // describe('datefunction', () => {
// //   it('date', () => {
// //       cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
// //       cy.get('[class="glyphicon glyphicon-calendar"]').click()
// //       let date = new Date()
// //       date.setDate(date.getDate() + 500)
// //       let month = date.toLocaleString('default',{month:'long'})
// //       let day = date.getDay()
// //       let year = date.getFullYear()
// //       cy.log(year)
// //       function months() {
// //           cy.get('[class="datepicker-switch"]').first().then((el) => {
// //               if (!el.text().includes(year)) {
// //                   cy.get('.next').first().click()
// //                   months()
// //               }
// //           }).then((el) => {
// //               cy.get('[class="datepicker-switch"]').first().then((el) => {
// //                   if (!el.text().includes(month)) {
// //                       cy.get('.next').first().click()
// //                       months()
// //                   }
// //               })
// //           })
// //       }
// //       function seledate(){
// //           cy.contains('[class="day"]',day).click()
// //       }
// //       months()
// //       seledate()
// //   })
// // })

// const cypress = require("cypress");

// const { expect } = require("chai");

// const cypress = require("cypress");

// // const cypress = require("cypress");

// describe("Alert & iframe", function () {
//   it("alert", function () {
//     cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
//     cy.get('[onclick="jsAlert()"]').click();
//     cy.on("window:alert", (str) => {
//       expect(str).to.eq("I am a JS Alert");
//     });
//     cy.get("#result").should("have.text", "You successfully clicked an alert");
//   });
//   //   it('alert boxes',()=>{
//   //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//   //     cy.on('window:alert',function(str){
//   //         expect(str).to.equal('I am a JS Alert')
//   //     })
//   //     cy.contains('Click for JS Alert').click()
//   //     cy.get('#result').should('be.visible').and('have.text','You successfully clicked an alert')
//   // })
//   it("confirm", () => {
//     cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
//     cy.get('[onclick="jsConfirm()"]').click();
//     cy.on("window:confirm", (el) => {
//       expect(el).to.eq("I am a JS Confirm");
//       return true;
//     });
//     cy.get("#result").should("have.text", "You clicked: Ok");
//   });
//   it("prompt", () => {
//     cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
//     cy.window().then((el) => {
//       cy.stub(el, "prompt").returns("hello");
//     });
//     cy.get('[onclick="jsPrompt()"]').click();
//     cy.get("#result").should("contain", "hello");
//   });
//   it("iframe javascript", () => {
//     cy.visit("https://the-internet.herokuapp.com/iframe");
//     cy.get("#mce_0_ifr").then((el) => {
//       cy.wrap(el["0"].contentDocument.body).as("iframee");
//       cy.get("@iframee").should("have.attr", "data-id");
//       cy.get("@iframee").find("p").click().type("hello");
//     });
//   });
//   it('iframe jquery',()=>{
//     cy.visit("https://the-internet.herokuapp.com/iframe");
//     cy.get("#mce_0_ifr").then((el) => {
//         cy.wrap(el.contents().find('body')).as('iframee')
//         cy.get("@iframee").should("have.attr", "data-id");
//         cy.get("@iframee").find("p").click().type("hello");
//     })
//   })
//   it('location object',()=>{
//     cy.visit("https://the-internet.herokuapp.com/iframe");
//     cy.location().then(el=>{
//         cy.log(el)
//     })
//   })
//   it('location object',()=>{
//     cy.visit("https://the-internet.herokuapp.com/iframe");
//     // cypress.browser().then(el=>{
//     //     cy.log(el)
//     // })
//     console.log(Cypress.browser)
//   })
//   it('',()=>{

//   })
// });

describe("test", function () {
  it("", function () {
    cy.visit("https://www.amazon.in/");
    cy.get("#twotabsearchtextbox").type("iphone");
    cy.get(".autocomplete-results-container")
      .find(".s-suggestion")
      .each(function (el) {
        cy.wrap(el)
          .invoke("text")
          .then(function (txt) {
            cy.log(txt.trim());
            if (txt.trim() == "iphone 11 cover") {
              cy.wrap(el).click();
              return false;
            }
          });
      });
  });
  it("", function () {
    cy.visit("https://www.flipkart.com/");
    cy.get("._3704LK").type("iphone");
    cy.get(".col-12-12._1MRYA1")
      .children()
      .each(function (el) {
        cy.wrap(el)
          .invoke("text")
          .then(function (txt) {
            if (txt.trim() == "iphone 13 pro max") {
              cy.wrap(el).click();
              return false;
            }
          });
      });
  });
  it("ifame", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.getIframe("#mce_0_ifr").click().type("hello");
  });
  it("Input text in the text editor which is inside an iframe", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    // cy.getIframe('#mce_0_ifr').clear().type('This is a test description.')
    cy.get("#mce_0_ifr").its("0.contentDocument.body");
  });
  it("", () => {
    cy.visit(
      "https://www.amazon.in/l/29701334031?pf_rd_r=BVGGBNHZ7BKSJCAGZ5DF&pf_rd_p=df3caf19-3afe-4f98-9f7d-7d19e468ea5d&pd_rd_r=9cac1ee3-34c7-480b-af04-85883f8cd303&pd_rd_w=aQXk5&pd_rd_wg=hcEVt&ref_=pd_gw_unk"
    );
    cy.get(".yuRUbf>a")
      .eq(0)
      .then((el) => {
        // cy.log(el.prop('href'))
        let qr = el.prop("href");
        // cy.log(qr)
        cy.request("qr").then((res) => {
          cy.log(res);
          // expect(res.status)
        });
      });
  });
  // it.only('uncaugh exception',()=>{
  //   return false
  // })
  it.only('flipcart',()=>{
    
    Cypress.on('uncaught:exception',(err,runnable)=>{return false})
    cy.visit('https://www.flipkart.com/')
    // cy.get('._2KpZ6l _2doB4z').click()
    cy.get('._3704LK').type('samsung')
    cy.wait(2000)
    cy.get('._3izBDY').each((el)=>{
      let text = el.text()
      cy.log(text)
      if(el.text()=='samsung mobilesin Mobiles'){
        cy.wrap(el).click()
      }
    })
})
  it("practice", () => {
    cy.visit(
      "https://www.coderglass.com/jquery/demo/country-state-city-dropdown/"
    );
    // cy.get('#country').select('India')
    // cy.get('#state').select('Karnataka')
    // cy.get('#city').select('Belgaum')
    cy.get("select")
      .first()
      .select("India")
      .then((allStates) => {
        cy.wrap(allStates).each((statelist) => {
          cy.log(statelist);
        });
        cy.get("select")
          .eq(1)
          .select("Maharashtra")
          .then((el) => {
            cy.wrap(el).each((a) => {
              cy.log(a);
            });
            cy.get("select").last().select("Pune");
          });
      });
  // });
  // cy.get("<select>").first().select('India').then((el,arr)=>{
  //  cy.log(arr)
  // })
  // cy.get("<select>").eq(1).select('Maharashtra').then((el,arr)=>{
  //   cy.log(arr)
  //  })
  // cy.get("<select>").last().select('Pune').then((el,arr)=>{
  //   cy.log(arr)
  //  })
  })

});
// Cypress.Commands.add('getIframe', (iframe) => {
//   return cy.get(iframe)
//       .its('0.contentDocument.body')
//       .should('be.visible')
//       .then(cy.wrap);
// })cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//     //cy.contains('Home')
//     cy.get('#frame').then(($el)=>{
//         cy.wrap($el['0'].contentDocument.body).as('iframebody')
//         cy.get('@iframebody').find('.active').find('a').should('have.text',"Home")
//     })

// cypress.Commands.add('getiframe',(iframe)=>{
//        cy.get(iframe).then(($el)=>{
//         cy.wrap(el['0'].contentDocument.body).as('iframebody')
//         cy.get('@iframebody').find('.active')
//        })
// })
