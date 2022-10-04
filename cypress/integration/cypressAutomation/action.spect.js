describe('action', () => {
    it('drag and drop', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#droppable').find('p').find('b').should('have.text', 'Dropped!')

    })
    it.only('drag & drop ',()=>{
        let dataTransfer = new DataTransfer()
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.get('#menu-hamburger').trigger('dragstart',{dataTransfer})
        cy.get('#plate-items').trigger('drop',{dataTransfer})
        cy.get('#menu-hamburger').trigger('dragend',{dataTransfer})
        cy.get("#plate-items").should('contain','Hamburger')
    })
})
// t.only('verfify the scroll into view',function(){

//     let dataTransfer = new DataTransfer()
//     cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
//     cy.get('#menu-fried-chicken').trigger('dragstart',{dataTransfer})
//     cy.get('#plate-items').trigger('drop',{dataTransfer})
//     cy.get('#menu-fried-chicken').trigger('dragend',{dataTransfer},{force:true})

    
// })