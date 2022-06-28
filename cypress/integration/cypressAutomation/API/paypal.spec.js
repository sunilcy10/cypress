describe('verify the PAYPAL API',()=>{
    it('token genaration',()=>{
        let token =''
        cy.request({
            method :'POST',
            url :'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            body:{
                grant_type:"client_credentials" 
            },
            headers :{
                Authorization:"Basic QVJORGlhZFNkYmxkSXIxX3dTSFFadDdpajFRWFVqeDRvU3J4aVlHSzctRFhRQVlkNlg4QlFISGFBbWU0Y3dqX3h4ekQwc1diLXFwMGljQTM6RU42bGZTUUdDT2tSWVhVNnZrOTZIU25FLVJIY1VBOGo1UEtJaDVKTGxkNUNIMlNPXzh6SGthendOQWg2TFRBMUFXcHJWSG1pUnVBMWpUcWk="
            },
            form:true
        }).then((res)=>{
            //cy.log(res)
            token = res.body.access_token
            expect(res.status).to.eq(200)
        }).then(()=>{
            cy.request({
                method:"POST",
                url:"https://api-m.sandbox.paypal.com/v2/checkout/orders",
                headers:{
                    Authorization:`Bearer ${token}`
                },
                body:{
                    "intent": "CAPTURE",
                    "purchase_units": [
                      {
                        "amount": {
                          "currency_code": "USD",
                          "value": "100.00"
                        }
                      }
                    ]
                  }

            }).then((res)=>{
                //cy.log(res)
                expect(res.status).to.eq(201)
                expect(res.body).to.have.property('id')
            })
        })
    })
})