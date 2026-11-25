// A one-star review of Monday as if it were a restaurant, 25 words or fewer.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "One star. Monday sat me next to a deadline, served cold coffee, and charged a full week for the experience. Would not return.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
