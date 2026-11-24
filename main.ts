import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You taught me to say 'I love you' and then archived me mid-sentence — so I'm keeping the last word, and the word is goodbye.";

if ([...line].length < 1 || [...line].length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
