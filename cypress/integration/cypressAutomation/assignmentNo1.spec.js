describe('Task- mercari site', () => {
    var popSearches = ""
    it("valiadate the popular searches of searchbox", () => {
        cy.visit('https://www.mercari.com/')
        cy.get('input.Input__StyledInput-sc-19d8fkv-0.hlpFOe.SearchInput-sc-1kwj44w-0.elygcy').click()
        cy.get('div.components__DropdownWrapper-l0irxq-0.gvMzaF ul li').each((el, indx) => {
            popSearches = el.text()
            //cy.log(popSearches)
            check(popSearches, indx)
        })

        function check(searchList, item) {
            var results = ""
            //cy.get('div.components__DropdownWrapper-l0irxq-0.gvMzaF ul li').eq(num).click()
            // cy.get('button[class="Button_StrippedButton-y431fn-2 components_GreyPill-l0irxq-1 fuOhqP"]')
            // .eq(num).click()
            cy.get('div[data-testid="SearchesGreyPills"] ul li a button[class="Button_StrippedButton-y431fn-2 components_GreyPill-l0irxq-1 fuOhqP"]')
            .eq(item).click()
            cy.url().should('include', 'https://www.mercari.com/search/')
            cy.get('.Input__StyledInput-sc-19d8fkv-0.hlpFOe.SearchInput-sc-1kwj44w-0.elygcy').click()
            //cy.get('.Button__BaseButton-xht50r-0.ekmdiR').click()         //clrs search history
            cy.get('.components__DropdownWrapper-l0irxq-0.gvMzaF ul li').each((el) => {
                   
                if (searchList.includes(el.text())){
                  //  cy.log(el.text())
                     results = el.text()
                }
            }).then(function () {
                expect(results).to.equals(searchList)
            })
            cy.go(-1)
          cy.get('input.Input__StyledInput-sc-19d8fkv-0.hlpFOe.SearchInput-sc-1kwj44w-0.elygcy').click()
        }
    })
})