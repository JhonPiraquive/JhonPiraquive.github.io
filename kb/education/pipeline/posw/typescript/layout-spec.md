---
track: posw
slug: typescript
title: "TypeScript"
order: 13
prev: rest-principios
next: angular
---

## TypescriptLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsTypescriptSection />
<PorQueTypescriptSection />
<SistemaTiposSection />
<InterfacesTypesSection />
<GenericosSection />
<ConfiguracionTsSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 6 secciones temáticas + 6 bloques pedagógicos (12 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `QueEsTypescriptSection`, `PorQueTypescriptSection`, `SistemaTiposSection`, `InterfacesTypesSection`, `GenericosSection`, `ConfiguracionTsSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L35–59). |
| 2 | ¿Qué es TypeScript? | `sections/QueEsTypescriptSection.tsx` | `MermaidDiagram`, `StepReveal`, `CodeFiddle`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «1)». `bash` ×1. |
| 3 | ¿Por qué TypeScript? | `sections/PorQueTypescriptSection.tsx` | `CompareTable`, `CodeFiddle` ×2, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «2)». `javascript` ×1, `typescript` ×1. |
| 4 | Sistema de tipos | `sections/SistemaTiposSection.tsx` | `MermaidDiagram`, `CodeFiddle`, `CompareTable` | **Nuevo.** H2 sin prefijo «3)». `typescript` ×1. |
| 5 | Interfaces, types y enums | `sections/InterfacesTypesSection.tsx` | `CodeFiddle` ×2, `Callout`, `CompareTable` | **Nuevo.** H2 sin prefijo «4)». `typescript` ×2. |
| 6 | Genéricos | `sections/GenericosSection.tsx` | `CodeFiddle` ×2, `CodeChallenge`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «5)». `typescript` ×2. |
| 7 | Configuración tsconfig.json | `sections/ConfiguracionTsSection.tsx` | `CodeFiddle` ×2, `CompareTable` | **Nuevo.** H2 sin prefijo «6)». `javascript` ×1 (tsconfig), `bash` ×1. |
| 8 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 8 viñetas (draft L465–472). |
| 9 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 10 | Reto integrador: tipa el cliente de una API REST de pedidos | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Enunciado + JSON ejemplo + TS (draft L508–586). |
| 11 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `angular` (draft L592–604). |
| 12 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="typescript" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `typescript` con 5 preguntas del draft L614–669:

| # | Tema |
|---|------|
| 1 | Superset: todo JS válido es TS válido |
| 2 | Error de tipo en compilación/editor |
| 3 | `unknown` + narrowing más seguro que `any` |
| 4 | `type` para uniones e intersecciones |
| 5 | `strict: true` activa verificaciones estrictas |

**Infra:** `<QuizSection slug="typescript" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `TypeScript: Tipos, Interfaces y Genéricos \| POSW` |
| `seoDescription` | `Aprende TypeScript como superset de JavaScript: sistema de tipos, interfaces, genéricos, tsconfig strict y tipado de APIs REST. Lección 13 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes permitidos: `typescript`, `javascript`, `bash`, `html`. Bloques `json` del draft → `javascript` (contenido JSON literal).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L35–39 |
| Prerrequisitos | prose `<ul>` | draft L43–45 |
| Intro | prose | draft L53 |
| `ts-no-valida-runtime` | `Callout` | `variant="callout-info"`; title: «TypeScript no valida en runtime»; children draft L57–58 |

### `QueEsTypescriptSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L69–72 |
| `flujo-compilacion-ts` | `MermaidDiagram` | chart draft L78 |
| `pasos-ts-a-ejecucion` | `StepReveal` | title: «De .ts a ejecución»; steps[4] draft L86–103 |
| `instalacion-tsc` | `CodeFiddle` | `language="bash"`; title: «Instalación y compilación»; code draft L109–121 |
| `orden-flujo-desarrollo` | `CodeChallenge` | title: «Ordena el flujo de desarrollo TypeScript»; template draft L128; blanks draft L129–135 |

### `PorQueTypescriptSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L146–149 |
| `tabla-js-vs-ts` | `CompareTable` | headers draft L155; rows draft L157–162 |
| `bug-calcular-total-js` | `CodeFiddle` | `language="javascript"`; title: «Bug en JavaScript — error en producción»; code draft L169–174 |
| `error-calcular-total-ts` | `CodeFiddle` | `language="typescript"`; title: «Misma función en TypeScript — error en el editor»; code draft L180–186 |
| `caso-checkout-concatenacion` | `Callout` | `variant="callout-info"`; title: «Concatenación de precios en checkout»; children draft L192–193 |
| `practica-analogia-calcular-total` | `PracticeExercise` | prompt: «Explica por qué `calcularTotal("4500", 3)` falla en TypeScript pero no en JavaScript. ¿En qué capa se detecta cada error?»; hints: `["Multiplicación vs concatenación", "Compilación vs runtime", "Firmas number"]`; expectedKeywords: `["compilación", "runtime", "string", "number"]`; successMessage: «Correcto. JS concatena en runtime; TS rechaza el argumento incompatible en compilación.» |

### `SistemaTiposSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L214–218 |
| `jerarquia-tipos` | `MermaidDiagram` | chart draft L224 |
| `tipos-primitivos-compuestos` | `CodeFiddle` | `language="typescript"`; title: «Tipos primitivos y compuestos»; code draft L231–243 |
| `tabla-any-unknown-never` | `CompareTable` | headers draft L249; rows draft L251–254 |
| Errores comunes | prose `<ul>` | draft L259–261 |

### `InterfacesTypesSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L271–274 |
| `interface-producto-api` | `CodeFiddle` | `language="typescript"`; title: «Interface y respuesta de API genérica»; code draft L280–298 |
| `enum-estado-pedido` | `CodeFiddle` | `language="typescript"`; title: «Enum para estado de pedido»; code draft L304–315 |
| `caso-contrato-api-roto` | `Callout` | `variant="callout-info"`; title: «Frontend enterprise: precio cambia de number a string»; children draft L321–322 |
| `tabla-interface-type-enum` | `CompareTable` | headers draft L329; rows draft L331–334 |

### `GenericosSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L345–348 |
| `repositorio-generico` | `CodeFiddle` | `language="typescript"`; title: «Repositorio genérico»; code draft L353–367 |
| `funcion-primer-elemento` | `CodeFiddle` | `language="typescript"`; title: «Función genérica»; code draft L373–379 |
| `completa-firma-generica` | `CodeChallenge` | title: «Completa la firma genérica»; template draft L386; blanks draft L387–389 |
| `practica-inferencia-genericos` | `PracticeExercise` | prompt: «¿Qué tipo infiere TypeScript en `primerElemento([1, 2, 3])`? ¿Por qué los genéricos son útiles frente a usar `any`?»; hints: `["Inferencia automática", "Conserva el tipo del array", "number"]`; expectedKeywords: `["number", "genérico", "inferencia", "tipo"]`; successMessage: «Correcto. Infiere `number` y mantiene type safety sin perder flexibilidad.» |

### `ConfiguracionTsSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L410–414 |
| `tsconfig-recomendado` | `CodeFiddle` | `language="javascript"`; title: «tsconfig.json recomendado para proyecto web»; code draft L420–435 |
| `tabla-opciones-criticas` | `CompareTable` | headers draft L441; rows draft L443–448 |
| `inicializar-proyecto` | `CodeFiddle` | `language="bash"`; title: «Inicializar proyecto»; code draft L454–457 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 8 puntos draft L465–472 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-runtime-vs-compilacion` | `PracticeExercise` | prompt: «¿Por qué TypeScript no elimina la necesidad de validar respuestas JSON del servidor en runtime? ¿Qué capa cubre cada una?»; hints: `["Tipos desaparecen al compilar", "Compilación vs ejecución", "Zod o similar"]`; expectedKeywords: `["runtime", "compilación", "validación", "tipos"]`; successMessage: «Correcto. TS cubre desarrollo; la validación runtime cubre datos externos en ejecución.» |
| `comprension-any-fetch` | `PracticeExercise` | prompt: «Un colega propone tipar toda respuesta de `fetch` como `any` para ir más rápido. ¿Qué riesgo hay y qué alternativa propones?»; hints: `["Contrato roto con API", "interface Producto", "ApiResponse<T>"]`; expectedKeywords: `["any", "interface", "contrato", "runtime"]`; successMessage: «Correcto. `any` anula los beneficios; interfaces y genéricos documentan el contrato REST.» |
| `comprension-type-vs-interface` | `PracticeExercise` | prompt: «¿Cuándo usarías `type` en lugar de `interface`? Da un ejemplo de unión de tipos.»; hints: `["Uniones", "Producto | Error", "No solo objetos"]`; expectedKeywords: `["type", "unión", "interface", "objeto"]`; successMessage: «Correcto. `interface` para forma de objetos; `type` para uniones como `Producto | ErrorApi`.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Tipa el cliente de una API REST de pedidos»; tareas 1–5 + criterio éxito (draft L512–534) |
| `reto-json-pedido` | `CodeFiddle` | `language="javascript"`; title: «Respuesta GET /api/v1/pedidos/:id»; code draft L516–526 |
| `reto-pedidos-typescript` | `CodeFiddle` | `language="typescript"`; title: «Cliente tipado de pedidos»; code draft L538–573 |
| `reto-pedidos-integrador` | `PracticeExercise` | prompt: «Implementa el reto de pedidos: define interfaces, enum string, ApiResponse<T> y calcularTotal sin usar any.»; hints: `["EstadoPedido como string enum", "precioUnitario: number", "strict: true en tsconfig", "reduce para sumar items"]`; expectedKeywords: `["enum", "interface", "ApiResponse", "number"]`; successMessage: «Excelente. Has tipado un cliente REST completo con genéricos y sin any.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L594 |
| Ideas clave | `<ul>` 5 viñetas draft L598–602 |
| Siguiente paso | enlace `angular` draft L604 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="typescript" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/QueEsTypescriptSection.tsx` | `QueEsTypescriptSection` | `MermaidDiagram`, `StepReveal`, `CodeFiddle`, `CodeChallenge` |
| `sections/PorQueTypescriptSection.tsx` | `PorQueTypescriptSection` | `CompareTable`, `CodeFiddle`, `Callout`, `PracticeExercise` |
| `sections/SistemaTiposSection.tsx` | `SistemaTiposSection` | `MermaidDiagram`, `CodeFiddle`, `CompareTable` |
| `sections/InterfacesTypesSection.tsx` | `InterfacesTypesSection` | `CodeFiddle`, `Callout`, `CompareTable` |
| `sections/GenericosSection.tsx` | `GenericosSection` | `CodeFiddle`, `CodeChallenge`, `PracticeExercise` |
| `sections/ConfiguracionTsSection.tsx` | `ConfiguracionTsSection` | `CodeFiddle`, `CompareTable` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 6 secciones temáticas |
| `TypescriptLesson.tsx` | Orden 12 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«6)»)
- [ ] Migrar todo código → `CodeFiddle` (`typescript`, `javascript`, `bash`; JSON → `javascript`)
- [ ] Crear 12 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `typescript` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `rest-principios` |
| `next` | `angular` |
