var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { app, BrowserWindow, ipcMain, shell } from "electron";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";
const IGNORE_DIRS = ["node_modules", ".git", "dist", ".next", ".turbo"];
const ALLOWED_EXTS = [".ts", ".tsx", ".js", ".jsx"];
class SymbolIndexer {
  constructor() {
    __publicField(this, "symbols", []);
    __publicField(this, "isIndexing", false);
  }
  async indexProject(rootPath) {
    if (this.isIndexing) return;
    this.isIndexing = true;
    this.symbols = [];
    try {
      await this.scanDir(rootPath);
      console.log(`[Indexer] Done. Found ${this.symbols.length} symbols.`);
    } catch (err) {
      console.error("[Indexer] Error indexing project:", err);
    } finally {
      this.isIndexing = false;
    }
  }
  async scanDir(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!IGNORE_DIRS.includes(entry.name)) {
          await this.scanDir(fullPath);
        }
      } else if (entry.isFile()) {
        if (ALLOWED_EXTS.includes(path.extname(entry.name))) {
          await this.extractSymbols(fullPath);
        }
      }
    }
  }
  async extractSymbols(filePath) {
    const content = await fs.readFile(filePath, "utf-8");
    const lines = content.split("\n");
    const regexps = [
      { type: "class", regex: /^\s*(?:export\s+)?class\s+([a-zA-Z0-9_$]+)/ },
      { type: "function", regex: /^\s*(?:export\s+)?(?:async\s+)?function\s+([a-zA-Z0-9_$]+)/ },
      { type: "interface", regex: /^\s*(?:export\s+)?interface\s+([a-zA-Z0-9_$]+)/ },
      { type: "type", regex: /^\s*(?:export\s+)?type\s+([a-zA-Z0-9_$]+)/ },
      { type: "const", regex: /^\s*(?:export\s+)?const\s+([a-zA-Z0-9_$]+)\s*=/ }
    ];
    lines.forEach((line, index) => {
      for (const { type, regex } of regexps) {
        const match = line.match(regex);
        if (match) {
          this.symbols.push({
            name: match[1],
            type,
            file: filePath,
            line: index + 1
          });
          break;
        }
      }
    });
  }
  search(query) {
    const q = query.toLowerCase();
    return this.symbols.filter((s) => s.name.toLowerCase().includes(q)).slice(0, 10);
  }
  getStatus() {
    return {
      isIndexing: this.isIndexing,
      count: this.symbols.length
    };
  }
}
const indexer = new SymbolIndexer();
const __dirname$1 = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname$1, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    titleBarStyle: "hidden",
    // Native style but custom controls
    trafficLightPosition: { x: 15, y: 15 },
    webPreferences: {
      preload: path.join(__dirname$1, "preload.mjs")
      // nodeIntegration: false,
      // contextIsolation: true,
    },
    backgroundColor: "#050505"
  });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https:")) shell.openExternal(url);
    return { action: "deny" };
  });
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(createWindow);
ipcMain.handle("get-app-version", () => app.getVersion());
ipcMain.handle("project:index", async () => {
  const root = path.join(process.env.APP_ROOT || "", "../..");
  return await indexer.indexProject(root);
});
ipcMain.handle("project:search", async (_event, query) => {
  return indexer.search(query);
});
ipcMain.handle("project:status", () => {
  return indexer.getStatus();
});
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
