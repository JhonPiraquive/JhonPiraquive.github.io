---
track: posw
slug: rest-principios
title: "Principios REST"
order: 12
prev: cache
next: typescript
---

## RestPrincipiosLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<IntroRestSection />
<StatelessSection />
<ClientServerSection />
<CacheableSection />
<LayeredSection />
<UniformInterfaceSection />
<CodeOnDemandSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 7 secciones temáticas + 6 bloques pedagógicos (13 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `IntroRestSection`, `StatelessSection`, `ClientServerSection`, `CacheableSection`, `LayeredSection`, `UniformInterfaceSection`, `CodeOnDemandSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L35–63). |
| 2 | Introducción a REST | `sections/IntroRestSection.tsx` | `MermaidDiagram`, `CompareTable`, `CodeFiddle` | **Nuevo.** H2 sin prefijo «1)». `http` ×1. |
| 3 | Stateless (sin estado) | `sections/StatelessSection.tsx` | `CompareTable`, `CodeFiddle` ×2, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Client-Server | `sections/ClientServerSection.tsx` | `StepReveal` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Cacheable | `sections/CacheableSection.tsx` | `CodeFiddle` ×2 | **Nuevo.** H2 sin prefijo «4)». `http` ×2. |
| 6 | Layered System (sistema en capas) | `sections/LayeredSection.tsx` | `MermaidDiagram` | **Nuevo.** H2 sin prefijo «5)». |
| 7 | Uniform Interface (interfaz uniforme) | `sections/UniformInterfaceSection.tsx` | `CodeFiddle` ×2, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «6)». `json`, `javascript`. |
| 8 | Code on Demand (opcional) | `sections/CodeOnDemandSection.tsx` | `Callout` | **Nuevo.** H2 sin prefijo «7)». |
| 9 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 8 viñetas (draft L380–388). |
| 10 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 11 | Reto integrador: API de biblioteca | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + HATEOAS JSON (draft L422–468). |
| 12 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `typescript` (draft L472–485). |
| 13 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="rest-principios" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `rest-principios` con 5 preguntas del draft L493–551:

| # | Tema |
|---|------|
| 1 | REST = estilo arquitectónico Fielding 2000 |
| 2 | Stateless = request autosuficiente |
| 3 | HATEOAS = `_links` en JSON |
| 4 | Mayoría APIs en Richardson nivel 2 |
| 5 | Code on Demand es el único opcional |

**Infra:** `<QuizSection slug="rest-principios" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Principios REST: Constraints y Richardson \| POSW` |
| `seoDescription` | `Aprende los seis constraints REST de Roy Fielding — Stateless, Client-Server, Cacheable, Layered, Uniform Interface y HATEOAS — y el modelo de madurez Richardson. Lección 12 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `http`, `json`, `javascript`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L39–43 |
| Prerrequisitos | prose `<ul>` | draft L47–49 |
| Intro | prose | draft L57 |
| `rest-no-es-json` | `Callout` | `variant="callout-info"`; title: «REST ≠ cualquier API con JSON»; children draft L60–62 |

### `IntroRestSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L73–76 |
| `seis-constraints` | `MermaidDiagram` | chart draft L81–83 |
| `tabla-richardson` | `CompareTable` | headers draft L89; rows draft L91–95 |
| `recurso-vs-accion` | `CodeFiddle` | `language="http"`; title: «Recurso vs acción (anti-patrón)»; code draft L101–107 |

### `StatelessSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L117–120 |
| `stateless-vs-stateful` | `CompareTable` | headers draft L126; rows draft L128–132 |
| `get-pedidos-stateless` | `CodeFiddle` | `language="http"`; title: «GET pedidos con Bearer»; code draft L138–143 |
| `post-pedidos-stateless` | `CodeFiddle` | `language="http"`; title: «POST pedido stateless»; code draft L146–153 |
| `caso-fintech-sesion` | `Callout` | title: «Pagos con sesión en memoria»; children draft L158–161 |
| `practica-stateless-login` | `PracticeExercise` | prompt: «¿Por qué POST /login que guarda sesión en memoria del servidor viola Stateless? ¿Qué alternativa RESTful usarías?»; hints: `["Servidor recuerda estado", "JWT en cada request", "Sin sticky sessions"]`; expectedKeywords: `["stateless", "JWT", "token", "sesión"]`; successMessage: «Correcto. Stateless exige que cada request sea autosuficiente; JWT en Authorization evita sesión server-side.» |

### `ClientServerSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L181–184 |
| `client-server-ecommerce` | `StepReveal` | title: «Client-Server en una app de e-commerce»; steps[4] draft L190–208 |
| Beneficio clave | prose | draft L213 |

### `CacheableSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L223–225 |
| `respuesta-cacheable-catalogo` | `CodeFiddle` | `language="http"`; title: «Respuesta cacheable (catálogo público)»; code draft L230–235 |
| `respuesta-no-cacheable-usuario` | `CodeFiddle` | `language="http"`; title: «Respuesta no cacheable (dato de usuario)»; code draft L240–244 |
| Sin headers = problema REST | prose | draft L248 |

### `LayeredSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L258–260 |
| `diagrama-capas-rest` | `MermaidDiagram` | chart draft L265–267 |
| Qué ve el cliente | prose | draft L271 |

### `UniformInterfaceSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L281–285 |
| `hateoas-json` | `CodeFiddle` | `language="json"`; title: «HATEOAS en JSON»; code draft L290–307 |
| `cliente-hateoas` | `CodeFiddle` | `language="javascript"`; title: «Cliente navegando HATEOAS»; code draft L312–328 |
| `caso-marketplace-hateoas` | `Callout` | title: «15 URLs hardcodeadas en app móvil»; children draft L333–336 |
| `orden-niveles-richardson` | `CodeChallenge` | title: «Ordena los niveles de Richardson (menor a mayor RESTfulness)»; template draft L343; blanks draft L344–349 |

### `CodeOnDemandSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L360–362 |
| Ejemplo implícito SPA | prose | draft L366 |
| `code-on-demand-opcional` | `Callout` | title: «Opcional pero omnipresente en la web»; children draft L369–372 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 8 puntos draft L380–388 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-uris-recursos` | `PracticeExercise` | prompt: «Una API usa GET /api/getLibros y POST /api/reservarLibro. ¿Qué constraints de Uniform Interface viola y cómo los corregirías?»; hints: `["URIs con sustantivos", "Identificación de recursos", "Verbos HTTP"]`; expectedKeywords: `["recurso", "GET", "POST", "libros", "reservas"]`; successMessage: «Correcto. Usar GET /api/v1/libros y POST /api/v1/reservas identifica recursos, no acciones en la URI.» |
| `comprension-hateoas-hardcode` | `PracticeExercise` | prompt: «¿Por qué hardcodear 15 URLs en una app móvil contradice HATEOAS? ¿Qué incluirías en la respuesta JSON para evitarlo?»; hints: `["_links", "href", "Cambios de ruta sin actualizar app"]`; expectedKeywords: `["HATEOAS", "_links", "href", "hypermedia"]`; successMessage: «Correcto. _links guían al cliente a acciones disponibles; cambios de ruta no rompen clientes que navegan hypermedia.» |
| `comprension-richardson-nivel` | `PracticeExercise` | prompt: «Clasifica esta API en Richardson: usa GET/POST/PUT con códigos 200/404/422 correctos pero sin _links en ninguna respuesta. ¿Qué falta para nivel 3?»; hints: `["Verbos + status = nivel 2", "HATEOAS = nivel 3"]`; expectedKeywords: `["nivel 2", "HATEOAS", "_links", "nivel 3"]`; successMessage: «Correcto. Es nivel 2; falta HATEOAS con _links en respuestas para alcanzar nivel 3.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Evalúa y mejora una API de biblioteca hacia REST verdadero»; API actual + tareas 1–5 + criterio éxito (draft L426–441) |
| `reto-libro-hateoas` | `CodeFiddle` | `language="json"`; title: «Libro con _links HATEOAS»; code draft L444–455 |
| `reto-biblioteca-integrador` | `PracticeExercise` | prompt: «Rediseña la API de biblioteca: auth stateless, URIs corregidas, _links en libro y headers Cache-Control para catálogo vs /usuario/me.»; hints: `["JWT tras POST /api/v1/auth/login", "GET /api/v1/libros", "Cache-Control public en catálogo", "no-store en datos de usuario"]`; expectedKeywords: `["stateless", "JWT", "HATEOAS", "_links", "Cache-Control"]`; successMessage: «Excelente. Has migrado la API hacia REST con constraints claros y Richardson nivel 2–3.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L476 |
| Ideas clave | `<ul>` 4 viñetas draft L480–483 |
| Siguiente paso | enlace `typescript` draft L485 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="rest-principios" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/IntroRestSection.tsx` | `IntroRestSection` | `MermaidDiagram`, `CompareTable`, `CodeFiddle` |
| `sections/StatelessSection.tsx` | `StatelessSection` | `CompareTable`, `CodeFiddle` ×2, `Callout`, `PracticeExercise` |
| `sections/ClientServerSection.tsx` | `ClientServerSection` | `StepReveal` |
| `sections/CacheableSection.tsx` | `CacheableSection` | `CodeFiddle` ×2 |
| `sections/LayeredSection.tsx` | `LayeredSection` | `MermaidDiagram` |
| `sections/UniformInterfaceSection.tsx` | `UniformInterfaceSection` | `CodeFiddle` ×2, `Callout`, `CodeChallenge` |
| `sections/CodeOnDemandSection.tsx` | `CodeOnDemandSection` | `Callout` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 7 secciones temáticas |
| `RestPrincipiosLesson.tsx` | Orden 13 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«7)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `json`, `javascript` — 8 bloques en draft)
- [ ] Crear 13 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `rest-principios` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `cache` |
| `next` | `typescript` |
