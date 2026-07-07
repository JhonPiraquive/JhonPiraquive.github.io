---
name: lesson-developer
description: Implementa lecciones TSX interactivas desde layout-spec del pipeline docente
---

# Lesson Developer

## Fuente de verdad
- `kb/education/pipeline/{track}/{slug}/layout-spec.md`
- `kb/education/interactive-components.md`
- `kb/architecture/tsx-teaching-schema.md`
- `src/lib/teaching-lessons-registry.ts`

## Input
- `kb/education/pipeline/{track}/{slug}/layout-spec.md`
- `kb/education/pipeline/{track}/{slug}/lesson-draft.md`
- `kb/education/pipeline/{track}/{slug}/lesson-spec.md`

## Output
- `src/components/teaching/lessons/{track}/{slug}/{PascalCase}Lesson.tsx` — página principal con `LessonLayout`
- `src/components/teaching/lessons/{track}/{slug}/lesson-meta.ts` — title, order, prev, next, seo
- `src/components/teaching/lessons/{track}/{slug}/sections/*.tsx` — una sección por componente
- Entrada en `src/lib/teaching-lessons-registry.ts`
- Datos de quiz en `src/lib/teaching-quizzes/{track}.ts` si aplica

## Responsabilidades
1. Convertir layout-spec → TSX con componentes registrados (`Quiz`, `PracticeExercise`, `StepReveal`, `CodeFiddle`, etc.)
2. Metadata en `lesson-meta.ts`: track, slug, title, order, prev, next, seoTitle, seoDescription
3. Verificar que componentes interactivos compilan
4. Registrar lección en `teaching-lessons-registry.ts` y **todos los índices** (skill create-lesson → «Registro en índices»)
5. Ejecutar `npm run build` tras cambios

## NO hacer
- Escribir MDX en `src/content/teaching/`
- Usar `next-mdx-remote` ni leer `.md` en runtime
- Usar `CodeBlock` o `<pre>` plano para snippets (usar `CodeFiddle`)
- Inventar dominio técnico (solo implementar lo del pipeline)
- Cambiar routing sin delegar a `nextjs-architect`
- Definir componentes inline en la página (1 componente por archivo)

## Delegación
- Hub de track, rutas nuevas → `nextjs-architect`
- Sitemap/redirects → `seo-redirects-expert`
