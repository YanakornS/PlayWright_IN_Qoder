@echo off
echo ========================================
echo    Open Playwright Report (Direct)
echo ========================================
cd /d "d:\Project\PlayWrightQoder"

echo.
echo Opening HTML report directly in browser...
echo.

if exist "playwright-report\index.html" (
    start "" "playwright-report\index.html"
    echo Report opened in default browser!
) else (
    echo No report found! Run tests first.
    echo Try: npm test
)

echo.
pause