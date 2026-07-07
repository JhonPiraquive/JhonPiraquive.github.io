---
track: pbpew
slug: 11-asincronia
title: "Sincronía vs asincronía · temporizadores · promesas · async/await"
order: 11
prev: "10-dom-y-eventos"
next: "12-ajax-fetch"
interactive_blocks:
  - type: compare-table
    id: sync-vs-async
  - type: callout
    id: caso-dashboard-congela
  - type: step-reveal
    id: orden-impresion-acb
  - type: practice-exercise
    id: practice-settimeout-cola
  - type: practice-exercise
    id: practice-sync-vs-async-analogia
  - type: callout
    id: caso-polling-clearinterval
  - type: callout
    id: errores-frecuentes-timers
  - type: mermaid
    id: mermaid-promise-states
  - type: step-reveal
    id: step-reveal-promesa-pending
  - type: code-challenge
    id: code-challenge-esperar-encadenamiento
  - type: practice-exercise
    id: practice-esperar-then
  - type: callout
    id: callout-return-then
  - type: code-challenge
    id: code-challenge-fetch-chain
  - type: practice-exercise
    id: practice-event-loop-order
  - type: compare-table
    id: compare-then-vs-async-await
  - type: mermaid
    id: mermaid-async-cargar-flow
  - type: code-challenge
    id: code-challenge-async-await
  - type: callout
    id: callout-await-fuera-async
  - type: practice-exercise
    id: practice-tres-pasos
  - type: mermaid
    id: mermaid-event-loop-sequence
  - type: practice-exercise
    id: practice-template-literal
  - type: practice-exercise
    id: practice-setinterval-1-5
  - type: practice-exercise
    id: practice-catch-vs-finally
  - type: practice-exercise
    id: practice-async-sin-catch
  - type: practice-exercise
    id: reto-panel-carga
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/06-funciones-y-callbacks/lesson-spec.md` (§Clay UI), implementación `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

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

**Espaciado (convención PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Lista numerada event loop (draft L52–57): prose `<ol>`; no `StepReveal` — reservar stepper para el demo A→C→B.
- Preview lección 12 (`fetch`, HTTP): párrafo secundario; sin `Callout` dedicado.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué cambia con lo asíncrono?`, `async / await` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Promesas` (bajo temporizadores) |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («1. Código en el editor», «3. Event loop») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Event loop, constructor `Promise`, preview `fetch` |

**Nota:** H2 del draft con signos de interrogación se mantienen literales (`¿Qué cambia con lo asíncrono?`). `async / await` con espacios alrededor de `/` como en el borrador.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista `<ul>` 6 objetivos |
| 2 | `QueCambiaConLoSection` | ¿Qué cambia con lo asíncrono? | stepper | prose event loop, `CompareTable`, `Callout`, `StepReveal`, `CodeBlock`, `PracticeExercise` ×2 |
| 3 | `SettimeoutYSetintervalSection` | setTimeout y setInterval | card | `Callout` ×2, `CodeBlock` ×2, H3 Promesas, `MermaidDiagram`, `CodeBlock` ×2, `StepReveal`, `CodeChallenge`, `PracticeExercise` |
| 4 | `ThenCatchFinallySection` | then, catch, finally | — | prose, `Callout`, `CodeBlock`, `CodeChallenge`, `PracticeExercise` |
| 5 | `AsyncAwaitSection` | async / await | stepper | `CompareTable`, `MermaidDiagram`, `CodeBlock` ×2, `CodeChallenge`, `Callout`, `CodeBlock` mal/bien, `PracticeExercise` |
| 6 | `TemplateLiteralsSection` | Template literals | — | prose, `CodeBlock` ×2, `MermaidDiagram`, `PracticeExercise` |
| 7 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos + preview lección 12 |
| 8 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 9 | `RetoIntegradorSection` | Reto integrador: panel de carga con reintentos | card | Enunciado prose + lista numerada + `CodeBlock` esqueleto + `PracticeExercise` |
| 10 | `CierreSection` | Cierre | card | Ideas clave + enlace lección 12 + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| Elemento | Clay |
|----------|------|
| Lista 6 objetivos (draft L26–33) | prose `<ul>`; sin `ClayCard` |
| Prerrequisitos (draft L35–40) | prose `<p>` + `<ul>`; sin clay |

#### `QueCambiaConLoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro sync/async | prose | definición, hilo único, Web APIs (draft L46–50) | Sin clay |
| Event loop (lista) | prose `<ol>` | 4 pasos (draft L52–57) | Sin clay |
| Callback repaso | prose | enlace lección 06 (draft L61) | Sin clay |
| `sync-vs-async` | `CompareTable` | 4 filas: Orden, Bloqueo UI, Ejemplos, Lectura (draft L63–72) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| `caso-dashboard-congela` | `Callout` | title: «Caso real: dashboard que se congela» (draft L74–78) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| `orden-impresion-acb` | `StepReveal` | title: «Orden de impresión A → C → B»; 4 steps (draft L80–101) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| `timeout-order-demo` | `CodeBlock` | `console.log` 1→2→3 con `setTimeout(..., 0)` (draft L103–113) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| `practice-settimeout-cola` | `PracticeExercise` | delay 0 y cola (draft L115–121) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |
| `practice-sync-vs-async-analogia` | `PracticeExercise` | analogía comida/móvil (draft L123–129) | accent border |

#### `SettimeoutYSetintervalSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro timers | prose | `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval` (draft L135–141) | Sin clay |
| `caso-polling-clearinterval` | `Callout` | title: «Caso real: polling sin clearInterval» (draft L143–147) | **callout-info**; borde secondary |
| `clear-timeout-demo` | `CodeBlock` | `clearTimeout(avisoId)` (draft L149–158) | `my-4` |
| `interval-tick-demo` | `CodeBlock` | contador 3 tics + `clearInterval` (draft L160–171) | `my-4` |
| `errores-frecuentes-timers` | `Callout` | title: «Errores frecuentes»; clearTimeout vs clearInterval, delay mínimo (draft L173–177) | **callout-warning**; borde accent |
| Promesas (H3) | `<h3>` | `mt-6 mb-2 text-xl font-semibold` — «Promesas» | — |
| Intro Promise | prose | estados pending/fulfilled/rejected, constructor (draft L181–185) | Sin clay |
| `mermaid-promise-states` | `MermaidDiagram` | stateDiagram pending→fulfilled/rejected (draft L187–190) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `esperar-promesa-demo` | `CodeBlock` | `esperar(ms)` + `new Promise` (draft L192–205) | `my-4` |
| `step-reveal-promesa-pending` | `StepReveal` | title: «Promesa pendiente → fulfilled»; 3 steps (draft L207–224) | **stepper** |
| `code-challenge-esperar-encadenamiento` | `CodeChallenge` | blanks `setTimeout`, `"dos"` (draft L226–234) | `ClayCard` `my-8`; inputs `rounded-xl` |
| `practice-esperar-then` | `PracticeExercise` | implementar `esperar` + cadena (draft L236–242) | accent border |

#### `ThenCatchFinallySection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro then/catch/finally | prose | viñetas + preview lección 12 (draft L248–252) | Sin clay |
| `callout-return-then` | `Callout` | title: «Error frecuente — olvidar return en .then» (draft L254–258) | **callout-warning** |
| `fetch-chain-demo` | `CodeBlock` | `fetch` + then/catch/finally (draft L260–267) | `my-4` |
| `code-challenge-fetch-chain` | `CodeChallenge` | blanks `then`, `then`, `catch` (draft L269–278) | `ClayCard` `my-8` |
| `practice-event-loop-order` | `PracticeExercise` | orden e→c→a→b→d (draft L280–286) | accent border |

#### `AsyncAwaitSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro async/await | prose | `async function`, `await`, `try/catch` (draft L292–296) | Sin clay |
| `compare-then-vs-async-await` | `CompareTable` | Estilo, Errores, Cuándo usar (draft L298–306) | `ClayCard` `my-8`; thead secondary |
| `mermaid-async-cargar-flow` | `MermaidDiagram` | flowchart `cargar()` fetch→json→catch (draft L308–311) | `my-6` |
| `async-cargar-demo` | `CodeBlock` | `async function cargar()` try/catch (draft L313–326) | `my-4` |
| `tres-pasos-demo` | `CodeBlock` | `tresPasos()` con `await esperar(300)` (draft L328–343) | `my-4` |
| `code-challenge-async-await` | `CodeChallenge` | blanks `async`, `await` (draft L345–353) | `ClayCard` `my-8` |
| `callout-await-fuera-async` | `Callout` | title: «Error frecuente — await fuera de async» (draft L355–359) | **callout-warning** |
| `await-syntax-malo-bien` | `CodeBlock` | comentado ❌ vs ✅ `obtener()` (draft L361–371) | `my-4` |
| `practice-tres-pasos` | `PracticeExercise` | implementar `tresPasos` (draft L373–379) | accent border |

#### `TemplateLiteralsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro template literals | prose | backticks, `${}`, error comillas (draft L385–387) | Sin clay |
| `saludo-template-demo` | `CodeBlock` | `Hola ${nombre}` + multilínea (draft L389–401) | `my-4` |
| `puntos-template-demo` | `CodeBlock` | `Usuario ${nombre} tiene ${puntos}` (draft L403–409) | `my-4` |
| `mermaid-event-loop-sequence` | `MermaidDiagram` | sequenceDiagram call stack / Web API / cola (draft L411–414) | `my-6`; cierre visual del hilo asíncrono |
| `practice-template-literal` | `PracticeExercise` | mensaje con interpolación (draft L416–422) | accent border |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos + preview 12 (draft L428–433) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `practice-setinterval-1-5` | `PracticeExercise` | setInterval 1–5 + clearInterval (draft L441–447) | accent border |
| `practice-catch-vs-finally` | `PracticeExercise` | `.catch` vs `.finally` (draft L449–455) | accent border |
| `practice-async-sin-catch` | `PracticeExercise` | unhandled rejection (draft L457–463) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; H2 en **card** semántico (evaluación formativa).

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | «Panel de carga con reintentos»; 5 tareas + criterio (draft L469–479) | H2 primary |
| `reto-esqueleto-carga` | `CodeBlock` | esqueleto `cargarConReintentos` + pruebas comentadas (draft L481–519) | `CodeBlock` `my-6`; fondo oscuro |
| `reto-panel-carga` | `PracticeExercise` | implementar reto completo; 4 hints (draft L521–532) | `ClayCard` accent; textarea `rows={10}` |

#### `CierreSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Intro cierre | prose | conexión lecciones 6, 10, 12 (draft L538–539) | Sin clay |
| Ideas clave | prose `<ul>` | 6 viñetas (draft L542–547) | Sin clay |
| Siguiente paso | prose `<p>` | enlace lección `12-ajax-fetch` (draft L549) | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas ACB, setInterval id, .catch, await, backticks (draft L555–614) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Caso dashboard que se congela | `callout-info` | `--color-secondary` (`#00C2FF`) | Incidente UI; bucle sincrónico bloquea hilo |
| Caso polling sin clearInterval | `callout-info` | `--color-secondary` | Ciclo de vida de timers en SPA/checkout |
| Errores frecuentes (timers) | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; confusión clear* y delay 0 |
| Olvidar return en .then | `callout-warning` | `--color-accent` | Preventivo; cadena de promesas rota |
| await fuera de async | `callout-warning` | `--color-accent` | SyntaxError; envolver en `async function` |

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

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. En `QueCambiaConLoSection` y `AsyncAwaitSection`: separar `StepReveal` / `CompareTable` y diagrama Mermaid con párrafo intermedio si la densidad es alta; no anidar `StepReveal` dentro de otro `ClayCard` padre.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos de aprendizaje | 0 | Solo prose |
| ¿Qué cambia con lo asíncrono? | 2 | `CompareTable` + callout + stepper A→C→B + 2 practices |
| setTimeout y setInterval | 2 | 2 callouts + mermaid estados + stepper promesa + challenge; bloque más denso (incluye Promesas) |
| then, catch, finally | 1–2 | callout + challenge + practice |
| async / await | 2 | `CompareTable` + mermaid + 2 code blocks + challenge + callout + practice |
| Template literals | 1 | 2 code blocks + mermaid secuencia + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 `PracticeExercise` apilados |
| Reto integrador | 2 | `CodeBlock` esqueleto + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] Poblar `QueCambiaConLoSection`: `CompareTable`, callout dashboard, `StepReveal` A→C→B, `CodeBlock`, 2 `PracticeExercise`
- [ ] Poblar `SettimeoutYSetintervalSection`: 2 callouts timers, 2 `CodeBlock`, H3 Promesas, mermaid estados, 2 `CodeBlock`, `StepReveal`, `CodeChallenge`, `PracticeExercise`
- [ ] Poblar `ThenCatchFinallySection`: callout return, `CodeBlock` fetch, `CodeChallenge`, `PracticeExercise`
- [ ] Poblar `AsyncAwaitSection`: `CompareTable`, mermaid, 2 `CodeBlock`, `CodeChallenge`, callout await, `CodeBlock` mal/bien, `PracticeExercise`
- [ ] Poblar `TemplateLiteralsSection`: 2 `CodeBlock`, mermaid secuencia, `PracticeExercise`
- [ ] Crear `ObjetivosSection` con lista de objetivos y prerrequisitos
- [ ] Poblar `ResumenSection` con 6 viñetas del draft
- [ ] Crear `CompruebaTuComprensionSection` con 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection` con `CodeBlock` esqueleto + `PracticeExercise`
- [ ] Crear `CierreSection` con ideas clave + `Quiz`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] Actualizar `AsincroniaLesson.tsx` con orden de secciones del mapa (Objetivos, …, Comprueba, Reto, Cierre)
