
describe('verify the actions in cypress',()=>{
    it('Double click in cypress',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').as('clickble')
        cy.get('@clickble').should('have.class','div-double-click')
        cy.get('@clickble').dblclick()
        cy.get('@clickble').should('have.class','div-double-click double')
    })
    it('Double click in cypress',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        // cy.get('#double-click').as('clickble')
        cy.get('#double-click').should('have.class','div-double-click')
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.class','div-double-click double')
    })
    it('Scroll into view in cypress',()=>{
        cy.visit('https://webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','Action')

    })
    it('verify the drag and drop',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').find('b').should('have.text','Dropped!')
        // cy.get('#droppable > p > :nth-child(1)').should('have.text',"Dropped!")
        cy.get('#droppable').find('p').should('have.attr','style','background-color: rgb(244, 89, 80); height: 100%;')
    })
    it('veerify the scroll into view in cypress',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.contains('Hover Over Me First!').trigger('mouseover',{force:true})
        cy.contains('Link 1').click({force:true})
    })
    it('verify the checkbox',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-2"]').click().should('be.checked')
    })
    it.only('verify the checkbox',()=>{
        cy.visit('https://www.google.com/search?q=cypress&sxsrf=ALiCzsbpez-lasi7qX_fwrjuCDAuvnvvrQ:1664289508983&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjY2_HHmbX6AhVa6jgGHVRfAHgQ_AUoAXoECAEQAw&biw=1920&bih=969&dpr=1#imgrc=T5_Oeyvxiw8gGM')
        cy.get('.n3VNCb.KAlRDb').click('bottomLeft',{force:true})
    })
})


// // describe('verify the action in cypress',function(){

//     it('verify the drag and drop action in cypress',function(){

//         cy.visit('https://webdriveruniversity.com/Actions/index.html')
//         cy.get('#draggable').trigger('mousedown',{which:1})
//         cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
//         cy.get('#droppable > p > :nth-child(1)').should('have.text',"Dropped!")

//        + // left which:1
//         // middle which:2
//         // right which:3

//         cy.get('#droppable').find('p').should('have.attr','style','background-color: rgb(244, 89, 80); height: 100%;')


// //     })


//     it('Double click in cypress',function(){
//         cy.visit('https://webdriveruniversity.com/Actions/index.html')
//         cy.get('#double-click').as('clickableE')
//         cy.get('@clickableE').should('have.class','div-double-click')
//         cy.get('@clickableE').dblclick()
//         cy.get('@clickableE').should('have.class','div-double-click double')

//     })

//     it('Scroll into view in cypress',function(){
//         cy.visit('https://webdriveruniversity.com')
//         cy.get('#actions').scrollIntoView()
//         .invoke('removeAttr','target')
//         .click()
//         cy.url().should('contain','Actions')
       

//     })


//     it('Scroll into view in cypress',function(){
//         cy.visit('https://webdriveruniversity.com/Actions/index.html')
//         cy.contains('Hover Over Me First!').trigger('mouseover',{force:true})
//         cy.contains("Link 1").click({force:true})

//     })
    

// })