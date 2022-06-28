////in this program 1st we create(post) the user then get user asssign with status 200 then apply DELETE request delete the user and assign with 204 
//// then after try to get the deleted user this T.C. fail meants our test of delete is succesful




describe('verify the delete request', () => {
    it("verify the POST request", () => {
        let id = ""
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: 'Bearer e8a5c8d6af655aff0525d9be8f37d8fd409e886248357bbe253381d7dff7c544'
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": "tenali.ramakrishna@19ce.com",
                "status": "active"
            }
        }).then(function (res) {
            //cy.log(res)
            id= res.body.id
            expect(id).to.eq(res.body.id)
        }).then(function(){
            cy.request({
                method:'GET',
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: 'Bearer e8a5c8d6af655aff0525d9be8f37d8fd409e886248357bbe253381d7dff7c544'
                }
            }).then(function(res){
                expect(res.status).to.eq(200)
            }).then(function(){
                cy.request({
                    method:"DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: 'Bearer e8a5c8d6af655aff0525d9be8f37d8fd409e886248357bbe253381d7dff7c544'
                }
                }).then(function(res){
                    expect(res.status).to.eq(204)
                }).then(function(){
                    cy.request({
                        method:"GET",
                        url: `https://gorest.co.in/public/v2/users/${id}`,
                        headers: {
                            Authorization: 'Bearer e8a5c8d6af655aff0525d9be8f37d8fd409e886248357bbe253381d7dff7c544'
                        }
                    }).then(function(res){
                        cy.log(res)
                        expect(res.status).to.eq(404)
                    })
                })
            })
        })
    })
})


////////////////////////////////---------------------------sir code ----------------------------------------

// let AccesToken = "6b6969174154db7f1addd6e109e39ba97e641ca5935f7f769ca77cd449186734"
// describe('Validate the Gorest POST api', () => {
//     it('Verify the Gorest POST Api', () => {
//         let id =""
//         cy.request({
//             method: "POST",
//             url: "https://gorest.co.in/public/v1/users",
//             headers: {
//                 Authorization: `Bearer ${AccesToken}`
//             },
//             body: {
//                 "name": "Tenali Ramakrishna",
//                 "gender": "male",
//                 "email": "AherMahesh45@gmail.com",
//                 "status": "active"
//             }
//         }).then((res) => {

//             // {
//             //     "id": 4965,
//             //     "name": "Tenali Ramakrishna",
//             //     "email": "tenali.rama@76ce.com",
//             //     "gender": "male",
//             //     "status": "active"
//             // }
//             expect(res.status).to.eq(201)
//            id= res.body.data['id']
//         }).then(function () {
//             cy.request({
//                 method: "GET",
//                 url: `https://gorest.co.in/public/v1/users/${id}`,
//                 headers: {
//                     Authorization: `Bearer ${AccesToken}`
//                 }
//             }).then((res) => {
//                 expect(res.status).to.eq(200)
//             }).then((res) => {
//                 cy.request({
//                     method: "DELETE",
//                     url: `https://gorest.co.in/public/v1/users/${id}`,
//                     headers: {
//                         Authorization: `Bearer ${AccesToken}`
//                     }
//                 }).then((res) => {
//                     expect(res.status).to.eq(204)
//                 })
//             })
//         }).then(()=>{
//             //cy.log(id)
//             cy.request({
//                 method: "GET",
//                 url: `https://gorest.co.in/public/v1/users/${id}`,
//                 headers: {
//                     Authorization: `Bearer ${AccesToken}`
//                 }
//             }).then((res) => {
//                 expect(res.status).to.eq(404)
//             })
//         })
//     })
// })