# Deployment Guide for GitHub Pages

## Prerequisites
- GitHub account: `cesarcheng`
- Repository name: `cesarcheng.github.io` (must match exactly!)

## Steps to Deploy

### 1. Create the GitHub Repository
1. Go to https://github.com/new
2. Repository name: `cesarcheng.github.io`
3. Description: (optional)
4. Set to **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Initialize Git and Push (if not already a git repo)

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit"

# Add the remote repository (replace cesarcheng with your GitHub username if different)
git remote add origin https://github.com/cesarcheng/cesarcheng.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/cesarcheng/cesarcheng.github.io`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: `main` (or `master` if that's your default branch)
   - Folder: `/ (root)`
5. Click **Save**

### 4. Wait for Deployment

- GitHub Pages will build and deploy your site
- It may take a few minutes (usually 1-5 minutes)
- You'll see a green checkmark when deployment is complete
- Your site will be live at: `https://cesarcheng.github.io/`

### 5. Future Updates

After making changes to your files:

```bash
git add .
git commit -m "Your commit message"
git push
```

GitHub Pages will automatically rebuild and deploy your changes (usually within 1-5 minutes).

## Important Notes

- ✅ Your repository already has a `.nojekyll` file (good - needed for static sites)
- ⚠️ Make sure your repository is **Public** (free GitHub Pages requires public repos)
- ⚠️ Repository name **must** be exactly `cesarcheng.github.io` to work with GitHub Pages
- ✅ All your HTML files are in the root directory, which is perfect for GitHub Pages

## Troubleshooting

- If your site doesn't appear after 10 minutes, check:
  1. Repository settings → Pages to see if there are any build errors
  2. Make sure the repository is Public
  3. Verify the repository name is exactly `cesarcheng.github.io`
  4. Check that you've selected the correct branch and folder in Pages settings

