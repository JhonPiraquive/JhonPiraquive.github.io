---
track: bases-de-datos
slug: clase-03-ddl-dml-relacional
title: "DDL, DML, agregados y modelo relacional: de la estructura a la consulta"
order: 4
prev: clase-02-fundamentos-motores-estructura/practica-y-cierre
next: null
seo_title: "DDL y DML SQL: agregados, FK y JOINs"
seo_description: "Aplica DDL y DML en SQL: CREATE/ALTER, PK/UNIQUE, INSERT/SELECT, WHERE, agregados, UPDATE/DELETE seguros, FK y JOINs INNER/LEFT/RIGHT con ejemplos LATAM."
brand_tone: academico-universitario
clay_variants: [card, callout-warning, callout-info, callout-danger, stepper]
showInTrackIndex: true
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/; EN mirror /en/teaching/bases-de-datos/clase-03-ddl-dml-relacional/; x-default es"
---

# Lesson spec — DDL, DML, agregados y modelo relacional

Merge: brand (`contrib-brand.md`) + clay (`contrib-clay.md`) + seo (`contrib-seo.md`).

## Metadata

- **track:** bases-de-datos
- **slug:** clase-03-ddl-dml-relacional
- **order:** 4
- **layout:** LessonLayout (hub) · ClassPageLayout (páginas internas)
- **canonical_path:** `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/`
- **legacy_redirect:** `teaching/bases-de-datos/clase-03-ddl-dml-relacional.html` → canonical
- **audience:** student only
- **pagination:** sí (ADR 011) — hub + **8** páginas internas
- **prerequisites:** clase-02-fundamentos-motores-estructura
- **Distinguir de POSW:** `/es/teaching/posw/bases-de-datos/`

Al publicar: actualizar `next` de clase-02 (hub y `practica-y-cierre`) → este hub. Encadenar `prev` del hub a `clase-02-fundamentos-motores-estructura/practica-y-cierre`. Cuando exista clase-04, `next` de `practica-y-cierre` → hub clase-04.

## Brand

- **title:** DDL, DML, agregados y modelo relacional: de la estructura a la consulta
- **tone:** académico-universitario (Sabio 25% + Creador 60% docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **persona:** *tú* en intro/práctica/reto/callouts/CTAs; impersonal en objetivos
- **prev:** `clase-02-fundamentos-motores-estructura/practica-y-cierre` · **next:** null
- **breadcrumb UI:** `Clase 3 / Página X de 8` + título de página (no el slug)
- **Hilo:** academia “Rutas Digitales” (Cali); literal `'Técnica Profesional en Configuración de Servicios Web'`; campo `Nombre_Programa`

### Mensajes clave

1. Estructura antes que filas — DDL (esquema) ≠ DML (datos); `DROP TABLE` no es `DELETE`
2. WHERE probado, backup listo — SELECT + conteo antes de `UPDATE`/`DELETE`
3. Integridad en el motor — PK, UNIQUE, NOT NULL y FK no son “opciones de formulario”
4. El JOIN responde una pregunta — INNER oculta no-coincidencias; LEFT las muestra con `NULL`
5. Construir con precisión — `Nombre_Programa`; comillas simples; padres antes que hijas; PK y FK del mismo tipo
6. Formación de tecnólogo — script reproducible y orden correcto > aciertos a prueba y error en la GUI

### Títulos de sección (UI)

| Página | Título sugerido (ES) |
|--------|----------------------|
| Hub | Objetivos y mapa de la clase |
| ↳ | Checklist mental: ¿estructura o datos? |
| ddl-estructura | DDL frente a DML: el mapa de la clase |
| ↳ | Qué es DDL: definir el esquema |
| ↳ | CREATE DATABASE y DROP DATABASE |
| ↳ | CREATE TABLE, DROP TABLE y ALTER TABLE |
| ↳ | AUTO INCREMENT: identidad que genera el motor |
| ddl-restricciones | Restricciones: PK, UNIQUE y NOT NULL |
| ↳ | Llave primaria y ADD PRIMARY KEY |
| ↳ | UNIQUE: unicidad de negocio |
| ↳ | NOT NULL frente a NULL |
| dml-insert-select | DML: insertar y consultar |
| ↳ | INSERT: cargar filas |
| ↳ | SELECT: proyectar columnas |
| dml-filtros-orden | WHERE, DISTINCT, ORDER BY y LIMIT |
| agregados-group-having | Agregados, GROUP BY y HAVING |
| update-delete | UPDATE y DELETE: poder con WHERE y backup |
| relacional-fk-joins | Modelo relacional, FK y JOINs |
| ↳ | Relacional frente a ER |
| ↳ | Cardinalidad, PK y FK |
| ↳ | CREATE TABLE con CONSTRAINT |
| ↳ | INNER, LEFT y RIGHT JOIN |
| ↳ | Errores comunes · Casos reales |
| practica-y-cierre | Práctica guiada · Reto Matrículas de Rutas Digitales · Cierre · Miniquiz |

### CTAs

| Ubicación | Copy |
|-----------|------|
| Hub → primera página | Empezar: DDL frente a DML |
| Fin de página → siguiente | Continuar a la siguiente página |
| Fin `practica-y-cierre` (sin clase 04) | Repasa el mapa del módulo Bases de Datos |
| Fin `practica-y-cierre` (clase 04 publicada) | Continuar a la siguiente clase del módulo |
| Reto | Abrir el reto: Matrículas de Rutas Digitales |
| Quiz | Comprobar lo aprendido (miniquiz) |

### Callouts

1. Checklist mental antes de ejecutar — **callout-warning** (hub)
2. Peligro: UPDATE y DELETE sin WHERE — **callout-danger** (abre `update-delete`; obligatorio)
3. Padres primero, tipos iguales — **callout-info** (`relacional-fk-joins`)
4. INNER no es el JOIN por defecto del negocio — **callout-info** (`relacional-fk-joins` § JOINs)
5. Pregunta de cierre: ¿estoy tocando estructura o datos? ¿mi WHERE está probado? ¿tengo backup?

## Clay UI

| Página | Secciones / ritmo | clay_variant dominante | Interactivos |
|--------|-------------------|------------------------|--------------|
| Hub | Objetivos → CompareTable DDL/DML → Callout checklist → ClassPagesNav | prose / card | CompareTable, Callout warning, ClassPagesNav (8; **sin cards** en listado) |
| ddl-estructura | Mermaid flujo → DDL vs DML → catálogo DDL → CREATE/DROP DB → CREATE/DROP/ALTER TABLE → AUTO INCREMENT | card | Mermaid flowchart (hero), CodeFiddle SQL ×6 |
| ddl-restricciones | Catálogo → PK → UNIQUE → NOT NULL | card | CodeFiddle SQL ×3 |
| dml-insert-select | DML + reglas → INSERT → SELECT | card | CodeFiddle SQL ×2; Callout info opcional reglas |
| dml-filtros-orden | WHERE → DISTINCT → ORDER BY → LIMIT | card | CodeFiddle SQL ×4 |
| agregados-group-having | Agregados → GROUP BY → HAVING | card | CodeFiddle SQL ×4, CompareTable WHERE vs HAVING |
| update-delete | **Callout danger** → UPDATE → DELETE | card | Callout **danger**, CodeFiddle SQL ×3 (seguros + comentarios; no demos ejecutables destructivas) |
| relacional-fk-joins | Relacional → ER Mermaid → cardinalidad → CONSTRAINT + StepReveal → JOINs Mermaid → script/casos | card | Mermaid ×2 (erDiagram + flowchart JOINs), StepReveal, CompareTable JOINs, CodeFiddle ×3, Callout info ×2 |
| practica-y-cierre | Práctica → reto → cierre → quiz | card | PracticeExercise ×5, ChallengeCard, QuizSection (**única** instancia) |

**Tokens:** primary `#0A2540`, secondary `#00C2FF`, accent `#6B4EFF`, neutral-light `#F4F6F8`, neutral-dark `#1E293B`; radius 20–28px; máx. 2 niveles clay.

**Espaciado:** prose `my-4`; Callout/Mermaid/CodeFiddle `my-6`; ClayCard wrappers `my-8`. No anidar Mermaid/CodeFiddle en ClayCard extra.

**CodeFiddle (obligatorio, nunca CodeBlock):** todo `<!-- code: sql -->` del draft → `language="sql"`. Superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; prose breve entre fiddles; no apilar más de ~3 sin aire.

**Mermaid (ADR 013, contiguos a la promesa visual):**

| id | tipo |
|----|------|
| `flujo-ddl-dml-join` | flowchart (hero visual en `ddl-estructura`) |
| `er-programas-inscripciones` | erDiagram |
| `joins-conjuntos` | flowchart (JOINs — obligatorio) |

**CompareTable:** `ddl-vs-dml` · `where-vs-having` · `joins-negocio`

**StepReveal:** `orden-padres-hijos-join` (5 pasos)

**Callout danger:** extender `Callout.tsx` con variante `callout-danger` si aún no existe (hoy: info / warning / tip).

## SEO

- **seo_title:** DDL y DML SQL: agregados, FK y JOINs (39)
- **seo_description:** Aplica DDL y DML en SQL: CREATE/ALTER, PK/UNIQUE, INSERT/SELECT, WHERE, agregados, UPDATE/DELETE seguros, FK y JOINs INNER/LEFT/RIGHT con ejemplos LATAM. (154)
- **prev:** `clase-02-fundamentos-motores-estructura/practica-y-cierre` · **next:** null
- **hreflang:** es primary; slug idéntico EN (no traducir a `class-03-ddl-dml-relational`); x-default es
- **showInTrackIndex:** true solo hub; páginas internas false
- **H1 visible:** conservá el título de marca; no repetir el `seo_title` en el primer párrafo

### Meta por página

| page slug | seo_title | seo_description |
|-----------|-----------|-----------------|
| `ddl-estructura` | DDL SQL: CREATE, DROP y ALTER TABLE | DDL frente a DML; CREATE/DROP DATABASE y TABLE, ALTER COLUMN y AUTO INCREMENT para construir el esquema con criterios de laboratorio. |
| `ddl-restricciones` | Restricciones SQL: PK, UNIQUE y NOT NULL | Llave primaria, UNIQUE y NOT NULL/NULL: integridad de filas y atributos de negocio (Nombre_Programa) en el motor, no solo en la app. |
| `dml-insert-select` | DML SQL: INSERT y SELECT básicos | Manipula filas con INSERT y SELECT; reglas de nombres sin espacios y literales entre comillas simples con tildes LATAM. |
| `dml-filtros-orden` | WHERE, DISTINCT, ORDER BY y LIMIT | Filtra con WHERE, elimina duplicados con DISTINCT, ordena con ORDER BY y acota con LIMIT para consultas top-N confiables. |
| `agregados-group-having` | Agregados SQL: GROUP BY y HAVING | AVG, SUM, COUNT, MAX y MIN; agrupa con GROUP BY y filtra grupos con HAVING frente a WHERE sobre filas. |
| `update-delete` | UPDATE y DELETE SQL seguros con WHERE | Modifica y elimina filas con WHERE obligatorio, SELECT previo y backup: el peligro de UPDATE/DELETE sin filtro. |
| `relacional-fk-joins` | Modelo relacional, FK e INNER/LEFT JOIN | ER vs relacional, cardinalidad, CONSTRAINT FK (padres primero) e INNER/LEFT/RIGHT JOIN con NULLs y pregunta de negocio. |
| `practica-y-cierre` | Práctica: DDL, DML, JOINs y cierre | Práctica guiada, reto Rutas Digitales, cierre y miniquiz: DDL/DML, agregados, UPDATE/DELETE seguros y JOINs. |

### Legacy redirects

| legacy | → canonical |
|--------|-------------|
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/` |
| `…/ddl-estructura.html` | `…/ddl-estructura/` |
| `…/ddl-restricciones.html` | `…/ddl-restricciones/` |
| `…/dml-insert-select.html` | `…/dml-insert-select/` |
| `…/dml-filtros-orden.html` | `…/dml-filtros-orden/` |
| `…/agregados-group-having.html` | `…/agregados-group-having/` |
| `…/update-delete.html` | `…/update-delete/` |
| `…/relacional-fk-joins.html` | `…/relacional-fk-joins/` |
| `…/practica-y-cierre.html` | `…/practica-y-cierre/` |

Slash final. Slugs sin tildes. Sitemap: **9** canónicas ES (hub + 8 páginas). No confundir con POSW.

## Interactividad

- MermaidDiagram ×3 (flowchart flujo, erDiagram, flowchart JOINs)
- CompareTable ×3 (DDL/DML; WHERE/HAVING; JOINs)
- StepReveal ×1 (5 pasos padres → JOIN)
- CodeFiddle ×25 (todos SQL; nunca CodeBlock)
- Callout ×4 (1 warning + 1 **danger** + 2 info)
- PracticeExercise ×5
- ChallengeCard ×1
- QuizSection ×1 (5 preguntas, **solo** `practica-y-cierre`)

## Nota ADR 011 (paginación)

Hub + 8 páginas (`ddl-estructura` → `ddl-restricciones` → `dml-insert-select` → `dml-filtros-orden` → `agregados-group-having` → `update-delete` → `relacional-fk-joins` → `practica-y-cierre`). Quiz por clase (clave `clase-03-ddl-dml-relacional`), no por página. `showInTrackIndex: true` solo hub. Detalle en `layout-spec.md` → `## Páginas`.

## Nota ADR 013

Flowchart `flujo-ddl-dml-join`, erDiagram `er-programas-inscripciones` y flowchart `joins-conjuntos` obligatorios y contiguos a los H que prometen el visual; no sustituir JOINs por lista/tabla sola.
