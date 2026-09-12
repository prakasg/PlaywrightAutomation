//2. Import/Upload Multiple Files:
import {test, expect} from '@playwright/test'
 
test("Import or Upload Multiple Files ",async({page})=>{
    await page.goto("https://html-file-upload.netlify.app/multiple/")
    await page.waitForTimeout(3000)
    // Import Multiple Files
    await page.locator("css=#file-uploader").setInputFiles(["Upload\\Python Syllabus .txt","Upload\\Playwright Interview Questions 2.txt"])
    await page.waitForTimeout(3000)
    const uploadMesssage=await page.locator("xpath=//p[@id='feedback']").textContent()
    await expect(uploadMesssage.includes("2 file(s) uploaded successfully!")).toBeTruthy()
})