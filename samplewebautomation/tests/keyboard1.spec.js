//Case 1: Perform Click on SignIn button using Keyboard Operation:
const {test, expect} = require("@playwright/test")
 
test("Login logout functionality Validation", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login Action
    await page.locator("//input[@name='username']").fill("pgudi")
    await page.locator("input[name='password']").fill("pgudi")
    // Keyboard Operation "Enter"
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})
 