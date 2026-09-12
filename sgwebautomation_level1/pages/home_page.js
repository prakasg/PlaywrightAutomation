
class HomePage{
    constructor(page){
        this.page=page
        this.lnkLogoutLink=page.locator("//button[normalize-space()='Logout']")
    }

    async clickOnLogoutLink(){
        await this.lnkLogoutLink.click()
    }
}

module.exports = {HomePage}