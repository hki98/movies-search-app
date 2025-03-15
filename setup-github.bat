@echo off
REM Movies Search App - GitHub Setup Script
REM Author: Haian Ibrahim

echo 🚀 Setting up Movies Search App for GitHub...

REM Check if git is installed
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Git is not installed. Please install Git first.
    exit /b 1
)

REM Check if the directory is already a git repository
if exist .git\ (
    echo ✅ Git repository already initialized.
) else (
    echo 📦 Initializing Git repository...
    git init
    echo ✅ Git repository initialized.
)

REM Check if there's a remote origin
git remote get-url origin >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo ✅ Remote origin already set up.
) else (
    echo ❓ Please enter your GitHub username:
    set /p github_username=
    
    echo ❓ Please enter your repository name (default: movies-search-app):
    set /p repo_name=
    if "%repo_name%"=="" set repo_name=movies-search-app
    
    echo 🔗 Setting up remote origin...
    git remote add origin "https://github.com/%github_username%/%repo_name%.git"
    echo ✅ Remote origin set to: https://github.com/%github_username%/%repo_name%.git
)

REM Stage all files
echo 📋 Staging all files...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Initial commit: Movies Search App"

echo.
echo 🎉 Setup complete! Now you can push to GitHub with:
echo git push -u origin main
echo.
echo 📝 Note: If your default branch is 'master' instead of 'main', use:
echo git push -u origin master
echo.
echo 🌐 After pushing, your repository will be available at:
echo https://github.com/YOUR_USERNAME/YOUR_REPO_NAME

pause 