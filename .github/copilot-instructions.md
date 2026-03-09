# GitHub Copilot Instructions for BrowserClocks Extension

## Repository Overview

**BrowserClocks** is a Manifest V3 browser extension for Chrome, Firefox, and Edge that displays multiple timezone clocks. It provides both a popup interface and a persistent toolbar overlay on web pages (similar to the legacy FoxClocks extension).

**Key Stats:**
- **Type:** Browser Extension (Manifest V3)
- **Languages:** Vanilla JavaScript (ES6+), HTML5, CSS3
- **No Build System:** Direct load, no compilation or bundling required
- **No Dependencies:** Zero npm packages, uses native browser APIs only
- **Size:** ~15 files, ~3000 lines of code
- **Data:** 370+ cities and 120+ airport codes hardcoded in popup.js

## Build & Development Workflow

### ⚠️ CRITICAL: No Build Step Required

This is a **pure vanilla JavaScript extension with no build process**. Do NOT attempt to run npm install, webpack, or any bundler.

### Development Setup (Manual Testing Only)

**Chrome/Edge:**
1. Navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select the repository root directory

**Firefox:**
1. Navigate to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select `manifest.json` from the repository root

**Reload After Changes:**
- Chrome/Edge: Click reload icon on extension card in `chrome://extensions/`
- Firefox: Click "Reload" button in `about:debugging`

### Validation (Local)

**Validate manifest.json syntax:**
```bash
jq empty manifest.json
```
This must pass without errors. manifest.json is the source of truth for the extension version.

**Check JavaScript syntax (optional):**
```bash
node -c popup.js
node -c options.js
node -c toolbar.js
node -c background.js
```

### Validation (CI/CD)

**GitHub Actions runs automatically on every push to main and all PRs:**

The validate workflow (`.github/workflows/validate.yml`) checks:
1. manifest.json is valid JSON
2. All required files exist (manifest.json, background.js, popup.*, options.*, toolbar.*)
3. Required icon exists (icons/icon128.png)
4. ZIP package can be created successfully

**To pass CI, ensure:**
- manifest.json is valid JSON with no trailing commas
- Do not delete any of the core extension files
- Maintain icons/icon128.png (required for Chrome Web Store)

## Versioning & Release Strategy

**⚠️ CRITICAL: Use Conventional Commits for Auto-Versioning**

This repository uses **automatic semantic versioning** triggered by commit messages:

**Commit Format:**
- `fix:` → Patch bump (1.0.0 → 1.0.1)
- `feat:` → Minor bump (1.0.0 → 1.1.0)
- `feat!:` or `BREAKING CHANGE:` → Major bump (1.0.0 → 2.0.0)
- `[skip-version]` in message → No version bump

**Auto-Version Workflow:**
1. You commit with conventional format: `git commit -m "feat: add dark mode"`
2. Push to main: `git push`
3. Auto-version workflow:
   - Analyzes commit messages
   - Updates manifest.json version
   - Creates commit with new version
   - Creates and pushes git tag (e.g., `v1.1.0`)
   - Triggers release workflow
4. Release workflow:
   - Builds ZIP package
   - Creates GitHub release
   - Attaches downloadable ZIP

**Manual Version Bump:**
- Via GitHub UI: Actions → Bump Version → Run workflow → Select patch/minor/major
- The version in manifest.json is automatically managed - do not edit manually unless explicitly bypassing automation

**To Skip Auto-Versioning:**
Add `[skip-version]` anywhere in commit message:
```bash
git commit -m "docs: update README [skip-version]"
```

## Project Architecture

### File Structure (Root Level)

```
BrowserClocksExtension/
├── manifest.json          # Extension manifest (v3), defines all capabilities
├── background.js          # Background service worker (currently minimal)
├── popup.html             # Popup UI structure
├── popup.js               # Popup logic (~1063 lines, contains TIMEZONES array)
├── popup.css              # Popup styling (dark theme, compact design)
├── options.html           # Settings page UI
├── options.js             # Settings logic (~220 lines)
├── toolbar.js             # Content script injected into all pages (~339 lines)
├── toolbar.css            # Toolbar styling (minimal padding, optimized)
├── icons/                 # Extension icons (16px, 48px, 128px)
├── screenshots/           # Screenshots for documentation
├── docs/                  # Documentation (CICD.md, QUICKSTART.md)
└── .github/workflows/     # CI/CD pipelines
```

### Key Architectural Elements

**1. Popup Interface (popup.js/html/css)**
- Main user interface accessed via browser toolbar icon
- Contains hardcoded TIMEZONES array (~750 entries from lines 1-758)
- Manages clock list via Chrome Storage Sync API
- Implements drag-and-drop reordering
- Updates toolbar via chrome.tabs.sendMessage()

**2. Toolbar Overlay (toolbar.js/css)**
- Content script injected into `<all_urls>`
- Creates persistent clock toolbar at top/bottom/left/right of pages
- Listens for chrome.storage.onChanged and chrome.runtime.onMessage
- Respects blacklist settings
- Minimal styling: 0px vertical padding, 4px horizontal, 3px gaps

**3. Options Page (options.js/html)**
- Configures toolbar position, appearance, blacklist
- All settings persist via chrome.storage.sync
- DEFAULT_SETTINGS object defines defaults (lines 1-17)

**4. Background Service Worker (background.js)**
- Currently minimal implementation
- Future: Could handle alarms, notifications

### Data Flow

1. **User adds clock in popup** → Saves to chrome.storage.sync → Notifies all tabs via chrome.tabs.sendMessage
2. **Toolbar content script** → Listens for storage changes and messages → Updates display
3. **Settings change** → Updates chrome.storage.sync → All instances sync automatically

### Chrome Extension APIs Used

- `chrome.storage.sync` - Cross-device settings/clock persistence
- `chrome.tabs.sendMessage` - Popup → Toolbar instant updates
- `chrome.runtime.onMessage` - Content script message handling
- `Intl.DateTimeFormat` - Timezone formatting (native browser API)

## Critical File Details

### manifest.json
- **Source of truth for version number**
- Permissions: storage, alarms, activeTab
- Content scripts match `<all_urls>` for toolbar injection
- Must remain valid JSON (no trailing commas)

### popup.js
- **Lines 1-758:** TIMEZONES array with 370+ cities and 120+ airport codes
- **Line 759:** `let clocks = []` - user's selected clocks
- **Line 760:** `let settings = {}` - loaded settings
- **getFlagEmoji()** function (line ~767): Converts country code to emoji flag
- **getTimeForTimezone()** function (line ~996): Respects settings.showSeconds
- **applyPopupSettings()** function (line ~832): Applies font size from settings

### toolbar.js
- **createToolbar():** Builds HTML structure, close button positioned left
- **updateClocks():** Renders clocks with flags and times
- **applyToolbarHeight():** Reads height from settings (min 12px)
- Message listener handles `{action: 'updateClocks', clocks: [...]}`

### options.js
- **DEFAULT_SETTINGS** object defines all defaults
- **loadSettings():** Populates UI from chrome.storage.sync
- **saveSettings():** Persists to chrome.storage.sync
- All slider values (timeSize, popupFontSize, toolbarHeight) have event listeners

## Common Development Tasks

### Adding a New City

1. Edit popup.js TIMEZONES array (lines 1-758)
2. Add entry: `{ city: 'City Name', timezone: 'Area/City', country: 'Country', countryCode: 'XX' }`
3. Use IANA timezone database format (e.g., 'America/New_York')
4. Use ISO 3166-1 alpha-2 country codes (e.g., 'US', 'GB', 'JP')
5. Test in browser by reloading extension
6. Commit with `feat: add [City Name] to timezone list`

### Adding a New Setting

1. Add to DEFAULT_SETTINGS in options.js
2. Add UI element to options.html
3. Update loadSettings() to read new setting
4. Update saveSettings() to persist new setting
5. Update popup.js and/or toolbar.js to consume the setting
6. Test: Change setting, reload extension, verify behavior
7. Commit with `feat: add [setting name] option`

### Modifying Styles

**Popup:** Edit popup.css (dark theme: #1a1a1a background, #ff9500 accent)
- Compact spacing maintained: 6-8px padding, 3-6px gaps

**Toolbar:** Edit toolbar.css
- ⚠️ Keep minimal padding: 0px vertical, 4px horizontal (performance/UX critical)
- Line-height: 1 throughout for compactness
- Gap: 4px between elements, 3px within clock items

### Testing Changes

1. Make code changes
2. Reload extension in browser (see "Reload After Changes" above)
3. Test affected functionality
4. Validate manifest.json: `jq empty manifest.json`
5. Check browser console for errors (F12 → Console)
6. Test in incognito/private mode if permissions involved
7. Commit with conventional commit format

## GitHub Actions Workflows

### 1. Validate (.github/workflows/validate.yml)
**Triggers:** Every push to main, all PRs
**Runs:** ~30 seconds
**Checks:**
- manifest.json is valid JSON
- All required files exist
- icons/icon128.png exists
- ZIP package creation test

**To avoid failures:**
- Always validate manifest.json syntax before committing
- Never delete core extension files
- Keep icons/icon128.png in repository

### 2. Auto Version (.github/workflows/auto-version.yml)
**Triggers:** Push to main (excludes docs/README/CI changes)
**Requires:** Conventional commit message format
**Runs:** ~45 seconds
**Actions:**
1. Analyzes commits since last tag
2. Determines version bump type
3. Updates manifest.json
4. Commits & pushes version change
5. Creates and pushes git tag
6. Triggers release workflow

**To skip:** Add `[skip-version]` to commit message

### 3. Manual Bump Version (.github/workflows/bump-version.yml)
**Triggers:** Manual via GitHub Actions UI
**Input:** patch/minor/major selection
**Same as auto-version but allows explicit control**

### 4. Release (.github/workflows/release.yml)
**Triggers:** Git tag push (v*)
**Runs:** ~60 seconds
**Permissions:** `contents: write` (required for release creation)
**Actions:**
1. Reads version from manifest.json
2. Creates clean build directory
3. Copies files (excludes .git*, README, docs, .github)
4. Creates ZIP: `BrowserClocks-v{version}.zip`
5. Creates GitHub release with ZIP attached

**ZIP Contents:** All extension files, minimal package for Chrome Web Store

## Common Pitfalls & Workarounds

### ❌ DO NOT:
- Run `npm install` (no package.json, not needed)
- Run webpack, babel, or any build tool
- Edit manifest.json version manually (managed by workflows)
- Use `import/export` statements (not supported in Manifest V3 content scripts without bundler)
- Add trailing commas in manifest.json (JSON syntax error)

### ✅ ALWAYS:
- Reload extension after code changes (changes do not hot-reload)
- Validate manifest.json with `jq empty manifest.json` before committing
- Use conventional commit format for auto-versioning
- Test in actual browser (Chrome and Firefox recommended)
- Check browser console for runtime errors
- Keep icons/icon128.png (required for Chrome Web Store)

### Common Errors:

**Error:** "Failed to load extension - manifest.json invalid"
**Fix:** Run `jq empty manifest.json` to find JSON syntax error, usually trailing comma

**Error:** "chrome.storage is undefined"
**Fix:** Reload extension, ensure permissions in manifest.json include "storage"

**Error:** Toolbar not updating after popup change
**Fix:** Check chrome.tabs.sendMessage() in popup.js, ensure toolbar.js message listener is active

**Error:** Settings not persisting
**Fix:** Ensure chrome.storage.sync.set() completes before navigating away, add await

**Error:** GitHub Actions 403 on release
**Fix:** Ensure workflow has `permissions: contents: write` (already configured)

## Trust These Instructions

**The information in this file is validated and accurate.** Only search the codebase if:
1. You need specific implementation details not covered here
2. You find information in these instructions is incorrect or outdated
3. You're implementing a feature requiring deep understanding of specific code sections

For standard tasks (adding cities, modifying settings, styling changes), **trust these instructions** and proceed directly to implementation rather than extensive exploration.

## Additional Resources

- **Quick Start:** `docs/QUICKSTART.md`
- **CI/CD Setup:** `docs/CICD.md` (automated versioning & publishing guide)
- **README:** Project overview and feature list
- **Chrome Extension Docs:** https://developer.chrome.com/docs/extensions/mv3/
- **Conventional Commits:** https://www.conventionalcommits.org/
