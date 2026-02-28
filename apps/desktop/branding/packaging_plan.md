# C3: Packaging + Signing + Notarization Plan

This document outlines the workflow to turn the Code-OSS fork into a signed, distributable binary for macOS and Windows.

## 1. Tooling Choice: Electron Builder

We will use `electron-builder` as it provides excellent abstractions for both macOS `.dmg`/`.app` and Windows `.exe`/`.msi` packaging.

### Build Workflow

1.  **Code-OSS Compilation**: Run the standard `scripts/code.sh --build` to compile VS Code core.
2.  **Branding Overlay**: Apply our custom `product.json`, icons, and splash screens.
3.  **Extension Bundling**: Inject the built `@atiq/extension` into the built-in extensions directory.
4.  **Packaging**: Trigger `electron-builder` with our configuration.

## 2. Signing & Notarization (The "Gate" to OS Trust)

### macOS (Apple)

- **Required**: Developer ID Application Certificate.
- **Action**: Sign all binaries and helper apps.
- **Notarization**: Upload the signed app to Apple's Notarization Service to prevent "unidentified developer" warnings.

### Windows (Microsoft)

- **Required**: Code Signing Certificate.
- **Action**: Sign the `.exe` and installer.
- **Trust**: Prevents Windows SmartScreen from blocking the installer.

## 3. Automatic Update Channel (Delivery)

We will use `electron-updater` with **GitHub Releases** as the initial backend:

1.  **Release Trigger**: On a successful CI build, we upload the signed binaries to a GitHub release.
2.  **Update Check**: The ATiQ Editor checks `latest.yml` (mac) / `latest.json` (win) from GitHub.
3.  **Differential Updates**: Electron Builder supports `block maps` to download only the changed parts of the app (keeping updates small).

## 4. Why not just a simple .zip?

A simple zip on macOS will be marked as "quarantined," causing breakage for things like the `code` CLI tool and preventing future automatic updates. Signing is mandatory for a premium IDE experience.
