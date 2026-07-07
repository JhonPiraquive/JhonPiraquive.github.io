---
track: poo
slug: modularidad-cohesion-acoplamiento
title: "Modularidad, Cohesión y Acoplamiento"
order: 10
prev: solid-principios
next: null
interactive_blocks:
  - type: callout
    id: objetivo-diseno-cohesion-acoplamiento
  - type: compare-table
    id: modularidad-cohesion-acoplamiento-tabla
  - type: mermaid
    id: modulos-dominio-infra
  - type: step-reveal
    id: sustituir-repositorio
  - type: mermaid
    id: split-utilidades-cohesion
  - type: practice-exercise
    id: split-utilidades-ejercicio
  - type: mermaid
    id: acoplamiento-reportes
  - type: compare-table
    id: cohesion-acoplamiento-comparacion
  - type: practice-exercise
    id: html-renderer-acoplamiento
  - type: step-reveal
    id: checklist-diseno-pasos
  - type: mermaid
    id: sintesis-track-poo
  - type: practice-exercise
    id: comprension-repositorio-sql
  - type: practice-exercise
    id: comprension-split-utilidades
  - type: practice-exercise
    id: comprension-checklist-pdf
  - type: mermaid
    id: reto-dependencias-orquestador
  - type: practice-exercise
    id: reto-checklist-parte-d
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/poo/polimorfismo/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Lección **cierre del track POO** — tono de síntesis; misma convención clay que lecciones 1–9.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, nav track POO |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención POO / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`, `CompareTable`) o `my-8` (`ClayCard` wrappers, `StepReveal`).
- **`PracticeExercise`:** siempre `ClayCard` con `my-8` y `border-l-4 border-[var(--color-accent)]`.
- **`MermaidDiagram`:** siempre `my-6`; fondo blanco, sin `ClayCard`. Diagrama síntesis track (`sintesis-track-poo`) puede usar `my-8` por tamaño.
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Casos reales (migración SQL, PDF→HTML, merge Utilidades): párrafo narrativo.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Modularidad`, `Cohesión`, `Checklist práctico de diseño` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Módulos dominio ↔ infra`, `Split Utilidades` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en checklist `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Cierre track POO |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | `Callout` + tabla conceptos |
| `### 1) Modularidad` | Modularidad | `ModularidadSection` |
| `### 2) Cohesión` | Cohesión | `CohesionSection` |
| `### 3) Acoplamiento` | Acoplamiento | `AcoplamientoSection` |
| `### 4) Checklist` | Checklist práctico de diseño | `ChecklistDisenoSection` |
| Resumen | Resumen | Viñetas + cierre track |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: reorganiza el mini-sistema de compras | Subtítulo |
| Cierre | Cierre del track POO | Recorrido completo |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | `Callout`, `CompareTable` |
| 2 | `ModularidadSection` | Modularidad | stepper | prose, `CodeBlock`, `MermaidDiagram`, `StepReveal` |
| 3 | `CohesionSection` | Cohesión | — | prose, `CodeBlock`, `MermaidDiagram`, `PracticeExercise` |
| 4 | `AcoplamientoSection` | Acoplamiento | — | prose, `CodeBlock`, `MermaidDiagram`, `CompareTable`, `PracticeExercise` |
| 5 | `ChecklistDisenoSection` | Checklist práctico de diseño | stepper | prose, `StepReveal`, `CodeBlock`, `MermaidDiagram` |
| 6 | `ResumenSection` | Resumen | — | Viñetas prose |
| 7 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 8 | `RetoIntegradorSection` | Reto integrador: reorganiza el mini-sistema de compras | card | Enunciado prose + `MermaidDiagram` + `PracticeExercise` |
| 9 | `CierreSection` | Cierre del track POO | card | Ideas clave + recorrido track |
| 10 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro prose | prose | tres pilares integran track (draft L38) | Sin clay |
| `objetivo-diseno-cohesion-acoplamiento` | `Callout` | title: «Objetivo de diseño» (draft L40–44) | **callout-info**; borde secondary; `my-6` |
| `modularidad-cohesion-acoplamiento-tabla` | `CompareTable` | 3 filas Concepto/Pregunta/Ideal (draft L46–54) | `ClayCard` `my-8`; thead secondary |

#### `ModularidadSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | módulos con API (draft L62–66) | Sin clay |
| Qué es | prose | dominio vs infra (draft L68–70) | Sin clay |
| Ejemplo dominio/infra | `CodeBlock` | IRepositorioPedidos + implementaciones (draft L74–101) | `my-6` |
| `modulos-dominio-infra` | `MermaidDiagram` | flowchart módulos (draft L105–108) | **`my-6`** |
| `sustituir-repositorio` | `StepReveal` | title: «Sustituir implementación sin tocar dominio»; 4 steps (draft L112–121) | **stepper** `my-8` |
| Caso real migración | prose | solo Main cambia (draft L123–125) | Sin clay |
| Errores comunes | prose `<ul>` | 3 ítems (draft L127–131) | Sin clay |

#### `CohesionSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | alta cohesión (draft L139–143) | Sin clay |
| Baja → alta cohesión | `CodeBlock` | Utilidades vs split (draft L147–172) | `my-6` |
| `split-utilidades-cohesion` | `MermaidDiagram` | flowchart split (draft L176–179) | **`my-6`** |
| Caso real merge | prose | 4 devs Utilidades.cs (draft L181–183) | Sin clay |
| Errores comunes | prose `<ul>` | 3 ítems (draft L185–189) | Sin clay |
| `split-utilidades-ejercicio` | `PracticeExercise` | 3 responsabilidades → 3 clases (draft L191–201) | `ClayCard` **`my-8`** accent |

#### `AcoplamientoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | bajo acoplamiento (draft L209–213) | Sin clay |
| Alto → bajo | `CodeBlock` | PdfGenerator vs IReporteRenderer (draft L217–253) | `my-6` |
| `acoplamiento-reportes` | `MermaidDiagram` | classDiagram reportes (draft L257–260) | **`my-6`** |
| `cohesion-acoplamiento-comparacion` | `CompareTable` | 3 filas Métrica/Malo/Bueno (draft L264–272) | `ClayCard` `my-8`; thead secondary |
| Caso real PDF→HTML | prose | HtmlRenderer (draft L274–276) | Sin clay |
| Errores comunes | prose `<ul>` | 3 ítems (draft L278–282) | Sin clay |
| `html-renderer-acoplamiento` | `PracticeExercise` | HtmlRenderer solo Main (draft L284–294) | `ClayCard` **`my-8`** accent |

#### `ChecklistDisenoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | integra SOLID (draft L302–306) | Sin clay |
| `checklist-diseno-pasos` | `StepReveal` | title: «Checklist antes de dar por bueno un diseño»; 6 steps SRP→cohesión (draft L310–321) | **stepper** `my-8` |
| Composición Main | `CodeBlock` | renderer + repo (draft L325–334) | `my-6` |
| `sintesis-track-poo` | `MermaidDiagram` | flowchart track completo (draft L338–341) | **`my-8`** (diagrama amplio) |
| Errores checklist | prose `<ul>` | 3 ítems (draft L343–347) | Sin clay |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos + cierre track (draft L355–360) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-repositorio-sql` | `PracticeExercise` | RepositorioPedidosSql (draft L370–380) | accent; **`my-8`** |
| `comprension-split-utilidades` | `PracticeExercise` | split Utilidades (draft L382–392) | accent; **`my-8`** |
| `comprension-checklist-pdf` | `PracticeExercise` | checklist PdfGenerator (draft L394–404) | accent; **`my-8`** |

H2 en **card** semántico; apilar con **`my-8`**.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | Partes A–D mini-sistema (draft L412–438) | H2 primary |
| Lista tareas | prose `<ol>` | 10 ítems | `my-4` |
| `reto-dependencias-orquestador` | `MermaidDiagram` | flowchart OrquestadorCompra (draft L442–445) | **`my-6`** |
| `reto-checklist-parte-d` | `PracticeExercise` | checklist Parte D (draft L447–458) | `ClayCard` accent; **`my-8`** |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro cierre track | prose | lección final POO (draft L466) | Sin clay |
| Ideas clave | prose `<ul>` 4 viñetas (draft L468–473) | Sin clay |
| Recorrido track | prose | Fundamentos → … → modularidad (draft L475–477) | Sin clay |
| Siguiente paso | prose | aplicar checklist en proyectos (draft L479) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas modularidad/cohesión/acoplamiento (draft L487–531) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Objetivo de diseño | `callout-info` | `--color-secondary` | Alta cohesión + bajo acoplamiento |
| Utilidades / new PdfGenerator | — (prose + practice) | — | Opcional **callout-warning** en `CohesionSection` o `AcoplamientoSection` |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / Quiz
        ├── MermaidDiagram (blanco, my-6, no clay)
        └── CodeBlock (oscuro, my-6, no clay)
```

`ChecklistDisenoSection` cierra el arco pedagógico: stepper checklist → CodeBlock Main → mermaid síntesis track. No superar 2 interactivos clay consecutivos sin prose.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 2 | callout + tabla |
| Modularidad | 2 | stepper + mermaid |
| Cohesión | 2 | mermaid + practice |
| Acoplamiento | 2 | mermaid + tabla + practice |
| Checklist práctico | 2 | stepper + mermaid síntesis |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | mermaid + practice checklist |
| Cierre track POO | 0 | Prose recorrido |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` y `CompareTable` conceptos
- [ ] Poblar `ModularidadSection`: `CodeBlock`, mermaid `my-6`, `StepReveal`
- [ ] Poblar `CohesionSection`: `CodeBlock`, mermaid `my-6`, `PracticeExercise` `my-8`
- [ ] Poblar `AcoplamientoSection`: `CodeBlock`, mermaid `my-6`, `CompareTable`, `PracticeExercise` `my-8`
- [ ] Poblar `ChecklistDisenoSection`: `StepReveal` 6 pasos, `CodeBlock`, mermaid síntesis track
- [ ] Comprueba (3 practice `my-8`), Reto (mermaid + practice), Cierre track, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/poo.ts`
- [ ] Sin enlace «siguiente lección» en nav — última del track POO
