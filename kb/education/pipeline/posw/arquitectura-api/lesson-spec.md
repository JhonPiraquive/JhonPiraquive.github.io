---
track: posw
slug: arquitectura-api
title: "Arquitectura de APIs: REST, GraphQL y gRPC"
order: 22
prev: ia-en-desarrollo-web
next: null
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (25%) con matiz **Gobernante** (15%): visión de sistemas y decisiones arquitectónicas. Marca: **Jhon Alejandro Piraquive** — cierre del track POSW; tono de síntesis y criterio de selección.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; arquitectura interna y estilos de contrato.
- **Persona:** segunda persona (*tú*) en reto y diagramas; impersonal en comparativas SOAP/GraphQL/gRPC.
- **Voz:** profesional, estratégica; elegir estilo según cliente y legado, no moda.
- **Evitar:** declarar REST muerto, GraphQL como bala de plata, CQRS/BFF sin justificación de escala.
- **Preferir:** verbos de acción concretos (*describir*, *comparar*, *explicar*, *identificar*, *elegir*, *diseñar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Arquitectura de APIs: REST y GraphQL \| POSW` | 45 caracteres |
| `seo_description` | `Capas REST, SOAP, GraphQL, gRPC, API Gateway, BFF y Strangler Fig. Lección 22 — cierre del track POSW.` | 99 caracteres |
| `seo_title` (EN, fase i18n) | `API architecture: REST & GraphQL \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 22: REST layers, SOAP, GraphQL, gRPC, API Gateway, BFF, Strangler Fig — track finale.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Arquitectura de APIs: REST, GraphQL y gRPC`

- Tres estilos centrales del brief + competencia de capas internas.
- Subtítulo académico con dos puntos; lección 22 = cierre del track POSW.
- Retoma SOLID/DIP (`principios-solid`), naming y verificación con IA de lecciones previas.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| Arquitectura REST en capas | REST en capas: gateway, controlador, servicio, repositorio | Diagrama de flujo vertical |
| ↳ Estructura de directorios | Estructura típica: controllers, services, repositories | Bash tree como referencia |
| SOAP y WSDL | SOAP: XML, WSDL y stack WS-* | Banca y legado |
| GraphQL | GraphQL: SDL, resolvers y DataLoader | Un endpoint `/graphql` |
| gRPC | gRPC: Protobuf, HTTP/2 y streaming | Comunicación interna |
| Patrones arquitectónicos | Patrones: Gateway, BFF, Strangler Fig y CQRS | Tarjetas con caso de uso |
| Comparativa de estilos | REST vs SOAP vs GraphQL vs gRPC | CompareTable; contrato y overhead |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Reto integrador | Reto integrador: plataforma de cursos online | Web, móvil, admin, pagos |
| Cierre del track POSW | Cierre del track Programación Orientada a Sitios Web | Síntesis del recorrido 1–22 |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: tema nominal; sin emojis.
- H3: nombrar patrón o estilo solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Caso real — monolito REST sin gateway

- **Título:** `Caso real: cuatro flujos OAuth en el móvil`
- **Tono:** incidente de auth fragmentada; centralización en gateway.
- **Copy refinado:** `Cada microservicio expone auth distinta; el móvil implementa 4 flujos OAuth. Un cambio de JWT rompe solo iOS. Decisión: API Gateway centraliza auth y rate limit; BFF Mobile adapta payloads; servicios internos sin HTTP público.`
- **Variante Clay:** `callout-warning`; borde accent en hover.

#### 2. Caso real — GraphQL N+1 en Black Friday

- **Título:** `Caso real: 50 posts y latencia de 8 segundos`
- **Tono:** incidente de rendimiento; DataLoader como remedio.
- **Copy refinado:** `Lista de 50 posts con autor y comentarios: cada resolver dispara query a usuarios. p95 pasa de 200 ms a 8 s en Black Friday. Decisión: DataLoader por entidad, batch de IDs, métricas por resolver y límite de profundidad en queries.`
- **Variante Clay:** `callout-warning`.

#### 3. Controlador delgado, servicio con negocio

- **Título:** `La arquitectura de API no es solo la URL`
- **Tono:** informativo; alinea con DIP de lección 19.
- **Copy refinado:** `El controlador traduce HTTP; el servicio concentra reglas de negocio; el repositorio abstrae la BD. Saltar capas — SQL en el controlador — impide tests y reutilización. Decisión: capas explícitas aunque el estilo sea REST, GraphQL o gRPC.`
- **Variante Clay:** `callout-info`; borde secondary.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| CompareTable | REST vs SOAP vs GraphQL vs gRPC | Filas: contrato, tipado, overhead, versionado, caso típico |
| StepReveal | Capas REST | Gateway → Controller → Service → Repository → BD |
| PracticeExercise | Éxito (diagrama POST pedidos) | `Correcto. Flujo HTTP entra por gateway, negocio en servicio, persistencia en repositorio.` |
| PracticeExercise | Éxito (N+1) | `Correcto. DataLoader agrupa cargas por tipo de entidad y evita consultas redundantes.` |
| PracticeExercise | Éxito (reto cursos) | `Excelente. Capas claras, BFF justificado, SDL válido, gRPC interno razonado y plan Strangler incremental.` |
| Quiz | Feedback general | Una oración; citar capa, WSDL, DataLoader, Protobuf o Strangler |
| Cierre | Ideas clave del track | Viñetas: HTTP y REST · capas y SOLID · naming · IA con verificación · arquitectura con criterio |
| Cierre | Siguiente paso | `Has completado el track POSW. Repasa lecciones clave o explora proyectos del portafolio.` |

### Notas EN (fase i18n)

- Título EN sugerido: `API architecture: REST, GraphQL, and gRPC`
- Mantener sin traducir: REST, SOAP, GraphQL, gRPC, WSDL, SDL, Protobuf, API Gateway, BFF, CQRS, DataLoader, JWT, HTTP/2.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Cierre del track» → `Track wrap-up`.

## SEO

Contribución de **seo-redirects-expert**. Lección 22 del track POSW; **cierre del track** — sin `next`.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Arquitectura de APIs: REST y GraphQL \| POSW` | 45 |
| `seoDescription` | `Capas REST, SOAP, GraphQL, gRPC, API Gateway, BFF y Strangler Fig. Lección 22 — cierre del track POSW.` | 99 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `API architecture: REST & GraphQL \| POSW` | 40 |
| `seoDescription` | `POSW Lesson 22: REST layers, SOAP, GraphQL, gRPC, API Gateway, BFF, Strangler Fig — track finale.` | 99 |

### Keywords (track POSW)

**Primarias:** arquitectura API, REST capas, GraphQL, gRPC, API Gateway, POSW.

**Secundarias:** SOAP WSDL, BFF, Strangler Fig, CQRS, DataLoader, Protobuf, microservicios.

**Long-tail:** capas API gateway controlador servicio repositorio, GraphQL N+1 DataLoader solución, REST vs GraphQL vs gRPC cuándo usar, patrón Strangler Fig migración monolito.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `ia-en-desarrollo-web` | IA en el desarrollo web: productividad y verificación |
| `next` | — | *(cierre del track POSW)* |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/arquitectura-api/` |
| EN (fase i18n) | `/en/teaching/posw/arquitectura-api/` |
| Legacy | `/pages/teaching/posw/arquitectura-api.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | REST en capas | Arquitectura REST: gateway, servicio y repositorio | arquitectura REST capas |
| H2 | SOAP | SOAP y contrato WSDL | SOAP WSDL |
| H2 | GraphQL | GraphQL: schema SDL y resolvers | GraphQL SDL |
| H2 | gRPC | gRPC: Protobuf y HTTP/2 | gRPC Protobuf |
| H2 | Patrones | API Gateway, BFF, Strangler Fig y CQRS | API Gateway BFF |
| H2 | Comparativa | REST vs SOAP vs GraphQL vs gRPC | comparativa APIs |
| H2 | Cierre track | Cierre del track POSW | programación sitios web |
| H2 | Reto integrador | Reto integrador: plataforma cursos online | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Arquitectura de APIs: REST y GraphQL \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta «gRPC» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama capas REST o comparativa cuatro estilos de API |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`arquitectura-api`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `API architecture: REST, GraphQL, and gRPC`.
- **Términos sin traducir:** REST, SOAP, GraphQL, gRPC, WSDL, SDL, Protobuf, API, BFF, CQRS, DataLoader, JWT.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Cierre del track» → `Track wrap-up`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
