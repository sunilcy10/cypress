//<h1 id = "one" class = "two" name = "nm"> HeadingOne </h1>
describe('tranverse method in javscript',()=>{
//     it('To get a DOM element at a specific index, use the .eq() command.',function(){
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         //cy.get('th').should('have.length',12)
//         cy.get('ul[class="traversal-drinks-list"]').children().eq(0).next().should('have.text',"Tea")
//     })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-drinks-list"]').children().first().should('have.text','Coffee')
    
   })

it('To get the first DOM element within elements, use the .Last() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('ul[class="traversal-food-list"]').children().last().should('have.text','Lentils')
})

it.only('To get the next sibling DOM element within elements, use the .next() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('li[id="fruits"]').siblings().last().should('have.text','Lentils')
   })

//    it('')

})

///////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('verify tranverse method',()=>{

    it('To get a DOM element at a specific index, use the .eq() command.',function(){

        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().as('navElement')
        // cy.get('.nav-pills').children().eq(1).should('contain','Apparel & accessories')
        // cy.get('.nav-pills').children().first().should('contain',"Home")
        cy.get('@navElement').first().should('contain',"Home")
        cy.get('@navElement').eq(1).should('contain',"Apparel & accessories")
    })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().first().should('contain',"Home")
    })


    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().last().should('contain',"Book")
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().should('contain','Makeup')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().next().should('contain','Skincare')

    })

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().should('contain','Makeup')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().next().should('contain','Skincare')
        
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().should('contain','Makeup')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().prev().should('contain','Shoe')
        
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().siblings().should('have.length',7)
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().find('a').should('have.length',37)
        cy.get('.nav-pills').children().find('a').filter('a[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').should('contain',"Skincare")
    })


    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer').children().find('a').should('have.length',7)
       
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer').children().find('a').not('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]').should('have.length',6)
    })

    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]').parent().should('have.class','dropdown')
    })

    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]').parents().should('match','section')

    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').first().nextUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(4)').should('have.length',2)

    })

    it.only('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').last().prevUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(1)').should('have.length',2)

    })








    // <h1 id = "ad" class = "dd">text</h1>

    //next(),siblings(),nextAll(),prevAll(),prev(),.prevUntil(),nextUtil()


   

    // next() , prev() , siblings() , nextAll(), prevAll()
    // Testing --- actual vs expected

    // <li>Apple</li>
    // <li>Banana</li>
    // <li>Grapes</li>
    // <li>Water Melon</li>

    






})