// XPath - Axes :
// -----------------------
// It traverse both in forward and backward directions.

import test from "@playwright/test"







 
// 1. following-sibling
// 2. following
// 3. preceding-sibling
// 4. preceding
// 5. ancestor
// 6. descendants
 
// 1. following-sibling:
// For a Person Sachin Tendulkar enter a salary 25000
 
// For a Person Sachin Tendulkar enter a salary 25000

    test.only("For a Person Sachin Tendulkar enter a salary 25000", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//td[text()='Sachin Tendulkar']/following-sibling::td/following-sibling::td/following-sibling::td/following-sibling::td/input").fill("25000")
    await page.waitForTimeout(2000)
})
 

// 2. following: Enter a Salary 22000 for a Person who is next to Sachin Tendulkar

    test.only("Enter a Salary 22000 for a Person who is next to Sachin Tendulkar", async({page})=>{
    await page.goto("file:///D:\PlaywrightQAAutomation\CurrentWorkspace\PlaywrightAutomation\samplewebautomation\HTML\WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//td[text()='Sachin Tendulkar']/following::tr[1]/td[6]/input").fill("22000")
    await page.waitForTimeout(2000)
})
 

// 3. preceding-sibling: Make Status as Active for Designation Indian Freedom Fighter
test.only("Make Status as Active for Designation Indian Freedom Fighter", async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//td[text()='Indian Freedom Fighter']/preceding-sibling::td[1]/preceding-sibling::td[1]/input").click()
    await page.waitForTimeout(2000)
})
 

 
// 4. preceding: Make Status as Active for a Person who is just previous to Rahul Dravid
test.only("Make Status as Active for a Person who is just previous to Rahul Dravid", async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//td[text()='Rahul Dravid']/preceding::tr[1]/td[1]/input").click()
    await page.waitForTimeout(2000)
})
 

 
// 5. ancestor: Based on child identify the Parent Element
test.only("Based on child identify the Parent Element", async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/WebTableHTML.html")
    await page.waitForTimeout(2000)
    const oTable=await page.locator("xpath=//input[@id='edit4']/ancestor::td/ancestor::tr/ancestor::table")
    console.log("Table Attribute :"+await oTable.getAttribute("id"))
    await page.waitForTimeout(2000)
})
 

// 6. descendant: Based Parent Element identify the Child Element.
test.only("Based Parent Element identify the Child Element.", async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//table[@id='tbl1']/descendant::tr[4]/td[6]/input").fill("18000")
    await page.waitForTimeout(2000)
})
 