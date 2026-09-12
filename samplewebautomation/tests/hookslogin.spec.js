// How to apply Hooks on Tests:
// ---------------------------------------------------
const {test, expect} = require("@playwright/test")
let context,page
test.beforeEach(async({browser})=>{
    context=await browser.newContext()
    page=await context.newPage()
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
})
 
test.afterEach(async()=>{
    await page.close()
    await context.close()
})
test("Login Logout functionality Validation 1", async()=>{
    // Login Action
    await page.locator("//input[@name='username']").fill("Prakash")
    await page.locator("input[name='password']").fill("Gurikar")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
    // Logout Action
    await page.locator("//button[normalize-space()='Logout']").click()
    await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
})
 
test.only("Login Logout functionality Validation 2", async()=>{
    await page.locator("//input[@name='username']").fill("Prakash")
    await page.locator("input[name='password']").fill("Gurikar")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
    // Logout Action
    await page.locator("//button[normalize-space()='Logout']").click()
    await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
})