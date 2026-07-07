---
track: posw
slug: tipos-servicios-web
title: "Tipos de Servicios Web"
order: 6
prev: http-headers
next: apis
---

## TiposServiciosWebLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<SoapSection />
<RestSection />
<GraphqlSection />
<GrpcWebsocketsSection />
<ComparativaTiposSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 5 secciones temáticas + 6 bloques pedagógicos (11 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `SoapSection`, `RestSection`, `GraphqlSection`, `GrpcWebsocketsSection`, `ComparativaTiposSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L32–58). |
| 2 | SOAP | `sections/SoapSection.tsx` | `CodeFiddle`, `Callout` | **Nuevo.** H2 sin prefijo «1)». XML con `language="xml"`. |
| 3 | REST | `sections/RestSection.tsx` | `CompareTable`, `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | GraphQL | `sections/GraphqlSection.tsx` | `CodeFiddle` ×2, `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «3)». `graphql` + `json`. |
| 5 | gRPC y WebSockets | `sections/GrpcWebsocketsSection.tsx` | prose `.proto`, `MermaidDiagram`, `CodeFiddle`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «4)». `.proto` en prose (no CodeFiddle). |
| 6 | Comparativa y selección | `sections/ComparativaTiposSection.tsx` | `MermaidDiagram`, `CompareTable`, `StepReveal` | **Nuevo.** H2 sin prefijo «5)». |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 7 viñetas (draft L395–401). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 9 | Reto integrador: plataforma delivery | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** GraphQL + handshake WS (draft L437–487). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `apis` (draft L495–505). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="tipos-servicios-web" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `tipos-servicios-web` con 5 preguntas del draft L515–570:

| # | Tema |
|---|------|
| 1 | SOAP protocolo XML vs REST estilo |
| 2 | GraphQL resuelve under-fetching |
| 3 | gRPC HTTP/2 + protobuf eficiencia |
| 4 | 101 Switching Protocols WebSocket |
| 5 | SOAP para legacy bancario |

**Infra:** `<QuizSection slug="tipos-servicios-web" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Tipos de Servicios Web: SOAP, REST, GraphQL, gRPC y WebSockets \| POSW` |
| `seoDescription` | `Compara SOAP, REST, GraphQL, gRPC y WebSockets. Aprende cuándo usar cada arquitectura según API pública, microservicios internos, tiempo real o integración legacy. Lección 6 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes permitidos: `http`, `json`, `xml`, `graphql`, `javascript`. Excepción: bloque `protobuf` → prose `<pre>` (no soportado en CodeFiddle).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | draft L42–44 |
| Intro | prose | draft L52 |
| `regla-seleccion` | `Callout` | `variant="callout-info"`; title: «Regla de selección»; children draft L56–57 |

### `SoapSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L68–72 |
| Qué es SOAP | prose | draft L76 |
| `mensaje-soap-xml` | `CodeFiddle` | `language="xml"`; title: «Mensaje SOAP (XML)»; code draft L82–92 |
| Cuándo usar SOAP | prose `<ul>` | draft L96–98 |
| `caso-banco-colombiano` | `Callout` | title: «Caso real: banco colombiano»; children draft L102–103 |

### `RestSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L114–117 |
| `principios-rest` | `CompareTable` | headers draft L123; rows draft L124–130 |
| `endpoints-rest` | `CodeFiddle` | `language="http"`; title: «Endpoints REST (recursos + verbos)»; code draft L137–143 |
| `respuesta-hateoas` | `CodeFiddle` | `language="json"`; title: «Respuesta REST con HATEOAS ligero»; code draft L149–159 |
| Anti-patrón POST | prose | draft L163 |
| `practica-rest-ecommerce` | `PracticeExercise` | prompt: «Para una API pública de e-commerce consumida por web y Android, ¿SOAP o REST? Justifica con formato, contrato y curva de aprendizaje.»; hints: `["JSON es ligero", "OpenAPI documenta REST", "SOAP es verboso para móvil"]`; expectedKeywords: `["REST", "JSON", "OpenAPI"]`; successMessage: «Correcto. REST+JSON con OpenAPI es el estándar de facto para APIs públicas web y móvil.» |

### `GraphqlSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L181–184 |
| Over/under-fetching | prose `<ul>` | draft L188–190 |
| `query-graphql-pedido` | `CodeFiddle` | `language="graphql"`; title: «Query GraphQL»; code draft L196–213 |
| `respuesta-graphql-json` | `CodeFiddle` | `language="json"`; title: «Respuesta GraphQL (JSON)»; code draft L219–230 |
| `tabla-rest-vs-graphql` | `CompareTable` | headers draft L235; rows draft L236–242 |
| `graphql-no-es-bd` | `Callout` | title: «GraphQL no es base de datos»; children draft L247–248 |

### `GrpcWebsocketsSection`

| id | componente | props |
|----|------------|-------|
| gRPC intro | prose `<ul>` | draft L259–263 |
| `contrato-grpc-proto` | prose `<pre>` | título H3 «Contrato gRPC (.proto)»; code draft L269–285 — **no CodeFiddle** (protobuf fuera de lenguajes permitidos) |
| WebSockets intro | prose `<ul>` | draft L289–292 |
| `handshake-websocket` | `MermaidDiagram` | chart draft L298 |
| `cliente-websocket-js` | `CodeFiddle` | `language="javascript"`; title: «Cliente WebSocket (JavaScript)»; code draft L305–308 |
| gRPC vs WebSockets | prose `<table>` | draft L312–315 |
| `caso-panel-admin` | `Callout` | title: «Caso real: panel admin»; children draft L319–320 |
| `practica-grpc-navegador` | `PracticeExercise` | prompt: «¿Por qué gRPC es preferible entre microservicios en el mismo datacenter pero no se expone directo al navegador del usuario?»; hints: `["Protobuf binario", "HTTP/2", "Browsers no hablan gRPC nativo"]`; expectedKeywords: `["protobuf", "HTTP/2", "navegador", "gRPC-Web"]`; successMessage: «Correcto. gRPC brilla servidor-a-servidor; el browser necesita gRPC-Web o un gateway REST/GraphQL.» |

### `ComparativaTiposSection`

| id | componente | props |
|----|------------|-------|
| `panorama-arquitecturas` | `MermaidDiagram` | chart draft L343 |
| `tabla-comparativa-general` | `CompareTable` | headers draft L350; rows draft L351–357 |
| `regla-seleccion-step-reveal` | `StepReveal` | title: «¿Qué tecnología elegir?»; steps[5] draft L366–386 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 7 puntos draft L395–401 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-over-fetching` | `PracticeExercise` | prompt: «Describe un caso de over-fetching con REST y cómo GraphQL lo resolvería con una query de solo 3 campos concretos.»; hints: `["GET devuelve más de lo necesario", "GraphQL pide solo nombre, email, avatar"]`; expectedKeywords: `["over-fetching", "GraphQL", "campos"]`; successMessage: «Correcto. REST devuelve forma fija; GraphQL permite pedir exactamente los campos requeridos.» |
| `comprension-grpc-gateway` | `PracticeExercise` | prompt: «¿Qué anti-patrón ocurre si expones gRPC directamente a la app móvil sin gateway? ¿Qué alternativas existen?»; hints: `["Browsers y muchas apps no hablan gRPC nativo", "gRPC-Web, REST gateway"]`; expectedKeywords: `["gRPC", "gateway", "gRPC-Web", "REST"]`; successMessage: «Correcto. El cliente no consume gRPC nativo; usa gateway REST/GraphQL o gRPC-Web.» |
| `comprension-trading-websockets` | `PracticeExercise` | prompt: «Un sistema de trading necesita precios en tiempo real en el dashboard. ¿REST polling cada 5 s, GraphQL o WebSockets? Justifica.»; hints: `["Latencia y carga del servidor", "Conexión persistente push"]`; expectedKeywords: `["WebSockets", "tiempo real", "polling"]`; successMessage: «Correcto. WebSockets evita polling repetitivo; el servidor empuja actualizaciones al instante.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Arquitectura de servicios para una plataforma de delivery»; tareas 1–5 + criterio éxito (draft L441–449) |
| `reto-query-graphql` | `CodeFiddle` | `language="graphql"`; title: «Query pedido completo»; code draft L453–461 |
| `reto-handshake-websocket` | `CodeFiddle` | `language="http"`; title: «Handshake WebSocket»; code draft L465–473 |
| `reto-delivery-integrador` | `PracticeExercise` | prompt: «Implementa el reto delivery: asigna tecnología a cada canal (app, panel, riders, banco, microservicios) y justifica al menos cuatro elecciones.»; hints: `["App → REST o GraphQL BFF", "Riders GPS → WebSockets", "Pasarela → SOAP legacy", "Entre pods → gRPC", "No gRPC directo al móvil"]`; expectedKeywords: `["REST", "WebSockets", "SOAP", "gRPC"]`; successMessage: «Excelente. Has diseñado una arquitectura híbrida coherente con público, interno y legacy.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L495 |
| Ideas clave | `<ul>` 5 viñetas draft L499–503 |
| Siguiente paso | enlace `apis` draft L505 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="tipos-servicios-web" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/SoapSection.tsx` | `SoapSection` | `CodeFiddle`, `Callout` |
| `sections/RestSection.tsx` | `RestSection` | `CompareTable`, `CodeFiddle` ×2, `PracticeExercise` |
| `sections/GraphqlSection.tsx` | `GraphqlSection` | `CodeFiddle` ×2, `CompareTable`, `Callout` |
| `sections/GrpcWebsocketsSection.tsx` | `GrpcWebsocketsSection` | prose `<pre>`, `MermaidDiagram`, `CodeFiddle`, `Callout`, `PracticeExercise` |
| `sections/ComparativaTiposSection.tsx` | `ComparativaTiposSection` | `MermaidDiagram`, `CompareTable`, `StepReveal` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle` ×2, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 5 secciones temáticas |
| `TiposServiciosWebLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«5)»)
- [ ] Migrar código → `CodeFiddle` (`http`, `json`, `xml`, `graphql`, `javascript` — 8 bloques; `.proto` en prose)
- [ ] Crear 11 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `tipos-servicios-web` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `http-headers` |
| `next` | `apis` |
