#!/bin/bash

# Quick GitHub connection script
# Usage: ./connect-github.sh YOUR-USERNAME

if [ -z "$1" ]; then
    echo "Usage: ./connect-github.sh YOUR-GITHUB-USERNAME"
    echo "Example: ./connect-github.sh louis4thgen"
    exit 1
fi

USERNAME=$1

echo "🔗 Connecting to GitHub repository..."
git remote add origin "https://github.com/$USERNAME/louis4thgen-website.git"
git branch -M main
git push -u origin main

echo "✅ Done! Repository connected and pushed to GitHub"
echo "🌐 Your repo: https://github.com/$USERNAME/louis4thgen-website"