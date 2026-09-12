/*
Viewport:
------------------
By using Viewport we can maximize the browser.
Viewport can be applied in below two approaches:
1. In Playwright test level
2. In playwright.config.js file level [Global Level]

Case 1: In Playwright test level
In order to know about your screen width and height, we should navigate to this URL https://whatismyviewport.com/

Example:
*/

const { test, expect } = require("@playwright/test");

test.use({ viewport: { width: 1536, height: 864 } });

test("Login logout functionality Validation", async ({ page }) => {
  await page.goto("https://sgtestinginstituteapp.onrender.com/");
  await page.waitForTimeout(3000);

  const width = await page.viewportSize().width;
  console.log("Width of the Current Browser window :" + width);

  const height = await page.viewportSize().height;
  console.log("Height of the Current Browser window :" + height);

  // Login Action
  await page.locator("//input[@name='username']").fill("pgudi");
  await page.locator("input[name='password']").fill("pgudi");
  await page.locator("//button[normalize-space()='Sign In']").click();
  await page.waitForTimeout(3000);

  await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute");

  // Logout Action
  await page.locator("//button[normalize-space()='Logout']").click();
  await expect(page.locator("//img[@alt='Logo']")).toBeVisible();
});

/*
Case 2: In playwright.config.js file level [Global Level]

Configuration Step:
Configure projects for major browsers

projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      viewport: { width: 1536, height: 864 }
    }
  }
];
*/

test("Handle Elements in Frames", async ({ page }) => {
  await page.goto("https://docs.oracle.com/javase/8/docs/api/");
  await page.waitForTimeout(3000);

  const oFrame1 = page.frameLocator("//frame[@name='packageListFrame']");
  await oFrame1.locator("//a[normalize-space()='java.awt']").click();
  await page.waitForTimeout(3000);

  const oFrame2 = page.frameLocator("//frame[@name='packageFrame']");
  await oFrame2.locator("//span[normalize-space()='ActiveEvent']").click();
  await page.waitForTimeout(3000);

  const oFrame3 = page.frameLocator("//frame[@name='classFrame']");
  const content = await oFrame3.locator("//div[@class='description']//div[1]").textContent();
  console.log(content);
});
 