---
track: pbpew
slug: proyectos/todo-list
title: "Lista de tareas"
order: 103
lesson_kind: project
prev: proyectos/piedra-papel-tijera
next: null
interactive_blocks:
  - type: mermaid
    id: arquitectura-flowchart
  - type: todo-list-demo
    id: todo-list-demo
  - type: callout
    id: como-usar-demo
  - type: compare-table
    id: dom-vs-array-render
  - type: step-reveal
    id: ciclo-agregar-tarea
  - type: mermaid
    id: sequence-agregar-tarea
  - type: practice-exercise
    id: array-fuente-verdad
  - type: code-challenge
    id: eliminar-por-id-filter
  - type: callout
    id: error-preventdefault
  - type: code-challenge
    id: completa-preventdefault
  - type: practice-exercise
    id: orden-flujo-agregar
  - type: callout
    id: seguridad-textcontent
  - type: callout
    id: listeners-duplicados
  - type: practice-exercise
    id: toggle-completada
  - type: practice-exercise
    id: filtrar-vs-eliminar
  - type: code-challenge
    id: json-stringify
  - type: callout
    id: errores-persistencia
  - type: practice-exercise
    id: separar-funciones-fetch
  - type: practice-exercise
    id: reto-integrador
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/10-dom-y-eventos/lesson-spec.md` (§ Clay UI — delegación, `preventDefault`, reto lista), implementación `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Proyecto integrador: priorizar **demo embebida** como ancla visual; resto del flujo sigue patrón PBPEW `section` + `h2` + interactivos.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track |
| `--color-secondary` | `#00C2FF` | Borde demo `TodoListDemo`, `Callout` info, thead `CompareTable`, barra activa `StepReveal`, filtro `.activo` en demo |
| `--color-accent` | `#6B4EFF` | Borde `PracticeExercise`, `Callout` preventivos/errores, checklist reto integrador |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs demo, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos y demo |

**Espaciado (convención PBPEW / proyecto):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo `h2` + bloques `my-6` / `my-8`; sin margen extra en `<section>`.
- Párrafos: `my-4`.
- Demo principal (`TodoListDemo`): `my-8` — bloque más alto de la lección; lista numerada «Qué debes probar» en prose `my-4` antes del widget.
- Interactivos estándar: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tablas de propiedades del modelo (`id`, `texto`, `completada`): prose `<table>` `my-4`; tabla de capas en arquitectura → `CompareTable`.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | «Lista de tareas» en `LessonLayout` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Arquitectura: datos, lógica y vista`, `render(): la vista desde el array` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | Casos reales: «Panel de soporte…», «App de notas que pierde todo…» |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título `StepReveal`, `PracticeExercise`, `CodeChallenge`, `TodoListDemo` |
| H4 | `mb-2 font-semibold` | inherit | Subpasos en `StepReveal` («1. Usuario envía formulario») |
| Cuerpo | `prose prose-slate` + `my-4` | `--color-neutral-dark` | Intro gestión de estado, regla array = fuente de verdad |

**Nota brand/SEO:** alinear H2 con brand-identity-expert cuando exista § Brand. Sugeridos: «Introducción: de nodos sueltos a gestión de estado», «Demo interactiva: prueba la app antes de codificar», «Arquitectura: datos, lógica y vista», «Casos reales: por qué importa el modelo», «Modelo de datos», «HTML del proyecto», «Formulario y alta de tareas», «render(): la vista desde el array», «Filtros de vista», «Persistencia opcional con localStorage», «Puente hacia API REST», «Reto integrador», «Cierre».

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosAprendizajeSection` | Objetivos de aprendizaje | — (prose) | Lista `<ul>` 6 objetivos medibles |
| 2 | `PrerrequisitosSection` | Prerrequisitos | — (prose) | Lista enlazada lecciones 07, 10, 12 + proyectos previos |
| 3 | `IntroduccionEstadoSection` | Introducción: de nodos sueltos a gestión de estado | — | prose regla oro + `MermaidDiagram` arquitectura |
| 4 | `TodoListDemoSection` | Demo interactiva: prueba la app antes de codificar | card | lista «Qué debes probar» ×6, `TodoListDemo`, `Callout` |
| 5 | `ArquitecturaSection` | Arquitectura: datos, lógica y vista | card | prose capas, `CompareTable`, `StepReveal`, `MermaidDiagram` sequence |
| 6 | `CasosRealesSection` | Casos reales: por qué importa el modelo | — | H3 ×2 + «Decisión clave» en prose fuerte |
| 7 | `ModeloDatosSection` | Modelo de datos | card | `CodeBlock` objeto, tabla propiedades, `CodeBlock` estado global, `PracticeExercise`, `CodeChallenge` |
| 8 | `EstructuraHtmlSection` | HTML del proyecto | card | prose + `CodeBlock` HTML mínimo |
| 9 | `FormularioYEstadoSection` | Formulario y alta de tareas | card | `CodeBlock` JS, `Callout`, `CodeChallenge`, `PracticeExercise` |
| 10 | `RenderYDelegacionSection` | render(): la vista desde el array | stepper | `CodeBlock` render, `Callout` seguridad, `CodeBlock` delegación, `Callout`, `PracticeExercise` |
| 11 | `FiltrosSection` | Filtros de vista | card | `CodeBlock` filtros, `PracticeExercise`, prose mensajes vacíos |
| 12 | `PersistenciaOpcionalSection` | Persistencia opcional con localStorage | card | `CodeBlock` guardar/cargar, `CodeChallenge`, `Callout` |
| 13 | `PuenteApiSection` | Puente hacia API REST | — | `CodeBlock` exportarJson + `PracticeExercise` |
| 14 | `RetoSection` | Reto integrador | card | prose niveles base/intermedio/avanzado + `PracticeExercise` |
| 15 | `CierreSection` | Cierre | card | ideas clave + siguiente paso + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosAprendizajeSection` / `PrerrequisitosSection`

| Elemento | Clay |
|----------|------|
| Listas objetivos y prerrequisitos (draft L32–49) | prose `<ul>`; sin `ClayCard` |

#### `IntroduccionEstadoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro gestión estado | prose | primer proyecto integrador; array + DOM; regla oro (draft L53–57) | Sin clay |
| `arquitectura-flowchart` | `MermaidDiagram` | flowchart TB datos / lógica / vista (draft L59–62) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |

#### `TodoListDemoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Lead demo | prose | réplica funcional; observar mutación + re-pintado (draft L66–68) | Sin clay |
| Checklist prueba | prose `<ol>` | 6 acciones: agregar, toggle, eliminar, filtros, vacío, persistencia (draft L70–77) | `my-4` |
| `todo-list-demo` | `TodoListDemo` | title, storageKey, toggles persistencia/recarga, emptyMessages (draft L79–90) | `ClayCard` `my-8 p-6 border-2 border-[var(--color-secondary)]/30`; widget interior radius 20–24px; **nivel 2** — no anidar otro card |
| `como-usar-demo` | `Callout` | title: «Cómo usar la demo»; patrón mutar → render → guardar (draft L92–96) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |

#### `ArquitecturaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro capas | prose | datos / lógica / vista (draft L100–108) | Sin clay |
| `dom-vs-array-render` | `CompareTable` | Solo DOM vs Array + render(); 4 filas (draft L110–119) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| `ciclo-agregar-tarea` | `StepReveal` | title: «Ciclo de una acción (agregar tarea)»; 6 steps (draft L121–132) | `ClayCard` **stepper**: barras activas `bg-[var(--color-secondary)]` |
| `sequence-agregar-tarea` | `MermaidDiagram` | sequenceDiagram submit → push → render → LS (draft L134–137) | `my-6` tras `StepReveal`; superficie blanca |

#### `CasosRealesSection`

| Elemento | Clay |
|----------|------|
| Caso soporte (draft L143–147) | H3 `mt-6 mb-2 text-xl font-semibold`; párrafo + **Decisión clave** en `<strong>` o `Callout` inline opcional |
| Caso notas + localStorage (draft L149–151) | Mismo patrón H3; sin `ClayCard` — densidad narrativa baja |

#### `ModeloDatosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro modelo | prose | objeto literal (draft L155–157) | Sin clay |
| `modelo-objeto-tarea` | `CodeBlock` | `{ id, texto, completada }` (draft L159–162) | `my-4` fondo oscuro |
| Tabla propiedades | prose `<table>` | id, texto, completada (draft L164–168) | `my-4` |
| `estado-global` | `CodeBlock` | tareas, filtroActivo, siguienteId (draft L170–177) | `my-4` |
| `array-fuente-verdad` | `PracticeExercise` | ¿array vs solo `<ul>`? (draft L179–185) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |
| `eliminar-por-id-filter` | `CodeChallenge` | blank `filter` (draft L187–194) | `ClayCard` `my-8` |

#### `EstructuraHtmlSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro HTML | prose | formulario semántico + filtros (draft L198–200) | Sin clay |
| `html-proyecto` | `CodeBlock` | `<main>`, form, nav filtros, ul (draft L202–218) | `my-6` |

#### `FormularioYEstadoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro formulario | prose | refs DOM + agregarTarea (draft L222–224) | Sin clay |
| `formulario-alta` | `CodeBlock` | form submit + agregarTarea (draft L226–247) | `my-4` |
| `error-preventdefault` | `Callout` | title: «Error frecuente»; recarga pierde estado (draft L249–253) | **callout-warning**; borde `--color-accent` |
| `completa-preventdefault` | `CodeChallenge` | blank preventDefault (draft L255–262) | `ClayCard` `my-8` |
| `orden-flujo-agregar` | `PracticeExercise` | orden d-e-c-a (draft L264–270) | accent border |

#### `RenderYDelegacionSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro render | prose | patrón central replaceChildren (draft L274–276) | Sin clay |
| `render-tareas` | `CodeBlock` | tareasVisibles, actualizarResumen, render (draft L278–314) | `my-4` |
| `seguridad-textcontent` | `Callout` | title: «Seguridad»; textContent vs XSS (draft L316–320) | **callout-info**; borde secondary |
| `delegacion-lista` | `CodeBlock` | click en #lista + closest (draft L322–347) | `my-6` |
| `listeners-duplicados` | `Callout` | title: «Error frecuente — listeners duplicados» (draft L349–353) | **callout-warning** |
| `toggle-completada` | `PracticeExercise` | implementar toggleCompletada (draft L355–361) | accent border |

Sección con `clay_variant` **stepper** por densidad de flujo (render → seguridad → delegación); no envolver `StepReveal` aquí — el stepper semántico es la secuencia de bloques code → callout → code.

#### `FiltrosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro filtros | prose | filtroActivo no borra array (draft L365–367) | Sin clay |
| `filtros-nav` | `CodeBlock` | click data-filtro + clase activo (draft L369–381) | `my-4` |
| `filtrar-vs-eliminar` | `PracticeExercise` | diferencia filtro vs eliminar (draft L383–389) | accent border |
| Mensajes vacíos | prose | tareasVisibles().length === 0 (draft L391) | Sin clay |

#### `PersistenciaOpcionalSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro persistencia | prose | JSON + UX; guardar tras mutación (draft L395–397) | Sin clay |
| `localstorage-guardar-cargar` | `CodeBlock` | STORAGE_KEY, guardar, cargar, DOMContentLoaded (draft L399–424) | `my-4` |
| `json-stringify` | `CodeChallenge` | blank stringify (draft L426–433) | `ClayCard` `my-8` |
| `errores-persistencia` | `Callout` | title: «Errores de persistencia»; object Object + try/catch (draft L435–439) | **callout-warning** |

#### `PuenteApiSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro API | prose | estado local hoy; fetch mañana (draft L443–445) | Sin clay |
| `exportar-json` | `CodeBlock` | exportarJson console.log (draft L447–452) | `my-4` |
| `separar-funciones-fetch` | `PracticeExercise` | qué separar de render (draft L454–460) | accent border; sección sin card (puente ligero) |

#### `RetoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Enunciado | prose | «Lista de tareas PBPEW»; niveles base / intermedio / avanzado (draft L464–493) | H2 primary |
| Listas criterios | prose `<ol>` ×3 | 6 + 4 + 6 ítems numerados | `my-4` entre niveles |
| `reto-integrador` | `PracticeExercise` | checklist autoevaluable + fragmento código (draft L495–505) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]`; textarea `rows={10}` |

#### `CierreSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro cierre | prose | primera app gestión estado sin frameworks (draft L509–511) | Sin clay |
| Ideas clave | prose `<ul>` | 6 viñetas array/render/preventDefault/textContent/filtro/localStorage (draft L513–520) | Sin clay |
| Siguiente paso | prose `<p>` | ajedrez o fetch REST (draft L522) | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas fuente verdad, preventDefault, filter, textContent, filtros (draft L526–587) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Cómo usar la demo | `callout-info` | `--color-secondary` (`#00C2FF`) | Orientación pedagógica; patrón mutar → render |
| Error frecuente (sin preventDefault) | `callout-warning` | `--color-accent` (`#6B4EFF`) | Error clásico de formulario; página recarga |
| Seguridad (textContent) | `callout-info` | `--color-secondary` | XSS; buena práctica PBPEW |
| Listeners duplicados en render | `callout-warning` | `--color-accent` | Delegación vs N listeners |
| Errores de persistencia | `callout-warning` | `--color-accent` | stringify + try/catch en parse |

Implementación: `Callout.tsx` — **callout-info** → `border-[var(--color-secondary)]`; **callout-warning** → `border-[var(--color-accent)]` vía prop `variant`.

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1 — contenedor lección)
    ├── section × N (prose: objetivos, prerrequisitos, casos reales, puente API)
    └── Interactivos (nivel 2)
        ├── TodoListDemo (ClayCard destacado con borde secondary — único «hero» de la lección)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (superficie blanca, no clay)
        └── CodeBlock (superficie oscura, no clay)
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. `TodoListDemo` ya lleva su `ClayCard`; el `Callout` siguiente va como hermano, no hijo. En `ArquitecturaSection`: `CompareTable` → `StepReveal` → `MermaidDiagram` en secuencia vertical; máximo un clay por bloque.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos / Prerrequisitos | 0 | Solo prose |
| Introducción estado | 0–1 | Un flowchart arquitectura |
| Demo interactiva | 2 | **Pico visual** — `TodoListDemo` + callout info |
| Arquitectura | 2 | Compare + stepper 6 pasos + sequence diagram |
| Casos reales | 0 | Narrativa H3 ×2 |
| Modelo de datos | 2 | 2 code blocks + practice + challenge |
| HTML proyecto | 1 | Un `CodeBlock` largo |
| Formulario y alta | 2 | Code + callout warning + challenge + practice |
| render + delegación | 2 | 2 code blocks + 2 callouts + practice — sección técnica más densa |
| Filtros | 1–2 | Code + practice |
| Persistencia | 2 | Code + challenge + callout warning |
| Puente API | 0–1 | Code + practice sin card de sección |
| Reto integrador | 2 | Listas numeradas + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] Crear `TodoListDemo` en `src/components/teaching/interactive/` con props del draft (storageKey, toggles, emptyMessages)
- [ ] Refactorizar `TodoListLesson.tsx`: orden de 15 secciones del mapa (sustituir stub `ContenidoSection`)
- [ ] `TodoListDemoSection`: borde secondary en card; checklist `<ol>` antes del widget
- [ ] `ArquitecturaSection`: `CompareTable`, `StepReveal` ciclo-agregar-tarea, `MermaidDiagram` sequence
- [ ] `CasosRealesSection`: H3 + «Decisión clave» sin card
- [ ] `RenderYDelegacionSection`: callouts seguridad + listeners duplicados con variantes correctas
- [ ] `RetoSection`: tres `<ol>` por nivel + `PracticeExercise` con textarea amplia
- [ ] `CierreSection`: 6 ideas clave + `Quiz` 5 preguntas
- [ ] Registrar quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] H2 alineados con tabla de jerarquía; H3 solo en casos reales
- [ ] Verificar profundidad clay ≤ 2 en demo + arquitectura (no anidar cards)

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

