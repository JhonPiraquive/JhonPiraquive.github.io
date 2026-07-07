---
track: pbpew
slug: 07-arrays-json-objetos
title: "Arrays, métodos útiles, JSON y objetos literales"
order: 7
prev: "06-funciones-y-callbacks"
next: "08-this-scope-clases"
---

## ArraysJsonObjetosLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<ArraysSection />
<ArrayCallbacksSection />                   {/* nuevo */}
<JsonSection />                             {/* nuevo */}
<ObjetosLiteralesSection />
<ResumenSection />
<CompruebaTuComprensionSection />           {/* nuevo */}
<RetoIntegradorSection />                   {/* nuevo */}
<CierreSection />                           {/* nuevo */}
<MiniquizSection />                         {/* nuevo */}
```

Imports a añadir en `ArraysJsonObjetosLesson.tsx`: `ObjetivosSection`, `ArrayCallbacksSection`, `JsonSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | — | **Nuevo.** Prose intro + `<ul>` 5 objetivos medibles + prerrequisitos (draft L19–37). |
| 2 | Arrays en JavaScript | `sections/ArraysSection.tsx` | `Callout`, `CodeFiddle` ×1 | Poblar stub. Índices, `length`, mutación `push`/`pop`/`shift`/`unshift` (draft L41–72). |
| 3 | Callbacks en métodos de array | `sections/ArrayCallbacksSection.tsx` | `CompareTable`, prose, `MermaidDiagram`, `CodeFiddle` ×2, `Callout` ×3, `CodeChallenge`, `PracticeExercise` ×2 | **Nuevo.** Conexión lección 6; `.forEach`/`.map`/`.filter`; preview `.reduce` (draft L74–168). |
| 4 | JSON: serialización y deserialización | `sections/JsonSection.tsx` | `StepReveal`, `MermaidDiagram`, `CodeFiddle` ×2, `Callout` ×2, `CodeChallenge`, `PracticeExercise` ×2 | **Nuevo.** `stringify`/`parse`; ciclo objeto→texto→objeto (draft L172–272). |
| 5 | Objetos literales y referencia | `sections/ObjetosLiteralesSection.tsx` | prose, `MermaidDiagram`, `CompareTable`, `CodeFiddle` ×3, `Callout`, `PracticeExercise` ×2 | Poblar stub. Acceso, métodos, referencia vs valor, spread, destructuración (draft L276–369). |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas 8 puntos (draft L375–382). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L386–388). Ejercicios apilados `my-8` cada uno. |
| 8 | Reto integrador: catálogo de cursos PBPEW | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + lista 6 tareas + criterio éxito (draft L416–452). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Prose: párrafo cierre + ideas clave (5 viñetas) + siguiente paso `08-this-scope-clases`. Sin quiz inline (patrón PBPEW 06). |
| 10 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="07-arrays-json-objetos" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `07-arrays-json-objetos` con 5 preguntas del draft L476–531:

| # | Tema |
|---|------|
| 1 | Qué devuelve `.map((x) => x / 10)` |
| 2 | Diferencia `push` vs `unshift` |
| 3 | Referencia: `a.x` tras `b.x = 5` |
| 4 | Para qué sirve `JSON.stringify` |
| 5 | Destructuración con valor por defecto `{ edad = 18 }` |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| Párrafo intro | «Al finalizar la lección, el estudiante podrá:» (draft L21) |
| Lista | 5 objetivos medibles draft L23–27 |
| Prerrequisitos | `<ul>` lecciones 01–06 + consola (draft L31–37) |

### `ArraysSection`

| id | componente | props |
|----|------------|-------|
| Intro array / índices | prose | definición, índice 0, `length`, índice fuera de rango → `undefined` (draft L43–47) |
| Mutación extremos | prose | `push`/`pop`/`shift`/`unshift` (draft L49–51) |
| `error-indice-vs-valor` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — índice vs valor»; children draft L55–56 |
| `arrays-indices-mutacion` | `CodeFiddle` | `language="javascript"`; code draft L61–71 |

### `ArrayCallbacksSection`

| id | componente | props |
|----|------------|-------|
| Callbacks intro | prose | conexión lección 6; tabla markdown omitida si hay `CompareTable` (draft L74–82) |
| `tabla-mutacion-vs-map-filter` | `CompareTable` | headers: Operación, ¿Modifica original?, ¿Devuelve nuevo array?, Ejemplo; rows draft L87–90 |
| forEach / map / filter | prose `<ul>` | tres viñetas método (draft L94–96) |
| Preview reduce/find | prose | mención breve `.reduce`, `.find`, `.some`, `.every` (draft L98) |
| `flujo-map-callback` | `MermaidDiagram` | chart draft L102 |
| `map-filter-forEach-ejemplo` | `CodeFiddle` | `language="javascript"`; code draft L107–116 |
| `caso-totales-cero-forEach` | `Callout` | `variant="callout-info"`; title: «Caso real: totales en cero tras forEach»; children draft L121–122 |
| `error-map-sin-asignar` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — map sin asignar»; children draft L127–128 |
| `error-callback-llaves-sin-return` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — return en callback con llaves»; children draft L133–134 |
| `reduce-preview-suma` | `CodeFiddle` | `language="javascript"`; `title`: «Preview — combinar con reduce»; code draft L139–142 |
| `duplicar-con-map-challenge` | `CodeChallenge` | title, template, blanks draft L147–151 |
| `comprension-forEach-vs-map` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L156–159 |
| `practice-filter-notas` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L164–167 |

### `JsonSection`

| id | componente | props |
|----|------------|-------|
| Definición JSON | prose | formato texto, APIs, `localStorage`; no funciones/`undefined`/comentarios (draft L174–177) |
| `stepreveal-ciclo-json` | `StepReveal` | title: «Ciclo JSON: de objeto a texto y de vuelta»; steps[5] draft L182–203 |
| `flujo-stringify-parse` | `MermaidDiagram` | chart draft L208 |
| `curso-stringify-parse` | `CodeFiddle` | `language="javascript"`; code draft L213–224 |
| `curso-json-ejemplo` | `CodeFiddle` | `language="json"`; `title`: «Mismo dato en JSON»; code draft L229–233 |
| `caso-carrito-revive-items` | `Callout` | `variant="callout-info"`; title: «Caso real: carrito que revive ítems eliminados»; children draft L238–239 |
| `error-stringify-funciones` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — stringify con funciones»; children draft L244–245 |
| `parse-json-challenge` | `CodeChallenge` | title, template, blanks draft L250–255 |
| `practice-orden-persistencia-carrito` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L260–263 |
| `practice-stringify-funciones` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L268–271 |

### `ObjetosLiteralesSection`

| id | componente | props |
|----|------------|-------|
| Definición objeto / acceso / métodos | prose | punto, corchetes, preview `this` lección 8 (draft L278–282) |
| Referencia vs valor / spread / destructuración | prose | copia superficial, spread, defaults (draft L284–294) |
| `diagrama-referencia-vs-spread` | `MermaidDiagram` | chart draft L298 |
| `tabla-referencia-vs-valor` | `CompareTable` | headers: Tipo, Asignación b = a, ¿Si b cambia el contenido, afecta a a?; rows draft L305–306 |
| `alumno-metodo-presentarse` | `CodeFiddle` | `language="javascript"`; code draft L312–322 |
| `referencia-vs-spread-copia` | `CodeFiddle` | `language="javascript"`; code draft L327–335 |
| `destructuracion-array-objeto` | `CodeFiddle` | `language="javascript"`; code draft L340–346 |
| `error-comparar-objetos-igualdad` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — comparar objetos con ===»; children draft L351–352 |
| `practice-destructuracion-persona` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L357–360 |
| `practice-push-vs-spread-copia` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L365–368 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 8 puntos draft L375–382 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | «Antes del cierre, verifica que puedes aplicar los conceptos de la lección.» (draft L388) |
| `comprension-indice-cero` | `PracticeExercise` | prompt, hints, keywords draft L392–395 |
| `comprension-referencia-objeto` | `PracticeExercise` | draft L400–403 |
| `comprension-push-vs-unshift` | `PracticeExercise` | draft L408–411 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + lista `<ol>` | «Catálogo de cursos PBPEW»; 6 tareas + criterio éxito (draft L418–438) |
| `reto-cursos-inicial` | `CodeFiddle` | `language="javascript"`; `title`: «Punto de partida — array cursos»; code draft L424–428 |
| `reto-catalogo-cursos` | `PracticeExercise` | prompt, 5 hints, keywords, successMessage draft L442–451; `rows={10}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L458 |
| Ideas clave | `<ul>` 5 viñetas draft L462–466 |
| Siguiente paso | enlace textual `08-this-scope-clases` draft L468 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="07-arrays-json-objetos" track="pbpew" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/ArrayCallbacksSection.tsx` | `ArrayCallbacksSection` | `CompareTable`, `MermaidDiagram`, `CodeFiddle` ×2, `Callout` ×3, `CodeChallenge`, `PracticeExercise` ×2 |
| `sections/JsonSection.tsx` | `JsonSection` | `StepReveal`, `MermaidDiagram`, `CodeFiddle` ×2, `Callout` ×2, `CodeChallenge`, `PracticeExercise` ×2 |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ArraysSection.tsx` | Poblar: 1 `Callout`, 1 `CodeFiddle`; quitar JSON fusionado del stub |
| `ObjetosLiteralesSection.tsx` | Poblar: `MermaidDiagram`, `CompareTable`, 3 `CodeFiddle`, `Callout`, 2 `PracticeExercise` |
| `ResumenSection.tsx` | Viñetas draft L375–382 |
| `ArraysJsonObjetosLesson.tsx` | Orden 10 secciones + imports según bloque superior |

## Checklist lesson-developer

- [ ] H2 SEO: «Arrays en JavaScript», «Callbacks en métodos de array», «JSON: serialización y deserialización», «Objetos literales y referencia»
- [ ] H3 opcional en `ObjetosLiteralesSection`: «Destructuración y spread»
- [ ] Migrar todo código → `CodeFiddle` (9 bloques en draft)
- [ ] Crear `ObjetivosSection`, `ArrayCallbacksSection`, `JsonSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Poblar `ArraysSection` y `ObjetosLiteralesSection` (stubs → draft)
- [ ] Registrar quiz `07-arrays-json-objetos` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `ArraysJsonObjetosLesson.tsx` con orden y imports
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `06-funciones-y-callbacks` |
| `next` | `08-this-scope-clases` |
