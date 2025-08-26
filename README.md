# Playwright Tests

## Test Files
- `example.spec.js` - Basic Playwright examples
- `advanced.spec.js` - Advanced test scenarios  
- `coffee-website.spec.js` - Complete tests for https://seleniumbase.io/coffee

## Quick Start
1. Install browsers: `npx playwright install`
2. Run all tests: `run-all-tests.bat` or `npm test`
3. Run coffee tests only: `run-coffee-tests.bat` or `npm run test:coffee`

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

## Commands
- `npm test` - Run all tests
- `npm run test:coffee` - Run only coffee website tests
- `npm run test:coffee-headed` - Run coffee tests with visible browser
- `npm run test:headed` - Run with visible browser
- `npm run ui` - Open interactive UI mode ✨
- `npm run report` - Show test reports (port 9324) ✨
- `npm run report:open` - Open report directly in browser ✨

## Easy Access (Batch Files)
- `open-ui.bat` - Open Playwright UI mode
- `open-report.bat` - Open HTML report directly ✨
- `show-report.bat` - Show report with port handling ✨
- `run-coffee-tests.bat` - Run coffee tests

## 📈 Viewing Test Reports
**If report doesn't open:**
1. **Try**: `open-report.bat` (direct browser opening)
2. **Or**: `npm run report:open` 
3. **Or**: `show-report.bat` (handles port conflicts)
4. **Manual**: Open `playwright-report/index.html` in browser

## ⚠️ Important
**Always run commands from the project root** (`d:\Project\PlayWrightQoder`), not from the `tests` folder!