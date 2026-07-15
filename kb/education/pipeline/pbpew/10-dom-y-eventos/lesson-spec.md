---
track: pbpew
slug: 10-dom-y-eventos
title: "Manipulación del DOM y eventos"
order: 10
prev: "09-estructuras-de-datos"
next: "11-asincronia"
interactive_blocks:
  - type: mermaid
    id: flujo-dom-mutable
  - type: callout
    id: error-frecuente-queryselector-null
  - type: code-challenge
    id: completa-selector
  - type: practice-exercise
    id: seleccionar-titulo-textcontent
  - type: compare-table
    id: textcontent-vs-innerhtml
  - type: callout
    id: caso-formulario-preventdefault
  - type: practice-exercise
    id: textcontent-seguro-usuario
  - type: code-challenge
    id: creacion-item-lista
  - type: compare-table
    id: onclick-vs-addeventlistener
  - type: mermaid
    id: flujo-evento-fifo-sequence
  - type: code-challenge
    id: completa-preventdefault
  - type: step-reveal
    id: delegacion-lista-pasos
  - type: mermaid
    id: delegacion-muchos-vs-uno
  - type: callout
    id: caso-panel-admin-200-filas
  - type: practice-exercise
    id: target-vs-currenttarget
  - type: practice-exercise
    id: orden-flujo-evento
  - type: practice-exercise
    id: demo-contador-clics
  - type: practice-exercise
    id: comprension-toggle-classlist
  - type: practice-exercise
    id: comprension-keydown-escape
  - type: practice-exercise
    id: comprension-script-head-dom
  - type: practice-exercise
    id: reto-lista-tareas
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/06-funciones-y-callbacks/lesson-spec.md` (§ Clay UI), implementación `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención PBPEW / SEA):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: cada `<section>` sin margen extra; el ritmo lo dan `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tablas markdown de APIs (draft L63–68, L216–222): convertir a `CompareTable` o prose `<table>`; preferir `CompareTable` para tablas comparativas (`textContent`/`innerHTML`, `onclick`/`addEventListener`); tabla de propiedades del objeto evento puede quedar en prose `<table>` dentro de sección sin card extra.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Seleccionar nodos`, `Modificar el DOM`, `Eventos en JavaScript` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Contenido: textContent frente a innerHTML`, `Delegación de eventos` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («1. Lista con N hijos», «3. event.target identifica el origen») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Intro DOM mutable, prerrequisitos, puente FIFO lección 9 |

**Nota brand/SEO:** alinear H2 con refinamiento de brand-identity-expert cuando exista § Brand; mantener clases clay. Sugeridos: «Introducción: DOM mutable», «Seleccionar nodos del DOM», «Modificar el DOM», «Eventos en JavaScript», «Demo: contador de clics en la página».

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista `<ul>` 6 objetivos medibles |
| 2 | `PrerrequisitosSection` | Prerrequisitos | — (prose) | Lista enlazada a lecciones 01–09 |
| 3 | `IntroduccionDomMutableSection` | Introducción: DOM mutable | — | prose puente lecciones 1/6/9, `MermaidDiagram` |
| 4 | `SeleccionarNodosSection` | Seleccionar nodos del DOM | card | prose + tabla APIs, `Callout`, `CodeBlock`, `CodeChallenge`, `PracticeExercise` |
| 5 | `ModificarDomSection` | Modificar el DOM | card | H3 ×3, `CompareTable`, `CodeBlock` ×4, `Callout`, `PracticeExercise`, `CodeChallenge` |
| 6 | `EventosSection` | Eventos en JavaScript | stepper | `CompareTable`, tabla evento, `MermaidDiagram`, `CodeBlock` ×3, H3 preventDefault, `CodeChallenge`, H3 delegación, `StepReveal`, `MermaidDiagram`, `Callout`, `PracticeExercise` ×2 |
| 7 | `DemoMiniEnLaSection` | Demo: contador de clics en la página | card | prose, `CodeBlock` HTML + JS, `PracticeExercise` |
| 8 | `ResumenSection` | Resumen | — | Viñetas prose 9 puntos + preview lección 11 |
| 9 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 10 | `RetoIntegradorSection` | Reto integrador: lista de tareas en la página | card | Enunciado prose + lista numerada + `CodeBlock` ×2 + `PracticeExercise` |
| 11 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace lección 11 + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| Elemento | Clay |
|----------|------|
| Lista 6 objetivos (draft L26–33) | prose `<ul>`; sin `ClayCard` |

#### `PrerrequisitosSection`

| Elemento | Clay |
|----------|------|
| Lista prerrequisitos (draft L37–42) | prose `<ul>` con enlaces a slugs; sin `ClayCard` |

#### `IntroduccionDomMutableSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro DOM mutable | prose | árbol en memoria, APIs concretas, FIFO lección 9, callbacks lección 6 (draft L46–50) | Sin clay |
| `flujo-dom-mutable` | `MermaidDiagram` | flowchart LR: Seleccionar → Leer / Actualizar / Crear → remove (draft L52–55) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |

#### `SeleccionarNodosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro selección | prose | `querySelector` / `querySelectorAll` preferidos PBPEW (draft L59–61) | Sin clay |
| Tabla APIs | prose `<table>` o `CompareTable` | querySelector, querySelectorAll, getElementById, getElementsByClassName (draft L63–68) | Si `CompareTable`: `ClayCard` `my-8`; thead secondary |
| `error-frecuente-queryselector-null` | `Callout` | title: «Error frecuente»; null + TypeError (draft L70–74) | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |
| `selectores-ejemplo` | `CodeBlock` | titulo, botones, porId, porClase (draft L76–85) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| `completa-selector` | `CodeChallenge` | blanks `querySelectorAll`, `querySelector` (draft L87–95) | `ClayCard` `my-8`; inputs `rounded-xl` |
| `seleccionar-titulo-textcontent` | `PracticeExercise` | `#titulo` + textContent (draft L97–103) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `ModificarDomSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro modificar | prose | leer, escribir, estilos, crear/eliminar (draft L107–109) | Sin clay |
| Contenido (H3) | `<h3>` | «Contenido: textContent frente a innerHTML» — `mt-6 mb-2 text-xl font-semibold` | — |
| Bullets textContent/innerHTML | prose `<ul>` | seguro vs XSS (draft L111–114) | Sin clay |
| `textcontent-vs-innerhtml` | `CompareTable` | 4 filas: Interpreta HTML, Riesgo, Uso PBPEW, Ejemplo (draft L116–125) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| `mensaje-textcontent-innerhtml` | `CodeBlock` | #mensaje + usuario XSS comentado (draft L127–137) | `my-4` |
| Estilos y clases (H3) | `<h3>` | «Estilos y clases» | — |
| Bullets style/classList | prose `<ul>` | .add, .remove, .toggle, .contains (draft L139–142) | Sin clay |
| `tarjeta-style-classlist` | `CodeBlock` | .card style + classList (draft L144–152) | `my-4` |
| Crear y eliminar (H3) | `<h3>` | «Crear y eliminar nodos» | — |
| Bullets create/append/remove | prose `<ul>` | createElement, appendChild, remove (draft L154–158) | Sin clay |
| `lista-create-append` | `CodeBlock` | li + appendChild + remove (draft L160–169) | `my-4` |
| `caso-formulario-preventdefault` | `Callout` | title: «Caso real: formulario que recarga y pierde datos»; submit sin preventDefault (draft L171–175) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| `textcontent-seguro-usuario` | `PracticeExercise` | comentario usuario textContent vs innerHTML (draft L177–183) | accent border |
| `creacion-item-lista` | `CodeChallenge` | blanks createElement, textContent, appendChild (draft L185–194) | `ClayCard` `my-8` |

#### `EventosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro eventos | prose | click, input, keydown, submit; patrón addEventListener (draft L198–200) | Sin clay |
| `onclick-vs-addeventlistener` | `CompareTable` | Separación capas, varios handlers, patrón PBPEW (draft L202–210) | `ClayCard` `my-8`; thead secondary |
| Objeto evento (H3) | `<h3>` | «Objeto evento» | — |
| Tabla propiedades | prose `<table>` | type, target, currentTarget, key, preventDefault (draft L214–222) | `my-4`; sin card anidada |
| `flujo-evento-fifo-sequence` | `MermaidDiagram` | sequenceDiagram usuario → navegador FIFO → listener → DOM (draft L224–227) | `my-6` |
| `btn-click-keydown` | `CodeBlock` | #ok click + keydown Enter (draft L229–243) | `my-4` |
| preventDefault (H3) | `<h3>` | «preventDefault en formularios» | — |
| Intro submit | prose | form recarga sin interceptar (draft L245–247) | Sin clay |
| `form-preventdefault` | `CodeBlock` | #contacto submit + email (draft L249–259) | `my-4` |
| `completa-preventdefault` | `CodeChallenge` | blank preventDefault (draft L261–268) | `ClayCard` `my-8` |
| Delegación (H3) | `<h3>` | «Delegación de eventos» | — |
| Intro delegación | prose | ancestro común, target, closest, hijos dinámicos (draft L270–272) | Sin clay |
| `delegacion-lista-pasos` | `StepReveal` | title: «Delegación en lista — paso a paso»; 4 steps (draft L274–295) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| `delegacion-muchos-vs-uno` | `MermaidDiagram` | flowchart malo (N listeners) vs bueno (ul + closest) (draft L297–300) | `my-6` tras `StepReveal` |
| `lista-delegacion-remove` | `CodeBlock` | #lista-tareas click + closest eliminar (draft L302–313) | `my-4` |
| `caso-panel-admin-200-filas` | `Callout` | title: «Caso real: panel admin con 200 filas»; migración a tbody delegación (draft L315–319) | **callout-info**; borde secondary |
| `target-vs-currenttarget` | `PracticeExercise` | ul listener, clic en li (draft L321–327) | accent border |
| `orden-flujo-evento` | `PracticeExercise` | orden c→a→d→b (draft L329–335) | accent border |

#### `DemoMiniEnLaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro demo | prose | ciclo seleccionar → escuchar → actualizar (draft L339–341) | Sin clay |
| `demo-html-contador` | `CodeBlock` | lang html; #pulsar + #contador (draft L345–349) | `my-4` |
| `demo-js-contador` | `CodeBlock` | clics++, textContent (draft L353–363) | `my-4` |
| `demo-contador-clics` | `PracticeExercise` | implementar contador sin innerHTML (draft L365–375) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 9 puntos + preview lección 11 (draft L379–389) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| Lead | prose | «Antes del cierre…» (draft L395) | Sin clay |
| `comprension-toggle-classlist` | `PracticeExercise` | #alternar + classList.toggle (draft L397–403) | accent border |
| `comprension-keydown-escape` | `PracticeExercise` | keydown Escape + event.key (draft L405–411) | accent border |
| `comprension-script-head-dom` | `PracticeExercise` | JS en head sin defer (draft L413–419) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; H2 en **card** semántico (evaluación formativa).

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | «Lista de tareas en la página»; 6 tareas + criterio éxito (draft L425–436) | H2 primary |
| `reto-html-lista-tareas` | `CodeBlock` | input, button, ul, span (draft L438–444) | `my-4` |
| `reto-esqueleto-lista-tareas` | `CodeBlock` | esqueleto agregarTarea + delegación (draft L446–471) | `my-6`; fondo oscuro |
| `reto-lista-tareas` | `PracticeExercise` | implementar reto completo; 4 hints (draft L473–484) | `ClayCard` accent; textarea `rows={8}` |

#### `CierreSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Intro cierre | prose | DOM + eventos; puente lecciones 6 y 9 (draft L488–490) | Sin clay |
| Ideas clave | prose `<ul>` | 5 viñetas (draft L492–498) | Sin clay |
| Siguiente paso | prose `<p>` | enlace lección `11-asincronia` (draft L500) | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas querySelector/addEventListener/preventDefault/textContent/delegación (draft L504–565) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Error querySelector devuelve null | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; TypeError sin comprobar referencia |
| Caso formulario recarga y pierde datos | `callout-info` | `--color-secondary` (`#00C2FF`) | Incidente profesional; preventDefault en submit |
| Caso panel admin 200 filas | `callout-info` | `--color-secondary` | Delegación vs N listeners; filas dinámicas vía API |

Implementación: `Callout.tsx` usa `border-secondary` por defecto; **callout-warning** → `border-[var(--color-accent)]` vía prop `variant` o `className`.

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1 — contenedor lección)
    ├── section × N (prose, sin card)
    └── Interactivos (nivel 2 — cada uno ClayCard o superficie plana)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (superficie blanca, no clay)
        └── CodeBlock (superficie oscura, no clay)
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. En `EventosSection`: separar `StepReveal` (delegación) y diagrama comparativo muchos-vs-uno con párrafo intermedio; no anidar `StepReveal` dentro de otro `ClayCard` padre.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos / Prerrequisitos | 0 | Solo prose |
| Introducción DOM mutable | 0–1 | Un diagrama flowchart |
| Seleccionar nodos | 2 | callout + challenge + practice; tabla APIs |
| Modificar DOM | 2 | CompareTable + callout + 4 code blocks + challenge + practice — sección más densa del bloque «mutación» |
| Eventos | 2 | 2 diagramas + stepper delegación + 2 callouts implícitos (1 callout) + compare + 2 practices |
| Demo contador | 1–2 | 2 code blocks + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 `PracticeExercise` apilados |
| Reto integrador | 2 | 2 `CodeBlock` + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] Refactorizar `SeleccionarNodosSection`: tabla APIs, callout null, `CodeBlock`, `CodeChallenge`, `PracticeExercise` (eliminar stub monolítico actual)
- [ ] Crear `ObjetivosSection` y `PrerrequisitosSection`
- [ ] Crear `IntroduccionDomMutableSection` con `MermaidDiagram` flujo-dom-mutable
- [ ] Crear `ModificarDomSection` con H3 ×3, `CompareTable`, 4 `CodeBlock`, callout formulario, challenge, practice
- [ ] Crear `EventosSection` con compare, stepper delegación, 2 mermaid, callout panel admin, 3 code blocks, 2 challenges/practices
- [ ] Refactorizar `DemoMiniEnLaSection`: HTML + JS separados + `PracticeExercise`
- [ ] Poblar `ResumenSection` con 9 viñetas del draft
- [ ] Crear `CompruebaTuComprensionSection` con 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection` con 2 `CodeBlock` + `PracticeExercise`
- [ ] Crear `CierreSection` con ideas clave + `Quiz`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] H2: «Seleccionar nodos del DOM», «Modificar el DOM», «Eventos en JavaScript», «Demo: contador de clics en la página»
- [ ] H3: «Contenido: textContent frente a innerHTML», «Estilos y clases», «Crear y eliminar nodos», «Objeto evento», «preventDefault en formularios», «Delegación de eventos»
- [ ] Actualizar `DomYEventosLesson.tsx` con orden de secciones del mapa

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

