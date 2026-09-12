// How to Apply Groups and Hooks on application:
// ----------------------------------------------------------------------
import {test, expect} from "@playwright/test"
let context, page;
test.beforeAll(async({browser})=>{
    context=await browser.newContext()
    page=await context.newPage()
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
        await page.waitForTimeout(3000)
})
 
test.afterAll(async()=>{
    await context.close()
    await page.close()
})
test.describe.serial("Functional Tests of Appliation", async()=>{
    test("Logoin and Logout E-commerece Functioanlity Application", async()=>{
        // Login Action
        await page.locator("//input[@name='username']").fill("pgudi")
        await page.locator("input[name='password']").fill("pgudi")
        await page.locator("//button[normalize-space()='Sign In']").click()
        await page.waitForTimeout(3000)
        await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
        // Logout Action
        await page.locator("//button[normalize-space()='Logout']").click()
        await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
        await page.waitForTimeout(3000)
    })
 
    test("Logoin and Logout E-Healthcare Functioanlity Application", async()=>{
        // Login Action
        await page.locator("//input[@name='username']").fill("pgudi")
        await page.locator("input[name='password']").fill("pgudi")
        await page.locator("//button[normalize-space()='Sign In']").click()
        await page.waitForTimeout(3000)
        await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
        // Logout Action
        await page.locator("//button[normalize-space()='Logout']").click()
        await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
        await page.waitForTimeout(3000)
    })
})