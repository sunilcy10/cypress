//nst { find } = require("cypress/types/lodash")

describe('verify tranverse method',()=>{
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().should('have.length',8)
    })
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().eq(1).should('contain','Apparel & accessories')
    })
    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().find('a').filter('#categorymenu > nav > ul > li:nth-child(5) > a').should('contain','Fragrance')
    })
    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().find('li').should('have.length',43)
    })
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().first().should('contain','Home')
    })
    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().last().should('contain','Books')
    })
    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('div[class="block_3"]').next().should('have.class',"block_4")
    })
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('div[class="block_6"]').nextAll().should('have.length',2)
    })
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().nextUntil('#categorymenu > nav > ul > li:nth-child(7) > a').should('have.length',7)
    })
    // it.only('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
    //     cy.visit('https://automationteststore.com/')
    //     cy.get('ul[class="nav-pills categorymenu"]').children().not('#categorymenu > nav > ul > li:nth-child(5) > a').should('have.length',7)
    // })
    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('h4[class="hidden"]').parent().should('have.id','categorymenu')
    })
    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('div[class="navbar-header header-logo"]').parents().should('have.class','container-fixed')
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[class="active menu_home"]').parent().siblings().should('have.length',7)
    })
    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=1"]').parentsUntil('section[class="footerlinks"]').should('have.length',6)
    })
    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
            cy.visit('https://automationteststore.com/')
            cy.get('.info_links_footer').children().find('a').not('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=1"]').should('have.length',6)
        })
    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=account/login"]').parent().prev().should('have.text','Site Map')
    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=account/login"]').parent().prevAll().should('have.length',6)
    })
    it.only('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').last().prevUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(1)').should('have.length',2)
    })
    
})


//not('li[class="current"]').