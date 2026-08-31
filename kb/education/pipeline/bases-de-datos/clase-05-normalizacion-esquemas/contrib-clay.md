## Clay UI

Contribución de **clay-ui-expert** para fusionar en `lesson-spec.md`.  
Tokens: `kb/brand/visual-tokens.md`. Reglas: ADR `kb/decisions/003-claymorphism-rules.md`.  
Paginación: ADR `kb/decisions/011-clases-con-paginas-internas.md` → shell `ClassPageLayout`.  
Visual obligatorio: ADR `kb/decisions/013-visuales-obligatorios-en-lecciones.md` (mapa / flujo normalización / estrella-copo → `MermaidDiagram` contiguo).  
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
| Breadcrumb | `Clase 5 / Página X de 5` + título de página; tipografía Inter; acento primary en «Clase 5» |
| `ClassPagesNav` | Solo en **hub**; índice de **5** páginas con descripción breve; ítem hover secondary sutil; **sin** cards en el listado (enlaces tipográficos o fila compacta) |
| Prev / next | Cadena: hub → `redundancia-y-dependencia-funcional` → `formas-normales-1-2-3` → `desnormalizacion` → `estrella-y-copo-de-nieve` → `practica-y-cierre` → (hub clase-06 cuando exista); prev clase: `clase-04-modelos-datos-er`. Botones/links con radius clay, sin neón |
| Quiz | Una sola clave por clase; solo en `practica-y-cierre` |

**Cadena de páginas (slugs):**

| Página | Slug | Rol Clay |
|--------|------|----------|
| Hub | `clase-05-normalizacion-esquemas` | Objetivos + CompareTable mapa de páginas + Callout checklist + `ClassPagesNav` (5) |
| 1 / 5 | `redundancia-y-dependencia-funcional` | Intro Mermaid mapa + Callout normalizar; StepReveal sábana→DF; redundancia + DF + Callout tip DF |
| 2 / 5 | `formas-normales-1-2-3` | Mermaid flujo 1FN→BCNF + StepReveal pizarra + CodeFiddle ×4 (1FN/2FN/3FN/esqueleto) |
| 3 / 5 | `desnormalizacion` | CodeFiddle snapshot + Callout + StepReveal decisión consciente |
| 4 / 5 | `estrella-y-copo-de-nieve` | Estrella prose + Mermaid estrella/copo + CompareTable + Callout estrella≠ER |
| 5 / 5 | `practica-y-cierre` | Practice ×5 + Challenge + Quiz + cierre |

---

### clay_variants por página / sección

#### Hub

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Objetivos de aprendizaje | — (prose) o **card** grid opcional ×6 | Lista de 6 objetivos; sin Callout |
| 2 | Mapa de páginas de la lección | card | `CompareTable` 5 filas (página · qué aprendes · entregable); `Callout` **warning** checklist mental |
| 3 | Páginas de esta clase | — | `ClassPagesNav` (5 entradas); prerrequisitos en prose breve |

#### Página `redundancia-y-dependencia-funcional`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Introducción: limpiar el diseño | card | `MermaidDiagram` **flowchart** «Mapa de la lección» (**hero visual**); `Callout` **warning** «Normalizar no es odio al JOIN» |
| 2 | 0. Del Excel sucio a las reglas | stepper | `StepReveal` 5 pasos «De la sábana a las DFs» |
| 3 | 1. Redundancia | card | Tabla anomalías prose; malas prácticas; caso Rutas Digitales |
| 4 | 2. Dependencia funcional (DF) | card | Prose + `Callout` **info** «Tip: DF primero, jerga después»; malas prácticas |

#### Página `formas-normales-1-2-3`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | 3. Visión general — cómo ejecutar las formas | stepper | Tabla formas prose; `MermaidDiagram` **flowchart** 1FN→BCNF (**hero** de página); `StepReveal` 6 pasos «Orden de pizarra» |
| 2 | 4. 1FN | card | Checklist + antes/después; `CodeFiddle` SQL `rutas_1fn.sql` |
| 3 | 5. 2FN | card | Checklist + `CodeFiddle` SQL Programas + Inscripciones |
| 4 | 6. 3FN | card | Checklist + `CodeFiddle` SQL Sedes + Programas |
| 5 | 7. Esqueleto 3FN + BCNF | card | `CodeFiddle` SQL `academia_rutas_norm`; mención BCNF prose |

**Ritmo CodeFiddle:** prose breve entre fiddles 1FN → 2FN → 3FN → esqueleto; no apilar los cuatro sin aire. Máx. ~2 fiddles visibles a la vez por scroll razonable.

#### Página `desnormalizacion`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | 8. Desnormalización consciente | card | Prose cuándo/por qué/riesgos; `CodeFiddle` SQL snapshot factura; `Callout` **info** «Desnormalizar no es odio al diseño»; `StepReveal` 5 pasos decisión consciente; caso Andes Tech |

#### Página `estrella-y-copo-de-nieve`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | 9. Esquema en estrella | card | ASCII/prose + malas prácticas |
| 2 | 10. Esquema en copo de nieve | card | `MermaidDiagram` **flowchart** estrella vs copo; `CompareTable` estrella/copo/OLTP; `Callout` **info** «Estrella ≠ ER operacional»; malas prácticas |

**Ritmo Mermaid:** prose estrella → prose copo → Mermaid → CompareTable → Callout. No abrir la página con Mermaid sin intro.

#### Página `practica-y-cierre`

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Práctica guiada | card | `PracticeExercise` ×5 (accent) |
| 2 | Reto integrador | card | Enunciado prose + `ChallengeCard` «De la sábana al esquema limpio — Rutas Digitales / Andes Tech» |
| 3 | Cierre | card | 5 puntos prose + pregunta operativa |
| 4 | Miniquiz | card | `QuizSection` 5 ítems (única clave de clase) |

---

### MermaidDiagram (ADR 013)

Promesas visuales del draft → diagrama contiguo obligatorio; listas/tablas no sustituyen. **Flujo 1FN→BCNF** obligatorio en `formas-normales-1-2-3`. **Estrella vs copo** obligatorio en `estrella-y-copo-de-nieve`.

| id | Tipo | Página / ubicación | Clay / presentación |
|----|------|--------------------|---------------------|
| `mapa-leccion-limpiar` | **`flowchart`** | Intro (`redundancia-y-dependencia-funcional`), **hero visual** de la clase | Contenedor `figure`: `div` blanco `rounded-lg p-4 my-6`. `title` + `description` del draft. **Sin** ClayCard envolvente. Título figure Montserrat/`primary` |
| `flujo-normalizacion-1fn-bcnf` | **`flowchart`** | `formas-normales-1-2-3` § visión general | `my-6` tras tabla formas; antes o junto a StepReveal pizarra |
| `estrella-vs-copo` | **`flowchart`** | `estrella-y-copo-de-nieve` § copo | `my-6` tras intro ASCII; subgraphs Estrella / CopoDeNieve; antes de CompareTable |

**Reglas Mermaid:** sin entidades HTML en `chart`; comillas literales. Separar Mermaid intro → prose; en `formas-*` no apilar Mermaid + cuatro fiddles en el mismo viewport inicial. Máx. un Mermaid “pesado” visible a la vez por scroll razonable.

---

### CompareTable styling

| id | Headers (resumen) | Página | Clay |
|----|-------------------|--------|------|
| `mapa-paginas-clase-05` | Página · Qué aprendes · Entregable mental (5 filas) | hub | `ClayCard` `my-8`; thead secondary; zebra `neutral-light` |
| `estrella-copo-oltp` | Forma · Dimensiones · Fortaleza · Cuidado · Escenario PYME LATAM (3 filas) | `estrella-y-copo-de-nieve` | Igual; tras Mermaid; scroll horizontal mobile |

Tablas markdown del draft (anomalías, formas normales): prose o `CompareTable` compacta en `ClayCard` `my-6` si se promueven; thead siempre secondary. No cards en hero Mermaid.

---

### CodeFiddle (SQL — obligatorio)

Sustituir cada `<!-- code: sql -->` / CodeFiddle del draft por **`CodeFiddle`** `language="sql"`.

| id | Página / contexto |
|----|-------------------|
| `sql-rutas-1fn` | `formas-normales-1-2-3` — Después 1FN (`rutas_1fn.sql`) |
| `sql-rutas-2fn` | `formas-normales-1-2-3` — Después 2FN Programas + Inscripciones |
| `sql-rutas-3fn` | `formas-normales-1-2-3` — Después 3FN Sedes + Programas |
| `sql-academia-rutas-norm` | `formas-normales-1-2-3` — Esqueleto 3FN `academia_rutas_norm` |
| `sql-snapshot-factura` | `desnormalizacion` — Snapshot de factura consciente |

**Clay:** superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; no ClayCard padre. Sin entidades HTML en `code`. En `formas-normales-1-2-3`: prose breve entre los cuatro fiddles.

**Títulos sugeridos:** `Después 1FN`, `Después 2FN`, `Después 3FN`, `academia_rutas_norm`, `Snapshot de factura`.

---

### StepReveal

| id | Título draft | Página | Clay |
|----|--------------|--------|------|
| `sabana-a-dfs` | De la sábana a las DFs (5 pasos) | `redundancia-y-dependencia-funcional` §0 | Variante **stepper**; barra activa `--color-secondary`; H3 interactivo primary; **sin** ClayCard padre extra |
| `orden-pizarra-formas` | Orden de pizarra (6 pasos) | `formas-normales-1-2-3` § visión | Igual; tras Mermaid flujo |
| `decision-desnormalizar` | Decisión consciente de desnormalizar (5 pasos) | `desnormalizacion` | Igual; tras Callout / CodeFiddle snapshot |

---

### PracticeExercise, ChallengeCard, QuizSection

| Componente | Variante / borde | Notas de layout |
|------------|------------------|-----------------|
| `PracticeExercise` ×5 | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` | Solo en `practica-y-cierre`. Título H3 interactivo `text-lg font-semibold primary`. Apilar con `my-8`; hints colapsables sin segundo clay |
| `ChallengeCard` | `ClayCard` `my-8` + borde accent; badge dificultad «integrador» secondary/accent suave | «De la sábana al esquema limpio — Rutas Digitales / Andes Tech»; acceptanceCriteria como lista. No anidar Callout |
| `QuizSection` | `ClayCard` `my-8` | H2 «Miniquiz»; 5 ítems; opciones radio en superficie blanca; feedback post-respuesta sin card anidada. **Única** instancia de quiz de la clase |

---

### Callout types

| id | Título draft | Tipo | Borde | Página | Motivo visual |
|----|--------------|------|-------|--------|---------------|
| `normalizar-no-odio-join` | Normalizar no es odio al JOIN | **callout-warning** | accent `#6B4EFF` | `redundancia-y-dependencia-funcional` (abre, tras Mermaid mapa) | Frena dogma anti-JOIN / anti-desnormalizar |
| `checklist-mental-clase-05` | Checklist mental de la clase | **callout-warning** | accent | hub | DF + formas + política + BI≠OLTP |
| `tip-df-primero` | Tip: DF primero, jerga después | **callout-info** | secondary `#00C2FF` | `redundancia-y-dependencia-funcional` § DF | Ancla método antes de 2FN/3FN |
| `desnormalizar-no-odio` | Desnormalizar no es odio al diseño | **callout-info** | secondary | `desnormalizacion` | Tras snapshot; política vs accidente |
| `estrella-no-er` | Estrella ≠ ER operacional | **callout-info** | secondary | `estrella-y-copo-de-nieve` | Tras CompareTable |

Todos: `ClayCard` + `border-l-4` + `my-6`. Máx. un callout por sección H2 de concepto. No callout danger en esta clase (sin UPDATE/DELETE masivo destructivo).

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

**H2 por página:** respetar agrupación del draft por página ADR 011; no fusionar formas normales + desnormalización en un solo H2. Hub: objetivos + mapa CompareTable + nav. No promover cada H3 a ClayCard. En `formas-normales-1-2-3`, H2 por forma (1FN/2FN/3FN) pese a densidad de fiddles.

**Ritmo anti-saturación por página:**

- Hub: objetivos → CompareTable → Callout → ClassPagesNav.
- `redundancia-y-dependencia-funcional`: Mermaid mapa + Callout → StepReveal → prose redundancia → DF + Callout tip.
- `formas-normales-1-2-3`: Mermaid + StepReveal → fiddle 1FN → 2FN → 3FN → esqueleto (aire entre bloques).
- `desnormalizacion`: prose → fiddle snapshot → Callout → StepReveal → caso.
- `estrella-y-copo-de-nieve`: estrella prose → copo + Mermaid → CompareTable → Callout.
- `practica-y-cierre`: Practice stack → Challenge → Cierre prose → Quiz (último bloque interactivo).

---

### Checklist componentes mapeados

| Componente | ¿Usado? | Dónde |
|------------|---------|-------|
| `ClassPageLayout` | Sí | Hub + 5 páginas |
| `ClayCard` | Sí | Wrappers CompareTable, Practice, Challenge, Quiz, Callout; secciones card |
| `Callout` | Sí | normalizar (warning) + checklist hub (warning) + tip DF / desnormalizar / estrella (info ×3) |
| `CompareTable` | Sí | 2 (mapa páginas; estrella/copo/OLTP) |
| `CodeFiddle` | Sí | SQL obligatorio: 1FN + 2FN + 3FN + esqueleto + snapshot |
| `PracticeExercise` | Sí | ×5 en última página |
| `ChallengeCard` | Sí | Reto De la sábana al esquema limpio |
| `QuizSection` | Sí | Miniquiz 5Q, solo última página |
| `MermaidDiagram` | Sí | flowchart mapa + flowchart normalización + flowchart estrella/copo |
| `StepReveal` | Sí | sábana→DF (5) + orden pizarra (6) + decisión desnormalizar (5) |
| `ClassPagesNav` | Sí | Hub, 5 entradas |
