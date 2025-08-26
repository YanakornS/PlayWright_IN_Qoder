@echo off
echo ========================================
echo    Playwright Test Report
echo ========================================
cd /d "d:\Project\PlayWrightQoder"

echo.
echo Opening test report in browser...
echo.
echo Trying different ports...
node_modules\.bin\playwright.cmd show-report --port=9324
if errorlevel 1 (
    echo Port 9324 failed, trying 9325...
    node_modules\.bin\playwright.cmd show-report --port=9325
)
if errorlevel 1 (
    echo Port issues detected. Opening report file directly...
    start playwright-report\index.html
)
echo.
echo Report viewer closed.
pause