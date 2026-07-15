---
track: posw
slug: servicios-web
title: "Servicios Web"
order: 1
prev: null
next: formatos-datos
---

## SEO

Contribución de **seo-redirects-expert**. Primera lección del track POSW; sin `prev`; entrada natural desde el hub `/es/teaching/posw/`.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Servicios Web: definición, objetivos y SOLID \| POSW` | 51 |
| `seoDescription` | `Aprende qué es un servicio web, arquitectura cliente-servidor, interoperabilidad, escalabilidad y preview de SOLID en APIs. Lección 1 del track POSW.` | 149 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Web services: definition, goals & SOLID preview \| POSW` | 52 |
| `seoDescription` | `POSW Lesson 1: what a web service is, client-server architecture, interoperability, scalability, and a SOLID preview for APIs.` | 120 |

### Keywords (track POSW)

**Primarias:** servicios web, arquitectura cliente-servidor, interoperabilidad, APIs HTTP, POSW, programación orientada a servicios web.

**Secundarias:** máquina a máquina, escalabilidad independiente, modularidad, SOLID en APIs, cliente delgado, JSON HTTP.

**Long-tail:** qué es un servicio web, diferencia sitio web y servicio web, objetivos servicios web, SOLID aplicado a APIs, arquitectura cliente servicio recurso.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `null` | — (primera lección del track) |
| `next` | `formatos-datos` | Formatos de Datos: XML y JSON |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/servicios-web/` |
| EN (fase i18n) | `/en/teaching/posw/servicios-web/` |
| Legacy | `/pages/teaching/posw/servicios-web.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (draft) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | ¿Qué es un servicio web? | ¿Qué es un servicio web? | servicio web definición |
| H2 | Objetivos de los servicios web | Objetivos de los servicios web | interoperabilidad escalabilidad |
| H2 | Introducción a SOLID en servicios web | SOLID en servicios web: preview para APIs | SOLID APIs |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: servicio de biblioteca universitaria | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Servicios Web: definición, objetivos y SOLID \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta `;` — arquitectura cliente-servidor e interoperabilidad |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama cliente → servicio web → base de datos o captura `CompareTable` sitio vs servicio |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`servicios-web`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Web Services: definition, goals, and SOLID preview`.
- **Términos sin traducir:** HTTP, JSON, SOLID, SRP, OCP, LSP, ISP, DIP, API, REST.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

