// Case 13: Identify the Element based on Partial Text Content
// Syntax: 
// starts-with(text(), 'partial content')
// ends-with(text(), 'partial content')
// contains(text(), 'partial content')
 
//tagName[starts-with(text(), 'partial content')]
//tagName[ends-with(text(), 'partial content')]
//tagName[contians(text(), 'partial content')]
 const { test,expect } = require("@playwright/test")
test.only("Relative XPath: Based on Partial Text Content",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//a[contains(text(),'S G')]").click()
    await page.waitForTimeout(3000)
})