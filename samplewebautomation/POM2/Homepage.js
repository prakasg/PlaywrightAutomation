//Home Page Content:
 
 
class HomePage{
    constructor(page){
        this.page=page
        this.linkLogoutLink="//button[normalize-space()='Logout']"
    }
 
    async clickOnLogoutLink(){
        await this.page.click(this.linkLogoutLink)
    }
}
 
module.exports = {HomePage}