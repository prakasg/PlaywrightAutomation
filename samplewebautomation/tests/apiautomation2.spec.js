//Case 2: authenticate -> Display Employee
//Solution:
const {test, expect} = require("@playwright/test")
let authToken="";
test("Authentication token", async({request})=>{
    const response=await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate",{
        data:{
            "username": "pgudi",
            "password": "pgudi"
        },
        headers:{
            "Content-Type":"application/json"
        }
    })
 
    authToken=(await response.text()).toString()
    console.log("Token :"+authToken)
    await expect(response.status()).toEqual(200)
})
 
test("Display Existing Employee Resource", async({request})=>{
    const response=await request.get("https://sgtestinginstitute.onrender.com/api/v1/employees/18",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+authToken
        }
    })
    const employeeResponsedata=(await response.text()).toString()
    console.log("Employee Response Content :"+employeeResponsedata)
    //Validation
    await expect(response.status()).toEqual(200)
})
 

 
