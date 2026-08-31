---
track: bases-de-datos
slug: clase-05-normalizacion-esquemas
title: "Normalización, desnormalización y copo de nieve: limpiar el diseño"
order: 6
prev: clase-04-modelos-datos-er/practica-y-cierre
next: clase-06-dcl-tcl-objetos-bd
tsx_target: src/components/teaching/lessons/bases-de-datos/clase-05-normalizacion-esquemas/
pagination: true
pagination_reason: ">8 secciones de concepto (~14 bloques) y ~>20 min de lectura continua (draft ~1000 líneas: redundancia/DF, 1FN–3FN+BCNF, desnormalización, estrella/copo + práctica); ADR 011 hub + 5 páginas"
showInTrackIndex_hub: true
showInTrackIndex_pages: false
audience: student
---

# Layout spec — Normalización, desnormalización y copo de nieve

## Decisión de paginación (ADR 011)

**Paginado: sí.**

| Criterio | Valor |
|----------|-------|
| Secciones de contenido (tabla abajo) | **14** (>8) |
| Lectura estimada | **>~50–70 min** si fuera monolítica |
| Páginas internas | **5** (+ hub) |
| Secciones por página | **2–5** (página `formas-normales-1-2-3` es la más densa) |
| Quiz | Solo en **última página** (`practica-y-cierre`), clave por **clase** |
| Shell | Hub → `LessonLayout`; páginas → `ClassPageLayout` |
| Nav | `class-navigation.ts` → `getPageNavChain()` / `CLASE_05` |
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
| `clase-05-normalizacion-esquemas` | Hub — Normalización, desnormalización y copo de nieve | ObjetivosSection, MapaClase05Section, ClassPagesNavSection | **true** | **LessonLayout** | `Clase05NormalizacionEsquemasHubLesson` |
| `clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional` | Del Excel sucio a las reglas del esquema | IntroMapaLeccionSection, DelExcelSucioSection, RedundanciaSection, DependenciaFuncionalSection | **false** | **ClassPageLayout** | `RedundanciaYDependenciaFuncionalPageLesson` |
| `clase-05-normalizacion-esquemas/formas-normales-1-2-3` | Visión general: cómo ejecutar las formas | VisionGeneralFormasSection, PrimeraFormaNormalSection, SegundaFormaNormalSection, TerceraFormaNormalSection, BcnfMencionSection | **false** | **ClassPageLayout** | `FormasNormales123PageLesson` |
| `clase-05-normalizacion-esquemas/desnormalizacion` | Desnormalización consciente · Snapshot de factura | DesnormalizacionSection | **false** | **ClassPageLayout** | `DesnormalizacionPageLesson` |
| `clase-05-normalizacion-esquemas/estrella-y-copo-de-nieve` | Esquema en estrella · Esquema en copo de nieve | EsquemaEstrellaSection, EsquemaCopoNieveSection | **false** | **ClassPageLayout** | `EstrellaYCopoDeNievePageLesson` |
| `clase-05-normalizacion-esquemas/practica-y-cierre` | Práctica, reto y cierre | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | **false** | **ClassPageLayout** | `PracticaYCierrePageLesson` |

**Breadcrumb:** `Clase 5 / Página X de 5` + título de página.

**Prev/next cadena de clase:**

| slug | prev | next |
|------|------|------|
| hub `clase-05-normalizacion-esquemas` | `clase-04-modelos-datos-er/practica-y-cierre` | `…/redundancia-y-dependencia-funcional` |
| `…/redundancia-y-dependencia-funcional` | hub | `…/formas-normales-1-2-3` |
| `…/formas-normales-1-2-3` | `…/redundancia-y-dependencia-funcional` | `…/desnormalizacion` |
| `…/desnormalizacion` | `…/formas-normales-1-2-3` | `…/estrella-y-copo-de-nieve` |
| `…/estrella-y-copo-de-nieve` | `…/desnormalizacion` | `…/practica-y-cierre` |
| `…/practica-y-cierre` | `…/estrella-y-copo-de-nieve` | **`clase-06-dcl-tcl-objetos-bd`** (hub; CTA fallback a mapa del módulo si clase-06 aún no publicada) |

Al publicar: `next` de clase-04 `practica-y-cierre` (y hub clase-04) → este hub vía `ALL_CLASSES` / `getPageNavChain()`.

---

## Hub — Clase05NormalizacionEsquemasHubLesson.tsx

```tsx
<ObjetivosSection />
<MapaClase05Section />
<ClassPagesNavSection track={meta.track} classSlug={CLASE_05.classSlug} pages={CLASE_05.pages} />
```

**TSX target:** `src/components/teaching/lessons/bases-de-datos/clase-05-normalizacion-esquemas/`

- Hub: `Clase05NormalizacionEsquemasHubLesson.tsx` · shell `LessonLayout`
- Páginas: `pages/{pagina}/*PageLesson.tsx` · shell `ClassPageLayout`
- Secciones compartidas: `sections/*.tsx` (reutilizar; no duplicar)
- Meta: `lesson-meta.ts` (hub + páginas) · nav: `src/components/teaching/lessons/bases-de-datos/class-navigation.ts` (`CLASE_05`)

**ClassPagesNav (5 entradas, sin cards en listado):**

| slug | title | description | ~min |
|------|-------|-------------|------|
| `redundancia-y-dependencia-funcional` | Del Excel sucio a las reglas del esquema | Anomalías de inserción/actualización/borrado y DF (A → B) | 15 |
| `formas-normales-1-2-3` | Formas normales 1FN, 2FN y 3FN | Checklist ejecutable 1FN→2FN→3FN + mención BCNF y SQL | 22 |
| `desnormalizacion` | Desnormalización consciente | Cuándo / por qué / riesgos; snapshot de factura | 12 |
| `estrella-y-copo-de-nieve` | Estrella y copo de nieve | Dims planas vs normalizadas en BI (no OLTP) | 12 |
| `practica-y-cierre` | Práctica, reto y cierre | Ejercicios, reto Rutas Digitales, cierre y miniquiz | 25 |

**CTA hub → primera página:** «Empezar: redundancia y dependencia funcional».

---

## Secciones (orden global)

| orden | heading | page | tsx_component | path | props / notes |
|-------|---------|------|---------------|------|---------------|
| 1 | Objetivos de aprendizaje | hub | ObjetivosSection | `sections/ObjetivosSection.tsx` | Objetivos ×6 + prerrequisitos (draft L32–46). Sin guía docente. |
| 2 | Objetivos y mapa de la clase | hub | MapaClase05Section | `sections/MapaClase05Section.tsx` | Intro hub (draft L75–77); **CompareTable** `mapa-paginas-clase-05`; **Callout** warning `checklist-mental-clase`. |
| — | Índice de páginas (hub) | hub | ClassPagesNavSection | `src/components/teaching/ClassPagesNavSection.tsx` | 5 páginas; descripciones breves; **sin cards** en listado. |
| 3 | Mapa de la lección — limpiar el diseño | redundancia-y-dependencia-funcional | IntroMapaLeccionSection | `sections/IntroMapaLeccionSection.tsx` | Intro hilo Rutas Digitales / Andes Tech (draft L50–56); **MermaidDiagram** flowchart `mapa-leccion-limpiar` (**hero** ADR 013); **Callout** warning `normalizar-no-odio-join`. Sin ClayCard envolvente del Mermaid. |
| 4 | Del Excel sucio a las reglas del esquema | redundancia-y-dependencia-funcional | DelExcelSucioSection | `sections/DelExcelSucioSection.tsx` | Qué/para qué/cómo (draft L101–115); **StepReveal** `sabana-a-dfs` (5 pasos); mini-chequeo. Sin H3 malas prácticas (marco). |
| 5 | Redundancia | redundancia-y-dependencia-funcional | RedundanciaSection | `sections/RedundanciaSection.tsx` | Tabla anomalías; ejemplo `Matriculas_Sucias`; señales; H3 Malas prácticas ×4; caso real teléfono Cali; mini-chequeo. |
| 6 | Dependencia funcional (DF) | redundancia-y-dependencia-funcional | DependenciaFuncionalSection | `sections/DependenciaFuncionalSection.tsx` | Qué/cómo detectar; ejemplos DF / parcial; **Callout** info `df-primero-jerga`; señales; H3 Malas prácticas ×3; mini-chequeo. |
| 7 | Visión general — cómo ejecutar las formas | formas-normales-1-2-3 | VisionGeneralFormasSection | `sections/VisionGeneralFormasSection.tsx` | Tabla 1FN/2FN/3FN/BCNF; **MermaidDiagram** `flujo-normalizacion-1fn-bcnf` (**obligatorio**); **StepReveal** `orden-pizarra-formas` (6); mini-chequeo. Sin H3 malas prácticas (marco). |
| 8 | 1FN (1NF — First Normal Form) | formas-normales-1-2-3 | PrimeraFormaNormalSection | `sections/PrimeraFormaNormalSection.tsx` | Checklist + antes/después; **CodeFiddle** `sql-rutas-1fn`; H3 Malas prácticas ×3. |
| 9 | 2FN (2NF — Second Normal Form) | formas-normales-1-2-3 | SegundaFormaNormalSection | `sections/SegundaFormaNormalSection.tsx` | Checklist + antes/después; **CodeFiddle** `sql-rutas-2fn`; H3 Malas prácticas ×3. |
| 10 | 3FN (3NF — Third Normal Form) | formas-normales-1-2-3 | TerceraFormaNormalSection | `sections/TerceraFormaNormalSection.tsx` | Checklist + antes/después; **CodeFiddle** `sql-rutas-3fn` + `sql-academia-rutas-norm` (prose breve entre fiddles; no apilar >3 sin aire); H3 Malas prácticas ×3. |
| 11 | BCNF — mención | formas-normales-1-2-3 | BcnfMencionSection | `sections/BcnfMencionSection.tsx` | Alcance pedagógico (reconocer síntoma); señales; H3 Malas prácticas ×2; mini-chequeo. |
| 12 | Desnormalización | desnormalizacion | DesnormalizacionSection | `sections/DesnormalizacionSection.tsx` | Qué/cómo decidir; **CodeFiddle** `sql-snapshot-factura`; **Callout** info `desnormalizar-no-odio-diseno`; **StepReveal** `decision-desnormalizar` (5); caso Andes Tech; señales; H3 Malas prácticas ×4. |
| 13 | Esquema en estrella | estrella-y-copo-de-nieve | EsquemaEstrellaSection | `sections/EsquemaEstrellaSection.tsx` | Hechos + dims planas; ASCII/prose; ejemplo academia; señales; H3 Malas prácticas ×3. |
| 14 | Esquema en copo de nieve (snowflake) | estrella-y-copo-de-nieve | EsquemaCopoNieveSection | `sections/EsquemaCopoNieveSection.tsx` | **MermaidDiagram** `estrella-vs-copo` (**obligatorio**); **CompareTable** `estrella-copo-oltp`; **Callout** info `estrella-no-er-operacional`; señales; H3 Malas prácticas ×3. |
| 15 | Práctica guiada | practica-y-cierre | PracticaGuiadaSection | `sections/PracticaGuiadaSection.tsx` | PracticeExercise ×5. |
| 16 | Reto integrador: De la sábana al esquema limpio | practica-y-cierre | RetoIntegradorSection | `sections/RetoIntegradorSection.tsx` | ChallengeCard. |
| 17 | Cierre | practica-y-cierre | CierreSection | `sections/CierreSection.tsx` | 5 ideas clave; pregunta operativa; CTA clase 06 / mapa módulo. |
| 18 | Miniquiz | practica-y-cierre | MiniquizFinalSection | `sections/MiniquizFinalSection.tsx` | QuizSection ×5 preguntas (clave clase). **Única** instancia de quiz. |

**Conteo:** 14 filas de contenido pedagógico (órdenes 1–14) + ClassPagesNav + 4 de práctica/cierre (15–18) · **18 entradas de sección TSX** (17 nuevas + ClassPagesNav reutilizado) · **5 páginas + 1 hub**.

H2 públicos según lesson-spec (sin prefijos «0.»–«10.» numéricos en UI; el orden lo da la página).

---

## Malas prácticas (H3 obligatorio por sección de concepto)

| Sección | H3 «Malas prácticas en el mundo real» | Escenarios (draft) |
|---------|--------------------------------------|--------------------|
| RedundanciaSection | ✓ | 4 (sábana Excel; Nombre_Programa en facturas sin política; curso1…curso3; “redundancia = malo siempre”) |
| DependenciaFuncionalSection | ✓ | 3 (3FN sin listar DFs; correlación≠DF; ignorar codigo_sede → ciudad) |
| PrimeraFormaNormalSection | ✓ | 3 (CSV en VARCHAR; JSON “ágil” sin criterio; curso1…curso5) |
| SegundaFormaNormalSection | ✓ | 3 (“ya partí tablas”; PK artificial; extraer de más y perder fecha) |
| TerceraFormaNormalSection | ✓ | 3 (ciudad/depto repetidos; 3FN dogmática; mezclar OLTP con hechos) |
| BcnfMencionSection | ✓ | 2 (exigir BCNF en CRUD simple; ignorar DF rara) |
| DesnormalizacionSection | ✓ | 4 (día 1 “por si acaso”; cupos divergentes; cache sin job; “no poner FK”) |
| EsquemaEstrellaSection | ✓ | 3 (OLTP como “estrella”; grano ambiguo; DW en misma carga) |
| EsquemaCopoNieveSection | ✓ | 3 (copo 8 niveles; snowflake en OLTP; “copo” = cualquier FK) |
| Intro / mapa / visión general / práctica / quiz | — | N/A (marcos + Callouts; caso real vive en RedundanciaSection / DesnormalizacionSection) |

Props tipadas: lista `{ situacion, error, consecuencia, correccion }[]` o prose `<ol>` — lesson-developer elige el patrón del track; **no omitir el H3**.

---

## Mapa de interactivos

### MermaidDiagram (ADR 013) — ×3

| id | sección | tipo chart | props |
|----|---------|------------|-------|
| `mapa-leccion-limpiar` | IntroMapaLeccionSection | `flowchart TD` | title/description/chart draft L58–63; **hero** de `redundancia-y-dependencia-funcional`; `figure` blanco `rounded-lg p-4 my-6`; **sin** ClayCard envolvente |
| `flujo-normalizacion-1fn-bcnf` | VisionGeneralFormasSection | `flowchart TD` | draft L271–276; **obligatorio** contiguo al H de visión general; no sustituir por lista/tabla sola |
| `estrella-vs-copo` | EsquemaCopoNieveSection | `flowchart LR` | draft L791–796; subgraphs Estrella / CopoDeNieve; **antes** de CompareTable |

Sin entidades HTML en `chart`. No apilar `flujo-normalizacion` + fiddles 1FN en el mismo viewport inicial (prose + StepReveal entre medias).

### CodeFiddle — ×5 (nunca CodeBlock)

Todos `language="sql"`. Props: `code`, `language`, opcional `title` / `filename`. `tsx_component: CodeFiddle` → `src/components/teaching/CodeFiddle.tsx`. Superficie `--color-neutral-dark`, radius 20–28px, `my-6`.

| id | sección | title sugerido | source |
|----|---------|----------------|--------|
| `sql-rutas-1fn` | PrimeraFormaNormalSection | Después 1FN — detalle atómico | draft L335–365 |
| `sql-rutas-2fn` | SegundaFormaNormalSection | Después 2FN — Programas + Inscripciones | draft L415–451 |
| `sql-rutas-3fn` | TerceraFormaNormalSection | Después 3FN — Sedes + Programas | draft L503–530 |
| `sql-academia-rutas-norm` | TerceraFormaNormalSection | Esqueleto 3FN — academia_rutas_norm | draft L534–596 |
| `sql-snapshot-factura` | DesnormalizacionSection | Snapshot de factura — desnormalización consciente | draft L671–690 |

Sentencias cubiertas: CREATE TABLE / FK post-1FN, post-2FN, post-3FN, esqueleto completo + INSERTs, snapshot `FacturaDetalle`.

### CompareTable — ×2

| id | sección | headers / rows |
|----|---------|----------------|
| `mapa-paginas-clase-05` | MapaClase05Section | Página · Qué aprendes · Entregable mental — 5 filas draft L79–88 |
| `estrella-copo-oltp` | EsquemaCopoNieveSection | Forma · Dimensiones · Fortaleza · Cuidado · Escenario PYME LATAM — 3 filas draft L800–807 |

ClayCard `my-8`; thead secondary; zebra `neutral-light`.

### StepReveal — ×3

| id | sección | props |
|----|---------|-------|
| `sabana-a-dfs` | DelExcelSucioSection | title + steps[5] draft L117–127; variante **stepper**; sin ClayCard padre extra |
| `orden-pizarra-formas` | VisionGeneralFormasSection | title + steps[6] draft L278–288; **después** del Mermaid de flujo |
| `decision-desnormalizar` | DesnormalizacionSection | title + steps[5] draft L698–708; **después** del Callout info |

### Callout — ×5

| id | sección | variant | title |
|----|---------|---------|-------|
| `checklist-mental-clase` | MapaClase05Section | `callout-warning` | Checklist mental de la clase |
| `normalizar-no-odio-join` | IntroMapaLeccionSection | `callout-warning` | Normalizar no es odio al JOIN |
| `df-primero-jerga` | DependenciaFuncionalSection | `callout-info` | Tip: DF primero, jerga después |
| `desnormalizar-no-odio-diseno` | DesnormalizacionSection | `callout-info` | Desnormalizar no es odio al diseño |
| `estrella-no-er-operacional` | EsquemaCopoNieveSection | `callout-info` | Estrella ≠ ER operacional |

Máx. un callout por H2 de concepto. Variantes existentes (`callout-info` / `callout-warning`); **no** hace falta `callout-danger` en esta clase.

### PracticeExercise — ×5 (`PracticaGuiadaSection`)

| # | tema | draft |
|---|------|-------|
| 1 | Anomalía de actualización (teléfono sede) | L841–850 |
| 2 | Esquema 1FN desde `'A, B'` + 2 INSERTs | L852–861 |
| 3 | Orden del procedimiento (sucia → DF → 1FN→2FN→3FN → BCNF) | L863–872 |
| 4 | Llevar PK compuesta + Nombre_Programa a 2FN (DDL) | L874–883 |
| 5 | Desnormalización consciente vs incorrecta + estrella/copo | L885–894 |

Props: `prompt`, `hints[]`, `expectedKeywords[]`, `successMessage`. Apilar con `my-8`.

### ChallengeCard — ×1

| id | sección | props |
|----|---------|-------|
| `sabana-esquema-limpio` | RetoIntegradorSection | title, difficulty=`integrador`, prompt, acceptanceCriteria[], hints[] — draft L910–929 |

### QuizSection — ×1 (5 preguntas)

| campo | valor |
|-------|-------|
| Componente | `QuizSection` → datos en `src/lib/teaching-quizzes/bases-de-datos.ts` |
| slug | `clase-05-normalizacion-esquemas` |
| track | `bases-de-datos` |
| Ubicación | Solo `MiniquizFinalSection` en `practica-y-cierre` |
| Preguntas | draft L945–1005 (DF; viola 2FN; desnormalización consciente; estrella vs copo; 1FN) |

**Prohibido:** QuizSection (u otro quiz) en hub o en las páginas 1–4.

---

## Bloques interactivos — props por sección

> **Regla:** todo `<!-- code: -->` → `CodeFiddle` (`code` + `language`).  
> **Regla:** promesa mapa / flujo normalización / estrella-copo → `MermaidDiagram` contiguo (ADR 013).  
> **Regla:** 1 export por archivo `.tsx` bajo `sections/` y `pages/`.  
> **Regla:** Quiz **solo** en `practica-y-cierre`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos | prose `<ul>` | 6 objetivos draft L34–39 |
| Prerrequisitos | prose `<ul>` | clase-04 + vocabulario mínimo (draft L45–46) |

### `MapaClase05Section`

| id | componente | props |
|----|------------|-------|
| Intro hub | prose | draft L75–77 |
| `mapa-paginas-clase-05` | `CompareTable` | draft L79–88 |
| `checklist-mental-clase` | `Callout` | `variant="callout-warning"`; draft L90–94 |

### `IntroMapaLeccionSection`

| id | componente | props |
|----|------------|-------|
| Intro hilo | prose | draft L50–56 |
| `mapa-leccion-limpiar` | `MermaidDiagram` | `flowchart TD` draft L58–63 |
| `normalizar-no-odio-join` | `Callout` | `variant="callout-warning"`; draft L66–69 |

### `DelExcelSucioSection`

| id | componente | props |
|----|------------|-------|
| Qué / para qué / cómo | prose | draft L101–115 |
| `sabana-a-dfs` | `StepReveal` | 5 pasos draft L117–127 |
| Mini-chequeo | prose | draft L129–131 |

### `RedundanciaSection`

| id | componente | props |
|----|------------|-------|
| Qué / anomalías / detección / ejemplo | prose + tablas | draft L135–173 |
| Señales | prose | draft L170–173 |
| Malas prácticas H3 | prose `<ol>` o lista tipada | 4 escenarios draft L175–180 |
| Caso real | prose | draft L182–190 |
| Mini-chequeo | prose | draft L192–194 |

### `DependenciaFuncionalSection`

| id | componente | props |
|----|------------|-------|
| Qué / detección / ejemplos DF | prose | draft L198–223 |
| `df-primero-jerga` | `Callout` | `variant="callout-info"`; draft L225–229 |
| Señales + Malas prácticas H3 | prose | draft L231–240 |
| Mini-chequeo | prose | draft L242–244 |

### `VisionGeneralFormasSection`

| id | componente | props |
|----|------------|-------|
| Tabla formas + para qué | prose + tabla | draft L252–267 |
| `flujo-normalizacion-1fn-bcnf` | `MermaidDiagram` | `flowchart TD` draft L271–276 |
| `orden-pizarra-formas` | `StepReveal` | 6 pasos draft L278–288 |
| Mini-chequeo | prose | draft L291–293 |

### `PrimeraFormaNormalSection` / `SegundaFormaNormalSection`

Cada una: bloques qué/para qué/checklist + antes/después + **CodeFiddle** SQL + señales + H3 malas prácticas (draft L297–466).

### `TerceraFormaNormalSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos + ejemplo | prose + tabla | draft L470–501 |
| `sql-rutas-3fn` | `CodeFiddle` | `language="sql"` |
| `sql-academia-rutas-norm` | `CodeFiddle` | `language="sql"`; prose breve entre fiddles |
| Señales + Malas prácticas H3 | prose | draft L598–607 |
| Mini-chequeo | prose | draft L609–611 |

### `BcnfMencionSection`

| id | componente | props |
|----|------------|-------|
| Qué / alcance / cómo mencionar | prose | draft L615–629 |
| Señales + Malas prácticas H3 | prose | draft L631–639 |
| Mini-chequeo | prose | draft L641–643 |

### `DesnormalizacionSection`

| id | componente | props |
|----|------------|-------|
| Qué / cómo decidir / ejemplo snapshot | prose | draft L649–669 |
| `sql-snapshot-factura` | `CodeFiddle` | `language="sql"` |
| `desnormalizar-no-odio-diseno` | `Callout` | `variant="callout-info"` |
| `decision-desnormalizar` | `StepReveal` | 5 pasos |
| Caso real Andes Tech | prose | draft L710–718 |
| Señales + Malas prácticas H3 | prose | draft L720–730 |
| Mini-chequeo | prose | draft L732–734 |

### `EsquemaEstrellaSection`

| id | componente | props |
|----|------------|-------|
| Qué / ASCII / ejemplo / señales | prose | draft L740–775 |
| Malas prácticas H3 | prose | draft L767–771 |
| Mini-chequeo | prose | draft L773–775 |

### `EsquemaCopoNieveSection`

| id | componente | props |
|----|------------|-------|
| Qué / para qué | prose | draft L779–787 |
| `estrella-vs-copo` | `MermaidDiagram` | `flowchart LR` |
| `estrella-copo-oltp` | `CompareTable` | 3 filas |
| Ejemplo + señales | prose | draft L810–823 |
| `estrella-no-er-operacional` | `Callout` | `variant="callout-info"` |
| Malas prácticas H3 | prose | draft L825–829 |
| Mini-chequeo | prose | draft L831–833 |

### `PracticaGuiadaSection`

| id | componente | props |
|----|------------|-------|
| PracticeExercise ×5 | `PracticeExercise` | draft L841–894; `my-8` |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | draft L897–908 |
| `sabana-esquema-limpio` | `ChallengeCard` | draft L910–929 |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Arco 5 puntos | `<ol>` draft L933–939 |
| Pregunta operativa | prose draft L941 |
| Siguiente | `next: clase-06-dcl-tcl-objetos-bd` — CTA «Continuar a la Clase 06 — DCL, TCL y objetos»; si ausente: «Repasa el mapa del módulo Bases de Datos» |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Miniquiz» |
| Quiz | `<QuizSection slug="clase-05-normalizacion-esquemas" track="bases-de-datos" />` |

---

## lesson-meta fields

### Hub (`clase-05-normalizacion-esquemas`)

| Campo | Valor |
|-------|-------|
| `track` | `bases-de-datos` |
| `slug` | `clase-05-normalizacion-esquemas` |
| `title` | `Normalización, desnormalización y copo de nieve: limpiar el diseño` |
| `order` | `6` |
| `prev` | `clase-04-modelos-datos-er/practica-y-cierre` |
| `next` | `clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional` (cadena interna; track next clase = `clase-06-dcl-tcl-objetos-bd`) |
| `seoTitle` | `Normalización SQL: 1FN, 2FN, 3FN y DF` |
| `seoDescription` | `Aplica normalización con DF, 1FN–3FN y BCNF; argumenta desnormalización consciente; distingue estrella vs copo de nieve en BI con ejemplos LATAM.` |
| `showInTrackIndex` | **`true`** |
| `layout` | **`LessonLayout`** |
| `canonical_path` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/` |

### Páginas internas (todas)

| Campo | Valor |
|-------|-------|
| `showInTrackIndex` | **`false`** |
| `layout` | **`ClassPageLayout`** |
| `track` | `bases-de-datos` |
| Quiz slug | Solo página final referencia `clase-05-normalizacion-esquemas` |

| page slug | title (meta) | seoTitle |
|-----------|--------------|----------|
| `…/redundancia-y-dependencia-funcional` | Del Excel sucio a las reglas del esquema | Redundancia y dependencia funcional |
| `…/formas-normales-1-2-3` | Visión general: cómo ejecutar las formas | Formas normales 1FN, 2FN y 3FN |
| `…/desnormalizacion` | Desnormalización consciente · Snapshot de factura | Desnormalización consciente en SQL |
| `…/estrella-y-copo-de-nieve` | Esquema en estrella · Esquema en copo de nieve | Esquema en estrella y copo de nieve |
| `…/practica-y-cierre` | Práctica, reto y cierre | Práctica: normalización, BI y cierre |

---

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `Clase05NormalizacionEsquemasHubLesson.tsx` | default/hub | ObjetivosSection, MapaClase05Section, ClassPagesNavSection |
| `pages/redundancia-y-dependencia-funcional/RedundanciaYDependenciaFuncionalPageLesson.tsx` | page | IntroMapaLeccionSection, DelExcelSucioSection, RedundanciaSection, DependenciaFuncionalSection |
| `pages/formas-normales-1-2-3/FormasNormales123PageLesson.tsx` | page | VisionGeneralFormasSection, PrimeraFormaNormalSection, SegundaFormaNormalSection, TerceraFormaNormalSection, BcnfMencionSection |
| `pages/desnormalizacion/DesnormalizacionPageLesson.tsx` | page | DesnormalizacionSection |
| `pages/estrella-y-copo-de-nieve/EstrellaYCopoDeNievePageLesson.tsx` | page | EsquemaEstrellaSection, EsquemaCopoNieveSection |
| `pages/practica-y-cierre/PracticaYCierrePageLesson.tsx` | page | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection |
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | — |
| `sections/MapaClase05Section.tsx` | `MapaClase05Section` | CompareTable, Callout |
| `sections/IntroMapaLeccionSection.tsx` | `IntroMapaLeccionSection` | MermaidDiagram, Callout |
| `sections/DelExcelSucioSection.tsx` | `DelExcelSucioSection` | StepReveal |
| `sections/RedundanciaSection.tsx` | `RedundanciaSection` | — |
| `sections/DependenciaFuncionalSection.tsx` | `DependenciaFuncionalSection` | Callout |
| `sections/VisionGeneralFormasSection.tsx` | `VisionGeneralFormasSection` | MermaidDiagram, StepReveal |
| `sections/PrimeraFormaNormalSection.tsx` | `PrimeraFormaNormalSection` | CodeFiddle |
| `sections/SegundaFormaNormalSection.tsx` | `SegundaFormaNormalSection` | CodeFiddle |
| `sections/TerceraFormaNormalSection.tsx` | `TerceraFormaNormalSection` | CodeFiddle ×2 |
| `sections/BcnfMencionSection.tsx` | `BcnfMencionSection` | — |
| `sections/DesnormalizacionSection.tsx` | `DesnormalizacionSection` | CodeFiddle, Callout, StepReveal |
| `sections/EsquemaEstrellaSection.tsx` | `EsquemaEstrellaSection` | — |
| `sections/EsquemaCopoNieveSection.tsx` | `EsquemaCopoNieveSection` | MermaidDiagram, CompareTable, Callout |
| `sections/PracticaGuiadaSection.tsx` | `PracticaGuiadaSection` | PracticeExercise ×5 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | ChallengeCard |
| `sections/CierreSection.tsx` | `CierreSection` | — |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | QuizSection |

**Regla:** máximo **1 componente exportado** por archivo.

**No crear:** `GuiaDocenteSection`, tags MDX, `CodeBlock`. No poner Quiz fuera de `practica-y-cierre`.

---

## Registry notes

Registrar **6 entradas** en `teaching-lessons-registry`:

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-05-normalizacion-esquemas` | **true** | Hub de clase; listado portal; **LessonLayout** |
| 2 | `bases-de-datos/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional` | false | Página 1/5; Mermaid hero |
| 3 | `bases-de-datos/clase-05-normalizacion-esquemas/formas-normales-1-2-3` | false | Página 2/5; Mermaid flujo + CodeFiddle ×4 |
| 4 | `bases-de-datos/clase-05-normalizacion-esquemas/desnormalizacion` | false | Página 3/5; snapshot SQL |
| 5 | `bases-de-datos/clase-05-normalizacion-esquemas/estrella-y-copo-de-nieve` | false | Página 4/5; Mermaid estrella/copo |
| 6 | `bases-de-datos/clase-05-normalizacion-esquemas/practica-y-cierre` | false | Página 5/5; quiz clase |

También:

- `class-navigation.ts` → `CLASE_05` pages[] + `ALL_CLASSES`
- Quiz key `clase-05-normalizacion-esquemas` en `teaching-quizzes/bases-de-datos.ts`
- Legacy redirects hub + 5 subpáginas (lesson-spec)
- `next` de clase-04 `practica-y-cierre` → este hub
- Distinguir de POSW `/es/teaching/posw/bases-de-datos/`

---

## Checklist lesson-developer

- [ ] Hub `LessonLayout` + 5 PageLessons `ClassPageLayout` + breadcrumb `Clase 5 / Página X de 5`
- [ ] 17 sections en `sections/` + reutilizar `ClassPagesNavSection`
- [ ] Flowchart mapa + flujo 1FN→BCNF + estrella/copo (ADR 013); cero sustitución por lista sola
- [ ] 5× CodeFiddle SQL; cero CodeBlock
- [ ] 2× CompareTable; StepReveal ×3; ChallengeCard; PracticeExercise ×5
- [ ] Callout ×5 (warning ×2 + info ×3); sin danger en esta clase
- [ ] H3 Malas prácticas en las 9 secciones de concepto
- [ ] Quiz **solo** en `practica-y-cierre`; slug de clase
- [ ] `showInTrackIndex: true` solo hub; páginas `false`
- [ ] Hub `prev` ← `clase-04-modelos-datos-er/practica-y-cierre`; `practica-y-cierre` `next` → hub clase-06
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
| Secciones de contenido (tabla órdenes 1–14) | **14** (+ ClassPagesNav + práctica 15–18) |
| MermaidDiagram | 3 (mapa + **flujo normalización** + **estrella/copo**) |
| CodeFiddle | **5** (SQL) |
| CompareTable | 2 |
| StepReveal | 3 |
| PracticeExercise | 5 |
| ChallengeCard | 1 |
| Callout | 5 (warning ×2 + info ×3) |
| Quiz preguntas | 5 (solo última página) |
