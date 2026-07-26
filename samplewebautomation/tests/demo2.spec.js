const {test, expect} = require("@playwright/test")
 
test("First PLaywright Tests", async function display(){
    console.log("It is a First Test created by Named JavaScript Function");
})
 
test("Second Playwright Tests", async function(){
    console.log("It is a Second Test created by Ananymous JavaScript Function");
})
 
test("Third PLaywright Tests", async ()=>{
    console.log("It is a Third Test created by Arrow JavaScript Function");
})

