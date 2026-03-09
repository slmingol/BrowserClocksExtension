# CI/CD Setup for BrowserClocks Extension

This repository includes automated workflows for building and releasing the extension.

## Workflows

### 1. Validate Extension (`validate.yml`)
Runs on every push to `main` and all pull requests.

**Checks:**
- ✓ Valid manifest.json
- ✓ All required files present
- ✓ Required icon exists
- ✓ Package can be created

### 2. Build and Release (`release.yml`)
Runs when you create a git tag starting with `v` (e.g., `v1.0.0`).

**Actions:**
- Creates clean extension package (ZIP)
- Uploads ZIP as build artifact
- Creates GitHub release with download
- (Optional) Publishes to Chrome Web Store

### 3. Bump Version (`bump-version.yml`)
Manually triggered workflow to automatically increment version.

**Actions:**
- Reads current version from manifest.json
- Bumps version (patch/minor/major)
- Updates manifest.json
- Commits and pushes changes
- Creates and pushes version tag
- Triggers release workflow automatically

## How to Create a Release

### Automated Version Bump (Recommended)
1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Bump Version** workflow
4. Click **Run workflow**
5. Choose version bump type:
   - **patch**: 1.0.0 → 1.0.1 (bug fixes)
   - **minor**: 1.0.0 → 1.1.0 (new features)
   - **major**: 1.0.0 → 2.0.0 (breaking changes)
6. Click **Run workflow**

The workflow will automatically:
1. ✅ Bump version in manifest.json
2. ✅ Commit and push the change
3. ✅ Create and push the git tag
4. ✅ Trigger the release workflow
5. ✅ Build and publish the extension

### Manual Release
```bash
# Update manifest.json version manually, then:
git add manifest.json
git commit -m "Bump version to v1.0.1"
git push

# Create and push a tag
git tag v1.0.1
git push origin v1.0.1
```

GitHub Actions will automatically:
1. Build the extension ZIP
2. Create a GitHub release
3. Attach the ZIP file to the release

## Setting Up Chrome Web Store Auto-Publishing

To enable automatic publishing to the Chrome Web Store, you need to set up API credentials.

### Step 1: Get Chrome Web Store API Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing)
3. Enable "Chrome Web Store API"
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Create "OAuth 2.0 Client ID"
   - Application type: "Desktop app" or "Web application"
   - Note the Client ID and Client Secret

### Step 2: Get Refresh Token

Run this locally to get a refresh token:

```bash
# Install the Chrome Web Store publish tool
npm install -g chrome-webstore-upload-cli

# Get refresh token
chrome-webstore-upload refresh-token \
  --client-id YOUR_CLIENT_ID \
  --client-secret YOUR_CLIENT_SECRET
```

Follow the prompts to authorize and get your refresh token.

### Step 3: Get Extension ID

1. Upload your extension to Chrome Web Store (manually, first time)
2. After upload, the extension ID will be visible in the URL:
   ```
   https://chrome.google.com/webstore/devconsole/YOUR_EXTENSION_ID
   ```

### Step 4: Add Secrets to GitHub

Go to your repository settings > Secrets and variables > Actions

Add these secrets:
- `CHROME_CLIENT_ID` - Your OAuth Client ID
- `CHROME_CLIENT_SECRET` - Your OAuth Client Secret
- `CHROME_REFRESH_TOKEN` - Your refresh token
- `CHROME_EXTENSION_ID` - Your extension ID

### Step 5: Enable Auto-Publishing

In `.github/workflows/release.yml`, uncomment the "Publish to Chrome Web Store" step:

```yaml
- name: Publish to Chrome Web Store
  if: startsWith(github.ref, 'refs/tags/')
  uses: mobilefirstllc/cws-publish@latest
  with:
    action: 'publish'
    client_id: ${{ secrets.CHROME_CLIENT_ID }}
    client_secret: ${{ secrets.CHROME_CLIENT_SECRET }}
    refresh_token: ${{ secrets.CHROME_REFRESH_TOKEN }}
    extension_id: ${{ secrets.CHROME_EXTENSION_ID }}
    zip_file: BrowserClocks-v${{ steps.get_version.outputs.version }}.zip
```

## Version Management

### Automated (Recommended)
Use the **Bump Version** workflow in GitHub Actions:
- Go to Actions → Bump Version → Run workflow
- Select patch/minor/major
- Done! The version is automatically updated everywhere

### Manual
If you prefer to manage versions manually, edit `manifest.json`:

```json
{
  "version": "1.0.0",
  ...
}
```

Then commit, tag, and push as shown in the Manual Release section above.

### Versioning Strategy
- **Patch** (1.0.0 → 1.0.1): Bug fixes, small tweaks
- **Minor** (1.0.0 → 1.1.0): New features, additions
- **Major** (1.0.0 → 2.0.0): Breaking changes, major rewrites

The CI/CD system automatically reads this version for:
- Package filename
- Release title
- Chrome Web Store submission

## Testing Locally

Build the package locally before releasing:

```bash
# Create build directory
mkdir -p build

# Copy files (excluding dev files)
rsync -av --exclude='.git*' \
          --exclude='README.md' \
          --exclude='QUICKSTART.md' \
          --exclude='build' \
          --exclude='.github' \
          ./ build/

# Create ZIP
cd build
zip -r ../BrowserClocks.zip .
cd ..

# Test the ZIP in Chrome
# Go to chrome://extensions/ and load the unzipped folder
```

## Troubleshooting

### Build fails with "Invalid manifest.json"
- Run `jq empty manifest.json` locally to validate JSON
- Check for trailing commas or syntax errors

### Chrome Web Store publishing fails
- Verify all 4 secrets are set correctly
- Check that refresh token hasn't expired
- Ensure extension ID matches your Chrome Web Store listing
- Review Chrome Web Store API quotas/limits

### ZIP file too large
- Chrome Web Store limit: 128 MB
- Remove unnecessary files from the package
- Optimize images in the `icons/` directory

## Manual Publishing Fallback

If automated publishing fails, you can always manually upload:

1. Download the ZIP from GitHub Releases
2. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. Click on your extension
4. Click "Upload new package"
5. Upload the ZIP file
6. Submit for review

## Resources

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Chrome Web Store Publish API](https://developer.chrome.com/docs/webstore/using_webstore_api/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
