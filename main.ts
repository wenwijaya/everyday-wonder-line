// Everyday Wonder: Two Days to Find the Line — make.fun program/v1 entry.
// Writes one sentence (at most 200 characters) to /output/entry.txt.
// The sentence: a small everyday moment (riding an escalator) turned strange
// by one fresh angle — the handrail moves faster than the hand resting on it.
import { mkdirSync, writeFileSync } from "node:fs";

// The sentence is 122 characters, one sentence, inside the 1–200 gate.
const ENTRY =
  "The escalator handrail outruns my hand by half a step, so for one whole floor I am holding hands with the building itself.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", ENTRY, "utf8");
  } catch (err) {
    console.error("failed to write /output/entry.txt:", err);
    process.exitCode = 1;
  }
}

main();
