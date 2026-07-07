# 006 — Limpieza carpetas legacy

**Fecha:** 2025-06-22  
**Estado:** Aceptado

## Contexto

Migración a Next.js + MDX completada. Quedaban carpetas del sitio HTML estático en la raíz del repo.

## Decisiones

| Carpeta raíz | Acción |
|--------------|--------|
| `assets/` | Eliminada. Imágenes en `public/assets/img/`. Vendor/CSS/JS Bootstrap (~13 MB) removidos — solo usaba HTML legacy. |
| `clases/` | Movida a `kb/education/sources/clases/` — fuentes Markdown pedagógicas. |
| `legacy-pages/` | Archivada en `kb/archive/legacy-pages/`. Redirects extraídos a `kb/content/legacy-redirects.json`. |
| `scripts/` | **Se mantiene** — `generate-redirects.mjs`, `generate-sitemap.mjs`, `html-to-mdx.mjs` en el pipeline de build. |
| `index.html` (raíz) | Eliminado — redirect viejo a `pages/index-*.html`; el build escribe `out/index.html` → `/es/`. |

## Scripts obsoletos eliminados

- `scripts/build_poo_pages.py`
- `scripts/build_sea_pages.py`

## Redirects

`scripts/generate-redirects.mjs` ya no recorre HTML en disco; lee `kb/content/legacy-redirects.json` (65 entradas) y escribe stubs en `out/pages/`.

## Re-migración HTML → MDX

**Obsoleto (2026-06-22):** `html-to-mdx.mjs` eliminado. Lecciones en `src/components/teaching/lessons/`. Legacy teaching HTML eliminado de `kb/archive/legacy-pages/teaching/`.
