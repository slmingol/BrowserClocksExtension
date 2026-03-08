# 🕐 BrowserClocks Extension

A modern, open-source browser extension for tracking time across multiple timezones. Built with Manifest V3 for Chrome, Firefox, and Edge.

## Features

- ⏰ **Multiple Timezone Clocks** - Track time in cities around the world
- 🌐 **Persistent Toolbar** - Display clocks on every webpage (like FoxClocks!)
- 📍 **Configurable Position** - Place toolbar at top, bottom, left, or right
- 🚫 **Website Blacklist** - Exclude toolbar from specific domains/URLs
- ✏️ **Custom Aliases** - Create personalized names for your timezones
- 🏴 **Country Flags** - Visual flag indicators for each timezone
- 🔍 **Easy Search** - Quickly find and add timezones
- 🎨 **Modern UI** - Clean, dark-mode interface
- ⚙️ **Customizable** - Adjust time/date formats and appearance
- 🌍 **50+ Popular Cities** - Pre-configured major cities worldwide with country codes
- 🔄 **Auto DST Handling** - Automatically handles daylight saving time
- 💾 **Cloud Sync** - Settings and aliases sync across devices

## Installation

### For Development

1. **Clone or download this repository**

2. **Load in Chrome/Edge:**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `foxclocks-clone` folder

3. **Load in Firefox:**
   - Open `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on"
   - Select the `manifest.json` file

### Creating Icons

Before publishing, you'll need to create icons. Create a `icons` folder with:
- `icon16.png` (16x16px)
- `icon48.png` (48x48px)
- `icon128.png` (128x128px)

You can use any design tool or icon generator. Suggested design: Orange fox clock face.

## Usage

**Persistent Toolbar Mode (FoxClocks-style):**
- Your selected clocks automatically appear on every webpage
- Each clock displays a country flag and time
- Aliases you set appear instead of city names
- Configure position (top/bottom/left/right) in settings
- Click the "−" button to minimize the toolbar
- Click the "×" button to hide it (re-enable in settings)

**Popup Mode:**
1. **Click the extension icon** in your browser toolbar
2. **Add timezones** by clicking "+ Add Timezone"
3. **Search for cities** or browse the list
4. **Click a timezone** to add it to your clock list
5. **Edit aliases** by clicking the pencil icon (✏️) on any clock
   - Set a custom name like "Home", "Office", "Mom's place"
   - Press Enter or click Save to apply
   - Clear the alias to show the original city name
6. **Remove clocks** by clicking the trash icon (🗑️)
7. **Access settings** via the gear icon

**Country Flags:**
- Flags automatically appear next to timezone names
- Based on ISO 3166-1 alpha-2 country codes
- Displayed in both popup and toolbar

## Settings

Access settings to customize:
- **Toolbar:** Enable/disable persistent toolbar on all pages
- **Position:** Choose where toolbar appears (top/bottom/left/right)
- **Blacklist:** Exclude specific websites from showing the toolbar
- Time format (12/24 hour)
- Date format (short/long/numeric)
- Show/hide seconds
- Theme (dark/light/auto)

## Technical Details

- **Manifest Version:** V3 (compatible with latest browser standards)
- **Permissions:** 
  - `storage` - Save your clock preferences
  - `alarms` - Background updates (future features)
- **No external dependencies** - Uses native browser APIs
- **Timezone handling:** Native `Intl.DateTimeFormat` API
- **Storage:** Chrome Storage Sync API

## Project Structure

```
BrowserClocksExtension/
├── manifest.json       # Extension manifest
├── popup.html          # Main popup interface
├── popup.js            # Popup logic
├── popup.css           # Popup styling
├── options.html        # Settings page
├── options.js          # Settings logic
├── background.js       # Background service worker
├── icons/              # Extension icons (create these)
└── README.md           # This file
```

## Supported Timezones

The extension includes 50+ major cities covering all continents:
- Americas: New York, Los Angeles, Chicago, Toronto, São Paulo, etc.
- Europe: London, Paris, Berlin, Amsterdam, Rome, etc.
- Asia: Tokyo, Singapore, Dubai, Hong Kong, Seoul, etc.
- Oceania: Sydney, Auckland
- Africa: Cairo, Johannesburg, Lagos

## Future Enhancements

Potential features for future versions:
- [ ] Drag-and-drop clock reordering
- [ ] Custom clock labels
- [ ] World map view
- [ ] Meeting time finder
- [ ] Export/import clock configurations
- [ ] Browser badge with selected timezone
- [ ] Keyboard shortcuts
- [ ] Custom timezone database updates
- [ ] More theme options

## Browser Compatibility

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Firefox 109+ (with minor manifest adjustments)
- ✅ Opera 74+
- ✅ Brave

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## License

MIT License - Feel free to use, modify, and distribute.

## Credits

Inspired by the original FoxClocks extension by Andy McDonald.

Built with ❤️ using modern web technologies and native browser APIs.

## Support

For issues or questions:
- Check existing issues in the repository
- Create a new issue with details
- Include browser version and steps to reproduce

---

**Enjoy tracking time around the world! 🌍⏰**
