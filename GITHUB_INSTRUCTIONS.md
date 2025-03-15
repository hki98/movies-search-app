# GitHub Push Instructions for Movies Search App

This guide will walk you through the process of pushing your Movies Search App to GitHub and setting it up properly.

## Prerequisites

- [Git](https://git-scm.com/) installed on your computer
- A [GitHub](https://github.com/) account
- Your Movies Search App code ready to be pushed

## Step 1: Update Your Project Information

Before pushing to GitHub, make sure your project information is correct:

1. Update the `package.json` file:
   - Ensure the name, version, and description are accurate
   - Add repository information:
   ```json
   "repository": {
     "type": "git",
     "url": "git+https://github.com/hki98/movies-search-app.git"
   },
   "author": "Haian Ibrahim <contact@haian.me> (https://github.com/hki98)",
   ```

2. Make sure your `.env.local` file is in `.gitignore` to avoid exposing API keys
   - Check that `.gitignore` includes `*.local` (it should already be there)

3. Verify that the LICENSE file is included
   - The repository uses the MIT License
   - The copyright holder is set to "Haian Ibrahim" with the current year

## Step 2: Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd path/to/movies-search-app

# Initialize a new Git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Movies Search App"
```

## Step 3: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "movies-search-app")
4. Add a description: "A modern React application for searching movies using TMDB API and Appwrite"
5. Keep it as a public repository (or private if you prefer)
6. Do NOT initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 4: Connect and Push to GitHub

GitHub will show you commands to push an existing repository. Use these commands:

```bash
# Add the remote repository
git remote add origin https://github.com/hki98/movies-search-app.git

# Push your code to GitHub
git push -u origin main
# If your default branch is "master" instead of "main", use:
# git push -u origin master
```

## Step 5: Verify Your Repository

1. Refresh your GitHub repository page
2. Ensure all files are uploaded correctly
3. Check that your README.md is displayed properly
4. Verify that sensitive files (like .env.local) are NOT in the repository
5. Confirm that the LICENSE file is visible and correctly formatted

## Step 6: Set Up GitHub Pages (Optional)

If you want to host your app directly from GitHub:

1. Go to your repository settings
2. Scroll down to "GitHub Pages" section
3. Select "gh-pages" branch or "main" with "/docs" folder
4. Click "Save"

Note: For GitHub Pages, you may need to adjust your Vite configuration to use the correct base path.

## Step 7: Add GitHub Topics (Optional)

Add relevant topics to your repository to make it more discoverable:

1. Go to your repository page
2. Click on the gear icon next to "About" on the right sidebar
3. Add topics like: react, vite, movies-app, tmdb-api, appwrite

## Troubleshooting

- **Authentication Issues**: If you have trouble pushing, ensure you're authenticated with GitHub. Consider using SSH keys or a personal access token.
- **Large Files**: If some files are too large, consider using Git LFS or adding them to .gitignore.
- **Sensitive Data**: If you accidentally pushed sensitive data, change your API keys immediately and use tools like BFG Repo-Cleaner to remove sensitive data from Git history.

## Next Steps

- Set up GitHub Actions for CI/CD
- Add issue templates for bug reports and feature requests
- Create a CONTRIBUTING.md file if you want others to contribute
- Consider adding a CODE_OF_CONDUCT.md file

Congratulations! Your Movies Search App is now on GitHub! 🎉 