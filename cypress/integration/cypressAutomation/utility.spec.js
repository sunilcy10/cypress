 import assertFunc from "../../support/utility/assertion";
import utilmethods from './../../support/utility/utility';
let myObj = new utilmethods();
let asrtObj = new assertFunc();
var company = [];
var contacts = [];

describe('handling web tables',()=>{
    
it('Check addition of total runs', () => {
    var sum = 0;
    cy.visit('https://www.espncricinfo.com/series/8048/scorecard/1216494/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-indian-premier-league-2020-21')
    cy.get('.table.batsman').eq(0).find('tr td:nth-child(3)').as('firstList')
    cy.get('@firstList').each((el,index)=>{
        if(index != 10){
        cy.log(el.text())
        sum += Number(el.text())
        }
         }).then(()=>{
             expect(sum).to.eq(84)
         })
    asrtObj.invokeTextAndAssertIncludes('.table.batsman tfoot tr.total td.text-right',0,84)
})


var buildArr = ['Burj Khalifa','Clock Tower Hotel','Taipei 101','Financial Center']
var city = ['Dubai','Mecca','Taipei','Shanghai']
var rank = ['1','2','3','4']
var country = ['UAE','Saudi Arabia','Taiwan','China']
it('vrify the structure of the buldinkg and their Ranks', () => {
   cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
   cy.get('table.tsc_table_s13 tbody th').should('have.length',4)
   cy.get('table.tsc_table_s13 tbody th').each((el,index)=>{
      
       expect(el.text()).to.eq(buildArr[index])
   })

})


it('vrify the structure of the buldinkg and their cities', () => {
var buildArr = ['Burj Khalifa','Clock Tower Hotel','Taipei 101','Financial Center']
  myObj.buildStructure('table.tsc_table_s13 tbody th',buildArr,1,city)

})


it('vrify the structure of the buldinkg and their Ranks', () => {
    var buildArr = ['Burj Khalifa','Clock Tower Hotel','Taipei 101','Financial Center']
      myObj.buildStructure('table.tsc_table_s13 tbody th',buildArr,4,rank)
    
    })


    it('vrify the structure of the buldinkg and their countries', () => {
        var buildArr = ['Burj Khalifa','Clock Tower Hotel','Taipei 101','Financial Center']
          myObj.buildStructure('table.tsc_table_s13 tbody th',buildArr,0,country)
        
        })
})
//  create 1 file in ur project folde for utilitymthods->     class utilmethods{
// buildStructure(element1,passArray,passIndexNumber,passCityarr){
//     cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
    
//     cy.get(element1).each((el,index)=>{
//        if(el.text() == passArray[index]){
//            cy.get('table.tsc_table_s13 tbody tr').eq(index).find('td').eq(passIndexNumber).then(el=>{
//                expect(el.text()).to.eq(passCityarr[index])
//            })
//        }
        
//     })
// }
// }
// export default utilmethods;





    // add below code in ur utility assertions file- > 