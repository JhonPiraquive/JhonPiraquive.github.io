# ADR 008 — Pipeline IA para lecciones docentes

**Estado:** Aceptado  
**Fecha:** 2026-06-22

## Contexto

El sitio docente tenía agentes especializados pero sin orquestación, handoffs estructurados ni componentes interactivos renderizados en lecciones.

## Decisión

1. **Skill + orquestador:** `.cursor/skills/create-lesson/SKILL.md` + agente `lesson-orchestrator`
2. **Fase 0 automática:** infra de track (status, briefs, portal, migration), bootstrap de topic-expert si falta, indexación de fuentes — antes del pipeline por lección
3. **Artefactos por lección:** `kb/education/pipeline/{track}/{slug}/` (brief, draft, spec, layout)
4. **Render híbrido:** `LessonContent` usa MDX (`next-mdx-remote/rsc`) si hay componentes interactivos; markdown clásico en lecciones legacy
5. **Componentes interactivos:** Quiz, PracticeExercise, CodeChallenge, StepReveal, CompareTable + wrappers `LessonQuiz`/`LessonPractice`/`LessonStepReveal` con datos en `src/lib/teaching-quizzes/`
6. **Piloto:** track SEA (12 lecciones) procesado con build gate exitoso

## Consecuencias

- Nuevas lecciones deben seguir el pipeline (regla `lesson-pipeline.mdc`)
- Quiz data por track puede vivir en `src/lib/teaching-quizzes/{track}.ts` hasta soporte MDX props robusto
- Lecciones legacy (pbpew, poo, posw) migran al pipeline por track

## Referencias

- kb/education/pedagogy-standards.md
- kb/education/interactive-components.md
- kb/agents/topic-expert-bootstrap.md
