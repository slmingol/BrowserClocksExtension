# Icon Placeholder Files

This directory should contain the following icon files:

- `icon16.png` - 16x16 pixels
- `icon48.png` - 48x48 pixels
- `icon128.png` - 128x128 pixels

## Creating Icons

You can use the `icon.svg` file as a template and convert it to PNG files at different sizes.

### Quick Method (macOS/Linux with ImageMagick):

```bash
# Install ImageMagick if needed
brew install imagemagick  # macOS
# or
sudo apt-get install imagemagick  # Linux

# Convert SVG to PNG at different sizes
convert icon.svg -resize 16x16 icon16.png
convert icon.svg -resize 48x48 icon48.png
convert icon.svg -resize 128x128 icon128.png
```

### Online Method:

1. Open `icon.svg` in your browser
2. Take a screenshot or use an online SVG to PNG converter:
   - https://svgtopng.com/
   - https://convertio.co/svg-png/
3. Create versions at 16x16, 48x48, and 128x128 pixels

### Design Tools:

- **Figma** (free): figma.com
- **Canva** (free): canva.com
- **GIMP** (free): gimp.org
- **Photoshop/Illustrator** (paid)

## Design Guidelines

- Use a simple, recognizable design
- Ensure it looks good on both light and dark backgrounds
- Keep it clear at 16x16 size
- Current design: Orange clock face with fox emoji
- Main color: #FF9500 (orange)
