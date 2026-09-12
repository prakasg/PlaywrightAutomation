const {test, expect} = require("@playwright/test")
 
test("Login logout functionality Validation", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
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