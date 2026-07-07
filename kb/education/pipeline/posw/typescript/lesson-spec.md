---
track: posw
slug: typescript
title: "TypeScript"
order: 13
prev: rest-principios
next: angular
---

## SEO

Contribución de **seo-redirects-expert**. Lección 13 del track POSW; abre el bloque frontend tipado (`rest-principios` → `angular` → `react`).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `TypeScript: Tipos, Interfaces y Genéricos \| POSW` | 48 |
| `seoDescription` | `Aprende TypeScript como superset de JavaScript: sistema de tipos, interfaces, genéricos, tsconfig strict y tipado de APIs REST. Lección 13 del track POSW.` | 154 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `TypeScript: types, interfaces & generics \| POSW` | 47 |
| `seoDescription` | `POSW Lesson 13: TypeScript as a typed JS superset — type system, interfaces, generics, strict tsconfig and REST API typing.` | 121 |

### Keywords (track POSW)

**Primarias:** TypeScript, tipos estáticos, interfaces, genéricos, tsconfig, POSW, JavaScript.

**Secundarias:** tsc, strict mode, union types, type alias, enum, unknown vs any, tipado API REST.

**Long-tail:** qué es TypeScript, TypeScript vs JavaScript errores compilación, interface para respuesta API, tsconfig strict true, genéricos reutilizables TypeScript.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `rest-principios` | Principios REST |
| `next` | `angular` | Angular |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/typescript/` |
| EN (fase i18n) | `/en/teaching/posw/typescript/` |
| Legacy | `/pages/teaching/posw/typescript.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (draft) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | ¿Qué es TypeScript? | ¿Qué es TypeScript? Superset tipado de JavaScript | TypeScript definición |
| H2 | ¿Por qué TypeScript? | ¿Por qué TypeScript? Errores en compilación vs runtime | TypeScript vs JavaScript |
| H2 | Sistema de tipos | Sistema de tipos en TypeScript | tipos primitivos uniones |
| H2 | Interfaces, types y enums | Interfaces, type aliases y enums | interface API REST |
| H2 | Genéricos | Genéricos reutilizables en TypeScript | genéricos TypeScript |
| H2 | Configuración tsconfig.json | Configuración tsconfig.json en modo strict | tsconfig strict |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: tipa cliente API REST de pedidos | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `TypeScript: Tipos, Interfaces y Genéricos \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «genéricos» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama flujo tsc → JavaScript o tabla JS vs TS |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`typescript`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `TypeScript: types, interfaces, and generics`.
- **Términos sin traducir:** TypeScript, JavaScript, tsc, tsconfig, interface, type alias, enum, generic, API, REST, JSON.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
