---
track: pbpew
slug: 11-asincronia
title: "Sincronía vs asincronía · temporizadores · promesas · async/await"
order: 11
prev: "10-dom-y-eventos"
next: "12-ajax-fetch"
---

## AsincroniaLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />                          {/* nuevo */}
<QueCambiaConLoSection />
<SettimeoutYSetintervalSection />
<ThenCatchFinallySection />
<AsyncAwaitSection />
<TemplateLiteralsSection />
<ResumenSection />
<CompruebaTuComprensionSection />             {/* nuevo */}
<RetoIntegradorSection />                     {/* nuevo */}
<CierreSection />                             {/* nuevo */}
<MiniquizSection />                           {/* nuevo */}
```

Imports a añadir en `AsincroniaLesson.tsx`: `ObjetivosSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | — | **Nuevo.** Prose intro + `<ul>` 6 objetivos (draft L26–33) + prerrequisitos (draft L35–40). |
| 2 | ¿Qué cambia con lo asíncrono? | `sections/QueCambiaConLoSection.tsx` | `CompareTable`, `Callout`, `StepReveal`, `CodeFiddle`, `PracticeExercise` ×2 | Poblar stub. Event loop `<ol>` prose (draft L52–57). |
| 3 | setTimeout y setInterval | `sections/SettimeoutYSetintervalSection.tsx` | `Callout` ×2, `CodeFiddle` ×2, H3 Promesas, `MermaidDiagram`, `CodeFiddle` ×2, `StepReveal`, `CodeChallenge`, `PracticeExercise` | Poblar stub. Bloque más denso (timers + promesas, draft L133–242). |
| 4 | then, catch, finally | `sections/ThenCatchFinallySection.tsx` | `Callout`, `CodeFiddle`, `CodeChallenge`, `PracticeExercise` | Poblar stub (draft L246–286). |
| 5 | async / await | `sections/AsyncAwaitSection.tsx` | `CompareTable`, `MermaidDiagram`, `CodeFiddle` ×3, `CodeChallenge`, `Callout`, `PracticeExercise` | Poblar stub (draft L290–379). |
| 6 | Template literals | `sections/TemplateLiteralsSection.tsx` | `CodeFiddle` ×2, `MermaidDiagram`, `PracticeExercise` | Poblar stub (draft L383–422). |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas 6 puntos + preview lección 12 (draft L428–433). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L437–439). Ejercicios apilados `my-8` cada uno. |
| 9 | Reto integrador: panel de carga con reintentos | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + lista 5 tareas + criterio éxito (draft L469–479). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Prose: párrafo cierre + ideas clave (6 viñetas) + siguiente paso `12-ajax-fetch`. Sin quiz inline (patrón PBPEW 06). |
| 11 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="11-asincronia" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `11-asincronia` con 5 preguntas del draft L555–614:

| # | Tema |
|---|------|
| 1 | Orden impresión A C B (`setTimeout` delay 0) |
| 2 | Retorno de `setInterval` (id numérico) |
| 3 | Alcance de `.catch` en cadena de promesas |
| 4 | Uso correcto de `await` (solo dentro de `async`) |
| 5 | Template literal con interpolación (backticks) |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| Párrafo intro | «Al finalizar la lección, el estudiante podrá:» (draft L26) |
| Lista objetivos | 6 viñetas draft L28–33 |
| Prerrequisitos | párrafo + `<ul>` draft L37–40 |

### `QueCambiaConLoSection`

| id | componente | props |
|----|------------|-------|
| Intro sync/async | prose | definición, hilo único, Web APIs (draft L46–50) |
| Event loop | prose `<ol>` | 4 pasos (draft L52–57) |
| Callback repaso | prose | enlace lección 06 (draft L61) |
| `sync-vs-async` | `CompareTable` | headers: Criterio, Sincrónico, Asíncrono; rows draft L66–71 |
| `caso-dashboard-congela` | `Callout` | `variant="callout-info"`; title: «Caso real: dashboard que se congela»; children draft L77 |
| `orden-impresion-acb` | `StepReveal` | title: «Orden de impresión A → C → B»; steps[4] draft L83–99 |
| `timeout-order-demo` | `CodeFiddle` | `language="javascript"`; code draft L105–112 |
| `practice-settimeout-cola` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L117–120 |
| `practice-sync-vs-async-analogia` | `PracticeExercise` | analogía comida/móvil draft L125–128 |

### `SettimeoutYSetintervalSection`

| id | componente | props |
|----|------------|-------|
| Intro timers | prose | `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval` (draft L135–141) |
| `caso-polling-clearinterval` | `Callout` | `variant="callout-info"`; title: «Caso real: polling sin clearInterval»; children draft L146 |
| `clear-timeout-demo` | `CodeFiddle` | `language="javascript"`; code draft L151–157 |
| `interval-tick-demo` | `CodeFiddle` | `language="javascript"`; code draft L162–170 |
| `errores-frecuentes-timers` | `Callout` | `variant="callout-warning"`; title: «Errores frecuentes»; children draft L176 |
| Promesas (H3) | `<h3>` | «Promesas» — `mt-6 mb-2 text-xl font-semibold` |
| Intro Promise | prose | estados, constructor, patrón `esperar(ms)` (draft L181–185) |
| `mermaid-promise-states` | `MermaidDiagram` | chart draft L189 |
| `esperar-promesa-demo` | `CodeFiddle` | `language="javascript"`; code draft L194–204 |
| `step-reveal-promesa-pending` | `StepReveal` | title: «Promesa pendiente → fulfilled»; steps[3] draft L211–222 |
| `code-challenge-esperar-encadenamiento` | `CodeChallenge` | title, template, blanks draft L228–233 |
| `practice-esperar-then` | `PracticeExercise` | prompt, hints, keywords draft L238–241 |

### `ThenCatchFinallySection`

| id | componente | props |
|----|------------|-------|
| Intro then/catch/finally | prose | viñetas + preview lección 12 (draft L248–252) |
| `callout-return-then` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — olvidar return en .then»; children draft L257 |
| `fetch-chain-demo` | `CodeFiddle` | `language="javascript"`; code draft L262–266 |
| `code-challenge-fetch-chain` | `CodeChallenge` | blanks `then`, `then`, `catch` draft L272–277 |
| `practice-event-loop-order` | `PracticeExercise` | orden e→c→a→b→d draft L282–285 |

### `AsyncAwaitSection`

| id | componente | props |
|----|------------|-------|
| Intro async/await | prose | `async function`, `await`, `try/catch` (draft L292–296) |
| `compare-then-vs-async-await` | `CompareTable` | Estilo, Errores, Cuándo usar draft L301–305 |
| `mermaid-async-cargar-flow` | `MermaidDiagram` | chart draft L310 |
| `async-cargar-demo` | `CodeFiddle` | `language="javascript"`; code draft L315–325 |
| `tres-pasos-demo` | `CodeFiddle` | `language="javascript"`; code draft L330–342 |
| `code-challenge-async-await` | `CodeChallenge` | blanks `async`, `await` draft L348–352 |
| `callout-await-fuera-async` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — await fuera de async»; children draft L358 |
| `await-syntax-malo-bien` | `CodeFiddle` | `language="javascript"`; code draft L363–370 |
| `practice-tres-pasos` | `PracticeExercise` | implementar `tresPasos` draft L375–378 |

### `TemplateLiteralsSection`

| id | componente | props |
|----|------------|-------|
| Intro template literals | prose | backticks, `${}`, error comillas (draft L385–387) |
| `saludo-template-demo` | `CodeFiddle` | `language="javascript"`; code draft L391–400 |
| `puntos-template-demo` | `CodeFiddle` | `language="javascript"`; code draft L405–408 |
| `mermaid-event-loop-sequence` | `MermaidDiagram` | chart draft L413 |
| `practice-template-literal` | `PracticeExercise` | mensaje con interpolación draft L418–421 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos + preview lección 12 draft L428–433 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L437–439 |
| `practice-setinterval-1-5` | `PracticeExercise` | setInterval 1–5 + clearInterval draft L442–446 |
| `practice-catch-vs-finally` | `PracticeExercise` | `.catch` vs `.finally` draft L450–454 |
| `practice-async-sin-catch` | `PracticeExercise` | unhandled rejection draft L458–462 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + lista `<ol>` | «Panel de carga con reintentos»; 5 tareas + criterio éxito (draft L471–479) |
| `reto-esqueleto-carga` | `CodeFiddle` | `language="javascript"`; code draft L483–518; `title`: «Esqueleto — cargarConReintentos» |
| `reto-panel-carga` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L523–531; `rows={10}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L538–539 |
| Ideas clave | `<ul>` 6 viñetas draft L542–547 |
| Siguiente paso | enlace textual `12-ajax-fetch` draft L549 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="11-asincronia" track="pbpew" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `QueCambiaConLoSection.tsx` | Poblar: `CompareTable`, `Callout`, `StepReveal`, `CodeFiddle`, 2 `PracticeExercise` |
| `SettimeoutYSetintervalSection.tsx` | Poblar: 2 `Callout`, 4 `CodeFiddle`, H3 Promesas, `MermaidDiagram`, `StepReveal`, `CodeChallenge`, `PracticeExercise` |
| `ThenCatchFinallySection.tsx` | Poblar: `Callout`, `CodeFiddle`, `CodeChallenge`, `PracticeExercise` |
| `AsyncAwaitSection.tsx` | Poblar: `CompareTable`, `MermaidDiagram`, 3 `CodeFiddle`, `CodeChallenge`, `Callout`, `PracticeExercise` |
| `TemplateLiteralsSection.tsx` | Poblar: 2 `CodeFiddle`, `MermaidDiagram`, `PracticeExercise` |
| `ResumenSection.tsx` | Viñetas draft L428–433 |
| `AsincroniaLesson.tsx` | Orden 11 secciones + imports según bloque superior |

## CodeFiddle — inventario (11 bloques)

| id | sección | draft líneas |
|----|---------|--------------|
| `timeout-order-demo` | QueCambiaConLo | L105–112 |
| `clear-timeout-demo` | SettimeoutYSetinterval | L151–157 |
| `interval-tick-demo` | SettimeoutYSetinterval | L162–170 |
| `esperar-promesa-demo` | SettimeoutYSetinterval | L194–204 |
| `fetch-chain-demo` | ThenCatchFinally | L262–266 |
| `async-cargar-demo` | AsyncAwait | L315–325 |
| `tres-pasos-demo` | AsyncAwait | L330–342 |
| `await-syntax-malo-bien` | AsyncAwait | L363–370 |
| `saludo-template-demo` | TemplateLiterals | L391–400 |
| `puntos-template-demo` | TemplateLiterals | L405–408 |
| `reto-esqueleto-carga` | RetoIntegrador | L483–518 |

## Checklist lesson-developer

- [ ] H2 SEO según lesson-spec §Jerarquía tipográfica
- [ ] H3: «Promesas» (bajo temporizadores)
- [ ] Migrar todo código → `CodeFiddle` (11 bloques en draft)
- [ ] Crear `ObjetivosSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Poblar 5 secciones stub existentes con bloques del draft
- [ ] Registrar quiz `11-asincronia` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `AsincroniaLesson.tsx` con orden y imports (11 secciones)
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec §SEO si aplica

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `10-dom-y-eventos` |
| `next` | `12-ajax-fetch` |
