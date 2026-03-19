# Pre-Publishing Checklist for BrowserClocks

Use this checklist before submitting to the Chrome Web Store or other browser marketplaces.

## ✅ Core Files Ready

- [x] **manifest.json** - Version 1.2.3, all fields complete
- [x] **Extension icons** - 16px, 48px, 128px in `icons/` folder
- [x] **Source code** - All JS/HTML/CSS files functional
- [x] **LICENSE** - MIT License included
- [x] **PRIVACY.md** - Privacy policy documented
- [x] **README.md** - User documentation complete
- [x] **CHANGELOG.md** - Version history tracked

## ✅ Documentation Complete

- [x] **PUBLISHING.md** - Step-by-step publishing guide
- [x] **docs/STORE_LISTING.md** - Store listing details and copy
- [x] **docs/QUICKSTART.md** - Quick start guide
- [x] **docs/CICD.md** - CI/CD documentation

## ✅ Build & Package

- [x] **build.sh** - Build script created and executable
- [x] **Test build** - Run `./build.sh` successfully
- [x] **Distribution package** - `dist/BrowserClocks-v1.2.3.zip` created
- [x] **.gitignore** - Properly excludes build artifacts

## 📋 Pre-Submission Testing

Before submitting, test the packaged extension:

### Functional Testing

- [ ] **Load packaged extension** - Extract zip and load via "Load unpacked"
- [ ] **Add timezone** - Verify can add multiple timezones
- [ ] **Remove timezone** - Verify can remove timezones
- [ ] **Edit alias** - Test custom timezone aliases
- [ ] **Toolbar visibility** - Enable/disable persistent toolbar
- [ ] **Toolbar positioning** - Test top/bottom/left/right positions
- [ ] **Toolbar minimize** - Test minimize button functionality
- [ ] **Toolbar hide** - Test hide button functionality
- [ ] **Website blacklist** - Add sites to blacklist, verify toolbar hidden
- [ ] **Settings sync** - Verify settings persist across browser restarts
- [ ] **Time format** - Test 12h/24h format switching
- [ ] **Date format** - Test different date format options
- [ ] **Theme** - Test dark/light/auto theme modes
- [ ] **Flags display** - Verify country flags show correctly
- [ ] **Search** - Test timezone search functionality

### Compatibility Testing

Test in browsers:
- [ ] **Chrome** (latest version)
- [ ] **Edge** (latest version)  
- [ ] **Firefox** (if targeting)
- [ ] **Opera** (if targeting)

Test on different websites:
- [ ] **News sites** (e.g., cnn.com)
- [ ] **Social media** (e.g., twitter.com)
- [ ] **Email** (e.g., gmail.com)
- [ ] **YouTube**
- [ ] **GitHub**

### Performance Testing

- [ ] **No console errors** - Check browser console for errors
- [ ] **Memory usage** - Verify no memory leaks
- [ ] **CPU usage** - Verify toolbar doesn't cause high CPU
- [ ] **Load time** - Extension loads quickly
- [ ] **No conflicts** - Works with other extensions

## 📸 Store Assets

### Required Screenshots (1280x800 or 640x400)

- [x] **Popup screenshot** - `screenshots/popup.png` exists
- [x] **Toolbar screenshot** - `screenshots/toolbar.png` exists  
- [x] **Settings screenshot** - `screenshots/config.png` exists

### Optional Promotional Images

Create these for better store visibility:

- [ ] **Small tile** (440x280px) - For compact listing view
- [ ] **Large tile** (920x680px) - For featured listings
- [ ] **Marquee** (1400x560px) - For promotional banners

**Design Guidelines:**
- Use extension icon and branding colors
- Show key features visually
- Keep text minimal and readable
- Use high-quality graphics

## 📝 Store Listing Preparation

Review `docs/STORE_LISTING.md` and prepare:

- [ ] **Extension name** - "BrowserClocks"
- [ ] **Short description** (132 chars max) - Ready
- [ ] **Detailed description** - Copy prepared
- [ ] **Category** - Productivity
- [ ] **Screenshots** - 3+ uploaded
- [ ] **Icon** - 128x128 ready
- [ ] **Privacy policy URL** - GitHub link ready
- [ ] **Homepage URL** - Repository link ready
- [ ] **Support URL** - Issues page link ready

## 🔐 Privacy & Permissions

- [x] **Privacy policy** - Published at PRIVACY.md
- [x] **Permissions justified** - Explanations ready for:
  - `storage` - Local settings storage
  - `alarms` - Clock updates
  - `activeTab` - Toolbar injection
  - `<all_urls>` - Toolbar on all pages

### Privacy Practices Questionnaire

Prepare answers for Chrome Web Store questionnaire:

- [ ] **Handles personal data?** NO
- [ ] **Remote code calls?** NO
- [ ] **Uses cookies?** NO
- [ ] **Analytics?** NO
- [ ] **Data collected?** NONE - All data stored locally

## 🔢 Version Management

- [x] **Current version** - 1.2.3 in manifest.json
- [ ] **Update CHANGELOG** - Document any final changes
- [ ] **Git commit** - All changes committed
- [ ] **Git tag** - Create v1.2.3 tag (after approval)

## 👤 Developer Account

- [ ] **Chrome Web Store account** - Registered
- [ ] **Developer fee paid** - $5 one-time fee
- [ ] **Email verified** - Account verified
- [ ] **Developer profile** - Complete

## 📤 Submission Process

Following steps in `PUBLISHING.md`:

1. [ ] **Build final package** - Run `./build.sh`
2. [ ] **Upload to dashboard** - Upload zip file
3. [ ] **Complete store listing** - Fill all fields
4. [ ] **Add screenshots** - Upload all images
5. [ ] **Privacy practices** - Complete questionnaire
6. [ ] **Justification** - Add permission explanations
7. [ ] **Preview listing** - Review before submit
8. [ ] **Submit for review** - Click submit button

## 📊 Post-Submission

After submission:

- [ ] **Confirmation email** - Watch for submission confirmation
- [ ] **Review timeline** - Expect 1-3 business days
- [ ] **Monitor inbox** - Check for review feedback
- [ ] **Respond quickly** - Address any rejection reasons

Once approved:

- [ ] **Create GitHub release** - Tag v1.2.3 with zip attachment
- [ ] **Update README** - Add Chrome Web Store badge and link
- [ ] **Announce** - Share on social media
- [ ] **Monitor reviews** - Respond to user feedback
- [ ] **Track installs** - Review dashboard statistics

## 🚀 Optional: Additional Marketplaces

If submitting to other stores:

### Firefox Add-ons (AMO)
- [ ] Register at addons.mozilla.org
- [ ] Submit extension
- [ ] Complete listing (similar to Chrome)

### Microsoft Edge Add-ons
- [ ] Register at partner.microsoft.com
- [ ] Submit extension
- [ ] Complete listing

### Opera Add-ons
- [ ] Register at addons.opera.com
- [ ] Submit extension
- [ ] Complete listing

## 📞 Support Preparation

- [ ] **GitHub issues** - Enabled and monitored
- [ ] **Support email** - Set up (optional)
- [ ] **Documentation** - All docs current and accurate
- [ ] **Response plan** - Ready to handle user questions

## 🎯 Marketing Preparation

- [ ] **Social media posts** - Draft announcement posts
- [ ] **Reddit posts** - Prepare for r/chrome, r/productivity
- [ ] **Product Hunt** - Consider submitting
- [ ] **Demo video** - Create walkthrough (optional)
- [ ] **Blog post** - Write about the extension (optional)

---

## Quick Command Reference

```bash
# Build distribution package
./build.sh

# Test in Chrome
chrome://extensions/ → Developer mode → Load unpacked

# Check package contents
unzip -l dist/BrowserClocks-v1.2.3.zip

# Create git tag (post-approval)
git tag -a v1.2.3 -m "Release v1.2.3"
git push origin v1.2.3
```

---

## Final Review Questions

Before clicking "Submit":

1. ✓ Have I tested the packaged extension thoroughly?
2. ✓ Are all screenshots clear and representative?
3. ✓ Is the privacy policy accurate and accessible?
4. ✓ Have I justified all permissions clearly?
5. ✓ Is the description compelling and accurate?
6. ✓ Are all URLs (homepage, support, privacy) correct?
7. ✓ Does the extension provide real value to users?
8. ✓ Is the code quality production-ready?
9. ✓ Am I ready to respond to user feedback?
10. ✓ Have I read Chrome Web Store policies?

**If you answered YES to all questions, you're ready to publish!** 🎉

---

**Good luck with your submission!** 🚀

For detailed guidance, see [PUBLISHING.md](PUBLISHING.md)
