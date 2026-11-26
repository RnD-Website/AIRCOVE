@echo off
cd /d "%~dp0"
node -v
if errorlevel 1 (
  echo Node.js is not installed. Install it from https://nodejs.org then run this again.
  pause
  exit /b
)
if not exist node_modules (
  echo Installing packages...
  call npm install
)
start "" http://localhost:5173
call npm run dev
pause
