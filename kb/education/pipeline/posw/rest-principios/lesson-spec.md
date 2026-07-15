---
track: posw
slug: rest-principios
title: "Principios REST"
order: 12
prev: cache
next: typescript
interactive_blocks:
  - type: callout
    id: rest-no-cualquier-api
  - type: mermaid
    id: seis-constraints
  - type: compare-table
    id: modelo-richardson
  - type: compare-table
    id: stateless-vs-stateful
  - type: callout
    id: fintech-sesion-memoria
  - type: practice-exercise
    id: stateless-login
  - type: step-reveal
    id: client-server-ecommerce
  - type: mermaid
    id: layered-system
  - type: callout
    id: marketplace-sin-hateoas
  - type: code-challenge
    id: ordenar-richardson
  - type: callout
    id: code-on-demand-opcional
  - type: practice-exercise
    id: comprension-uris-recursos
  - type: practice-exercise
    id: comprension-hateoas
  - type: practice-exercise
    id: comprension-richardson-nivel
  - type: practice-exercise
    id: reto-biblioteca
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/tokens/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

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
- Beneficio clave Client-Server (draft L211–213): prose; sin clay.
- Sin headers Cacheable (draft L246–248): prose callout inline; sin `ClayCard` extra.
- En `StatelessSection`: tabla → 2 code → warning → practice.
- En `UniformInterfaceSection`: json HATEOAS → js cliente → warning → challenge; no apilar 2 code sin prose.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Stateless (sin estado)`, `Uniform Interface (interfaz uniforme)` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Modelo de madurez Richardson`, `HATEOAS en JSON` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Cliente (frontend)», «Evolución independiente») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Constraints Fielding, sub-constraints Uniform Interface |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) Introducción` | Introducción a REST | `IntroRestSection` |
| `### 2) Stateless` | Stateless (sin estado) | `StatelessSection` |
| `### 3) Client-Server` | Client-Server | `ClientServerSection` |
| `### 4) Cacheable` | Cacheable | `CacheableSection` |
| `### 5) Layered System` | Layered System (sistema en capas) | `LayeredSection` |
| `### 6) Uniform Interface` | Uniform Interface (interfaz uniforme) | `UniformInterfaceSection` |
| `### 7) Code on Demand` | Code on Demand (opcional) | `CodeOnDemandSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: API de biblioteca | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace `typescript` |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `IntroRestSection`:** Mapa mental, Los seis constraints, Modelo de madurez Richardson, Recurso vs acción (anti-patrón).

**H3 dentro de `StatelessSection`:** Mapa mental, Stateless vs stateful, Request stateless con token, Práctica guiada.

**H3 dentro de `ClientServerSection`:** Mapa mental, Separación de responsabilidades, Beneficio clave.

**H3 dentro de `CacheableSection`:** Mapa mental, Respuesta cacheable (catálogo público), Respuesta no cacheable (dato de usuario), Sin headers = problema REST.

**H3 dentro de `LayeredSection`:** Mapa mental, Diagrama de capas, Qué ve el cliente.

**H3 dentro de `UniformInterfaceSection`:** Mapa mental, HATEOAS en JSON, Cliente navegando HATEOAS, Ordenar niveles Richardson.

**H3 dentro de `CodeOnDemandSection`:** Mapa mental, Ejemplo implícito (SPA).

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `IntroRestSection` | Introducción a REST | — | prose, `MermaidDiagram`, `CompareTable`, `CodeBlock` |
| 3 | `StatelessSection` | Stateless (sin estado) | — | prose, `CompareTable`, `CodeBlock` ×2, `Callout`, `PracticeExercise` |
| 4 | `ClientServerSection` | Client-Server | stepper | prose, `StepReveal` |
| 5 | `CacheableSection` | Cacheable | — | prose, `CodeBlock` ×2 |
| 6 | `LayeredSection` | Layered System (sistema en capas) | — | prose, `MermaidDiagram` |
| 7 | `UniformInterfaceSection` | Uniform Interface (interfaz uniforme) | — | prose, `CodeBlock` ×2, `Callout`, `CodeChallenge` |
| 8 | `CodeOnDemandSection` | Code on Demand (opcional) | — | prose, `Callout` |
| 9 | `ResumenSection` | Resumen | — | Viñetas prose 8 puntos |
| 10 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 11 | `RetoIntegradorSection` | Reto integrador: API de biblioteca | card | Enunciado prose + `CodeBlock` + `PracticeExercise` |
| 12 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `typescript` |
| 13 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L37–44) | Sin clay |
| Prerrequisitos | prose `<ul>` | apis, http-metodos-status, cache (draft L46–49) | Sin clay |
| `rest-no-cualquier-api` | `Callout` | title: «REST ≠ cualquier API con JSON» (draft L59–63) | **callout-info**; borde secondary |

#### `IntroRestSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Fielding 2000, 6 constraints, Richardson (draft L71–76) | Sin clay |
| `seis-constraints` | `MermaidDiagram` | flowchart REST → 6 constraints + Uniform sub (draft L80–83) | `my-6` |
| `modelo-richardson` | `CompareTable` | 4 filas Nivel/Características/Ejemplo/% (draft L87–96) | `ClayCard` `my-8`; thead secondary |
| Recurso vs acción | `CodeBlock` | http anti-patrón vs correcto (draft L100–107) | `my-6` |

#### `StatelessSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | request autosuficiente, JWT (draft L115–120) | Sin clay |
| `stateless-vs-stateful` | `CompareTable` | 4 filas Aspecto/Stateless/Stateful (draft L124–133) | `ClayCard` `my-8`; thead secondary |
| GET pedidos | `CodeBlock` | http Bearer GET (draft L137–143) | `my-6` |
| POST pedidos | `CodeBlock` | http Bearer POST body (draft L145–153) | `my-6` |
| `fintech-sesion-memoria` | `Callout` | title: «Pagos con sesión en memoria» (draft L157–161) | **callout-warning** |
| `stateless-login` | `PracticeExercise` | POST /login vs JWT (draft L165–171) | `ClayCard` `my-8` accent |

#### `ClientServerSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | separación UI/servidor, interfaz uniforme (draft L179–184) | Sin clay |
| `client-server-ecommerce` | `StepReveal` | title: «Client-Server en una app de e-commerce»; 4 steps (draft L188–209) | **stepper** `my-8` |
| Beneficio clave | prose | evolución independiente (draft L211–213) | Sin clay |

#### `CacheableSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Cache-Control, ETag, enlace cache (draft L221–225) | Sin clay |
| Catálogo público | `CodeBlock` | http max-age public ETag (draft L229–235) | `my-6` |
| Dato de usuario | `CodeBlock` | http no-store (draft L239–244) | `my-6` |
| Sin headers | prose | violación constraint Cacheable (draft L246–248) | Sin clay |

#### `LayeredSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | capa adyacente, CDN/Gateway/LB (draft L256–260) | Sin clay |
| `layered-system` | `MermaidDiagram` | flowchart Cliente→CDN→GW→LB→servidores (draft L264–267) | `my-6` |
| Qué ve el cliente | prose | solo api.ejemplo.com (draft L269–271) | Sin clay |

#### `UniformInterfaceSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | 4 sub-constraints + HATEOAS (draft L279–285) | Sin clay |
| HATEOAS JSON | `CodeBlock` | json _links producto (draft L289–307) | `my-6` |
| Cliente HATEOAS | `CodeBlock` | javascript agregarAlCarrito (draft L311–328) | `my-6` |
| `marketplace-sin-hateoas` | `Callout` | title: «15 URLs hardcodeadas en app móvil» (draft L332–336) | **callout-warning** |
| `ordenar-richardson` | `CodeChallenge` | niveles 0→3 Richardson (draft L340–350) | `ClayCard` `my-8` |

#### `CodeOnDemandSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | opcional, JS ejecutable, SPAs (draft L358–362) | Sin clay |
| Ejemplo implícito | prose | app.a3f9b2.js (draft L364–366) | Sin clay |
| `code-on-demand-opcional` | `Callout` | title: «Opcional pero omnipresente en la web» (draft L368–372) | **callout-info**; borde secondary |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 8 puntos (draft L380–388) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-uris-recursos` | `PracticeExercise` | getLibros/reservarLibro anti-patrón (draft L396–402) | accent border |
| `comprension-hateoas` | `PracticeExercise` | URLs hardcodeadas vs _links (draft L404–410) | accent border |
| `comprension-richardson-nivel` | `PracticeExercise` | nivel 2 sin HATEOAS (draft L412–418) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | API biblioteca actual + 5 tareas (draft L426–441) | H2 primary |
| Ejemplo libro HATEOAS | `CodeBlock` | json isbn + _links (draft L443–455) | `my-6` |
| `reto-biblioteca` | `PracticeExercise` | stateless, URIs, _links, Cache-Control (draft L457–468) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L478–483) | Sin clay |
| Siguiente paso | enlace `typescript` (draft L485) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas REST (draft L493–551) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| REST ≠ cualquier API con JSON | `callout-info` | `--color-secondary` | Richardson nivel 2 ≠ REST según Fielding |
| Pagos con sesión en memoria | `callout-warning` | `--color-accent` | 401 intermitente; migrar a JWT stateless |
| 15 URLs hardcodeadas en app móvil | `callout-warning` | `--color-accent` | HATEOAS reduce acoplamiento cliente-servidor |
| Opcional pero omnipresente en la web | `callout-info` | `--color-secondary` | Code on Demand en SPAs; otros 5 constraints obligatorios |

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

Lección larga (7 bloques de contenido): alternar secciones densas (`Stateless`, `UniformInterface`) con secciones ligeras (`Cacheable`, `Layered`, `CodeOnDemand`) para no saturar clay. En `StatelessSection`: tabla → 2 code → warning → practice. En `UniformInterfaceSection`: 2 code → warning → challenge.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| Introducción a REST | 2 | mermaid + tabla Richardson |
| Stateless (sin estado) | 2 | tabla + warning + practice |
| Client-Server | 2 | stepper 4 pasos |
| Cacheable | 0 | 2 code http; prose problema headers |
| Layered System | 1 | mermaid capas |
| Uniform Interface | 2 | 2 code + warning + challenge |
| Code on Demand | 1 | 1 callout info |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice biblioteca |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` REST ≠ cualquier API
- [ ] Poblar `IntroRestSection`: mermaid 6 constraints, `CompareTable` Richardson, `CodeBlock` recurso vs acción
- [ ] Poblar `StatelessSection`: `CompareTable`, 2 `CodeBlock`, callout warning, `PracticeExercise`
- [ ] Poblar `ClientServerSection`: `StepReveal` e-commerce
- [ ] Poblar `CacheableSection`: 2 `CodeBlock` http cacheable/no-cacheable
- [ ] Poblar `LayeredSection`: mermaid capas
- [ ] Poblar `UniformInterfaceSection`: 2 `CodeBlock`, callout warning, `CodeChallenge` Richardson
- [ ] Poblar `CodeOnDemandSection`: callout info SPA
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «Introducción a REST», «Stateless (sin estado)», «Client-Server», «Cacheable», «Layered System (sistema en capas)», «Uniform Interface (interfaz uniforme)», «Code on Demand (opcional)»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

