---
track: pbpew
slug: 12-ajax-fetch
title: "AJAX y la API fetch"
order: 12
prev: "11-asincronia"
next: null
interactive_blocks:
  - type: mermaid
    id: secuencia-ajax-usuario
  - type: callout
    id: ajax-no-es-fetch
  - type: practice-exercise
    id: practice-ajax-recarga-formulario
  - type: compare-table
    id: comparativa-xhr-fetch
  - type: callout
    id: error-fetch-no-falla-http
  - type: step-reveal
    id: flujo-fetch-get
  - type: code-challenge
    id: get-todo-challenge
  - type: compare-table
    id: comparativa-get-post
  - type: callout
    id: error-post-sin-stringify
  - type: code-challenge
    id: post-json-challenge
  - type: compare-table
    id: tabla-tipos-error-fetch
  - type: mermaid
    id: flujo-manejo-errores
  - type: practice-exercise
    id: practice-fetch-404-catch
  - type: mermaid
    id: diagrama-cors-origen
  - type: callout
    id: callout-demos-locales
  - type: practice-exercise
    id: practice-cors-servidor
  - type: demo-en-vivo-api
    id: demo-en-vivo-api
  - type: practice-exercise
    id: practice-get-todo-async
  - type: practice-exercise
    id: comprension-orden-flujo-fetch
  - type: practice-exercise
    id: comprension-then-encadenado
  - type: practice-exercise
    id: comprension-post-stringify
  - type: practice-exercise
    id: reto-mini-panel-tareas
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/07-arrays-json-objetos/lesson-spec.md` (§Clay UI), implementación `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, `DemoEnVivoApi`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, botón demo API, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs demo, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención PBPEW / SEA):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: cada `<section>` sin margen extra; el ritmo lo dan `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tabla markdown tipos de error (draft L268–272): convertir a `CompareTable`; no usar `<table>` prose.
- Bloque HTTP raw POST (draft L215–222): `CodeBlock` lang `http`; sin `Callout` adicional.
- JSON de ejemplo todo (draft L338–346): `CodeBlock` lang `json`; precede `DemoEnVivoApi` como referencia de respuesta.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué es AJAX?`, `XMLHttpRequest (legado) y fetch moderno`, `Demo en vivo con API pública` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `XMLHttpRequest — solo referencia`, `` `fetch(url, options)` — API moderna ``, `Manejo de errores`, `CORS y origen` |
| H4 | `mt-4 mb-2 font-semibold` | inherit | `GET básico con .then()`, `GET con async/await (recomendado)`, `POST con JSON y cabeceras` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge`, `DemoEnVivoApi` |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Definición AJAX, flujo HTTP, estados UI demo |

**H2 sugeridos (SEO / brand pendiente):** promover `###` del draft a H2 de sección TSX; mantener clases clay. La sección fusionada XHR + fetch del draft es la más extensa del track — reservar H3/H4 para no aplanar el escaneo.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista 6 objetivos + prerrequisitos prose |
| 2 | `QueEsAjaxSection` | ¿Qué es AJAX? | — | prose, `MermaidDiagram`, `Callout`, `PracticeExercise` |
| 3 | `XmlhttprequestLegadoSection` | XMLHttpRequest (legado) y fetch moderno | stepper | H3 XHR, `CodeBlock`, `CompareTable`, H3 fetch, prose flujo, `Callout`, H4 GET ×2, `StepReveal`, `CodeChallenge`, H4 POST, `CompareTable`, `CodeBlock` http, `CodeBlock` js, `Callout`, `CodeChallenge`, H4 errores, `CompareTable`, `MermaidDiagram`, `CodeBlock` DOM, `PracticeExercise`, H4 CORS, `MermaidDiagram`, `Callout`, `PracticeExercise` |
| 4 | `DemoEnVivoApiSection` | Demo en vivo con API pública | card | prose estados UI, `CodeBlock` json, `DemoEnVivoApi`, `PracticeExercise` |
| 5 | `ResumenSection` | Resumen | — | Viñetas prose 7 puntos + cierre track |
| 6 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 7 | `RetoIntegradorSection` | Reto integrador: mini panel de tareas remotas | card | Enunciado prose + `CodeBlock` html + `CodeBlock` js esqueleto + `PracticeExercise` |
| 8 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace proyectos PBPEW + `Quiz` |

**Nota implementación:** el stub actual fusiona XHR, fetch, CORS y errores en `XmlhttprequestLegadoSection` como párrafos planos; refactorizar según tabla con H3/H4 y bloques interactivos del draft.

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| Elemento | Clay |
|----------|------|
| Lista 6 objetivos (draft L31–36) | prose `<ul>`; sin `ClayCard` |
| Prerrequisitos (draft L40–44) | prose `<ul>`; sin clay |

#### `QueEsAjaxSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Definición AJAX / petición HTTP | prose | patrón, URL, método, headers, body, respuesta (draft L50–59) | Sin clay |
| `secuencia-ajax-usuario` | `MermaidDiagram` | sequenceDiagram usuario → DOM → JS → API → actualiza título (draft L61–64) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `ajax-no-es-fetch` | `Callout` | title: «AJAX ≠ fetch»; patrón vs herramientas (draft L66–70) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| `practice-ajax-recarga-formulario` | `PracticeExercise` | por qué AJAX mejora UX vs recarga (draft L72–78) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `XmlhttprequestLegadoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| H3 XHR legado | `<h3>` | «XMLHttpRequest — solo referencia» (draft L84) | `mt-6 mb-2 text-xl font-semibold` |
| Intro XHR | prose | API antigua, callbacks (draft L86) | Sin clay |
| `xhr-legado-ejemplo` | `CodeBlock` | `XMLHttpRequest` GET + onload (draft L88–104) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| `comparativa-xhr-fetch` | `CompareTable` | 4 filas: Estilo, API, Errores HTTP, Uso PBPEW (draft L106–115) | `ClayCard` `my-6`; thead `border-[var(--color-secondary)]` |
| H3 fetch moderno | `<h3>` | `` `fetch(url, options)` — API moderna `` (draft L117) | — |
| Flujo típico / `response.ok` | prose `<ol>` | 4 pasos + atajo ok (draft L121–128) | Sin clay |
| `error-fetch-no-falla-http` | `Callout` | title: «Error frecuente — fetch no falla en 404/500» (draft L130–134) | **callout-warning**; borde accent |
| H4 GET `.then()` | `<h4>` | «GET básico con `.then()`» (draft L136) | `mt-4 mb-2 font-semibold` |
| `fetch-get-then` | `CodeBlock` | cadena then + throw + json (draft L138–153) | `my-4` |
| H4 GET async | `<h4>` | «GET con `async/await` (recomendado)» (draft L155) | — |
| `fetch-get-async` | `CodeBlock` | `obtenerTodo` try/catch (draft L157–178) | `my-4` |
| `flujo-fetch-get` | `StepReveal` | title: «Flujo fetch GET»; 5 steps evento → DOM (draft L180–190) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| `get-todo-challenge` | `CodeChallenge` | blanks `ok`, `json` (draft L192–199) | `ClayCard` `my-8`; inputs `rounded-xl` |
| H4 POST | `<h4>` | «POST con JSON y cabeceras» (draft L201) | — |
| Intro GET vs POST | prose | uso típico (draft L203) | Sin clay |
| `comparativa-get-post` | `CompareTable` | 3 filas: Uso, Cuerpo, Cabecera (draft L205–213) | `ClayCard` `my-6`; thead secondary |
| `post-http-ejemplo` | `CodeBlock` | raw HTTP POST (draft L215–222) | lang `http`; `my-4` |
| `crear-post-fetch` | `CodeBlock` | `crearPost` async (draft L224–247) | `my-4` |
| `error-post-sin-stringify` | `Callout` | title: «POST sin stringify no funciona» (draft L249–253) | **callout-warning** |
| `post-json-challenge` | `CodeChallenge` | blanks `json`, `stringify` (draft L255–262) | `ClayCard` `my-8` |
| H4 errores | `<h4>` | «Manejo de errores» (draft L264) | — |
| Intro tres tipos | prose | red / HTTP / JSON (draft L266) | Sin clay |
| `tabla-tipos-error-fetch` | `CompareTable` | 3 columnas: Tipo, Cuándo, Cómo detectarlo (draft L268–272) | `ClayCard` `my-6`; thead secondary |
| `flujo-manejo-errores` | `MermaidDiagram` | flowchart fetch → ok → json → mensaje UI (draft L274–277) | `my-6` tras tabla |
| `fetch-dom-click-handler` | `CodeBlock` | botón + tituloEl + try/catch (draft L279–297) | `my-4` |
| `practice-fetch-404-catch` | `PracticeExercise` | por qué 404 no entra en catch (draft L299–305) | accent border |
| H4 CORS | `<h4>` | «CORS y origen» (draft L307) | — |
| Definición CORS | prose | política navegador, cabeceras (draft L309) | Sin clay |
| `diagrama-cors-origen` | `MermaidDiagram` | mismo origen vs cruzado (draft L311–314) | `my-6` |
| `callout-demos-locales` | `Callout` | title: «Demos locales»; file:// y jsonplaceholder (draft L316–320) | **callout-info**; borde secondary |
| `practice-cors-servidor` | `PracticeExercise` | quién permite CORS (draft L322–328) | accent border |

Separar los dos `Callout` preventivos (`error-fetch-no-falla-http`, `error-post-sin-stringify`) con `CodeBlock` o párrafo entre ellos; no apilar tres callouts seguidos sin respiro visual.

#### `DemoEnVivoApiSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro demo / estados UI | prose | idle → loading → éxito/error (draft L334–336) | Sin clay |
| `todo-json-ejemplo` | `CodeBlock` | respuesta jsonplaceholder (draft L338–346) | lang `json`; `my-4` |
| `demo-en-vivo-api` | `DemoEnVivoApi` | buttonLabel, url, targetSelector, loading/error (draft L348–355) | `ClayCard` `my-8 p-6`; botón `bg-[var(--color-secondary)]` hover accent; zona `#demo-titulo` prose `min-h-[1.5rem]` |
| `practice-get-todo-async` | `PracticeExercise` | implementar `getTodo(id)` (draft L357–367) | accent border |

La demo en vivo es el único bloque con petición HTTP real en página — marcar visualmente con **card** de sección y `ClayCard` del componente; no duplicar card padre alrededor del `PracticeExercise` siguiente.

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 7 puntos + cierre track (draft L373–379) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| Intro | prose | «Antes del cierre…» (draft L385) | Sin clay |
| `comprension-orden-flujo-fetch` | `PracticeExercise` | orden b→c→a→d (draft L387–393) | accent border |
| `comprension-then-encadenado` | `PracticeExercise` | `.then()` sin async (draft L395–406) | accent border |
| `comprension-post-stringify` | `PracticeExercise` | POST stringify + Content-Type (draft L408–414) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; H2 en **card** semántico (autoevaluación formativa).

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | «Mini panel de tareas remotas»; 5 tareas + criterio (draft L420–430) | H2 primary |
| `reto-html-esqueleto` | `CodeBlock` | input, botón, ul, estado (draft L432–438) | `my-6`; fondo oscuro |
| `reto-cargar-tareas-esqueleto` | `CodeBlock` | `cargarTareas` parcial (draft L440–466) | `my-4`; comentario «Completa POST» |
| `reto-mini-panel-tareas` | `PracticeExercise` | implementación completa; 4 hints (draft L468–479) | `ClayCard` accent; textarea `rows={12}` |

#### `CierreSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Intro cierre | prose | última lección núcleo PBPEW (draft L485) | Sin clay |
| Ideas clave | prose `<ul>` | 5 viñetas (draft L487–493) | Sin clay |
| Siguiente paso | prose `<p>` | enlace proyectos PBPEW (draft L495) | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas fetch/POST/AJAX/CORS (draft L501–560) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| AJAX ≠ fetch | `callout-info` | `--color-secondary` (`#00C2FF`) | Aclaración conceptual; patrón vs API |
| Error fetch no falla en 404/500 | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; confusión Promise vs HTTP |
| POST sin stringify no funciona | `callout-warning` | `--color-accent` | Preventivo; serialización obligatoria |
| Demos locales | `callout-info` | `--color-secondary` | Entorno de desarrollo; file:// y CORS |

Implementación: `Callout.tsx` usa `border-secondary` por defecto; **callout-warning** → `border-[var(--color-accent)]` vía prop `variant` o `className`.

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1 — contenedor lección)
    ├── section × N (prose, sin card)
    └── Interactivos (nivel 2 — cada uno ClayCard o superficie plana)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz / DemoEnVivoApi
        ├── MermaidDiagram (superficie blanca, no clay)
        └── CodeBlock (superficie oscura, no clay)
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. En `XmlhttprequestLegadoSection`: alternar prose → `CodeBlock` → `CompareTable` → callout para evitar muros de componentes clay; `StepReveal` seguido de `CodeChallenge` sin card padre compartido.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos de aprendizaje | 0 | Solo prose |
| ¿Qué es AJAX? | 1–2 | 1 diagrama + 1 callout + 1 practice |
| XMLHttpRequest y fetch moderno | 2 | Sección más densa del track: 3 tablas + 3 diagramas + stepper + 2 challenges + 4 callouts/practice |
| Demo en vivo con API pública | 2 | `DemoEnVivoApi` + practice; único bloque con red en vivo |
| Resumen | 0 | Viñetas + cierre track |
| Comprueba tu comprensión | 2 | 3 `PracticeExercise` apilados |
| Reto integrador | 2 | 2 `CodeBlock` + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosSection` con objetivos y prerrequisitos
- [ ] Refactorizar `QueEsAjaxSection`: mermaid secuencia, callout AJAX≠fetch, practice recarga
- [ ] Refactorizar `XmlhttprequestLegadoSection`: H3/H4, 3 `CompareTable`, 3 mermaid, stepper, 2 challenges, 4 callouts/practice, 6+ `CodeBlock`
- [ ] Refactorizar `DemoEnVivoApiSection`: `CodeBlock` json, `DemoEnVivoApi`, practice `getTodo`
- [ ] Poblar `ResumenSection` con 7 viñetas del draft
- [ ] Crear `CompruebaTuComprensionSection` con 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection` con 2 `CodeBlock` + `PracticeExercise`
- [ ] Crear `CierreSection` con ideas clave + `Quiz`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] H2: «¿Qué es AJAX?», «XMLHttpRequest (legado) y fetch moderno», «Demo en vivo con API pública»
- [ ] H3: `` `fetch(url, options)` — API moderna ``, «Manejo de errores», «CORS y origen»
- [ ] Actualizar `AjaxFetchLesson.tsx` con orden de secciones del mapa

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

