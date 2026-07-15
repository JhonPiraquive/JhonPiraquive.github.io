---
track: posw
slug: modelo-cliente-servidor
title: "Modelo cliente-servidor: flujo HTTP y arquitecturas en capas"
order: 16
prev: react
next: herramientas-desarrollo
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track POSW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; conecta teoría de redes con arquitecturas web reales.
- **Persona:** segunda persona (*tú*) en ejercicios y reto; impersonal en definiciones (*el estudiante podrá…*, *el cliente solicita…*).
- **Voz:** profesional, clara, confiable; prioriza separación de capas y flujo completo antes de modas arquitectónicas.
- **Evitar:** simplificar «cliente = navegador» sin matices, hype de microservicios, tono informal de blog.
- **Preferir:** verbos de acción concretos (*definir*, *describir*, *comparar*, *mapear*, *identificar*, *justificar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Modelo cliente-servidor: DNS, HTTP y capas \| POSW` | 48 caracteres |
| `seo_description` | `Aprende el modelo cliente-servidor, el flujo DNS→TLS→HTTP al abrir una URL, arquitecturas 2/3 capas y variantes P2P, híbrido y serverless. Lección 16 del track POSW.` | 154 caracteres |
| `seo_title` (EN, fase i18n) | `Client-server model: DNS, HTTP & tiers \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 16: client-server roles, full URL load flow (DNS→TLS→HTTP), 2/3-tier architectures, and P2P, hybrid, and serverless variants.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Modelo cliente-servidor: flujo HTTP y arquitecturas en capas`

- Sustituye título nominal por subtítulo académico con dos puntos.
- Prioriza *flujo HTTP* (competencia medible) y *arquitecturas en capas* (2-Tier, 3-Tier, N capas).
- Mantiene minúsculas tras dos puntos (convención POSW).

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| ¿Qué es el modelo cliente-servidor? | ¿Qué es el modelo cliente-servidor? | Pregunta directa; analogía banco/ventanilla en cuerpo |
| ↳ Request y response | Petición y respuesta HTTP | Intercambio por turnos; cliente inicia |
| ↳ Roles de cliente y servidor | Roles de cliente y servidor | Navegador, app móvil, `curl`; Apache, Nginx, Node |
| Flujo al abrir una URL | Flujo al abrir una URL: DNS, TCP, TLS y HTTP | Secuencia completa; no omitir DNS ni TLS |
| ↳ Secuencia paso a paso | Secuencia de carga de página | StepReveal o Mermaid; ocho pasos |
| Arquitecturas en capas | Arquitecturas en capas: 2-Tier, 3-Tier y microservicios | CompareTable; criterios de seguridad y escala |
| ↳ Comparativa 2 vs 3 capas | Comparativa 2 capas frente a 3 capas | Seguridad, escalabilidad, complejidad |
| Variantes del modelo | Variantes: P2P, híbrido y serverless | Tarjetas; cuándo aplica cada una |
| Ejemplos en aplicaciones reales | Aplicaciones reales y protocolos subyacentes | Tabla búsqueda, correo, streaming, juegos |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Resumen | Resumen | Viñetas con sustantivos técnicos |
| Reto integrador | Reto integrador: arquitectura de reservas de cine | Escenario multi-cliente con API en tiempo real |
| Cierre | Cierre de la lección | Puente a `herramientas-desarrollo` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: pregunta o tema nominal; sin emojis.
- H3: concreto y escaneable; nombrar protocolo o capa solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Cliente ≠ solo navegador

- **Título:** `Cliente ≠ solo navegador`
- **Tono:** aclaratorio; amplía el rol del cliente más allá del frontend visual.
- **Copy refinado:** `El cliente puede ser navegador, app móvil, terminal ATM o un script curl. Lo que comparten es que inician peticiones; no almacenan la lógica de negocio ni exponen la base de datos.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 2. Caso real — e-commerce en Black Friday

- **Título:** `Caso real: e-commerce con acceso directo a la BD`
- **Tono:** incidente de escala; síntoma → causa → decisión arquitectónica.
- **Copy refinado:** `Una tienda con app de escritorio conectada directo a MySQL colapsa en Black Friday: 200 cajeros saturan la BD sin pool ni caché. Decisión: migrar a 3 capas — React, API REST con pool, Redis para stock cacheado; el cliente nunca ve credenciales de BD.`
- **Variante Clay:** `callout-warning`.

#### 3. Caso real — videollamadas P2P puro

- **Título:** `Caso real: videollamadas sin servidor de señalización`
- **Tono:** lección de confiabilidad; modelo híbrido como equilibrio.
- **Copy refinado:** `Una startup copia P2P puro para videollamadas. Sin signaling estable, las llamadas fallan detrás de NAT corporativo. Decisión: modelo híbrido — servidor central para autenticación y signaling; media P2P o TURN según la red.`
- **Variante Clay:** `callout-warning`.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| StepReveal | Título | `Flujo al abrir una URL` — pasos: DNS → TCP → TLS → HTTP → consulta BD → respuesta → render |
| CompareTable | 2-Tier vs 3-Tier | Filas: seguridad, escalabilidad, complejidad, exposición de BD |
| PracticeExercise | Éxito (analogía banco) | `Correcto. El cliente es quien solicita; el servidor procesa; la BD es el almacén al que solo accede el servidor.` |
| PracticeExercise | Éxito (ordenar pasos) | `Correcto. Sin resolución DNS no hay IP; sin TCP/TLS no hay canal; el renderizado ocurre al final.` |
| PracticeExercise | Éxito (reto cine) | `Excelente. Capas separadas, BD no expuesta, flujo DNS→HTTP documentado y variante arquitectónica justificada.` |
| Quiz | Feedback general | Una oración; citar rol cliente/servidor, DNS o capa de datos cuando aplique |
| Cierre | Ideas clave | Viñetas: cliente inicia · DNS antes de TCP · 3 capas protege la BD · microservicios no son obligatorios · P2P/híbrido/serverless según caso |
| Cierre | Siguiente paso | `Siguiente lección: herramientas de desarrollo — XAMPP y Docker para levantar entornos locales reproducibles.` |

### Notas EN (fase i18n)

- Título EN sugerido: `Client-server model: HTTP flow and tiered architectures`
- Mantener sin traducir: DNS, TCP, TLS, HTTP, HTTPS, API, REST, JSON, WebSockets, P2P, serverless, Lambda.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.

## SEO

Contribución de **seo-redirects-expert**. Lección 16 del track POSW; abre el bloque infraestructura y datos (`react` → `herramientas-desarrollo` → `bases-de-datos`).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Modelo cliente-servidor: DNS, HTTP y capas \| POSW` | 48 |
| `seoDescription` | `Aprende el modelo cliente-servidor, el flujo DNS→TLS→HTTP al abrir una URL, arquitecturas 2/3 capas y variantes P2P, híbrido y serverless. Lección 16 del track POSW.` | 154 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Client-server model: DNS, HTTP & tiers \| POSW` | 45 |
| `seoDescription` | `POSW Lesson 16: client-server roles, URL load flow (DNS→TLS→HTTP), 2/3-tier architectures, and P2P, hybrid, and serverless variants.` | 121 |

### Keywords (track POSW)

**Primarias:** modelo cliente-servidor, arquitectura 3 capas, DNS, HTTP, HTTPS, POSW, request response.

**Secundarias:** 2-Tier, 3-Tier, microservicios, P2P, serverless, TLS, TCP, WebSockets, API REST.

**Long-tail:** qué es modelo cliente servidor, flujo al abrir una URL DNS HTTP, diferencia 2 capas 3 capas, cuándo usar microservicios, P2P vs cliente servidor.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `react` | React: Fundamentos |
| `next` | `herramientas-desarrollo` | Herramientas de desarrollo: XAMPP y Docker |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/modelo-cliente-servidor/` |
| EN (fase i18n) | `/en/teaching/posw/modelo-cliente-servidor/` |
| Legacy | `/pages/teaching/posw/modelo-cliente-servidor.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | ¿Qué es el modelo cliente-servidor? | ¿Qué es el modelo cliente-servidor? Roles y petición HTTP | modelo cliente-servidor |
| H2 | Flujo al abrir una URL | Flujo al abrir una URL: DNS, TCP, TLS y HTTP | DNS HTTP HTTPS |
| H2 | Arquitecturas en capas | Arquitecturas 2 capas, 3 capas y microservicios | arquitectura 3 capas |
| H2 | Variantes del modelo | Variantes P2P, híbrido y serverless | P2P serverless |
| H2 | Ejemplos en aplicaciones reales | Aplicaciones reales: cliente, servidor y protocolo | request response web |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: reservas de cine en tiempo real | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Modelo cliente-servidor: DNS, HTTP y capas \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «URL» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama secuencia DNS→servidor→BD o tabla 2-Tier vs 3-Tier |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`modelo-cliente-servidor`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Client-server model: HTTP flow and tiered architectures`.
- **Términos sin traducir:** DNS, TCP, TLS, HTTP, HTTPS, API, REST, JSON, WebSockets, P2P, serverless.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

