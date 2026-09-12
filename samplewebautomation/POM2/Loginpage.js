// Page Object Model by 2nd Approach:
// --------------------------------------------------
// Login Page Content :
 
class LoginPage{
    constructor(page){
        this.page=page
        this.page=page
        this.txtUserNameField="//input[@name='username']"
        this.txtPasswordField="//input[@name='password']"
        this.btnSignInButton="//button[normalize-space()='Sign In']"
 
    }
 
    async setUserNameField(username){
        await this.page.fill(this.txtUserNameField, username)
    }
 
    async setPasswordField(password){
        await this.page.fill(this.txtPasswordField, password)
    }
 
    async clickOnsignInButton(){
        await this.page.click(this.btnSignInButton)
    }
}
 
module.exports = {LoginPage}
 