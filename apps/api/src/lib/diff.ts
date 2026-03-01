import type { EditHunk, EditLine } from "@atiq/shared";

export function parseUnifiedDiff(diff: string): EditHunk[] {
  const lines = diff.split("\n");
  const hunks: EditHunk[] = [];
  let currentHunk: EditHunk | null = null;

  for (const line of lines) {
    if (line.startsWith("@@")) {
      const match = line.match(/@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@/);
      if (match) {
        currentHunk = {
          oldStart: parseInt(match[1], 10),
          oldCount: parseInt(match[2] || "1", 10),
          newStart: parseInt(match[3], 10),
          newCount: parseInt(match[4] || "1", 10),
          header: line,
          lines: [],
        };
        hunks.push(currentHunk);
      }
      continue;
    }

    if (!currentHunk) continue;

    if (line.startsWith("+")) {
      currentHunk.lines.push({ type: "add", text: line.slice(1) });
    } else if (line.startsWith("-")) {
      currentHunk.lines.push({ type: "del", text: line.slice(1) });
    } else if (line.startsWith(" ")) {
      currentHunk.lines.push({ type: "context", text: line.slice(1) });
    }
  }

  return hunks;
}
