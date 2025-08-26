@echo off
echo ========================================
echo    Playwright Test Videos Viewer
echo ========================================
cd /d "d:\Project\PlayWrightQoder"

echo.
echo Looking for test videos...
echo.

if exist "test-results" (
    echo Found test results directory.
    echo.
    echo Recent video files:
    dir /s /b test-results\*.webm
    echo.
    echo Opening test-results folder...
    start "" "test-results"
    echo.
    echo Instructions:
    echo 1. Navigate to any test folder
    echo 2. Double-click on video.webm to play
    echo 3. If videos don't play, try:
    echo    - VLC Media Player (free download)
    echo    - Google Chrome browser
    echo    - Microsoft Edge browser
    echo.
) else (
    echo No test results found!
    echo Run some tests first: npm test
)

pause