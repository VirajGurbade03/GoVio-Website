@echo off
echo ========================================
echo GoVio Website - Public Folder Setup
echo ========================================
echo.

REM Check if public folder exists
if exist "public" (
    echo [INFO] Public folder already exists
) else (
    echo [STEP 1] Creating public folder...
    mkdir public
    echo [SUCCESS] Public folder created
)

REM Check if assests folder exists in public
if exist "public\assests" (
    echo [INFO] Assets already copied to public folder
) else (
    echo [STEP 2] Copying assests to public folder...
    xcopy /E /I /Y assests public\assests
    echo [SUCCESS] Assets copied successfully
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Your static files are now in: public\assests
echo.
echo Next steps:
echo 1. Make sure development server is running: npm run dev
echo 2. Refresh your browser (Ctrl+F5)
echo 3. Logo and images should now load properly
echo.
pause
