---
track: posw
slug: frontend
title: "Frontend: Tecnologías y Frameworks"
order: 9
prev: tokens
next: backend
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track POSW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; equilibra panorama tecnológico con criterios de decisión de proyecto.
- **Persona:** segunda persona (*tú*) en ejercicios y reto; impersonal en comparativas de frameworks y definiciones.
- **Voz:** profesional, pragmática; la elección de framework sirve al equipo y al producto, no a la moda.
- **Evitar:** fanatismo por framework, porcentajes de encuestas como único argumento, tono influencer o «guerra de frameworks».
- **Preferir:** verbos de acción concretos (*definir*, *comparar*, *elegir*, *consumir*, *renderizar*, *validar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Frontend: tecnologías y frameworks web \| POSW` | 44 caracteres |
| `seo_description` | `Define el frontend, compara React, Angular, Vue y Svelte, elige framework con criterios reales y lee componentes que consumen APIs. Lección 9 del track POSW.` | 149 caracteres |
| `seo_title` (EN, fase i18n) | `Frontend: web technologies & frameworks \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 9: define the frontend, compare React, Angular, Vue, and Svelte, choose a framework with real criteria, and read API-consuming components.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Frontend: tecnologías, frameworks y consumo de APIs`

- Conecta capa cliente con lecciones previas (`apis`, `tokens`).
- Sustituye «y Frameworks» genérico por arco didáctico completo.
- Mantiene *frontend* en minúsculas tras dos puntos (convención POSW).

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| ¿Qué es el frontend? | ¿Qué es el frontend? | Pregunta directa; client-side en primera definición |
| ↳ Separación frontend/backend | Separación frontend y backend | Diagrama; HTTP como puente |
| ↳ Responsabilidades | Responsabilidades del frontend moderno | StepReveal con cinco ámbitos |
| Tecnologías base | Tecnologías base del frontend | JavaScript, TypeScript, componentes |
| ↳ Request autenticado | Consumo autenticado de APIs | Enlaza con lección `tokens` |
| Frameworks | Frameworks: React, Angular, Vue y Svelte | Lista explícita; sin ranking emocional |
| ↳ Comparativa | Comparativa de frameworks | Tabla escaneable |
| ↳ React vs librería vs framework | Librería frente a framework completo | Distinción conceptual clave |
| Cómo elegir framework | Cómo elegir un framework | Árbol de decisión; criterios de equipo |
| ↳ SSR y meta-frameworks | SSR y meta-frameworks | Next.js, Nuxt, SvelteKit |
| Ejemplos de componentes | Ejemplos de componentes en tres frameworks | Mismo componente, tres sintaxis |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Resumen | Resumen | Viñetas con criterios de decisión |
| Reto integrador | Reto integrador: stack frontend de reservas de coworking | Escenario con restricciones reales (equipo, SEO, plazo) |
| Cierre | Cierre de la lección | Puente a `backend` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: pregunta o tema nominal; sin emojis ni mayúsculas innecesarias.
- H3: nombrar tecnología solo si es foco del bloque (React, Next.js).
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Frontend no es el backend

- **Título:** `Frontend no es el backend`
- **Tono:** aclaratorio; separación de responsabilidades sin menospreciar ninguna capa.
- **Copy refinado:** `El frontend renderiza la interfaz y consume APIs; el backend persiste datos y aplica reglas de negocio críticas. La validación en cliente mejora la experiencia de usuario, pero el servidor debe ser la fuente de verdad.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 2. Caso real — SPA sin SSR

- **Título:** `Caso real: SPA sin SSR y pérdida de SEO`
- **Tono:** incidente de negocio; métrica concreta sin sensacionalismo.
- **Copy refinado:** `Un e-commerce migra a React SPA puro sin server-side rendering. Los crawlers ven HTML casi vacío; el tráfico orgánico cae un 40 %. Decisión: evaluar SSR (Next.js) cuando el SEO importa; medir indexación y Core Web Vitals.`
- **Variante Clay:** `callout-warning`.

#### 3. Caso real — framework incorrecto

- **Título:** `Caso real: framework incompatible con el equipo`
- **Tono:** lección de velocity; criterios de equipo sobre hype.
- **Copy refinado:** `Una startup elige Angular para un MVP con dos desarrolladores junior sin TypeScript. Tres meses después el ritmo de entrega es bajo. Decisión: aplicar criterios reales — para MVP rápido, Vue o React; Angular cuando hay equipo enterprise con TypeScript.`
- **Variante Clay:** `callout-warning`.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| StepReveal | Título | `Responsabilidades del frontend` — cinco pasos: renderizar, consumir APIs, estado, routing, UX |
| PracticeExercise | Éxito (mensajería) | `Correcto. Frontend: interfaz, estado local, fetch. Backend: persistencia, autenticación, reglas de negocio. Comunicación por API REST.` |
| CodeChallenge | Título frameworks | `Completa características de cada framework` |
| PracticeExercise | Éxito (SEO + React) | `Correcto. React como base y Next.js para server-side rendering e indexación en buscadores.` |
| PracticeExercise | Éxito (precio en cliente) | `Correcto. El frontend es manipulable; el backend debe recalcular y validar precios y stock antes de procesar el pago.` |
| PracticeExercise | Éxito (React vs Angular) | `Correcto. React es librería (eliges routing, estado y build); Angular es framework opinionado con TypeScript, módulos y DI integrados.` |
| PracticeExercise | Éxito (reto coworking) | `Excelente. Decisión fundamentada en equipo, SEO y plazo, con componente y consumo de API bien estructurado.` |
| Quiz | Feedback general | Una oración; citar navegador, SSR o Virtual DOM cuando aplique |
| Cierre | Ideas clave | Viñetas: consume APIs · SPA sin SSR pierde SEO · elegir según equipo · loading y error en fetch |
| Cierre | Siguiente paso | `Siguiente lección: backend — servidor, APIs, base de datos y lógica de negocio.` |

### Notas EN (fase i18n)

- Título EN sugerido: `Frontend: technologies, frameworks, and API consumption`
- Mantener sin traducir: SPA, SSR, JSX, Virtual DOM, fetch, Core Web Vitals, TypeScript.
- «Cómo elegir un framework» → `How to choose a framework`.

## SEO

Contribución de **seo-redirects-expert**. Lección 9 del track POSW; cierra el bloque cliente (APIs + auth) antes de `backend`.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Frontend: tecnologías y frameworks web \| POSW` | 45 |
| `seoDescription` | `Define el frontend, compara React, Angular, Vue y Svelte, elige framework con criterios reales y lee componentes que consumen APIs. Lección 9 del track POSW.` | 157 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Frontend: web technologies & frameworks \| POSW` | 46 |
| `seoDescription` | `POSW Lesson 9: define frontend, compare React, Angular, Vue and Svelte, pick a framework and read API-consuming components.` | 125 |

### Keywords (track POSW)

**Primarias:** frontend, React, Angular, Vue, Svelte, SPA, POSW, consumo de APIs.

**Secundarias:** JSX, TypeScript, Next.js, SSR, componentes UI, fetch, estado cliente.

**Long-tail:** qué es el frontend client-side, elegir framework React vs Angular, frontend consume API REST, SEO con Next.js SSR.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `tokens` | Tokens y Autenticación |
| `next` | `backend` | Backend |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/frontend/` |
| EN (fase i18n) | `/en/teaching/posw/frontend/` |
| Legacy | `/pages/teaching/posw/frontend.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (draft) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | ¿Qué es el frontend? | ¿Qué es el frontend? Capa client-side | frontend definición |
| H2 | Tecnologías base | Tecnologías base del frontend web | HTML CSS JavaScript |
| H2 | Frameworks: React, Angular, Vue, Svelte | Frameworks frontend: React, Angular, Vue y Svelte | React Angular Vue |
| H2 | Cómo elegir framework | Cómo elegir framework según el proyecto | elegir framework |
| H2 | Ejemplos de componentes | Componentes UI que consumen APIs | componentes fetch API |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: app de reservas coworking | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Frontend: tecnologías y frameworks web \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «Svelte» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama navegador ↔ API o tabla comparativa frameworks |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`frontend`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Frontend: web technologies and frameworks`.
- **Términos sin traducir:** frontend, backend, React, Angular, Vue, Svelte, JSX, SPA, SSR, Next.js, Nuxt, API, HTTP, fetch.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

