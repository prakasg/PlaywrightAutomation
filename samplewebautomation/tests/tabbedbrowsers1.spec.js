import {test, expect} from "@playwright/test"
 
 
test("Handling Tabbed Brwosers", async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.gowrisoftsolutions.com/")
    await page.waitForTimeout(6000)
    console.log("URL of Main Brwoser :"+await page.url())
    console.log("Title of Main Browser :"+await page.title())
 
    const [newPage]=await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("//div[@class='top-block top-socials']//i[@class='fa fa-facebook']").click(),
            page.waitForTimeout(6000)
        ]
    )
    console.log("URL of Child  Brwoser :"+await newPage.url())
    console.log("Title of Child Browser :"+await newPage.title())
    await newPage.locator("//span[contains(text(),'Create new account')]").click()
    await newPage.waitForTimeout(6000)
 
    // const [newNewPage] = await Promise.all(
    //     context.waitForEvent("page"),
    //    // newPage.locator("//span[contains(text(),'Create new account')]").click(),
    //     newPage.waitForTimeout(6000)
    // )
   
    // console.log("URL of Child  Brwoser :"+await newNewPage.url())
    // console.log("Title of Child Browser :"+await newNewPage.title())
    // await newNewPage.waitForTimeout(6000)
})
 