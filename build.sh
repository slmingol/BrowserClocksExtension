#!/bin/bash

# Build script for BrowserClocks extension
# Creates a distribution-ready zip file for Chrome Web Store submission

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🏗️  Building BrowserClocks Extension${NC}"
echo ""

# Get version from manifest.json
VERSION=$(grep '"version"' manifest.json | sed 's/.*"version": "\(.*\)".*/\1/')
echo -e "Version: ${YELLOW}${VERSION}${NC}"

# Create build directory
BUILD_DIR="build"
DIST_DIR="dist"
PACKAGE_NAME="BrowserClocks-v${VERSION}"

echo ""
echo -e "${GREEN}📁 Creating build directories...${NC}"
rm -rf "$BUILD_DIR" "$DIST_DIR"
mkdir -p "$BUILD_DIR" "$DIST_DIR"

# Files to include in the package
echo -e "${GREEN}📦 Copying extension files...${NC}"

# Core extension files
cp manifest.json "$BUILD_DIR/"
cp background.js "$BUILD_DIR/"
cp popup.html "$BUILD_DIR/"
cp popup.css "$BUILD_DIR/"
cp popup.js "$BUILD_DIR/"
cp toolbar.js "$BUILD_DIR/"
cp toolbar.css "$BUILD_DIR/"
cp options.html "$BUILD_DIR/"
cp options.js "$BUILD_DIR/"

# Icons
echo -e "${GREEN}🎨 Copying icons...${NC}"
cp -r icons "$BUILD_DIR/"

# Documentation (optional for store submission, but good practice)
echo -e "${GREEN}📄 Copying documentation...${NC}"
cp README.md "$BUILD_DIR/"
cp LICENSE "$BUILD_DIR/"
cp PRIVACY.md "$BUILD_DIR/"
cp CHANGELOG.md "$BUILD_DIR/"

# Create zip file
echo ""
echo -e "${GREEN}🗜️  Creating distribution package...${NC}"
cd "$BUILD_DIR"
zip -r "../$DIST_DIR/${PACKAGE_NAME}.zip" . -q
cd ..

# Calculate file size
FILE_SIZE=$(du -h "$DIST_DIR/${PACKAGE_NAME}.zip" | cut -f1)

echo ""
echo -e "${GREEN}✅ Build complete!${NC}"
echo ""
echo -e "📦 Package: ${YELLOW}$DIST_DIR/${PACKAGE_NAME}.zip${NC}"
echo -e "📏 Size: ${YELLOW}${FILE_SIZE}${NC}"
echo -e "🔢 Version: ${YELLOW}${VERSION}${NC}"
echo ""
echo -e "${GREEN}Next steps:${NC}"
echo "1. Test the packaged extension:"
echo "   - Extract the zip to a temporary folder"
echo "   - Load it in Chrome (chrome://extensions/)"
echo "   - Verify all features work"
echo ""
echo "2. Submit to Chrome Web Store:"
echo "   - Go to: https://chrome.google.com/webstore/devconsole"
echo "   - Upload: $DIST_DIR/${PACKAGE_NAME}.zip"
echo "   - Follow the store listing guide in docs/STORE_LISTING.md"
echo ""
echo "3. Optional: Create a GitHub release"
echo "   - Tag: v${VERSION}"
echo "   - Attach: $DIST_DIR/${PACKAGE_NAME}.zip"
echo ""
