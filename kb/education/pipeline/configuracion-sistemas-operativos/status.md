---
track: configuracion-sistemas-operativos
topic_expert: topic-expert-os-config
updated: 2026-07-15
tsx_migration: done
pedagogy_compliance: done
build: done
pagination: enabled
revision: visuales-adr-013
visuals_remediation: done
---

# Pipeline Configuración de Sistemas Operativos — estado

## Paginación interna (ADR 011)

| clase | hub | páginas | total registry |
|-------|-----|---------|----------------|
| index | ✓ | — | 1 |
| clase-01-arquitectura-computador | ✓ | 5 | 6 |
| clase-02-dispositivos-almacenamiento | ✓ | 4 | 5 |
| clase-03-sistemas-operativos | ✓ | 6 | 7 |
| **Total track** | | **15 páginas + 3 hubs + index** | **19** |

## Manifiesto lecciones (hubs)

| slug | order | brief | draft | spec | layout | tsx | build | quiz | notas |
|------|-------|-------|-------|------|--------|-----|-------|------|-------|
| index | 1 | done | done | done | done | done | done | n/a | |
| clase-01-arquitectura-computador | 2 | done | done | done | done | done | done | done | hub + 5 páginas |
| clase-02-dispositivos-almacenamiento | 8 | done | done | done | done | done | done | done | hub + 4 páginas |
| clase-03-sistemas-operativos | 14 | done | done | done | done | done | done | done | hub + 6 páginas |

**Fuentes:** `kb/education/sources/clases/configuracion-sistemas-operativos/`

**Imágenes:** `public/teaching/configuracion-sistemas-operativos/` (9 assets)

**Build 2026-07-06:** 225 rutas estáticas, track completo.

## Revisión visual ADR 013 (2026-07-15)

- Convertir «Mapa mental» basado solo en texto a `MermaidDiagram` (`mindmap` o `flowchart`).
- Corregir promesas de flujo, ciclo, árbol, jerarquía, topología o línea de tiempo que no tengan un diagrama contiguo.
- Representar matrices o heatmaps como tablas semánticas con contraste visual.
- Verificar como deuda transversal de SEA: entidades HTML en Mermaid, `CodeFiddle` vacíos y directivas de autoría.
