// 4. Hooks in Playwright
// a)BeforeEach,AfterEach,BeforeAll, AfterAll
// How to apply Hooks on Tests
 
// BeforeEach: It executes, before execution of each playwright test
// AfterEach : It executes, After execution of each playwright test
// BeforeAll : It executes , before execution of All playwright test
// AfterAll: It executes , after execution of All playwright test
 
// beforeEach & afterEach:
//----------------------------------
import {test, expect} from "@playwright/test"
 
test.beforeEach(async()=>{
    console.log("Login into the Application Successfully")
})
 
test.afterEach(async()=>{
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
 