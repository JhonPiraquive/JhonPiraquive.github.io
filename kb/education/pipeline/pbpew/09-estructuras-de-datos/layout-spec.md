---
track: pbpew
slug: 09-estructuras-de-datos
title: "Estructuras de datos en JavaScript: Map, Set, pila LIFO y cola FIFO"
order: 9
prev: "08-this-scope-clases"
next: "10-dom-y-eventos"
---

## EstructurasDeDatosLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<MapSection />
<SetSection />
<PilaSection />
<ColaSection />
<MapVsObjetoSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizSection />
```

Imports a añadir en `EstructurasDeDatosLesson.tsx`: todas las secciones anteriores (hoy solo `MapSection` + `ResumenSection`).

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | — | **Nuevo.** 6 objetivos medibles (draft L23–30). Prerrequisitos en prose breve opcional (draft L32–37). |
| 2 | `Map` en JavaScript: pares clave-valor | `sections/MapSection.tsx` | `MermaidDiagram`, `Callout` ×2, `CodeFiddle` ×3, `CodeChallenge`, prose + tabla API | **Reemplazar stub.** Lead-in: párrafo «estructuras de datos» + árbol de decisión (draft L41–50) antes del H2 Map. Migrar `CodeBlock` → `CodeFiddle`. |
| 3 | `Set` en JavaScript: valores únicos | `sections/SetSection.tsx` | prose + tabla API, `CodeFiddle`, `StepReveal`, `CodeChallenge`, `PracticeExercise` | **Nuevo.** Draft L132–192. |
| 4 | Pila (LIFO) en JavaScript | `sections/PilaSection.tsx` | `MermaidDiagram`, `CodeFiddle`, `Callout`, `CodeChallenge` | **Nuevo.** Draft L196–236. |
| 5 | Cola (FIFO) en JavaScript | `sections/ColaSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×2, `Callout`, `CompareTable`, `PracticeExercise` | **Nuevo.** Draft L240–297. |
| 6 | `Map` frente a objeto literal | `sections/MapVsObjetoSection.tsx` | `CompareTable`, prose, `CodeFiddle`, `Callout` | **Nuevo.** Draft L301–336. |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Reemplazar stub.** 7 viñetas + preview lección 10 (draft L340–348). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L354–355). |
| 9 | Reto integrador: centro de turnos y caché de consultas | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + lista 5 tareas + criterio éxito (draft L382–395). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Párrafo cierre + ideas clave (5 viñetas) + siguiente paso `10-dom-y-eventos` (draft L443–455). |
| 11 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="09-estructuras-de-datos" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `09-estructuras-de-datos` con 5 preguntas del draft L463–519:

| # | Tema |
|---|------|
| 1 | `push`/`pop` en pila LIFO — último valor |
| 2 | API correcta `.set` en `Map` |
| 3 | `new Set([1, 2, 2, 3]).size` |
| 4 | Cola FIFO: `push` + `shift` |
| 5 | Cuándo preferir `Map` frente a objeto literal |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Objetivos de aprendizaje» |
| Párrafo intro | «Al finalizar la lección, el estudiante podrá:» (draft L23) |
| Lista | 6 objetivos draft L25–30 |

### `MapSection`

| id | componente | props |
|----|------------|-------|
| Intro estructuras | prose | definición + arrays/objetos previos + pila/cola como patrones (draft L43–45) |
| `arbol-decision-estructuras` | `MermaidDiagram` | chart draft L49 |
| H2 | «`Map` en JavaScript: pares clave-valor» |
| Definición Map + tabla API | prose + `<table>` o lista | draft L56–65 |
| `error-frecuente-map-api` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L70 |
| `edades-map-basico` | `CodeFiddle` | `language="javascript"`; code draft L75–84 |
| Ventaja clave objeto | prose | draft L86 |
| `por-id-clave-objeto` | `CodeFiddle` | `language="javascript"`; code draft L90–96 |
| Iterar Map | prose | draft L98 |
| `precios-iterar-map` | `CodeFiddle` | `language="javascript"`; code draft L102–111 |
| `caso-cache-sesion-map` | `Callout` | `variant="callout-info"`; title: «Caso real: caché de sesión en dashboard»; children lesson-spec L110 |
| `map-inventario-challenge` | `CodeChallenge` | title: «Completa el Map — inventario»; template, blanks draft L121–127 |

### `SetSection`

| id | componente | props |
|----|------------|-------|
| H2 | «`Set` en JavaScript: valores únicos» |
| Definición Set + tabla API | prose + tabla | draft L134–142 |
| Comparación `===` | prose | draft L144 |
| `ids-set-unicos` | `CodeFiddle` | `language="javascript"`; code draft L148–155 |
| `set-elimina-duplicados` | `StepReveal` | title: «Set elimina duplicados — paso a paso»; steps[3] draft L160–173 |
| `set-registrar-visitas-challenge` | `CodeChallenge` | title: «Completa el Set — registrar visitas»; template, blanks draft L179–184 |
| `set-size-duplicados` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L188–192 |

### `PilaSection`

| id | componente | props |
|----|------------|-------|
| H2 | «Pila (LIFO) en JavaScript» |
| Definición LIFO + metáfora platos | prose | draft L198–200 |
| `flujo-pila-lifo` | `MermaidDiagram` | chart draft L204 |
| `pila-push-pop` | `CodeFiddle` | `language="javascript"`; code draft L209–217 |
| Caso deshacer | prose | draft L219 |
| `error-frecuente-pop-lifo` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children lesson-spec L117 |
| `pila-historial-challenge` | `CodeChallenge` | title: «Completa la pila — historial de acciones»; template, blanks draft L230–235 |

### `ColaSection`

| id | componente | props |
|----|------------|-------|
| H2 | «Cola (FIFO) en JavaScript» |
| Definición FIFO + metáfora banco | prose | draft L242–244 |
| `flujo-cola-fifo` | `MermaidDiagram` | chart draft L248 |
| `cola-push-shift` | `CodeFiddle` | `language="javascript"`; code draft L253–261 |
| H3 o párrafo puente | «Misma secuencia, distinto patrón» | draft L263 |
| `elementos-lifo-vs-fifo` | `CodeFiddle` | `language="javascript"`; code draft L267–274 |
| `caso-cola-tickets-al-reves` | `Callout` | `variant="callout-info"`; title: «Caso real: cola de tickets al revés»; children lesson-spec L124 |
| Intro CompareTable | prose | «El mismo array admite ambos patrones…» (lesson-spec L147) |
| `comparativa-lifo-fifo` | `CompareTable` | headers: Patrón, Entrada, Salida, Métodos típicos, Ejemplo mental; rows draft L286–288 |
| `comprension-lifo-fifo` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L293–297 |

### `MapVsObjetoSection`

| id | componente | props |
|----|------------|-------|
| H2 | «`Map` frente a objeto literal» |
| Intro | prose | draft L303 |
| `comparativa-objeto-map` | `CompareTable` | headers: Criterio, Objeto {}, Map; rows draft L308–314 |
| Cuándo objeto / cuándo Map | prose | draft L317–319 |
| `config-obj-vs-contador-map` | `CodeFiddle` | `language="javascript"`; code draft L323–330 |
| `serializacion-map-json` | `Callout` | `variant="callout-info"`; title: «Serialización: Map y JSON»; children lesson-spec L131 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Resumen» |
| Viñetas | 7 puntos draft L342–348 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L354–355 |
| `comprension-set-spread` | `PracticeExercise` | draft L357–362 |
| `comprension-orden-fifo` | `PracticeExercise` | draft L364–370 |
| `comprension-set-referencias` | `PracticeExercise` | draft L372–378 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| H2 | «Reto integrador: centro de turnos y caché de consultas» |
| Enunciado | prose + lista `<ol>` 5 tareas + criterio éxito | draft L384–395 |
| `reto-esqueleto-turnos-cache` | `CodeFiddle` | `language="javascript"`; `title`: «Esqueleto de partida — completa las funciones»; code draft L398–426 |
| `reto-centro-turnos-cache` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L429–438; `rows={8}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Cierre de la lección» |
| Párrafo cierre | draft L445–446 |
| Ideas clave | `<ul>` 5 viñetas draft L449–453 |
| Siguiente paso | enlace textual `10-dom-y-eventos` draft L455 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="09-estructuras-de-datos" track="pbpew" />` |

## CodeFiddle — inventario (9 bloques)

| id | sección | language | draft líneas |
|----|---------|----------|--------------|
| `edades-map-basico` | Map | javascript | L75–84 |
| `por-id-clave-objeto` | Map | javascript | L90–96 |
| `precios-iterar-map` | Map | javascript | L102–111 |
| `ids-set-unicos` | Set | javascript | L148–155 |
| `pila-push-pop` | Pila | javascript | L209–217 |
| `cola-push-shift` | Cola | javascript | L253–261 |
| `elementos-lifo-vs-fifo` | Cola | javascript | L267–274 |
| `config-obj-vs-contador-map` | MapVsObjeto | javascript | L323–330 |
| `reto-esqueleto-turnos-cache` | Reto | javascript | L398–426 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias principales |
|---------|--------|--------------------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/SetSection.tsx` | `SetSection` | `CodeFiddle`, `StepReveal`, `CodeChallenge`, `PracticeExercise` |
| `sections/PilaSection.tsx` | `PilaSection` | `MermaidDiagram`, `CodeFiddle`, `Callout`, `CodeChallenge` |
| `sections/ColaSection.tsx` | `ColaSection` | `MermaidDiagram`, `CodeFiddle` ×2, `Callout`, `CompareTable`, `PracticeExercise` |
| `sections/MapVsObjetoSection.tsx` | `MapVsObjetoSection` | `CompareTable`, `CodeFiddle`, `Callout` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `MapSection.tsx` | Reemplazar stub: quitar `CodeBlock` y prose concatenada; lead-in + 3 `CodeFiddle`, 2 `Callout`, `MermaidDiagram`, `CodeChallenge`, tabla API |
| `ResumenSection.tsx` | Expandir a 7 viñetas draft L342–348 |
| `EstructurasDeDatosLesson.tsx` | Orden 11 secciones + imports |
| `lesson-meta.ts` | `title` / `seoTitle` / `seoDescription` desde lesson-spec § Brand y SEO |

## Checklist lesson-developer

- [ ] H2 SEO según lesson-spec § Voice notes (Map, Set, Pila, Cola, Map vs objeto)
- [ ] Migrar 9 bloques código → `CodeFiddle` (nunca `CodeBlock`)
- [ ] Crear 9 secciones nuevas listadas arriba
- [ ] Repoblar `MapSection` y `ResumenSection`
- [ ] Registrar quiz `09-estructuras-de-datos` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `EstructurasDeDatosLesson.tsx` con orden y imports
- [ ] Pedagogía mínima: 6+ `PracticeExercise`/`CodeChallenge`, 3 `MermaidDiagram`, 1 `StepReveal`, 5 preguntas quiz ✓

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `08-this-scope-clases` |
| `next` | `10-dom-y-eventos` |
