---
track: pbpew
slug: proyectos/ajedrez
title: "Ajedrez en el navegador"
order: 100
lesson_type: proyecto-integrador
prev: "12-ajax-fetch"
next: null
---

## AjedrezLesson.tsx — orden de secciones (capstone, 13)

```tsx
<ObjetivosSection />
<PrerrequisitosSection />
<ProyectoCapstoneSection />
<DemoTableroSection />
<ModeloMatriz2DSection />
<VistaRenderizadoSection />
<ControladorEventosSection />
<ValidacionMovimientosSection />
<DeshacerPersistenciaSection />
<CasosRealesSection />
<RetosAvanzadosSection />
<RetoIntegradorSection />
<CierreSection />
```

Imports a añadir en `AjedrezLesson.tsx`: las 13 secciones anteriores (hoy solo `ContenidoSection` monolítico).

**Nav:** `prev="12-ajax-fetch"`, `next={null}` — último ítem del track PBPEW. Actualizar `lesson-meta.ts` (hoy `prev`/`next` en `null`).

**Regla código:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (nunca `CodeBlock`).

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | — | **Nuevo.** 6 objetivos medibles (draft L34–41). Sin prerrequisitos aquí (sección aparte en capstone). |
| 2 | Prerrequisitos | `sections/PrerrequisitosSection.tsx` | — | **Nuevo.** Lista enlazada lecciones 01–12 + proyectos hermanos (draft L45–54). |
| 3 | Proyecto capstone: integrar todo el track | `sections/ProyectoCapstoneSection.tsx` | `MermaidDiagram`, `Callout` | **Nuevo.** Prose progresión 6 pasos (draft L58–64), diagrama MVC, callout convención fila/col. `clay_variant`: card. |
| 4 | Demo: tablero interactivo | `sections/DemoTableroSection.tsx` | `ChessBoardDemo` | **Nuevo.** Hero demo; único bloque `my-10`. Ver § ChessBoardDemo. |
| 5 | Modelo: tablero como matriz 2D | `sections/ModeloMatriz2DSection.tsx` | `CompareTable`, `MermaidDiagram`, `CodeFiddle`, `CodeChallenge`, `PracticeExercise` | **Nuevo.** Sección más densa del bloque «datos». |
| 6 | Vista: renderizado en el DOM | `sections/VistaRenderizadoSection.tsx` | `CodeFiddle` ×3, `Callout`, `PracticeExercise` | **Nuevo.** HTML + CSS + JS render. CSS: `--color-accent` en `.seleccionada` (no `#3b82f6` del draft). |
| 7 | Controlador: eventos y flujo de dos clics | `sections/ControladorEventosSection.tsx` | `StepReveal`, `MermaidDiagram`, `CodeFiddle`, `PracticeExercise`, `CodeChallenge` | **Nuevo.** `clay_variant`: stepper en `StepReveal`. |
| 8 | Validación de movimientos | `sections/ValidacionMovimientosSection.tsx` | `CodeFiddle`, `CodeChallenge`, `Callout` | **Nuevo.** MVP rey/peón; callout progresión incremental. |
| 9 | Deshacer y persistencia | `sections/DeshacerPersistenciaSection.tsx` | `StepReveal`, `MermaidDiagram`, `CodeFiddle`, `PracticeExercise` | **Nuevo.** Pila LIFO + localStorage. `clay_variant`: stepper. |
| 10 | Casos reales | `sections/CasosRealesSection.tsx` | — | **Nuevo.** H3 ×2 (coordenadas invertidas, JSON corrupto). Superficie `callout-info` única; sin card anidada. |
| 11 | Retos avanzados (Nivel C) | `sections/RetosAvanzadosSection.tsx` | `CompareTable`, `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Lista 11–15, chess.js vs manual. |
| 12 | Reto integrador | `sections/RetoIntegradorSection.tsx` | prose `<table>`, `CodeFiddle`, `PracticeExercise` | **Nuevo.** Niveles A/B/C, tabla integración curricular, esqueleto HTML MVC. |
| 13 | Cierre | `sections/CierreSection.tsx` | `QuizSection` | **Nuevo.** Ideas clave + siguiente paso + mini-quiz. `QuizSection slug="proyectos/ajedrez" track="pbpew"`. H2 cierre; H2 «Mini-quiz» antes del quiz. |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `proyectos/ajedrez` con 5 preguntas del draft L670–728:

| # | Tema |
|---|------|
| 1 | Fuente de verdad: matriz 2D `tablero[fila][col]` |
| 2 | Delegación: un listener en contenedor padre |
| 3 | Convención fila/col — peón que va al revés |
| 4 | Deshacer: pila LIFO (lección 9) |
| 5 | Persistencia: `JSON.stringify` de tablero + turno |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## ChessBoardDemo — componente nuevo (escalar a lesson-developer)

| campo | valor |
|-------|-------|
| archivo | `src/components/teaching/ChessBoardDemo.tsx` |
| export | `ChessBoardDemo` |
| client | `"use client"` |

### Props tipadas

```ts
export type ChessBoardDemoProps = {
  title?: string;
  rules?: "minimal" | "full";
  pieces?: Array<"K" | "Q" | "R" | "B" | "N" | "P">;
  showToolbar?: boolean;
  toolbarActions?: Array<"nueva" | "deshacer" | "guardar" | "cargar">;
  highlightSelection?: boolean;
  promotePawnToQueen?: boolean;
};
```

### Valores desde draft (L83–92)

| prop | valor |
|------|-------|
| `title` | `"Tablero de ajedrez — demo PBPEW"` |
| `rules` | `"minimal"` |
| `pieces` | `["K", "P"]` |
| `showToolbar` | `true` |
| `toolbarActions` | `["nueva", "deshacer", "guardar", "cargar"]` |
| `highlightSelection` | `true` |
| `promotePawnToQueen` | `true` |

### Comportamiento mínimo

- Matriz 8×8 interna; `tablero[fila][col]` fuente de verdad.
- Render CSS Grid; símbolos Unicode; casillas `#f0d9b5` / `#b58863`.
- Flujo dos clics: seleccionar pieza propia → mover si legal (rey + peón en `rules="minimal"`).
- Alternar turno; promoción peón→dama en última fila.
- Toolbar: nueva partida, deshacer (pila), guardar/cargar `localStorage` clave `pbpew-ajedrez-partida`.
- `.seleccionada` con `outline` / fondo `--color-accent`; sin estética gaming (ADR 003).
- Contenedor: `ClayCard` `my-10 p-6`; tablero `mx-auto`.

## Bloques interactivos — props detalladas

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Objetivos de aprendizaje» |
| Párrafo intro | «Al finalizar este proyecto integrador, el estudiante podrá:» (draft L34) |
| Lista | 6 objetivos draft L36–41 |

### `PrerrequisitosSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Prerrequisitos» |
| Lista | enlaces lecciones 01–12 + proyectos hermanos (draft L45–54); nota capstone más exigente |

### `ProyectoCapstoneSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Proyecto capstone: integrar todo el track» |
| Intro capstone | prose | síntesis track + progresión 1→6 (draft L58–64) |
| `arquitectura-mvc-ajedrez` | `MermaidDiagram` | chart draft L67–68 |
| `convencion-pbpew-fila-col` | `Callout` | `variant="callout-info"`; title: «Convención PBPEW»; children draft L74 |

### `DemoTableroSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Demo: tablero interactivo» |
| Intro demo | prose | probar tablero antes del detalle (draft L81) |
| `demo-tablero-ajedrez` | `ChessBoardDemo` | props § ChessBoardDemo |

### `ModeloMatriz2DSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Modelo: tablero como matriz 2D» |
| Intro modelo | prose | códigos pieza, fuente de verdad (draft L96–100) |
| `comparativa-2d-vs-plano` | `CompareTable` | headers, rows draft L103–110 |
| `diagrama-filas-columnas` | `MermaidDiagram` | chart draft L115 |
| `posicion-inicial-js` | `CodeFiddle` | `language="javascript"`; code draft L119–151 |
| Coordenadas vs algebraicas | prose | párrafo post-code (draft L153) |
| `challenge-reyes-matriz` | `CodeChallenge` | title: «Coloca los reyes en la matriz»; template, blanks draft L157–162 |
| `practice-fuente-verdad` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L167–170 |

### `VistaRenderizadoSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Vista: renderizado en el DOM» |
| Intro vista | prose | CSS Grid, data-fila/col, Unicode (draft L177) |
| `vista-html` | `CodeFiddle` | `language="html"`; code draft L180–189 |
| `vista-css` | `CodeFiddle` | `language="css"`; code draft L192–210; reemplazar `#3b82f6` por `var(--color-accent)` |
| `vista-js-render` | `CodeFiddle` | `language="javascript"`; code draft L213–237 |
| `error-frecuente-innerhtml` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L242 |
| `practice-funcion-simbolo` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L247–250 |

### `ControladorEventosSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Controlador: eventos y flujo de dos clics» |
| Intro delegación | prose | un listener, flujo 1–2–3 (draft L257–263) |
| `step-reveal-dos-clics` | `StepReveal` | title: «Flujo de dos clics»; steps[5] draft L268–274 |
| `secuencia-dos-clics` | `MermaidDiagram` | chart draft L279 |
| `controlador-js` | `CodeFiddle` | `language="javascript"`; code draft L283–324 |
| `practice-flujo-dos-clics` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L328–331 |
| `challenge-alternar-turno` | `CodeChallenge` | title: «Completa el alternado de turno»; template, blanks draft L337–341 |

### `ValidacionMovimientosSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Validación de movimientos» |
| Intro validación | prose | funciones puras, MVP rey/peón (draft L346–350) |
| `validacion-js` | `CodeFiddle` | `language="javascript"`; code draft L353–396 |
| `challenge-validacion-rey` | `CodeChallenge` | title: «Validación del rey»; template, blanks draft L401–405 |
| `callout-progresion-incremental` | `Callout` | `variant="callout-warning"`; title: «No implementes todo de golpe»; children draft L411 |

### `DeshacerPersistenciaSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Deshacer y persistencia» |
| Intro pila + storage | prose | LIFO, JSON versionado (draft L416–420) |
| `step-reveal-pila-deshacer` | `StepReveal` | title: «Pila deshacer (LIFO)»; steps[4] draft L425–430 |
| `diagrama-pila-deshacer` | `MermaidDiagram` | chart draft L435 |
| `persistencia-js` | `CodeFiddle` | `language="javascript"`; code draft L439–476 |
| `practice-deshacer-pila` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L480–483 |

### `CasosRealesSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Casos reales» |
| H3 | «Bug de coordenadas invertidas» — prose draft L490–492; decisión en callout-info inline |
| H3 | «Partida corrupta en localStorage» — prose draft L494–496 |
| Contenedor | superficie `callout-info` `rounded-xl p-6 my-8`; máx. 1 nivel clay |

### `RetosAvanzadosSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Retos avanzados (Nivel C)» |
| Intro nivel C | prose | elegir tras MVP A y B (draft L500–502) |
| `comparativa-manual-chessjs` | `CompareTable` | headers, rows draft L505–512 |
| Lista 11–15 | prose `<ol>` | reglas ampliadas, jaque, chess.js, UX, clases (draft L515–533) |
| `chessjs-ejemplo` | `CodeFiddle` | `language="javascript"`; code draft L522–529 |
| `clase-pieza-ejemplo` | `CodeFiddle` | `language="javascript"`; code draft L536–552 |
| `practice-cuando-chessjs` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L556–559 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Reto integrador» |
| Subtítulo | prose | «Ajedrez en el navegador» — capstone PBPEW (tres niveles) (draft L566) |
| H3 | — | «Nivel A — Demo obligatoria» — lista 1–6 (draft L568–575) |
| H3 | — | «Nivel B — Persistencia e historial» — lista 7–10 (draft L577–582) |
| H3 | — | «Nivel C — Desafío profundo» — lista 11–15 (draft L584–590) |
| Criterios éxito | prose | mínimo Nivel A + excelencia Nivel B + C (draft L592–594) |
| Tabla integración | prose `<table>` | lección → aplicación (draft L598–608); filas alternas `neutral-light` |
| `esqueleto-html-capstone` | `CodeFiddle` | `language="html"`; code draft L611–635 |
| `reto-capstone-nivel-a` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L639–647; `rows={10}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Cierre» |
| Párrafo cierre | draft L654 |
| Ideas clave | `<ul>` 5 viñetas draft L658–662 |
| Siguiente paso | proyectos hermanos (draft L664) |
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="proyectos/ajedrez" track="pbpew" />` |

## CodeFiddle — inventario (10 bloques)

| id | sección | language | draft líneas |
|----|---------|----------|--------------|
| `posicion-inicial-js` | Modelo | javascript | L119–151 |
| `vista-html` | Vista | html | L180–189 |
| `vista-css` | Vista | css | L192–210 |
| `vista-js-render` | Vista | javascript | L213–237 |
| `controlador-js` | Controlador | javascript | L283–324 |
| `validacion-js` | Validación | javascript | L353–396 |
| `persistencia-js` | Deshacer | javascript | L439–476 |
| `chessjs-ejemplo` | Retos avanzados | javascript | L522–529 |
| `clase-pieza-ejemplo` | Retos avanzados | javascript | L536–552 |
| `esqueleto-html-capstone` | Reto integrador | html | L611–635 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias principales |
|---------|--------|--------------------------|
| `src/components/teaching/ChessBoardDemo.tsx` | `ChessBoardDemo` | estado matriz 2D, CSS Grid, toolbar, localStorage — **componente interactivo nuevo** |
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/PrerrequisitosSection.tsx` | `PrerrequisitosSection` | prose + enlaces track |
| `sections/ProyectoCapstoneSection.tsx` | `ProyectoCapstoneSection` | `MermaidDiagram`, `Callout` |
| `sections/DemoTableroSection.tsx` | `DemoTableroSection` | `ChessBoardDemo` |
| `sections/ModeloMatriz2DSection.tsx` | `ModeloMatriz2DSection` | `CompareTable`, `MermaidDiagram`, `CodeFiddle`, `CodeChallenge`, `PracticeExercise` |
| `sections/VistaRenderizadoSection.tsx` | `VistaRenderizadoSection` | `CodeFiddle` ×3, `Callout`, `PracticeExercise` |
| `sections/ControladorEventosSection.tsx` | `ControladorEventosSection` | `StepReveal`, `MermaidDiagram`, `CodeFiddle`, `PracticeExercise`, `CodeChallenge` |
| `sections/ValidacionMovimientosSection.tsx` | `ValidacionMovimientosSection` | `CodeFiddle`, `CodeChallenge`, `Callout` |
| `sections/DeshacerPersistenciaSection.tsx` | `DeshacerPersistenciaSection` | `StepReveal`, `MermaidDiagram`, `CodeFiddle`, `PracticeExercise` |
| `sections/CasosRealesSection.tsx` | `CasosRealesSection` | prose H3 ×2 |
| `sections/RetosAvanzadosSection.tsx` | `RetosAvanzadosSection` | `CompareTable`, `CodeFiddle` ×2, `PracticeExercise` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise`, tabla prose |
| `sections/CierreSection.tsx` | `CierreSection` | `QuizSection` |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `sections/ContenidoSection.tsx` | **Eliminar** tras migrar a 13 secciones |
| `AjedrezLesson.tsx` | Orden 13 secciones + imports |
| `lesson-meta.ts` | `prev: "12-ajax-fetch"`, `next: null`; SEO desde lesson-spec |

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `12-ajax-fetch` |
| `next` | `null` |

## Checklist lesson-developer

- [ ] Implementar `ChessBoardDemo` (props § ChessBoardDemo; `--color-accent` selección)
- [ ] Refactorizar `ContenidoSection` monolítico → 13 secciones del mapa
- [ ] Migrar 10 bloques código → `CodeFiddle` (nunca `CodeBlock`)
- [ ] H2 según lesson-spec § Jerarquía tipográfica
- [ ] H3: «Bug de coordenadas invertidas», «Partida corrupta en localStorage», «Nivel A/B/C»
- [ ] Callout variants: info (convención PBPEW, casos reales); warning (innerHTML, progresión incremental)
- [ ] Registrar quiz `proyectos/ajedrez` en `teaching-quizzes/pbpew.ts` (5 preguntas)
- [ ] Actualizar `AjedrezLesson.tsx` con orden e imports (13 secciones)
- [ ] Actualizar `lesson-meta.ts` nav `prev`/`next`
- [ ] Pedagogía mínima capstone: 7 `PracticeExercise`, 4 `CodeChallenge`, 5 `MermaidDiagram`, 2 `StepReveal`, 3 `CompareTable`, 1 `ChessBoardDemo`, 5 preguntas quiz ✓
