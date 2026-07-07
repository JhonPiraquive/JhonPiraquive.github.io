---
track: pbpew
slug: proyectos/calculadora
title: "Calculadora interactiva"
order: 101
prev: "12-ajax-fetch"
next: "proyectos/todo-list"
interactive_blocks:
  - type: demo-calculadora
    id: demo-calculadora
  - type: compare-table
    id: capas-html-css-js-dom
  - type: mermaid
    id: diagrama-estado-calculadora
  - type: callout
    id: sin-eval
  - type: code-challenge
    id: cc-calc-estado-inicial
  - type: mermaid
    id: flujo-calcular-pura
  - type: code-challenge
    id: cc-calc-calcular-switch
  - type: mermaid
    id: secuencia-delegacion-display
  - type: code-challenge
    id: cc-calc-delegacion-listener
  - type: step-reveal
    id: construye-calculadora-6-pasos
  - type: step-reveal
    id: flujo-clic-igual
  - type: callout
    id: precision-flotantes
  - type: practice-exercise
    id: pe-calc-flujo-operador
  - type: practice-exercise
    id: pe-calc-debug-display
  - type: practice-exercise
    id: pe-calc-division-cero
  - type: practice-exercise
    id: pe-calc-parseFloat
  - type: practice-exercise
    id: pe-calc-textcontent-vs-innerhtml
  - type: practice-exercise
    id: pe-calc-estado-vs-display
  - type: practice-exercise
    id: pe-calc-orden-flujo
  - type: practice-exercise
    id: pe-calc-limpiar
  - type: practice-exercise
    id: pe-calc-infinity-js
  - type: practice-exercise
    id: pe-calc-por-que-no-eval
  - type: practice-exercise
    id: pe-calc-reto-integrador
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/10-dom-y-eventos/lesson-spec.md` (§ Clay UI), implementación `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, display de la demo |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, hover botones operador en demo |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos (`sin-eval`), botón `C` en demo |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla, fondo rejilla teclado demo |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock`, texto display en estado normal |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock`, contenedor `.calculadora` en demo |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, demo, etc.) |

**Espaciado (convención PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers, `PracticeExercise`, `CodeChallenge`).
- Tabla variables de estado (draft L80–85): prose `<table>` con `my-4`; no envolver en `ClayCard` extra si la sección ya es **card**.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Demo en vivo`, `Estado en memoria y pantalla`, `Reto integrador` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | Sub-bloques dentro de secciones largas (p. ej. casos reales) |
| H4 | `mb-2 font-semibold` | inherit | Títulos de casos reales («Widget de cotización…», «App de propinas…») |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 (step) | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («1. Maqueta HTML», «2. Calcular») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Intro proyecto integrador, regla pedagógica vista vs estado |

**H2 sugeridos (alinear con brand-identity-expert cuando exista § Brand):**

- «Proyecto integrador: calculadora interactiva»
- «Demo en vivo: prueba la calculadora»
- «Estado en memoria y pantalla»
- «Maqueta HTML»
- «Variables de estado y referencias DOM»
- «Función pura `calcular`»
- «Delegación de eventos en el teclado»
- «Dígitos, punto decimal y operadores»
- «Igual, limpiar y errores»
- «Casos reales»
- «Práctica profunda»
- «Comprueba tu comprensión»
- «Reto integrador: calculadora interactiva completa»
- «Cierre de la lección»

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista `<ul>` 6 objetivos |
| 2 | `PrerrequisitosSection` | Prerrequisitos | — (prose) | Lista enlazada lecciones 01–12 |
| 3 | `IntroProyectoSection` | Proyecto integrador: calculadora interactiva | — | prose intro + regla sin `eval` |
| 4 | `DemoCalculadoraSection` | Demo en vivo: prueba la calculadora | card | prose, `DemoCalculadora` embebida |
| 5 | `EstadoMemoriaSection` | Estado en memoria y pantalla | card | prose + tabla variables, `CompareTable`, `MermaidDiagram`, `Callout` |
| 6 | `MaquetaHtmlSection` | Maqueta HTML | card | prose + `CodeBlock` html |
| 7 | `VariablesEstadoSection` | Variables de estado y referencias DOM | card | prose + `CodeBlock` js + `CodeChallenge` |
| 8 | `FuncionCalcularSection` | Función pura `calcular` | card | prose + `CodeBlock` + `MermaidDiagram` + `CodeChallenge` |
| 9 | `DelegacionEventosSection` | Delegación de eventos en el teclado | stepper | prose + `CodeBlock` + `MermaidDiagram` + `CodeChallenge` |
| 10 | `DigitosOperadoresSection` | Dígitos, punto decimal y operadores | card | prose + `CodeBlock` + `StepReveal` 6 pasos |
| 11 | `IgualLimpiarErroresSection` | Igual, limpiar y errores | card | prose + `CodeBlock` + `StepReveal` 4 pasos + `Callout` |
| 12 | `CasosRealesSection` | Casos reales | card | 2 casos H4 + prose narrativa |
| 13 | `PracticaProfundaSection` | Práctica profunda | card | `PracticeExercise` ×7 apilados |
| 14 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | lead prose + `PracticeExercise` ×3 |
| 15 | `RetoIntegradorSection` | Reto integrador: calculadora interactiva completa | card | enunciado + lista requisitos + `CodeBlock` ×2 + `PracticeExercise` |
| 16 | `CierreSection` | Cierre de la lección | card | ideas clave + enlace `proyectos/todo-list` + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| Elemento | Clay |
|----------|------|
| Lista 6 objetivos (draft L29–36) | prose `<ul>`; sin `ClayCard` |

#### `PrerrequisitosSection`

| Elemento | Clay |
|----------|------|
| Lista prerrequisitos (draft L38–45) | prose `<ul>` con enlaces; sin `ClayCard` |

#### `IntroProyectoSection`

| Elemento | Clay |
|----------|------|
| Intro primera lección-proyecto (draft L49–55) | prose; énfasis **primera de cuatro** y regla vista vs estado; sin clay |

#### `DemoCalculadoraSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Lead | prose | interactuar antes de código; estados normal / resultado / error (draft L61–63) | Sin clay |
| `demo-calculadora` | `DemoCalculadora` | `ariaLive`, botones, `displayLabels`, `errorMessages`, `hint` (draft L65–72) | `ClayCard` `my-8 p-6`; contenedor `.calculadora` radius `24px`, sombra dual; display `bg-white` `text-[var(--color-primary)]` `font-mono text-2xl`; botones dígito `min-h-11 min-w-11` (~44px); operadores hover `border-secondary`; `C` accent; estado error display `text-red-600` |

**Nota demo:** el widget es nivel 2 clay dentro de sección **card**; no anidar `ClayCard` dentro de otro `ClayCard` — la demo usa superficie clay propia (`rounded-2xl shadow-clay`) sin wrapper `ClayCard` adicional si la sección ya declara variant card.

#### `EstadoMemoriaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro variables | prose | 4 variables + `textContent` (draft L76–87) | Sin clay |
| Tabla variables | prose `<table>` | operandoActual, operandoAnterior, operadorPendiente, esperandoNuevoOperando (draft L80–85) | `my-4`; thead opcional secondary si estilizada |
| `capas-html-css-js-dom` | `CompareTable` | 4 filas HTML/CSS/JS/DOM (draft L89–98) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| `diagrama-estado-calculadora` | `MermaidDiagram` | stateDiagram-v2 flujo calculadora (draft L100–103) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `sin-eval` | `Callout` | title: «Sin eval()»; riesgos seguridad + control flujo (draft L105–109) | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |

#### `MaquetaHtmlSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro maqueta | prose | `data-action` / `data-value`, mapeo × ÷ (draft L113–115) | Sin clay |
| `maqueta-html-calculadora` | `CodeBlock` | lang html; estructura `.calculadora` (draft L117–134) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |

#### `VariablesEstadoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro enlazar eventos | prose | script defer / DOMContentLoaded (draft L138–140) | Sin clay |
| `variables-estado-inicial` | `CodeBlock` | display, teclado, 4 variables, actualizarPantalla (draft L142–155) | `my-4` |
| `cc-calc-estado-inicial` | `CodeChallenge` | 4 blanks inicialización (draft L157–168) | `ClayCard` `my-8`; inputs `rounded-xl` |

#### `FuncionCalcularSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro función pura | prose | parseFloat al evaluar; strings al armar (draft L172–174) | Sin clay |
| `funcion-calcular` | `CodeBlock` | calcular con NaN, ÷0, switch (draft L176–206) | `my-4` |
| `flujo-calcular-pura` | `MermaidDiagram` | flowchart validación NaN / ÷0 / switch (draft L208–211) | `my-6` |
| `cc-calc-calcular-switch` | `CodeChallenge` | blanks operadores aritméticos (draft L213–224) | `ClayCard` `my-8` |

#### `DelegacionEventosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro delegación | prose | un listener, `closest("button")` (draft L228–230) | Sin clay |
| `delegacion-teclado` | `CodeBlock` | listener click + dataset.action (draft L232–252) | `my-4` |
| `secuencia-delegacion-display` | `MermaidDiagram` | sequenceDiagram clic → manejarDigito → display (draft L254–257) | `my-6` |
| `cc-calc-delegacion-listener` | `CodeChallenge` | blanks click, closest, action (draft L259–269) | `ClayCard` `my-8` |

Sección marcada **stepper** por densidad de flujo evento → DOM; el stepper propiamente dicho aparece en secciones 10–11.

#### `DigitosOperadoresSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro encadenamiento | prose | operador sin `=` recalcula intermedio (draft L273–275) | Sin clay |
| `manejar-digito-operador` | `CodeBlock` | manejarDigito, manejarPunto, manejarOperador (draft L277–318) | `my-4` |
| `construye-calculadora-6-pasos` | `StepReveal` | title: «Construye la calculadora en 6 pasos»; 6 steps (draft L320–349) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |

#### `IgualLimpiarErroresSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro división por cero | prose | `Infinity` sin excepción (draft L353–355) | Sin clay |
| `igual-limpiar-error` | `CodeBlock` | manejarIgual, limpiar, mostrarError (draft L357–392) | `my-4` |
| `flujo-clic-igual` | `StepReveal` | title: «Flujo de un clic en =»; 4 steps (draft L394–415) | `ClayCard` **stepper** |
| `precision-flotantes` | `Callout` | title: «Precisión de flotantes»; 0.1+0.2, toFixed opcional (draft L417–421) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |

#### `CasosRealesSection`

| Elemento | Clay |
|----------|------|
| Caso 1 fintech (draft L427–431) | H4 + prose; **callout-info** opcional inline con borde secondary si se extrae «Decisión clave» |
| Caso 2 propinas Infinity (draft L433–437) | H4 + prose; tono incidente profesional |
| Sección contenedora | **card**; sin `ClayCard` por caso — prose dentro de `<section>` |

#### `PracticaProfundaSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| Lead | prose | consolidar delegación, estado, errores (draft L441–443) | Sin clay |
| `pe-calc-flujo-operador` | `PracticeExercise` | estado tras 12 + 5 (draft L445–455) | accent border `my-8` |
| `pe-calc-debug-display` | `PracticeExercise` | bug solo textContent (draft L457–467) | accent border |
| `pe-calc-division-cero` | `PracticeExercise` | bloque if ÷0 (draft L469–479) | accent border |
| `pe-calc-parseFloat` | `PracticeExercise` | 12.5.3 y segundo punto (draft L481–491) | accent border |
| `pe-calc-textcontent-vs-innerhtml` | `PracticeExercise` | una frase textContent (draft L493–500) | accent border |
| `pe-calc-estado-vs-display` | `PracticeExercise` | estado vs solo display (draft L502–511) | accent border |
| `pe-calc-orden-flujo` | `PracticeExercise` | orden 7 + 3 = (draft L513–519) | accent border |

Apilar con `my-8` entre ejercicios; H2 en **card**.

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| Lead | prose | antes del reto (draft L523–525) | Sin clay |
| `pe-calc-limpiar` | `PracticeExercise` | function limpiar() (draft L527–537) | accent border |
| `pe-calc-infinity-js` | `PracticeExercise` | 8/0 e Infinity (draft L539–545) | accent border |
| `pe-calc-por-que-no-eval` | `PracticeExercise` | por qué no eval (draft L547–553) | accent border |

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | «Calculadora interactiva completa»; 7 requisitos + criterio éxito (draft L557–573) | H2 primary |
| `reto-html-calculadora` | `CodeBlock` | HTML esqueleto (draft L575–594) | `my-4` |
| `reto-esqueleto-js` | `CodeBlock` | JS esqueleto funciones (draft L596–625) | `my-6` |
| `pe-calc-reto-integrador` | `PracticeExercise` | implementar reto; 4 hints (draft L627–638) | `ClayCard` accent; textarea `rows={10}` |

#### `CierreSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Intro cierre | prose | primer proyecto integrador (draft L642–644) | Sin clay |
| Ideas clave | prose `<ul>` | 5 viñetas (draft L646–652) | Sin clay |
| Siguiente paso | prose `<p>` | enlace `proyectos/todo-list` (draft L654) | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas estado/delegación/parseFloat/÷0/textContent (draft L660–719) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Sin `eval()` ni `Function()` | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; seguridad + refuerzo lección 04 |
| Precisión de flotantes (0.1 + 0.2) | `callout-info` | `--color-secondary` (`#00C2FF`) | Nota técnica UX; no exigir precisión binaria |
| Casos reales (opcional «Decisión clave») | `callout-info` | `--color-secondary` | Incidente profesional; UI como vista del estado |

Implementación: `Callout.tsx` usa `border-secondary` por defecto; **callout-warning** → `border-[var(--color-accent)]` vía prop `variant` o `className`.

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1 — contenedor lección)
    ├── section × N (prose Objetivos / Prerrequisitos / Intro — sin card)
    └── Interactivos (nivel 2)
        ├── DemoCalculadora (superficie clay propia; botones táctiles)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (superficie blanca, no clay)
        └── CodeBlock (superficie oscura, no clay)
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. En `DigitosOperadoresSection` e `IgualLimpiarErroresSection`: separar `StepReveal` del `CodeBlock` precedente con párrafo o `my-6`; no anidar steppers.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos / Prerrequisitos / Intro | 0 | Solo prose |
| Demo en vivo | 1–2 | Widget embebido; punto focal de la lección |
| Estado en memoria | 2 | Tabla + CompareTable + diagrama + callout warning |
| Maqueta HTML | 1 | Un code block |
| Variables / Función calcular / Delegación | 2 | Code + diagrama/challenge cada una |
| Dígitos y operadores | 2 | Code largo + stepper 6 pasos |
| Igual, limpiar y errores | 2 | Code + stepper 4 pasos + callout info |
| Casos reales | 1 | Narrativa en card; sin interactivos |
| Práctica profunda | 2 | 7 `PracticeExercise` — sección más densa |
| Comprueba tu comprensión | 2 | 3 ejercicios formativos |
| Reto integrador | 2 | 2 `CodeBlock` + practice abierta |
| Cierre + Quiz | 2 | Quiz final en `ClayCard` |

### Checklist implementación (lesson-developer)

- [ ] Crear `DemoCalculadora` con estados normal / resultado / error y hint del draft
- [ ] Refactorizar `CalculadoraLesson.tsx`: orden de 16 secciones del mapa
- [ ] `ObjetivosSection`, `PrerrequisitosSection`, `IntroProyectoSection`
- [ ] `DemoCalculadoraSection` con widget clay (botones ≥44px, aria-live)
- [ ] `EstadoMemoriaSection`: tabla variables, `CompareTable`, `MermaidDiagram`, callout `sin-eval`
- [ ] `MaquetaHtmlSection`, `VariablesEstadoSection` + `CodeChallenge` estado inicial
- [ ] `FuncionCalcularSection` + diagrama flujo + challenge switch
- [ ] `DelegacionEventosSection` + sequence diagram + challenge delegación
- [ ] `DigitosOperadoresSection` + `StepReveal` 6 pasos
- [ ] `IgualLimpiarErroresSection` + `StepReveal` 4 pasos + callout flotantes
- [ ] `CasosRealesSection` (2 H4)
- [ ] `PracticaProfundaSection` (7 `PracticeExercise`)
- [ ] `CompruebaTuComprensionSection` (3 ejercicios)
- [ ] `RetoIntegradorSection` (2 `CodeBlock` + practice)
- [ ] `CierreSection` + `Quiz`; registrar en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] H2 según tabla jerarquía; H4 solo en casos reales
