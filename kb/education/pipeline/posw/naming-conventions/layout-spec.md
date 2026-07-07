---
track: posw
slug: naming-conventions
title: "Convenciones de nomenclatura en desarrollo web"
order: 20
prev: principios-solid
next: ia-en-desarrollo-web
---

## NamingConventionsLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<PorQueImportaSection />
<CamelCaseSection />
<PascalCaseSection />
<SnakeCaseSection />
<KebabCaseSection />
<UpperSnakeCaseSection />
<ResumenContextoSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosSection`, `PorQueImportaSection`, `CamelCaseSection`, `PascalCaseSection`, `SnakeCaseSection`, `KebabCaseSection`, `UpperSnakeCaseSection`, `ResumenContextoSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout Karlton (draft L30–58). |
| 2 | Por qué importa el naming en equipos | `sections/PorQueImportaSection.tsx` | `CodeFiddle`, `Callout` | **Nuevo.** H2 sin prefijo «1)». `javascript` ×1. |
| 3 | camelCase: variables, funciones y JSON | `sections/CamelCaseSection.tsx` | `CodeFiddle` ×2 | **Nuevo.** H2 sin prefijo «2)». `typescript`, `json`. |
| 4 | PascalCase: clases, tipos y componentes React | `sections/PascalCaseSection.tsx` | `CodeFiddle` | **Nuevo.** H2 sin prefijo «3)». `typescript` ×1. |
| 5 | snake_case: tablas y columnas SQL | `sections/SnakeCaseSection.tsx` | `CodeFiddle` | **Nuevo.** H2 sin prefijo «4)». `sql` ×1. |
| 6 | kebab-case: URLs, CSS y archivos | `sections/KebabCaseSection.tsx` | `CodeFiddle` | **Nuevo.** H2 sin prefijo «5)». `plaintext` (HTTP draft L207). |
| 7 | UPPER_SNAKE_CASE: constantes y variables de entorno | `sections/UpperSnakeCaseSection.tsx` | `CodeFiddle` ×2 | **Nuevo.** H2 sin prefijo «6)». `typescript`, `bash`. |
| 8 | Convención por capa en una app web | `sections/ResumenContextoSection.tsx` | `MermaidDiagram`, `CompareTable`, `StepReveal`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «7)». |
| 9 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `CodeChallenge` ×1 | **Nuevo.** |
| 10 | Reto integrador: estandarizar mini e-commerce | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** OpenAPI esqueleto + enunciado (draft L323–384). |
| 11 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `ia-en-desarrollo-web` (draft L388–402). |
| 12 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="naming-conventions" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `naming-conventions` con 5 preguntas del draft L412–468:

| # | Tema |
|---|------|
| 1 | Funciones JS → camelCase |
| 2 | Componente React → PascalCase |
| 3 | Columnas SQL → snake_case |
| 4 | URL API → kebab-case |
| 5 | Constante global → UPPER_SNAKE_CASE |

**Infra:** `<QuizSection slug="naming-conventions" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `Convenciones de nomenclatura en web \| POSW` |
| `seoDescription` | `Aplica camelCase, PascalCase, snake_case y kebab-case por capa: TypeScript, SQL, JSON y URLs REST. Lección 20 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). HTTP → `plaintext` con title.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | draft L42–44 |
| Intro | prose | draft L52 |
| `callout-karlton` | `Callout` | `variant="callout-info"`; title: «El nombre es la primera documentación»; children draft L55–57 (lesson-spec L79–85) |

### `PorQueImportaSection`

| id | componente | props |
|----|------------|-------|
| `legibilidad-malo-vs-bueno` | `CodeFiddle` | `language="javascript"`; title: «Legibilidad: malo vs bueno»; code draft L69–79 |
| Anti-patrones | prose `<ul>` | draft L83–86 |
| `caso-monorepo-tres-estilos` | `Callout` | `variant="callout-warning"`; title: «Caso real: user_id, userId y UserID en el mismo flujo»; children draft L91–94 (lesson-spec L65–70) |

### `CamelCaseSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L104 |
| `camelcase-typescript` | `CodeFiddle` | `language="typescript"`; title: «camelCase en TypeScript»; code draft L107–120 |
| `camelcase-json-api` | `CodeFiddle` | `language="json"`; title: «JSON en APIs REST»; code draft L125–134 |

### `PascalCaseSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L144 |
| `pascalcase-typescript` | `CodeFiddle` | `language="typescript"`; title: «PascalCase: clases, tipos y componentes»; code draft L147–164 |
| Errores comunes | prose `<ul>` | draft L168–169 |

### `SnakeCaseSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L179 |
| `snakecase-sql` | `CodeFiddle` | `language="sql"`; title: «snake_case en SQL»; code draft L182–190 |
| Convención por capa | prose | draft L194 |

### `KebabCaseSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L204 |
| `kebabcase-urls` | `CodeFiddle` | `language="plaintext"`; title: «kebab-case en URLs HTTP»; code draft L207–214 |
| Errores comunes | prose `<ul>` | draft L218–219 |

### `UpperSnakeCaseSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L229 |
| `upper-snake-typescript` | `CodeFiddle` | `language="typescript"`; title: «Constantes globales»; code draft L232–236 |
| `upper-snake-env` | `CodeFiddle` | `language="bash"`; title: «Variables de entorno (.env)»; code draft L239–245 |
| Errores comunes | prose `<ul>` | draft L249 |

### `ResumenContextoSection`

| id | componente | props |
|----|------------|-------|
| `diagrama-naming-por-capa` | `MermaidDiagram` | chart draft L261 |
| `tabla-convencion-por-contexto` | `CompareTable` | headers draft L268; rows draft L269–276 |
| `step-cinco-estilos` | `StepReveal` | title: «Tarjeta de producto en cada convención»; steps[5] draft L284–290 |
| `practica-renombrar-usr-svc` | `PracticeExercise` | prompt draft L297; hints draft L298; expectedKeywords draft L299; successMessage draft L300 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-elige-convencion` | `CodeChallenge` | title: «Elige la convención correcta»; template draft L312; blanks draft L313–318 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Estandariza el naming de un mini-proyecto e-commerce»; código inconsistente + tareas 1–5 (draft L327–341) |
| `reto-openapi-productos` | `CodeFiddle` | `language="json"`; title: «Fragmento OpenAPI (camelCase)»; code draft L344–372 |
| `reto-ecommerce-naming` | `PracticeExercise` | prompt draft L376; hints draft L377–381; expectedKeywords draft L382; successMessage draft L383; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L392 |
| Ideas clave | `<ul>` 5 viñetas draft L396–400 |
| Siguiente paso | enlace `ia-en-desarrollo-web` draft L402 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="naming-conventions" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` |
| `sections/PorQueImportaSection.tsx` | `PorQueImportaSection` | `CodeFiddle`, `Callout` |
| `sections/CamelCaseSection.tsx` | `CamelCaseSection` | `CodeFiddle` |
| `sections/PascalCaseSection.tsx` | `PascalCaseSection` | `CodeFiddle` |
| `sections/SnakeCaseSection.tsx` | `SnakeCaseSection` | `CodeFiddle` |
| `sections/KebabCaseSection.tsx` | `KebabCaseSection` | `CodeFiddle` |
| `sections/UpperSnakeCaseSection.tsx` | `UpperSnakeCaseSection` | `CodeFiddle` |
| `sections/ResumenContextoSection.tsx` | `ResumenContextoSection` | `MermaidDiagram`, `CompareTable`, `StepReveal`, `PracticeExercise` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `CodeChallenge` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«7)»)
- [ ] Migrar todo código → `CodeFiddle` (`javascript`, `typescript`, `json`, `sql`, `bash`, `plaintext` para HTTP)
- [ ] Crear 12 secciones
- [ ] Registrar quiz `naming-conventions` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `principios-solid` |
| `next` | `ia-en-desarrollo-web` |
