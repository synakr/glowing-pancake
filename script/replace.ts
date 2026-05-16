import fs from "fs";

// to execure run this on cmd: npx tsx script/replace.ts

const filePath = "components/sections/products/ProductModal.tsx";

const oldText = `rounded-2xl`;

const newText = `rounded-xl`;

// Read file
const content = fs.readFileSync(filePath, "utf8");

// Exact match check
if (!content.includes(oldText)) {
  console.log("Exact match not found.");
  process.exit(1);
}

// Replace exact text
const updatedContent = content.replace(oldText, newText);

// Write back
fs.writeFileSync(filePath, updatedContent, "utf8");

console.log("Replacement successful.");
