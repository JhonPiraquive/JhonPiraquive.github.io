---
track: bases-de-datos
slug: clase-04-modelos-datos-er
title: "Modelos de datos, ER, familias y tipos: diseñar antes de crear"
order: 5
prev: clase-03-ddl-dml-relacional/practica-y-cierre
next: null
tsx_target: src/components/teaching/lessons/bases-de-datos/clase-04-modelos-datos-er/
pagination: true
pagination_reason: ">8 secciones de concepto (~21 bloques) y ~>20 min de lectura continua (draft ~1000 líneas: niveles conceptual/lógico/físico, ER, familias, transformación/tipos/PK/FK + práctica); ADR 011 hub + 5 páginas"
showInTrackIndex_hub: true
showInTrackIndex_pages: false
audience: student
---

# Layout spec — Modelos de datos, ER, familias y tipos

> **Nota:** `lesson-spec.md` aún no existía al generar este artefacto; layout fusiona `lesson-draft.md` + `contrib-brand` / `contrib-clay` / `contrib-seo` + patrón clase-03. Re-merge ligero si education publica spec después.

## Decisión de paginación (ADR 011)

**Paginado: sí.**

| Criterio | Valor |
|----------|-------|
| Secciones de contenido (tabla abajo) | **21** (>8) |
| Lectura estimada | **>~50–70 min** si fuera monolítica |
| Páginas internas | **5** (+ hub) |
| Secciones por página | **1–6** (densas: `modelos-conceptual-logico-fisico`, `transformacion-tipos-llaves`) |
| Quiz | Solo en **última página** (`practica-y-cierre`), clave por **clase** |
| Shell | Hub → `LessonLayout`; páginas → `ClassPageLayout` |
| Nav | `class-navigation.ts` → `getPageNavChain()` / `CLASE_04` |
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
| `clase-04-modelos-datos-er` | Hub — Modelos de datos, ER, familias y tipos | ObjetivosSection, MapaPaginasClase04Section, ClassPagesNavSection | **true** | **LessonLayout** | `Clase04ModelosDatosErHubLesson` |
| `clase-04-modelos-datos-er/modelos-conceptual-logico-fisico` | Modelos: conceptual, lógico y físico | IntroDisenarAntesSection, MapaRequisitoDdlSection, ModeloDatosSection, ModeloConceptualSection, ModeloLogicoSection, ModeloFisicoSection | **false** | **ClassPageLayout** | `ModelosConceptualLogicoFisicoPageLesson` |
| `clase-04-modelos-datos-er/diagramas-er` | Diagramas entidad-relación (ER) | DiagramaErSection | **false** | **ClassPageLayout** | `DiagramasErPageLesson` |
| `clase-04-modelos-datos-er/familias-relacional-nosql-grafos` | Familias: relacional, NoSQL y grafos | FamiliaRelacionalSection, FamiliaNosqlSection, FamiliaGrafosSection, IntroEstrellaCopoSection | **false** | **ClassPageLayout** | `FamiliasRelacionalNosqlGrafosPageLesson` |
| `clase-04-modelos-datos-er/transformacion-tipos-llaves` | Transformación ER→SQL, tipos y llaves | TransformacionErSqlSection, TiposDatosSqlSection, PrimaryKeyPkSection, ForeignKeyFkSection | **false** | **ClassPageLayout** | `TransformacionTiposLlavesPageLesson` |
| `clase-04-modelos-datos-er/practica-y-cierre` | Práctica y cierre | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | **false** | **ClassPageLayout** | `PracticaYCierrePageLesson` |

**Breadcrumb:** `Clase 4 / Página X de 5` + título de página (hub no cuenta como «Página X»).

**Prev/next cadena de clase:**

| slug | prev | next |
|------|------|------|
| hub `clase-04-modelos-datos-er` | `clase-03-ddl-dml-relacional/practica-y-cierre` | `…/modelos-conceptual-logico-fisico` |
| `…/modelos-conceptual-logico-fisico` | hub | `…/diagramas-er` |
| `…/diagramas-er` | `…/modelos-conceptual-logico-fisico` | `…/familias-relacional-nosql-grafos` |
| `…/familias-relacional-nosql-grafos` | `…/diagramas-er` | `…/transformacion-tipos-llaves` |
| `…/transformacion-tipos-llaves` | `…/familias-relacional-nosql-grafos` | `…/practica-y-cierre` |
| `…/practica-y-cierre` | `…/transformacion-tipos-llaves` | **`null`** (→ `clase-05-normalizacion-esquemas` cuando exista) |

Al publicar: `next` de clase-03 `practica-y-cierre` → este hub (vía `ALL_CLASSES` / `getPageNavChain()`).

---

## Hub — Clase04ModelosDatosErHubLesson.tsx

```tsx
<ObjetivosSection />
<MapaPaginasClase04Section />
<ClassPagesNavSection track={meta.track} classSlug={CLASE_04.classSlug} pages={CLASE_04.pages} />
```

**TSX target:** `src/components/teaching/lessons/bases-de-datos/clase-04-modelos-datos-er/`

- Hub: `Clase04ModelosDatosErHubLesson.tsx` · shell `LessonLayout`
- Páginas: `pages/{pagina}/*PageLesson.tsx` · shell `ClassPageLayout`
- Secciones compartidas: `sections/*.tsx` (reutilizar; no duplicar)
- Meta: `lesson-meta.ts` (hub + páginas) · nav: `src/components/teaching/lessons/bases-de-datos/class-navigation.ts` (`CLASE_04`)

**ClassPagesNav (5 entradas, sin cards en listado):**

| slug | title | description | ~min |
|------|-------|-------------|------|
| `modelos-conceptual-logico-fisico` | Modelos: conceptual, lógico y físico | Plano del negocio vs tipos SQL; del requisito al DDL | 18 |
| `diagramas-er` | Diagramas entidad-relación (ER) | Entidades, atributos, relaciones, cardinalidad y erDiagram | 15 |
| `familias-relacional-nosql-grafos` | Familias: relacional, NoSQL y grafos | Forma de pregunta + intro estrella / copo de nieve | 20 |
| `transformacion-tipos-llaves` | Transformación ER→SQL, tipos y llaves | ER → tablas, tipos, PK/FK, padres primero | 20 |
| `practica-y-cierre` | Práctica y cierre | Ejercicios, reto Rutas Digitales / Andes Tech, cierre y miniquiz | 25 |

**CTA hub → primera página:** «Empezar: modelos conceptual, lógico y físico».

---

## Secciones (orden global)

| orden | heading | page | tsx_component | path | props / notes |
|-------|---------|------|---------------|------|---------------|
| 1 | Objetivos de aprendizaje | hub | ObjetivosSection | `sections/ObjetivosSection.tsx` | Objetivos ×6 + prerrequisitos (draft L32–46). Sin guía docente. |
| 2 | Mapa de páginas de la lección | hub | MapaPaginasClase04Section | `sections/MapaPaginasClase04Section.tsx` | Intro hub (draft L75); **CompareTable** `mapa-paginas-clase-04`; **Callout** warning `checklist-mental-clase-04`. |
| — | Índice de páginas (hub) | hub | ClassPagesNavSection | `src/components/teaching/ClassPagesNavSection.tsx` | 5 páginas; descripciones breves; **sin cards** en listado. |
| 3 | Introducción: diseñar antes de crear | modelos-conceptual-logico-fisico | IntroDisenarAntesSection | `sections/IntroDisenarAntesSection.tsx` | Prose Rutas Digitales (draft L52–54); **MermaidDiagram** flowchart `mapa-leccion-disenar` (**hero** ADR 013); **Callout** warning `disenar-antes-de-crear`. Sin ClayCard envolvente del Mermaid. |
| 4 | Del requisito al DDL | modelos-conceptual-logico-fisico | MapaRequisitoDdlSection | `sections/MapaRequisitoDdlSection.tsx` | Qué/para qué/cómo (draft L99–114); **StepReveal** `whatsapp-a-create` (5 pasos); **MermaidDiagram** flowchart `flujo-niveles-modelo`; mini-chequeo. |
| 5 | Qué es un modelo de datos | modelos-conceptual-logico-fisico | ModeloDatosSection | `sections/ModeloDatosSection.tsx` | Bloques pedagógicos + ejemplo academia; H3 Malas prácticas ×4. |
| 6 | Modelo conceptual | modelos-conceptual-logico-fisico | ModeloConceptualSection | `sections/ModeloConceptualSection.tsx` | Qué/para qué/cómo/ejemplo/señales; H3 Malas prácticas ×3; mini-chequeo. |
| 7 | Modelo lógico | modelos-conceptual-logico-fisico | ModeloLogicoSection | `sections/ModeloLogicoSection.tsx` | Qué/para qué/cómo/ejemplo/señales; H3 Malas prácticas ×3; mini-chequeo. |
| 8 | Modelo físico | modelos-conceptual-logico-fisico | ModeloFisicoSection | `sections/ModeloFisicoSection.tsx` | **CodeFiddle** `sql-create-programas-fisico`; **CompareTable** `niveles-conceptual-logico-fisico`; H3 Malas prácticas ×4. |
| 9 | Diagrama entidad-relación (ER) | diagramas-er | DiagramaErSection | `sections/DiagramaErSection.tsx` | Tabla símbolos; **MermaidDiagram** erDiagram `er-rutas-digitales` (**hero** página); H3 Malas prácticas ×4; H4 caso «Rutas Digitales y la tabla Todo»; mini-chequeo. Un solo H2 de concepto. |
| 10 | Familia relacional | familias-relacional-nosql-grafos | FamiliaRelacionalSection | `sections/FamiliaRelacionalSection.tsx` | Prose PYME LATAM; H3 Malas prácticas ×3. Sin CodeFiddle (puente a pág. transformación). |
| 11 | Familia no relacional / NoSQL | familias-relacional-nosql-grafos | FamiliaNosqlSection | `sections/FamiliaNosqlSection.tsx` | Tabla variantes; cuándo sí/no; H3 Malas prácticas ×3. |
| 12 | Familia de grafos | familias-relacional-nosql-grafos | FamiliaGrafosSection | `sections/FamiliaGrafosSection.tsx` | Prose + H4 caso Andes Tech; H3 Malas prácticas ×3. |
| 13 | Intro: estrella frente a copo de nieve | familias-relacional-nosql-grafos | IntroEstrellaCopoSection | `sections/IntroEstrellaCopoSection.tsx` | Nota clase 5; ASCII breve; **MermaidDiagram** flowchart `estrella-vs-copo`; prose ejemplo; **MermaidDiagram** mindmap `mindmap-familias-bi`; **CompareTable** `familias-formas-bi`; H3 Malas prácticas ×3. **No** apilar Mermaids sin prose entre medias. |
| 14 | Transformación ER → SQL | transformacion-tipos-llaves | TransformacionErSqlSection | `sections/TransformacionErSqlSection.tsx` | Pasos 1–9; **StepReveal** `checklist-er-tablas` (6); **CodeFiddle** `sql-academia-rutas-er` (script integral — **no** duplicar el `<!-- code: sql -->` subconjunto); **Callout** info `tip-padres-primero`; **MermaidDiagram** erDiagram `er-refuerzo-ddl`; H3 Malas prácticas ×4. |
| 15 | Tipos de datos SQL: criterio de elección | transformacion-tipos-llaves | TiposDatosSqlSection | `sections/TiposDatosSqlSection.tsx` | Catálogo tipos; **CodeFiddle** `sql-tipos-justificados`; H3 Malas prácticas ×4. |
| 16 | Llave primaria (PK) | transformacion-tipos-llaves | PrimaryKeyPkSection | `sections/PrimaryKeyPkSection.tsx` | Reglas de diseño; sin fiddle obligatorio; H3 Malas prácticas ×3. |
| 17 | Llave foránea (FK) e integridad referencial | transformacion-tipos-llaves | ForeignKeyFkSection | `sections/ForeignKeyFkSection.tsx` | **CodeFiddle** `sql-fk-huerfano` (INSERT comentado); H3 Malas prácticas ×4. |
| 18 | Práctica guiada | practica-y-cierre | PracticaGuiadaSection | `sections/PracticaGuiadaSection.tsx` | PracticeExercise ×5. |
| 19 | Reto integrador: Diseño ER→SQL de Rutas Digitales / Andes Tech | practica-y-cierre | RetoIntegradorSection | `sections/RetoIntegradorSection.tsx` | Enunciado prose + ChallengeCard. |
| 20 | Cierre | practica-y-cierre | CierreSection | `sections/CierreSection.tsx` | 5 ideas clave; pregunta operativa; CTA módulo (`next: null`). |
| 21 | Miniquiz | practica-y-cierre | MiniquizFinalSection | `sections/MiniquizFinalSection.tsx` | QuizSection ×5 preguntas (clave clase). **Única** instancia de quiz. |

**Conteo:** 21 filas de contenido pedagógico + ClassPagesNav en hub · **22 entradas de sección TSX** (21 nuevas + ClassPagesNav reutilizado) · **5 páginas + 1 hub**.

H2 públicos según brand (sin prefijos «0.»–«13.» numéricos en UI; el orden lo da la página).

---

## Malas prácticas (H3 obligatorio por sección de concepto)

| Sección | H3 «Malas prácticas en el mundo real» | Escenarios (draft) |
|---------|--------------------------------------|--------------------|
| ModeloDatosSection | ✓ | 4 (tabla sábana; glosario; solo UI; WhatsApp→CREATE) |
| ModeloConceptualSection | ✓ | 3 (jerga columnas; omitir Excel; sin cardinalidad) |
| ModeloLogicoSection | ✓ | 3 (Excel celda=columna; 40 attrs; N:M como CSV) |
| ModeloFisicoSection | ✓ | 4 (código primero; FLOAT dinero; índices después; latin1) |
| DiagramaErSection | ✓ | 4 (N:M como 1:N; entidad=pantalla; multi-valor; sin PK) |
| FamiliaRelacionalSection | ✓ | 3 (FK solo en app; tabla gigante; denormalizar ciego) |
| FamiliaNosqlSection | ✓ | 3 (Mongo moda; nesting 5 niveles; dual truth) |
| FamiliaGrafosSection | ✓ | 3 (grafo para facturas; aristas sin tipo; ER 1:1 al grafo) |
| IntroEstrellaCopoSection | ✓ | 3 (copo en OLTP; «estrella»=cualquier FK; copo extremo) |
| TransformacionErSqlSection | ✓ | 4 (CSV N:M; FK en lado 1; puente sin UNIQUE; hijas primero) |
| TiposDatosSqlSection | ✓ | 4 (todo VARCHAR; FLOAT precios; CHAR(200); fechas texto) |
| PrimaryKeyPkSection | ✓ | 3 (PK=nombre; sin PK; reciclar IDs) |
| ForeignKeyFkSection | ✓ | 4 (tipos distintos; solo app; CASCADE ciego; NULL ambiguo) |
| Intro / mapa / hub / práctica / quiz | — | N/A (caso Todo en DiagramaErSection; caso Andes Tech en FamiliaGrafosSection) |

Props tipadas: lista `{ situacion, error, consecuencia, correccion }[]` o prose `<ol>` — lesson-developer elige el patrón del track; **no omitir el H3**.

---

## Mapa de interactivos

### MermaidDiagram (ADR 013) — ×6

| id | sección | tipo chart | props |
|----|---------|------------|-------|
| `mapa-leccion-disenar` | IntroDisenarAntesSection | `flowchart TD` | title/description/chart draft L56–61; **hero** de `modelos-conceptual-logico-fisico`; `figure` blanco `rounded-lg p-4 my-6`; **sin** ClayCard envolvente |
| `flujo-niveles-modelo` | MapaRequisitoDdlSection | `flowchart TD` | draft L128–133; tras StepReveal |
| `er-rutas-digitales` | DiagramaErSection | `erDiagram` | draft L360–365; **hero** de `diagramas-er`; tras símbolos/ejemplo |
| `estrella-vs-copo` | IntroEstrellaCopoSection | `flowchart LR` | draft L543–548; tras ASCII; subgraphs Estrella/Copo |
| `mindmap-familias-bi` | IntroEstrellaCopoSection | `mindmap` | draft L550–555; tras ejemplo academia; **antes** de CompareTable; prose entre Mermaids |
| `er-refuerzo-ddl` | TransformacionErSqlSection | `erDiagram` | draft L675–680; tras Callout padres / CodeFiddle integral; versión reducida (solo cardinalidad) |

Sin entidades HTML en `chart`. En `familias-*` no apilar flowchart + mindmap en el mismo viewport inicial. En `transformacion-*` no abrir con erDiagram (primero StepReveal + fiddle).

### CodeFiddle — ×4 (nunca CodeBlock)

Todos `language="sql"`. Props: `code`, `language`, opcional `title` / `filename`. `tsx_component: CodeFiddle` → `src/components/teaching/CodeFiddle.tsx`.

| id | sección | title sugerido | source |
|----|---------|----------------|--------|
| `sql-create-programas-fisico` | ModeloFisicoSection | CREATE TABLE Programas (físico) | draft L278–288 (`<!-- code: sql -->`) |
| `sql-academia-rutas-er` | TransformacionErSqlSection | academia_rutas_er.sql | draft L627–633 (interactive CodeFiddle; script completo) |
| `sql-tipos-justificados` | TiposDatosSqlSection | Tipos justificados (no todo VARCHAR) | draft L728–735 |
| `sql-fk-huerfano` | ForeignKeyFkSection | INSERT huérfano (FK) | draft L805–810 |

**Regla:** el bloque `<!-- code: sql -->` CREATE Estudiantes/Programas/Inscripciones (draft L635–665) es **subconjunto** del fiddle integral — **no** crear segundo fiddle. Un solo `sql-academia-rutas-er`.

### CompareTable — ×3

| id | sección | headers / rows |
|----|---------|----------------|
| `mapa-paginas-clase-04` | MapaPaginasClase04Section | Página · Qué aprendes · Entregable mental — 5 filas draft L77–86 |
| `niveles-conceptual-logico-fisico` | ModeloFisicoSection | Nivel · Qué representa · Quién lo usa · Ejemplo — 3 filas draft L294–301 |
| `familias-formas-bi` | IntroEstrellaCopoSection | Familia/forma · Organización · Fortaleza · Cuidado · Escenario PYME LATAM — 6 filas draft L563–573 |

ClayCard `my-8`; thead secondary; zebra `neutral-light`. Scroll horizontal en mobile para `familias-formas-bi`.

### StepReveal — ×2

| id | sección | props |
|----|---------|-------|
| `whatsapp-a-create` | MapaRequisitoDdlSection | title + steps[5] draft L116–126; variante **stepper**; **sin** ClayCard padre extra; **antes** de `flujo-niveles-modelo` |
| `checklist-er-tablas` | TransformacionErSqlSection | title + steps[6] draft L612–623; abre la sección **antes** de `sql-academia-rutas-er` |

### Callout — ×3

| id | sección | variant | title |
|----|---------|---------|-------|
| `checklist-mental-clase-04` | MapaPaginasClase04Section | `callout-warning` | Checklist mental de la clase |
| `disenar-antes-de-crear` | IntroDisenarAntesSection | `callout-warning` | Diseñar antes de crear |
| `tip-padres-primero` | TransformacionErSqlSection | `callout-info` | Tip: padres primero |

Máx. un callout por H2 de concepto. **Sin** `callout-danger` en esta clase.

### PracticeExercise — ×5 (`PracticaGuiadaSection`)

| # | tema | draft |
|---|------|-------|
| 1 | Conceptual → lógico → físico antes del SQL | L829–838 |
| 2 | erDiagram Programa–Estudiante–Inscripción + FK lado N | L840–849 |
| 3 | Orden requisitos → ER → padres → hijas → INSERT | L851–860 |
| 4 | N:M Programa–Instructor + puente (no CSV) | L862–871 |
| 5 | Elegir familia: facturas / sesión / quién estudió con quién | L873–883 |

Props: `prompt`, `hints[]`, `expectedKeywords[]`, `successMessage`. Apilar con `my-8`.

### ChallengeCard — ×1

| id | sección | props |
|----|---------|-------|
| `diseno-er-sql-rutas-andes` | RetoIntegradorSection | title, difficulty=`integrador`, prompt, acceptanceCriteria[], hints[] — draft L899–918 |

### QuizSection — ×1 (5 preguntas)

| campo | valor |
|-------|-------|
| Componente | `QuizSection` → datos en `src/lib/teaching-quizzes/bases-de-datos.ts` |
| slug | `clase-04-modelos-datos-er` |
| track | `bases-de-datos` |
| Ubicación | Solo `MiniquizFinalSection` en `practica-y-cierre` |
| Preguntas | draft L934–993 (conceptual vs físico; FK en 1:N; grafos; snowflake intro; N:M puente) |

**Prohibido:** QuizSection (u otro quiz) en hub o en las páginas 1–4.

---

## Bloques interactivos — props por sección

> **Regla:** todo `<!-- code: -->` → `CodeFiddle` (`code` + `language`), salvo el subconjunto DDL de transformación (absorbido por `sql-academia-rutas-er`).  
> **Regla:** promesa mapa / flujo / ER / familias / estrella-copo → `MermaidDiagram` contiguo (ADR 013).  
> **Regla:** 1 export por archivo `.tsx` bajo `sections/` y `pages/`.  
> **Regla:** Quiz **solo** en `practica-y-cierre`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos | prose `<ul>` | 6 objetivos draft L32–39 |
| Prerrequisitos | prose `<ul>` | clase-03 + vocabulario mínimo (draft L43–46) |

### `MapaPaginasClase04Section`

| id | componente | props |
|----|------------|-------|
| Intro hub | prose | draft L75 |
| `mapa-paginas-clase-04` | `CompareTable` | draft L77–86 |
| `checklist-mental-clase-04` | `Callout` | `variant="callout-warning"`; draft L89–93 |

### `IntroDisenarAntesSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L52–54 |
| `mapa-leccion-disenar` | `MermaidDiagram` | chart `flowchart TD` draft L56–61 |
| `disenar-antes-de-crear` | `Callout` | `variant="callout-warning"`; draft L63–67 |

### `MapaRequisitoDdlSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose | draft L99–114 |
| `whatsapp-a-create` | `StepReveal` | 5 pasos draft L116–126 |
| `flujo-niveles-modelo` | `MermaidDiagram` | draft L128–133 |
| Mini-chequeo | prose | draft L135–137 |

### `ModeloDatosSection` / `ModeloConceptualSection` / `ModeloLogicoSection`

Cada una: bloques qué/para qué/cómo + ejemplo + señales + H3 malas prácticas + mini-chequeo (draft L141–255). Sin Mermaid/CodeFiddle.

### `ModeloFisicoSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose | draft L259–274 |
| `sql-create-programas-fisico` | `CodeFiddle` | `language="sql"` |
| `niveles-conceptual-logico-fisico` | `CompareTable` | draft L294–301 |
| Malas prácticas H3 | prose | draft L309–314 |

### `DiagramaErSection`

| id | componente | props |
|----|------------|-------|
| Qué / para qué / pasos / símbolos | prose + tabla | draft L324–352 |
| Ejemplo academia | prose | draft L354–358 |
| `er-rutas-digitales` | `MermaidDiagram` | `erDiagram` draft L360–365 |
| Señales + Malas prácticas H3 | prose | draft L367–377 |
| Caso H4 tabla Todo | prose | draft L379–387 |
| Mini-chequeo | prose | draft L389–391 |

### `FamiliaRelacionalSection` / `FamiliaNosqlSection` / `FamiliaGrafosSection`

Prose + H3 malas prácticas (draft L397–513). `FamiliaGrafosSection` incluye H4 caso Andes Tech.

### `IntroEstrellaCopoSection`

| id | componente | props |
|----|------------|-------|
| Nota clase 5 + qué/para qué + ASCII | prose | draft L517–541 |
| `estrella-vs-copo` | `MermaidDiagram` | `flowchart LR` |
| Ejemplo academia | prose | draft L557–559 |
| `mindmap-familias-bi` | `MermaidDiagram` | `mindmap` |
| `familias-formas-bi` | `CompareTable` | 6 filas |
| Malas prácticas H3 | prose | draft L576–580 |

### `TransformacionErSqlSection`

| id | componente | props |
|----|------------|-------|
| Pasos transformación | prose `<ol>` | draft L600–610 |
| `checklist-er-tablas` | `StepReveal` | 6 pasos |
| `sql-academia-rutas-er` | `CodeFiddle` | `language="sql"`; `filename="academia_rutas_er.sql"` |
| `tip-padres-primero` | `Callout` | `variant="callout-info"` |
| `er-refuerzo-ddl` | `MermaidDiagram` | `erDiagram` reducido |
| Malas prácticas H3 | prose | draft L682–687 |

### `TiposDatosSqlSection` / `PrimaryKeyPkSection` / `ForeignKeyFkSection`

Tipos: catálogo + CodeFiddle. PK: prose. FK: CodeFiddle huérfano. Cada una con H3 malas prácticas (draft L695–821).

### `PracticaGuiadaSection`

| id | componente | props |
|----|------------|-------|
| PracticeExercise ×5 | `PracticeExercise` | draft L829–883; `my-8` |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | draft L885–897 |
| `diseno-er-sql-rutas-andes` | `ChallengeCard` | draft L899–918 |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Arco 5 puntos | `<ol>` draft L922–928 |
| Pregunta operativa | prose draft L930 |
| Siguiente | `next: null` — CTA «Repasa el mapa del módulo Bases de Datos» (brand); cuando exista clase-05 → «Continuar a la Clase 05 — Normalización y esquemas» |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Miniquiz» |
| Quiz | `<QuizSection slug="clase-04-modelos-datos-er" track="bases-de-datos" />` |

---

## lesson-meta fields

### Hub (`clase-04-modelos-datos-er`)

| Campo | Valor |
|-------|-------|
| `track` | `bases-de-datos` |
| `slug` | `clase-04-modelos-datos-er` |
| `title` | `Modelos de datos, ER, familias y tipos: diseñar antes de crear` |
| `order` | `5` |
| `prev` | `clase-03-ddl-dml-relacional/practica-y-cierre` |
| `next` | `clase-04-modelos-datos-er/modelos-conceptual-logico-fisico` (cadena interna; track next clase = `null`) |
| `seoTitle` | `Modelo de datos y ER: niveles, tipos y FK` |
| `seoDescription` | `Diseña modelos conceptual, lógico y físico; diagramas ER con cardinalidad; compara relacional, NoSQL y grafos; transforma ER→SQL con tipos, PK y FK.` |
| `showInTrackIndex` | **`true`** |
| `layout` | **`LessonLayout`** |
| `canonical_path` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/` |

### Páginas internas (todas)

| Campo | Valor |
|-------|-------|
| `showInTrackIndex` | **`false`** |
| `layout` | **`ClassPageLayout`** |
| `track` | `bases-de-datos` |
| Quiz slug | Solo página final referencia `clase-04-modelos-datos-er` |

| page slug | title (meta) | seoTitle |
|-----------|--------------|----------|
| `…/modelos-conceptual-logico-fisico` | Modelos: conceptual, lógico y físico | Modelo conceptual, lógico y físico |
| `…/diagramas-er` | Diagramas entidad-relación (ER) | Diagrama ER: entidades y cardinalidad |
| `…/familias-relacional-nosql-grafos` | Familias: relacional, NoSQL y grafos | Relacional, NoSQL, grafos y estrella |
| `…/transformacion-tipos-llaves` | Transformación ER→SQL, tipos y llaves | ER a SQL: tipos, PK y FK |
| `…/practica-y-cierre` | Práctica y cierre | Práctica: modelo ER, tipos y cierre |

---

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `Clase04ModelosDatosErHubLesson.tsx` | default/hub | ObjetivosSection, MapaPaginasClase04Section, ClassPagesNavSection |
| `pages/modelos-conceptual-logico-fisico/ModelosConceptualLogicoFisicoPageLesson.tsx` | page | IntroDisenarAntesSection, MapaRequisitoDdlSection, ModeloDatosSection, ModeloConceptualSection, ModeloLogicoSection, ModeloFisicoSection |
| `pages/diagramas-er/DiagramasErPageLesson.tsx` | page | DiagramaErSection |
| `pages/familias-relacional-nosql-grafos/FamiliasRelacionalNosqlGrafosPageLesson.tsx` | page | FamiliaRelacionalSection, FamiliaNosqlSection, FamiliaGrafosSection, IntroEstrellaCopoSection |
| `pages/transformacion-tipos-llaves/TransformacionTiposLlavesPageLesson.tsx` | page | TransformacionErSqlSection, TiposDatosSqlSection, PrimaryKeyPkSection, ForeignKeyFkSection |
| `pages/practica-y-cierre/PracticaYCierrePageLesson.tsx` | page | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection |
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | — |
| `sections/MapaPaginasClase04Section.tsx` | `MapaPaginasClase04Section` | CompareTable, Callout |
| `sections/IntroDisenarAntesSection.tsx` | `IntroDisenarAntesSection` | MermaidDiagram, Callout |
| `sections/MapaRequisitoDdlSection.tsx` | `MapaRequisitoDdlSection` | StepReveal, MermaidDiagram |
| `sections/ModeloDatosSection.tsx` | `ModeloDatosSection` | — |
| `sections/ModeloConceptualSection.tsx` | `ModeloConceptualSection` | — |
| `sections/ModeloLogicoSection.tsx` | `ModeloLogicoSection` | — |
| `sections/ModeloFisicoSection.tsx` | `ModeloFisicoSection` | CodeFiddle, CompareTable |
| `sections/DiagramaErSection.tsx` | `DiagramaErSection` | MermaidDiagram |
| `sections/FamiliaRelacionalSection.tsx` | `FamiliaRelacionalSection` | — |
| `sections/FamiliaNosqlSection.tsx` | `FamiliaNosqlSection` | — |
| `sections/FamiliaGrafosSection.tsx` | `FamiliaGrafosSection` | — |
| `sections/IntroEstrellaCopoSection.tsx` | `IntroEstrellaCopoSection` | MermaidDiagram ×2, CompareTable |
| `sections/TransformacionErSqlSection.tsx` | `TransformacionErSqlSection` | StepReveal, CodeFiddle, Callout, MermaidDiagram |
| `sections/TiposDatosSqlSection.tsx` | `TiposDatosSqlSection` | CodeFiddle |
| `sections/PrimaryKeyPkSection.tsx` | `PrimaryKeyPkSection` | — |
| `sections/ForeignKeyFkSection.tsx` | `ForeignKeyFkSection` | CodeFiddle |
| `sections/PracticaGuiadaSection.tsx` | `PracticaGuiadaSection` | PracticeExercise ×5 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | ChallengeCard |
| `sections/CierreSection.tsx` | `CierreSection` | — |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | QuizSection |

**Regla:** máximo **1 componente exportado** por archivo.

**No crear:** `GuiaDocenteSection`, tags MDX, `CodeBlock`. No poner Quiz fuera de `practica-y-cierre`. No duplicar fiddle DDL parcial de transformación.

**clay_variants:** `card`, `callout-warning`, `callout-info`, `stepper`.

---

## Registry notes

Registrar **6 entradas** en `teaching-lessons-registry`:

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-04-modelos-datos-er` | **true** | Hub de clase; listado portal; **LessonLayout** |
| 2 | `bases-de-datos/clase-04-modelos-datos-er/modelos-conceptual-logico-fisico` | false | Página 1/5 |
| 3 | `bases-de-datos/clase-04-modelos-datos-er/diagramas-er` | false | Página 2/5; Mermaid erDiagram hero |
| 4 | `bases-de-datos/clase-04-modelos-datos-er/familias-relacional-nosql-grafos` | false | Página 3/5; Mermaid ×2 + CompareTable |
| 5 | `bases-de-datos/clase-04-modelos-datos-er/transformacion-tipos-llaves` | false | Página 4/5; CodeFiddle ×3 + StepReveal |
| 6 | `bases-de-datos/clase-04-modelos-datos-er/practica-y-cierre` | false | Página 5/5; quiz clase |

También:

- `class-navigation.ts` → `CLASE_04` pages[] + `ALL_CLASSES`
- Quiz key `clase-04-modelos-datos-er` en `teaching-quizzes/bases-de-datos.ts`
- Legacy redirects hub + 5 subpáginas (contrib-seo)
- `next` de clase-03 `practica-y-cierre` → este hub
- Distinguir de POSW `/es/teaching/posw/bases-de-datos/`

---

## Checklist lesson-developer

- [ ] Hub `LessonLayout` + 5 PageLessons `ClassPageLayout` + breadcrumb `Clase 4 / Página X de 5`
- [ ] 21 sections en `sections/` + reutilizar `ClassPagesNavSection`
- [ ] Mermaid ×6: mapa + flujo niveles + erDiagram hero + estrella/copo + mindmap + erDiagram refuerzo (ADR 013)
- [ ] 4× CodeFiddle SQL; cero CodeBlock; no duplicar DDL parcial de transformación
- [ ] 3× CompareTable; StepReveal ×2; ChallengeCard; PracticeExercise ×5
- [ ] Callout warning ×2 + info ×1 (sin danger)
- [ ] H3 Malas prácticas en las 13 secciones de concepto
- [ ] Quiz **solo** en `practica-y-cierre`; slug de clase
- [ ] `showInTrackIndex: true` solo hub; páginas `false`
- [ ] Hub `prev` ← `clase-03-ddl-dml-relacional/practica-y-cierre`; `next` clase = `null`
- [ ] Contenido solo estudiante; 1 export / archivo
- [ ] clay: card / callout-warning / callout-info / stepper

---

## Resumen conteos

| Métrica | Cantidad |
|---------|----------|
| Paginación | **Sí** (ADR 011) |
| Hub | 1 (`LessonLayout`) |
| Páginas internas | **5** (`ClassPageLayout`) |
| Registry | **6** |
| Secciones de contenido (tabla) | **21** (+ ClassPagesNav) |
| MermaidDiagram | **6** (2 flowchart + 2 erDiagram + 1 flowchart estrella/copo + 1 mindmap) |
| CodeFiddle | **4** (SQL) |
| CompareTable | 3 |
| StepReveal | 2 |
| PracticeExercise | 5 |
| ChallengeCard | 1 |
| Callout | 3 (warning ×2 + info ×1) |
| Quiz preguntas | 5 (solo última página) |
