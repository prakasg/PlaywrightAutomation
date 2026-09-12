// How to Select Multiple Items from the Drop Down:
// ------------------------------------------------------------
import {test, expect} from '@playwright/test'
 
test("Select Multiple Items from Dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    await page.locator("#colors").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    //Seelct Items by Label
    await page.locator("#colors").selectOption(["Red","Blue","Green"])
    //Select Items by value
    //await page.locator("#colors").selectOption(["blue","green","yellow"])
    //select Items by Index
   // await page.locator("#colors").selectOption({index:[1,2,3]})
    await page.waitForTimeout(3000)
})
 