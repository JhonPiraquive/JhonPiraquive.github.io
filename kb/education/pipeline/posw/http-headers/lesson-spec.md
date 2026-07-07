---
track: posw
slug: http-headers
title: "HTTP Headers"
order: 5
prev: http-metodos-status
next: tipos-servicios-web
interactive_blocks:
  - type: callout
    id: body-vs-headers
  - type: step-reveal
    id: anatomia-mensaje-http
  - type: compare-table
    id: categorias-headers
  - type: mermaid
    id: mapa-categorias-headers
  - type: callout
    id: origin-vs-referer
  - type: practice-exercise
    id: request-headers-post-json
  - type: code-challenge
    id: headers-segun-operacion
  - type: mermaid
    id: cors-preflight-sequence
  - type: callout
    id: caso-spa-bloqueada-cors
  - type: compare-table
    id: tabla-headers-seguridad
  - type: callout
    id: caso-fintech-sin-csp
  - type: practice-exercise
    id: comprension-preflight-cors
  - type: practice-exercise
    id: comprension-cors-app-movil
  - type: practice-exercise
    id: comprension-x-frame-options
  - type: practice-exercise
    id: reto-headers-produccion-tienda
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
- Tablas headers frecuentes (draft L129–137, L188–197): prose `<table>`; sin clay.
- En `CorsSection`: sequence preflight → callout; ejemplo OPTIONS en `CodeBlock` entre ambos.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué son los HTTP headers?`, `CORS y preflight` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Anatomía de un mensaje HTTP`, `Headers de petición frecuentes` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Línea de inicio», «Body opcional») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Host obligatorio, preflight OPTIONS |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) ¿Qué son` | ¿Qué son los HTTP headers? | `QueSonHeadersSection` |
| `### 2) Request headers` | Request headers | `RequestHeadersSection` |
| `### 3) Response headers` | Response headers | `ResponseHeadersSection` |
| `### 4) CORS` | CORS y preflight | `CorsSection` |
| `### 5) Seguridad` | Headers de seguridad | `SeguridadHeadersSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: headers para producción | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `QueSonHeadersSection`:** Mapa mental, Anatomía de un mensaje HTTP, Categorías de headers.

**H3 dentro de `RequestHeadersSection`:** Mapa mental, Headers de petición frecuentes, Mensaje HTTP completo (request), Errores frecuentes en request, Práctica guiada.

**H3 dentro de `ResponseHeadersSection`:** Mapa mental, Headers de respuesta frecuentes, Respuesta con caché y ETag, Respuesta 401 con cuerpo JSON, ¿Qué header esperar en DELETE y POST?

**H3 dentro de `CorsSection`:** Mapa mental, Petición simple vs compleja, Flujo preflight CORS, Ejemplo preflight completo, Errores CORS frecuentes.

**H3 dentro de `SeguridadHeadersSection`:** Mapa mental, Tabla de headers de seguridad, Configuración con Helmet (Express), Cookies seguras.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `QueSonHeadersSection` | ¿Qué son los HTTP headers? | stepper | prose, `StepReveal`, `CompareTable`, `MermaidDiagram` |
| 3 | `RequestHeadersSection` | Request headers | — | prose tablas, `CodeBlock`, `Callout`, `PracticeExercise` |
| 4 | `ResponseHeadersSection` | Response headers | — | prose tablas, `CodeBlock` ×3, `CodeChallenge` |
| 5 | `CorsSection` | CORS y preflight | — | prose, `MermaidDiagram`, `CodeBlock`, `Callout` |
| 6 | `SeguridadHeadersSection` | Headers de seguridad | — | prose, `CompareTable`, `CodeBlock`, `Callout` |
| 7 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 8 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 9 | `RetoIntegradorSection` | Reto integrador: headers para producción | card | Enunciado prose + `CodeBlock` + `PracticeExercise` |
| 10 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `tipos-servicios-web` |
| 11 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L31–37) | Sin clay |
| Prerrequisitos | prose `<ul>` | http-metodos-status, protocolos-seguridad (draft L41–43) | Sin clay |
| `body-vs-headers` | `Callout` | title: «Body vs headers»; Content-Type en POST (draft L53–57) | **callout-info**; borde secondary |

#### `QueSonHeadersSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | clave-valor, categorías (draft L65–70) | Sin clay |
| `anatomia-mensaje-http` | `StepReveal` | title: «Anatomía del mensaje HTTP»; 4 steps (draft L74–95) | **stepper** `my-8` |
| `categorias-headers` | `CompareTable` | 4 filas Categoría/Quién/Ejemplos (draft L99–108) | `ClayCard` `my-8`; thead secondary |
| `mapa-categorias-headers` | `MermaidDiagram` | flowchart TB categorías (draft L110–113) | `my-6` |

#### `RequestHeadersSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Tabla headers | prose `<table>` | Host, Authorization… (draft L129–137) | Sin clay |
| Request completo | `CodeBlock` | http GET productos (draft L141–150) | `my-6` |
| Errores frecuentes | prose `<ul>` | Host, Content-Type, query string (draft L152–156) | Sin clay |
| `origin-vs-referer` | `Callout` | title: «Origin vs Referer» (draft L158–162) | **callout-info** |
| `request-headers-post-json` | `PracticeExercise` | 5 headers en POST JSON (draft L166–172) | `ClayCard` `my-8` accent |

#### `ResponseHeadersSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Tabla headers | prose `<table>` | Content-Type, ETag… (draft L188–197) | Sin clay |
| Caché ETag | `CodeBlock` | http 200 + JSON (draft L201–211) | `my-4` |
| 401 Unauthorized | `CodeBlock` | http + json (draft L215–229) | `my-4` |
| DELETE / POST | prose `<ul>` | 204 vs 201+Location (draft L231–234) | Sin clay |
| `headers-segun-operacion` | `CodeChallenge` | 201+Location, 204 DELETE (draft L236–245) | `ClayCard` `my-8` |

#### `CorsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / simple vs compleja | prose `<ul>` | preflight PUT/DELETE (draft L253–262) | Sin clay |
| `cors-preflight-sequence` | `MermaidDiagram` | sequenceDiagram OPTIONS→PUT (draft L266–269) | `my-6` |
| Preflight completo | `CodeBlock` | http OPTIONS + respuesta (draft L273–286) | `my-6` |
| `caso-spa-bloqueada-cors` | `Callout` | title: «Caso real: SPA bloqueada en producción» (draft L288–292) | **callout-warning** |
| Errores CORS | prose `<ul>` | Allow-Origin * + credenciales (draft L294–297) | Sin clay |

#### `SeguridadHeadersSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | HSTS, CSP, complementan HTTPS (draft L305–309) | Sin clay |
| `tabla-headers-seguridad` | `CompareTable` | 6 filas Header/Ataque/Ejemplo (draft L313–324) | `ClayCard` `my-8`; thead secondary |
| Helmet | `CodeBlock` | javascript helmet (draft L328–334) | `my-4` |
| `caso-fintech-sin-csp` | `Callout` | title: «Caso real: fintech sin CSP» (draft L336–340) | **callout-warning** |
| Cookies seguras | prose | HttpOnly, Secure, SameSite (draft L342–344) | Sin clay |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L352–357) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-preflight-cors` | `PracticeExercise` | OPTIONS + Allow-* (draft L365–371) | accent border |
| `comprension-cors-app-movil` | `PracticeExercise` | CORS solo navegador (draft L373–379) | accent border |
| `comprension-x-frame-options` | `PracticeExercise` | clickjacking DENY (draft L381–387) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas tienda (draft L397–405) | H2 primary |
| GET autenticado | `CodeBlock` | http If-None-Match (draft L407–414) | `my-6` |
| `reto-headers-produccion-tienda` | `PracticeExercise` | ETag, CORS, HSTS (draft L416–427) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L437–442) | Sin clay |
| Siguiente paso | enlace `tipos-servicios-web` (draft L444) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas headers/CORS (draft L452–511) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Body vs headers | `callout-info` | `--color-secondary` | Metadatos vs payload; Content-Type en POST |
| Origin vs Referer | `callout-info` | `--color-secondary` | CORS usa Origin, no Referer |
| Caso real: SPA bloqueada en producción | `callout-warning` | `--color-accent` | Postman OK, Chrome CORS fail |
| Caso real: fintech sin CSP | `callout-warning` | `--color-accent` | Clickjacking + XSS sin CSP |

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

En `QueSonHeadersSection`: stepreveal → tabla → diagrama; no apilar stepreveal + diagrama sin tabla intermedia. En `CorsSection`: sequence → code OPTIONS → warning. En `SeguridadHeadersSection`: tabla seguridad → code Helmet → warning.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| ¿Qué son los HTTP headers? | 2 | stepper + tabla + diagrama |
| Request headers | 2 | callout info + practice |
| Response headers | 2 | 3 code blocks + challenge |
| CORS y preflight | 2 | sequence + warning |
| Headers de seguridad | 2 | tabla + warning |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice tienda |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` body vs headers
- [ ] Poblar `QueSonHeadersSection`: `StepReveal`, `CompareTable`, mermaid categorías
- [ ] Poblar `RequestHeadersSection`: `CodeBlock`, callout Origin, `PracticeExercise`
- [ ] Poblar `ResponseHeadersSection`: 3 `CodeBlock`, `CodeChallenge`
- [ ] Poblar `CorsSection`: mermaid preflight, `CodeBlock` OPTIONS, callout warning SPA
- [ ] Poblar `SeguridadHeadersSection`: `CompareTable`, `CodeBlock` Helmet, callout warning fintech
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «¿Qué son los HTTP headers?», «Request headers», «Response headers», «CORS y preflight», «Headers de seguridad»
