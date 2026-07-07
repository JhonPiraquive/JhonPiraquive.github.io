# ADR 001: Stack Next.js + MDX

## Estado
Aceptado

## Contexto
Sitio estático en GitHub Pages (67 HTML). Necesidad de marca unificada, i18n sin duplicar HTML, y contenido docente mantenible.

## Decisión
- **Next.js 15** App Router con `output: 'export'`
- **MDX** para lecciones (`@next/mdx`)
- **next-intl** para ES/EN
- Deploy vía GitHub Actions → carpeta `out/`

## Consecuencias
- Build step obligatorio antes de publicar
- `images.unoptimized: true` para export estático
- Rutas: `/es`, `/en`, `/es/teaching/...`
