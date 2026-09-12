// Navigate URL -> Login -> CreateCustomer -> DeleteCustomer -> Logout
const {test, expect} = require("@playwright/test")
 
test("Create Customer and Handle Alert during Delete Customer", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    //Login Action
    await page.locator("//input[@name='username']").fill("Prakash")
    await page.locator("//input[@name='password']").fill("Gurikar")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
    await page.locator("//a[normalize-space()='Customers']").click()
    await page.locator("//a[normalize-space()='Add Customer']").click()
    await expect(page.locator("//h3[normalize-space()='Add Customer']")).toHaveText("Add Customer")
    await page.locator("//input[@placeholder='Enter Customer Name']").fill("auto_services1")
    await page.locator("input[placeholder='Enter EmailId']").fill("desktopservices@sg.com")
    await page.locator("input[placeholder='Enter Location']").fill("New York")
    await page.locator("input[placeholder='Enter Description']").fill("Provies Desktop Services")
    await page.waitForTimeout(3000)
    await page.locator("//button[normalize-space()='Save']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//td[normalize-space()='auto_services1']")).toBeVisible()
    page.on("dialog", async(AlertDialog)=>{
        const message=await AlertDialog.message()
        console.log("Alert MEssage :"+message)
        await AlertDialog.accept()
    })
 
    await page.locator("//td[text()='auto_services1']/following-sibling::td/following-sibling::td/following-sibling::td/following-sibling::td/button[2]").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//td[normalize-space()='auto_services1']")).not.toBeVisible()
})