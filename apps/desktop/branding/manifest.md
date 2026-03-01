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
- [x] **Product Strings (Product.json)**
  - [x] Application Name: `ATiQ Editor`
  - [x] Bundle ID: `com.atiq.editor`
- [x] **Bulk String Replacement**
  - [x] Mass scrub: "Visual Studio Code" -> "ATiQ Editor"
  - [x] Protocol: "vscode:" -> "atiq:"
- [x] **Built-in Extension Bundling**
  - [x] Path: `apps/desktop/extension`
- [ ] **First Boot Build**
  - [ ] `npm install` (Running...)
  - [ ] `npm run build` (Queued...)

3. **Gallery Endpoint**: Set `extensionsGallery` in `product.json` to use Open VSX or a custom proxy.
4. **Build Script**: Wrap `scripts/code.sh` with a build step that applies these branding assets automatically.
