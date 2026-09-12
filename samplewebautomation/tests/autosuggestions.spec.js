// How to handle Auto Suggestions and Auto Complete:
// ---------------------------------------------------------------------------------
// Case 1: Apply Auto suggestions on google Search using Keyboard Operations
 
import {test,expect} from "@playwright/test"
 
test("Auto Suggestion on google by Keyboard operations", async({page})=>{
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)
    await page.locator("//textarea[@name='q']").fill("Playwright Automation")
    await page.waitForTimeout(2000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})
 
//Case 2: Auto Suggestions on Amazon using Keyboard Operations
test("Auto Suggestion on Amamzon by Keyboard Operations", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
    await page.locator("#twotabsearchtextbox").fill("Smart Phones")
    await page.waitForTimeout(2000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
 
})
 
//Case 3: Handle Auto Suggestions by Programmatically
test.only("Auto Suggestions using Programatical Approach", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
    await page.locator("#twotabsearchtextbox").fill("smart phones")
    await page.waitForTimeout(3000)
    await page.waitForSelector("//div[@role='row']")
    await page.waitForTimeout(3000)
    const allSuggestions=await page.$$("//div[@role='row']")
    for(let i=0;i<allSuggestions.length;i++){
        let messages=await allSuggestions[i].textContent()
        if(messages.includes("under 25000")){
            await allSuggestions[i].click()
            await page.waitForTimeout(3000)
            break
        }
    }
})
 
 