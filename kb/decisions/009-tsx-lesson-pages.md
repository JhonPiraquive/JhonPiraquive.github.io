# ADR 009 — Lecciones docentes como páginas TSX

**Estado:** Aceptado  
**Fecha:** 2026-06-22

## Contexto

ADR 008 estableció pipeline IA con salida MDX en `src/content/teaching/`. El runtime híbrido (MDX + markdown) mantenía dependencia de archivos markdown en `src/`.

## Decisión

1. **Salida del pipeline:** `src/components/teaching/lessons/{track}/{slug}/` con `{PascalCase}Lesson.tsx` + `sections/*.tsx`
2. **Registry:** `src/lib/teaching-lessons-registry.ts` para routing y metadata
3. **Fuentes solo creación:** `kb/education/` y legacy HTML no se leen en runtime
4. **Router delgado:** `[...slug]/page.tsx` resuelve slug → componente TSX
5. **Post-migración:** eliminar `src/content/teaching/*.mdx` y `kb/archive/legacy-pages/teaching/`

## Consecuencias

- `lesson-developer` genera TSX, no MDX
- `status.md` usa columna `tsx` en lugar de `mdx`
- `html-to-mdx.mjs` y `migrate:html` se deprecan tras migración completa
- ADR 008 sigue vigente para pipeline de artefactos; cambia solo el paso 5

## Referencias

- kb/architecture/tsx-teaching-schema.md
- kb/education/interactive-components.md
- .cursor/skills/create-lesson/SKILL.md
