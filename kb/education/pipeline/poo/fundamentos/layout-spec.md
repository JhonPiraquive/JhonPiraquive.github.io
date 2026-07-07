---
track: poo
slug: fundamentos
title: "Fundamentos de POO"
order: 1
prev: null
next: encapsulamiento
---

## FundamentosLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsLaProgramacionSection />
<QueEsUnObjetoSection />
<QueEsUnaClaseSection />
<QueEsUnaInstanciaSection />
<QueEsUnConstructorSection />
<CompruebaTuComprensionSection />
<ResumenSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizSection />
```

Imports a añadir en `FundamentosLesson.tsx`: `ObjetivosDelTemaSection`, `CompruebaTuComprensionSection`, `ResumenSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | — | Prose `<ul>` con objetivos medibles del draft L20–26. |
| 2 | ¿Qué es la Programación Orientada a Objetos (POO)? | `sections/QueEsLaProgramacionSection.tsx` | `CodeFiddle` (`carro-acelerar`), `MermaidDiagram` (`carro-class-diagram`), `Callout` ×2, `CodeFiddle` (`carro-malo-setter`), `PracticeExercise` (`practica-carrito-objeto`) | H3 pedagógicos ×5 (Mapa mental, Qué es, Para qué sirve, Señales, Ejemplo de vida real). Migrar `CodeBlock` → `CodeFiddle` `language="csharp"`. |
| 3 | ¿Qué es un Objeto? | `sections/QueEsUnObjetoSection.tsx` | `CodeFiddle` (`cuenta-bancaria-retirar`), `MermaidDiagram` (`cuenta-bancaria-class`), `CompareTable` (`estado-vs-comportamiento`), `PracticeExercise` (`practica-depositar`) | Tabla estado/comportamiento: 2 filas (draft L201–204). |
| 4 | ¿Qué es una Clase? | `sections/QueEsUnaClaseSection.tsx` | `CodeFiddle` (`producto-molde`), `MermaidDiagram` (`producto-class-diagram`), `CompareTable` (`clase-instancia-objeto`), `Callout` (`error-frecuente-clase-objeto`), `CodeChallenge` (`completa-new-decimal`) | CompareTable 3 filas Clase / Instancia / Objeto (draft L284–292). |
| 5 | ¿Qué es una Instancia? | `sections/QueEsUnaInstanciaSection.tsx` | `CodeFiddle` ×2 (`instancias-producto`, `catalogo-list-producto`), `MermaidDiagram` (`instancias-flowchart`), `StepReveal` (`creacion-objeto-csharp`), `PracticeExercise` (`analogia-receta-galleta`) | Único `StepReveal` de la lección (clay stepper). |
| 6 | ¿Qué es un Constructor y para qué se usa? | `sections/QueEsUnConstructorSection.tsx` | `CodeFiddle` (`pedido-constructor-pagar`), `MermaidDiagram` (`constructor-pedido-flow`), `Callout` (`caso-constructor-vacio`), `PracticeExercise` (`cuando-no-poo`) | H3 convenciones C# (prose `<ul>`, draft L475–481). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | Apilar `my-8` cada uno. Props draft L512–534. |
| 8 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas draft L498–504. Mencionar siguiente lección `encapsulamiento`. |
| 9 | Reto integrador: diseña tu primer dominio | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` (`reto-restaurante-esqueleto`), `PracticeExercise` (`reto-restaurante`) | Enunciado prose + blockquote (draft L538–551). Textarea larga (`rows={8}`). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | Prose: párrafo cierre + ideas clave (4 viñetas draft L597–602) + siguiente paso `encapsulamiento`. Sin quiz inline (patrón PBPEW/SEA). |
| 11 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | `QuizSection slug="fundamentos" track="poo"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `fundamentos` con 5 preguntas del draft L610–667 (`cierre-quiz`):

| # | Tema |
|---|------|
| 1 | ¿Qué define mejor a un objeto en POO? |
| 2 | V/F: public set en todos los datos |
| 3 | Keyword `new` para instanciar |
| 4 | Cuándo se ejecuta el constructor |
| 5 | Beneficio típico de POO bien aplicada |

**Infra:** crear `poo.ts`; extender `QuizSection.tsx` `QUIZ_MAP` con `poo: POO_QUIZZES`.

## Bloques interactivos — props detalladas

### `QueEsLaProgramacionSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | 4 viñetas draft L46–49 |
| `carro-acelerar` | `CodeFiddle` | `language="csharp"`; `title`: «Ejemplo C# (mínimo)»; code draft L76–98 |
| `carro-class-diagram` | `MermaidDiagram` | chart draft L101–104 |
| `anti-ejemplo-setter-publico` | `Callout` | `variant`: `callout-warning`; title + children draft L106–110 |
| `carro-malo-setter` | `CodeFiddle` | `language="csharp"`; code draft L112–119 |
| `caso-saldo-negativo-setter` | `Callout` | `variant`: `callout-info`; title + children draft L121–125 |
| `practica-carrito-objeto` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L131–137 |

### `QueEsUnObjetoSection`

| id | componente | props |
|----|------------|-------|
| `cuenta-bancaria-retirar` | `CodeFiddle` | `language="csharp"`; code draft L169–190 |
| `cuenta-bancaria-class` | `MermaidDiagram` | chart draft L194–197 |
| `estado-vs-comportamiento` | `CompareTable` | headers: Concepto, Representación en C#, Ejemplo; rows draft L201–204 |
| `practica-depositar` | `PracticeExercise` | draft L208–214 |

### `QueEsUnaClaseSection`

| id | componente | props |
|----|------------|-------|
| `producto-molde` | `CodeFiddle` | `language="csharp"`; code draft L249–277 |
| `producto-class-diagram` | `MermaidDiagram` | chart draft L279–282 |
| `clase-instancia-objeto` | `CompareTable` | headers: Término, Qué es, Ejemplo en C#; rows draft L287–291 |
| `error-frecuente-clase-objeto` | `Callout` | `variant`: `callout-warning`; draft L294–298 |
| `completa-new-decimal` | `CodeChallenge` | title, template, blanks draft L304–312 |

### `QueEsUnaInstanciaSection`

| id | componente | props |
|----|------------|-------|
| `instancias-producto` | `CodeFiddle` | `language="csharp"`; code draft L327–331 |
| `catalogo-list-producto` | `CodeFiddle` | `language="csharp"`; code draft L351–365 |
| `instancias-flowchart` | `MermaidDiagram` | chart draft L367–370 |
| `creacion-objeto-csharp` | `StepReveal` | title: «Creación de un objeto en C#»; steps[5] draft L375–396 |
| `analogia-receta-galleta` | `PracticeExercise` | draft L401–407 |

### `QueEsUnConstructorSection`

| id | componente | props |
|----|------------|-------|
| `pedido-constructor-pagar` | `CodeFiddle` | `language="csharp"`; code draft L440–462 |
| `constructor-pedido-flow` | `MermaidDiagram` | chart draft L464–467 |
| `caso-constructor-vacio` | `Callout` | `variant`: `callout-info`; draft L469–473 |
| Convenciones C# | prose `<ul>` | 5 viñetas draft L475–481 |
| `cuando-no-poo` | `PracticeExercise` | draft L487–493 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-retirar-saldo` | `PracticeExercise` | draft L512–518 |
| `comprension-orden-ciclo-vida` | `PracticeExercise` | draft L520–526 |
| `comprension-vf-instancias` | `PracticeExercise` | draft L528–534 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose | blockquote + lista 4 criterios + extensión opcional draft L538–551 |
| `reto-restaurante-esqueleto` | `CodeFiddle` | `language="csharp"`; `title`: «Esqueleto de partida»; code draft L553–576 |
| `reto-restaurante` | `PracticeExercise` | prompt, 4 hints, keywords draft L578–589 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

Secciones conceptuales 2–6 existen como stubs; poblar interactivos desde draft y migrar `CodeBlock` → `CodeFiddle`.

## Checklist lesson-developer

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] H3 pedagógicos repetidos en secciones 2–6 (Mapa mental, Qué es, Para qué sirve, Señales, Ejemplo de vida real)
- [ ] Poblar interactivos en secciones 2–6 (stub → draft); todos los snippets con `CodeFiddle` `language="csharp"`
- [ ] Crear `ObjetivosDelTemaSection`, `CompruebaTuComprensionSection`, `ResumenSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Registrar quiz en `teaching-quizzes/poo.ts`; extender `QuizSection` `QUIZ_MAP`
- [ ] Actualizar `FundamentosLesson.tsx` con orden e imports
- [ ] Actualizar `lesson-meta.ts` (seo desde lesson-spec si aplica)

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `null` |
| `next` | `encapsulamiento` |

## Mínimos pedagógicos (pedagogy-standards)

| requisito | cubierto por |
|-----------|--------------|
| `PracticeExercise` o `CodeChallenge` (1+) | 8 `PracticeExercise` + 1 `CodeChallenge` |
| `Quiz` (3–5 preguntas) | `MiniquizSection` → 5 preguntas en `poo.ts` |
| `MermaidDiagram` o `StepReveal` (1+) | 5 `MermaidDiagram` + 1 `StepReveal` |
