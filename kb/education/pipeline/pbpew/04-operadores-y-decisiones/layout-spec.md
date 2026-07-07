---
track: pbpew
slug: 04-operadores-y-decisiones
title: "Operadores y control de flujo: comparación estricta, if y switch"
order: 4
prev: "03-variables-y-tipos"
next: "05-bucles-y-errores"
---

## OperadoresYDecisionesLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<OperadoresAritmeticosSection />
<OperadoresLogicosSection />
<IfElseIfElseSection />
<SwitchSection />
<ResumenSection />
<CompruebaTuComprensionSection />   {/* nuevo */}
<RetoIntegradorSection />           {/* nuevo */}
<CierreSection />                   {/* nuevo */}
<MiniquizSection />                 {/* nuevo */}
```

Imports a añadir en `OperadoresYDecisionesLesson.tsx`: `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | Prosa apertura (draft L36–38; copy Brand L122–124) + regla curso `===` + `<ul>` objetivos medibles (draft L17–23). |
| 2 | Operadores aritméticos | `sections/OperadoresAritmeticosSection.tsx` | `CompareTable`, `CodeFiddle` ×3, H3 comparación, `Callout`, `PracticeExercise` | H3: «Comparación estricta frente a coerción» (Brand L40). Tabla aritméticos draft L52–59. |
| 3 | Operadores lógicos y valores truthy | `sections/OperadoresLogicosSection.tsx` | `CompareTable`, `MermaidDiagram` ×2, `CodeFiddle` ×2, `StepReveal`, `Callout`, `PracticeExercise`, `CodeChallenge` | Sección más densa. Truthy/falsy draft L116–120. |
| 4 | Estructuras condicionales: if, else if y else | `sections/IfElseIfElseSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×2, `Callout`, `CodeChallenge`, `PracticeExercise` | Validación `Number.isNaN` (draft L217–219). |
| 5 | La sentencia `switch` | `sections/SwitchSection.tsx` | `CompareTable`, `MermaidDiagram`, `CodeFiddle` ×2, `StepReveal`, `Callout`, `CodeChallenge`, `PracticeExercise` | CompareTable if vs switch draft L289–298. |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas 7 puntos (draft L391–398). Mencionar lección siguiente `05-bucles-y-errores`. |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×2, `CodeChallenge` | **Nuevo.** Intro prose (draft L404). Ejercicios apilados `my-8` cada uno. |
| 8 | Reto integrador: motor de tarifas del gimnasio | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Enunciado + lista requisitos (draft L436–457). Solución referencia en CodeFiddle. |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Prose: párrafo cierre + ideas clave (5 viñetas) + siguiente paso `05-bucles-y-errores`. Sin quiz inline (patrón PBPEW 03). |
| 10 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="04-operadores-y-decisiones" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `04-operadores-y-decisiones` con 5 preguntas del draft L542–601:

| # | Tema |
|---|------|
| 1 | `5 === "5"` → false (igualdad estricta) |
| 2 | Valor falsy: `0` (vs `"0"`, `[]`, `{}`) |
| 3 | `break` tras `case` para evitar fall-through |
| 4 | `&&` — ambas condiciones truthy |
| 5 | Módulo `%` — resto de `10 / 3` |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts` (slug aún no registrado).

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Prosa apertura | prose `<p>` | Enlace operadores y decisiones (draft L36–38; copy Brand L122–124) |
| `regla-curso-strict-eq` | `Callout` | `variant="callout-info"`; title: «Regla del curso»; children draft L40–44 (refinado Brand L58–63) |
| Objetivos medibles | prose `<ul>` | 5 ítems draft L17–23 |

### `OperadoresAritmeticosSection`

| id | componente | props |
|----|------------|-------|
| `tabla-operadores-aritmeticos` | `CompareTable` | headers: Operador, Nombre, Ejemplo, Resultado; rows draft L52–59 |
| Precedencia / división por cero | prose `<p>` | Precedencia y `10 / 0` → `Infinity` (draft L61–63) |
| `aritmetica-basica` | `CodeFiddle` | `language="javascript"`; code draft L66–73 |
| `precedencia-concatenacion` | `CodeFiddle` | `language="javascript"`; code draft L76–79 |
| Comparación (H3) | `<h3>` | «Comparación estricta frente a coerción» — `mt-6 mb-2 text-xl font-semibold` |
| `comparacion-estricta-coercion` | `CodeFiddle` | `language="javascript"`; code draft L90–96 |
| `caso-portal-roles` | `Callout` | `variant="callout-info"`; title: «Caso real: portal con roles»; children draft L98–102 (Brand L65–70) |
| `practice-strict-eq-input` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L104–110 |

### `OperadoresLogicosSection`

| id | componente | props |
|----|------------|-------|
| Truthy/falsy intro | prose | Lista falsy + nota `"0"`, `[]` (draft L116–120) |
| `tabla-operadores-logicos` | `CompareTable` | headers: Operador, Nombre, Comportamiento; rows `&&`, `\|\|`, `!` draft L122–126 |
| Cortocircuito | prose `<p>` | Patrón `input \|\| "invitado"` (draft L128) |
| `mermaid-truthy-falsy` | `MermaidDiagram` | chart draft L130–133 |
| `operadores-logicos-basico` | `CodeFiddle` | `language="javascript"`; code draft L136–144 |
| `ejemplos-truthy-falsy` | `CodeFiddle` | `language="javascript"`; code draft L147–151 |
| `stepreveal-condicion-compuesta` | `StepReveal` | title: «Evaluación de una condición compuesta»; steps[5] draft L153–178 |
| `mermaid-cortocircuito-and` | `MermaidDiagram` | chart draft L180–183 |
| `error-frecuente-truthy-cero` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L185–189 (Brand L72–77) |
| `practice-valores-falsy` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L191–197 |
| `challenge-acceso-condicional` | `CodeChallenge` | title: «Completa el código: acceso condicional»; template, blanks `&&` ×2 draft L199–207 |

### `IfElseIfElseSection`

| id | componente | props |
|----|------------|-------|
| Validación NaN | prose `<p>` | `Number.isNaN` antes de rangos (draft L213–219) |
| `mermaid-flujo-if-elseif` | `MermaidDiagram` | chart draft L221–224 |
| `if-nota-aprobacion` | `CodeFiddle` | `language="javascript"`; code draft L227–237 |
| `if-temperatura-rangos` | `CodeFiddle` | `language="javascript"`; code draft L240–250 |
| `error-frecuente-asignacion` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L252–256 (Brand L79–84) |
| `challenge-usuario-activo` | `CodeChallenge` | title: «Completa el código: validar usuario activo»; blanks `!==`, `&&`, `true` draft L258–267 |
| `practice-clasificar-temperatura` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L269–275 |

### `SwitchSection`

| id | componente | props |
|----|------------|-------|
| Prose switch | prose | `break`, `default`, rangos → if (draft L281–287) |
| `compare-if-vs-switch` | `CompareTable` | headers: Criterio, if / else if, switch; rows draft L289–298 |
| `mermaid-flujo-switch` | `MermaidDiagram` | chart draft L300–303 |
| `switch-dias-clase` | `CodeFiddle` | `language="javascript"`; code draft L306–320 |
| `switch-fall-through-bug` | `CodeFiddle` | `language="javascript"`; code draft L323–336 |
| `stepreveal-ejecucion-switch` | `StepReveal` | title: «Ejecución paso a paso de switch»; steps[5] draft L338–363 |
| `caso-ecommerce-descuento` | `Callout` | `variant="callout-info"`; title: «Caso real: descuento duplicado en e-commerce»; children draft L365–369 (Brand L86–91) |
| `challenge-switch-fin-semana` | `CodeChallenge` | title: «Completa el código: switch de fin de semana»; blank `break` draft L371–378 |
| `practice-coercion-consola` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L380–386 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 7 puntos draft L391–398 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose `<p>` | draft L404 |
| `comprension-cortocircuito-and` | `PracticeExercise` | orden evaluación `&&` draft L406–412 |
| `comprension-operadores-aritmeticos` | `CodeChallenge` | title: «Completa el código: operadores aritméticos»; blanks `%`, `**` draft L414–422 |
| `comprension-flujo-elseif` | `PracticeExercise` | a falsy, b truthy → else if draft L424–430 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | contexto gimnasio + 5 requisitos + bonus + criterio éxito (draft L436–457) |
| `reto-enunciado-variables` | `CodeFiddle` | `language="javascript"`; code draft L441–445; `title`: «Variables de entrada simuladas» |
| `reto-solucion-referencia` | `CodeFiddle` | `language="javascript"`; code draft L460–507; `title`: «Solución de referencia — motor de tarifas» |
| `reto-motor-tarifas` | `PracticeExercise` | prompt, 4 hints, keywords, successMessage draft L509–520; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L526–527 (copy Brand L126–128) |
| Ideas clave | `<ul>` 5 viñetas draft L528–534 |
| Siguiente paso | enlace textual `05-bucles-y-errores` draft L536 |

### `MiniquizSection`

| id | componente | props |
|----|------------|-------|
| `miniquiz-operadores-decisiones` | `QuizSection` | `slug="04-operadores-y-decisiones"` `track="pbpew"`; H2 «Mini-quiz» |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×2, `CodeChallenge` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle` ×2, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ObjetivosSection.tsx` | Poblar prosa apertura + `Callout` regla curso + lista objetivos draft L17–23 |
| `OperadoresAritmeticosSection.tsx` | Poblar `CompareTable`, 3 `CodeFiddle`, H3 comparación, `Callout`, `PracticeExercise` |
| `OperadoresLogicosSection.tsx` | Poblar `CompareTable`, 2 `MermaidDiagram`, 2 `CodeFiddle`, `StepReveal`, `Callout`, `PracticeExercise`, `CodeChallenge` |
| `IfElseIfElseSection.tsx` | Poblar `MermaidDiagram`, 2 `CodeFiddle`, `Callout`, `CodeChallenge`, `PracticeExercise` |
| `SwitchSection.tsx` | Poblar `CompareTable`, `MermaidDiagram`, 2 `CodeFiddle`, `StepReveal`, `Callout`, `CodeChallenge`, `PracticeExercise` |
| `ResumenSection.tsx` | Viñetas draft L391–398 |

## Checklist lesson-developer

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] H3 «Comparación estricta frente a coerción» bajo `OperadoresAritmeticosSection`
- [ ] Migrar todo código → `CodeFiddle` (11 bloques en draft)
- [ ] Poblar interactivos en secciones 1–5 (stubs → draft)
- [ ] Crear `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Registrar quiz `04-operadores-y-decisiones` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `OperadoresYDecisionesLesson.tsx` con orden y imports
- [ ] Actualizar `lesson-meta.ts` seoDescription desde lesson-spec si aplica

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `03-variables-y-tipos` |
| `next` | `05-bucles-y-errores` |
