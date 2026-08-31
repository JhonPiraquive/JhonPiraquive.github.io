## Clay UI

Contribución de **clay-ui-expert** para fusionar en `lesson-spec.md`.  
Tokens: `kb/brand/visual-tokens.md`. Reglas: ADR `kb/decisions/003-claymorphism-rules.md`.  
Paginación: ADR `kb/decisions/011-clases-con-paginas-internas.md` → shell `ClassPageLayout`.  
Visual obligatorio: ADR `kb/decisions/013-visuales-obligatorios-en-lecciones.md` (mapa mental / flujo / ER → `MermaidDiagram` contiguo).

### Tokens y profundidad

| Token / regla | Valor | Uso |
|---------------|-------|-----|
| `--color-primary` | `#0A2540` | H2, títulos internos StepReveal / PracticeExercise / ChallengeCard / Quiz; breadcrumb énfasis |
| `--color-secondary` | `#00C2FF` | Callout info, thead CompareTable, barra activa StepReveal, página activa en `ClassPagesNav` |
| `--color-accent` | `#6B4EFF` | Callout warning, borde PracticeExercise / ChallengeCard |
| `--color-neutral-light` | `#F4F6F8` | Fondo página, filas alternas de tablas |
| `--color-neutral-dark` | `#1E293B` | Superficie CodeFiddle; cuerpo prose |
| `--clay-radius` | 20–28px | ClayCard, inputs, fiddles |
| Profundidad clay | máx. 2 niveles | N1: `ClassPageLayout`; N2: un interactivo / ClayCard por bloque |

**Espaciado:** párrafos `my-4`; Callout / Mermaid / CodeFiddle `my-6`; ClayCard wrappers (CompareTable, Practice, Challenge, Quiz) `my-8`. No anidar Mermaid ni CodeFiddle dentro de un ClayCard extra.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

---

### ClassPageLayout (ADR 011)

| Elemento | Clay / presentación |
|----------|---------------------|
| Shell | `ClassPageLayout` en hub + cada página de contenido; fondo `neutral-light` → blanco; sin 3er nivel clay en el chrome |
| Breadcrumb | `Clase 2 / Página X de 4` + título de página; tipografía Inter; acento primary en «Clase 2» |
| `ClassPagesNav` | Solo en **hub**; índice de 4 páginas con descripción breve; ítem hover secondary sutil; **sin** cards en el listado (enlaces tipográficos o fila compacta) |
| Prev / next | Cadena: hub → `que-es-y-tipos` → `motores-y-gestores` → `estructura-tablas-campos` → `practica-y-cierre` → (clase-03 cuando exista); botones/links con radius clay, sin neón |
| Quiz | Una sola clave por clase; solo en `practica-y-cierre` |

**Cadena de páginas (slugs):**

| Página | Slug | Rol Clay |
|--------|------|----------|
| Hub | `clase-02-fundamentos-motores-estructura` | Objetivos prose/grid ligero + `ClassPagesNav` |
| 1 / 4 | `que-es-y-tipos` | Conceptos BD/SGBD + relacional/NoSQL + CompareTable escenarios |
| 2 / 4 | `motores-y-gestores` | Motores + GUI + CLI + CompareTable roles |
| 3 / 4 | `estructura-tablas-campos` | StepReveal + CodeFiddle + ER Mermaid |
| 4 / 4 | `practica-y-cierre` | Practice ×5 + Challenge + Quiz + cierre |

---

### clay_variants por página / sección

#### Hub

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Objetivos de aprendizaje | — (prose) o **card** grid opcional ×5 | Lista de 5 objetivos; sin Callout |
| 2 | Páginas de esta clase | — | `ClassPagesNav` (4 entradas); prerrequisitos en prose breve |

#### Página `que-es-y-tipos`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Introducción: del mapa histórico al abecedario operativo | card | `MermaidDiagram` **mindmap** (hero visual de la clase) |
| 2 | 1. Qué es y para qué sirve una base de datos (BD) | card | Tablas prose; `Callout` warning «BD ≠ archivo compartido» |
| 3 | 2. SGBD — Sistema Gestor de Bases de Datos | card | `MermaidDiagram` **flowchart** cliente → motor |
| 4 | 3. Tipos — bases de datos relacionales | card | `CodeFiddle` SQL SELECT cupos |
| 5 | 4. Tipos — NoSQL (Not Only SQL) | card | `CompareTable` inventario vs catálogo; `CodeFiddle` JSON; `Callout` info escenarios |

#### Página `motores-y-gestores`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | 5. Motores / servidores — MySQL, MariaDB, MongoDB | card | Tablas prose motor/familia |
| 2 | 6. Gestores visuales — GUI | card | Tabla herramientas; sin callout draft |
| 3 | 7. CLI — Command Line Interface | card | `CodeFiddle` bash + SQL + bash mongosh |
| 4 | 8. Motor vs gestor visual vs CLI | card | `CompareTable` 3 roles; `Callout` warning «Diagnóstico rápido» |

#### Página `estructura-tablas-campos`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | 9. Estructura: tabla, campo, registro y valor | stepper | `StepReveal` 4 pasos; ASCII tabla en prose; `CodeFiddle` SQL CREATE/INSERT/SELECT; contraste incorrecto/correcto; `MermaidDiagram` **erDiagram** |
| 2 | Errores comunes | — (prose) | Checklist `ol`; sin clay extra |
| 3 | Casos reales | card | Prose casos Andes Tech / Catálogo Libre + `Callout` warning malas prácticas transversales |

#### Página `practica-y-cierre`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Práctica guiada | card | `PracticeExercise` ×5 (accent) |
| 2 | Reto integrador | card | Enunciado prose + `ChallengeCard` «Monta el criterio de Andes Tech» |
| 3 | Cierre | card | 5 puntos prose + puente a clase 03 |
| 4 | Miniquiz | card | `QuizSection` 5 ítems (única clave de clase) |

---

### MermaidDiagram (ADR 013)

Promesas visuales del draft → diagrama contiguo obligatorio; listas/tablas no sustituyen.

| id | Tipo | Página / ubicación | Clay / presentación |
|----|------|--------------------|---------------------|
| `mapa-capas-datos` | **`mindmap`** | Intro (`que-es-y-tipos`), **hero visual** | Contenedor `figure`: `div` blanco `rounded-lg p-4 my-6` (o `my-8` si abre sección). `title` + `description` del draft. **Sin** ClayCard envolvente. Título figure Montserrat/`primary`; borde sutil secondary en hover del figure |
| `flujo-cliente-motor` | **`flowchart`** | §2 SGBD | `my-6` superficie blanca; prose puente previo; no apilar con mindmap en el mismo viewport inicial |
| `er-programas` | **`erDiagram`** | §9 Estructura | `my-6` tras CodeFiddle principal; cierra el abecedario tabla→valor |

**Reglas Mermaid:** sin entidades HTML en `chart`; comillas literales. Separar mindmap → prose → flowchart entre secciones para no saturar profundidad. Máx. un Mermaid “pesado” visible a la vez por scroll razonable.

---

### CompareTable styling

| id | Headers (resumen) | Página | Clay |
|----|-------------------|--------|------|
| `inventario-vs-catalogo` | Escenario · Mejor encaje · Por qué (4 filas) | `que-es-y-tipos` §4 | `ClayCard` `my-8`; thead `border-b` / acento `--color-secondary`; filas zebra `neutral-light` |
| `motor-gui-cli` | Rol · Qué es · Qué estructura / administra · Ejemplos (3 filas) | `motores-y-gestores` §8 | Igual; scroll horizontal en mobile (`overflow-x-auto`) |

Tablas markdown del draft (composición BD, familias NoSQL, motores, GUI, CLI, elementos estructurales): prose o `CompareTable` compacta en `ClayCard` `my-6` si se promueven; thead siempre secondary. No cards en hero/mindmap.

---

### CodeFiddle (SQL / JSON / bash)

Sustituir `<!-- code: sql|json|bash -->` del draft por **`CodeFiddle`** (no `CodeBlock` plano ni `<pre>` suelto).

| id | Lenguaje | Página / contexto |
|----|----------|-------------------|
| `sql-select-cupos` | sql | §3 relacional — SELECT Nombre_Programa / cupos |
| `json-programa-flexible` | json | §4 NoSQL — documento ilustrativo |
| `bash-mariadb-connect` | bash | §7 CLI — `mariadb -u estudiante -p academia` |
| `sql-cli-select` | sql | §7 CLI — SELECT tras conectar |
| `bash-mongosh` | bash | §7 CLI — `mongosh` |
| `sql-programas-ddl-dml` | sql | §9 — CREATE / INSERT / SELECT Programas |
| `sql-literal-correcto` | sql | §9 — contraste incorrecto vs correcto de literales |

**Clay:** superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; no ClayCard padre. Sin entidades HTML en `code`. En §7, apilar bash→sql→bash con prose breve entre medias (no tres fiddles pegados sin aire).

---

### StepReveal

| id | Título draft | Página | Clay |
|----|--------------|--------|------|
| `tabla-a-valor-programas` | De la tabla al valor — Programas (4 pasos) | `estructura-tablas-campos` §9 | Variante **stepper**; barra activa `--color-secondary`; H3 interactivo primary; **sin** ClayCard padre extra (el StepReveal es el N2). ASCII de grilla en prose **después** del stepper, no dentro de un paso |

---

### PracticeExercise, ChallengeCard, QuizSection

| Componente | Variante / borde | Notas de layout |
|------------|------------------|-----------------|
| `PracticeExercise` ×5 | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` | Solo en `practica-y-cierre`. Título H3 interactivo `text-lg font-semibold primary`. Apilar con `my-8`; hints colapsables sin segundo clay |
| `ChallengeCard` | `ClayCard` `my-8` + borde accent; badge dificultad «integrador» secondary/accent suave | Enunciado prose del reto fuera o dentro según patrón track; acceptanceCriteria como lista. No anidar Callout |
| `QuizSection` | `ClayCard` `my-8` | H2 «Miniquiz»; 5 ítems; opciones radio en superficie blanca; feedback post-respuesta sin card anidada. **Única** instancia de quiz de la clase |

---

### Callout types

| id | Título draft | Tipo | Borde | Página | Motivo visual |
|----|--------------|------|-------|--------|---------------|
| `bd-no-es-archivo` | BD ≠ archivo compartido | **callout-warning** | accent `#6B4EFF` | `que-es-y-tipos` §1 | Anti-patrón Excel/Sheets |
| `inventario-vs-catalogo-frase` | Inventario vs catálogo flexible | **callout-info** | secondary `#00C2FF` | `que-es-y-tipos` §4 | Criterio de elección de modelo |
| `diagnostico-rapido` | Diagnóstico rápido | **callout-warning** | accent | `motores-y-gestores` §8 | Motor caído ≠ GUI rota |
| `malas-practicas-transversales` | Malas prácticas transversales | **callout-warning** | accent | `estructura-tablas-campos` casos | Checklist de riesgos; cierre de casos |

Todos: `ClayCard` + `border-l-4` + `my-6`. Máx. un callout por sección H2 de concepto.

---

### Jerarquía h2 / h3

| Nivel | Clases | Color | Uso |
|-------|--------|-------|-----|
| H1 | `text-3xl font-bold` + font-heading | inherit (en clay) | Título de página en `ClassPageLayout` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | Una sección TSX = un H2 (tabla clay_variants) |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | Qué es, Para qué, Cómo, Estructura, Tipos, Ventajas, Ejemplo, Señales, Malas prácticas |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Títulos StepReveal, Practice, Challenge, Quiz |
| H4 | `mb-2 font-semibold` | inherit | Subtítulos de caso (Andes Tech, Catálogo Libre) |
| Cuerpo | `prose prose-slate` + `my-4` | neutral-dark | Narrativa LATAM, checklists |

**H2 por página (draft `###` → sección):** respetar títulos del draft; no fusionar §1–4 en un solo H2. Hub: «Objetivos…» + nav. No promover cada H3 a ClayCard.

**Ritmo anti-saturación por página:**

- `que-es-y-tipos`: mindmap (blanco) → prose BD → Callout → flowchart SGBD → CodeFiddle SQL → CompareTable → JSON → Callout info.
- `motores-y-gestores`: prose motores/GUI → fiddles CLI → CompareTable roles → Callout warning.
- `estructura-tablas-campos`: StepReveal → ASCII → CodeFiddle(s) → erDiagram → checklist → casos + Callout.
- `practica-y-cierre`: Practice stack → Challenge → Cierre prose → Quiz (último bloque interactivo).

---

### Checklist componentes mapeados

| Componente | ¿Usado? | Dónde |
|------------|---------|-------|
| `ClassPageLayout` | Sí | Hub + 4 páginas |
| `ClayCard` | Sí | Wrappers CompareTable, Practice, Challenge, Quiz, Callout; secciones card |
| `Callout` | Sí | 4 (3 warning + 1 info) |
| `CompareTable` | Sí | 2 obligatorias (escenarios; motor/GUI/CLI) |
| `CodeFiddle` | Sí | SQL ×4+, JSON ×1, bash ×2 |
| `PracticeExercise` | Sí | ×5 en última página |
| `ChallengeCard` | Sí | Reto Andes Tech |
| `QuizSection` | Sí | Miniquiz 5Q, solo última página |
| `MermaidDiagram` | Sí | mindmap + flowchart + erDiagram |
| `StepReveal` | Sí | 4 pasos tabla→valor |
