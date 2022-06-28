describe('verify the API on gorest', () => {
    it('verify the GET request', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: 'Bearer e8a5c8d6af655aff0525d9be8f37d8fd409e886248357bbe253381d7dff7c544'
            }
        }).then(function (el) {
            //cy.log(el)
            expect(el.status).to.eq(200)
            let r = el.body.some(function (element) {
                return element.name.startsWith('G')
            })
            expect(r).to.eq(true)
        })
    })
    it('verify the GET request for post', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/posts',
            headers: {
                Authorization: 'Bearer e8a5c8d6af655aff0525d9be8f37d8fd409e886248357bbe253381d7dff7c544'
            }
        }).then(function (res) {
            cy.log(res)
            expect(res.status).to.eq(200)
            res.body.forEach(element => {
                expect(element.body.length).to.be.gt(1)
            })
        })
    })
    it('verify the create API user', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: 'Bearer e8a5c8d6af655aff0525d9be8f37d8fd409e886248357bbe253381d7dff7c544'
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `tenali.ramakrishna${Math.random() * 100}@15ce.com`,
                "status": "active"
            }
        }).then(function (res) {
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.body).to.have.property('id')
        })
    })
    //GET -//https://gorest.co.in/public/v2/users ==> take one single id

    //PUT - https://gorest.co.in/public/v2/users/2775 ===> payload(changes)

    // GET - https://gorest.co.in/public/v2/users/2775  ===? validate payload


    it.only('verify the Create API', () => {
        let updateEmail = 'ram12@gmail.com'
        let id = ""
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }
        }).then(function (res) {
            //cy.log(res)
            expect(res.status).to.eq(200)
            id = res.body[0].id
        }).then(function () {
            cy.request({
                method: 'PUT',
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
                },
                body: {
                    "name": "Allasani Peddana",
                    "email": updateEmail,
                    "status": "active"
                }
            }).then(function () {
                cy.request({
                    method: 'GET',
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
                    }
                }).then(function (res) {
                    expect(res.body.email).to.eq(updateEmail)
                })
            })
        })
    })

})

