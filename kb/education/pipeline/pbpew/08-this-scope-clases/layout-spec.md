---
track: pbpew
slug: 08-this-scope-clases
title: "Ámbito, this y clases en JavaScript: scope, métodos e herencia"
order: 8
prev: "07-arrays-json-objetos"
next: "09-estructuras-de-datos"
---

## ThisScopeClasesLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<AmbitoScopeSection />
<ThisSection />
<ClasesYMetodosSection />
<HerenciaSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizSection />
```

Imports a añadir en `ThisScopeClasesLesson.tsx`: `ObjetivosSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | — | **Nuevo.** Prose intro (lesson-spec § Brand) + `<ul>` 6 objetivos medibles (draft L23–30). |
| 2 | Ámbito (scope) en JavaScript | `sections/AmbitoScopeSection.tsx` | `CompareTable`, `MermaidDiagram`, `StepReveal`, `CodeFiddle` ×2, `Callout`, `CodeChallenge`, `PracticeExercise` | Poblar stub. H3 «Sombreado y `let` frente a `var` en bucles» (draft L122). |
| 3 | El contexto de ejecución: `this` | `sections/ThisSection.tsx` | `CodeFiddle` ×3, `CompareTable`, `MermaidDiagram`, `Callout`, `PracticeExercise` ×2 | Poblar stub. H3 «Método de objeto frente a llamada suelta»; H3 «`this` en funciones flecha y callbacks». |
| 4 | Clases ES6: constructor y métodos de instancia | `sections/ClasesYMetodosSection.tsx` | `StepReveal`, `MermaidDiagram`, `CodeFiddle` ×2, `Callout`, `CodeChallenge`, `PracticeExercise` | Poblar stub. H3 «Instanciar con `new`: flujo del constructor»; H3 «Flechas dentro de métodos de clase». |
| 5 | Herencia con `extends` y `super` | `sections/HerenciaSection.tsx` | `MermaidDiagram`, `CodeFiddle`, `Callout` ×2, `CodeChallenge`, `PracticeExercise` | Poblar stub. Preview lección 9 en prose (draft L438). |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas 7 puntos (draft L442–450). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L454–456). Ejercicios apilados `my-8` cada uno. |
| 8 | Reto integrador: mini carrito con clases y contexto | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + lista 5 tareas + criterio éxito (draft L484–496). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Párrafo cierre + ideas clave (5 viñetas) + siguiente paso `09-estructuras-de-datos`. |
| 10 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="08-this-scope-clases" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `08-this-scope-clases` con 5 preguntas del draft L576–635:

| # | Tema |
|---|------|
| 1 | `this` en `caja.mostrar()` — objeto a la izquierda del punto |
| 2 | Ámbito de `let` dentro de bloque `{ }` |
| 3 | `super(lado, lado)` en constructor hijo |
| 4 | `this` léxico en flecha vs función normal |
| 5 | Invocar constructor de clase sin `new` |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| elemento | contenido |
|----------|-----------|
| Párrafo intro | lesson-spec § Brand — objetivos del tema (draft L179–181) |
| Lista | 6 objetivos medibles draft L25–30 |

### `AmbitoScopeSection`

| id | componente | props |
|----|------------|-------|
| Intro scope | prose | definición ámbito; tipos global, función, bloque (draft L42–52) |
| `tipos-ambito-scope` | `CompareTable` | headers, rows draft L54–62 |
| Ámbito global / función / bloque | prose | draft L64–70 |
| `capas-ambito-scope` | `MermaidDiagram` | chart draft L72–75 |
| `capas-scope-entrar-salir` | `StepReveal` | title: «Capas de scope: entrar y salir»; steps[5] draft L77–102 |
| `demo-ambito-anidado` | `CodeFiddle` | `language="javascript"`; code draft L104–120 |
| Sombreado y bucles (H3) | `<h3>` | «Sombreado y `let` frente a `var` en bucles» — `mt-6 mb-2 text-xl font-semibold` |
| `let-vs-var-bucle` | `CodeFiddle` | `language="javascript"`; code draft L124–137 |
| `error-ambito-bloque-vs-funcion` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children lesson-spec L116–118 |
| `completa-ambito-bloque` | `CodeChallenge` | title, template, blanks draft L145–152 |
| `ambito-funcion-vs-bloque` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L154–160 |

### `ThisSection`

| id | componente | props |
|----|------------|-------|
| Intro `this` | prose | binding especial; depende de invocación (draft L164–167) |
| Método de objeto (H3) | prose | `obj.mostrar()` enlaza `this` (draft L168–169) |
| `caja-mostrar` | `CodeFiddle` | `language="javascript"`; code draft L170–180 |
| Llamada suelta / strict | prose | draft L182–184 |
| `cuenta-incrementar-strict` | `CodeFiddle` | `language="javascript"`; code draft L186–201 |
| Flechas y callbacks (H3) | `<h3>` | «`this` en funciones flecha y callbacks» — `mt-6 mb-2 text-xl font-semibold` |
| `function-vs-flecha-this` | `CompareTable` | headers, rows draft L205–213 |
| `metodo-normal-vs-flecha` | `CodeFiddle` | `language="javascript"`; code draft L215–231 |
| Pérdida de `this` | prose | `addEventListener` (draft L233–234) |
| `perdida-this-callback` | `MermaidDiagram` | chart draft L235–238 |
| `caso-contador-clics-nan` | `Callout` | `variant="callout-info"`; title: «Caso real: contador de clics — el badge no se actualiza»; children lesson-spec L123–125 |
| `cuenta-addEventListener-flecha` | `CodeFiddle` | `language="javascript"`; code draft L246–260 |
| `this-no-es-variable` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L262–268 |
| `addEventListener-contexto-this` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L270–276 |

### `ClasesYMetodosSection`

| id | componente | props |
|----|------------|-------|
| Intro clases | prose | contrastar con objetos literales lección 07 (draft L280–288) |
| `flujo-new-rectangulo` | `StepReveal` | title: «Flujo: new Rectangulo(4, 5)»; steps[5] draft L290–315 |
| `flujo-new-constructor` | `MermaidDiagram` | chart draft L317–320 |
| `rectangulo-clase` | `CodeFiddle` | `language="javascript"`; code draft L322–336 |
| `error-olvidar-new` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children lesson-spec L129–132 |
| Flecha en métodos (H3) | `<h3>` | «Flechas dentro de métodos de clase» — `mt-6 mb-2 text-xl font-semibold` |
| `lista-cadaUno-flecha` | `CodeFiddle` | `language="javascript"`; code draft L346–359 |
| Cuándo usar flecha | prose | draft L361 |
| `completa-clase-circulo` | `CodeChallenge` | title, template, blanks draft L363–371 |
| `objeto-contador-subir` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L373–379 |

### `HerenciaSection`

| id | componente | props |
|----|------------|-------|
| Intro herencia | prose | `extends`, `super`, azúcar sintáctico (draft L383–389) |
| `herencia-extends-super` | `MermaidDiagram` | chart draft L391–394 |
| `cuadrado-extends-rectangulo` | `CodeFiddle` | `language="javascript"`; code draft L396–406 |
| `caso-subclase-sin-super` | `Callout` | `variant="callout-info"`; title: «Caso real: subclase sin super en CI»; children lesson-spec L135–139 |
| `error-this-antes-super` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children lesson-spec L142–146 |
| `completa-subclase-cuadrado` | `CodeChallenge` | title, template, blanks draft L420–428 |
| `orden-pasos-new-rectangulo` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L430–436 |
| Preview lección 9 | prose | pilas/colas con estado interno (draft L438) |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 7 puntos draft L442–450 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L454–456 |
| `comprension-cajas-scope` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L458–464 |
| `comprension-clase-circulo` | `PracticeExercise` | draft L466–472 |
| `comprension-flecha-vs-metodo` | `PracticeExercise` | draft L474–480 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + lista `<ol>` | «Mini carrito con clases y contexto»; 5 tareas + criterio éxito (draft L484–496) |
| `reto-esqueleto-carrito` | `CodeFiddle` | `language="javascript"`; code draft L498–541; `title`: «Esqueleto — completa las clases y las pruebas» |
| `reto-mini-carrito` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L543–554; `rows={8}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L560–561 |
| Ideas clave | `<ul>` 5 viñetas draft L562–568 |
| Siguiente paso | enlace textual `09-estructuras-de-datos` draft L570 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="08-this-scope-clases" track="pbpew" />` |

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
| `AmbitoScopeSection.tsx` | Poblar: `CompareTable`, `MermaidDiagram`, `StepReveal`, 2 `CodeFiddle`, `Callout`, `CodeChallenge`, `PracticeExercise`, H3 |
| `ThisSection.tsx` | Poblar: 3 `CodeFiddle`, `CompareTable`, `MermaidDiagram`, `Callout`, 2 `PracticeExercise`, 2 H3 |
| `ClasesYMetodosSection.tsx` | Poblar: `StepReveal`, `MermaidDiagram`, 2 `CodeFiddle`, `Callout`, `CodeChallenge`, `PracticeExercise`, 2 H3 |
| `HerenciaSection.tsx` | Poblar: `MermaidDiagram`, `CodeFiddle`, 2 `Callout`, `CodeChallenge`, `PracticeExercise`, preview prose |
| `ResumenSection.tsx` | Viñetas draft L442–450 |
| `ThisScopeClasesLesson.tsx` | Orden 10 secciones + imports según bloque superior |

## Checklist lesson-developer

- [ ] H2 SEO según lesson-spec § Voice notes (scope, `this`, clases, herencia)
- [ ] H3: sombreado/bucles, método vs llamada suelta, flechas/callbacks, flujo `new`, flechas en métodos
- [ ] Migrar todo código → `CodeFiddle` (9 bloques en draft)
- [ ] Crear `ObjetivosSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Poblar `AmbitoScopeSection`, `ThisSection`, `ClasesYMetodosSection`, `HerenciaSection` (stubs → draft)
- [ ] Registrar quiz `08-this-scope-clases` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `ThisScopeClasesLesson.tsx` con orden y imports
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § Brand

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `07-arrays-json-objetos` |
| `next` | `09-estructuras-de-datos` |
