---
track: posw
topic_expert: topic-expert-web-services
updated: 2026-07-15
tsx_migration: complete
pedagogy_compliance: complete (22/22)
acronym_audit: complete
build: passed
revision: visuales-adr-013
visuals_remediation: done
---

# Pipeline Programación Orientada a Sitios Web (POSW) — estado

**Track Programación Orientada a Sitios Web (POSW) completo:** 22/22 lecciones compliant.

| slug | order | brief | draft | spec | layout | tsx | build | quiz | practice | visual |
|------|-------|-------|-------|------|--------|-----|-------|------|----------|--------|
| servicios-web | 1 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| formatos-datos | 2 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| protocolos-seguridad | 3 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| http-metodos-status | 4 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| http-headers | 5 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| tipos-servicios-web | 6 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| apis | 7 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| tokens | 8 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| frontend | 9 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| backend | 10 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| cache | 11 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| rest-principios | 12 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| typescript | 13 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| angular | 14 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| react | 15 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| modelo-cliente-servidor | 16 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| herramientas-desarrollo | 17 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| bases-de-datos | 18 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| principios-solid | 19 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| naming-conventions | 20 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| ia-en-desarrollo-web | 21 | done | done | done | done | done | done | ✓ | ✓ | ✓ |
| arquitectura-api | 22 | done | done | done | done | done | done | ✓ | ✓ | ✓ |

**Fuentes:** `kb/education/sources/clases/programacion-orientada-sitios-web/*.md` · pipeline `kb/education/pipeline/posw/` (22 lecciones)

**Quizzes:** `src/lib/teaching-quizzes/posw.ts` (22 slugs) · `QuizSection track="posw"`

## Auditoría 2026-07-06

- **Acrónimos:** slug `posw` sin cambio; nombre completo en primera mención (servicios-web, configuracion-servicios-web); `| POSW` en seoTitle conservado.
- **CodeFiddle:** 0 `CodeBlock` / `<pre>` plano (corregido `tipos-servicios-web/GrpcWebsocketsSection` → `.proto`).
- **Malas prácticas:** 18 secciones renombradas de «Errores comunes» → «Malas prácticas en el mundo real»; resto usa anti-patrones / señales de buen y mal uso.
- **Profundidad:** bloques qué/por qué/cómo + ejemplos verificados en lecciones referencia (`servicios-web`, `modelo-cliente-servidor`, `backend`).

## Revisión visual ADR 013 (2026-07-15)

- Convertir «Mapa mental» basado solo en texto a `MermaidDiagram` (`mindmap` o `flowchart`).
- Corregir promesas de flujo, ciclo, árbol, jerarquía, topología o línea de tiempo que no tengan un diagrama contiguo.
- Representar matrices o heatmaps como tablas semánticas con contraste visual.
- Verificar como deuda transversal de SEA: entidades HTML en Mermaid, `CodeFiddle` vacíos y directivas de autoría.
