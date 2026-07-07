---
track: poo
slug: encapsulamiento
title: "Encapsulamiento"
order: 2
prev: fundamentos
next: herencia
---

## EncapsulamientoLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<EncapsulamientoQueEsYSection />
<InvariantesReglasQueElSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizSection />
```

Imports a añadir en `EncapsulamientoLesson.tsx`: `ObjetivosSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

**Regla código:** todos los snippets de lectura → `CodeFiddle` con `language="csharp"` (migrar `CodeBlock` existente). Sin otros lenguajes en esta lección.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | — | **Nuevo.** Prose: 6 objetivos (draft L17–24) + prerrequisitos (draft L26–30). H2 sin prefijo numérico. |
| 2 | Encapsulamiento: qué es y para qué sirve | `sections/EncapsulamientoQueEsYSection.tsx` | `CompareTable` ×2, `Callout` ×2, `CodeFiddle` ×4, `MermaidDiagram` ×2, `StepReveal`, `PracticeExercise` | **Existe (stub).** Poblar interactivos; H2 sin `1)`. Clay variant **stepper** (lesson-spec). |
| 3 | Invariantes (reglas que el objeto protege) | `sections/InvariantesReglasQueElSection.tsx` | `Callout`, `CodeFiddle`, `MermaidDiagram`, `CodeChallenge`, `PracticeExercise` ×2 | **Existe (stub).** Clay variant **card**. |
| 4 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 7 viñetas (draft L346–354) + preview `protected` / lección `herencia`. |
| 5 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L360) + 3 ejercicios (draft L362–384). |
| 6 | Reto integrador: auditar el módulo de inventario | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + tareas numeradas + código esqueleto + extensión opcional `CodeFiddle`. |
| 7 | Cierre | `sections/CierreSection.tsx` | — | **Nuevo.** Párrafo cierre + ideas clave (draft L467–477) + enlace `herencia`. Sin quiz inline. |
| 8 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="encapsulamiento" track="poo"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `encapsulamiento` con 5 preguntas del draft L485–540 (`cierre-quiz`):

| # | Tema |
|---|------|
| 1 | V/F: encapsular ≠ esconder todo |
| 2 | Señal de buen encapsulamiento (métodos de dominio) |
| 3 | V/F: cambiar implementación interna sin romper clientes |
| 4 | Dónde validar invariantes (constructor + mutadores) |
| 5 | Patrón `{ get; private set; }` |

**Infra:** crear `poo.ts`; extender `QuizSection.tsx` `QUIZ_MAP` con `poo: POO_QUIZZES`.

## Bloques interactivos — props detalladas

### `EncapsulamientoQueEsYSection`

| id | componente | props |
|----|------------|-------|
| `tabla-modificadores-acceso` | `CompareTable` | headers: Modificador, Visibilidad típica; rows: public, private, protected, internal (draft L57–62) |
| `saldo-public-set-vs-private-set` | `CompareTable` | headers + rows draft L67–75 |
| `error-setter-publico-todo` | `Callout` | title: «Error frecuente — setter público en todo»; children draft L87 |
| `caso-incidente-bancario` | `Callout` | title: «Caso real — incidente bancario»; children draft L94–96; variant **callout-info** |
| `cuenta-bancaria-basica` | `CodeFiddle` | `language="csharp"`; `title`: «Encapsulamiento básico»; code draft L101–141 |
| `cuenta-insegura-anti-ejemplo` | `CodeFiddle` | `language="csharp"`; `title`: «Anti-ejemplo — setter público»; code draft L147–155 |
| `ejemplo-acceso-modificadores` | `CodeFiddle` | `language="csharp"`; `title`: «Modificadores de acceso»; code draft L160–168 |
| `class-diagram-cuenta-bancaria` | `MermaidDiagram` | chart draft L172 |
| `ciclo-retirar-encapsulado` | `StepReveal` | title: «Ciclo de una operación encapsulada (Retirar)»; steps[5] draft L178–199 |
| `flujo-cliente-objeto-encapsulado` | `MermaidDiagram` | chart draft L204 |
| `producto-cantidad-privada` | `CodeFiddle` | `language="csharp"`; `title`: «Propiedad con campo privado»; code draft L212–233 |
| `analogia-cajero-automatico` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L237–241 |

### `InvariantesReglasQueElSection`

| id | componente | props |
|----|------------|-------|
| `error-constructor-sin-validar` | `Callout` | title: «Error frecuente — olvidar validar en el constructor»; children draft L276 |
| `reserva-invariante-fechas` | `CodeFiddle` | `language="csharp"`; `title`: «Invariante de fechas»; code draft L286–302 |
| `flujo-validacion-invariantes` | `MermaidDiagram` | chart draft L307 |
| `reserva-constructor-invariante` | `CodeChallenge` | title: «Completa la validación en el constructor de Reserva»; template + blanks draft L311–317 |
| `dto-vs-dominio` | `PracticeExercise` | draft L325–330 |
| `saldo-get-set-vs-private-set` | `PracticeExercise` | draft L337–342 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-asignacion-directa-cantidad` | `PracticeExercise` | draft L363–368 |
| `comprension-validacion-solo-ui` | `PracticeExercise` | draft L371–376 |
| `comprension-orden-constructor-reserva` | `PracticeExercise` | draft L379–384 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| `codigo-inventario-inseguro` | `CodeFiddle` | `language="csharp"`; `title`: «Módulo de inventario (antes)»; code draft L395–415 |
| `reto-auditar-inventario` | `PracticeExercise` | prompt, 5 hints, keywords draft L428–439; textarea larga (`rows={6}`) |
| `cuenta-limite-diario-extension` | `CodeFiddle` | `language="csharp"`; `title`: «Extensión opcional — límite diario»; code draft L446–462; bajo H3 extensión |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | prose only |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Componentes existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `EncapsulamientoQueEsYSection.tsx` | Migrar `CodeBlock` → `CodeFiddle` (csharp); añadir `CompareTable`, `Callout`, `StepReveal`, `PracticeExercise`; completar prose faltante (modificadores, estado vs interfaz, cajero); quitar prefijo `1)` en H2 |
| `InvariantesReglasQueElSection.tsx` | Migrar `CodeBlock` → `CodeFiddle`; añadir `Callout`, `MermaidDiagram`, `CodeChallenge`, `PracticeExercise` ×2; completar prose DTO vs dominio y orden constructor |

## Checklist lesson-developer

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]` (sin prefijos numéricos)
- [ ] Solo `CodeFiddle` con `language="csharp"` — eliminar `CodeBlock` en esta lección
- [ ] Poblar interactivos en secciones 2–3 (stubs → draft)
- [ ] Crear secciones 1, 4–8
- [ ] Registrar quiz en `teaching-quizzes/poo.ts`; extender `QuizSection` con track `poo`
- [ ] Actualizar `EncapsulamientoLesson.tsx` con orden e imports completos
- [ ] Clay UI según `lesson-spec.md` § Clay UI (callout-warning / callout-info / stepper)

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `fundamentos` |
| `next` | `herencia` |
