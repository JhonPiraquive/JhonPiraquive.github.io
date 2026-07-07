---
track: posw
slug: angular
title: "Angular: Fundamentos"
order: 14
prev: typescript
next: react
---

## AngularLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<IntroAngularSection />
<ComponentesSection />
<CicloVidaSection />
<DirectivasBindingsSection />
<PipesModulosSection />
<ServiciosDiSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 6 secciones temáticas + 6 bloques pedagógicos (12 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `IntroAngularSection`, `ComponentesSection`, `CicloVidaSection`, `DirectivasBindingsSection`, `PipesModulosSection`, `ServiciosDiSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L35–59). |
| 2 | Introducción a Angular | `sections/IntroAngularSection.tsx` | `CompareTable`, `CodeFiddle`, `MermaidDiagram`, `Callout` | **Nuevo.** H2 sin prefijo «1)». `bash` ×1. |
| 3 | Componentes | `sections/ComponentesSection.tsx` | `CodeFiddle` ×2, `MermaidDiagram`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «2)». `typescript` ×1, `html` ×1. |
| 4 | Ciclo de vida | `sections/CicloVidaSection.tsx` | `StepReveal`, `CodeFiddle`, `Callout` | **Nuevo.** H2 sin prefijo «3)». `typescript` ×1. |
| 5 | Directivas y data binding | `sections/DirectivasBindingsSection.tsx` | `CompareTable`, `CodeFiddle`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «4)». `html` ×1. |
| 6 | Pipes y módulos | `sections/PipesModulosSection.tsx` | `CodeFiddle` ×2, `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «5)». `html` ×1, `typescript` ×1. |
| 7 | Servicios e inyección de dependencias | `sections/ServiciosDiSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** H2 sin prefijo «6)». `typescript` ×2. |
| 8 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 8 viñetas (draft L459–466). |
| 9 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 10 | Reto integrador: módulo de catálogo Angular para API REST | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Enunciado + servicio + template (draft L502–551). |
| 11 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `react` (draft L557–569). |
| 12 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="angular" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `angular` con 5 preguntas del draft L579–634:

| # | Tema |
|---|------|
| 1 | Componente = clase TS + template HTML + estilos |
| 2 | `ngOnInit` para carga inicial de API |
| 3 | `*ngIf` directiva estructural |
| 4 | `[(ngModel)]` two-way binding |
| 5 | `@Injectable({ providedIn: 'root' })` singleton |

**Infra:** `<QuizSection slug="angular" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Angular: Componentes, Directivas y Servicios \| POSW` |
| `seoDescription` | `Aprende Angular: componentes TypeScript, ciclo de vida, directivas, data binding, pipes, módulos, HttpClient y inyección de dependencias. Lección 14 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes permitidos: `typescript`, `javascript`, `bash`, `html`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L35–39 |
| Prerrequisitos | prose `<ul>` | draft L43–45 |
| Intro | prose | draft L53 |
| `angular-js-vs-angular` | `Callout` | `variant="callout-info"`; title: «Angular.js ≠ Angular moderno»; children draft L57–58 |

### `IntroAngularSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L69–72 |
| `tabla-angular-vs-react` | `CompareTable` | headers draft L78; rows draft L80–85 |
| `crear-proyecto-angular` | `CodeFiddle` | `language="bash"`; title: «Crear proyecto Angular»; code draft L91–96 |
| `arbol-componentes-tipico` | `MermaidDiagram` | chart draft L102 |
| `caso-banco-di` | `Callout` | `variant="callout-info"`; title: «Migración a Angular con DI»; children draft L109–110 |

### `ComponentesSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L121–125 |
| `anatomia-tarjeta-producto` | `CodeFiddle` | `language="typescript"`; title: «Anatomía de un componente»; code draft L130–157 |
| `template-tarjeta-producto` | `CodeFiddle` | `language="html"`; title: «Template del componente»; code draft L163–171 |
| `flujo-padre-hijo` | `MermaidDiagram` | chart draft L177 |
| `practica-arbol-componentes` | `PracticeExercise` | prompt: «Dibuja el árbol de componentes de una tienda online: AppComponent, navbar, catálogo con tarjetas y carrito. ¿Cuál es presentacional y cuál contenedor?»; hints: `["TarjetaProducto recibe @Input", "Catalogo carga datos", "Separación de responsabilidades"]`; expectedKeywords: `["AppComponent", "Catalogo", "Tarjeta", "Input"]`; successMessage: «Correcto. TarjetaProducto es presentacional; Catalogo orquesta datos y pasa props.» |

### `CicloVidaSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L198–202 |
| `timeline-ciclo-vida` | `StepReveal` | title: «Hooks principales de un componente Angular»; steps[5] draft L209–229 |
| `fetch-limpieza-suscripciones` | `CodeFiddle` | `language="typescript"`; title: «Fetch y limpieza de suscripciones»; code draft L237–250 |
| `caso-memory-leak-catalogo` | `Callout` | `variant="callout-info"`; title: «SPA lenta tras 30 minutos de uso»; children draft L257–258 |

### `DirectivasBindingsSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L269–274 |
| `tabla-cuatro-bindings` | `CompareTable` | headers draft L280; rows draft L282–286 |
| `directivas-estructurales-atributo` | `CodeFiddle` | `language="html"`; title: «Directivas estructurales y de atributo»; code draft L292–308 |
| `completa-bindings` | `CodeChallenge` | title: «Completa la sintaxis de binding»; template draft L315; blanks draft L316–320 |
| Errores comunes | prose `<ul>` | draft L325–327 |

### `PipesModulosSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L337–341 |
| `pipes-en-template` | `CodeFiddle` | `language="html"`; title: «Pipes en template»; code draft L346–352 |
| `tabla-pipes-comunes` | `CompareTable` | headers draft L358; rows draft L360–365 |
| `estructura-ng-module` | `CodeFiddle` | `language="typescript"`; title: «Estructura de NgModule»; code draft L371–384 |
| `async-pipe-vs-subscribe` | `Callout` | `variant="callout-info"`; title: «Preferir async pipe cuando sea posible»; children draft L390–391 |

### `ServiciosDiSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L402–406 |
| `servicio-http-di` | `CodeFiddle` | `language="typescript"`; title: «Servicio HTTP con DI»; code draft L411–426 |
| `consumo-en-componente` | `CodeFiddle` | `language="typescript"`; title: «Consumo en componente»; code draft L432–441 |
| `practica-framework-completo` | `PracticeExercise` | prompt: «¿Por qué Angular se considera framework completo y React librería? Enumera al menos 3 piezas que Angular trae integradas.»; hints: `["HttpClient", "Router", "FormsModule", "DI"]`; expectedKeywords: `["routing", "HTTP", "forms", "framework"]`; successMessage: «Correcto. Angular incluye routing, HTTP, forms, DI y testing integrados.» |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 8 puntos draft L459–466 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-input-output` | `PracticeExercise` | prompt: «¿Por qué no debes mutar un @Input() en el componente hijo? ¿Cómo comunicas un cambio al padre?»; hints: `["Solo lectura", "@Output EventEmitter", "Flujo unidireccional"]`; expectedKeywords: `["Input", "Output", "emit", "padre"]`; successMessage: «Correcto. Los inputs son de solo lectura; emites eventos con @Output al padre.» |
| `comprension-memory-leak` | `PracticeExercise` | prompt: «Un componente suscribe getProductos() en ngOnInit pero nunca hace unsubscribe. ¿Qué problema causa y cómo lo solucionas?»; hints: `["Memory leak", "ngOnDestroy", "async pipe", "takeUntilDestroyed"]`; expectedKeywords: `["memory", "ngOnDestroy", "unsubscribe", "async"]`; successMessage: «Correcto. Suscripciones sin limpiar acumulan memoria; usa ngOnDestroy o async pipe.» |
| `comprension-sintaxis-template` | `PracticeExercise` | prompt: «¿Qué sintaxis usarías para: mostrar precio formateado en COP, cargar lista con *ngFor y manejar click en botón agregar?»; hints: `["currency pipe", "*ngFor", "(click)"]`; expectedKeywords: `["currency", "ngFor", "click"]`; successMessage: «Correcto. currency:'COP' para precio, *ngFor para lista, (click) para evento.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Módulo de catálogo Angular para API REST»; tareas 1–5 + criterio éxito (draft L506–514) |
| `reto-productos-service` | `CodeFiddle` | `language="typescript"`; title: «ProductosService con HttpClient»; code draft L517–526 |
| `reto-catalogo-template` | `CodeFiddle` | `language="html"`; title: «Template del catálogo»; code draft L529–538 |
| `reto-catalogo-integrador` | `PracticeExercise` | prompt: «Diseña el módulo de catálogo: ProductosService, CatalogoComponent contenedor, TarjetaProducto presentacional con *ngFor y currency pipe.»; hints: `["HttpClientModule en imports", "trackBy con ID", "async pipe o ngOnDestroy", "@Output agregarAlCarrito"]`; expectedKeywords: `["Service", "ngFor", "Input", "HttpClient"]`; successMessage: «Excelente. Has diseñado un módulo Angular con separación de capas y HTTP centralizado.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L559 |
| Ideas clave | `<ul>` 5 viñetas draft L563–567 |
| Siguiente paso | enlace `react` draft L569 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="angular" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/IntroAngularSection.tsx` | `IntroAngularSection` | `CompareTable`, `CodeFiddle`, `MermaidDiagram`, `Callout` |
| `sections/ComponentesSection.tsx` | `ComponentesSection` | `CodeFiddle`, `MermaidDiagram`, `PracticeExercise` |
| `sections/CicloVidaSection.tsx` | `CicloVidaSection` | `StepReveal`, `CodeFiddle`, `Callout` |
| `sections/DirectivasBindingsSection.tsx` | `DirectivasBindingsSection` | `CompareTable`, `CodeFiddle`, `CodeChallenge` |
| `sections/PipesModulosSection.tsx` | `PipesModulosSection` | `CodeFiddle`, `CompareTable`, `Callout` |
| `sections/ServiciosDiSection.tsx` | `ServiciosDiSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 6 secciones temáticas |
| `AngularLesson.tsx` | Orden 12 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«6)»)
- [ ] Migrar todo código → `CodeFiddle` (`typescript`, `html`, `bash` — 11 bloques en draft)
- [ ] Crear 12 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `angular` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `typescript` |
| `next` | `react` |
