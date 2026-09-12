const { When, Then, Given } = require('@cucumber/cucumber')
const { chromium, expect } = require("@playwright/test")
const {LoginPage} = require("./../../pages/login_page")
const {HomePage} = require("./../../pages/home_page")
const LoginValid = require("./../../datafiles/data_login_valid.json")
const LoginInvalid = require("./../../datafiles/data_login_invalid.json")

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
   await this.login.setUserNameTextField(LoginValid.username)
});

When('I enter password in password text field', async function () {
    await this.login.setPasswordTextField(LoginValid.password)
});

When('I click on signin button in login page', async function () {
    await this.login.clickOnSignInbutton()
});

Then('I find home page', async function () {
    await expect(this.page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
});

When("I enter invalid username in username text field", async function(){
   await this.login.setUserNameTextField(LoginInvalid.username)
})

When("I enter invalid password in password text field", async function(){
    await this.login.setPasswordTextField(LoginInvalid.password)
})

Then("I find error message that Invalid username or password", async function(){
    await expect(this.page.locator("//p[normalize-space()='Invalid username or password']")).toHaveText("Invalid username or password")
})

When("I click on logout link in home page", async function(){
    await this.home.clickOnLogoutLink()
})

When("I enter {string} in username text field", async function(username){
    await this.login.setUserNameTextField(username)
})

When("I enter {string} in password text field",async function(password){
    await this.login.setPasswordTextField(password)
})