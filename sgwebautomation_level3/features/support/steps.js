const { When, Then, Given } = require('@cucumber/cucumber')
const { chromium, expect } = require("@playwright/test")
const {LoginPage} = require("./../../pages/login_page")
const {HomePage} = require("./../../pages/home_page")

let context, page;
When('I launch chromium browser and navigate Application url', async function () {
    const browser = await chromium.launch({
        headless: false
    })
    context = await browser.newContext()
    this.page = await context.newPage()
    // Create Object for LoginPage
    this.login=new LoginPage(this.page)
    //Create Object for Home Page
    this.home=new HomePage(this.page)
    await this.page.goto("https://sgtestinginstituteapp.onrender.com/")
});

Then('I find the login page', async function () {
    await expect(this.page).toHaveTitle("S G Software Testing Institute")
});

When('I enter username in username text field', async function () {
   // await this.page.locator("//input[@name='username']").fill("pgudi")
   await this.login.setUserNameTextField("pgudi")
});

When('I enter password in password text field', async function () {
    //await this.page.locator("//input[@name='password']").fill("pgudi")
    await this.login.setPasswordTextField("pgudi")
});

When('I click on signin button in login page', async function () {
    //await this.page.locator("//button[normalize-space()='Sign In']").click()
    await this.login.clickOnSignInbutton()
});

Then('I find home page', async function () {
    await expect(this.page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
});

When("I enter invalid username in username text field", async function(){
   // await this.page.locator("//input[@name='username']").fill("pgudi123")
   await this.login.setUserNameTextField("pgudi123")
})

When("I enter invalid password in password text field", async function(){
    //await this.page.locator("//input[@name='password']").fill("pgudi123")
    await this.login.setPasswordTextField("pgudi123")
})

Then("I find error message that Invalid username or password", async function(){
    await expect(this.page.locator("//p[normalize-space()='Invalid username or password']")).toHaveText("Invalid username or password")
})

When("I click on logout link in home page", async function(){
    //await this.page.locator("//button[normalize-space()='Logout']").click()
    await this.home.clickOnLogoutLink()
})