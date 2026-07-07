# Lesson spec schema (brand + clay + seo → layout)

Archivo: `kb/education/pipeline/{track}/{slug}/lesson-spec.md`

Mergeado por `lesson-orchestrator` tras contribuciones paralelas de brand, clay y seo.

```yaml
---
track: sea
slug: historia-redes-y-seguridad
title: "Historia de redes y seguridad"
order: 1
interactive_blocks:
  - type: mermaid
    id: timeline-redes
  - type: step-reveal
    id: caso-morris-worm
  - type: practice-exercise
    id: identificar-amenaza
  - type: quiz
    id: cierre-quiz
seo_title: "Historia de redes e Internet | Seguridad en aplicaciones"
seo_description: "Evolución de redes, origen de la ciberseguridad y lecciones históricas aplicables hoy."
hreflang_notes: "Traducir título y meta a EN en fase i18n"
clay_variants:
  - card
  - callout-warning
  - stepper
brand_tone: academico-universitario
prev: null
next: hackers-canales-y-proteccion
---
```

## Secciones por agente

### brand-identity-expert
- `title` refinado (ES)
- `brand_tone`
- Copy de callouts y títulos de sección

### clay-ui-expert
- `clay_variants` por sección
- Jerarquía visual (h2 vs h3)
- Tipo de Callout por bloque

### seo-redirects-expert
- `seo_title`, `seo_description`
- `prev` / `next` coherentes con track
- Headings con keywords naturales

## Validación
- Al menos 1 entrada en `interactive_blocks`
- `seo_title` ≤ 60 caracteres
- `seo_description` ≤ 160 caracteres
