# Publishing Guide for BrowserClocks

This guide walks you through publishing BrowserClocks to the Chrome Web Store and other browser extension marketplaces.

## Prerequisites

### Chrome Web Store Requirements

1. **Google Account** - You'll need a Google account
2. **Developer Fee** - One-time $5 registration fee
3. **Email Verification** - Verified email address
4. **Store Listing Assets** - See checklist below

### What You Need Ready

- ✅ Extension package (zip file)
- ✅ Screenshots (3 minimum, 5 recommended)
- ✅ Promotional images
- ✅ Privacy policy
- ✅ Detailed description
- ✅ Support/homepage URLs

## Step 1: Build the Extension Package

### Create Distribution Package

```bash
# Run the build script
./build.sh
```

This creates `dist/BrowserClocks-v{VERSION}.zip` with all necessary files.

### Test the Package

Before submitting, test the packaged version:

1. Go to `chrome://extensions/`
2. Enable "Developer mode" (top right)
3. Click "Load unpacked"
4. Extract the zip to a temp folder and select it
5. Test all features thoroughly:
   - ✓ Add/remove timezones
   - ✓ Create custom aliases
   - ✓ Enable/disable toolbar
   - ✓ Test toolbar positioning
   - ✓ Test blacklist functionality
   - ✓ Verify settings sync
   - ✓ Test on multiple websites

## Step 2: Register as a Chrome Web Store Developer

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Sign in with your Google account
3. Pay the $5 one-time registration fee
4. Accept the developer agreement
5. Complete your developer profile

## Step 3: Create Store Listing

### Initial Setup

1. Click "New Item" in the dashboard
2. Upload your `BrowserClocks-v{VERSION}.zip` file
3. Wait for the automated checks to complete

### Store Listing Information

Use the details from `docs/STORE_LISTING.md`:

#### Product Details

**Name:** BrowserClocks

**Summary (132 chars max):**
```
Display multiple timezone clocks in your browser. Keep track of time around the world with a persistent toolbar.
```

**Description:**
Copy the detailed description from `docs/STORE_LISTING.md`

**Category:** Productivity

**Language:** English (add more as needed)

#### Graphics Assets

**Required Screenshots** (1280x800 or 640x400):
1. Upload `screenshots/popup.png`
2. Upload `screenshots/toolbar.png`
3. Upload `screenshots/config.png`

**Icon** (128x128):
- Use `icons/icon128.png`

**Promotional Images** (create these):
- **Small tile** (440x280) - Optional but recommended
- **Large tile** (920x680) - Optional but recommended  
- **Marquee** (1400x560) - Optional but recommended

#### Additional Fields

**Privacy Policy:**
```
https://github.com/slmingol/BrowserClocksExtension/blob/main/PRIVACY.md
```

**Homepage URL:**
```
https://github.com/slmingol/BrowserClocksExtension
```

**Support URL:**
```
https://github.com/slmingol/BrowserClocksExtension/issues
```

### Permissions Justification

When prompted about permissions, use these explanations:

**storage:**
> Required to save user preferences, timezone selections, custom aliases, and settings locally.

**alarms:**
> Required to update clock displays in real-time at regular intervals.

**activeTab:**
> Required to inject the persistent toolbar on active webpages when enabled by the user.

**Content Scripts (<all_urls>):**
> Required to display the persistent toolbar on all websites. Only injects toolbar display code - does not access or read webpage content.

### Privacy Practices

Fill out the privacy practices questionnaire:

- **Does your extension handle personal or sensitive user data?** No
- **Does your extension make remote code calls?** No
- **Does your extension use cookies?** No
- **Does your extension collect analytics?** No

## Step 4: Submit for Review

1. Double-check all information
2. Preview your listing
3. Select "Public" visibility (or unlisted for testing)
4. Click "Submit for review"

### Review Timeline

- Initial review: 1-3 business days (sometimes longer)
- Updates: Usually faster, 1-2 days
- You'll receive email updates on status

### Common Review Issues

**Potential Rejection Reasons:**
1. ❌ Misleading description or screenshots
2. ❌ Permission justifications unclear
3. ❌ Privacy policy insufficient
4. ❌ Code quality or functionality issues

**If Rejected:**
- Review the feedback carefully
- Make necessary changes
- Resubmit with a detailed response

## Step 5: Post-Publication

### After Approval

Once approved, your extension will be live on:
```
https://chrome.google.com/webstore/detail/[your-extension-id]
```

### Monitor & Maintain

1. **Monitor Reviews** - Respond to user feedback
2. **Track Installation Stats** - View dashboard analytics
3. **Fix Issues Quickly** - Address bugs reported by users
4. **Regular Updates** - Keep the extension current

### Version Updates

When publishing updates:

1. Update version in `manifest.json`
2. Update `CHANGELOG.md` with changes
3. Run `./build.sh` to create new package
4. Upload to Developer Dashboard
5. Select "Package" tab and upload new zip
6. Save and submit for review

## Publishing to Other Stores

### Firefox Add-ons (AMO)

1. Go to [Firefox Add-on Developer Hub](https://addons.mozilla.org/developers/)
2. Create account and sign in
3. Submit new add-on
4. Upload the same zip package
5. Fill in listing details (similar to Chrome)

**Note:** Firefox has stricter review process and may request code explanations.

### Microsoft Edge Add-ons

1. Go to [Edge Add-ons Dashboard](https://partner.microsoft.com/dashboard/microsoftedge/)
2. Register as a developer (free)
3. Submit extension
4. Upload package and assets

**Note:** If approved on Chrome Web Store, Edge approval is usually quick.

## Promotional Materials Checklist

Before publishing, ensure you have:

- [ ] 3-5 high-quality screenshots
- [ ] Extension icon (128x128)
- [ ] Small promotional tile (440x280) - optional
- [ ] Large promotional tile (920x680) - optional
- [ ] Marquee promotional image (1400x560) - optional
- [ ] Privacy policy published and accessible
- [ ] README.md updated with install link
- [ ] GitHub repository description updated

## Marketing Your Extension

### After Publishing

1. **Update GitHub README** - Add Chrome Web Store badge:
```markdown
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/YOUR_EXTENSION_ID.svg)](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID)
```

2. **Social Media** - Announce on Twitter, LinkedIn, Reddit
   - r/chrome
   - r/chromeextensions
   - r/productivity

3. **Product Hunt** - Submit for visibility

4. **Create Demo Video** - Show features in action

5. **Blog Post** - Write about why you built it

## Troubleshooting

### Common Issues

**Extension won't load after packing:**
- Check manifest.json syntax
- Ensure all referenced files exist
- Test with Load Unpacked first

**Review taking too long:**
- Contact developer support after 7 days
- Check spam folder for review emails

**Permission warnings scary to users:**
- Ensure privacy policy is clear
- Add permission explanations in description
- Be transparent about what data is used

**Low download numbers:**
- Improve SEO in title/description
- Add more screenshots
- Respond to reviews promptly
- Share on relevant communities

## Support Resources

- [Chrome Web Store Developer Documentation](https://developer.chrome.com/docs/webstore/)
- [Chrome Extension Developer Guide](https://developer.chrome.com/docs/extensions/)
- [Web Store Program Policies](https://developer.chrome.com/docs/webstore/program-policies/)
- [Extension Publishing Best Practices](https://developer.chrome.com/docs/webstore/best_practices/)

## Contact & Support

For issues with this publishing process:
- Open an issue: https://github.com/slmingol/BrowserClocksExtension/issues
- Email: [Your support email]

---

## Quick Reference: Publishing Checklist

Pre-submission:
- [ ] Run `./build.sh` successfully
- [ ] Test packaged extension thoroughly
- [ ] Update CHANGELOG.md
- [ ] Verify version number in manifest.json
- [ ] All screenshots captured and optimized
- [ ] Privacy policy accessible online
- [ ] Store listing description ready

Submission:
- [ ] Chrome Web Store developer account registered
- [ ] Extension package uploaded
- [ ] Store listing completed
- [ ] Screenshots uploaded
- [ ] Privacy policy URL added
- [ ] Homepage/support URLs added
- [ ] Permission justifications provided
- [ ] Privacy practices questionnaire completed
- [ ] Submitted for review

Post-publication:
- [ ] Add store badge to README
- [ ] Announce on social media
- [ ] Set up GitHub releases
- [ ] Monitor reviews and respond
- [ ] Plan update schedule

Good luck with your launch! 🚀
