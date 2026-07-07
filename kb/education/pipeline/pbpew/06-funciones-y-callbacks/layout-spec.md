---
track: pbpew
slug: 06-funciones-y-callbacks
title: "Funciones en JavaScript: return, parámetros y callbacks"
order: 6
prev: "05-bucles-y-errores"
next: "07-arrays-json-objetos"
---

## FuncionesYCallbacksLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<DeclaracionDeFuncionSection />
<ExpresionDeFuncionYArrowFunctionSection />   {/* nuevo */}
<CallbacksSection />
<ResumenSection />
<CompruebaTuComprensionSection />             {/* nuevo */}
<RetoIntegradorSection />                     {/* nuevo */}
<CierreSection />                             {/* nuevo */}
<MiniquizSection />                           {/* nuevo */}
```

Imports a añadir en `FuncionesYCallbacksLesson.tsx`: `ObjetivosSection`, `ExpresionDeFuncionYArrowFunctionSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | — | **Nuevo.** Prose intro + `<ul>` 6 objetivos medibles (draft L18–27). |
| 2 | Declaración de función en JavaScript | `sections/DeclaracionDeFuncionSection.tsx` | `Callout` ×2, `StepReveal`, `MermaidDiagram`, `CodeFiddle` ×5, H3 parámetros/scope, `CodeChallenge`, `PracticeExercise` | Poblar stub. Sección más densa del bloque «funciones» (draft L40–160). |
| 3 | Expresión de función y arrow function | `sections/ExpresionDeFuncionYArrowFunctionSection.tsx` | `CompareTable`, `Callout`, `CodeFiddle` ×2, preview prose, `CodeChallenge`, `PracticeExercise` | **Nuevo.** Tabla markdown → `CompareTable` (draft L164–233). |
| 4 | Callbacks en JavaScript | `sections/CallbacksSection.tsx` | prose HOF, `MermaidDiagram` ×2, `CodeFiddle` ×2, `CodeChallenge`, H3 registro vs ejecución, `StepReveal`, `Callout`, `PracticeExercise` | Poblar stub (draft L237–342). |
| 5 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas 8 puntos (draft L346–355). |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L359–361). Ejercicios apilados `my-8` cada uno. |
| 7 | Reto integrador: mini biblioteca de transformaciones | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + lista 6 tareas + criterio éxito (draft L389–434). |
| 8 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Prose: párrafo cierre + ideas clave (5 viñetas) + siguiente paso `07-arrays-json-objetos`. Sin quiz inline (patrón PBPEW 01–03). |
| 9 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="06-funciones-y-callbacks" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `06-funciones-y-callbacks` con 5 preguntas del draft L456–515:

| # | Tema |
|---|------|
| 1 | Qué hace `return` dentro de una función |
| 2 | Parámetros vs argumentos en `sumar(a, b)` / `sumar(2, 5)` |
| 3 | Arrow con retorno implícito (`const triple = (x) => x * 3`) |
| 4 | Definición de callback |
| 5 | `addEventListener('click', guardar())` — referencia vs invocación |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| Párrafo intro | lesson-spec § Brand — objetivos del tema (draft L18) |
| Lista | 6 objetivos medibles draft L22–27 |

### `DeclaracionDeFuncionSection`

| id | componente | props |
|----|------------|-------|
| Intro función / invocar | prose | definición, hoisting, referencia vs `()` (draft L40–46) |
| `caso-checkout-total-undefined` | `Callout` | `variant="callout-info"`; title: «Caso real: checkout con total undefined»; children draft L49–51 |
| `flujo-llamada-return` | `StepReveal` | title: «Flujo de una llamada con return»; steps[5] draft L57–78 |
| `flujo-sumar-return` | `MermaidDiagram` | chart draft L83 |
| `saludar-declaracion` | `CodeFiddle` | `language="javascript"`; code draft L87–93 |
| `sumar-parametros` | `CodeFiddle` | `language="javascript"`; code draft L97–101 |
| `return-definicion` | prose | `return` termina función; sin return → `undefined` (draft L103) |
| `error-return-vs-console-log` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L107–108 |
| `avisar-sin-return` | `CodeFiddle` | `language="javascript"`; code draft L112–118 |
| Parámetros por defecto (H3) | `<h3>` | «Parámetros por defecto y alcance local» — `mt-6 mb-2 text-xl font-semibold` |
| `crear-saludo-default` | `CodeFiddle` | `language="javascript"`; code draft L123–129 |
| Alcance local | prose | `let`/`const` dentro de función (draft L131) |
| `contar-scope-local` | `CodeFiddle` | `language="javascript"`; code draft L134–142 |
| `area-rectangulo-challenge` | `CodeChallenge` | title, template, blanks draft L145–152 |
| `parametro-vs-argumento` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L155–160 |

### `ExpresionDeFuncionYArrowFunctionSection`

| id | componente | props |
|----|------------|-------|
| Intro expresión / flecha | prose | contexto antes de tabla (draft L164–166) |
| `comparativa-formas-funcion` | `CompareTable` | headers: Forma, Sintaxis típica, Hoisting, Cuándo usar en PBPEW; rows draft L177–181 |
| Expresión / flecha | prose | hoisting asignación, retorno implícito (draft L184–186) |
| `error-arrow-llaves` | `Callout` | `variant="callout-warning"`; title: «Error frecuente — arrow con llaves»; children draft L190–191 |
| `duplicar-triple` | `CodeFiddle` | `language="javascript"`; code draft L195–206 |
| `espar-arrow` | `CodeFiddle` | `language="javascript"`; code draft L209–214 |
| Preview `this`/`arguments` | prose `<p>` | texto secundario, no profundizar (draft L216); `text-sm` opcional |
| `mitad-arrow-challenge` | `CodeChallenge` | title, template, blanks draft L219–225 |
| `convertir-espar-arrow` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L228–233 |

### `CallbacksSection`

| id | componente | props |
|----|------------|-------|
| Definición callback / HOF | prose | callback, `repetir(n,fn)`, preview `.map`/`.forEach` (draft L237–243) |
| `flujo-repetir-callback` | `MermaidDiagram` | chart draft L247 |
| `repetir-ejemplo` | `CodeFiddle` | `language="javascript"`; code draft L251–262 |
| `repetir-callback-challenge` | `CodeChallenge` | title, template, blanks draft L265–272 |
| Callbacks navegador | prose | `addEventListener`, `setTimeout` (draft L274) |
| Registrar vs ejecutar (H3) | `<h3>` | «Registrar callback vs ejecutarlo al instante» — `mt-6 mb-2 text-xl font-semibold` |
| `registrar-vs-ejecutar-callback` | `StepReveal` | title coincide con H3; steps[5] draft L279–300 |
| `flujo-addEventListener-referencia` | `MermaidDiagram` | chart draft L305 |
| `caso-boton-guardar-carga` | `Callout` | `variant="callout-info"`; title: «Caso real: botón Guardar al cargar la página»; children draft L310–311 |
| `addEventListener-ejemplo` | `CodeFiddle` | `language="javascript"`; code draft L315–321 |
| `alClic-referencia` | `CodeFiddle` | `language="javascript"`; code draft L324–334 |
| `addEventListener-parentesis` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L337–342 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 8 puntos draft L348–355 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-reutilizacion-funcion` | `PracticeExercise` | prompt, hints, keywords draft L364–369 |
| `comprension-flujo-sumar` | `PracticeExercise` | draft L371–377 |
| `comprension-calcular-total-undefined` | `PracticeExercise` | draft L379–385 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + lista `<ol>` | «Mini biblioteca de transformaciones»; 6 tareas + criterio éxito (draft L391–402) |
| `reto-esqueleto-aplicar-lista` | `CodeFiddle` | `language="javascript"`; code draft L405–421; `title`: «Esqueleto — completa aplicarLista y filtrarLista» |
| `reto-biblioteca-transformaciones` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L424–434; `rows={8}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L438–440 |
| Ideas clave | `<ul>` 5 viñetas draft L444–448 |
| Siguiente paso | enlace textual `07-arrays-json-objetos` draft L450 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="06-funciones-y-callbacks" track="pbpew" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/ExpresionDeFuncionYArrowFunctionSection.tsx` | `ExpresionDeFuncionYArrowFunctionSection` | `CompareTable`, `Callout`, `CodeFiddle` ×2, `CodeChallenge`, `PracticeExercise` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `DeclaracionDeFuncionSection.tsx` | Poblar: 2 `Callout`, `StepReveal`, `MermaidDiagram`, 5 `CodeFiddle`, H3, `CodeChallenge`, `PracticeExercise` |
| `CallbacksSection.tsx` | Poblar: 2 `MermaidDiagram`, `CodeFiddle` ×2, `CodeChallenge`, H3, `StepReveal`, `Callout`, `PracticeExercise` |
| `ResumenSection.tsx` | Viñetas draft L348–355 |
| `FuncionesYCallbacksLesson.tsx` | Orden 9 secciones + imports según bloque superior |

## Checklist lesson-developer

- [ ] H2 SEO: «Declaración de función en JavaScript», «Expresión de función y arrow function», «Callbacks en JavaScript»
- [ ] H3: «Parámetros por defecto y alcance local», «Registrar callback vs ejecutarlo al instante»
- [ ] Migrar todo código → `CodeFiddle` (11 bloques en draft)
- [ ] Crear `ObjetivosSection`, `ExpresionDeFuncionYArrowFunctionSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Poblar `DeclaracionDeFuncionSection` y `CallbacksSection` (stubs → draft)
- [ ] Registrar quiz `06-funciones-y-callbacks` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `FuncionesYCallbacksLesson.tsx` con orden y imports
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `05-bucles-y-errores` |
| `next` | `07-arrays-json-objetos` |
