---
track: pbpew
slug: 12-ajax-fetch
title: "AJAX y la API fetch"
order: 12
prev: "11-asincronia"
next: null
---

## AjaxFetchLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<QueEsAjaxSection />
<XmlhttprequestLegadoSection />
<DemoEnVivoApiSection />
<ResumenSection />
<CompruebaTuComprensionSection />           {/* nuevo */}
<RetoIntegradorSection />                   {/* nuevo */}
<CierreSection />                           {/* nuevo */}
<MiniquizSection />                         {/* nuevo */}
```

Imports a añadir en `AjaxFetchLesson.tsx`: `ObjetivosSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | — | **Nuevo.** Prose intro + `<ul>` 6 objetivos medibles + prerrequisitos (draft L27–44). |
| 2 | ¿Qué es AJAX? | `sections/QueEsAjaxSection.tsx` | `MermaidDiagram`, `Callout`, `PracticeExercise` | Poblar stub. Patrón AJAX, petición HTTP, secuencia usuario→API→DOM (draft L48–78). |
| 3 | XMLHttpRequest (legado) y fetch moderno | `sections/XmlhttprequestLegadoSection.tsx` | `CodeFiddle` ×6, `CompareTable` ×3, `Callout` ×3, `StepReveal`, `CodeChallenge` ×2, `MermaidDiagram` ×2, `PracticeExercise` ×2 | Poblar stub. Sección más densa del track: H3/H4, XHR legado, GET/POST, errores, CORS (draft L82–328). |
| 4 | Demo en vivo con API pública | `sections/DemoEnVivoApiSection.tsx` | `CodeFiddle`, `DemoEnVivoApi`, `PracticeExercise` | Poblar stub. Estados UI idle→loading→éxito/error (draft L332–367). |
| 5 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas 7 puntos + cierre track núcleo (draft L371–379). |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L383–385). Ejercicios apilados `my-8` cada uno. |
| 7 | Reto integrador: mini panel de tareas remotas | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Enunciado + lista 5 tareas + criterio éxito (draft L418–479). |
| 8 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Prose: última lección núcleo PBPEW + ideas clave (5 viñetas) + siguiente paso proyectos PBPEW. Sin quiz inline (patrón PBPEW 06–09). |
| 9 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="12-ajax-fetch" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `12-ajax-fetch` con 5 preguntas del draft L501–560:

| # | Tema |
|---|------|
| 1 | `fetch` con HTTP 404 — resuelve con `ok === false` |
| 2 | POST correcto: `JSON.stringify` + `Content-Type: application/json` |
| 3 | Obtener objeto parseado: `await res.json()` |
| 4 | AJAX como patrón (no librería) |
| 5 | CORS bloqueado — servidor no permite origen |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| Párrafo intro | «Al finalizar la lección, el estudiante podrá:» (draft L29) |
| Lista | 6 objetivos medibles draft L31–36 |
| Prerrequisitos | `<ul>` lecciones 07, 10, 11 + servidor local + internet (draft L40–44) |

### `QueEsAjaxSection`

| id | componente | props |
|----|------------|-------|
| Definición AJAX / petición HTTP | prose | patrón, URL, método, headers, body, respuesta (draft L50–59) |
| `secuencia-ajax-usuario` | `MermaidDiagram` | chart draft L61–64 |
| `ajax-no-es-fetch` | `Callout` | `variant="callout-info"`; title: «AJAX ≠ fetch»; children draft L66–70 |
| `practice-ajax-recarga-formulario` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L72–78 |

### `XmlhttprequestLegadoSection`

| id | componente | props |
|----|------------|-------|
| H3 XHR legado | `<h3>` | «XMLHttpRequest — solo referencia» (draft L84) |
| Intro XHR | prose | API antigua, callbacks (draft L86) |
| `xhr-legado-ejemplo` | `CodeFiddle` | `language="javascript"`; code draft L88–104 |
| `comparativa-xhr-fetch` | `CompareTable` | headers, rows draft L106–115 |
| H3 fetch moderno | `<h3>` | `` `fetch(url, options)` — API moderna `` (draft L117) |
| Flujo típico / `response.ok` | prose `<ol>` | 4 pasos + atajo ok (draft L121–128) |
| `error-fetch-no-falla-http` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — fetch no falla en 404/500»; children draft L130–134 |
| H4 GET `.then()` | `<h4>` | «GET básico con `.then()`» (draft L136) |
| `fetch-get-then` | `CodeFiddle` | `language="javascript"`; code draft L138–153 |
| H4 GET async | `<h4>` | «GET con `async/await` (recomendado)» (draft L155) |
| `fetch-get-async` | `CodeFiddle` | `language="javascript"`; code draft L157–178 |
| `flujo-fetch-get` | `StepReveal` | title: «Flujo fetch GET»; steps[5] draft L180–190 |
| `get-todo-challenge` | `CodeChallenge` | template, blanks `ok`, `json` draft L192–199 |
| H4 POST | `<h4>` | «POST con JSON y cabeceras» (draft L201) |
| Intro GET vs POST | prose | uso típico (draft L203) |
| `comparativa-get-post` | `CompareTable` | headers, rows draft L205–213 |
| `post-http-ejemplo` | `CodeFiddle` | `language="http"`; code draft L215–222 |
| `crear-post-fetch` | `CodeFiddle` | `language="javascript"`; code draft L224–247 |
| `error-post-sin-stringify` | `Callout` | `variant="callout-warning"`; title: «POST sin stringify no funciona»; children draft L249–253 |
| `post-json-challenge` | `CodeChallenge` | blanks `json`, `stringify` draft L255–262 |
| H4 errores | `<h4>` | «Manejo de errores» (draft L264) |
| Intro tres tipos | prose | red / HTTP / JSON (draft L266) |
| `tabla-tipos-error-fetch` | `CompareTable` | headers: Tipo, Cuándo ocurre, Cómo detectarlo; rows draft L268–272 |
| `flujo-manejo-errores` | `MermaidDiagram` | chart draft L274–277 |
| `fetch-dom-click-handler` | `CodeFiddle` | `language="javascript"`; code draft L279–297 |
| `practice-fetch-404-catch` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L299–305 |
| H4 CORS | `<h4>` | «CORS y origen» (draft L307) |
| Definición CORS | prose | política navegador, cabeceras (draft L309) |
| `diagrama-cors-origen` | `MermaidDiagram` | chart draft L311–314 |
| `callout-demos-locales` | `Callout` | `variant="callout-info"`; title: «Demos locales»; children draft L316–320 |
| `practice-cors-servidor` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L322–328 |

Separar los dos `Callout` preventivos (`error-fetch-no-falla-http`, `error-post-sin-stringify`) con `CodeFiddle` o párrafo entre ellos; no apilar tres callouts seguidos.

### `DemoEnVivoApiSection`

| id | componente | props |
|----|------------|-------|
| Intro demo / estados UI | prose | idle → loading → éxito/error (draft L334–336) |
| `todo-json-ejemplo` | `CodeFiddle` | `language="json"`; `title`: «Respuesta de ejemplo»; code draft L338–346 |
| `demo-en-vivo-api` | `DemoEnVivoApi` | `buttonLabel`, `url`, `targetSelector`, `loadingMessage`, `errorMessage` draft L348–355 |
| `practice-get-todo-async` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L357–367 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 7 puntos draft L373–379 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | «Antes del cierre, verifica que puedes aplicar los conceptos de la lección.» (draft L385) |
| `comprension-orden-flujo-fetch` | `PracticeExercise` | orden b→c→a→d draft L387–393 |
| `comprension-then-encadenado` | `PracticeExercise` | `.then()` sin async draft L395–406 |
| `comprension-post-stringify` | `PracticeExercise` | POST stringify + Content-Type draft L408–414 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + lista `<ol>` | «Mini panel de tareas remotas»; 5 tareas + criterio éxito (draft L420–430) |
| `reto-html-esqueleto` | `CodeFiddle` | `language="html"`; `title`: «Esqueleto HTML»; code draft L432–438 |
| `reto-cargar-tareas-esqueleto` | `CodeFiddle` | `language="javascript"`; `title`: «Esqueleto — completa POST y listener»; code draft L440–466 |
| `reto-mini-panel-tareas` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L468–479; `rows={12}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | última lección núcleo PBPEW; une DOM, asincronía y JSON (draft L485) |
| Ideas clave | `<ul>` 5 viñetas draft L487–493 |
| Siguiente paso | enlace textual proyectos PBPEW (calculadora, todo-list, piedra-papel-tijera, ajedrez) draft L495 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="12-ajax-fetch" track="pbpew" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle` ×2, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `QueEsAjaxSection.tsx` | Poblar: `MermaidDiagram`, `Callout`, `PracticeExercise` |
| `XmlhttprequestLegadoSection.tsx` | Poblar: H3/H4, 6 `CodeFiddle`, 3 `CompareTable`, 3 `Callout`, `StepReveal`, 2 `CodeChallenge`, 2 `MermaidDiagram`, 2 `PracticeExercise` |
| `DemoEnVivoApiSection.tsx` | Poblar: 1 `CodeFiddle`, `DemoEnVivoApi`, `PracticeExercise` |
| `ResumenSection.tsx` | Viñetas draft L373–379 |
| `AjaxFetchLesson.tsx` | Orden 9 secciones + imports según bloque superior |

## Checklist lesson-developer

- [ ] H2 SEO: «¿Qué es AJAX?», «XMLHttpRequest (legado) y fetch moderno», «Demo en vivo con API pública»
- [ ] H3: `` `fetch(url, options)` — API moderna ``, «Manejo de errores», «CORS y origen»
- [ ] H4: GET `.then()`, GET `async/await`, POST con JSON, errores, CORS
- [ ] Migrar todo código → `CodeFiddle` (9 bloques en draft)
- [ ] Crear `ObjetivosSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Poblar `QueEsAjaxSection`, `XmlhttprequestLegadoSection`, `DemoEnVivoApiSection`, `ResumenSection`
- [ ] Registrar quiz `12-ajax-fetch` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `AjaxFetchLesson.tsx` con orden y imports
- [ ] `lesson-meta.ts`: `next: null`; `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `11-asincronia` |
| `next` | `null` |

Última lección núcleo del track PBPEW. Nav «siguiente» oculto o deshabilitado; `CierreSection` enlaza a proyectos PBPEW.
