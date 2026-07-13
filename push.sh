#!/bin/bash
# Push changes to GitHub for Vercel auto-deployment
# Usage: ./push.sh

cd "/Users/masami/Desktop/Ai projects/Websites/masami"
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Ensure SSH agent is running and key is loaded
eval "$(ssh-agent -s)" > /dev/null 2>&1
ssh-add ~/.ssh/id_ed25519 > /dev/null 2>&1

# Push to GitHub (uses SSH - no password required)
git push origin main

echo "Push complete! Vercel will auto-deploy."
