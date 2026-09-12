// Locators in Playwright:
// ---------------------------------
// We can identify the UI Elements based on 
// 1. properties
// 2. XPATH
// 3. CSS
 
// 1. properties:
// id=username
// id=signin
 
import {test, expect} from "@playwright/test"
 
test("Identify UI Element using Proeprty", async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
    await page.locator("id=username").fill("admin")
    await page.waitForTimeout(3000)
})
 
// 2. XPATH:
// ---------------------
// XPATH is used to identify the UI Elements in DOM structure. XPATH can traverse both in forward and backward directions.
 
// There are two Types of XPATH:
// 1. Absolute XPath
// 2. Relative XPath
 
// 1. Absolute XPath:
// If any Xpath starts with Root Tag HTML that represents Absolute XPath.
// html/body/div/form/input
 
test("Absolute XPath ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=html/body/div/form/input").first().fill("demoUser1")
    await page.waitForTimeout(2000)
})
 
// Limitation of Absolute XPath:
// 1. Absolute XPath is very lengthy ,some times it will be more than a paragraphs.
// 2. The Change in the DOM structure makes XPath to fail
 
// 2. Relative XPath:
// ----------------------------
// If any Xpath does not start with Root Tag HTML that represents Relative XPath.
 
// Case 1: Identify the Element based on TagName
// Syntax: //<tagName>
 
//Case 1: Identify the Element based on TagName
test.only("Relative XPath: Based on TagName ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input").first().fill("demoUser2")
    await page.waitForTimeout(2000)
})
 
//Case 2: Identify the Element based on tagName with index
//Syntax: //tagName[index]
 
//Case 2: Identify the Element based on tagName with index
test.only("Relative XPath: Based on TagName with index ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[2]").first().fill("Welcome12345")
    await page.waitForTimeout(2000)
})
 
//Case 3: Identify the Element based on tagName with attribute name and value
//Syntax: //tagName[@attributename='value']
test.only("Relative XPath: Based on TagName with attrubutename and value ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='pass1word1']").fill("Welcome12345")
    await page.waitForTimeout(2000)
})
 
//Case 4: Identify the Element based on irrespective of tagname using attribute name and value
//Syntax: //*[@attributename='value']
 
test.only("Relative XPath: Based on attrubutename and value ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//*[@class='pass1word1']").fill("Welcome12345")
    await page.waitForTimeout(2000)
})
 
//Case 5: Identify the Element based attribute value alone
//Syntax: //*[@*='attributeValue']
test.only("Relative XPath: Based on attrubutevalue alone",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//*[@*='pwd1pass1word1']").fill("WelcomeXYZ")
    await page.waitForTimeout(2000)
})
 
//Case 6: Identify the Element based on Multiple Attribute Name and Value Combinations
//Syntax: //tagName[@attributename1='value'][@attributename2='value']
test.only("Relative XPath: Based on Multiple attrubutename and value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='windows'][@type='checkbox']").click()
    await page.waitForTimeout(2000)
})
 
//Case 7:  Identify the Element based on Multiple Attribute Name and Value Combinations using or operator
//Syntax: //tagName[@attributename1='value' or @attributename2='value']
test.only("Relative XPath: Based on Multiple attrubutename and value using OR Operator",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='windows' or @type='checkbox']").click()
    await page.waitForTimeout(2000)
})
 
//Case 8:  Identify the Element based on Multiple Attribute Name and Value Combinations using and operator
//Syntax: //tagName[@attributename1='value' and @attributename2='value']
test.only("Relative XPath: Based on Multiple attrubutename and value using and Operator",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='chrome' and @type='radio']").click()
    await page.waitForTimeout(2000)
})
 
//Case 9: Identify the Element based on Partial Matching of Attribute Value
//Syntax:
//starts-with(@attributeName,'value')
//ends-with(@attributeName,'value')
//contains(@attributeName,'value')
//tagName[starts-with(@attributeName,'value')]
//tagName[ends-with(@attributeName,'value')]
//tagName[contains(@attributeName,'value')]
 
test.only("Relative XPath: Based on Partial Matching of Attribute Value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    //await page.locator("xpath=//input[starts-with(@id,'chk2')]").click()
    await page.locator("xpath=//input[contains(@id,'k2l')]").click()
    await page.waitForTimeout(2000)
})
 
//Case 10: Identify the Element based on tagName with attributeName
//Syntax: //tagName[@attributeName]
 
// Find Number Links in the Applkication
test("Relative XPath: Based on tagName With attributeName 01",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("//a[@href]")
    console.log("Number of Links :"+oLinks.length)
    await page.waitForTimeout(2000)
})
//Display All Link Names in the Applkication
test("Relative XPath: Based on tagName With attributeName 02",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("//a[@href]")
    for(let i=0;i<oLinks.length;i++){
        let linkname=await oLinks[i].textContent()
        console.log("Link Name :"+linkname)
    }
    await page.waitForTimeout(2000)
})
 
//Click on Specific Link in the Applkication
test.only("Relative XPath: Based on tagName With attributeName 03",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("//a[@href]")
    for(let i=0;i<oLinks.length;i++){
        let linkname=await oLinks[i].textContent()
        if(linkname.endsWith("Testing")){
            await oLinks[i].click()
            break
        }
    }
    await page.waitForTimeout(2000)
})
 
//Case 11: Identify the Element based on Text Content
//Syntax: //tagName[text()='content']
 
//Note: In between Open Tag and Close Tag, If we have Text Content, We can apply above XPath.
test.only("Relative XPath: Based on Text Content",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//a[text()='S G Software Testing']").click()
    await page.waitForTimeout(2000)
})
 
//Case 12: Identify the Element based on Text Content for nomalize-space
// Case 12: Identify the Element based on Text Content for nomalize-space
test.only("Relative XPath: Based on Text Content with nomalize-space",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//a[normalize-space()='S G Software Testing']").click()
    await page.waitForTimeout(3000)
})
 
//Case 13: Identify the Element based on Partial Text Content
//Syntax: 
//starts-with(text(), 'partial content')
//ends-with(text(), 'partial content')
//contains(text(), 'partial content')
 
//tagName[starts-with(text(), 'partial content')]
//tagName[ends-with(text(), 'partial content')]
//tagName[contians(text(), 'partial content')]
 
test.only("Relative XPath: Based on Partial Text Content",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//a[contains(text(),'S G')]").click()
    await page.waitForTimeout(3000)
})