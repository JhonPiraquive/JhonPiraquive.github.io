---
track: posw
slug: backend
title: "Backend: Tecnologías y Frameworks"
order: 10
prev: frontend
next: cache
---

## BackendLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsBackendSection />
<ResponsabilidadesBackendSection />
<TecnologiasBackendSection />
<ComoElegirBackendSection />
<EjemplosBackendSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 5 secciones temáticas + 6 bloques pedagógicos (11 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `QueEsBackendSection`, `ResponsabilidadesBackendSection`, `TecnologiasBackendSection`, `ComoElegirBackendSection`, `EjemplosBackendSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L30–58). |
| 2 | ¿Qué es el backend? | `sections/QueEsBackendSection.tsx` | `MermaidDiagram`, `StepReveal`, `CodeFiddle`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | Responsabilidades del backend | `sections/ResponsabilidadesBackendSection.tsx` | `CompareTable`, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Tecnologías y frameworks | `sections/TecnologiasBackendSection.tsx` | `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Cómo elegir el backend | `sections/ComoElegirBackendSection.tsx` | `MermaidDiagram`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «4)». |
| 6 | Ejemplos de backend | `sections/EjemplosBackendSection.tsx` | `CodeFiddle` ×3 | **Nuevo.** H2 sin prefijo «5)». `javascript` ×2, `json` ×1. |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L340–345). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 9 | Reto integrador: plataforma de cursos online | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + POST inscripciones (draft L379–419). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `cache` (draft L423–436). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="backend" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `backend` con 5 preguntas del draft L444–502:

| # | Tema |
|---|------|
| 1 | Backend ejecuta en el servidor |
| 2 | Persistencia y lógica de negocio |
| 3 | Node.js + Express/NestJS si equipo JS |
| 4 | Controlador delega al servicio |
| 5 | Validación en servidor obligatoria |

**Infra:** `<QuizSection slug="backend" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Backend: Tecnologías y Frameworks \| POSW` |
| `seoDescription` | `Define el backend server-side, sus seis responsabilidades, arquitectura en capas, frameworks (Express, NestJS, FastAPI, Spring Boot) y criterios para elegir stack. Lección 10 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `http`, `json`, `javascript`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | draft L42–44 |
| Intro | prose | draft L52 |
| `backend-no-es-api` | `Callout` | `variant="callout-info"`; title: «Backend ≠ solo API»; children draft L55–57 |

### `QueEsBackendSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L68–71 |
| Analogía restaurante | prose + `<ul>` | draft L75–79 |
| `arquitectura-capas` | `MermaidDiagram` | chart draft L84–86 |
| `flujo-peticion-capas` | `StepReveal` | title: «Capas de una petición GET /api/v1/productos/42»; steps[5] draft L92–114 |
| `get-producto-request` | `CodeFiddle` | `language="http"`; title: «GET producto con Bearer»; code draft L120–125 |
| `practica-analogia-restaurante` | `PracticeExercise` | prompt: «Explica la analogía del restaurante para una app de reservas de hotel. ¿Qué hace el frontend, qué hace el backend y qué papel tiene la API?»; hints: `["Frontend = salón/UX", "Backend = cocina/lógica", "API = mesero/contrato"]`; expectedKeywords: `["frontend", "backend", "API", "lógica", "persistencia"]`; successMessage: «Correcto. El frontend muestra la UI; la API traduce pedidos HTTP; el backend procesa reglas y datos.» |

### `ResponsabilidadesBackendSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L145–150 |
| `grid-responsabilidades` | `CompareTable` | headers draft L156; rows draft L158–164 |
| `caso-banco-controlador` | `Callout` | title: «Caso real: banco con lógica en el controlador»; children draft L170–173 |
| `orden-flujo-habitaciones` | `CodeChallenge` | title: «Ordena el flujo de GET /api/v1/habitaciones»; template draft L180; blanks draft L181–187 |

### `TecnologiasBackendSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L198–203 |
| `tabla-frameworks` | `CompareTable` | headers draft L209; rows draft L211–218 |
| `caso-startup-go` | `Callout` | title: «Startup de delivery: Go prematuro»; children draft L224–227 |

### `ComoElegirBackendSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L237–239 |
| `arbol-decision-backend` | `MermaidDiagram` | chart draft L244–246 |
| `completa-arbol-decision` | `CodeChallenge` | title: «Completa el árbol de decisión de stack»; template draft L253; blanks draft L254–258 |
| Errores a evitar | prose `<ul>` | draft L263–266 |

### `EjemplosBackendSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L276–278 |
| `express-listar-productos` | `CodeFiddle` | `language="javascript"`; title: «Listar productos (Express)»; code draft L283–303 |
| `express-crear-producto` | `CodeFiddle` | `language="javascript"`; title: «Crear producto con validación»; code draft L308–319 |
| `respuesta-producto-json` | `CodeFiddle` | `language="json"`; title: «Respuesta JSON producto»; code draft L325–332 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L340–345 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-validacion-servidor` | `PracticeExercise` | prompt: «¿Por qué el backend debe validar datos aunque el frontend ya los validó? Da un ejemplo de ataque si omites validación en servidor.»; hints: `["Cliente manipulable", "curl/Postman directo", "Precio negativo en POST"]`; expectedKeywords: `["servidor", "validación", "manipulable", "cliente"]`; successMessage: «Correcto. Cualquier usuario puede enviar requests directos al API; el servidor es la fuente de verdad.» |
| `comprension-stack-equipo` | `PracticeExercise` | prompt: «Un equipo solo conoce JavaScript y necesita lanzar una API REST en 6 semanas. ¿Qué stack recomendarías y por qué NO elegirías Go desde cero?»; hints: `["Productividad del equipo", "Curva de aprendizaje", "NestJS o Express"]`; expectedKeywords: `["Node.js", "NestJS", "Express", "experiencia", "equipo"]`; successMessage: «Correcto. La experiencia del equipo suele pesar más que benchmarks teóricos de otro lenguaje.» |
| `comprension-controlador-servicio` | `PracticeExercise` | prompt: «En la arquitectura en capas, ¿qué hace un controlador y qué NO debería hacer? ¿Dónde va la lógica de negocio?»; hints: `["Orquesta HTTP", "No SQL directo", "Capa de servicio"]`; expectedKeywords: `["controlador", "servicio", "delega", "HTTP"]`; successMessage: «Correcto. El controlador recibe el request y delega; la lógica de negocio vive en la capa de servicio.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Diseña el backend de una plataforma de cursos online»; tareas 1–5 + criterio éxito (draft L383–393) |
| `reto-post-inscripciones` | `CodeFiddle` | `language="javascript"`; title: «POST inscripciones con validación de cupos»; code draft L396–405 |
| `reto-cursos-integrador` | `PracticeExercise` | prompt: «Implementa el reto de cursos online: lista 4 responsabilidades, elige stack justificado y define POST /api/v1/inscripciones con validación de cupos.»; hints: `["Auth + persistencia + lógica de cupos + email", "NestJS si equipo TypeScript", "409 Conflict si sin cupos", "201 Created al inscribir"]`; expectedKeywords: `["POST", "v1", "cupos", "201", "servicio"]`; successMessage: «Excelente. Has diseñado un backend con capas, validación en servidor y stack justificado.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L427 |
| Ideas clave | `<ul>` 4 viñetas draft L431–434 |
| Siguiente paso | enlace `cache` draft L436 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="backend" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/QueEsBackendSection.tsx` | `QueEsBackendSection` | `MermaidDiagram`, `StepReveal`, `CodeFiddle`, `PracticeExercise` |
| `sections/ResponsabilidadesBackendSection.tsx` | `ResponsabilidadesBackendSection` | `CompareTable`, `Callout`, `CodeChallenge` |
| `sections/TecnologiasBackendSection.tsx` | `TecnologiasBackendSection` | `CompareTable`, `Callout` |
| `sections/ComoElegirBackendSection.tsx` | `ComoElegirBackendSection` | `MermaidDiagram`, `CodeChallenge` |
| `sections/EjemplosBackendSection.tsx` | `EjemplosBackendSection` | `CodeFiddle` ×3 |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 5 secciones temáticas |
| `BackendLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«5)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `json`, `javascript` — 6 bloques en draft)
- [ ] Crear 11 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `backend` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `frontend` |
| `next` | `cache` |
