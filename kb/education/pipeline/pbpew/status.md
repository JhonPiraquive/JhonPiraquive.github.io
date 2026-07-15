---
track: pbpew
topic_expert: topic-expert-javascript
updated: 2026-07-15
tsx_migration: complete
pedagogy_compliance: complete (16/16)
acronym_normalization: complete (2026-07-06)
build: passed (2026-07-06)
revision: visuales-adr-013
visuals_remediation: done
---

# Pipeline Programación básica para entornos web (PBPEW) — estado

**Track completo:** 12 lecciones núcleo + 4 proyectos integradores.

| slug | order | brief | draft | spec | layout | tsx | build | quiz | practice | visual | demo |
|------|-------|-------|-------|------|--------|-----|-------|------|----------|--------|------|
| 01-intro-js-y-dom | 1 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 02-js-en-html | 2 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 03-variables-y-tipos | 3 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 04-operadores-y-decisiones | 4 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 05-bucles-y-errores | 5 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 06-funciones-y-callbacks | 6 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 07-arrays-json-objetos | 7 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 08-this-scope-clases | 8 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 09-estructuras-de-datos | 9 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 10-dom-y-eventos | 10 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 11-asincronia | 11 | done | done | done | done | done | done | ✓ | ✓ | ✓ | — |
| 12-ajax-fetch | 12 | done | done | done | done | done | done | ✓ | ✓ | ✓ | DemoEnVivoApi |
| proyectos/ajedrez | 100 | done | done | done | done | done | done | ✓ | ✓ | ✓ | ChessBoardDemo |
| proyectos/calculadora | 101 | done | done | done | done | done | done | ✓ | ✓ | ✓ | DemoCalculadora |
| proyectos/piedra-papel-tijera | 102 | done | done | done | done | done | done | ✓ | ✓ | ✓ | RockPaperScissorsDemo |
| proyectos/todo-list | 103 | done | done | done | done | done | done | ✓ | ✓ | ✓ | TodoListDemo |

**Fuentes:** `kb/education/briefs/pbpew/` (01–12 + 4 proyectos).

**Componentes demo compartidos:** `src/components/teaching/{DemoCalculadora,RockPaperScissorsDemo,TodoListDemo,ChessBoardDemo,DemoEnVivoApi}.tsx`

## Revisión visual ADR 013 (2026-07-15)

- Convertir «Mapa mental» basado solo en texto a `MermaidDiagram` (`mindmap` o `flowchart`).
- Corregir promesas de flujo, ciclo, árbol, jerarquía, topología o línea de tiempo que no tengan un diagrama contiguo.
- Representar matrices o heatmaps como tablas semánticas con contraste visual.
- Verificar como deuda transversal de SEA: entidades HTML en Mermaid, `CodeFiddle` vacíos y directivas de autoría.
