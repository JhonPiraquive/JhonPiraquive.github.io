---
track: bases-de-datos
slug: clase-04-modelos-datos-er
title: "Modelos de datos, ER, familias y tipos: diseñar antes de crear"
order: 5
prev: clase-03-ddl-dml-relacional/practica-y-cierre
next: clase-05-normalizacion-esquemas
seo_title: "Modelo de datos y ER: niveles, tipos y FK"
seo_description: "Diseña modelos conceptual, lógico y físico; diagramas ER con cardinalidad; compara relacional, NoSQL y grafos; transforma ER→SQL con tipos, PK y FK."
brand_tone: academico-universitario
clay_variants: [card, callout-warning, callout-info, callout-danger, stepper]
showInTrackIndex: true
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-04-modelos-datos-er/; EN mirror /en/teaching/bases-de-datos/clase-04-modelos-datos-er/; x-default es"
---

# Lesson spec — Modelos de datos, ER, familias y tipos

Merge: brand (`contrib-brand.md`) + clay (`contrib-clay.md`) + seo (`contrib-seo.md`).

## Metadata

- **track:** bases-de-datos
- **slug:** clase-04-modelos-datos-er
- **order:** 5
- **layout:** LessonLayout (hub) · ClassPageLayout (páginas internas)
- **canonical_path:** `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/`
- **legacy_redirect:** `teaching/bases-de-datos/clase-04-modelos-datos-er.html` → canonical
- **audience:** student only
- **pagination:** sí (ADR 011) — hub + **5** páginas internas
- **prerequisites:** clase-03-ddl-dml-relacional
- **Distinguir de POSW:** `/es/teaching/posw/bases-de-datos/`

Al publicar: actualizar `next` de clase-03 (hub y `practica-y-cierre`) → este hub. Encadenar `prev` del hub a `clase-03-ddl-dml-relacional/practica-y-cierre`. `next` de `practica-y-cierre` → hub clase-05 (draft/spec ya existen).

## Brand

- **title:** Modelos de datos, ER, familias y tipos: diseñar antes de crear
- **title (EN):** Data models, ER, families, and types: design before you create
- **tone:** académico-universitario (Sabio 25% + Creador 60% docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **persona:** *tú* en intro/práctica/reto/callouts/CTAs; impersonal en objetivos
- **prev:** `clase-03-ddl-dml-relacional/practica-y-cierre` · **next:** `clase-05-normalizacion-esquemas`
- **breadcrumb UI:** `Clase 4 / Página X de 5` + título de página (no el slug)
- **Hilo:** academia “Rutas Digitales” (Cali) / “Andes Tech”; literal `'Técnica Profesional en Configuración de Servicios Web'`; campo `Nombre_Programa`

### Mensajes clave

1. Diseñar antes de crear — Si no puedes dibujar entidades y cardinalidad, aún no estás listo para el `CREATE TABLE`
2. Tres niveles, un dominio — Conceptual (negocio) → lógico (atributos, claves, cardinalidad) → físico (tipos, motor, DDL)
3. El ER comunica — Entidades, atributos, relaciones y cardinalidad; FK en el lado N; N:M pide tabla puente
4. Familia por forma de pregunta — Relacional, documentos/clave-valor o grafos; moda no es arquitectura
5. Tipos y llaves con criterio — No “todo `VARCHAR`”; PK estable; FK del mismo tipo; padres antes que hijas
6. Formación de tecnólogo — Argumentar con ER, PK, FK y cardinalidad ante un coordinador no programador

### Títulos de sección (UI)

| Página | Título sugerido (ES) |
|--------|----------------------|
| Hub | Objetivos y mapa de la clase |
| ↳ | Checklist mental de la clase |
| modelos-conceptual-logico-fisico | Del requisito al DDL · Diseñar antes de crear |
| ↳ | Qué es un modelo de datos · Conceptual · Lógico · Físico |
| diagramas-er | Diagrama entidad-relación (ER) |
| ↳ | Símbolos y cardinalidad · Caso Rutas Digitales y la tabla Todo |
| familias-relacional-nosql-grafos | Familia relacional · NoSQL · Grafos |
| ↳ | Intro: estrella frente a copo de nieve |
| transformacion-tipos-llaves | Transformación ER → SQL · Tipos · PK · FK |
| ↳ | Errores comunes · Casos reales |
| practica-y-cierre | Práctica guiada · Reto Diseño ER→SQL de Rutas Digitales / Andes Tech · Cierre · Miniquiz |

### CTAs

| Ubicación | Copy |
|-----------|------|
| Hub → primera página | Empezar: modelos conceptual, lógico y físico |
| Fin de página → siguiente | Continuar a la siguiente página |
| Fin `practica-y-cierre` (clase 05 publicada) | Continuar a la Clase 05 — Normalización y esquemas |
| Fin `practica-y-cierre` (clase 05 ausente) | Repasa el mapa del módulo Bases de Datos |
| Reto | Abrir el reto: Diseño ER→SQL de Rutas Digitales |
| Quiz | Comprobar lo aprendido (miniquiz) |

### Callouts

1. Diseñar antes de crear — **callout-warning** (abre `modelos-conceptual-logico-fisico`, tras Mermaid mapa)
2. Checklist mental de la clase — **callout-warning** (hub)
3. Tip: padres primero — **callout-info** (`transformacion-tipos-llaves` § ER→SQL)
4. Familia ≠ moda — tono informativo en `familias-relacional-nosql-grafos` (prose o callout-info opcional)
5. Pregunta de cierre: ¿Ya validé el negocio? ¿Dónde va la FK? ¿Este problema pide tablas, documentos o caminos?

## Clay UI

| Página | Secciones / ritmo | clay_variant dominante | Interactivos |
|--------|-------------------|------------------------|--------------|
| Hub | Objetivos → CompareTable mapa → Callout checklist → ClassPagesNav | prose / card | CompareTable, Callout warning, ClassPagesNav (5; **sin cards** en listado) |
| modelos-conceptual-logico-fisico | Mermaid mapa + Callout → StepReveal + Mermaid flujo → conceptos 1–3 → fiddle físico + CompareTable niveles | card / stepper | Mermaid ×2 (flowchart hero + flujo), StepReveal ×1, Callout warning, CodeFiddle ×1, CompareTable |
| diagramas-er | Símbolos → erDiagram hero → malas prácticas → caso | card | Mermaid erDiagram (hero) |
| familias-relacional-nosql-grafos | Relacional → NoSQL → grafos → estrella/copo + Mermaid → mindmap → CompareTable | card | Mermaid ×2 (flowchart + mindmap), CompareTable; aire entre Mermaids |
| transformacion-tipos-llaves | StepReveal → fiddle integral → Callout → erDiagram refuerzo → tipos → PK → FK | card / stepper | StepReveal ×1, CodeFiddle ×3, Callout info, Mermaid erDiagram |
| practica-y-cierre | Práctica → reto → cierre → quiz | card | PracticeExercise ×5, ChallengeCard, QuizSection (**única** instancia) |

**Tokens:** primary `#0A2540`, secondary `#00C2FF`, accent `#6B4EFF`, neutral-light `#F4F6F8`, neutral-dark `#1E293B`; radius 20–28px; máx. 2 niveles clay.

**Espaciado:** prose `my-4`; Callout/Mermaid/CodeFiddle `my-6`; ClayCard wrappers `my-8`. No anidar Mermaid/CodeFiddle en ClayCard extra.

**CodeFiddle (obligatorio, nunca CodeBlock):** todo `<!-- code: sql -->` del draft → `language="sql"`. Superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; prose breve entre fiddles; no apilar más de ~3 sin aire. En `transformacion-tipos-llaves`: un solo fiddle integral ER→SQL (no duplicar CREATE Estudiantes/Programas/Inscripciones).

**Mermaid (ADR 013, contiguos a la promesa visual):**

| id | tipo |
|----|------|
| `mapa-leccion-disenar` | flowchart (hero visual en `modelos-conceptual-logico-fisico`) |
| `flujo-niveles-modelo` | flowchart |
| `er-rutas-digitales` | erDiagram (hero en `diagramas-er`; **obligatorio**) |
| `estrella-vs-copo` | flowchart (obligatorio en `familias-relacional-nosql-grafos`) |
| `mindmap-familias-bi` | mindmap |
| `er-refuerzo-ddl` | erDiagram (refuerzo en `transformacion-tipos-llaves`) |

**CompareTable:** `mapa-paginas-clase-04` · `niveles-conceptual-logico-fisico` · `familias-formas-bi`

**StepReveal:** `whatsapp-a-create` (5) · `checklist-er-tablas` (6)

**CodeFiddle ids:** `sql-create-programas-fisico` · `sql-academia-rutas-er` · `sql-tipos-justificados` · `sql-fk-huerfano`

## SEO

- **seo_title:** Modelo de datos y ER: niveles, tipos y FK (41)
- **seo_description:** Diseña modelos conceptual, lógico y físico; diagramas ER con cardinalidad; compara relacional, NoSQL y grafos; transforma ER→SQL con tipos, PK y FK. (148)
- **prev:** `clase-03-ddl-dml-relacional/practica-y-cierre` · **next:** `clase-05-normalizacion-esquemas`
- **hreflang:** es primary; slug idéntico EN (no traducir a `class-04-data-models-er`); x-default es
- **showInTrackIndex:** true solo hub; páginas internas false
- **H1 visible:** conservá el título de marca; no repetir el `seo_title` en el primer párrafo

### Meta por página

| page slug | seo_title | seo_description |
|-----------|-----------|-----------------|
| `modelos-conceptual-logico-fisico` | Modelo conceptual, lógico y físico | Qué es un modelo de datos y cómo bajar de requisitos a DDL: niveles conceptual, lógico y físico con ejemplos de academia LATAM. |
| `diagramas-er` | Diagrama ER: entidades y cardinalidad | Crea e interpreta diagramas entidad-relación (ER): entidades, atributos, relaciones 1:1, 1:N, N:M y Mermaid erDiagram. |
| `familias-relacional-nosql-grafos` | Relacional, NoSQL, grafos y estrella | Compara bases relacionales, NoSQL y grafos; reconoce esquemas en estrella y copo de nieve (intro BI) con escenarios PYME LATAM. |
| `transformacion-tipos-llaves` | ER a SQL: tipos, PK y FK | Transforma el ER a tablas SQL: FK en el lado N, tabla puente N:M, tipos justificados (no todo VARCHAR), PK/FK y padres primero. |
| `practica-y-cierre` | Práctica: modelo ER, tipos y cierre | Práctica guiada, reto Rutas Digitales ER→SQL, cierre y miniquiz: niveles de modelo, cardinalidad, familias y llaves. |

### Legacy redirects

| legacy | → canonical |
|--------|-------------|
| `teaching/bases-de-datos/clase-04-modelos-datos-er.html` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/` |
| `…/modelos-conceptual-logico-fisico.html` | `…/modelos-conceptual-logico-fisico/` |
| `…/diagramas-er.html` | `…/diagramas-er/` |
| `…/familias-relacional-nosql-grafos.html` | `…/familias-relacional-nosql-grafos/` |
| `…/transformacion-tipos-llaves.html` | `…/transformacion-tipos-llaves/` |
| `…/practica-y-cierre.html` | `…/practica-y-cierre/` |

Slash final. Slugs sin tildes. Sitemap: **6** canónicas ES (hub + 5 páginas). No confundir con POSW.

## Interactividad

- MermaidDiagram ×6 (flowchart mapa, flowchart niveles, erDiagram ×2, flowchart estrella/copo, mindmap familias)
- CompareTable ×3 (mapa páginas; niveles; familias/formas)
- StepReveal ×2 (WhatsApp→CREATE 5; Checklist ER→tablas 6)
- CodeFiddle ×4 (todos SQL; nunca CodeBlock)
- Callout ×3 (2 warning + 1 info; sin danger en esta clase)
- PracticeExercise ×5
- ChallengeCard ×1
- QuizSection ×1 (5 preguntas, **solo** `practica-y-cierre`)

## Nota ADR 011 (paginación)

Hub + 5 páginas (`modelos-conceptual-logico-fisico` → `diagramas-er` → `familias-relacional-nosql-grafos` → `transformacion-tipos-llaves` → `practica-y-cierre`). Quiz por clase (clave `clase-04-modelos-datos-er`), no por página. `showInTrackIndex: true` solo hub. Detalle en `layout-spec.md` → `## Páginas`.

## Nota ADR 013

Flowchart `mapa-leccion-disenar`, erDiagram `er-rutas-digitales`, flowchart `estrella-vs-copo` y erDiagram de refuerzo `er-refuerzo-ddl` obligatorios y contiguos a los H que prometen el visual; no sustituir el ER ni estrella/copo por lista/tabla sola.
