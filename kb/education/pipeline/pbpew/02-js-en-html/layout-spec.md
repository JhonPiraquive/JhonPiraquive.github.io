---
track: pbpew
slug: 02-js-en-html
title: "JavaScript en HTML, Hola mundo y consola"
order: 2
prev: "01-intro-js-y-dom"
next: "03-variables-y-tipos"
---

## JsEnHtmlLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<JavascriptInlineYExternoSection />
<DondePonerElScriptSection />
<HolaMundoConsolaSection />           {/* nuevo */}
<ResumenSection />
<CompruebaTuComprensionSection />     {/* nuevo */}
<RetoIntegradorSection />             {/* nuevo */}
<CierreSection />                     {/* nuevo */}
<MiniquizSection />                   {/* nuevo */}
```

Imports a añadir en `JsEnHtmlLesson.tsx`: `HolaMundoConsolaSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | — | Prose `<ul>` con objetivos medibles del draft L17–23. |
| 2 | JavaScript inline y externo | `sections/JavascriptInlineYExternoSection.tsx` | `Callout`, `CompareTable`, `CodeFiddle` ×3, `Callout`, `PracticeExercise` | Refactorizar stub → draft. H3: Hola mundo inline, JavaScript externo con defer. Migrar `CodeBlock` → `CodeFiddle`. |
| 3 | ¿Dónde poner el `<script>`? | `sections/DondePonerElScriptSection.tsx` | `CompareTable`, `MermaidDiagram`, `CodeFiddle` ×2, `Callout`, `StepReveal`, `MermaidDiagram`, `PracticeExercise`, `CodeChallenge` | clay_variant stepper (lesson-spec). H3: Script al final del body, Comparación defer vs async. |
| 4 | Hola mundo, consola y comentarios | `sections/HolaMundoConsolaSection.tsx` | `Callout`, `CodeFiddle` ×2, `MermaidDiagram`, `PracticeExercise` | **Nuevo.** H3: Consola del navegador, Métodos de consola, Comentarios en JavaScript. |
| 5 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas draft L308–313. Mencionar lección siguiente `03-variables-y-tipos`. |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose draft L319. 3 ejercicios apilados (`my-8` cada uno). |
| 7 | Reto integrador: arregla la página del evento | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado prose + criterios draft L349–376. `CodeFiddle` HTML roto. PracticeExercise textarea larga (`rows={8}`). |
| 8 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Prose: párrafo cierre + ideas clave (4 viñetas draft L397–402) + siguiente paso `03-variables-y-tipos`. Sin quiz inline (patrón SEA / PBPEW 01). |
| 9 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="02-js-en-html" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `02-js-en-html` con 5 preguntas del draft L412–468 (`cierre-quiz`):

| # | Tema |
|---|------|
| 1 | Atributo `src` en `<script>` |
| 2 | Comportamiento de `defer` en `<head>` |
| 3 | Dónde aparece `console.log` |
| 4 | Efecto de 404 en Network para `.js` |
| 5 | Comentario de una línea (`//`) |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts` (ya existe para `01-intro-js-y-dom`).

## Bloques interactivos — props detalladas

> **Regla:** todo bloque `<!-- code: {lang} -->` → `CodeFiddle` con props `code` y `language`. No usar `CodeBlock`.

### `JavascriptInlineYExternoSection`

| id | componente | props |
|----|------------|-------|
| `error-frecuente-link-vs-script` | `Callout` | `title`: «Error frecuente»; children draft L48; variant `callout-warning` |
| `inline-vs-externo` | `CompareTable` | headers + rows draft L52–60 |
| `hola-mundo-inline` | `CodeFiddle` | `language="html"`; code draft L65–79 |
| `defer-head-ejemplo` | `CodeFiddle` | `language="html"`; code draft L86–95 |
| `app-js-defer` | `CodeFiddle` | `language="javascript"`; code draft L98–102 |
| `caso-deploy-subcarpeta` | `Callout` | `title`: «Caso real: deploy en subcarpeta»; children draft L109; variant `callout-info` |
| `preferir-js-externo` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L113–118 |

### `DondePonerElScriptSection`

| id | componente | props |
|----|------------|-------|
| `estrategias-ubicacion-script` | `CompareTable` | headers + rows draft L133–141 |
| `head-defer-body-flow` | `MermaidDiagram` | chart draft L145 |
| `script-final-body` | `CodeFiddle` | `language="html"`; code draft L151–159 |
| `defer-vs-async` | `CodeFiddle` | `language="html"`; code draft L164–171 |
| `caso-landing-head-sin-defer` | `Callout` | `title`: «Caso real: landing corporativa»; children draft L176; variant `callout-info` |
| `flujo-html-hasta-consola` | `StepReveal` | title: «Flujo: desde HTML hasta consola»; steps[5] draft L181–203 |
| `flujo-parse-ejecuta-consola` | `MermaidDiagram` | chart draft L208 |
| `script-final-body-dom` | `PracticeExercise` | draft L212–217 |
| `completa-script-defer` | `CodeChallenge` | template + blanks (`src`, `defer`) draft L220–227 |

### `HolaMundoConsolaSection`

| id | componente | props |
|----|------------|-------|
| `error-console-log-vs-dom` | `Callout` | `title`: «Error frecuente»; children draft L242; variant `callout-warning` |
| `metodos-consola` | `CodeFiddle` | `language="javascript"`; code draft L255–269 |
| `comentarios-js` | `CodeFiddle` | `language="javascript"`; code draft L279–289 |
| `network-404-consola` | `MermaidDiagram` | chart draft L293 |
| `hola-mundo-inline-practica` | `PracticeExercise` | draft L297–302 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-extraer-externo` | `PracticeExercise` | draft L322–327 |
| `comprension-defer-vs-async` | `PracticeExercise` | draft L330–335 |
| `comprension-network-404` | `PracticeExercise` | draft L338–343 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| `reto-html-roto` | `CodeFiddle` | `language="html"`; code draft L354–365 |
| `reto-pagina-evento` | `PracticeExercise` | prompt, 4 hints, keywords draft L379–389 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/HolaMundoConsolaSection.tsx` | `HolaMundoConsolaSection` | `Callout`, `CodeFiddle`, `MermaidDiagram`, `PracticeExercise` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Componentes existentes a refactorizar

| archivo | cambio principal |
|---------|------------------|
| `JavascriptInlineYExternoSection.tsx` | Poblar interactivos; `CodeBlock` → `CodeFiddle` ×3 |
| `DondePonerElScriptSection.tsx` | Poblar interactivos; `CodeBlock` → `CodeFiddle` ×2; quitar contenido hola mundo/consola (mover a `HolaMundoConsolaSection`) |
| `ResumenSection.tsx` | Actualizar copy draft L308–313 |

## Checklist lesson-developer

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] Refactorizar `JavascriptInlineYExternoSection` y `DondePonerElScriptSection` (`CodeFiddle`, interactivos draft)
- [ ] Crear `HolaMundoConsolaSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Registrar quiz `02-js-en-html` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `JsEnHtmlLesson.tsx` con orden y imports
- [ ] Actualizar `lesson-meta.ts` (title/seo desde lesson-spec si difiere)

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `01-intro-js-y-dom` |
| `next` | `03-variables-y-tipos` |
