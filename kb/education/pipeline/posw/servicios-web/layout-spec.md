---
track: posw
slug: servicios-web
title: "Servicios Web"
order: 1
prev: null
next: formatos-datos
---

## ServiciosWebLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsServicioWebSection />
<ObjetivosServiciosWebSection />
<IntroSolidPreviewSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir contenido en 3 secciones temáticas + 6 bloques pedagógicos (9 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `QueEsServicioWebSection`, `ObjetivosServiciosWebSection`, `IntroSolidPreviewSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L25–53). |
| 2 | ¿Qué es un servicio web? | `sections/QueEsServicioWebSection.tsx` | `MermaidDiagram`, `CompareTable`, `CodeFiddle` ×4, `Callout`, `PracticeExercise` | **Nuevo** (reemplaza bloque 1 de ContenidoSection). H2 sin prefijo «1)». |
| 3 | Objetivos de los servicios web | `sections/ObjetivosServiciosWebSection.tsx` | `StepReveal`, `Callout`, `CodeChallenge` | **Nuevo.** Tabla objetivos en prose; H2 sin prefijo «2)». |
| 4 | Introducción a SOLID en servicios web | `sections/IntroSolidPreviewSection.tsx` | `CompareTable`, `MermaidDiagram`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L283–288). |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L296). Ejercicios `my-8`. |
| 7 | Reto integrador: biblioteca universitaria | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Enunciado + ejemplo HTTP/JSON (draft L324–368). |
| 8 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `formatos-datos` (draft L372–385). |
| 9 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="servicios-web" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `servicios-web` con 5 preguntas del draft L393–451:

| # | Tema |
|---|------|
| 1 | Definición de servicio web |
| 2 | Escalabilidad independiente |
| 3 | SRP en endpoints |
| 4 | Analogía ATM / interoperabilidad |
| 5 | Centralizar lógica vs duplicar |

**Infra:** `<QuizSection slug="servicios-web" track="posw" />` en `MiniquizFinalSection`. Extender `QuizSection.tsx` `QUIZ_MAP` con `posw: POSW_QUIZZES`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Servicios Web: definición, objetivos y SOLID \| POSW` |
| `seoDescription` | `Aprende qué es un servicio web, arquitectura cliente-servidor, interoperabilidad, escalabilidad y preview de SOLID aplicado a APIs. Primera lección del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L27–34 |
| Prerrequisitos | prose `<ul>` | draft L37–39 |
| `contrato-publico` | `Callout` | `variant="callout-info"`; title: «Contrato público»; children draft L50–52 |

### `QueEsServicioWebSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L61–66 |
| Qué es / Analogía ATM | prose | draft L68–74 |
| `arquitectura-cliente-servicio` | `MermaidDiagram` | chart draft L78–80 |
| `sitio-vs-servicio` | `CompareTable` | headers draft L86–87; rows draft L88–93 |
| `peticion-get-producto` | `CodeFiddle` | `language="http"`; title: «Petición GET»; code draft L99–103 |
| `respuesta-json-producto` | `CodeFiddle` | `language="json"`; title: «Respuesta JSON»; code draft L106–112 |
| `antipatron-logica-duplicada` | `CodeFiddle` | `language="javascript"`; title: «Anti-patrón: lógica duplicada»; code draft L118–124 |
| `patron-cliente-delgado` | `CodeFiddle` | `language="http"`; title: «Patrón: cliente delgado»; code draft L129–136 |
| `caso-fintech-tres-apps` | `Callout` | title: «Caso real: fintech con tres apps»; children draft L139–141 |
| `practica-analogia-atm` | `PracticeExercise` | prompt: «Explica la analogía del ATM: ¿qué parte es el cliente, qué parte es la interfaz estandarizada y qué parte es el sistema interno del banco?»; hints: `["Cliente = quien consume", "Interfaz = protocolo del cajero", "Interno = validación y persistencia"]`; expectedKeywords: `["cliente", "interfaz", "banco", "ATM"]`; successMessage: «Correcto. El cliente consume la interfaz; el servicio interno ejecuta reglas y accede a datos.» |

### `ObjetivosServiciosWebSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | 6 objetivos draft L160–167 |
| Tabla objetivos | prose `<table>` o lista | draft L171–178 |
| `objetivos-step-reveal` | `StepReveal` | title: «Objetivos de los servicios web»; steps[5] draft L183–204 |
| `caso-black-friday` | `Callout` | title: «Caso real: e-commerce en Black Friday»; children draft L209–210 |
| Flujo típico | prose | draft L215 |
| `completa-definicion-servicio` | `CodeChallenge` | title: «Completa la definición»; template: `Un servicio web permite interacción ___-a-___ mediante interfaces ___.`; blanks: `[{ "id": "blank1", "answer": "máquina", "placeholder": "tipo de actor" }, { "id": "blank2", "answer": "máquina", "placeholder": "receptor" }, { "id": "blank3", "answer": "estandarizadas", "placeholder": "característica de la interfaz" }]` |

### `IntroSolidPreviewSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L234–238 |
| `tabla-solid-api` | `CompareTable` | headers draft L243–244; rows draft L245–251 |
| `capas-api-particionada` | `MermaidDiagram` | chart draft L256–258 |
| `error-solid-apis` | `Callout` | title: «Error frecuente»; children draft L262–264 |
| `practica-dependency-inversion` | `PracticeExercise` | prompt: «Para el principio D (Dependency Inversion), ¿por qué el servicio no debería importar directamente MySQLRepositorio en su controlador?»; hints: `["Piensa en pruebas con mock", "Cambiar de motor de BD sin tocar lógica de negocio"]`; expectedKeywords: `["abstracción", "IRepositorio", "acoplamiento", "test"]`; successMessage: «Correcto. Depender de abstracciones desacopla la lógica de la implementación concreta y facilita pruebas y cambios de persistencia.» |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L283–288 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L296 |
| `comprension-interoperabilidad` | `PracticeExercise` | prompt: «Enumera dos razones por las que un banco legacy en Java y una app móvil en Kotlin deberían integrarse vía servicio web en lugar de compartir librería nativa.»; hints: `["Piensa en plataformas distintas", "Interoperabilidad y contrato HTTP"]`; expectedKeywords: `["interoperabilidad", "HTTP", "lenguaje", "contrato"]`; successMessage: «Correcto. La interoperabilidad depende de protocolo y formato, no de compartir el mismo stack o librería nativa.» |
| `comprension-flujo-http` | `PracticeExercise` | prompt: «Ordena el flujo: (a) servicio responde con JSON, (b) cliente envía petición HTTP, (c) servicio persiste o consulta datos, (d) servicio valida y ejecuta lógica, (e) cliente muestra resultado. Indica el orden correcto.»; hints: `["Empieza con la petición del cliente", "Termina con la presentación en el cliente"]`; expectedKeywords: `["b", "d", "c", "a", "e"]`; successMessage: «Correcto. Orden: (b) petición → (d) validar/ejecutar → (c) persistir/consultar → (a) responder JSON → (e) mostrar.» |
| `comprension-srp-endpoint` | `PracticeExercise` | prompt: «Identifica qué principio SOLID se viola si /usuarios/registro también procesa pagos y envía emails de marketing.»; hints: `["Un módulo, una razón para cambiar", "Letra S del acrónimo"]`; expectedKeywords: `["SRP", "Single", "Responsabilidad"]`; successMessage: «Correcto. Viola Single Responsibility: un endpoint con demasiadas responsabilidades distintas.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Diseña el servicio de una biblioteca universitaria»; tareas 1–5 + criterio éxito (draft L328–338) |
| `reto-get-isbn` | `CodeFiddle` | `language="http"`; title: «Ejemplo GET por ISBN»; code draft L341–345 |
| `reto-respuesta-libro` | `CodeFiddle` | `language="json"`; title: «Respuesta esperada»; code draft L348–355 |
| `reto-biblioteca-integrador` | `PracticeExercise` | prompt: «Implementa el reto de la biblioteca: describe las operaciones del servicio, el diagrama cliente→servicio→DB y al menos dos principios SOLID que aplicaste al separar módulos.»; hints: `["Servicio expone consulta, préstamo y devolución", "Clientes solo UI o script", "SRP al separar usuarios de préstamos", "DIP si el servicio usa IRepositorioLibros"]`; expectedKeywords: `["préstamo", "SRP", "HTTP", "cliente"]`; successMessage: «Excelente. Has integrado arquitectura cliente-servicio, centralización de lógica y criterios SOLID en el diseño.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L376 |
| Ideas clave | `<ul>` 4 viñetas draft L380–383 |
| Siguiente paso | enlace `formatos-datos` draft L385 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="servicios-web" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/QueEsServicioWebSection.tsx` | `QueEsServicioWebSection` | `MermaidDiagram`, `CompareTable`, `CodeFiddle` ×4, `Callout`, `PracticeExercise` |
| `sections/ObjetivosServiciosWebSection.tsx` | `ObjetivosServiciosWebSection` | `StepReveal`, `Callout`, `CodeChallenge` |
| `sections/IntroSolidPreviewSection.tsx` | `IntroSolidPreviewSection` | `CompareTable`, `MermaidDiagram`, `Callout`, `PracticeExercise` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle` ×2, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 3 secciones temáticas |
| `ServiciosWebLesson.tsx` | Orden 9 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)» / «2)» / «3)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `json`, `javascript` — 6 bloques en draft)
- [ ] Crear 9 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `servicios-web` en `teaching-quizzes/posw.ts`
- [ ] Extender `QuizSection.tsx` con track `posw`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `null` |
| `next` | `formatos-datos` |
