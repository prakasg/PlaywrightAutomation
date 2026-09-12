// How to Create a Playwright Project:
// Navigate to Official WebSite
// https://playwright.dev
// Execute below Command to Create Playwright Project
// npm init playwright@latest
 
// How to Write a Typical or Sample Test:
const {test, expect} = require('@playwright/test')
 
test("Launch Application and Validate", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
 
    const title = await page.title()
    console.log("Title of The Application :"+title);
 
    const url = await page.url()
    console.log("URL of the Application :"+url);
    // Valiation
    await expect(page).toHaveTitle("S G Software Testing Institute")
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
})
 