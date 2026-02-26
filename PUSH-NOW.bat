@echo off
echo ========================================
echo   PUSHING PHONE NUMBER FIX TO GITHUB
echo ========================================
echo.
cd /d C:\work\site
echo Checking status...
git status
echo.
echo Adding all changes...
git add -A
echo.
echo Committing...
git commit -m "fix: replace all placeholder phone numbers (555) with real number (206) 274-6409"
echo.
echo Pushing to GitHub...
git push origin main
echo.
echo ========================================
echo   DONE! Vercel will auto-deploy in ~60s
echo   Check themadhatterchimneysweep.com
echo ========================================
echo.
pause
