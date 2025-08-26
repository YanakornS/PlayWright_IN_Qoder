@echo off
echo.
echo ============================================================
echo    🚀 SeleniumBase Testing Guide - Start Here!
echo ============================================================
echo.
echo This guide will help you:
echo 1. Run SeleniumBase demo page tests
echo 2. Generate video recordings of all tests
echo 3. Combine videos into one viewable format
echo.
echo ============================================================
echo.

:menu
echo Select what you want to do:
echo.
echo [1] 🧪 Run SeleniumBase Tests Only (Chromium)
echo [2] 🧪 Run SeleniumBase Tests Only (Firefox) 
echo [3] 🧪 Run SeleniumBase Tests (Both browsers)
echo [4] 🎬 Merge/View Test Videos (after running tests)
echo [5] 🧪➡️🎬 Complete Workflow (Run Tests + Merge Videos)
echo [6] 📊 View Test Report
echo [7] 📁 Open Test Results Folder
echo [8] ❓ Help - What each test does
echo [0] Exit
echo.
set /p choice=Enter your choice (0-8): 

if "%choice%"=="1" goto run_chromium
if "%choice%"=="2" goto run_firefox
if "%choice%"=="3" goto run_both
if "%choice%"=="4" goto merge_videos
if "%choice%"=="5" goto complete_workflow
if "%choice%"=="6" goto view_report
if "%choice%"=="7" goto open_folder
if "%choice%"=="8" goto help
if "%choice%"=="0" exit /b

echo Invalid choice. Please try again.
pause
goto menu

:run_chromium
echo.
echo 🧪 Running SeleniumBase tests in Chromium with video recording...
echo.
npx playwright test tests/seleniumbase-demo-fixed.spec.js --project=chromium
echo.
echo ✅ Chromium tests completed!
echo.
echo Next step: Choose option [4] to view/merge your videos
pause
goto menu

:run_firefox
echo.
echo 🧪 Running SeleniumBase tests in Firefox with video recording...
echo.
npx playwright test tests/seleniumbase-demo-fixed.spec.js --project=firefox
echo.
echo ✅ Firefox tests completed!
echo.
echo Next step: Choose option [4] to view/merge your videos
pause
goto menu

:run_both
echo.
echo 🧪 Running SeleniumBase tests in both Chromium and Firefox...
echo.
npx playwright test tests/seleniumbase-demo-fixed.spec.js
echo.
echo ✅ All tests completed!
echo.
echo Next step: Choose option [4] to view/merge your videos
pause
goto menu

:merge_videos
echo.
echo 🎬 Opening video merger...
echo.
if exist "simple-video-merger.bat" (
    call simple-video-merger.bat
) else (
    echo ❌ Video merger not found!
    echo Please make sure simple-video-merger.bat exists in the project folder.
    pause
)
goto menu

:complete_workflow
echo.
echo 🚀 Starting complete workflow...
echo.
echo Step 1/2: Running tests...
npx playwright test tests/seleniumbase-demo-fixed.spec.js --project=chromium
echo.
echo Step 2/2: Processing videos...
if exist "simple-video-merger.bat" (
    call simple-video-merger.bat
) else (
    echo ❌ Video merger not found!
    pause
)
goto menu

:view_report
echo.
echo 📊 Opening test report...
npx playwright show-report --port=9324
goto menu

:open_folder
echo.
echo 📁 Opening test results folder...
start "" "test-results"
goto menu

:help
cls
echo.
echo ============================================================
echo    ❓ Help - What Each Test Does
echo ============================================================
echo.
echo 🧪 SeleniumBase Demo Tests include:
echo.
echo 1. 📄 Page Loading Test
echo    - Checks if page loads correctly
echo    - Verifies title and headings
echo.
echo 2. ⌨️ Text Input Tests  
echo    - Tests all input fields
echo    - Verifies text entry and placeholder text
echo.
echo 3. 🎨 Button & Color Tests
echo    - Tests button clicks
echo    - Verifies color theme changes (Green ➡️ Purple)
echo.
echo 4. 📊 Dropdown & Meter Tests
echo    - Tests dropdown selections (25%%, 50%%, 75%%, 100%%)
echo    - Verifies meter updates
echo.
echo 5. 🎚️ Slider & Progress Bar Tests
echo    - Tests slider movement
echo    - Verifies progress bar synchronization
echo.
echo 6. ☑️ Form Elements Tests
echo    - Tests radio buttons and checkboxes
echo    - Verifies selections and state changes
echo.
echo 7. 🔗 Link Testing
echo    - Verifies all page links work correctly
echo    - Tests external link destinations
echo.
echo 8. 🖼️ iFrame Tests
echo    - Tests embedded content
echo    - Verifies iframe interactions
echo.
echo 9. 🎯 Hover Effects Tests
echo    - Tests dropdown hover functionality
echo    - Verifies interactive elements
echo.
echo 10. 🖼️ SVG & Image Tests
echo     - Tests visual elements display
echo     - Verifies image loading
echo.
echo 11. 🔄 Complete Workflow Test
echo     - Tests entire page functionality
echo     - End-to-end user scenario
echo.
echo 12. 📝 Content Verification Test
echo     - Verifies all text content is present
echo     - Tests content accuracy
echo.
echo ============================================================
echo.
echo 🎬 Video Options:
echo - Simple merger creates playlists and galleries
echo - HTML gallery shows all videos in a web page
echo - Playlist mode plays videos sequentially
echo.
pause
goto menu