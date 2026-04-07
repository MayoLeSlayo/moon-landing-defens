#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "==> Building..."
npm run build

echo "==> Deploying to server..."
rsync -avz --delete \
  -e "ssh -i ~/.ssh/gridpane_new" \
  out/ \
  root@149.28.96.20:/var/www/werethemoonlandingsreal.com/htdocs/

echo "==> Pushing to GitHub..."
git add -A
git diff --cached --quiet && echo "Nothing to commit, skipping." || \
  git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push origin main

echo "==> Done. Site is live at https://werethemoonlandingsreal.com"
