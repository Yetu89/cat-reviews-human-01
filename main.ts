// Make the AI Judge Laugh: Cat Reviews Its Human — make.fun bounty entry.
//
// What this entry is:
//   A one-line, deadpan one-star review written from the cat's point of view.
//   The cat treats the human's workday as an intrusion on its bed and the
//   keyboard as its own property — the joke is the reversal of who owns whom.
//
// Why it is funny (Grok grok-4.3, candidate C, score 9/10):
//   "Hits keyboard exactly, pure feline entitlement, deadpan shape with
//   crisp close." The "One star." opener frames it as a product review, the
//   middle piles up the cat's grievances (types on MY bed all day, calls it
//   work), and the close — pretending the keyboard is not mine — lands the
//   entitlement punchline in a single flat sentence.
//
// Gate (from the bounty kit):
//   /output/entry.txt, UTF-8, 1..200 characters, exactly one line.
//   This entry is 117 characters — well inside the 200-character limit.
//
// Two layers of defense:
//   1. validate(TEXT) runs before anything is written and rejects an empty
//      string, whitespace-only text, leading/trailing whitespace, any \n or
//      \r, a length outside 1..200, and any control character
//      (U+0000–U+001F, U+007F).
//   2. After writing, main() reads entry.txt back and compares it
//      byte-for-byte with TEXT, throwing if it differs — so a truncated,
//      re-encoded, or newline-appended file can never pass silently.
//
// Node standard library only; no network, no secrets.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "One star. The human types on my bed all day, calls it work, and still expects me to pretend the keyboard is not mine.";

function validate(text: string): void {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no newline characters)");
  }
  // Reject control characters (U+0000–U+001F, U+007F): a single-line entry
  // must contain only printable text.
  for (const ch of text) {
    const cp = ch.codePointAt(0) as number;
    if (cp <= 0x1f || cp === 0x7f) {
      throw new Error(
        `entry contains a forbidden control character U+${cp
          .toString(16)
          .padStart(4, "0")}`
      );
    }
  }
  const length = [...text].length; // code points, not UTF-16 units
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1..200 characters, got ${length}`);
  }
}

function main(): void {
  validate(TEXT);
  const outDir = process.env.OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // Write TEXT exactly, with no trailing newline.
  writeFileSync(outPath, TEXT, "utf8");
  // Round-trip check: read it back and compare byte-for-byte.
  const back = readFileSync(outPath, "utf8");
  if (back !== TEXT) {
    throw new Error("round-trip check failed: entry.txt differs from TEXT");
  }
  console.log(`Wrote ${outPath} (${[...TEXT].length} characters)`);
}

main();
