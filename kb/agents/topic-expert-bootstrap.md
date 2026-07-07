# Topic expert bootstrap

Protocolo cuando `lesson-orchestrator` no encuentra experto en el registry.

## Pasos

| # | Responsable | Acción | Salida |
|---|-------------|--------|--------|
| 1 | Orchestrator | Detectar track, dominio, fuentes en `kb/education/sources/clases/` | nota de contexto |
| 2 | Subagent (generalPurpose) | Redactar catálogo de lecciones, prerrequisitos, tono | `kb/agents/topic-experts/{name}.md` |
| 3 | Orchestrator | Crear definición del agente Cursor | `.cursor/agents/topic-expert-{name}.md` |
| 4 | Orchestrator | Registrar y crear carpeta de briefs | fila en registry + `kb/education/briefs/{track}/` |
| 5 | **Usuario** | Aprueba nombre, alcance y tono | continúa pipeline |

## Plantilla kb/agents/topic-experts/{name}.md

```markdown
# {Track} — topic expert

Track: `{track}` | Agent: `topic-expert-{name}` | N lecciones

## Catálogo
| order | slug | title | prerequisites |
...

## Tono
Académico universitario, ejemplos contextualizados a Latinoamérica.

## Fuentes
- kb/education/sources/clases/{folder}/
```

## Plantilla .cursor/agents/topic-expert-{name}.md

```yaml
---
name: topic-expert-{name}
description: Dominio {dominio} — briefs para education-expert
---
# Topic Expert: {dominio}
## Fuente de verdad
- kb/agents/topic-experts/{name}.md
- kb/education/brief-schema.md
## Entregable
kb/education/pipeline/{track}/{slug}/brief.md
## NO hacer
Escribir MDX final ni layout visual
```
