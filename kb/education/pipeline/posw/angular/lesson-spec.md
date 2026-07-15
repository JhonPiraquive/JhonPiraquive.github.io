---
track: posw
slug: angular
title: "Angular: Fundamentos"
order: 14
prev: typescript
next: react
interactive_blocks:
  - type: callout
    id: angular-js-vs-moderno
  - type: compare-table
    id: angular-vs-react
  - type: mermaid
    id: arbol-componentes-angular
  - type: callout
    id: migracion-di-banco
  - type: practice-exercise
    id: arbol-componentes-tienda
  - type: step-reveal
    id: hooks-ciclo-vida
  - type: callout
    id: memory-leak-catalogo
  - type: compare-table
    id: cuatro-bindings
  - type: code-challenge
    id: completar-bindings
  - type: compare-table
    id: pipes-comunes
  - type: callout
    id: preferir-async-pipe
  - type: practice-exercise
    id: angular-framework-completo
  - type: practice-exercise
    id: comprension-input-output
  - type: practice-exercise
    id: comprension-memory-leak
  - type: practice-exercise
    id: comprension-sintaxis-template
  - type: practice-exercise
    id: reto-catalogo-angular
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/backend/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

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
- Errores comunes (`DirectivasBindingsSection` draft L323–327): prose `<ul>`; sin clay.
- En `IntroAngularSection`: tabla → code bash → mermaid → warning; prose mapa mental al inicio.
- En `ComponentesSection`: code TS → code HTML → mermaid → practice.
- En `CicloVidaSection`: stepreveal → code → warning.
- En `DirectivasBindingsSection`: tabla → code HTML → challenge; errores comunes tras challenge.
- En `PipesModulosSection`: code HTML → tabla → code NgModule → callout info.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Introducción a Angular`, `Componentes` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Anatomía de un componente`, `Cuatro tipos de binding` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («ngOnInit», «ngOnDestroy») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Framework opinionado, DI |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) Introducción a Angular` | Introducción a Angular | `IntroAngularSection` |
| `### 2) Componentes` | Componentes | `ComponentesSection` |
| `### 3) Ciclo de vida` | Ciclo de vida | `CicloVidaSection` |
| `### 4) Directivas y data binding` | Directivas y data binding | `DirectivasBindingsSection` |
| `### 5) Pipes y módulos` | Pipes y módulos | `PipesModulosSection` |
| `### 6) Servicios e inyección de dependencias` | Servicios e inyección de dependencias | `ServiciosDiSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: módulo de catálogo Angular para API REST | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace `react` |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `IntroAngularSection`:** Mapa mental, Angular vs React (panorama), Crear proyecto Angular, Árbol de componentes típico, Caso real banco corporativo.

**H3 dentro de `ComponentesSection`:** Mapa mental, Anatomía de un componente, Template del componente, Flujo padre-hijo, Práctica guiada.

**H3 dentro de `CicloVidaSection`:** Mapa mental, Timeline del ciclo de vida, Fetch y limpieza de suscripciones, Caso real memory leak.

**H3 dentro de `DirectivasBindingsSection`:** Mapa mental, Cuatro tipos de binding, Directivas estructurales y de atributo, Completar bindings, Errores comunes.

**H3 dentro de `PipesModulosSection`:** Mapa mental, Pipes en template, Pipes comunes, Estructura de NgModule, async pipe vs subscribe manual.

**H3 dentro de `ServiciosDiSection`:** Mapa mental, Servicio HTTP con DI, Consumo en componente, Práctica guiada.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `IntroAngularSection` | Introducción a Angular | — | prose, `CompareTable`, `CodeBlock`, `MermaidDiagram`, `Callout` |
| 3 | `ComponentesSection` | Componentes | — | prose, `CodeBlock` ×2, `MermaidDiagram`, `PracticeExercise` |
| 4 | `CicloVidaSection` | Ciclo de vida | stepper | prose, `StepReveal`, `CodeBlock`, `Callout` |
| 5 | `DirectivasBindingsSection` | Directivas y data binding | — | prose, `CompareTable`, `CodeBlock`, `CodeChallenge` |
| 6 | `PipesModulosSection` | Pipes y módulos | — | prose, `CodeBlock` ×2, `CompareTable`, `Callout` |
| 7 | `ServiciosDiSection` | Servicios e inyección de dependencias | — | prose, `CodeBlock` ×2, `PracticeExercise` |
| 8 | `ResumenSection` | Resumen | — | Viñetas prose 8 puntos |
| 9 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 10 | `RetoIntegradorSection` | Reto integrador: módulo de catálogo Angular para API REST | card | Enunciado prose + `CodeBlock` ×2 + `PracticeExercise` |
| 11 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `react` |
| 12 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L35–39) | Sin clay |
| Prerrequisitos | prose `<ul>` | typescript, HTML, REST (draft L43–45) | Sin clay |
| `angular-js-vs-moderno` | `Callout` | title: «Angular.js ≠ Angular moderno» (draft L56–58) | **callout-info**; borde secondary |

#### `IntroAngularSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | framework, opinionado, vs React (draft L69–72) | Sin clay |
| `angular-vs-react` | `CompareTable` | 5 filas Aspecto/Angular/React (draft L77–85) | `ClayCard` `my-8`; thead secondary |
| Crear proyecto | `CodeBlock` | bash ng new/serve (draft L91–96) | `my-6` |
| `arbol-componentes-angular` | `MermaidDiagram` | flowchart App→Navbar→Catálogo (draft L101–102) | `my-6` |
| `migracion-di-banco` | `Callout` | title: «Migración a Angular con DI» (draft L108–110) | **callout-warning** |

#### `ComponentesSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | @Component, @Input, @Output (draft L121–125) | Sin clay |
| Anatomía TS | `CodeBlock` | typescript TarjetaProductoComponent (draft L130–157) | `my-6` |
| Template HTML | `CodeBlock` | html tarjeta con pipes (draft L162–171) | `my-6` |
| Flujo padre-hijo | `MermaidDiagram` | flowchart Input/Output/HttpClient (draft L176–177) | `my-6` |
| `arbol-componentes-tienda` | `PracticeExercise` | árbol tienda presentacional/contenedor (draft L183–188) | `ClayCard` `my-8` accent |

#### `CicloVidaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | ngOnChanges, ngOnInit, ngOnDestroy (draft L198–202) | Sin clay |
| `hooks-ciclo-vida` | `StepReveal` | title: «Hooks principales de un componente Angular»; 5 steps (draft L207–230) | **stepper** `my-8` |
| Fetch y cleanup | `CodeBlock` | typescript Subscription ngOnDestroy (draft L236–251) | `my-6` |
| `memory-leak-catalogo` | `Callout` | title: «SPA lenta tras 30 minutos de uso» (draft L256–258) | **callout-warning** |

#### `DirectivasBindingsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | *ngIf, ngModel, bindings (draft L269–274) | Sin clay |
| `cuatro-bindings` | `CompareTable` | 4 filas Tipo/Sintaxis/Dirección (draft L279–286) | `ClayCard` `my-8`; thead secondary |
| Directivas ejemplo | `CodeBlock` | html *ngIf, *ngFor, ngClass (draft L292–308) | `my-6` |
| `completar-bindings` | `CodeChallenge` | completar property/event/two-way (draft L313–320) | `ClayCard` `my-8` |
| Errores comunes | prose `<ul>` | mutar Input, trackBy, FormsModule (draft L325–327) | Sin clay |

#### `PipesModulosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | pipes, NgModule, standalone (draft L337–341) | Sin clay |
| Pipes template | `CodeBlock` | html currency, date, async (draft L346–352) | `my-6` |
| `pipes-comunes` | `CompareTable` | 5 filas Pipe/Uso/Ejemplo (draft L357–365) | `ClayCard` `my-8`; thead secondary |
| NgModule | `CodeBlock` | typescript AppModule (draft L371–384) | `my-6` |
| `preferir-async-pipe` | `Callout` | title: «Preferir async pipe cuando sea posible» (draft L389–391) | **callout-info**; borde secondary |

#### `ServiciosDiSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | @Injectable, HttpClient, DI (draft L401–406) | Sin clay |
| Servicio HTTP | `CodeBlock` | typescript ProductosService (draft L411–425) | `my-6` |
| Consumo componente | `CodeBlock` | typescript CatalogoComponent (draft L431–440) | `my-6` |
| `angular-framework-completo` | `PracticeExercise` | Angular vs React 3 piezas integradas (draft L445–450) | `ClayCard` `my-8` accent |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 8 puntos (draft L459–466) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-input-output` | `PracticeExercise` | no mutar @Input (draft L475–479) | accent border |
| `comprension-memory-leak` | `PracticeExercise` | unsubscribe vs async pipe (draft L483–487) | accent border |
| `comprension-sintaxis-template` | `PracticeExercise` | currency, ngFor, click (draft L491–495) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas catálogo REST (draft L508–514) | H2 primary |
| Servicio | `CodeBlock` | typescript ProductosService (draft L517–525) | `my-6` |
| Template catálogo | `CodeBlock` | html *ngFor, *ngIf, tarjeta (draft L529–538) | `my-6` |
| `reto-catalogo-angular` | `PracticeExercise` | diseñar módulo catálogo (draft L541–550) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 5 viñetas (draft L563–567) | Sin clay |
| Siguiente paso | enlace `react` (draft L569) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas Angular (draft L578–635) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Angular.js ≠ Angular moderno | `callout-info` | `--color-secondary` | No mezclar documentación deprecada |
| Migración a Angular con DI | `callout-warning` | `--color-accent` | Centralizar HTTP en servicio; evitar fetch duplicado |
| SPA lenta tras 30 minutos de uso | `callout-warning` | `--color-accent` | Cancelar suscripciones; takeUntilDestroyed o async pipe |
| Preferir async pipe cuando sea posible | `callout-info` | `--color-secondary` | Desuscripción automática al destruir componente |

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

En `IntroAngularSection`: tabla → code → mermaid → warning. En `ComponentesSection`: code ×2 → mermaid → practice. En `CicloVidaSection`: stepreveal → code → warning. En `DirectivasBindingsSection`: tabla → code → challenge. En `PipesModulosSection`: code → tabla → code → callout info.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| Introducción a Angular | 2 | tabla + warning |
| Componentes | 2 | mermaid + practice |
| Ciclo de vida | 2 | stepper + warning |
| Directivas y data binding | 2 | tabla + challenge |
| Pipes y módulos | 2 | tabla + callout info |
| Servicios e inyección de dependencias | 2 | practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice catálogo |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` Angular.js vs moderno
- [ ] Poblar `IntroAngularSection`: `CompareTable`, `CodeBlock` bash, mermaid árbol, callout warning
- [ ] Poblar `ComponentesSection`: 2 `CodeBlock`, mermaid flujo, `PracticeExercise`
- [ ] Poblar `CicloVidaSection`: `StepReveal`, `CodeBlock`, callout warning
- [ ] Poblar `DirectivasBindingsSection`: `CompareTable`, `CodeBlock` HTML, `CodeChallenge`
- [ ] Poblar `PipesModulosSection`: 2 `CodeBlock`, `CompareTable`, callout info async pipe
- [ ] Poblar `ServiciosDiSection`: 2 `CodeBlock`, `PracticeExercise`
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «Introducción a Angular», «Componentes», «Ciclo de vida», «Directivas y data binding», «Pipes y módulos», «Servicios e inyección de dependencias»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

