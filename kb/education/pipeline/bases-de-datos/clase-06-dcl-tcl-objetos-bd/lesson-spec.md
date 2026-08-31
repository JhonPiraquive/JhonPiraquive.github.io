---
track: bases-de-datos
slug: clase-06-dcl-tcl-objetos-bd
title: "DCL, TCL, vistas, funciones, procedimientos y triggers: más allá de SELECT"
order: 7
prev: clase-05-normalizacion-esquemas/practica-y-cierre
next: null
seo_title: "DCL y TCL SQL: GRANT, ACID, vistas y triggers"
seo_description: "Completa el mapa SQL con DCL (GRANT/REVOKE), TCL y ACID, vistas, UDF, procedimientos y triggers; decide app vs BD con ejemplos MySQL/MariaDB LATAM."
brand_tone: academico-universitario
clay_variants: [card, callout-warning, callout-info, callout-danger, stepper]
showInTrackIndex: true
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/; EN mirror /en/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/; x-default es"
---

# Lesson spec — DCL, TCL, vistas, funciones, procedimientos y triggers

Merge: brand (`contrib-brand.md`) + clay (`contrib-clay.md`) + seo (`contrib-seo.md`).

## Metadata

- **track:** bases-de-datos
- **slug:** clase-06-dcl-tcl-objetos-bd
- **order:** 7
- **layout:** LessonLayout (hub) · ClassPageLayout (páginas internas)
- **canonical_path:** `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/`
- **legacy_redirect:** `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd.html` → canonical
- **audience:** student only
- **pagination:** sí (ADR 011) — hub + **6** páginas internas
- **prerequisites:** clase-05-normalizacion-esquemas (y dominio DDL/DML de clase-03)
- **Dialecto:** MySQL/MariaDB (InnoDB); anotar `BEGIN` vs `START TRANSACTION`, `DELIMITER` en rutinas
- **Distinguir de POSW:** `/es/teaching/posw/bases-de-datos/` (solapa “ACID” temáticamente; slug/ruta distintos)

Al publicar: actualizar `next` de clase-05 (hub y `practica-y-cierre`) → este hub. Encadenar `prev` del hub a `clase-05-normalizacion-esquemas/practica-y-cierre`. Fin de módulo actual → CTA repaso mapa Bases de Datos.

## Brand

- **title:** DCL, TCL, vistas, funciones, procedimientos y triggers: más allá de SELECT
- **title (EN):** DCL, TCL, views, functions, procedures, and triggers: beyond SELECT
- **tone:** académico-universitario (Sabio 25% + Creador 60% docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **persona:** *tú* en intro/práctica/reto/callouts/CTAs; impersonal en objetivos
- **prev:** `clase-05-normalizacion-esquemas/practica-y-cierre` · **next:** null
- **breadcrumb UI:** `Clase 6 / Página X de 6` + título de página (no el slug)
- **Hilo:** academia “Rutas Digitales” (Cali) / laboratorio “Andes Tech”; literal `'Técnica Profesional en Configuración de Servicios Web'`; campo `Nombre_Programa`

### Mensajes clave

1. Más allá de SELECT — Permisos, atomicidad y objetos de servidor son freno de emergencia, no “extras de admin”
2. Etiqueta la familia — DDL ≠ DML ≠ DCL ≠ TCL; `DELETE` no es `REVOKE`
3. Mínimo privilegio — Nada de `root` compartido ni `GRANT ALL` como hábito de producción
4. Todo o nada — Inscripción + cupo juntos con TCL; argumentar Atomicity de ACID
5. Vista = proyección, no copia mágica — Simplifica y oculta; no sustituye tablas ni integridad
6. UDF = valor; PROCEDURE = proceso; trigger = automático — Criterio app vs BD evita monolitos y basura sin FK
7. Formación de tecnólogo — Expandir DCL/TCL/ACID/UDF y documentar límites de hosting

### Títulos de sección (UI)

| Página | Título sugerido (ES) |
|--------|----------------------|
| Hub | Objetivos y mapa de la clase |
| ↳ | Checklist mental de la clase |
| mapa-sql-familias | Del abecedario completo · DDL / DML / DCL / TCL |
| dcl-grant-revoke | Qué es DCL · Usuarios y roles · GRANT y REVOKE · Mínimo privilegio |
| tcl-transacciones-acid | Transacciones · ACID · COMMIT, ROLLBACK y SAVEPOINT |
| vistas | CREATE VIEW y consulta · Vista frente a tabla |
| funciones-procedimientos-triggers | UDF · PROCEDURE · TRIGGER · Criterio: ¿app o BD? |
| ↳ | Errores comunes · Casos reales |
| practica-y-cierre | Lab base · Práctica guiada · Reto Matrícula segura · Cierre · Miniquiz |

### CTAs

| Ubicación | Copy |
|-----------|------|
| Hub → primera página | Empezar: mapa de familias SQL |
| Fin de página → siguiente | Continuar a la siguiente página |
| Fin `practica-y-cierre` | Repasa el mapa del módulo Bases de Datos |
| Reto | Abrir el reto: Matrícula segura en Rutas Digitales |
| Quiz | Comprobar lo aprendido (miniquiz) |

### Callouts

1. Más allá de SELECT — **callout-warning** (abre `mapa-sql-familias`)
2. Checklist mental de la clase — **callout-warning** (hub)
3. Root compartido — **callout-danger** (abre `dcl-grant-revoke`; obligatorio)
4. Rutinas en el sandbox — **callout-info** (`funciones-procedimientos-triggers` § UDF)
5. Triggers encadenados — **callout-warning** (`funciones-procedimientos-triggers` § TRIGGER)
6. Pregunta de cierre: ¿etiqueté la familia? ¿mínimo privilegio? ¿transacción corta? ¿app o motor?

## Clay UI

| Página | Secciones / ritmo | clay_variant dominante | Interactivos |
|--------|-------------------|------------------------|--------------|
| Hub | Objetivos → CompareTable mapa → Callout checklist → ClassPagesNav | prose / card | CompareTable, Callout warning, ClassPagesNav (6; **sin cards** en listado) |
| mapa-sql-familias | Mermaid mapa + Callout → StepReveal + Mermaid familias → CompareTable | card / stepper | Mermaid ×2, StepReveal ×1, CompareTable familias, Callout warning |
| dcl-grant-revoke | **Callout danger** root → usuarios → GRANT → REVOKE | card | Callout **danger**, CodeFiddle SQL ×3 |
| tcl-transacciones-acid | StepReveal → fiddle inscripción → CompareTable ACID → fiddle SAVEPOINT | card / stepper | StepReveal ×1, CodeFiddle ×2, CompareTable ACID |
| vistas | CREATE VIEW → CompareTable vista/tabla → proyección segura | card | CodeFiddle ×2, CompareTable |
| funciones-procedimientos-triggers | UDF → SP → trigger+Mermaid → app vs BD | card | CodeFiddle ×3, Mermaid ×2, CompareTable ×2, Callout info + warning |
| practica-y-cierre | Lab fiddle → práctica → reto → cierre → quiz | card | CodeFiddle ×1, PracticeExercise ×5, ChallengeCard, QuizSection (**única** instancia) |

**Tokens:** primary `#0A2540`, secondary `#00C2FF`, accent `#6B4EFF`, neutral-light `#F4F6F8`, neutral-dark `#1E293B`; radius 20–28px; máx. 2 niveles clay.

**Espaciado:** prose `my-4`; Callout/Mermaid/CodeFiddle `my-6`; ClayCard wrappers `my-8`. No anidar Mermaid/CodeFiddle en ClayCard extra.

**CodeFiddle (obligatorio, nunca CodeBlock):** todo `<!-- code: sql -->` del draft → `language="sql"`. Superficie `--color-neutral-dark`, radius 20–28px, `my-6`. Un fiddle por bloque; prose breve entre fiddles; no apilar más de ~3 sin aire. DCL/routines pueden ser referencia si el sandbox no ejecuta (Callout info).

**Mermaid (ADR 013, contiguos a la promesa visual):**

| id | tipo |
|----|------|
| `mapa-leccion-mas-alla-select` | flowchart (hero visual en `mapa-sql-familias`) |
| `familias-sql` | flowchart (obligatorio) |
| `inscripcion-atomica-auditoria` | flowchart |
| `app-o-bd` | flowchart (obligatorio en criterio app vs BD) |

**CompareTable:** `mapa-paginas-clase-06` · `familias-ddl-dml-dcl-tcl` · `acid-letras` · `vista-vs-tabla` · `udf-vs-procedure` · `app-vs-bd`

**StepReveal:** `ciclo-rutas-familias` (5) · `transaccion-inscripcion` (4)

**CodeFiddle ids:** `sql-crear-usuarios` · `sql-grant-minimo` · `sql-revoke` · `sql-inscripcion-atomica` · `sql-savepoint` · `sql-create-view` · `sql-vista-sin-sensible` · `sql-udf-etiqueta-cupos` · `sql-sp-inscribir` · `sql-trigger-audit` · `sql-lab-integral`

**Callout danger:** Root compartido en `dcl-grant-revoke` (obligatorio; patrón similar a UPDATE/DELETE de clase-03).

## SEO

- **seo_title:** DCL y TCL SQL: GRANT, ACID, vistas y triggers (48)
- **seo_description:** Completa el mapa SQL con DCL (GRANT/REVOKE), TCL y ACID, vistas, UDF, procedimientos y triggers; decide app vs BD con ejemplos MySQL/MariaDB LATAM. (149)
- **prev:** `clase-05-normalizacion-esquemas/practica-y-cierre` · **next:** null
- **hreflang:** es primary; slug idéntico EN (no traducir a `class-06-dcl-tcl-db-objects`); x-default es
- **showInTrackIndex:** true solo hub; páginas internas false
- **H1 visible:** conservá el título de marca; no repetir el `seo_title` en el primer párrafo
- **No canonicalizar hacia POSW** pese al solapamiento temático con ACID

### Meta por página

| page slug | seo_title | seo_description |
|-----------|-----------|-----------------|
| `mapa-sql-familias` | Familias SQL: DDL, DML, DCL y TCL | Ubica DDL, DML, DCL y TCL con acrónimos expandidos: qué toca cada familia y ejemplos de sentencias en laboratorio. |
| `dcl-grant-revoke` | DCL SQL: GRANT y REVOKE | Otorga y revoca privilegios en MySQL/MariaDB con mínimo privilegio; evita root compartido y GRANT ALL por costumbre. |
| `tcl-transacciones-acid` | TCL y ACID: COMMIT y ROLLBACK | Transacciones START TRANSACTION, COMMIT, ROLLBACK y SAVEPOINT; explica ACID con inscripción atómica cupo + matrícula. |
| `vistas` | Vistas SQL: CREATE VIEW y proyección | Crea y consulta vistas para simplificar SELECT y ocultar columnas sensibles; limita expectativas frente a tablas base. |
| `funciones-procedimientos-triggers` | UDF, PROCEDURE y TRIGGER en SQL | Funciones, procedimientos y triggers en MySQL/MariaDB; criterio claro de cuándo la lógica va en la app vs en la BD. |
| `practica-y-cierre` | Práctica: DCL, TCL, vistas y cierre | Práctica guiada, reto matrícula segura, cierre y miniquiz: DCL/TCL, ACID, vistas, UDF, procedimientos y triggers. |

### Legacy redirects

| legacy | → canonical |
|--------|-------------|
| `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd.html` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/` |
| `…/mapa-sql-familias.html` | `…/mapa-sql-familias/` |
| `…/dcl-grant-revoke.html` | `…/dcl-grant-revoke/` |
| `…/tcl-transacciones-acid.html` | `…/tcl-transacciones-acid/` |
| `…/vistas.html` | `…/vistas/` |
| `…/funciones-procedimientos-triggers.html` | `…/funciones-procedimientos-triggers/` |
| `…/practica-y-cierre.html` | `…/practica-y-cierre/` |

Slash final. Slugs sin tildes. Sitemap: **7** canónicas ES (hub + 6 páginas). No confundir con POSW.

## Interactividad

- MermaidDiagram ×4 (flowchart mapa, familias, inscripción/auditoría, app vs BD)
- CompareTable ×6 (mapa páginas; familias; ACID; vista/tabla; UDF/SP; app/BD)
- StepReveal ×2 (ciclo familias 5; transacción inscripción 4)
- CodeFiddle ×11 (todos SQL; nunca CodeBlock)
- Callout ×5 (3 warning + 1 **danger** + 1 info)
- PracticeExercise ×5
- ChallengeCard ×1
- QuizSection ×1 (5 preguntas, **solo** `practica-y-cierre`)

## Nota ADR 011 (paginación)

Hub + 6 páginas (`mapa-sql-familias` → `dcl-grant-revoke` → `tcl-transacciones-acid` → `vistas` → `funciones-procedimientos-triggers` → `practica-y-cierre`). Quiz por clase (clave `clase-06-dcl-tcl-objetos-bd`), no por página. `showInTrackIndex: true` solo hub. Detalle en `layout-spec.md` → `## Páginas`.

## Nota ADR 013

Flowcharts `mapa-leccion-mas-alla-select`, `familias-sql`, `inscripcion-atomica-auditoria` y `app-o-bd` obligatorios y contiguos a los H que prometen el visual; no sustituir el mapa de familias ni el criterio app vs BD por lista/tabla sola.
