export interface SymbolInfo {
  name: string;
  type: 'class' | 'function' | 'interface' | 'type' | 'const';
  file: string;
  line: number;
}

export interface IndexStatus {
  isIndexing: boolean;
  count: number;
}

export interface ElectronAPI {
  getAppVersion: () => Promise<string>;
  indexProject: () => Promise<void>;
  searchSymbols: (query: string) => Promise<SymbolInfo[]>;
  getStatus: () => Promise<IndexStatus>;
  readFile: (path: string) => Promise<string>;
}

declare global {
  interface Window {
    api: ElectronAPI;
    ipcRenderer: {
      on: (channel: string, listener: (event: any, ...args: any[]) => void) => void;
      send: (channel: string, ...args: any[]) => void;
    };
  }
}
