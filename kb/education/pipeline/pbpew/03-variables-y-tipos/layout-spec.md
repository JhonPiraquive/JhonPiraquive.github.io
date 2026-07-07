---
track: pbpew
slug: 03-variables-y-tipos
title: "Variables, hoisting y tipos de datos"
order: 3
prev: "02-js-en-html"
next: "04-operadores-y-decisiones"
---

## VariablesYTiposLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<QueEsUnaVariableSection />
<VarLetYConstSection />
<TiposDeDatosPrincipalesSection />
<ResumenSection />
<CompruebaTuComprensionSection />   {/* nuevo */}
<RetoIntegradorSection />           {/* nuevo */}
<CierreSection />                   {/* nuevo */}
<MiniquizSection />                 {/* nuevo */}
```

Imports a añadir en `VariablesYTiposLesson.tsx`: `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | — | Prose `<ul>` con objetivos medibles del draft L16–23. |
| 2 | ¿Qué es una variable? | `sections/QueEsUnaVariableSection.tsx` | `Callout` ×2, `MermaidDiagram`, `CodeFiddle` | Poblar stub actual. Declaración vs asignación, tipado dinámico (draft L39–48). |
| 3 | var, let y const | `sections/VarLetYConstSection.tsx` | `CompareTable`, `CodeFiddle` ×5, H4 Hoisting, `StepReveal`, `MermaidDiagram`, `Callout`, `CodeChallenge` | Sección más densa. Regla práctica const/let/var (draft L82–86). |
| 4 | Tipos de datos principales | `sections/TiposDeDatosPrincipalesSection.tsx` | H3 ×3, `CompareTable`, `MermaidDiagram`, `CodeFiddle` ×3, `StepReveal`, `Callout`, `PracticeExercise` ×2, `CodeChallenge` | Tabla 7 primitivos → `CompareTable` (draft L213–221). |
| 5 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas 7 puntos (draft L324–332). Mencionar lección siguiente `04-operadores-y-decisiones`. |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L338). Ejercicios apilados `my-8` cada uno. |
| 7 | Reto integrador: depurar el módulo de perfil | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + lista tareas (draft L368–413). CodeFiddle con script buggy. |
| 8 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Prose: párrafo cierre + ideas clave (5 viñetas) + siguiente paso `04-operadores-y-decisiones`. Sin quiz inline (patrón SEA/01). |
| 9 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** Patrón SEA: `QuizSection slug="03-variables-y-tipos" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `03-variables-y-tipos` con 5 preguntas del draft L449–507:

| # | Tema |
|---|------|
| 1 | `const` para URL de API estable |
| 2 | TDZ con `let` (`console.log(x); let x = 5`) |
| 3 | Mutación de array con `const` (`lista.push`) |
| 4 | `typeof null` → `"object"` |
| 5 | Copia por referencia (`a.n` tras mutar vía `b`) |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts` (ya existe con `01-intro-js-y-dom`).

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `QueEsUnaVariableSection`

| id | componente | props |
|----|------------|-------|
| `error-frecuente-nombre-vs-valor` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L52–53 |
| `primitivo-vs-referencia` | `MermaidDiagram` | chart draft L57–58 |
| `let-contador-const-url` | `CodeFiddle` | `language="javascript"`; code draft L63–67 |
| `caso-checkout-ecommerce` | `Callout` | `variant="callout-info"`; title: «Caso real: checkout e-commerce»; children draft L72–73 |

### `VarLetYConstSection`

| id | componente | props |
|----|------------|-------|
| Regla práctica | prose `<ol>` | 3 reglas const/let/var (draft L84–86) |
| `var-let-const-comparativa` | `CompareTable` | headers: Palabra, Reasignar, Redeclarar, Alcance, Hoisting inicial; rows draft L99–103 |
| `let-const-basico` | `CodeFiddle` | `language="javascript"`; code draft L107–112 |
| `const-mutacion-objeto` | `CodeFiddle` | `language="javascript"`; code draft L117–120 |
| `var-bloque-vs-let` | `CodeFiddle` | `language="javascript"`; code draft L125–130 |
| Hoisting (H4) | `<h4>` | «Hoisting (“elevación”)» — draft L133 |
| `ciclo-vida-variable` | `StepReveal` | title: «Ciclo de vida de una variable»; steps[5] draft L143–164 |
| `fases-hoisting` | `MermaidDiagram` | chart draft L168–169 |
| `hoisting-var-undefined` | `CodeFiddle` | `language="javascript"`; code draft L174–176 |
| `hoisting-let-tdz` | `CodeFiddle` | `language="javascript"`; code draft L181–186 |
| `caso-panel-configuracion` | `Callout` | `variant="callout-info"`; title: «Caso real: panel de configuración»; children draft L191–192 |
| `contador-let-const` | `CodeChallenge` | title, template, blanks draft L196–202 |

### `TiposDeDatosPrincipalesSection`

| id | componente | props |
|----|------------|-------|
| Tipos primitivos (H3) | `CompareTable` | headers: Tipo, Descripción, Ejemplo de uso; rows draft L215–220 |
| Objetos (H3) | prose | copia por referencia (draft L225–227) |
| typeof (H3) | prose | peculiaridad `typeof null` (draft L229–233) |
| `arbol-tipos-js` | `MermaidDiagram` | chart draft L236–237 |
| `typeof-ejemplos` | `CodeFiddle` | `language="javascript"`; code draft L242–256 |
| `typeof-consola-pasos` | `StepReveal` | title: «typeof en consola — resultado esperado»; steps[5] draft L262–267 |
| `copia-referencia-objeto` | `CodeFiddle` | `language="javascript"`; code draft L273–278 |
| `coercion-preview-04` | `Callout` | `variant="callout-warning"`; title: «Coerción de tipos (preview lección 04)»; children draft L283–284 |
| `coercion-ejemplos` | `CodeFiddle` | `language="javascript"`; code draft L289–292 |
| `const-vs-let-equipos` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L296–300 |
| `undefined-vs-null` | `PracticeExercise` | draft L303–308 |
| `inspeccionar-tipos` | `CodeChallenge` | title, template, blanks draft L312–319 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-referencia-objeto` | `PracticeExercise` | prompt, hints, keywords draft L341–345 |
| `comprension-let-const-errores` | `PracticeExercise` | draft L348–353 |
| `comprension-hoisting-tdz` | `PracticeExercise` | draft L356–361 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + lista `<ol>` | contexto QA + 4 tareas + criterio éxito (draft L368–413) |
| `reto-modulo-perfil-codigo` | `CodeFiddle` | `language="javascript"`; code draft L374–403; `title`: «Script con bugs — módulo de perfil» |
| `reto-modulo-perfil` | `PracticeExercise` | prompt, 5 hints, keywords, successMessage draft L416–426; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L432–433 |
| Ideas clave | `<ul>` 5 viñetas draft L436–441 |
| Siguiente paso | enlace textual `04-operadores-y-decisiones` draft L443 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ObjetivosSection.tsx` | Actualizar copy al draft L16–23 |
| `QueEsUnaVariableSection.tsx` | Poblar 2 `Callout`, `MermaidDiagram`, `CodeFiddle` |
| `VarLetYConstSection.tsx` | Poblar `CompareTable`, 5 `CodeFiddle`, H4, `StepReveal`, `MermaidDiagram`, `Callout`, `CodeChallenge` |
| `TiposDeDatosPrincipalesSection.tsx` | Poblar `CompareTable`, `MermaidDiagram`, 3 `CodeFiddle`, `StepReveal`, `Callout`, 2 `PracticeExercise`, `CodeChallenge` |
| `ResumenSection.tsx` | Viñetas draft L324–332 |

## Checklist lesson-developer

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] H4 Hoisting bajo `VarLetYConstSection` (no mezclar en párrafo plano)
- [ ] Migrar todo `CodeBlock` → `CodeFiddle` (10 bloques de código en draft)
- [ ] Poblar interactivos en secciones 2–4 (stubs → draft)
- [ ] Crear `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Registrar quiz `03-variables-y-tipos` en `teaching-quizzes/pbpew.ts`
- [ ] Actualizar `VariablesYTiposLesson.tsx` con orden y imports
- [ ] Actualizar `lesson-meta.ts` seoDescription desde lesson-spec si aplica

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `02-js-en-html` |
| `next` | `04-operadores-y-decisiones` |
