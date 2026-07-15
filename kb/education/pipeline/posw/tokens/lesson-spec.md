---
track: posw
slug: tokens
title: "Tokens y Autenticación"
order: 8
prev: apis
next: frontend
interactive_blocks:
  - type: callout
    id: auth-vs-autorizacion
  - type: step-reveal
    id: partes-jwt
  - type: mermaid
    id: flujo-jwt
  - type: callout
    id: caso-pii-jwt
  - type: mermaid
    id: oauth-authorization-code
  - type: step-reveal
    id: oauth-paso-a-paso
  - type: callout
    id: caso-api-key-filtrada
  - type: code-challenge
    id: headers-autenticacion
  - type: compare-table
    id: comparativa-tokens
  - type: practice-exercise
    id: oauth-google-calendario
  - type: practice-exercise
    id: comprension-jwt-payload
  - type: practice-exercise
    id: comprension-refresh-localstorage
  - type: practice-exercise
    id: comprension-api-key-partner
  - type: practice-exercise
    id: reto-plataforma-cursos
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/http-metodos-status/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

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
- Regla de decisión (draft L304–309): prose `<ul>`; sin clay.
- En `JwtSection`: stepreveal → sequence → code → warning; intercalar prose entre JWT estructura y flujo.
- En `OAuthSection`: sequence → stepreveal; prose scopes entre diagrama y steps.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `JWT (JSON Web Token)`, `OAuth 2.0` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Estructura JWT`, `API Key`, `Regla de decisión` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Header (rojo)», «Redirect al proveedor») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Claims, scopes, revocación |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) JWT` | JWT (JSON Web Token) | `JwtSection` |
| `### 2) OAuth 2.0` | OAuth 2.0 | `OAuthSection` |
| `### 3) API Key y sesiones` | API Key y sesiones por cookie | `ApiKeySesionesSection` |
| `### 4) Comparativa` | Comparativa y regla de decisión | `ComparativaTokensSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: plataforma de cursos online | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `JwtSection`:** Mapa mental, Estructura JWT, Flujo JWT, Login y request autenticado, Almacenar y enviar token.

**H3 dentro de `OAuthSection`:** Mapa mental, Authorization Code flow, Scopes.

**H3 dentro de `ApiKeySesionesSection`:** API Key, Sesión por cookie, Completar headers.

**H3 dentro de `ComparativaTokensSection`:** Tabla comparativa, Regla de decisión.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `JwtSection` | JWT (JSON Web Token) | stepper | prose, `CodeBlock` ×2, `StepReveal`, `MermaidDiagram`, `Callout` |
| 3 | `OAuthSection` | OAuth 2.0 | stepper | prose, `MermaidDiagram`, `StepReveal` |
| 4 | `ApiKeySesionesSection` | API Key y sesiones por cookie | — | prose, `CodeBlock` ×2, `Callout`, `CodeChallenge` |
| 5 | `ComparativaTokensSection` | Comparativa y regla de decisión | — | prose, `CompareTable`, `PracticeExercise` |
| 6 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 7 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 8 | `RetoIntegradorSection` | Reto integrador: plataforma de cursos online | card | Enunciado prose + `CodeBlock` + `PracticeExercise` |
| 9 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `frontend` |
| 10 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L32–36) | Sin clay |
| Prerrequisitos | prose `<ul>` | apis, protocolos-seguridad, http-headers (draft L40–42) | Sin clay |
| `auth-vs-autorizacion` | `Callout` | title: «Autenticación vs autorización» (draft L52–56) | **callout-info**; borde secondary |

#### `JwtSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Estructura | prose + `CodeBlock` | json header/payload (draft L64–89) | CodeBlock `my-6` |
| `partes-jwt` | `StepReveal` | title: «Partes de un JWT»; 4 steps (draft L91–112) | **stepper** `my-8` |
| `flujo-jwt` | `MermaidDiagram` | sequenceDiagram login/perfil (draft L116–119) | `my-6` |
| Login HTTP | `CodeBlock` | http POST login + GET perfil (draft L123–140) | `my-6` |
| `caso-pii-jwt` | `Callout` | title: «Caso real: PII en el payload JWT» (draft L142–146) | **callout-warning** |
| JS login/fetch | `CodeBlock` | javascript sessionStorage (draft L150–170) | `my-6` |

#### `OAuthSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose | roles, OIDC, analogía valet (draft L178–183) | Sin clay |
| `oauth-authorization-code` | `MermaidDiagram` | sequenceDiagram Google login (draft L187–190) | `my-6` |
| Scopes | prose | read:email, write:repos (draft L192–194) | Sin clay |
| `oauth-paso-a-paso` | `StepReveal` | title: «OAuth Authorization Code paso a paso»; 5 steps (draft L196–221) | **stepper** `my-8` |

#### `ApiKeySesionesSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| API Key | prose + `CodeBlock` | bash header vs query (draft L229–244) | CodeBlock `my-6` |
| Sesión cookie | prose + `CodeBlock` | http Set-Cookie (draft L246–264) | CodeBlock `my-6` |
| `caso-api-key-filtrada` | `Callout` | title: «Caso real: API Key filtrada en GitHub» (draft L266–270) | **callout-warning** |
| `headers-autenticacion` | `CodeChallenge` | Bearer / X-API-Key / Cookie (draft L274–283) | `ClayCard` `my-8` |

#### `ComparativaTokensSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `comparativa-tokens` | `CompareTable` | 4 filas JWT/OAuth/API Key/Sesión (draft L293–302) | `ClayCard` `my-8`; thead secondary |
| Regla de decisión | prose `<ul>` | SPA, OAuth, API Key, SSR (draft L304–309) | Sin clay |
| `oauth-google-calendario` | `PracticeExercise` | Login con Google + scopes (draft L311–317) | `ClayCard` `my-8` accent |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L325–330) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-jwt-payload` | `PracticeExercise` | decodificar JWT sin secret (draft L338–344) | accent border |
| `comprension-refresh-localstorage` | `PracticeExercise` | refresh token y XSS (draft L346–352) | accent border |
| `comprension-api-key-partner` | `PracticeExercise` | server-to-server API Key (draft L354–360) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas plataforma cursos (draft L370–378) | H2 primary |
| Ejemplo login | `CodeBlock` | http access_token + refresh (draft L380–395) | `my-6` |
| `reto-plataforma-cursos` | `PracticeExercise` | multi-cliente auth (draft L397–408) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L418–423) | Sin clay |
| Siguiente paso | enlace `frontend` (draft L425) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas tokens (draft L433–491) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Autenticación vs autorización | `callout-info` | `--color-secondary` | Principio: auth = quién eres; OAuth = autorización delegada |
| Caso real: PII en el payload JWT | `callout-warning` | `--color-accent` | Payload codificado, no cifrado; nunca datos sensibles |
| Caso real: API Key filtrada en GitHub | `callout-warning` | `--color-accent` | Secret scanning, rotación, nunca commitear keys |

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

En `JwtSection`: stepreveal → sequence → code → warning. En `OAuthSection`: sequence → prose scopes → stepreveal. En `ApiKeySesionesSection`: 2 code blocks → warning → challenge. En `ComparativaTokensSection`: tabla → practice; no apilar tabla + stepper sin prose.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| JWT (JSON Web Token) | 2 | stepper + sequence + warning |
| OAuth 2.0 | 2 | sequence + stepper |
| API Key y sesiones por cookie | 2 | warning + challenge |
| Comparativa y regla de decisión | 2 | tabla + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice plataforma |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` auth vs autorización
- [ ] Poblar `JwtSection`: `StepReveal`, mermaid sequence, 2 `CodeBlock`, callout warning
- [ ] Poblar `OAuthSection`: mermaid sequence, `StepReveal` 5 pasos
- [ ] Poblar `ApiKeySesionesSection`: 2 `CodeBlock`, callout warning, `CodeChallenge`
- [ ] Poblar `ComparativaTokensSection`: `CompareTable`, `PracticeExercise`
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «JWT (JSON Web Token)», «OAuth 2.0», «API Key y sesiones por cookie», «Comparativa y regla de decisión»

## SEO

Contribución de **seo-redirects-expert**. Lección 8 del track POSW; puente entre diseño de APIs (`apis`) y capa cliente (`frontend`).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Tokens y autenticación: JWT, OAuth y API Keys \| POSW` | 52 |
| `seoDescription` | `Aprende JWT, OAuth 2.0, API Keys y sesiones por cookie. Compara mecanismos, envía credenciales HTTP y elige según tu app. Lección 8 del track POSW.` | 147 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Tokens & auth: JWT, OAuth & API Keys \| POSW` | 45 |
| `seoDescription` | `POSW Lesson 8: JWT structure, OAuth 2.0 flows, API Keys and session cookies. Compare mechanisms and choose auth for your app type.` | 130 |

### Keywords (track POSW)

**Primarias:** JWT, OAuth 2.0, API Key, autenticación API, Authorization Bearer, POSW.

**Secundarias:** refresh token, scopes, sesión cookie, HttpOnly, stateless, revocación token.

**Long-tail:** estructura JWT header payload signature, OAuth Authorization Code flow, cuándo usar API Key vs JWT, Bearer token HTTP.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `apis` | APIs: Qué son, Tipos y Herramientas |
| `next` | `frontend` | Frontend: Tecnologías y Frameworks |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/tokens/` |
| EN (fase i18n) | `/en/teaching/posw/tokens/` |
| Legacy | `/pages/teaching/posw/tokens.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (draft) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | JWT (JSON Web Token) | JWT: estructura, claims y firma | JWT autenticación |
| H2 | OAuth 2.0 | OAuth 2.0: Authorization Code y scopes | OAuth 2.0 |
| H2 | API Key y sesiones por cookie | API Key y sesiones por cookie | API Key Bearer |
| H2 | Comparativa y regla de decisión | Comparativa: JWT, OAuth, API Key y sesión | elegir autenticación API |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: plataforma de cursos online | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Tokens y autenticación: JWT, OAuth y API Keys \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «cookie» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama OAuth roles o tabla comparativa JWT vs API Key |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`tokens`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Tokens and authentication: JWT, OAuth, and API Keys`.
- **Términos sin traducir:** JWT, OAuth, OAuth 2.0, API Key, Bearer, HTTP, Base64URL, RFC 7519, scope, refresh token.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

