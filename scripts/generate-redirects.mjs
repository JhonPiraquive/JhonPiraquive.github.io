#!/usr/bin/env node
/** Write legacy HTML redirect stubs into out/pages/ after build */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "out");
const REDIRECTS = path.join(ROOT, "kb/content/legacy-redirects.json");

const REDIRECT_HTML = (target) => `<!DOCTYPE html>
<html lang="es"><head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace("${target}")</script>
<link rel="canonical" href="${target}">
</head><body><p><a href="${target}">Redirecting…</a></p></body></html>`;

if (!fs.existsSync(OUT)) {
  console.warn("out/ not found — skip redirects");
  process.exit(0);
}

const redirects = JSON.parse(fs.readFileSync(REDIRECTS, "utf8"));

for (const [key, target] of Object.entries(redirects)) {
  const outPath = path.join(OUT, "pages", key);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, REDIRECT_HTML(target));
}

fs.writeFileSync(path.join(OUT, "index.html"), REDIRECT_HTML("/es/"));
console.log(`Legacy redirects written to out/pages/ (${Object.keys(redirects).length} stubs)`);
