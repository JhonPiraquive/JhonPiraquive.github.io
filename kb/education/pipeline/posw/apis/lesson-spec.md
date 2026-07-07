---
track: posw
slug: apis
title: "APIs: Qué son, Tipos y Herramientas"
order: 7
prev: tipos-servicios-web
next: tokens
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track POSW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; preciso, orientado a integración y diseño de contratos HTTP.
- **Persona:** segunda persona (*tú*) en ejercicios y reto; tercera persona o impersonal en objetivos y definiciones (*el estudiante podrá…*, *una API es…*).
- **Voz:** profesional, clara, confiable; enfatiza contrato, abstracción e interoperabilidad antes de herramientas.
- **Evitar:** jerga de marketing («API-first hype»), tono startup informal, confundir API con backend completo sin aclararlo.
- **Preferir:** verbos de acción concretos (*definir*, *clasificar*, *probar*, *versionar*, *documentar*, *detectar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `APIs: contrato, tipos y herramientas \| POSW` | Keywords al inicio; 42 caracteres |
| `seo_description` | `Define APIs, clasifica por accesibilidad y arquitectura, prueba endpoints con curl y Postman, y aplica buenas prácticas de diseño REST. Lección 7 del track POSW.` | 149 caracteres |
| `seo_title` (EN, fase i18n) | `APIs: contract, types & tools \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 7: define APIs, classify by accessibility and architecture, test endpoints with curl and Postman, and apply REST design best practices.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `APIs: contrato, tipos, herramientas y diseño`

- Sustituye enumeración genérica por subtítulo académico con dos puntos.
- Añade *diseño* como cierre del arco (clasificación → herramientas → buenas prácticas).
- Mantiene las cuatro ideas del borrador: definición, tipos, herramientas, diseño.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| ¿Qué es una API? | ¿Qué es una API? | Pregunta directa; definir acrónimo en primera mención |
| ↳ Mapa mental | Conceptos clave de una API | Sustantivos: abstracción, contrato, interoperabilidad |
| ↳ Definición y analogía | Definición y analogía del menú | Metáfora restaurante como puente didáctico; no extenderla al H2 |
| ↳ Flujo básico | Flujo cliente → API → datos | Flechas en copy; conecta con lección HTTP previa |
| Tipos de API | Tipos de API | Clasificación dual: accesibilidad y arquitectura |
| ↳ Por accesibilidad | Clasificación por accesibilidad | Tabla comparativa; tono de riesgo profesional |
| ↳ Por arquitectura | Clasificación por arquitectura | Enlazar con `tipos-servicios-web` sin repetir contenido |
| Herramientas para probar APIs | Herramientas para probar APIs | Enfoque práctico; GUI vs CLI |
| ↳ Pruebas con curl | Pruebas con curl desde terminal | Imperativo técnico; estándar de la industria |
| Diseño de APIs | Diseño de APIs REST | REST como convención dominante; no excluir otros estilos en cuerpo |
| ↳ Buenas prácticas vs anti-patrones | Buenas prácticas y anti-patrones | Paralelismo claro; tabla comparativa |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Resumen | Resumen | Viñetas con sustantivos técnicos |
| Reto integrador | Reto integrador: API de biblioteca universitaria | Escenario académico coherente con el track |
| Cierre | Cierre de la lección | Formal breve; puente a `tokens` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: pregunta o tema nominal; sin emojis.
- H3: concreto y escaneable; nombrar herramienta o concepto solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. API ≠ backend completo

- **Título:** `API ≠ backend completo`
- **Tono:** aclaratorio, preventivo; distingue interfaz expuesta de implementación interna.
- **Copy refinado:** `La API es la interfaz expuesta; el backend incluye lógica, base de datos y procesos internos que el consumidor no ve. Confundir ambos conduce a diseños acoplados y difíciles de versionar.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 2. Caso real — API interna expuesta

- **Título:** `Caso real: API interna expuesta por error`
- **Tono:** narrativa breve de incidente; síntoma → causa → decisión.
- **Copy refinado:** `Un API Gateway de inventario queda accesible desde internet sin autenticación. Un scraper descubre GET /internal/stock y extrae precios mayoristas. Decisión: clasificar APIs (pública, partner, privada); las internas solo en red privada o con mTLS; nunca exponer rutas /internal/ sin auth.`
- **Variante Clay:** `callout-warning`.

#### 3. Caso real — fintech sin versionado

- **Título:** `Caso real: fintech sin versionado`
- **Tono:** incidente de integración; énfasis en contrato roto y partners afectados.
- **Copy refinado:** `Una fintech expone POST /api/pagos sin versión. Seis meses después cambia el campo monto de entero a objeto { valor, moneda }. Tres partners dejan de procesar pagos. Decisión: versionar desde el lanzamiento (/api/v1/pagos); cambios breaking en /api/v2/ con periodo de deprecación.`
- **Variante Clay:** `callout-warning`.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| StepReveal | Título | `Flujo de una petición API` — pasos numerados en presente |
| StepReveal | Pasos 1–4 | Cliente construye → API valida → servicio consulta → respuesta semántica |
| PracticeExercise | Éxito (analogía menú) | `Correcto. El cliente es la app; la API traduce el pedido; el backend procesa; el menú es el contrato de endpoints.` |
| PracticeExercise | Éxito (pública vs privada) | `Correcto. Pública: accesible con registro o API key (Stripe). Privada: solo interna (microservicios). Exponer una privada al público es un riesgo grave.` |
| PracticeExercise | Éxito (versionado) | `Correcto. Versionar desde el lanzamiento (/api/v1/pagos) permite publicar cambios breaking en /api/v2/ sin romper clientes existentes.` |
| PracticeExercise | Éxito (herramientas) | `Correcto. curl en CI/CD; Postman o Swagger UI para exploración manual y documentación interactiva.` |
| CodeChallenge | Título flujo prueba | `Ordena el flujo de prueba de un endpoint nuevo` |
| CodeChallenge | Título mapping | `Completa el mapping de endpoints` |
| PracticeExercise | Éxito (reto biblioteca) | `Excelente. Has diseñado un contrato API coherente con buenas prácticas de versionado y códigos semánticos.` |
| Quiz | Feedback general | Explicar el *por qué* en una oración; mencionar abstracción, URIs o status codes cuando aplique |
| Cierre | Ideas clave | Viñetas: contrato expuesto · versionar desde día uno · curl en CI · anti-patrón 200 con error en JSON |
| Cierre | Siguiente paso | `Siguiente lección: tokens — cómo autenticar y autorizar el acceso a esas APIs.` |

### Notas EN (fase i18n)

- Título EN sugerido: `APIs: contract, types, tools, and design`
- Mantener sin traducir: REST, OpenAPI, curl, Postman, Swagger, JSON, HTTP, endpoint, API key.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.

## SEO

Contribución de **seo-redirects-expert**. Lección 7 del track POSW; enlaza arquitecturas (`tipos-servicios-web`) con autenticación (`tokens`).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `APIs: qué son, tipos y herramientas \| POSW` | 42 |
| `seoDescription` | `Define APIs, clasifica por accesibilidad y arquitectura, prueba endpoints con curl y Postman, y aplica buenas prácticas REST. Lección 7 del track POSW.` | 151 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `APIs: types, tools & REST design \| POSW` | 40 |
| `seoDescription` | `POSW Lesson 7: define APIs, classify by access and architecture, test with curl and Postman, and apply REST design best practices.` | 128 |

### Keywords (track POSW)

**Primarias:** API, REST, diseño de APIs, Postman, curl, OpenAPI, POSW, servicios web.

**Secundarias:** API pública, API privada, versionado, GraphQL, gRPC, Swagger UI, endpoints HTTP.

**Long-tail:** qué es una API, diferencia API y backend, probar API con curl, buenas prácticas diseño REST, versionar API v1 v2.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `tipos-servicios-web` | Tipos de Servicios Web |
| `next` | `tokens` | Tokens y Autenticación |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/apis/` |
| EN (fase i18n) | `/en/teaching/posw/apis/` |
| Legacy | `/pages/teaching/posw/apis.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (draft) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | ¿Qué es una API? | ¿Qué es una API? Contrato y abstracción | API definición |
| H2 | Tipos de API | Tipos de API: accesibilidad y arquitectura | REST SOAP GraphQL |
| H2 | Herramientas para probar APIs | Herramientas para probar APIs (curl, Postman) | Postman curl Swagger |
| H2 | Diseño de APIs | Diseño de APIs REST: buenas prácticas | diseño API REST |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: API de biblioteca universitaria | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `APIs: qué son, tipos y herramientas \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «arquitectura» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama cliente → API → datos o captura flujo Postman/curl |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`apis`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `APIs: types, tools, and REST design`.
- **Términos sin traducir:** API, REST, SOAP, GraphQL, gRPC, HTTP, JSON, OpenAPI, curl, Postman, Swagger.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
