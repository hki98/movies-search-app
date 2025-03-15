@echo off
REM Movies App Deployment Script
REM Author: Haian Ibrahim
REM This script builds the React app and prepares it for deployment to haian.me/demo/movies-app

echo 🚀 Starting deployment process for Movies App...

REM Build the application
echo 📦 Building the application...
call npm run build

REM Check if build was successful
if %ERRORLEVEL% NEQ 0 (
  echo ❌ Build failed. Aborting deployment.
  exit /b 1
)

REM Make sure all necessary files are in the dist directory
echo 📋 Ensuring all necessary files are included...
copy public\vite.svg dist\ >nul 2>&1
copy public\star.svg dist\ >nul 2>&1
copy public\hero-bg.png dist\ >nul 2>&1

echo ✅ Build successful!
echo 📂 The built files are in the 'dist' directory.
echo.
echo 🔍 To deploy to your server:
echo 1. Upload all files from the 'dist' directory to your server at the path /demo/movies-app/
echo 2. Make sure all files are readable by the web server
echo.
echo 🌐 Once deployed, your app will be available at: https://haian.me/demo/movies-app/

pause 