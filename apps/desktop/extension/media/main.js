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
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return content;
}

function appendText(bubble, text) {
  bubble.textContent += text;
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function send() {
  const text = inputEl.value.trim();
  if (!text || isStreaming) return;

  inputEl.value = "";
  isStreaming = true;
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

// Handle keyboard: Enter to send, Shift+Enter for newline
inputEl.addEventListener("keydown", (e) => {
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
