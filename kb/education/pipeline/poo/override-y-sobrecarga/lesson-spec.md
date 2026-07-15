---
track: poo
slug: override-y-sobrecarga
title: "Override y Sobrecarga"
order: 7
prev: polimorfismo
next: diagramas-de-clases
interactive_blocks:
  - type: compare-table
    id: override-vs-overload
  - type: callout
    id: dos-mecanismos-dos-momentos
  - type: step-reveal
    id: m-enviar-runtime
  - type: mermaid
    id: jerarquia-mensaje
  - type: code-challenge
    id: completa-override-enviar
  - type: mermaid
    id: resolucion-por-firma
  - type: practice-exercise
    id: predice-sumar-params
  - type: mermaid
    id: animal-override-overload
  - type: practice-exercise
    id: animal-perro-hablar
  - type: practice-exercise
    id: comprension-mensaje-sms
  - type: practice-exercise
    id: comprension-sumar-params
  - type: practice-exercise
    id: comprension-new-vs-override
  - type: practice-exercise
    id: reto-runtime-compile
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/poo/polimorfismo/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track POO |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención POO / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`, `CompareTable`) o `my-8` (`ClayCard` wrappers, `StepReveal`, `CodeChallenge`).
- **`PracticeExercise`:** siempre `ClayCard` con `my-8` y `border-l-4 border-[var(--color-accent)]`.
- **`MermaidDiagram`:** siempre `my-6`; fondo blanco, sin `ClayCard`.
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Casos reales (alertas 200 líneas, API búsqueda): párrafo narrativo; sin clay extra.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Override (sobrescritura)`, `Overload (sobrecarga)` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Lista polimórfica con override`, `Resolución por firma` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Dispatch runtime vs compile time |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | `CompareTable` + `Callout` |
| `### 1) Override` | Override (sobrescritura) | `OverrideSection` |
| `### 2) Overload` | Overload (sobrecarga) | `OverloadSection` |
| `### 3) Comparación práctica` | Comparación práctica: override, overload y `new` | `OverrideVsOverloadSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: notificaciones y operaciones | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `OverrideSection`:** Mapa mental, Qué es, Señales de override correcto, Ejemplo C#: mensajes polimórficos, Lista polimórfica con override, Llamada override paso a paso, Jerarquía Mensaje, Caso real: canal de notificaciones, Errores comunes.

**H3 dentro de `OverloadSection`:** Mapa mental, Qué es, Ejemplo C#: calculadora con varias firmas, Resolución por firma, Caso real: API de búsqueda, Errores comunes.

**H3 dentro de `OverrideVsOverloadSection`:** Mapa mental, Override y overload en la misma jerarquía, `new` vs `override`, Animal: override + overload, Cuándo usar cada uno, Errores comunes.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | `CompareTable`, `Callout` |
| 2 | `OverrideSection` | Override (sobrescritura) | stepper | prose, `CodeBlock` ×2, `StepReveal`, `MermaidDiagram`, `CodeChallenge` |
| 3 | `OverloadSection` | Overload (sobrecarga) | — | prose, `CodeBlock`, `MermaidDiagram`, `PracticeExercise` |
| 4 | `OverrideVsOverloadSection` | Comparación práctica: override, overload y `new` | — | prose, `CodeBlock` ×2, `MermaidDiagram`, `PracticeExercise` |
| 5 | `ResumenSection` | Resumen | — | Viñetas prose 5 puntos |
| 6 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 7 | `RetoIntegradorSection` | Reto integrador: notificaciones y operaciones | card | Enunciado prose (Partes A–C) + `PracticeExercise` |
| 8 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `diagramas-de-clases` |
| 9 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro prose | prose | matiza override vs overload (draft L37) | Sin clay |
| `override-vs-overload` | `CompareTable` | 4 filas Aspecto/Herencia/Firma/… (draft L39–48) | `ClayCard` `my-8`; thead secondary |
| `dos-mecanismos-dos-momentos` | `Callout` | title: «Dos mecanismos, dos momentos» (draft L50–54) | **callout-info**; borde secondary; `my-6` |

#### `OverrideSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | reemplaza implementación (draft L62–66) | Sin clay |
| Qué es / Señales | prose | Mensaje + override (draft L68–76) | Sin clay |
| Pasarelas mensaje | `CodeBlock` | Mensaje + Email + Sms (draft L80–102) | `my-6` |
| Lista polimórfica | `CodeBlock` | List&lt;Mensaje&gt; foreach (draft L106–116) | `my-4` |
| `m-enviar-runtime` | `StepReveal` | title: «m.Enviar() con referencia Mensaje»; 4 steps (draft L120–129) | **stepper** `my-8` |
| Caso real alertas | prose | if 200 líneas (draft L138–140) | Sin clay |
| `jerarquia-mensaje` | `MermaidDiagram` | classDiagram Mensaje (draft L133–136) | **`my-6`** |
| Errores comunes | prose `<ul>` | 3 ítems (draft L142–146) | Sin clay |
| `completa-override-enviar` | `CodeChallenge` | blank `___` → override (draft L148–155) | `ClayCard` `my-8` |

#### `OverloadSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | firmas distintas, compile time (draft L163–167) | Sin clay |
| Qué es | prose | ergonomía API (draft L169–171) | Sin clay |
| Calculadora | `CodeBlock` | 4 sobrecargas Sumar (draft L175–191) | `my-6` |
| `resolucion-por-firma` | `MermaidDiagram` | flowchart TD Sumar picks (draft L195–198) | **`my-6`** |
| Caso real búsqueda | prose | Buscar unificado (draft L200–202) | Sin clay |
| Errores comunes | prose `<ul>` | 4 ítems (draft L204–209) | Sin clay |
| `predice-sumar-params` | `PracticeExercise` | Sumar(1,2,3,4) → params (draft L211–221) | `ClayCard` **`my-8`** accent |

#### `OverrideVsOverloadSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | coexistencia, new oculta (draft L229–233) | Sin clay |
| Animal overload | `CodeBlock` | Hablar override + Comer overload (draft L237–259) | `my-6` |
| new vs override | `CodeBlock` | GatoMal + refBase (draft L263–277) | `my-4` |
| `animal-override-overload` | `MermaidDiagram` | classDiagram Animal/Perro (draft L281–284) | **`my-6`** |
| Cuándo usar | prose `<ul>` | 2 ítems (draft L286–289) | Sin clay |
| Errores comunes | prose `<ul>` | 3 ítems (draft L291–295) | Sin clay |
| `animal-perro-hablar` | `PracticeExercise` | Animal a = new Perro() Hablar() (draft L297–307) | `ClayCard` **`my-8`** accent |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 5 puntos (draft L315–319) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-mensaje-sms` | `PracticeExercise` | MensajeSms override + foreach (draft L329–339) | accent border; **`my-8`** |
| `comprension-sumar-params` | `PracticeExercise` | params Sumar(1,2,3,4) (draft L341–351) | accent border; **`my-8`** |
| `comprension-new-vs-override` | `PracticeExercise` | new void Enviar vs override (draft L353–363) | accent border; **`my-8`** |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | Partes A–C + criterio éxito (draft L371–394) | H2 primary |
| Lista tareas | prose `<ol>` | 10 ítems | `my-4` |
| `reto-runtime-compile` | `PracticeExercise` | runtime vs compile time (draft L396–406) | `ClayCard` accent; **`my-8`** |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L416–421) | Sin clay |
| Siguiente paso | enlace `diagramas-de-clases` (draft L423) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas override/overload/new (draft L431–470) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Dos mecanismos, dos momentos | `callout-info` | `--color-secondary` | Principio rector: runtime vs compile time |
| Errores `new` vs `override` | — (prose `<ul>`) | — | Opcional futuro **callout-warning** en `OverrideSection` si Brand promueve |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (blanco, my-6, no clay)
        └── CodeBlock (oscuro, my-6, no clay)
```

En `OverrideSection`: stepper → mermaid classDiagram → challenge; intercalar prose caso real. En `OverloadSection`: mermaid flowchart antes de practice `my-8`. En `OverrideVsOverloadSection`: dos CodeBlocks, luego mermaid `my-6`, luego practice `my-8`.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 2 | tabla + callout |
| Override (sobrescritura) | 2 | stepper + mermaid + challenge |
| Overload (sobrecarga) | 2 | mermaid + practice |
| Comparación práctica | 2 | mermaid + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice Parte C |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `CompareTable` y `Callout` dos mecanismos
- [ ] Poblar `OverrideSection`: 2 `CodeBlock`, `StepReveal`, `MermaidDiagram` `my-6`, `CodeChallenge`
- [ ] Poblar `OverloadSection`: `CodeBlock`, `MermaidDiagram` `my-6`, `PracticeExercise` `my-8`
- [ ] Poblar `OverrideVsOverloadSection`: 2 `CodeBlock`, `MermaidDiagram` `my-6`, `PracticeExercise` `my-8`
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/poo.ts`
- [ ] H2: «Override (sobrescritura)», «Overload (sobrecarga)», «Comparación práctica: override, overload y `new`»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

