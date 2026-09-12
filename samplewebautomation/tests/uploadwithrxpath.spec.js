// Case 2: Using Relative Path:
const {test, expect}=require("@playwright/test")
test.only("Import Single File using Relative Path",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(3000)
    await page.locator("css=#file-upload").setInputFiles("Upload\\Python Syllabus .txt")
    await page.waitForTimeout(3000)
    await page.locator("css=#file-submit").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!")
    const uploadedFiles=await page.locator("css=#uploaded-files").textContent()
    await expect(uploadedFiles.includes(".txt")).toBeTruthy()
})