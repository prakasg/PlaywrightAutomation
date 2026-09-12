//Case 4: Playwright Suggested Scenario
 
const { test, expect } = require("@playwright/test")
 
 
test("Login Action by Keyboard functionality", async ({ page }) => {
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Tab")
    await page.keyboard.type('Hello World!');
    await page.keyboard.press('ArrowLeft');
 
    await page.keyboard.down('Shift');
    for (let i = 0; i < ' World'.length; i++)
        await page.keyboard.press('ArrowLeft');
        await page.waitForTimeout(1000)
    await page.keyboard.up('Shift');
    await page.waitForTimeout(2000)
    await page.keyboard.press('Backspace');
    // Result text will end up saying 'Hello!'
    await page.waitForTimeout(2000)
})
 