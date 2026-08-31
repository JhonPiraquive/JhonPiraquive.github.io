---
track: bases-de-datos
slug: clase-01-historia-bases-de-datos
title: "Historia de las bases de datos: de los archivos planos a la convergencia"
order: 2
prev: index
next: null
tsx_target: src/components/teaching/lessons/bases-de-datos/clase-01-historia-bases-de-datos/
pagination: true
pagination_reason: ">8 secciones de concepto (~16 bloques) y ~>20 min de lectura continua (draft ~870 líneas, 7 etapas + síntesis + práctica); ADR 011 hub + 5 páginas"
showInTrackIndex_hub: true
showInTrackIndex_pages: false
audience: student
---

# Layout spec — Historia de las Bases de Datos

## Decisión de paginación (ADR 011)

**Paginado: sí.**

| Criterio | Valor |
|----------|-------|
| Secciones de contenido (tabla abajo) | **16** (>8) |
| Lectura estimada | **>~45–60 min** si fuera monolítica |
| Páginas internas | **5** (+ hub) |
| Secciones por página | **2–4** |
| Quiz | Solo en **última página** (`practica-y-cierre`), clave por **clase** |
| Shell | Hub → `LessonLayout`; páginas → `ClassPageLayout` |
| Nav | `class-navigation.ts` → `getPageNavChain()` |
| Contenido | Solo estudiante (sin guía docente / entregas / lab) |

---

## Páginas

| page slug | título | secciones incluidas | layout | component |
|-----------|--------|---------------------|--------|-----------|
| `clase-01-historia-bases-de-datos` | Hub — Historia de las bases de datos | ObjetivosSection, ClassPagesNavSection | LessonLayout | `Clase01HistoriaBasesDeDatosHubLesson` |
| `clase-01-historia-bases-de-datos/linea-de-tiempo-y-archivos` | Línea de tiempo y archivos planos | PorQueLaHistoriaImportaSection, ArchivosPlanosSection | ClassPageLayout | `LineaDeTiempoYArchivosPageLesson` |
| `clase-01-historia-bases-de-datos/navegacion-y-codd` | Navegación por punteros y Codd 1970 | NavegacionalSection, ModeloRelacionalCoddSection | ClassPageLayout | `NavegacionYCoddPageLesson` |
| `clase-01-historia-bases-de-datos/sql-comercial-e-imperio` | SQL comercial e imperio relacional | SqlComercialSection, ImperioRelacionalSection | ClassPageLayout | `SqlComercialEImperioPageLesson` |
| `clase-01-historia-bases-de-datos/nosql-convergencia-y-sintesis` | NoSQL, convergencia y comparación | NosqlWebScaleSection, HoyConvergenciaSection, ComparacionModelosSection, ErroresYCasosSection | ClassPageLayout | `NosqlConvergenciaYSintesisPageLesson` |
| `clase-01-historia-bases-de-datos/practica-y-cierre` | Práctica, reto y cierre | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | ClassPageLayout | `PracticaYCierrePageLesson` |

**Breadcrumb:** `Clase 1 / Página X de 5` + título de página.

**Prev/next cadena de clase:**

| slug | prev | next |
|------|------|------|
| hub `clase-01-historia-bases-de-datos` | `index` | `…/linea-de-tiempo-y-archivos` |
| `…/linea-de-tiempo-y-archivos` | hub | `…/navegacion-y-codd` |
| `…/navegacion-y-codd` | `…/linea-de-tiempo-y-archivos` | `…/sql-comercial-e-imperio` |
| `…/sql-comercial-e-imperio` | `…/navegacion-y-codd` | `…/nosql-convergencia-y-sintesis` |
| `…/nosql-convergencia-y-sintesis` | `…/sql-comercial-e-imperio` | `…/practica-y-cierre` |
| `…/practica-y-cierre` | `…/nosql-convergencia-y-sintesis` | `null` (fin de track por ahora) |

---

## Hub — Clase01HistoriaBasesDeDatosHubLesson.tsx

```tsx
<ObjetivosSection />
<ClassPagesNavSection track={meta.track} classSlug={CLASE_01.classSlug} pages={CLASE_01.pages} />
```

**TSX target:** `src/components/teaching/lessons/bases-de-datos/clase-01-historia-bases-de-datos/`

- Hub: `Clase01HistoriaBasesDeDatosHubLesson.tsx`
- Páginas: `pages/{pagina}/*PageLesson.tsx`
- Secciones compartidas: `sections/*.tsx` (reutilizar; no duplicar)

---

## Secciones (orden global)

| orden | heading | page | tsx_component | props / notes |
|-------|---------|------|---------------|---------------|
| 1 | Objetivos de aprendizaje | hub (+ opcional echo en p1) | ObjetivosSection | Objetivos ×5 + prerrequisitos (draft L11–24). Sin guía docente. |
| 2 | Por qué la historia importa hoy | linea-de-tiempo-y-archivos | PorQueLaHistoriaImportaSection | Intro prose + **MermaidDiagram timeline** ADR 013 + StepReveal 7 pasos. |
| 3 | Archivos planos: el problema raíz | linea-de-tiempo-y-archivos | ArchivosPlanosSection | Etapa 1 completa; H3 Malas prácticas; Callout warning «El museo vive en la PYME». |
| 4 | Navegación por punteros: jerárquico y red | navegacion-y-codd | NavegacionalSection | Etapa 2; H3 Malas prácticas. |
| 5 | Codd 1970: el modelo relacional | navegacion-y-codd | ModeloRelacionalCoddSection | Etapa 3; CodeFiddle `sql-join-cali`; Callout info independencia; H3 Malas prácticas. |
| 6 | De la teoría al producto: System R, INGRES y Oracle | sql-comercial-e-imperio | SqlComercialSection | Etapa 4; CodeFiddle ×2; CompareTable navegacional vs SQL; H3 Malas prácticas. |
| 7 | El imperio relacional y el puente ER | sql-comercial-e-imperio | ImperioRelacionalSection | Etapa 5; MermaidDiagram erDiagram; H3 Malas prácticas. |
| 8 | NoSQL web-scale: escala y flexibilidad | nosql-convergencia-y-sintesis | NosqlWebScaleSection | Etapa 6; CodeFiddle json; Callout «Moda no es arquitectura» (warning/info); H3 Malas prácticas. |
| 9 | Hoy: NewSQL, cloud y convergencia | nosql-convergencia-y-sintesis | HoyConvergenciaSection | Etapa 7; MermaidDiagram mindmap; H3 Malas prácticas. |
| 10 | Comparación de modelos | nosql-convergencia-y-sintesis | ComparacionModelosSection | CompareTable paisaje 9 filas. |
| 11 | Errores comunes y casos reales | nosql-convergencia-y-sintesis | ErroresYCasosSection | Checklist + 2 casos LATAM + Callout warning transversales. |
| 12 | Práctica guiada | practica-y-cierre | PracticaGuiadaSection | PracticeExercise ×5. |
| 13 | Reto integrador: AndinaMarket | practica-y-cierre | RetoIntegradorSection | ChallengeCard. |
| 14 | Cierre | practica-y-cierre | CierreSection | 7 ideas clave; pregunta operativa; next=null. |
| 15 | Miniquiz | practica-y-cierre | MiniquizFinalSection | QuizSection ×5 preguntas (clave clase). |
| — | Índice de páginas (hub) | hub | ClassPagesNavSection | Shared teaching nav; no contenido pedagógico nuevo. |

**Conteo:** 15 filas de contenido pedagógico + ClassPagesNav en hub · **16 entradas de sección TSX** (15 nuevas + ClassPagesNav reutilizado) · **5 páginas + 1 hub**.

H2 públicos según lesson-spec (sin prefijos «1.»–«7.» numéricos en UI; el orden lo da la página).

---

## Malas prácticas (H3 obligatorio por etapa técnica)

| Sección | H3 «Malas prácticas en el mundo real» | Escenarios (draft) |
|---------|--------------------------------------|--------------------|
| ArchivosPlanosSection | ✓ | 3 (Sheets Bogotá, clínica Word, backup USB) |
| NavegacionalSection | ✓ | draft etapa 2 |
| ModeloRelacionalCoddSection | ✓ | 3 (JSON sábana, direcciones duplicadas, IDs inestables) |
| SqlComercialSection | ✓ | 3 (inyección, sin transacciones, over-engineering Oracle) |
| ImperioRelacionalSection | ✓ | 4 (Excel dump, sin FKs, root compartido, ER muerto) |
| NosqlWebScaleSection | ✓ | 4 (fintech docs, Cassandra 10GB, dual truth, sin índices) |
| HoyConvergenciaSection | ✓ | 4 (RDS abierto, embeddings PII, HTAP tumba OLTP, Spanner sin POC) |
| Intro / comparación / práctica / quiz | — | N/A (no son secciones de concepto de etapa) |

Props tipadas: lista de escenarios `{ situacion, error, consecuencia, correccion }[]` o prose `<ol>` — lesson-developer elige el patrón del track; **no omitir el H3**.

---

## Mapa de interactivos

### MermaidDiagram (ADR 013) — ×3

| id | sección | tipo chart | props |
|----|---------|------------|-------|
| `historia-bd-timeline` | PorQueLaHistoriaImportaSection | `timeline` | title/description/chart draft L36–41; **contiguo** al H «Línea de tiempo — siete etapas»; no sustituir por lista |
| `mini-er-cliente-pedido` | ImperioRelacionalSection | `erDiagram` | draft L470–475 |
| `familias-bd-mindmap` | HoyConvergenciaSection | `mindmap` | draft L607–612 |

Sin entidades HTML en `chart`.

### CodeFiddle — ×4 (nunca CodeBlock)

| id | sección | language | title sugerido | source |
|----|---------|----------|----------------|--------|
| `sql-join-cali` | ModeloRelacionalCoddSection | `sql` | Join pedidos de Cali | draft L272–280 |
| `sql-join-medellin` | SqlComercialSection | `sql` | Join clientes Medellín | draft L356–364 |
| `sql-schema-agregacion` | SqlComercialSection | `sql` | Esquema cliente/pedido + agregación | draft L368–397 |
| `json-documento-cliente` | NosqlWebScaleSection | `sql` → **`json`** | Documento cliente con pedidos embebidos | draft L512–521 |

Props: `code`, `language`, opcional `title`. `tsx_component: CodeFiddle`.

### CompareTable — ×2

| id | sección | headers / rows |
|----|---------|----------------|
| `navegacional-vs-relacional-sql` | SqlComercialSection | draft L410–420 |
| `paisaje-modelos-bd` | ComparacionModelosSection | draft L620–634 (9 modelos) |

### StepReveal — ×1

| id | sección | props |
|----|---------|-------|
| `problema-por-etapa` | PorQueLaHistoriaImportaSection | title + steps[7] draft L43–76 |

### Callout — ×4+

| id | sección | variant | title |
|----|---------|---------|-------|
| `museo-vive-en-pyme` | ArchivosPlanosSection | `callout-warning` | El museo vive en la PYME |
| `independencia-datos-frase` | ModeloRelacionalCoddSection | `callout-info` | Independencia de datos, en una frase |
| `moda-no-es-arquitectura` | NosqlWebScaleSection | `callout-warning` | Moda no es arquitectura (lesson-spec; copy desde señales/anti-patrones NoSQL) |
| `malas-practicas-transversales` | ErroresYCasosSection | `callout-warning` | Malas prácticas transversales (draft L673–677) |

### PracticeExercise — ×5 (`PracticaGuiadaSection`)

| # | tema | draft |
|---|------|-------|
| 1 | Ordenar 7 etapas + problema | L683–704 |
| 2 | Ferretería / Excel = 50s | L706–716 |
| 3 | Jerarquía alumnos–materias M:N | L718–728 |
| 4 | MongoDB para nómina | L730–740 |
| 5 | Independencia de datos / índice | L742–752 |

Props: `prompt`, `hints[]`, `expectedKeywords[]`, `successMessage`.

### ChallengeCard — ×1

| id | sección | props |
|----|---------|-------|
| `andinamarket-elige-modelo` | RetoIntegradorSection | title, difficulty, prompt, acceptanceCriteria[], hints[] — draft L775–792 |

### QuizSection — ×1 (5 preguntas)

| campo | valor |
|-------|-------|
| Componente | `QuizSection` → datos en `src/lib/teaching-quizzes/bases-de-datos.ts` |
| slug | `clase-01-historia-bases-de-datos` |
| track | `bases-de-datos` |
| Ubicación | Solo `MiniquizFinalSection` en `practica-y-cierre` |
| Preguntas | draft L810–869 (archivos planos, Codd vs IMS, System R/SQL, cuándo documentos, Excel=pre-BD) |

---

## Bloques interactivos — props por sección

> **Regla:** todo `<!-- code: -->` → `CodeFiddle` (`code` + `language`).  
> **Regla:** promesa «línea de tiempo» / «mapa mental» / ER → `MermaidDiagram` contiguo (ADR 013).  
> **Regla:** 1 export por archivo `.tsx` bajo `sections/` y `pages/`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos | prose `<ul>` | 5 objetivos draft L15–19 |
| Prerrequisitos | prose `<ul>` | hub index + sin SQL avanzado (draft L23–24) |

### `PorQueLaHistoriaImportaSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L30–32 |
| H3 Línea de tiempo | — | promesa visual |
| `historia-bd-timeline` | `MermaidDiagram` | chart `timeline` draft L36–41 |
| `problema-por-etapa` | `StepReveal` | steps[7] draft L43–76 |

### `ArchivosPlanosSection`

| id | componente | props |
|----|------------|-------|
| Qué es / Para qué / Cómo / Estructura / Tipos / Ventajas | prose + tablas | draft L82–121 |
| Ejemplo LATAM | prose | draft L123–125 |
| Señales | prose | draft L127–130 |
| Malas prácticas H3 | prose `<ol>` o lista tipada | 3 escenarios draft L132–136 |
| `museo-vive-en-pyme` | `Callout` | `variant="callout-warning"` |

### `NavegacionalSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos etapa 2 | prose + tablas | draft L146–215 |
| Malas prácticas H3 | — | draft L209+ |

### `ModeloRelacionalCoddSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos etapa 3 | prose + tablas | draft L217–267 |
| `sql-join-cali` | `CodeFiddle` | `language="sql"`; code draft L273–279 |
| Señales + Malas prácticas H3 | prose | draft L282–291 |
| `independencia-datos-frase` | `Callout` | `variant="callout-info"` |

### `SqlComercialSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos etapa 4 | prose + tablas | draft L301–353 |
| `sql-join-medellin` | `CodeFiddle` | `language="sql"` |
| `sql-schema-agregacion` | `CodeFiddle` | `language="sql"` |
| Señales + Malas prácticas H3 | prose | draft L399–408 |
| `navegacional-vs-relacional-sql` | `CompareTable` | draft L410–420 |

### `ImperioRelacionalSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos etapa 5 | prose + tablas | draft L424–468 |
| `mini-er-cliente-pedido` | `MermaidDiagram` | `erDiagram` draft L470–475 |
| Señales + Malas prácticas H3 | prose | draft L477–487 |

### `NosqlWebScaleSection`

| id | componente | props |
|----|------------|-------|
| Familias NoSQL | prose + tabla | draft L491–509 |
| `json-documento-cliente` | `CodeFiddle` | `language="json"` |
| Ventajas / ejemplo / señales | prose | draft L525–540 |
| Malas prácticas H3 | prose | draft L542–547 |
| `moda-no-es-arquitectura` | `Callout` | warning — no elegir motor por hype |

### `HoyConvergenciaSection`

| id | componente | props |
|----|------------|-------|
| NewSQL / cloud / HTAP / vectores | prose + tablas | draft L551–598 |
| Malas prácticas H3 | prose | draft L600–605 |
| `familias-bd-mindmap` | `MermaidDiagram` | `mindmap` draft L607–612 |

### `ComparacionModelosSection`

| id | componente | props |
|----|------------|-------|
| Intro decisión | prose | draft L618 |
| `paisaje-modelos-bd` | `CompareTable` | draft L620–634 |

### `ErroresYCasosSection`

| id | componente | props |
|----|------------|-------|
| Checklist errores | prose `<ol>` | 8 ítems draft L638–647 |
| Caso El Tornillo | prose | draft L653–661 |
| Caso RutaAndina | prose | draft L663–671 |
| `malas-practicas-transversales` | `Callout` | `variant="callout-warning"` |

### `PracticaGuiadaSection`

| id | componente | props |
|----|------------|-------|
| `practica-ordenar-etapas` … `practica-independencia` | `PracticeExercise` ×5 | draft L683–752; apilar con `my-8` |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado AndinaMarket | prose + `<ol>` | draft L756–773 |
| `andinamarket-elige-modelo` | `ChallengeCard` | draft L775–792 |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Arco 7 etapas | `<ol>` draft L796–804 |
| Pregunta operativa | prose draft L806 |
| Siguiente | `next: null` — invitar a volver al hub del módulo / próximas clases cuando existan |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Miniquiz» |
| Quiz | `<QuizSection slug="clase-01-historia-bases-de-datos" track="bases-de-datos" />` |

---

## lesson-meta fields

### Hub (`clase-01-historia-bases-de-datos`)

| Campo | Valor |
|-------|-------|
| `track` | `bases-de-datos` |
| `slug` | `clase-01-historia-bases-de-datos` |
| `title` | `Historia de las bases de datos: de los archivos planos a la convergencia` |
| `order` | `2` |
| `prev` | `index` |
| `next` | `clase-01-historia-bases-de-datos/linea-de-tiempo-y-archivos` (cadena interna; track next clase = `null`) |
| `seoTitle` | `Historia de las bases de datos: Codd, SQL y NoSQL` |
| `seoDescription` | `Historia de las bases de datos en 7 etapas: archivos planos, Codd, SQL, NoSQL y cloud. Aprende a elegir modelo con criterio, no por moda.` |
| `showInTrackIndex` | **`true`** |
| `layout` | `LessonLayout` |
| `canonical_path` | `/es/teaching/bases-de-datos/clase-01-historia-bases-de-datos/` |

### Páginas internas (todas)

| Campo | Valor |
|-------|-------|
| `showInTrackIndex` | **`false`** |
| `layout` | `ClassPageLayout` |
| `track` | `bases-de-datos` |
| SEO titles | Derivados del título de página + «\| Bases de datos» (lesson-developer) |
| Quiz slug | Solo página final referencia `clase-01-historia-bases-de-datos` |

| page slug | title (meta) |
|-----------|--------------|
| `…/linea-de-tiempo-y-archivos` | Línea de tiempo y archivos planos |
| `…/navegacion-y-codd` | Navegación por punteros y Codd 1970 |
| `…/sql-comercial-e-imperio` | SQL comercial e imperio relacional |
| `…/nosql-convergencia-y-sintesis` | NoSQL, convergencia y comparación de modelos |
| `…/practica-y-cierre` | Práctica, reto AndinaMarket y cierre |

---

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `Clase01HistoriaBasesDeDatosHubLesson.tsx` | default/hub | ObjetivosSection, ClassPagesNavSection |
| `pages/linea-de-tiempo-y-archivos/LineaDeTiempoYArchivosPageLesson.tsx` | page | PorQueLaHistoriaImportaSection, ArchivosPlanosSection |
| `pages/navegacion-y-codd/NavegacionYCoddPageLesson.tsx` | page | NavegacionalSection, ModeloRelacionalCoddSection |
| `pages/sql-comercial-e-imperio/SqlComercialEImperioPageLesson.tsx` | page | SqlComercialSection, ImperioRelacionalSection |
| `pages/nosql-convergencia-y-sintesis/NosqlConvergenciaYSintesisPageLesson.tsx` | page | NosqlWebScaleSection, HoyConvergenciaSection, ComparacionModelosSection, ErroresYCasosSection |
| `pages/practica-y-cierre/PracticaYCierrePageLesson.tsx` | page | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection |
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | — |
| `sections/PorQueLaHistoriaImportaSection.tsx` | `PorQueLaHistoriaImportaSection` | MermaidDiagram, StepReveal |
| `sections/ArchivosPlanosSection.tsx` | `ArchivosPlanosSection` | Callout |
| `sections/NavegacionalSection.tsx` | `NavegacionalSection` | — |
| `sections/ModeloRelacionalCoddSection.tsx` | `ModeloRelacionalCoddSection` | CodeFiddle, Callout |
| `sections/SqlComercialSection.tsx` | `SqlComercialSection` | CodeFiddle ×2, CompareTable |
| `sections/ImperioRelacionalSection.tsx` | `ImperioRelacionalSection` | MermaidDiagram |
| `sections/NosqlWebScaleSection.tsx` | `NosqlWebScaleSection` | CodeFiddle, Callout |
| `sections/HoyConvergenciaSection.tsx` | `HoyConvergenciaSection` | MermaidDiagram |
| `sections/ComparacionModelosSection.tsx` | `ComparacionModelosSection` | CompareTable |
| `sections/ErroresYCasosSection.tsx` | `ErroresYCasosSection` | Callout |
| `sections/PracticaGuiadaSection.tsx` | `PracticaGuiadaSection` | PracticeExercise ×5 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | ChallengeCard |
| `sections/CierreSection.tsx` | `CierreSection` | — |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | QuizSection |

**Regla:** máximo **1 componente exportado** por archivo.

**No crear:** `GuiaDocenteSection`, tags MDX, `CodeBlock`.

---

## Registry notes

Registrar **6 entradas** en `teaching-lessons-registry` (o equivalente del track):

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-01-historia-bases-de-datos` | **true** | Hub de clase; listado portal |
| 2 | `bases-de-datos/clase-01-historia-bases-de-datos/linea-de-tiempo-y-archivos` | false | Página 1/5 |
| 3 | `bases-de-datos/clase-01-historia-bases-de-datos/navegacion-y-codd` | false | Página 2/5 |
| 4 | `bases-de-datos/clase-01-historia-bases-de-datos/sql-comercial-e-imperio` | false | Página 3/5 |
| 5 | `bases-de-datos/clase-01-historia-bases-de-datos/nosql-convergencia-y-sintesis` | false | Página 4/5 |
| 6 | `bases-de-datos/clase-01-historia-bases-de-datos/practica-y-cierre` | false | Página 5/5; quiz clase |

También:

- `class-navigation` / `CLASE_01` pages[] para `ClassPagesNavSection`
- Quiz key `clase-01-historia-bases-de-datos` en `teaching-quizzes/bases-de-datos.ts`
- Legacy redirect monolítico → hub (si aplica): `teaching/bases-de-datos/clase-01-historia-bases-de-datos.html` → canonical hub
- Distinguir de POSW `/es/teaching/posw/bases-de-datos/`

---

## Checklist lesson-developer

- [ ] Hub + 5 PageLessons con `ClassPageLayout` / breadcrumb
- [ ] 15 sections en `sections/` + reutilizar `ClassPagesNavSection`
- [ ] Timeline Mermaid obligatorio en intro (ADR 013); erDiagram + mindmap
- [ ] 4× CodeFiddle (`sql`×3, `json`×1); cero CodeBlock
- [ ] 2× CompareTable; StepReveal; ChallengeCard; PracticeExercise ×5
- [ ] H3 Malas prácticas en las 7 secciones de etapa
- [ ] Quiz solo en `practica-y-cierre`; slug de clase
- [ ] `showInTrackIndex: true` solo hub; páginas `false`
- [ ] `prev` hub ← `index`; `next` clase = `null`
- [ ] Contenido solo estudiante; 1 export / archivo
- [ ] clay: card / callout-warning / callout-info / stepper según lesson-spec

---

## Resumen conteos

| Métrica | Cantidad |
|---------|----------|
| Paginación | **Sí** (ADR 011) |
| Hub | 1 |
| Páginas internas | **5** |
| Secciones de contenido (tabla) | **15** (+ ClassPagesNav) |
| Etapas cubiertas | **7** (profundidad completa) |
| MermaidDiagram | 3 |
| CodeFiddle | 4 |
| CompareTable | 2 |
| PracticeExercise | 5 |
| ChallengeCard | 1 |
| Quiz preguntas | 5 |
