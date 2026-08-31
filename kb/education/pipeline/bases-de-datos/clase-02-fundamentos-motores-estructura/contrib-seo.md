## SEO

Contribución de **seo-redirects-expert** para fusionar en `lesson-spec.md`.  
Clase 2 del track **Bases de Datos** (`order: 3`). Hub + **4 páginas** (ADR 011). Prev track: `clase-01-historia-bases-de-datos`. Sin lección siguiente publicada (`clase-03-ddl-dml-relacional` aún in_progress → `next: null`).

**No confundir** con POSW `/es/teaching/posw/bases-de-datos/` (`Bases de datos: SQL, NoSQL y ACID | POSW`). Canonical y redirects de esta clase viven solo bajo el track `bases-de-datos`.

Al publicar esta clase, actualizar `next` en spec + `lesson-meta.ts` de **clase-01** → `clase-02-fundamentos-motores-estructura` (hoy `null`).

### Frontmatter (merge — hub)

```yaml
seo_title: "Fundamentos de BD: motores, SGBD y estructura"
seo_description: "Define BD y SGBD, compara relacional vs NoSQL, distingue motor/GUI/CLI (MySQL, MariaDB, MongoDB) y estructura tabla-campo-valor con ejemplos LATAM."
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/; EN mirror /en/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/; x-default es"
prev: clase-01-historia-bases-de-datos
next: null
showInTrackIndex: true
```

### Meta hub (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `Fundamentos de BD: motores, SGBD y estructura` | 45 |
| `seo_description` | `Define BD y SGBD, compara relacional vs NoSQL, distingue motor/GUI/CLI (MySQL, MariaDB, MongoDB) y estructura tabla-campo-valor con ejemplos LATAM.` | 147 |

Incluye **Fundamentos** + **BD** / **SGBD** / **motores** al inicio (SERP + H1 diferenciado del título POSW). Relacional / NoSQL / MySQL / MariaDB / MongoDB cubren intención sin rellenar hasta 60.

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `DB fundamentals: engines, DBMS & structure` | 42 |
| `seo_description` | `Define DB vs DBMS, compare relational vs NoSQL, tell engine/GUI/CLI apart (MySQL, MariaDB, MongoDB), and table-field-row structure with LATAM examples.` | 151 |

### Meta por página interna (`showInTrackIndex: false`)

Canonical base: `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/{page}/`  
Patrón título: keywords de página primero; no forzar sufijo `| Bases de datos` si supera 60.

| page slug | `seo_title` (ES) | Chars | `seo_description` (ES) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `que-es-y-tipos` | `Qué es una BD: SGBD, SQL y NoSQL` | 32 | `Qué es una base de datos y un SGBD; modelos relacional y NoSQL; cuándo elegir tablas SQL o documentos con escenarios LATAM.` | 123 |
| `motores-y-gestores` | `Motores MySQL, MariaDB, MongoDB y GUI/CLI` | 41 | `Distingue motor/servidor (MySQL, MariaDB, MongoDB) de gestores GUI (phpMyAdmin, Workbench, DBeaver, Compass) y CLI (mysql, mongosh).` | 132 |
| `estructura-tablas-campos` | `Tablas, campos, registros y valores SQL` | 39 | `Estructura relacional: tabla, campo, registro y valor; nombres sin espacios (Nombre_Programa) y literales entre comillas simples.` | 129 |
| `practica-y-cierre` | `Práctica: fundamentos BD, motores y cierre` | 42 | `Práctica guiada, reto Andes Tech, cierre y miniquiz: BD vs SGBD, motores/GUI/CLI y estructura tabla-campo-valor.` | 112 |

**EN (fase i18n) — páginas:**

| page slug | `seo_title` (EN) | Chars | `seo_description` (EN) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `que-es-y-tipos` | `What is a DB: DBMS, SQL & NoSQL` | 32 | `What a database and a DBMS are; relational vs NoSQL models; when to choose SQL tables or documents with LATAM scenarios.` | 121 |
| `motores-y-gestores` | `MySQL, MariaDB, MongoDB engines & GUI/CLI` | 42 | `Tell engine/server (MySQL, MariaDB, MongoDB) apart from GUI tools (phpMyAdmin, Workbench, DBeaver, Compass) and CLI (mysql, mongosh).` | 138 |
| `estructura-tablas-campos` | `Tables, fields, rows & SQL values` | 34 | `Relational structure: table, field, row and value; no spaces in names (Nombre_Programa) and single-quoted string literals.` | 124 |
| `practica-y-cierre` | `Practice: DB fundamentals, engines & wrap-up` | 46 | `Guided practice, Andes Tech challenge, wrap-up and mini-quiz: DB vs DBMS, engines/GUI/CLI and table-field-value structure.` | 126 |

### Navegación (`prev` / `next`)

**Track (hub de clase):**

| Campo | Valor | Destino |
|-------|-------|---------|
| `prev` | `clase-01-historia-bases-de-datos` | Hub clase 1 — `/es/teaching/bases-de-datos/clase-01-historia-bases-de-datos/` |
| `next` | `null` | Clase 3 no publicada; al existir → `clase-03-ddl-dml-relacional` |

**Cadena interna (ADR 011):**

| Página | `prev` | `next` | `showInTrackIndex` |
|--------|--------|--------|--------------------|
| hub `clase-02-fundamentos-motores-estructura` | `clase-01-historia-bases-de-datos` | `…/que-es-y-tipos` | **`true`** |
| `…/que-es-y-tipos` | hub | `…/motores-y-gestores` | **`false`** |
| `…/motores-y-gestores` | `…/que-es-y-tipos` | `…/estructura-tablas-campos` | **`false`** |
| `…/estructura-tablas-campos` | `…/motores-y-gestores` | `…/practica-y-cierre` | **`false`** |
| `…/practica-y-cierre` | `…/estructura-tablas-campos` | `null` (luego clase 3 hub) | **`false`** |

Opcional cadena cross-clase: `prev` del hub puede apuntar a `clase-01-historia-bases-de-datos/practica-y-cierre` si el layout del track encadena última página → siguiente hub (como CSO). Preferir hub→hub en índice; documentar en `layout-spec` / `class-navigation`.

### URLs y redirects

| Tipo | Ruta |
|------|------|
| `canonical_path` hub (ES) | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/` |
| EN hub (fase i18n) | `/en/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/` |
| Página `que-es-y-tipos` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/que-es-y-tipos/` |
| Página `motores-y-gestores` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/motores-y-gestores/` |
| Página `estructura-tablas-campos` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/estructura-tablas-campos/` |
| Página `practica-y-cierre` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/practica-y-cierre/` |
| Hub track | `/es/teaching/bases-de-datos/` |
| Hub lección `index` | `/es/teaching/bases-de-datos/index/` |

**Legacy redirects** (track nuevo; anotar merge):

| `legacy_redirect` | → canonical ES |
|-------------------|----------------|
| `teaching/bases-de-datos/clase-02-fundamentos-motores-estructura.html` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/` |
| `teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/que-es-y-tipos.html` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/que-es-y-tipos/` |
| `teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/motores-y-gestores.html` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/motores-y-gestores/` |
| `teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/estructura-tablas-campos.html` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/estructura-tablas-campos/` |
| `teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/practica-y-cierre.html` | `/es/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/practica-y-cierre/` |

Pendiente de merge:

- `kb/content/legacy-redirects.json` — claves de la tabla anterior
- `kb/content/url-mapping-legacy.md` — ya cubre patrón `/pages/teaching/bases-de-datos/*.html` → `/es/teaching/bases-de-datos/{slug}/` (y subpáginas `{clase}/{pagina}/`)
- Sitemap post-build: incluir 5 canónicas ES (hub + 4 páginas); pares EN cuando exista `/en/`

Slash final en canónicas. Sin query params ni hash. Slugs sin tildes (`que-es-y-tipos`, no `qué-es-y-tipos`).

### Keywords en headings

H1 publicado (brand): `Fundamentos, motores y estructura` (o refinamiento brand) — no repetir literalmente el `seo_title` en el primer párrafo.

| Nivel | Página | Copy draft | Copy SEO sugerido | Keyword objetivo |
|-------|--------|------------|-------------------|------------------|
| H1 | hub | Fundamentos, motores y estructura | Fundamentos de bases de datos: motores y estructura | fundamentos bases de datos |
| H2 | hub | Objetivos de aprendizaje | Objetivos: BD, SGBD, motores y estructura | objetivos BD SGBD |
| H2 | `que-es-y-tipos` | Qué es y para qué sirve una base de datos | Qué es una base de datos (BD) | qué es una base de datos |
| H2 | `que-es-y-tipos` | SGBD — Sistema Gestor | Qué es un SGBD (sistema gestor) | SGBD |
| H2 | `que-es-y-tipos` | Tipos — bases relacionales | Bases de datos relacionales y SQL | bases de datos relacionales |
| H2 | `que-es-y-tipos` | Tipos — NoSQL | NoSQL: documentos y otros modelos | NoSQL |
| H2 | `motores-y-gestores` | Motores / servidores | Motores MySQL, MariaDB y MongoDB | MySQL MariaDB MongoDB |
| H2 | `motores-y-gestores` | Gestores visuales — GUI | Gestores GUI: phpMyAdmin, Workbench, DBeaver | phpMyAdmin GUI |
| H2 | `motores-y-gestores` | CLI | CLI: mysql, mariadb y mongosh | CLI mysql mongosh |
| H2 | `motores-y-gestores` | Motor vs gestor vs CLI | Motor vs GUI vs CLI | motor vs gestor |
| H2 | `estructura-tablas-campos` | Estructura: tabla, campo… | Tabla, campo, registro y valor | tabla campo registro |
| H2 | `practica-y-cierre` | Práctica guiada | Práctica guiada | — (formativo) |
| H2 | `practica-y-cierre` | Reto integrador | Reto integrador: Andes Tech | Andes Tech |
| H2 | `practica-y-cierre` | Cierre | Cierre: capas BD, motor y clientes | — |
| H2 | `practica-y-cierre` | Miniquiz | Miniquiz — Fundamentos, motores y estructura | fundamentos BD |

Evitar duplicar en H2 y primer párrafo la misma frase literal (snippet y lectura).

**Primarias:** fundamentos bases de datos, BD, SGBD, motores MySQL MariaDB MongoDB, estructura tablas.

**Secundarias:** relacional vs NoSQL, GUI phpMyAdmin, CLI, tabla campo registro valor, Nombre_Programa.

**Long-tail:** qué es una BD vs SGBD, motor vs phpMyAdmin, MySQL vs MariaDB vs MongoDB, inventario vs catálogo flexible NoSQL, literales SQL comillas simples.

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | Igual que `seo_title` de la URL (hub o página) |
| `og:description` | Primer tramo de la `seo_description` correspondiente hasta el primer punto fuerte |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES de esa URL |
| `twitter:card` | `summary` |
| Imagen sugerida | Mapa mental capas BD/SGBD/cliente (Mermaid del draft) cuando exista asset estático |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-02-fundamentos-motores-estructura` y subpáginas); **no** traducir el slug (ni a `class-02-fundamentals-engines-structure`).
- **`x-default`:** `es`.
- **Título visible EN (hub):** `Fundamentals, engines and structure`.
- **Términos sin traducir:** SQL, NoSQL, MySQL, MariaDB, MongoDB, phpMyAdmin, MySQL Workbench, DBeaver, MongoDB Compass, `mongosh`, GUI, CLI, SGBD (EN: DBMS en prosa, no en slug), `Nombre_Programa`.
- **Traducciones preferidas:** «Práctica guiada» → `Guided practice`; «Reto integrador» → `Integrative challenge`; «motor» → `engine` / `database server`; «gestor visual» → `GUI client`; «tabla / campo / registro / valor» → `table / field / row / value`.
- **Sitemap:** incluir las 5 URLs ES; pares EN cuando exista `/en/`; `lastmod` sincronizado entre pares.
- **Colisión de slug de track:** el par EN es `/en/teaching/bases-de-datos/...`, no `/en/teaching/databases/...`.

### Registry / portal

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-02-fundamentos-motores-estructura` | **true** | Hub; listado portal |
| 2 | `…/que-es-y-tipos` | **false** | Página 1/4 |
| 3 | `…/motores-y-gestores` | **false** | Página 2/4 |
| 4 | `…/estructura-tablas-campos` | **false** | Página 3/4 |
| 5 | `…/practica-y-cierre` | **false** | Página 4/4; quiz clase |

Quiz: una sola clave `clase-02-fundamentos-motores-estructura`, solo en `practica-y-cierre`.
