describe('verify the functionality for fixture', function () {
    it('verify the functionality for fixture', function () {
        cy.fixture('apiwriteRead').then(function (obj) {

            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: obj

            }).then((res)=>{
              //cy.log(res)
              expect(res.status).to.eq(201)
            })
        })
    })

    it('verify the functionality for fixture',function(){
        cy.fixture('apiwriteRead').then(function(obj){
            cy.request({
                method:'POST',
                url:'https://reqres.in/api/users',
                body:obj
            }).then((res)=>{
                cy.writeFile('cypress/fixtures/example4.json',res.body)
            })
        })
    })

    // it('verify the fixture file',function(){
    //     cy.fixture('example4').then(function(obj){
    //         cy.request({
    //             method:'GET',
    //             url:`https://reqres.in/api/users/${obj.id}`
    //         }).then(function(res){
    //             expect(res.status).to.equal(200)
    //         })
    //     })
    // })

     
    it('verify the functionality for fixture', function () {
        cy.fixture('example3').then(function(obj){
            cy.request({
                method:"POST",
                url:"https://reqres.in/api/users",
                body:obj
            }).then(function(){
                cy.readFile('cypress/fixtures/example4.json').then(function(obj){
                    if(obj.name == "morpheus"){
                        obj.name = "chinmay"
                        cy.writeFile('cypress/fixtures/example4.json',obj)

                    }

                })
                
            })
        })

      })
})