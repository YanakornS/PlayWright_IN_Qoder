@echo off
echo.
echo ========================================================
echo    SeleniumBase Demo Test Runner with Video Merger
echo ========================================================
echo.

echo 🎬 Step 1: Running SeleniumBase Demo Tests with Video Recording...
echo.

:: Run the fixed tests
npx playwright test tests/seleniumbase-demo-fixed.spec.js

if %errorlevel% neq 0 (
    echo.
    echo ⚠️  Some tests failed, but continuing with video merge...
    echo.
)

echo.
echo ✅ Tests completed!
echo.

echo 🎬 Step 2: Merging test videos...
echo.

:: Check if merge script exists
if not exist "merge-seleniumbase-videos.bat" (
    echo ❌ Video merge script not found!
    echo    Please make sure merge-seleniumbase-videos.bat exists.
    pause
    exit /b 1
)

:: Auto-run the video merger
call merge-seleniumbase-videos.bat

echo.
echo 🎯 Test run and video merge complete!
echo.
pause