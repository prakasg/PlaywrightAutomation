const { test, expect } = require("@playwright/test");

test("launch Application and Validate", async ({ page }) => {
await page.goto("https://sgtestinginstituteapp.onrender.com/");
await page.waitForTimeout(3000);
})