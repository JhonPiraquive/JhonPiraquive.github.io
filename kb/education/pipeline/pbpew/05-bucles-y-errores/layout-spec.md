---
track: pbpew
slug: 05-bucles-y-errores
title: "Bucles y manejo de errores en JavaScript: for, while, do-while y try/catch"
order: 5
prev: "04-operadores-y-decisiones"
next: "06-funciones-y-callbacks"
---

## BuclesYErroresLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<BucleForSection />
<BucleWhileSection />
<BucleDoWhileSection />
<BreakContinueSection />
<TryCatchSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizSection />
```

Imports a añadir en `BuclesYErroresLesson.tsx`: `ObjetivosSection`, `BucleWhileSection`, `BucleDoWhileSection`, `BreakContinueSection`, `TryCatchSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | **Nuevo.** Intro prose (draft L37–41) + `<ul>` objetivos L20–26. Callout «dashboard con pestaña congelada» (draft L43–47). |
| 2 | El bucle for: repetición con contador conocido | `sections/BucleForSection.tsx` | `StepReveal`, `MermaidDiagram`, `CodeFiddle` ×3, `Callout`, `PracticeExercise` | **Expandir** stub actual. H3 «Partes del bucle for». Heading según lesson-spec. |
| 3 | El bucle while: repetir mientras se cumpla la condición | `sections/BucleWhileSection.tsx` | `CodeFiddle`, `Callout`, `PracticeExercise` | **Nuevo.** Draft L133–160. |
| 4 | El bucle do...while: garantizar al menos una ejecución | `sections/BucleDoWhileSection.tsx` | `CodeFiddle`, `CompareTable`, `MermaidDiagram`, `PracticeExercise` | **Nuevo.** Draft L164–198. |
| 5 | break y continue: control de flujo dentro del bucle | `sections/BreakContinueSection.tsx` | `CompareTable`, `CodeFiddle` ×2, `MermaidDiagram`, `Callout`, `PracticeExercise`, `CodeChallenge` | **Nuevo.** Draft L202–268. Sin backticks en H2. |
| 6 | Manejo de errores con try, catch, finally y throw | `sections/TryCatchSection.tsx` | H3 Bucles infinitos, `CodeFiddle` ×5, `MermaidDiagram`, `Callout` ×2, `PracticeExercise` ×2, `CodeChallenge` | **Nuevo.** H3 «Bucles infinitos» (draft L272–293) al inicio; H3 «Errores en tiempo de ejecución» con tabla tipos (prose `<table>` draft L303–308); resto draft L297–397. |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Actualizar** viñetas draft L401–409. Preview lección 06. |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L415). Ejercicios apilados `my-8` cada uno. |
| 9 | Reto integrador: validador de PIN con reintentos | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + reglas numeradas (draft L445–512). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Párrafo cierre + ideas clave (draft L531–539) + siguiente paso `06-funciones-y-callbacks`. |
| 11 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="05-bucles-y-errores" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `05-bucles-y-errores` con 5 preguntas del draft L547–605:

| # | Tema |
|---|------|
| 1 | `while` con condición falsa al inicio (`x = 5`) → cero ejecuciones |
| 2 | Efecto de `continue` dentro de un bucle |
| 3 | Salida con `break` en `for` (`i === 1`) → solo imprime `0` |
| 4 | `finally` se ejecuta siempre |
| 5 | `throw new Error(...)` para división por cero |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code`. No usar `CodeBlock`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | párrafo draft L37–41 (bucles + try/catch, enlace lección 04 y 06) |
| Objetivos | `<ul>` | 5 ítems draft L20–26 |
| `caso-dashboard-congelado` | `Callout` | `variant="callout-info"`; title: «Caso real: dashboard con pestaña congelada»; children lesson-spec L59–61 |

### `BucleForSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | definición bucle/iteración (draft L41) |
| `for-sintaxis` | `CodeFiddle` | `language="javascript"`; code draft L58–62 |
| Partes del for (H3) | prose `<ol>` | 3 partes draft L66–68 |
| `anatomia-for` | `StepReveal` | title: «Anatomía del bucle for»; steps[4] draft L73–90 |
| `flujo-for` | `MermaidDiagram` | chart draft L95 |
| `for-iteracion` | `CodeFiddle` | `language="javascript"`; code draft L99–104 |
| Patrón acumulador | prose | draft L106 |
| `for-acumulador` | `CodeFiddle` | `language="javascript"`; code draft L109–115 |
| `error-off-by-one` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children lesson-spec L66–68 |
| `for-vs-while` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L124–129 |

### `BucleWhileSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | condición previa, cero ejecuciones posibles (draft L135–136) |
| `while-basico` | `CodeFiddle` | `language="javascript"`; code draft L138–144 |
| Uso abierto | prose | draft L146 |
| `error-bucle-infinito` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children lesson-spec L73–75 |
| `while-cuenta-regresiva` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L155–160 |

### `BucleDoWhileSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | evaluación posterior, mínimo una ejecución (draft L166) |
| `do-while-basico` | `CodeFiddle` | `language="javascript"`; code draft L169–175 |
| `comparativa-bucles` | `CompareTable` | headers + rows draft L179–184 |
| `decision-tipo-bucle` | `MermaidDiagram` | chart draft L189 |
| `do-while-garantia` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L193–198 |

### `BreakContinueSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose + `<ul>` | definiciones break/continue (draft L204–207) |
| `break-vs-continue` | `CompareTable` | headers + rows draft L211–215 |
| `break-continue-ejemplo` | `CodeFiddle` | `language="javascript"`; code draft L219–226 |
| Combinar bucle + condición | prose | draft L228 |
| `notas-filtro-continue` | `CodeFiddle` | `language="javascript"`; code draft L231–239 |
| `flujo-break-continue` | `MermaidDiagram` | chart draft L243 |
| `error-break-continue` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children lesson-spec L80–82 |
| `continue-3-y-5` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L253–258 |
| `completa-bucle-for` | `CodeChallenge` | title, template, blanks draft L262–267 |

### `TryCatchSection`

| id | componente | props |
|----|------------|-------|
| **H3** Bucles infinitos | prose | draft L274 |
| `while-true-break` | `CodeFiddle` | `language="javascript"`; code draft L277–285; title opcional: «Salida de emergencia con break» |
| Producción | prose | draft L287 |
| `caso-checkout-bloqueado` | `Callout` | `variant="callout-info"`; title: «Caso real: checkout bloqueado»; children lesson-spec L87–89 |
| **H3** Errores en tiempo de ejecución | prose + `<table>` | tipos SyntaxError, ReferenceError, TypeError, RangeError (draft L299–310) |
| Bloques try/catch | prose `<ul>` | try, catch, finally, throw (draft L313–317) |
| `flujo-try-catch` | `MermaidDiagram` | chart draft L321 |
| `dividir-try-catch` | `CodeFiddle` | `language="javascript"`; code draft L325–340 |
| Validación + throw | prose | draft L342 |
| `parse-edad-throw` | `CodeFiddle` | `language="javascript"`; code draft L345–353 |
| Errores típicos | prose | draft L355 |
| `errores-demo-comentados` | `CodeFiddle` | `language="javascript"`; code draft L358–365 |
| `buenas-practicas-catch` | `Callout` | `variant="callout-info"`; title: «Buenas prácticas en catch»; children lesson-spec L94–96 |
| `dividir-practica` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L374–379 |
| `completa-try-catch` | `CodeChallenge` | title, template, blanks draft L382–388 |
| `catch-vacio` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L392–397 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 7 puntos draft L401–409 |
| Preview | enlace textual `06-funciones-y-callbacks` |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L415 |
| `comprension-while-x5` | `PracticeExercise` | draft L418–423 |
| `comprension-break-for` | `PracticeExercise` | draft L426–431 |
| `comprension-orden-try` | `PracticeExercise` | draft L434–439 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | 6 reglas + datos de prueba + criterio éxito (draft L445–512) |
| `reto-pin-esqueleto` | `CodeFiddle` | `language="javascript"`; code draft L461–510; `title`: «Esqueleto — validador de PIN» |
| `reto-pin` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L515–525; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L531–532 |
| Ideas clave | `<ul>` 5 viñetas draft L535–539 |
| Siguiente paso | `06-funciones-y-callbacks` — funciones, callbacks, `repetir(n, fn)` (draft L541) |

### `MiniquizSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="05-bucles-y-errores" track="pbpew" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` |
| `sections/BucleWhileSection.tsx` | `BucleWhileSection` | `CodeFiddle`, `Callout`, `PracticeExercise` |
| `sections/BucleDoWhileSection.tsx` | `BucleDoWhileSection` | `CodeFiddle`, `CompareTable`, `MermaidDiagram`, `PracticeExercise` |
| `sections/BreakContinueSection.tsx` | `BreakContinueSection` | `CompareTable`, `CodeFiddle` ×2, `MermaidDiagram`, `Callout`, `PracticeExercise`, `CodeChallenge` |
| `sections/TryCatchSection.tsx` | `TryCatchSection` | H3 ×2, `CodeFiddle` ×5, `MermaidDiagram`, `Callout` ×2, `PracticeExercise` ×2, `CodeChallenge` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `BucleForSection.tsx` | Reemplazar stub monolítico por draft L51–129: `StepReveal`, `MermaidDiagram`, 3 `CodeFiddle`, `Callout`, `PracticeExercise` |
| `ResumenSection.tsx` | Ampliar a 7 viñetas draft L401–409 |
| `BuclesYErroresLesson.tsx` | Orden 11 secciones + imports |
| `lesson-meta.ts` | `title` y `seoTitle` → lesson-spec L25; `seoDescription` desde lesson-spec |

## Checklist lesson-developer

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] Headings públicos según lesson-spec (sin backticks en H2)
- [ ] 12 bloques `<!-- code: javascript -->` → `CodeFiddle` (no `CodeBlock`)
- [ ] Crear 9 secciones nuevas listadas arriba
- [ ] Expandir `BucleForSection` y `ResumenSection`
- [ ] Registrar quiz `05-bucles-y-errores` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `BuclesYErroresLesson.tsx` con orden y imports
- [ ] Mínimos pedagogy: 3+ `PracticeExercise`, 2 `CodeChallenge`, 4 `MermaidDiagram`, 1 `StepReveal`, 1 `Quiz` (5 preguntas)

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `04-operadores-y-decisiones` |
| `next` | `06-funciones-y-callbacks` |
