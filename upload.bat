@echo off
echo.
echo ===========================================
echo   QA Portfolio Instant Deployment
echo ===========================================
echo.

:: Stage all changes
echo [+] Staging changes...
git add .

:: Automatic commit message with timestamp
set msg=Portfolio update - %date% %time%
echo [+] Committing changes...
git commit -m "%msg%"

:: Push to GitHub
echo [+] Pushing to GitHub (main branch)...
git push origin main

echo.
echo ===========================================
echo   Deployment Complete!
echo ===========================================
timeout /t 3
