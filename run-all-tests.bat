@echo off
echo ========================================
echo    All Playwright Tests
echo ========================================
cd /d "d:\Project\PlayWrightQoder"

echo.
echo Running ALL tests...
node_modules\.bin\playwright.cmd test --reporter=list
echo.
echo Tests completed with exit code: %ERRORLEVEL%

if %ERRORLEVEL% EQU 0 (
    echo ✓ All tests passed!
) else (
    echo ✗ Some tests failed. Check the output above.
)

echo.
echo ========================================
echo Press any key to exit...
pause > nul