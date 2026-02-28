# ATiQ Editor Branding Manifest

This document tracks all branding assets that must be replaced in the Code-OSS fork to create the ATiQ Editor.

## 🎨 Asset Checklist

- [x] **App Icons (macOS/Windows/Linux)**
  - path: `resources/darwin/code.icns` (macOS) - [atiq_app_icon_v1.png](file:///Users/leads/.gemini/antigravity/brain/8c455e61-abdc-4804-8b14-c19f06686240/atiq_app_icon_v1_1772270686038.png)
  - path: `resources/win32/code.ico` (Windows)
  - path: `resources/linux/code.png` (Linux)
- [x] **Loading Screen / Splash Icon**
  - path: `src/vs/base/browser/ui/loading/loading.svg` - [atiq_splash_screen_v1.png](file:///Users/leads/.gemini/antigravity/brain/8c455e61-abdc-4804-8b14-c19f06686240/atiq_splash_screen_v1_1772270704057.png)
- [ ] **About Dialog Image**
  - path: `src/vs/workbench/browser/parts/editor/media/...`
- [ ] **Product Strings (Product.json)**
  - [x] Application Name: `ATiQ Editor`
  - [x] Bundle ID: `com.atiq.editor`
- [ ] **License Overrides**
  - path: `LICENSE` (MIT)
- [ ] **Welcome Page Customization**
  - path: `src/vs/workbench/contrib/welcomePage/browser/welcomePage.ts`

## 🛠️ Code-OSS Integration Plan

1. **Custom product.json**: Use `apps/desktop/branding/product.json`.
2. **Built-in Extension**: Move `apps/extension` into `extensions/atiq-ai` during the build.
3. **Gallery Endpoint**: Set `extensionsGallery` in `product.json` to use Open VSX or a custom proxy.
4. **Build Script**: Wrap `scripts/code.sh` with a build step that applies these branding assets automatically.
