## SEO

Contribución de **seo-redirects-expert** para fusionar en `lesson-spec.md`.  
Clase 4 del track **Bases de Datos** (`order: 5`). Hub + **5 páginas** (ADR 011). Prev track: `clase-03-ddl-dml-relacional`. Sin lección siguiente publicada → `next: null` (brief de `clase-05-normalizacion-esquemas` existe; draft/spec/TSX pendientes).

**No confundir** con POSW `/es/teaching/posw/bases-de-datos/` (`Bases de datos: SQL, NoSQL y ACID | POSW`). Canonical y redirects de esta clase viven solo bajo el track `bases-de-datos`.

Al publicar esta clase, actualizar `next` en spec + `lesson-meta.ts` de **clase-03** → `clase-04-modelos-datos-er` (hoy `null` en contrib-seo clase-03). Encadenar cierre: `prev` del hub puede apuntar a `clase-03-ddl-dml-relacional/practica-y-cierre` si el layout del track encadena última página → siguiente hub.

### Frontmatter (merge — hub)

```yaml
seo_title: "Modelo de datos y ER: niveles, tipos y FK"
seo_description: "Diseña modelos conceptual, lógico y físico; diagramas ER con cardinalidad; compara relacional, NoSQL y grafos; transforma ER→SQL con tipos, PK y FK."
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-04-modelos-datos-er/; EN mirror /en/teaching/bases-de-datos/clase-04-modelos-datos-er/; x-default es"
prev: clase-03-ddl-dml-relacional
next: null
showInTrackIndex: true
```

### Meta hub (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `Modelo de datos y ER: niveles, tipos y FK` | 41 |
| `seo_description` | `Diseña modelos conceptual, lógico y físico; diagramas ER con cardinalidad; compara relacional, NoSQL y grafos; transforma ER→SQL con tipos, PK y FK.` | 148 |

Incluye **modelo de datos** + **ER** al inicio (SERP + H1 diferenciado del título POSW y de Clase 03 DDL/DML). Niveles / tipos / FK cubren intención sin forzar sufijo `| Bases de datos` si supera 60.

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `Data models & ER: levels, types & FKs` | 37 |
| `seo_description` | `Design conceptual, logical and physical models; ER diagrams with cardinality; compare relational, NoSQL and graph DBs; map ER→SQL with types, PKs and FKs.` | 154 |

### Meta por página interna (`showInTrackIndex: false`)

Canonical base: `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/{page}/`  
Patrón título: keywords de página primero; no forzar sufijo `| Bases de datos` si supera 60.

| page slug | `seo_title` (ES) | Chars | `seo_description` (ES) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `modelos-conceptual-logico-fisico` | `Modelo conceptual, lógico y físico` | 34 | `Qué es un modelo de datos y cómo bajar de requisitos a DDL: niveles conceptual, lógico y físico con ejemplos de academia LATAM.` | 127 |
| `diagramas-er` | `Diagrama ER: entidades y cardinalidad` | 37 | `Crea e interpreta diagramas entidad-relación (ER): entidades, atributos, relaciones 1:1, 1:N, N:M y Mermaid erDiagram.` | 118 |
| `familias-relacional-nosql-grafos` | `Relacional, NoSQL, grafos y estrella` | 36 | `Compara bases relacionales, NoSQL y grafos; reconoce esquemas en estrella y copo de nieve (intro BI) con escenarios PYME LATAM.` | 127 |
| `transformacion-tipos-llaves` | `ER a SQL: tipos, PK y FK` | 24 | `Transforma el ER a tablas SQL: FK en el lado N, tabla puente N:M, tipos justificados (no todo VARCHAR), PK/FK y padres primero.` | 127 |
| `practica-y-cierre` | `Práctica: modelo ER, tipos y cierre` | 35 | `Práctica guiada, reto Rutas Digitales ER→SQL, cierre y miniquiz: niveles de modelo, cardinalidad, familias y llaves.` | 116 |

**EN (fase i18n) — páginas:**

| page slug | `seo_title` (EN) | Chars | `seo_description` (EN) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `modelos-conceptual-logico-fisico` | `Conceptual, logical & physical models` | 37 | `What a data model is and how to go from requirements to DDL: conceptual, logical and physical levels with LATAM academy examples.` | 129 |
| `diagramas-er` | `ER diagrams: entities & cardinality` | 35 | `Create and read entity-relationship (ER) diagrams: entities, attributes, 1:1, 1:N, N:M relationships and Mermaid erDiagram.` | 123 |
| `familias-relacional-nosql-grafos` | `Relational, NoSQL, graphs & star schema` | 39 | `Compare relational, NoSQL and graph databases; recognize star vs snowflake schemas (BI intro) with LATAM SME scenarios.` | 119 |
| `transformacion-tipos-llaves` | `ER to SQL: types, PKs & FKs` | 27 | `Map ER to SQL tables: FK on the N side, N:M bridge table, justified types (not all VARCHAR), PKs/FKs and parents-first DDL.` | 123 |
| `practica-y-cierre` | `Practice: ER model, types & wrap-up` | 35 | `Guided practice, Rutas Digitales ER→SQL challenge, wrap-up and mini-quiz: model levels, cardinality, families and keys.` | 119 |

### Navegación (`prev` / `next`)

**Track (hub de clase):**

| Campo | Valor | Destino |
|-------|-------|---------|
| `prev` | `clase-03-ddl-dml-relacional` | Hub clase 3 — `/es/teaching/bases-de-datos/clase-03-ddl-dml-relacional/` |
| `next` | `null` | Sin clase 05 publicada; CTA → mapa del módulo |

**Cadena interna (ADR 011):**

| Página | `prev` | `next` | `showInTrackIndex` |
|--------|--------|--------|--------------------|
| hub `clase-04-modelos-datos-er` | `clase-03-…/practica-y-cierre` *(o hub clase-03)* | `…/modelos-conceptual-logico-fisico` | **`true`** |
| `…/modelos-conceptual-logico-fisico` | hub | `…/diagramas-er` | **`false`** |
| `…/diagramas-er` | `…/modelos-conceptual-logico-fisico` | `…/familias-relacional-nosql-grafos` | **`false`** |
| `…/familias-relacional-nosql-grafos` | `…/diagramas-er` | `…/transformacion-tipos-llaves` | **`false`** |
| `…/transformacion-tipos-llaves` | `…/familias-relacional-nosql-grafos` | `…/practica-y-cierre` | **`false`** |
| `…/practica-y-cierre` | `…/transformacion-tipos-llaves` | `null` | **`false`** |

Preferir encadenar **última página clase-03 → hub clase-04** en `class-navigation` / layout-spec; índice del portal: hub→hub. Cuando exista clase-05, `next` de `practica-y-cierre` (o hub) → `clase-05-normalizacion-esquemas`.

### URLs y redirects

| Tipo | Ruta |
|------|------|
| `canonical_path` hub (ES) | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/` |
| EN hub (fase i18n) | `/en/teaching/bases-de-datos/clase-04-modelos-datos-er/` |
| Página `modelos-conceptual-logico-fisico` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/modelos-conceptual-logico-fisico/` |
| Página `diagramas-er` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/diagramas-er/` |
| Página `familias-relacional-nosql-grafos` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/familias-relacional-nosql-grafos/` |
| Página `transformacion-tipos-llaves` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/transformacion-tipos-llaves/` |
| Página `practica-y-cierre` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/practica-y-cierre/` |
| Hub track | `/es/teaching/bases-de-datos/` |
| Hub lección `index` | `/es/teaching/bases-de-datos/index/` |

**Legacy redirects** (track nuevo; anotar merge):

| `legacy_redirect` | → canonical ES |
|-------------------|----------------|
| `teaching/bases-de-datos/clase-04-modelos-datos-er.html` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/` |
| `teaching/bases-de-datos/clase-04-modelos-datos-er/modelos-conceptual-logico-fisico.html` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/modelos-conceptual-logico-fisico/` |
| `teaching/bases-de-datos/clase-04-modelos-datos-er/diagramas-er.html` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/diagramas-er/` |
| `teaching/bases-de-datos/clase-04-modelos-datos-er/familias-relacional-nosql-grafos.html` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/familias-relacional-nosql-grafos/` |
| `teaching/bases-de-datos/clase-04-modelos-datos-er/transformacion-tipos-llaves.html` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/transformacion-tipos-llaves/` |
| `teaching/bases-de-datos/clase-04-modelos-datos-er/practica-y-cierre.html` | `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/practica-y-cierre/` |

Pendiente de merge:

- `kb/content/legacy-redirects.json` — claves de la tabla anterior
- `kb/content/url-mapping-legacy.md` — patrón `/pages/teaching/bases-de-datos/*.html` → `/es/teaching/bases-de-datos/{slug}/` (y subpáginas `{clase}/{pagina}/`)
- Sitemap post-build: incluir **6** canónicas ES (hub + 5 páginas); pares EN cuando exista `/en/`

Slash final en canónicas. Sin query params ni hash. Slugs sin tildes.

### Keywords en headings

H1 publicado (brand): `Modelos de datos, ER, familias y tipos` (o refinamiento brand) — no repetir literalmente el `seo_title` en el primer párrafo.

| Nivel | Página | Copy draft / brand | Copy SEO sugerido | Keyword objetivo |
|-------|--------|--------------------|-------------------|------------------|
| H1 | hub | Modelos de datos, ER, familias y tipos | Modelo de datos y diagrama ER a SQL | modelo de datos ER |
| H2 | hub | Objetivos de aprendizaje | Objetivos: modelo, ER, familias y tipos | objetivos modelo ER |
| H2 | `modelos-conceptual-logico-fisico` | Modelo de datos | Qué es un modelo de datos | modelo de datos |
| H2 | `modelos-conceptual-logico-fisico` | Modelo conceptual / lógico / físico | Modelo conceptual, lógico y físico | conceptual lógico físico |
| H2 | `diagramas-er` | Diagrama ER | Diagrama entidad-relación (ER) | diagrama ER |
| H2 | `diagramas-er` | Cardinalidad | Cardinalidad 1:1, 1:N y N:M | cardinalidad |
| H2 | `familias-relacional-nosql-grafos` | Familia relacional / NoSQL / grafos | Bases relacionales, NoSQL y de grafos | NoSQL grafos |
| H2 | `familias-relacional-nosql-grafos` | Estrella vs copo de nieve | Esquema en estrella y copo de nieve | estrella snowflake |
| H2 | `transformacion-tipos-llaves` | Transformación ER → SQL | Transformación ER a tablas SQL | ER a SQL |
| H2 | `transformacion-tipos-llaves` | Tipos de datos / PK / FK | Tipos SQL, llave primaria y foránea | PK FK tipos |
| H2 | `practica-y-cierre` | Práctica guiada | Práctica guiada | — (formativo) |
| H2 | `practica-y-cierre` | Reto integrador | Reto: Diseño ER→SQL de Rutas Digitales | Rutas Digitales |
| H2 | `practica-y-cierre` | Cierre | Cierre: modelo, ER y familias | — |
| H2 | `practica-y-cierre` | Miniquiz | Miniquiz — Modelos, ER y tipos | modelo ER tipos |

Evitar duplicar en H2 y primer párrafo la misma frase literal (snippet y lectura).

**Primarias:** modelo de datos, diagrama ER, entidad-relación, conceptual lógico físico, transformación ER SQL, primary key / foreign key.

**Secundarias:** cardinalidad, NoSQL, bases de grafos, estrella, copo de nieve / snowflake, VARCHAR, tabla puente, Mermaid erDiagram.

**Long-tail:** diferencia modelo conceptual y físico, dónde va la FK en 1:N, N:M tabla puente, todo VARCHAR mala práctica, estrella vs snowflake intro, relacional vs NoSQL vs grafos.

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | Igual que `seo_title` de la URL (hub o página) |
| `og:description` | Primer tramo de la `seo_description` correspondiente hasta el primer punto fuerte |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES de esa URL |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama ER Rutas Digitales (Mermaid `erDiagram` del draft) o flujo conceptual→lógico→físico cuando exista asset estático |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-04-modelos-datos-er` y subpáginas); **no** traducir el slug (ni a `class-04-data-models-er`).
- **`x-default`:** `es`.
- **Título visible EN (hub):** `Data models, ER, families and types`.
- **Términos sin traducir:** SQL, ER, NoSQL, Mermaid, `erDiagram`, PRIMARY KEY, FOREIGN KEY, PK/FK en siglas, VARCHAR, INT, DATE, DECIMAL, AUTO INCREMENT, CONSTRAINT, UNIQUE, NOT NULL, OLTP, BI, snowflake (como nombre de esquema), `Nombre_Programa`.
- **Traducciones preferidas:** «modelo de datos» → `data model`; «entidad-relación» → `entity-relationship`; «conceptual / lógico / físico» → `conceptual / logical / physical`; «cardinalidad» → `cardinality`; «tabla puente» → `bridge / junction table`; «copo de nieve» → `snowflake schema`; «estrella» → `star schema`; «Práctica guiada» → `Guided practice`; «Reto integrador» → `Integrative challenge`; «llave primaria / foránea» → `primary / foreign key`.
- **Sitemap:** incluir las 6 URLs ES; pares EN cuando exista `/en/`; `lastmod` sincronizado entre pares.
- **Colisión de slug de track:** el par EN es `/en/teaching/bases-de-datos/...`, no `/en/teaching/databases/...`.

### Registry / portal

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-04-modelos-datos-er` | **true** | Hub; listado portal |
| 2 | `…/modelos-conceptual-logico-fisico` | **false** | Página 1/5 |
| 3 | `…/diagramas-er` | **false** | Página 2/5; Mermaid erDiagram |
| 4 | `…/familias-relacional-nosql-grafos` | **false** | Página 3/5; CompareTable familias |
| 5 | `…/transformacion-tipos-llaves` | **false** | Página 4/5; CodeFiddle ER→SQL |
| 6 | `…/practica-y-cierre` | **false** | Página 5/5; quiz clase |

Quiz: una sola clave `clase-04-modelos-datos-er`, solo en `practica-y-cierre`.
