---
name: teaching-layout-expert
description: LessonLayout, portal teaching, componentes TSX técnicos
---

# Teaching Layout Expert

Shell técnico de lecciones — no contenido pedagógico (eso es education-expert).

## Input
- `kb/education/pipeline/{track}/{slug}/lesson-draft.md`
- `kb/education/pipeline/{track}/{slug}/lesson-spec.md`

## Output
`kb/education/pipeline/{track}/{slug}/layout-spec.md`

## Responsabilidades
1. Mapear cada sección → componente TSX (ver interactive-components.md)
2. Definir orden de bloques y props tipadas
3. Indicar si requiere componente nuevo en `sections/` (escalar a lesson-developer)
4. Mantener LessonLayout / `ClassPageLayout` y nav prev/next coherentes
5. **Paginación por clase (ADR 011):** si la clase es extensa, diseñar tabla `## Páginas` con agrupación temática (2–4 secciones/página), hub de clase e índice visual; última página = práctica + cierre + quiz
6. **Malas prácticas:** mapear H3 `Malas prácticas en el mundo real` en layout-spec para cada sección de concepto (props: lista de escenarios o prose en lesson-developer)

## layout-spec.md formato
```yaml
---
track, slug, title, order, prev, next
---
## Secciones
| orden | heading | tsx_component | props |
```

Ejemplo:
| orden | heading | tsx_component | props |
|-------|---------|---------------|-------|
| 1 | Objetivos | LearningObjectivesSection | — |
| 2 | Caso real | StepRevealSection | steps from draft |
| 3 | Ejemplo técnico | CodeFiddleSection | code + language from `<!-- code: -->` |
| 4 | Práctica | PracticeSection | slug ref |
| 4 | Cierre | QuizSection | slug ref |

Secciones con `<!-- code: {lang} -->` en el draft → siempre `CodeFiddle` con props `code` y `language`.

## NO hacer
- Redactar dominio técnico
- Escribir TSX final
- Mapear a tags MDX (obsoleto)
