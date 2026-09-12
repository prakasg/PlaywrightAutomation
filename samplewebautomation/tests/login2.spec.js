const { test, expect } = require("@playwright/test");

test("launch Application and Validate", async ({ page }) => {
await page.goto("https://www.amazon.com/");
await page.waitForTimeout(3000);
})
