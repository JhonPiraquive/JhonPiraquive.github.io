---
track: bases-de-datos
slug: clase-01-historia-bases-de-datos
title: "Historia de las bases de datos: de los archivos planos a la convergencia"
order: 2
prev: index
next: null
seo_title: "Historia de las bases de datos: Codd, SQL y NoSQL"
seo_description: "Historia de las bases de datos en 7 etapas: archivos planos, Codd, SQL, NoSQL y cloud. Aprende a elegir modelo con criterio, no por moda."
brand_tone: academico-universitario
clay_variants: [card, callout-warning, callout-info, stepper]
showInTrackIndex: true
---

# Lesson spec — Historia de las Bases de Datos

Merge: brand (`contrib-brand.md`) + clay (`contrib-clay.md`) + seo (`contrib-seo.md`).

## Metadata

- **track:** bases-de-datos
- **slug:** clase-01-historia-bases-de-datos
- **order:** 2
- **layout:** LessonLayout
- **canonical_path:** `/es/teaching/bases-de-datos/clase-01-historia-bases-de-datos/`
- **legacy_redirect:** `teaching/bases-de-datos/clase-01-historia-bases-de-datos.html` → canonical
- **audience:** student only
- **pagination:** evaluar en layout (clase larga ~7 etapas); si >8 secciones o ~>20 min → ADR 011 hub+páginas

## Brand

- **title:** Historia de las bases de datos: de los archivos planos a la convergencia
- **tone:** académico-universitario (Sabio + Creador docente)
- **prev:** index · **next:** null

### Títulos de sección

| # | Título |
|---|--------|
| 0 | Por qué la historia importa hoy |
| 1 | Archivos planos: el problema raíz |
| 2 | Navegación por punteros: jerárquico y red |
| 3 | Codd 1970: el modelo relacional |
| 4 | De la teoría al producto: System R, INGRES y Oracle |
| 5 | El imperio relacional y el puente ER |
| 6 | NoSQL web-scale: escala y flexibilidad |
| 7 | Hoy: NewSQL, cloud y convergencia |
| — | Comparación de modelos |
| — | Práctica guiada |
| — | Miniquiz |
| — | Reto integrador: AndinaMarket |

### Callouts

1. El museo vive en la PYME — warning
2. Independencia de datos, en una frase — info
3. Moda no es arquitectura — (usar en NoSQL/hoy)
4. Malas prácticas transversales — warning

## Clay UI

| Orden | Sección | clay_variant | Interactivos |
|-------|---------|--------------|--------------|
| 1 | Objetivos | prose | — |
| 2 | Intro / por qué importa | stepper | **MermaidDiagram timeline** (ADR 013 hero) + StepReveal |
| 3–9 | Etapas 1–7 | card | CodeFiddle / CompareTable / Mermaid según etapa |
| 10 | Comparación modelos | card | CompareTable paisaje |
| 11 | Errores comunes | prose | — |
| 12 | Casos reales | card | Callout warning |
| 13 | Práctica | card | PracticeExercise ×5 |
| 14 | Reto | card | ChallengeCard |
| 15 | Cierre | card | — |
| 16 | Miniquiz | card | QuizSection ×5 |

**CodeFiddle (obligatorio, no CodeBlock):** sql-join-cali, sql-join-medellin, sql-schema-agregacion, json-documento-cliente.

**Timeline:** `historia-bd-timeline` tipo `timeline` — visual obligatorio ADR 013; no sustituir por lista.

## SEO

- seo_title: Historia de las bases de datos: Codd, SQL y NoSQL (49)
- seo_description: Historia de las bases de datos en 7 etapas: archivos planos, Codd, SQL, NoSQL y cloud. Aprende a elegir modelo con criterio, no por moda. (137)
- prev: index · next: null
- hreflang: es primary; slug idéntico EN; x-default es
- Distinguir de POSW `/es/teaching/posw/bases-de-datos/`

## Interactividad

- MermaidDiagram ×3 (timeline, erDiagram, mindmap)
- CompareTable ×2
- StepReveal ×1
- PracticeExercise ×5
- QuizSection ×1 (5 preguntas)
- ChallengeCard ×1
- CodeFiddle ×4
- Callout ×3+

## Nota ADR 011 (paginación)

Clase con 7 etapas + práctica/quiz/reto: layout-expert debe evaluar hub+páginas (3–5) si supera umbral. Documentar en `layout-spec.md` → `## Páginas` si aplica. Quiz por clase (no por página). `showInTrackIndex: true` solo en hub de clase.

## Nota ADR 013

Timeline Mermaid obligatorio contiguo al H que promete línea de tiempo.
