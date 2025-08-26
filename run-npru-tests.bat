@echo off
echo.
echo ============================================
echo    NPRU SC Major Test Suite Runner
echo ============================================
echo.
echo Select an option:
echo [1] Run NPRU tests (snapshot comparison)
echo [2] Update NPRU snapshots (create new baselines)
echo [3] Run NPRU tests with browser visible
echo [4] Generate new NPRU tests with codegen
echo [5] Open test report
echo [6] View snapshots folder
echo [0] Exit
echo.
set /p choice=Enter your choice (0-6): 

if "%choice%"=="1" (
    echo.
    echo Running NPRU tests with snapshot comparison...
    npx playwright test tests/npru-sc-major.spec.js --reporter=html
    echo.
    echo Tests completed! Report generated.
    pause
    goto menu
)

if "%choice%"=="2" (
    echo.
    echo Updating NPRU baseline snapshots...
    npx playwright test tests/npru-sc-major.spec.js --update-snapshots
    echo.
    echo Snapshots updated!
    pause
    goto menu
)

if "%choice%"=="3" (
    echo.
    echo Running NPRU tests with visible browser...
    npx playwright test tests/npru-sc-major.spec.js --headed
    echo.
    echo Tests completed!
    pause
    goto menu
)

if "%choice%"=="4" (
    echo.
    echo Starting codegen for NPRU website...
    npx playwright codegen https://sc.npru.ac.th/sc_major/
    pause
    goto menu
)

if "%choice%"=="5" (
    echo.
    echo Opening test report...
    start playwright-report/index.html
    pause
    goto menu
)

if "%choice%"=="6" (
    echo.
    echo Opening snapshots folder...
    start tests/npru-sc-major.spec.js-snapshots/
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