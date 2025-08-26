const { test, expect } = require('@playwright/test');

test.describe('NPRU School of Computer Major Tests with Snapshots and Comparisons', () => {
  
  test('should load NPRU SC Major page successfully with snapshot comparison', async ({ page }) => {
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Verify page loads with correct title
    await expect(page).toHaveTitle(/คณะวิทยาศาสตร์และเทคโนโลยี|Computer Science|NPRU/);
    
    // Take full-page screenshot for visual regression comparison
    await expect(page).toHaveScreenshot('npru-homepage-full.png', {
      fullPage: true,
      threshold: 0.2
    });
    
    console.log('✅ Homepage snapshot comparison completed');
  });

  test('should display main navigation and header with snapshot comparison', async ({ page }) => {
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Check for main navigation elements
    const navigation = page.locator('nav, .navbar, .menu, .navigation');
    if (await navigation.count() > 0) {
      await expect(navigation.first()).toBeVisible();
    }
    
    // Take full-page screenshot with navigation visible for comparison
    await expect(page).toHaveScreenshot('npru-navigation-full.png', {
      fullPage: true,
      threshold: 0.2
    });
    
    console.log('✅ Navigation snapshot comparison completed');
  });

  test('should display major information content with full-page comparison', async ({ page }) => {
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Look for content related to computer science majors
    const contentSelectors = [
      'text=/วิทยาการคอมพิวเตอร์|Computer Science|สาขา|Major/i',
      '.content, .main-content, .body-content',
      'p, div, section'
    ];
    
    let contentFound = false;
    for (const selector of contentSelectors) {
      const elements = page.locator(selector);
      if (await elements.count() > 0) {
        const firstElement = elements.first();
        await expect(firstElement).toBeVisible();
        
        // Take full-page screenshot of content for comparison
        await expect(page).toHaveScreenshot('npru-content-full.png', {
          fullPage: true,
          threshold: 0.3
        });
        
        contentFound = true;
        break;
      }
    }
    
    // Ensure some content was found
    expect(contentFound).toBeTruthy();
    
    // Take comprehensive full-page screenshot showing all content
    await expect(page).toHaveScreenshot('npru-all-content-full.png', {
      fullPage: true,
      threshold: 0.3
    });
    
    console.log('✅ Content snapshot comparison completed');
  });

  test('should display course/curriculum information with snapshot comparison', async ({ page }) => {
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Look for curriculum or course-related content
    const curriculumTerms = [
      'หลักสูตร', 'curriculum', 'course', 'รายวิชา', 'วิชา', 'เรียน'
    ];
    
    for (const term of curriculumTerms) {
      const elements = page.locator(`text=/${term}/i`);
      if (await elements.count() > 0) {
        console.log(`Found curriculum content: ${term}`);
        
        // Take full-page screenshot when curriculum content is found
        await expect(page).toHaveScreenshot(`npru-curriculum-${term}-full.png`, {
          fullPage: true,
          threshold: 0.2
        });
        
        console.log(`✅ Curriculum (${term}) snapshot comparison completed`);
        break;
      }
    }
  });

  test('should test responsive design with full-page snapshots across viewports', async ({ page }) => {
    // Test desktop view (1920x1080)
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Desktop - full-page screenshot for comparison
    await expect(page).toHaveScreenshot('npru-desktop-full.png', {
      fullPage: true,
      threshold: 0.2
    });
    
    console.log('✅ Desktop (1920x1080) snapshot comparison completed');
    
    // Test tablet view (768x1024)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Tablet - full-page screenshot for comparison
    await expect(page).toHaveScreenshot('npru-tablet-full.png', {
      fullPage: true,
      threshold: 0.3
    });
    
    console.log('✅ Tablet (768x1024) snapshot comparison completed');
    
    // Test mobile view (375x667)
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Mobile - full-page screenshot for comparison
    await expect(page).toHaveScreenshot('npru-mobile-full.png', {
      fullPage: true,
      threshold: 0.3
    });
    
    console.log('✅ Mobile (375x667) snapshot comparison completed');
  });

  test('should check for images and media content with full-page comparison', async ({ page }) => {
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Wait for images to load
    await page.waitForTimeout(3000);
    
    // Check for images
    const images = page.locator('img');
    const imageCount = await images.count();
    
    console.log(`Found ${imageCount} images on the page`);
    
    // Take full-page screenshot showing all images and media for comparison
    await expect(page).toHaveScreenshot('npru-images-media-full.png', {
      fullPage: true,
      threshold: 0.2
    });
    
    // Check for any video or multimedia content
    const videos = page.locator('video, iframe');
    const videoCount = await videos.count();
    console.log(`Found ${videoCount} video/iframe elements`);
    
    if (videoCount > 0) {
      console.log('✅ Media content detected and included in snapshot');
    }
    
    console.log('✅ Images and media snapshot comparison completed');
  });

  test('should test navigation links and interactions with hover comparisons', async ({ page }) => {
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Get all links
    const links = page.locator('a[href]');
    const linkCount = await links.count();
    
    console.log(`Found ${linkCount} links on the page`);
    
    // Take initial full-page screenshot
    await expect(page).toHaveScreenshot('npru-links-initial-full.png', {
      fullPage: true,
      threshold: 0.2
    });
    
    // Test first few internal links with hover effects
    for (let i = 0; i < Math.min(linkCount, 3); i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && !href.startsWith('http') && !href.startsWith('mailto')) {
        // Hover over link and take full-page screenshot for comparison
        await link.hover();
        await page.waitForTimeout(500);
        
        await expect(page).toHaveScreenshot(`npru-link-${i + 1}-hover-full.png`, {
          fullPage: true,
          threshold: 0.2
        });
        
        console.log(`✅ Link ${i + 1} hover snapshot comparison completed`);
      }
    }
    
    console.log('✅ Navigation links snapshot comparisons completed');
  });

  test('should verify page performance and loading with full-page comparison', async ({ page }) => {
    // Start performance monitoring
    const startTime = Date.now();
    
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    console.log(`📊 Page load time: ${loadTime}ms`);
    
    // Take full-page performance screenshot for comparison
    await expect(page).toHaveScreenshot('npru-performance-full.png', {
      fullPage: true,
      threshold: 0.2
    });
    
    // Verify page loaded within reasonable time (adjust as needed)
    expect(loadTime).toBeLessThan(15000); // 15 seconds max
    
    console.log('✅ Performance snapshot comparison completed');
    console.log(`📈 Performance result: ${loadTime < 10000 ? 'EXCELLENT' : loadTime < 15000 ? 'GOOD' : 'NEEDS IMPROVEMENT'}`);
  });

  test('should test form elements if present with snapshot comparison', async ({ page }) => {
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Look for forms
    const forms = page.locator('form');
    const formCount = await forms.count();
    
    if (formCount > 0) {
      console.log(`Found ${formCount} forms on the page`);
      
      // Take full-page screenshot showing forms for comparison
      await expect(page).toHaveScreenshot('npru-forms-full.png', {
        fullPage: true,
        threshold: 0.2
      });
      
      console.log('✅ Forms snapshot comparison completed');
    } else {
      console.log('ℹ️  No forms found on the page');
    }
    
    // Look for input elements
    const inputs = page.locator('input, textarea, select');
    const inputCount = await inputs.count();
    
    console.log(`Found ${inputCount} input elements`);
  });

  test('should create comprehensive comparison report with final snapshot', async ({ page }) => {
    await page.goto('https://sc.npru.ac.th/sc_major/');
    await page.waitForLoadState('networkidle');
    
    // Wait for all content to fully load
    await page.waitForTimeout(2000);
    
    // Take final comprehensive full-page screenshot for comparison
    await expect(page).toHaveScreenshot('npru-final-full-comparison.png', {
      fullPage: true,
      threshold: 0.2
    });
    
    // Get page metrics for comparison report
    const title = await page.title();
    const url = page.url();
    const timestamp = new Date().toISOString();
    
    // Additional page analysis
    const allElements = page.locator('*');
    const elementCount = await allElements.count();
    const textContent = await page.locator('body').textContent();
    const hasThaiContent = textContent ? /[\u0E00-\u0E7F]/.test(textContent) : false;
    
    // Log comprehensive test summary with comparison results
    console.log('=== 📊 NPRU SC Major Snapshot Comparison Report ===');
    console.log(`🌐 Title: ${title}`);
    console.log(`🔗 URL: ${url}`);
    console.log(`⏰ Timestamp: ${timestamp}`);
    console.log(`📝 Total DOM Elements: ${elementCount}`);
    console.log(`🇹🇭 Contains Thai Content: ${hasThaiContent ? 'Yes' : 'No'}`);
    console.log(`📸 Full-page snapshots saved for visual regression testing`);
    console.log(`🔍 Visual comparisons completed with threshold tolerance`);
    console.log(`✅ Comprehensive snapshot testing and comparison finished`);
    console.log('=== 🎯 End of Report ===');
  });
});