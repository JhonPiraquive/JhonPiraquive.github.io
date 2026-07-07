---
track: posw
slug: ia-en-desarrollo-web
title: "IA en el desarrollo web: productividad y verificación"
order: 21
prev: naming-conventions
next: arquitectura-api
---

## IaEnDesarrolloWebLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<UsosIaSection />
<RiesgosSection />
<VerificacionSection />
<EstructuraClaudeSection />
<AgentesSection />
<FlujoTrabajoSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosSection`, `UsosIaSection`, `RiesgosSection`, `VerificacionSection`, `EstructuraClaudeSection`, `AgentesSection`, `FlujoTrabajoSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L29–58). |
| 2 | Usos productivos de IA en desarrollo web | `sections/UsosIaSection.tsx` | `CompareTable` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | Riesgos: alucinaciones, privacidad y dependencia | `sections/RiesgosSection.tsx` | `Callout` ×2 | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Flujo de verificación antes del merge | `sections/VerificacionSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×2, `StepReveal` | **Nuevo.** H2 sin prefijo «3)». `bash`, `plaintext` (HTTP). |
| 5 | Contexto para agentes: `.claude/` y `CLAUDE.md` | `sections/EstructuraClaudeSection.tsx` | `MermaidDiagram`, `CodeFiddle` | **Nuevo.** H2 sin prefijo «4)». `markdown` ×1. |
| 6 | Sub-agentes: code-reviewer y roles | `sections/AgentesSection.tsx` | `CodeFiddle` | **Nuevo.** H2 agentes. `markdown` ×1 (draft L226–239). |
| 7 | Prompts efectivos con stack y restricciones | `sections/FlujoTrabajoSection.tsx` | `CodeFiddle` ×3, `PracticeExercise` | **Nuevo.** `bash`, `typescript` ×2. |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×1 | **Nuevo.** |
| 9 | Reto integrador: feature con IA en el flujo | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** POST `/api/v1/productos` (draft L322–348). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `arquitectura-api` (draft L352–367). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="ia-en-desarrollo-web" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `ia-en-desarrollo-web` con 5 preguntas del draft L377–433:

| # | Tema |
|---|------|
| 1 | Alucinación: APIs o librerías inexistentes |
| 2 | Primer paso: leer y entender línea por línea |
| 3 | No enviar API keys ni PII |
| 4 | CLAUDE.md: contexto y reglas al agente |
| 5 | Prompt efectivo: contexto, restricciones y criterios |

**Infra:** `<QuizSection slug="ia-en-desarrollo-web" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `IA en desarrollo web: verificación \| POSW` |
| `seoDescription` | `Usos productivos de IA, riesgos de alucinaciones, flujo de verificación, CLAUDE.md y prompts con contexto. Lección 21 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). HTTP response → `plaintext`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L33–37 |
| Prerrequisitos | prose `<ul>` | draft L41–43 |
| Intro | prose | draft L51 |
| `callout-fecha-corte-modelo` | `Callout` | `variant="callout-info"`; title: «Amplificador de productividad, no de responsabilidad»; children draft L54–57 (lesson-spec L79–85) |

### `UsosIaSection`

| id | componente | props |
|----|------------|-------|
| Usos válidos | prose `<ul>` | draft L67–71 |
| `tabla-herramientas-ia` | `CompareTable` | headers draft L77; rows draft L78–83 |

### `RiesgosSection`

| id | componente | props |
|----|------------|-------|
| Mapa de riesgos | prose `<ul>` | draft L94–97 |
| `caso-libreria-inventada` | `Callout` | `variant="callout-warning"`; title: «Caso real: express-rate-limiter-pro no existe»; children draft L102–105 (lesson-spec L65–70) |
| `caso-fuga-codigo` | `Callout` | `variant="callout-warning"`; title: «Caso real: core de pagos pegado en IA pública»; children draft L110–113 (lesson-spec L72–77) |
| Errores comunes | prose `<ul>` | draft L117–121 |

### `VerificacionSection`

| id | componente | props |
|----|------------|-------|
| `diagrama-flujo-verificacion` | `MermaidDiagram` | chart draft L133 |
| Checklist merge | prose `<ol>` | draft L138–143 |
| `verificacion-curl` | `CodeFiddle` | `language="bash"`; title: «Verificación con curl»; code draft L147–153 |
| `verificacion-http-404` | `CodeFiddle` | `language="plaintext"`; title: «Respuesta HTTP esperada»; code draft L156–165 |
| `step-prompt-a-merge` | `StepReveal` | title: «De prompt a merge seguro»; steps[8] draft L172–181 |

### `EstructuraClaudeSection`

| id | componente | props |
|----|------------|-------|
| `diagrama-claude-arbol` | `MermaidDiagram` | chart draft L194 |
| `claude-md-minimo` | `CodeFiddle` | `language="markdown"`; title: «CLAUDE.md mínimo»; code draft L200–218 |

### `AgentesSection`

| id | componente | props |
|----|------------|-------|
| `agente-code-reviewer` | `CodeFiddle` | `language="markdown"`; title: «Agente code-reviewer»; code draft L229–239 |

### `FlujoTrabajoSection`

| id | componente | props |
|----|------------|-------|
| `prompt-inefectivo-vs-efectivo` | `CodeFiddle` | `language="bash"`; title: «Prompt inefectivo vs efectivo»; code draft L244–254 |
| `servicio-generado-dip` | `CodeFiddle` | `language="typescript"`; title: «Servicio generado (verificar y adaptar)»; code draft L259–279 |
| `test-valida-codigo-ia` | `CodeFiddle` | `language="typescript"`; title: «Test que valida código IA»; code draft L284–294 |
| `practica-deuda-sin-comprension` | `PracticeExercise` | prompt draft L300; hints draft L301; expectedKeywords draft L302; successMessage draft L303 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-flujo-merge` | `PracticeExercise` | prompt draft L314; hints draft L315; expectedKeywords draft L316; successMessage draft L317 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Integra IA en el flujo de un feature real»; POST productos + tareas 1–5 (draft L326–336) |
| `reto-feature-ia` | `PracticeExercise` | prompt draft L340; hints draft L341–345; expectedKeywords draft L346; successMessage draft L347; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L356 |
| Ideas clave | `<ul>` 6 viñetas draft L360–365 |
| Siguiente paso | enlace `arquitectura-api` draft L367 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="ia-en-desarrollo-web" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` |
| `sections/UsosIaSection.tsx` | `UsosIaSection` | `CompareTable` |
| `sections/RiesgosSection.tsx` | `RiesgosSection` | `Callout` |
| `sections/VerificacionSection.tsx` | `VerificacionSection` | `MermaidDiagram`, `CodeFiddle`, `StepReveal` |
| `sections/EstructuraClaudeSection.tsx` | `EstructuraClaudeSection` | `MermaidDiagram`, `CodeFiddle` |
| `sections/AgentesSection.tsx` | `AgentesSection` | `CodeFiddle` |
| `sections/FlujoTrabajoSection.tsx` | `FlujoTrabajoSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«5)»)
- [ ] Migrar todo código → `CodeFiddle` (`bash`, `plaintext`, `markdown`, `typescript`)
- [ ] Crear 11 secciones; separar `AgentesSection` y `FlujoTrabajoSection`
- [ ] Registrar quiz `ia-en-desarrollo-web` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `naming-conventions` |
| `next` | `arquitectura-api` |
