---
track: posw
slug: bases-de-datos
title: "Bases de datos: SQL, NoSQL y modelado relacional"
order: 18
prev: herramientas-desarrollo
next: principios-solid
---

## BasesDeDatosLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<SqlFamiliasSection />
<DdlSection />
<DmlSection />
<DclTclAcidSection />
<SqlVsNosqlSection />
<ClavesSection />
<ColumnarGrafosSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection` si existe; dividir en 7 secciones temáticas + 4 bloques pedagógicos (12 secciones totales).

Imports a añadir: `ObjetivosSection`, `SqlFamiliasSection`, `DdlSection`, `DmlSection`, `DclTclAcidSection`, `SqlVsNosqlSection`, `ClavesSection`, `ColumnarGrafosSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L30–58). |
| 2 | Familias SQL: DDL, DML, DCL y TCL | `sections/SqlFamiliasSection.tsx` | `MermaidDiagram`, `StepReveal`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | DDL: crear y modificar tablas | `sections/DdlSection.tsx` | `CodeFiddle`, `MermaidDiagram` | **Nuevo.** H2 sin prefijo «2)». `sql` ×1. |
| 4 | DML: consultar e insertar datos | `sections/DmlSection.tsx` | `CodeFiddle` ×3, `CodeChallenge` | **Nuevo.** H2 sin prefijo «3)». `sql` ×2, `javascript` ×1. |
| 5 | DCL y TCL: permisos y transacciones | `sections/DclTclAcidSection.tsx` | `CodeFiddle`, `CompareTable`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «4)». `sql` ×1. |
| 6 | SQL vs NoSQL: cuándo elegir cada motor | `sections/SqlVsNosqlSection.tsx` | `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «5)». |
| 7 | Claves primarias, foráneas y restricciones | `sections/ClavesSection.tsx` | `PracticeExercise` | **Nuevo.** H2 sin prefijo «6)». |
| 8 | Bases columnares y de grafos (OLAP y Cypher) | `sections/ColumnarGrafosSection.tsx` | `CodeFiddle`, prose tabla OLTP/OLAP | **Nuevo.** H2 sin prefijo «7)». Cypher → `plaintext` con title. |
| 9 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×1 | **Nuevo.** Ejercicio `my-8`. |
| 10 | Reto integrador: modelo de datos tienda online | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Esqueleto DDL + enunciado (draft L385–434). |
| 11 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `principios-solid` (draft L438–453). |
| 12 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="bases-de-datos" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `bases-de-datos` con 5 preguntas del draft L461–519:

| # | Tema |
|---|------|
| 1 | CREATE TABLE = DDL |
| 2 | Atomicidad: todo o nada |
| 3 | FK = integridad referencial con PK otra tabla |
| 4 | NoSQL: esquema variable + escala horizontal |
| 5 | Columnar OLAP para agregaciones masivas |

**Infra:** `<QuizSection slug="bases-de-datos" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `Bases de datos: SQL, NoSQL y ACID \| POSW` |
| `seoDescription` | `Clasifica SQL (DDL, DML, DCL, TCL), diseña tablas con PK/FK, compara SQL vs NoSQL y distingue motores columnares y de grafos. Lección 18 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `sql`, `javascript`, `plaintext` (Cypher draft L351 mal etiquetado como sql).

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | draft L42–44 |
| Intro | prose | draft L52 |
| `frontend-no-conecta-bd` | `Callout` | `variant="callout-info"`; title: «El frontend no conecta directo a la BD»; children draft L55–57 (lesson-spec L73) |

### `SqlFamiliasSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L68–71 |
| `diagrama-familias-sql` | `MermaidDiagram` | chart draft L77 |
| `step-familias-sql` | `StepReveal` | title: «Las cuatro familias SQL»; steps[4] draft L85–90 |
| `clasificar-comandos-sql` | `CodeChallenge` | title: «¿A qué familia pertenece cada comando?»; template draft L98; blanks draft L99–104 |

### `DdlSection`

| id | componente | props |
|----|------------|-------|
| `ddl-crear-modificar` | `CodeFiddle` | `language="sql"`; title: «DDL — crear y modificar tablas»; code draft L117–133 |
| `modelo-er-simplificado` | `MermaidDiagram` | chart draft L139 |
| Errores comunes | prose `<ul>` | draft L144–145 |

### `DmlSection`

| id | componente | props |
|----|------------|-------|
| `dml-insert-select-update` | `CodeFiddle` | `language="sql"`; title: «Insertar, consultar, actualizar»; code draft L157–173 |
| `dml-agregaciones-group-by` | `CodeFiddle` | `language="sql"`; title: «Agregaciones con GROUP BY»; code draft L179–188 |
| `completar-group-by` | `CodeChallenge` | title: «Completa la consulta GROUP BY»; template draft L195; blanks draft L196–199 |
| `cliente-api-no-bd` | `CodeFiddle` | `language="javascript"`; title: «Cliente JavaScript (API como capa)»; code draft L206–212 |
| Errores comunes | prose `<ul>` | draft L216–217 |

### `DclTclAcidSection`

| id | componente | props |
|----|------------|-------|
| `dcl-tcl-permisos-transaccion` | `CodeFiddle` | `language="sql"`; title: «Permisos y transacción»; code draft L228–237 |
| `tabla-propiedades-acid` | `CompareTable` | headers draft L243; rows draft L244–249 |
| `caso-fintech-sin-transaccion` | `Callout` | `variant="callout-warning"`; title: «Caso real: transferencia bancaria sin transacción»; children draft L256–257 (lesson-spec L80) |
| `practica-transferencia-acid` | `PracticeExercise` | prompt draft L264; hints draft L265; expectedKeywords draft L266; successMessage draft L267 |

### `SqlVsNosqlSection`

| id | componente | props |
|----|------------|-------|
| `tabla-sql-vs-nosql` | `CompareTable` | headers draft L280; rows draft L281–288 |
| Regla práctica | prose `<ul>` | draft L293–295 |
| `caso-ecommerce-poliglota` | `Callout` | `variant="callout-warning"`; title: «Caso real: un solo motor para todo el catálogo»; children draft L301–302 (lesson-spec L87) |

### `ClavesSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L313–317 |
| Errores comunes | prose `<ul>` | draft L321–323 |
| `practica-modelo-pk-fk` | `PracticeExercise` | prompt draft L329; hints draft L330; expectedKeywords draft L331; successMessage draft L332 |

### `ColumnarGrafosSection`

| id | componente | props |
|----|------------|-------|
| Tabla OLTP vs OLAP | prose `<table>` | draft L343–347 |
| `grafo-cypher-neo4j` | `CodeFiddle` | `language="plaintext"`; title: «Grafo en Cypher (Neo4j)»; code draft L352–363 |
| Cuándo no usar grafos | prose | draft L367 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-logs-nosql` | `PracticeExercise` | prompt draft L377; hints draft L378; expectedKeywords draft L379; successMessage draft L380 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Diseña el modelo de datos de una tienda online»; tareas 1–5 + criterio éxito (draft L389–399) |
| `reto-esqueleto-ddl` | `CodeFiddle` | `language="sql"`; title: «Esqueleto DDL (completar en el reto)»; code draft L403–422 |
| `reto-tienda-online` | `PracticeExercise` | prompt draft L426; hints draft L427–431; expectedKeywords draft L432; successMessage draft L433; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L442 |
| Ideas clave | `<ul>` 6 viñetas draft L446–451 |
| Siguiente paso | enlace `principios-solid` draft L453 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="bases-de-datos" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` |
| `sections/SqlFamiliasSection.tsx` | `SqlFamiliasSection` | `MermaidDiagram`, `StepReveal`, `CodeChallenge` |
| `sections/DdlSection.tsx` | `DdlSection` | `CodeFiddle`, `MermaidDiagram` |
| `sections/DmlSection.tsx` | `DmlSection` | `CodeFiddle`, `CodeChallenge` |
| `sections/DclTclAcidSection.tsx` | `DclTclAcidSection` | `CodeFiddle`, `CompareTable`, `Callout`, `PracticeExercise` |
| `sections/SqlVsNosqlSection.tsx` | `SqlVsNosqlSection` | `CompareTable`, `Callout` |
| `sections/ClavesSection.tsx` | `ClavesSection` | `PracticeExercise` |
| `sections/ColumnarGrafosSection.tsx` | `ColumnarGrafosSection` | `CodeFiddle` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** si existe — contenido repartido en 7 secciones temáticas |
| `BasesDeDatosLesson.tsx` | Orden 12 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«7)»)
- [ ] Migrar todo código → `CodeFiddle` (`sql`, `javascript`, `plaintext` para Cypher)
- [ ] Crear 12 secciones; eliminar `ContenidoSection` si existe
- [ ] Registrar quiz `bases-de-datos` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `herramientas-desarrollo` |
| `next` | `principios-solid` |
