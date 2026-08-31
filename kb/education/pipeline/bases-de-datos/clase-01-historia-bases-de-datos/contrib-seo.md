## SEO

Contribución de **seo-redirects-expert** para fusionar en `lesson-spec.md`.  
Clase 1 del track **Bases de Datos** (`order: 2`). Hub previo: `index`. Sin lección siguiente en el manifiesto actual (`status.md`: bootstrap index + esta clase).

**No confundir** con POSW `/es/teaching/posw/bases-de-datos/` (`Bases de datos: SQL, NoSQL y ACID | POSW`). Canonical y redirects de esta clase viven solo bajo el track `bases-de-datos`.

### Frontmatter (merge)

```yaml
seo_title: "Historia de las bases de datos: Codd, SQL y NoSQL"
seo_description: "Historia de las bases de datos en 7 etapas: archivos planos, Codd, SQL, NoSQL y cloud. Aprende a elegir modelo con criterio, no por moda."
hreflang_notes: "es primary; canonical /es/teaching/bases-de-datos/clase-01-historia-bases-de-datos/; EN mirror /en/teaching/bases-de-datos/clase-01-historia-bases-de-datos/; x-default es"
prev: index
next: null
```

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `Historia de las bases de datos: Codd, SQL y NoSQL` | 49 |
| `seo_description` | `Historia de las bases de datos en 7 etapas: archivos planos, Codd, SQL, NoSQL y cloud. Aprende a elegir modelo con criterio, no por moda.` | 137 |

Incluye **Historia** + **bases de datos** al inicio (SERP + H1 diferenciado del título POSW). Codd / SQL / NoSQL cubren intención de búsqueda sin rellenar hasta 60.

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seo_title` | `Database history: 7 stages, Codd, SQL & NoSQL` | 45 |
| `seo_description` | `Seven stages of database history: flat files, Codd 1970, SQL, NoSQL and cloud. Choose a data model by fit, not by hype.` | 119 |

### Navegación (`prev` / `next`)

| Campo | Valor | Destino |
|-------|-------|---------|
| `prev` | `index` | Hub del módulo — `/es/teaching/bases-de-datos/index/` |
| `next` | `null` | Última lección publicada del track (bootstrap) |

Al añadir clase 2, actualizar `next` en spec + `lesson-meta.ts` (no dejar enlace huérfano).

### URLs y redirects

| Tipo | Ruta |
|------|------|
| `canonical_path` (ES) | `/es/teaching/bases-de-datos/clase-01-historia-bases-de-datos/` |
| EN (fase i18n) | `/en/teaching/bases-de-datos/clase-01-historia-bases-de-datos/` |
| `legacy_redirect` | `teaching/bases-de-datos/clase-01-historia-bases-de-datos.html` → canonical ES |
| Hub track | `/es/teaching/bases-de-datos/` |
| Hub lección `index` | `/es/teaching/bases-de-datos/index/` |

Pendiente de merge (esta clase es track nuevo; no hay HTML legacy aún):

- `kb/content/legacy-redirects.json` — clave `teaching/bases-de-datos/clase-01-historia-bases-de-datos.html` → `/es/teaching/bases-de-datos/clase-01-historia-bases-de-datos/`
- `kb/content/url-mapping-legacy.md` — fila patrón `/pages/teaching/bases-de-datos/*.html` → `/es/teaching/bases-de-datos/{slug}/` (y la de `index.html` si no existe)
- Sitemap post-build: incluir canonical ES; par EN cuando exista `/en/`

Slash final en canónicas (como el resto de teaching). Sin query params ni hash.

### Keywords en headings

H1 publicado (brand): `Historia de las bases de datos: de los archivos planos a la convergencia` — no repetir literalmente el `seo_title` en el primer párrafo.

| Nivel | Copy draft | Copy SEO sugerido | Keyword objetivo |
|-------|------------|-------------------|------------------|
| H1 | Historia de las Bases de Datos | Historia de las bases de datos: de los archivos planos a la convergencia | historia bases de datos |
| H2 | Introducción: por qué la historia importa hoy | Por qué importa la historia de las bases de datos | historia bases de datos |
| H2 | 1. Archivos planos / pre-BD | Archivos planos: el problema raíz de las bases de datos | archivos planos |
| H2 | 2. Modelo jerárquico (IMS) y red / CODASYL | Modelos jerárquico y de red: IMS y CODASYL | IMS CODASYL |
| H2 | 3. Modelo relacional — Codd 1970 | Modelo relacional de Codd (1970) e independencia de datos | modelo relacional Codd |
| H2 | 4. Prototipos y SQL comercial | SQL comercial: System R, INGRES y Oracle | SQL System R |
| H2 | 5. Imperio relacional | Imperio relacional: SQL estándar y modelo ER | SQL ER |
| H2 | 6. NoSQL y web-scale | NoSQL web-scale: documentos, clave-valor y grafos | NoSQL |
| H2 | 7. Hoy — NewSQL, cloud, HTAP, vectoriales | Hoy: NewSQL, cloud y bases vectoriales | NewSQL cloud |
| H2 | Comparación de modelos | Comparación de modelos de bases de datos | modelos bases de datos |
| H2 | Errores comunes | Errores comunes en la historia de las bases de datos | — |
| H2 | Casos reales | Casos reales: PYME y startup LATAM | PYME LATAM |
| H2 | Práctica guiada | Práctica guiada | — (formativo) |
| H2 | Reto integrador | Reto integrador: AndinaMarket | — |
| H2 | Cierre | Cierre: siete etapas de las bases de datos | siete etapas |
| H2 | Miniquiz | Miniquiz — Historia de las bases de datos | historia bases de datos |

Evitar duplicar en H2 y primer párrafo la misma frase literal (snippet y lectura).

**Primarias:** historia de las bases de datos, modelo relacional, Codd, SQL, NoSQL.

**Secundarias:** archivos planos, IMS, CODASYL, independencia de datos, System R, ER, NewSQL, cloud.

**Long-tail:** historia de las bases de datos 7 etapas, Codd 1970 independencia de datos, SQL vs NoSQL para PYME, archivos planos vs SGBD, IMS y CODASYL vs relacional.

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | Igual que `seo_title` |
| `og:description` | Primer tramo de `seo_description` hasta «cloud.» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Timeline de 7 etapas (Mermaid del draft) cuando exista asset estático |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-01-historia-bases-de-datos`); **no** traducir el slug (ni a `class-01-database-history`).
- **`x-default`:** `es`.
- **Título visible EN:** `History of databases: from flat files to convergence`.
- **Términos sin traducir:** SQL, NoSQL, NewSQL, IMS, CODASYL, Codd, System R, INGRES, Oracle, ER, HTAP, ACID, CAP, BASE, BigTable, Dynamo, PostgreSQL, MongoDB, Cassandra, Redis, `pgvector`, SGBD (EN: DBMS en prosa, no en slug).
- **Traducciones preferidas:** «Práctica guiada» → `Guided practice`; «Reto integrador» → `Integrative challenge`; «independencia de datos» → `data independence`; «archivos planos» → `flat files`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
- **Colisión de slug de track:** el par EN es `/en/teaching/bases-de-datos/...`, no `/en/teaching/databases/...`.
