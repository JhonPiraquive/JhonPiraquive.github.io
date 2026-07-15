---
track: posw
slug: http-metodos-status
title: "Métodos HTTP y Códigos de Estado"
order: 4
prev: protocolos-seguridad
next: http-headers
interactive_blocks:
  - type: callout
    id: contrato-semantico
  - type: compare-table
    id: metodos-principales
  - type: step-reveal
    id: safe-idempotente-practica
  - type: callout
    id: caso-doble-cobro-reintento
  - type: practice-exercise
    id: metodos-safe-idempotente
  - type: compare-table
    id: crud-mapping-http
  - type: mermaid
    id: crud-sequence
  - type: code-challenge
    id: completa-mapping-crud
  - type: mermaid
    id: familias-status-codes
  - type: step-reveal
    id: familias-status-codes-paso-a-paso
  - type: callout
    id: caso-api-siempre-200
  - type: practice-exercise
    id: comprension-401-vs-403
  - type: practice-exercise
    id: comprension-get-eliminar
  - type: practice-exercise
    id: comprension-201-location
  - type: practice-exercise
    id: reto-api-reservas-hotel
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/formatos-datos/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track POSW |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención POSW / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Lista errores frecuentes (draft L329–333): prose `<ul>`; sin clay.
- En `CodigosEstadoSection`: flowchart familias → stepreveal; intercalar prose entre 401/403 y ejemplos HTTP.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Métodos HTTP (verbos)`, `Códigos de estado HTTP` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Safe e Idempotente explicados`, `401 vs 403` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («GET es Safe», «5xx — Errores del servidor») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | RFC 9110, familias 1xx–5xx |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) Métodos HTTP` | Métodos HTTP (verbos) | `MetodosHttpSection` |
| `### 2) CRUD` | CRUD y métodos HTTP | `CrudHttpSection` |
| `### 3) Códigos de estado` | Códigos de estado HTTP | `CodigosEstadoSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: API de reservas de hotel | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `MetodosHttpSection`:** Mapa mental, Qué son los métodos HTTP, Métodos principales, Ejemplo GET vs POST, Safe e Idempotente explicados, Práctica guiada.

**H3 dentro de `CrudHttpSection`:** Mapa mental, Tabla CRUD ↔ HTTP, Ciclo CRUD completo, Flujo secuencia CRUD, Anti-patrón POST para todo.

**H3 dentro de `CodigosEstadoSection`:** Mapa mental, Familias de códigos, 401 vs 403, Ejemplos de respuestas, Errores frecuentes.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `MetodosHttpSection` | Métodos HTTP (verbos) | stepper | prose, `CompareTable`, `CodeBlock` ×2, `StepReveal`, `Callout`, `PracticeExercise` |
| 3 | `CrudHttpSection` | CRUD y métodos HTTP | — | prose, `CompareTable`, `CodeBlock`, `MermaidDiagram`, `CodeChallenge` |
| 4 | `CodigosEstadoSection` | Códigos de estado HTTP | stepper | prose, `MermaidDiagram`, `StepReveal`, `CodeBlock` ×3, `Callout` |
| 5 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 6 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 7 | `RetoIntegradorSection` | Reto integrador: API de reservas de hotel | card | Enunciado prose + `CodeBlock` + `PracticeExercise` |
| 8 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `http-headers` |
| 9 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L30–34) | Sin clay |
| Prerrequisitos | prose `<ul>` | protocolos-seguridad, formatos-datos (draft L38–40) | Sin clay |
| `contrato-semantico` | `Callout` | title: «Contrato semántico»; método y status no son decoración (draft L51–54) | **callout-info**; borde secondary |

#### `MetodosHttpSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué son | prose | RFC 9110, Safe, Idempotente (draft L62–71) | Sin clay |
| `metodos-principales` | `CompareTable` | 7 filas Método/Safe/Idempotente/Uso (draft L75–87) | `ClayCard` `my-8`; thead secondary |
| GET vs POST | `CodeBlock` | http GET y POST productos (draft L91–105) | `my-6` |
| Safe e Idempotente | prose `<ul>` | anti-patrón GET eliminar (draft L107–110) | Sin clay |
| `safe-idempotente-practica` | `StepReveal` | title: «Safe e Idempotente en la práctica»; 4 steps (draft L112–133) | **stepper** `my-8` |
| `caso-doble-cobro-reintento` | `Callout` | title: «Caso real: doble cobro por reintento» (draft L135–139) | **callout-warning** |
| `metodos-safe-idempotente` | `PracticeExercise` | GET/POST/PUT/DELETE Safe e Idempotente (draft L143–149) | `ClayCard` `my-8` accent |

#### `CrudHttpSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Create→POST, Read→GET… (draft L157–161) | Sin clay |
| `crud-mapping-http` | `CompareTable` | 6 filas Operación/Método/URI (draft L165–176) | `ClayCard` `my-8`; thead secondary |
| Ciclo CRUD | `CodeBlock` | http POST/GET/PATCH/DELETE (draft L180–204) | `my-6` |
| `crud-sequence` | `MermaidDiagram` | sequenceDiagram CRUD (draft L208–211) | `my-6` |
| Anti-patrón POST | prose | POST para todo (draft L213–215) | Sin clay |
| `completa-mapping-crud` | `CodeChallenge` | GET listar, DELETE eliminar (draft L217–225) | `ClayCard` `my-8` |

#### `CodigosEstadoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | 3 dígitos, familias (draft L233–237) | Sin clay |
| `familias-status-codes` | `MermaidDiagram` | flowchart 1xx–5xx (draft L241–244) | `my-6` |
| `familias-status-codes-paso-a-paso` | `StepReveal` | title: «Familias de status codes»; 5 steps (draft L246–271) | **stepper** `my-8` |
| 401 vs 403 | prose `<ul>` | autenticación vs autorización (draft L273–276) | Sin clay |
| 201 / 404 / 422 | `CodeBlock` | http + json ejemplos (draft L282–321) | `my-4` cada uno |
| `caso-api-siempre-200` | `Callout` | title: «Caso real: API con siempre 200 OK» (draft L323–327) | **callout-warning** |
| Errores frecuentes | prose `<ul>` | 404 vs 422, 500, Location (draft L329–333) | Sin clay |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L341–346) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-401-vs-403` | `PracticeExercise` | reintentar sin cambios (draft L354–360) | accent border |
| `comprension-get-eliminar` | `PracticeExercise` | GET /eliminar anti-patrón (draft L362–368) | accent border |
| `comprension-201-location` | `PracticeExercise` | 201 + Location (draft L370–376) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas hotel (draft L386–394) | H2 primary |
| Ejemplo POST | `CodeBlock` | http reserva 201 (draft L396–409) | `my-6` |
| `reto-api-reservas-hotel` | `PracticeExercise` | mapping + 422 fechas (draft L411–423) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L433–438) | Sin clay |
| Siguiente paso | enlace `http-headers` (draft L440) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas métodos/status (draft L448–507) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Contrato semántico | `callout-info` | `--color-secondary` | Principio rector: verbo + código comunican intención y resultado |
| Caso real: doble cobro por reintento | `callout-warning` | `--color-accent` | POST no idempotente en pagos |
| Caso real: API con siempre 200 OK | `callout-warning` | `--color-accent` | Ocultar errores en JSON con 200 |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (blanco, no clay)
        └── CodeBlock (oscuro, no clay)
```

En `MetodosHttpSection`: tabla métodos → code blocks → stepreveal → warning → practice. En `CrudHttpSection`: tabla → code → sequence → challenge. En `CodigosEstadoSection`: flowchart → stepreveal → code ejemplos → warning; no apilar flowchart + stepreveal sin prose intermedio.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| Métodos HTTP (verbos) | 2 | tabla + stepper + warning + practice |
| CRUD y métodos HTTP | 2 | tabla + sequence + challenge |
| Códigos de estado HTTP | 2 | flowchart + stepper + warning |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice hotel |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` contrato semántico
- [ ] Poblar `MetodosHttpSection`: `CompareTable`, 2 `CodeBlock`, `StepReveal`, callout warning, `PracticeExercise`
- [ ] Poblar `CrudHttpSection`: `CompareTable`, `CodeBlock`, mermaid sequence, `CodeChallenge`
- [ ] Poblar `CodigosEstadoSection`: mermaid familias, `StepReveal`, 3 `CodeBlock`, callout warning
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «Métodos HTTP (verbos)», «CRUD y métodos HTTP», «Códigos de estado HTTP»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

