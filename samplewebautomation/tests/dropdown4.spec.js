// How to display Items Available in the Dropdown:
// ------------------------------------------------------------------
import {test, expect} from "@playwright/test"
 
test("Handle Drop Down Elements", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    await page.locator("#country").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    const allItems=await page.$$("option")
    console.log("Number of Items in Drop Down:"+allItems.length)
    for(let i=0;i<allItems.length;i++){
        const itemName=await allItems[i].textContent()
        console.log(itemName)
    }
    let textContents=await page.locator("#country").allTextContents()
    console.log(textContents)
    console.log(await textContents[0].split("\n").toString())
    await expect(textContents[0].split("\n").toString().includes("India")).toBeTruthy()
})