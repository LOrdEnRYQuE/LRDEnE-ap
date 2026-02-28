import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * ATiQ Editor Branding Engine — Refined Mapping
 * --------------------------------------------
 * This script automates the transformation of Code-OSS source into ATiQ Editor.
 * Usage: node apply-branding.js <path-to-code-oss-root> [--dry-run]
 */

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
  accentColor: "#00E0FF", // Cyan
};

const REPLACEMENTS = [
  // Full Brand scrubbing
  { from: /Visual Studio Code/g, to: BRAND_CONFIG.nameLong },
  { from: /VS Code/g, to: BRAND_CONFIG.nameShort },
  // Identifier scrubbing (Case-sensitive)
  { from: /com\.microsoft\.VSCode/g, to: BRAND_CONFIG.bundleId },
  { from: /vscode/g, to: BRAND_CONFIG.applicationName }, // Case-insensitive can be dangerous, keep it small
  // CSS & UI string scrubbing
  { from: /"Code - OSS"/g, to: `"${BRAND_CONFIG.nameShort}"` },
  { from: /'Code - OSS'/g, to: `'${BRAND_CONFIG.nameShort}'` },
];

async function walk(dir: string, callback: (file: string) => Promise<void>) {
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
  console.log(`🚀 Starting branding of: ${TARGET_ROOT} ${IS_DRY_RUN ? "[DRY RUN]" : ""}`);

  // 1. Update product.json
  const productPath = path.join(TARGET_ROOT, "product.json");
  try {
    const productBase = JSON.parse(await fs.readFile(productPath, "utf-8"));
    const atiqProduct = JSON.parse(await fs.readFile(path.join(__dirname, "product.json"), "utf-8"));
    
    const merged = { ...productBase, ...atiqProduct };
    if (!IS_DRY_RUN) {
      await fs.writeFile(productPath, JSON.stringify(merged, null, "\t"));
      console.log("✅ Updated product.json");
    } else {
      console.log("🔍 [DRY RUN] Would update product.json");
    }
  } catch (err) {
    console.warn("⚠️ Could not update product.json (file not found or invalid)");
  }

  // 2. Bulk String Replacement (Targeted extensions)
  const targetExts = [".ts", ".tsx", ".js", ".json", ".md", ".html", ".svg", ".css"];
  
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
      }
      console.log(`📝 [${IS_DRY_RUN ? "WOULD BRAND" : "BRANDED"}]: ${path.relative(TARGET_ROOT, file)}`);
    }
  });

  console.log(`\n🎉 Branding ${IS_DRY_RUN ? "Simulation" : "Process"} complete.`);
}

applyBranding().catch(err => {
  console.error("❌ Branding failed:", err);
  process.exit(1);
});
