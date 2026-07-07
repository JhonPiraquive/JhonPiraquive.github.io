---
track: posw
slug: principios-solid
title: "Principios SOLID: diseño OO mantenible"
order: 19
prev: bases-de-datos
next: naming-conventions
---

## PrincipiosSolidLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<IntroSolidSection />
<SrpSection />
<OcpSection />
<LspSection />
<IspSection />
<DipSection />
<ResumenSolidSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosSection`, `IntroSolidSection`, `SrpSection`, `OcpSection`, `LspSection`, `IspSection`, `DipSection`, `ResumenSolidSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L30–58). |
| 2 | SOLID: cinco principios de diseño OO | `sections/IntroSolidSection.tsx` | `MermaidDiagram` | **Nuevo.** H2 sin prefijo «1)». Mapa mental + diagrama S→O→L→I→D (draft L62–87). |
| 3 | SRP: una clase, una razón para cambiar | `sections/SrpSection.tsx` | `CodeFiddle`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «2)». `typescript` ×1. |
| 4 | OCP: extender sin modificar código existente | `sections/OcpSection.tsx` | `CodeFiddle`, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «3)». `typescript` ×1. |
| 5 | LSP: subtipos sustituibles sin romper contratos | `sections/LspSection.tsx` | `CodeFiddle`, `StepReveal` | **Nuevo.** H2 sin prefijo «4)». `typescript` ×1. |
| 6 | ISP: interfaces pequeñas y específicas | `sections/IspSection.tsx` | `CodeFiddle` | **Nuevo.** H2 sin prefijo «5)». `typescript` ×1. |
| 7 | DIP: depender de abstracciones, no de concreciones | `sections/DipSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `Callout` | **Nuevo.** H2 sin prefijo «6)». `csharp` ×1. |
| 8 | Resumen: principios y señales de violación | `sections/ResumenSolidSection.tsx` | `CompareTable` | **Nuevo.** H2 sin prefijo «7)». |
| 9 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×1 | **Nuevo.** |
| 10 | Reto integrador: refactor de módulo de usuarios | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Enunciado legacy + tareas 1–5 (draft L387–417). |
| 11 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `naming-conventions` (draft L421–436). |
| 12 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="principios-solid" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `principios-solid` con 5 preguntas del draft L446–502:

| # | Tema |
|---|------|
| 1 | SRP: una clase, una razón para cambiar |
| 2 | OCP: nueva clase MetodoPago |
| 3 | LSP: subclase lanza en volar() |
| 4 | ISP: interfaces demasiado grandes |
| 5 | DIP: IProductoRepository inyectada |

**Infra:** `<QuizSection slug="principios-solid" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `Principios SOLID: SRP, OCP y DIP \| POSW` |
| `seoDescription` | `Explica los cinco principios SOLID, detecta violaciones en APIs y aplica DIP sin sobre-ingeniería. Lección 19 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | draft L42–44 |
| Intro | prose | draft L52 |
| `solid-no-es-ley-rigida` | `Callout` | `variant="callout-info"`; title: «Cuándo no aplicar SOLID al extremo»; children draft L55–57 (lesson-spec L80–85) |

### `IntroSolidSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L68–72 |
| `diagrama-solid-flujo` | `MermaidDiagram` | chart draft L77 |
| Señales de violación | prose `<ul>` | draft L83–86 |

### `SrpSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L96 |
| `srp-violacion-vs-correccion` | `CodeFiddle` | `language="typescript"`; title: «Violación SRP vs SRP aplicado»; code draft L101–135 |
| `caso-god-class-ecommerce` | `Callout` | `variant="callout-warning"`; title: «Caso real: Usuario que hace de todo»; children draft L140–143 (lesson-spec L67–71) |
| `practica-pedido-service` | `PracticeExercise` | prompt draft L149; hints draft L150; expectedKeywords draft L151; successMessage draft L152 |

### `OcpSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L163 |
| `ocp-procesador-pagos` | `CodeFiddle` | `language="typescript"`; title: «Procesador de pagos extensible»; code draft L168–191 |
| `caso-procesador-monolitico` | `Callout` | `variant="callout-warning"`; title: «Caso real: procesador de pagos con if/else infinito»; children draft L196–199 (lesson-spec L67–71) |
| `completar-pago-pse` | `CodeChallenge` | title: «Añade PagoPSE sin modificar ProcesadorPago»; template draft L206; blanks draft L207–209 |

### `LspSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L220 |
| `lsp-patos` | `CodeFiddle` | `language="typescript"`; title: «Patos: volar solo quien puede»; code draft L225–243 |
| Errores comunes | prose `<ul>` | draft L247–248 |
| `step-lsp-accion` | `StepReveal` | title: «LSP paso a paso»; steps[4] draft L255–260 |

### `IspSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L271 |
| `isp-trabajable-humano` | `CodeFiddle` | `language="typescript"`; title: «Trabajable vs Humano»; code draft L274–288 |
| Fat interface | prose `<ul>` | draft L292–293 |

### `DipSection`

| id | componente | props |
|----|------------|-------|
| Regla | prose | draft L303 |
| `dip-producto-service` | `CodeFiddle` | `language="csharp"`; title: «ProductoService con inyección»; code draft L307–327 |
| `diagrama-capas-dip` | `MermaidDiagram` | chart draft L333 |
| `caso-saas-acoplado-mysql` | `Callout` | `variant="callout-warning"`; title: «Caso real: ProductoService acoplado a MySQL»; children draft L339–342 (lesson-spec L73–78) |

### `ResumenSolidSection`

| id | componente | props |
|----|------------|-------|
| `tabla-comparativa-solid` | `CompareTable` | headers draft L354; rows draft L355–361 |
| Aplicación en POSW | prose `<ul>` | draft L366–369 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-auth-dip` | `PracticeExercise` | prompt draft L379; hints draft L380; expectedKeywords draft L381; successMessage draft L382 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Refactoriza el módulo de usuarios»; legacy + tareas 1–5 + criterio (draft L391–405) |
| `reto-refactor-usuarios` | `PracticeExercise` | prompt draft L409; hints draft L410–414; expectedKeywords draft L415; successMessage draft L416; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L425 |
| Ideas clave | `<ul>` 6 viñetas draft L429–434 |
| Siguiente paso | enlace `naming-conventions` draft L436 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="principios-solid" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` |
| `sections/IntroSolidSection.tsx` | `IntroSolidSection` | `MermaidDiagram` |
| `sections/SrpSection.tsx` | `SrpSection` | `CodeFiddle`, `Callout`, `PracticeExercise` |
| `sections/OcpSection.tsx` | `OcpSection` | `CodeFiddle`, `Callout`, `CodeChallenge` |
| `sections/LspSection.tsx` | `LspSection` | `CodeFiddle`, `StepReveal` |
| `sections/IspSection.tsx` | `IspSection` | `CodeFiddle` |
| `sections/DipSection.tsx` | `DipSection` | `CodeFiddle`, `MermaidDiagram`, `Callout` |
| `sections/ResumenSolidSection.tsx` | `ResumenSolidSection` | `CompareTable` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«7)»)
- [ ] Migrar todo código → `CodeFiddle` (`typescript`, `csharp`)
- [ ] Crear 12 secciones
- [ ] Registrar quiz `principios-solid` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `bases-de-datos` |
| `next` | `naming-conventions` |
