---
track: posw
slug: react
title: "React: Fundamentos"
order: 15
prev: angular
next: modelo-cliente-servidor
---

## ReactLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsReactSection />
<JsxSection />
<ComponentesFuncionalesSection />
<PropsEstadoSection />
<HooksSection />
<EfectosSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 6 secciones temáticas + 6 bloques pedagógicos (12 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `QueEsReactSection`, `JsxSection`, `ComponentesFuncionalesSection`, `PropsEstadoSection`, `HooksSection`, `EfectosSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L36–60). |
| 2 | ¿Qué es React? | `sections/QueEsReactSection.tsx` | `MermaidDiagram`, `CompareTable`, `CodeFiddle`, `Callout` | **Nuevo.** H2 sin prefijo «1)». `bash` ×1. |
| 3 | JSX | `sections/JsxSection.tsx` | `CodeFiddle`, `CompareTable`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «2)». `javascript` ×1. |
| 4 | Componentes funcionales | `sections/ComponentesFuncionalesSection.tsx` | `CodeFiddle` ×2, `CodeChallenge` | **Nuevo.** H2 sin prefijo «3)». `javascript` ×2 (TSX). |
| 5 | Props y estado | `sections/PropsEstadoSection.tsx` | `CompareTable`, `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** H2 sin prefijo «4)». `javascript` ×2 (TSX). |
| 6 | Hooks principales | `sections/HooksSection.tsx` | `CompareTable`, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «5)». |
| 7 | Efectos con useEffect | `sections/EfectosSection.tsx` | `StepReveal`, `MermaidDiagram`, `CodeFiddle`, `CodeChallenge`, `Callout` | **Nuevo.** H2 sin prefijo «6)». `javascript` ×1 (TSX). |
| 8 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 8 viñetas (draft L488–495). |
| 9 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 10 | Reto integrador: catálogo React consumiendo API REST | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + Catalogo TSX (draft L531–609). |
| 11 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `modelo-cliente-servidor` (draft L615–627). |
| 12 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="react" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `react` con 5 preguntas del draft L637–692:

| # | Tema |
|---|------|
| 1 | React = librería de UI con componentes |
| 2 | `className` reemplaza `class` en JSX |
| 3 | Props de solo lectura en el hijo |
| 4 | `useEffect` con `[id]` al montar y al cambiar id |
| 5 | `key` estable para reconciliación en listas |

**Infra:** `<QuizSection slug="react" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `React: JSX, Hooks y Estado \| POSW` |
| `seoDescription` | `Aprende React: componentes funcionales, JSX, props, useState, useEffect y consumo de APIs REST con TypeScript y Vite. Lección 15 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes permitidos: `typescript`, `javascript`, `bash`, `html`. Bloques `tsx` / `typescript` con JSX → `language="javascript"`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L36–40 |
| Prerrequisitos | prose `<ul>` | draft L44–46 |
| Intro | prose | draft L54 |
| `react-libreria-no-framework` | `Callout` | `variant="callout-info"`; title: «React es librería, no framework»; children draft L58–59 |

### `QueEsReactSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L70–73 |
| `flujo-unidireccional` | `MermaidDiagram` | chart draft L79 |
| `tabla-react-vs-angular` | `CompareTable` | headers draft L86; rows draft L88–93 |
| `crear-proyecto-vite` | `CodeFiddle` | `language="bash"`; title: «Crear proyecto con Vite»; code draft L99–104 |
| `caso-race-condition` | `Callout` | `variant="callout-info"`; title: «Producto equivocado al navegar rápido»; children draft L110–111 |

### `JsxSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L122–126 |
| `jsx-vs-create-element` | `CodeFiddle` | `language="javascript"`; title: «JSX vs React.createElement»; code draft L131–147 |
| `tabla-reglas-jsx` | `CompareTable` | headers draft L153; rows draft L155–160 |
| `practica-html-a-jsx` | `PracticeExercise` | prompt: «Convierte este HTML a JSX válido: <div class="catalogo"><h2>Productos</h2><img src={url}></div>»; hints: `["className", "self-closing img", "llaves para url"]`; expectedKeywords: `["className", "img", "src"]`; successMessage: «Correcto. className reemplaza class; img debe ser self-closing con src en llaves.» |

### `ComponentesFuncionalesSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L181–184 |
| `tarjeta-producto-props` | `CodeFiddle` | `language="javascript"`; title: «Componente con props tipadas»; code draft L189–213 |
| `catalogo-composicion-key` | `CodeFiddle` | `language="javascript"`; title: «Composición y lista con key»; code draft L218–243 |
| `completa-key-map` | `CodeChallenge` | title: «Completa el render de lista»; template draft L250; blanks draft L251–253 |

### `PropsEstadoSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L264–267 |
| `tabla-props-vs-estado` | `CompareTable` | headers draft L273; rows draft L275–278 |
| `use-state-contador` | `CodeFiddle` | `language="javascript"`; title: «useState: contador»; code draft L284–296 |
| `use-state-formulario` | `CodeFiddle` | `language="javascript"`; title: «useState: formulario con objeto»; code draft L301–313 |
| Errores comunes | prose `<ul>` | draft L317–319 |
| `practica-props-vs-angular` | `PracticeExercise` | prompt: «Compara el flujo de datos en React (props hacia abajo) con @Input/@Output en Angular. ¿Qué similitudes y diferencias encuentras?»; hints: `["Props ≈ Input", "Callback ≈ Output", "JSX vs templates"]`; expectedKeywords: `["props", "padre", "hijo", "callback"]`; successMessage: «Correcto. Ambos fluyen datos del padre al hijo; React usa callbacks en lugar de EventEmitter.» |

### `HooksSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L339–344 |
| `tabla-hooks-principales` | `CompareTable` | headers draft L350; rows draft L352–358 |
| `reglas-hooks` | `Callout` | `variant="callout-info"`; title: «Solo en el nivel superior»; children draft L365–366 |
| `completa-set-cuenta` | `CodeChallenge` | title: «Completa la actualización del contador»; template draft L374; blanks draft L375–377 |

### `EfectosSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L388–391 |
| `ciclo-use-effect` | `StepReveal` | title: «Ciclo de useEffect con dependencia [id]»; steps[5] draft L398–418 |
| `ciclo-use-effect-diagrama` | `MermaidDiagram` | chart draft L426 |
| `fetch-con-limpieza` | `CodeFiddle` | `language="javascript"`; title: «Fetch con limpieza»; code draft L432–458 |
| `orden-ciclo-use-effect` | `CodeChallenge` | title: «Ordena el ciclo de useEffect con [id]»; template draft L465; blanks draft L466–471 |
| `caso-tipos-compartidos` | `Callout` | `variant="callout-info"`; title: «Equipo híbrido Angular + React»; children draft L478–479 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 8 puntos draft L488–495 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-set-cuenta-funcional` | `PracticeExercise` | prompt: «¿Por qué `setCuenta(cuenta + 1)` puede fallar si hay múltiples actualizaciones rápidas? ¿Qué forma es más segura?»; hints: `["Estado asíncrono", "Forma funcional", "c => c + 1"]`; expectedKeywords: `["funcional", "setter", "asíncrono"]`; successMessage: «Correcto. La forma funcional setCuenta(c => c + 1) usa el valor más reciente del estado.» |
| `comprension-use-effect-deps` | `PracticeExercise` | prompt: «Un useEffect hace fetch pero no tiene array de dependencias ni cleanup. ¿Qué bugs pueden aparecer?»; hints: `["Bucle infinito", "Race condition", "Warning al desmontar"]`; expectedKeywords: `["infinito", "desmontar", "dependencias"]`; successMessage: «Correcto. Sin deps puede buclear; sin cleanup actualiza estado tras desmontar o aplica datos obsoletos.» |
| `comprension-key-vs-indice` | `PracticeExercise` | prompt: «¿Por qué usar p.id como key en lugar del índice del array en una lista de productos editable?»; hints: `["Reconciliación", "Reordenar o borrar", "Virtual DOM"]`; expectedKeywords: `["key", "id", "reconciliación", "índice"]`; successMessage: «Correcto. El índice cambia al reordenar; React reutiliza nodos incorrectamente.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Catálogo React consumiendo API REST»; tareas 1–5 + criterio éxito (draft L535–543) |
| `reto-catalogo-react` | `CodeFiddle` | `language="javascript"`; title: «Catalogo con useState y useEffect»; code draft L546–596 |
| `reto-catalogo-integrador` | `PracticeExercise` | prompt: «Implementa el catálogo React: useState para productos/cargando/error, useEffect con cleanup y lista con key={p.id}.»; hints: `["react-ts template con Vite", "flag cancelado en cleanup", "manejar r.ok en fetch", "props tipadas en TarjetaProducto"]`; expectedKeywords: `["useState", "useEffect", "key", "fetch"]`; successMessage: «Excelente. Has construido un catálogo React con manejo correcto de estado y efectos.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L617 |
| Ideas clave | `<ul>` 5 viñetas draft L621–625 |
| Siguiente paso | enlace `modelo-cliente-servidor` draft L627 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="react" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/QueEsReactSection.tsx` | `QueEsReactSection` | `MermaidDiagram`, `CompareTable`, `CodeFiddle`, `Callout` |
| `sections/JsxSection.tsx` | `JsxSection` | `CodeFiddle`, `CompareTable`, `PracticeExercise` |
| `sections/ComponentesFuncionalesSection.tsx` | `ComponentesFuncionalesSection` | `CodeFiddle`, `CodeChallenge` |
| `sections/PropsEstadoSection.tsx` | `PropsEstadoSection` | `CompareTable`, `CodeFiddle`, `PracticeExercise` |
| `sections/HooksSection.tsx` | `HooksSection` | `CompareTable`, `Callout`, `CodeChallenge` |
| `sections/EfectosSection.tsx` | `EfectosSection` | `StepReveal`, `MermaidDiagram`, `CodeFiddle`, `CodeChallenge`, `Callout` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 6 secciones temáticas |
| `ReactLesson.tsx` | Orden 12 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«6)»)
- [ ] Migrar todo código → `CodeFiddle` (`javascript` para TSX, `bash` — 8 bloques en draft)
- [ ] Crear 12 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `react` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `angular` |
| `next` | `modelo-cliente-servidor` |
