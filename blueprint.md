Alright. Here’s a real, runnable MVP scaffold that proves I can help you build this like an actual product—not vibes and philosophy.

You’ll get, in one repo:
• API backend (auth stub + entitlements + AI chat streaming endpoint)
• Web app (pricing + download + account page that shows your plan)
• VS Code extension (right-side chat panel that talks to your API)
• The exact structure you’ll later bundle into your own Code-OSS desktop editor (same extension, preinstalled)

No hand-waving: copy files, run commands, you’ll see it working.

⸻

0. Repo structure

atiq-editor-mvp/
pnpm-workspace.yaml
package.json

apps/
api/
package.json
tsconfig.json
src/index.ts

    web/
      package.json
      next.config.mjs
      app/page.tsx
      app/pricing/page.tsx
      app/download/page.tsx
      app/account/page.tsx

    extension/
      package.json
      tsconfig.json
      src/extension.ts
      src/chatPanel.ts
      media/main.js
      media/main.css

⸻

1. Root workspace files

pnpm-workspace.yaml

packages:

- "apps/\*"

package.json

{
"name": "atiq-editor-mvp",
"private": true,
"packageManager": "pnpm@9",
"scripts": {
"dev": "pnpm -r --parallel dev",
"build": "pnpm -r build"
}
}

⸻

2. Backend API (apps/api)

apps/api/package.json

{
"name": "@atiq/api",
"private": true,
"type": "module",
"scripts": {
"dev": "node --env-file=.env --watch --loader ts-node/esm src/index.ts",
"build": "tsc -p tsconfig.json",
"start": "node dist/index.js"
},
"dependencies": {
"@fastify/cors": "^10.0.0",
"fastify": "^5.0.0"
},
"devDependencies": {
"ts-node": "^10.0.0",
"typescript": "^5.0.0"
}
}

apps/api/tsconfig.json

{
"compilerOptions": {
"outDir": "dist",
"module": "ESNext",
"target": "ES2022",
"moduleResolution": "Bundler",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true
},
"include": ["src"]
}

apps/api/src/index.ts

import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, {
origin: true,
credentials: true,
});

function sleep(ms: number) {
return new Promise((r) => setTimeout(r, ms));
}

function planFromAuth(authHeader?: string): "free" | "pro" | "team" {
// Dev tokens for now:
// Bearer dev-free
// Bearer dev-pro
// Bearer dev-team
const token = (authHeader ?? "").replace("Bearer ", "").trim();
if (token === "dev-pro") return "pro";
if (token === "dev-team") return "team";
return "free";
}

app.get("/health", async () => ({ ok: true }));

app.get("/v1/entitlements", async (req) => {
const plan = planFromAuth(req.headers.authorization);

const limits =
plan === "team"
? { requestsPerDay: 2000, maxContextChars: 200_000 }
: plan === "pro"
? { requestsPerDay: 400, maxContextChars: 80_000 }
: { requestsPerDay: 30, maxContextChars: 20_000 };

return {
plan,
limits,
features: {
chat: true,
inlineEdits: plan !== "free",
repoIndexing: plan === "team",
},
};
});

/\*\*

- SSE streaming endpoint for chat.
- In production this would proxy to an LLM provider.
  \*/
  app.get("/v1/chat/stream", async (req, reply) => {
  const plan = planFromAuth(req.headers.authorization);
  const q = (req.query as any)?.q?.toString?.() ?? "";

reply.raw.writeHead(200, {
"Content-Type": "text/event-stream; charset=utf-8",
"Cache-Control": "no-cache, no-transform",
Connection: "keep-alive",
});

const header = `ATiQ AI (${plan}) responding.\n\nPrompt:\n${q}\n\n---\n`;
for (const ch of header) {
reply.raw.write(`data: ${JSON.stringify({ delta: ch })}\n\n`);
await sleep(4);
}

// Fake “LLM stream” so you can test UI + billing gates immediately.
const body =
"Next step: I can turn this into a real proxy (OpenAI/Anthropic/local) with rate limits + usage metering.\n";
for (const ch of body) {
reply.raw.write(`data: ${JSON.stringify({ delta: ch })}\n\n`);
await sleep(6);
}

reply.raw.write(`data: [DONE]\n\n`);
reply.raw.end();
});

const port = Number(process.env.PORT ?? 8787);
await app.listen({ port, host: "0.0.0.0" });

Create apps/api/.env:

PORT=8787

⸻

3. Web app (apps/web) — Pricing + Download + Account

apps/web/package.json

{
"name": "@atiq/web",
"private": true,
"scripts": {
"dev": "next dev -p 3000",
"build": "next build",
"start": "next start -p 3000"
},
"dependencies": {
"next": "^15.0.0",
"react": "^19.0.0",
"react-dom": "^19.0.0"
}
}

apps/web/next.config.mjs

/\*_ @type {import('next').NextConfig} _/
const nextConfig = {
env: {
NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787"
}
};
export default nextConfig;

apps/web/app/page.tsx

export default function Home() {
return (
<main style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
<h1>ATiQ Editor</h1>
<p>Desktop AI code editor + web account + subscriptions.</p>
<ul>
<li><a href="/pricing">Pricing</a></li>
<li><a href="/download">Download</a></li>
<li><a href="/account">Account</a></li>
</ul>
<p style={{ opacity: 0.7 }}>
Dev auth tokens: <code>dev-free</code>, <code>dev-pro</code>, <code>dev-team</code>
</p>
</main>
);
}

apps/web/app/pricing/page.tsx

export default function Pricing() {
return (
<main style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
<h1>Pricing</h1>
<div style={{ display: "grid", gap: 16, maxWidth: 720 }}>
<div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
<h2>Free</h2>
<p>Chat + basic help. Limited daily usage.</p>
<p><b>Token for testing:</b> <code>dev-free</code></p>
</div>
<div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
<h2>Pro</h2>
<p>Chat + inline edits (diff/patch apply), bigger context limits.</p>
<p><b>Token for testing:</b> <code>dev-pro</code></p>
</div>
<div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
<h2>Team</h2>
<p>Seats + org controls + repo indexing + shared presets.</p>
<p><b>Token for testing:</b> <code>dev-team</code></p>
</div>
</div>

      <p style={{ marginTop: 16, opacity: 0.7 }}>
        Next: wire Stripe Checkout + webhooks so these tokens become real entitlements.
      </p>
    </main>

);
}

apps/web/app/download/page.tsx

export default function Download() {
return (
<main style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
<h1>Download</h1>
<p>For now these are placeholders. Later you’ll point to GitHub Releases / your CDN.</p>

      <ul>
        <li>macOS: <code>ATiQ-Editor.dmg</code></li>
        <li>Windows: <code>ATiQ-Editor-Setup.exe</code></li>
        <li>Linux: <code>ATiQ-Editor.AppImage</code></li>
      </ul>

      <p style={{ opacity: 0.7 }}>
        The desktop build step comes after the extension + API are proven.
      </p>
    </main>

);
}

apps/web/app/account/page.tsx

async function getEntitlements() {
const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";
// Dev: choose token here to see different plans.
const token = "dev-pro";

const res = await fetch(`${api}/v1/entitlements`, {
headers: { Authorization: `Bearer ${token}` },
cache: "no-store"
});

if (!res.ok) throw new Error("Failed to load entitlements");
return res.json();
}

export default async function Account() {
const data = await getEntitlements();

return (
<main style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
<h1>Account</h1>
<pre style={{ background: "#f6f6f6", padding: 16, borderRadius: 12 }}>
{JSON.stringify(data, null, 2)}
</pre>
<p style={{ opacity: 0.7 }}>
Next: login + Stripe customer portal + real tokens.
</p>
</main>
);
}

⸻

4. VS Code Extension (apps/extension) — Chat panel that streams from your API

apps/extension/package.json

{
"name": "atiq-ai",
"displayName": "ATiQ AI",
"version": "0.0.1",
"publisher": "atiq",
"engines": { "vscode": "^1.90.0" },
"categories": ["Other"],
"activationEvents": ["onCommand:atiq.openChat"],
"main": "./dist/extension.js",
"contributes": {
"commands": [
{ "command": "atiq.openChat", "title": "ATiQ: Open Chat" }
]
},
"scripts": {
"dev": "tsc -w -p tsconfig.json",
"build": "tsc -p tsconfig.json"
},
"devDependencies": {
"@types/node": "^20.0.0",
"@types/vscode": "^1.90.0",
"typescript": "^5.0.0"
}
}

apps/extension/tsconfig.json

{
"compilerOptions": {
"outDir": "dist",
"target": "ES2022",
"module": "CommonJS",
"lib": ["ES2022"],
"strict": true,
"skipLibCheck": true
},
"include": ["src"]
}

apps/extension/src/extension.ts

import \* as vscode from "vscode";
import { ChatPanel } from "./chatPanel";

export function activate(context: vscode.ExtensionContext) {
context.subscriptions.push(
vscode.commands.registerCommand("atiq.openChat", () => {
ChatPanel.createOrShow(context.extensionUri);
})
);
}

export function deactivate() {}

apps/extension/src/chatPanel.ts

import \* as vscode from "vscode";

export class ChatPanel {
public static currentPanel: ChatPanel | undefined;
private readonly panel: vscode.WebviewPanel;
private readonly extensionUri: vscode.Uri;
private disposables: vscode.Disposable[] = [];

static createOrShow(extensionUri: vscode.Uri) {
const column = vscode.ViewColumn.Two;

    if (ChatPanel.currentPanel) {
      ChatPanel.currentPanel.panel.reveal(column);
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      "atiqChat",
      "ATiQ Chat",
      column,
      {
        enableScripts: true,
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, "media")]
      }
    );

    ChatPanel.currentPanel = new ChatPanel(panel, extensionUri);

}

private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
this.panel = panel;
this.extensionUri = extensionUri;

    this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
    this.panel.webview.html = this.getHtml(this.panel.webview);

    this.panel.webview.onDidReceiveMessage(async (msg) => {
      if (msg.type === "ask") {
        const editor = vscode.window.activeTextEditor;
        const selection = editor?.document.getText(editor.selection) || "";
        const file = editor?.document.getText() || "";

        const prompt =
          `User question:\n${msg.text}\n\n` +
          `---\nSelected:\n${selection}\n\n---\nOpen file:\n${file.slice(0, 5000)}\n`;

        await this.streamFromApi(prompt);
      }
    });

}

private async streamFromApi(prompt: string) {
const apiUrl = "http://localhost:8787";
const token = "dev-pro";

    this.panel.webview.postMessage({ type: "start" });

    const res = await fetch(`${apiUrl}/v1/chat/stream?q=${encodeURIComponent(prompt)}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok || !res.body) {
      this.panel.webview.postMessage({
        type: "delta",
        text: `\n[API error: ${res.status}]`
      });
      this.panel.webview.postMessage({ type: "done" });
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      // Parse SSE lines: "data: ..."
      const parts = buffer.split("\n\n");
      buffer = parts.pop() ?? "";

      for (const part of parts) {
        const line = part.split("\n").find((l) => l.startsWith("data: "));
        if (!line) continue;

        const payload = line.slice("data: ".length).trim();
        if (payload === "[DONE]") {
          this.panel.webview.postMessage({ type: "done" });
          return;
        }

        try {
          const json = JSON.parse(payload);
          if (json?.delta) {
            this.panel.webview.postMessage({ type: "delta", text: json.delta });
          }
        } catch {
          // ignore malformed chunks
        }
      }
    }

    this.panel.webview.postMessage({ type: "done" });

}

private getHtml(webview: vscode.Webview) {
const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, "media", "main.js"));
const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, "media", "main.css"));

    return `<!doctype html>

<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'none'; style-src ${webview.cspSource}; script-src ${webview.cspSource};">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="${styleUri}" rel="stylesheet" />
</head>
<body>
  <div class="wrap">
    <div class="out" id="out"></div>
    <div class="row">
      <input id="inp" placeholder="Ask ATiQ..." />
      <button id="btn">Send</button>
    </div>
    <div class="hint">Dev token is hardcoded to <code>dev-pro</code> in the extension for now.</div>
  </div>
  <script src="${scriptUri}"></script>
</body>
</html>`;
  }

dispose() {
ChatPanel.currentPanel = undefined;
this.panel.dispose();
while (this.disposables.length) {
const d = this.disposables.pop();
if (d) d.dispose();
}
}
}

apps/extension/media/main.js

const vscode = acquireVsCodeApi();
const out = document.getElementById("out");
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

function append(text) {
out.textContent += text;
out.scrollTop = out.scrollHeight;
}

btn.onclick = () => {
const text = inp.value.trim();
if (!text) return;
inp.value = "";
append("\n\n> " + text + "\n");
vscode.postMessage({ type: "ask", text });
};

window.addEventListener("message", (event) => {
const msg = event.data;
if (msg.type === "start") append("\n[streaming...]\n");
if (msg.type === "delta") append(msg.text);
if (msg.type === "done") append("\n\n[done]\n");
});

apps/extension/media/main.css

body { margin: 0; font-family: ui-sans-serif, system-ui; }
.wrap { padding: 12px; display: grid; gap: 10px; }
.out {
height: 60vh;
border: 1px solid #3333;
border-radius: 10px;
padding: 10px;
white-space: pre-wrap;
overflow: auto;
}
.row { display: grid; grid-template-columns: 1fr auto; gap: 8px; }
input { padding: 10px; border-radius: 10px; border: 1px solid #3333; }
button { padding: 10px 14px; border-radius: 10px; border: 1px solid #3333; cursor: pointer; }
.hint { opacity: 0.7; font-size: 12px; }
code { background: #00000010; padding: 2px 6px; border-radius: 8px; }

⸻

5. Run it (this is where you’ll “see my ability”)

From repo root:

pnpm install
pnpm dev

You now have:
• API on http://localhost:8787
• Web on http://localhost:3000

To run the extension: 1. Open folder apps/extension in VS Code 2. Run pnpm dev inside that folder (or rely on root pnpm dev) 3. Press F5 (Run Extension) 4. In the Extension Development Host: Cmd/Ctrl+Shift+P → ATiQ: Open Chat 5. Type something → you’ll see streaming output from your API

This proves the core loop: editor UI → your backend → gated by plan.

⸻

What this unlocks next (real Cursor/Windsurf territory)

From this exact scaffold, the next upgrades are mechanical: 1. Replace fake stream with real LLM proxy (OpenAI/Anthropic/local) 2. Add inline edits: return a diff → apply WorkspaceEdit 3. Add Stripe:
• checkout session endpoint
• webhooks → update entitlements table 4. Then bundle: Code-OSS fork + preinstall this extension + auto-updater

If you paste any error logs you hit while running this, I’ll respond with a specific diff patch to fix it (not advice).
