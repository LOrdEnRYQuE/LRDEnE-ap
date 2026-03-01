/* eslint-disable @typescript-eslint/no-explicit-any */
/* ── ATiQ Chat Webview Script ─────────────────────────────── */

// @ts-nocheck — webview runs in browser context, not Node.js
const vscode = acquireVsCodeApi();

const messagesEl = document.getElementById("messages");
const inputEl    = document.getElementById("inp");
const sendBtn    = document.getElementById("send-btn");
const stopBtn    = document.getElementById("stop-btn");

let currentBubble = null;
let isStreaming = false;
let streamingBuffer = "";

/** Cap DOM messages to avoid memory growth in long sessions */
const MAX_MESSAGES = 100;
function gcMessages() {
  while (messagesEl.children.length > MAX_MESSAGES) {
    messagesEl.removeChild(messagesEl.firstChild);
  }
}

/** Max buffer size before falling back to plain text (avoids regex catastrophe) */
const MAX_RENDER_BYTES = 50_000;

function createBubble(role) {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${role}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "You" : "AI";

  const content = document.createElement("div");
  content.className = "bubble";

  wrapper.appendChild(avatar);
  wrapper.appendChild(content);
  messagesEl.appendChild(wrapper);
  gcMessages();
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return content;
}

/**
 * Super simple markdown-ish renderer to keep webview lightweight.
 * Handles code blocks, bold, lists, and inline code.
 */
function renderMarkdown(text) {
  if (text.length > MAX_RENDER_BYTES) {
    return `<pre style="white-space:pre-wrap;word-break:break-word">${escapeHtml(text)}</pre>`;
  }
  // 1. Code Blocks
  let html = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || "code";
    const isTerminal = ["bash", "sh", "zsh", "shell"].includes(language.toLowerCase());
    return `
      <pre>
        <div class="code-header">
           <span class="code-lang">${language}</span>
           <div class="code-actions">
             <button class="code-btn" onclick="copyCode(this)">Copy</button>
             ${isTerminal ? `<button class="code-btn terminal" onclick="runCode(this)">Run</button>` : `<button class="code-btn" onclick="applyCode(this)">Apply</button>`}
           </div>
        </div>
        <code>${escapeHtml(code.trim())}</code>
      </pre>
    `;
  });

  // 2. Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // 3. Lists
  html = html.replace(/^\s*-\s+(.*)$/gm, "<li>$1</li>");
  
  // 4. Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  return html;
}

function escapeHtml(text) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, m => map[m]);
}

window.copyCode = (btn) => {
  const code = btn.closest("pre").querySelector("code").textContent;
  navigator.clipboard.writeText(code);
  const originalText = btn.textContent;
  btn.textContent = "Copied!";
  setTimeout(() => (btn.textContent = originalText), 2000);
};

window.applyCode = (btn) => {
  const code = btn.closest("pre").querySelector("code").textContent;
  vscode.postMessage({ type: "apply", text: code });
};

window.runCode = (btn) => {
  const code = btn.closest("pre").querySelector("code").textContent;
  vscode.postMessage({ type: "terminal.run", code });
};

function appendText(bubble, text) {
  streamingBuffer += text;
  // If we suspect we are in the middle of a code block, only show partial.
  // But for simple streaming, we'll just re-render the whole bubble.
  bubble.innerHTML = renderMarkdown(streamingBuffer) + '<span class="cursor"></span>';
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function send() {
  const text = inputEl.value.trim();
  if (!text || isStreaming) return;

  inputEl.value = "";
  isStreaming = true;
  streamingBuffer = "";
  updateButtons(true);

  // User message bubble
  createBubble("user").textContent = text;

  // Assistant bubble (will be filled by stream)
  currentBubble = createBubble("assistant");
  currentBubble.innerHTML = '<span class="cursor"></span>';

  vscode.postMessage({ type: "ask", text });
}

function stop() {
  if (!isStreaming) return;
  vscode.postMessage({ type: "stop" });
}

function updateButtons(streaming) {
  sendBtn.disabled = streaming;
  sendBtn.style.display = streaming ? "none" : "block";
  stopBtn.style.display = streaming ? "block" : "none";
}

const completionMenu = document.getElementById("completion-menu");

let completionMode = null; // 'symbol' or 'file'
let selectedIndex = -1;
let completionItems = [];

function showCompletions(items) {
  completionItems = items;
  if (items.length === 0) {
    completionMenu.style.display = "none";
    return;
  }

  completionMenu.innerHTML = "";
  items.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "completion-item" + (idx === selectedIndex ? " selected" : "");
    div.innerHTML = `
      <span class="kind">${item.kind}</span>
      <span class="name">${item.name}</span>
      <span class="path">${item.relPath}</span>
    `;
    div.onclick = () => selectItem(idx);
    completionMenu.appendChild(div);
  });
  completionMenu.style.display = "block";
}

function selectItem(idx) {
  const item = completionItems[idx];
  if (!item) return;

  const text = inputEl.value;
  const lastIndex = text.lastIndexOf("@" + completionMode);
  const newText = text.substring(0, lastIndex) + `@${completionMode} ${item.name} ` + text.substring(inputEl.selectionStart);
  inputEl.value = newText;
  
  completionMenu.style.display = "none";
  completionMode = null;
  inputEl.focus();
}

inputEl.addEventListener("input", (e) => {
  const text = inputEl.value.substring(0, inputEl.selectionStart);
  const symbolMatch = text.match(/@symbol\s*([^\s]*)$/);
  const fileMatch = text.match(/@file\s*([^\s]*)$/);

  if (symbolMatch) {
    completionMode = "symbol";
    vscode.postMessage({ type: "completions", kind: "symbol", query: symbolMatch[1] });
  } else if (fileMatch) {
    completionMode = "file";
    vscode.postMessage({ type: "completions", kind: "file", query: fileMatch[1] });
  } else {
    completionMenu.style.display = "none";
    completionMode = null;
  }
});

inputEl.addEventListener("keydown", (e) => {
  if (completionMode && completionMenu.style.display === "block") {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % completionItems.length;
      showCompletions(completionItems);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + completionItems.length) % completionItems.length;
      showCompletions(completionItems);
    } else if (e.key === "Enter") {
      e.preventDefault();
      selectItem(selectedIndex);
    } else if (e.key === "Escape") {
      completionMenu.style.display = "none";
      completionMode = null;
    }
    return;
  }

  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    send();
  }
});

sendBtn.addEventListener("click", send);
stopBtn.addEventListener("click", stop);

// Receive messages from extension host
window.addEventListener("message", (event) => {
  const msg = event.data;

  if (msg.type === "completions") {
    selectedIndex = 0;
    showCompletions(msg.items);
  }

  if (msg.type === "start") {
    if (currentBubble) currentBubble.textContent = "";
    currentBubble = currentBubble || createBubble("assistant");
    updateButtons(true);
  }

  if (msg.type === "delta" && currentBubble) {
    appendText(currentBubble, msg.text);
  }

  if (msg.type === "done") {
    isStreaming = false;
    updateButtons(false);
    currentBubble = null;
    inputEl.focus();
  }
});

// Focus input on load
inputEl.focus();
