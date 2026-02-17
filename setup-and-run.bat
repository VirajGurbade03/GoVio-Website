@echo off
echo Installing GoVio Website Dependencies...
echo.

cd /d "%~dp0"

echo Step 1: Installing npm packages...
call npm install

echo.
echo Step 2: Starting development server...
call npm run dev

pause
