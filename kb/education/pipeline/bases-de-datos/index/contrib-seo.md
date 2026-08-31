## SEO

Contribución de **seo-redirects-expert**. Hub de orientación del track **Bases de Datos** (`slug: index`, order 1). Track nuevo: no hay filas legacy aún; anotar propuestas para `legacy-redirects.json` y `url-mapping-legacy.md`.

### Meta (ES)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `Bases de Datos: hub, objetivos y recorrido` | 42 |
| `seo_description` | `Hub Bases de Datos: objetivos y resultados oficiales, prerrequisitos y mapa a la Clase 01 (historia). Orientación para universitarios LATAM.` | 140 |

**Límites:** `seo_title` ≤ 60; `seo_description` ≤ 160.

### URLs y redirects

| Tipo | Ruta |
|------|------|
| `canonical_path` | `/es/teaching/bases-de-datos/` |
| EN (fase i18n) | `/en/teaching/bases-de-datos/` |
| `legacy_redirect` | `teaching/bases-de-datos/index.html` → `/es/teaching/bases-de-datos/` |

**No confundir** con la lección POSW `teaching/posw/bases-de-datos.html` → `/es/teaching/posw/bases-de-datos/` (track distinto).

### Navegación (`prev` / `next`)

| Campo | Valor | Notas |
|-------|-------|-------|
| `prev` | `null` | Primera pieza del track (hub) |
| `next` | `clase-01-historia-bases-de-datos` | CTA principal del draft |

### Keywords naturales en headings

| Nivel | Copy SEO sugerido | Keyword objetivo |
|-------|-------------------|------------------|
| H1 | Bases de Datos | bases de datos (track / hub) |
| H2 | Qué aprenderás en Bases de Datos | bases de datos, módulo |
| H3 | Qué es una base de datos | base de datos, BD |
| H3 | Qué es un SGBD | SGBD, sistema gestor |
| H2 | Prerrequisitos del módulo | prerrequisitos |
| H2 | Objetivos de aprendizaje | objetivos de aprendizaje |
| H2 | Resultados de aprendizaje | resultados de aprendizaje |
| H2 | Cómo está organizado el curso | recorrido, clases |
| H2 | Caso motivador: tienda sin base de datos | PYME, inventario |
| H2 | Práctica: reflexión breve | práctica |
| H2 | Reto integrador: leer Clase 01 e hitos | clase 01, historia |
| H2 | Cierre del hub | checklist, siguiente clase |

Evitar duplicar en H2 y primer párrafo la misma frase literal. Headings orientativos (hub), no tutorial SQL.

**Primarias:** bases de datos, hub Bases de Datos, objetivos de aprendizaje, resultados de aprendizaje, SGBD.

**Secundarias:** modelo relacional, Clase 01 historia, prerrequisitos, módulo universitario LATAM.

**Long-tail:** qué es una base de datos, qué es un SGBD, objetivos del módulo Bases de Datos, recorrido clase historia bases de datos.

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Canonical ES:** `/es/teaching/bases-de-datos/`.
- **Mirror EN (fase i18n):** `/en/teaching/bases-de-datos/` — mismo path de hub; no traducir el segmento `bases-de-datos`.
- **Pares hreflang:** `es` ↔ `en`; slug de hub `index` no aparece en URL pública del track root.
- **`x-default`:** `es`.
- **Título EN sugerido:** `Databases: module hub, goals & path`.
- **Meta EN sugerida:** `Databases module hub: official learning goals and outcomes, prerequisites, and path to Class 01 (history). Orientation for LATAM students.`
- **Términos sin traducir:** SGBD → DBMS en EN; SQL, DDL, DML (si aparecen en UI secundaria); slug `clase-01-historia-bases-de-datos`.
- **Traducciones preferidas:** «objetivos de aprendizaje» → `learning objectives`; «resultados de aprendizaje» → `learning outcomes`; «Reto integrador» → `Integrative challenge`; «Hub» puede quedar como `Hub` o `Course hub`.
- **Sitemap:** incluir `/es/teaching/bases-de-datos/` ya; añadir `/en/...` cuando exista locale EN; `lastmod` sincronizado entre pares.

### Redirects propuestos (track nuevo)

Anotar en `kb/content/legacy-redirects.json` (aún no existen):

```json
"teaching/bases-de-datos/index.html": "/es/teaching/bases-de-datos/",
"teaching/bases-de-datos/clase-01-historia-bases-de-datos.html": "/es/teaching/bases-de-datos/clase-01-historia-bases-de-datos/"
```

Fila propuesta para `kb/content/url-mapping-legacy.md`:

| Legacy | Nueva |
|--------|-------|
| `/pages/teaching/bases-de-datos/index.html` | `/es/teaching/bases-de-datos/` |
| `/pages/teaching/bases-de-datos/*.html` | `/es/teaching/bases-de-datos/{slug}/` |

**Nota:** el hub canónico es `/es/teaching/bases-de-datos/` (sin `/index/` en path), alineado a hubs `poo` / `sea` / `pbpew`, no al patrón CSO `/…/index/`.
