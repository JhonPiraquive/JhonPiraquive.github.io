## Clay UI

Contribución de **clay-ui-expert** para fusionar en `lesson-spec.md`.  
Tokens: `kb/brand/visual-tokens.md`. Reglas: ADR `kb/decisions/003-claymorphism-rules.md`.  
Paginación: ADR `kb/decisions/011-clases-con-paginas-internas.md` → shell `ClassPageLayout`.  
Visual obligatorio: ADR `kb/decisions/013-visuales-obligatorios-en-lecciones.md` (mapa familias / flujo inscripción / app vs BD → `MermaidDiagram` contiguo).  
Código: todo SQL del draft → **`CodeFiddle`** (obligatorio; no `CodeBlock` ni `<pre>` plano).  
**Dialecto:** MySQL/MariaDB (InnoDB); anotar `BEGIN` vs `START TRANSACTION` y `DELIMITER` en rutinas si el layout lo expone.

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
| Breadcrumb | `Clase 6 / Página X de 6` + título de página; tipografía Inter; acento primary en «Clase 6» |
| `ClassPagesNav` | Solo en **hub**; índice de **6** páginas con descripción breve; ítem hover secondary sutil; **sin** cards en el listado (enlaces tipográficos o fila compacta) |
| Prev / next | Cadena: hub → `mapa-sql-familias` → `dcl-grant-revoke` → `tcl-transacciones-acid` → `vistas` → `funciones-procedimientos-triggers` → `practica-y-cierre` → `null` (fin de módulo); prev clase: `clase-05-normalizacion-esquemas`. Botones/links con radius clay, sin neón |
| Quiz | Una sola clave por clase; solo en `practica-y-cierre` |

**Cadena de páginas (slugs):**

| Página | Slug | Rol Clay |
|--------|------|----------|
| Hub | `clase-06-dcl-tcl-objetos-bd` | Objetivos + CompareTable mapa de páginas + Callout checklist + `ClassPagesNav` (6) |
| 1 / 6 | `mapa-sql-familias` | Intro Mermaid mapa + Callout; StepReveal ciclo; Mermaid familias; CompareTable DDL/DML/DCL/TCL |
| 2 / 6 | `dcl-grant-revoke` | Callout root + CodeFiddle usuarios / GRANT / REVOKE |
| 3 / 6 | `tcl-transacciones-acid` | StepReveal inscripción + CodeFiddle TCL + CompareTable ACID + CodeFiddle SAVEPOINT |
| 4 / 6 | `vistas` | CodeFiddle CREATE VIEW + CompareTable vista vs tabla + CodeFiddle proyección segura |
| 5 / 6 | `funciones-procedimientos-triggers` | CodeFiddle UDF/SP/trigger + Mermaids + CompareTables + Callouts sandbox/triggers |
| 6 / 6 | `practica-y-cierre` | CodeFiddle lab + Practice ×5 + Challenge + Quiz + cierre |

---

### clay_variants por página / sección

#### Hub

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Objetivos de aprendizaje | — (prose) o **card** grid opcional ×5 | Lista de 5 objetivos; sin Callout |
| 2 | Mapa de páginas de la lección | card | `CompareTable` 6 filas (página · qué aprendes · entregable); `Callout` **warning** checklist mental |
| 3 | Páginas de esta clase | — | `ClassPagesNav` (6 entradas); prerrequisitos en prose breve |

#### Página `mapa-sql-familias`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Introducción: más allá de SELECT | card | `MermaidDiagram` **flowchart** «Mapa de la lección» (**hero visual**); `Callout` **warning** «Más allá de SELECT» |
| 2 | 0. Del abecedario completo | stepper | `StepReveal` 5 pasos «Ciclo típico en Rutas Digitales»; `MermaidDiagram` **flowchart** familias SQL |
| 3 | 1. DDL / DML / DCL / TCL | card | `CompareTable` 4 familias; malas prácticas |

**Ritmo Mermaid:** hero mapa → prose → StepReveal → Mermaid familias → CompareTable. No apilar ambos Mermaid sin prose/StepReveal entre medias.

#### Página `dcl-grant-revoke`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Qué es DCL + usuarios | card | Prose; `Callout` **danger** o **warning** «Root compartido» (abre énfasis de riesgo) |
| 2 | GRANT | card | `CodeFiddle` SQL crear usuarios + `CodeFiddle` GRANT mínimo privilegio |
| 3 | REVOKE + mínimo privilegio | card | `CodeFiddle` SQL REVOKE; malas prácticas |

#### Página `tcl-transacciones-acid`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Transacciones | stepper | `StepReveal` 4 pasos «Transacción de inscripción»; `CodeFiddle` SQL inscripción atómica |
| 2 | ACID | card | `CompareTable` A/C/I/D; malas prácticas |
| 3 | COMMIT / ROLLBACK / SAVEPOINT | card | `CodeFiddle` SQL SAVEPOINT; prose COMMIT/ROLLBACK |

#### Página `vistas`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | CREATE VIEW y consulta | card | `CodeFiddle` SQL CREATE VIEW + SELECT |
| 2 | Vista frente a tabla / proyección | card | `CompareTable` vista vs tabla; `CodeFiddle` SQL vista sin columna sensible; malas prácticas |

#### Página `funciones-procedimientos-triggers`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | UDF | card | `CodeFiddle` SQL `fn_etiqueta_cupos`; `Callout` **info** «Rutinas en el sandbox» |
| 2 | PROCEDURE | card | `CodeFiddle` SQL `sp_inscribir`; `CompareTable` UDF vs PROCEDURE (si layout promueve) |
| 3 | TRIGGER | card | `CodeFiddle` SQL AFTER INSERT audit; `MermaidDiagram` **flowchart** inscripción + auditoría; `Callout` **warning** «Triggers encadenados» |
| 4 | Criterio app vs BD | card | `CompareTable` app vs BD; `MermaidDiagram` **flowchart** decisión app/BD; casos LATAM |

**Ritmo:** no apilar tres fiddles + dos Mermaid en el mismo viewport — UDF → SP → trigger+Mermaid → app/BD. Máx. un Mermaid “pesado” visible a la vez.

#### Página `practica-y-cierre`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Lab base | card | `CodeFiddle` SQL `lab-rutas-dcl-tcl.sql` (vista + TCL) |
| 2 | Práctica guiada | card | `PracticeExercise` ×5 (accent) |
| 3 | Reto integrador | card | Enunciado prose + `ChallengeCard` «Matrícula segura en Rutas Digitales / Andes Tech» |
| 4 | Cierre | card | 5 puntos prose + pregunta operativa |
| 5 | Miniquiz | card | `QuizSection` 5 ítems (única clave de clase) |

---

### MermaidDiagram (ADR 013)

Promesas visuales del draft → diagrama contiguo obligatorio; listas/tablas no sustituyen. **Familias SQL** obligatorio en `mapa-sql-familias`. **App vs BD** y flujo inscripción+auditoría obligatorios en `funciones-procedimientos-triggers`.

| id | Tipo | Página / ubicación | Clay / presentación |
|----|------|--------------------|---------------------|
| `mapa-leccion-mas-alla-select` | **`flowchart`** | Intro (`mapa-sql-familias`), **hero visual** de la clase | Contenedor `figure`: `div` blanco `rounded-lg p-4 my-6`. **Sin** ClayCard envolvente. Título figure Montserrat/`primary` |
| `familias-sql` | **`flowchart`** | `mapa-sql-familias` §0 | `my-6` tras StepReveal; SQL → DDL/DML/DCL/TCL |
| `inscripcion-atomica-auditoria` | **`flowchart`** | `funciones-procedimientos-triggers` § TRIGGER | `my-6` tras CodeFiddle trigger |
| `app-o-bd` | **`flowchart`** | `funciones-procedimientos-triggers` § criterio | `my-6` tras CompareTable app/BD |

**Reglas Mermaid:** sin entidades HTML en `chart`; comillas literales. Separar Mermaid intro → prose; en `funciones-*` no apilar inscripción+auditoría y app-o-bd sin prose entre medias. Máx. un Mermaid “pesado” visible a la vez por scroll razonable.

---

### CompareTable styling

| id | Headers (resumen) | Página | Clay |
|----|-------------------|--------|------|
| `mapa-paginas-clase-06` | Página · Qué aprendes · Entregable mental (6 filas) | hub | `ClayCard` `my-8`; thead secondary; zebra `neutral-light` |
| `familias-ddl-dml-dcl-tcl` | Familia · Acrónimo · Qué toca · Ejemplos (4 filas) | `mapa-sql-familias` | Igual; tras Mermaid familias |
| `acid-letras` | Letra · Inglés · Español · Idea (4 filas) | `tcl-transacciones-acid` | Igual |
| `vista-vs-tabla` | Aspecto · Vista · Tabla base (filas del draft) | `vistas` | Igual |
| `udf-vs-procedure` | Aspecto · UDF · PROCEDURE *(si layout lo separa)* | `funciones-procedimientos-triggers` | Igual |
| `app-vs-bd` | Preferir en la BD · Preferir en la app (5 filas) | `funciones-procedimientos-triggers` | Igual; scroll horizontal mobile |

Tablas markdown del draft: prose o `CompareTable` compacta en `ClayCard` `my-6` si se promueven; thead siempre secondary. No cards en hero Mermaid.

---

### CodeFiddle (SQL — obligatorio)

Sustituir cada `<!-- code: sql -->` / CodeFiddle del draft por **`CodeFiddle`** `language="sql"`.

| id | Página / contexto |
|----|-------------------|
| `sql-crear-usuarios` | `dcl-grant-revoke` — Crear usuarios de propósito (lab) |
| `sql-grant-minimo` | `dcl-grant-revoke` — GRANT con mínimo privilegio |
| `sql-revoke` | `dcl-grant-revoke` — REVOKE |
| `sql-inscripcion-atomica` | `tcl-transacciones-acid` — Inscripción atómica (TCL) |
| `sql-savepoint` | `tcl-transacciones-acid` — SAVEPOINT y rollback parcial |
| `sql-create-view` | `vistas` — CREATE VIEW y consulta |
| `sql-vista-sin-sensible` | `vistas` — Vista sin columna sensible |
| `sql-udf-etiqueta-cupos` | `funciones-procedimientos-triggers` — UDF etiqueta de cupos |
| `sql-sp-inscribir` | `funciones-procedimientos-triggers` — PROCEDURE de inscripción con TCL |
| `sql-trigger-audit` | `funciones-procedimientos-triggers` — TRIGGER AFTER INSERT auditoría |
| `sql-lab-integral` | `practica-y-cierre` — Lab integral vista + TCL (`lab-rutas-dcl-tcl.sql`) |

**Clay:** superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; no ClayCard padre. Sin entidades HTML en `code`. En páginas densas (`dcl-*`, `funciones-*`): prose breve entre fiddles; no apilar más de ~3 sin aire.

**Títulos sugeridos:** `Crear usuarios (lab)`, `GRANT mínimo privilegio`, `REVOKE`, `Inscripción atómica`, `SAVEPOINT`, `CREATE VIEW`, `Vista sin PII`, `fn_etiqueta_cupos`, `sp_inscribir`, `TRIGGER audit`, `lab-rutas-dcl-tcl.sql`.

**Nota sandbox:** fiddles DCL/routines pueden ser de referencia (no ejecutables en sandbox restringido); Callout info lo aclara — no simular ejecución destructiva.

---

### StepReveal

| id | Título draft | Página | Clay |
|----|--------------|--------|------|
| `ciclo-rutas-familias` | Ciclo típico en Rutas Digitales (5 pasos) | `mapa-sql-familias` §0 | Variante **stepper**; barra activa `--color-secondary`; H3 interactivo primary; **sin** ClayCard padre extra. Antes del Mermaid familias |
| `transaccion-inscripcion` | Transacción de inscripción (4 pasos) | `tcl-transacciones-acid` | Igual; abre antes del CodeFiddle inscripción |

---

### PracticeExercise, ChallengeCard, QuizSection

| Componente | Variante / borde | Notas de layout |
|------------|------------------|-----------------|
| `PracticeExercise` ×5 | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` | Solo en `practica-y-cierre`. Título H3 interactivo `text-lg font-semibold primary`. Apilar con `my-8`; hints colapsables sin segundo clay |
| `ChallengeCard` | `ClayCard` `my-8` + borde accent; badge dificultad «integrador» secondary/accent suave | «Matrícula segura en Rutas Digitales / Andes Tech»; acceptanceCriteria como lista. No anidar Callout |
| `QuizSection` | `ClayCard` `my-8` | H2 «Miniquiz»; 5 ítems; opciones radio en superficie blanca; feedback post-respuesta sin card anidada. **Única** instancia de quiz de la clase |

---

### Callout types

| id | Título draft | Tipo | Borde | Página | Motivo visual |
|----|--------------|------|-------|--------|---------------|
| `mas-alla-de-select` | Más allá de SELECT | **callout-warning** | accent `#6B4EFF` | `mapa-sql-familias` (abre, tras Mermaid mapa) | Amplía SQL más allá de consultas |
| `checklist-mental-clase-06` | Checklist mental de la clase | **callout-warning** | accent | hub | Familia + privilegio + TCL + objetos + app/BD |
| `root-compartido` | Root compartido | **callout-danger** | accent / danger | `dcl-grant-revoke` (abre) | Riesgo de seguridad; mínimo privilegio |
| `rutinas-sandbox` | Rutinas en el sandbox | **callout-info** | secondary `#00C2FF` | `funciones-procedimientos-triggers` § UDF | Límites de hosting / plan B app |
| `triggers-encadenados` | Triggers encadenados | **callout-warning** | accent | `funciones-procedimientos-triggers` § TRIGGER | Anti-patrón de complejidad oculta |

Todos: `ClayCard` + `border-l-4` + `my-6` (excepto danger de apertura si el patrón track lo trata como bloque N2 directo). Máx. un callout por sección H2 de concepto.

---

### Jerarquía h2 / h3

| Nivel | Clases | Color | Uso |
|-------|--------|-------|-----|
| H1 | `text-3xl font-bold` + font-heading | inherit (en clay) | Título de página en `ClassPageLayout` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | Una sección TSX = un H2 (tabla clay_variants) |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | Qué es, Para qué, Cómo, Ejemplo, Señales, Malas prácticas |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Títulos StepReveal, Practice, Challenge, Quiz |
| H4 | `mb-2 font-semibold` | inherit | Subtítulos de caso (Rutas Digitales, Andes Tech, hosting) |
| Cuerpo | `prose prose-slate` + `my-4` | neutral-dark | Narrativa LATAM, checklists |

**H2 por página:** respetar agrupación del draft por página ADR 011; no fusionar DCL + TCL en un solo H2. Hub: objetivos + mapa CompareTable + nav. No promover cada H3 a ClayCard. En `funciones-*`, H2 por objeto (UDF / PROCEDURE / TRIGGER / criterio).

**Ritmo anti-saturación por página:**

- Hub: objetivos → CompareTable → Callout → ClassPagesNav.
- `mapa-sql-familias`: Mermaid mapa + Callout → StepReveal + Mermaid familias → CompareTable.
- `dcl-grant-revoke`: Callout root → fiddle usuarios → GRANT → REVOKE.
- `tcl-transacciones-acid`: StepReveal → fiddle inscripción → CompareTable ACID → fiddle SAVEPOINT.
- `vistas`: fiddle CREATE → CompareTable → fiddle proyección.
- `funciones-procedimientos-triggers`: UDF → SP → trigger+Mermaid → app/BD (aire entre bloques).
- `practica-y-cierre`: Lab fiddle → Practice stack → Challenge → Cierre prose → Quiz (último bloque interactivo).

---

### Checklist componentes mapeados

| Componente | ¿Usado? | Dónde |
|------------|---------|-------|
| `ClassPageLayout` | Sí | Hub + 6 páginas |
| `ClayCard` | Sí | Wrappers CompareTable, Practice, Challenge, Quiz, Callout; secciones card |
| `Callout` | Sí | más allá SELECT + checklist hub (warning) + root (**danger**) + sandbox (info) + triggers (warning) |
| `CompareTable` | Sí | hasta 6 (mapa páginas; familias; ACID; vista/tabla; UDF/SP; app/BD) |
| `CodeFiddle` | Sí | SQL obligatorio ×11 (usuarios, GRANT, REVOKE, TCL×2, vistas×2, UDF, SP, trigger, lab) |
| `PracticeExercise` | Sí | ×5 en última página |
| `ChallengeCard` | Sí | Reto Matrícula segura Rutas Digitales / Andes Tech |
| `QuizSection` | Sí | Miniquiz 5Q, solo última página |
| `MermaidDiagram` | Sí | flowchart mapa + familias + inscripción/auditoría + app/BD |
| `StepReveal` | Sí | ciclo familias (5) + transacción inscripción (4) |
| `ClassPagesNav` | Sí | Hub, 6 entradas |
