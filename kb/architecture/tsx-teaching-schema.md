# TSX teaching schema

## lesson-meta.ts

| Field | Type | Required |
|-------|------|----------|
| track | string | yes |
| slug | string | yes |
| title | string | yes |
| order | number | yes |
| prev | string \| null | no |
| next | string \| null | no |
| seoTitle | string | no |
| seoDescription | string | no |

## Estructura por lección

```
src/components/teaching/lessons/{track}/{slug}/
  {PascalCase}Lesson.tsx
  lesson-meta.ts
  sections/*.tsx
```

## Registry

`src/lib/teaching-lessons-registry.ts` mapea `{track, slug}` → `{ component, meta }`.

## Componentes interactivos

Importar directamente (no MDX):

- `Quiz`, `PracticeExercise`, `CodeChallenge`, `StepReveal`
- `CompareTable`, `MermaidDiagram`, `Callout`, `CodeFiddle`
- `LessonLayout` para shell común

## Convenciones

- 1 componente exportado por archivo bajo `src/`
- `{PascalCase}Lesson` recibe prop `locale: string`
- Datos de quiz extensos en `src/lib/teaching-quizzes/{track}.ts`
