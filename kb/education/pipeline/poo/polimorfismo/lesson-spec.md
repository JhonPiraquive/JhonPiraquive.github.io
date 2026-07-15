---
track: poo
slug: polimorfismo
title: "Polimorfismo"
order: 6
prev: abstraccion-clases-abstractas-interfaces
next: override-y-sobrecarga
interactive_blocks:
  - type: callout
    id: misma-llamada-distinto-comportamiento
  - type: step-reveal
    id: checkout-pagar-runtime
  - type: mermaid
    id: flujo-checkout-pasarela
  - type: code-challenge
    id: completa-checkout-polimorfico
  - type: mermaid
    id: dispatch-runtime-sequence
  - type: mermaid
    id: jerarquia-impuesto
  - type: practice-exercise
    id: predice-calcular-impuestos
  - type: compare-table
    id: switch-vs-polimorfismo
  - type: practice-exercise
    id: list-impuesto-sustituibilidad
  - type: practice-exercise
    id: comprension-pasarela-efectivo
  - type: practice-exercise
    id: comprension-impuesto-fijo
  - type: practice-exercise
    id: comprension-antipatrones-polimorfismo
  - type: practice-exercise
    id: reto-extension-parte-d
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/poo/herencia/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

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
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Casos reales (checkout multi-pasarela): párrafo narrativo; sin clay extra.
- Dos `MermaidDiagram` en `PolimorfismoHerenciaSection`: separar con `CodeBlock` o prose (`my-6` cada uno); no card padre.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Polimorfismo con interfaces`, `Cliente estable y extensión` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Lista polimórfica de checkouts`, `Foreach polimórfico` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Delegación», «Dispatch runtime») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Dispatch, cliente estable, LSP preview |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) Polimorfismo con interfaces` | Polimorfismo con interfaces | `PolimorfismoInterfacesSection` |
| `### 2) Polimorfismo con clase abstracta` | Polimorfismo con clase abstracta | `PolimorfismoHerenciaSection` |
| `### 3) Cliente estable y extensión` | Cliente estable y extensión | `ClienteEstableSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: facturación con checkout e impuestos | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `PolimorfismoInterfacesSection`:** Mapa mental, Qué es, Señales de polimorfismo con interfaz, Ejemplo C#: pasarelas de pago, Lista polimórfica de checkouts, Llamada polimórfica paso a paso, Caso real: checkout multi-pasarela, Diagrama: flujo Checkout → IPasarelaPago, Errores comunes.

**H3 dentro de `PolimorfismoHerenciaSection`:** Mapa mental, Qué es, Señales de polimorfismo con abstracta, Ejemplo C#: impuestos, Foreach polimórfico, Preview herencia virtual (conexión lección herencia), Dispatch en runtime (secuencia), Jerarquía Impuesto, Errores comunes.

**H3 dentro de `ClienteEstableSection`:** Mapa mental, Qué es, Comparación: if por tipo vs polimorfismo, Cuándo NO polimorfizar, Extensión demostrada, Errores comunes.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `PolimorfismoInterfacesSection` | Polimorfismo con interfaces | stepper | prose, `CodeBlock` ×2, `StepReveal`, `MermaidDiagram`, `CodeChallenge` |
| 3 | `PolimorfismoHerenciaSection` | Polimorfismo con clase abstracta | — | prose, `CodeBlock` ×3, `MermaidDiagram` ×2, `PracticeExercise` |
| 4 | `ClienteEstableSection` | Cliente estable y extensión | — | prose, `CompareTable`, `CodeBlock`, `PracticeExercise` |
| 5 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 6 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 7 | `RetoIntegradorSection` | Reto integrador: facturación con checkout e impuestos | card | Enunciado prose (Partes A–D) + `PracticeExercise` |
| 8 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `override-y-sobrecarga` |
| 9 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L17–24) | Sin clay |
| Prerrequisitos | prose `<ul>` | abstracción, herencia, asociación (draft L25–29) | Sin clay |
| `misma-llamada-distinto-comportamiento` | `Callout` | title: «Misma llamada, distinto comportamiento»; dispatch runtime (draft L39–43) | **callout-info**; borde secondary |

#### `PolimorfismoInterfacesSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | invocación uniforme (draft L51–55) | Sin clay |
| Qué es / Señales | prose | IPasarelaPago + Checkout (draft L57–65) | Sin clay |
| Pasarelas de pago | `CodeBlock` | interfaz + 3 pasarelas + Checkout (draft L69–106) | `my-6` |
| Lista polimórfica | `CodeBlock` | List&lt;Checkout&gt; foreach (draft L110–121) | `my-4` |
| `checkout-pagar-runtime` | `StepReveal` | title: «Checkout.Pagar en runtime»; 4 steps (draft L125–134) | **stepper** `my-8` |
| Caso real SaaS | prose | switch 400 líneas (draft L136–138) | Sin clay |
| `flujo-checkout-pasarela` | `MermaidDiagram` | flowchart LR Checkout→pasarelas (draft L142–145) | `my-6` |
| Errores comunes | prose `<ul>` | 2 ítems (draft L147–150) | Sin clay |
| `completa-checkout-polimorfico` | `CodeChallenge` | blank `_pasarela` (draft L152–159) | `ClayCard` `my-8` |

#### `PolimorfismoHerenciaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Impuesto + override (draft L167–171) | Sin clay |
| Qué es / Señales | prose | List&lt;Impuesto&gt; (draft L173–181) | Sin clay |
| Impuestos ejemplo | `CodeBlock` | abstract Impuesto + derivadas (draft L185–212) | `my-6` |
| Foreach polimórfico | `CodeBlock` | List + foreach salida 19/0/5 (draft L216–227) | `my-4` |
| Preview Vehiculo/Carro | `CodeBlock` | virtual/override conexión herencia (draft L231–245) | `my-4` |
| `dispatch-runtime-sequence` | `MermaidDiagram` | sequenceDiagram Arrancar (draft L249–252) | `my-6` |
| `jerarquia-impuesto` | `MermaidDiagram` | classDiagram Impuesto (draft L256–259) | `my-6` |
| Errores comunes | prose `<ul>` | 3 ítems new/override (draft L261–265) | Sin clay |
| `predice-calcular-impuestos` | `PracticeExercise` | predicción Calcular(100) (draft L267–277) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

Separar los dos diagramas con el `CodeBlock` Vehiculo/Carro entre ellos. No apilar sequence + class sin prose intermedia.

#### `ClienteEstableSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | extender sin editar cliente (draft L285–289) | Sin clay |
| Qué es | prose | cliente estable, LSP preview (draft L291–293) | Sin clay |
| `switch-vs-polimorfismo` | `CompareTable` | 4 filas Nueva variante/Acoplamiento/… (draft L297–306) | `ClayCard` `my-8`; thead secondary |
| Cuándo NO polimorfizar | prose `<ul>` | 3 ítems (draft L308–312) | Sin clay |
| Extensión PasarelaNequi | `CodeBlock` | nueva clase sin editar Checkout (draft L316–326) | `my-6` |
| Errores comunes | prose `<ul>` | 3 ítems casting/overload (draft L328–332) | Sin clay |
| `list-impuesto-sustituibilidad` | `PracticeExercise` | List&lt;Impuesto&gt; vs List&lt;Iva&gt; (draft L334–344) | `ClayCard` `my-8` accent |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L352–357) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-pasarela-efectivo` | `PracticeExercise` | PasarelaEfectivo + foreach (draft L367–377) | accent border |
| `comprension-impuesto-fijo` | `PracticeExercise` | ImpuestoFijo predicción (draft L379–389) | accent border |
| `comprension-antipatrones-polimorfismo` | `PracticeExercise` | anti-patrones vs señales (draft L391–402) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | Partes A–D + criterio éxito (draft L410–435) | H2 primary |
| Lista tareas | prose `<ol>` | 9 ítems | `my-4` |
| `reto-extension-parte-d` | `PracticeExercise` | documentar archivos editados Parte D (draft L437–447) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L455–462) | Sin clay |
| Siguiente paso | enlace `override-y-sobrecarga` (draft L464) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas polimorfismo/dispatch (draft L472–515) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Misma llamada, distinto comportamiento | `callout-info` | `--color-secondary` | Principio rector de la lección; tipo declarado vs real |
| *(ningún callout-warning en draft)* | — | — | Errores comunes van en prose `<ul>`; opcional futuro `callout-warning` para `new` vs `override` si Brand lo promueve |

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

En `PolimorfismoInterfacesSection`: stepper → diagrama flowchart → challenge; intercalar prose caso real. En `PolimorfismoHerenciaSection`: máximo 2 diagramas consecutivos solo si hay `CodeBlock` entre ellos. En `ClienteEstableSection`: `CompareTable` (`my-8`) antes de `CodeBlock` extensión; practice al cierre de sección.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| Polimorfismo con interfaces | 2 | stepper + diagrama + challenge |
| Polimorfismo con clase abstracta | 2 | 2 diagramas + practice |
| Cliente estable y extensión | 2 | tabla + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice Parte D |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` misma llamada distinto comportamiento
- [ ] Poblar `PolimorfismoInterfacesSection`: 2 `CodeBlock`, `StepReveal`, mermaid flowchart, `CodeChallenge`
- [ ] Poblar `PolimorfismoHerenciaSection`: 3 `CodeBlock`, 2 `MermaidDiagram`, `PracticeExercise`
- [ ] Poblar `ClienteEstableSection`: `CompareTable`, `CodeBlock`, `PracticeExercise`
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/poo.ts`
- [ ] H2: «Polimorfismo con interfaces», «Polimorfismo con clase abstracta», «Cliente estable y extensión»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

