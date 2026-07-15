---
track: pbpew
slug: proyectos/piedra-papel-tijera
title: "Piedra, papel o tijera"
order: 102
lesson_type: proyecto-integrador
prev: proyectos/calculadora
next: proyectos/todo-list
interactive_blocks:
  - type: mermaid
    id: flujo-ronda-sequence
  - type: rock-paper-scissors-demo
    id: demo-piedra-papel-tijera
  - type: callout
    id: que-observar-demo
  - type: mermaid
    id: reglas-flowchart
  - type: step-reveal
    id: una-ronda-paso-a-paso
  - type: code-challenge
    id: estado-inicial-marcador
  - type: callout
    id: error-frecuente-random
  - type: code-challenge
    id: indice-aleatorio-seguro
  - type: practice-exercise
    id: math-floor-indice
  - type: compare-table
    id: if-vs-mapa-reglas
  - type: mermaid
    id: determinar-ganador-flowchart
  - type: code-challenge
    id: resultado-tijera-papel
  - type: practice-exercise
    id: separar-determinar-actualizar
  - type: compare-table
    id: mutar-vs-recrear-dom
  - type: code-challenge
    id: textcontent-marcador
  - type: practice-exercise
    id: incrementar-victorias
  - type: callout
    id: error-callback-mal-pasado
  - type: code-challenge
    id: delegacion-data-choice
  - type: code-challenge
    id: orden-flujo-ronda
  - type: callout
    id: caso-real-marcador-miente
  - type: practice-exercise
    id: validacion-opcion-invalida
  - type: practice-exercise
    id: boton-reiniciar
  - type: practice-exercise
    id: reto-integrador-completo
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `src/components/teaching/lessons/pbpew/10-dom-y-eventos/` (patrón sección + interactivos). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

**Nota proyecto:** la demo jugable es el ancla visual de la lección (prioridad de layout tras objetivos/prerrequisitos). Evitar estética gaming/neón; emojis del draft son texto educativo, no iconografía decorativa.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2, títulos `StepReveal` / `PracticeExercise` / `CodeChallenge`, botones demo |
| `--color-secondary` | `#00C2FF` | Borde `callout-info`, thead tablas, barra activa stepper, hover botones juego |
| `--color-accent` | `#6B4EFF` | Borde `callout-warning`, `PracticeExercise`, resaltado victoria jugador en demo |
| `--color-neutral-light` | `#F4F6F8` | Fondo página, filas alternas tablas |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, botones demo, inputs challenge |
| Profundidad clay | máx. 2 niveles | Nivel 1: `LessonLayout` → `ClayCard`; nivel 2: interactivos |

**Espaciado:** `mx-auto max-w-4xl px-6 py-12`; párrafos `my-4`; interactivos `my-6` o `my-8` (`ClayCard` wrappers). Demo hero: `my-8` mínimo tras H2.

### Jerarquía tipográfica

| Nivel | Clases | Color | Ejemplo |
|-------|--------|-------|---------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit | «Piedra, papel o tijera» en `LessonLayout` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | «Demo interactiva», «Determinar el ganador» |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | «Enfoque mantenible: objeto VENCE_A», «Alternativa didáctica» |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise` |
| H4 | `mb-2 font-semibold` | inherit | Pasos numerados en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` | `--color-neutral-dark` | Exposición y listas de requisitos |

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 (draft) | `clay_variant` sección | Bloques hijos |
|-------|----------------|------------|------------------------|---------------|
| 1 | `ObjetivosDeAprendizajeSection` | Objetivos de aprendizaje | — | Lista `<ul>` |
| 2 | `PrerrequisitosSection` | Prerrequisitos | — | Lista + enlaces lecciones |
| 3 | `ProyectoIntegradorIntroSection` | Proyecto integrador: un juego completo… | — | `MermaidDiagram` sequence |
| 4 | `DemoInteractivaSection` | Demo interactiva: juega una ronda ahora | **card** (hero) | `RockPaperScissorsDemo`, `Callout` |
| 5 | `ReglasDelJuegoSection` | Reglas del juego y modelo mental | stepper | `MermaidDiagram`, `StepReveal` |
| 6 | `ConstantesYEstadoSection` | Constantes y estado inicial | — | `CodeBlock`, `CodeChallenge` |
| 7 | `EleccionAleatoriaCpuSection` | Elección aleatoria de la CPU | — | `CodeBlock`, `Callout`, `CodeChallenge`, `PracticeExercise` |
| 8 | `DeterminarGanadorSection` | Determinar el ganador: lógica pura | — | H3×2, `CodeBlock`×2, `CompareTable`, `MermaidDiagram`, `CodeChallenge`, `PracticeExercise` |
| 9 | `MarcadorYRenderizadoSection` | Marcador y renderizado en el DOM | — | `CodeBlock`, `CompareTable`, `CodeChallenge`, `PracticeExercise` |
| 10 | `OrquestarRondaSection` | Orquestar la ronda y conectar eventos | — | `CodeBlock`×3, `Callout`, `CodeChallenge`×2 |
| 11 | `ValidacionDefensivaSection` | Validación defensiva y errores comunes | — | `CodeBlock`, lista errores, `Callout`, `PracticeExercise` |
| 12 | `ExtensionesOpcionalesSection` | Extensiones opcionales (nivel avanzado) | — | `CodeBlock`, lista retos, `PracticeExercise` |
| 13 | `RetoIntegradorSection` | Reto integrador | **card** | Requisitos prose + `PracticeExercise` |
| 14 | `CierreSection` | Cierre | **card** | Ideas clave + enlaces hermanos |
| 15 | `MiniquizSection` | Miniquiz | card | `Quiz` |

### Bloques interactivos — mapeo detallado

#### `ProyectoIntegradorIntroSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `flujo-ronda-sequence` | `MermaidDiagram` | sequenceDiagram usuario → botón → jugarRonda → CPU → ganador → DOM (draft L55–58) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |

#### `DemoInteractivaSection` *(prioridad layout)*

| id | Componente | Props | Clay |
|----|------------|-------|------|
| `demo-piedra-papel-tijera` | `RockPaperScissorsDemo` | opciones, emoji, showMarcador, showJugadas, highlightResultado, mensajeInicial (draft L66–74) | `ClayCard` `my-8 p-6`; grid 3 botones `clay-button` min-h ~44px; `#resultado` con clases estado: `ganaste` → borde accent suave, `empate` → secondary, `perdiste` → neutral; **no** gradientes neón |
| `que-observar-demo` | `Callout` | title: «Qué observar en la demo»; copy draft L76–80 | **callout-info**; `border-l-4 border-[var(--color-secondary)]` |

Colocar la demo **antes** del primer bloque de código largo. Un solo `ClayCard` para el demo; el `Callout` debajo con `my-6`, no anidado.

#### `ReglasDelJuegoSection`

| id | Componente | Props | Clay |
|----|------------|-------|------|
| `reglas-flowchart` | `MermaidDiagram` | flowchart piedra→tijera→papel (draft L93–96) | `my-6` entre lista de reglas y stepper |
| `una-ronda-paso-a-paso` | `StepReveal` | title: «Una ronda completa (paso a paso)»; 5 steps (draft L98–108) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]`; botones `clay-button` |

#### `ConstantesYEstadoSection`

| id | Componente | Clay |
|----|------------|------|
| Código OPCIONES/EMOJI/marcador | `CodeBlock` | lang `javascript`; `my-4` |
| `estado-inicial-marcador` | `CodeChallenge` | `ClayCard` `my-8`; 3 blanks en 0 |

#### `EleccionAleatoriaCpuSection`

| id | Componente | Clay |
|----|------------|------|
| `obtenerEleccionCpu` | `CodeBlock` | draft L146–155 |
| `error-frecuente-random` | `Callout` | **callout-warning**; borde accent |
| `indice-aleatorio-seguro` | `CodeChallenge` | blanks `floor`, `length` |
| `math-floor-indice` | `PracticeExercise` | accent border `my-8` |

#### `DeterminarGanadorSection`

| id | Componente | Clay |
|----|------------|------|
| Código `VENCE_A` | `CodeBlock` | bajo H3 mantenible |
| Código if/else | `CodeBlock` | bajo H3 alternativa |
| `if-vs-mapa-reglas` | `CompareTable` | `ClayCard` `my-8`; thead secondary |
| `determinar-ganador-flowchart` | `MermaidDiagram` | `my-6` tras tabla |
| `resultado-tijera-papel` | `CodeChallenge` | blank `jugador` |
| `separar-determinar-actualizar` | `PracticeExercise` | accent border |

#### `MarcadorYRenderizadoSection`

| id | Componente | Clay |
|----|------------|------|
| `actualizarMarcador` + `renderizarRonda` | `CodeBlock` | draft L260–287 |
| `mutar-vs-recrear-dom` | `CompareTable` | **callout-info** semántico vía tabla comparativa |
| `textcontent-marcador` | `CodeChallenge` | blank `textContent` |
| `incrementar-victorias` | `PracticeExercise` | accent border |

#### `OrquestarRondaSection`

| id | Componente | Clay |
|----|------------|------|
| `jugarRonda` | `CodeBlock` | draft L321–328 |
| Delegación + HTML | `CodeBlock` | `javascript` + `html`; `my-4` / `my-6` |
| `error-callback-mal-pasado` | `Callout` | **callout-warning** |
| `delegacion-data-choice` | `CodeChallenge` | blanks `click`, `choice` |
| `orden-flujo-ronda` | `CodeChallenge` | blanks orden ronda |

#### `ValidacionDefensivaSection`

| id | Componente | Clay |
|----|------------|------|
| `jugarRondaSegura` | `CodeBlock` | draft L393–402 |
| Lista errores típicos | prose `<ul>` | sin clay |
| `caso-real-marcador-miente` | `Callout` | **callout-info**; narrativa incidente |
| `validacion-opcion-invalida` | `PracticeExercise` | accent border |

#### `ExtensionesOpcionalesSection`

| id | Componente | Clay |
|----|------------|------|
| `setTimeout` ejemplo | `CodeBlock` | draft L430–443 |
| Lista retos 1–4 | prose `<ol>` | sin clay |
| `boton-reiniciar` | `PracticeExercise` | accent border |

#### `RetoIntegradorSection`

| id | Componente | Clay |
|----|------------|------|
| Requisitos / criterios | prose | H2 primary; listas numeradas |
| `reto-integrador-completo` | `PracticeExercise` | `ClayCard` accent; textarea `rows={8}` para pegar HTML+JS |

#### `CierreSection` + `MiniquizSection`

| id | Componente | Clay |
|----|------------|------|
| Ideas clave | prose `<ul>` | 5 viñetas draft L506–512 |
| Proyectos hermanos | prose enlaces | sin clay |
| `cierre-quiz` | `Quiz` | `ClayCard` `my-8`; 5 preguntas draft L520–578 |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Qué observar en la demo | `callout-info` | `--color-secondary` | Guía de observación antes del código |
| Error frecuente (Math.random / índice) | `callout-warning` | `--color-accent` | Preventivo; índice fuera de array |
| Error frecuente (callback mal pasado) | `callout-warning` | `--color-accent` | Patrón listeners lección 06 |
| Caso real: marcador que «miente» | `callout-info` | `--color-secondary` | Incidente producto; empate olvidado |

Implementación: prop `variant` en `Callout` o `className` con borde accent/secondary según tabla.

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── Objetivos / Prerrequisitos / intro (prose)
    ├── DemoInteractivaSection
    │   ├── RockPaperScissorsDemo (ClayCard nivel 2 — hero)
    │   └── Callout (ClayCard nivel 2)
    ├── Secciones técnicas (prose + interactivos nivel 2)
    │   ├── StepReveal (stepper)
    │   ├── CompareTable / CodeChallenge / PracticeExercise / Quiz
    │   ├── MermaidDiagram (superficie blanca)
    │   └── CodeBlock (superficie oscura)
    └── RetoIntegrador + Cierre + Quiz
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. En `DeterminarGanadorSection`: separar los dos `CodeBlock` con H3, no apilar dentro de un card padre.

### Densidad visual por sección

| Sección | Nivel clay | Notas |
|---------|------------|-------|
| Objetivos / Prerrequisitos | 0 | Solo prose |
| Intro proyecto | 1 | Un diagrama sequence |
| Demo interactiva | 2 | Hero demo + callout — máxima atención visual |
| Reglas | 2 | Flowchart + stepper 5 pasos |
| Constantes → Orquestar | 2 | Alternancia code / challenge / practice; 3 callouts repartidos |
| Validación / Extensiones | 1–2 | Caso real + practices opcionales |
| Reto integrador | 2 | Practice abierta grande |
| Cierre + Quiz | 2 | Quiz en card final |

### Componente nuevo: `RockPaperScissorsDemo`

Crear en `src/components/teaching/RockPaperScissorsDemo.tsx` (un componente por archivo).

| Elemento | Especificación Clay |
|----------|---------------------|
| Contenedor | `ClayCard` con `p-6` |
| Botones opción | `clay-button`; emoji + label; `data-choice` interno |
| Panel jugadas | `textContent`; tipografía Inter |
| `#marcador` | texto plano; separador `·` como en draft |
| Estados resultado | `classList` opcional: victoria jugador (accent suave), empate (secondary), derrota (neutral) — sin animaciones agresivas |
| Accesibilidad | `aria-live="polite"` en zona resultado |

### Checklist implementación (lesson-developer)

- [ ] Refactorizar stub `ContenidoSection` → 15 secciones del mapa
- [ ] Implementar `RockPaperScissorsDemo` según props del draft L66–74
- [ ] `DemoInteractivaSection` como primera sección jugable tras intro
- [ ] `StepReveal` 5 pasos en `ReglasDelJuegoSection`
- [ ] 4 `Callout` con variantes warning/info
- [ ] 2 `CompareTable`, 6 `CodeChallenge`, 6 `PracticeExercise`
- [ ] 3 `MermaidDiagram` (sequence, reglas LR, flowchart ganador)
- [ ] `Quiz` 5 preguntas en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] H2 unificado `text-2xl font-bold text-[var(--color-primary)]`
- [ ] Actualizar `PiedraPapelTijeraLesson.tsx` con orden del mapa

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

