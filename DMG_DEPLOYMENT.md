# DMG Deployment Guide

This document outlines the process of adding a macOS DMG download to the Dawn landing page and resolving deployment issues.

## Initial Setup

1. **Add DMG to downloads folder**
   - Place the DMG file in `/downloads/` directory
   - Example: `dawn-0.1.0-alpha.dmg` (280MB)

2. **Update download button**
   - Modified `/src/app/page.tsx` to point to the DMG file
   - Added `download` attribute to trigger file download

## Git LFS Issues

### Problem
- The DMG file (280MB) exceeded GitHub's 100MB file size limit
- Initial attempt to push failed with large file error
- Solution required Git LFS (Large File Storage)

### LFS Configuration
```bash
# Initialize Git LFS
git lfs install

# Track DMG files
git lfs track "*.dmg"

# Reset and re-add files with LFS tracking
git reset --soft HEAD~1
git rm --cached -f public/downloads/dawn-0.1.0-alpha.dmg
git add .gitattributes public/downloads/dawn-0.1.0-alpha.dmg
git commit -m "Add Mac DMG download with LFS tracking"
```

## Vercel Deployment Issue

### Problem
- After successful Git push, the downloaded DMG was only 134 bytes
- This was a Git LFS pointer file, not the actual DMG content
- Vercel clones the repo but doesn't resolve LFS pointers to actual content

### Solution: GitHub Releases
Since Vercel doesn't handle LFS files properly, we moved the DMG to GitHub Releases.

### Steps

1. **Install GitHub CLI**
   ```bash
   brew install gh
   ```

2. **Authenticate with GitHub**
   ```bash
   gh auth login --web
   # Follow browser authentication flow
   ```

3. **Create GitHub Release**
   ```bash
   gh release create v0.1.0-alpha public/downloads/dawn-0.1.0-alpha.dmg \
     --title "Dawn v0.1.0 Alpha" \
     --notes "Initial alpha release for macOS"
   ```

4. **Update download link**
   - Changed from: `href="/downloads/dawn-0.1.0-alpha.dmg" download`
   - Changed to: `href="https://github.com/DevelopedByDev/dawn-landing/releases/download/v0.1.0-alpha/dawn-0.1.0-alpha.dmg"`

## Final Architecture

- **Code**: Hosted on GitHub, deployed to Vercel
- **Large Files**: Hosted as GitHub Release assets
- **Download Link**: Direct URL to GitHub Releases asset

## Benefits

1. **No file size limits** - GitHub Releases handle large files
2. **Reliable downloads** - Direct CDN delivery from GitHub
3. **Clean repository** - No LFS pointers in the main codebase
4. **Version management** - Each release can have its own DMG

## Future Considerations

- For multiple platforms, create separate release assets (Windows .exe, Linux .deb, etc.)
- Consider automated release creation when new DMG versions are built
- Monitor download analytics through GitHub's release insights

## Troubleshooting

### If download shows 134 bytes
- The file is an LFS pointer, not the actual content
- Move the file to GitHub Releases and update the download URL

### If GitHub CLI not found
- Install with `brew install gh` (macOS)
- Or download from https://cli.github.com/

### If authentication fails
- Ensure you have repository write permissions
- Use `gh auth status` to check authentication state
