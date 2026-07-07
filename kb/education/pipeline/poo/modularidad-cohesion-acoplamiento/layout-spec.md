---
track: poo
slug: modularidad-cohesion-acoplamiento
title: "Modularidad, Cohesión y Acoplamiento"
order: 10
prev: solid-principios
next: null
---

## ModularidadCohesionAcoplamientoLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<ModularidadSection />
<CohesionSection />
<AcoplamientoSection />
<ChecklistDisenoSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

**Renombrar/refactor:** `AcoplamientoCouplingSection` → `AcoplamientoSection`; `ChecklistRapidoPracticoSection` → `ChecklistDisenoSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout`, `CompareTable` | **Nuevo.** 5 objetivos + prerrequisitos + tabla modularidad/cohesión/acoplamiento (draft L34–54). |
| 2 | Modularidad | `sections/ModularidadSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `StepReveal` | Refactor stub existente. H2 sin prefijo «1)». |
| 3 | Cohesión | `sections/CohesionSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `PracticeExercise` | Refactor stub existente. H2 sin prefijo «2)». |
| 4 | Acoplamiento | `sections/AcoplamientoSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `CompareTable`, `PracticeExercise` | Refactor desde `AcoplamientoCouplingSection`. H2 sin prefijo «3)». |
| 5 | Checklist práctico de diseño | `sections/ChecklistDisenoSection.tsx` | `StepReveal`, `CodeFiddle`, `MermaidDiagram` | Refactor desde `ChecklistRapidoPracticoSection`. H2 sin prefijo «4)». Cierre conceptual del track. |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** Viñetas 6 puntos — lección final track (draft L351–360). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L368). Ejercicios `my-8`. |
| 8 | Reto integrador: mini-sistema de compras | `sections/RetoIntegradorSection.tsx` | `MermaidDiagram`, `PracticeExercise` | **Nuevo.** Partes A–D + diagrama dependencias (draft L408–458). |
| 9 | Cierre del track POO | `sections/CierreSection.tsx` | — | **Nuevo.** Cierre track completo + recorrido + checklist en proyectos (draft L462–479). **Sin `next`.** |
| 10 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="modularidad-cohesion-acoplamiento" track="poo"`. |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `modularidad-cohesion-acoplamiento` con 5 preguntas del draft L489–528:

| # | Tema |
|---|------|
| 1 | V/F: modularidad = solo muchas carpetas |
| 2 | Qué ayuda más a la modularidad (interfaces y límites) |
| 3 | V/F: alta cohesión mejora mantenimiento |
| 4 | V/F: `new PdfGenerator()` en dominio aumenta acoplamiento |
| 5 | Reducir acoplamiento — depender de interfaces |

**Infra:** `<QuizSection slug="modularidad-cohesion-acoplamiento" track="poo" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO / lesson-draft) |
|-------|-----------------------------------|
| `seoTitle` | `Modularidad, cohesión y acoplamiento en C# \| Cierre track POO` |
| `seoDescription` | `Integra SOLID con modularidad, alta cohesión y bajo acoplamiento. Checklist práctico, IReporteRenderer, split de Utilidades y reto final del track POO en C#.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: csharp -->` del draft → `CodeFiddle` con `language="csharp"` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L17–23 |
| Prerrequisitos | prose `<ul>` | SOLID, diagramas, abstracción, polimorfismo (draft L25–30) |
| Intro | prose | tres pilares del track (draft L38) |
| `objetivo-de-diseno` | `Callout` | `variant="callout-info"`; title: «Objetivo de diseño»; children draft L43 |
| `modularidad-cohesion-acoplamiento-tabla` | `CompareTable` | headers: `["Concepto", "Pregunta clave", "Ideal"]`; rows draft L49–53 |

### `ModularidadSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | módulos con API y límites (draft L62–66) |
| Qué es | prose | dominio vs infraestructura (draft L68–70) |
| `dominio-infra-repositorio` | `CodeFiddle` | `language="csharp"`; code draft L75–100 |
| `modulos-dominio-infra` | `MermaidDiagram` | chart draft L107 |
| `sustituir-repositorio` | `StepReveal` | title: «Sustituir implementación sin tocar dominio»; steps[4] draft L115–119 |
| Caso real | prose | migración persistencia (draft L123–125) |
| Errores comunes | prose `<ul>` | 3 ítems (draft L127–131) |

### `CohesionSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | responsabilidades relacionadas dentro de clase (draft L139–143) |
| `utilidades-baja-alta-cohesion` | `CodeFiddle` | `language="csharp"`; code draft L148–171 |
| `split-utilidades` | `MermaidDiagram` | chart draft L178 |
| Caso real | prose | merge conflicts Utilidades.cs (draft L181–183) |
| Errores comunes | prose `<ul>` | 3 ítems (draft L185–189) |
| `split-utilidades-ejercicio` | `PracticeExercise` | prompt: «Lista 3 responsabilidades de Utilidades y propón 3 clases con alta cohesión que las reemplacen.»; hints: `["FormatearNombre → FormateoTexto", "CalcularImpuesto → CalculadoraImpuestos", "EnviarEmail → NotificadorEmail"]`; expectedKeywords: `["FormateoTexto", "CalculadoraImpuestos", "NotificadorEmail"]`; successMessage: «Correcto. Cada clase con un objetivo claro — alta cohesión.» |

### `AcoplamientoSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | bajo acoplamiento entre módulos (draft L209–213) |
| `acoplamiento-alto-bajo` | `CodeFiddle` | `language="csharp"`; code draft L218–252 |
| `diagrama-acoplamiento-reportes` | `MermaidDiagram` | chart draft L259 |
| `comparacion-cohesion-acoplamiento` | `CompareTable` | headers: `["Métrica", "Malo", "Bueno"]`; rows draft L267–271 |
| Caso real | prose | migración PDF a HTML (draft L274–276) |
| Errores comunes | prose `<ul>` | 3 ítems (draft L278–282) |
| `html-renderer-main` | `PracticeExercise` | prompt: «Añade HtmlRenderer : IReporteRenderer y cambia solo la composición en Main. Verifica que ReporteService no cambia.»; hints: `["HtmlRenderer implementa Render con salida HTML", "ReporteService ya recibe IReporteRenderer por constructor", "Solo Main cambia new PdfRenderer() por new HtmlRenderer()"]`; expectedKeywords: `["HtmlRenderer", "Main", "ReporteService"]`; successMessage: «Correcto. Bajo acoplamiento: cambio de formato solo en el borde.» |

### `ChecklistDisenoSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | checklist integra SOLID + cohesión + acoplamiento (draft L302–306) |
| `checklist-diseno-pasos` | `StepReveal` | title: «Checklist antes de dar por bueno un diseño»; steps[6] draft L313–319 |
| `composicion-main` | `CodeFiddle` | `language="csharp"`; code draft L326–333 |
| `sintesis-track-poo` | `MermaidDiagram` | chart draft L340 — recorrido completo del track |
| Errores comunes | prose `<ul>` | 3 ítems (draft L343–347) |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L355–360 (incluye «lección final del track POO») |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L368 |
| `comprension-repositorio-sql` | `PracticeExercise` | prompt: «Crea RepositorioPedidosSql (simulado) y úsalo con ServicioPedidos sin cambiar esa clase.»; hints: `["RepositorioPedidosSql implementa IRepositorioPedidos", "ServicioPedidos recibe contrato por constructor", "Solo Main cambia la instancia concreta"]`; expectedKeywords: `["RepositorioPedidosSql", "ServicioPedidos", "IRepositorioPedidos"]`; successMessage: «Correcto. Modularidad + DIP: infra intercambiable en el borde.» |
| `comprension-cohesion-utilidades` | `PracticeExercise` | prompt: «Lista 3 responsabilidades de Utilidades y propón 3 clases con alta cohesión que las reemplacen.»; hints: `["Una responsabilidad por clase de dominio", "Nombres que describen el rol", "Sin mezclar formateo con impuestos"]`; expectedKeywords: `["FormateoTexto", "CalculadoraImpuestos", "NotificadorEmail", "cohesión"]`; successMessage: «Correcto. Alta cohesión: cada clase un objetivo.» |
| `comprension-checklist-pdf` | `PracticeExercise` | prompt: «Recorre el checklist en un fragmento con new PdfGenerator() dentro de ReporteService. ¿Qué ítems fallan y cómo los corriges?»; hints: `["DIP y acoplamiento — depende de concreto", "Introducir IReporteRenderer", "Inyectar por constructor; elegir renderer en Main"]`; expectedKeywords: `["DIP", "acoplamiento", "IReporteRenderer", "inyección"]`; successMessage: «Correcto. El checklist detecta acoplamiento alto y guía el refactor.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Reorganiza el mini-sistema de compras»; Partes A–D + criterio éxito (draft L412–438) |
| `reto-dependencias-objetivo` | `MermaidDiagram` | chart draft L444 |
| `reto-checklist-parte-d` | `PracticeExercise` | prompt: «Documenta el checklist del reto (Parte D): marca ✓ o ✗ en SRP, OCP, DIP, cohesión y acoplamiento con una frase de evidencia por ítem.»; hints: `["SRP — ¿cada clase un rol?", "OCP — ¿nuevo descuento sin editar orquestador?", "DIP — ¿dominio sin new de infra?", "Cohesión/acoplamiento — ¿Utilidades eliminada?"]`; expectedKeywords: `["checklist", "SRP", "DIP", "cohesión", "acoplamiento"]`; successMessage: «Excelente. Has cerrado el track POO con criterios de diseño verificables.»; `rows={8}` |

### `CierreSection` (finale track)

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L466 — track POO completado |
| Ideas clave | `<ul>` 4 viñetas draft L470–473 |
| Recorrido del track | prose enumeración draft L477 |
| Siguiente paso | aplicar checklist en proyectos reales (draft L479) — **sin enlace `next`** (`lesson-meta.next: null`) |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="modularidad-cohesion-acoplamiento" track="poo" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout`, `CompareTable` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `MermaidDiagram`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only — **cierre track** |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ModularidadSection.tsx` | Poblar: `CodeFiddle`, `MermaidDiagram`, `StepReveal`; H2 «Modularidad» |
| `CohesionSection.tsx` | Poblar: `CodeFiddle`, `MermaidDiagram`, `PracticeExercise`; H2 «Cohesión» |
| `AcoplamientoCouplingSection.tsx` | Renombrar → `AcoplamientoSection.tsx`; poblar: `CodeFiddle`, `MermaidDiagram`, `CompareTable`, `PracticeExercise`; H2 «Acoplamiento» |
| `ChecklistRapidoPracticoSection.tsx` | Renombrar → `ChecklistDisenoSection.tsx`; poblar: `StepReveal`, `CodeFiddle`, `MermaidDiagram` (síntesis track); H2 «Checklist práctico de diseño» |
| `ModularidadCohesionAcoplamientoLesson.tsx` | Orden 10 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)» … «4)»)
- [ ] Migrar todo código → `CodeFiddle` con `language="csharp"` (4 bloques en draft)
- [ ] Crear secciones pedagógicas incluyendo `CierreSection` como **cierre del track**
- [ ] Renombrar `AcoplamientoSection`, `ChecklistDisenoSection`
- [ ] `lesson-meta.next: null` — última lección del track
- [ ] Registrar quiz `modularidad-cohesion-acoplamiento` en `teaching-quizzes/poo.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `solid-principios` |
| `next` | `null` (fin track POO) |
