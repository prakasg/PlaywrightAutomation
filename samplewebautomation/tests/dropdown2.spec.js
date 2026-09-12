// How to Select Items from the Drop Down:
// ------------------------------------------------------------
import {test, expect} from "@playwright/test"
 
test("Handle Drop Down Elements", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    await page.locator("#country").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    // Select Element by label [Visiable Text]
    //await page.locator("#country").selectOption({label:"India"})
    //await page.locator("#country").selectOption("India")
    //await page.waitForTimeout(2000)
    //Select Element by Value
    //await page.locator("#country").selectOption({value:"japan"})
    // await page.locator("#country").selectOption("japan")
    // await page.waitForTimeout(2000)
    //Select Element using index
    await page.locator("#country").selectOption({index:4})
    await page.waitForTimeout(2000)
})
 