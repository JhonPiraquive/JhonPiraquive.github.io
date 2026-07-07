---
track: posw
slug: cache
title: "Caché en Aplicaciones Web"
order: 11
prev: backend
next: rest-principios
---

## CacheLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsCacheSection />
<TiposCacheSection />
<TecnologiasCacheSection />
<HeadersCacheSection />
<CuandoUsarCacheSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 5 secciones temáticas + 6 bloques pedagógicos (11 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `QueEsCacheSection`, `TiposCacheSection`, `TecnologiasCacheSection`, `HeadersCacheSection`, `CuandoUsarCacheSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L31–59). |
| 2 | ¿Qué es la caché? | `sections/QueEsCacheSection.tsx` | `CompareTable`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | Tipos de caché | `sections/TiposCacheSection.tsx` | `MermaidDiagram`, `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Tecnologías de caché | `sections/TecnologiasCacheSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×3, `StepReveal` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Headers HTTP de caché | `sections/HeadersCacheSection.tsx` | `CodeFiddle` ×2, `CompareTable`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «4)». `http` ×2. |
| 6 | Cuándo usar caché | `sections/CuandoUsarCacheSection.tsx` | `CompareTable`, `Callout`, `CodeFiddle` | **Nuevo.** H2 sin prefijo «5)». `json` ×1. |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L359–364). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 9 | Reto integrador: API de noticias | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + cache-aside (draft L398–444). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `rest-principios` (draft L448–461). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="cache" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `cache` con 5 preguntas del draft L469–527:

| # | Tema |
|---|------|
| 1 | Cache Hit Rate = Hits / Total |
| 2 | `Cache-Control: no-store` para sensibles |
| 3 | Cache MISS consulta fuente + SET |
| 4 | Redis estándar en servidor |
| 5 | Assets con hash → immutable + max-age largo |

**Infra:** `<QuizSection slug="cache" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Caché en Aplicaciones Web: Redis, CDN y Headers \| POSW` |
| `seoDescription` | `Aprende tipos de caché, Cache Hit Rate, patrón cache-aside con Redis, headers Cache-Control y estrategias de invalidación. Lección 11 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `http`, `json`, `javascript`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L35–39 |
| Prerrequisitos | prose `<ul>` | draft L43–45 |
| Intro | prose | draft L53 |
| `invalidar-cache-dificil` | `Callout` | `variant="callout-info"`; title: «Invalidar caché es difícil»; children draft L56–58 |

### `QueEsCacheSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L69–72 |
| Analogía apuntes | prose | draft L76 |
| `metricas-cache` | `CompareTable` | headers draft L82; rows draft L84–88 |
| `practica-hit-rate` | `PracticeExercise` | prompt: «De 10 000 requests, 9 200 fueron HIT y 800 MISS. Calcula el Cache Hit Rate. ¿Cumple el objetivo de > 90%? ¿Qué implica para la base de datos?»; hints: `["Hits / Total × 100", "9200/10000", "Menos consultas a BD"]`; expectedKeywords: `["92%", "90%", "HIT", "base de datos"]`; successMessage: «Correcto. Hit Rate = 92%; cumple > 90% y reduce drásticamente consultas a la fuente original.» |

### `TiposCacheSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L109–112 |
| `arquitectura-tipos-cache` | `MermaidDiagram` | chart draft L117–119 |
| `tabla-tipos-cache` | `CompareTable` | headers draft L125; rows draft L127–131 |
| `caso-black-friday` | `Callout` | title: «E-commerce: catálogo sin caché tumba PostgreSQL»; children draft L137–140 |

### `TecnologiasCacheSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L150–152 |
| `flujo-cache-aside` | `MermaidDiagram` | chart draft L157–159 |
| `cache-aside-redis` | `CodeFiddle` | `language="javascript"`; title: «Cache-aside con Redis (Node.js)»; code draft L164–186 |
| `invalidacion-event-based` | `CodeFiddle` | `language="javascript"`; title: «Invalidación event-based»; code draft L191–201 |
| `service-worker-basico` | `CodeFiddle` | `language="javascript"`; title: «Service Worker básico»; code draft L206–214 |
| `pasos-cache-aside` | `StepReveal` | title: «Pasos del patrón cache-aside»; steps[5] draft L220–242 |

### `HeadersCacheSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L253–256 |
| `asset-estatico-cacheable` | `CodeFiddle` | `language="http"`; title: «Asset estático cacheable»; code draft L261–267 |
| `dato-sensible-no-cacheable` | `CodeFiddle` | `language="http"`; title: «Dato sensible no cacheable»; code draft L272–276 |
| `tabla-directivas-cache-control` | `CompareTable` | headers draft L282; rows draft L284–290 |
| `completa-directivas-cache` | `CodeChallenge` | title: «Completa las directivas Cache-Control»; template draft L298; blanks draft L299–303 |

### `CuandoUsarCacheSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L314–316 |
| `tabla-que-cachear` | `CompareTable` | headers draft L322; rows draft L324–329 |
| `caso-saas-cache-privado` | `Callout` | title: «SaaS analytics: datos de usuario filtrados»; children draft L335–338 |
| `producto-cacheado-json` | `CodeFiddle` | `language="json"`; title: «Producto en caché (JSON)»; code draft L343–351 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L359–364 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-no-store-sesion` | `PracticeExercise` | prompt: «¿Qué header HTTP usarías para un token de sesión en GET /api/v1/usuario/me y por qué?»; hints: `["no-store", "Datos sensibles", "No compartir entre usuarios"]`; expectedKeywords: `["no-store", "private", "sensible", "token"]`; successMessage: «Correcto. no-store (y private) evita que proxies o navegador persistan datos de sesión.» |
| `comprension-invalidacion-precio` | `PracticeExercise` | prompt: «Actualizas el precio de un producto en BD pero los usuarios siguen viendo el precio viejo. ¿Qué falló en la estrategia de caché y cómo lo corriges?»; hints: `["Clave Redis producto:42", "Invalidación event-based", "del al UPDATE"]`; expectedKeywords: `["invalidar", "Redis", "del", "TTL"]`; successMessage: «Correcto. Falta invalidar la clave al actualizar; await client.del(\`producto:${id}\`) tras el UPDATE.» |
| `comprension-cdn-vs-redis` | `PracticeExercise` | prompt: «¿Cuándo elegirías CDN vs Redis server-side para acelerar GET /api/v1/articulos con 50k req/hora?»; hints: `["CDN = assets estáticos cerca del usuario", "Redis = respuestas API dinámicas", "80% mismos artículos"]`; expectedKeywords: `["Redis", "servidor", "API", "CDN", "estático"]`; successMessage: «Correcto. Redis cache-aside para la API dinámica; CDN para imágenes/assets; navegador con headers para estáticos.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Optimiza el rendimiento de una API de noticias»; tareas 1–5 + criterio éxito (draft L402–412) |
| `reto-cache-aside-noticias` | `CodeFiddle` | `language="javascript"`; title: «Cache-aside e invalidación para artículos»; code draft L415–430 |
| `reto-noticias-integrador` | `PracticeExercise` | prompt: «Implementa el reto de noticias: claves Redis, TTL, cache-aside con invalidación y headers para portada vs /usuario/me.»; hints: `["articulo:{id} TTL 600s", "articulos:destacados para listado", "Portada: immutable + max-age largo", "/usuario/me: no-store"]`; expectedKeywords: `["Redis", "TTL", "no-store", "immutable", "invalidar"]`; successMessage: «Excelente. Has diseñado una estrategia de caché con separación pública/privada y métricas.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L452 |
| Ideas clave | `<ul>` 4 viñetas draft L456–459 |
| Siguiente paso | enlace `rest-principios` draft L461 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="cache" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/QueEsCacheSection.tsx` | `QueEsCacheSection` | `CompareTable`, `PracticeExercise` |
| `sections/TiposCacheSection.tsx` | `TiposCacheSection` | `MermaidDiagram`, `CompareTable`, `Callout` |
| `sections/TecnologiasCacheSection.tsx` | `TecnologiasCacheSection` | `MermaidDiagram`, `CodeFiddle` ×3, `StepReveal` |
| `sections/HeadersCacheSection.tsx` | `HeadersCacheSection` | `CodeFiddle` ×2, `CompareTable`, `CodeChallenge` |
| `sections/CuandoUsarCacheSection.tsx` | `CuandoUsarCacheSection` | `CompareTable`, `Callout`, `CodeFiddle` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 5 secciones temáticas |
| `CacheLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«5)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `json`, `javascript` — 7 bloques en draft)
- [ ] Crear 11 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `cache` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `backend` |
| `next` | `rest-principios` |
