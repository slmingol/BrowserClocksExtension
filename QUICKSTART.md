# Quick Start Guide - BrowserClocks Extension

## 🚀 Installation Instructions

### For Chrome/Edge/Brave

1. Open your browser and navigate to:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`
   - **Brave**: `brave://extensions/`

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Navigate to: `/Users/smingolelli/dev/projects/BrowserClocksExtension`
   - Select the folder and click "Select"

4. **Pin the Extension** (Optional)
   - Click the puzzle piece icon in the toolbar
   - Find "BrowserClocks"
   - Click the pin icon to keep it visible

### For Firefox

1. Open Firefox and navigate to:
   - `about:debugging#/runtime/this-firefox`

2. **Load Temporary Add-on**
   - Click "Load Temporary Add-on..."
   - Navigate to the project folder
   - Select the `manifest.json` file

   **Note**: In Firefox, temporary extensions are removed when you close the browser. For permanent installation, you'll need to sign it through Mozilla Add-ons.

## ✅ Testing the Extension

1. **Click the extension icon** in your toolbar
   - You should see 3 default clocks (New York, London, Tokyo)
   - Times update every second

2. **Add a new timezone**:
   - Click "+ Add Timezone"
   - Search for a city (e.g., "Paris")
   - Click on the timezone to add it

3. **Remove a clock**:
   - Click the trash can icon (🗑️) on any clock

4. **Open Settings**:
   - Click the gear icon (⚙️)
   - Customize time/date formats
   - Change theme settings
   - Click "Save Settings"

## 🎨 Features to Try

- ✅ Real-time clock updates
- ✅ Search 50+ pre-configured cities
- ✅ Automatic daylight saving time handling
- ✅ Dark/Light theme support
- ✅ Settings sync across devices (when signed into Chrome)
- ✅ Customizable time and date formats

## 🐛 Troubleshooting

### Extension doesn't load
- Make sure Developer Mode is enabled
- Check browser console for errors (Right-click extension icon → Inspect)
- Verify all files are in the correct location

### Clocks not updating
- Refresh the popup by closing and reopening it
- Check browser permissions for the extension

### Settings not saving
- Ensure the extension has "storage" permission (check in manifest.json)
- Check browser's sync settings if using Chrome

## 📝 Development

### File Structure
```
BrowserClocksExtension/
├── manifest.json       # Extension configuration
├── popup.html          # Main UI
├── popup.js            # Clock logic (350+ lines)
├── popup.css           # Styling
├── options.html        # Settings page
├── options.js          # Settings logic
├── background.js       # Background worker
└── icons/              # Extension icons
```

### Key Technologies
- Manifest V3 (latest standard)
- Native JavaScript (no frameworks)
- Intl.DateTimeFormat API for timezone handling
- Chrome Storage Sync API
- CSS Grid & Flexbox

## 🔧 Customization

### Adding More Timezones
Edit `popup.js` and add entries to the `TIMEZONES` array:
```javascript
{ city: 'Your City', timezone: 'Region/City', country: 'Country' }
```

### Changing Colors
Edit `popup.css` and modify the color variables:
- Main orange: `#ff9500`
- Background dark: `#1a1a1a`
- Secondary dark: `#2a2a2a`

### Custom Icons
Replace the PNG files in `/icons/` with your own designs (keeping the same sizes).

## 📦 Publishing (Future)

To publish to the Chrome Web Store or Firefox Add-ons:

1. **Chrome Web Store**:
   - Create a developer account ($5 one-time fee)
   - Zip the extension folder
   - Upload to Chrome Web Store Developer Dashboard
   - Fill out listing details
   - Submit for review

2. **Firefox Add-ons**:
   - Create a Mozilla developer account (free)
   - Package the extension as a .zip
   - Submit to addons.mozilla.org
   - Automatic code review

## 💡 Next Steps

1. ✅ Test all features thoroughly
2. Add more timezones if needed
3. Customize the appearance
4. Share with friends!
5. Consider adding features from the README's "Future Enhancements" section

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Inspect browser console for JavaScript errors
- Review manifest.json for permission issues
- Test in incognito mode to rule out conflicts with other extensions

---

**Enjoy your new BrowserClocks extension! 🕐🌍**
