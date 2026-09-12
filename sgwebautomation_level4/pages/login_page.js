
class LoginPage{

    constructor(page){
        this.page=page
        this.txtUserNameTextField=page.locator("//input[@name='username']")
        this.txtPasswordtextField=page.locator("//input[@name='password']")
        this.btnSignInButton=page.locator("//button[normalize-space()='Sign In']")
    }

    async setUserNameTextField(username){
        await this.txtUserNameTextField.fill(username)
    }

    async setPasswordTextField(password){
        await this.txtPasswordtextField.fill(password)
    }

    async clickOnSignInbutton(){
        await this.btnSignInButton.click()
    }
}

module.exports = {LoginPage}