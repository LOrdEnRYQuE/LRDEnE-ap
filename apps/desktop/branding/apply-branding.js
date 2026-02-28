import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TARGET_ROOT = process.env.TARGET_ROOT || process.argv[2];
const IS_DRY_RUN = process.argv.includes("--dry-run");

if (!TARGET_ROOT) {
  console.error("Usage: node apply-branding.js <path-to-code-oss-root> [--dry-run]");
  process.exit(1);
}

const BRAND_CONFIG = {
  nameShort: "ATiQ",
  nameLong: "ATiQ Editor",
  applicationName: "atiq-editor",
  bundleId: "com.atiq.editor",
  urlProtocol: "atiq",
};

const REPLACEMENTS = [
  // User-facing branding
  { from: /Visual Studio Code/g, to: BRAND_CONFIG.nameLong },
  { from: /VS Code/g, to: BRAND_CONFIG.nameShort },
  { from: /Code - OSS/g, to: BRAND_CONFIG.nameShort },
  
  // Identifiers & Protocols
  { from: /com\.microsoft\.VSCode/g, to: BRAND_CONFIG.bundleId },
  { from: /vscode:/g, to: `${BRAND_CONFIG.urlProtocol}:` },
  
  // Quoted IDs (Safe for JSON/TS)
  { from: /"vscode"/g, to: `"${BRAND_CONFIG.applicationName}"` },
  { from: /'vscode'/g, to: `'${BRAND_CONFIG.applicationName}'` },

  // Secondary Microsoft scrubbing (Selective)
  { from: /Microsoft Corporation/g, to: "ATiQ Corp" },
];

async function walk(dir, callback) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const res = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      if (file.name === "node_modules" || file.name === ".git" || file.name === "out" || file.name === ".build") continue;
      await walk(res, callback);
    } else {
      await callback(res);
    }
  }
}

async function applyBranding() {
  console.log(`🚀 Applying ATiQ branding to: ${TARGET_ROOT} ${IS_DRY_RUN ? "[DRY RUN]" : ""}`);

  // 1. Specialized product.json merge
  const productPath = path.join(TARGET_ROOT, "product.json");
  try {
    const productBase = JSON.parse(await fs.readFile(productPath, "utf-8"));
    const atiqProductRaw = await fs.readFile(path.join(__dirname, "product.json"), "utf-8");
    const atiqProduct = JSON.parse(atiqProductRaw);
    
    const merged = { ...productBase, ...atiqProduct };
    if (!IS_DRY_RUN) {
      await fs.writeFile(productPath, JSON.stringify(merged, null, "\t"));
      console.log("✅ Updated product.json");
    }
  } catch (err) {
    console.warn("⚠️ product.json issue:", err.message);
  }

  // 2. Walk and replace
  const targetExts = [".ts", ".tsx", ".js", ".json", ".md", ".html", ".svg", ".css", ".plist", ".yaml"];
  
  await walk(TARGET_ROOT, async (file) => {
    if (!targetExts.includes(path.extname(file))) return;

    let content = await fs.readFile(file, "utf-8");
    let modified = false;

    for (const r of REPLACEMENTS) {
      if (r.from.test(content)) {
        content = content.replace(r.from, r.to);
        modified = true;
      }
    }

    if (modified) {
      if (!IS_DRY_RUN) {
        await fs.writeFile(file, content);
        console.log(`📝 Branded: ${path.relative(TARGET_ROOT, file)}`);
      } else {
        console.log(`🔍 [DRY RUN]: Would brand ${path.relative(TARGET_ROOT, file)}`);
      }
    }
  });

  console.log(`\n🎉 Branding complete. Clean build recommended.`);
}

applyBranding().catch(err => {
  console.error("❌ Error:", err);
  process.exit(1);
});
