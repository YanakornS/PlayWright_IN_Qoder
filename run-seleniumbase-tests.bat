@echo off
echo.
echo ================================================
echo    SeleniumBase Demo Page Test Runner
echo ================================================
echo.
echo Select an option:
echo [1] Run all demo tests (headless)
echo [2] Run demo tests with visible browser
echo [3] Run specific test (text verification)
echo [4] Run specific test (button and color changes)
echo [5] Run specific test (form elements)
echo [6] Run complete workflow test
echo [7] Update test snapshots
echo [8] Open test report
echo [9] Generate new tests with codegen
echo [0] Exit
echo.
set /p choice=Enter your choice (0-9): 

if "%choice%"=="1" (
    echo.
    echo Running all SeleniumBase demo tests...
    npx playwright test tests/seleniumbase-demo.spec.js --reporter=html
    echo.
    echo Tests completed! Report generated.
    pause
    goto menu
)

if "%choice%"=="2" (
    echo.
    echo Running demo tests with visible browser...
    npx playwright test tests/seleniumbase-demo.spec.js --headed
    echo.
    echo Tests completed!
    pause
    goto menu
)

if "%choice%"=="3" (
    echo.
    echo Running text verification test...
    npx playwright test tests/seleniumbase-demo.spec.js -g "should verify all text content" --headed
    pause
    goto menu
)

if "%choice%"=="4" (
    echo.
    echo Running button and color change test...
    npx playwright test tests/seleniumbase-demo.spec.js -g "should test button click and verify color changes" --headed
    pause
    goto menu
)

if "%choice%"=="5" (
    echo.
    echo Running form elements test...
    npx playwright test tests/seleniumbase-demo.spec.js -g "should test radio buttons and checkboxes" --headed
    pause
    goto menu
)

if "%choice%"=="6" (
    echo.
    echo Running complete workflow test...
    npx playwright test tests/seleniumbase-demo.spec.js -g "should test complete workflow" --headed
    pause
    goto menu
)

if "%choice%"=="7" (
    echo.
    echo Updating test snapshots...
    npx playwright test tests/seleniumbase-demo.spec.js --update-snapshots
    echo.
    echo Snapshots updated!
    pause
    goto menu
)

if "%choice%"=="8" (
    echo.
    echo Opening test report...
    call smart-report.bat
    goto menu
)

if "%choice%"=="9" (
    echo.
    echo Starting codegen for SeleniumBase demo page...
    npx playwright codegen https://seleniumbase.io/demo_page
    pause
    goto menu
)

if "%choice%"=="0" (
    echo.
    echo Goodbye!
    exit /b
)

echo.
echo Invalid choice. Please try again.
pause

:menu
cls
goto :eof