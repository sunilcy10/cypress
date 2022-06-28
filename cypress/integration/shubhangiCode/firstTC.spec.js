
describe('Learn Automation', () =>{
    it('test case 1', () =>{
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click();
        //implicite aasertion-> should
        //explicite -> expect
        cy.url().should('include', 'Contact-Us');
        cy.url().then((url) =>{
            expect(url).to.equal('http://webdriveruniversity.com/Contact-Us/contactus.html');
        })

    })
    it('Test the application form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[class="feedback-input"]').eq(0).type('Aayush');
        cy.get('input[class="feedback-input"]').eq(1).type('Pawar');
        cy.get('input[class="feedback-input"]').eq(2).type('minskole@gmail.com');
        cy.get('textarea[name="message"]').type('We are learning Cypress');
        cy.get('input[type="submit"]').click();
        cy.get('div[id="contact_reply"] > h1').should('have.text','Thank You for your Message!');
    })
    it.only('use of each method',()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[class="feedback-input"]').each((element,index) =>{
           cy.wrap(element).type('minskole')


        })
    })
})