const { test, expect } = require('@playwright/test');

test.describe('SeleniumBase Demo Page Tests', () => {
  
  test('should load demo page successfully with correct title and headings', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Verify page title
    await expect(page).toHaveTitle('Web Testing Page');
    
    // Verify main headings
    await expect(page.getByRole('heading', { name: 'Demo Page', level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'SeleniumBase', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Automation Practice', level: 3 })).toBeVisible();
    
    console.log('✅ Page loaded successfully with correct title and headings');
  });

  test('should test text input fields and verify text content', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Test regular text input
    const textInput = page.locator('#myTextInput');
    await textInput.fill('Testing automated input');
    await expect(textInput).toHaveValue('Testing automated input');
    
    // Test textarea
    const textarea = page.locator('#myTextarea');
    await textarea.fill('This is a test textarea content\nWith multiple lines');
    await expect(textarea).toHaveValue('This is a test textarea content\nWith multiple lines');
    
    // Verify pre-filled text field (this is actually myTextInput2)
    const preFilledField = page.locator('input[value="Text..."]');
    await expect(preFilledField).toHaveValue('Text...');
    
    // Test placeholder text field - FIXED SELECTOR
    const placeholderField = page.locator('#placeholderText');
    await placeholderField.fill('New placeholder text');
    await expect(placeholderField).toHaveValue('New placeholder text');
    
    console.log('✅ Text input fields tested successfully');
  });

  test('should test button click and verify color changes', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Initial state verification - green theme
    await expect(page.locator('#myButton')).toHaveText('Click Me (Green)');
    await expect(page.locator('#readOnlyText')).toHaveValue('The Color is Green');
    await expect(page.locator('p:has-text("This Text is Green")')).toBeVisible();
    
    // Click the button to change to purple theme
    await page.click('#myButton');
    
    // Verify purple theme after button click
    await expect(page.locator('#myButton')).toHaveText('Click Me (Purple)');
    await expect(page.locator('#readOnlyText')).toHaveValue('The Color is Purple');
    await expect(page.locator('p:has-text("This Text is Purple")')).toBeVisible();
    
    console.log('✅ Button click and color change functionality verified');
  });

  test('should test dropdown selection and meter updates', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    const dropdown = page.locator('#mySelect');
    // FIXED SELECTOR - meter element ID is #meterBar
    const meter = page.locator('#meterBar');
    
    // Test initial state (25%)
    await expect(dropdown).toHaveValue('25%');
    await expect(meter).toHaveAttribute('value', '0.25');
    
    // Test 50% selection
    await dropdown.selectOption('50%');
    await expect(dropdown).toHaveValue('50%');
    await expect(meter).toHaveAttribute('value', '0.5');
    
    // Test 75% selection
    await dropdown.selectOption('75%');
    await expect(dropdown).toHaveValue('75%');
    await expect(meter).toHaveAttribute('value', '0.75');
    
    // Test 100% selection
    await dropdown.selectOption('100%');
    await expect(dropdown).toHaveValue('100%');
    await expect(meter).toHaveAttribute('value', '1');
    
    console.log('✅ Dropdown and meter functionality verified');
  });

  test('should test slider control and progress bar synchronization', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    const slider = page.locator('#mySlider');
    // FIXED SELECTOR - progress bar element ID is #progressBar
    const progressBar = page.locator('#progressBar');
    
    // Test initial value (50)
    await expect(slider).toHaveValue('50');
    await expect(progressBar).toHaveAttribute('value', '50');
    
    // Test slider movement to 75
    await slider.evaluate((el) => {
      el.value = '75';
      el.dispatchEvent(new Event('input'));
    });
    await expect(slider).toHaveValue('75');
    await expect(progressBar).toHaveAttribute('value', '75');
    
    // Test slider movement to 25
    await slider.evaluate((el) => {
      el.value = '25';
      el.dispatchEvent(new Event('input'));
    });
    await expect(slider).toHaveValue('25');
    await expect(progressBar).toHaveAttribute('value', '25');
    
    console.log('✅ Slider and progress bar synchronization verified');
  });

  test('should test radio buttons and checkboxes', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Test radio buttons
    const radio1 = page.locator('#radioButton1');
    const radio2 = page.locator('#radioButton2');
    
    // Verify initial state (radio1 is checked)
    await expect(radio1).toBeChecked();
    await expect(radio2).not.toBeChecked();
    
    // Click radio2
    await radio2.check();
    await expect(radio2).toBeChecked();
    await expect(radio1).not.toBeChecked();
    
    // Test checkboxes
    const checkbox1 = page.locator('#checkBox1');
    const checkbox2 = page.locator('#checkBox2');
    const checkbox3 = page.locator('#checkBox3');
    const checkbox4 = page.locator('#checkBox4');
    // FIXED SELECTOR - pre-checked box ID is #checkBox5
    const preCheckedBox = page.locator('#checkBox5');
    
    // Verify pre-checked box is checked
    await expect(preCheckedBox).toBeChecked();
    
    // Test individual checkboxes
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    
    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
    
    await checkbox3.check();
    await expect(checkbox3).toBeChecked();
    
    // Uncheck some boxes
    await checkbox1.uncheck();
    await expect(checkbox1).not.toBeChecked();
    
    console.log('✅ Radio buttons and checkboxes functionality verified');
  });

  test('should test links and verify their URLs', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Test SeleniumBase website link
    const seleniumBaseLink = page.locator('a[href="https://seleniumbase.com"]');
    await expect(seleniumBaseLink).toBeVisible();
    await expect(seleniumBaseLink).toHaveText('seleniumbase.com');
    await expect(seleniumBaseLink).toHaveAttribute('href', 'https://seleniumbase.com');
    
    // Test GitHub link
    const githubLink = page.locator('a[href="https://github.com/seleniumbase/SeleniumBase"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveText('SeleniumBase on GitHub');
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/seleniumbase/SeleniumBase');
    
    // Test SeleniumBase.io docs link
    const docsLink = page.locator('a[href="https://seleniumbase.io"]');
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveText('seleniumbase.io');
    
    // Test demo page link
    const demoPageLink = page.locator('a[href="https://seleniumbase.io/demo_page/"]');
    await expect(demoPageLink).toBeVisible();
    await expect(demoPageLink).toHaveText('SeleniumBase Demo Page');
    
    console.log('✅ All links verified successfully');
  });

  test('should test iframe content and interactions', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // FIXED IFRAME SELECTORS - using specific iframe IDs
    // Test iframe with image (first iframe - myFrame1)
    const imageIframe = page.frameLocator('#myFrame1');
    await expect(imageIframe.locator('img')).toBeVisible();
    
    // Test iframe with text (second iframe - myFrame2)
    const textIframe = page.frameLocator('#myFrame2');
    await expect(textIframe.getByRole('heading', { name: 'iFrame Text', level: 4 })).toBeVisible();
    
    // Test iframe with checkbox (third iframe - myFrame3)
    const checkboxIframe = page.frameLocator('#myFrame3');
    const iframeCheckbox = checkboxIframe.locator('input[type="checkbox"]');
    
    // Initially unchecked, then check it
    await expect(iframeCheckbox).not.toBeChecked();
    await iframeCheckbox.check();
    await expect(iframeCheckbox).toBeChecked();
    
    console.log('✅ iFrame content and interactions verified');
  });

  test('should test hover dropdown functionality', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Locate the dropdown container
    const dropdownContainer = page.locator('#myDropdown');
    await expect(dropdownContainer).toBeVisible();
    
    // Hover over the dropdown to reveal options
    await dropdownContainer.hover();
    
    // Wait a moment for hover effects to take place
    await page.waitForTimeout(500);
    
    // Verify dropdown text is visible
    await expect(dropdownContainer).toContainText('Hover Dropdown');
    
    console.log('✅ Hover dropdown functionality verified');
  });

  test('should verify SVG and image elements', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Test SVG element
    const svgElement = page.locator('svg');
    await expect(svgElement).toBeVisible();
    
    // Test images in iframes
    const iframe1 = page.frameLocator('#myFrame1');
    await expect(iframe1.locator('img')).toBeVisible();
    
    console.log('✅ SVG and image elements verified');
  });

  test('should test complete workflow with text verification', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Step 1: Fill text inputs
    await page.locator('#myTextInput').fill('Automation Test Input');
    await page.locator('#myTextarea').fill('Comprehensive testing of demo page');
    
    // Step 2: Change color theme - FIXED SELECTOR
    await page.click('#myButton');
    await expect(page.locator('#pText')).toContainText('This Text is Purple');
    
    // Step 3: Adjust controls
    await page.locator('#mySelect').selectOption('100%');
    await page.locator('#mySlider').evaluate((el) => {
      el.value = '90';
      el.dispatchEvent(new Event('input'));
    });
    
    // Step 4: Test form elements
    await page.locator('#radioButton2').check();
    await page.locator('#checkBox1').check();
    await page.locator('#checkBox2').check();
    
    // Step 5: Test iframe checkbox - FIXED SELECTOR
    const checkboxIframe = page.frameLocator('#myFrame3');
    await checkboxIframe.locator('input[type="checkbox"]').check();
    
    // Final verification
    await expect(page.locator('#myTextInput')).toHaveValue('Automation Test Input');
    await expect(page.locator('#myButton')).toHaveText('Click Me (Purple)');
    await expect(page.locator('#mySelect')).toHaveValue('100%');
    await expect(page.locator('#mySlider')).toHaveValue('90');
    await expect(page.locator('#radioButton2')).toBeChecked();
    await expect(page.locator('#checkBox1')).toBeChecked();
    
    console.log('✅ Complete workflow test passed successfully');
    
    // Take final screenshot for verification
    await page.screenshot({ 
      path: 'tests/screenshots/seleniumbase-demo-final.png',
      fullPage: true 
    });
  });

  test('should verify all text content and labels', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
    await page.waitForLoadState('networkidle');
    
    // Verify all static text labels
    const expectedTexts = [
      'Demo Page',
      'SeleniumBase', 
      'Automation Practice',
      'Text Input Field:',
      'Textarea:',
      'Pre-Filled Text Field:',
      'Button:',
      'Placeholder Text Field:',
      'Read-Only Text Field:',
      'HTML SVG with rect:',
      'Paragraph with Text:',
      'Input Slider Control:',
      'Progress Bar:',
      'Select Dropdown:',
      'HTML Meter:',
      'Image in iFrame:',
      'RadioButton 1:',
      'RadioButton 2:',
      'CheckBox:',
      'CheckBoxes:',
      'Pre-Check Box:',
      'CheckBox in iFrame:',
      'URL Link:',
      'Link with Text:',
      'SeleniumBase Docs:',
      'The Demo Page:'
    ];
    
    // FIXED - Using .first() to handle strict mode violations
    for (const text of expectedTexts) {
      await expect(page.getByText(text).first()).toBeVisible();
    }
    
    // Verify iframe text - FIXED SELECTOR
    const textIframe = page.frameLocator('#myFrame2');
    await expect(textIframe.getByText('iFrame Text')).toBeVisible();
    
    console.log('✅ All text content verified successfully');
  });
});