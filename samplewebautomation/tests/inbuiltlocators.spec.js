// Inbuilt Locators:
// ------------------------------
// These are the recommended built-in locators.
 
//page.getByRole() to locate by explicit and implicit accessibility attributes.
//page.getByText() to locate by text content.
//page.getByLabel() to locate a form control by associated label's text.
//page.getByPlaceholder() to locate an input by placeholder.
//page.getByAltText() to locate an element, usually image, by its text alternative.
//page.getByTitle() to locate an element by its title attribute.
//page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured)./
 
const {test, expect} = require("@playwright/test")
 
test("Inbuilt Locators in playwright", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button',{name : 'Login'}).click()
    await page.waitForTimeout(3000)
    await page.getByAltText("profile picture").first().click()
     await page.waitForTimeout(1000)
     await page.getByText("Logout").click()
     await page.waitForTimeout(3000)
})