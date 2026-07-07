---
track: pbpew
slug: 07-arrays-json-objetos
title: "Arrays, métodos útiles, JSON y objetos literales"
order: 7
prev: "06-funciones-y-callbacks"
next: "08-this-scope-clases"
interactive_blocks:
  - type: callout
    id: error-indice-vs-valor
  - type: compare-table
    id: tabla-mutacion-vs-map-filter
  - type: mermaid
    id: flujo-map-callback
  - type: callout
    id: caso-totales-cero-forEach
  - type: callout
    id: error-map-sin-asignar
  - type: callout
    id: error-callback-llaves-sin-return
  - type: code-challenge
    id: duplicar-con-map-challenge
  - type: practice-exercise
    id: comprension-forEach-vs-map
  - type: practice-exercise
    id: practice-filter-notas
  - type: step-reveal
    id: stepreveal-ciclo-json
  - type: mermaid
    id: flujo-stringify-parse
  - type: callout
    id: caso-carrito-revive-items
  - type: callout
    id: error-stringify-funciones
  - type: code-challenge
    id: parse-json-challenge
  - type: practice-exercise
    id: practice-orden-persistencia-carrito
  - type: practice-exercise
    id: practice-stringify-funciones
  - type: mermaid
    id: diagrama-referencia-vs-spread
  - type: compare-table
    id: tabla-referencia-vs-valor
  - type: callout
    id: error-comparar-objetos-igualdad
  - type: practice-exercise
    id: practice-destructuracion-persona
  - type: practice-exercise
    id: practice-push-vs-spread-copia
  - type: practice-exercise
    id: comprension-indice-cero
  - type: practice-exercise
    id: comprension-referencia-objeto
  - type: practice-exercise
    id: comprension-push-vs-unshift
  - type: practice-exercise
    id: reto-catalogo-cursos
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/06-funciones-y-callbacks/lesson-spec.md` (§Clay UI), implementación `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

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
- Tabla mutación vs `.map`/`.filter` (draft L76–82): convertir a `CompareTable`; no usar `<table>` prose.
- Preview `.reduce` (draft L137–143): prose o `CodeBlock` secundario; sin `Callout`.
- Preview lección 8 `this` (draft L282, L382): párrafo `text-sm` o viñeta en resumen; sin clay extra.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Arrays en JavaScript`, `JSON: serialización y deserialización`, `Objetos literales y referencia` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Callbacks en métodos de array`, `Destructuración y spread` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («1. Objeto en memoria», «4. Deserializar») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Definición array, JSON, referencia vs valor |

**H2 sugeridos (SEO / brand pendiente):** promover `### Arrays` / `### JSON` / `### Objetos literales` del draft a H2 de sección TSX; mantener clases clay.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista 5 objetivos + prerrequisitos prose |
| 2 | `ArraysSection` | Arrays en JavaScript | — | `Callout`, `CodeBlock` ×2, `CompareTable`, prose callbacks, `MermaidDiagram`, `Callout` ×3, `CodeBlock` preview reduce, `CodeChallenge`, `PracticeExercise` ×2 |
| 3 | `JsonSection` | JSON: serialización y deserialización | stepper | `StepReveal`, `MermaidDiagram`, `CodeBlock`, `CodeBlock` lang json, `Callout` ×2, `CodeChallenge`, `PracticeExercise` ×2 |
| 4 | `ObjetosLiteralesSection` | Objetos literales y referencia | — | prose, `MermaidDiagram`, `CompareTable`, `CodeBlock` ×3, `Callout`, `PracticeExercise` ×2 |
| 5 | `ResumenSection` | Resumen | — | Viñetas prose 8 puntos |
| 6 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 7 | `RetoIntegradorSection` | Reto integrador: catálogo de cursos PBPEW | card | Enunciado prose + `CodeBlock` + lista numerada + `PracticeExercise` |
| 8 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace lección 08 + `Quiz` |

**Nota implementación:** el stub actual fusiona JSON en `ArraysSection`; separar en `JsonSection` según este mapa.

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| Elemento | Clay |
|----------|------|
| Lista 5 objetivos (draft L21–27) | prose `<ul>`; sin `ClayCard` |
| Prerrequisitos (draft L29–37) | prose `<ul>` o párrafo; sin clay |

#### `ArraysSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro array / índices / mutación | prose | definición, `length`, push/pop/shift/unshift (draft L43–51) | Sin clay |
| `error-indice-vs-valor` | `Callout` | title: «Error frecuente — índice vs valor»; `arr[0]` vs `arr[1]` (draft L53–57) | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |
| `arrays-indices-mutacion` | `CodeBlock` | `nums`, push, pop, unshift, shift (draft L59–72) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| Callbacks intro | prose | conexión lección 6; tabla markdown → omitir si hay `CompareTable` (draft L74–82) | Sin clay |
| `tabla-mutacion-vs-map-filter` | `CompareTable` | 4 columnas: Operación, ¿Modifica original?, ¿Devuelve nuevo array?, Ejemplo — 3 filas (draft L84–92) | `ClayCard` `my-6`; thead `border-[var(--color-secondary)]` |
| forEach / map / filter | prose `<ul>` | tres viñetas método (draft L94–96) | Sin clay |
| Preview reduce/find | prose | mención breve (draft L98) | Sin clay |
| `flujo-map-callback` | `MermaidDiagram` | flowchart `nums` → `.map` → callbacks → nuevo array sin mutar (draft L100–103) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `map-filter-forEach-ejemplo` | `CodeBlock` | dobles, pares, forEach (draft L105–117) | `my-4` |
| `caso-totales-cero-forEach` | `Callout` | title: «Caso real: totales en cero tras forEach»; productos + IVA (draft L119–123) | **callout-info**; borde secondary |
| `error-map-sin-asignar` | `Callout` | title: «Error frecuente — map sin asignar» (draft L125–129) | **callout-warning**; borde accent |
| `error-callback-llaves-sin-return` | `Callout` | title: «Error frecuente — return en callback con llaves» (draft L131–135) | **callout-warning**; borde accent |
| `reduce-preview-suma` | `CodeBlock` | `nums.reduce` suma (draft L137–143) | `my-4`; comentario «Preview» en caption opcional |
| `duplicar-con-map-challenge` | `CodeChallenge` | blank `map` (draft L145–152) | `ClayCard` `my-8`; inputs `rounded-xl` |
| `comprension-forEach-vs-map` | `PracticeExercise` | diferencia al duplicar [1,2,3] (draft L154–160) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |
| `practice-filter-notas` | `PracticeExercise` | `notas.filter` ≥ 6 (draft L162–168) | accent border |

#### `JsonSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Definición JSON | prose | stringify/parse, tipos no válidos (draft L174–177) | Sin clay |
| `stepreveal-ciclo-json` | `StepReveal` | title: «Ciclo JSON: de objeto a texto y de vuelta»; 5 steps (draft L179–204) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| `flujo-stringify-parse` | `MermaidDiagram` | flowchart objeto → stringify → texto → parse → objeto (draft L206–209) | `my-6` tras `StepReveal` |
| `curso-stringify-parse` | `CodeBlock` | `curso`, stringify, parse (draft L211–225) | `my-4` |
| `curso-json-ejemplo` | `CodeBlock` | JSON formateado (draft L227–234) | `my-4`; lang `json` |
| `caso-carrito-revive-items` | `Callout` | title: «Caso real: carrito que revive ítems eliminados»; localStorage (draft L236–240) | **callout-info** |
| `error-stringify-funciones` | `Callout` | title: «Error frecuente — stringify con funciones» (draft L242–246) | **callout-warning** |
| `parse-json-challenge` | `CodeChallenge` | blanks `obj`, `parse` (draft L248–256) | `ClayCard` `my-8` |
| `practice-orden-persistencia-carrito` | `PracticeExercise` | orden c→b→a→d (draft L258–264) | accent border |
| `practice-stringify-funciones` | `PracticeExercise` | por qué `fn` se omite (draft L266–272) | accent border |

#### `ObjetosLiteralesSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Definición objeto / acceso / métodos | prose | punto, corchetes, preview `this` (draft L278–282) | Sin clay |
| Referencia vs valor / spread / destructuración | prose | copia superficial, spread, defaults (draft L284–294) | Sin clay |
| `diagrama-referencia-vs-spread` | `MermaidDiagram` | subgraph referencia vs spread (draft L296–299) | `my-6` |
| `tabla-referencia-vs-valor` | `CompareTable` | 3 columnas: Tipo, Asignación b=a, ¿afecta a a? (draft L301–308) | `ClayCard` `my-8`; thead secondary |
| `alumno-metodo-presentarse` | `CodeBlock` | objeto con método (draft L310–323) | `my-4` |
| `referencia-vs-spread-copia` | `CodeBlock` | `ref` mutación vs `{...original}` (draft L325–336) | `my-4` |
| `destructuracion-array-objeto` | `CodeBlock` | array skip + objeto default rol (draft L338–347) | `my-4` |
| `error-comparar-objetos-igualdad` | `Callout` | title: «Error frecuente — comparar objetos con ===» (draft L349–353) | **callout-warning** |
| `practice-destructuracion-persona` | `PracticeExercise` | `{ nombre, edad }` (draft L355–361) | accent border |
| `practice-push-vs-spread-copia` | `PracticeExercise` | push en items vs spread copia (draft L363–369) | accent border |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 8 puntos (draft L375–382) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-indice-cero` | `PracticeExercise` | por qué índice 0 (draft L390–396) | accent border |
| `comprension-referencia-objeto` | `PracticeExercise` | `a.x` tras `b.x = 5` (draft L398–404) | accent border |
| `comprension-push-vs-unshift` | `PracticeExercise` | final vs inicio (draft L406–412) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; H2 en **card** semántico (autoevaluación formativa).

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | «Catálogo de cursos PBPEW»; 6 tareas + criterio éxito (draft L418–438) | H2 primary |
| `reto-cursos-inicial` | `CodeBlock` | array `cursos` (draft L422–429) | `CodeBlock` `my-6`; fondo oscuro |
| Lista tareas | prose `<ol>` | filter, map, reduce, JSON, destructuración, referencia vs clon (draft L431–436) | `my-4` |
| `reto-catalogo-cursos` | `PracticeExercise` | implementación completa; 5 hints (draft L440–452) | `ClayCard` accent; textarea `rows={10}` |

#### `CierreSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Intro cierre | prose | conexión lección 6, APIs, localStorage (draft L458) | Sin clay |
| Ideas clave | prose `<ul>` | 5 viñetas (draft L462–466) | Sin clay |
| Siguiente paso | prose `<p>` | enlace lección `08-this-scope-clases` (draft L468) | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas map/push/referencia/stringify/destructuración (draft L474–533) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Error índice vs valor | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; confusión índice 0/1 |
| Caso totales en cero (forEach) | `callout-info` | `--color-secondary` (`#00C2FF`) | Incidente profesional; forEach vs map |
| Error map sin asignar | `callout-warning` | `--color-accent` | Preventivo; resultado ignorado |
| Error callback con llaves sin return | `callout-warning` | `--color-accent` | Preventivo; retorno implícito roto (puente lección 6) |
| Caso carrito revive ítems | `callout-info` | `--color-secondary` | localStorage + mutación sin re-serializar |
| Error stringify con funciones | `callout-warning` | `--color-accent` | Límites JSON; funciones omitidas |
| Error comparar objetos con === | `callout-warning` | `--color-accent` | Referencia vs contenido |

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

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. En `ArraysSection`: separar los tres callouts consecutivos (forEach/map/return) con párrafo o `CodeBlock` entre ellos si la pila visual es densa. En `JsonSection`: `StepReveal` seguido de `MermaidDiagram` sin card padre compartido.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos de aprendizaje | 0 | Solo prose |
| Arrays en JavaScript | 2 | Sección más densa: tabla + diagrama + 3 callouts + challenge + 2 practice |
| JSON | 2 | stepper 5 pasos + diagrama + 2 callouts + challenge + 2 practice |
| Objetos literales y referencia | 1–2 | 2 diagramas/tablas + 1 callout + 2 practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 `PracticeExercise` apilados |
| Reto integrador | 2 | `CodeBlock` + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] Refactorizar `ArraysSection`: poblar según tabla; quitar JSON fusionado del stub
- [ ] Crear `JsonSection` con `StepReveal`, mermaid, 2 callouts, challenge, 2 practice
- [ ] Refactorizar `ObjetosLiteralesSection`: mermaid, `CompareTable`, 3 `CodeBlock`, callout, 2 practice
- [ ] Crear `ObjetivosSection` con objetivos y prerrequisitos
- [ ] Poblar `ResumenSection` con 8 viñetas del draft
- [ ] Crear `CompruebaTuComprensionSection` con 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection` con `CodeBlock` + `PracticeExercise`
- [ ] Crear `CierreSection` con ideas clave + `Quiz`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] H2: «Arrays en JavaScript», «JSON: serialización y deserialización», «Objetos literales y referencia»
- [ ] Actualizar `ArraysJsonObjetosLesson.tsx` con orden de secciones del mapa
