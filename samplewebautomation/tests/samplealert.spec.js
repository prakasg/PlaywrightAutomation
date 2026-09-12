// 1. Alerts:
 
// Sample Alert Design :
 // Playwright Code to Handle Alert:
// -------------------------------------------
const {test, expect} = require("@playwright/test")
 
test("Handle Simple Alerts", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)
 
    page.on("dialog", async(AlertDialog)=>{
        await expect(AlertDialog.type()).toContain("alert")
        const message=await AlertDialog.message()
        console.log("Alert Message :"+message)
        await expect(message).toContain("I am a JS Alert")
        await AlertDialog.accept()
    })
    await page.locator("//button[normalize-space()='Click for JS Alert']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[@id='result']")).toHaveText("You successfully clicked an alert")
})
 
test("Handle Confirm Alerts", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)
 
    page.on("dialog", async(AlertDialog)=>{
        await expect(AlertDialog.type()).toContain("confirm")
        const message=await AlertDialog.message()
        console.log("Alert Message :"+message)
        await expect(message).toContain("I am a JS Confirm")
        await AlertDialog.accept()
    })
    await page.locator("//button[normalize-space()='Click for JS Confirm']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[@id='result']")).toHaveText("You clicked: Ok")
})
 
test
.only("Handle Prompt Alerts", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)
 
    page.on("dialog", async(AlertDialog)=>{
        await expect(AlertDialog.type()).toContain("prompt")
        const message=await AlertDialog.message()
        console.log("Alert Message :"+message)
        await expect(message).toContain("I am a JS prompt")
        await AlertDialog.accept("PLAYWRIGHT AUTOMATION")
    })
    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[@id='result']")).toHaveText("You entered: PLAYWRIGHT AUTOMATION")
})