# Privacy Policy for BrowserClocks

**Last Updated:** March 18, 2026

## Overview

BrowserClocks is committed to protecting your privacy. This privacy policy explains what data the extension collects, how it's used, and your rights.

## Data Collection and Usage

### What Data We Collect

BrowserClocks collects and stores **only** the following data locally on your device:

1. **Timezone Preferences**
   - Selected timezones/cities you want to display
   - Custom aliases you assign to timezones
   - Order of your timezone list

2. **Display Settings**
   - Toolbar position preference (top/bottom/left/right)
   - Toolbar visibility state (shown/hidden/minimized)
   - Website blacklist (domains where you've disabled the toolbar)
   - Time/date format preferences
   - Theme preference (dark/light/auto)

### Where Data is Stored

- **Local Storage**: All your settings are stored locally in your browser using Chrome's `storage.local` API
- **Sync Storage**: If you're signed into Chrome with sync enabled, your settings may sync across your devices using Chrome's `storage.sync` API

### What We DO NOT Collect

❌ We **DO NOT** collect, transmit, or store:
- Personal information (name, email, etc.)
- Browsing history
- Websites you visit
- Geolocation data
- Analytics or tracking data
- Any data on external servers

## Permissions Explained

BrowserClocks requests the following permissions:

### `storage`
**Why**: To save your timezone preferences, aliases, and settings locally in your browser.
**Usage**: All data stays on your device. If Chrome sync is enabled, settings sync via Google's secure sync service.

### `alarms`
**Why**: To update clock displays accurately every second/minute.
**Usage**: Sets timers for regular clock updates. No data is collected or transmitted.

### Content Scripts (`<all_urls>`)
**Why**: To display the persistent toolbar on all websites (optional feature).
**Usage**: Injects only the toolbar display code. Does not access, read, or transmit webpage data.

## Data Sharing

🔒 **We do not share, sell, or transmit any data to third parties.**

All data remains:
- On your device (local storage)
- Within your Google account (if Chrome sync is enabled)
- Under your control

## Data Control

### You Control Your Data

- **View Settings**: Access all stored preferences via the extension's Settings page
- **Delete Data**: Remove the extension to delete all stored data
- **Export/Backup**: Settings can be manually backed up via Chrome's extension data tools
- **Blacklist Sites**: Control exactly which websites show the toolbar

### Data Retention

Data is retained:
- Until you remove the extension
- Until you manually clear extension data
- Until you clear browser storage

## Third-Party Services

BrowserClocks does **not** use any third-party analytics, tracking, or external services.

## Children's Privacy

BrowserClocks does not knowingly collect information from children under 13. The extension does not collect personal information from any users.

## Changes to This Policy

We may update this privacy policy occasionally. Changes will be reflected in the "Last Updated" date. Continued use of the extension after updates constitutes acceptance of changes.

## Contact

For privacy questions or concerns:
- Open an issue on [GitHub](https://github.com/slmingol/BrowserClocksExtension/issues)
- Review the [source code](https://github.com/slmingol/BrowserClocksExtension) to verify privacy practices

## Compliance

This extension complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR) principles
- California Consumer Privacy Act (CCPA) principles

---

**In Summary**: BrowserClocks stores your timezone preferences and settings locally on your device. No personal data is collected, transmitted, or shared. You have complete control over your data.
