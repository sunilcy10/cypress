
describe('traverse methode in javascript',()=>{

    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').should('have.length',12)
        cy.get('th').eq(2).should('have.text','Age')
    })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').first().should('have.text','Firstname') 
    })

    it('To get the first DOM element within elements, use the .Last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').last().should('have.text','3')
    })

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('div[class="traversal-button-states"]').children().should('have.length',4)
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').next().should('have.text','Tea')
        //cy.get('li[id="coffee"]').next().should('have,attr',"id","tea")                                ///SS USING THIS TEST FAIL
    })
    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="tea"]').prev().should('have.text','Coffee')
        cy.get('li[id="tea"]').prev().should('have.attr',"id",'coffee')
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').nextAll().should('have.length',4) 
        cy.get('li[id="coffee"]').nextAll().first('have,text','Tea')
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should('have.length',4)
        })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('div[class="traversal-button-states"]').children().filter('.disabled').should('have.text','Warning')            //// this ask support session why use .disable
    })

    it.only('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('button[class="btn btn-outline-danger"]').siblings().should('have.length',3)
    })
})



// eq(), first(),last(),children(),prev(),next(),nextAll(),prevAll(),siblings(),filter()