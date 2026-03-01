"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args) {
    const [channel, listener] = args;
    return electron.ipcRenderer.on(channel, (event, ...args2) => listener(event, ...args2));
  },
  off(...args) {
    const [channel, ...rest] = args;
    return electron.ipcRenderer.off(channel, ...rest);
  },
  send(...args) {
    const [channel, ...rest] = args;
    return electron.ipcRenderer.send(channel, ...rest);
  },
  invoke(...args) {
    const [channel, ...rest] = args;
    return electron.ipcRenderer.invoke(channel, ...rest);
  }
  // You can expose other apts you need here.
  // ...
});
electron.contextBridge.exposeInMainWorld("api", {
  getAppVersion: () => electron.ipcRenderer.invoke("get-app-version"),
  indexProject: () => electron.ipcRenderer.invoke("project:index"),
  searchSymbols: (query) => electron.ipcRenderer.invoke("project:search", query),
  getStatus: () => electron.ipcRenderer.invoke("project:status"),
  readFile: (path) => electron.ipcRenderer.invoke("file:read", path)
});
