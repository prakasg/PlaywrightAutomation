// Page Object Model:
// -----------------------------------
// Logion Page Locators Elements:
 
 
class LoginPage{
    constructor(page){
        this.page=page
        this.txtUserNameField=page.locator("//input[@name='username']")
        this.txtPasswordField=page.locator("//input[@name='password']")
        this.btnSignInButton=page.locator("//button[normalize-space()='Sign In']")
    }
 
    async setUserNameField(username){
        await this.txtUserNameField.fill(username)
    }
 
    async setPasswordField(password){
        await this.txtPasswordField.fill(password)
    }
 
    async clickOnsingInbutton(){
        await this.btnSignInButton.click()
    }
}
 
module.exports = {LoginPage}
 