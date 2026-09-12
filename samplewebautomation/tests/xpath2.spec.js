//Syntax: //tagName[@attributeName]
 const { test } = require("@playwright/test")
//Syntax: //tagName[@attributeName]
 
// Find Number Links in the Applkication
test("Relative XPath: Based on tagName With attributeName 01",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("//a[@href]")
    console.log("Number of Links :"+oLinks.length)
    await page.waitForTimeout(2000)
})
//Display All Link Names in the Applkication
test("Relative XPath: Based on tagName With attributeName 02",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
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
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
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