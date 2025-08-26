# Playwright Tests

## Test Files
- `example.spec.js` - Basic Playwright examples
- `advanced.spec.js` - Advanced test scenarios  
- `coffee-website.spec.js` - Complete tests for https://seleniumbase.io/coffee
- `playwright-website.spec.js` - Tests for https://playwright.dev (codegen template) 🆕
- `npru-sc-major.spec.js` - Visual regression tests for https://sc.npru.ac.th/sc_major/ 🎯

## Quick Start
1. Install browsers: `npx playwright install`
2. Run all tests: `run-all-tests.bat` or `npm test`
3. Run coffee tests only: `run-coffee-tests.bat` or `npm run test:coffee`
4. Generate new tests: `codegen-playwright.bat` or `npm run codegen:playwright` 🆕

## Coffee Cart Tests ✅
Working tests for SeleniumBase Coffee Cart (https://seleniumbase.io/coffee) including:
- ✅ Page loading and title verification ("Coffee Cart")
- ✅ Cart total button functionality ($0.00 display)
- ✅ Payment form elements ("Payment details" heading)
- ✅ Close button (×) interaction
- ✅ Submit button testing
- ✅ Yes/No confirmation buttons
- ✅ Espresso and cart content verification
- ✅ Navigation flow testing
- ✅ Link verification (3 links found)
- ✅ Responsive design (mobile/desktop)
- ✅ Accessibility testing

## NPRU School of Computer Tests 🎯
Element-focused visual regression tests for NPRU SC Major website (https://sc.npru.ac.th/sc_major/) including:
- 📸 **Element snapshots** - Header, navigation, content sections (no full page)
- 🔍 **Component comparisons** - Individual UI elements with threshold detection
- 🎨 **Targeted screenshots** - Logo, menu items, text blocks, images
- 📱 **Responsive elements** - Navigation and content at 1920px, 768px, 375px
- ⚡ **Performance sections** - Key page areas after load completion
- 🔗 **Interactive elements** - Link states and hover effects
- 🖼️ **Individual images** - Each image element separately
- 📋 **Content blocks** - Text sections and cards
- 📄 **Section analysis** - Header, main, sidebar, footer areas
- 📈 **Element reports** - Component-by-component comparison results

## Commands
- `npm test` - Run all tests
- `npm run test:coffee` - Run only coffee website tests
- `npm run test:playwright` - Run only Playwright.dev tests 🆕
- `npm run test:npru` - Run NPRU SC Major tests with snapshots 🎯
- `npm run test:npru-headed` - Run NPRU tests with visible browser 🎯
- `npm run test:npru-update` - Update NPRU visual snapshots 🎯
- `npm run test:coffee-headed` - Run coffee tests with visible browser
- `npm run test:playwright-headed` - Run Playwright.dev tests with visible browser 🆕
- `npm run test:headed` - Run with visible browser
- `npm run ui` - Open interactive UI mode ✨
- `npm run report` - Show test reports (port 9324) ✨
- `npm run report:open` - Open report directly in browser ✨

## 🎥 Code Generation (Codegen)
- `npm run codegen` - Start codegen for any website
- `npm run codegen:playwright` - Generate tests for Playwright.dev 🆕
- `npm run codegen:coffee` - Generate tests for Coffee Cart
- `npm run codegen:npru` - Generate tests for NPRU SC Major 🎯
- `codegen-playwright.bat` - Batch file for Playwright.dev codegen 🆕
- `codegen-custom.bat` - Batch file for any website codegen 🆕

## Easy Access (Batch Files)
- `open-ui.bat` - Open Playwright UI mode
- `open-report.bat` - Open HTML report directly ✨
- `show-report.bat` - Show report with port handling ✨
- `run-coffee-tests.bat` - Run coffee tests
- `run-npru-tests.bat` - Run NPRU tests with options 🎯
- `view-videos.bat` - View test recordings 🎥

## 📈 Viewing Test Reports
**If report doesn't open:**
1. **Try**: `open-report.bat` (direct browser opening)
2. **Or**: `npm run report:open` 
3. **Or**: `show-report.bat` (handles port conflicts)
4. **Manual**: Open `playwright-report/index.html` in browser

## ⚠️ Important
**Always run commands from the project root** (`d:\Project\PlayWrightQoder`), not from the `tests` folder!