const { test, expect } = require('@playwright/test');

test.describe('SeleniumBase Coffee Cart Tests', () => {
  
  
  
  test('should display cart total button', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await page.waitForLoadState('networkidle');
    
    // Check if total button is visible
    const totalButton = page.locator('button').filter({ hasText: /Total.*\$/ });
    await expect(totalButton).toBeVisible();
    
    // Verify initial total is $0.00
    await expect(totalButton).toContainText('$0.00');
  });

  


  test('should contain espresso-related content', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await page.waitForLoadState('networkidle');
    
    // Verify page contains espresso content
    const bodyText = await page.locator('body').textContent();
    expect(bodyText?.toLowerCase()).toContain('espresso');
    
    // Also check for cart-related content
    expect(bodyText?.toLowerCase()).toContain('cart');
  });

  test('should navigate through the coffee ordering process', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await page.waitForLoadState('networkidle');
    
    // Take initial screenshot
    await page.screenshot({ path: 'tests/screenshots/coffee-initial.png' });
    
    // Click through available buttons to see the flow
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    console.log(`Found ${buttonCount} buttons on the page`);
    
    // Try clicking the total button first
    const totalButton = buttons.filter({ hasText: /Total/ }).first();
    if (await totalButton.count() > 0) {
      await totalButton.click();
      await page.screenshot({ path: 'tests/screenshots/coffee-after-total-click.png' });
    }
  });

  test('should verify all page links work', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await page.waitForLoadState('networkidle');
    
    // Get all links
    const links = page.locator('a');
    const linkCount = await links.count();
    
    console.log(`Found ${linkCount} links on the page`);
    
    // Verify links exist
    expect(linkCount).toBeGreaterThanOrEqual(1);
    
    // Check if links are clickable (but don't navigate away)
    for (let i = 0; i < Math.min(linkCount, 3); i++) {
      const link = links.nth(i);
      await expect(link).toBeVisible();
    }
  });

  test('should test responsive behavior', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://seleniumbase.io/coffee/');
    await page.waitForLoadState('networkidle');
    
    // Verify essential elements still visible on mobile
    await expect(page.locator('button').filter({ hasText: /Total/ })).toBeVisible();
    await page.screenshot({ path: 'tests/screenshots/coffee-mobile.png' });
    
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('button').filter({ hasText: /Total/ })).toBeVisible();
    await page.screenshot({ path: 'tests/screenshots/coffee-desktop.png' });
  });

  test('should verify page accessibility', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await page.waitForLoadState('networkidle');
    
    // Check for basic accessibility elements
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    // Verify all buttons have text content
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      expect(text?.trim()).toBeTruthy();
    }
    
    // Check page has a title
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title).toBe('Coffee Cart');
  });
});