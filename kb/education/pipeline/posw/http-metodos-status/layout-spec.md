---
track: posw
slug: http-metodos-status
title: "Métodos HTTP y Códigos de Estado"
order: 4
prev: protocolos-seguridad
next: http-headers
---

## HttpMetodosStatusLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<MetodosHttpSection />
<CrudHttpSection />
<CodigosEstadoSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 3 secciones temáticas + 6 bloques pedagógicos (9 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `MetodosHttpSection`, `CrudHttpSection`, `CodigosEstadoSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L28–54). |
| 2 | Métodos HTTP (verbos) | `sections/MetodosHttpSection.tsx` | `CompareTable`, `CodeFiddle` ×2, `StepReveal`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | CRUD y métodos HTTP | `sections/CrudHttpSection.tsx` | `CompareTable`, `CodeFiddle`, `MermaidDiagram`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Códigos de estado HTTP | `sections/CodigosEstadoSection.tsx` | `MermaidDiagram`, `StepReveal`, `CodeFiddle` ×3, `Callout` | **Nuevo.** H2 sin prefijo «3)». JSON 422 con `language="json"`. |
| 5 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L341–346). |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 7 | Reto integrador: reservas de hotel | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + POST reserva (draft L384–423). |
| 8 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `http-headers` (draft L431–440). |
| 9 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="http-metodos-status" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `http-metodos-status` con 5 preguntas del draft L450–505:

| # | Tema |
|---|------|
| 1 | GET Safe para lectura |
| 2 | PUT vs PATCH |
| 3 | 401 sin token Bearer |
| 4 | 201 Created tras POST |
| 5 | POST no idempotente |

**Infra:** `<QuizSection slug="http-metodos-status" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Métodos HTTP y Códigos de Estado \| POSW` |
| `seoDescription` | `Aprende verbos HTTP (GET, POST, PUT, PATCH, DELETE), propiedades Safe e Idempotente, mapping CRUD y familias de códigos 1xx–5xx. Lección 4 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes permitidos: `http`, `json`, `xml`, `graphql`, `javascript`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L30–34 |
| Prerrequisitos | prose `<ul>` | draft L38–40 |
| Intro | prose | draft L48 |
| `contrato-semantico` | `Callout` | `variant="callout-info"`; title: «Contrato semántico»; children draft L52–53 |

### `MetodosHttpSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L64–67 |
| Qué son los métodos | prose | draft L71 |
| `tabla-metodos-http` | `CompareTable` | headers draft L77; rows draft L78–86 |
| `get-producto-42` | `CodeFiddle` | `language="http"`; title: «GET producto»; code draft L93–96 |
| `post-producto` | `CodeFiddle` | `language="http"`; title: «POST producto»; code draft L100–105 |
| Safe e Idempotente | prose `<ul>` | draft L109–110 |
| `safe-idempotente-step-reveal` | `StepReveal` | title: «Safe e Idempotente en la práctica»; steps[4] draft L115–132 |
| `caso-doble-cobro` | `Callout` | title: «Caso real: doble cobro por reintento»; children draft L137–138 |
| `practica-safe-idempotente` | `PracticeExercise` | prompt: «Para cada método indica Safe e Idempotente: GET, POST, PUT, DELETE. Explica por qué POST no es idempotente con un ejemplo de pago.»; hints: `["Safe = no modifica estado", "POST crea efectos nuevos en cada envío", "Piensa en doble cobro"]`; expectedKeywords: `["GET", "Safe", "POST", "idempotente", "pago"]`; successMessage: «Correcto. GET es Safe e idempotente; POST no es idempotente porque cada envío puede crear un nuevo efecto (p. ej. otro cargo).» |

### `CrudHttpSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L159–161 |
| `tabla-crud-http` | `CompareTable` | headers draft L167; rows draft L168–175 |
| `ciclo-crud-completo` | `CodeFiddle` | `language="http"`; title: «Ciclo CRUD completo»; code draft L181–204 |
| `secuencia-crud` | `MermaidDiagram` | chart draft L210 |
| Anti-patrón POST | prose | draft L215 |
| `completa-mapping-crud` | `CodeChallenge` | title: «Completa el mapping CRUD»; template: `Listar todos los productos → ___ \`/api/productos\`\nEliminar producto 42 → ___ \`/api/productos/42\``; blanks: `[{ "id": "blank1", "answer": "GET", "placeholder": "método" }, { "id": "blank2", "answer": "DELETE", "placeholder": "método" }]` |

### `CodigosEstadoSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L235–237 |
| `familias-status-codes` | `MermaidDiagram` | chart draft L243 |
| `familias-step-reveal` | `StepReveal` | title: «Familias de status codes»; steps[5] draft L250–269 |
| 401 vs 403 | prose `<ul>` | draft L275–276 |
| `respuesta-201-created` | `CodeFiddle` | `language="http"`; title: «201 Created (POST exitoso)»; code draft L283–294 |
| `respuesta-404-not-found` | `CodeFiddle` | `language="http"`; title: «404 Not Found»; code draft L299–308 |
| `respuesta-422-validacion` | `CodeFiddle` | `language="json"`; title: «422 Unprocessable Entity (validación)»; code draft L314–320 |
| `caso-siempre-200` | `Callout` | title: «Caso real: API con siempre 200 OK»; children draft L325–326 |
| Errores frecuentes | prose `<ul>` | draft L331–333 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L341–346 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-401-403` | `PracticeExercise` | prompt: «Un cliente recibe 401 en GET /api/perfil. ¿Debe reintentar la misma petición sin cambios? ¿Y si recibe 403? Justifica con la diferencia entre ambos códigos.»; hints: `["401 = no autenticado", "403 = autenticado sin permiso", "¿Cambiar credenciales ayuda?"]`; expectedKeywords: `["401", "403", "token", "permiso"]`; successMessage: «Correcto. Con 401 debe autenticarse (token); con 403 ya está autenticado pero no tiene permiso — reintentar igual no sirve.» |
| `comprension-get-eliminar` | `PracticeExercise` | prompt: «¿Por qué es peligroso usar GET /api/usuarios/5/eliminar para borrar un usuario? Menciona Safe e idempotencia/caché.»; hints: `["GET es Safe en teoría pero esta URL modifica", "Los proxies y navegadores pueden cachear GET"]`; expectedKeywords: `["GET", "DELETE", "cache", "Safe"]`; successMessage: «Correcto. GET no debe modificar estado; además puede cachearse y ejecutarse sin intención. Usa DELETE.» |
| `comprension-201-location` | `PracticeExercise` | prompt: «Un POST crea un usuario y el servidor responde 200 OK sin header Location. ¿Qué código y header debería usar en su lugar?»; hints: `["Código para recurso creado", "Header que indica la URI del nuevo recurso"]`; expectedKeywords: `["201", "Location", "Created"]`; successMessage: «Correcto. 201 Created con header Location apunta al recurso recién creado.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Diseña el contrato HTTP de una API de reservas de hotel»; tareas 1–5 + criterio éxito (draft L386–394) |
| `reto-post-reserva` | `CodeFiddle` | `language="http"`; title: «POST reserva + 201 Created»; code draft L398–409 |
| `reto-hotel-integrador` | `PracticeExercise` | prompt: «Implementa el reto del hotel: lista operaciones con método y URI, indica Safe/Idempotente en cada una y escribe al menos una respuesta 422 para fechas inválidas.»; hints: `["Listar habitaciones → GET /api/habitaciones", "Crear reserva → POST /api/reservas", "Cambiar fecha → PATCH /api/reservas/{id}", "Cancelar → DELETE /api/reservas/{id}", "Mantenimiento → 503 Service Unavailable"]`; expectedKeywords: `["GET", "POST", "PATCH", "DELETE", "201", "422"]`; successMessage: «Excelente. Has aplicado semántica HTTP, CRUD y códigos de estado en un contrato de API coherente.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L431 |
| Ideas clave | `<ul>` 4 viñetas draft L435–438 |
| Siguiente paso | enlace `http-headers` draft L440 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="http-metodos-status" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/MetodosHttpSection.tsx` | `MetodosHttpSection` | `CompareTable`, `CodeFiddle` ×2, `StepReveal`, `Callout`, `PracticeExercise` |
| `sections/CrudHttpSection.tsx` | `CrudHttpSection` | `CompareTable`, `CodeFiddle`, `MermaidDiagram`, `CodeChallenge` |
| `sections/CodigosEstadoSection.tsx` | `CodigosEstadoSection` | `MermaidDiagram`, `StepReveal`, `CodeFiddle` ×3, `Callout` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 3 secciones temáticas |
| `HttpMetodosStatusLesson.tsx` | Orden 9 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)» / «2)» / «3)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `json` — 7 bloques en draft)
- [ ] Crear 9 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `http-metodos-status` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `protocolos-seguridad` |
| `next` | `http-headers` |
