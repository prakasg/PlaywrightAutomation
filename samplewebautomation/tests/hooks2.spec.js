// beforeAll & afterAll:
// -----------------------------
import {test, expect} from '@playwright/test'
 
test.beforeAll(async()=>{
    console.log("Login into the Application Successfully")
})
 
test.afterAll(async()=>{
    console.log("Logout from the Application Successfully")
})
 
 
test("First Playwright Test", async()=>{
    console.log("It is a Frist PLaywright Test !!!")
})
 
test("Second Playwright Test", async()=>{
    console.log("It is a Second PLaywright Test !!!")
})
 
test("Third Playwright Test", async()=>{
    console.log("It is a Third PLaywright Test !!!")
})
 
test("Fourth Playwright Test", async()=>{
    console.log("It is a Fourth PLaywright Test !!!")
})
 