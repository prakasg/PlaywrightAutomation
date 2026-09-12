//Playwright Approach for Handling Frames:
//---------------------------------------------------------------
const {test, expect} = require("@playwright/test")
 
test("Handle Elements in Frames", async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    await page.waitForTimeout(3000)
    const oFrame1=await page.frameLocator("//frame[@name='packageListFrame']")
    await oFrame1.locator("//a[normalize-space()='java.awt']").click()
    await page.waitForTimeout(3000)
    const oFrame2=await page.frameLocator("//frame[@name='packageFrame']")
    await oFrame2.locator("//span[normalize-space()='ActiveEvent']").click()
    await page.waitForTimeout(3000)
    const oFrame3=await page.frameLocator("//frame[@name='classFrame']")
    const content=await oFrame3.locator("//div[@class='description']//div[1]").textContent()
    console.log(content);
})