/*1. Import/ Upload Single File
2. Import/Upload Multiple Files
3. Mouse Operations
4. Hooks in Playwright
a)BeforeEach,AfterEach,BeforeAll, AfterAll
How to apply Hooks on Tests
5. Grouping Tests
How to apply Grouping on Tests
 
1. Import/ Upload Single File:
Case 1: Using Absolute Path :*/
import {test, expect} from "@playwright/test"
 
test("Import Single File",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(3000)
    await page.locator("css=#file-upload").setInputFiles("D:\\PlaywrightQAAutomation\\CurrentWorkspace\\PlaywrightAutomation\\samplewebautomation\\Upload\\Python Syllabus .txt")
    await page.waitForTimeout(3000)
    await page.locator("css=#file-submit").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!")
    const uploadedFiles=await page.locator("css=#uploaded-files").textContent()
    await expect(uploadedFiles.includes(".txt")).toBeTruthy()
})
 