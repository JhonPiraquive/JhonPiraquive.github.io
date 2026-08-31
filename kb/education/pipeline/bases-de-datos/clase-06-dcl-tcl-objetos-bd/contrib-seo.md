## SEO

Contribución de **seo-redirects-expert** para fusionar en `lesson-spec.md`.  
Clase 6 del track **Bases de Datos** (`order: 7`). Hub + **6** páginas (ADR 011). Prev track: `clase-05-normalizacion-esquemas`. Sin lección siguiente del módulo → `next: null`.

**No confundir** con POSW `/es/teaching/posw/bases-de-datos/` (`Bases de datos: SQL, NoSQL y ACID | POSW`). Esta clase profundiza DCL/TCL/objetos en el track `bases-de-datos`; canonical y redirects viven solo bajo ese track. El solapamiento temático con “ACID” de POSW se diferencia por slug, título (DCL/TCL/vistas/triggers) y ruta.

Al publicar esta clase, actualizar `next` en spec + `lesson-meta.ts` de **clase-05** → `clase-06-dcl-tcl-objetos-bd`. Encadenar cierre: `prev` del hub puede apuntar a `clase-05-normalizacion-esquemas/practica-y-cierre` si el layout del track encadena última página → siguiente hub.

### Frontmatter (merge — hub)

```yaml
seo_title: "DCL y TCL SQL: GRANT, ACID, vistas y triggers"
seo_description: "Completa el mapa SQL con DCL (GRANT/REVOKE), TCL y ACID, vistas, UDF, procedimientos y triggers; decide app vs BD con ejemplos MySQL/MariaDB LATAM."
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/; EN mirror /en/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/; x-default es"
prev: clase-05-normalizacion-esquemas
next: null
showInTrackIndex: true
```

### Meta hub (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `DCL y TCL SQL: GRANT, ACID, vistas y triggers` | 48 |
| `seo_description` | `Completa el mapa SQL con DCL (GRANT/REVOKE), TCL y ACID, vistas, UDF, procedimientos y triggers; decide app vs BD con ejemplos MySQL/MariaDB LATAM.` | 149 |

Incluye **DCL** + **TCL** + **SQL** al inicio (SERP + H1 diferenciado del título POSW y de Clases 03–05). GRANT / ACID / vistas / triggers cubren intención sin forzar sufijo `| Bases de datos` si supera 60.

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `SQL DCL & TCL: GRANT, ACID, views & triggers` | 46 |
| `seo_description` | `Complete the SQL map with DCL (GRANT/REVOKE), TCL and ACID, views, UDFs, procedures and triggers; decide app vs DB with MySQL/MariaDB LATAM examples.` | 148 |

### Meta por página interna (`showInTrackIndex: false`)

Canonical base: `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/{page}/`  
Patrón título: keywords de página primero; no forzar sufijo `| Bases de datos` si supera 60.

| page slug | `seo_title` (ES) | Chars | `seo_description` (ES) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `mapa-sql-familias` | `Familias SQL: DDL, DML, DCL y TCL` | 35 | `Ubica DDL, DML, DCL y TCL con acrónimos expandidos: qué toca cada familia y ejemplos de sentencias en laboratorio.` | 118 |
| `dcl-grant-revoke` | `DCL SQL: GRANT y REVOKE` | 24 | `Otorga y revoca privilegios en MySQL/MariaDB con mínimo privilegio; evita root compartido y GRANT ALL por costumbre.` | 118 |
| `tcl-transacciones-acid` | `TCL y ACID: COMMIT y ROLLBACK` | 32 | `Transacciones START TRANSACTION, COMMIT, ROLLBACK y SAVEPOINT; explica ACID con inscripción atómica cupo + matrícula.` | 126 |
| `vistas` | `Vistas SQL: CREATE VIEW y proyección` | 37 | `Crea y consulta vistas para simplificar SELECT y ocultar columnas sensibles; limita expectativas frente a tablas base.` | 121 |
| `funciones-procedimientos-triggers` | `UDF, PROCEDURE y TRIGGER en SQL` | 33 | `Funciones, procedimientos y triggers en MySQL/MariaDB; criterio claro de cuándo la lógica va en la app vs en la BD.` | 121 |
| `practica-y-cierre` | `Práctica: DCL, TCL, vistas y cierre` | 37 | `Práctica guiada, reto matrícula segura, cierre y miniquiz: DCL/TCL, ACID, vistas, UDF, procedimientos y triggers.` | 120 |

**EN (fase i18n) — páginas:**

| page slug | `seo_title` (EN) | Chars | `seo_description` (EN) | Chars |
|-----------|------------------|-------|------------------------|-------|
| `mapa-sql-familias` | `SQL families: DDL, DML, DCL & TCL` | 35 | `Place DDL, DML, DCL and TCL with expanded acronyms: what each family touches and example statements in the lab.` | 113 |
| `dcl-grant-revoke` | `SQL DCL: GRANT and REVOKE` | 26 | `Grant and revoke privileges in MySQL/MariaDB with least privilege; avoid shared root and habit GRANT ALL.` | 108 |
| `tcl-transacciones-acid` | `TCL and ACID: COMMIT and ROLLBACK` | 34 | `START TRANSACTION, COMMIT, ROLLBACK and SAVEPOINT; explain ACID with atomic enrollment (quota + insert).` | 112 |
| `vistas` | `SQL views: CREATE VIEW and projection` | 38 | `Create and query views to simplify SELECT and hide sensitive columns; set honest limits versus base tables.` | 110 |
| `funciones-procedimientos-triggers` | `SQL UDF, PROCEDURE, and TRIGGER` | 32 | `Functions, procedures and triggers in MySQL/MariaDB; clear judgment for when logic belongs in the app vs the DB.` | 116 |
| `practica-y-cierre` | `Practice: DCL, TCL, views & wrap-up` | 36 | `Guided practice, secure enrollment challenge, wrap-up and mini-quiz: DCL/TCL, ACID, views, UDFs, procedures and triggers.` | 126 |

### Navegación (`prev` / `next`)

**Track (hub de clase):**

| Campo | Valor | Destino |
|-------|-------|---------|
| `prev` | `clase-05-normalizacion-esquemas` | Hub clase 5 — `/es/teaching/bases-de-datos/clase-05-normalizacion-esquemas/` |
| `next` | `null` | Fin de módulo actual; CTA → mapa del módulo |

**Cadena interna (ADR 011):**

| Página | `prev` | `next` | `showInTrackIndex` |
|--------|--------|--------|--------------------|
| hub `clase-06-dcl-tcl-objetos-bd` | `clase-05-…/practica-y-cierre` *(o hub clase-05)* | `…/mapa-sql-familias` | **`true`** |
| `…/mapa-sql-familias` | hub | `…/dcl-grant-revoke` | **`false`** |
| `…/dcl-grant-revoke` | `…/mapa-sql-familias` | `…/tcl-transacciones-acid` | **`false`** |
| `…/tcl-transacciones-acid` | `…/dcl-grant-revoke` | `…/vistas` | **`false`** |
| `…/vistas` | `…/tcl-transacciones-acid` | `…/funciones-procedimientos-triggers` | **`false`** |
| `…/funciones-procedimientos-triggers` | `…/vistas` | `…/practica-y-cierre` | **`false`** |
| `…/practica-y-cierre` | `…/funciones-procedimientos-triggers` | `null` | **`false`** |

Preferir encadenar **última página clase-05 → hub clase-06** en `class-navigation` / layout-spec; índice del portal: hub→hub.

### URLs y redirects

| Tipo | Ruta |
|------|------|
| `canonical_path` hub (ES) | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/` |
| EN hub (fase i18n) | `/en/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/` |
| Página `mapa-sql-familias` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias/` |
| Página `dcl-grant-revoke` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/dcl-grant-revoke/` |
| Página `tcl-transacciones-acid` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/tcl-transacciones-acid/` |
| Página `vistas` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/vistas/` |
| Página `funciones-procedimientos-triggers` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/funciones-procedimientos-triggers/` |
| Página `practica-y-cierre` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/practica-y-cierre/` |
| Hub track | `/es/teaching/bases-de-datos/` |
| Hub lección `index` | `/es/teaching/bases-de-datos/index/` |

**Legacy redirects** (track nuevo; anotar merge):

| `legacy_redirect` | → canonical ES |
|-------------------|----------------|
| `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd.html` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/` |
| `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias.html` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias/` |
| `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/dcl-grant-revoke.html` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/dcl-grant-revoke/` |
| `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/tcl-transacciones-acid.html` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/tcl-transacciones-acid/` |
| `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/vistas.html` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/vistas/` |
| `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/funciones-procedimientos-triggers.html` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/funciones-procedimientos-triggers/` |
| `teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/practica-y-cierre.html` | `/es/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/practica-y-cierre/` |

Pendiente de merge:

- `kb/content/legacy-redirects.json` — claves de la tabla anterior
- `kb/content/url-mapping-legacy.md` — patrón `/pages/teaching/bases-de-datos/*.html` → `/es/teaching/bases-de-datos/{slug}/` (y subpáginas `{clase}/{pagina}/`)
- Sitemap post-build: incluir **7** canónicas ES (hub + 6 páginas); pares EN cuando exista `/en/`

Slash final en canónicas. Sin query params ni hash. Slugs sin tildes.

### Keywords en headings

H1 publicado (brand): `DCL, TCL, vistas, funciones, procedimientos y triggers` (o refinamiento brand) — no repetir literalmente el `seo_title` en el primer párrafo.

| Nivel | Página | Copy draft / brand | Copy SEO sugerido | Keyword objetivo |
|-------|--------|--------------------|-------------------|------------------|
| H1 | hub | DCL, TCL, vistas, funciones, procedimientos y triggers | DCL y TCL en SQL: GRANT, ACID y objetos | DCL TCL SQL |
| H2 | hub | Objetivos de aprendizaje | Objetivos: DCL, TCL, vistas y triggers | objetivos DCL TCL |
| H2 | `mapa-sql-familias` | Familias SQL | Familias SQL DDL DML DCL TCL | DDL DML DCL TCL |
| H2 | `dcl-grant-revoke` | GRANT / REVOKE | GRANT y REVOKE en MySQL | GRANT REVOKE |
| H2 | `dcl-grant-revoke` | Mínimo privilegio | Mínimo privilegio / least privilege | mínimo privilegio |
| H2 | `tcl-transacciones-acid` | Transacciones / ACID | Transacciones TCL y propiedades ACID | TCL ACID |
| H2 | `tcl-transacciones-acid` | COMMIT / ROLLBACK | COMMIT, ROLLBACK y SAVEPOINT | COMMIT ROLLBACK |
| H2 | `vistas` | CREATE VIEW | CREATE VIEW y proyección segura | CREATE VIEW |
| H2 | `funciones-procedimientos-triggers` | UDF / PROCEDURE / TRIGGER | UDF, PROCEDURE y TRIGGER | UDF PROCEDURE TRIGGER |
| H2 | `funciones-procedimientos-triggers` | App vs BD | Criterio app vs base de datos | app vs BD |
| H2 | `practica-y-cierre` | Práctica guiada | Práctica guiada | — (formativo) |
| H2 | `practica-y-cierre` | Reto integrador | Reto: Matrícula segura Rutas Digitales | Rutas Digitales |
| H2 | `practica-y-cierre` | Cierre | Cierre: permisos, atomicidad y objetos | — |
| H2 | `practica-y-cierre` | Miniquiz | Miniquiz — DCL, TCL y objetos | DCL TCL triggers |

Evitar duplicar en H2 y primer párrafo la misma frase literal (snippet y lectura).

**Primarias:** DCL, TCL, GRANT, REVOKE, ACID, CREATE VIEW, TRIGGER, PROCEDURE, UDF.

**Secundarias:** mínimo privilegio, COMMIT, ROLLBACK, SAVEPOINT, Atomicity, MySQL, MariaDB, app vs BD.

**Long-tail:** diferencia DELETE y REVOKE, inscripción atómica cupo, root compartido peligro, vista vs tabla, UDF vs PROCEDURE, trigger AFTER INSERT auditoría.

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | Igual que `seo_title` de la URL (hub o página) |
| `og:description` | Primer tramo de la `seo_description` correspondiente hasta el primer punto fuerte |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES de esa URL |
| `twitter:card` | `summary` |
| Imagen sugerida | Mapa familias SQL o flujo inscripción atómica (Mermaid del draft) cuando exista asset estático |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-06-dcl-tcl-objetos-bd` y subpáginas); **no** traducir el slug (ni a `class-06-dcl-tcl-db-objects`).
- **`x-default`:** `es`.
- **Título visible EN (hub):** `DCL, TCL, views, functions, procedures and triggers`.
- **Términos sin traducir:** SQL, DDL, DML, DCL, TCL, GRANT, REVOKE, COMMIT, ROLLBACK, SAVEPOINT, ACID, CREATE VIEW, UDF, PROCEDURE, TRIGGER, BEFORE/AFTER, INSERT/UPDATE/DELETE (como eventos), MySQL, MariaDB, InnoDB, `Nombre_Programa`, `CALL`.
- **Traducciones preferidas:** «mínimo privilegio» → `least privilege`; «vista» → `view`; «procedimiento almacenado» → `stored procedure`; «disparador» (si se usa) → `trigger`; «Práctica guiada» → `Guided practice`; «Reto integrador» → `Integrative challenge`; «atomicidad» → `atomicity`.
- **Sitemap:** incluir las 7 URLs ES; pares EN cuando exista `/en/`; `lastmod` sincronizado entre pares.
- **Colisión de slug de track:** el par EN es `/en/teaching/bases-de-datos/...`, no `/en/teaching/databases/...`.
- **Colisión temática POSW:** no canonicalizar hacia `/es/teaching/posw/bases-de-datos/`; son lecciones distintas.

### Registry / portal

| # | registry slug | showInTrackIndex | notas |
|---|---------------|------------------|-------|
| 1 | `bases-de-datos/clase-06-dcl-tcl-objetos-bd` | **true** | Hub; listado portal |
| 2 | `…/mapa-sql-familias` | **false** | Página 1/6; Mermaid familias |
| 3 | `…/dcl-grant-revoke` | **false** | Página 2/6; Callout danger root |
| 4 | `…/tcl-transacciones-acid` | **false** | Página 3/6; CompareTable ACID |
| 5 | `…/vistas` | **false** | Página 4/6 |
| 6 | `…/funciones-procedimientos-triggers` | **false** | Página 5/6; UDF/SP/trigger + app vs BD |
| 7 | `…/practica-y-cierre` | **false** | Página 6/6; quiz clase |

Quiz: una sola clave `clase-06-dcl-tcl-objetos-bd`, solo en `practica-y-cierre`.
