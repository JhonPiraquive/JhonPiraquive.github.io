## Clay UI

Contribución de **clay-ui-expert**. Referencia de implementación: `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/` y `src/components/teaching/lessons/poo/fundamentos/` (patrón `section` + `h2` + componente interactivo). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos de `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track POO |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track POO en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención POO / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: cada `<section>` sin margen extra; el ritmo lo dan `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Subbloques pedagógicos repetidos (Mapa mental, Qué es, Para qué sirve…): H3 + prose; sin `ClayCard` por subbloque.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | `Fundamentos de POO` en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué es la Programación Orientada a Objetos (POO)?`, `¿Qué es un Objeto?` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Mapa mental`, `Qué es`, `Para qué sirve`, `Señales de buen y mal uso`, `Ejemplo de vida real`, `Estado vs comportamiento`, `Convenciones C# en esta lección` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («1. Defines la clase», etc.) |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Texto expositivo, listas del mapa mental |

**Nota brand:** si brand-identity-expert acorta H2 (p. ej. `¿Qué es la POO?`), mantener las mismas clases clay.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` *(pendiente)* | Objetivos del tema | — (prose) | Lista `<ul>` de objetivos medibles |
| 2 | `QueEsLaProgramacionSection` | ¿Qué es la Programación Orientada a Objetos (POO)? | — | H3 ×5, `CodeBlock`, `MermaidDiagram`, `Callout` ×2, `CodeBlock`, `PracticeExercise` |
| 3 | `QueEsUnObjetoSection` | ¿Qué es un Objeto? | — | H3 ×5, `CodeBlock`, `MermaidDiagram`, tabla estado/comportamiento, `PracticeExercise` |
| 4 | `QueEsUnaClaseSection` | ¿Qué es una Clase? | — | H3 ×5, `CodeBlock`, `MermaidDiagram`, `CompareTable`, `Callout`, `CodeChallenge` |
| 5 | `QueEsUnaInstanciaSection` | ¿Qué es una Instancia? | stepper | H3 ×5, `CodeBlock` ×2, `MermaidDiagram`, `StepReveal`, `PracticeExercise` |
| 6 | `QueEsUnConstructorSection` | ¿Qué es un Constructor y para qué se usa? | — | H3 ×5, `CodeBlock`, `MermaidDiagram`, `Callout`, H3 convenciones, `PracticeExercise` |
| 7 | `ResumenSection` *(pendiente)* | Resumen | — | Viñetas en prose |
| 8 | `CompruebaTuComprensionSection` *(pendiente)* | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 9 | `RetoIntegradorSection` *(pendiente)* | Reto integrador: diseña tu primer dominio | card | Enunciado + `CodeBlock` esqueleto + `PracticeExercise` |
| 10 | `CierreSection` *(pendiente)* | Cierre de la lección | card | Ideas clave + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `QueEsLaProgramacionSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | 4 viñetas (draft L46–49) | Sin clay; H3 «Mapa mental» |
| `carro-acelerar` | `CodeBlock` | clase `Carro` + `Main` (draft L76–98) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| `carro-class-diagram` | `MermaidDiagram` | classDiagram `Carro` (draft L101–104) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `anti-ejemplo-setter-publico` | `Callout` | title: «Anti-ejemplo: setter público rompe invariantes» (draft L106–110) | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |
| `carro-malo-setter` | `CodeBlock` | `CarroMalo` con `public set` (draft L112–119) | `my-4` tras callout |
| `caso-saldo-negativo-setter` | `Callout` | title: «Caso real: saldo negativo por setter público» (draft L121–125) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| `practica-carrito-objeto` | `PracticeExercise` | prompt carrito vs variables sueltas (draft L131–137) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `QueEsUnObjetoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `cuenta-bancaria-retirar` | `CodeBlock` | `CuentaBancaria` con constructor y `Retirar` (draft L169–190) | `my-4` |
| `cuenta-bancaria-class` | `MermaidDiagram` | classDiagram `CuentaBancaria` (draft L194–197) | `my-6` |
| `estado-vs-comportamiento` | `CompareTable` | headers: Concepto / Representación C# / Ejemplo; 2 filas Saldo / Retirar (draft L201–204) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| `practica-depositar` | `PracticeExercise` | implementar `Depositar` (draft L208–214) | accent border |

#### `QueEsUnaClaseSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `producto-molde` | `CodeBlock` | `Producto` + `Main` con café y té (draft L249–277) | `my-4` |
| `producto-class-diagram` | `MermaidDiagram` | classDiagram `Producto` (draft L279–282) | `my-6` |
| `clase-instancia-objeto` | `CompareTable` | 3 filas Clase / Instancia / Objeto (draft L284–292) | `ClayCard` `my-8`; thead secondary |
| `error-frecuente-clase-objeto` | `Callout` | title: «Error frecuente»; receta vs galleta (draft L294–298) | **callout-warning** (accent) |
| `completa-new-decimal` | `CodeChallenge` | blanks `new`, `decimal` (draft L304–312) | `ClayCard` `my-8`; inputs `rounded-xl` |

#### `QueEsUnaInstanciaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `instancias-producto` | `CodeBlock` | `p1`, `p2` distintos (draft L327–331) | `my-4` |
| `catalogo-list-producto` | `CodeBlock` | `List<Producto>` + foreach (draft L351–365) | `my-4` |
| `instancias-flowchart` | `MermaidDiagram` | flowchart Clase → p1, p2 (draft L367–370) | `my-6` |
| `creacion-objeto-csharp` | `StepReveal` | title: «Creación de un objeto en C#»; 5 steps (draft L372–397) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30`; botones `clay-button` |
| `analogia-receta-galleta` | `PracticeExercise` | clase vs instancia en `new Producto` (draft L401–407) | accent border |

#### `QueEsUnConstructorSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `pedido-constructor-pagar` | `CodeBlock` | `Pedido` + `Pagar` (draft L440–462) | `my-4` |
| `constructor-pedido-flow` | `MermaidDiagram` | flowchart new → constructor → listo (draft L464–467) | `my-6` |
| `caso-constructor-vacio` | `Callout` | title: «Caso real: constructor vacío y estados inválidos» (draft L469–473) | **callout-info** (secondary) |
| Convenciones C# | prose `<ul>` | 5 viñetas dotnet/PascalCase (draft L475–481) | H3 sin clay |
| `cuando-no-poo` | `PracticeExercise` | pipeline funcional vs POO (draft L487–493) | accent border |

#### `ResumenSection` *(pendiente en TSX)*

| Elemento | Clay |
|----------|------|
| 6 viñetas (draft L498–504) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection` *(pendiente en TSX)*

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-retirar-saldo` | `PracticeExercise` | mensaje `InvalidOperationException` con saldo y monto (draft L512–518) | accent border |
| `comprension-orden-ciclo-vida` | `PracticeExercise` | orden c-a-b-d del ciclo de vida (draft L520–526) | accent border |
| `comprension-vf-instancias` | `PracticeExercise` | V/F estado compartido entre instancias (draft L528–534) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; H2 en **card** semántico (evaluación formativa).

#### `RetoIntegradorSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | blockquote «Diseña tu primer dominio» + lista 4 criterios + extensión opcional (draft L538–551) | H2 primary; texto normal |
| `reto-restaurante-esqueleto` | `CodeBlock` | esqueleto `Producto` / `Pedido` / `Main` (draft L553–576) | `my-6` |
| `reto-restaurante` | `PracticeExercise` | implementación restaurante (draft L578–589) | `ClayCard` accent; textarea `rows={8}` por código largo |

#### `CierreSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Ideas clave | prose `<ul>` | 4 viñetas (draft L597–602) | Sin clay |
| Siguiente paso | prose `<p>` | enlace `encapsulamiento` | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas POO/C# (draft L610–667) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Anti-ejemplo setter público (POO) | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; rompe invariantes del dominio |
| Caso saldo negativo por setter | `callout-info` | `--color-secondary` (`#00C2FF`) | Incidente profesional; decisión private set + métodos |
| Error frecuente clase vs objeto | `callout-warning` | `--color-accent` | Confusión molde vs instancia |
| Caso constructor vacío | `callout-info` | `--color-secondary` | Estados inválidos por nacimiento incompleto |

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

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. `StepReveal` en `QueEsUnaInstanciaSection` es el único stepper de la lección — no duplicar steppers en la misma vista.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 0 | Solo prose |
| ¿Qué es la POO? | 1–2 | 2 callouts + diagrama + practice; ritmo texto/código alterno |
| ¿Qué es un Objeto? | 1 | Tabla + diagrama + practice |
| ¿Qué es una Clase? | 1–2 | CompareTable + callout + challenge |
| ¿Qué es una Instancia? | 2 | **stepper** central + 2 code blocks + flowchart |
| ¿Qué es un Constructor? | 1 | Diagrama + callout info + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 `PracticeExercise` apilados |
| Reto integrador | 2 | CodeBlock esqueleto + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] H3 pedagógicos repetidos en las 5 secciones conceptuales (Mapa mental, Qué es, Para qué sirve, Señales, Ejemplo de vida real)
- [ ] Poblar `QueEsLaProgramacionSection`: `CodeBlock`, `MermaidDiagram`, 2 `Callout`, `PracticeExercise`
- [ ] Poblar `QueEsUnObjetoSection`: `CodeBlock`, `MermaidDiagram`, `CompareTable`, `PracticeExercise`
- [ ] Poblar `QueEsUnaClaseSection`: `CodeBlock`, `MermaidDiagram`, `CompareTable`, `Callout`, `CodeChallenge`
- [ ] Poblar `QueEsUnaInstanciaSection`: 2 `CodeBlock`, `MermaidDiagram`, `StepReveal`, `PracticeExercise`
- [ ] Poblar `QueEsUnConstructorSection`: `CodeBlock`, `MermaidDiagram`, `Callout`, `PracticeExercise`
- [ ] Crear `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/poo.ts` (patrón SEA/PBPEW)
- [ ] Actualizar `interactive_blocks` en frontmatter al cerrar ids

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

