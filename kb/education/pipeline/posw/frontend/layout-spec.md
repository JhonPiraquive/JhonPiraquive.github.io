---
track: posw
slug: frontend
title: "Frontend: Tecnologías y Frameworks"
order: 9
prev: tokens
next: backend
---

## FrontendLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsFrontendSection />
<TecnologiasBaseSection />
<FrameworksSection />
<ComoElegirFrameworkSection />
<EjemplosComponentesSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 5 secciones temáticas + 6 bloques pedagógicos (11 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `QueEsFrontendSection`, `TecnologiasBaseSection`, `FrameworksSection`, `ComoElegirFrameworkSection`, `EjemplosComponentesSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L31–59). |
| 2 | ¿Qué es el frontend? | `sections/QueEsFrontendSection.tsx` | `MermaidDiagram`, `StepReveal`, `CodeFiddle` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | Tecnologías base | `sections/TecnologiasBaseSection.tsx` | `CodeFiddle`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Frameworks: React, Angular, Vue, Svelte | `sections/FrameworksSection.tsx` | `CompareTable`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Cómo elegir framework | `sections/ComoElegirFrameworkSection.tsx` | `MermaidDiagram`, `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «4)». |
| 6 | Ejemplos de componentes | `sections/EjemplosComponentesSection.tsx` | `CodeFiddle` ×3 | **Nuevo.** H2 sin prefijo «5)». React `javascript`, Angular `typescript`, Vue `javascript`. |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L320–329). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 9 | Reto integrador: reservas coworking | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + TarjetaSede (draft L363–403). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `backend` (draft L407–420). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="frontend" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `frontend` con 5 preguntas del draft L430–485:

| # | Tema |
|---|------|
| 1 | Código frontend en navegador del usuario |
| 2 | Consumir APIs del backend |
| 3 | React usa JSX y Virtual DOM |
| 4 | Next.js para SSR y SEO |
| 5 | Svelte compila sin Virtual DOM runtime |

**Infra:** `<QuizSection slug="frontend" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Frontend: Tecnologías y Frameworks Web \| POSW` |
| `seoDescription` | `Define el frontend, compara React, Angular, Vue y Svelte, elige framework con criterios reales y lee componentes que consumen APIs. Lección 9 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `javascript`, `typescript`. Bloques `jsx` del draft → `language="javascript"`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L33–39 |
| Prerrequisitos | prose `<ul>` | draft L41–45 |
| Intro | prose | draft L53 |
| `frontend-no-es-backend` | `Callout` | `variant="callout-info"`; title: «Frontend no es el backend»; children draft L55–58 |

### `QueEsFrontendSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L67–72 |
| `separacion-frontend-backend` | `MermaidDiagram` | chart draft L76–79 |
| `responsabilidades-step-reveal` | `StepReveal` | title: «Responsabilidades del frontend»; steps[5] draft L83–108 |
| `cargar-productos-fetch` | `CodeFiddle` | `language="javascript"`; title: «Consumir API desde JavaScript»; code draft L112–120 |

### `TecnologiasBaseSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L128–133 |
| `obtener-perfil-token` | `CodeFiddle` | `language="javascript"`; title: «Request autenticado desde frontend»; code draft L137–149 |
| `caso-spa-sin-ssr` | `Callout` | title: «Caso real: SPA sin SSR pierde SEO»; children draft L151–155 |
| `practica-separacion-mensajeria` | `PracticeExercise` | prompt: «Dibuja mentalmente la separación frontend/backend de una app de mensajería. ¿Qué corre en el navegador y qué en el servidor? ¿Cómo se comunican?»; hints: `["UI y fetch en navegador", "BD y lógica en servidor", "HTTP + JSON"]`; expectedKeywords: `["navegador", "servidor", "API", "HTTP"]`; successMessage: «Correcto. Frontend: UI, estado local, fetch. Backend: persistencia, auth, reglas de negocio. Comunicación por API REST.» |

### `FrameworksSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L173–178 |
| `tabla-frameworks` | `CompareTable` | headers draft L182; rows draft L184–190 |
| React vs librería vs framework | prose `<ul>` | draft L193–198 |
| `completa-caracteristicas-frameworks` | `CodeChallenge` | title: «Completa características de cada framework»; template draft L202–203; blanks draft L204–209 |

### `ComoElegirFrameworkSection`

| id | componente | props |
|----|------------|-------|
| `arbol-decision-framework` | `MermaidDiagram` | chart draft L220–223 |
| `tabla-criterios-eleccion` | `CompareTable` | headers draft L227; rows draft L229–235 |
| SSR y meta-frameworks | prose `<ul>` | draft L238–242 |
| `caso-framework-incorrecto` | `Callout` | title: «Caso real: framework incorrecto para el equipo»; children draft L244–248 |

### `EjemplosComponentesSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L256 |
| `tarjeta-producto-react` | `CodeFiddle` | `language="javascript"`; title: «React (JSX)»; code draft L260–274 |
| `tarjeta-producto-angular` | `CodeFiddle` | `language="typescript"`; title: «Angular»; code draft L278–300 |
| `tarjeta-producto-vue` | `CodeFiddle` | `language="javascript"`; title: «Vue 3 (Composition API)»; code draft L304–314 |
| Patrón común | prose | draft L316 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L324–329 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-ssr-react` | `PracticeExercise` | prompt: «Un proyecto necesita SEO fuerte y el equipo tiene experiencia en React. ¿Qué framework base y meta-framework elegirías según el árbol de decisión?»; hints: `["SSR para crawlers", "Meta-framework de React"]`; expectedKeywords: `["React", "Next.js", "SSR", "SEO"]`; successMessage: «Correcto. React como base + Next.js para server-side rendering e indexación en buscadores.» |
| `comprension-precio-backend` | `PracticeExercise` | prompt: «¿Por qué no debes calcular el precio final con descuento solo en el frontend antes de enviar el pago?»; hints: `["Cliente manipulable", "Fuente de verdad", "Validación en servidor"]`; expectedKeywords: `["backend", "validación", "manipular", "servidor"]`; successMessage: «Correcto. El frontend es manipulable; el backend debe recalcular y validar precios y stock antes de procesar el pago.» |
| `comprension-react-angular` | `PracticeExercise` | prompt: «Compara React y Angular: ¿cuál es librería vs framework completo y qué implica para un proyecto nuevo?»; hints: `["React = decisiones adicionales", "Angular = todo integrado", "Curva de aprendizaje"]`; expectedKeywords: `["librería", "framework", "routing", "TypeScript"]`; successMessage: «Correcto. React es librería (eliges routing/estado/build); Angular es framework opinionado con TS, módulos y DI integrados.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Propón el stack frontend de una app de reservas de coworking»; tareas 1–5 + criterio éxito (draft L367–377) |
| `reto-tarjeta-sede` | `CodeFiddle` | `language="javascript"`; title: «Componente TarjetaSede (JSX)»; code draft L379–390 |
| `reto-coworking-integrador` | `PracticeExercise` | prompt: «Implementa el reto de coworking: elige React+Next.js (justifica), escribe fetch con loading/error para GET /api/v1/sedes y lista dos errores a evitar.»; hints: `["SSR híbrido para SEO en sedes", "Equipo con 2 devs React", "Estados: loading, error, data", "Evitar Angular con junior sin TS"]`; expectedKeywords: `["Next.js", "SSR", "loading", "error", "fetch"]`; successMessage: «Excelente. Decisión fundamentada en equipo, SEO y plazo con componente y consumo de API bien estructurado.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L411 |
| Ideas clave | `<ul>` 4 viñetas draft L413–418 |
| Siguiente paso | enlace `backend` draft L420 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="frontend" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/QueEsFrontendSection.tsx` | `QueEsFrontendSection` | `MermaidDiagram`, `StepReveal`, `CodeFiddle` |
| `sections/TecnologiasBaseSection.tsx` | `TecnologiasBaseSection` | `CodeFiddle`, `Callout`, `PracticeExercise` |
| `sections/FrameworksSection.tsx` | `FrameworksSection` | `CompareTable`, `CodeChallenge` |
| `sections/ComoElegirFrameworkSection.tsx` | `ComoElegirFrameworkSection` | `MermaidDiagram`, `CompareTable`, `Callout` |
| `sections/EjemplosComponentesSection.tsx` | `EjemplosComponentesSection` | `CodeFiddle` ×3 |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 5 secciones temáticas |
| `FrontendLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«5)»)
- [ ] Migrar todo código → `CodeFiddle` (`javascript`, `typescript` — 6 bloques en draft; jsx → javascript)
- [ ] Crear 11 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `frontend` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `tokens` |
| `next` | `backend` |
