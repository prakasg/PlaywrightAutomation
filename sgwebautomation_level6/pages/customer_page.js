
class CustomerPage{
    constructor(page){
        this.page=page
        this.menuCustomerLink=page.locator("//a[normalize-space()='Customers']")
        this.titledisplayCustomersContent=page.locator("//h4[normalize-space()='Display Customers']")
        this.btnAddCustomerbutton=page.locator("//a[normalize-space()='Add Customer']")
        this.titleAddCustomersContent=page.locator("//h3[normalize-space()='Add Customer']")
        this.txtCustomerNameTextField=page.locator("//input[@placeholder='Enter Customer Name']")
        this.txtCustomerEmailIdTextField=page.locator("//input[@placeholder='Enter EmailId']")
        this.txtCustomerLocationTextField=page.locator("//input[@placeholder='Enter Location']")
        this.txtCustomerDescriptionTextField=page.locator("//input[@placeholder='Enter Description']")
        this.btnSavebutton = page.locator("//button[normalize-space()='Save']")
    }

    async clickCustomerMenu(){
        await this.menuCustomerLink.click()
    }

    async clickOnAddCustomerButton(){
       await this.btnAddCustomerbutton.click()
    }

    async setCustomerNameTextField(customername){
        await this.txtCustomerNameTextField.fill(customername)
    }

    async setCustomerEmailTextField(emailid){
        await this.txtCustomerEmailIdTextField.fill(emailid)
    }

    async setCustomerLocationTextField(location){
        await this.txtCustomerLocationTextField.fill(location)
    }
    async setCustomerDescriptionTextfield(description){
        await this.txtCustomerDescriptionTextField.fill(description)
    }

    async clickOnCustomerSaveButton(){
        await this.btnSavebutton.click()
    }
}

module.exports={CustomerPage}