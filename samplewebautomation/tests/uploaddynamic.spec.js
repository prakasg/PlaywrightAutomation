//Case 1: Dynamically Validated number of files Uploaded:
import {test, expect} from '@playwright/test'
 
test("Import or Upload Multiple Files ",async({page})=>{
    await page.goto("https://html-file-upload.netlify.app/multiple/")
    await page.waitForTimeout(3000)
    // Import Multiple Files
    let files=["Upload\\Python Syllabus .txt","Upload\\Playwright Interview Questions 2.txt"]
    let filesCount=files.length
    await page.locator("css=#file-uploader").setInputFiles(files)
    await page.waitForTimeout(3000)
    const uploadMesssage=await page.locator("xpath=//p[@id='feedback']").textContent()
    let expected=filesCount+" file(s) uploaded successfully!"
    console.log(expected)
    console.log(`${filesCount} file(s) uploaded successfully!`)
    await expect(uploadMesssage.includes(`${filesCount} file(s) uploaded successfully!`)).toBeTruthy()
})