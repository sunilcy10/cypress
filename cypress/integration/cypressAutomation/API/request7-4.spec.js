///<reference types="cypress" />



describe('verify the API requests',()=>{
    it('Verify the GET request for list of user page wise', () => {
        cy.request({
            method:'GET',
            url :'https://reqres.in/api/users?page=2'
        }).then(function(resp){
            cy.log(resp)
           expect(resp.status).to.equal(200)
           expect(resp.body.per_page).to.eq(resp.body.data.length)
        })
    })
    it('Verify the GET request for list of user page wise', () => {
        cy.request({
            method:'GET',
            url :'https://reqres.in/api/users?page=2'
        }).then(function(resp){
        //    resp.body.data.forEach(element => {
        //      expect(element).to.have.property('email')
        //      expect(element).to.have.property('first_name')
        //      expect(element).to.have.property('id')
        //      expect(element).to.have.property('avatar')
        //      expect(element).to.have.property('last_name')              
        //    });
        resp.body.data.forEach(element => {
            expect(element).to.have.all.keys('id','first_name','last_name','email','avatar')
            
        });
        })
    })
    it('verify the post',()=>{
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(resp){
            //cy.log(resp)
            expect(resp.status).to.eq(201)
            expect(resp.body).to.have.property('id')
        })
    })
    it('verify the PUT',()=>{
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function(resp){
            cy.log(resp)
            expect(resp.status).to.equal(200)
            expect(resp.body).to.have.property('updatedAt')
        })
    })
    it.only('verify the PUT',()=>{
         cy.request({
             method :'DELETE',
             url:'https://reqres.in/api/users/2'
         }).then(function(resp){
             cy.log(resp)
             expect(resp.status).to.equal(204)
         })
    })
})