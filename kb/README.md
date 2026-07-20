# Knowledge Base — Jhon Alejandro Piraquive

Índice maestro del sitio. **Leer antes de cambios. Actualizar al cerrar cada tarea.**

## Estructura

| Carpeta | Contenido |
|---------|-----------|
| [decisions/](decisions/) | ADRs — decisiones de arquitectura y marca |
| [brand/](brand/) | Identidad, tokens, copy ES/EN |
| [architecture/](architecture/) | Next.js, MDX, deploy |
| [content/](content/) | Inventarios portafolio y teaching |
| [archive/](archive/) | HTML legacy archivado (solo referencia / re-migración) |
| [migration/](migration/) | Playbooks migración a TSX por track |
| [education/](education/) | Pedagogía, briefs, outputs |
| [education/instructor/](education/instructor/) | Guías docente internas (laboratorios, rúbricas) — no se publican en `/teaching/` |
| [education/sources/clases/](education/sources/clases/) | Fuentes Markdown originales (sea, poo, posw) |
| [agents/](agents/) | Roster, topic-experts, pipeline IA docente |

## Convenciones

- Nueva decisión → `decisions/NNN-titulo.md`
- Brief de dominio → `education/pipeline/{track}/{slug}/brief.md`
- Pipeline docente → `education/pipeline/{track}/status.md`
- Bloqueos → registrar aquí con fecha

## Estado del proyecto

- Stack: Next.js 15 + TSX lessons + next-intl + export estático
- Marca: Jhon Alejandro Piraquive · *Construyendo el futuro digital.*
- Visual: claymorphism premium (#0A2540, #00C2FF, #6B4EFF)
- Teaching: remediación visual ADR 013 en progreso en los seis tracks (2026-07-15)
- Portafolio: export HV/CV PDF desde sidebar (ADR 014, 2026-07-20)
