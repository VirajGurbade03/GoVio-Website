@echo off
echo ========================================
echo GoVio Website - Setup and Run
echo ========================================
echo.

cd /d "%~dp0"

echo Current Directory: %CD%
echo.

echo Step 1: Checking Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js found!
node --version
echo.

echo Step 2: Checking npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed!
    pause
    exit /b 1
)
echo npm found!
npm --version
echo.

echo Step 3: Installing dependencies...
echo This may take a few minutes...
echo.
call npm install --legacy-peer-deps
if errorlevel 1 (
    echo.
    echo ERROR: npm install failed!
    echo Trying alternative method...
    echo.
    call npm install --force
    if errorlevel 1 (
        echo.
        echo ERROR: Installation failed!
        echo Please check SETUP_INSTRUCTIONS.md for manual steps
        pause
        exit /b 1
    )
)

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.

echo Step 4: Starting development server...
echo.
echo Website will open at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
