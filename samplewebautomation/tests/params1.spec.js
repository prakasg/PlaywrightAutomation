// How Read Data From JSON Files:
// ----------------------------------------------------
const {test, expect} = require("@playwright/test")
const test1 = require("./../datafiles/testdata1 2.json")
const testdata=require("./../datafiles/testdata2 2.json")
 
test("Read from JOSN File", async()=>{
    console.log(test1.username)
    console.log(test1.password)
})
 
test("Read data from JSON Array", async()=>{
    for(let data of testdata){
        console.log(data.username)
        console.log(data.password)
        console.log("------------")
    }
})
 
 
// How to Perform Parametrization on Tests using JSON File
// ------------------------------------------------------------------------------

const testdata2 = require("./../datafiles/login1.json")
const testdata3 = require("./../datafiles/multiplelogin.json")
 
test("Login logout functionality Validation", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login Action
    await page.locator("//input[@name='username']").fill(testdata2.username)
    await page.locator("input[name='password']").fill(testdata2.password)
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
    // Logout Action
    await page.locator("//button[normalize-space()='Logout']").click()
    await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
})
 
test.only("Login logout functionality using Multiple Params", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login Action
    for(let data of testdata3){
        await page.locator("//input[@name='username']").fill(data.username)
        await page.locator("input[name='password']").fill(data.password)
        await page.locator("//button[normalize-space()='Sign In']").click()
        await page.waitForTimeout(3000)
        await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
        // Logout Action
        await page.locator("//button[normalize-space()='Logout']").click()
        await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
        await page.waitForTimeout(3000)
    }
})