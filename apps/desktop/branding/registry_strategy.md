# C2: Extension Registry Strategy — ATiQ Editor

To provide a seamless user experience while complying with licensing and maintaining security, we will implement a dual-registry strategy.

## 1. Registry Choice: Open VSX

We will configure the editor to use the [Open VSX Registry](https://open-vsx.org) by default. This is the standard for Code-OSS forks and provides access to thousands of open-source extensions.

### Configuration (`product.json`)

```json
"extensionsGallery": {
  "serviceUrl": "https://open-vsx.org/vscode/gallery",
  "itemUrl": "https://open-vsx.org/vscode/item",
  "resourceDownloadUrlTemplate": "https://open-vsx.org/vscode/content/{publisher}/{name}/{version}/extension",
  "controlUrl": "",
  "nlsConfigUrl": "",
  "queryParamNames": {
    "target": "target"
  }
}
```

## 2. The Built-in Strategy

The **ATiQ AI** extension will be bundled as a "Built-in" extension. This means:

- It is active the moment the user opens the editor for the first time.
- It cannot be uninstalled (though it can be disabled).
- It receives updates as part of the editor's core update cycle.

## 3. Security Hardening (Future)

For Enterprise/Team plans, we will support pointing the `serviceUrl` to a private, vetted extension mirror (e.g., Artifactory or a custom proxy). This allows teams to restrict which AI extensions or tools can be used within their environment.

## 4. Why not VS Code Marketplace?

The official VS Code Marketplace terms of service restrict its use specifically to official Microsoft builds of Visual Studio Code. Using it in a custom fork puts the project at legal risk and could lead to IP blocks. Open VSX is the legally and technically correct choice for ATiQ.
