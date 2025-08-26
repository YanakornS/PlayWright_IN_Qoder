const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('h1')).toContainText('Installation');
  await expect(page.getByRole('heading', { name: 'Installing PlaywrightDirect' })).toBeVisible();
});