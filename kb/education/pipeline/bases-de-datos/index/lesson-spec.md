---
track: bases-de-datos
slug: index
title: "Bases de Datos: orientación al módulo"
order: 1
prev: null
next: clase-01-historia-bases-de-datos
seo_title: "Bases de Datos: hub, objetivos y recorrido"
seo_description: "Hub Bases de Datos: objetivos y resultados oficiales, prerrequisitos y mapa a la Clase 01 (historia). Orientación para universitarios LATAM."
brand_tone: academico-universitario
clay_variants: [card, callout-info, callout-warning, callout-tip, stepper]
showInTrackIndex: true
---

# Lesson spec — Hub Bases de Datos

Merge: brand (`contrib-brand.md`) + clay (`contrib-clay.md`) + seo (`contrib-seo.md`).

## Metadata

- **track:** bases-de-datos
- **slug:** index
- **order:** 1
- **layout:** LessonLayout (hub de track)
- **canonical_path:** `/es/teaching/bases-de-datos/`
- **legacy_redirect:** `teaching/bases-de-datos/index.html` → `/es/teaching/bases-de-datos/`
- **audience:** student only

## Brand

- **title:** Bases de Datos: orientación al módulo
- **tone:** académico universitario, marca Jhon Alejandro Piraquive (Sabio)
- **CTA:** Continuar a la Clase 01 — Historia de las bases de datos
- Objetivos/resultados: texto **literal** del programa (no parafrasear)

### Títulos de sección (copy publicado)

| Sección | Copy |
|---------|------|
| HeroBienvenidaSection | Bienvenida al módulo |
| QueAprenderasSection | Qué aprenderás en este módulo |
| PrerrequisitosSection | Prerrequisitos sugeridos |
| ObjetivosAprendizajeSection | Objetivos de aprendizaje |
| ResultadosAprendizajeSection | Resultados de aprendizaje |
| ComoOrganizadoSection | Cómo está organizado el módulo |
| CasoMotivadorSection | Caso motivador: tienda de barrio |
| PracticaReflexionSection | Práctica: un proceso de tu entorno |
| RetoIntegradorSection | Reto integrador: tres hitos de la Clase 01 |
| CierreHubSection | Cierre: checklist antes de continuar |

### Callouts

| id | Variante | Título |
|----|----------|--------|
| hub-no-tutorial | callout-info | Hub, no tutorial |
| errores-empezar | callout-warning | Errores frecuentes al empezar |
| siguiente-clase | callout-tip | Siguiente paso: Clase 01 |
| conexion-programa | callout-info | Conexión con el programa |
| entregar-reto | callout-tip | Cómo entregar el reto |

## Clay UI

**UX crítico:** objetivos (3) y resultados (7) = `ClayCard` en **rejilla**; una card por ítem; número + `border-l-4 border-[var(--color-accent)]`. Prohibido lista plana.

| Sección | clay_variant | Notas |
|---------|--------------|-------|
| HeroBienvenidaSection | card | Callout info |
| QueAprenderasSection | card | Callout warning |
| PrerrequisitosSection | prose | Tabla |
| ObjetivosAprendizajeSection | card × 3 grid | `grid-cols-1 md:grid-cols-3` |
| ResultadosAprendizajeSection | card × 7 grid | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |
| ComoOrganizadoSection | stepper | Mermaid + StepReveal + Callout tip |
| CasoMotivadorSection | card | Callout info |
| PracticaReflexionSection | card | PracticeExercise |
| RetoIntegradorSection | card | Callout tip |
| CierreHubSection | prose + CTA | |

Tokens: accent `#6B4EFF`, secondary `#00C2FF`, primary `#0A2540`. Profundidad clay máx. 2.

## SEO

- seo_title: Bases de Datos: hub, objetivos y recorrido (42)
- seo_description: Hub Bases de Datos: objetivos y resultados oficiales, prerrequisitos y mapa a la Clase 01 (historia). Orientación para universitarios LATAM. (140)
- prev: null · next: clase-01-historia-bases-de-datos
- hreflang: es primary; x-default es; EN mirror `/en/teaching/bases-de-datos/`
- Distinguir de POSW `posw/bases-de-datos`

## Interactividad

- ClayCard grids (objetivos + resultados)
- MermaidDiagram (mapa recorrido)
- StepReveal (preview recorrido)
- PracticeExercise (reflexión)
- ChallengeCard / reto 3 hitos
- Sin QuizSection

## Nota ADR 013

Si el draft promete mapa/timeline/diagrama, renderizar visual real contiguo (`MermaidDiagram` / `StepReveal`).
