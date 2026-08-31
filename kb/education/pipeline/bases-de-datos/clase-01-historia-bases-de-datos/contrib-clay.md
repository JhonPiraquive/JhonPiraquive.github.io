## Clay UI

Contribución de **clay-ui-expert** para fusionar en `lesson-spec.md`.  
Tokens: `kb/brand/visual-tokens.md`. Reglas: ADR `kb/decisions/003-claymorphism-rules.md`. Visual obligatorio: ADR `kb/decisions/013-visuales-obligatorios-en-lecciones.md` (timeline → `MermaidDiagram` tipo `timeline`).

### Tokens y profundidad

| Token / regla | Valor | Uso |
|---------------|-------|-----|
| `--color-primary` | `#0A2540` | H2, títulos internos de StepReveal / PracticeExercise / ChallengeCard / Quiz |
| `--color-secondary` | `#00C2FF` | Callout info, thead CompareTable, barra activa StepReveal |
| `--color-accent` | `#6B4EFF` | Callout warning, borde PracticeExercise / ChallengeCard |
| `--color-neutral-light` | `#F4F6F8` | Fondo página, filas alternas de tablas |
| `--color-neutral-dark` | `#1E293B` | Superficie CodeFiddle |
| `--clay-radius` | 20–28px | ClayCard, inputs, fiddles |
| Profundidad clay | máx. 2 niveles | N1: LessonLayout; N2: un interactivo por bloque |

**Espaciado:** párrafos `my-4`; Callout / Mermaid / CodeFiddle `my-6`; ClayCard wrappers (CompareTable, Practice, Challenge, Quiz) `my-8`. No anidar Mermaid ni CodeFiddle dentro de un ClayCard extra.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

---

### clay_variants por sección

| Orden | Sección (H2) | `clay_variant` | Bloques Clay / interactivos |
|-------|--------------|----------------|------------------------------|
| 1 | Objetivos de aprendizaje | — (prose) | Lista objetivos; prerrequisitos en prose |
| 2 | Introducción: por qué la historia importa hoy | stepper | `MermaidDiagram` **timeline** (hero visual) + `StepReveal` 7 pasos |
| 3 | 1. Archivos planos / pre-BD | card | Tablas prose → o CompareTable ligeras; `Callout` warning «El museo vive en la PYME» |
| 4 | 2. Modelo jerárquico y red | card | Tablas / árbol ASCII en prose; sin callout draft |
| 5 | 3. Modelo relacional — Codd 1970 | card | `CodeFiddle` SQL; `Callout` info independencia |
| 6 | 4. Prototipos y SQL comercial | stepper | `CodeFiddle` SQL ×2; `CompareTable` navegacional vs relacional |
| 7 | 5. Imperio relacional | card | `MermaidDiagram` erDiagram mini-ER |
| 8 | 6. NoSQL y web-scale | card | `CodeFiddle` JSON |
| 9 | 7. Hoy — convergencia | card | `MermaidDiagram` mindmap familias |
| 10 | Comparación de modelos | card | `CompareTable` paisaje completo (9 filas) |
| 11 | Errores comunes | — (prose) | Checklist `ol` / `ul`; sin clay extra |
| 12 | Casos reales | card | Prose casos + `Callout` warning malas prácticas transversales |
| 13 | Práctica guiada | card | `PracticeExercise` ×5 (accent) |
| 14 | Reto integrador | card | Enunciado prose + `ChallengeCard` |
| 15 | Cierre | card | Arco 7 puntos prose |
| 16 | Miniquiz | card | `QuizSection` 5 ítems |

---

### MermaidDiagram — timeline (destacado visual)

**ADR 013:** el H4 «Línea de tiempo — siete etapas» promete cronología → **debe** renderizar `MermaidDiagram` tipo `timeline` contiguo; listas/tablas no sustituyen.

| id | Tipo | Ubicación | Clay / presentación |
|----|------|-----------|----------------------|
| `historia-bd-timeline` | **`timeline`** | Intro, **antes** del StepReveal | **Hero visual de la lección.** Contenedor `figure`: `div` blanco `rounded-lg p-4 my-6` (o `my-8` si abre sección). `title` + `description` del draft. **Sin** ClayCard envolvente (evita 3er nivel). Acento visual: título figure en Montserrat/`primary`; opcional borde sutil secondary en hover del figure, sin neón. |
| `mini-er-cliente-pedido` | `erDiagram` | §5 Imperio | `my-6` superficie blanca; párrafo puente previo |
| `mapa-familias-bd` | `mindmap` | §7 Hoy | `my-6` cierre conceptual; no apilar con timeline en la misma vista |

**Reglas Mermaid:** sin entidades HTML en `chart`; comillas literales. StepReveal «Qué problema resolvió cada etapa» = **acompaña** la timeline (secuencia guiada), no la reemplaza. Separar timeline → prose breve → StepReveal para no saturar profundidad.

---

### CompareTable styling

| id | Headers (resumen) | Clay |
|----|-------------------|------|
| `navegacional-vs-relacional-sql` | Aspecto · Navegacional · Relacional + SQL (5 filas) | `ClayCard` `my-8`; thead `border-b` / acento `--color-secondary`; filas zebra `neutral-light` |
| `comparacion-modelos-paisaje` | Modelo · Época · Acceso · Esquema · Integridad · Cuándo (9 filas) | Igual; scroll horizontal en mobile (`overflow-x-auto`); cabecera sticky opcional si el layout lo soporta |

Tablas markdown del draft (estructura/variantes/ventajas por etapa): prose o `CompareTable` compacta en `ClayCard` `my-6` si se promueven; thead siempre secondary. No cards en hero/timeline.

---

### CodeFiddle (SQL / JSON)

Sustituir `<!-- code: sql|json -->` del draft por **`CodeFiddle`** (no `CodeBlock` plano ni `<pre>` suelto).

| id | Lenguaje | Contexto visual |
|----|----------|-----------------|
| `sql-join-cali` | sql | §3 — ilustración declarativa |
| `sql-join-medellin` | sql | §4 — consulta histórica válida |
| `sql-schema-agregacion` | sql | §4 — CREATE/INSERT/SELECT (bloque largo) |
| `json-documento-cliente` | json | §6 — documento desnormalizado |

**Clay:** superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; no ClayCard padre. Sin entidades HTML en `code`.

---

### PracticeExercise, QuizSection, ChallengeCard

| Componente | Variante / borde | Notas de layout |
|------------|------------------|-----------------|
| `PracticeExercise` ×5 | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` | Título H3 interactivo `text-lg font-semibold primary`. Apilar con `my-8` entre ejercicios; hints colapsables sin segundo clay. |
| `ChallengeCard` | `ClayCard` `my-8` + borde accent; badge dificultad «integrador» secondary/accent suave | Enunciado prose del reto **fuera** o dentro del card según patrón track; acceptanceCriteria como lista. No anidar Callout dentro. |
| `QuizSection` | `ClayCard` `my-8` (como `Quiz`) | H2 «Miniquiz»; opciones radio en superficie blanca; feedback post-respuesta sin card anidada. |

---

### Callout types

| id | Título draft | Tipo | Borde | Motivo visual |
|----|--------------|------|-------|---------------|
| `museo-vive-pyme` | El museo vive en la PYME | **callout-warning** | accent `#6B4EFF` | Anti-patrón vigente; tono preventivo |
| `independencia-datos-frase` | Independencia de datos en una frase | **callout-info** | secondary `#00C2FF` | Concepto clave / guía |
| `malas-practicas-transversales` | Malas prácticas transversales | **callout-warning** | accent | Checklist de riesgos; cierre de casos |

Todos: `ClayCard` + `border-l-4` + `my-6`. Máx. un callout por sección de etapa.

---

### Jerarquía h2 / h3

| Nivel | Clases | Color | Uso |
|-------|--------|-------|-----|
| H1 | `text-3xl font-bold` + font-heading | inherit (en clay) | Título lección en LessonLayout |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | Una sección TSX = un H2 (tabla clay_variants) |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | Qué es, Para qué, Cómo, Estructura, Tipos, Ventajas, Ejemplo, Señales, Malas prácticas |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Títulos StepReveal, Practice, Challenge, Quiz |
| H4 | `mb-2 font-semibold` | inherit | «Línea de tiempo — siete etapas»; subtítulos de caso |
| Cuerpo | `prose prose-slate` + `my-4` | neutral-dark | Narrativa LATAM, checklists |

**H2 sugeridos (draft `###` → sección):** Introducción…; 1–7 etapas (títulos del draft); Comparación de modelos; Errores comunes; Casos reales; Práctica guiada; Reto integrador («Elige el modelo para AndinaMarket»); Cierre; Miniquiz.

**H3 patrón por etapa (3–7):** Qué es → Para qué / Por qué → Cómo funciona → Estructura → Tipos → Ventajas y desventajas → Ejemplo → Señales → Malas prácticas. No promover cada H3 a ClayCard.

**Ritmo anti-saturación:** timeline (blanco) → StepReveal (stepper) → prose; CompareTable → CodeFiddle → Callout con prose entre medias; mindmap al final de §7 sin card padre compartido con el ER de §5.
