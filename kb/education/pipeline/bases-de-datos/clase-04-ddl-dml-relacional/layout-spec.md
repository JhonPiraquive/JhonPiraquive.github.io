---
track: bases-de-datos
slug: clase-03-ddl-dml-relacional
title: "DDL, DML, agregados y modelo relacional: de la estructura a la consulta"
order: 4
prev: clase-02-fundamentos-motores-estructura/practica-y-cierre
next: null
tsx_target: src/components/teaching/lessons/bases-de-datos/clase-03-ddl-dml-relacional/
pagination: true
pagination_reason: ">8 secciones de concepto (~35 bloques) y ~>20 min de lectura continua (draft ~1500 líneas: DDL, restricciones, DML, filtros, agregados, UPDATE/DELETE, relacional/JOINs + práctica); ADR 011 hub + 8 páginas"
showInTrackIndex_hub: true
showInTrackIndex_pages: false
audience: student
---

# Layout spec — DDL, DML, agregados y modelo relacional

## Decisión de paginación (ADR 011)

**Paginado: sí.**

| Criterio | Valor |
|----------|-------|
| Secciones de contenido (tabla abajo) | **35** (>8) |
| Lectura estimada | **>~70–90 min** si fuera monolítica |
| Páginas internas | **8** (+ hub) |
| Secciones por página | **3–6** (páginas densas: `ddl-estructura`, `relacional-fk-joins`) |
| Quiz | Solo en **última página** (`practica-y-cierre`), clave por **clase** |
| Shell | Hub → `LessonLayout`; páginas → `ClassPageLayout` |
| Nav | `class-navigation.ts` → `getPageNavChain()` / `CLASE_03` |
| Contenido | Solo estudiante (sin guía docente / entregas / lab) |

**Paths de shell:**

| Componente | Path |
|------------|------|
| `LessonLayout` | `src/components/teaching/LessonLayout.tsx` |
| `ClassPageLayout` | `src/components/teaching/ClassPageLayout.tsx` |
| `ClassPagesNavSection` | `src/components/teaching/ClassPagesNavSection.tsx` |
| `CodeFiddle` | `src/components/teaching/CodeFiddle.tsx` |
| `Callout` | `src/components/teaching/Callout.tsx` |
| `MermaidDiagram` | `src/components/teaching/MermaidDiagram.tsx` |
| `CompareTable` | `src/components/teaching/CompareTable.tsx` |
| `StepReveal` | `src/components/teaching/StepReveal.tsx` |
| `PracticeExercise` | `src/components/teaching/PracticeExercise.tsx` |
| `ChallengeCard` | `src/components/teaching/ChallengeCard.tsx` |
| `QuizSection` | `src/components/teaching/lessons/shared/QuizSection.tsx` |

---

## Páginas

| page_slug | title | sections | showInTrackIndex | layout | component |
|-----------|-------|----------|------------------|--------|-----------|
| `clase-03-ddl-dml-relacional` | Hub — DDL, DML, agregados y modelo relacional | ObjetivosSection, MapaDdlDmlSection, ClassPagesNavSection | **true** | **LessonLayout** | `Clase03DdlDmlRelacionalHubLesson` |
| `clase-03-ddl-dml-relacional/ddl-estructura` | DDL frente a DML: el mapa de la clase | IntroFlujoDdlDmlJoinSection, DdlVsDmlSection, QueEsDdlSection, CreateDropDatabaseSection, CreateDropAlterTableSection, AutoIncrementSection | **false** | **ClassPageLayout** | `DdlEstructuraPageLesson` |
| `clase-03-ddl-dml-relacional/ddl-restricciones` | Restricciones: PK, UNIQUE y NOT NULL | CatalogoRestriccionesSection, PrimaryKeySection, UniqueConstraintSection, NotNullNullSection | **false** | **ClassPageLayout** | `DdlRestriccionesPageLesson` |
| `clase-03-ddl-dml-relacional/dml-insert-select` | DML: insertar y consultar | QueEsDmlSection, InsertSection, SelectBaseSection | **false** | **ClassPageLayout** | `DmlInsertSelectPageLesson` |
| `clase-03-ddl-dml-relacional/dml-filtros-orden` | WHERE, DISTINCT, ORDER BY y LIMIT | WhereSection, DistinctSection, OrderBySection, LimitSection | **false** | **ClassPageLayout** | `DmlFiltrosOrdenPageLesson` |
| `clase-03-ddl-dml-relacional/agregados-group-having` | Agregados, GROUP BY y HAVING | AgregadosSection, GroupBySection, HavingSection | **false** | **ClassPageLayout** | `AgregadosGroupHavingPageLesson` |
| `clase-03-ddl-dml-relacional/update-delete` | UPDATE y DELETE: poder con WHERE y backup | AdvertenciaUpdateDeleteSection, UpdateSection, DeleteSection | **false** | **ClassPageLayout** | `UpdateDeletePageLesson` |
| `clase-03-ddl-dml-relacional/relacional-fk-joins` | Modelo relacional, FK y JOINs | QueEsBdRelacionalSection, RelacionalVsErSection, CardinalidadPkFkSection, CreateTableConstraintSection, JoinsSection, ScriptErroresCasosSection | **false** | **ClassPageLayout** | `RelacionalFkJoinsPageLesson` |
| `clase-03-ddl-dml-relacional/practica-y-cierre` | Práctica, reto y cierre | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | **false** | **ClassPageLayout** | `PracticaYCierrePageLesson` |

**Breadcrumb:** `Clase 3 / Página X de 8` + título de página.

**Prev/next cadena de clase:**

| slug | prev | next |
|------|------|------|
| hub `clase-03-ddl-dml-relacional` | `clase-02-fundamentos-motores-estructura/practica-y-cierre` | `…/ddl-estructura` |
| `…/ddl-estructura` | hub | `…/ddl-restricciones` |
| `…/ddl-restricciones` | `…/ddl-estructura` | `…/dml-insert-select` |
| `…/dml-insert-select` | `…/ddl-restricciones` | `…/dml-filtros-orden` |
| `…/dml-filtros-orden` | `…/dml-insert-select` | `…/agregados-group-having` |
| `…/agregados-group-having` | `…/dml-filtros-orden` | `…/update-delete` |
| `…/update-delete` | `…/agregados-group-having` | `…/relacional-fk-joins` |
| `…/relacional-fk-joins` | `…/update-delete` | `…/practica-y-cierre` |
| `…/practica-y-cierre` | `…/relacional-fk-joins` | **`null`** |

Al publicar: `next` de clase-02 `practica-y-cierre` → este hub (vía `ALL_CLASSES` / `getPageNavChain()`).

---

## Hub — Clase03DdlDmlRelacionalHubLesson.tsx

```tsx
<ObjetivosSection />
<MapaDdlDmlSection />
<ClassPagesNavSection track={meta.track} classSlug={CLASE_03.classSlug} pages={CLASE_03.pages} />
```

**TSX target:** `src/components/teaching/lessons/bases-de-datos/clase-03-ddl-dml-relacional/`

- Hub: `Clase03DdlDmlRelacionalHubLesson.tsx` · shell `LessonLayout`
- Páginas: `pages/{pagina}/*PageLesson.tsx` · shell `ClassPageLayout`
- Secciones compartidas: `sections/*.tsx` (reutilizar; no duplicar)
- Meta: `lesson-meta.ts` (hub + páginas) · nav: `src/components/teaching/lessons/bases-de-datos/class-navigation.ts` (`CLASE_03`)

**ClassPagesNav (8 entradas, sin cards en listado):**

| slug | title | description | ~min |
|------|-------|-------------|------|
| `ddl-estructura` | DDL frente a DML: el mapa de la clase | CREATE/DROP DATABASE y TABLE, ALTER y AUTO INCREMENT | 20 |
| `ddl-restricciones` | Restricciones: PK, UNIQUE y NOT NULL | Integridad de filas y atributos de negocio en el motor | 15 |
| `dml-insert-select` | DML: insertar y consultar | INSERT, SELECT y reglas de nombres/comillas | 15 |
| `dml-filtros-orden` | WHERE, DISTINCT, ORDER BY y LIMIT | Filtrar, deduplicar, ordenar y acotar resultados | 18 |
| `agregados-group-having` | Agregados, GROUP BY y HAVING | AVG/SUM/COUNT/MAX/MIN y filtros sobre grupos | 18 |
| `update-delete` | UPDATE y DELETE con WHERE y backup | Advertencia crítica: nunca sin WHERE | 15 |
| `relacional-fk-joins` | Modelo relacional, FK y JOINs | ER vs relacional, CONSTRAINT e INNER/LEFT/RIGHT JOIN | 22 |
| `practica-y-cierre` | Práctica, reto y cierre | Ejercicios, reto Rutas Digitales, cierre y miniquiz | 25 |

---

## Secciones (orden global)

| orden | heading | page | tsx_component | path | props / notes |
|-------|---------|------|---------------|------|---------------|
| 1 | Objetivos de aprendizaje | hub | ObjetivosSection | `sections/ObjetivosSection.tsx` | Objetivos ×5 + prerrequisitos (draft L35–48). Sin guía docente. |
| — | Índice de páginas (hub) | hub | ClassPagesNavSection | `src/components/teaching/ClassPagesNavSection.tsx` | 8 páginas; descripciones breves; **sin cards** en listado. |
| 2 | Mapa DDL ↔ DML | hub | MapaDdlDmlSection | `sections/MapaDdlDmlSection.tsx` | Intro Rutas Digitales (draft L52–56); **CompareTable** `ddl-vs-dml`; **Callout** warning `checklist-estructura-datos`. |
| 3 | Flujo DDL → DML → JOIN | ddl-estructura | IntroFlujoDdlDmlJoinSection | `sections/IntroFlujoDdlDmlJoinSection.tsx` | **MermaidDiagram** flowchart `flujo-ddl-dml-join` (ADR 013 **hero**). Sin ClayCard envolvente. |
| 4 | DDL frente a DML | ddl-estructura | DdlVsDmlSection | `sections/DdlVsDmlSection.tsx` | Qué/para qué/cómo; tabla familias; señales; H3 Malas prácticas ×3. |
| 5 | Qué es DDL: definir el esquema | ddl-estructura | QueEsDdlSection | `sections/QueEsDdlSection.tsx` | Catálogo sentencias (CREATE/DROP/ALTER/AUTO INCREMENT); H3 Malas prácticas ×3. |
| 6 | CREATE DATABASE y DROP DATABASE | ddl-estructura | CreateDropDatabaseSection | `sections/CreateDropDatabaseSection.tsx` | **CodeFiddle** `sql-create-database` + `sql-drop-database`; H3 Malas prácticas por sentencia. |
| 7 | CREATE TABLE, DROP TABLE y ALTER TABLE | ddl-estructura | CreateDropAlterTableSection | `sections/CreateDropAlterTableSection.tsx` | **CodeFiddle** `sql-create-table-programas` + `sql-drop-table` + `sql-alter-table`; prose entre fiddles; H3 Malas prácticas por sentencia. |
| 8 | AUTO INCREMENT | ddl-estructura | AutoIncrementSection | `sections/AutoIncrementSection.tsx` | **CodeFiddle** `sql-insert-autoincrement`; H3 Malas prácticas ×3. |
| 9 | Catálogo de restricciones | ddl-restricciones | CatalogoRestriccionesSection | `sections/CatalogoRestriccionesSection.tsx` | Tabla PK / UNIQUE / NOT NULL (draft L399–403). Sin H3 malas prácticas (marco). |
| 10 | Llave primaria y ADD PRIMARY KEY | ddl-restricciones | PrimaryKeySection | `sections/PrimaryKeySection.tsx` | **CodeFiddle** `sql-add-primary-key`; H3 Malas prácticas ×3. |
| 11 | UNIQUE: unicidad de negocio | ddl-restricciones | UniqueConstraintSection | `sections/UniqueConstraintSection.tsx` | **CodeFiddle** `sql-unique-nombre`; H3 Malas prácticas ×3. |
| 12 | NOT NULL frente a NULL | ddl-restricciones | NotNullNullSection | `sections/NotNullNullSection.tsx` | **CodeFiddle** `sql-not-null-null`; tabla 0 / `''` / NULL; H3 Malas prácticas ×4. |
| 13 | DML: insertar y consultar | dml-insert-select | QueEsDmlSection | `sections/QueEsDmlSection.tsx` | Tabla INSERT/SELECT; reglas nombres/comillas; H3 Malas prácticas ×3. |
| 14 | INSERT: cargar filas | dml-insert-select | InsertSection | `sections/InsertSection.tsx` | **CodeFiddle** `sql-insert-programas`; H3 Malas prácticas ×3. |
| 15 | SELECT: proyectar columnas | dml-insert-select | SelectBaseSection | `sections/SelectBaseSection.tsx` | **CodeFiddle** `sql-select-base`; H3 Malas prácticas ×3. |
| 16 | WHERE | dml-filtros-orden | WhereSection | `sections/WhereSection.tsx` | Catálogo cláusulas (draft L634–644) + **CodeFiddle** `sql-where`; H3 Malas prácticas ×3. |
| 17 | DISTINCT | dml-filtros-orden | DistinctSection | `sections/DistinctSection.tsx` | **CodeFiddle** `sql-distinct`; H3 Malas prácticas ×3. |
| 18 | ORDER BY | dml-filtros-orden | OrderBySection | `sections/OrderBySection.tsx` | **CodeFiddle** `sql-order-by`; H3 Malas prácticas ×3. |
| 19 | LIMIT | dml-filtros-orden | LimitSection | `sections/LimitSection.tsx` | **CodeFiddle** `sql-limit`; H3 Malas prácticas ×3. |
| 20 | Funciones de agregado | agregados-group-having | AgregadosSection | `sections/AgregadosSection.tsx` | **CodeFiddle** `sql-agregados-plantilla` + `sql-agregados-ejemplos`; tabla AVG…MIN; H3 Malas prácticas ×3. |
| 21 | GROUP BY | agregados-group-having | GroupBySection | `sections/GroupBySection.tsx` | **CodeFiddle** `sql-group-by`; H3 Malas prácticas ×3. |
| 22 | HAVING | agregados-group-having | HavingSection | `sections/HavingSection.tsx` | **CodeFiddle** `sql-having`; **CompareTable** `where-vs-having`; H3 Malas prácticas ×3. |
| 23 | Peligro: UPDATE y DELETE sin WHERE | update-delete | AdvertenciaUpdateDeleteSection | `sections/AdvertenciaUpdateDeleteSection.tsx` | **Callout** `variant="callout-danger"` `peligro-update-delete` (abre página). Catálogo UPDATE/DELETE. **Sin quiz.** |
| 24 | UPDATE | update-delete | UpdateSection | `sections/UpdateSection.tsx` | **CodeFiddle** `sql-update-seguro` (WHERE + comentario peligroso); H3 Malas prácticas ×4. |
| 25 | DELETE | update-delete | DeleteSection | `sections/DeleteSection.tsx` | **CodeFiddle** `sql-delete-seguro` + `sql-peligro-comentado`; H3 Malas prácticas ×4. |
| 26 | Qué es una base de datos relacional | relacional-fk-joins | QueEsBdRelacionalSection | `sections/QueEsBdRelacionalSection.tsx` | Cita material + ampliación PK/FK; H3 Malas prácticas ×3. |
| 27 | Relacional frente a ER | relacional-fk-joins | RelacionalVsErSection | `sections/RelacionalVsErSection.tsx` | **MermaidDiagram** `er-programas-inscripciones`; H3 Malas prácticas ×3. No apilar con Mermaid JOINs en el mismo viewport inicial. |
| 28 | Cardinalidad, PK y FK | relacional-fk-joins | CardinalidadPkFkSection | `sections/CardinalidadPkFkSection.tsx` | Tabla composición; regla mismo tipo; H3 Malas prácticas ×3. |
| 29 | CREATE TABLE con CONSTRAINT | relacional-fk-joins | CreateTableConstraintSection | `sections/CreateTableConstraintSection.tsx` | **CodeFiddle** `sql-create-fk`; **StepReveal** `orden-padres-hijos-join`; **Callout** info `padres-tipos`; H3 Malas prácticas ×3. |
| 30 | INNER, LEFT y RIGHT JOIN | relacional-fk-joins | JoinsSection | `sections/JoinsSection.tsx` | **MermaidDiagram** `joins-conjuntos` (obligatorio); **CompareTable** `joins-negocio`; **CodeFiddle** `sql-joins-tres`; **Callout** info `join-pregunta-negocio`; H3 Malas prácticas ×4. |
| 31 | Script integral, errores y casos | relacional-fk-joins | ScriptErroresCasosSection | `sections/ScriptErroresCasosSection.tsx` | **CodeFiddle** `sql-script-lab`; checklist ×14; casos Rutas Digitales + El Tornillo. |
| 32 | Práctica guiada | practica-y-cierre | PracticaGuiadaSection | `sections/PracticaGuiadaSection.tsx` | PracticeExercise ×5. |
| 33 | Reto integrador: Matrículas de Rutas Digitales | practica-y-cierre | RetoIntegradorSection | `sections/RetoIntegradorSection.tsx` | ChallengeCard. |
| 34 | Cierre | practica-y-cierre | CierreSection | `sections/CierreSection.tsx` | 7 ideas clave; pregunta operativa; CTA módulo (`next: null`). |
| 35 | Miniquiz | practica-y-cierre | MiniquizFinalSection | `sections/MiniquizFinalSection.tsx` | QuizSection ×5 preguntas (clave clase). **Única** instancia de quiz. |

**Conteo:** 35 filas de contenido pedagógico + ClassPagesNav en hub · **36 entradas de sección TSX** (35 nuevas + ClassPagesNav reutilizado) · **8 páginas + 1 hub**.

H2 públicos según lesson-spec (sin prefijos «0.»–«24.» numéricos en UI; el orden lo da la página).

---

## Malas prácticas (H3 obligatorio por sección de concepto)

| Sección | H3 «Malas prácticas en el mundo real» | Escenarios (draft) |
|---------|--------------------------------------|--------------------|
| DdlVsDmlSection | ✓ | 3 (DROP como “limpiar filas”; ALTER viernes; root para todo) |
| QueEsDdlSection | ✓ | 3 (DROP DATABASE host equivocado; DDL sin git; ALTER tipo incompatible) |
| CreateDropDatabaseSection | ✓ | CREATE ×3 + DROP ×4 |
| CreateDropAlterTableSection | ✓ | CREATE TABLE ×4 + DROP TABLE ×3 + ALTER ×4 |
| AutoIncrementSection | ✓ | 3 (reciclar IDs; id manual; huecos como regla) |
| PrimaryKeySection | ✓ | 3 |
| UniqueConstraintSection | ✓ | 3 |
| NotNullNullSection | ✓ | 4 (`= NULL`; `''` vs NULL; etc.) |
| QueEsDmlSection | ✓ | 3 (inyección; comillas dobles; espacios en campo) |
| InsertSection | ✓ | 3 |
| SelectBaseSection | ✓ | 3 |
| WhereSection | ✓ | 3 |
| DistinctSection | ✓ | 3 |
| OrderBySection | ✓ | 3 |
| LimitSection | ✓ | 3 |
| AgregadosSection | ✓ | 3 |
| GroupBySection | ✓ | 3 |
| HavingSection | ✓ | 3 |
| UpdateSection | ✓ | 4 |
| DeleteSection | ✓ | 4 |
| QueEsBdRelacionalSection | ✓ | 3 |
| RelacionalVsErSection | ✓ | 3 |
| CardinalidadPkFkSection | ✓ | 3 (tipos distintos; FK sin índice; CASCADE ciego) |
| CreateTableConstraintSection | ✓ | 3 (hija antes que padre; solo dibujo; CONSTRAINT innominada) |
| JoinsSection | ✓ | 4 (INNER que oculta; cartesiano; SUM inflado; WHERE que anula LEFT) |
| Intro / catálogo / advertencia / script-casos / práctica / quiz | — | N/A (casos en ScriptErroresCasosSection; Callout danger en advertencia) |

Props tipadas: lista `{ situacion, error, consecuencia, correccion }[]` o prose `<ol>` — lesson-developer elige el patrón del track; **no omitir el H3**.

---

## Mapa de interactivos

### MermaidDiagram (ADR 013) — ×3

| id | sección | tipo chart | props |
|----|---------|------------|-------|
| `flujo-ddl-dml-join` | IntroFlujoDdlDmlJoinSection | `flowchart TD` | title/description/chart draft L58–63; **hero** de `ddl-estructura`; `figure` blanco `rounded-lg p-4 my-6`; **sin** ClayCard envolvente |
| `er-programas-inscripciones` | RelacionalVsErSection | `erDiagram` | draft L1073–1078; tras contraste ER/relacional |
| `joins-conjuntos` | JoinsSection | `flowchart LR` | draft L1208–1213; **antes** de CompareTable JOINs; subgraphs INNER/LEFT/RIGHT |

Sin entidades HTML en `chart`. En `relacional-fk-joins` no apilar erDiagram + joins en el mismo viewport inicial (prose + StepReveal entre medias).

### CodeFiddle — ×25 (nunca CodeBlock)

Todos `language="sql"`. Props: `code`, `language`, opcional `title`. `tsx_component: CodeFiddle` → `src/components/teaching/CodeFiddle.tsx`.

| id | sección | title sugerido | source |
|----|---------|----------------|--------|
| `sql-create-database` | CreateDropDatabaseSection | CREATE DATABASE academia_rutas | draft L181–186 |
| `sql-drop-database` | CreateDropDatabaseSection | DROP DATABASE (solo lab / backup) | draft L220–224 |
| `sql-create-table-programas` | CreateDropAlterTableSection | CREATE TABLE Programas | draft L259–267 |
| `sql-drop-table` | CreateDropAlterTableSection | DROP TABLE Programas_old | draft L302–305 |
| `sql-alter-table` | CreateDropAlterTableSection | ALTER TABLE ADD / MODIFY / DROP | draft L332–337 |
| `sql-insert-autoincrement` | AutoIncrementSection | INSERT omitiendo id | draft L375–380 |
| `sql-add-primary-key` | PrimaryKeySection | ALTER TABLE ADD PRIMARY KEY | draft L427–434 |
| `sql-unique-nombre` | UniqueConstraintSection | UNIQUE Nombre_Programa | draft L461–465 |
| `sql-not-null-null` | NotNullNullSection | CREATE Inscripciones NULL / NOT NULL | draft L497–504 |
| `sql-insert-programas` | InsertSection | INSERT simple y múltiple | draft L576–583 |
| `sql-select-base` | SelectBaseSection | SELECT columnas y SELECT * | draft L611–617 |
| `sql-where` | WhereSection | SELECT … WHERE | draft L660–669 |
| `sql-distinct` | DistinctSection | SELECT DISTINCT sede | draft L696–700 |
| `sql-order-by` | OrderBySection | ORDER BY ASC / DESC | draft L727–736 |
| `sql-limit` | LimitSection | ORDER BY + LIMIT 5 | draft L763–769 |
| `sql-agregados-plantilla` | AgregadosSection | Plantilla AVG SUM COUNT MAX MIN | draft L794–801 |
| `sql-agregados-ejemplos` | AgregadosSection | Agregados sobre cupos | draft L817–824 |
| `sql-group-by` | GroupBySection | GROUP BY sede | draft L846–851 |
| `sql-having` | HavingSection | HAVING COUNT(*) >= 2 | draft L886–892 |
| `sql-update-seguro` | UpdateSection | UPDATE con WHERE (+ comentario peligroso) | draft L952–961 |
| `sql-delete-seguro` | DeleteSection | DELETE con WHERE (+ comentario peligroso) | draft L989–996 |
| `sql-peligro-comentado` | DeleteSection | Demostración comentada (nunca ejecutar) | draft L1010–1015 |
| `sql-create-fk` | CreateTableConstraintSection | CREATE padre / hija + CONSTRAINT FK | draft L1133–1151 |
| `sql-joins-tres` | JoinsSection | INNER / LEFT / RIGHT JOIN | draft L1227–1243 |
| `sql-script-lab` | ScriptErroresCasosSection | Script integral laboratorio | draft L1260–1304 |

Sentencias cubiertas: CREATE/DROP DATABASE, CREATE/DROP/ALTER TABLE, AUTO INCREMENT (INSERT), ADD PRIMARY KEY, UNIQUE, NOT NULL/NULL, INSERT, SELECT, WHERE, DISTINCT, ORDER BY, LIMIT, AVG/SUM/COUNT/MAX/MIN, GROUP BY, HAVING, UPDATE, DELETE, CREATE TABLE CONSTRAINT, INNER/LEFT/RIGHT JOIN.

### CompareTable — ×3

| id | sección | headers / rows |
|----|---------|----------------|
| `ddl-vs-dml` | MapaDdlDmlSection | Familia · Acrónimo · Qué toca · Ejemplos — 2 filas draft L73–80 |
| `where-vs-having` | HavingSection | Cláusula · Cuándo filtra · Sobre qué · Ejemplo — 2 filas draft L909–916 |
| `joins-negocio` | JoinsSection | JOIN · Qué conserva · NULL · Pregunta de negocio — 3 filas draft L1215–1223 |

ClayCard `my-8`; thead secondary; zebra `neutral-light`.

### StepReveal — ×1

| id | sección | props |
|----|---------|-------|
| `orden-padres-hijos-join` | CreateTableConstraintSection | title + steps[5] draft L1153–1178; variante **stepper**; **sin** ClayCard padre extra; **después** de `sql-create-fk` |

### Callout — ×4

| id | sección | variant | title |
|----|---------|---------|-------|
| `checklist-estructura-datos` | MapaDdlDmlSection | `callout-warning` | Checklist mental antes de ejecutar |
| `peligro-update-delete` | AdvertenciaUpdateDeleteSection | **`callout-danger`** | Peligro: UPDATE y DELETE sin WHERE |
| `padres-tipos` | CreateTableConstraintSection | `callout-info` | Padres primero, tipos iguales |
| `join-pregunta-negocio` | JoinsSection | `callout-info` | INNER no es el JOIN por defecto del negocio |

**Escalación:** `Callout.tsx` hoy solo admite `callout-info` / `callout-warning` / `callout-tip`. Lesson-developer debe añadir **`callout-danger`** (borde accent/danger, abre `update-delete`). Máx. un callout por H2 de concepto.

### PracticeExercise — ×5 (`PracticaGuiadaSection`)

| # | tema | draft |
|---|------|-------|
| 1 | CREATE lab_ddl + Nombre_Programa / AUTO INCREMENT | L1355–1365 |
| 2 | SELECT WHERE + ORDER BY + LIMIT | L1367–1376 |
| 3 | Agregados + GROUP BY + HAVING vs WHERE | L1378–1387 |
| 4 | DELETE sin WHERE + FK + backup | L1389–1399 |
| 5 | INNER vs LEFT JOIN y NULL | L1401–1411 |

Props: `prompt`, `hints[]`, `expectedKeywords[]`, `successMessage`. Apilar con `my-8`.

### ChallengeCard — ×1

| id | sección | props |
|----|---------|-------|
| `matriculas-rutas-digitales` | RetoIntegradorSection | title, difficulty=`integrador`, prompt, acceptanceCriteria[], hints[] — draft L1429–1448 |

### QuizSection — ×1 (5 preguntas)

| campo | valor |
|-------|-------|
| Componente | `QuizSection` → datos en `src/lib/teaching-quizzes/bases-de-datos.ts` |
| slug | `clase-03-ddl-dml-relacional` |
| track | `bases-de-datos` |
| Ubicación | Solo `MiniquizFinalSection` en `practica-y-cierre` |
| Preguntas | draft L1466–1525 (DDL vs DML; DELETE sin WHERE; CONSTRAINT padres/tipos; LEFT JOIN; HAVING vs WHERE) |

**Prohibido:** QuizSection (u otro quiz) en hub o en las páginas 1–7.

---

## Bloques interactivos — props por sección

> **Regla:** todo `<!-- code: -->` → `CodeFiddle` (`code` + `language`).  
> **Regla:** promesa mapa / flujo / ER / JOINs → `MermaidDiagram` contiguo (ADR 013).  
> **Regla:** 1 export por archivo `.tsx` bajo `sections/` y `pages/`.  
> **Regla:** Quiz **solo** en `practica-y-cierre`.  
> **Regla:** Advertencia UPDATE/DELETE → `Callout` **danger**, no warning.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos | prose `<ul>` | 5 objetivos draft L35–41 |
| Prerrequisitos | prose `<ul>` | clase-02 + vocabulario mínimo (draft L45–48) |

### `MapaDdlDmlSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L52–56, L69–71 (Rutas Digitales; orden de páginas) |
| `ddl-vs-dml` | `CompareTable` | draft L73–80 |
| `checklist-estructura-datos` | `Callout` | `variant="callout-warning"`; draft L82–86 |

### `IntroFlujoDdlDmlJoinSection`

| id | componente | props |
|----|------------|-------|
| `flujo-ddl-dml-join` | `MermaidDiagram` | chart `flowchart TD` draft L58–63 |

### `DdlVsDmlSection`

| id | componente | props |
|----|------------|-------|
| Qué / para qué / cómo / señales | prose + tabla | draft L92–117 |
| Malas prácticas H3 | prose `<ol>` o lista tipada | 3 escenarios draft L119–123 |

### `QueEsDdlSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos + catálogo | prose + tabla | draft L127–153 |
| Malas prácticas H3 | prose | draft L155–159 |

### `CreateDropDatabaseSection`

| id | componente | props |
|----|------------|-------|
| CREATE DATABASE | prose | draft L163–197 |
| `sql-create-database` | `CodeFiddle` | `language="sql"` |
| DROP DATABASE | prose | draft L201–237 |
| `sql-drop-database` | `CodeFiddle` | `language="sql"` |
| Malas prácticas H3 | prose | CREATE ×3 + DROP ×4 |

### `CreateDropAlterTableSection`

| id | componente | props |
|----|------------|-------|
| `sql-create-table-programas` | `CodeFiddle` | `language="sql"`; draft L241–279 |
| `sql-drop-table` | `CodeFiddle` | `language="sql"`; draft L283–316 |
| `sql-alter-table` | `CodeFiddle` | `language="sql"`; draft L320–353 |
| Malas prácticas H3 | prose | por sentencia; aire entre fiddles |

### `AutoIncrementSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose | draft L357–391 |
| `sql-insert-autoincrement` | `CodeFiddle` | `language="sql"` |
| Malas prácticas H3 | prose | draft L387–391 |

### `CatalogoRestriccionesSection`

| id | componente | props |
|----|------------|-------|
| Tabla restricciones | prose / tabla | draft L397–403 |

### `PrimaryKeySection` / `UniqueConstraintSection` / `NotNullNullSection`

Cada una: bloques qué/para qué/cómo + **CodeFiddle** SQL + señales + H3 malas prácticas (draft L407–526). `NotNullNullSection` incluye tabla 0 / `''` / NULL.

### `QueEsDmlSection`

| id | componente | props |
|----|------------|-------|
| DML + comandos + reglas | prose + tabla + `<ol>` | draft L532–553 |
| Malas prácticas H3 | prose | draft L555–559 |

### `InsertSection` / `SelectBaseSection`

CodeFiddle + malas prácticas (draft L563–628).

### `WhereSection` … `LimitSection`

Catálogo D.0 solo al inicio de `WhereSection`. Cada cláusula: CodeFiddle + H3 malas prácticas (draft L632–780).

### `AgregadosSection` / `GroupBySection` / `HavingSection`

Plantilla + ejemplos en AgregadosSection (2 fiddles). HavingSection cierra con CompareTable `where-vs-having`.

### `AdvertenciaUpdateDeleteSection`

| id | componente | props |
|----|------------|-------|
| `peligro-update-delete` | `Callout` | **`variant="callout-danger"`**; draft L924–929. Abre la página; sin ClayCard padre extra si el Callout ya es N2. |
| Catálogo | prose tabla | draft L931–936 |

### `UpdateSection` / `DeleteSection`

Fiddles con WHERE real + líneas peligrosas **solo comentadas**. `sql-peligro-comentado` no es ejecutable didáctico de destrucción.

### `QueEsBdRelacionalSection` / `RelacionalVsErSection` / `CardinalidadPkFkSection`

Prose + H3. ER Mermaid solo en RelacionalVsErSection.

### `CreateTableConstraintSection`

| id | componente | props |
|----|------------|-------|
| `sql-create-fk` | `CodeFiddle` | `language="sql"` |
| `orden-padres-hijos-join` | `StepReveal` | 5 pasos |
| `padres-tipos` | `Callout` | `variant="callout-info"` |
| Malas prácticas H3 | prose | draft L1180–1184 |

### `JoinsSection`

| id | componente | props |
|----|------------|-------|
| Tablas definiciones | prose | draft L1190–1206 |
| `joins-conjuntos` | `MermaidDiagram` | `flowchart LR` |
| `joins-negocio` | `CompareTable` | 3 filas |
| `sql-joins-tres` | `CodeFiddle` | INNER + LEFT + RIGHT |
| `join-pregunta-negocio` | `Callout` | `variant="callout-info"` |
| Malas prácticas H3 | prose | draft L1249–1254 |

### `ScriptErroresCasosSection`

| id | componente | props |
|----|------------|-------|
| `sql-script-lab` | `CodeFiddle` | `language="sql"` |
| Checklist errores | prose `<ol>` | 14 ítems draft L1308–1323 |
| Caso Rutas Digitales | prose | draft L1329–1337 |
| Caso El Tornillo | prose | draft L1339–1347 |

### `PracticaGuiadaSection`

| id | componente | props |
|----|------------|-------|
| PracticeExercise ×5 | `PracticeExercise` | draft L1355–1411; `my-8` |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | draft L1415–1427 |
| `matriculas-rutas-digitales` | `ChallengeCard` | draft L1429–1448 |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Arco 7 puntos | `<ol>` draft L1452–1460 |
| Pregunta operativa | prose draft L1462 |
| Siguiente | `next: null` — CTA «Repasa el mapa del módulo Bases de Datos» |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Miniquiz» |
| Quiz | `<QuizSection slug="clase-03-ddl-dml-relacional" track="bases-de-datos" />` |

---

## lesson-meta fields

### Hub (`clase-03-ddl-dml-relacional`)

| Campo | Valor |
|-------|-------|
| `track` | `bases-de-datos` |
| `slug` | `clase-03-ddl-dml-relacional` |
| `title` | `DDL, DML, agregados y modelo relacional: de la estructura a la consulta` |
| `order` | `4` |
| `prev` | `clase-02-fundamentos-motores-estructura/practica-y-cierre` |
| `next` | `clase-03-ddl-dml-relacional/ddl-estructura` (cadena interna; track next clase = `null`) |
| `seoTitle` | `DDL y DML SQL: agregados, FK y JOINs` |
| `seoDescription` | `Aplica DDL y DML en SQL: CREATE/ALTER, PK/UNIQUE, INSERT/SELECT, WHERE, agregados, UPDATE/DELETE seguros, FK y JOINs INNER/LEFT/RIGHT con ejemplos LATAM.` |
| `showInTrackIndex` | **`true`** |
| `layout` | **`LessonLayout`** |
| `canonical_path` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/` |

### Páginas internas (todas)

| Campo | Valor |
|-------|-------|
| `showInTrackIndex` | **`false`** |
| `layout` | **`ClassPageLayout`** |
| `track` | `bases-de-datos` |
| Quiz slug | Solo página final referencia `clase-03-ddl-dml-relacional` |

| page slug | title (meta) | seoTitle |
|-----------|--------------|----------|
| `…/ddl-estructura` | DDL frente a DML: el mapa de la clase | DDL SQL: CREATE, DROP y ALTER TABLE |
| `…/ddl-restricciones` | Restricciones: PK, UNIQUE y NOT NULL | Restricciones SQL: PK, UNIQUE y NOT NULL |
| `…/dml-insert-select` | DML: insertar y consultar | DML SQL: INSERT y SELECT básicos |
| `…/dml-filtros-orden` | WHERE, DISTINCT, ORDER BY y LIMIT | WHERE, DISTINCT, ORDER BY y LIMIT |
| `…/agregados-group-having` | Agregados, GROUP BY y HAVING | Agregados SQL: GROUP BY y HAVING |
| `…/update-delete` | UPDATE y DELETE: poder con WHERE y backup | UPDATE y DELETE SQL seguros con WHERE |
| `…/relacional-fk-joins` | Modelo relacional, FK y JOINs | Modelo relacional, FK e INNER/LEFT JOIN |
| `…/practica-y-cierre` | Práctica, reto y cierre | Práctica: DDL, DML, JOINs y cierre |

---

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `Clase03DdlDmlRelacionalHubLesson.tsx` | default/hub | ObjetivosSection, MapaDdlDmlSection, ClassPagesNavSection |
| `pages/ddl-estructura/DdlEstructuraPageLesson.tsx` | page | IntroFlujoDdlDmlJoinSection, DdlVsDmlSection, QueEsDdlSection, CreateDropDatabaseSection, CreateDropAlterTableSection, AutoIncrementSection |
| `pages/ddl-restricciones/DdlRestriccionesPageLesson.tsx` | page | CatalogoRestriccionesSection, PrimaryKeySection, UniqueConstraintSection, NotNullNullSection |
| `pages/dml-insert-select/DmlInsertSelectPageLesson.tsx` | page | QueEsDmlSection, InsertSection, SelectBaseSection |
| `pages/dml-filtros-orden/DmlFiltrosOrdenPageLesson.tsx` | page | WhereSection, DistinctSection, OrderBySection, LimitSection |
| `pages/agregados-group-having/AgregadosGroupHavingPageLesson.tsx` | page | AgregadosSection, GroupBySection, HavingSection |
| `pages/update-delete/UpdateDeletePageLesson.tsx` | page | AdvertenciaUpdateDeleteSection, UpdateSection, DeleteSection |
| `pages/relacional-fk-joins/RelacionalFkJoinsPageLesson.tsx` | page | QueEsBdRelacionalSection, RelacionalVsErSection, CardinalidadPkFkSection, CreateTableConstraintSection, JoinsSection, ScriptErroresCasosSection |
| `pages/practica-y-cierre/PracticaYCierrePageLesson.tsx` | page | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection |
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | — |
| `sections/MapaDdlDmlSection.tsx` | `MapaDdlDmlSection` | CompareTable, Callout |
| `sections/IntroFlujoDdlDmlJoinSection.tsx` | `IntroFlujoDdlDmlJoinSection` | MermaidDiagram |
| `sections/DdlVsDmlSection.tsx` | `DdlVsDmlSection` | — |
| `sections/QueEsDdlSection.tsx` | `QueEsDdlSection` | — |
| `sections/CreateDropDatabaseSection.tsx` | `CreateDropDatabaseSection` | CodeFiddle ×2 |
| `sections/CreateDropAlterTableSection.tsx` | `CreateDropAlterTableSection` | CodeFiddle ×3 |
| `sections/AutoIncrementSection.tsx` | `AutoIncrementSection` | CodeFiddle |
| `sections/CatalogoRestriccionesSection.tsx` | `CatalogoRestriccionesSection` | — |
| `sections/PrimaryKeySection.tsx` | `PrimaryKeySection` | CodeFiddle |
| `sections/UniqueConstraintSection.tsx` | `UniqueConstraintSection` | CodeFiddle |
| `sections/NotNullNullSection.tsx` | `NotNullNullSection` | CodeFiddle |
| `sections/QueEsDmlSection.tsx` | `QueEsDmlSection` | — |
| `sections/InsertSection.tsx` | `InsertSection` | CodeFiddle |
| `sections/SelectBaseSection.tsx` | `SelectBaseSection` | CodeFiddle |
| `sections/WhereSection.tsx` | `WhereSection` | CodeFiddle |
| `sections/DistinctSection.tsx` | `DistinctSection` | CodeFiddle |
| `sections/OrderBySection.tsx` | `OrderBySection` | CodeFiddle |
| `sections/LimitSection.tsx` | `LimitSection` | CodeFiddle |
| `sections/AgregadosSection.tsx` | `AgregadosSection` | CodeFiddle ×2 |
| `sections/GroupBySection.tsx` | `GroupBySection` | CodeFiddle |
| `sections/HavingSection.tsx` | `HavingSection` | CodeFiddle, CompareTable |
| `sections/AdvertenciaUpdateDeleteSection.tsx` | `AdvertenciaUpdateDeleteSection` | Callout **danger** |
| `sections/UpdateSection.tsx` | `UpdateSection` | CodeFiddle |
| `sections/DeleteSection.tsx` | `DeleteSection` | CodeFiddle ×2 |
| `sections/QueEsBdRelacionalSection.tsx` | `QueEsBdRelacionalSection` | — |
| `sections/RelacionalVsErSection.tsx` | `RelacionalVsErSection` | MermaidDiagram |
| `sections/CardinalidadPkFkSection.tsx` | `CardinalidadPkFkSection` | — |
| `sections/CreateTableConstraintSection.tsx` | `CreateTableConstraintSection` | CodeFiddle, StepReveal, Callout |
| `sections/JoinsSection.tsx` | `JoinsSection` | MermaidDiagram, CompareTable, CodeFiddle, Callout |
| `sections/ScriptErroresCasosSection.tsx` | `ScriptErroresCasosSection` | CodeFiddle |
| `sections/PracticaGuiadaSection.tsx` | `PracticaGuiadaSection` | PracticeExercise ×5 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | ChallengeCard |
| `sections/CierreSection.tsx` | `CierreSection` | — |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | QuizSection |

**Compartido a extender:** `src/components/teaching/Callout.tsx` — añadir variante `callout-danger`.

**Regla:** máximo **1 componente exportado** por archivo.

**No crear:** `GuiaDocenteSection`, tags MDX, `CodeBlock`. No poner Quiz fuera de `practica-y-cierre`.

---

## Registry notes

Registrar **9 entradas** en `teaching-lessons-registry`:

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-03-ddl-dml-relacional` | **true** | Hub de clase; listado portal; **LessonLayout** |
| 2 | `bases-de-datos/clase-03-ddl-dml-relacional/ddl-estructura` | false | Página 1/8 |
| 3 | `bases-de-datos/clase-03-ddl-dml-relacional/ddl-restricciones` | false | Página 2/8 |
| 4 | `bases-de-datos/clase-03-ddl-dml-relacional/dml-insert-select` | false | Página 3/8 |
| 5 | `bases-de-datos/clase-03-ddl-dml-relacional/dml-filtros-orden` | false | Página 4/8 |
| 6 | `bases-de-datos/clase-03-ddl-dml-relacional/agregados-group-having` | false | Página 5/8 |
| 7 | `bases-de-datos/clase-03-ddl-dml-relacional/update-delete` | false | Página 6/8; Callout danger |
| 8 | `bases-de-datos/clase-03-ddl-dml-relacional/relacional-fk-joins` | false | Página 7/8; Mermaid JOINs |
| 9 | `bases-de-datos/clase-03-ddl-dml-relacional/practica-y-cierre` | false | Página 8/8; quiz clase |

También:

- `class-navigation.ts` → `CLASE_03` pages[] + `ALL_CLASSES`
- Quiz key `clase-03-ddl-dml-relacional` en `teaching-quizzes/bases-de-datos.ts`
- Legacy redirects hub + 8 subpáginas
- `next` de clase-02 `practica-y-cierre` → este hub
- Distinguir de POSW `/es/teaching/posw/bases-de-datos/`

---

## Checklist lesson-developer

- [ ] Hub `LessonLayout` + 8 PageLessons `ClassPageLayout` + breadcrumb `Clase 3 / Página X de 8`
- [ ] 35 sections en `sections/` + reutilizar `ClassPagesNavSection`
- [ ] Flowchart flujo + erDiagram + flowchart JOINs (ADR 013); cero sustitución de JOINs por lista
- [ ] 25× CodeFiddle SQL; cero CodeBlock
- [ ] 3× CompareTable; StepReveal 5 pasos; ChallengeCard; PracticeExercise ×5
- [ ] Callout **danger** en `update-delete` (extender `Callout.tsx`)
- [ ] H3 Malas prácticas en las 25 secciones de concepto
- [ ] Quiz **solo** en `practica-y-cierre`; slug de clase
- [ ] `showInTrackIndex: true` solo hub; páginas `false`
- [ ] Hub `prev` ← `clase-02-fundamentos-motores-estructura/practica-y-cierre`; `next` clase = `null`
- [ ] Contenido solo estudiante; 1 export / archivo
- [ ] clay: card / callout-warning / callout-info / **callout-danger** / stepper

---

## Resumen conteos

| Métrica | Cantidad |
|---------|----------|
| Paginación | **Sí** (ADR 011) |
| Hub | 1 (`LessonLayout`) |
| Páginas internas | **8** (`ClassPageLayout`) |
| Registry | **9** |
| Secciones de contenido (tabla) | **35** (+ ClassPagesNav) |
| MermaidDiagram | 3 (flujo + ER + **JOINs**) |
| CodeFiddle | **25** (SQL) |
| CompareTable | 3 |
| StepReveal | 1 |
| PracticeExercise | 5 |
| ChallengeCard | 1 |
| Callout | 4 (warning + **danger** + info ×2) |
| Quiz preguntas | 5 (solo última página) |
