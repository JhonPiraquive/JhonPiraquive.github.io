---
track: posw
slug: modelo-cliente-servidor
title: "Modelo cliente-servidor: flujo HTTP y arquitecturas en capas"
order: 16
prev: react
next: herramientas-desarrollo
---

## ModeloClienteServidorLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<QueEsClienteServidorSection />
<FlujoHttpSection />
<ArquitecturasSection />
<VariantesSection />
<EjemplosRealesSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 6 secciones temáticas + 4 bloques pedagógicos (10 secciones totales).

Imports a añadir: `ObjetivosSection`, `QueEsClienteServidorSection`, `FlujoHttpSection`, `ArquitecturasSection`, `VariantesSection`, `EjemplosRealesSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L30–58). |
| 2 | ¿Qué es el modelo cliente-servidor? | `sections/QueEsClienteServidorSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×5, `PracticeExercise` | **Nuevo.** H2 sin prefijo «1)». `http` ×2, `bash` ×1, `javascript` ×2. |
| 3 | Flujo al abrir una URL: DNS, TCP, TLS y HTTP | `sections/FlujoHttpSection.tsx` | `StepReveal`, `MermaidDiagram`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Arquitecturas 2 capas, 3 capas y microservicios | `sections/ArquitecturasSection.tsx` | `MermaidDiagram`, `CompareTable`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Variantes P2P, híbrido y serverless | `sections/VariantesSection.tsx` | `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «4)». Tabla variantes draft L284–288. |
| 6 | Aplicaciones reales y protocolos subyacentes | `sections/EjemplosRealesSection.tsx` | `CompareTable`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «5)». |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×1 | **Nuevo.** Ejercicio `my-8`. |
| 8 | Reto integrador: reservas de cine en tiempo real | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Enunciado + criterio éxito (draft L350–377). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `herramientas-desarrollo` (draft L381–395). |
| 10 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="modelo-cliente-servidor" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `modelo-cliente-servidor` con 5 preguntas del draft L403–461:

| # | Tema |
|---|------|
| 1 | Rol del cliente: solicita servicios |
| 2 | DNS primero al abrir URL |
| 3 | 3 capas: BD no expuesta al cliente |
| 4 | P2P: BitTorrent sin servidor central de archivos |
| 5 | Serverless: proveedor gestiona infra y escalado |

**Infra:** `<QuizSection slug="modelo-cliente-servidor" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `Modelo cliente-servidor: DNS, HTTP y capas \| POSW` |
| `seoDescription` | `Aprende el modelo cliente-servidor, el flujo DNS→TLS→HTTP al abrir una URL, arquitecturas 2/3 capas y variantes P2P, híbrido y serverless. Lección 16 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `http`, `bash`, `javascript`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | draft L42–44 |
| Intro | prose | draft L52 |
| `cliente-no-solo-navegador` | `Callout` | `variant="callout-info"`; title: «Cliente ≠ solo navegador»; children draft L55–57 (lesson-spec L72) |

### `QueEsClienteServidorSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L68–71 |
| Analogía banco | prose | draft L75 |
| `secuencia-request-response` | `MermaidDiagram` | chart draft L78 |
| `peticion-http-cruda` | `CodeFiddle` | `language="http"`; title: «Petición HTTP cruda»; code draft L86–91 |
| `respuesta-servidor` | `CodeFiddle` | `language="http"`; title: «Respuesta del servidor»; code draft L97–102 |
| `cliente-curl` | `CodeFiddle` | `language="bash"`; title: «Cliente con curl»; code draft L108–113 |
| `cliente-fetch-react` | `CodeFiddle` | `language="javascript"`; title: «Cliente JavaScript (fetch desde React)»; code draft L119–125 |
| `servidor-minimo-node` | `CodeFiddle` | `language="javascript"`; title: «Servidor mínimo Node.js»; code draft L130–144 |
| Errores comunes | prose `<ul>` | draft L148–150 |
| `practica-analogia-banco` | `PracticeExercise` | prompt draft L156; hints draft L157; expectedKeywords draft L158; successMessage draft L159 |

### `FlujoHttpSection`

| id | componente | props |
|----|------------|-------|
| Los 8 pasos | prose `<ol>` | draft L170–177 |
| `flujo-abrir-url` | `StepReveal` | title: «Flujo al abrir una URL»; steps[6] draft L182–189 |
| `secuencia-completa-dns` | `MermaidDiagram` | chart draft L196 |
| `ordenar-pasos-url` | `CodeChallenge` | title: «Ordena el flujo al cargar una página»; template draft L204; blanks draft L205–212 |
| Dato clave | prose | draft L217 |

### `ArquitecturasSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L227–229 |
| `arquitectura-3-capas` | `MermaidDiagram` | chart draft L235 |
| `tabla-2tier-vs-3tier` | `CompareTable` | headers draft L242; rows draft L243–249 |
| `caso-ecommerce-black-friday` | `Callout` | `variant="callout-warning"`; title: «Caso real: e-commerce con acceso directo a la BD»; children draft L256–257 (lesson-spec L79) |
| `practica-arquitectura-3-capas` | `PracticeExercise` | prompt draft L264; hints draft L265; expectedKeywords draft L266; successMessage draft L267 |

### `VariantesSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L278–280 |
| `tabla-variantes` | `CompareTable` | headers: `["Variante", "Ventaja", "Riesgo / límite"]`; rows draft L286–288 |
| `caso-videollamadas-p2p` | `Callout` | `variant="callout-warning"`; title: «Caso real: videollamadas sin servidor de señalización»; children draft L294–295 (lesson-spec L86) |
| Errores comunes | prose `<ul>` | draft L300–302 |

### `EjemplosRealesSection`

| id | componente | props |
|----|------------|-------|
| `tabla-aplicaciones-reales` | `CompareTable` | headers draft L314; rows draft L316–321 |
| `reflexion-tienda-online` | `PracticeExercise` | prompt draft L328; hints draft L329; expectedKeywords draft L330; successMessage draft L331 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-app-movil-postgresql` | `PracticeExercise` | prompt draft L342; hints draft L343; expectedKeywords draft L344; successMessage draft L345 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Diseña la arquitectura de un sistema de reservas de cine»; tareas 1–5 + criterio éxito (draft L354–364) |
| `reto-reservas-cine` | `PracticeExercise` | prompt draft L368; hints draft L369–374; expectedKeywords draft L375; successMessage draft L376; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L385 |
| Ideas clave | `<ul>` 5 viñetas draft L389–393 |
| Siguiente paso | enlace `herramientas-desarrollo` draft L395 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="modelo-cliente-servidor" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` |
| `sections/QueEsClienteServidorSection.tsx` | `QueEsClienteServidorSection` | `MermaidDiagram`, `CodeFiddle`, `PracticeExercise` |
| `sections/FlujoHttpSection.tsx` | `FlujoHttpSection` | `StepReveal`, `MermaidDiagram`, `CodeChallenge` |
| `sections/ArquitecturasSection.tsx` | `ArquitecturasSection` | `MermaidDiagram`, `CompareTable`, `Callout`, `PracticeExercise` |
| `sections/VariantesSection.tsx` | `VariantesSection` | `CompareTable`, `Callout` |
| `sections/EjemplosRealesSection.tsx` | `EjemplosRealesSection` | `CompareTable`, `PracticeExercise` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 6 secciones temáticas |
| `ModeloClienteServidorLesson.tsx` | Orden 10 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«5)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `bash`, `javascript`)
- [ ] Crear 10 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `modelo-cliente-servidor` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `react` |
| `next` | `herramientas-desarrollo` |
