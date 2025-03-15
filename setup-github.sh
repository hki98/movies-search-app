#!/bin/bash

# Movies Search App - GitHub Setup Script
# Author: Haian Ibrahim

echo "🚀 Setting up Movies Search App for GitHub..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if the directory is already a git repository
if [ -d .git ]; then
    echo "✅ Git repository already initialized."
else
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized."
fi

# Check if there's a remote origin
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote origin already set up."
else
    echo "❓ Please enter your GitHub username:"
    read github_username
    
    echo "❓ Please enter your repository name (default: movies-search-app):"
    read repo_name
    repo_name=${repo_name:-movies-search-app}
    
    echo "🔗 Setting up remote origin..."
    git remote add origin "https://github.com/$github_username/$repo_name.git"
    echo "✅ Remote origin set to: https://github.com/$github_username/$repo_name.git"
fi

# Stage all files
echo "📋 Staging all files..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Initial commit: Movies Search App"

echo ""
echo "🎉 Setup complete! Now you can push to GitHub with:"
echo "git push -u origin main"
echo ""
echo "📝 Note: If your default branch is 'master' instead of 'main', use:"
echo "git push -u origin master"
echo ""
echo "🌐 After pushing, your repository will be available at:"
echo "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME" 