//Case 3: Perform Multiple Keyboard Action
const {test, expect} = require("@playwright/test")
 
test("Login Action by Keyboard functionality", async ({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Tab")
    await page.keyboard.type("S G SOFTWARE TESTING INSTITUTE")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+X")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(3000)
})
 