import { describe, it, expect } from "vitest";
import { parseUnifiedDiff } from "../lib/diff.js";

describe("Diff Parser (Milestone B)", () => {
  it("parses a standard unified diff into structured hunks", () => {
    const diff = `--- a/src/index.ts
+++ b/src/index.ts
@@ -1,3 +1,4 @@
 import React from 'react';
-console.log('hello');
+console.log('hello world');
+console.log('extra line');
 import { App } from './App';`;

    const hunks = parseUnifiedDiff(diff);
    expect(hunks).toHaveLength(1);
    const hunk = hunks[0];
    
    expect(hunk.oldStart).toBe(1);
    expect(hunk.oldCount).toBe(3);
    expect(hunk.newStart).toBe(1);
    expect(hunk.newCount).toBe(4);
    
    const additions = hunk.lines.filter(l => l.type === "add");
    const deletions = hunk.lines.filter(l => l.type === "del");
    const context = hunk.lines.filter(l => l.type === "context");
    
    expect(additions).toHaveLength(2);
    expect(deletions).toHaveLength(1);
    expect(context).toHaveLength(2);
    expect(additions[0].text).toBe("console.log('hello world');");
  });

  it("handles multiple hunks in one file", () => {
    const diff = `--- a/test.js
+++ b/test.js
@@ -10,5 +10,5 @@
-one
+two
@@ -50,2 +50,3 @@
-three
+four
+five`;
    const hunks = parseUnifiedDiff(diff);
    expect(hunks).toHaveLength(2);
    expect(hunks[0].oldStart).toBe(10);
    expect(hunks[1].oldStart).toBe(50);
  });
});
