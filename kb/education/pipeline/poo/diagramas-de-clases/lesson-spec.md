---
track: poo
slug: diagramas-de-clases
title: "Diagramas de Clases"
order: 8
prev: override-y-sobrecarga
next: solid-principios
interactive_blocks:
  - type: callout
    id: estructura-no-secuencia
  - type: mermaid
    id: uml-guia-csharp
  - type: mermaid
    id: diagrama-producto
  - type: step-reveal
    id: leer-diagrama-clase
  - type: mermaid
    id: notificacion-abstracta
  - type: mermaid
    id: ipasarela-implementaciones
  - type: practice-exercise
    id: anade-notificacion-diagrama
  - type: compare-table
    id: relaciones-uml
  - type: mermaid
    id: relaciones-recordatorio
  - type: mermaid
    id: pedido-linea-composicion
  - type: practice-exercise
    id: doctor-paciente-relacion
  - type: mermaid
    id: caso-integrado-tienda
  - type: step-reveal
    id: caso-tienda-uml-csharp
  - type: practice-exercise
    id: carrito-producto-agregacion
  - type: compare-table
    id: checklist-simbolos-mermaid
  - type: practice-exercise
    id: comprension-carrito-mermaid
  - type: practice-exercise
    id: comprension-producto-notificacion
  - type: practice-exercise
    id: comprension-srp-diagrama
  - type: mermaid
    id: reto-checkout-pasarela
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
- **`MermaidDiagram`:** siempre `my-6`; fondo blanco, sin `ClayCard`. Lección diagram-heavy: no apilar más de 2 mermaid consecutivos sin prose o `CodeBlock` entre ellos.
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Casos reales (onboarding tienda, refactor checkout): párrafo narrativo.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Elementos básicos del diagrama`, `Relaciones: asociación, agregación y composición` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Diagrama Mermaid — Producto`, `Composición Pedido — LineaPedido` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | UML estático, cardinalidad |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | `Callout` + mermaid intro |
| `### 1) Elementos básicos` | Elementos básicos del diagrama | `ElementosBasicosSection` |
| `### 2) Herencia e interfaces` | Herencia e interfaces en el diagrama | `HerenciaInterfacesDiagramaSection` |
| `### 3) Relaciones` | Relaciones: asociación, agregación y composición | `RelacionesDiagramaSection` |
| `### 4) Caso integrado` | Caso integrado: tienda de pedidos | `CasoIntegradoTiendaSection` |
| Resumen | Resumen | Viñetas + tabla símbolos |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: modelo de pedidos | Subtítulo UML → C# |
| Cierre | Cierre de la lección | Ideas clave + enlace `solid-principios` |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `ElementosBasicosSection`:** Mapa mental, Qué representa una clase, Diagrama Mermaid — Producto, Correspondencia diagrama ↔ C#, De diagrama a C# paso a paso, Errores comunes.

**H3 dentro de `HerenciaInterfacesDiagramaSection`:** Mapa mental, Notificación abstracta + derivadas, Interfaz y implementaciones (pasarelas), Señales en el diagrama, Errores comunes.

**H3 dentro de `RelacionesDiagramaSection`:** Mapa mental, Comparación de relaciones UML, Relaciones recordatorio, Composición Pedido — LineaPedido, Caso real: onboarding tienda online, Errores comunes.

**H3 dentro de `CasoIntegradoTiendaSection`:** Mapa mental, Caso integrado tienda (modelo completo), De diagrama a diseño C# paso a paso, Caso real: refactor de checkout, Errores comunes.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | `Callout`, `MermaidDiagram` |
| 2 | `ElementosBasicosSection` | Elementos básicos del diagrama | stepper | prose, `MermaidDiagram`, `CodeBlock`, `StepReveal` |
| 3 | `HerenciaInterfacesDiagramaSection` | Herencia e interfaces en el diagrama | — | prose, `MermaidDiagram` ×2, `PracticeExercise` |
| 4 | `RelacionesDiagramaSection` | Relaciones: asociación, agregación y composición | — | prose, `CompareTable`, `MermaidDiagram` ×2, `PracticeExercise` |
| 5 | `CasoIntegradoTiendaSection` | Caso integrado: tienda de pedidos | — | prose, `MermaidDiagram`, `StepReveal`, `PracticeExercise` |
| 6 | `ResumenSection` | Resumen | — | Viñetas + `CompareTable` checklist |
| 7 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 8 | `RetoIntegradorSection` | Reto integrador: modelo de pedidos | card | Enunciado prose + `MermaidDiagram` |
| 9 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `solid-principios` |
| 10 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro prose | prose | plano del modelo (draft L39) | Sin clay |
| `estructura-no-secuencia` | `Callout` | title: «Estructura, no secuencia» (draft L41–45) | **callout-info**; borde secondary; `my-6` |
| `uml-guia-csharp` | `MermaidDiagram` | flowchart UML→C# (draft L47–50) | **`my-6`** |

#### `ElementosBasicosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | compartimentos UML (draft L58–62) | Sin clay |
| Qué representa | prose | interfaz pública (draft L64–66) | Sin clay |
| `diagrama-producto` | `MermaidDiagram` | classDiagram Producto (draft L70–73) | **`my-6`** |
| Correspondencia C# | `CodeBlock` | clase Producto (draft L77–97) | `my-6` |
| `leer-diagrama-clase` | `StepReveal` | title: «Leer un diagrama de clase»; 4 steps (draft L101–110) | **stepper** `my-8` |
| Errores comunes | prose `<ul>` | 3 ítems (draft L112–116) | Sin clay |

#### `HerenciaInterfacesDiagramaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | herencia, interfaz, abstract (draft L124–128) | Sin clay |
| `notificacion-abstracta` | `MermaidDiagram` | Notificacion abstract (draft L132–135) | **`my-6`** |
| `ipasarela-implementaciones` | `MermaidDiagram` | IPasarelaPago (draft L139–142) | **`my-6`** |
| Señales | prose `<ul>` | `<|--` vs `<|..` (draft L144–148) | Sin clay |
| Errores comunes | prose `<ul>` | 3 ítems (draft L150–154) | Sin clay |
| `anade-notificacion-diagrama` | `PracticeExercise` | Notificacion + Email/Sms Mermaid (draft L156–166) | `ClayCard` **`my-8`** accent |

Separar los dos classDiagram con prose «Señales en el diagrama».

#### `RelacionesDiagramaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | asociación, agregación, composición (draft L174–179) | Sin clay |
| `relaciones-uml` | `CompareTable` | 3 filas relación/símbolo/ciclo (draft L183–191) | `ClayCard` `my-8`; thead secondary |
| `relaciones-recordatorio` | `MermaidDiagram` | Equipo/Jugador, Pedido/Linea (draft L195–198) | **`my-6`** |
| `pedido-linea-composicion` | `MermaidDiagram` | Pedido *-- LineaPedido detalle (draft L202–205) | **`my-6`** |
| Caso real onboarding | prose | catálogo vs pedido (draft L207–209) | Sin clay |
| Errores comunes | prose `<ul>` | 3 ítems (draft L211–215) | Sin clay |
| `doctor-paciente-relacion` | `PracticeExercise` | asociación vs composición (draft L217–227) | `ClayCard` **`my-8`** accent |

#### `CasoIntegradoTiendaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Cliente, Pedido, cardinalidad (draft L235–239) | Sin clay |
| `caso-integrado-tienda` | `MermaidDiagram` | modelo completo tienda (draft L243–246) | **`my-6`** |
| `caso-tienda-uml-csharp` | `StepReveal` | title: «Caso tienda: de UML a C#»; 4 steps (draft L250–259) | **stepper** `my-8` |
| Caso real checkout | prose | 90 min equipo (draft L261–263) | Sin clay |
| Errores comunes | prose `<ul>` | 3 ítems (draft L265–269) | Sin clay |
| `carrito-producto-agregacion` | `PracticeExercise` | Usuario/Carrito/Producto (draft L271–281) | `ClayCard` **`my-8`** accent |

#### `ResumenSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Viñetas | prose `<ul>` | 6 puntos (draft L289–294) | Sin clay |
| `checklist-simbolos-mermaid` | `CompareTable` | 6 filas sintaxis (draft L298–309) | `ClayCard` `my-8`; thead secondary |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-carrito-mermaid` | `PracticeExercise` | Carrito/Producto agregación (draft L319–329) | accent; **`my-8`** |
| `comprension-producto-notificacion` | `PracticeExercise` | AplicarDescuento + Notificacion (draft L331–341) | accent; **`my-8`** |
| `comprension-srp-diagrama` | `PracticeExercise` | clase viola SRP (draft L343–353) | accent; **`my-8`** |

H2 en **card** semántico; apilar practice con **`my-8`**.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | Partes A–D (draft L361–387) | H2 primary |
| Lista tareas | prose `<ol>` | 10 ítems | `my-4` |
| `reto-checkout-pasarela` | `MermaidDiagram` | Checkout + IPasarelaPago (draft L389–392) | **`my-6`**; ejemplo Parte C |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L402–407) | Sin clay |
| Siguiente paso | enlace `solid-principios` (draft L409) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas UML/Mermaid (draft L417–461) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Estructura, no secuencia | `callout-info` | `--color-secondary` | Diagrama = mapa estático, no secuencia |
| Clase Dios / desincronía | — (prose) | — | Opcional **callout-warning** en `CasoIntegradoTiendaSection` errores comunes |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / Quiz
        ├── MermaidDiagram (blanco, my-6, no clay) — densidad alta en esta lección
        └── CodeBlock (oscuro, my-6, no clay)
```

En `HerenciaInterfacesDiagramaSection` y `RelacionesDiagramaSection`: dos mermaid consecutivos permitidos solo con prose intermedia. En `ResumenSection`: viñetas prose antes de `CompareTable` checklist.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | callout + mermaid intro |
| Elementos básicos | 2 | mermaid + stepper |
| Herencia e interfaces | 2 | 2 mermaid + practice |
| Relaciones | 2 | tabla + 2 mermaid + practice |
| Caso integrado tienda | 2 | mermaid grande + stepper + practice |
| Resumen | 1 | tabla símbolos |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 1 | mermaid ejemplo |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` y mermaid UML→C# `my-6`
- [ ] Poblar `ElementosBasicosSection`: mermaid Producto `my-6`, `CodeBlock`, `StepReveal`
- [ ] Poblar `HerenciaInterfacesDiagramaSection`: 2 mermaid `my-6`, `PracticeExercise` `my-8`
- [ ] Poblar `RelacionesDiagramaSection`: `CompareTable`, 2 mermaid `my-6`, `PracticeExercise` `my-8`
- [ ] Poblar `CasoIntegradoTiendaSection`: mermaid tienda `my-6`, `StepReveal`, `PracticeExercise` `my-8`
- [ ] Resumen con `CompareTable` checklist; Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/poo.ts`

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

