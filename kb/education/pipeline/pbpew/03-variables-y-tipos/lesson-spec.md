## Clay UI

Contribución de **clay-ui-expert**. Referencia de implementación: `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/` y `src/components/teaching/lessons/sea/historia-redes-y-seguridad/` (patrón `section` + `h2` + componente interactivo). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos de `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención SEA / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: cada `<section>` sin margen extra; el ritmo lo dan `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tabla markdown de primitivos (draft): convertir a `CompareTable` o prose `<table>` dentro de `ClayCard`; preferir `CompareTable` para consistencia clay.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué es una variable?`, `var, let y const`, `Tipos de datos principales` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Tipos primitivos`, `Objetos (tipo referencia)`, `Inspeccionar tipos con typeof` |
| H4 | `mt-4 mb-2 text-lg font-semibold` | inherit | `Hoisting (“elevación”)` — subsección bajo `var, let y const` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 (interactivo) | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Texto expositivo, regla práctica numerada |

**Nota brand:** si brand-identity-expert refina headings (p. ej. `Declaración de variables en JavaScript`), mantener las mismas clases clay.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos del tema | — (prose) | Lista `<ul>` de objetivos medibles |
| 2 | `QueEsUnaVariableSection` | ¿Qué es una variable? | — | `Callout`, `MermaidDiagram`, `CodeBlock`, `Callout` |
| 3 | `VarLetYConstSection` | var, let y const | stepper | Regla práctica, `CompareTable`, `CodeBlock` ×3, H4 Hoisting, `StepReveal`, `MermaidDiagram`, `CodeBlock` ×2, `Callout`, `CodeChallenge` |
| 4 | `TiposDeDatosPrincipalesSection` | Tipos de datos principales | — | H3 ×3, `MermaidDiagram`, `CodeBlock`, `StepReveal`, `CodeBlock`, `Callout`, `CodeBlock`, `PracticeExercise` ×2, `CodeChallenge` |
| 5 | `ResumenSection` | Resumen | — | Viñetas en prose |
| 6 | `CompruebaTuComprensionSection` *(pendiente)* | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 7 | `RetoIntegradorSection` *(pendiente)* | Reto integrador: depurar el módulo de perfil | card | `CodeBlock` enunciado + lista tareas + `PracticeExercise` |
| 8 | `CierreSection` *(pendiente)* | Cierre de la lección | card | Ideas clave + enlace lección 04 + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `QueEsUnaVariableSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `error-frecuente-nombre-vs-valor` | `Callout` | title: «Error frecuente»; nombre vs valor (draft L50–54) | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |
| `primitivo-vs-referencia` | `MermaidDiagram` | flowchart primitivo / referencia (draft L56–59) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `let-contador-const-url` | `CodeBlock` | `let contador`, `const URL_API` (draft L62–68) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| `caso-checkout-ecommerce` | `Callout` | title: «Caso real: checkout e-commerce»; string + number (draft L70–74) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |

#### `VarLetYConstSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Regla práctica | prose `<ol>` | 3 reglas const/let/var (draft L82–86) | Sin clay; lista numerada `my-4` |
| `var-let-const-comparativa` | `CompareTable` | 5 columnas: Palabra, Reasignar, Redeclarar, Alcance, Hoisting (draft L96–104) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| `let-const-basico` | `CodeBlock` | contador + URL_API (draft L106–113) | `my-4` |
| `const-mutacion-objeto` | `CodeBlock` | `usuario.nombre` mutación (draft L115–121) | `my-4` |
| `var-bloque-vs-let` | `CodeBlock` | `var xVar` / `let xLet` en bloque (draft L123–131) | `my-4` |
| Hoisting (H4) | `<h4>` | «Hoisting (“elevación”)» | `mt-4 mb-2 text-lg font-semibold` |
| `ciclo-vida-variable` | `StepReveal` | title: «Ciclo de vida de una variable»; 5 steps (draft L140–165) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| `fases-hoisting` | `MermaidDiagram` | flowchart parseo → hoisting → ejecución (draft L167–170) | `my-6` tras `StepReveal` |
| `hoisting-var-undefined` | `CodeBlock` | `console.log(a); var a = 5` (draft L172–177) | `my-4` |
| `hoisting-let-tdz` | `CodeBlock` | try/catch ReferenceError con `let b` (draft L179–187) | `my-4` |
| `caso-panel-configuracion` | `Callout` | title: «Caso real: panel de configuración»; const + mutación (draft L189–193) | **callout-info** |
| `contador-let-const` | `CodeChallenge` | blanks `let`, `const` (draft L195–203) | `ClayCard` `my-8`; inputs `rounded-xl` |

#### `TiposDeDatosPrincipalesSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Tipos primitivos (H3) | `CompareTable` o prose table | 7 primitivos (draft L213–221) | `ClayCard` `my-6` si `CompareTable`; thead secondary |
| Objetos (H3) | prose | copia por referencia (draft L225–227) | Sin clay |
| typeof (H3) | prose | peculiaridad `typeof null` (draft L229–233) | Sin clay |
| `arbol-tipos-js` | `MermaidDiagram` | flowchart primitivos / objetos (draft L235–238) | `my-6` |
| `typeof-ejemplos` | `CodeBlock` | 7 `typeof` (draft L240–257) | `my-4` |
| `typeof-consola-pasos` | `StepReveal` | title: «typeof en consola — resultado esperado»; 5 steps (draft L259–269) | **stepper** |
| `copia-referencia-objeto` | `CodeBlock` | `original` / `copiaReferencia` (draft L271–279) | `my-4` |
| `coercion-preview-04` | `Callout` | title: «Coerción de tipos (preview lección 04)» (draft L281–285) | **callout-warning** (accent); anticipa sorpresas de tipo |
| `coercion-ejemplos` | `CodeBlock` | `"5" + 1`, `==` vs `===` (draft L287–293) | `my-4` |
| `const-vs-let-equipos` | `PracticeExercise` | prompt const/let en equipos (draft L295–301) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |
| `undefined-vs-null` | `PracticeExercise` | diferencia + ejemplo app (draft L303–309) | accent border |
| `inspeccionar-tipos` | `CodeChallenge` | blanks `mensaje`, `activo`, `sinValor` (draft L311–320) | `ClayCard` `my-8` |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 7 puntos (draft L324–332) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection` *(pendiente en TSX)*

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-referencia-objeto` | `PracticeExercise` | `a.n` tras mutación por referencia (draft L340–346) | accent border |
| `comprension-let-const-errores` | `PracticeExercise` | incrementar `intentos`, TypeError en const (draft L348–354) | accent border |
| `comprension-hoisting-tdz` | `PracticeExercise` | orden fases TDZ (draft L356–362) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; H2 en **card** semántico (sección de evaluación formativa).

#### `RetoIntegradorSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose + `CodeBlock` | script perfil con bugs (draft L372–404) | `CodeBlock` `my-6`; lista numerada tareas |
| `reto-modulo-perfil` | `PracticeExercise` | diagnóstico + correcciones (draft L415–427) | `ClayCard` accent; textarea `rows={6}` |

#### `CierreSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Ideas clave | prose `<ul>` | 5 viñetas (draft L435–441) | Sin clay |
| Siguiente paso | prose `<p>` | enlace lección 04 | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas const/TDZ/typeof/referencia (draft L449–507) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Error frecuente (nombre vs valor) | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; confusión identificador/valor |
| Caso checkout e-commerce | `callout-info` | `--color-secondary` (`#00C2FF`) | Incidente profesional; coerción en suma |
| Caso panel de configuración | `callout-info` | `--color-secondary` | const + mutación en equipos |
| Coerción (preview lección 04) | `callout-warning` | `--color-accent` | Alerta suave; puente a operadores/`===` |

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

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. Evitar `StepReveal` dentro de otro `ClayCard` padre.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 0 | Solo prose |
| ¿Qué es una variable? | 1 | 2 callouts + 1 diagrama; ritmo alterno texto/código |
| var, let y const | 2 | Sección más densa: tabla + stepper hoisting + challenge; respetar máx. 2 niveles |
| Tipos de datos principales | 1–2 | Tabla primitivos + stepper typeof + 2 practice + challenge |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 `PracticeExercise` apilados |
| Reto integrador | 2 | CodeBlock largo + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] H4 Hoisting bajo `VarLetYConstSection` (no mezclar en párrafo plano)
- [ ] Poblar `QueEsUnaVariableSection`: 2 `Callout`, `MermaidDiagram`, `CodeBlock`
- [ ] Poblar `VarLetYConstSection`: `CompareTable`, 3 `CodeBlock`, `StepReveal`, `MermaidDiagram`, 2 `CodeBlock`, `Callout`, `CodeChallenge`
- [ ] Poblar `TiposDeDatosPrincipalesSection`: tabla primitivos, `MermaidDiagram`, `StepReveal`, `Callout`, 2 `PracticeExercise`, `CodeChallenge`
- [ ] Crear `CompruebaTuComprensionSection` con 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection` con `CodeBlock` + `PracticeExercise`
- [ ] Crear `CierreSection` con ideas clave + `Quiz`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] Actualizar `interactive_blocks` en frontmatter al cerrar ids

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

