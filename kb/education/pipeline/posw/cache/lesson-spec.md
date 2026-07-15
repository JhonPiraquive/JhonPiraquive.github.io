---
track: posw
slug: cache
title: "Caché en Aplicaciones Web"
order: 11
prev: backend
next: rest-principios
interactive_blocks:
  - type: callout
    id: invalidar-cache-dificil
  - type: compare-table
    id: metricas-cache
  - type: practice-exercise
    id: calcular-hit-rate
  - type: mermaid
    id: arquitectura-tipos-cache
  - type: compare-table
    id: comparativa-tipos
  - type: callout
    id: black-friday-sin-cache
  - type: mermaid
    id: flujo-cache-aside
  - type: step-reveal
    id: pasos-cache-aside
  - type: compare-table
    id: directivas-cache-control
  - type: code-challenge
    id: completa-directivas
  - type: compare-table
    id: que-cachear-que-no
  - type: callout
    id: saas-analytics-filtrado
  - type: practice-exercise
    id: comprension-no-store
  - type: practice-exercise
    id: comprension-invalidacion
  - type: practice-exercise
    id: comprension-cdn-vs-redis
  - type: practice-exercise
    id: reto-noticias
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
- Analogía apuntes (draft L74–76): prose; sin clay.
- En `TecnologiasCacheSection`: sequence → 3 code blocks → stepreveal; intercalar prose entre Redis y Service Worker.
- En `HeadersCacheSection`: 2 code http → tabla directivas → challenge.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué es la caché?`, `Headers HTTP de caché` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Métricas clave`, `Cache-aside con Redis` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Buscar clave en Redis», «Guardar en Redis con TTL») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Hit Rate, TTL, invalidación event-based |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) ¿Qué es la caché?` | ¿Qué es la caché? | `QueEsCacheSection` |
| `### 2) Tipos de caché` | Tipos de caché | `TiposCacheSection` |
| `### 3) Tecnologías` | Tecnologías de caché | `TecnologiasCacheSection` |
| `### 4) Headers HTTP` | Headers HTTP de caché | `HeadersCacheSection` |
| `### 5) Cuándo usar` | Cuándo usar caché | `CuandoUsarCacheSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: API de noticias | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace `rest-principios` |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `QueEsCacheSection`:** Mapa mental, Analogía de apuntes, Métricas clave, Práctica: calcular hit rate.

**H3 dentro de `TiposCacheSection`:** Mapa mental, Arquitectura de tipos, Comparativa por tipo, Caso real Black Friday.

**H3 dentro de `TecnologiasCacheSection`:** Mapa mental, Flujo cache-aside, Cache-aside con Redis (Node.js), Invalidación event-based, Service Worker básico, Pasos del patrón cache-aside.

**H3 dentro de `HeadersCacheSection`:** Mapa mental, Asset estático cacheable, Dato sensible no cacheable, Directivas Cache-Control, Completar directivas.

**H3 dentro de `CuandoUsarCacheSection`:** Mapa mental, Qué cachear y qué no, Caso real SaaS analytics, Producto en caché (JSON).

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `QueEsCacheSection` | ¿Qué es la caché? | — | prose, `CompareTable`, `PracticeExercise` |
| 3 | `TiposCacheSection` | Tipos de caché | — | prose, `MermaidDiagram`, `CompareTable`, `Callout` |
| 4 | `TecnologiasCacheSection` | Tecnologías de caché | stepper | prose, `MermaidDiagram`, `CodeBlock` ×3, `StepReveal` |
| 5 | `HeadersCacheSection` | Headers HTTP de caché | — | prose, `CodeBlock` ×2, `CompareTable`, `CodeChallenge` |
| 6 | `CuandoUsarCacheSection` | Cuándo usar caché | — | prose, `CompareTable`, `Callout`, `CodeBlock` |
| 7 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 8 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 9 | `RetoIntegradorSection` | Reto integrador: API de noticias | card | Enunciado prose + `CodeBlock` + `PracticeExercise` |
| 10 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `rest-principios` |
| 11 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L33–39) | Sin clay |
| Prerrequisitos | prose `<ul>` | backend, http-headers, JSON/GET (draft L41–45) | Sin clay |
| `invalidar-cache-dificil` | `Callout` | title: «Invalidar caché es difícil» (draft L55–59) | **callout-warning** |

#### `QueEsCacheSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Analogía | prose | apuntes e invalidación (draft L67–76) | Sin clay |
| `metricas-cache` | `CompareTable` | 4 filas Hit Rate/latencia/MISS (draft L80–89) | `ClayCard` `my-8`; thead secondary |
| `calcular-hit-rate` | `PracticeExercise` | 9200/10000 HIT (draft L93–99) | `ClayCard` `my-8` accent |

#### `TiposCacheSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | browser, server, CDN, DB (draft L107–112) | Sin clay |
| `arquitectura-tipos-cache` | `MermaidDiagram` | flowchart Usuario→Browser→CDN→API→Redis→DB (draft L116–119) | `my-6` |
| `comparativa-tipos` | `CompareTable` | 4 filas Tipo/Dónde/Qué/Tecnología (draft L123–132) | `ClayCard` `my-8`; thead secondary |
| `black-friday-sin-cache` | `Callout` | title: «E-commerce: catálogo sin caché tumba PostgreSQL» (draft L136–140) | **callout-warning** |

#### `TecnologiasCacheSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Redis, Memcached, Service Worker (draft L148–152) | Sin clay |
| `flujo-cache-aside` | `MermaidDiagram` | sequenceDiagram HIT/MISS (draft L156–159) | `my-6` |
| Cache-aside Redis | `CodeBlock` | javascript obtenerProducto (draft L163–186) | `my-6` |
| Invalidación event-based | `CodeBlock` | javascript actualizarProducto + del (draft L190–201) | `my-6` |
| Service Worker | `CodeBlock` | javascript fetch intercept (draft L205–214) | `my-6` |
| `pasos-cache-aside` | `StepReveal` | title: «Pasos del patrón cache-aside»; 5 steps (draft L218–243) | **stepper** `my-8` |

#### `HeadersCacheSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Cache-Control, ETag, Last-Modified, Vary (draft L251–256) | Sin clay |
| Asset estático | `CodeBlock` | http immutable + ETag (draft L260–267) | `my-6` |
| Dato sensible | `CodeBlock` | http no-store private (draft L271–276) | `my-6` |
| `directivas-cache-control` | `CompareTable` | 6 filas Directiva/Efecto/Cuándo (draft L280–291) | `ClayCard` `my-8`; thead secondary |
| `completa-directivas` | `CodeChallenge` | immutable, no-store, TTL 300 (draft L295–304) | `ClayCard` `my-8` |

#### `CuandoUsarCacheSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | sí / cuidado / no cachear (draft L312–316) | Sin clay |
| `que-cachear-que-no` | `CompareTable` | 5 filas Tipo/¿Cachear?/TTL/Riesgo (draft L320–330) | `ClayCard` `my-8`; thead secondary |
| `saas-analytics-filtrado` | `Callout` | title: «SaaS analytics: datos de usuario filtrados» (draft L334–338) | **callout-warning** |
| Producto JSON | `CodeBlock` | json con _cached y ttl (draft L342–351) | `my-6` |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L359–364) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-no-store` | `PracticeExercise` | no-store en /usuario/me (draft L372–378) | accent border |
| `comprension-invalidacion` | `PracticeExercise` | precio viejo sin del (draft L380–386) | accent border |
| `comprension-cdn-vs-redis` | `PracticeExercise` | CDN vs Redis en API artículos (draft L388–394) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas API noticias (draft L402–412) | H2 primary |
| Ejemplo cache-aside | `CodeBlock` | javascript obtener/publicar artículo (draft L414–431) | `my-6` |
| `reto-noticias` | `PracticeExercise` | claves Redis, headers, hit rate (draft L433–444) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L454–459) | Sin clay |
| Siguiente paso | enlace `rest-principios` (draft L461) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas caché (draft L469–527) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Invalidar caché es difícil | `callout-warning` | `--color-accent` | Caché mal invalidado = datos incorrectos en producción |
| E-commerce: catálogo sin caché tumba PostgreSQL | `callout-warning` | `--color-accent` | Black Friday; cache-aside + CDN immutable |
| SaaS analytics: datos de usuario filtrados | `callout-warning` | `--color-accent` | public en proxy compartido; private/no-store en auth |

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

En `TecnologiasCacheSection`: sequence → 3 code blocks → stepreveal; no apilar sequence + stepreveal sin prose. En `HeadersCacheSection`: 2 code http → tabla → challenge. En `CuandoUsarCacheSection`: tabla → warning → code json.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout warning |
| ¿Qué es la caché? | 2 | tabla + practice |
| Tipos de caché | 2 | mermaid + tabla + warning |
| Tecnologías de caché | 2 | sequence + 3 code + stepper |
| Headers HTTP de caché | 2 | 2 code + tabla + challenge |
| Cuándo usar caché | 2 | tabla + warning |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice noticias |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` invalidar caché
- [ ] Poblar `QueEsCacheSection`: `CompareTable` métricas, `PracticeExercise` hit rate
- [ ] Poblar `TiposCacheSection`: mermaid tipos, `CompareTable`, callout warning
- [ ] Poblar `TecnologiasCacheSection`: mermaid sequence, 3 `CodeBlock`, `StepReveal`
- [ ] Poblar `HeadersCacheSection`: 2 `CodeBlock` http, `CompareTable`, `CodeChallenge`
- [ ] Poblar `CuandoUsarCacheSection`: `CompareTable`, callout warning, `CodeBlock` json
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «¿Qué es la caché?», «Tipos de caché», «Tecnologías de caché», «Headers HTTP de caché», «Cuándo usar caché»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

