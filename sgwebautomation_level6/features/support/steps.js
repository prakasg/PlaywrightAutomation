const { When, Then, Given } = require('@cucumber/cucumber')
const { chromium, expect } = require("@playwright/test")
const LoginValid = require("./../../datafiles/data_login_valid.json")
const LoginInvalid = require("./../../datafiles/data_login_invalid.json")
const CustomerData = require("./../../datafiles/data_customer.json")

let context, page;
When('I launch chromium browser and navigate Application url', async function () {
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

When("I enter invalid username in username text field", async function () {
  await this.login.setUserNameTextField(LoginInvalid.username)
})

When("I enter invalid password in password text field", async function () {
  await this.login.setPasswordTextField(LoginInvalid.password)
})

Then("I find error message that Invalid username or password", async function () {
  await expect(this.page.locator("//p[normalize-space()='Invalid username or password']")).toHaveText("Invalid username or password")
})

When("I click on logout link in home page", async function () {
  await this.home.clickOnLogoutLink()
})

When("I enter {string} in username text field", async function (username) {
  await this.login.setUserNameTextField(username)
})

When("I enter {string} in password text field", async function (password) {
  await this.login.setPasswordTextField(password)
})

When('I click on customer menu link in home page', async function () {
  await this.customer.clickCustomerMenu()
});

Then('I find display customers', async function () {
  await expect(this.customer.titledisplayCustomersContent).toHaveText("Display Customers")
});

When('I click on Add Customer button', async function () {
  await this.customer.clickOnAddCustomerButton()
});

Then('I find add customer form', async function () {
  await expect(this.customer.titleAddCustomersContent).toHaveText("Add Customer")
});

When('I enter customername in customer name text field', async function () {
  await this.customer.setCustomerNameTextField(CustomerData.customername)
});

When('I enter emailid in customer email id text field', async function () {
  await this.customer.setCustomerEmailTextField(CustomerData.customeremail)
});

When('I enter location in customer location text field', async function () {
  await this.customer.setCustomerLocationTextField(CustomerData.customerlocation)
});

When('I enter description in customer description text field', async function () {
  await this.customer.setCustomerDescriptionTextfield(CustomerData.custoemrdescription)
});

When('I click on save button', async function () {
  await this.customer.clickOnCustomerSaveButton()
});

Then('I find newly created customer in display customer page', async function () {
  let cname = CustomerData.customername
  let custname = "//td[text()='" + cname + "']"
  console.log("Customer Name XPath :" + custname);
  const objCustomer = await this.page.locator(custname)
  await expect(objCustomer).toBeVisible()
});

When('I click on delete button', async function () {
  let cname = CustomerData.customername
  console.log("customer Name from JOSN File :"+cname)
  let deleteCustname = "//td[text()='" + cname + "']/following-sibling::td/following-sibling::td/following-sibling::td/following-sibling::td/button[2]"
  console.log("Customer Name XPath :" + deleteCustname);
  await this.page.on("dialog", async (dialog) => {
    const message = await dialog.message()
    console.log("Alert Message :" + message);
    await dialog.accept()
  })
  await this.page.locator(deleteCustname).click()
});

Then('I find newly created customer deleted from display customer page', async function () {
  let cname = CustomerData.customername
  let custname = "//td[text()='" + cname + "']"
  console.log("Customer Name XPath :" + custname);
  const objCustomer = await this.page.locator(custname)
  await expect(objCustomer).not.toBeVisible()
});