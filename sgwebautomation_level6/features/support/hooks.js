const { Before, After } = require('@cucumber/cucumber')
const { chromium, expect } = require("@playwright/test")
const { LoginPage } = require("./../../pages/login_page")
const { HomePage } = require("./../../pages/home_page")
const { CustomerPage } = require("./../../pages/customer_page")

Before(async function(){
    const browser = await chromium.launch({
    headless: false
  })
  this.context = await browser.newContext()
  this.page = await this.context.newPage()
  // Create Object for LoginPage
  this.login = new LoginPage(this.page)
  //Create Object for Home Page
  this.home = new HomePage(this.page)
  //Create object for Customer
  this.customer = new CustomerPage(this.page)
})

After(async function(){
    await this.page.close()
})