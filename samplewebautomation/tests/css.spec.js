// CSS - Identify the UI Element:
// --------------------------------------------
// Cascading Style Sheet : It is mainly used to provide styling on HTML Web Pages.
// #  -> id attribute
// .  -> class Attribute

import test from "@playwright/test"



 
// There are two Types of CSS
// 1. Absolute CSS
// 2. Relative CSS
 
// 1. Absolute CSS:
// if any CSS starts with root tag HTML , that represents Absolute CSS.
// html body div form input
 
    test("Absolute CSS ",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=html body div form input").first().fill("demoUser1")
    await page.waitForTimeout(2000)
})
 
/*Limitation of Absolute CSS:
1. Absolute CSS is very lengthy ,some times it will be more than a paragraphs.
2. The Change in the DOM structure makes CSS to fail
 
 
2. Relative CSS:
if any CSS does not start with root tag HTML , that represents Relative CSS.*/
 

//Case 1: Identify the Element based on tagName.
    test.only("Identify the Element based on tagName",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input").first().fill("demoUser2")
    await page.waitForTimeout(2000)
})
 
 
//Case 2: Identify the Element based on tagName with id attribute value
    test.only("Identify the Element based on tagName with id attribute value",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input#pwd1pass1word1").fill("Welcome12345")
    await page.waitForTimeout(2000)
})
 

//Case 3:  Identify the Element based on  id attribute value
test.only("Identify the Element based on  id attribute value", async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=#pwd1pass1word1").fill("Welcome12345678")
    await page.waitForTimeout(2000)
})
 
//Case 4: Identify the Element based on tagName with class attribute value
//Syntax: tagName.classattributevalue
//Case 4: Identify the Element based on tagName with class attribute value
    test.only("Identify the Element based on tagName with class attribute value",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input.pass1word1").fill("Password123")
    await page.waitForTimeout(2000)
})
 

//Syntax: .classattributevalue
//Case 5: Identify the Element based on class attribute value
    test.only("Identify the Element based on class attribute value",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=.pass1word1").fill("Password789")
    await page.waitForTimeout(2000)
})
 
//Case 6: Identify the Element based on tagName with attributeName and value
//Syntax: tagName[attributename='value']
    test.only("Identify the Element based on tagName with attributeName and value",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input[name='windows']").click()
    await page.waitForTimeout(2000)
})
 
//Case 7: Identify the Element based on tagName with Multiple attributeName and value
//Syntax: tagName[attributename='value'][attributename='value']
    test.only("Identify the Element based on tagName with Multiple attributeName and value",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input[type='radio'][name='chrome']").click()
    await page.waitForTimeout(2000)
})
 
/*Case 8: Identify the Element Based on Partial Matching of Attribute Value
Syntax:
^=	-	starts-with
$=	-	ends-with
*=	-	contains
 
tagName[attrubutename ^= 'partialvalue']
tagName[attrubutename $= 'partialvalue']
tagName[attrubutename *= 'partialvalue']*/
 

    test.only("Identify the Element Based on Partial Matching of Attribute Value",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    //await page.locator("css=input[id ^= 'rad2']").click()
    await page.locator("css=input[id *= 'rad2']").click()
    await page.waitForTimeout(2000)
})
 
//Case 9: Identify the Element based on tagName with attribute Name
//Syntax: tagName[attributeName]
 // Find Number of Links in the Application
    test("Identify the Element based on tagName with attribute Name 01",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("css=a[href]")
    console.log("Number of Link in the Application :"+oLinks.length)
    await page.waitForTimeout(2000)
})
 
// Display All Link Names in the Application
    test("Identify the Element based on tagName with attribute Name 02",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("css=a[href]")
    for(let link of oLinks){
        let linkname=await link.textContent()
        console.log("Link Name :"+linkname)
    }
    await page.waitForTimeout(2000)
})
 
// Click on Sepcific Link in the Application
    test.only("Identify the Element based on tagName with attribute Name 03",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("css=a[href]")
    for(let link of oLinks){
        let linkname=await link.textContent()
        if(linkname.startsWith("S G")){
            await link.click()
            break
        }
    }
    await page.waitForTimeout(2000)
})
 

//Case 10: Identify Element using nth child concept
    test.only("Identify Element using nth child concept",async({page})=>{
    await page.goto("file:///D:/PlaywrightQAAutomation/CurrentWorkspace/PlaywrightAutomation/samplewebautomation/HTML/Sample 9.html")
    await page.waitForTimeout(2000)
    await page.locator("css=form#frm3 :nth-child(4)").fill("DemoUser04")
    await page.waitForTimeout(2000)
})
 