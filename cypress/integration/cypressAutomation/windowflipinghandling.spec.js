// ///<reference types="cypress" />

// describe('various ways to switch tab in cypress',function(){


//     // removing the attribute
//     it('handling the tab switching first way',()=>{

//         cy.visit('https://webdriveruniversity.com/')
//         cy.get('#contact-us').invoke('removeAttr','target').click()
//         cy.url().should('contain','Contact-Us')
//     })

//     // updating the attribute value
//     it(' 2nd wayhandling the tab switching first way',()=>{
//         cy.visit('https://webdriveruniversity.com/')
//         cy.get('#contact-us').invoke('attr','target','_self').click()
//         cy.url().should('contain','Contact-Us')
//     })
   
//     //  retriving the href attribute value appending with the baseUrl


//     it.only(' 2nd wayhandling the tab switching first way',()=>{
//         cy.visit('https://webdriveruniversity.com/')
//         cy.get('#contact-us').invoke('attr','href').then(function(resource){
//             //cy.log(resource)
//             cy.visit(`https://webdriveruniversity.com/${resource}`)
//         })
//         cy.url().should('contain','Contact-Us')
//     })
   

//     // url click ----> win.location



// })

describe('methods of handling window flippling',()=>{
    it('methods of handling window flippling by removing attribut',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('contain','Contact-Us') 
      
    })
    it('methods of handling window flippling by updating attribut',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','target','_self').click()
        cy.url().should('contain','Contact-Us')
        
    })
    it('methods of handling window flippling by retriving the href attribute value appending with the baseUrl',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','href').then(function(res){
            cy.visit(`https://webdriveruniversity.com/${res}`)
            // cy.log(res)
        })
        cy.url().should('contain','Contact-Us') 
    })
    it('amazon',()=>{
        cy.visit('https://www.amazon.in/s?i=shoes&bbn=1983518031&rh=n%3A1983518031%2Cp_n_feature_nineteen_browse-bin%3A11301363031%2Cp_89%3Acrocs%2Cpct-off-with-tax%3A30&dc&pf_rd_i=1983518031&pf_rd_i=1983518031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=2d712d3d-612f-4844-95d4-16aefb96959d&pf_rd_p=f7b0f372-f38b-4ce0-860b-c67e6109fba6&pf_rd_r=BJNYRF54W92PPAXYD1S7&pf_rd_r=D0Z99DPSYTS9KTQBXA28&pf_rd_s=merchandised-search-3&pf_rd_s=merchandised-search-4&pf_rd_t=30901&qid=1625219109&rnid=3837712031&ref=sr_nr_p_89_5')
        cy.get('a[class="a-link-normal s-no-outline"]').eq(1).invoke('attr','target','_self').click()
       
    })
     it.only('amazon',()=>{
        cy.visit('https://www.amazon.in/s?i=shoes&bbn=1983518031&rh=n%3A1983518031%2Cp_n_feature_nineteen_browse-bin%3A11301363031%2Cp_89%3Acrocs%2Cpct-off-with-tax%3A30&dc&pf_rd_i=1983518031&pf_rd_i=1983518031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=2d712d3d-612f-4844-95d4-16aefb96959d&pf_rd_p=f7b0f372-f38b-4ce0-860b-c67e6109fba6&pf_rd_r=BJNYRF54W92PPAXYD1S7&pf_rd_r=D0Z99DPSYTS9KTQBXA28&pf_rd_s=merchandised-search-3&pf_rd_s=merchandised-search-4&pf_rd_t=30901&qid=1625219109&rnid=3837712031&ref=sr_nr_p_89_5')
       
        cy.get('a[class="a-link-normal s-no-outline"]').eq(1).invoke('attr','href').then(function(res){
            // cy.visit(`https://www.amazon.in/s?i=shoes&bbn=1983518031&rh=n%3A1983518031%2Cp_n_feature_nineteen_browse-bin%3A11301363031%2Cp_89%3Acrocs%2Cpct-off-with-tax%3A30&dc&pf_rd_i=1983518031&pf_rd_i=1983518031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=2d712d3d-612f-4844-95d4-16aefb96959d&pf_rd_p=f7b0f372-f38b-4ce0-860b-c67e6109fba6&pf_rd_r=BJNYRF54W92PPAXYD1S7&pf_rd_r=D0Z99DPSYTS9KTQBXA28&pf_rd_s=merchandised-search-3&pf_rd_s=merchandised-search-4&pf_rd_t=30901&qid=1625219109&rnid=3837712031&ref=sr_nr_p_89_5${res}`)
            cy.log(res)
        })
    })
    
})