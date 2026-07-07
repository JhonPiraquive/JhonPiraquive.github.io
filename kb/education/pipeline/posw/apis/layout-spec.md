---
track: posw
slug: apis
title: "APIs: Qué son, Tipos y Herramientas"
order: 7
prev: tipos-servicios-web
next: tokens
---

## ApisLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsApiSection />
<TiposApiSection />
<HerramientasApiSection />
<DisenoApiSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 4 secciones temáticas + 6 bloques pedagógicos (10 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `QueEsApiSection`, `TiposApiSection`, `HerramientasApiSection`, `DisenoApiSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L27–55). |
| 2 | ¿Qué es una API? | `sections/QueEsApiSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×2, `StepReveal`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | Tipos de API | `sections/TiposApiSection.tsx` | `MermaidDiagram`, `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Herramientas para probar APIs | `sections/HerramientasApiSection.tsx` | `CompareTable`, `CodeFiddle` ×2, `CodeChallenge` | **Nuevo.** H2 sin prefijo «3)». curl con `language="bash"`. |
| 5 | Diseño de APIs | `sections/DisenoApiSection.tsx` | `CompareTable`, `CodeFiddle`, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «4)». |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L326–333). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 8 | Reto integrador: biblioteca universitaria | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + GET ISBN (draft L367–407). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `tokens` (draft L411–424). |
| 10 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="apis" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `apis` con 5 preguntas del draft L434–489:

| # | Tema |
|---|------|
| 1 | Abstracción oculta implementación |
| 2 | GET /api/v1/productos convención REST |
| 3 | API pública con API key (Stripe) |
| 4 | curl para CLI y CI |
| 5 | Anti-patrón siempre 200 con error |

**Infra:** `<QuizSection slug="apis" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `APIs: Qué son, Tipos y Herramientas \| POSW` |
| `seoDescription` | `Define APIs, clasifica por accesibilidad y arquitectura, prueba endpoints con curl y Postman, y aplica buenas prácticas de diseño REST. Lección 7 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `http`, `json`, `javascript`, `bash`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L29–35 |
| Prerrequisitos | prose `<ul>` | draft L37–41 |
| Intro | prose | draft L49 |
| `api-no-es-backend` | `Callout` | `variant="callout-info"`; title: «API ≠ backend completo»; children draft L52–54 |

### `QueEsApiSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L63–68 |
| Definición y analogía | prose + `<ul>` | draft L70–77 |
| `flujo-cliente-api` | `MermaidDiagram` | chart draft L81–84 |
| `get-clima-request` | `CodeFiddle` | `language="http"`; title: «GET clima con API Key»; code draft L88–94 |
| `get-clima-response` | `CodeFiddle` | `language="json"`; title: «Respuesta JSON clima»; code draft L96–104 |
| `flujo-peticion-api` | `StepReveal` | title: «Flujo de una petición API»; steps[4] draft L106–127 |
| `practica-analogia-menu` | `PracticeExercise` | prompt: «Explica la analogía del menú de restaurante aplicada a GET /api/clima?ciudad=Bogota. ¿Quién es el cliente, el mesero, la cocina y el menú?»; hints: `["Cliente = quien pide", "Mesero = API", "Cocina = backend", "Menú = endpoints documentados"]`; expectedKeywords: `["cliente", "API", "backend", "endpoint", "menú"]`; successMessage: «Correcto. El cliente es la app; la API traduce el pedido; el backend procesa; el menú es el contrato de endpoints.» |

### `TiposApiSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L145–149 |
| `clasificacion-api` | `MermaidDiagram` | chart draft L153–156 |
| `tabla-accesibilidad` | `CompareTable` | headers draft L160; rows draft L162–167 |
| Por arquitectura | prose `<ul>` | draft L170–175 |
| `caso-api-interna-expuesta` | `Callout` | title: «Caso real: API interna expuesta por error»; children draft L177–181 |

### `HerramientasApiSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L189–193 |
| `tabla-herramientas` | `CompareTable` | headers draft L197; rows draft L199–205 |
| `curl-ejemplos` | `CodeFiddle` | `language="bash"`; title: «Pruebas con curl»; code draft L210–234 |
| `fetch-listar-productos` | `CodeFiddle` | `language="javascript"`; title: «Consumo desde JavaScript»; code draft L238–248 |
| `orden-flujo-prueba` | `CodeChallenge` | title: «Ordena el flujo de prueba de un endpoint nuevo»; template draft L252–253; blanks draft L254–260 |

### `DisenoApiSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L269–274 |
| `tabla-buenas-practicas` | `CompareTable` | headers draft L278; rows draft L280–286 |
| `respuesta-error-json` | `CodeFiddle` | `language="json"`; title: «Respuesta de error bien diseñada»; code draft L291–301 |
| `caso-fintech-sin-versionado` | `Callout` | title: «Caso real: fintech sin versionado»; children draft L303–307 |
| `completa-mapping-endpoints` | `CodeChallenge` | title: «Completa el mapping de endpoints»; template draft L313–314; blanks draft L315–319 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L326–333 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-publica-privada` | `PracticeExercise` | prompt: «¿En qué se diferencia una API pública de una API privada? Da un ejemplo de cada una y un riesgo si se confunden.»; hints: `["Pública = desarrolladores externos", "Privada = solo organización", "Riesgo = exposición accidental"]`; expectedKeywords: `["pública", "privada", "API key", "interna"]`; successMessage: «Correcto. Pública es accesible con registro/key (Stripe); privada solo interna (microservicios). Exponer una privada al público es un riesgo grave.» |
| `comprension-versionado` | `PracticeExercise` | prompt: «Un partner reporta que su integración dejó de funcionar tras un cambio en el formato JSON de POST /api/pagos. ¿Qué buena práctica de diseño faltaba desde el inicio?»; hints: `["Cambios breaking sin aviso", "Prefijo en la ruta", "v1 vs v2"]`; expectedKeywords: `["versionado", "v1", "v2", "deprecación"]`; successMessage: «Correcto. Versionar desde el lanzamiento (/api/v1/pagos) permite publicar cambios breaking en /api/v2/ sin romper clientes existentes.» |
| `comprension-herramientas` | `PracticeExercise` | prompt: «¿Qué herramienta usarías para probar un endpoint en un script de CI/CD y cuál para que un nuevo desarrollador explore la API visualmente?»; hints: `["CLI vs GUI", "Automatización vs exploración"]`; expectedKeywords: `["curl", "Postman", "Swagger"]`; successMessage: «Correcto. curl en CI/CD; Postman o Swagger UI para exploración manual y documentación interactiva.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Diseña y documenta una API de biblioteca universitaria»; tareas 1–5 + criterio éxito (draft L371–381) |
| `reto-get-isbn` | `CodeFiddle` | `language="http"`; title: «GET libro por ISBN»; code draft L383–394 |
| `reto-biblioteca-integrador` | `PracticeExercise` | prompt: «Implementa el reto de la biblioteca: clasifica la API, lista 5 endpoints versionados y escribe la respuesta 404 para ISBN inexistente.»; hints: `["Partner o privada con auth para estudiantes", "GET /api/v1/libros con paginación", "POST /api/v1/reservas para crear", "404 con JSON estructurado para libro no encontrado"]`; expectedKeywords: `["GET", "POST", "v1", "404", "paginación"]`; successMessage: «Excelente. Has diseñado un contrato API coherente con buenas prácticas de versionado y códigos semánticos.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L415 |
| Ideas clave | `<ul>` 4 viñetas draft L417–422 |
| Siguiente paso | enlace `tokens` draft L424 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="apis" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/QueEsApiSection.tsx` | `QueEsApiSection` | `MermaidDiagram`, `CodeFiddle` ×2, `StepReveal`, `PracticeExercise` |
| `sections/TiposApiSection.tsx` | `TiposApiSection` | `MermaidDiagram`, `CompareTable`, `Callout` |
| `sections/HerramientasApiSection.tsx` | `HerramientasApiSection` | `CompareTable`, `CodeFiddle` ×2, `CodeChallenge` |
| `sections/DisenoApiSection.tsx` | `DisenoApiSection` | `CompareTable`, `CodeFiddle`, `Callout`, `CodeChallenge` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 4 secciones temáticas |
| `ApisLesson.tsx` | Orden 10 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«4)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `json`, `javascript`, `bash` — 6 bloques en draft)
- [ ] Crear 10 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `apis` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `tipos-servicios-web` |
| `next` | `tokens` |
