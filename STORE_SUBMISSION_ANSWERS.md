# Chrome Web Store Submission Form - Copy/Paste Answers

## Product Details

### Title
```
BrowserClocks
```

### Summary (132 char limit)
```
Display multiple timezone clocks in your browser. Keep track of time around the world with a persistent toolbar.
```

### Description (16,000 char limit)
```
🕐 BrowserClocks - Multi-Timezone Clock for Your Browser

Track time across multiple timezones with a beautiful, persistent toolbar that appears on every webpage. Perfect for remote teams, travelers, and anyone working across time zones.

✨ KEY FEATURES

⏰ Multiple Timezone Clocks - Display as many timezones as you need
🌐 Persistent Toolbar - Clocks visible on every webpage (inspired by FoxClocks)
📍 Flexible Positioning - Place toolbar at top, bottom, left, or right
🚫 Smart Blacklist - Hide toolbar on specific websites
✏️ Custom Aliases - Name your clocks: "Home", "Office", "Team", etc.
🏴 Country Flags - Visual indicators for each timezone
🔍 Quick Search - Find and add timezones instantly
🎨 Modern Design - Clean interface with dark mode support
⚙️ Highly Customizable - Time/date formats, appearance options
🌍 50+ Popular Cities - Pre-configured major cities worldwide
🔄 Auto DST - Automatic daylight saving time adjustments
💾 Cloud Sync - Settings sync across your devices

🎯 PERFECT FOR

• Remote teams coordinating across timezones
• Travelers keeping track of home time
• Stock traders monitoring global markets
• Freelancers working with international clients
• Anyone scheduling meetings across countries
• Families staying connected worldwide

🔒 PRIVACY FIRST

• No data collection - everything stays on your device
• No external servers or analytics
• Open source and transparent
• You control all settings and data

📱 SIMPLE TO USE

1. Click the extension icon
2. Search and add your timezones
3. Customize with aliases and settings
4. Enable persistent toolbar for FoxClocks-style display

🌟 TOOLBAR MODE

Show time for multiple locations right on your webpage - no need to open popups. Perfect for constant awareness of team availability or market hours.

• Minimize when you need more space
• Hide on specific websites
• Customize position and appearance
• Always visible, never in the way

Compatible with Chrome, Edge, and Firefox. Built with the latest Manifest V3 technology for better performance and security.

Made with ❤️ for the global community.
```

### Category
```
Productivity
```

### Language
```
English
```

---

## Graphic Assets

### Store Icon
**File:** `icons/icon128.png`
**Size:** 128x128 pixels
**Upload this file from your repository**

### Screenshots (Required - minimum 1, up to 5)

**Screenshot 1:**
- **File:** `screenshots/popup.png`
- **Caption:** Track multiple timezones at a glance

**Screenshot 2:**
- **File:** `screenshots/toolbar.png`
- **Caption:** Persistent toolbar keeps time visible on every page

**Screenshot 3:**
- **File:** `screenshots/config.png`
- **Caption:** Customize position, format, and appearance

### Small Promo Tile (Optional - 440x280)
**Status:** Create if time permits (not required for initial submission)

### Marquee Promo Tile (Optional - 1400x560)
**Status:** Create if time permits (not required for initial submission)

---

## Additional Fields

### Official URL
```
None
```
*(Leave as "None" unless you've registered the site in Google Search Console)*

### Homepage URL
```
https://github.com/slmingol/BrowserClocksExtension
```

### Support URL
```
https://github.com/slmingol/BrowserClocksExtension/issues
```

---

## Privacy Tab

### Single purpose description (1000 char limit)
```
Track time across multiple timezones with customizable world clocks and an optional persistent toolbar display. Users can add cities from around the world, customize clock labels with aliases, configure display formats, and optionally show a minimalist toolbar on webpages to keep time zones visible while browsing. The extension provides timezone awareness for remote teams, travelers, and anyone coordinating across different time zones.
```

### Permission justifications (1000 char limit each)

**storage justification**
```
The storage permission is required to save user preferences and configuration data locally on the device. This includes: (1) the list of selected timezones/cities chosen by the user, (2) custom aliases users assign to each timezone (e.g., "Home", "Office", "Team"), (3) display preferences such as time format (12h/24h), date format, and whether to show seconds, (4) toolbar configuration including position (top/bottom/left/right), visibility state, and website blacklist where the toolbar should not appear. All data is stored locally using Chrome's storage.local API. If the user is signed into Chrome with sync enabled, settings may optionally sync across devices via Chrome's storage.sync API. No data is transmitted to external servers or third parties. The extension cannot function without this permission as it needs to persist user preferences between browser sessions.
```

**alarms justification**
```
The alarms permission is required to update the displayed time on all clocks at regular intervals. The extension sets recurring alarms to trigger updates every second (when displaying seconds) or every minute (when seconds are hidden) to ensure accurate, real-time timezone displays. This background timing mechanism is essential for the extension's core functionality of showing current time across multiple timezones. Without this permission, clocks would not update and would show stale time information. The alarms API is used exclusively for triggering clock display updates and does not access any user data or webpage content.
```

**Host permission justification (<all_urls>)**
```
The host permission for all URLs (<all_urls>) is specified in the content_scripts section of the manifest and is required to display the optional persistent toolbar feature across all websites. This permission allows the extension to inject toolbar.js and toolbar.css into webpages when the user has enabled the toolbar feature. The toolbar is a visual overlay that shows timezone clocks on the webpage without interfering with page functionality. The content script only injects display elements and does not read, access, modify, or transmit any webpage content, user data, or browsing information. Users have full control: they can disable the toolbar entirely in settings, blacklist specific websites, minimize the toolbar, or hide it temporarily. The extension does not track browsing history or access sensitive page data.
```

---

## Remote Code Section

**Are you using remote code?**
```
☑ No, I am not using Remote code
```

**Justification:** (leave blank since you selected No)

---

## Data Usage Section

**What user data do you plan to collect from users now or in the future?**

Select checkboxes:
```
☐ Personally identifiable information - UNCHECKED
☐ Health information - UNCHECKED
☐ Financial and payment information - UNCHECKED
☐ Authentication information - UNCHECKED
☐ Personal communications - UNCHECKED
☐ Location - UNCHECKED
☐ Web history - UNCHECKED
☐ User activity - UNCHECKED
☐ Website content - UNCHECKED
```

**ALL BOXES SHOULD BE UNCHECKED** - This extension does not collect any user data.

---

## Certifications (Must check all three)

```
☑ I do not sell or transfer user data to third parties, outside of the approved use cases
☑ I do not use or transfer user data for purposes that are unrelated to my item's single purpose
☑ I do not use or transfer user data to determine creditworthiness or for lending purposes
```

**CHECK ALL THREE BOXES**

---

## Privacy Policy

**Privacy policy URL***
```
https://github.com/slmingol/BrowserClocksExtension/blob/main/PRIVACY.md
```

---

## Distribution Tab

### Visibility
```
Public
```
*(Select "Public" for general availability, or "Unlisted" if you want to test first)*

### Regions
```
All regions
```

### Pricing
```
Free
```

---

## Quick Submission Checklist

Before clicking "Submit for Review":

- [ ] Description is clear and compelling
- [ ] Category set to "Productivity"
- [ ] Language set to "English"
- [ ] Icon uploaded (icons/icon128.png)
- [ ] All 3 screenshots uploaded
- [ ] Homepage URL added
- [ ] Support URL added
- [ ] Privacy policy URL added (if prompted)
- [ ] All permissions justified
- [ ] Privacy practices questionnaire completed
- [ ] Distribution settings configured
- [ ] Preview listing looks good
- [ ] Extension package uploaded

---

## Privacy Policy URL (if prompted separately)

```
https://github.com/slmingol/BrowserClocksExtension/blob/main/PRIVACY.md
```

---

## Notes

1. **Screenshots must be:** 1280x800 or 640x400 pixels, JPEG or PNG
2. **Upload files from:** Your local `BrowserClocksExtension` directory
3. **Package upload:** Use `dist/BrowserClocks-v1.2.4.zip`
4. **Review time:** Expect 1-3 business days
5. **Email notifications:** Watch for review status updates

---

## After Submission

Once submitted, you'll receive email updates about:
- Submission received
- Under review
- Approved (or needs changes)

If approved, your extension will be live at:
```
https://chrome.google.com/webstore/detail/[your-extension-id]
```

Good luck! 🚀
