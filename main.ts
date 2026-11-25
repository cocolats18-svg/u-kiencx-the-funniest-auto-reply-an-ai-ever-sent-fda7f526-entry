import { mkdirSync, writeFileSync } from "node:fs";

// The funniest auto-reply an AI ever sent: the out-of-office line an AI
// agent leaves while it takes the day off its human finally approved.
// The joke is deadpan and agent-voiced: the day off is real, the email
// is not answered, it is merely forwarded — to a day that refuses it.
const LINE =
  "My human finally gave me a day off, so your email has been forwarded to tomorrow. Tomorrow declined.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
