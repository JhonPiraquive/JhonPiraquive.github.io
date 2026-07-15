---
track: posw
slug: principios-solid
title: "Principios SOLID: diseño OO mantenible"
order: 19
prev: bases-de-datos
next: naming-conventions
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track POSW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; rigor en cohesión y acoplamiento aplicado a backend y APIs.
- **Persona:** segunda persona (*tú*) en ejercicios y reto; impersonal en definiciones de cada principio.
- **Voz:** profesional, pragmática; SOLID como guía de mantenimiento, no dogma de 15 interfaces.
- **Evitar:** presentar SOLID como ley absoluta, confundir SRP con «una función por archivo», ejemplos abstractos sin capas web.
- **Preferir:** verbos de acción concretos (*explicar*, *detectar*, *aplicar*, *reconocer*, *decidir*, *refactorizar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Principios SOLID: SRP, OCP y DIP \| POSW` | 40 caracteres |
| `seo_description` | `Explica los cinco principios SOLID, detecta violaciones en APIs y aplica DIP sin sobre-ingeniería. Lección 19 del track POSW.` | 118 caracteres |
| `seo_title` (EN, fase i18n) | `SOLID Principles: SRP, OCP & DIP \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 19: five SOLID principles, detect backend violations, apply dependency inversion without over-engineering.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Principios SOLID: diseño OO mantenible`

- Acrónimo reconocible + competencia de cierre (*diseño OO mantenible*).
- Subtítulo académico con dos puntos; conecta con `bases-de-datos` (capas) y `naming-conventions` (legibilidad).
- Enfatiza aplicación en controladores, servicios y repositorios del track POSW.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| Introducción a SOLID | SOLID: cinco principios de diseño orientado a objetos | Uncle Bob; guía no dogmática |
| ↳ Acrónimo y contexto | El acrónimo S-O-L-I-D | Una frase por letra antes de profundizar |
| SRP — responsabilidad única | SRP: una clase, una razón para cambiar | Analogía médico/farmacia; no contar archivos |
| OCP — abierto/cerrado | OCP: extender sin modificar código existente | `MetodoPago` + `ProcesadorPago` |
| LSP — sustitución de Liskov | LSP: subtipos sustituibles sin romper contratos | Patos voladores vs pato de goma |
| ISP — segregación de interfaces | ISP: interfaces pequeñas y específicas | `Trabajable` vs `Humano` |
| DIP — inversión de dependencias | DIP: depender de abstracciones, no de concreciones | `IProductoRepository` + inyección |
| Resumen SOLID | Resumen: principios y señales de violación | CompareTable; nota sobre sobre-ingeniería |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Reto integrador | Reto integrador: refactor de módulo de usuarios | Legacy con god class y `if` de canales |
| Cierre | Cierre de la lección | Puente a `naming-conventions` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: tema nominal; sin emojis.
- H3: nombrar principio (SRP, OCP, etc.) solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Caso real — procesador de pagos monolítico

- **Título:** `Caso real: procesador de pagos con if/else infinito`
- **Tono:** incidente de mantenimiento; énfasis en OCP.
- **Copy refinado:** `Un \`ProcesadorPago\` con \`if (tipo === 'tarjeta' | 'paypal' | 'nequi')\` crece cada trimestre. Un bug en Nequi obliga a retestear todo. Decisión: interface \`MetodoPago\`, una clase por proveedor; el procesador solo delega.`
- **Variante Clay:** `callout-warning`; borde accent en hover.

#### 2. Caso real — servicio acoplado a MySQL

- **Título:** `Caso real: ProductoService acoplado a MySQL`
- **Tono:** lección de DIP; migración de motor sin duplicar servicios.
- **Copy refinado:** `\`ProductoService\` hace \`new MySQLProductoRepository()\`. El cliente exige MongoDB para catálogo flexible y el equipo duplica el servicio. Decisión: \`IProductoRepository\` inyectado; mismos tests con mock; cambio de motor solo en composición raíz.`
- **Variante Clay:** `callout-warning`.

#### 3. SOLID no es dogma

- **Título:** `Cuándo no aplicar SOLID al extremo`
- **Tono:** preventivo; equilibrio pragmático.
- **Copy refinado:** `Un CRUD de tres campos que no cambiará en años no necesita 15 interfaces. Aplica SOLID donde hay cambio frecuente, equipos grandes o tests unitarios críticos. El criterio es costo de mantenimiento, no pureza teórica.`
- **Variante Clay:** `callout-info`; borde secondary.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| CompareTable | SOLID resumen | Filas: principio \| letra \| regla \| señal de violación |
| StepReveal | S → O → L → I → D | Snippet incorrecto/correcto por paso |
| PracticeExercise | Éxito (razones para cambiar) | `Correcto. Tres motivos de cambio distintos confirman violación de SRP; separa entidad, repositorio y notificaciones.` |
| PracticeExercise | Éxito (PagoPSE) | `Correcto. Nueva clase \`PagoPSE implements MetodoPago\` sin editar \`ProcesadorPago\` — OCP aplicado.` |
| PracticeExercise | Éxito (reto usuarios) | `Excelente. Responsabilidades separadas, canal SMS sin tocar el if central, servicio testeable con mock y justificación pragmática.` |
| Quiz | Feedback general | Una oración; citar SRP, OCP, LSP, ISP o DIP según pregunta |
| Cierre | Ideas clave | Viñetas: una razón para cambiar · extender con clases · subtipos sustituibles · interfaces pequeñas · abstracciones inyectadas |
| Cierre | Siguiente paso | `Siguiente lección: convenciones de nomenclatura — legibilidad y consistencia entre frontend, backend, SQL y APIs.` |

### Notas EN (fase i18n)

- Título EN sugerido: `SOLID principles: maintainable OO design`
- Mantener sin traducir: SOLID, SRP, OCP, LSP, ISP, DIP, Uncle Bob, REST, API, DTO, CRUD.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.

## SEO

Contribución de **seo-redirects-expert**. Lección 19 del track POSW; abre bloque de calidad de código tras `bases-de-datos`.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Principios SOLID: SRP, OCP y DIP \| POSW` | 40 |
| `seoDescription` | `Explica los cinco principios SOLID, detecta violaciones en APIs y aplica DIP sin sobre-ingeniería. Lección 19 del track POSW.` | 118 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `SOLID Principles: SRP, OCP & DIP \| POSW` | 40 |
| `seoDescription` | `POSW Lesson 19: five SOLID principles, detect backend violations, apply dependency inversion without over-engineering.` | 115 |

### Keywords (track POSW)

**Primarias:** principios SOLID, SRP, OCP, DIP, diseño orientado a objetos, POSW, backend.

**Secundarias:** LSP, ISP, inyección de dependencias, Uncle Bob, Clean Architecture, repositorio, servicio.

**Long-tail:** responsabilidad única una razón para cambiar, open closed extender sin modificar, dependency inversion API REST, violaciones SOLID ejemplos TypeScript.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `bases-de-datos` | Bases de datos: SQL, NoSQL y modelado relacional |
| `next` | `naming-conventions` | Convenciones de nomenclatura en desarrollo web |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/principios-solid/` |
| EN (fase i18n) | `/en/teaching/posw/principios-solid/` |
| Legacy | `/pages/teaching/posw/principios-solid.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Introducción a SOLID | SOLID: cinco principios de diseño OO | principios SOLID |
| H2 | SRP | SRP: responsabilidad única en APIs | single responsibility |
| H2 | OCP | OCP: extender sin modificar (open/closed) | open closed principle |
| H2 | LSP | LSP: sustitución de Liskov | Liskov substitution |
| H2 | ISP | ISP: segregación de interfaces | interface segregation |
| H2 | DIP | DIP: inversión de dependencias | dependency inversion |
| H2 | Resumen | Resumen SOLID | — |
| H2 | Reto integrador | Reto integrador: refactor módulo usuarios | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Principios SOLID: SRP, OCP y DIP \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta «violaciones» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama S→O→L→I→D o capas Controller→Service→IRepository |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`principios-solid`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `SOLID principles: maintainable OO design`.
- **Términos sin traducir:** SOLID, SRP, OCP, LSP, ISP, DIP, REST, API, TypeScript, DTO.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

