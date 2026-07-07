---
track: pbpew
slug: 10-dom-y-eventos
title: "Manipulación del DOM y eventos"
order: 10
prev: "09-estructuras-de-datos"
next: "11-asincronia"
---

## DomYEventosLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<IntroduccionDomMutableSection />
<SeleccionarNodosSection />
<ModificarDomSection />
<EventosSection />
<DemoMiniEnLaSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizSection />
```

Imports a añadir en `DomYEventosLesson.tsx`: todas las secciones anteriores (hoy solo `SeleccionarNodosSection`, `DemoMiniEnLaSection`, `ResumenSection`).

Prerrequisitos (draft L35–42) van **dentro** de `ObjetivosSection` tras la lista de objetivos — sin sección aparte (convención PBPEW 09).

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | — | **Nuevo.** 6 objetivos medibles (draft L26–33) + prerrequisitos enlazados (draft L35–42). |
| 2 | Introducción: DOM mutable | `sections/IntroduccionDomMutableSection.tsx` | `MermaidDiagram` | **Nuevo.** Prose puente lecciones 1/6/9 (draft L46–50) + diagrama flujo-dom-mutable. |
| 3 | Seleccionar nodos del DOM | `sections/SeleccionarNodosSection.tsx` | prose + tabla API, `Callout`, `CodeFiddle`, `CodeChallenge`, `PracticeExercise` | **Reemplazar stub.** Migrar `CodeBlock` → `CodeFiddle`. H2 SEO según lesson-spec. |
| 4 | Modificar el DOM | `sections/ModificarDomSection.tsx` | H3 ×3, `CompareTable`, `CodeFiddle` ×4, `Callout`, `PracticeExercise`, `CodeChallenge` | **Nuevo.** Sección más densa del bloque mutación (draft L107–194). |
| 5 | Eventos en JavaScript | `sections/EventosSection.tsx` | `CompareTable`, prose + tabla evento, `MermaidDiagram` ×2, `CodeFiddle` ×3, `CodeChallenge`, H3 ×3, `StepReveal`, `Callout`, `PracticeExercise` ×2 | **Nuevo.** clay_variant stepper en `StepReveal` delegación (lesson-spec). |
| 6 | Demo: contador de clics en la página | `sections/DemoMiniEnLaSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Refactorizar.** Separar HTML + JS; quitar stub monolítico. |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Reemplazar stub.** 9 viñetas + preview lección 11 (draft L379–389). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L395). |
| 9 | Reto integrador: lista de tareas en la página | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Enunciado + 6 tareas + criterio éxito (draft L423–484). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Párrafo cierre + ideas clave (5 viñetas) + siguiente paso `11-asincronia` (draft L488–500). Sin quiz inline. |
| 11 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="10-dom-y-eventos" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `10-dom-y-eventos` con 5 preguntas del draft L508–564:

| # | Tema |
|---|------|
| 1 | `querySelector` sin coincidencias → `null` |
| 2 | `addEventListener` vs `onclick` en HTML |
| 3 | `event.preventDefault()` en submit |
| 4 | `textContent` frente a `innerHTML` con usuario |
| 5 | Delegación: listener en `<ul>` + `target` / `closest` |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Objetivos de aprendizaje» |
| Párrafo intro | «Al finalizar la lección, el estudiante podrá:» (draft L26) |
| Lista | 6 objetivos draft L28–33 |
| H2 o H3 prerrequisitos | «Prerrequisitos» (draft L35) |
| Lista prerrequisitos | enlaces a slugs 01–09 (draft L37–42) |

### `IntroduccionDomMutableSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Introducción: DOM mutable» |
| Intro DOM mutable | prose | árbol en memoria, APIs concretas, FIFO lección 9, callbacks lección 6 (draft L46–50) |
| `flujo-dom-mutable` | `MermaidDiagram` | chart draft L53–54 |

### `SeleccionarNodosSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Seleccionar nodos del DOM» |
| Intro selección | prose | `querySelector` / `querySelectorAll` preferidos PBPEW (draft L59–61) |
| Tabla APIs | prose `<table>` | querySelector, querySelectorAll, getElementById, getElementsByClassName (draft L63–68) |
| `error-frecuente-queryselector-null` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L72–73 |
| `selectores-ejemplo` | `CodeFiddle` | `language="javascript"`; code draft L77–85 |
| `completa-selector` | `CodeChallenge` | title: «Completa el selector»; template, blanks draft L88–94 |
| `seleccionar-titulo-textcontent` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L98–102 |

### `ModificarDomSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Modificar el DOM» |
| Intro modificar | prose | leer, escribir, estilos, crear/eliminar (draft L107–109) |
| Contenido (H3) | `<h3>` | «Contenido: textContent frente a innerHTML» (draft L111) |
| Bullets textContent/innerHTML | prose `<ul>` | seguro vs XSS (draft L111–114) |
| `textcontent-vs-innerhtml` | `CompareTable` | headers, rows draft L117–124 |
| `mensaje-textcontent-innerhtml` | `CodeFiddle` | `language="javascript"`; code draft L128–137 |
| Estilos y clases (H3) | `<h3>` | «Estilos y clases» (draft L139) |
| Bullets style/classList | prose `<ul>` | .add, .remove, .toggle, .contains (draft L139–142) |
| `tarjeta-style-classlist` | `CodeFiddle` | `language="javascript"`; code draft L145–152 |
| Crear y eliminar (H3) | `<h3>` | «Crear y eliminar nodos» (draft L154) |
| Bullets create/append/remove | prose `<ul>` | createElement, appendChild, remove (draft L154–158) |
| `lista-create-append` | `CodeFiddle` | `language="javascript"`; code draft L161–169 |
| `caso-formulario-preventdefault` | `Callout` | `variant="callout-info"`; title: «Caso real: formulario que recarga y pierde datos»; children draft L173–174 |
| `textcontent-seguro-usuario` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L178–182 |
| `creacion-item-lista` | `CodeChallenge` | title: «Completa la creación de un ítem»; template, blanks draft L187–193 |

### `EventosSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Eventos en JavaScript» |
| Intro eventos | prose | click, input, keydown, submit; patrón addEventListener (draft L198–200) |
| `onclick-vs-addeventlistener` | `CompareTable` | headers, rows draft L203–209 |
| Objeto evento (H3) | `<h3>` | «Objeto evento» (draft L212) |
| Tabla propiedades | prose `<table>` | type, target, currentTarget, key, preventDefault (draft L214–222) |
| `flujo-evento-fifo-sequence` | `MermaidDiagram` | chart draft L225–226 |
| `btn-click-keydown` | `CodeFiddle` | `language="javascript"`; code draft L230–243 |
| preventDefault (H3) | `<h3>` | «preventDefault en formularios» (draft L245) |
| Intro submit | prose | form recarga sin interceptar (draft L245–247) |
| `form-preventdefault` | `CodeFiddle` | `language="javascript"`; code draft L250–259 |
| `completa-preventdefault` | `CodeChallenge` | title: «Completa preventDefault»; template, blanks draft L262–267 |
| Delegación (H3) | `<h3>` | «Delegación de eventos» (draft L270) |
| Intro delegación | prose | ancestro común, target, closest, hijos dinámicos (draft L270–272) |
| `delegacion-lista-pasos` | `StepReveal` | title: «Delegación en lista — paso a paso»; steps[4] draft L276–294 |
| `delegacion-muchos-vs-uno` | `MermaidDiagram` | chart draft L298–299 |
| `lista-delegacion-remove` | `CodeFiddle` | `language="javascript"`; code draft L303–313 |
| `caso-panel-admin-200-filas` | `Callout` | `variant="callout-info"`; title: «Caso real: panel admin con 200 filas»; children draft L317–318 |
| `target-vs-currenttarget` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L322–326 |
| `orden-flujo-evento` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L330–334 |

### `DemoMiniEnLaSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Demo: contador de clics en la página» |
| Intro demo | prose | ciclo seleccionar → escuchar → actualizar (draft L339–341) |
| `demo-html-contador` | `CodeFiddle` | `language="html"`; code draft L346–349 |
| `demo-js-contador` | `CodeFiddle` | `language="javascript"`; code draft L354–363 |
| `demo-contador-clics` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L366–374 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Resumen» |
| Viñetas | 9 puntos draft L381–389 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Comprueba tu comprensión» |
| Intro | prose | draft L395 |
| `comprension-toggle-classlist` | `PracticeExercise` | draft L397–403 |
| `comprension-keydown-escape` | `PracticeExercise` | draft L405–411 |
| `comprension-script-head-dom` | `PracticeExercise` | draft L413–419 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Reto integrador: lista de tareas en la página» |
| Enunciado | prose + lista `<ol>` 6 tareas + criterio éxito | draft L425–436 |
| `reto-html-lista-tareas` | `CodeFiddle` | `language="html"`; code draft L439–444 |
| `reto-esqueleto-lista-tareas` | `CodeFiddle` | `language="javascript"`; `title`: «Esqueleto de partida — completa las funciones»; code draft L447–471 |
| `reto-lista-tareas` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L474–483; `rows={8}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Cierre de la lección» |
| Párrafo cierre | draft L488–490 |
| Ideas clave | `<ul>` 5 viñetas draft L492–498 |
| Siguiente paso | enlace textual `11-asincronia` draft L500 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="10-dom-y-eventos" track="pbpew" />` |

## CodeFiddle — inventario (11 bloques)

| id | sección | language | draft líneas |
|----|---------|----------|--------------|
| `selectores-ejemplo` | Seleccionar | javascript | L77–85 |
| `mensaje-textcontent-innerhtml` | Modificar | javascript | L128–137 |
| `tarjeta-style-classlist` | Modificar | javascript | L145–152 |
| `lista-create-append` | Modificar | javascript | L161–169 |
| `btn-click-keydown` | Eventos | javascript | L230–243 |
| `form-preventdefault` | Eventos | javascript | L250–259 |
| `lista-delegacion-remove` | Eventos | javascript | L303–313 |
| `demo-html-contador` | Demo | html | L346–349 |
| `demo-js-contador` | Demo | javascript | L354–363 |
| `reto-html-lista-tareas` | Reto | html | L439–444 |
| `reto-esqueleto-lista-tareas` | Reto | javascript | L447–471 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias principales |
|---------|--------|--------------------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/IntroduccionDomMutableSection.tsx` | `IntroduccionDomMutableSection` | `MermaidDiagram` |
| `sections/ModificarDomSection.tsx` | `ModificarDomSection` | `CompareTable`, `CodeFiddle` ×4, `Callout`, `PracticeExercise`, `CodeChallenge` |
| `sections/EventosSection.tsx` | `EventosSection` | `CompareTable`, `MermaidDiagram` ×2, `CodeFiddle` ×3, `CodeChallenge`, `StepReveal`, `Callout`, `PracticeExercise` ×2 |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle` ×2, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `SeleccionarNodosSection.tsx` | Reemplazar stub: tabla APIs, callout null, `CodeFiddle`, `CodeChallenge`, `PracticeExercise` |
| `DemoMiniEnLaSection.tsx` | Refactorizar: HTML + JS `CodeFiddle` separados + `PracticeExercise` |
| `ResumenSection.tsx` | Expandir a 9 viñetas draft L381–389 |
| `DomYEventosLesson.tsx` | Orden 11 secciones + imports |
| `lesson-meta.ts` | `title` / `seoTitle` / `seoDescription` desde lesson-spec § Brand y SEO |

## Checklist lesson-developer

- [ ] H2 SEO: «Seleccionar nodos del DOM», «Modificar el DOM», «Eventos en JavaScript», «Demo: contador de clics en la página»
- [ ] H3: «Contenido: textContent frente a innerHTML», «Estilos y clases», «Crear y eliminar nodos», «Objeto evento», «preventDefault en formularios», «Delegación de eventos»
- [ ] Migrar 11 bloques código → `CodeFiddle` (nunca `CodeBlock`)
- [ ] Crear 8 secciones nuevas listadas arriba
- [ ] Repoblar `SeleccionarNodosSection`, `DemoMiniEnLaSection`, `ResumenSection`
- [ ] Registrar quiz `10-dom-y-eventos` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `DomYEventosLesson.tsx` con orden y imports (11 secciones)
- [ ] Callout variants: warning (querySelector null), info (formulario, panel admin)
- [ ] Pedagogía mínima: 10+ `PracticeExercise`/`CodeChallenge`, 4 `MermaidDiagram`, 1 `StepReveal`, 5 preguntas quiz ✓

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `09-estructuras-de-datos` |
| `next` | `11-asincronia` |
