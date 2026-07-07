---
track: posw
slug: arquitectura-api
title: "Arquitectura de APIs: REST, GraphQL y gRPC"
order: 22
prev: ia-en-desarrollo-web
next: null
---

## ArquitecturaApiLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<RestArquitecturaSection />
<SoapArquitecturaSection />
<GraphqlArquitecturaSection />
<GrpcArquitecturaSection />
<PatronesSection />
<ComparativaSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<CierreTrackSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosSection`, `RestArquitecturaSection`, `SoapArquitecturaSection`, `GraphqlArquitecturaSection`, `GrpcArquitecturaSection`, `PatronesSection`, `ComparativaSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `CierreTrackSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L30–58). |
| 2 | Arquitectura REST: gateway, servicio y repositorio | `sections/RestArquitecturaSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×3, `StepReveal` | **Nuevo.** H2 sin prefijo «1)». `bash`, `typescript`, `plaintext` (HTTP). |
| 3 | SOAP: XML, WSDL y stack WS-* | `sections/SoapArquitecturaSection.tsx` | — | **Nuevo.** H2 sin prefijo «2)». Prose only. |
| 4 | GraphQL: schema SDL y resolvers | `sections/GraphqlArquitecturaSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `Callout` | **Nuevo.** H2 sin prefijo «3)». `graphql` ×1. |
| 5 | gRPC: Protobuf y HTTP/2 | `sections/GrpcArquitecturaSection.tsx` | `CodeFiddle` ×2 | **Nuevo.** H2 sin prefijo «4)». `protobuf`, `csharp`. |
| 6 | Patrones: Gateway, BFF, Strangler Fig y CQRS | `sections/PatronesSection.tsx` | `MermaidDiagram`, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «5)». |
| 7 | REST vs SOAP vs GraphQL vs gRPC | `sections/ComparativaSection.tsx` | `CompareTable`, `CodeFiddle`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «6)». `json` ×1. |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×1 | **Nuevo.** |
| 9 | Reto integrador: plataforma de cursos online | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** SDL esqueleto + enunciado (draft L384–434). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave (draft L438–451). |
| 11 | Cierre del track POSW | `sections/CierreTrackSection.tsx` | — | **Nuevo.** Síntesis recorrido track (draft L453–457). Sin `next`. |
| 12 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="arquitectura-api" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `arquitectura-api` con 5 preguntas del draft L467–523:

| # | Tema |
|---|------|
| 1 | Lógica de negocio en capa Servicio |
| 2 | Contrato SOAP → WSDL |
| 3 | DataLoader resuelve N+1 en GraphQL |
| 4 | gRPC → HTTP/2 + Protobuf |
| 5 | Strangler Fig migra monolito gradualmente |

**Infra:** `<QuizSection slug="arquitectura-api" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `Arquitectura de APIs: REST y GraphQL \| POSW` |
| `seoDescription` | `Capas REST, SOAP, GraphQL, gRPC, API Gateway, BFF y Strangler Fig. Lección 22 — cierre del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). HTTP → `plaintext`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | draft L42–44 |
| Intro | prose | draft L52 |
| `callout-arquitectura-vs-rest` | `Callout` | `variant="callout-info"`; title: «La arquitectura de API no es solo la URL»; children draft L55–58 (lesson-spec L79–84) |

### `RestArquitecturaSection`

| id | componente | props |
|----|------------|-------|
| `diagrama-capas-rest` | `MermaidDiagram` | chart draft L70 |
| `estructura-directorios` | `CodeFiddle` | `language="bash"`; title: «Estructura de directorios típica»; code draft L76–90 |
| `controlador-servicio-delgado` | `CodeFiddle` | `language="typescript"`; title: «Controlador delgado + servicio»; code draft L95–117 |
| `peticion-rest-tipica` | `CodeFiddle` | `language="plaintext"`; title: «Petición REST típica»; code draft L122–137 |
| Errores comunes | prose `<ul>` | draft L141–142 |
| `step-capas-rest` | `StepReveal` | title: «Capas REST de arriba a abajo»; steps[5] draft L149–155 |

### `SoapArquitecturaSection`

| id | componente | props |
|----|------------|-------|
| Características | prose `<ul>` | draft L166–168 |
| Cuándo elegir SOAP | prose `<ul>` | draft L172–173 |
| Errores comunes | prose `<ul>` | draft L177–178 |

### `GraphqlArquitecturaSection`

| id | componente | props |
|----|------------|-------|
| `graphql-schema-producto` | `CodeFiddle` | `language="graphql"`; title: «Schema SDL: Producto»; code draft L189–206 |
| `diagrama-graphql-fuentes` | `MermaidDiagram` | chart draft L212 |
| `caso-n-plus-1-black-friday` | `Callout` | `variant="callout-warning"`; title: «Caso real: 50 posts y latencia de 8 segundos»; children draft L218–221 (lesson-spec L72–77) |
| Errores comunes | prose `<ul>` | draft L225–226 |

### `GrpcArquitecturaSection`

| id | componente | props |
|----|------------|-------|
| `grpc-proto-producto` | `CodeFiddle` | `language="protobuf"`; title: «Definición .proto»; code draft L237–252 |
| `grpc-cliente-csharp` | `CodeFiddle` | `language="csharp"`; title: «Cliente gRPC en C#»; code draft L257–265 |
| Características | prose `<ul>` | draft L269–271 |
| Errores comunes | prose `<ul>` | draft L275–276 |

### `PatronesSection`

| id | componente | props |
|----|------------|-------|
| API Gateway | prose | draft L286 |
| BFF | prose | draft L290 |
| Strangler Fig | prose | draft L294 |
| `diagrama-strangler-fig` | `MermaidDiagram` | chart draft L298 |
| CQRS | prose | draft L303 |
| `caso-retail-sin-gateway` | `Callout` | `variant="callout-warning"`; title: «Caso real: cuatro flujos OAuth en el móvil»; children draft L308–311 (lesson-spec L65–70) |
| `completar-capas-rest` | `CodeChallenge` | title: «Completa las capas REST»; template draft L318; blanks draft L319–323 |

### `ComparativaSection`

| id | componente | props |
|----|------------|-------|
| `tabla-rest-soap-graphql-grpc` | `CompareTable` | headers draft L334; rows draft L335–342 |
| `json-error-consistente` | `CodeFiddle` | `language="json"`; title: «JSON de error consistente»; code draft L348–356 |
| `practica-n-plus-1-dataloader` | `PracticeExercise` | prompt draft L362; hints draft L363; expectedKeywords draft L364; successMessage draft L365 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-flujo-post-pedidos` | `PracticeExercise` | prompt draft L376; hints draft L377; expectedKeywords draft L378; successMessage draft L379 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Diseña la arquitectura de API para una plataforma de cursos online»; requisitos + tareas 1–5 (draft L388–398) |
| `reto-graphql-cursos` | `CodeFiddle` | `language="graphql"`; title: «Esquema GraphQL mínimo (cursos)»; code draft L401–422 |
| `reto-plataforma-cursos` | `PracticeExercise` | prompt draft L426; hints draft L427–431; expectedKeywords draft L432; successMessage draft L433; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L442 |
| Ideas clave | `<ul>` 6 viñetas draft L446–451 |

### `CierreTrackSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Cierre del track Programación Orientada a Sitios Web» |
| Síntesis | draft L457 — recorrido cliente-servidor → APIs empresariales, BD, SOLID, naming, IA |
| Sin enlace `next` | `next: null` en LessonLayout |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="arquitectura-api" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` |
| `sections/RestArquitecturaSection.tsx` | `RestArquitecturaSection` | `MermaidDiagram`, `CodeFiddle`, `StepReveal` |
| `sections/SoapArquitecturaSection.tsx` | `SoapArquitecturaSection` | prose only |
| `sections/GraphqlArquitecturaSection.tsx` | `GraphqlArquitecturaSection` | `CodeFiddle`, `MermaidDiagram`, `Callout` |
| `sections/GrpcArquitecturaSection.tsx` | `GrpcArquitecturaSection` | `CodeFiddle` |
| `sections/PatronesSection.tsx` | `PatronesSection` | `MermaidDiagram`, `Callout`, `CodeChallenge` |
| `sections/ComparativaSection.tsx` | `ComparativaSection` | `CompareTable`, `CodeFiddle`, `PracticeExercise` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/CierreTrackSection.tsx` | `CierreTrackSection` | prose only — **único en lección 22** |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«6)»)
- [ ] Migrar todo código → `CodeFiddle` (`bash`, `typescript`, `plaintext`, `graphql`, `protobuf`, `csharp`, `json`)
- [ ] Crear 12 secciones incluyendo `CierreTrackSection`
- [ ] Registrar quiz `arquitectura-api` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO
- [ ] `next: null` — última lección del track POSW

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `ia-en-desarrollo-web` |
| `next` | `null` (cierre del track POSW) |
