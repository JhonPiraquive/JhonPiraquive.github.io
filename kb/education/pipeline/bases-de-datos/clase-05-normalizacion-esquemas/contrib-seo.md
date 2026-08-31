## SEO

Contribución de **seo-redirects-expert** para fusionar en `lesson-spec.md`.  
Clase 5 del track **Bases de Datos** (`order: 6`). Hub + **5** páginas (ADR 011). Prev track: `clase-04-modelos-datos-er`. Next track: `clase-06-dcl-tcl-objetos-bd` *(cuando esté publicada; si aún no, `next: null` y CTA → mapa del módulo)*.

**No confundir** con POSW `/es/teaching/posw/bases-de-datos/` (`Bases de datos: SQL, NoSQL y ACID | POSW`). Canonical y redirects de esta clase viven solo bajo el track `bases-de-datos`.

Al publicar esta clase, actualizar `next` en spec + `lesson-meta.ts` de **clase-04** → `clase-05-normalizacion-esquemas`. Encadenar cierre: `prev` del hub puede apuntar a `clase-04-modelos-datos-er/practica-y-cierre` si el layout del track encadena última página → siguiente hub. Cuando exista clase-06, `next` de `practica-y-cierre` → `clase-06-dcl-tcl-objetos-bd`.

### Frontmatter (merge — hub)

```yaml
seo_title: "Normalización SQL: 1FN, 2FN, 3FN y DF"
seo_description: "Aplica normalización con DF, 1FN–3FN y BCNF; argumenta desnormalización consciente; distingue estrella vs copo de nieve en BI con ejemplos LATAM."
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/; EN mirror /en/teaching/bases-de-datos/clase-05-normalizacion-esquemas/; x-default es"
prev: clase-04-modelos-datos-er
next: clase-06-dcl-tcl-objetos-bd
showInTrackIndex: true
```

### Meta hub (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `Normalización SQL: 1FN, 2FN, 3FN y DF` | 39 |
| `seo_description` | `Aplica normalización con DF, 1FN–3FN y BCNF; argumenta desnormalización consciente; distingue estrella vs copo de nieve en BI con ejemplos LATAM.` | 147 |

Incluye **Normalización** + **1FN/2FN/3FN** + **DF** al inicio (SERP + H1 diferenciado del título POSW y de Clase 04 modelos/ER). Desnormalización / estrella / copo cubren intención sin forzar sufijo `| Bases de datos` si supera 60.

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `SQL normalization: 1NF, 2NF, 3NF & FDs` | 39 |
| `seo_description` | `Apply normalization with FDs, 1NF–3NF and BCNF; argue conscious denormalization; distinguish star vs snowflake in BI with LATAM examples.` | 141 |

### Meta por página interna (`showInTrackIndex: false`)

Canonical base: `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/{page}/`  
Patrón título: keywords de página primero; no forzar sufijo `| Bases de datos` si supera 60.

| page slug | `seo_title` (ES) | Chars | `seo_description` (ES) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `redundancia-y-dependencia-funcional` | `Redundancia y dependencia funcional` | 36 | `Detecta redundancia y anomalías de inserción, actualización y borrado; define dependencia funcional A → B con ejemplos de academia LATAM.` | 136 |
| `formas-normales-1-2-3` | `Formas normales 1FN, 2FN y 3FN` | 32 | `Ejecuta el procedimiento 1FN → 2FN → 3FN con checklist, SQL antes/después y mención BCNF desde una tabla sucia.` | 116 |
| `desnormalizacion` | `Desnormalización consciente en SQL` | 34 | `Cuándo y por qué desnormalizar con política: snapshot de factura, lecturas y riesgos frente a redundancia accidental.` | 119 |
| `estrella-y-copo-de-nieve` | `Esquema en estrella y copo de nieve` | 36 | `Compara estrella vs snowflake en BI: dimensiones planas o normalizadas; no confundir con el OLTP de matrículas.` | 115 |
| `practica-y-cierre` | `Práctica: normalización, BI y cierre` | 37 | `Práctica guiada, reto Rutas Digitales, cierre y miniquiz: DF, 1FN–3FN, desnormalización y estrella/copo.` | 110 |

**EN (fase i18n) — páginas:**

| page slug | `seo_title` (EN) | Chars | `seo_description` (EN) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `redundancia-y-dependencia-funcional` | `Redundancy and functional dependency` | 37 | `Spot redundancy and insert/update/delete anomalies; define functional dependency A → B with LATAM academy examples.` | 117 |
| `formas-normales-1-2-3` | `Normal forms 1NF, 2NF, and 3NF` | 31 | `Run the 1NF → 2NF → 3NF procedure with checklists, before/after SQL and a BCNF mention from a dirty table.` | 110 |
| `desnormalizacion` | `Conscious denormalization in SQL` | 33 | `When and why to denormalize with policy: invoice snapshots, reads and risks versus accidental redundancy.` | 108 |
| `estrella-y-copo-de-nieve` | `Star schema and snowflake schema` | 33 | `Compare star vs snowflake in BI: flat or normalized dimensions; do not confuse with enrollment OLTP.` | 105 |
| `practica-y-cierre` | `Practice: normalization, BI & wrap-up` | 37 | `Guided practice, Rutas Digitales challenge, wrap-up and mini-quiz: FDs, 1NF–3NF, denormalization and star/snowflake.` | 119 |

### Navegación (`prev` / `next`)

**Track (hub de clase):**

| Campo | Valor | Destino |
|-------|-------|---------|
| `prev` | `clase-04-modelos-datos-er` | Hub clase 4 — `/es/teaching/bases-de-datos/clase-04-modelos-datos-er/` |
| `next` | `clase-06-dcl-tcl-objetos-bd` | Hub clase 6 *(si publicada; si no, `null` + CTA mapa módulo)* |

**Cadena interna (ADR 011):**

| Página | `prev` | `next` | `showInTrackIndex` |
|--------|--------|--------|--------------------|
| hub `clase-05-normalizacion-esquemas` | `clase-04-…/practica-y-cierre` *(o hub clase-04)* | `…/redundancia-y-dependencia-funcional` | **`true`** |
| `…/redundancia-y-dependencia-funcional` | hub | `…/formas-normales-1-2-3` | **`false`** |
| `…/formas-normales-1-2-3` | `…/redundancia-y-dependencia-funcional` | `…/desnormalizacion` | **`false`** |
| `…/desnormalizacion` | `…/formas-normales-1-2-3` | `…/estrella-y-copo-de-nieve` | **`false`** |
| `…/estrella-y-copo-de-nieve` | `…/desnormalizacion` | `…/practica-y-cierre` | **`false`** |
| `…/practica-y-cierre` | `…/estrella-y-copo-de-nieve` | `clase-06-…` *(o `null`)* | **`false`** |

Preferir encadenar **última página clase-04 → hub clase-05** en `class-navigation` / layout-spec; índice del portal: hub→hub.

### URLs y redirects

| Tipo | Ruta |
|------|------|
| `canonical_path` hub (ES) | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/` |
| EN hub (fase i18n) | `/en/teaching/bases-de-datos/clase-05-normalizacion-esquemas/` |
| Página `redundancia-y-dependencia-funcional` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional/` |
| Página `formas-normales-1-2-3` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/formas-normales-1-2-3/` |
| Página `desnormalizacion` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/desnormalizacion/` |
| Página `estrella-y-copo-de-nieve` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/estrella-y-copo-de-nieve/` |
| Página `practica-y-cierre` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/practica-y-cierre/` |
| Hub track | `/es/teaching/bases-de-datos/` |
| Hub lección `index` | `/es/teaching/bases-de-datos/index/` |

**Legacy redirects** (track nuevo; anotar merge):

| `legacy_redirect` | → canonical ES |
|-------------------|----------------|
| `teaching/bases-de-datos/clase-05-normalizacion-esquemas.html` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/` |
| `teaching/bases-de-datos/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional.html` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional/` |
| `teaching/bases-de-datos/clase-05-normalizacion-esquemas/formas-normales-1-2-3.html` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/formas-normales-1-2-3/` |
| `teaching/bases-de-datos/clase-05-normalizacion-esquemas/desnormalizacion.html` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/desnormalizacion/` |
| `teaching/bases-de-datos/clase-05-normalizacion-esquemas/estrella-y-copo-de-nieve.html` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/estrella-y-copo-de-nieve/` |
| `teaching/bases-de-datos/clase-05-normalizacion-esquemas/practica-y-cierre.html` | `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/practica-y-cierre/` |

Pendiente de merge:

- `kb/content/legacy-redirects.json` — claves de la tabla anterior
- `kb/content/url-mapping-legacy.md` — patrón `/pages/teaching/bases-de-datos/*.html` → `/es/teaching/bases-de-datos/{slug}/` (y subpáginas `{clase}/{pagina}/`)
- Sitemap post-build: incluir **6** canónicas ES (hub + 5 páginas); pares EN cuando exista `/en/`

Slash final en canónicas. Sin query params ni hash. Slugs sin tildes.

### Keywords en headings

H1 publicado (brand): `Normalización, desnormalización y copo de nieve` (o refinamiento brand) — no repetir literalmente el `seo_title` en el primer párrafo.

| Nivel | Página | Copy draft / brand | Copy SEO sugerido | Keyword objetivo |
|-------|--------|--------------------|-------------------|------------------|
| H1 | hub | Normalización, desnormalización y copo de nieve | Normalización SQL: formas normales y DF | normalización SQL |
| H2 | hub | Objetivos de aprendizaje | Objetivos: DF, 1FN–3FN y BI | objetivos normalización |
| H2 | `redundancia-y-dependencia-funcional` | Redundancia | Redundancia y anomalías en esquemas | redundancia |
| H2 | `redundancia-y-dependencia-funcional` | Dependencia funcional | Dependencia funcional A → B | dependencia funcional |
| H2 | `formas-normales-1-2-3` | 1FN / 2FN / 3FN | Formas normales 1FN, 2FN y 3FN | 1FN 2FN 3FN |
| H2 | `formas-normales-1-2-3` | BCNF | Forma normal de Boyce-Codd (BCNF) | BCNF |
| H2 | `desnormalizacion` | Desnormalización | Desnormalización consciente | desnormalización |
| H2 | `estrella-y-copo-de-nieve` | Estrella / copo de nieve | Esquema en estrella y copo de nieve | estrella snowflake |
| H2 | `practica-y-cierre` | Práctica guiada | Práctica guiada | — (formativo) |
| H2 | `practica-y-cierre` | Reto integrador | Reto: De la sábana al esquema limpio | Rutas Digitales |
| H2 | `practica-y-cierre` | Cierre | Cierre: DF, formas y BI | — |
| H2 | `practica-y-cierre` | Miniquiz | Miniquiz — Normalización y copo de nieve | normalización 1FN |

Evitar duplicar en H2 y primer párrafo la misma frase literal (snippet y lectura).

**Primarias:** normalización, dependencia funcional, 1FN / 1NF, 2FN / 2NF, 3FN / 3NF, desnormalización, estrella, copo de nieve / snowflake.

**Secundarias:** BCNF, anomalías, redundancia, OLTP, BI, hechos, dimensiones, snapshot.

**Long-tail:** diferencia 2FN y 3FN, dependencia parcial vs transitiva, desnormalización consciente factura, estrella vs snowflake BI, CSV en celdas viola 1FN.

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | Igual que `seo_title` de la URL (hub o página) |
| `og:description` | Primer tramo de la `seo_description` correspondiente hasta el primer punto fuerte |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES de esa URL |
| `twitter:card` | `summary` |
| Imagen sugerida | Flujo 1FN→3FN o diagrama estrella vs copo (Mermaid del draft) cuando exista asset estático |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-05-normalizacion-esquemas` y subpáginas); **no** traducir el slug (ni a `class-05-normalization-schemas`).
- **`x-default`:** `es`.
- **Título visible EN (hub):** `Normalization, denormalization and snowflake`.
- **Términos sin traducir:** SQL, 1NF/2NF/3NF (junto a 1FN/2FN/3FN en ES), BCNF, DF/FD en siglas tras expandir, OLTP, BI, Mermaid, `Nombre_Programa`, snowflake (como nombre de esquema).
- **Traducciones preferidas:** «normalización» → `normalization`; «desnormalización» → `denormalization`; «dependencia funcional» → `functional dependency`; «copo de nieve» → `snowflake schema`; «estrella» → `star schema`; «forma normal» → `normal form`; «Práctica guiada» → `Guided practice`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir las 6 URLs ES; pares EN cuando exista `/en/`; `lastmod` sincronizado entre pares.
- **Colisión de slug de track:** el par EN es `/en/teaching/bases-de-datos/...`, no `/en/teaching/databases/...`.

### Registry / portal

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-05-normalizacion-esquemas` | **true** | Hub; listado portal |
| 2 | `…/redundancia-y-dependencia-funcional` | **false** | Página 1/5 |
| 3 | `…/formas-normales-1-2-3` | **false** | Página 2/5; Mermaid flujo + CodeFiddle |
| 4 | `…/desnormalizacion` | **false** | Página 3/5 |
| 5 | `…/estrella-y-copo-de-nieve` | **false** | Página 4/5; Mermaid estrella/copo |
| 6 | `…/practica-y-cierre` | **false** | Página 5/5; quiz clase |

Quiz: una sola clave `clase-05-normalizacion-esquemas`, solo en `practica-y-cierre`.
