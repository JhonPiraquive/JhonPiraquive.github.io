# Agent roster

| Agente | Cuándo usar |
|--------|-------------|
| **lesson-orchestrator** | **Entrada del pipeline: track completo o lección única** |
| education-expert | Crear lesson-draft desde brief |
| topic-expert-javascript | Dominio JS/PBPEW |
| topic-expert-app-security | Dominio SEA |
| topic-expert-oop-csharp | Dominio POO/C# |
| topic-expert-web-services | Dominio POSW |
| brand-identity-expert | Copy marca, meta (etapa spec) |
| clay-ui-expert | Design system clay (etapa spec) |
| seo-redirects-expert | SEO, sitemap, redirects (etapa spec) |
| teaching-layout-expert | layout-spec.md |
| **lesson-developer** | **TSX final + componentes interactivos** |
| nextjs-architect | Config, build, deploy |
| portfolio-migrator | CV/portafolio |
| track-migrator-* | Migración mecánica a TSX (legacy) |

## Flujo lección (pipeline completo)

```
Usuario → skill create-lesson → lesson-orchestrator
  → topic-expert → brief.md
  → education-expert → lesson-draft.md
  → brand + clay + seo (paralelo) → lesson-spec.md
  → teaching-layout-expert → layout-spec.md
  → lesson-developer → src/components/teaching/lessons/{track}/{slug}/
  → npm run build (cada 3 lecciones)
```

Skill: `.cursor/skills/create-lesson/SKILL.md`
Manifiesto: `kb/education/pipeline/{track}/status.md`
