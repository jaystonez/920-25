# Push Phone Number Fix to GitHub
# This script pushes the local changes (correct phone number) to GitHub
# Vercel will auto-deploy from the GitHub push

Write-Host "=== Mad Hatter Chimney Sweep - Phone Fix Push ===" -ForegroundColor Cyan
Write-Host ""

# Navigate to repo
Set-Location "C:\work\site"

# Check git status
Write-Host "Checking git status..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "Pulling latest from GitHub first..." -ForegroundColor Yellow
git pull origin main

Write-Host ""
Write-Host "Adding all changes..." -ForegroundColor Yellow
git add -A

Write-Host ""
Write-Host "Committing..." -ForegroundColor Yellow
git commit -m "fix: replace all tel:5555555555 placeholder numbers with real business number (206) 274-6409

- Fixed phone numbers across all service pages, location pages, and SEO landing pages
- Replaced tel:5555555555 with tel:+12062746409 everywhere
- Replaced display text (555) 555-5555 with (206) 274-6409
- This was causing lost customer calls on 20+ pages

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"

Write-Host ""
Write-Host "Pushing to GitHub (Vercel will auto-deploy)..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "=== DONE! ===" -ForegroundColor Green
Write-Host "Vercel will auto-deploy in ~60 seconds." -ForegroundColor Green
Write-Host "Check https://www.themadhatterchimneysweep.com to verify." -ForegroundColor Green

Read-Host "Press Enter to close"
