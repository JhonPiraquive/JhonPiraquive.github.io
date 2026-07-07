---
track: posw
slug: ia-en-desarrollo-web
title: "IA en el desarrollo web: productividad y verificación"
order: 21
prev: naming-conventions
next: arquitectura-api
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (25%) con matiz **Creador** (60%): innovación con criterio técnico. Marca: **Jhon Alejandro Piraquive** — material docente universitario del track POSW; alineado a paleta secondary (`#00C2FF`) para bloques IA.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; IA como amplificador, no sustituto del ingeniero.
- **Persona:** segunda persona (*tú*) en flujos y reto; impersonal en riesgos de compliance.
- **Voz:** profesional, cautelosa; verificación antes de merge; analogía «junior muy rápido».
- **Evitar:** hype de reemplazo de devs, prometer infalibilidad de Copilot/Claude, tono startup sin rigor.
- **Preferir:** verbos de acción concretos (*enumerar*, *identificar*, *aplicar*, *estructurar*, *redactar*, *verificar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `IA en desarrollo web: verificación \| POSW` | 41 caracteres |
| `seo_description` | `Usos productivos de IA, riesgos de alucinaciones, flujo de verificación, CLAUDE.md y prompts con contexto. Lección 21 del track POSW.` | 127 caracteres |
| `seo_title` (EN, fase i18n) | `AI in web development: verify first \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 21: productive AI uses, hallucination risks, verification workflow, CLAUDE.md, and context-rich prompts.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `IA en el desarrollo web: productividad y verificación`

- Par de competencias: ganar velocidad + no degradar calidad.
- Subtítulo académico con dos puntos; coherente con propuesta de valor de marca (software + IA).
- Conecta con `naming-conventions` (convenciones en prompts) y `arquitectura-api` (diseño con criterio).

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| Usos productivos de IA | Usos productivos de IA en desarrollo web | Grid: boilerplate, debug, tests, docs |
| ↳ Herramientas | Copilot, Claude, Cursor y ChatGPT | CompareTable; fortalezas por herramienta |
| Riesgos y límites | Riesgos: alucinaciones, privacidad y dependencia | Tarjetas con borde de alerta |
| Flujo de verificación | Flujo de verificación antes del merge | StepReveal; checklist obligatorio |
| Estructura `.claude/` | Contexto para agentes: `.claude/` y `CLAUDE.md` | Árbol agents/rules/kb |
| Agentes especializados | Sub-agentes: code-reviewer y roles | Ejemplo `code-reviewer.md` |
| Flujo de trabajo | Prompt efectivo vs prompt vago | 8 pasos prompt → merge |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Reto integrador | Reto integrador: feature con IA en el flujo | POST `/api/v1/productos` NestJS |
| Cierre | Cierre de la lección | Puente a `arquitectura-api` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: tema nominal; sin emojis.
- H3: nombrar herramienta o carpeta solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Caso real — librería inventada

- **Título:** `Caso real: express-rate-limiter-pro no existe`
- **Tono:** incidente de alucinación; pipeline de verificación.
- **Copy refinado:** `ChatGPT sugiere \`express-rate-limiter-pro\` — no está en npm. CI local no corrió \`npm install\` limpio; producción falla en deploy. Decisión: verificar dependencias en registro oficial; \`npm ci\` en pipeline; rechazar PR sin lockfile actualizado.`
- **Variante Clay:** `callout-warning`; borde accent (`#6B4EFF`) en hover.

#### 2. Caso real — fuga de código en chat público

- **Título:** `Caso real: core de pagos pegado en IA pública`
- **Tono:** compliance; GDPR y Habeas Data.
- **Copy refinado:** `Un consultor pega fragmentos del core de pagos para «refactorizar». Auditoría detecta fuga de lógica propietaria. Decisión: política de datos; IA enterprise con DPA; anonimizar snippets; agentes locales sin telemetría de código sensible.`
- **Variante Clay:** `callout-warning`.

#### 3. La IA no sustituye el criterio

- **Título:** `Amplificador de productividad, no de responsabilidad`
- **Tono:** informativo; autoridad sin arrogancia (arquetipo Sabio).
- **Copy refinado:** `La IA acelera boilerplate y explicaciones, pero tú firmas el merge. Si no puedes explicar el código línea por línea, es deuda técnica. El flujo humano — entender, testear, revisar — no es opcional.`
- **Variante Clay:** `callout-info`; borde secondary (`#00C2FF`).

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| CompareTable | Herramientas IA | Filas: herramienta \| integración \| fortaleza \| límite |
| StepReveal | Flujo verificación | Pasos: entender → tests → lint → review → merge |
| PracticeExercise | Éxito (deuda sin comprensión) | `Correcto. Código que compila pero no entiendes acumula bugs imposibles de depurar en incidentes.` |
| PracticeExercise | Éxito (ordenar pasos) | `Correcto. Merge solo después de entender, tests, lint y code review humano.` |
| PracticeExercise | Éxito (reto feature) | `Excelente. Prompt con DIP y sin any, checklist de verificación, test de error y política de privacidad clara.` |
| Quiz | Feedback general | Una oración; citar alucinación, verificación, secrets o CLAUDE.md |
| Cierre | Ideas clave | Viñetas: verificar siempre · no pegar secrets · contexto en CLAUDE.md · prompt con restricciones · review humano |
| Cierre | Siguiente paso | `Siguiente lección: arquitectura de APIs — capas REST, GraphQL, gRPC y patrones Gateway/BFF.` |

### Notas EN (fase i18n)

- Título EN sugerido: `AI in web development: productivity and verification`
- Mantener sin traducir: IA/AI, Copilot, Claude, Cursor, ChatGPT, Gemini, CLAUDE.md, DIP, NestJS, GDPR, npm, CI/CD.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.

## SEO

Contribución de **seo-redirects-expert**. Lección 21 del track POSW; puente entre convenciones de código e arquitectura de APIs.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `IA en desarrollo web: verificación \| POSW` | 41 |
| `seoDescription` | `Usos productivos de IA, riesgos de alucinaciones, flujo de verificación, CLAUDE.md y prompts con contexto. Lección 21 del track POSW.` | 127 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `AI in web development: verify first \| POSW` | 42 |
| `seoDescription` | `POSW Lesson 21: productive AI uses, hallucination risks, verification workflow, CLAUDE.md, and context-rich prompts.` | 115 |

### Keywords (track POSW)

**Primarias:** IA desarrollo web, inteligencia artificial programación, Cursor, Copilot, POSW, verificación código.

**Secundarias:** alucinaciones IA, CLAUDE.md, prompts efectivos, code review, privacidad GDPR, NestJS.

**Long-tail:** flujo verificación código generado IA, riesgos pegar secrets chat IA, estructura claude agents rules, prompt con contexto DIP TypeScript.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `naming-conventions` | Convenciones de nomenclatura en desarrollo web |
| `next` | `arquitectura-api` | Arquitectura de APIs: REST, GraphQL y gRPC |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/ia-en-desarrollo-web/` |
| EN (fase i18n) | `/en/teaching/posw/ia-en-desarrollo-web/` |
| Legacy | `/pages/teaching/posw/ia-en-desarrollo-web.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Usos productivos | Usos productivos de IA en desarrollo web | IA desarrollo web |
| H2 | Riesgos | Riesgos de IA: alucinaciones y privacidad | alucinaciones IA código |
| H2 | Verificación | Flujo de verificación antes del merge | verificar código IA |
| H2 | `.claude/` | Contexto para agentes: CLAUDE.md | CLAUDE.md proyecto |
| H2 | Flujo de trabajo | Prompts efectivos con stack y restricciones | prompt desarrollo software |
| H2 | Reto integrador | Reto integrador: feature con IA en el flujo | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `IA en desarrollo web: verificación \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta «alucinaciones» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama flujo prompt → verificación → merge (tono secondary `#00C2FF`) |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`ia-en-desarrollo-web`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `AI in web development: productivity and verification`.
- **Términos sin traducir:** AI, Copilot, Claude, Cursor, ChatGPT, CLAUDE.md, DIP, NestJS, API, GDPR.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
