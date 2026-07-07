---
track: configuracion-servicios-web
topic_expert: topic-expert-web-services
updated: 2026-07-06
tsx_migration: complete
pedagogy_compliance: complete
build: passed
revision: malas-practicas-mundo-real
pagination: enabled
---

# Pipeline Configuración de Servicios Web — estado

## Paginación interna (ADR 011)

Cada clase = **hub** + **páginas temáticas** (`{clase}/{pagina}`). Nav prev/next encadenada. Portal lista solo hubs (`showInTrackIndex: false` en páginas internas).

| clase | hub | páginas | total registry |
|-------|-----|---------|----------------|
| clase-01-fundamentos-web | ✓ | 5 | 6 |
| clase-02-hosting-correo-https | ✓ | 4 | 5 |
| clase-03-administracion-remota | ✓ | 4 | 5 |
| clase-04-virtualizacion-diagnostico | ✓ | 5 | 6 |
| index | ✓ | — | 1 |
| **Total track** | | **18 páginas + 4 hubs + index** | **23** |

### Páginas por clase

**Clase 1:** `navegadores-web`, `direcciones-ip`, `dns-y-dominios`, `configuracion-dns`, `practica-y-cierre`

**Clase 2:** `hosting-y-publicacion`, `https-y-tls`, `correo-corporativo`, `practica-y-cierre`

**Clase 3:** `computacion-en-nube`, `transferencia-archivos`, `ssh-y-admin-remota`, `practica-y-cierre`

**Clase 4:** `contenedores-docker`, `virtualizacion`, `diagnostico-troubleshooting`, `flujo-integrado`, `practica-y-cierre`

## Manifiesto lecciones (hubs)

| slug | order | brief | draft | spec | layout | tsx | build | quiz | notas |
|------|-------|-------|-------|------|--------|-----|-------|------|-------|
| index | 1 | done | done | done | done | done | done | n/a | +mención páginas internas |
| clase-01-fundamentos-web | 2 | done | done | done | done | done | done | ✓ | hub + 5 páginas |
| clase-02-hosting-correo-https | 8 | done | done | done | done | done | done | ✓ | hub + 4 páginas |
| clase-03-administracion-remota | 13 | done | done | done | done | done | done | ✓ | hub + 4 páginas |
| clase-04-virtualizacion-diagnostico | 18 | done | done | done | done | done | done | ✓ | hub + 5 páginas |
| actividad-1-laboratorio-practico | — | n/a | n/a | n/a | n/a | **no publicar** | n/a | n/a | solo guía docente KB |
| actividad-2-laboratorio-diagnostico | — | n/a | n/a | n/a | n/a | **no publicar** | n/a | n/a | solo guía docente KB |
| actividad-3-laboratorio-ftp | — | n/a | n/a | n/a | n/a | **no publicar** | n/a | n/a | solo guía docente KB |

## Componentes nuevos

- `src/components/teaching/ClassPageLayout.tsx` — breadcrumb Clase / Página X de Y
- `src/components/teaching/ClassPagesNavSection.tsx` — índice visual en hubs
- `src/components/teaching/lessons/configuracion-servicios-web/class-navigation.ts` — mapa de páginas y cadena prev/next

**Fuentes:** `kb/education/sources/clases/configuracion-servicios-web/`

**Guías docentes (internas):** `kb/education/instructor/configuracion-servicios-web/`

**Quizzes:** slug por clase en última página (`practica-y-cierre`); clave sin cambios.

**Build 2026-07-06:** 185 rutas estáticas, paginación interna completa.

**Sección 2026-07-06:** `TiposRegistrosDnsSection` en página `clase-01-fundamentos-web/dns-y-dominios` — A, AAAA, CNAME, MX, TXT, NS, SOA, PTR, SRV, CAA, DNSSEC y ALIAS.

**Revisión malas-practicas-mundo-real (2026-07-06):** H3 «Malas prácticas en el mundo real» (3–5 escenarios LATAM/PYME) en 44 secciones conceptuales TSX de clases 1–4. Prioridad HttpHttpsSection, CorreoCorporativoSection, CasosRealesLatamSection (bloque Señales + Malas). Secciones con tabla en Señales (HostingSection, SslTlsSection, ProtocolosHttpsSection) actualizadas manualmente. Build 185 rutas OK.
