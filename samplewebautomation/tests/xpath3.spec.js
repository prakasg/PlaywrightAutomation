import test from "@playwright/test"

test("Relative XPath: Based on TagName with index ",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[2]").first().fill("Welcome12345")
    await page.waitForTimeout(2000)
})

//Case 3: Identify the Element based on tagName with attribute name and value
//Syntax: //tagName[@attributename='value']
test.only("Relative XPath: Based on TagName with attrubutename and value ",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='pass1word1']").fill("Welcome12345")
    await page.waitForTimeout(2000)
})