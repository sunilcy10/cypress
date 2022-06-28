/// <reference types="cypress" />
// describe('Learn Screenshot', () => {
//     beforeEach(()=>{
//         cy.visit('https://www.amazon.in/')
//     })
//     it('test case 1', () => {
//        cy.screenshot('amazon')   // amazon is file name
        
//     })
//     it('test case 2  cliping', () => {
//         cy.screenshot({ clip: { x: 20, y: 20, width: 400, height: 300 } })
//      })
//      it('test case 3   for perticular element', () => {
//       cy.get('a[aria-label="Amazon"]').screenshot('element')  // element if the file name to in
//       // which screenshot will be saaved
      
//      })
// })
describe('screen learn',()=>{
    beforeEach(function(){
        cy.visit('https://www.flipkart.com/?s_kwcid=AL!739!3!582822043916!e!!g!!flipkart&gclsrc=aw.ds&&semcmpid=sem_8024046704_brand_exe_buyers_goog&gclid=CjwKCAjw77WVBhBuEiwAJ-YoJOpvU7WDa404NNkrPD_lCoLw8SQq41Wq615QLBkeTHStJ0FuFX9mfhoCSrUQAvD_BwE')
    })
    it('test case 1',()=>{
        cy.screenshot('flipcart')
    })
    it('test case 2 cliping',()=>{
        cy.screenshot({clip:{x:50,y:40,width:200,height:500}})
    })
    it('test case 3 for perticular element',()=>{
        cy.get('img[title="Flipkart"]').screenshot('element')
    })
})