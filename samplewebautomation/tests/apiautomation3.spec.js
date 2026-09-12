// Case 3: authenticate -> Create Customer -> Display Customer -> Delete Customer
// Solution:
const {test, expect} = require("@playwright/test")
let authToken=""
let custId=""
test("Authentication token", async({request})=>{
    const response=await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate",{
        data:{
            "username": "Prakash",
            "password": "Gurikar"

            
        },
        headers:{
            "Content-Type":"application/json"
        }
    })
 
    authToken=(await response.text()).toString()
    console.log("Token :"+authToken)
    await expect(response.status()).toEqual(200)
})
 
test("Create Customer using POST API", async({request})=>{
    const response=await request.post("https://sgtestinginstitute.onrender.com/api/v1/customers",{
        data:{
            "customerName": "auto_servies_011",
            "emailId": "auto_serices_011@sg.com",
            "location": "Dallas",
            "customerDescription": "Provides Services"
        },
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+authToken
        }
    })
 
    const resonseBody=await response.json()
    custId=await resonseBody.customerId
    console.log("Customer Id :"+custId)
    //Display Response content
    const responseContent=(await response.text()).toString()
    console.log("Customer Response Content :"+responseContent)
    //Validate Status
    await expect(response.status()).toEqual(201)
})
 
test("Display Newly Created Customer using GET API", async({request})=>{
    const response=await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+authToken
        }
    })
    // display response
    const responsebody=(await response.text()).toString()
    console.log("Customer Response :"+responsebody)
    await expect(response.status()).toEqual(200)
})
 
test("Delete Newly Created Customer using GET API", async({request})=>{
    const response=await request.delete("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+authToken
        }
    })
    // display response
    const responsebody=(await response.text()).toString()
    console.log("Customer Response :"+responsebody)
    await expect(response.status()).toEqual(200)
})
 