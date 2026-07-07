---
track: posw
slug: http-headers
title: "HTTP Headers"
order: 5
prev: http-metodos-status
next: tipos-servicios-web
---

## HttpHeadersLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueSonHeadersSection />
<RequestHeadersSection />
<ResponseHeadersSection />
<CorsSection />
<SeguridadHeadersSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 5 secciones temáticas + 6 bloques pedagógicos (11 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `QueSonHeadersSection`, `RequestHeadersSection`, `ResponseHeadersSection`, `CorsSection`, `SeguridadHeadersSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L31–57). |
| 2 | ¿Qué son los HTTP headers? | `sections/QueSonHeadersSection.tsx` | `StepReveal`, `CompareTable`, `MermaidDiagram` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | Request headers | `sections/RequestHeadersSection.tsx` | `CodeFiddle`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Response headers | `sections/ResponseHeadersSection.tsx` | `CodeFiddle` ×2, `CodeChallenge` | **Nuevo.** H2 sin prefijo «3)». JSON 401 con `language="json"`. |
| 5 | CORS y preflight | `sections/CorsSection.tsx` | `MermaidDiagram`, `CodeFiddle`, `Callout` | **Nuevo.** H2 sin prefijo «4)». |
| 6 | Headers de seguridad | `sections/SeguridadHeadersSection.tsx` | `CompareTable`, `CodeFiddle`, `Callout` | **Nuevo.** H2 sin prefijo «5)». Helmet con `language="javascript"`. |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L352–357). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 9 | Reto integrador: API REST en producción | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + GET autenticado (draft L395–427). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `tipos-servicios-web` (draft L435–444). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="http-headers" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `http-headers` con 5 preguntas del draft L454–509:

| # | Tema |
|---|------|
| 1 | Línea en blanco separa headers del body |
| 2 | Header Host obligatorio HTTP/1.1 |
| 3 | Preflight OPTIONS en peticiones complejas |
| 4 | Access-Control-Allow-Origin |
| 5 | X-Frame-Options vs clickjacking |

**Infra:** `<QuizSection slug="http-headers" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `HTTP Headers: CORS, caché y seguridad \| POSW` |
| `seoDescription` | `Aprende anatomía de mensajes HTTP, request/response headers, preflight CORS, ETag, Cache-Control y headers de seguridad (HSTS, CSP). Lección 5 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes permitidos: `http`, `json`, `xml`, `graphql`, `javascript`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L33–37 |
| Prerrequisitos | prose `<ul>` | draft L41–43 |
| Intro | prose | draft L51 |
| `body-vs-headers` | `Callout` | `variant="callout-info"`; title: «Body vs headers»; children draft L55–56 |

### `QueSonHeadersSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L67–70 |
| `anatomia-mensaje-http` | `StepReveal` | title: «Anatomía del mensaje HTTP»; steps[4] draft L78–93 |
| `categorias-headers` | `CompareTable` | headers draft L101; rows draft L102–107 |
| `mapa-categorias-headers` | `MermaidDiagram` | chart draft L112 |

### `RequestHeadersSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L123–125 |
| Tabla headers frecuentes | prose `<table>` | draft L129–137 |
| `request-completo` | `CodeFiddle` | `language="http"`; title: «Mensaje HTTP completo (request)»; code draft L143–150 |
| Errores frecuentes | prose `<ul>` | draft L154–156 |
| `origin-vs-referer` | `Callout` | title: «Origin vs Referer»; children draft L160–161 |
| `practica-request-headers` | `PracticeExercise` | prompt: «En un POST /api/usuarios con body JSON, lista cinco headers que el cliente debería enviar y explica el propósito de cada uno.»; hints: `["Host es obligatorio", "Content-Type para JSON", "Authorization si requiere auth"]`; expectedKeywords: `["Host", "Content-Type", "Authorization", "Accept"]`; successMessage: «Correcto. Mínimo: Host, Content-Type, Accept; más Authorization si la ruta es protegida.» |

### `ResponseHeadersSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L182–184 |
| Tabla headers frecuentes | prose `<table>` | draft L188–197 |
| `respuesta-cache-etag` | `CodeFiddle` | `language="http"`; title: «Respuesta con caché y ETag»; code draft L203–211 |
| `respuesta-401-www-auth` | `CodeFiddle` | `language="http"`; title: «Respuesta 401 con WWW-Authenticate»; code draft L217–221 |
| `cuerpo-401-json` | `CodeFiddle` | `language="json"`; title: «Cuerpo JSON de error 401»; code draft L225–229 |
| DELETE y POST | prose `<ul>` | draft L233–234 |
| `headers-segun-operacion` | `CodeChallenge` | title: «Headers según operación»; template: `POST exitoso que crea recurso → código ___ y header ___\nDELETE exitoso sin cuerpo → código ___`; blanks: `[{ "id": "blank1", "answer": "201", "placeholder": "código" }, { "id": "blank2", "answer": "Location", "placeholder": "header" }, { "id": "blank3", "answer": "204", "placeholder": "código" }]` |

### `CorsSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L255–257 |
| Simple vs compleja | prose `<ul>` | draft L261–262 |
| `preflight-cors-sequence` | `MermaidDiagram` | chart draft L268 |
| `preflight-completo` | `CodeFiddle` | `language="http"`; title: «Ejemplo preflight completo»; code draft L275–286 |
| `caso-spa-bloqueada` | `Callout` | title: «Caso real: SPA bloqueada en producción»; children draft L290–291 |
| Errores CORS | prose `<ul>` | draft L296–297 |

### `SeguridadHeadersSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L307–309 |
| `tabla-headers-seguridad` | `CompareTable` | headers draft L315; rows draft L316–323 |
| `helmet-express` | `CodeFiddle` | `language="javascript"`; title: «Configuración con Helmet (Express)»; code draft L330–334 |
| `caso-fintech-sin-csp` | `Callout` | title: «Caso real: fintech sin CSP»; children draft L338–339 |
| Cookies seguras | prose | draft L344 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L352–357 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-preflight-cors` | `PracticeExercise` | prompt: «Dibuja o describe el flujo preflight CORS para PUT /api/perfil desde https://app.frontend.com hacia https://api.backend.com. Incluye headers clave en OPTIONS y en la respuesta.»; hints: `["OPTIONS primero", "Origin y Access-Control-Request-Method", "Allow-Origin, Allow-Methods, Allow-Headers"]`; expectedKeywords: `["OPTIONS", "Origin", "Access-Control", "PUT"]`; successMessage: «Correcto. OPTIONS con Origin y Request-Method; servidor responde Allow-Origin, Allow-Methods y Allow-Headers; luego PUT real.» |
| `comprension-cors-movil` | `PracticeExercise` | prompt: «¿Por qué una app móvil nativa no sufre bloqueo CORS pero sí necesita Authorization y Content-Type en POST?»; hints: `["CORS es política del navegador", "El servidor sigue necesitando saber formato y credenciales"]`; expectedKeywords: `["CORS", "navegador", "Content-Type", "Authorization"]`; successMessage: «Correcto. CORS no aplica fuera del navegador; pero el servidor requiere Content-Type para parsear JSON y Authorization para autenticar.» |
| `comprension-x-frame-options` | `PracticeExercise` | prompt: «¿Qué header de respuesta mitiga clickjacking y qué valor recomendarías para una app que no debe embeberse en iframes externos?»; hints: `["Empieza con X-Frame", "Valores: DENY o SAMEORIGIN"]`; expectedKeywords: `["X-Frame-Options", "DENY"]`; successMessage: «Correcto. X-Frame-Options: DENY impide que otras páginas enmarquen tu aplicación.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Configura los headers de una API REST para producción»; tareas 1–5 + criterio éxito (draft L397–405) |
| `reto-get-autenticado` | `CodeFiddle` | `language="http"`; title: «GET autenticado con If-None-Match»; code draft L409–414 |
| `reto-tienda-headers` | `PracticeExercise` | prompt: «Implementa el reto de la tienda: request headers para GET autenticado, respuesta con ETag/Cache-Control y secuencia OPTIONS+PUT con CORS.»; hints: `["GET: Host, Accept, Authorization, If-None-Match", "Response: Cache-Control max-age, ETag", "OPTIONS con Allow-Origin específico (no *)", "HSTS max-age=31536000"]`; expectedKeywords: `["ETag", "Cache-Control", "OPTIONS", "HSTS"]`; successMessage: «Excelente. Has configurado headers de producción: caché, CORS y seguridad.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L435 |
| Ideas clave | `<ul>` 4 viñetas draft L439–442 |
| Siguiente paso | enlace `tipos-servicios-web` draft L444 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="http-headers" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/QueSonHeadersSection.tsx` | `QueSonHeadersSection` | `StepReveal`, `CompareTable`, `MermaidDiagram` |
| `sections/RequestHeadersSection.tsx` | `RequestHeadersSection` | `CodeFiddle`, `Callout`, `PracticeExercise` |
| `sections/ResponseHeadersSection.tsx` | `ResponseHeadersSection` | `CodeFiddle` ×2, `CodeChallenge` |
| `sections/CorsSection.tsx` | `CorsSection` | `MermaidDiagram`, `CodeFiddle`, `Callout` |
| `sections/SeguridadHeadersSection.tsx` | `SeguridadHeadersSection` | `CompareTable`, `CodeFiddle`, `Callout` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 5 secciones temáticas |
| `HttpHeadersLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«5)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `json`, `javascript` — 7 bloques en draft)
- [ ] Crear 11 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `http-headers` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `http-metodos-status` |
| `next` | `tipos-servicios-web` |
