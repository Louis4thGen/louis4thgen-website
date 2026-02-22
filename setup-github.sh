#!/bin/bash

# Louis4thGen Website GitHub Setup Script

echo "🚀 Louis4thGen GitHub Setup"
echo "=========================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the louis4thgen-website directory"
    exit 1
fi

# Get GitHub username
echo "📝 Enter your GitHub username:"
read github_username

if [ -z "$github_username" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

echo ""
echo "🔗 Setting up remote repository..."

# Add remote origin
git remote add origin "https://github.com/$github_username/louis4thgen-website.git"

# Check if remote was added successfully
if [ $? -eq 0 ]; then
    echo "✅ Remote repository added successfully"
else
    echo "⚠️  Remote might already exist, continuing..."
fi

echo ""
echo "🌿 Setting up main branch..."

# Set main branch
git branch -M main

echo ""
echo "⬆️  Pushing to GitHub..."

# Push to GitHub
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Repository pushed to GitHub"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Visit: https://vercel.com/dashboard"
    echo "2. Sign in with: Louis.4th.gen@gmail.com"
    echo "3. Click 'Add New...' → 'Project'"
    echo "4. Import your GitHub repository: louis4thgen-website"
    echo "5. Deploy with default Next.js settings"
    echo ""
    echo "🌐 Your repository: https://github.com/$github_username/louis4thgen-website"
    echo ""
    echo "🤖 AUTONOMOUS DEPLOYMENT READY!"
    echo "Every git push will now auto-deploy to production!"
else
    echo "❌ Error pushing to GitHub. Make sure:"
    echo "   1. You created the repository on GitHub"
    echo "   2. Repository name is exactly: louis4thgen-website"
    echo "   3. You have push permissions"
fi