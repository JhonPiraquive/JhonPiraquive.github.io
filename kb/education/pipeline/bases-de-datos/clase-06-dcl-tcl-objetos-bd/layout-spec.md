---
track: bases-de-datos
slug: clase-06-dcl-tcl-objetos-bd
title: "DCL, TCL, vistas, funciones, procedimientos y triggers: más allá de SELECT"
order: 7
prev: clase-05-normalizacion-esquemas/practica-y-cierre
next: null
tsx_target: src/components/teaching/lessons/bases-de-datos/clase-06-dcl-tcl-objetos-bd/
pagination: true
pagination_reason: ">8 secciones de concepto (~20 bloques) y ~>20 min de lectura continua (draft ~1180 líneas: mapa familias, DCL, TCL/ACID, vistas, UDF/SP/triggers, app vs BD + práctica); ADR 011 hub + 6 páginas"
showInTrackIndex_hub: true
showInTrackIndex_pages: false
audience: student
---

# Layout spec — DCL, TCL, vistas, funciones, procedimientos y triggers

## Decisión de paginación (ADR 011)

**Paginado: sí.**

| Criterio | Valor |
|----------|-------|
| Secciones de contenido (tabla abajo) | **20** (>8) |
| Lectura estimada | **>~50–70 min** si fuera monolítica |
| Páginas internas | **6** (+ hub) |
| Secciones por página | **2–4** (densa: `funciones-procedimientos-triggers`) |
| Quiz | Solo en **última página** (`practica-y-cierre`), clave por **clase** |
| Shell | Hub → `LessonLayout`; páginas → `ClassPageLayout` |
| Nav | `class-navigation.ts` → `getPageNavChain()` / `CLASE_06` |
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
| `clase-06-dcl-tcl-objetos-bd` | Hub — Objetivos y mapa de la clase | ObjetivosSection, MapaClase06Section, ClassPagesNavSection | **true** | **LessonLayout** | `Clase06DclTclObjetosBdHubLesson` |
| `clase-06-dcl-tcl-objetos-bd/mapa-sql-familias` | Del abecedario completo · DDL / DML / DCL / TCL | IntroMapaMasAllaSelectSection, CicloFamiliasSqlSection, FamiliasDdlDmlDclTclSection | **false** | **ClassPageLayout** | `MapaSqlFamiliasPageLesson` |
| `clase-06-dcl-tcl-objetos-bd/dcl-grant-revoke` | Qué es DCL · Usuarios y roles · GRANT y REVOKE | QueEsDclSection, UsuariosRolesSection, GrantSection, RevokeSection | **false** | **ClassPageLayout** | `DclGrantRevokePageLesson` |
| `clase-06-dcl-tcl-objetos-bd/tcl-transacciones-acid` | Transacciones · ACID · COMMIT, ROLLBACK y SAVEPOINT | QueEsTclTransaccionSection, AcidSection, CommitRollbackSavepointSection | **false** | **ClassPageLayout** | `TclTransaccionesAcidPageLesson` |
| `clase-06-dcl-tcl-objetos-bd/vistas` | CREATE VIEW y consulta · Vista frente a tabla | CreateViewSection, VistaProyeccionSeguraSection | **false** | **ClassPageLayout** | `VistasPageLesson` |
| `clase-06-dcl-tcl-objetos-bd/funciones-procedimientos-triggers` | UDF · PROCEDURE · TRIGGER · Criterio: ¿app o BD? | UdfSection, ProcedureSection, TriggerSection, CriterioAppVsBdSection | **false** | **ClassPageLayout** | `FuncionesProcedimientosTriggersPageLesson` |
| `clase-06-dcl-tcl-objetos-bd/practica-y-cierre` | Lab base · Práctica · Reto · Cierre · Miniquiz | LabBaseSection, PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | **false** | **ClassPageLayout** | `PracticaYCierrePageLesson` |

**Breadcrumb:** `Clase 6 / Página X de 6` + título de página.

**Prev/next cadena de clase:**

| slug | prev | next |
|------|------|------|
| hub `clase-06-dcl-tcl-objetos-bd` | `clase-05-normalizacion-esquemas/practica-y-cierre` | `…/mapa-sql-familias` |
| `…/mapa-sql-familias` | hub | `…/dcl-grant-revoke` |
| `…/dcl-grant-revoke` | `…/mapa-sql-familias` | `…/tcl-transacciones-acid` |
| `…/tcl-transacciones-acid` | `…/dcl-grant-revoke` | `…/vistas` |
| `…/vistas` | `…/tcl-transacciones-acid` | `…/funciones-procedimientos-triggers` |
| `…/funciones-procedimientos-triggers` | `…/vistas` | `…/practica-y-cierre` |
| `…/practica-y-cierre` | `…/funciones-procedimientos-triggers` | **`null`** |

Al publicar: `next` de clase-05 `practica-y-cierre` (y hub clase-05) → este hub (vía `ALL_CLASSES` / `getPageNavChain()`). Fin de módulo → CTA «Repasa el mapa del módulo Bases de Datos».

---

## Hub — Clase06DclTclObjetosBdHubLesson.tsx

```tsx
<ObjetivosSection />
<MapaClase06Section />
<ClassPagesNavSection track={meta.track} classSlug={CLASE_06.classSlug} pages={CLASE_06.pages} />
```

**TSX target:** `src/components/teaching/lessons/bases-de-datos/clase-06-dcl-tcl-objetos-bd/`

- Hub: `Clase06DclTclObjetosBdHubLesson.tsx` · shell `LessonLayout`
- Páginas: `pages/{pagina}/*PageLesson.tsx` · shell `ClassPageLayout`
- Secciones compartidas: `sections/*.tsx` (reutilizar; no duplicar)
- Meta: `lesson-meta.ts` (hub + páginas) · nav: `src/components/teaching/lessons/bases-de-datos/class-navigation.ts` (`CLASE_06`)

**ClassPagesNav (6 entradas, sin cards en listado):**

| slug | title | description | ~min |
|------|-------|-------------|------|
| `mapa-sql-familias` | Del abecedario completo · DDL / DML / DCL / TCL | Completa el mapa SQL con DCL y TCL; etiquetar cualquier sentencia | 12 |
| `dcl-grant-revoke` | DCL: GRANT, REVOKE y mínimo privilegio | Usuarios/roles, privilegios acotados y offboarding | 15 |
| `tcl-transacciones-acid` | TCL y ACID: COMMIT, ROLLBACK, SAVEPOINT | Inscripción atómica cupo + matrícula; Atomicity | 18 |
| `vistas` | CREATE VIEW, proyección y vs tabla | Consulta guardada, seguridad por columnas, límites honestos | 12 |
| `funciones-procedimientos-triggers` | UDF, PROCEDURE, TRIGGER y app vs BD | Valor vs proceso vs automático; criterio de diseño LATAM | 20 |
| `practica-y-cierre` | Práctica, reto y cierre | Lab, ejercicios, reto Matrícula segura, miniquiz | 25 |

**CTA hub:** «Empezar: mapa de familias SQL» → `mapa-sql-familias`.

---

## Secciones

| orden | heading | page | tsx_component | path | props / notes |
|-------|---------|------|---------------|------|---------------|
| 1 | Objetivos de aprendizaje | hub | ObjetivosSection | `sections/ObjetivosSection.tsx` | Objetivos ×5 + prerrequisitos (draft L35–49). Sin guía docente. |
| 2 | Índice visual de la clase | hub | MapaClase06Section | `sections/MapaClase06Section.tsx` | Intro hub (draft L78–80); **CompareTable** `mapa-paginas-clase-06`; **Callout** warning `checklist-mental-clase`. |
| — | Índice de páginas (hub) | hub | ClassPagesNavSection | `src/components/teaching/ClassPagesNavSection.tsx` | 6 páginas; descripciones breves; **sin cards** en listado. |
| 3 | Más allá de SELECT (mapa) | mapa-sql-familias | IntroMapaMasAllaSelectSection | `sections/IntroMapaMasAllaSelectSection.tsx` | **MermaidDiagram** flowchart `mapa-leccion-mas-alla-select` (ADR 013 **hero**); **Callout** warning `mas-alla-de-select`. Sin ClayCard envolvente del Mermaid. |
| 4 | Ciclo DDL → DML → DCL → TCL | mapa-sql-familias | CicloFamiliasSqlSection | `sections/CicloFamiliasSqlSection.tsx` | §0 Qué/para qué/cómo; **StepReveal** `ciclo-rutas-familias` (5); **MermaidDiagram** `familias-sql` (obligatorio); mini-chequeo. |
| 5 | DDL / DML / DCL / TCL | mapa-sql-familias | FamiliasDdlDmlDclTclSection | `sections/FamiliasDdlDmlDclTclSection.tsx` | **CompareTable** `familias-ddl-dml-dcl-tcl`; ejemplo Rutas Digitales; señales; H3 Malas prácticas ×4. |
| 6 | Qué es DCL | dcl-grant-revoke | QueEsDclSection | `sections/QueEsDclSection.tsx` | **Callout** **`callout-danger`** `root-compartido` (abre página; obligatorio); qué/para qué/cómo; señales; H3 Malas prácticas ×4. |
| 7 | Usuarios y roles | dcl-grant-revoke | UsuariosRolesSection | `sections/UsuariosRolesSection.tsx` | **CodeFiddle** `sql-crear-usuarios`; H3 Malas prácticas ×3. |
| 8 | GRANT | dcl-grant-revoke | GrantSection | `sections/GrantSection.tsx` | **CodeFiddle** `sql-grant-minimo`; ejemplo Andes Tech; H3 Malas prácticas ×3. |
| 9 | REVOKE | dcl-grant-revoke | RevokeSection | `sections/RevokeSection.tsx` | **CodeFiddle** `sql-revoke`; H3 Malas prácticas ×4 (incl. caso Rutas Digitales). |
| 10 | TCL y transacción | tcl-transacciones-acid | QueEsTclTransaccionSection | `sections/QueEsTclTransaccionSection.tsx` | Tabla sentencias TCL; **StepReveal** `transaccion-inscripcion` (4); **CodeFiddle** `sql-inscripcion-atomica`; H3 Malas prácticas ×4. |
| 11 | ACID | tcl-transacciones-acid | AcidSection | `sections/AcidSection.tsx` | **CompareTable** `acid-letras`; ejemplo transferencia; H3 Malas prácticas ×3. |
| 12 | COMMIT, ROLLBACK, SAVEPOINT | tcl-transacciones-acid | CommitRollbackSavepointSection | `sections/CommitRollbackSavepointSection.tsx` | **CodeFiddle** `sql-savepoint`; nota `BEGIN` vs `START TRANSACTION`; H3 Malas prácticas ×3. |
| 13 | CREATE VIEW y consulta | vistas | CreateViewSection | `sections/CreateViewSection.tsx` | **CodeFiddle** `sql-create-view`; **CompareTable** `vista-vs-tabla`; limitaciones honestas; mini-chequeo DDL vs DML. |
| 14 | Proyección segura | vistas | VistaProyeccionSeguraSection | `sections/VistaProyeccionSeguraSection.tsx` | **CodeFiddle** `sql-vista-sin-sensible`; señales; H3 Malas prácticas ×4. |
| 15 | UDF | funciones-procedimientos-triggers | UdfSection | `sections/UdfSection.tsx` | **CodeFiddle** `sql-udf-etiqueta-cupos`; **Callout** info `rutinas-sandbox`; H3 Malas prácticas ×3. |
| 16 | PROCEDURE | funciones-procedimientos-triggers | ProcedureSection | `sections/ProcedureSection.tsx` | **CodeFiddle** `sql-sp-inscribir`; **CompareTable** `udf-vs-procedure`; H3 Malas prácticas ×3. |
| 17 | TRIGGER | funciones-procedimientos-triggers | TriggerSection | `sections/TriggerSection.tsx` | **CodeFiddle** `sql-trigger-audit`; **MermaidDiagram** `inscripcion-atomica-auditoria` (`sequenceDiagram` del draft); **Callout** warning `triggers-encadenados`; H3 Malas prácticas ×4. |
| 18 | Criterio: ¿app o BD? | funciones-procedimientos-triggers | CriterioAppVsBdSection | `sections/CriterioAppVsBdSection.tsx` | **CompareTable** `app-vs-bd`; **MermaidDiagram** `app-o-bd` (obligatorio); casos LATAM; H3 Malas prácticas ×3. |
| 19 | Lab base | practica-y-cierre | LabBaseSection | `sections/LabBaseSection.tsx` | **CodeFiddle** `sql-lab-integral` (vista + TCL). Sin quiz. |
| 20 | Práctica guiada | practica-y-cierre | PracticaGuiadaSection | `sections/PracticaGuiadaSection.tsx` | PracticeExercise ×5. |
| 21 | Reto: Matrícula segura | practica-y-cierre | RetoIntegradorSection | `sections/RetoIntegradorSection.tsx` | ChallengeCard `matricula-segura-rutas`. |
| 22 | Cierre | practica-y-cierre | CierreSection | `sections/CierreSection.tsx` | Arco 5 puntos; pregunta operativa; CTA módulo (`next: null`). |
| 23 | Miniquiz | practica-y-cierre | MiniquizFinalSection | `sections/MiniquizFinalSection.tsx` | QuizSection ×5 preguntas (clave clase). **Única** instancia de quiz. |

**Conteo:** 20 filas de contenido pedagógico + ClassPagesNav + Lab/práctica/reto/cierre/quiz = **23 entradas de sección TSX** (22 nuevas + ClassPagesNav reutilizado) · **6 páginas + 1 hub**.

H2 públicos según lesson-spec (sin prefijos «0.»–«13.» numéricos en UI; el orden lo da la página).

---

## Malas prácticas (H3 obligatorio por sección de concepto)

| Sección | H3 «Malas prácticas en el mundo real» | Escenarios (draft) |
|---------|--------------------------------------|--------------------|
| FamiliasDdlDmlDclTclSection | ✓ | 4 (DELETE vs REVOKE; doc solo “SQL”; GRANT ALL lab; DROP+DELETE sin etiquetas) |
| QueEsDclSection | ✓ | 4 (root compartido; GRANT ALL *.*; offboarding sin REVOKE; seguridad solo frontend) |
| UsuariosRolesSection | ✓ | 3 (secreto en repo; `'user'@%'`; hosting sin roles) |
| GrantSection | ✓ | 3 (DELETE innecesario; olvidar EXECUTE; GRANT sin ticket) |
| RevokeSection | ✓ | 4 (rotar API sin REVOKE; WITH GRANT OPTION; sin inventario; caso Rutas Digitales) |
| QueEsTclTransaccionSection | ✓ | 4 (sin TX inventario; TX larga UI; MyISAM; El Tornillo) |
| AcidSection | ✓ | 3 (consistencia solo app; ignorar aislamiento; COMMIT por fila 100k) |
| CommitRollbackSavepointSection | ✓ | 3 (DDL commit implícito; olvidar COMMIT; SAVEPOINT goto) |
| CreateViewSection | — | N/A (limitaciones + mini-chequeo; malas prácticas en proyección) |
| VistaProyeccionSeguraSection | ✓ | 4 (GRANT tabla + frontend; cadena 5 vistas; vista como copia; materializada asumida) |
| UdfSection | ✓ | 3 (UDF en WHERE masivo; precios sin tests; olvidar DELIMITER) |
| ProcedureSection | ✓ | 3 (API entera en SP; sin ROLLBACK; hosting sin routines) |
| TriggerSection | ✓ | 4 (cadenas; UX opaca; BEFORE UPDATE silencioso; audit pesada) |
| CriterioAppVsBdSection | ✓ | 3 (doble fuente; todo en app sin FK; todo en triggers) |
| Intro / hub / lab / práctica / quiz | — | N/A (Callout danger en QueEsDcl; Callouts info/warning en UDF/TRIGGER) |

Props tipadas: lista `{ situacion, error, consecuencia, correccion }[]` o prose `<ol>` — lesson-developer elige el patrón del track; **no omitir el H3** en secciones marcadas ✓.

---

## Mapa de interactivos

### MermaidDiagram (ADR 013) — ×4

| id | sección | tipo chart | props |
|----|---------|------------|-------|
| `mapa-leccion-mas-alla-select` | IntroMapaMasAllaSelectSection | `flowchart TD` | title/description/chart draft L61–66; **hero** de `mapa-sql-familias`; `figure` blanco `rounded-lg p-4 my-6`; **sin** ClayCard envolvente |
| `familias-sql` | CicloFamiliasSqlSection | `flowchart TB` | draft L134–139; **obligatorio**; contiguo a promesa visual de familias |
| `inscripcion-atomica-auditoria` | TriggerSection | `sequenceDiagram` | draft L873–878 (App → BD → Audit); **después** de `sql-trigger-audit` |
| `app-o-bd` | CriterioAppVsBdSection | `flowchart TD` | draft L937–942; **obligatorio**; no sustituir por tabla sola |

Sin entidades HTML en `chart`. En `funciones-procedimientos-triggers` no apilar trigger Mermaid + app-o-bd en el mismo viewport inicial (prose + CompareTable entre medias).

### CodeFiddle — ×11 (nunca CodeBlock)

Todos `language="sql"`. Props: `code`, `language`, opcional `title`/`filename`. `tsx_component: CodeFiddle` → `src/components/teaching/CodeFiddle.tsx`. Superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; prose breve entre fiddles; no apilar más de ~3 sin aire.

| id | sección | title sugerido | source |
|----|---------|----------------|--------|
| `sql-crear-usuarios` | UsuariosRolesSection | Crear usuarios de propósito (lab) | draft L261–274 |
| `sql-grant-minimo` | GrantSection | GRANT con mínimo privilegio | draft L310–324 |
| `sql-revoke` | RevokeSection | REVOKE de privilegios | draft L359–371 |
| `sql-inscripcion-atomica` | QueEsTclTransaccionSection | Inscripción atómica (TCL) | draft L432–454 |
| `sql-savepoint` | CommitRollbackSavepointSection | SAVEPOINT y rollback parcial | draft L540–557 |
| `sql-create-view` | CreateViewSection | CREATE VIEW y consulta | draft L597–619 |
| `sql-vista-sin-sensible` | VistaProyeccionSeguraSection | Vista sin columna sensible | draft L652–666 |
| `sql-udf-etiqueta-cupos` | UdfSection | UDF etiqueta de cupos | draft L702–729 |
| `sql-sp-inscribir` | ProcedureSection | PROCEDURE de inscripción con TCL | draft L766–799 |
| `sql-trigger-audit` | TriggerSection | TRIGGER AFTER INSERT de auditoría | draft L841–871 |
| `sql-lab-integral` | LabBaseSection | Lab integral — vista + TCL | draft L970–1015 |

**Cobertura obligatoria (user):** GRANT (`sql-grant-minimo`), transacciones (`sql-inscripcion-atomica` + `sql-savepoint`), VIEW (`sql-create-view` + proyección), FUNCTION (`sql-udf-etiqueta-cupos`), PROCEDURE (`sql-sp-inscribir`), TRIGGER (`sql-trigger-audit`).

**Dialecto / sandbox:** MySQL/MariaDB (InnoDB). Anotar `BEGIN` vs `START TRANSACTION`, `DELIMITER` en rutinas. Si el sandbox no ejecuta DCL/routines, mostrar SQL como referencia + Callout info `rutinas-sandbox`; el estudiante ejecuta en Workbench/MariaDB local.

### CompareTable — ×6

| id | sección | headers / rows |
|----|---------|----------------|
| `mapa-paginas-clase-06` | MapaClase06Section | Página · Qué aprendes · Entregable mental — 6 filas draft L82–93 |
| `familias-ddl-dml-dcl-tcl` | FamiliasDdlDmlDclTclSection | Familia · Acrónimo · Qué toca · Ejemplos — 4 filas draft L172–181 |
| `acid-letras` | AcidSection | Letra · Inglés · Español · Idea — 4 filas draft L498–507 |
| `vista-vs-tabla` | CreateViewSection | Aspecto · Tabla · Vista (típica) — 4 filas draft L630–639 |
| `udf-vs-procedure` | ProcedureSection | Aspecto · UDF · PROCEDURE — 4 filas draft L803–812 |
| `app-vs-bd` | CriterioAppVsBdSection | Preferir en la BD · Preferir en la app — 5 filas draft L925–935 |

ClayCard `my-8`; thead secondary; zebra `neutral-light`.

### StepReveal — ×2

| id | sección | props |
|----|---------|-------|
| `ciclo-rutas-familias` | CicloFamiliasSqlSection | title + steps[5] draft L122–132; variante **stepper**; **sin** ClayCard padre extra |
| `transaccion-inscripcion` | QueEsTclTransaccionSection | title + steps[4] draft L419–428; **antes** de `sql-inscripcion-atomica` |

### Callout — ×5

| id | sección | variant | title |
|----|---------|---------|-------|
| `checklist-mental-clase` | MapaClase06Section | `callout-warning` | Checklist mental de la clase |
| `mas-alla-de-select` | IntroMapaMasAllaSelectSection | `callout-warning` | Más allá de SELECT |
| `root-compartido` | QueEsDclSection | **`callout-danger`** | Root compartido |
| `rutinas-sandbox` | UdfSection | `callout-info` | Rutinas en el sandbox |
| `triggers-encadenados` | TriggerSection | `callout-warning` | Triggers encadenados |

**Escalación:** si `Callout.tsx` aún no expone `callout-danger`, reutilizar el patrón de clase-03 (`update-delete`). Máx. un callout danger por página; abre `dcl-grant-revoke`.

### PracticeExercise — ×5 (`PracticaGuiadaSection`)

| # | tema | draft |
|---|------|-------|
| 1 | Etiquetar DDL/DML/DCL/TCL + DELETE ≠ REVOKE | L1019–1029 |
| 2 | GRANT SELECT vista + REVOKE DELETE; mínimo privilegio | L1031–1040 |
| 3 | Transacción cupo + inscripción; Atomicity | L1042–1051 |
| 4 | Vista sin documento + UDF/SP (o plan B app) | L1053–1062 |
| 5 | App vs BD + flujo trigger auditoría (no WhatsApp) | L1064–1074 |

Props: `prompt`, `hints[]`, `expectedKeywords[]`, `successMessage`. Apilar con `my-8`.

### ChallengeCard — ×1

| id | sección | props |
|----|---------|-------|
| `matricula-segura-rutas` | RetoIntegradorSection | title, difficulty=`integrador`, prompt, acceptanceCriteria[], hints[] — draft L1092–1110 |

### QuizSection — ×1 (5 preguntas)

| campo | valor |
|-------|-------|
| Componente | `QuizSection` → datos en `src/lib/teaching-quizzes/bases-de-datos.ts` |
| slug | `clase-06-dcl-tcl-objetos-bd` |
| track | `bases-de-datos` |
| Ubicación | Solo `MiniquizFinalSection` en `practica-y-cierre` |
| Preguntas | draft L1127–1186 (DCL; Atomicity; vista; UDF vs PROCEDURE; triggers encadenados) |

**Prohibido:** QuizSection (u otro quiz) en hub o en las páginas 1–5.

---

## Bloques interactivos — props por sección

> **Regla:** todo `<!-- code: -->` → `CodeFiddle` (`code` + `language`).  
> **Regla:** promesa mapa / familias / auditoría / app vs BD → `MermaidDiagram` contiguo (ADR 013).  
> **Regla:** 1 export por archivo `.tsx` bajo `sections/` y `pages/`.  
> **Regla:** Quiz **solo** en `practica-y-cierre`.  
> **Regla:** Root compartido → `Callout` **danger**, no warning.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos | prose `<ul>` | 5 objetivos draft L35–41 |
| Prerrequisitos | prose `<ul>` | clase-05 + dominio clase-03 DDL/DML (draft L45–49) |

### `MapaClase06Section`

| id | componente | props |
|----|------------|-------|
| Intro hub | prose | draft L78–80 (recorrido de páginas) |
| `mapa-paginas-clase-06` | `CompareTable` | draft L82–93 |
| `checklist-mental-clase` | `Callout` | `variant="callout-warning"`; draft L95–99 |

### `IntroMapaMasAllaSelectSection`

| id | componente | props |
|----|------------|-------|
| `mapa-leccion-mas-alla-select` | `MermaidDiagram` | chart `flowchart TD` draft L61–66 |
| `mas-alla-de-select` | `Callout` | `variant="callout-warning"`; draft L68–72 |

### `CicloFamiliasSqlSection`

| id | componente | props |
|----|------------|-------|
| Qué / para qué / cómo | prose | draft L107–120 |
| `ciclo-rutas-familias` | `StepReveal` | 5 pasos draft L122–132 |
| `familias-sql` | `MermaidDiagram` | `flowchart TB` draft L134–139 |
| Mini-chequeo | prose | draft L141–143 |

### `FamiliasDdlDmlDclTclSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose + tabla | draft L149–170 |
| `familias-ddl-dml-dcl-tcl` | `CompareTable` | draft L172–181 |
| Ejemplo + señales | prose | draft L183–190 |
| Malas prácticas H3 | prose `<ol>` o lista tipada | 4 escenarios draft L192–197 |

### `QueEsDclSection`

| id | componente | props |
|----|------------|-------|
| `root-compartido` | `Callout` | **`variant="callout-danger"`**; draft L224–229. Abre la página. |
| Qué / para qué / cómo / señales | prose | draft L209–234 |
| Malas prácticas H3 | prose | draft L236–241 |

### `UsuariosRolesSection` / `GrantSection` / `RevokeSection`

Cada una: bloques qué/para qué/cómo + **CodeFiddle** SQL + señales + H3 malas prácticas (draft L249–387). `GrantSection` incluye ejemplo Andes Tech. `RevokeSection` cierra con caso Rutas Digitales.

### `QueEsTclTransaccionSection`

| id | componente | props |
|----|------------|-------|
| Tabla sentencias TCL | prose / tabla | draft L395–407 |
| `transaccion-inscripcion` | `StepReveal` | 4 pasos |
| `sql-inscripcion-atomica` | `CodeFiddle` | `language="sql"` |
| Malas prácticas H3 | prose | draft L461–466 |

### `AcidSection`

| id | componente | props |
|----|------------|-------|
| Definición + ejemplo mental | prose | draft L476–496 |
| `acid-letras` | `CompareTable` | draft L498–507 |
| Malas prácticas H3 | prose | draft L514–518 |

### `CommitRollbackSavepointSection`

| id | componente | props |
|----|------------|-------|
| Definiciones COMMIT/ROLLBACK/SAVEPOINT | prose | draft L528–538 |
| `sql-savepoint` | `CodeFiddle` | `language="sql"` |
| Nota dialecto BEGIN | prose | mini-chequeo draft L570–572 |
| Malas prácticas H3 | prose | draft L564–568 |

### `CreateViewSection`

| id | componente | props |
|----|------------|-------|
| Qué / para qué / cómo | prose | draft L580–595 |
| `sql-create-view` | `CodeFiddle` | `language="sql"` |
| `vista-vs-tabla` | `CompareTable` | draft L630–639 |
| Limitaciones | prose `<ul>` | draft L641–646 |

### `VistaProyeccionSeguraSection`

| id | componente | props |
|----|------------|-------|
| Proyección segura | prose | draft L648–650 |
| `sql-vista-sin-sensible` | `CodeFiddle` | `language="sql"` |
| Señales + mini-chequeo | prose | draft L668–682 |
| Malas prácticas H3 | prose | draft L673–678 |

### `UdfSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose | draft L690–700 |
| `sql-udf-etiqueta-cupos` | `CodeFiddle` | `language="sql"` |
| `rutinas-sandbox` | `Callout` | `variant="callout-info"`; draft L731–735 |
| Malas prácticas H3 | prose | draft L742–746 |

### `ProcedureSection`

| id | componente | props |
|----|------------|-------|
| Bloques + CALL | prose | draft L754–764 |
| `sql-sp-inscribir` | `CodeFiddle` | `language="sql"` |
| `udf-vs-procedure` | `CompareTable` | draft L803–812 |
| Malas prácticas H3 | prose | draft L819–823 |

### `TriggerSection`

| id | componente | props |
|----|------------|-------|
| Qué / para qué / cómo | prose | draft L833–839 |
| `sql-trigger-audit` | `CodeFiddle` | `language="sql"` |
| `inscripcion-atomica-auditoria` | `MermaidDiagram` | `sequenceDiagram` draft L873–878 |
| `triggers-encadenados` | `Callout` | `variant="callout-warning"`; draft L885–890 |
| Malas prácticas H3 | prose | draft L892–897 |

### `CriterioAppVsBdSection`

| id | componente | props |
|----|------------|-------|
| Guía + casos LATAM | prose | draft L907–948 |
| `app-vs-bd` | `CompareTable` | draft L925–935 |
| `app-o-bd` | `MermaidDiagram` | `flowchart TD` draft L937–942 |
| Malas prácticas H3 | prose | draft L950–954 |
| Mini-chequeo | prose | draft L956–958 |

### `LabBaseSection`

| id | componente | props |
|----|------------|-------|
| Intro lab | prose | draft L966–968 |
| `sql-lab-integral` | `CodeFiddle` | `language="sql"` |

### `PracticaGuiadaSection`

| id | componente | props |
|----|------------|-------|
| PracticeExercise ×5 | `PracticeExercise` | draft L1019–1074; `my-8` |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | draft L1077–1090 |
| `matricula-segura-rutas` | `ChallengeCard` | draft L1092–1110 |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Arco 5 puntos | `<ol>` draft L1115–1121 |
| Pregunta operativa | prose draft L1123 |
| Siguiente | `next: null` — CTA «Repasa el mapa del módulo Bases de Datos» |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Miniquiz» |
| Quiz | `<QuizSection slug="clase-06-dcl-tcl-objetos-bd" track="bases-de-datos" />` |

---

## lesson-meta fields

### Hub (`clase-06-dcl-tcl-objetos-bd`)

| Campo | Valor |
|-------|-------|
| `track` | `bases-de-datos` |
| `slug` | `clase-06-dcl-tcl-objetos-bd` |
| `title` | `DCL, TCL, vistas, funciones, procedimientos y triggers: más allá de SELECT` |
| `order` | `7` |
| `prev` | `clase-05-normalizacion-esquemas/practica-y-cierre` |
| `next` | `clase-06-dcl-tcl-objetos-bd/mapa-sql-familias` (cadena interna; track next clase = `null`) |
| `seoTitle` | `DCL y TCL SQL: GRANT, ACID, vistas y triggers` |
| `seoDescription` | `Completa el mapa SQL con DCL (GRANT/REVOKE), TCL y ACID, vistas, UDF, procedimientos y triggers; decide app vs BD con ejemplos MySQL/MariaDB LATAM.` |
| `showInTrackIndex` | **`true`** |
| `layout` | **`LessonLayout`** |
| `canonical_path` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/` |

### Páginas internas (todas)

| Campo | Valor |
|-------|-------|
| `showInTrackIndex` | **`false`** |
| `layout` | **`ClassPageLayout`** |
| `track` | `bases-de-datos` |
| Quiz slug | Solo página final referencia `clase-06-dcl-tcl-objetos-bd` |

| page slug | title (meta) | seoTitle |
|-----------|--------------|----------|
| `…/mapa-sql-familias` | Del abecedario completo · DDL / DML / DCL / TCL | Familias SQL: DDL, DML, DCL y TCL |
| `…/dcl-grant-revoke` | Qué es DCL · Usuarios y roles · GRANT y REVOKE | DCL SQL: GRANT y REVOKE |
| `…/tcl-transacciones-acid` | Transacciones · ACID · COMMIT, ROLLBACK y SAVEPOINT | TCL y ACID: COMMIT y ROLLBACK |
| `…/vistas` | CREATE VIEW y consulta · Vista frente a tabla | Vistas SQL: CREATE VIEW y proyección |
| `…/funciones-procedimientos-triggers` | UDF · PROCEDURE · TRIGGER · Criterio: ¿app o BD? | UDF, PROCEDURE y TRIGGER en SQL |
| `…/practica-y-cierre` | Lab base · Práctica guiada · Reto · Cierre · Miniquiz | Práctica: DCL, TCL, vistas y cierre |

---

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `Clase06DclTclObjetosBdHubLesson.tsx` | default/hub | ObjetivosSection, MapaClase06Section, ClassPagesNavSection |
| `pages/mapa-sql-familias/MapaSqlFamiliasPageLesson.tsx` | page | IntroMapaMasAllaSelectSection, CicloFamiliasSqlSection, FamiliasDdlDmlDclTclSection |
| `pages/dcl-grant-revoke/DclGrantRevokePageLesson.tsx` | page | QueEsDclSection, UsuariosRolesSection, GrantSection, RevokeSection |
| `pages/tcl-transacciones-acid/TclTransaccionesAcidPageLesson.tsx` | page | QueEsTclTransaccionSection, AcidSection, CommitRollbackSavepointSection |
| `pages/vistas/VistasPageLesson.tsx` | page | CreateViewSection, VistaProyeccionSeguraSection |
| `pages/funciones-procedimientos-triggers/FuncionesProcedimientosTriggersPageLesson.tsx` | page | UdfSection, ProcedureSection, TriggerSection, CriterioAppVsBdSection |
| `pages/practica-y-cierre/PracticaYCierrePageLesson.tsx` | page | LabBaseSection, PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection |
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | — |
| `sections/MapaClase06Section.tsx` | `MapaClase06Section` | CompareTable, Callout |
| `sections/IntroMapaMasAllaSelectSection.tsx` | `IntroMapaMasAllaSelectSection` | MermaidDiagram, Callout |
| `sections/CicloFamiliasSqlSection.tsx` | `CicloFamiliasSqlSection` | StepReveal, MermaidDiagram |
| `sections/FamiliasDdlDmlDclTclSection.tsx` | `FamiliasDdlDmlDclTclSection` | CompareTable |
| `sections/QueEsDclSection.tsx` | `QueEsDclSection` | Callout **danger** |
| `sections/UsuariosRolesSection.tsx` | `UsuariosRolesSection` | CodeFiddle |
| `sections/GrantSection.tsx` | `GrantSection` | CodeFiddle |
| `sections/RevokeSection.tsx` | `RevokeSection` | CodeFiddle |
| `sections/QueEsTclTransaccionSection.tsx` | `QueEsTclTransaccionSection` | StepReveal, CodeFiddle |
| `sections/AcidSection.tsx` | `AcidSection` | CompareTable |
| `sections/CommitRollbackSavepointSection.tsx` | `CommitRollbackSavepointSection` | CodeFiddle |
| `sections/CreateViewSection.tsx` | `CreateViewSection` | CodeFiddle, CompareTable |
| `sections/VistaProyeccionSeguraSection.tsx` | `VistaProyeccionSeguraSection` | CodeFiddle |
| `sections/UdfSection.tsx` | `UdfSection` | CodeFiddle, Callout |
| `sections/ProcedureSection.tsx` | `ProcedureSection` | CodeFiddle, CompareTable |
| `sections/TriggerSection.tsx` | `TriggerSection` | CodeFiddle, MermaidDiagram, Callout |
| `sections/CriterioAppVsBdSection.tsx` | `CriterioAppVsBdSection` | CompareTable, MermaidDiagram |
| `sections/LabBaseSection.tsx` | `LabBaseSection` | CodeFiddle |
| `sections/PracticaGuiadaSection.tsx` | `PracticaGuiadaSection` | PracticeExercise ×5 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | ChallengeCard |
| `sections/CierreSection.tsx` | `CierreSection` | — |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | QuizSection |

**Regla:** máximo **1 componente exportado** por archivo.

**No crear:** `GuiaDocenteSection`, tags MDX, `CodeBlock`. No poner Quiz fuera de `practica-y-cierre`.

---

## Registry notes

Registrar **7 entradas** en `teaching-lessons-registry`:

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-06-dcl-tcl-objetos-bd` | **true** | Hub de clase; listado portal; **LessonLayout** |
| 2 | `bases-de-datos/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias` | false | Página 1/6; Mermaid hero + familias |
| 3 | `bases-de-datos/clase-06-dcl-tcl-objetos-bd/dcl-grant-revoke` | false | Página 2/6; Callout danger root |
| 4 | `bases-de-datos/clase-06-dcl-tcl-objetos-bd/tcl-transacciones-acid` | false | Página 3/6; TCL + ACID |
| 5 | `bases-de-datos/clase-06-dcl-tcl-objetos-bd/vistas` | false | Página 4/6; CREATE VIEW |
| 6 | `bases-de-datos/clase-06-dcl-tcl-objetos-bd/funciones-procedimientos-triggers` | false | Página 5/6; UDF/SP/TRIGGER + app vs BD |
| 7 | `bases-de-datos/clase-06-dcl-tcl-objetos-bd/practica-y-cierre` | false | Página 6/6; quiz clase |

También:

- `class-navigation.ts` → `CLASE_06` pages[] + `ALL_CLASSES`
- Quiz key `clase-06-dcl-tcl-objetos-bd` en `teaching-quizzes/bases-de-datos.ts`
- Legacy redirects hub + 6 subpáginas (lesson-spec)
- `next` de clase-05 `practica-y-cierre` → este hub
- Distinguir de POSW `/es/teaching/posw/bases-de-datos/` (solapa ACID; slug/ruta distintos)
- Sitemap: **7** canónicas ES (hub + 6 páginas)

---

## Checklist lesson-developer

- [ ] Hub `LessonLayout` + 6 PageLessons `ClassPageLayout` + breadcrumb `Clase 6 / Página X de 6`
- [ ] 22 sections en `sections/` + reutilizar `ClassPagesNavSection`
- [ ] 4× Mermaid (mapa hero, familias, sequence auditoría, app-o-bd); cero sustitución de familias / app vs BD por lista sola
- [ ] 11× CodeFiddle SQL (GRANT, TX, VIEW, FUNCTION, PROCEDURE, TRIGGER + lab); cero CodeBlock
- [ ] 6× CompareTable; StepReveal ×2; ChallengeCard; PracticeExercise ×5
- [ ] Callout **danger** `root-compartido` en `dcl-grant-revoke`
- [ ] H3 Malas prácticas en las 13 secciones de concepto marcadas
- [ ] Quiz **solo** en `practica-y-cierre`; slug de clase
- [ ] `showInTrackIndex: true` solo hub; páginas `false`
- [ ] Hub `prev` ← `clase-05-normalizacion-esquemas/practica-y-cierre`; `next` clase = `null`
- [ ] Contenido solo estudiante; 1 export / archivo
- [ ] clay: card / callout-warning / callout-info / **callout-danger** / stepper
- [ ] Nota sandbox: DCL/routines pueden ser referencia si el entorno no ejecuta

---

## Resumen conteos

| Métrica | Cantidad |
|---------|----------|
| Paginación | **Sí** (ADR 011) |
| Hub | 1 (`LessonLayout`) |
| Páginas internas | **6** (`ClassPageLayout`) |
| Registry | **7** |
| Secciones de contenido (tabla orden) | **20** (+ ClassPagesNav + lab/práctica/reto/cierre/quiz = 23 TSX) |
| MermaidDiagram | 4 (mapa + familias + sequence auditoría + **app-o-bd**) |
| CodeFiddle | **11** (SQL) |
| CompareTable | 6 |
| StepReveal | 2 |
| PracticeExercise | 5 |
| ChallengeCard | 1 |
| Callout | 5 (warning ×3 + **danger** ×1 + info ×1) |
| Quiz preguntas | 5 (solo última página) |
