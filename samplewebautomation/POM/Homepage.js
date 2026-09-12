//Home Page Locator Elements:
 
 
class HomePage{
    constructor(page){
        this.page=page
        this.lnkLogoutLink=page.locator("//button[normalize-space()='Logout']")
        this.homepageValidationMessage=page.locator("//h2[normalize-space()='S G Software Testing Institute']")
    }
 
    async clickOnLogoutLink(){
        await this.lnkLogoutLink.click()
    }
}
 
module.exports = {HomePage}
 