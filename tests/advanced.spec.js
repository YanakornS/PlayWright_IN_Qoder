const { test, expect } = require('@playwright/test');

test('form interaction', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect(page.getByTestId('todo-title')).toHaveText('Learn Playwright');
});

test('screenshot test', async ({ page }) => {
  await page.goto('https://example.com');
  await page.screenshot({ path: 'tests/screenshots/example.png' });
});