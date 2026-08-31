---
track: bases-de-datos
slug: clase-02-fundamentos-motores-estructura
title: "Fundamentos, motores y estructura: el abecedario operativo"
order: 3
prev: clase-01-historia-bases-de-datos
next: null
seo_title: "Fundamentos de BD: motores, SGBD y estructura"
seo_description: "Define BD y SGBD, compara relacional vs NoSQL, distingue motor/GUI/CLI (MySQL, MariaDB, MongoDB) y estructura tabla-campo-valor con ejemplos LATAM."
brand_tone: academico-universitario
clay_variants: [card, callout-warning, callout-info, stepper]
showInTrackIndex: true
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/; EN mirror /en/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/; x-default es"
---

# Lesson spec — Fundamentos, motores y estructura

Merge: brand (`contrib-brand.md`) + clay (`contrib-clay.md`) + seo (`contrib-seo.md`).

## Metadata

- **track:** bases-de-datos
- **slug:** clase-02-fundamentos-motores-estructura
- **order:** 3
- **layout:** LessonLayout (hub) · ClassPageLayout (páginas internas)
- **canonical_path:** `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/`
- **legacy_redirect:** `teaching/bases-de-datos/clase-02-fundamentos-motores-estructura.html` → canonical
- **audience:** student only
- **pagination:** sí (ADR 011) — hub + 4 páginas internas
- **prerequisites:** clase-01-historia-bases-de-datos
- **Distinguir de POSW:** `/es/teaching/posw/bases-de-datos/`

Al publicar: actualizar `next` de clase-01 → `clase-02-fundamentos-motores-estructura`. Cuando exista clase-03, `next` de esta clase → `clase-03-ddl-dml-relacional`.

## Brand

- **title:** Fundamentos, motores y estructura: el abecedario operativo
- **tone:** académico-universitario (Sabio 25% + Creador 60% docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **persona:** *tú* en intro/práctica/reto/callouts/CTAs; impersonal en objetivos
- **prev:** clase-01-historia-bases-de-datos · **next:** null (clase-03 cuando exista)
- **breadcrumb UI:** `Clase 2 / Página X de 4` + título de página (no el slug)

### Mensajes clave

1. Capas antes que herramientas (motor ≠ GUI)
2. Criterio, no moda (relacional vs documentos según workload)
3. Fuente de verdad compartida (Excel ≠ SGBD en producción)
4. Precisión estructural (`Nombre_Programa`, literales con comillas)
5. Formación de tecnólogo (GUI + CLI + diagnóstico del motor)

### Títulos de sección (UI)

| Página | Título sugerido (ES) |
|--------|----------------------|
| Hub | Objetivos y mapa de la clase |
| que-es-y-tipos | Del mapa histórico al abecedario operativo |
| ↳ | Qué es una base de datos y qué es un SGBD |
| ↳ | Relacional frente a NoSQL: elegir según el escenario |
| motores-y-gestores | Motores: MySQL, MariaDB y MongoDB |
| ↳ | Gestores visuales (GUI): la ventana, no el motor |
| ↳ | CLI: administrar sin ratón |
| ↳ | Motor, GUI y CLI: tres roles, una sola fuente |
| estructura-tablas-campos | Tabla, campo, registro y valor |
| ↳ | Errores comunes · Casos reales |
| practica-y-cierre | Práctica guiada · Reto Andes Tech · Cierre · Miniquiz |

### CTAs

| Ubicación | Copy |
|-----------|------|
| Hub → primera página | Empezar: qué es una BD y qué es un SGBD |
| Fin de página → siguiente | Continuar a la siguiente página |
| Fin `practica-y-cierre` (sin clase 03) | Repasa el mapa del módulo Bases de Datos |
| Fin `practica-y-cierre` (clase 03 publicada) | Continuar a la Clase 03 — DDL y DML relacional |
| Reto | Abrir el reto: Monta el criterio de Andes Tech |
| Quiz | Comprobar lo aprendido (miniquiz) |

### Callouts

1. BD ≠ archivo compartido — **callout-warning**
2. Inventario vs catálogo flexible — **callout-info**
3. Diagnóstico rápido — **callout-warning**
4. Malas prácticas transversales — **callout-warning**
5. Pregunta de cierre: ¿dónde vive la fuente de verdad, qué motor la sostiene y con qué cliente la administrarás sin confundir las capas?

## Clay UI

| Página | Secciones / ritmo | clay_variant dominante | Interactivos |
|--------|-------------------|------------------------|--------------|
| Hub | Objetivos + ClassPagesNav | prose / card opcional | ClassPagesNav (sin cards en listado) |
| que-es-y-tipos | Intro mindmap → BD → SGBD flowchart → relacional → NoSQL | card | Mermaid ×2, CodeFiddle sql+json, CompareTable escenarios, Callout ×2 |
| motores-y-gestores | Motores → GUI → CLI → Compare roles | card | CodeFiddle bash×2+sql, CompareTable motor/GUI/CLI, Callout warning |
| estructura-tablas-campos | Estructura → errores → casos | stepper + card | StepReveal, CodeFiddle ×2, Mermaid erDiagram, Callout warning |
| practica-y-cierre | Práctica → reto → cierre → quiz | card | PracticeExercise ×5, ChallengeCard, QuizSection |

**Tokens:** primary `#0A2540`, secondary `#00C2FF`, accent `#6B4EFF`, neutral-light `#F4F6F8`, neutral-dark `#1E293B`; radius 20–28px; máx. 2 niveles clay.

**Espaciado:** prose `my-4`; Callout/Mermaid/CodeFiddle `my-6`; ClayCard wrappers `my-8`. No anidar Mermaid/CodeFiddle en ClayCard extra.

**CodeFiddle (obligatorio, nunca CodeBlock):**

| id | language |
|----|----------|
| `sql-select-cupos` | sql |
| `json-programa-flexible` | json |
| `bash-mariadb-connect` | bash |
| `sql-cli-select` | sql |
| `bash-mongosh` | bash |
| `sql-programas-ddl-dml` | sql |
| `sql-literal-correcto` | sql |

**Mermaid (ADR 013, contiguos a la promesa visual):**

| id | tipo |
|----|------|
| `mapa-capas-datos` | mindmap (hero visual en intro) |
| `flujo-cliente-motor` | flowchart |
| `er-programas` | erDiagram |

**CompareTable:** `inventario-vs-catalogo` · `motor-gui-cli`

**StepReveal:** `tabla-a-valor-programas` (4 pasos)

## SEO

- **seo_title:** Fundamentos de BD: motores, SGBD y estructura (45)
- **seo_description:** Define BD y SGBD, compara relacional vs NoSQL, distingue motor/GUI/CLI (MySQL, MariaDB, MongoDB) y estructura tabla-campo-valor con ejemplos LATAM. (147)
- **prev:** clase-01-historia-bases-de-datos · **next:** null
- **hreflang:** es primary; slug idéntico EN; x-default es
- **showInTrackIndex:** true solo hub; páginas internas false

### Meta por página

| page slug | seo_title | seo_description |
|-----------|-----------|-----------------|
| `que-es-y-tipos` | Qué es una BD: SGBD, SQL y NoSQL | Qué es una base de datos y un SGBD; modelos relacional y NoSQL; cuándo elegir tablas SQL o documentos con escenarios LATAM. |
| `motores-y-gestores` | Motores MySQL, MariaDB, MongoDB y GUI/CLI | Distingue motor/servidor (MySQL, MariaDB, MongoDB) de gestores GUI (phpMyAdmin, Workbench, DBeaver, Compass) y CLI (mysql, mongosh). |
| `estructura-tablas-campos` | Tablas, campos, registros y valores SQL | Estructura relacional: tabla, campo, registro y valor; nombres sin espacios (Nombre_Programa) y literales entre comillas simples. |
| `practica-y-cierre` | Práctica: fundamentos BD, motores y cierre | Práctica guiada, reto Andes Tech, cierre y miniquiz: BD vs SGBD, motores/GUI/CLI y estructura tabla-campo-valor. |

### Legacy redirects

| legacy | → canonical |
|--------|-------------|
| `teaching/bases-de-datos/clase-02-fundamentos-motores-estructura.html` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/` |
| `…/que-es-y-tipos.html` | `…/que-es-y-tipos/` |
| `…/motores-y-gestores.html` | `…/motores-y-gestores/` |
| `…/estructura-tablas-campos.html` | `…/estructura-tablas-campos/` |
| `…/practica-y-cierre.html` | `…/practica-y-cierre/` |

Slugs sin tildes (`que-es-y-tipos`). Slash final. No confundir con POSW.

## Interactividad

- MermaidDiagram ×3 (mindmap, flowchart, erDiagram)
- CompareTable ×2 (escenarios; motor/GUI/CLI)
- StepReveal ×1
- CodeFiddle ×7 (sql×4, json×1, bash×2)
- Callout ×4 (3 warning + 1 info)
- PracticeExercise ×5
- ChallengeCard ×1
- QuizSection ×1 (5 preguntas, solo `practica-y-cierre`)

## Nota ADR 011 (paginación)

Hub + 4 páginas (`que-es-y-tipos` → `motores-y-gestores` → `estructura-tablas-campos` → `practica-y-cierre`). Quiz por clase (clave `clase-02-fundamentos-motores-estructura`), no por página. `showInTrackIndex: true` solo hub. Detalle en `layout-spec.md` → `## Páginas`.

## Nota ADR 013

Mindmap `mapa-capas-datos`, flowchart `flujo-cliente-motor` y erDiagram `er-programas` obligatorios y contiguos a los H que prometen el visual; no sustituir por lista/tabla sola.
