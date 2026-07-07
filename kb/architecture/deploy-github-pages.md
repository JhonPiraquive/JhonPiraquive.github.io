# Deploy GitHub Pages

## Workflow
`.github/workflows/deploy.yml` (único workflow de Pages; no usar el template `nextjs.yml` de GitHub).

1. `npm ci`
2. `npm run build` → `out/`
3. Upload artifact / deploy vía GitHub Actions

## Configuración en GitHub (obligatorio)

**Settings → Pages → Build and deployment → Source: GitHub Actions**

No usar "Deploy from a branch". Si la fuente sigue siendo la rama `main`, GitHub sirve el README con Jekyll y rutas como `/es/` devuelven 404.

## Config Next.js
- `output: 'export'` in next.config.ts
- `images.unoptimized: true`
- Sin `basePath` (user site `jhonpiraquive.github.io` se sirve desde `/`)
- `public/.nojekyll` — evita que Jekyll ignore `_next/`
- Post-build: `scripts/generate-redirects.mjs` writes stubs to `out/pages/` from `kb/content/legacy-redirects.json`

## configure-pages

Usar `actions/configure-pages@v5` **sin** `static_site_generator: next`. Esa opción inyecta `basePath` según el nombre del repo y rompe sitios de usuario o dominios custom.
