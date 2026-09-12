// //3. Mouse Operations:
// --------------------------------------
// Case 1: Perform Mouse Hover on an UI Element
 
const {test, expect} = require("@playwright/test")
 
test.only("Mouse Hover Operation ", async({page})=>{
    await page.goto("https://www.icici.bank.in/")
    await page.waitForTimeout(5000)
    await page.locator("//span[normalize-space()='About']").hover()
    await page.waitForTimeout(3000)
    await page.locator("//a[normalize-space()='News room']").click()
    await expect(page.locator("//h1[normalize-space()='News Room']")).toBeVisible()
})
 
// Case 2: Scroll Mouse till a Specific UI Element
//import {test, expect} from '@playwright/test'
 
test("Scroll Mouse till A Specific UI Element", async({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(5000)
    await page.locator("//a[normalize-space()='Learn Python']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await page.screenshot({path:'w3school_learnpython.png'})
    await page.waitForTimeout(2000)
})