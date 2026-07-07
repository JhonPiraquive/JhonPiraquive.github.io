---
track: posw
slug: backend
title: "Backend: Tecnologías y Frameworks"
order: 10
prev: frontend
next: cache
interactive_blocks:
  - type: callout
    id: backend-no-solo-api
  - type: mermaid
    id: arquitectura-capas
  - type: step-reveal
    id: capas-peticion-get
  - type: practice-exercise
    id: analogia-restaurante
  - type: compare-table
    id: grid-responsabilidades
  - type: callout
    id: caso-banco-controlador
  - type: code-challenge
    id: ordenar-flujo-habitaciones
  - type: compare-table
    id: comparativa-frameworks
  - type: callout
    id: startup-go-prematuro
  - type: mermaid
    id: arbol-decision-backend
  - type: code-challenge
    id: completa-arbol-decision
  - type: practice-exercise
    id: comprension-validacion-servidor
  - type: practice-exercise
    id: comprension-stack-javascript
  - type: practice-exercise
    id: comprension-controlador-servicio
  - type: practice-exercise
    id: reto-cursos-online
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
- Errores a evitar (draft L261–266): prose `<ul>`; sin clay.
- En `QueEsBackendSection`: mermaid capas → stepreveal → code → practice; prose analogía restaurante entre mapa y diagrama.
- En `ComoElegirBackendSection`: mermaid árbol → challenge; lista errores tras challenge.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué es el backend?`, `Tecnologías y frameworks` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Arquitectura en capas`, `Comparativa de frameworks` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Request HTTP del cliente», «Servicio aplica reglas») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Capas rutas→controladores→servicios |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) ¿Qué es el backend?` | ¿Qué es el backend? | `QueEsBackendSection` |
| `### 2) Responsabilidades` | Responsabilidades del backend | `ResponsabilidadesBackendSection` |
| `### 3) Tecnologías` | Tecnologías y frameworks | `TecnologiasBackendSection` |
| `### 4) Cómo elegir` | Cómo elegir el backend | `ComoElegirBackendSection` |
| `### 5) Ejemplos` | Ejemplos de backend | `EjemplosBackendSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: plataforma de cursos online | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace `cache` |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `QueEsBackendSection`:** Mapa mental, Analogía del restaurante, Arquitectura en capas, Flujo de una petición, Request al backend, Práctica guiada.

**H3 dentro de `ResponsabilidadesBackendSection`:** Mapa mental, Grid de responsabilidades, Errores comunes, Ordenar capas de una petición.

**H3 dentro de `TecnologiasBackendSection`:** Mapa mental, Comparativa de frameworks, Caso real startup vs benchmarks.

**H3 dentro de `ComoElegirBackendSection`:** Mapa mental, Árbol de decisión, Completar árbol de decisión, Errores a evitar.

**H3 dentro de `EjemplosBackendSection`:** Mapa mental, Listar productos (Express), Crear producto con validación, Respuesta JSON.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `QueEsBackendSection` | ¿Qué es el backend? | stepper | prose, `MermaidDiagram`, `StepReveal`, `CodeBlock`, `PracticeExercise` |
| 3 | `ResponsabilidadesBackendSection` | Responsabilidades del backend | — | prose, `CompareTable`, `Callout`, `CodeChallenge` |
| 4 | `TecnologiasBackendSection` | Tecnologías y frameworks | — | prose, `CompareTable`, `Callout` |
| 5 | `ComoElegirBackendSection` | Cómo elegir el backend | — | prose, `MermaidDiagram`, `CodeChallenge` |
| 6 | `EjemplosBackendSection` | Ejemplos de backend | — | prose, `CodeBlock` ×3 |
| 7 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 8 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 9 | `RetoIntegradorSection` | Reto integrador: plataforma de cursos online | card | Enunciado prose + `CodeBlock` + `PracticeExercise` |
| 10 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `cache` |
| 11 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L32–38) | Sin clay |
| Prerrequisitos | prose `<ul>` | frontend, apis, HTTP/JSON (draft L40–44) | Sin clay |
| `backend-no-solo-api` | `Callout` | title: «Backend ≠ solo API» (draft L54–58) | **callout-info**; borde secondary |

#### `QueEsBackendSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Analogía | prose | restaurante reservas hotel (draft L66–79) | Sin clay |
| `arquitectura-capas` | `MermaidDiagram` | flowchart Cliente→Gateway→Backend→DB (draft L83–86) | `my-6` |
| `capas-peticion-get` | `StepReveal` | title: «Capas de una petición GET /api/v1/productos/42»; 5 steps (draft L90–115) | **stepper** `my-8` |
| Request HTTP | `CodeBlock` | http GET productos/42 (draft L119–125) | `my-6` |
| `analogia-restaurante` | `PracticeExercise` | analogía restaurante hotel (draft L129–135) | `ClayCard` `my-8` accent |

#### `ResponsabilidadesBackendSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | 6 responsabilidades (draft L143–150) | Sin clay |
| `grid-responsabilidades` | `CompareTable` | 6 filas Responsabilidad/Qué hace/Capa/Ejemplo (draft L154–165) | `ClayCard` `my-8`; thead secondary |
| `caso-banco-controlador` | `Callout` | title: «Caso real: banco con lógica en el controlador» (draft L169–173) | **callout-warning** |
| `ordenar-flujo-habitaciones` | `CodeChallenge` | ordenar GET habitaciones (draft L177–188) | `ClayCard` `my-8` |

#### `TecnologiasBackendSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Node, Python, Java, PHP, Go, C# (draft L196–203) | Sin clay |
| `comparativa-frameworks` | `CompareTable` | 7 filas Framework/Lenguaje/Curva/Uso (draft L207–219) | `ClayCard` `my-8`; thead secondary |
| `startup-go-prematuro` | `Callout` | title: «Startup de delivery: Go prematuro» (draft L223–227) | **callout-warning** |

#### `ComoElegirBackendSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | experiencia, tipo proyecto, criterios (draft L235–239) | Sin clay |
| `arbol-decision-backend` | `MermaidDiagram` | flowchart elegir stack (draft L243–246) | `my-6` |
| `completa-arbol-decision` | `CodeChallenge` | Python ML, banca, CMS (draft L250–259) | `ClayCard` `my-8` |
| Errores a evitar | prose `<ul>` | benchmarks, validación, controlador, 200/stack traces (draft L261–266) | Sin clay |

#### `EjemplosBackendSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | capas, validación, códigos HTTP (draft L274–278) | Sin clay |
| Listar productos | `CodeBlock` | javascript Express GET (draft L282–303) | `my-6` |
| Crear producto | `CodeBlock` | javascript POST validación 422 (draft L307–320) | `my-6` |
| Respuesta JSON | `CodeBlock` | json producto (draft L324–332) | `my-6` |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L340–345) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-validacion-servidor` | `PracticeExercise` | validación servidor vs cliente (draft L353–359) | accent border |
| `comprension-stack-javascript` | `PracticeExercise` | Node.js vs Go en 6 semanas (draft L361–367) | accent border |
| `comprension-controlador-servicio` | `PracticeExercise` | rol controlador vs servicio (draft L369–375) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas cursos online (draft L383–393) | H2 primary |
| Ejemplo inscripción | `CodeBlock` | javascript POST inscripciones 409/201 (draft L395–406) | `my-6` |
| `reto-cursos-online` | `PracticeExercise` | stack + endpoints + cupos (draft L408–419) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L429–434) | Sin clay |
| Siguiente paso | enlace `cache` (draft L436) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas backend (draft L444–503) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Backend ≠ solo API | `callout-info` | `--color-secondary` | API = interfaz; backend = lógica, BD, colas internas |
| Caso real: banco con lógica en el controlador | `callout-warning` | `--color-accent` | Extraer reglas a capa de servicio |
| Startup de delivery: Go prematuro | `callout-warning` | `--color-accent` | Experiencia del equipo > benchmarks teóricos |

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

En `QueEsBackendSection`: mermaid → stepreveal → code → practice. En `ResponsabilidadesBackendSection`: tabla → warning → challenge. En `TecnologiasBackendSection`: tabla → warning. En `ComoElegirBackendSection`: mermaid → challenge; no apilar mermaid + challenge sin prose intermedio.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| ¿Qué es el backend? | 2 | mermaid + stepper + practice |
| Responsabilidades del backend | 2 | tabla + warning + challenge |
| Tecnologías y frameworks | 2 | tabla + warning |
| Cómo elegir el backend | 2 | mermaid + challenge |
| Ejemplos de backend | 0 | 3 code blocks oscuros |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice cursos online |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` backend ≠ solo API
- [ ] Poblar `QueEsBackendSection`: mermaid capas, `StepReveal`, `CodeBlock`, `PracticeExercise`
- [ ] Poblar `ResponsabilidadesBackendSection`: `CompareTable`, callout warning, `CodeChallenge`
- [ ] Poblar `TecnologiasBackendSection`: `CompareTable`, callout warning
- [ ] Poblar `ComoElegirBackendSection`: mermaid árbol, `CodeChallenge`
- [ ] Poblar `EjemplosBackendSection`: 3 `CodeBlock` (Express list/create + JSON)
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «¿Qué es el backend?», «Responsabilidades del backend», «Tecnologías y frameworks», «Cómo elegir el backend», «Ejemplos de backend»
