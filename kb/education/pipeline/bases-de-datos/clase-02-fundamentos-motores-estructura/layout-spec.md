---
track: bases-de-datos
slug: clase-02-fundamentos-motores-estructura
title: "Fundamentos, motores y estructura: el abecedario operativo"
order: 3
prev: clase-01-historia-bases-de-datos
next: null
tsx_target: src/components/teaching/lessons/bases-de-datos/clase-02-fundamentos-motores-estructura/
pagination: true
pagination_reason: ">8 secciones de concepto (~16 bloques) y ~>20 min de lectura continua (draft ~850 líneas: BD/SGBD, relacional/NoSQL, motores/GUI/CLI, estructura + práctica); ADR 011 hub + 4 páginas"
showInTrackIndex_hub: true
showInTrackIndex_pages: false
audience: student
---

# Layout spec — Fundamentos, motores y estructura

## Decisión de paginación (ADR 011)

**Paginado: sí.**

| Criterio | Valor |
|----------|-------|
| Secciones de contenido (tabla abajo) | **16** (>8) |
| Lectura estimada | **>~40–55 min** si fuera monolítica |
| Páginas internas | **4** (+ hub) |
| Secciones por página | **2–5** (página 1 agrupa marco + 4 conceptos relacionados) |
| Quiz | Solo en **última página** (`practica-y-cierre`), clave por **clase** |
| Shell | Hub → `LessonLayout`; páginas → `ClassPageLayout` |
| Nav | `class-navigation.ts` → `getPageNavChain()` / `CLASE_02` |
| Contenido | Solo estudiante (sin guía docente / entregas / lab) |

---

## Páginas

| page_slug | title | sections | showInTrackIndex | layout | component |
|-----------|-------|----------|------------------|--------|-----------|
| `clase-02-fundamentos-motores-estructura` | Hub — Fundamentos, motores y estructura | ObjetivosSection, ClassPagesNavSection | **true** | LessonLayout | `Clase02FundamentosMotoresEstructuraHubLesson` |
| `clase-02-fundamentos-motores-estructura/que-es-y-tipos` | Qué es una BD, SGBD y tipos | IntroMapaOperativoSection, QueEsBdSection, SgbdSection, RelacionalesSection, NosqlTiposSection | **false** | ClassPageLayout | `QueEsYTiposPageLesson` |
| `clase-02-fundamentos-motores-estructura/motores-y-gestores` | Motores, GUI y CLI | MotoresSection, GestoresGuiSection, CliSection, MotorGuiCliCompareSection | **false** | ClassPageLayout | `MotoresYGestoresPageLesson` |
| `clase-02-fundamentos-motores-estructura/estructura-tablas-campos` | Tabla, campo, registro y valor | EstructuraTablasCamposSection, ErroresComunesSection, CasosRealesSection | **false** | ClassPageLayout | `EstructuraTablasCamposPageLesson` |
| `clase-02-fundamentos-motores-estructura/practica-y-cierre` | Práctica, reto y cierre | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | **false** | ClassPageLayout | `PracticaYCierrePageLesson` |

**Breadcrumb:** `Clase 2 / Página X de 4` + título de página.

**Prev/next cadena de clase:**

| slug | prev | next |
|------|------|------|
| hub `clase-02-fundamentos-motores-estructura` | `clase-01-historia-bases-de-datos` | `…/que-es-y-tipos` |
| `…/que-es-y-tipos` | hub | `…/motores-y-gestores` |
| `…/motores-y-gestores` | `…/que-es-y-tipos` | `…/estructura-tablas-campos` |
| `…/estructura-tablas-campos` | `…/motores-y-gestores` | `…/practica-y-cierre` |
| `…/practica-y-cierre` | `…/estructura-tablas-campos` | `null` (→ `clase-03-ddl-dml-relacional` cuando exista) |

---

## Hub — Clase02FundamentosMotoresEstructuraHubLesson.tsx

```tsx
<ObjetivosSection />
<ClassPagesNavSection track={meta.track} classSlug={CLASE_02.classSlug} pages={CLASE_02.pages} />
```

**TSX target:** `src/components/teaching/lessons/bases-de-datos/clase-02-fundamentos-motores-estructura/`

- Hub: `Clase02FundamentosMotoresEstructuraHubLesson.tsx`
- Páginas: `pages/{pagina}/*PageLesson.tsx`
- Secciones compartidas: `sections/*.tsx` (reutilizar; no duplicar)
- Meta: `lesson-meta.ts` (hub + páginas) · nav: `class-navigation.ts`

---

## Secciones (orden global)

| orden | heading | page | tsx_component | file sugerido | props / notes |
|-------|---------|------|---------------|---------------|---------------|
| 1 | Objetivos de aprendizaje | hub | ObjetivosSection | `sections/ObjetivosSection.tsx` | Objetivos ×5 + prerrequisitos (draft L31–41). Sin guía docente. |
| — | Índice de páginas (hub) | hub | ClassPagesNavSection | shared teaching | 4 páginas; descripciones breves; sin cards en listado. |
| 2 | Del mapa histórico al abecedario operativo | que-es-y-tipos | IntroMapaOperativoSection | `sections/IntroMapaOperativoSection.tsx` | Intro prose + **MermaidDiagram mindmap** `mapa-capas-datos` (ADR 013 hero). |
| 3 | Qué es y para qué sirve una base de datos (BD) | que-es-y-tipos | QueEsBdSection | `sections/QueEsBdSection.tsx` | Bloques qué/para qué/cómo/estructura/tipos/ventajas; ejemplo Rutas Digitales; H3 Malas prácticas ×4; Callout warning `bd-no-es-archivo`. |
| 4 | SGBD — Sistema Gestor de Bases de Datos | que-es-y-tipos | SgbdSection | `sections/SgbdSection.tsx` | Prose + tabla capas; MermaidDiagram flowchart `flujo-cliente-motor`; H3 Malas prácticas ×4. |
| 5 | Tipos — bases de datos relacionales | que-es-y-tipos | RelacionalesSection | `sections/RelacionalesSection.tsx` | Prose + tablas; **CodeFiddle** `sql-select-cupos`; H3 Malas prácticas ×4. |
| 6 | Tipos — NoSQL (Not Only SQL) | que-es-y-tipos | NosqlTiposSection | `sections/NosqlTiposSection.tsx` | Familias; **CompareTable** `inventario-vs-catalogo`; **CodeFiddle** `json-programa-flexible`; Callout info; H3 Malas prácticas ×4. |
| 7 | Motores / servidores — MySQL, MariaDB, MongoDB | motores-y-gestores | MotoresSection | `sections/MotoresSection.tsx` | Tabla motores; ventajas; H3 Malas prácticas ×4. |
| 8 | Gestores visuales — GUI | motores-y-gestores | GestoresGuiSection | `sections/GestoresGuiSection.tsx` | Tabla herramientas; H3 Malas prácticas ×4. |
| 9 | CLI — Command Line Interface | motores-y-gestores | CliSection | `sections/CliSection.tsx` | **CodeFiddle** ×3: `bash-mariadb-connect`, `sql-cli-select`, `bash-mongosh` (prose entre fiddles); H3 Malas prácticas ×4. |
| 10 | Motor vs gestor visual vs CLI | motores-y-gestores | MotorGuiCliCompareSection | `sections/MotorGuiCliCompareSection.tsx` | **CompareTable** `motor-gui-cli` (obligatoria); Callout warning `diagnostico-rapido`; H3 Malas prácticas ×4. |
| 11 | Estructura: tabla, campo, registro y valor | estructura-tablas-campos | EstructuraTablasCamposSection | `sections/EstructuraTablasCamposSection.tsx` | StepReveal `tabla-a-valor-programas`; ASCII prose; reglas nombres; **CodeFiddle** `sql-programas-ddl-dml` + `sql-literal-correcto`; Mermaid **erDiagram** `er-programas`; H3 Malas prácticas ×5. |
| 12 | Errores comunes | estructura-tablas-campos | ErroresComunesSection | `sections/ErroresComunesSection.tsx` | Checklist `<ol>` ×10 (draft L631–641). |
| 13 | Casos reales | estructura-tablas-campos | CasosRealesSection | `sections/CasosRealesSection.tsx` | Andes Tech + Catálogo Libre; Callout warning `malas-practicas-transversales`. |
| 14 | Práctica guiada | practica-y-cierre | PracticaGuiadaSection | `sections/PracticaGuiadaSection.tsx` | PracticeExercise ×5. |
| 15 | Reto integrador: Monta el criterio de Andes Tech | practica-y-cierre | RetoIntegradorSection | `sections/RetoIntegradorSection.tsx` | ChallengeCard. |
| 16 | Cierre | practica-y-cierre | CierreSection | `sections/CierreSection.tsx` | 5 ideas clave; pregunta operativa; CTA módulo / clase 03. |
| 17 | Miniquiz | practica-y-cierre | MiniquizFinalSection | `sections/MiniquizFinalSection.tsx` | QuizSection ×5 preguntas (clave clase). **Única** instancia de quiz. |

**Conteo:** 16 filas de contenido pedagógico + ClassPagesNav en hub · **17 entradas de sección TSX** (16 nuevas + ClassPagesNav reutilizado) · **4 páginas + 1 hub**.

H2 públicos según lesson-spec (sin prefijos «1.»–«9.» numéricos en UI; el orden lo da la página).

---

## Malas prácticas (H3 obligatorio por sección de concepto)

| Sección | H3 «Malas prácticas en el mundo real» | Escenarios (draft) |
|---------|--------------------------------------|--------------------|
| QueEsBdSection | ✓ | 4 (Sheets Bogotá, clínica Word, backup USB, tres copias clientes) |
| SgbdSection | ✓ | 4 (root sin pass, reinicio vs mysqld, cuenta admin compartida, MySQL≠MariaDB ciego) |
| RelacionalesSection | ✓ | 4 (tabla sábana, sin PK, precios texto, FKs off) |
| NosqlTiposSection | ✓ | 4 (nómina docs, dual truth, Cassandra 5GB, sin índices) |
| MotoresSection | ✓ | 4 (3306 abierto, identidad MySQL/MariaDB, Mongo sin auth, moda YouTube) |
| GestoresGuiSection | ✓ | 4 (phpMyAdmin público, DROP en prod, solo formularios, credenciales laptop) |
| CliSection | ✓ | 4 (pass en claro, DELETE sin WHERE, solo GUI, dropDatabase) |
| MotorGuiCliCompareSection | ✓ | 4 (reinstalar phpMyAdmin, cliente≠servidor, stack=GUI, “versiones” de BD) |
| EstructuraTablasCamposSection | ✓ | 5 (espacios en columna, literales sin comillas, quitar tildes, campo concatenado, ID=nombre) |
| Intro / errores / casos / práctica / quiz | — | N/A (casos llevan Callout transversales; no H3 de etapa) |

Props tipadas: lista de escenarios `{ situacion, error, consecuencia, correccion }[]` o prose `<ol>` — lesson-developer elige el patrón del track; **no omitir el H3**.

---

## Mapa de interactivos

### MermaidDiagram (ADR 013) — ×3

| id | sección | tipo chart | props |
|----|---------|------------|-------|
| `mapa-capas-datos` | IntroMapaOperativoSection | `mindmap` | title/description/chart draft L52–57; **contiguo** al H intro; hero visual; sin ClayCard envolvente |
| `flujo-cliente-motor` | SgbdSection | `flowchart` | draft L172–177; no apilar con mindmap en mismo viewport inicial |
| `er-programas` | EstructuraTablasCamposSection | `erDiagram` | draft L609–614; tras CodeFiddle principal |

Sin entidades HTML en `chart`.

### CodeFiddle — ×7 (nunca CodeBlock)

| id | sección | language | title sugerido | source |
|----|---------|----------|----------------|--------|
| `sql-select-cupos` | RelacionalesSection | `sql` | SELECT programas con cupos | draft L220–225 |
| `json-programa-flexible` | NosqlTiposSection | `json` | Documento programa flexible | draft L285–296 |
| `bash-mariadb-connect` | CliSection | `bash` | Conectar con mariadb CLI | draft L439–442 |
| `sql-cli-select` | CliSection | `sql` | SELECT tras conectar | draft L444–447 |
| `bash-mongosh` | CliSection | `bash` | Abrir mongosh | draft L451–454 |
| `sql-programas-ddl-dml` | EstructuraTablasCamposSection | `sql` | CREATE / INSERT / SELECT Programas | draft L579–594 |
| `sql-literal-correcto` | EstructuraTablasCamposSection | `sql` | Literal con comillas y Nombre_Programa | draft L598–607 |

Props: `code`, `language`, opcional `title`. `tsx_component: CodeFiddle`. En CliSection apilar bash→sql→bash con prose breve entre medias.

### CompareTable — ×2

| id | sección | headers / rows |
|----|---------|----------------|
| `inventario-vs-catalogo` | NosqlTiposSection | Escenario · Mejor encaje · Por qué — 4 filas draft L268–277 |
| `motor-gui-cli` | MotorGuiCliCompareSection | Rol · Qué es · Qué estructura / administra · Ejemplos — 3 filas draft L476–484 (**obligatoria** motores vs gestores) |

### StepReveal — ×1

| id | sección | props |
|----|---------|-------|
| `tabla-a-valor-programas` | EstructuraTablasCamposSection | title + steps[4] draft L535–556; ASCII grilla **después** del stepper |

### Callout — ×4

| id | sección | variant | title |
|----|---------|---------|-------|
| `bd-no-es-archivo` | QueEsBdSection | `callout-warning` | BD ≠ archivo compartido |
| `inventario-vs-catalogo-frase` | NosqlTiposSection | `callout-info` | Inventario vs catálogo flexible |
| `diagnostico-rapido` | MotorGuiCliCompareSection | `callout-warning` | Diagnóstico rápido |
| `malas-practicas-transversales` | CasosRealesSection | `callout-warning` | Malas prácticas transversales |

### PracticeExercise — ×5 (`PracticaGuiadaSection`)

| # | tema | draft |
|---|------|-------|
| 1 | BD vs SGBD vs phpMyAdmin (Rutas Digitales) | L678–688 |
| 2 | Orden flujo tabla → cliente → motor → app | L690–700 |
| 3 | Inventario relacional vs catálogo documentos | L702–712 |
| 4 | INSERT con tildes y comillas | L714–724 |
| 5 | Clasificar motor / GUI / CLI + respuesta VPS | L726–736 |

Props: `prompt`, `hints[]`, `expectedKeywords[]`, `successMessage`. Apilar con `my-8`.

### ChallengeCard — ×1

| id | sección | props |
|----|---------|-------|
| `andes-tech-criterio` | RetoIntegradorSection | title, difficulty=`integrador`, prompt, acceptanceCriteria[], hints[] — draft L759–776 |

### QuizSection — ×1 (5 preguntas)

| campo | valor |
|-------|-------|
| Componente | `QuizSection` → datos en `src/lib/teaching-quizzes/bases-de-datos.ts` |
| slug | `clase-02-fundamentos-motores-estructura` |
| track | `bases-de-datos` |
| Ubicación | Solo `MiniquizFinalSection` en `practica-y-cierre` |
| Preguntas | draft L794–854 (BD vs SGBD, relacional vs docs, motor vs GUI, Nombre_Programa/comillas, Excel multi-sede) |

---

## Bloques interactivos — props por sección

> **Regla:** todo `<!-- code: -->` → `CodeFiddle` (`code` + `language`).  
> **Regla:** promesa mapa mental / flujo / ER → `MermaidDiagram` contiguo (ADR 013).  
> **Regla:** 1 export por archivo `.tsx` bajo `sections/` y `pages/`.  
> **Regla:** Quiz **solo** en `practica-y-cierre`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos | prose `<ul>` | 5 objetivos draft L31–37 |
| Prerrequisitos | prose `<ul>` | clase-01 + vocabulario mínimo (draft L39–41) |

### `IntroMapaOperativoSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L46–50 (Rutas Digitales / Andes Tech) |
| `mapa-capas-datos` | `MermaidDiagram` | chart `mindmap` draft L52–57 |

### `QueEsBdSection`

| id | componente | props |
|----|------------|-------|
| Qué es / Para qué / Cómo / Estructura / Tipos / Ventajas | prose + tablas | draft L61–104 |
| Ejemplo LATAM | prose | draft L106–108 |
| Señales | prose | draft L110–113 |
| Malas prácticas H3 | prose `<ol>` o lista tipada | 4 escenarios draft L115–120 |
| `bd-no-es-archivo` | `Callout` | `variant="callout-warning"` |

### `SgbdSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose + tablas | draft L130–163 |
| Señales + Malas prácticas H3 | prose | draft L160–170 |
| `flujo-cliente-motor` | `MermaidDiagram` | `flowchart` draft L172–177 |

### `RelacionalesSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose + tablas | draft L181–218 |
| `sql-select-cupos` | `CodeFiddle` | `language="sql"`; code draft L221–225 |
| Señales + Malas prácticas H3 | prose | draft L227–237 |

### `NosqlTiposSection`

| id | componente | props |
|----|------------|-------|
| Familias NoSQL | prose + tabla | draft L241–254 |
| `inventario-vs-catalogo` | `CompareTable` | draft L268–277 |
| `json-programa-flexible` | `CodeFiddle` | `language="json"` |
| Ejemplo / señales | prose | draft L279–301 |
| Malas prácticas H3 | prose | draft L303–308 |
| `inventario-vs-catalogo-frase` | `Callout` | `variant="callout-info"` |

### `MotoresSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose + tablas | draft L318–356 |
| Malas prácticas H3 | prose | draft L358–363 |

### `GestoresGuiSection`

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose + tablas | draft L367–406 |
| Malas prácticas H3 | prose | draft L407–413 |

### `CliSection`

| id | componente | props |
|----|------------|-------|
| Qué es / para qué / cómo | prose + tablas | draft L417–435 |
| `bash-mariadb-connect` | `CodeFiddle` | `language="bash"` |
| `sql-cli-select` | `CodeFiddle` | `language="sql"` |
| `bash-mongosh` | `CodeFiddle` | `language="bash"` |
| Señales + Malas prácticas H3 | prose | draft L456–466 |

### `MotorGuiCliCompareSection`

| id | componente | props |
|----|------------|-------|
| Frase ancla | prose | draft L474 |
| `motor-gui-cli` | `CompareTable` | draft L476–484 |
| Ejemplo misma BD academia | prose | draft L486–494 |
| Malas prácticas H3 | prose | draft L496–501 |
| `diagnostico-rapido` | `Callout` | `variant="callout-warning"` |

### `EstructuraTablasCamposSection`

| id | componente | props |
|----|------------|-------|
| Definiciones tabla/campo/registro/valor | prose + tabla | draft L511–526 |
| `tabla-a-valor-programas` | `StepReveal` | steps[4] draft L535–556 |
| ASCII grilla | prose `<pre>` o tabla | draft L558–567 |
| Reglas de escritura | prose `<ol>` | draft L569–575 |
| `sql-programas-ddl-dml` | `CodeFiddle` | `language="sql"` |
| `sql-literal-correcto` | `CodeFiddle` | `language="sql"` |
| `er-programas` | `MermaidDiagram` | `erDiagram` draft L609–614 |
| Señales + Malas prácticas H3 | prose | draft L616–627 |

### `ErroresComunesSection`

| id | componente | props |
|----|------------|-------|
| Checklist errores | prose `<ol>` | 10 ítems draft L631–641 |

### `CasosRealesSection`

| id | componente | props |
|----|------------|-------|
| Caso Andes Tech | prose | draft L648–656 |
| Caso Catálogo Libre | prose | draft L658–666 |
| `malas-practicas-transversales` | `Callout` | `variant="callout-warning"` |

### `PracticaGuiadaSection`

| id | componente | props |
|----|------------|-------|
| `practica-bd-sgbd-gui` … `practica-clasificar-clientes` | `PracticeExercise` ×5 | draft L678–736; apilar con `my-8` |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado Andes Tech | prose + `<ol>` | draft L740–757 |
| `andes-tech-criterio` | `ChallengeCard` | draft L759–776 |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Mapa operativo 5 puntos | `<ol>` draft L780–786 |
| Pregunta operativa | prose draft L788 |
| Siguiente | `next: null` — CTA «Repasa el mapa del módulo»; cuando exista clase-03 → Continuar a DDL/DML |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Miniquiz» |
| Quiz | `<QuizSection slug="clase-02-fundamentos-motores-estructura" track="bases-de-datos" />` |

---

## lesson-meta fields

### Hub (`clase-02-fundamentos-motores-estructura`)

| Campo | Valor |
|-------|-------|
| `track` | `bases-de-datos` |
| `slug` | `clase-02-fundamentos-motores-estructura` |
| `title` | `Fundamentos, motores y estructura: el abecedario operativo` |
| `order` | `3` |
| `prev` | `clase-01-historia-bases-de-datos` |
| `next` | `clase-02-fundamentos-motores-estructura/que-es-y-tipos` (cadena interna; track next clase = `null`) |
| `seoTitle` | `Fundamentos de BD: motores, SGBD y estructura` |
| `seoDescription` | `Define BD y SGBD, compara relacional vs NoSQL, distingue motor/GUI/CLI (MySQL, MariaDB, MongoDB) y estructura tabla-campo-valor con ejemplos LATAM.` |
| `showInTrackIndex` | **`true`** |
| `layout` | `LessonLayout` |
| `canonical_path` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/` |

### Páginas internas (todas)

| Campo | Valor |
|-------|-------|
| `showInTrackIndex` | **`false`** |
| `layout` | `ClassPageLayout` |
| `track` | `bases-de-datos` |
| SEO titles | Ver lesson-spec / tabla abajo |
| Quiz slug | Solo página final referencia `clase-02-fundamentos-motores-estructura` |

| page slug | title (meta) | seoTitle |
|-----------|--------------|----------|
| `…/que-es-y-tipos` | Qué es una BD, SGBD y tipos | Qué es una BD: SGBD, SQL y NoSQL |
| `…/motores-y-gestores` | Motores, GUI y CLI | Motores MySQL, MariaDB, MongoDB y GUI/CLI |
| `…/estructura-tablas-campos` | Tabla, campo, registro y valor | Tablas, campos, registros y valores SQL |
| `…/practica-y-cierre` | Práctica, reto Andes Tech y cierre | Práctica: fundamentos BD, motores y cierre |

---

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `Clase02FundamentosMotoresEstructuraHubLesson.tsx` | default/hub | ObjetivosSection, ClassPagesNavSection |
| `pages/que-es-y-tipos/QueEsYTiposPageLesson.tsx` | page | IntroMapaOperativoSection, QueEsBdSection, SgbdSection, RelacionalesSection, NosqlTiposSection |
| `pages/motores-y-gestores/MotoresYGestoresPageLesson.tsx` | page | MotoresSection, GestoresGuiSection, CliSection, MotorGuiCliCompareSection |
| `pages/estructura-tablas-campos/EstructuraTablasCamposPageLesson.tsx` | page | EstructuraTablasCamposSection, ErroresComunesSection, CasosRealesSection |
| `pages/practica-y-cierre/PracticaYCierrePageLesson.tsx` | page | PracticaGuiadaSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection |
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | — |
| `sections/IntroMapaOperativoSection.tsx` | `IntroMapaOperativoSection` | MermaidDiagram |
| `sections/QueEsBdSection.tsx` | `QueEsBdSection` | Callout |
| `sections/SgbdSection.tsx` | `SgbdSection` | MermaidDiagram |
| `sections/RelacionalesSection.tsx` | `RelacionalesSection` | CodeFiddle |
| `sections/NosqlTiposSection.tsx` | `NosqlTiposSection` | CompareTable, CodeFiddle, Callout |
| `sections/MotoresSection.tsx` | `MotoresSection` | — |
| `sections/GestoresGuiSection.tsx` | `GestoresGuiSection` | — |
| `sections/CliSection.tsx` | `CliSection` | CodeFiddle ×3 |
| `sections/MotorGuiCliCompareSection.tsx` | `MotorGuiCliCompareSection` | CompareTable, Callout |
| `sections/EstructuraTablasCamposSection.tsx` | `EstructuraTablasCamposSection` | StepReveal, CodeFiddle ×2, MermaidDiagram |
| `sections/ErroresComunesSection.tsx` | `ErroresComunesSection` | — |
| `sections/CasosRealesSection.tsx` | `CasosRealesSection` | Callout |
| `sections/PracticaGuiadaSection.tsx` | `PracticaGuiadaSection` | PracticeExercise ×5 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | ChallengeCard |
| `sections/CierreSection.tsx` | `CierreSection` | — |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | QuizSection |

**Regla:** máximo **1 componente exportado** por archivo.

**No crear:** `GuiaDocenteSection`, tags MDX, `CodeBlock`.

---

## Registry notes

Registrar **5 entradas** en `teaching-lessons-registry` (o equivalente del track):

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-02-fundamentos-motores-estructura` | **true** | Hub de clase; listado portal |
| 2 | `bases-de-datos/clase-02-fundamentos-motores-estructura/que-es-y-tipos` | false | Página 1/4 |
| 3 | `bases-de-datos/clase-02-fundamentos-motores-estructura/motores-y-gestores` | false | Página 2/4 |
| 4 | `bases-de-datos/clase-02-fundamentos-motores-estructura/estructura-tablas-campos` | false | Página 3/4 |
| 5 | `bases-de-datos/clase-02-fundamentos-motores-estructura/practica-y-cierre` | false | Página 4/4; quiz clase |

También:

- `class-navigation` / `CLASE_02` pages[] para `ClassPagesNavSection`
- Quiz key `clase-02-fundamentos-motores-estructura` en `teaching-quizzes/bases-de-datos.ts`
- Legacy redirects monolítico + subpáginas → canónicas (lesson-spec)
- Actualizar `next` de clase-01 hub → esta clase al publicar
- Distinguir de POSW `/es/teaching/posw/bases-de-datos/`

---

## Checklist lesson-developer

- [ ] Hub + 4 PageLessons con `LessonLayout` / `ClassPageLayout` + breadcrumb
- [ ] 16 sections en `sections/` + reutilizar `ClassPagesNavSection`
- [ ] Mindmap + flowchart + erDiagram Mermaid (ADR 013); cero sustitución por lista
- [ ] 7× CodeFiddle (`sql`×4, `json`×1, `bash`×2); cero CodeBlock
- [ ] 2× CompareTable (`inventario-vs-catalogo`, `motor-gui-cli`); StepReveal; ChallengeCard; PracticeExercise ×5
- [ ] H3 Malas prácticas en las 9 secciones de concepto
- [ ] Quiz solo en `practica-y-cierre`; slug de clase
- [ ] `showInTrackIndex: true` solo hub; páginas `false`
- [ ] `prev` hub ← `clase-01-historia-bases-de-datos`; `next` clase = `null`
- [ ] Contenido solo estudiante; 1 export / archivo
- [ ] clay: card / callout-warning / callout-info / stepper según lesson-spec

---

## Resumen conteos

| Métrica | Cantidad |
|---------|----------|
| Paginación | **Sí** (ADR 011) |
| Hub | 1 |
| Páginas internas | **4** |
| Secciones de contenido (tabla) | **16** (+ ClassPagesNav) |
| MermaidDiagram | 3 |
| CodeFiddle | 7 |
| CompareTable | 2 |
| StepReveal | 1 |
| PracticeExercise | 5 |
| ChallengeCard | 1 |
| Callout | 4 |
| Quiz preguntas | 5 |
