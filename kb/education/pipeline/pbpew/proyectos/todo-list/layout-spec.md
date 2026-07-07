---
track: pbpew
slug: proyectos/todo-list
title: "Lista de tareas"
order: 103
prev: proyectos/piedra-papel-tijera
next: null
---

## TodoListLesson.tsx — orden de secciones

```tsx
<ObjetivosAprendizajeSection />
<PrerrequisitosSection />
<IntroduccionEstadoSection />
<TodoListDemoSection />
<ArquitecturaSection />
<CasosRealesSection />
<ModeloDatosSection />
<EstructuraHtmlSection />
<FormularioYEstadoSection />
<RenderYDelegacionSection />
<FiltrosSection />
<PersistenciaOpcionalSection />
<PuenteApiSection />
<RetoSection />
<CierreSection />
```

Imports a añadir en `TodoListLesson.tsx`: las 15 secciones anteriores (sustituir stub `ContenidoSection`).

`lesson-meta.ts`: alinear `prev` → `proyectos/piedra-papel-tijera` (draft L27); `next` → `null`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosAprendizajeSection.tsx` | — | **Nuevo.** 6 objetivos medibles (draft L34–41). |
| 2 | Prerrequisitos | `sections/PrerrequisitosSection.tsx` | — | **Nuevo.** Lecciones 07, 10, 12 + proyectos previos (draft L43–49). |
| 3 | Introducción: de nodos sueltos a gestión de estado | `sections/IntroduccionEstadoSection.tsx` | `MermaidDiagram` | **Nuevo.** Prose regla oro + flowchart arquitectura (draft L53–62). |
| 4 | Demo interactiva: prueba la app antes de codificar | `sections/TodoListDemoSection.tsx` | `TodoListDemo`, `Callout` | **Nuevo.** Checklist `<ol>` ×6 + demo embebida + callout info (draft L66–96). |
| 5 | Arquitectura: datos, lógica y vista | `sections/ArquitecturaSection.tsx` | `CompareTable`, `StepReveal`, `MermaidDiagram` | **Nuevo.** Capas + ciclo agregar + sequence (draft L100–137). `clay_variant`: card. |
| 6 | Casos reales: por qué importa el modelo | `sections/CasosRealesSection.tsx` | — | **Nuevo.** H3 ×2 + «Decisión clave» (draft L141–151). |
| 7 | Modelo de datos | `sections/ModeloDatosSection.tsx` | `CodeFiddle` ×2, `PracticeExercise`, `CodeChallenge` | **Nuevo.** Objeto tarea + estado global (draft L155–194). `clay_variant`: card. |
| 8 | HTML del proyecto | `sections/EstructuraHtmlSection.tsx` | `CodeFiddle` | **Nuevo.** HTML mínimo `<main>` (draft L198–218). `clay_variant`: card. |
| 9 | Formulario y alta de tareas | `sections/FormularioYEstadoSection.tsx` | `CodeFiddle`, `Callout`, `CodeChallenge`, `PracticeExercise` | **Nuevo.** submit + agregarTarea (draft L222–270). `clay_variant`: card. |
| 10 | render(): la vista desde el array | `sections/RenderYDelegacionSection.tsx` | `CodeFiddle` ×2, `Callout` ×2, `PracticeExercise` | **Nuevo.** render + delegación (draft L274–361). `clay_variant`: stepper. |
| 11 | Filtros de vista | `sections/FiltrosSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** filtroActivo + mensajes vacíos (draft L365–391). `clay_variant`: card. |
| 12 | Persistencia opcional con localStorage | `sections/PersistenciaOpcionalSection.tsx` | `CodeFiddle`, `CodeChallenge`, `Callout` | **Nuevo.** guardar/cargar + DOMContentLoaded (draft L395–439). `clay_variant`: card. |
| 13 | Puente hacia API REST | `sections/PuenteApiSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** exportarJson + separar de render (draft L443–460). Sin card de sección. |
| 14 | Reto integrador | `sections/RetoSection.tsx` | `PracticeExercise` | **Nuevo.** Niveles base/intermedio/avanzado + checklist (draft L464–505). `clay_variant`: card. |
| 15 | Cierre | `sections/CierreSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** Ideas clave + siguiente paso + mini-quiz (draft L509–587). `clay_variant`: card. |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `proyectos/todo-list` con 5 preguntas del draft L530–586:

| # | Tema |
|---|------|
| 1 | Fuente de verdad: array de objetos |
| 2 | `preventDefault` en submit |
| 3 | Eliminar por id con `.filter` |
| 4 | `textContent` frente a `innerHTML` |
| 5 | Filtro «Pendientes» no borra el array |

**Infra:** `<QuizSection slug="proyectos/todo-list" track="pbpew" />` en `CierreSection`; H2 secundario «Mini-quiz» antes del widget.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (nunca `CodeBlock`).

### `ObjetivosAprendizajeSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Objetivos de aprendizaje» |
| Párrafo intro | «Al finalizar el proyecto, el estudiante podrá:» (draft L34) |
| Lista | 6 objetivos draft L36–41 |

### `PrerrequisitosSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Prerrequisitos» |
| Lista | enlaces lecciones 07, 10, 12 + proyectos calculadora/piedra-papel-tijera + mini lista DOM (draft L45–49) |

### `IntroduccionEstadoSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Introducción: de nodos sueltos a gestión de estado» |
| Intro gestión estado | prose | primer proyecto integrador; array + DOM; regla oro (draft L55–57) |
| `arquitectura-flowchart` | `MermaidDiagram` | chart draft L60–61 |

### `TodoListDemoSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Demo interactiva: prueba la app antes de codificar» |
| Lead demo | prose | réplica funcional; mutación + re-pintado (draft L68) |
| Checklist prueba | prose `<ol>` | 6 acciones draft L72–77 |
| `todo-list-demo` | `TodoListDemo` | `title`: «Lista de tareas PBPEW»; `storageKey`: `pbpew-tareas-demo`; `showPersistenceToggle`: true; `showSimulateReload`: true; `emptyMessages`: { todas, pendientes, completadas } draft L81–89 |
| `como-usar-demo` | `Callout` | `variant="callout-info"`; title: «Cómo usar la demo»; children draft L95 |

### `ArquitecturaSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Arquitectura: datos, lógica y vista» |
| Intro capas | prose | tabla mental datos / lógica / vista (draft L102–108) |
| `dom-vs-array-render` | `CompareTable` | headers, rows draft L111–118 |
| `ciclo-agregar-tarea` | `StepReveal` | title: «Ciclo de una acción (agregar tarea)»; steps[6] draft L124–131 |
| `sequence-agregar-tarea` | `MermaidDiagram` | chart draft L136 |

### `CasosRealesSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Casos reales: por qué importa el modelo» |
| Caso soporte (H3) | «Panel de soporte: tareas que «desaparecen» al cambiar de pestaña» + decisión clave (draft L143–147) |
| Caso notas (H3) | «App de notas que pierde todo al refrescar» + lección persistencia (draft L149–151) |

### `ModeloDatosSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Modelo de datos» |
| Intro modelo | prose | objeto literal (draft L157) |
| `modelo-objeto-tarea` | `CodeFiddle` | `language="javascript"`; code draft L160–162 |
| Tabla propiedades | prose `<table>` | id, texto, completada (draft L164–168) |
| `estado-global` | `CodeFiddle` | `language="javascript"`; code draft L173–177 |
| `array-fuente-verdad` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L181–184 |
| `eliminar-por-id-filter` | `CodeChallenge` | title: «eliminarPorId con filter»; template, blanks draft L189–193 |

### `EstructuraHtmlSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «HTML del proyecto» |
| Intro HTML | prose | formulario semántico + filtros (draft L200) |
| `html-proyecto` | `CodeFiddle` | `language="html"`; code draft L203–218 |

### `FormularioYEstadoSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Formulario y alta de tareas» |
| Intro formulario | prose | refs DOM + agregarTarea (draft L224) |
| `formulario-alta` | `CodeFiddle` | `language="javascript"`; code draft L227–247 |
| `error-preventdefault` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L252 |
| `completa-preventdefault` | `CodeChallenge` | title: «Completa preventDefault»; template, blanks draft L258–261 |
| `orden-flujo-agregar` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L266–269 |

### `RenderYDelegacionSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «render(): la vista desde el array» |
| Intro render | prose | patrón central replaceChildren (draft L276) |
| `render-tareas` | `CodeFiddle` | `language="javascript"`; code draft L279–314 |
| `seguridad-textcontent` | `Callout` | `variant="callout-info"`; title: «Seguridad»; children draft L319 |
| `delegacion-lista` | `CodeFiddle` | `language="javascript"`; code draft L325–347 |
| `listeners-duplicados` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — listeners duplicados»; children draft L352 |
| `toggle-completada` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L357–360 |

### `FiltrosSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Filtros de vista» |
| Intro filtros | prose | filtroActivo no borra array (draft L367) |
| `filtros-nav` | `CodeFiddle` | `language="javascript"`; code draft L370–381 |
| `filtrar-vs-eliminar` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L385–388 |
| Mensajes vacíos | prose | tareasVisibles().length === 0 (draft L391) |

### `PersistenciaOpcionalSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Persistencia opcional con localStorage» |
| Intro persistencia | prose | JSON + guardar tras mutación (draft L397) |
| `localstorage-guardar-cargar` | `CodeFiddle` | `language="javascript"`; code draft L400–424 |
| `json-stringify` | `CodeChallenge` | title: «Completa JSON.stringify»; template, blanks draft L429–432 |
| `errores-persistencia` | `Callout` | `variant="callout-warning"`; title: «Errores de persistencia»; children draft L438 |

### `PuenteApiSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Puente hacia API REST» |
| Intro API | prose | estado local hoy; fetch mañana (draft L445) |
| `exportar-json` | `CodeFiddle` | `language="javascript"`; code draft L448–452 |
| `separar-funciones-fetch` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L456–459 |

### `RetoSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Reto integrador» |
| Enunciado | prose | «Lista de tareas PBPEW» (draft L466) |
| Listas criterios | prose `<ol>` ×3 | base 6 + intermedio 4 + avanzado 6 ítems (draft L468–491) |
| Criterio éxito | prose | párrafo final draft L493 |
| `reto-integrador` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L497–504; `rows={10}` |

### `CierreSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Cierre» |
| Intro cierre | prose | primera app gestión estado sin frameworks (draft L511) |
| Ideas clave | prose `<ul>` | 6 viñetas draft L515–520 |
| Siguiente paso | prose | ajedrez o fetch REST (draft L522) |
| H2 | — | «Mini-quiz» |
| Quiz | `QuizSection` | `slug="proyectos/todo-list"` `track="pbpew"` |

## CodeFiddle — inventario (9 bloques)

| id | sección | language | draft líneas |
|----|---------|----------|--------------|
| `modelo-objeto-tarea` | Modelo de datos | javascript | L160–162 |
| `estado-global` | Modelo de datos | javascript | L173–177 |
| `html-proyecto` | HTML del proyecto | html | L203–218 |
| `formulario-alta` | Formulario y alta | javascript | L227–247 |
| `render-tareas` | render + delegación | javascript | L279–314 |
| `delegacion-lista` | render + delegación | javascript | L325–347 |
| `filtros-nav` | Filtros | javascript | L370–381 |
| `localstorage-guardar-cargar` | Persistencia | javascript | L400–424 |
| `exportar-json` | Puente API | javascript | L448–452 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias principales |
|---------|--------|--------------------------|
| `src/components/teaching/interactive/TodoListDemo.tsx` | `TodoListDemo` | estado `tareas[]`, filtros, delegación, `localStorage` opcional; props del draft L79–90 |
| `sections/ObjetivosAprendizajeSection.tsx` | `ObjetivosAprendizajeSection` | prose only |
| `sections/PrerrequisitosSection.tsx` | `PrerrequisitosSection` | prose + enlaces track |
| `sections/IntroduccionEstadoSection.tsx` | `IntroduccionEstadoSection` | `MermaidDiagram` |
| `sections/TodoListDemoSection.tsx` | `TodoListDemoSection` | `TodoListDemo`, `Callout` |
| `sections/ArquitecturaSection.tsx` | `ArquitecturaSection` | `CompareTable`, `StepReveal`, `MermaidDiagram` |
| `sections/CasosRealesSection.tsx` | `CasosRealesSection` | prose H3 ×2 |
| `sections/ModeloDatosSection.tsx` | `ModeloDatosSection` | `CodeFiddle` ×2, `PracticeExercise`, `CodeChallenge` |
| `sections/EstructuraHtmlSection.tsx` | `EstructuraHtmlSection` | `CodeFiddle` |
| `sections/FormularioYEstadoSection.tsx` | `FormularioYEstadoSection` | `CodeFiddle`, `Callout`, `CodeChallenge`, `PracticeExercise` |
| `sections/RenderYDelegacionSection.tsx` | `RenderYDelegacionSection` | `CodeFiddle` ×2, `Callout` ×2, `PracticeExercise` |
| `sections/FiltrosSection.tsx` | `FiltrosSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/PersistenciaOpcionalSection.tsx` | `PersistenciaOpcionalSection` | `CodeFiddle`, `CodeChallenge`, `Callout` |
| `sections/PuenteApiSection.tsx` | `PuenteApiSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/RetoSection.tsx` | `RetoSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | `QuizSection` |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `TodoListLesson.tsx` | Reemplazar `ContenidoSection` por orden 15 secciones + imports |
| `sections/ContenidoSection.tsx` | Eliminar tras migración |
| `lesson-meta.ts` | `prev`: `proyectos/piedra-papel-tijera` |

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `proyectos/piedra-papel-tijera` |
| `next` | `null` |

## Checklist lesson-developer

- [ ] Crear `TodoListDemo` en `src/components/teaching/interactive/` con props draft L79–90
- [ ] Crear 15 archivos en `sections/`; eliminar `ContenidoSection`
- [ ] Migrar 9 bloques código → `CodeFiddle` (nunca `CodeBlock`)
- [ ] `TodoListDemoSection`: checklist `<ol>` antes del widget; borde secondary en card demo
- [ ] `RenderYDelegacionSection`: callouts seguridad + listeners con variantes correctas
- [ ] `RetoSection`: tres `<ol>` por nivel + `PracticeExercise` textarea amplia
- [ ] Registrar quiz `proyectos/todo-list` en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] `CierreSection`: ideas clave + `<QuizSection slug="proyectos/todo-list" track="pbpew" />`
- [ ] Actualizar `TodoListLesson.tsx` con orden e imports (15 secciones)
- [ ] Pedagogía mínima: 2 `MermaidDiagram`, 1 `StepReveal`, 1 `CompareTable`, 1 `TodoListDemo`, 7 `PracticeExercise`, 4 `CodeChallenge`, 5 `Callout`, 5 preguntas quiz ✓
