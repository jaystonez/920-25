cd C:\work\site
git rm mad-hatter-website-deploy.zip
git add vercel.json
git commit -m "Fix: set framework to nextjs, remove zip from repo"
git push origin main
