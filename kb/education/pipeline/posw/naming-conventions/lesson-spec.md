---
track: posw
slug: naming-conventions
title: "Convenciones de nomenclatura en desarrollo web"
order: 20
prev: principios-solid
next: ia-en-desarrollo-web
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track POSW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; naming como documentación viva del código.
- **Persona:** segunda persona (*tú*) en ejercicios y reto; impersonal en tablas de convención por capa.
- **Voz:** profesional, clara; consistencia entre TS, SQL, JSON y URLs antes de preferencias personales.
- **Evitar:** presentar naming como capricho estético, abreviaciones opacas como estándar, mezclar estilos sin justificar capa.
- **Preferir:** verbos de acción concretos (*aplicar*, *nombrar*, *detectar*, *mantener*, *estandarizar*, *documentar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Convenciones de nomenclatura en web \| POSW` | 42 caracteres |
| `seo_description` | `Aplica camelCase, PascalCase, snake_case y kebab-case por capa: TypeScript, SQL, JSON y URLs REST. Lección 20 del track POSW.` | 119 caracteres |
| `seo_title` (EN, fase i18n) | `Naming conventions for web dev \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 20: camelCase, PascalCase, snake_case, kebab-case by layer — TS, SQL, JSON, and REST URLs.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Convenciones de nomenclatura en desarrollo web`

- Competencia transversal: legibilidad en stack full-stack del track.
- Subtítulo académico; *desarrollo web* acota el alcance (no naming genérico de CS).
- Conecta con `principios-solid` (código mantenible) y `ia-en-desarrollo-web` (convenciones en prompts).

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| Por qué importa el naming | Por qué importa el naming en equipos | Lectura vs escritura; cita Karlton |
| camelCase | camelCase: variables, funciones y JSON | Primera palabra minúscula |
| PascalCase | PascalCase: clases, tipos y componentes React | Interfaces, enums, JSX |
| snake_case | snake_case: tablas y columnas SQL | Python/Ruby como referencia |
| kebab-case | kebab-case: URLs, CSS y archivos | Minúsculas con guión |
| UPPER_SNAKE_CASE | UPPER_SNAKE_CASE: constantes y variables de entorno | `.env`; inmutables globales |
| Resumen por contexto | Convención por capa en una app web | CompareTable; anti-patrones |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Reto integrador | Reto integrador: estandarizar mini e-commerce | Tabla, API y componentes inconsistentes |
| Cierre | Cierre de la lección | Puente a `ia-en-desarrollo-web` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: tema nominal; sin emojis.
- H3: nombrar convención (camelCase, etc.) solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Caso real — monorepo con tres estilos

- **Título:** `Caso real: user_id, userId y UserID en el mismo flujo`
- **Tono:** incidente de serialización; convención por capa.
- **Copy refinado:** `SQL usa \`user_id\`, JSON \`userId\` y DTOs C# \`UserID\`. Los juniors mapean mal campos; bugs de serialización cada sprint. Decisión: tabla de convenciones por capa en README; snake_case solo en BD, camelCase en JSON.`
- **Variante Clay:** `callout-warning`; borde accent en hover.

#### 2. Caso real — endpoints verbales

- **Título:** `Caso real: rutas /getOrders y clases OrderHelper`
- **Tono:** lección de descubribilidad; REST idiomático.
- **Copy refinado:** `Rutas como \`/getOrders\` y clases \`OrderHelper\` obligan a duplicar lógica porque nadie encuentra el servicio correcto. Decisión: kebab-case en URIs (\`/api/v1/pedidos\`), PascalCase en servicios (\`PedidosService\`), ESLint \`naming-convention\` en CI.`
- **Variante Clay:** `callout-warning`.

#### 3. Naming como documentación

- **Título:** `El nombre es la primera documentación`
- **Tono:** informativo; reduce comentarios redundantes.
- **Copy refinado:** `El código se lee más de lo que se escribe. Un \`calcularSubtotal(precio, cantidad)\` comunica intención; \`fn1(a, b)\` obliga a leer el cuerpo entero. Decisión: nombres expresivos y convención acordada en code review.`
- **Variante Clay:** `callout-info`; borde secondary.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| CompareTable | Convención por contexto | Filas: variable TS, clase, tabla SQL, URL, constante, archivo |
| StepReveal | camel → Pascal → snake → kebab → UPPER | Mismo concepto (`tarjeta producto`) en cada estilo |
| PracticeExercise | Éxito (capa SQL vs JSON) | `Correcto. \`precio_unitario\` en BD y \`precioUnitario\` en JSON no es inconsistencia: es convención por capa.` |
| PracticeExercise | Éxito (renombrar usr_svc) | `Correcto. \`UsuarioService\`, \`obtenerProducto(id)\` — PascalCase en clase, camelCase en método.` |
| PracticeExercise | Éxito (reto e-commerce) | `Excelente. Tabla \`pedidos_detalle\`, endpoint \`/api/v1/productos\`, JSON camelCase y reglas documentadas en README.` |
| Quiz | Feedback general | Una oración; citar convención correcta por contexto |
| Cierre | Ideas clave | Viñetas: camelCase en TS/JSON · PascalCase en clases · snake_case en SQL · kebab-case en URLs · UPPER_SNAKE en .env |
| Cierre | Siguiente paso | `Siguiente lección: IA en el desarrollo web — productividad con verificación y contexto en CLAUDE.md.` |

### Notas EN (fase i18n)

- Título EN sugerido: `Naming conventions in web development`
- Mantener sin traducir: camelCase, PascalCase, snake_case, kebab-case, UPPER_SNAKE_CASE, ESLint, OpenAPI, REST, JSON, SQL.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.

## SEO

Contribución de **seo-redirects-expert**. Lección 20 del track POSW; puente entre diseño (`principios-solid`) e IA (`ia-en-desarrollo-web`).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Convenciones de nomenclatura en web \| POSW` | 42 |
| `seoDescription` | `Aplica camelCase, PascalCase, snake_case y kebab-case por capa: TypeScript, SQL, JSON y URLs REST. Lección 20 del track POSW.` | 119 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Naming conventions for web dev \| POSW` | 38 |
| `seoDescription` | `POSW Lesson 20: camelCase, PascalCase, snake_case, kebab-case by layer — TS, SQL, JSON, and REST URLs.` | 99 |

### Keywords (track POSW)

**Primarias:** convenciones nomenclatura, camelCase, PascalCase, snake_case, kebab-case, POSW.

**Secundarias:** naming variables, REST URLs, columnas SQL, componentes React, ESLint, OpenAPI.

**Long-tail:** convención naming por capa full stack, diferencia camelCase PascalCase TypeScript, URL API kebab-case REST, constantes UPPER_SNAKE_CASE env.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `principios-solid` | Principios SOLID: diseño OO mantenible |
| `next` | `ia-en-desarrollo-web` | IA en el desarrollo web: productividad y verificación |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/naming-conventions/` |
| EN (fase i18n) | `/en/teaching/posw/naming-conventions/` |
| Legacy | `/pages/teaching/posw/naming-conventions.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Por qué importa | Por qué importa el naming en equipos | naming código legibilidad |
| H2 | camelCase | camelCase en TypeScript y JSON | camelCase JavaScript |
| H2 | PascalCase | PascalCase: clases y componentes React | PascalCase React |
| H2 | snake_case | snake_case en tablas SQL | snake_case SQL |
| H2 | kebab-case | kebab-case en URLs REST | kebab-case URL API |
| H2 | UPPER_SNAKE_CASE | UPPER_SNAKE_CASE: constantes y .env | variables entorno |
| H2 | Resumen | Convención por capa en app web | — |
| H2 | Reto integrador | Reto integrador: estandarizar e-commerce | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Convenciones de nomenclatura en web \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta «capa» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama naming por capa (URL → JSON → TS → SQL) |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`naming-conventions`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Naming conventions in web development`.
- **Términos sin traducir:** camelCase, PascalCase, snake_case, kebab-case, UPPER_SNAKE_CASE, REST, JSON, SQL, ESLint, OpenAPI.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
