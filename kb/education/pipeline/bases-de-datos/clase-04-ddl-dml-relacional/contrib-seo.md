## SEO

Contribución de **seo-redirects-expert** para fusionar en `lesson-spec.md`.  
Clase 3 del track **Bases de Datos** (`order: 4`). Hub + **8 páginas** (ADR 011). Prev track: `clase-02-fundamentos-motores-estructura`. Sin lección siguiente publicada → `next: null`.

**No confundir** con POSW `/es/teaching/posw/bases-de-datos/` (`Bases de datos: SQL, NoSQL y ACID | POSW`). Canonical y redirects de esta clase viven solo bajo el track `bases-de-datos`.

Al publicar esta clase, actualizar `next` en spec + `lesson-meta.ts` de **clase-02** → `clase-03-ddl-dml-relacional` (hoy `null` en contrib-seo clase-02). Encadenar cierre: `prev` del hub puede apuntar a `clase-02-fundamentos-motores-estructura/practica-y-cierre` si el layout del track encadena última página → siguiente hub.

### Frontmatter (merge — hub)

```yaml
seo_title: "DDL y DML SQL: agregados, FK y JOINs"
seo_description: "Aplica DDL y DML en SQL: CREATE/ALTER, PK/UNIQUE, INSERT/SELECT, WHERE, agregados, UPDATE/DELETE seguros, FK y JOINs INNER/LEFT/RIGHT con ejemplos LATAM."
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/; EN mirror /en/teaching/bases-de-datos/clase-03-ddl-dml-relacional/; x-default es"
prev: clase-02-fundamentos-motores-estructura
next: null
showInTrackIndex: true
```

### Meta hub (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `DDL y DML SQL: agregados, FK y JOINs` | 39 |
| `seo_description` | `Aplica DDL y DML en SQL: CREATE/ALTER, PK/UNIQUE, INSERT/SELECT, WHERE, agregados, UPDATE/DELETE seguros, FK y JOINs INNER/LEFT/RIGHT con ejemplos LATAM.` | 154 |

Incluye **DDL** + **DML** + **SQL** al inicio (SERP + H1 diferenciado del título POSW y de Clase 02). Agregados / FK / JOINs cubren intención sin forzar sufijo `| Bases de datos` si supera 60.

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `SQL DDL & DML: aggregates, FKs & JOINs` | 40 |
| `seo_description` | `Apply SQL DDL and DML: CREATE/ALTER, PK/UNIQUE, INSERT/SELECT, WHERE, aggregates, safe UPDATE/DELETE, FKs and INNER/LEFT/RIGHT JOINs with LATAM examples.` | 152 |

### Meta por página interna (`showInTrackIndex: false`)

Canonical base: `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/{page}/`  
Patrón título: keywords de página primero; no forzar sufijo `| Bases de datos` si supera 60.

| page slug | `seo_title` (ES) | Chars | `seo_description` (ES) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `ddl-estructura` | `DDL SQL: CREATE, DROP y ALTER TABLE` | 37 | `DDL frente a DML; CREATE/DROP DATABASE y TABLE, ALTER COLUMN y AUTO INCREMENT para construir el esquema con criterios de laboratorio.` | 137 |
| `ddl-restricciones` | `Restricciones SQL: PK, UNIQUE y NOT NULL` | 41 | `Llave primaria, UNIQUE y NOT NULL/NULL: integridad de filas y atributos de negocio (Nombre_Programa) en el motor, no solo en la app.` | 140 |
| `dml-insert-select` | `DML SQL: INSERT y SELECT básicos` | 33 | `Manipula filas con INSERT y SELECT; reglas de nombres sin espacios y literales entre comillas simples con tildes LATAM.` | 120 |
| `dml-filtros-orden` | `WHERE, DISTINCT, ORDER BY y LIMIT` | 34 | `Filtra con WHERE, elimina duplicados con DISTINCT, ordena con ORDER BY y acota con LIMIT para consultas top-N confiables.` | 119 |
| `agregados-group-having` | `Agregados SQL: GROUP BY y HAVING` | 33 | `AVG, SUM, COUNT, MAX y MIN; agrupa con GROUP BY y filtra grupos con HAVING frente a WHERE sobre filas.` | 110 |
| `update-delete` | `UPDATE y DELETE SQL seguros con WHERE` | 39 | `Modifica y elimina filas con WHERE obligatorio, SELECT previo y backup: el peligro de UPDATE/DELETE sin filtro.` | 116 |
| `relacional-fk-joins` | `Modelo relacional, FK e INNER/LEFT JOIN` | 40 | `ER vs relacional, cardinalidad, CONSTRAINT FK (padres primero) e INNER/LEFT/RIGHT JOIN con NULLs y pregunta de negocio.` | 124 |
| `practica-y-cierre` | `Práctica: DDL, DML, JOINs y cierre` | 36 | `Práctica guiada, reto Rutas Digitales, cierre y miniquiz: DDL/DML, agregados, UPDATE/DELETE seguros y JOINs.` | 113 |

**EN (fase i18n) — páginas:**

| page slug | `seo_title` (EN) | Chars | `seo_description` (EN) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `ddl-estructura` | `SQL DDL: CREATE, DROP & ALTER TABLE` | 36 | `DDL vs DML; CREATE/DROP DATABASE and TABLE, ALTER COLUMN and AUTO INCREMENT to build schemas with lab-safe criteria.` | 120 |
| `ddl-restricciones` | `SQL constraints: PK, UNIQUE & NOT NULL` | 39 | `Primary keys, UNIQUE and NOT NULL/NULL: row and business-attribute integrity in the engine, not only in the app.` | 117 |
| `dml-insert-select` | `SQL DML: INSERT and basic SELECT` | 34 | `Manipulate rows with INSERT and SELECT; no spaces in names and single-quoted literals with LATAM accents.` | 108 |
| `dml-filtros-orden` | `WHERE, DISTINCT, ORDER BY & LIMIT` | 34 | `Filter with WHERE, dedupe with DISTINCT, sort with ORDER BY and cap with LIMIT for reliable top-N queries.` | 109 |
| `agregados-group-having` | `SQL aggregates: GROUP BY & HAVING` | 34 | `AVG, SUM, COUNT, MAX and MIN; group with GROUP BY and filter groups with HAVING versus row-level WHERE.` | 107 |
| `update-delete` | `Safe SQL UPDATE & DELETE with WHERE` | 36 | `Change and delete rows with mandatory WHERE, prior SELECT and backup: the risk of UPDATE/DELETE without a filter.` | 115 |
| `relacional-fk-joins` | `Relational model, FKs & INNER/LEFT JOIN` | 41 | `ER vs relational, cardinality, FK CONSTRAINT (parents first) and INNER/LEFT/RIGHT JOIN with NULLs and business questions.` | 125 |
| `practica-y-cierre` | `Practice: DDL, DML, JOINs & wrap-up` | 37 | `Guided practice, Rutas Digitales challenge, wrap-up and mini-quiz: DDL/DML, aggregates, safe UPDATE/DELETE and JOINs.` | 120 |

### Navegación (`prev` / `next`)

**Track (hub de clase):**

| Campo | Valor | Destino |
|-------|-------|---------|
| `prev` | `clase-02-fundamentos-motores-estructura` | Hub clase 2 — `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/` |
| `next` | `null` | Sin clase 04; CTA → mapa del módulo |

**Cadena interna (ADR 011):**

| Página | `prev` | `next` | `showInTrackIndex` |
|--------|--------|--------|--------------------|
| hub `clase-03-ddl-dml-relacional` | `clase-02-…/practica-y-cierre` *(o hub clase-02)* | `…/ddl-estructura` | **`true`** |
| `…/ddl-estructura` | hub | `…/ddl-restricciones` | **`false`** |
| `…/ddl-restricciones` | `…/ddl-estructura` | `…/dml-insert-select` | **`false`** |
| `…/dml-insert-select` | `…/ddl-restricciones` | `…/dml-filtros-orden` | **`false`** |
| `…/dml-filtros-orden` | `…/dml-insert-select` | `…/agregados-group-having` | **`false`** |
| `…/agregados-group-having` | `…/dml-filtros-orden` | `…/update-delete` | **`false`** |
| `…/update-delete` | `…/agregados-group-having` | `…/relacional-fk-joins` | **`false`** |
| `…/relacional-fk-joins` | `…/update-delete` | `…/practica-y-cierre` | **`false`** |
| `…/practica-y-cierre` | `…/relacional-fk-joins` | `null` | **`false`** |

Preferir encadenar **última página clase-02 → hub clase-03** en `class-navigation` / layout-spec; índice del portal: hub→hub.

### URLs y redirects

| Tipo | Ruta |
|------|------|
| `canonical_path` hub (ES) | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/` |
| EN hub (fase i18n) | `/en/teaching/bases-de-datos/clase-03-ddl-dml-relacional/` |
| Página `ddl-estructura` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/ddl-estructura/` |
| Página `ddl-restricciones` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/ddl-restricciones/` |
| Página `dml-insert-select` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/dml-insert-select/` |
| Página `dml-filtros-orden` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/dml-filtros-orden/` |
| Página `agregados-group-having` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/agregados-group-having/` |
| Página `update-delete` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/update-delete/` |
| Página `relacional-fk-joins` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/relacional-fk-joins/` |
| Página `practica-y-cierre` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/practica-y-cierre/` |
| Hub track | `/es/teaching/bases-de-datos/` |
| Hub lección `index` | `/es/teaching/bases-de-datos/index/` |

**Legacy redirects** (track nuevo; anotar merge):

| `legacy_redirect` | → canonical ES |
|-------------------|----------------|
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/` |
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional/ddl-estructura.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/ddl-estructura/` |
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional/ddl-restricciones.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/ddl-restricciones/` |
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional/dml-insert-select.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/dml-insert-select/` |
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional/dml-filtros-orden.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/dml-filtros-orden/` |
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional/agregados-group-having.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/agregados-group-having/` |
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional/update-delete.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/update-delete/` |
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional/relacional-fk-joins.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/relacional-fk-joins/` |
| `teaching/bases-de-datos/clase-03-ddl-dml-relacional/practica-y-cierre.html` | `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/practica-y-cierre/` |

Pendiente de merge:

- `kb/content/legacy-redirects.json` — claves de la tabla anterior
- `kb/content/url-mapping-legacy.md` — patrón `/pages/teaching/bases-de-datos/*.html` → `/es/teaching/bases-de-datos/{slug}/` (y subpáginas `{clase}/{pagina}/`)
- Sitemap post-build: incluir **9** canónicas ES (hub + 8 páginas); pares EN cuando exista `/en/`

Slash final en canónicas. Sin query params ni hash. Slugs sin tildes.

### Keywords en headings

H1 publicado (brand): `DDL, DML, agregados y modelo relacional` (o refinamiento brand) — no repetir literalmente el `seo_title` en el primer párrafo.

| Nivel | Página | Copy draft / brand | Copy SEO sugerido | Keyword objetivo |
|-------|--------|--------------------|-------------------|------------------|
| H1 | hub | DDL, DML, agregados y modelo relacional | DDL y DML en SQL: agregados y JOINs | DDL DML SQL |
| H2 | hub | Objetivos de aprendizaje | Objetivos: DDL, DML, FK y JOINs | objetivos DDL DML |
| H2 | `ddl-estructura` | DDL frente a DML | Qué es DDL frente a DML | DDL vs DML |
| H2 | `ddl-estructura` | CREATE DATABASE / TABLE | CREATE DATABASE y CREATE TABLE | CREATE TABLE |
| H2 | `ddl-restricciones` | PRIMARY KEY / UNIQUE / NOT NULL | Restricciones PK, UNIQUE y NOT NULL | primary key UNIQUE |
| H2 | `dml-insert-select` | INSERT / SELECT | INSERT y SELECT en SQL | INSERT SELECT |
| H2 | `dml-filtros-orden` | WHERE / ORDER BY / LIMIT | WHERE, ORDER BY y LIMIT | WHERE ORDER BY LIMIT |
| H2 | `agregados-group-having` | GROUP BY / HAVING | GROUP BY y HAVING en SQL | GROUP BY HAVING |
| H2 | `update-delete` | UPDATE / DELETE | UPDATE y DELETE con WHERE | UPDATE DELETE WHERE |
| H2 | `relacional-fk-joins` | Modelo relacional / JOINs | Modelo relacional, FK e INNER/LEFT JOIN | foreign key JOIN |
| H2 | `practica-y-cierre` | Práctica guiada | Práctica guiada | — (formativo) |
| H2 | `practica-y-cierre` | Reto integrador | Reto: Matrículas de Rutas Digitales | Rutas Digitales |
| H2 | `practica-y-cierre` | Cierre | Cierre: estructura, datos y backup | — |
| H2 | `practica-y-cierre` | Miniquiz | Miniquiz — DDL, DML y JOINs | DDL DML JOINs |

Evitar duplicar en H2 y primer párrafo la misma frase literal (snippet y lectura).

**Primarias:** DDL, DML, SQL, CREATE TABLE, INSERT SELECT, JOIN, foreign key / llave foránea.

**Secundarias:** PRIMARY KEY, UNIQUE, NOT NULL, WHERE, GROUP BY, HAVING, UPDATE DELETE, AUTO INCREMENT, modelo relacional, ER.

**Long-tail:** DDL vs DML diferencia, DELETE sin WHERE peligro, INNER JOIN vs LEFT JOIN, padres primero FK, Nombre_Programa sin espacios, HAVING vs WHERE.

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | Igual que `seo_title` de la URL (hub o página) |
| `og:description` | Primer tramo de la `seo_description` correspondiente hasta el primer punto fuerte |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES de esa URL |
| `twitter:card` | `summary` |
| Imagen sugerida | Flujo DDL→DML→JOIN o diagrama JOINs (Mermaid del draft) cuando exista asset estático |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-03-ddl-dml-relacional` y subpáginas); **no** traducir el slug (ni a `class-03-ddl-dml-relational`).
- **`x-default`:** `es`.
- **Título visible EN (hub):** `DDL, DML, aggregates and the relational model`.
- **Términos sin traducir:** SQL, DDL, DML, PRIMARY KEY, UNIQUE, NOT NULL, NULL, AUTO INCREMENT, INNER JOIN, LEFT JOIN, RIGHT JOIN, GROUP BY, HAVING, CONSTRAINT, FK/PK en siglas, `Nombre_Programa`.
- **Traducciones preferidas:** «Práctica guiada» → `Guided practice`; «Reto integrador» → `Integrative challenge`; «llave primaria / foránea» → `primary / foreign key`; «agregados» → `aggregates`; «restricciones» → `constraints`.
- **Sitemap:** incluir las 9 URLs ES; pares EN cuando exista `/en/`; `lastmod` sincronizado entre pares.
- **Colisión de slug de track:** el par EN es `/en/teaching/bases-de-datos/...`, no `/en/teaching/databases/...`.

### Registry / portal

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-03-ddl-dml-relacional` | **true** | Hub; listado portal |
| 2 | `…/ddl-estructura` | **false** | Página 1/8 |
| 3 | `…/ddl-restricciones` | **false** | Página 2/8 |
| 4 | `…/dml-insert-select` | **false** | Página 3/8 |
| 5 | `…/dml-filtros-orden` | **false** | Página 4/8 |
| 6 | `…/agregados-group-having` | **false** | Página 5/8 |
| 7 | `…/update-delete` | **false** | Página 6/8 |
| 8 | `…/relacional-fk-joins` | **false** | Página 7/8; Mermaid JOINs |
| 9 | `…/practica-y-cierre` | **false** | Página 8/8; quiz clase |

Quiz: una sola clave `clase-03-ddl-dml-relacional`, solo en `practica-y-cierre`.
