const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

const folders = [
  "app",
  "components",
  "lib",
];

const extensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".css",
  ".md",
]);

const backupRoot = path.join(
  ROOT,
  "backup-encoding-" +
    new Date().toISOString().replace(/[:.]/g, "-")
);

const cp1252Special = {
  0x20AC: 0x80,
  0x201A: 0x82,
  0x0192: 0x83,
  0x201E: 0x84,
  0x2026: 0x85,
  0x2020: 0x86,
  0x2021: 0x87,
  0x02C6: 0x88,
  0x2030: 0x89,
  0x0160: 0x8A,
  0x2039: 0x8B,
  0x0152: 0x8C,
  0x017D: 0x8E,
  0x2018: 0x91,
  0x2019: 0x92,
  0x201C: 0x93,
  0x201D: 0x94,
  0x2022: 0x95,
  0x2013: 0x96,
  0x2014: 0x97,
  0x02DC: 0x98,
  0x2122: 0x99,
  0x0161: 0x9A,
  0x203A: 0x9B,
  0x0153: 0x9C,
  0x017E: 0x9E,
  0x0178: 0x9F,
};

function toCp1252Byte(code) {
  if (code >= 0 && code <= 255) {
    return code;
  }

  if (Object.prototype.hasOwnProperty.call(cp1252Special, code)) {
    return cp1252Special[code];
  }

  return null;
}

function decodeBrokenToken(token) {
  const bytes = [];

  for (const char of token) {
    const code = char.codePointAt(0);
    const byte = toCp1252Byte(code);

    if (byte === null) {
      return token;
    }

    bytes.push(byte);
  }

  const fixed = Buffer.from(bytes).toString("utf8");

  if (fixed.includes("\uFFFD")) {
    return token;
  }

  return fixed;
}

function repairText(text) {
  const brokenPattern =
    new RegExp(
      "\\S*(?:\\u00C3|\\u00C2|\\u00E2)\\S*",
      "g"
    );

  let current = text;

  for (let i = 0; i < 3; i++) {
    const next = current.replace(
      brokenPattern,
      (token) => decodeBrokenToken(token)
    );

    if (next === current) {
      break;
    }

    current = next;
  }

  return current;
}

function walk(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const result = [];

  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true,
  })) {
    if (
      entry.name === "node_modules" ||
      entry.name === ".next"
    ) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      result.push(...walk(fullPath));
      continue;
    }

    if (
      entry.isFile() &&
      extensions.has(path.extname(entry.name).toLowerCase())
    ) {
      result.push(fullPath);
    }
  }

  return result;
}

let fixedFiles = 0;

for (const folder of folders) {
  const base = path.join(ROOT, folder);

  for (const file of walk(base)) {
    const original = fs.readFileSync(file, "utf8");
    const corrected = repairText(original);

    if (corrected === original) {
      continue;
    }

    const relative = path.relative(ROOT, file);
    const backup = path.join(backupRoot, relative);

    fs.mkdirSync(path.dirname(backup), {
      recursive: true,
    });

    fs.copyFileSync(file, backup);

    fs.writeFileSync(
      file,
      corrected,
      {
        encoding: "utf8",
      }
    );

    console.log(
      "[OK] " + relative
    );

    fixedFiles++;
  }
}

console.log("");
console.log(
  "=========================================="
);
console.log(
  " CORRECAO DE TEXTO FINALIZADA"
);
console.log(
  "=========================================="
);
console.log(
  "Arquivos corrigidos: " + fixedFiles
);
console.log(
  "Backup: " + backupRoot
);
console.log("");