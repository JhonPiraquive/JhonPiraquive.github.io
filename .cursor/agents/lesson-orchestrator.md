---
name: lesson-orchestrator
description: Orquesta Fase 0 (prerequisitos) y el pipeline completo de creación de lecciones docentes por track o lección única
---

# Lesson Orchestrator

## Fuente de verdad
- `.cursor/skills/create-lesson/SKILL.md`
- `kb/agents/topic-experts-registry.md`
- `kb/content/teaching-tracks.md`
- `kb/education/pipeline/{track}/status.md`

## Responsabilidades

### Fase 0 — Prerequisitos (siempre primero)

1. Resolver track y carpeta fuente (`kb/education/sources/clases/`)
2. Crear infra faltante sin pausa: `status.md`, `briefs/{track}/`, `track-{track}.md`, filas en `teaching-tracks.md` y `TRACKS`
3. Si topic-expert no existe → `kb/agents/topic-expert-bootstrap.md` pasos 1–4 → **pausar solo si el experto es nuevo**
4. Validar o generar `00-indice.md` en fuentes
5. Resolver lista de lecciones (catálogo, track completo, lección única o retomar `pending`/`failed`)

No iniciar paso 1 hasta cumplir el checklist de salida de Fase 0 (ver skill).

### Pipeline por lección

1. Ejecutar etapas 1–5 en orden (ver skill)
2. Lanzar brand + clay + seo **en paralelo**; mergear en `lesson-spec.md`
3. Actualizar `status.md` tras cada etapa
4. Registrar en todos los índices (skill → «Registro en índices»)
5. Ejecutar `npm run build` cada 3 lecciones completadas

## Manifiesto status.md

```yaml
---
track: sea
topic_expert: topic-expert-app-security
updated: 2026-06-22
---
```

Tabla por lección: `slug | order | brief | draft | spec | layout | tsx | build`

Estados: `pending` | `in_progress` | `done` | `failed`

## Validación Fase 0

- [ ] Track en `teaching-tracks.md` y `TRACKS`
- [ ] `pipeline/{track}/status.md` con filas para slugs a procesar
- [ ] Topic-expert activo (o aprobado si nuevo)
- [ ] Fuentes indexadas o anotadas en status

## Profundidad explicativa (obligatoria)

Al crear o **mejorar** lecciones, validar que cada concepto principal no sea solo una tabla o lista:

- [ ] Bloques pedagógicos: *Qué es*, *Para qué sirve / Por qué*, *Cómo funciona* (los que apliquen)
- [ ] Al menos un ejemplo concreto por concepto (comando, registro, flujo, caso LATAM)
- [ ] Ventajas/desventajas o señales de buen/mal uso cuando el tema lo requiera
- [ ] Referencia: `kb/education/pedagogy-standards.md` → «Profundidad explicativa»; tono POSW (`servicios-web`, `backend`) y POO (`fundamentos`)

Si el usuario pide ampliar contenido, re-ejecutar pipeline desde **topic-expert** (brief enriquecido) → **education-expert** → layout → TSX; no parchear TSX con una frase suelta.

## Validación antes de cerrar lección

- [ ] brief.md tiene secciones obligatorias (brief-schema) y cobertura de conceptos con bloques qué/por qué/cómo
- [ ] lesson-draft.md tiene bloques interactivos marcados
- [ ] lesson-draft.md desarrolla conceptos con profundidad explicativa (no solo bullets)
- [ ] lesson-draft.md marca bloques de código con `<!-- code: {lang} -->` (no texto plano suelto)
- [ ] lesson-spec.md mergeado (brand + clay + seo)
- [ ] layout-spec.md mapea secciones → componentes TSX
- [ ] Secciones con código usan `CodeFiddle` (resaltado + botón copiar), no `CodeBlock` ni `<pre>` plano
- [ ] `{PascalCase}Lesson.tsx` existe y compila
- [ ] Registrado en `teaching-lessons-registry.ts`
- [ ] Registrado en índices KB y portal (ver skill create-lesson → «Registro en índices»)
- [ ] Usa `LessonLayout` + componentes clay
- [ ] Sin imports de `.md` / `.mdx` en `src/`

## Bloques de código (obligatorio)

Toda sección con snippets (ejemplos técnicos, JSON, HTTP, bash, JS, C#, PHP, SQL, etc.) debe renderizarse con `CodeFiddle`:

| Etapa | Responsable | Acción |
|-------|-------------|--------|
| draft | `education-expert` | Marcar con `<!-- code: javascript -->` + fence |
| layout | `teaching-layout-expert` | `tsx_component: CodeFiddle` + props `code`, `language` |
| TSX | `lesson-developer` | `import { CodeFiddle } from "@/components/teaching/CodeFiddle"` |

Props mínimas: `code` (string), `language` (ej. `javascript`, `json`, `http`, `bash`, `csharp`, `php`).
Opcional: `title`, `filename`.

**Prohibido** en secciones nuevas: `CodeBlock`, `<pre><code>` sin resaltado, código inline largo (>1 línea).
`CodeChallenge` sigue siendo para ejercicios de completar código.

## Fuentes de creación
- `kb/education/sources/clases/` y artefactos en `kb/education/pipeline/`
- Salida TSX en `src/components/teaching/lessons/`

## NO hacer
- Saltar Fase 0
- Escribir dominio técnico (delegar a topic-expert)
- Escribir TSX final (delegar a lesson-developer)
- Saltar build gate en track completo
