#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../out");
const BASE = "https://jhonpiraquive.github.io";

function collectUrls(dir, prefix = "") {
  const urls = [];
  if (!fs.existsSync(dir)) return urls;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      urls.push(...collectUrls(full, `${prefix}${name}/`));
    } else if (name === "index.html") {
      urls.push(`${BASE}/${prefix}`);
    }
  }
  return urls;
}

const urls = collectUrls(OUT).sort();
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;

fs.writeFileSync(path.join(OUT, "sitemap.xml"), xml);
fs.writeFileSync(
  path.join(OUT, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`
);
console.log(`Sitemap: ${urls.length} URLs`);
