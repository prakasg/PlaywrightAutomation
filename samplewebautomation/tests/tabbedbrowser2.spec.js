import { test, expect } from "@playwright/test";
 
test("Handling Tabbed Browsers", async ({ browser }) => {
 
    const context = await browser.newContext();
 
    // Main browser tab
    const page = await context.newPage();
 
    await page.goto("https://www.gowrisoftsolutions.com/");
    await page.waitForTimeout(3000);
 
    console.log("URL of Main Browser: " + await page.url());
    console.log("Title of Main Browser: " + await page.title());
 
    //First Child
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("//div[@class='top-block top-socials']//i[@class='fa fa-facebook']").click()
    ]);
 
    await newPage.waitForLoadState();
 
    console.log("URL of Child Browser: " + await newPage.url());
    console.log("Title of Child Browser: " + await newPage.title());
 
    //Second Child
    const [newNewPage] = await Promise.all([
        context.waitForEvent("page"),
        newPage.locator("//span[contains(text(),'Create new account')]").click()
    ]);
 
    await newNewPage.waitForLoadState();
 
    console.log("URL of New Child Browser: " + await newNewPage.url());
    console.log("Title of New Child Browser: " + await newNewPage.title());
    await newNewPage.locator("//input[@id='_R_1cl2p4jikacppb6amH1_']").fill("sgtestinginstitute")
    await newNewPage.waitForTimeout(3000);
 
    // Close context
    await context.close();
});