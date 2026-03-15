@echo off
echo.
echo ===========================================
echo   QA Portfolio Deployment Script
echo ===========================================
echo.

:: Stage all changes
echo [+] Staging changes...
git add .

:: Ask for commit message
set /p msg="Enter commit message (or press enter for 'Update portfolio'): "
if "%msg%"=="" set msg="Update portfolio"

:: Commit changes
echo [+] Committing changes: %msg%
git commit -m "%msg%"

:: Push to GitHub
echo [+] Pushing to GitHub (main branch)...
git push origin main

echo.
echo ===========================================
echo   Deployment Complete!
echo ===========================================
pause
