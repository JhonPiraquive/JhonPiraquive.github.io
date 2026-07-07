---
track: pbpew
slug: proyectos/calculadora
title: "Calculadora interactiva"
order: 101
prev: "12-ajax-fetch"
next: "proyectos/todo-list"
---

## CalculadoraLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<PrerrequisitosSection />
<IntroProyectoSection />
<DemoCalculadoraSection />
<EstadoMemoriaSection />
<MaquetaHtmlSection />
<VariablesEstadoSection />
<FuncionCalcularSection />
<DelegacionEventosSection />
<DigitosOperadoresSection />
<IgualLimpiarErroresSection />
<CasosRealesSection />
<PracticaProfundaSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
```

Imports a añadir en `CalculadoraLesson.tsx`: las 16 secciones anteriores (hoy solo `ContenidoSection` stub).

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | — | **Nuevo.** 6 objetivos medibles (draft L29–36). |
| 2 | Prerrequisitos | `sections/PrerrequisitosSection.tsx` | — | **Nuevo.** Lista enlazada lecciones 01–12 + bullets DOM/operadores/tipos/funciones (draft L38–45). |
| 3 | Proyecto integrador: calculadora interactiva | `sections/IntroProyectoSection.tsx` | — | **Nuevo.** Primera lección-proyecto; regla vista vs estado; sin `eval` (draft L49–55). |
| 4 | Demo en vivo: prueba la calculadora | `sections/DemoCalculadoraSection.tsx` | `DemoCalculadora` | **Nuevo.** Widget embebido antes del código (draft L59–72). |
| 5 | Estado en memoria y pantalla | `sections/EstadoMemoriaSection.tsx` | prose tabla, `CompareTable`, `MermaidDiagram`, `Callout` | **Nuevo.** 4 variables + `textContent` (draft L76–109). |
| 6 | Maqueta HTML | `sections/MaquetaHtmlSection.tsx` | `CodeFiddle` | **Nuevo.** `data-action` / `data-value` (draft L113–134). |
| 7 | Variables de estado y referencias DOM | `sections/VariablesEstadoSection.tsx` | `CodeFiddle`, `CodeChallenge` | **Nuevo.** defer / DOMContentLoaded (draft L138–168). |
| 8 | Función pura `calcular` | `sections/FuncionCalcularSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `CodeChallenge` | **Nuevo.** parseFloat al evaluar (draft L172–224). |
| 9 | Delegación de eventos en el teclado | `sections/DelegacionEventosSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `CodeChallenge` | **Nuevo.** clay_variant stepper (lesson-spec); un listener + `closest` (draft L228–269). |
| 10 | Dígitos, punto decimal y operadores | `sections/DigitosOperadoresSection.tsx` | `CodeFiddle`, `StepReveal` | **Nuevo.** Encadenamiento intermedio + stepper 6 pasos (draft L273–349). |
| 11 | Igual, limpiar y errores | `sections/IgualLimpiarErroresSection.tsx` | `CodeFiddle`, `StepReveal`, `Callout` | **Nuevo.** `Infinity` sin excepción; stepper 4 pasos (draft L353–421). |
| 12 | Casos reales | `sections/CasosRealesSection.tsx` | — | **Nuevo.** 2 casos H4: fintech + propinas (draft L425–437). |
| 13 | Práctica profunda | `sections/PracticaProfundaSection.tsx` | `PracticeExercise` ×7 | **Nuevo.** Delegación, estado, errores (draft L441–519). |
| 14 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Antes del reto (draft L523–553). |
| 15 | Reto integrador: calculadora interactiva completa | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** 7 requisitos + criterio éxito (draft L557–638). |
| 16 | Cierre de la lección | `sections/CierreSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** Ideas clave + enlace `proyectos/todo-list` + miniquiz (draft L642–719). |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `proyectos/calculadora` con 5 preguntas del draft L662–718:

| # | Tema |
|---|------|
| 1 | Rol de `operadorPendiente` |
| 2 | Delegación en `.teclado` |
| 3 | `parseFloat("12.5")` → número |
| 4 | Divisor cero — mensaje controlado |
| 5 | `textContent` frente a `innerHTML` |

**Infra:** añadir entrada `"proyectos/calculadora"` en `PBPEW_QUIZZES` de `pbpew.ts`.

**TSX:** `<QuizSection slug="proyectos/calculadora" track="pbpew" />` en `CierreSection` (H2 «Miniquiz» o subheading tras cierre prose).

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Objetivos de aprendizaje» |
| Párrafo intro | «Al finalizar el proyecto, el estudiante podrá:» (draft L29) |
| Lista | 6 objetivos draft L31–36 |

### `PrerrequisitosSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Prerrequisitos» |
| Lista | enlaces 01–12 + bullets lecciones 10, 04, 03, 06, script defer (draft L40–45) |

### `IntroProyectoSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Proyecto integrador: calculadora interactiva» |
| Prose | primera de cuatro lecciones-proyecto; pantalla + rejilla; HTML estructura / JS comportamiento (draft L49–53) |
| Énfasis | regla pedagógica: display = vista, estado en variables; sin `eval()` (draft L55) |

### `DemoCalculadoraSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Demo en vivo: prueba la calculadora» |
| Lead | prose | interactuar antes de código; estados normal / resultado / error (draft L61–63) |
| `demo-calculadora` | `DemoCalculadora` | `ariaLive="polite"`; `buttons` array; `displayLabels` { plus, minus, times, divide }; `errorMessages` ["División por cero", "Error"]; `hint` draft L71 |

**Ubicación componente:** `src/components/teaching/DemoCalculadora.tsx` (patrón `DemoEnVivoApi`). Sección importa desde `@/components/teaching/DemoCalculadora`.

### `EstadoMemoriaSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Estado en memoria y pantalla» |
| Intro | prose | 4 variables + `textContent` (draft L76–87) |
| Tabla variables | prose `<table>` | operandoActual, operandoAnterior, operadorPendiente, esperandoNuevoOperando (draft L80–85) |
| `capas-html-css-js-dom` | `CompareTable` | headers ["Capa", "Responsabilidad"]; rows draft L92–97 |
| `diagrama-estado-calculadora` | `MermaidDiagram` | chart stateDiagram-v2 draft L102 |
| `sin-eval` | `Callout` | `variant="callout-warning"`; title: «Sin eval()»; children draft L108 |

### `MaquetaHtmlSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Maqueta HTML» |
| Intro | prose | `data-action` / `data-value`; mapeo × ÷ → `*` `/` (draft L113–115) |
| `maqueta-html-calculadora` | `CodeFiddle` | `language="html"`; code draft L119–133 |

### `VariablesEstadoSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Variables de estado y referencias DOM» |
| Intro | prose | script defer / DOMContentLoaded (draft L138–140) |
| `variables-estado-inicial` | `CodeFiddle` | `language="javascript"`; code draft L144–154 |
| `cc-calc-estado-inicial` | `CodeChallenge` | id, title, template, blanks draft L158–167 |

### `FuncionCalcularSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Función pura `calcular`» |
| Intro | prose | parseFloat al evaluar; strings al armar (draft L172–174) |
| `funcion-calcular` | `CodeFiddle` | `language="javascript"`; code draft L178–205 |
| `flujo-calcular-pura` | `MermaidDiagram` | chart flowchart draft L210 |
| `cc-calc-calcular-switch` | `CodeChallenge` | title, template, blanks draft L214–223 |

### `DelegacionEventosSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Delegación de eventos en el teclado» |
| Intro | prose | un listener; `closest("button")` (draft L228–230) |
| `delegacion-teclado` | `CodeFiddle` | `language="javascript"`; code draft L234–251 |
| `secuencia-delegacion-display` | `MermaidDiagram` | chart sequenceDiagram draft L256 |
| `cc-calc-delegacion-listener` | `CodeChallenge` | title, template, blanks draft L261–268 |

### `DigitosOperadoresSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Dígitos, punto decimal y operadores» |
| Intro | prose | operador sin `=` recalcula intermedio (draft L273–275) |
| `manejar-digito-operador` | `CodeFiddle` | `language="javascript"`; code draft L279–317 |
| `construye-calculadora-6-pasos` | `StepReveal` | title: «Construye la calculadora en 6 pasos»; steps[6] draft L323–347 |

### `IgualLimpiarErroresSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Igual, limpiar y errores» |
| Intro | prose | `8 / 0` → `Infinity` sin excepción (draft L353–355) |
| `igual-limpiar-error` | `CodeFiddle` | `language="javascript"`; code draft L359–391 |
| `flujo-clic-igual` | `StepReveal` | title: «Flujo de un clic en =»; steps[4] draft L397–414 |
| `precision-flotantes` | `Callout` | `variant="callout-info"`; title: «Precisión de flotantes»; children draft L420 |

### `CasosRealesSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Casos reales» |
| H4 caso 1 | «Widget de cotización en dashboard financiero» + prose + decisión clave (draft L427–431) |
| H4 caso 2 | «App de propinas que mostraba `Infinity`» + prose + lección (draft L433–437) |

### `PracticaProfundaSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Práctica profunda» |
| Lead | prose | consolidar delegación, estado, errores (draft L441–443) |
| `pe-calc-flujo-operador` | `PracticeExercise` | draft L446–454 |
| `pe-calc-debug-display` | `PracticeExercise` | draft L458–466 |
| `pe-calc-division-cero` | `PracticeExercise` | draft L470–478 |
| `pe-calc-parseFloat` | `PracticeExercise` | draft L482–490 |
| `pe-calc-textcontent-vs-innerhtml` | `PracticeExercise` | draft L494–499 |
| `pe-calc-estado-vs-display` | `PracticeExercise` | draft L503–510 |
| `pe-calc-orden-flujo` | `PracticeExercise` | draft L514–518 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Comprueba tu comprensión» |
| Lead | prose | antes del reto integrador (draft L523–525) |
| `pe-calc-limpiar` | `PracticeExercise` | draft L528–536 |
| `pe-calc-infinity-js` | `PracticeExercise` | draft L540–544 |
| `pe-calc-por-que-no-eval` | `PracticeExercise` | draft L548–552 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| H2 | — | «Reto integrador: calculadora interactiva completa» |
| Enunciado | prose + `<ol>` 7 requisitos + criterio éxito | draft L559–573 |
| `reto-html-calculadora` | `CodeFiddle` | `language="html"`; code draft L577–593 |
| `reto-esqueleto-js` | `CodeFiddle` | `language="javascript"`; `title`: «Esqueleto de partida — completa las funciones»; code draft L598–624 |
| `pe-calc-reto-integrador` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L628–637; `rows={10}` |

### `CierreSection`

| elemento | props |
|----------|-------|
| H2 | «Cierre de la lección» |
| Párrafo cierre | draft L642–644 |
| Ideas clave | `<ul>` 5 viñetas draft L646–652 |
| Siguiente paso | enlace `proyectos/todo-list` draft L654 |
| Miniquiz | `<QuizSection slug="proyectos/calculadora" track="pbpew" />` |

## CodeFiddle — inventario (8 bloques)

| id | sección | language | draft líneas |
|----|---------|----------|--------------|
| `maqueta-html-calculadora` | Maqueta HTML | html | L119–133 |
| `variables-estado-inicial` | Variables estado | javascript | L144–154 |
| `funcion-calcular` | Función calcular | javascript | L178–205 |
| `delegacion-teclado` | Delegación | javascript | L234–251 |
| `manejar-digito-operador` | Dígitos y operadores | javascript | L279–317 |
| `igual-limpiar-error` | Igual / limpiar | javascript | L359–391 |
| `reto-html-calculadora` | Reto | html | L577–593 |
| `reto-esqueleto-js` | Reto | javascript | L598–624 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias principales |
|---------|--------|--------------------------|
| `src/components/teaching/DemoCalculadora.tsx` | `DemoCalculadora` | estado calculadora, botones táctiles ≥44px, `aria-live` |
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/PrerrequisitosSection.tsx` | `PrerrequisitosSection` | prose + enlaces lecciones |
| `sections/IntroProyectoSection.tsx` | `IntroProyectoSection` | prose only |
| `sections/DemoCalculadoraSection.tsx` | `DemoCalculadoraSection` | `DemoCalculadora` |
| `sections/EstadoMemoriaSection.tsx` | `EstadoMemoriaSection` | `CompareTable`, `MermaidDiagram`, `Callout` |
| `sections/MaquetaHtmlSection.tsx` | `MaquetaHtmlSection` | `CodeFiddle` |
| `sections/VariablesEstadoSection.tsx` | `VariablesEstadoSection` | `CodeFiddle`, `CodeChallenge` |
| `sections/FuncionCalcularSection.tsx` | `FuncionCalcularSection` | `CodeFiddle`, `MermaidDiagram`, `CodeChallenge` |
| `sections/DelegacionEventosSection.tsx` | `DelegacionEventosSection` | `CodeFiddle`, `MermaidDiagram`, `CodeChallenge` |
| `sections/DigitosOperadoresSection.tsx` | `DigitosOperadoresSection` | `CodeFiddle`, `StepReveal` |
| `sections/IgualLimpiarErroresSection.tsx` | `IgualLimpiarErroresSection` | `CodeFiddle`, `StepReveal`, `Callout` |
| `sections/CasosRealesSection.tsx` | `CasosRealesSection` | prose H4 ×2 |
| `sections/PracticaProfundaSection.tsx` | `PracticaProfundaSection` | `PracticeExercise` ×7 |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle` ×2, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | `QuizSection` |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** tras migrar a 16 secciones |
| `CalculadoraLesson.tsx` | Orden 16 secciones + imports |
| `lesson-meta.ts` | `prev`: `12-ajax-fetch`; `next`: `proyectos/todo-list` |

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `12-ajax-fetch` |
| `next` | `proyectos/todo-list` |

## Checklist lesson-developer

- [ ] Crear `DemoCalculadora` en `src/components/teaching/` (estados normal / resultado / error; hint draft L71)
- [ ] Crear 16 secciones listadas arriba
- [ ] Migrar 8 bloques código → `CodeFiddle` (nunca `CodeBlock`)
- [ ] Registrar quiz `"proyectos/calculadora"` en `teaching-quizzes/pbpew.ts` (5 preguntas)
- [ ] Actualizar `CalculadoraLesson.tsx` con orden e imports
- [ ] Actualizar `lesson-meta.ts` prev/next
- [ ] Callout variants: warning (`sin-eval`), info (`precision-flotantes`)
- [ ] Clay: ver `lesson-spec.md` § Clay UI (card, stepper en delegación/dígitos/igual)
- [ ] Pedagogía mínima: 3 `CodeChallenge`, 10+ `PracticeExercise`, 3 `MermaidDiagram`, 2 `StepReveal`, 5 preguntas quiz ✓
