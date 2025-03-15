#!/bin/bash

# Movies App Deployment Script
# Author: Haian Ibrahim
# This script builds the React app and prepares it for deployment to haian.me/demo/movies-app

echo "🚀 Starting deployment process for Movies App..."

# Build the application
echo "📦 Building the application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Aborting deployment."
  exit 1
fi

# Make sure all necessary files are in the dist directory
echo "📋 Ensuring all necessary files are included..."
cp -f public/vite.svg dist/ 2>/dev/null
cp -f public/star.svg dist/ 2>/dev/null
cp -f public/hero-bg.png dist/ 2>/dev/null

echo "✅ Build successful!"
echo "📂 The built files are in the 'dist' directory."
echo ""
echo "🔍 To deploy to your server:"
echo "1. Upload all files from the 'dist' directory to your server at the path /demo/movies-app/"
echo "2. Make sure all files are readable by the web server"
echo ""
echo "🌐 Once deployed, your app will be available at: https://haian.me/demo/movies-app/" 