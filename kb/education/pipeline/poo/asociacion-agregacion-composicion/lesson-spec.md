---
track: poo
slug: asociacion-agregacion-composicion
title: "Asociación, Agregación y Composición"
order: 4
prev: herencia
next: abstraccion-clases-abstractas-interfaces
---

## SEO

Contribución de **seo-redirects-expert**. Cuarta lección del track POO; continúa herencia (03) y prepara abstracción con contratos (05).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Asociación, agregación y composición en C# \| POO` | 48 |
| `seoDescription` | `Lección 4 POO: Doctor–Paciente, Biblioteca–Libro y Pedido–LineaPedido; criterios de ciclo de vida para asociación, agregación y composición. Mini-quiz.` | 151 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Association, aggregation & composition in C# \| OOP` | 49 |
| `seoDescription` | `POO Lesson 4: distinguish association, aggregation and composition in C# with Doctor–Patient, Library–Book and Order–LineItem. Lifecycle criteria and design anti-patterns.` | 158 |

### Keywords (track POO)

**Primarias:** asociación agregación composición, relaciones POO C#, ciclo de vida objetos, tiene un vs es un, POO C#.

**Secundarias:** Doctor Paciente, Biblioteca Libro, Pedido LineaPedido, clase Cita, UML agregación composición, List privada, anti-patrones herencia.

**Long-tail:** diferencia agregación y composición C#, asociación vs agregación ejemplo C#, ciclo de vida todo parte POO, cuando usar composición en C#, clase de enlace asociación C#.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `herencia` | Herencia |
| `next` | `abstraccion-clases-abstractas-interfaces` | Abstracción, Clases abstractas e Interfaces |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/poo/asociacion-agregacion-composicion/` |
| EN (fase i18n) | `/en/teaching/poo/asociacion-agregacion-composicion/` |
| Legacy | `/pages/teaching/poo/asociacion-agregacion-composicion.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/poo/` |

### Headings con keywords naturales

| Nivel | Copy publicado (draft) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | Asociación: colaboración sin propiedad | Asociación en C#: colaboración sin propiedad | asociación POO C# |
| H3 | Asociación formalizada: clase de enlace | Clase de enlace (`Cita`) para asociación temporal | asociación clase enlace |
| H2 | Agregación: todo–parte débil | Agregación: todo–parte con ciclo de vida independiente | agregación C# |
| H2 | Composición: todo–parte fuerte | Composición: el todo crea y controla sus partes | composición C# |
| H2 | Comparación y decisión de diseño | Asociación vs agregación vs composición: cómo decidir | criterios ciclo de vida POO |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: biblioteca y tienda en consola | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Asociación, agregación y composición en C# \| POO` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta `;` — Doctor–Paciente, Biblioteca–Libro y Pedido–LineaPedido |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama tres relaciones (Doctor→Paciente, Biblioteca◇Libro, Pedido◆LineaPedido) o captura `CompareTable` |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`asociacion-agregacion-composicion`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Association, aggregation and composition`.
- **Términos sin traducir:** C#, `List<T>`, UML (`-->`, `o--`, `*--`), `Main`, `Agregar`/`Quitar` como nombres de API en snippets.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Relacionar ≠ heredar» → `Relating ≠ inheriting`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

