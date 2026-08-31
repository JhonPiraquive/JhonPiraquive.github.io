## Clay UI

Contribución de **clay-ui-expert** para fusionar en `lesson-spec.md`.  
Tokens: `kb/brand/visual-tokens.md`. Reglas: ADR `kb/decisions/003-claymorphism-rules.md`.  
Paginación: ADR `kb/decisions/011-clases-con-paginas-internas.md` → shell `ClassPageLayout`.  
Visual obligatorio: ADR `kb/decisions/013-visuales-obligatorios-en-lecciones.md` (mapa / flujo / ER / JOINs → `MermaidDiagram` contiguo).  
Código: todo SQL del draft → **`CodeFiddle`** (obligatorio; no `CodeBlock` ni `<pre>` plano).

### Tokens y profundidad

| Token / regla | Valor | Uso |
|---------------|-------|-----|
| `--color-primary` | `#0A2540` | H2, títulos internos StepReveal / PracticeExercise / ChallengeCard / Quiz; breadcrumb énfasis |
| `--color-secondary` | `#00C2FF` | Callout info, thead CompareTable, barra activa StepReveal, página activa en `ClassPagesNav` |
| `--color-accent` | `#6B4EFF` | Callout warning/danger, borde PracticeExercise / ChallengeCard |
| `--color-neutral-light` | `#F4F6F8` | Fondo página, filas alternas de tablas |
| `--color-neutral-dark` | `#1E293B` | Superficie CodeFiddle; cuerpo prose |
| `--clay-radius` | 20–28px | ClayCard, inputs, fiddles |
| Profundidad clay | máx. 2 niveles | N1: `ClassPageLayout`; N2: un interactivo / ClayCard por bloque |

**Espaciado:** párrafos `my-4`; Callout / Mermaid / CodeFiddle `my-6`; ClayCard wrappers (CompareTable, Practice, Challenge, Quiz) `my-8`. No anidar Mermaid ni CodeFiddle dentro de un ClayCard extra.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `callout-danger`, `stepper`.

---

### ClassPageLayout (ADR 011)

| Elemento | Clay / presentación |
|----------|---------------------|
| Shell | `ClassPageLayout` en hub + cada página de contenido; fondo `neutral-light` → blanco; sin 3er nivel clay en el chrome |
| Breadcrumb | `Clase 3 / Página X de 8` + título de página; tipografía Inter; acento primary en «Clase 3» |
| `ClassPagesNav` | Solo en **hub**; índice de **8** páginas con descripción breve; ítem hover secondary sutil; **sin** cards en el listado (enlaces tipográficos o fila compacta) |
| Prev / next | Cadena: hub → `ddl-estructura` → `ddl-restricciones` → `dml-insert-select` → `dml-filtros-orden` → `agregados-group-having` → `update-delete` → `relacional-fk-joins` → `practica-y-cierre` → `null` (sin clase 04); botones/links con radius clay, sin neón |
| Quiz | Una sola clave por clase; solo en `practica-y-cierre` |

**Cadena de páginas (slugs):**

| Página | Slug | Rol Clay |
|--------|------|----------|
| Hub | `clase-03-ddl-dml-relacional` | Objetivos + CompareTable DDL/DML + Callout checklist + `ClassPagesNav` (8) |
| 1 / 8 | `ddl-estructura` | DDL vs DML + CREATE/DROP/ALTER + AUTO INCREMENT + Mermaid flujo + CodeFiddle SQL |
| 2 / 8 | `ddl-restricciones` | PK / UNIQUE / NOT NULL + CodeFiddle |
| 3 / 8 | `dml-insert-select` | DML + INSERT + SELECT + CodeFiddle |
| 4 / 8 | `dml-filtros-orden` | WHERE / DISTINCT / ORDER BY / LIMIT + CodeFiddle |
| 5 / 8 | `agregados-group-having` | Agregados + GROUP BY / HAVING + CompareTable WHERE vs HAVING + CodeFiddle |
| 6 / 8 | `update-delete` | Callout danger + UPDATE/DELETE + CodeFiddle (seguros + comentarios peligrosos) |
| 7 / 8 | `relacional-fk-joins` | ER Mermaid + StepReveal orden + JOINs Mermaid + CompareTable JOINs + CodeFiddle |
| 8 / 8 | `practica-y-cierre` | Practice ×5 + Challenge + Quiz + cierre |

---

### clay_variants por página / sección

#### Hub

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Objetivos de aprendizaje | — (prose) o **card** grid opcional ×5 | Lista de 5 objetivos; sin Callout |
| 2 | Mapa DDL ↔ DML | card | `CompareTable` familias DDL/DML; `Callout` warning checklist mental |
| 3 | Páginas de esta clase | — | `ClassPagesNav` (8 entradas); prerrequisitos en prose breve |

#### Página `ddl-estructura`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Introducción / flujo de la clase | card | `MermaidDiagram` **flowchart** «Flujo DDL → DML → JOIN» (hero visual) |
| 2 | DDL frente a DML | card | Tabla prose; malas prácticas en H3 |
| 3 | Qué es DDL | card | Catálogo sentencias prose |
| 4 | CREATE / DROP DATABASE | card | `CodeFiddle` SQL ×2 |
| 5 | CREATE / DROP / ALTER TABLE | card | `CodeFiddle` SQL CREATE + ALTER |
| 6 | AUTO INCREMENT | card | `CodeFiddle` SQL INSERT omitiendo id |

#### Página `ddl-restricciones`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Catálogo de restricciones | card | Tabla prose PK / UNIQUE / NOT NULL |
| 2 | PRIMARY KEY y ADD PRIMARY KEY | card | `CodeFiddle` SQL ALTER ADD PRIMARY KEY |
| 3 | UNIQUE | card | `CodeFiddle` SQL CONSTRAINT UNIQUE |
| 4 | NOT NULL y NULL | card | `CodeFiddle` SQL CREATE con NULL/NOT NULL; tabla mental 0 / '' / NULL |

#### Página `dml-insert-select`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Qué es DML + reglas de escritura | card | Tabla sentencias; callout opcional reglas nombres/comillas (info) |
| 2 | INSERT | card | `CodeFiddle` SQL INSERT (simple + múltiple) |
| 3 | SELECT (base) | card | `CodeFiddle` SQL SELECT columnas / `*` |

#### Página `dml-filtros-orden`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | WHERE | card | `CodeFiddle` SQL WHERE |
| 2 | DISTINCT | card | `CodeFiddle` SQL DISTINCT |
| 3 | ORDER BY | card | `CodeFiddle` SQL ASC/DESC |
| 4 | LIMIT | card | `CodeFiddle` SQL ORDER BY + LIMIT |

#### Página `agregados-group-having`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Funciones de agregado | card | `CodeFiddle` plantilla AVG/SUM/COUNT/MAX/MIN + ejemplos |
| 2 | GROUP BY | card | `CodeFiddle` SQL GROUP BY sede |
| 3 | HAVING | card | `CodeFiddle` SQL HAVING; `CompareTable` WHERE vs HAVING |

#### Página `update-delete`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Advertencia crítica | — | `Callout` **danger** «UPDATE y DELETE sin WHERE» (abre página; sin ClayCard padre extra si el Callout ya es N2) |
| 2 | UPDATE | card | `CodeFiddle` SQL seguro + comentario peligroso |
| 3 | DELETE | card | `CodeFiddle` SQL seguro + bloque comentado didáctico |

#### Página `relacional-fk-joins`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Qué es una BD relacional | card | Prose + malas prácticas |
| 2 | Relacional frente a ER | card | `MermaidDiagram` **erDiagram** Programas–Inscripciones |
| 3 | Cardinalidad, PK y FK | card | Tabla composición prose |
| 4 | CREATE TABLE CONSTRAINT | card | `CodeFiddle` SQL padre/hija; `StepReveal` 5 pasos orden |
| 5 | INNER / LEFT / RIGHT JOIN | card | `MermaidDiagram` **flowchart** JOINs; `CompareTable` JOINs; `CodeFiddle` SQL ×3 |
| 6 | Script integral + errores + casos | card | `CodeFiddle` script lab; checklist prose; casos Rutas Digitales / El Tornillo |

#### Página `practica-y-cierre`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Práctica guiada | card | `PracticeExercise` ×5 (accent) |
| 2 | Reto integrador | card | Enunciado prose + `ChallengeCard` «Matrículas de Rutas Digitales» |
| 3 | Cierre | card | 7 puntos prose + pregunta operativa; CTA repaso módulo |
| 4 | Miniquiz | card | `QuizSection` 5 ítems (única clave de clase) |

---

### MermaidDiagram (ADR 013)

Promesas visuales del draft → diagrama contiguo obligatorio; listas/tablas no sustituyen. **JOINs:** Mermaid obligatorio en `relacional-fk-joins`.

| id | Tipo | Página / ubicación | Clay / presentación |
|----|------|--------------------|---------------------|
| `flujo-ddl-dml-join` | **`flowchart`** | Intro (`ddl-estructura`), **hero visual** de la clase | Contenedor `figure`: `div` blanco `rounded-lg p-4 my-6`. `title` + `description` del draft. **Sin** ClayCard envolvente. Título figure Montserrat/`primary` |
| `er-programas-inscripciones` | **`erDiagram`** | `relacional-fk-joins` § ER | `my-6` tras contraste ER/relacional; cierra el puente conceptual → tablas |
| `joins-conjuntos` | **`flowchart`** | `relacional-fk-joins` § JOINs | `my-6` antes de CompareTable JOINs; subgraphs INNER/LEFT/RIGHT |

**Reglas Mermaid:** sin entidades HTML en `chart`; comillas literales. Separar flowchart intro → prose; en `relacional-fk-joins` no apilar erDiagram + joins en el mismo viewport inicial (prose + StepReveal entre medias). Máx. un Mermaid “pesado” visible a la vez por scroll razonable.

---

### CompareTable styling

| id | Headers (resumen) | Página | Clay |
|----|-------------------|--------|------|
| `ddl-vs-dml` | Familia · Acrónimo · Qué toca · Ejemplos (2 filas) | hub | `ClayCard` `my-8`; thead secondary; zebra `neutral-light` |
| `where-vs-having` | Cláusula · Cuándo filtra · Sobre qué · Ejemplo (2 filas) | `agregados-group-having` | Igual; scroll horizontal mobile |
| `joins-negocio` | JOIN · Qué conserva · NULL · Pregunta de negocio (3 filas) | `relacional-fk-joins` | Igual; tras Mermaid JOINs |

Tablas markdown del draft (catálogos DDL, restricciones, cláusulas, agregados): prose o `CompareTable` compacta en `ClayCard` `my-6` si se promueven; thead siempre secondary. No cards en hero Mermaid.

---

### CodeFiddle (SQL — obligatorio)

Sustituir cada `<!-- code: sql -->` del draft por **`CodeFiddle`** `language="sql"`.

| id | Página / contexto |
|----|-------------------|
| `sql-create-database` | `ddl-estructura` — CREATE DATABASE + USE |
| `sql-drop-database` | `ddl-estructura` — DROP (lab / backup) |
| `sql-create-table-programas` | `ddl-estructura` — CREATE TABLE Programas |
| `sql-drop-table` | `ddl-estructura` — DROP TABLE |
| `sql-alter-table` | `ddl-estructura` — ADD / MODIFY / DROP COLUMN |
| `sql-insert-autoincrement` | `ddl-estructura` — INSERT omitiendo id |
| `sql-add-primary-key` | `ddl-restricciones` — ALTER ADD PRIMARY KEY |
| `sql-unique-nombre` | `ddl-restricciones` — UNIQUE Nombre_Programa |
| `sql-not-null-null` | `ddl-restricciones` — CREATE Inscripciones |
| `sql-insert-programas` | `dml-insert-select` — INSERT simple + múltiple |
| `sql-select-base` | `dml-insert-select` — SELECT columnas / `*` |
| `sql-where` | `dml-filtros-orden` — WHERE |
| `sql-distinct` | `dml-filtros-orden` — DISTINCT |
| `sql-order-by` | `dml-filtros-orden` — ORDER BY ASC/DESC |
| `sql-limit` | `dml-filtros-orden` — ORDER BY + LIMIT |
| `sql-agregados-plantilla` | `agregados-group-having` — plantilla AVG…MIN |
| `sql-agregados-ejemplos` | `agregados-group-having` — AVG/SUM/COUNT/MAX/MIN |
| `sql-group-by` | `agregados-group-having` — GROUP BY sede |
| `sql-having` | `agregados-group-having` — HAVING COUNT |
| `sql-update-seguro` | `update-delete` — UPDATE con WHERE (+ comentario peligroso) |
| `sql-delete-seguro` | `update-delete` — DELETE con WHERE (+ comentarios didácticos) |
| `sql-create-fk` | `relacional-fk-joins` — CREATE padre/hija + CONSTRAINT |
| `sql-joins-tres` | `relacional-fk-joins` — INNER / LEFT / RIGHT |
| `sql-script-lab` | `relacional-fk-joins` — script integral laboratorio |

**Clay:** superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; no ClayCard padre. Sin entidades HTML en `code`. En páginas densas (ddl-estructura, relacional-fk-joins): prose breve entre fiddles; no apilar más de ~3 sin aire.

**Títulos sugeridos:** nombres de sentencia o archivo lógico (`CREATE TABLE Programas`, `JOIN Programas–Inscripciones`).

---

### StepReveal

| id | Título draft | Página | Clay |
|----|--------------|--------|------|
| `orden-padres-hijos-join` | Orden correcto: padres → hijos → datos → JOIN (5 pasos) | `relacional-fk-joins` § CONSTRAINT | Variante **stepper**; barra activa `--color-secondary`; H3 interactivo primary; **sin** ClayCard padre extra. Tras CodeFiddle CREATE FK |

---

### PracticeExercise, ChallengeCard, QuizSection

| Componente | Variante / borde | Notas de layout |
|------------|------------------|-----------------|
| `PracticeExercise` ×5 | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` | Solo en `practica-y-cierre`. Título H3 interactivo `text-lg font-semibold primary`. Apilar con `my-8`; hints colapsables sin segundo clay |
| `ChallengeCard` | `ClayCard` `my-8` + borde accent; badge dificultad «integrador» secondary/accent suave | «Matrículas de Rutas Digitales»; acceptanceCriteria como lista. No anidar Callout |
| `QuizSection` | `ClayCard` `my-8` | H2 «Miniquiz»; 5 ítems; opciones radio en superficie blanca; feedback post-respuesta sin card anidada. **Única** instancia de quiz de la clase |

---

### Callout types

| id | Título draft | Tipo | Borde | Página | Motivo visual |
|----|--------------|------|-------|--------|---------------|
| `checklist-estructura-datos` | Checklist mental antes de ejecutar | **callout-warning** | accent `#6B4EFF` | hub | DDL vs DML; anti-DROP-como-DELETE |
| `peligro-update-delete` | Peligro: UPDATE y DELETE sin WHERE | **callout-danger** | accent / danger | `update-delete` (abre) | Riesgo de pérdida masiva; backup |
| `padres-tipos` | Padres primero, tipos iguales *(si layout lo separa)* | **callout-info** | secondary `#00C2FF` | `relacional-fk-joins` | Reglas CONSTRAINT del material |
| `join-pregunta-negocio` | INNER no es el default del negocio *(opcional)* | **callout-info** | secondary | `relacional-fk-joins` § JOINs | Tras CompareTable JOINs |

Todos: `ClayCard` + `border-l-4` + `my-6` (excepto danger de apertura si el patrón track lo trata como bloque N2 directo). Máx. un callout por sección H2 de concepto.

---

### Jerarquía h2 / h3

| Nivel | Clases | Color | Uso |
|-------|--------|-------|-----|
| H1 | `text-3xl font-bold` + font-heading | inherit (en clay) | Título de página en `ClassPageLayout` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | Una sección TSX = un H2 (tabla clay_variants) |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | Qué es, Para qué, Cómo, Ejemplo, Señales, Malas prácticas |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Títulos StepReveal, Practice, Challenge, Quiz |
| H4 | `mb-2 font-semibold` | inherit | Subtítulos de caso (Rutas Digitales, El Tornillo) |
| Cuerpo | `prose prose-slate` + `my-4` | neutral-dark | Narrativa LATAM, checklists |

**H2 por página:** respetar agrupación del draft por página ADR 011; no fusionar DDL completo + restricciones en un solo H2. Hub: objetivos + mapa + nav. No promover cada H3 a ClayCard.

**Ritmo anti-saturación por página:**

- Hub: objetivos → CompareTable → Callout → ClassPagesNav.
- `ddl-estructura`: Mermaid flujo → prose DDL → fiddles CREATE/DROP/ALTER (aire entre bloques).
- `ddl-restricciones` / `dml-*` / `agregados-*`: un concepto → fiddle → malas prácticas; CompareTable solo al cerrar HAVING.
- `update-delete`: Callout danger primero → UPDATE → DELETE (fiddles con comentarios, no demos ejecutables destructivas).
- `relacional-fk-joins`: erDiagram → StepReveal + fiddle FK → Mermaid JOINs → CompareTable → fiddle JOINs → script lab.
- `practica-y-cierre`: Practice stack → Challenge → Cierre prose → Quiz (último bloque interactivo).

---

### Checklist componentes mapeados

| Componente | ¿Usado? | Dónde |
|------------|---------|-------|
| `ClassPageLayout` | Sí | Hub + 8 páginas |
| `ClayCard` | Sí | Wrappers CompareTable, Practice, Challenge, Quiz, Callout; secciones card |
| `Callout` | Sí | checklist (hub) + danger UPDATE/DELETE (+ opcionales info FK/JOIN) |
| `CompareTable` | Sí | 3 (DDL/DML; WHERE/HAVING; JOINs) |
| `CodeFiddle` | Sí | SQL obligatorio en todas las páginas de contenido con snippets |
| `PracticeExercise` | Sí | ×5 en última página |
| `ChallengeCard` | Sí | Reto Matrículas de Rutas Digitales |
| `QuizSection` | Sí | Miniquiz 5Q, solo última página |
| `MermaidDiagram` | Sí | flowchart flujo + erDiagram + flowchart JOINs |
| `StepReveal` | Sí | 5 pasos padres → JOIN |
| `ClassPagesNav` | Sí | Hub, 8 entradas |
