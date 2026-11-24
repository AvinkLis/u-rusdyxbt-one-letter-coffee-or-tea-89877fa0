// One Letter: Coffee or Tea — make.fun entry.
// Writes exactly one letter to entry.txt in the output directory:
// no word, no explanation, no punctuation, and no trailing newline,
// because the gate accepts exactly 1 character.
// Final pick after judging five candidates against the judge's brief
// (vivid first, then funnier, then truer): "A" for coffee.
// A is the first letter, the top grade and a complete word on its own,
// and coffee is the first, strongest drink of the day — the letter that
// grades itself A, and is right. It beats the runner-up "B" (tea) on
// vividness, the first criterion where the two letters differ, and its
// self-awarded grade is the better joke besides.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const letter = "A";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), letter, "utf8");
