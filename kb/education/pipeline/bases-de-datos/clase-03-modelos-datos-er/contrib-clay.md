## Clay UI

Contribución de **clay-ui-expert** para fusionar en `lesson-spec.md`.  
Tokens: `kb/brand/visual-tokens.md`. Reglas: ADR `kb/decisions/003-claymorphism-rules.md`.  
Paginación: ADR `kb/decisions/011-clases-con-paginas-internas.md` → shell `ClassPageLayout`.  
Visual obligatorio: ADR `kb/decisions/013-visuales-obligatorios-en-lecciones.md` (mapa / flujo / ER / familias → `MermaidDiagram` contiguo).  
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
| Breadcrumb | `Clase 4 / Página X de 5` + título de página; tipografía Inter; acento primary en «Clase 4» |
| `ClassPagesNav` | Solo en **hub**; índice de **5** páginas con descripción breve; ítem hover secondary sutil; **sin** cards en el listado (enlaces tipográficos o fila compacta) |
| Prev / next | Cadena: hub → `modelos-conceptual-logico-fisico` → `diagramas-er` → `familias-relacional-nosql-grafos` → `transformacion-tipos-llaves` → `practica-y-cierre` → (hub clase-05 cuando exista); prev clase: `clase-03-ddl-dml-relacional`. Botones/links con radius clay, sin neón |
| Quiz | Una sola clave por clase; solo en `practica-y-cierre` |

**Cadena de páginas (slugs):**

| Página | Slug | Rol Clay |
|--------|------|----------|
| Hub | `clase-04-modelos-datos-er` | Objetivos + CompareTable mapa de páginas + Callout checklist + `ClassPagesNav` (5) |
| 1 / 5 | `modelos-conceptual-logico-fisico` | Intro Mermaid mapa + Callout diseñar; StepReveal niveles; Mermaid flujo; CompareTable niveles; CodeFiddle físico |
| 2 / 5 | `diagramas-er` | Símbolos prose + Mermaid **erDiagram** hero ER + caso Rutas Digitales |
| 3 / 5 | `familias-relacional-nosql-grafos` | Relacional / NoSQL / grafos + intro estrella/copo; Mermaid ×2 + CompareTable familias |
| 4 / 5 | `transformacion-tipos-llaves` | StepReveal ER→SQL + CodeFiddle transformación + Mermaid refuerzo + Callout padres; tipos / PK / FK |
| 5 / 5 | `practica-y-cierre` | Practice ×5 + Challenge + Quiz + cierre |

---

### clay_variants por página / sección

#### Hub

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Objetivos de aprendizaje | — (prose) o **card** grid opcional ×6 | Lista de 6 objetivos; sin Callout |
| 2 | Mapa de páginas de la lección | card | `CompareTable` 5 filas (página · qué aprendes · entregable); `Callout` **warning** checklist mental |
| 3 | Páginas de esta clase | — | `ClassPagesNav` (5 entradas); prerrequisitos en prose breve |

#### Página `modelos-conceptual-logico-fisico`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Introducción: diseñar antes de crear | card | `MermaidDiagram` **flowchart** «Mapa de la lección» (**hero visual**); `Callout` **warning** «Diseñar antes de crear» |
| 2 | 0. Mapa — del requisito al DDL | stepper | `StepReveal` 5 pasos «Del WhatsApp al CREATE TABLE»; `MermaidDiagram` **flowchart** flujo conceptual → lógico → físico |
| 3 | 1. Modelo de datos | card | Prose + malas prácticas H3; sin Mermaid extra |
| 4 | 2. Modelo conceptual | card | Prose + malas prácticas; mini-chequeo |
| 5 | 3. Modelo lógico | card | Prose + malas prácticas |
| 6 | 4. Modelo físico | card | `CodeFiddle` SQL CREATE Programas (tipos / AUTO_INCREMENT / UNIQUE); `CompareTable` niveles conceptual / lógico / físico |

#### Página `diagramas-er`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | 5. Diagrama ER | card | Tabla símbolos prose; `MermaidDiagram` **erDiagram** Programas–Estudiantes–Inscripciones (**hero visual** de página); malas prácticas; caso H4 «Rutas Digitales y la tabla Todo» |

#### Página `familias-relacional-nosql-grafos`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | 6. Familia relacional | card | Prose + malas prácticas; sin fiddle (puente a transformación en pág. 4) |
| 2 | 7. Familia NoSQL | card | Tabla variantes prose; cuándo sí/no; malas prácticas |
| 3 | 8. Familia de grafos | card | Prose + caso H4 Andes Tech; malas prácticas |
| 4 | 9. Intro estrella vs copo de nieve | card | ASCII prose breve; `MermaidDiagram` **flowchart** estrella vs copo; `MermaidDiagram` **mindmap** familias/BI; `CompareTable` 6 filas familias/formas; malas prácticas |

**Ritmo Mermaid en esta página:** no apilar los dos Mermaid + CompareTable en el mismo viewport inicial — prose estrella/copo → Mermaid flowchart → prose ejemplo → Mermaid mindmap → CompareTable. Máx. un Mermaid “pesado” visible a la vez por scroll razonable.

#### Página `transformacion-tipos-llaves`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | 10. Transformación ER → SQL | stepper | `StepReveal` 6 pasos «Checklist ER → tablas»; `CodeFiddle` SQL `academia_rutas_er.sql` (script integral); `Callout` **info** «Tip: padres primero»; `MermaidDiagram` **erDiagram** refuerzo (cardinalidad 1:N); malas prácticas |
| 2 | 11. Tipos de datos SQL | card | Catálogo prose; `CodeFiddle` SQL tipos justificados (no todo VARCHAR) |
| 3 | 12. PK (Primary Key) | card | Prose + malas prácticas; sin fiddle obligatorio |
| 4 | 13. FK e integridad referencial | card | `CodeFiddle` SQL demo huérfano comentado (rechazo FK); malas prácticas |

**Nota CodeFiddle §10:** el bloque `<!-- code: sql -->` CREATE Estudiantes/Programas/Inscripciones del draft es subconjunto del CodeFiddle integral — **no** duplicar segundo fiddle; un solo `CodeFiddle` con el script completo del interactive. El snippet físico de pág. 1 (`CREATE Programas`) sí es fiddle aparte (ilustra nivel físico, no el script lab).

#### Página `practica-y-cierre`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Práctica guiada | card | `PracticeExercise` ×5 (accent) |
| 2 | Reto integrador | card | Enunciado prose + `ChallengeCard` «Diseño ER→SQL de Rutas Digitales / Andes Tech» |
| 3 | Cierre | card | 5 puntos prose + pregunta operativa |
| 4 | Miniquiz | card | `QuizSection` 5 ítems (única clave de clase) |

---

### MermaidDiagram (ADR 013)

Promesas visuales del draft → diagrama contiguo obligatorio; listas/tablas no sustituyen. **ER:** Mermaid `erDiagram` obligatorio en `diagramas-er` y refuerzo en `transformacion-tipos-llaves`. **Familias / estrella-copo:** Mermaid obligatorio en `familias-relacional-nosql-grafos`.

| id | Tipo | Página / ubicación | Clay / presentación |
|----|------|--------------------|---------------------|
| `mapa-leccion-disenar` | **`flowchart`** | Intro (`modelos-conceptual-logico-fisico`), **hero visual** de la clase | Contenedor `figure`: `div` blanco `rounded-lg p-4 my-6`. `title` + `description` del draft. **Sin** ClayCard envolvente. Título figure Montserrat/`primary` |
| `flujo-niveles-modelo` | **`flowchart`** | `modelos-conceptual-logico-fisico` §0 | `my-6` tras StepReveal; requisitos → conceptual → lógico → físico → prueba FK |
| `er-rutas-digitales` | **`erDiagram`** | `diagramas-er` §5 | `my-6` tras símbolos/ejemplo; hero ER de la página |
| `estrella-vs-copo` | **`flowchart`** | `familias-relacional-nosql-grafos` §9 | `my-6` tras intro ASCII; subgraphs Estrella / Copo |
| `mindmap-familias-bi` | **`mindmap`** | `familias-relacional-nosql-grafos` §9 | `my-6` tras ejemplo academia; antes de CompareTable familias |
| `er-refuerzo-ddl` | **`erDiagram`** | `transformacion-tipos-llaves` §10 | `my-6` tras Callout padres / CodeFiddle; versión reducida (solo cardinalidad) |

**Reglas Mermaid:** sin entidades HTML en `chart`; comillas literales. Separar Mermaid intro → prose; en `familias-*` no apilar flowchart + mindmap sin prose entre medias; en `transformacion-*` no abrir con erDiagram (primero StepReveal + fiddle). Máx. un Mermaid “pesado” visible a la vez por scroll razonable.

---

### CompareTable styling

| id | Headers (resumen) | Página | Clay |
|----|-------------------|--------|------|
| `mapa-paginas-clase-04` | Página · Qué aprendes · Entregable mental (5 filas) | hub | `ClayCard` `my-8`; thead secondary; zebra `neutral-light` |
| `niveles-conceptual-logico-fisico` | Nivel · Qué representa · Quién lo usa · Ejemplo (3 filas) | `modelos-conceptual-logico-fisico` | Igual; cierra § físico |
| `familias-formas-bi` | Familia/forma · Organización · Fortaleza · Cuidado · Escenario PYME LATAM (6 filas) | `familias-relacional-nosql-grafos` | Igual; tras Mermaid mindmap; scroll horizontal mobile |

Tablas markdown del draft (símbolos ER, variantes NoSQL, catálogo tipos): prose o `CompareTable` compacta en `ClayCard` `my-6` si se promueven; thead siempre secondary. No cards en hero Mermaid.

---

### CodeFiddle (SQL — obligatorio)

Sustituir cada `<!-- code: sql -->` del draft por **`CodeFiddle`** `language="sql"`. El interactive CodeFiddle del draft se mantiene como fiddle canónico.

| id | Página / contexto |
|----|-------------------|
| `sql-create-programas-fisico` | `modelos-conceptual-logico-fisico` — CREATE Programas (ilustra nivel físico) |
| `sql-academia-rutas-er` | `transformacion-tipos-llaves` — script integral ER→SQL (`academia_rutas_er.sql`) |
| `sql-tipos-justificados` | `transformacion-tipos-llaves` — columnas tipadas (no todo VARCHAR) |
| `sql-fk-huerfano` | `transformacion-tipos-llaves` — INSERT huérfano comentado (debe fallar) |

**Clay:** superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; no ClayCard padre. Sin entidades HTML en `code`. En `transformacion-tipos-llaves`: prose breve entre fiddle integral → tipos → FK; no apilar los tres sin aire.

**Títulos sugeridos:** `CREATE TABLE Programas (físico)`, `academia_rutas_er.sql`, `Tipos justificados`, `INSERT huérfano (FK)`.

---

### StepReveal

| id | Título draft | Página | Clay |
|----|--------------|--------|------|
| `whatsapp-a-create` | Del WhatsApp al CREATE TABLE (5 pasos) | `modelos-conceptual-logico-fisico` §0 | Variante **stepper**; barra activa `--color-secondary`; H3 interactivo primary; **sin** ClayCard padre extra. Antes del Mermaid flujo de niveles |
| `checklist-er-tablas` | Checklist ER → tablas (6 pasos) | `transformacion-tipos-llaves` §10 | Igual; abre la sección antes del CodeFiddle integral |

---

### PracticeExercise, ChallengeCard, QuizSection

| Componente | Variante / borde | Notas de layout |
|------------|------------------|-----------------|
| `PracticeExercise` ×5 | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` | Solo en `practica-y-cierre`. Título H3 interactivo `text-lg font-semibold primary`. Apilar con `my-8`; hints colapsables sin segundo clay |
| `ChallengeCard` | `ClayCard` `my-8` + borde accent; badge dificultad «integrador» secondary/accent suave | «Diseño ER→SQL de Rutas Digitales / Andes Tech»; acceptanceCriteria como lista. No anidar Callout |
| `QuizSection` | `ClayCard` `my-8` | H2 «Miniquiz»; 5 ítems; opciones radio en superficie blanca; feedback post-respuesta sin card anidada. **Única** instancia de quiz de la clase |

---

### Callout types

| id | Título draft | Tipo | Borde | Página | Motivo visual |
|----|--------------|------|-------|--------|---------------|
| `disenar-antes-de-crear` | Diseñar antes de crear | **callout-warning** | accent `#6B4EFF` | `modelos-conceptual-logico-fisico` (abre, tras Mermaid mapa) | Plano vs edificio; frena prisa al CREATE |
| `checklist-mental-clase-04` | Checklist mental de la clase | **callout-warning** | accent | hub | Validación niveles + FK + N:M + anti-VARCHAR |
| `tip-padres-primero` | Tip: padres primero | **callout-info** | secondary `#00C2FF` | `transformacion-tipos-llaves` §10 | Tras CodeFiddle integral; orden DDL |

Todos: `ClayCard` + `border-l-4` + `my-6`. Máx. un callout por sección H2 de concepto. No callout danger en esta clase (sin UPDATE/DELETE masivo).

---

### Jerarquía h2 / h3

| Nivel | Clases | Color | Uso |
|-------|--------|-------|-----|
| H1 | `text-3xl font-bold` + font-heading | inherit (en clay) | Título de página en `ClassPageLayout` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | Una sección TSX = un H2 (tabla clay_variants) |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | Qué es, Para qué, Cómo, Ejemplo, Señales, Malas prácticas |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Títulos StepReveal, Practice, Challenge, Quiz |
| H4 | `mb-2 font-semibold` | inherit | Subtítulos de caso (Rutas Digitales, Andes Tech) |
| Cuerpo | `prose prose-slate` + `my-4` | neutral-dark | Narrativa LATAM, checklists |

**H2 por página:** respetar agrupación del draft por página ADR 011; no fusionar familias + transformación en un solo H2. Hub: objetivos + mapa CompareTable + nav. No promover cada H3 a ClayCard. En `diagramas-er`, un solo H2 de concepto (ER) pese a densidad de malas prácticas / caso.

**Ritmo anti-saturación por página:**

- Hub: objetivos → CompareTable → Callout → ClassPagesNav.
- `modelos-conceptual-logico-fisico`: Mermaid mapa + Callout → StepReveal + Mermaid flujo → prose conceptos (1–3) → fiddle físico + CompareTable niveles.
- `diagramas-er`: símbolos → erDiagram → malas prácticas → caso.
- `familias-relacional-nosql-grafos`: tres familias en prose → intro BI con Mermaid → CompareTable (aire entre Mermaids).
- `transformacion-tipos-llaves`: StepReveal → fiddle integral → Callout → erDiagram refuerzo → tipos → PK → FK (un fiddle por bloque).
- `practica-y-cierre`: Practice stack → Challenge → Cierre prose → Quiz (último bloque interactivo).

---

### Checklist componentes mapeados

| Componente | ¿Usado? | Dónde |
|------------|---------|-------|
| `ClassPageLayout` | Sí | Hub + 5 páginas |
| `ClayCard` | Sí | Wrappers CompareTable, Practice, Challenge, Quiz, Callout; secciones card |
| `Callout` | Sí | diseñar (warning) + checklist hub (warning) + padres primero (info) |
| `CompareTable` | Sí | 3 (mapa páginas; niveles; familias/formas) |
| `CodeFiddle` | Sí | SQL obligatorio: físico Programas + script ER→SQL + tipos + huérfano |
| `PracticeExercise` | Sí | ×5 en última página |
| `ChallengeCard` | Sí | Reto Diseño ER→SQL Rutas Digitales / Andes Tech |
| `QuizSection` | Sí | Miniquiz 5Q, solo última página |
| `MermaidDiagram` | Sí | flowchart mapa + flowchart niveles + erDiagram ×2 + flowchart estrella/copo + mindmap familias |
| `StepReveal` | Sí | WhatsApp→CREATE (5) + Checklist ER→tablas (6) |
| `ClassPagesNav` | Sí | Hub, 5 entradas |
