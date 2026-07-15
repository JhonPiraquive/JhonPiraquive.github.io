---
track: posw
slug: bases-de-datos
title: "Bases de datos: SQL, NoSQL y modelado relacional"
order: 18
prev: herramientas-desarrollo
next: principios-solid
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track POSW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; rigor en integridad de datos y elección consciente de motor.
- **Persona:** segunda persona (*tú*) en ejercicios y reto; impersonal en definiciones SQL y ACID.
- **Voz:** profesional, clara, confiable; transacciones y claves antes de modas NoSQL.
- **Evitar:** declarar SQL obsoleto, hype de grafos para CRUD simple, tono de certificación memorística.
- **Preferir:** verbos de acción concretos (*clasificar*, *escribir*, *diseñar*, *comparar*, *distinguir*, *argumentar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Bases de datos: SQL, NoSQL y ACID \| POSW` | 42 caracteres |
| `seo_description` | `Clasifica SQL (DDL, DML, DCL, TCL), diseña tablas con PK/FK, compara SQL vs NoSQL y distingue motores columnares y de grafos. Lección 18 del track POSW.` | 154 caracteres |
| `seo_title` (EN, fase i18n) | `Databases: SQL, NoSQL & ACID \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 18: SQL families (DDL/DML/DCL/TCL), PK/FK design, SQL vs NoSQL trade-offs, and columnar vs graph use cases.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Bases de datos: SQL, NoSQL y modelado relacional`

- Cubre familias SQL, comparativa políglota y diseño de esquema.
- Subtítulo académico con dos puntos; *modelado relacional* como competencia de cierre.
- Conecta con lección previa (MariaDB en XAMPP/Docker) y siguiente (`principios-solid`).

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| Familias del lenguaje SQL | Familias SQL: DDL, DML, DCL y TCL | Cuatro sub-lenguajes; un ejemplo cada uno |
| ↳ DDL — definición de esquema | DDL: crear y modificar tablas | `CREATE`, `ALTER`, `DROP` |
| ↳ DML — manipulación de datos | DML: consultar e insertar datos | `SELECT`, `JOIN`, agregaciones |
| ↳ DCL y TCL | DCL y TCL: permisos y transacciones | `GRANT`/`REVOKE`; `BEGIN`/`COMMIT`/`ROLLBACK` |
| ↳ Propiedades ACID | Propiedades ACID en transacciones | Tabla o viñetas; atomicidad como foco del quiz |
| Claves e integridad referencial | Claves primarias, foráneas y restricciones | PK, FK, UNIQUE; surrogate vs natural |
| SQL frente a NoSQL | SQL frente a NoSQL | CompareTable; regla práctica de selección |
| ↳ Cuándo elegir cada motor | Cuándo elegir SQL, NoSQL o ambos | OLTP relacional vs esquema flexible |
| Bases columnares y de grafos | Bases columnares y de grafos | OLAP vs OLTP; ejemplo Cypher breve |
| ↳ OLTP vs OLAP | OLTP frente a OLAP | Filas transaccionales vs agregaciones masivas |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Resumen | Resumen | Viñetas con familias SQL y decisión de motor |
| Reto integrador | Reto integrador: modelo de datos de tienda online | DDL + DML + transacción de stock |
| Cierre | Cierre de la lección | Puente a `principios-solid` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: tema nominal; sin emojis.
- H3: nombrar familia SQL o motor solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. El frontend no conecta directo a la BD

- **Título:** `El frontend no conecta directo a la BD`
- **Tono:** preventivo; refuerza arquitectura 3 capas de la lección 16.
- **Copy refinado:** `En producción, el navegador consume APIs; la base de datos solo es accesible desde el backend con credenciales restringidas. Conectar el cliente directo a PostgreSQL expone datos y credenciales.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 2. Caso real — transferencia sin transacción

- **Título:** `Caso real: transferencia bancaria sin transacción`
- **Tono:** incidente de consistencia; énfasis en TCL y ACID.
- **Copy refinado:** `Dos `UPDATE` de saldo sin `BEGIN/COMMIT`: tras el primero hay timeout y el segundo nunca corre. Decisión: envolver en transacción TCL, `ROLLBACK` ante fallo, `CHECK (saldo >= 0)` y permisos DCL mínimos para la app.`
- **Variante Clay:** `callout-warning`.

#### 3. Caso real — e-commerce políglota

- **Título:** `Caso real: un solo motor para todo el catálogo`
- **Tono:** lección de forma de datos; SQL + Redis + MongoDB según caso.
- **Copy refinado:** `Pedidos y stock en PostgreSQL (ACID); carrito en Redis; logs de clics en MongoDB por esquema variable. Intentar meter logs en tablas SQL rígidas bloquea releases. Decisión: cada motor según consistencia y forma de datos.`
- **Variante Clay:** `callout-warning`.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| CompareTable | SQL vs NoSQL | Filas: esquema, escala, JOINs, ACID, motores ejemplo |
| StepReveal | Familias SQL | Pasos: DDL → DML → DCL → TCL con un comando cada uno |
| PracticeExercise | Éxito (transferencia ACID) | `Correcto. Sin transacción, un fallo a mitad deja saldos inconsistentes; ACID garantiza todo o nada.` |
| PracticeExercise | Éxito (diagrama ER) | `Correcto. PK en cada tabla; FK de detalle_pedido hacia pedidos y productos; integridad referencial.` |
| PracticeExercise | Éxito (reto tienda) | `Excelente. Esquema con CHECK, transacción de stock coherente, agregación por categoría y justificación políglota razonada.` |
| Quiz | Feedback general | Una oración; citar DDL/DML, FK, ACID o columnar vs row-based |
| Cierre | Ideas clave | Viñetas: clasificar SQL · COMMIT confirma · FK protege integridad · NoSQL no reemplaza relacional siempre · columnar para OLAP |
| Cierre | Siguiente paso | `Siguiente lección: principios SOLID — diseño de software mantenible aplicado al backend y las APIs.` |

### Notas EN (fase i18n)

- Título EN sugerido: `Databases: SQL, NoSQL, and relational modeling`
- Mantener sin traducir: SQL, DDL, DML, DCL, TCL, ACID, JOIN, PostgreSQL, MongoDB, Redis, Neo4j, Cypher, OLTP, OLAP.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.

## SEO

Contribución de **seo-redirects-expert**. Lección 18 del track POSW; cierra bloque infraestructura antes de `principios-solid`.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Bases de datos: SQL, NoSQL y ACID \| POSW` | 42 |
| `seoDescription` | `Clasifica SQL (DDL, DML, DCL, TCL), diseña tablas con PK/FK, compara SQL vs NoSQL y distingue motores columnares y de grafos. Lección 18 del track POSW.` | 154 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Databases: SQL, NoSQL & ACID \| POSW` | 37 |
| `seoDescription` | `POSW Lesson 18: SQL families, PK/FK design, SQL vs NoSQL trade-offs, and columnar vs graph database use cases.` | 115 |

### Keywords (track POSW)

**Primarias:** bases de datos, SQL, NoSQL, DDL, DML, ACID, POSW, PostgreSQL.

**Secundarias:** primary key, foreign key, JOIN, transacciones, MongoDB, Redis, Neo4j, OLTP, OLAP.

**Long-tail:** familias SQL DDL DML DCL TCL, diferencia SQL NoSQL cuándo usar, transacción BEGIN COMMIT ROLLBACK, base datos columnar OLAP, integridad referencial foreign key.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `herramientas-desarrollo` | Herramientas de desarrollo: XAMPP y Docker |
| `next` | `principios-solid` | Principios SOLID |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/bases-de-datos/` |
| EN (fase i18n) | `/en/teaching/posw/bases-de-datos/` |
| Legacy | `/pages/teaching/posw/bases-de-datos.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | Familias del lenguaje SQL | Familias SQL: DDL, DML, DCL y TCL | DDL DML SQL |
| H2 | Claves e integridad referencial | Claves primarias, foráneas y restricciones | primary key foreign key |
| H2 | SQL frente a NoSQL | SQL vs NoSQL: cuándo elegir cada motor | SQL vs NoSQL |
| H2 | Bases columnares y de grafos | Bases columnares y de grafos (OLAP y Cypher) | base datos columnar Neo4j |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: modelo de datos tienda online | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Bases de datos: SQL, NoSQL y ACID \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «TCL» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama familias SQL o ER simplificado categorías-productos |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`bases-de-datos`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Databases: SQL, NoSQL, and relational modeling`.
- **Términos sin traducir:** SQL, DDL, DML, DCL, TCL, ACID, JOIN, PostgreSQL, MongoDB, Redis, Neo4j, Cypher, API.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

