# Deploy GitHub Pages

## Workflow
`.github/workflows/deploy.yml`

1. `npm ci`
2. `npm run build` → `out/`
3. Upload artifact / deploy to `gh-pages` or GitHub Pages from Actions

## Config
- `output: 'export'` in next.config.ts
- `images.unoptimized: true`
- Base path: `/` (user site jhonpiraquive.github.io)
- Post-build: `scripts/generate-redirects.mjs` writes stubs to `out/pages/` from `kb/content/legacy-redirects.json`
