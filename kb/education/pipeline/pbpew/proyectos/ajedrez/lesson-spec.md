---
track: pbpew
slug: proyectos/ajedrez
title: "Ajedrez en el navegador"
order: 100
lesson_type: proyecto-integrador
prev: "12-ajax-fetch"
next: null
interactive_blocks:
  - type: mermaid
    id: arquitectura-mvc-ajedrez
  - type: callout
    id: convencion-pbpew-fila-col
  - type: chess-board-demo
    id: demo-tablero-ajedrez
  - type: compare-table
    id: comparativa-2d-vs-plano
  - type: mermaid
    id: diagrama-filas-columnas
  - type: code-challenge
    id: challenge-reyes-matriz
  - type: practice-exercise
    id: practice-fuente-verdad
  - type: callout
    id: error-frecuente-innerhtml
  - type: practice-exercise
    id: practice-funcion-simbolo
  - type: step-reveal
    id: step-reveal-dos-clics
  - type: mermaid
    id: secuencia-dos-clics
  - type: practice-exercise
    id: practice-flujo-dos-clics
  - type: code-challenge
    id: challenge-alternar-turno
  - type: code-challenge
    id: challenge-validacion-rey
  - type: callout
    id: callout-progresion-incremental
  - type: step-reveal
    id: step-reveal-pila-deshacer
  - type: mermaid
    id: diagrama-pila-deshacer
  - type: practice-exercise
    id: practice-deshacer-pila
  - type: compare-table
    id: comparativa-manual-chessjs
  - type: practice-exercise
    id: practice-cuando-chessjs
  - type: practice-exercise
    id: reto-capstone-nivel-a
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/10-dom-y-eventos/lesson-spec.md` (§ Clay UI), implementación `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando exista.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, `ChessBoardDemo`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, hover toolbar demo |
| `--color-accent` | `#6B4EFF` | Borde `PracticeExercise`, `Callout` preventivos, casilla `.seleccionada` en demo, track breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla integración curricular |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs challenge, `CodeBlock`, contenedor demo tablero |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos y demo ajedrez |

**Espaciado (convención PBPEW / SEA):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía H2 + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard`, `ChessBoardDemo`, `CompareTable`, `StepReveal`).
- Tabla integración curricular (draft L598–608): prose `<table>` con `my-6`; preferir filas alternas `bg-[var(--color-neutral-light)]` sin `ClayCard` extra.
- Demo tablero: `my-10` — único bloque hero de la lección; margen superior generoso tras intro capstone.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

**Nota capstone:** evitar estética «gaming» (ADR 003). Casillas del tablero usan tonos madera del draft (`#f0d9b5` / `#b58863`) solo dentro del demo; selección y último movimiento usan `--color-accent` con opacidad, no azul genérico del draft.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | «Ajedrez en el navegador» en `LessonLayout` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Modelo: tablero como matriz 2D`, `Reto integrador` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Bug de coordenadas invertidas`, `Nivel A — Demo obligatoria` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título `ChessBoardDemo`, `StepReveal`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Pasos numerados en reto (ítems 1–15), subtítulos en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` | `--color-neutral-dark` | Intro capstone, casos reales, cierre |

**H2 sugeridos (alinear con draft):** «Proyecto capstone: integrar todo el track», «Demo: tablero interactivo», «Modelo: tablero como matriz 2D», «Vista: renderizado en el DOM», «Controlador: eventos y flujo de dos clics», «Validación de movimientos», «Deshacer y persistencia», «Casos reales», «Retos avanzados (Nivel C)», «Reto integrador», «Cierre».

**H3 sugeridos:** «Bug de coordenadas invertidas», «Partida corrupta en localStorage», «Nivel A — Demo obligatoria», «Nivel B — Persistencia e historial», «Nivel C — Desafío profundo».

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista 6 objetivos medibles |
| 2 | `PrerrequisitosSection` | Prerrequisitos | — (prose) | Lista enlazada lecciones 01–12 + proyectos hermanos |
| 3 | `ProyectoCapstoneSection` | Proyecto capstone: integrar todo el track | card | prose progresión 6 pasos, `MermaidDiagram`, `Callout` |
| 4 | `DemoTableroSection` | Demo: tablero interactivo | card | prose breve, `ChessBoardDemo` |
| 5 | `ModeloMatriz2DSection` | Modelo: tablero como matriz 2D | card | prose, `CompareTable`, `MermaidDiagram`, `CodeBlock` JS, `CodeChallenge`, `PracticeExercise` |
| 6 | `VistaRenderizadoSection` | Vista: renderizado en el DOM | card | `CodeBlock` HTML/CSS/JS, `Callout`, `PracticeExercise` |
| 7 | `ControladorEventosSection` | Controlador: eventos y flujo de dos clics | stepper | prose flujo, `StepReveal`, `MermaidDiagram`, `CodeBlock`, `PracticeExercise`, `CodeChallenge` |
| 8 | `ValidacionMovimientosSection` | Validación de movimientos | card | prose MVP, `CodeBlock`, `CodeChallenge`, `Callout` |
| 9 | `DeshacerPersistenciaSection` | Deshacer y persistencia | stepper | prose LIFO + localStorage, `StepReveal`, `MermaidDiagram`, `CodeBlock`, `PracticeExercise` |
| 10 | `CasosRealesSection` | Casos reales | callout-info | H3 ×2 casos (prose); sin card contenedora extra |
| 11 | `RetosAvanzadosSection` | Retos avanzados (Nivel C) | card | `CompareTable`, lista numerada 11–15, `CodeBlock` ×2, `PracticeExercise` |
| 12 | `RetoIntegradorSection` | Reto integrador | card | H3 Niveles A/B/C, tabla integración curricular, `CodeBlock` HTML esqueleto, `PracticeExercise` |
| 13 | `CierreSection` | Cierre | card | Ideas clave + siguiente paso + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| Elemento | Clay |
|----------|------|
| Lista 6 objetivos (draft L34–41) | prose `<ul>`; sin `ClayCard` |

#### `PrerrequisitosSection`

| Elemento | Clay |
|----------|------|
| Lista prerrequisitos (draft L45–54) | prose `<ul>` con enlaces; sin `ClayCard` |

#### `ProyectoCapstoneSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro capstone | prose | síntesis track, progresión 1→6 (draft L58–64) | Sin clay |
| `arquitectura-mvc-ajedrez` | `MermaidDiagram` | flowchart vista/control/modelo (draft L66–68) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `convencion-pbpew-fila-col` | `Callout` | title: «Convención PBPEW»; fila/col 0–7 (draft L71–75) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |

#### `DemoTableroSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro demo | prose | probar tablero antes del detalle (draft L81) | Sin clay |
| `demo-tablero-ajedrez` | `ChessBoardDemo` | title, rules minimal, pieces K+P, toolbar nueva/deshacer/guardar/cargar (draft L83–92) | `ClayCard` `my-10 p-6`; borde sutil `border-[var(--color-secondary)]/20`; tablero centrado `mx-auto`; toolbar botones clay `rounded-xl` con hover secondary; **no** iconografía gaming |

#### `ModeloMatriz2DSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro modelo | prose | códigos pieza, fuente de verdad (draft L96–100) | Sin clay |
| `comparativa-2d-vs-plano` | `CompareTable` | 4 filas 2D vs plano (draft L102–111) | `ClayCard` `my-8`; thead secondary |
| `diagrama-filas-columnas` | `MermaidDiagram` | fila 0 negras / fila 7 blancas (draft L113–116) | `my-6` |
| `posicion-inicial-js` | `CodeBlock` | POSICION_INICIAL, SIMBOLOS, estado (draft L118–151) | Fondo `--color-neutral-dark`, `my-4` |
| Coordenadas vs algebraicas | prose | párrafo post-code (draft L153) | Sin clay |
| `challenge-reyes-matriz` | `CodeChallenge` | blanks filas reyes (draft L155–163) | `ClayCard` `my-8` |
| `practice-fuente-verdad` | `PracticeExercise` | matriz vs DOM (draft L165–171) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `VistaRenderizadoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro vista | prose | CSS Grid, data-fila/col, Unicode (draft L177) | Sin clay |
| `vista-html` | `CodeBlock` | lang html; #tablero, barra, #estado (draft L179–189) | `my-4` |
| `vista-css` | `CodeBlock` | lang css; grid, clara/oscura, seleccionada con `--color-accent` (draft L191–210) | `my-4`; reemplazar `#3b82f6` del draft por token accent |
| `vista-js-render` | `CodeBlock` | crearTableroHTML (draft L212–237) | `my-4` |
| `error-frecuente-innerhtml` | `Callout` | title: «Error frecuente»; textContent vs XSS (draft L239–243) | **callout-warning**; borde accent |
| `practice-funcion-simbolo` | `PracticeExercise` | function simbolo(codigo) (draft L245–251) | accent border |

#### `ControladorEventosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro delegación | prose | un listener, flujo 1–2–3 (draft L257–263) | Sin clay |
| `step-reveal-dos-clics` | `StepReveal` | title: «Flujo de dos clics»; 5 steps (draft L265–275) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` |
| `secuencia-dos-clics` | `MermaidDiagram` | sequenceDiagram usuario→vista→control→modelo (draft L277–280) | `my-6` tras stepper |
| `controlador-js` | `CodeBlock` | addEventListener, manejarClic, actualizarEstadoUI (draft L282–324) | `my-4` |
| `practice-flujo-dos-clics` | `PracticeExercise` | explicar seleccionar→mover (draft L326–332) | accent border |
| `challenge-alternar-turno` | `CodeChallenge` | blanks "b" / "w" (draft L334–342) | `ClayCard` `my-8` |

#### `ValidacionMovimientosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro validación | prose | funciones puras, MVP rey/peón (draft L346–350) | Sin clay |
| `validacion-js` | `CodeBlock` | movimientoLegal, movimientoPeon, aplicarMovimiento (draft L352–396) | `my-4` |
| `challenge-validacion-rey` | `CodeChallenge` | blanks df/dc <= 1 (draft L398–406) | `ClayCard` `my-8` |
| `callout-progresion-incremental` | `Callout` | title: «No implementes todo de golpe»; MVP antes de reglas completas (draft L408–412) | **callout-warning**; borde accent |

#### `DeshacerPersistenciaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro pila + storage | prose | LIFO, JSON versionado (draft L416–420) | Sin clay |
| `step-reveal-pila-deshacer` | `StepReveal` | title: «Pila deshacer (LIFO)»; 4 steps (draft L422–431) | `ClayCard` **stepper** |
| `diagrama-pila-deshacer` | `MermaidDiagram` | push → pop (draft L433–436) | `my-6` |
| `persistencia-js` | `CodeBlock` | historial, guardarPartida, cargarPartida (draft L438–476) | `my-4` |
| `practice-deshacer-pila` | `PracticeExercise` | push/pop + qué restaurar (draft L478–484) | accent border |

#### `CasosRealesSection`

| Elemento | Clay |
|----------|------|
| H3 «Bug de coordenadas invertidas» (draft L490–492) | prose; párrafo decisión clave en **callout-info** inline (`border-l-4 border-secondary pl-4`) |
| H3 «Partida corrupta en localStorage» (draft L494–496) | prose; tono incidente profesional, sin card anidada |
| Sección completa | **callout-info** semántico: fondo `neutral-light/50`, `rounded-xl p-6 my-8`; máx. 1 nivel clay (no card dentro de card) |

#### `RetosAvanzadosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro nivel C | prose | elegir tras MVP A y B (draft L500–502) | Sin clay |
| `comparativa-manual-chessjs` | `CompareTable` | validación manual vs chess.js (draft L504–513) | `ClayCard` `my-8`; thead secondary |
| Lista 11–15 | prose `<ol>` | reglas ampliadas, jaque, chess.js, UX, clases (draft L515–533) | Sin clay |
| `chessjs-ejemplo` | `CodeBlock` | import Chess (draft L521–529) | `my-4` |
| `clase-pieza-ejemplo` | `CodeBlock` | class Pieza (draft L535–552) | `my-4` |
| `practice-cuando-chessjs` | `PracticeExercise` | cuándo usar chess.js (draft L554–560) | accent border |

#### `RetoIntegradorSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Título capstone | prose + H3 | tres niveles A/B/C (draft L566–594) | H2 primary |
| Tabla integración curricular | prose `<table>` | lección → aplicación (draft L596–608) | `my-6`; filas alternas neutral-light |
| `esqueleto-html-capstone` | `CodeBlock` | HTML main + scripts MVC (draft L610–635) | `my-6` |
| `reto-capstone-nivel-a` | `PracticeExercise` | implementar Nivel A; 4 hints (draft L637–648) | `ClayCard` accent; textarea `rows={10}` |

#### `CierreSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro cierre | prose | capstone completado (draft L654) | Sin clay |
| Ideas clave | prose `<ul>` | 5 viñetas (draft L656–662) | Sin clay |
| Siguiente paso | prose `<p>` | proyectos hermanos (draft L664) | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas matriz/delegación/peón/pila/JSON (draft L670–728) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Convención PBPEW fila/col | `callout-info` | `--color-secondary` (`#00C2FF`) | Convención docente; evitar invertir índices |
| Error frecuente innerHTML | `callout-warning` | `--color-accent` (`#6B4EFF`) | Seguridad; preferir textContent + Unicode |
| No implementes todo de golpe | `callout-warning` | `--color-accent` | Anti-bloqueo; progresión MVP rey/peón |
| Casos reales (decisión clave) | `callout-info` | `--color-secondary` | Incidentes profesionales; coordenadas y JSON corrupto |

Implementación: `Callout.tsx` — **callout-warning** → `border-[var(--color-accent)]`; **callout-info** → `border-[var(--color-secondary)]`.

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1 — contenedor lección)
    ├── section × N (Objetivos, Prerrequisitos: prose sin card)
    └── Interactivos (nivel 2)
        ├── ChessBoardDemo (ClayCard hero; tablero no es clay anidado)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (superficie blanca, no clay)
        └── CodeBlock (superficie oscura, no clay)
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. `CasosRealesSection`: un solo contenedor info; no anidar `Callout` dentro de `ClayCard` padre. En `ControladorEventosSection` y `DeshacerPersistenciaSection`: separar `StepReveal` y diagrama adyacente con párrafo o `my-6`, no stepper dentro de card padre.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos / Prerrequisitos | 0 | Solo prose |
| Proyecto capstone | 1–2 | 1 mermaid + 1 callout info |
| Demo tablero | 2 | Hero `ChessBoardDemo`; único bloque con margen `my-10` |
| Modelo matriz 2D | 2 | Compare + mermaid + challenge + practice; sección más densa del bloque «datos» |
| Vista DOM | 2 | 3 code blocks + callout + practice |
| Controlador eventos | 2 | Stepper central + sequence + 2 interactivos |
| Validación | 2 | Code block largo + challenge + callout warning |
| Deshacer / persistencia | 2 | Stepper LIFO + flowchart + practice |
| Casos reales | 1 | Superficie info única; sin gaming |
| Retos avanzados | 2 | Compare chess.js + 2 code blocks + practice |
| Reto integrador | 2 | Tabla prose + HTML esqueleto + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] Refactorizar `ContenidoSection` monolítico en 13 secciones del mapa
- [ ] Implementar `ChessBoardDemo` con props del draft; selección/último movimiento con `--color-accent`
- [ ] Crear `ProyectoCapstoneSection` con `MermaidDiagram` + `Callout` convención
- [ ] Crear `ModeloMatriz2DSection` con `CompareTable`, diagrama, `CodeChallenge`, `PracticeExercise`
- [ ] Crear `VistaRenderizadoSection` con 3 `CodeBlock`; CSS alineado a tokens brand
- [ ] Crear `ControladorEventosSection` con `StepReveal` dos clics + sequence + challenge
- [ ] Crear `ValidacionMovimientosSection` + callout progresión incremental
- [ ] Crear `DeshacerPersistenciaSection` con stepper LIFO + diagrama push/pop
- [ ] Crear `CasosRealesSection` con H3 ×2 y superficie callout-info
- [ ] Crear `RetosAvanzadosSection` + `RetoIntegradorSection` + `CierreSection` con `Quiz`
- [ ] Registrar quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] Actualizar `AjedrezLesson.tsx` con orden de secciones del mapa
- [ ] H2/H3 según jerarquía tipográfica de esta spec

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

