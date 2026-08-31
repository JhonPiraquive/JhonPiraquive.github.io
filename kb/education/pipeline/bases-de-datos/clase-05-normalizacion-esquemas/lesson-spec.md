---
track: bases-de-datos
slug: clase-05-normalizacion-esquemas
title: "Normalización, desnormalización y copo de nieve: limpiar el diseño"
order: 6
prev: clase-04-modelos-datos-er/practica-y-cierre
next: clase-06-dcl-tcl-objetos-bd
seo_title: "Normalización SQL: 1FN, 2FN, 3FN y DF"
seo_description: "Aplica normalización con DF, 1FN–3FN y BCNF; argumenta desnormalización consciente; distingue estrella vs copo de nieve en BI con ejemplos LATAM."
brand_tone: academico-universitario
clay_variants: [card, callout-warning, callout-info, callout-danger, stepper]
showInTrackIndex: true
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/; EN mirror /en/teaching/bases-de-datos/clase-05-normalizacion-esquemas/; x-default es"
---

# Lesson spec — Normalización, desnormalización y copo de nieve

Merge: brand (`contrib-brand.md`) + clay (`contrib-clay.md`) + seo (`contrib-seo.md`).

## Metadata

- **track:** bases-de-datos
- **slug:** clase-05-normalizacion-esquemas
- **order:** 6
- **layout:** LessonLayout (hub) · ClassPageLayout (páginas internas)
- **canonical_path:** `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/`
- **legacy_redirect:** `teaching/bases-de-datos/clase-05-normalizacion-esquemas.html` → canonical
- **audience:** student only
- **pagination:** sí (ADR 011) — hub + **5** páginas internas
- **prerequisites:** clase-04-modelos-datos-er
- **Distinguir de POSW:** `/es/teaching/posw/bases-de-datos/`

Al publicar: actualizar `next` de clase-04 (hub y `practica-y-cierre`) → este hub. Encadenar `prev` del hub a `clase-04-modelos-datos-er/practica-y-cierre`. Cuando exista clase-06 publicada, `next` de `practica-y-cierre` → hub clase-06 (ya enlazado en frontmatter).

## Brand

- **title:** Normalización, desnormalización y copo de nieve: limpiar el diseño
- **title (EN):** Normalization, denormalization, and snowflake: clean the design
- **tone:** académico-universitario (Sabio 25% + Creador 60% docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **persona:** *tú* en intro/práctica/reto/callouts/CTAs; impersonal en objetivos
- **prev:** `clase-04-modelos-datos-er/practica-y-cierre` · **next:** `clase-06-dcl-tcl-objetos-bd`
- **breadcrumb UI:** `Clase 5 / Página X de 5` + título de página (no el slug)
- **Hilo:** academia “Rutas Digitales” (Cali) / “Andes Tech”; literal `'Técnica Profesional en Configuración de Servicios Web'`; campo `Nombre_Programa`

### Mensajes clave

1. Limpiar el diseño — Un ER que “abre” no basta si el mismo hecho se corrige a medias
2. DF primero, jerga después — *Si conozco A, determino B*; sin DFs las formas son adjetivos vacíos
3. Procedimiento, no belleza — 1FN (atómico) → 2FN (sin parciales) → 3FN (sin transitivas); BCNF mención
4. Desnormalizar con política — Snapshot/lecturas documentados; no improvisar el día 1 ni “odiar el JOIN”
5. Estrella/copo ≠ OLTP — Hechos + dimensiones son BI; FK en matrículas no te hace estrella
6. Formación de tecnólogo — Argumentar con 1FN, DF y BI expandidos ante un coordinador

### Títulos de sección (UI)

| Página | Título sugerido (ES) |
|--------|----------------------|
| Hub | Objetivos y mapa de la clase |
| ↳ | Checklist mental de la clase |
| redundancia-y-dependencia-funcional | Del Excel sucio a las reglas del esquema |
| ↳ | Redundancia · Dependencia funcional (DF) |
| formas-normales-1-2-3 | Visión general: cómo ejecutar las formas |
| ↳ | 1FN · 2FN · 3FN · Mención BCNF |
| desnormalizacion | Desnormalización consciente · Snapshot de factura |
| estrella-y-copo-de-nieve | Esquema en estrella · Esquema en copo de nieve |
| ↳ | Errores comunes · Casos reales |
| practica-y-cierre | Práctica guiada · Reto De la sábana al esquema limpio · Cierre · Miniquiz |

### CTAs

| Ubicación | Copy |
|-----------|------|
| Hub → primera página | Empezar: redundancia y dependencia funcional |
| Fin de página → siguiente | Continuar a la siguiente página |
| Fin `practica-y-cierre` (clase 06 publicada) | Continuar a la Clase 06 — DCL, TCL y objetos |
| Fin `practica-y-cierre` (clase 06 ausente) | Repasa el mapa del módulo Bases de Datos |
| Reto | Abrir el reto: De la sábana al esquema limpio |
| Quiz | Comprobar lo aprendido (miniquiz) |

### Callouts

1. Normalizar no es odio al JOIN — **callout-warning** (abre `redundancia-y-dependencia-funcional`)
2. Checklist mental de la clase — **callout-warning** (hub)
3. Tip: DF primero, jerga después — **callout-info** (`redundancia-y-dependencia-funcional` § DF)
4. Desnormalizar no es odio al diseño — **callout-info** (`desnormalizacion`)
5. Estrella ≠ ER operacional — **callout-info** (`estrella-y-copo-de-nieve`)
6. Pregunta de cierre: ¿listé DFs? ¿qué extraje en cada forma? ¿accidente o política? ¿OLTP o hecho+dims?

## Clay UI

| Página | Secciones / ritmo | clay_variant dominante | Interactivos |
|--------|-------------------|------------------------|--------------|
| Hub | Objetivos → CompareTable mapa → Callout checklist → ClassPagesNav | prose / card | CompareTable, Callout warning, ClassPagesNav (5; **sin cards** en listado) |
| redundancia-y-dependencia-funcional | Mermaid mapa + Callout → StepReveal → redundancia → DF + Callout tip | card / stepper | Mermaid flowchart (hero), StepReveal ×1, Callout warning + info |
| formas-normales-1-2-3 | Mermaid flujo + StepReveal → 1FN → 2FN → 3FN → esqueleto/BCNF | card / stepper | Mermaid flowchart, StepReveal ×1, CodeFiddle SQL ×4 |
| desnormalizacion | Prose → snapshot fiddle → Callout → StepReveal decisión | card / stepper | CodeFiddle ×1, Callout info, StepReveal ×1 |
| estrella-y-copo-de-nieve | Estrella prose → copo + Mermaid → CompareTable → Callout | card | Mermaid flowchart, CompareTable, Callout info |
| practica-y-cierre | Práctica → reto → cierre → quiz | card | PracticeExercise ×5, ChallengeCard, QuizSection (**única** instancia) |

**Tokens:** primary `#0A2540`, secondary `#00C2FF`, accent `#6B4EFF`, neutral-light `#F4F6F8`, neutral-dark `#1E293B`; radius 20–28px; máx. 2 niveles clay.

**Espaciado:** prose `my-4`; Callout/Mermaid/CodeFiddle `my-6`; ClayCard wrappers `my-8`. No anidar Mermaid/CodeFiddle en ClayCard extra.

**CodeFiddle (obligatorio, nunca CodeBlock):** todo `<!-- code: sql -->` del draft → `language="sql"`. Superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; prose breve entre fiddles; no apilar más de ~3 sin aire.

**Mermaid (ADR 013, contiguos a la promesa visual):**

| id | tipo |
|----|------|
| `mapa-leccion-limpiar` | flowchart (hero visual en `redundancia-y-dependencia-funcional`) |
| `flujo-normalizacion-1fn-bcnf` | flowchart (obligatorio en `formas-normales-1-2-3`) |
| `estrella-vs-copo` | flowchart (obligatorio en `estrella-y-copo-de-nieve`) |

**CompareTable:** `mapa-paginas-clase-05` · `estrella-copo-oltp`

**StepReveal:** `sabana-a-dfs` (5) · `orden-pizarra-formas` (6) · `decision-desnormalizar` (5)

**CodeFiddle ids:** `sql-rutas-1fn` · `sql-rutas-2fn` · `sql-rutas-3fn` · `sql-academia-rutas-norm` · `sql-snapshot-factura`

## SEO

- **seo_title:** Normalización SQL: 1FN, 2FN, 3FN y DF (39)
- **seo_description:** Aplica normalización con DF, 1FN–3FN y BCNF; argumenta desnormalización consciente; distingue estrella vs copo de nieve en BI con ejemplos LATAM. (147)
- **prev:** `clase-04-modelos-datos-er/practica-y-cierre` · **next:** `clase-06-dcl-tcl-objetos-bd`
- **hreflang:** es primary; slug idéntico EN (no traducir a `class-05-normalization-schemas`); x-default es
- **showInTrackIndex:** true solo hub; páginas internas false
- **H1 visible:** conservá el título de marca; no repetir el `seo_title` en el primer párrafo

### Meta por página

| page slug | seo_title | seo_description |
|-----------|-----------|-----------------|
| `redundancia-y-dependencia-funcional` | Redundancia y dependencia funcional | Detecta redundancia y anomalías de inserción, actualización y borrado; define dependencia funcional A → B con ejemplos de academia LATAM. |
| `formas-normales-1-2-3` | Formas normales 1FN, 2FN y 3FN | Ejecuta el procedimiento 1FN → 2FN → 3FN con checklist, SQL antes/después y mención BCNF desde una tabla sucia. |
| `desnormalizacion` | Desnormalización consciente en SQL | Cuándo y por qué desnormalizar con política: snapshot de factura, lecturas y riesgos frente a redundancia accidental. |
| `estrella-y-copo-de-nieve` | Esquema en estrella y copo de nieve | Compara estrella vs snowflake en BI: dimensiones planas o normalizadas; no confundir con el OLTP de matrículas. |
| `practica-y-cierre` | Práctica: normalización, BI y cierre | Práctica guiada, reto Rutas Digitales, cierre y miniquiz: DF, 1FN–3FN, desnormalización y estrella/copo. |

### Legacy redirects

| legacy | → canonical |
|--------|-------------|
| `teaching/bases-de-datos/clase-05-normalizacion-esquemas.html` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/` |
| `…/redundancia-y-dependencia-funcional.html` | `…/redundancia-y-dependencia-funcional/` |
| `…/formas-normales-1-2-3.html` | `…/formas-normales-1-2-3/` |
| `…/desnormalizacion.html` | `…/desnormalizacion/` |
| `…/estrella-y-copo-de-nieve.html` | `…/estrella-y-copo-de-nieve/` |
| `…/practica-y-cierre.html` | `…/practica-y-cierre/` |

Slash final. Slugs sin tildes. Sitemap: **6** canónicas ES (hub + 5 páginas). No confundir con POSW.

## Interactividad

- MermaidDiagram ×3 (flowchart mapa, flowchart normalización, flowchart estrella/copo)
- CompareTable ×2 (mapa páginas; estrella/copo/OLTP)
- StepReveal ×3 (sábana→DF 5; orden pizarra 6; decisión desnormalizar 5)
- CodeFiddle ×5 (todos SQL; nunca CodeBlock)
- Callout ×5 (2 warning + 3 info)
- PracticeExercise ×5
- ChallengeCard ×1
- QuizSection ×1 (5 preguntas, **solo** `practica-y-cierre`)

## Nota ADR 011 (paginación)

Hub + 5 páginas (`redundancia-y-dependencia-funcional` → `formas-normales-1-2-3` → `desnormalizacion` → `estrella-y-copo-de-nieve` → `practica-y-cierre`). Quiz por clase (clave `clase-05-normalizacion-esquemas`), no por página. `showInTrackIndex: true` solo hub. Detalle en `layout-spec.md` → `## Páginas`.

## Nota ADR 013

Flowchart `mapa-leccion-limpiar`, `flujo-normalizacion-1fn-bcnf` y `estrella-vs-copo` obligatorios y contiguos a los H que prometen el visual; no sustituir el flujo 1FN→BCNF ni estrella/copo por lista/tabla sola.
