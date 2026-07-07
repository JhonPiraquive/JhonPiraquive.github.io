---
track: configuracion-sistemas-operativos
slug: index
title: "Configuración de Sistemas Operativos — Introducción al curso"
order: 1
prev: null
next: clase-01-arquitectura-computador
---

## Páginas (paginación interna ADR 011)

| slug | component | secciones | layout |
|------|-----------|-----------|--------|
| `index` | `ConfiguracionSistemasOperativosLesson` | IntroCursoSection, CalendarioSection, PrerrequisitosSection, NavegacionClasesSection, ObjetivosSection, CierreHubSection | LessonLayout |

Nav prev/next: `class-navigation.ts` → `getPageNavChain()`.

---

## ConfiguracionSistemasOperativosLesson.tsx

```tsx
<IntroCursoSection />
<CalendarioSection />
<PrerrequisitosSection />
<NavegacionClasesSection />
<ObjetivosSection />
<CierreHubSection />
```

**TSX target:** `src/components/teaching/lessons/configuracion-sistemas-operativos/index/`

## Secciones

| orden | heading | component file | interactive |
|-------|---------|----------------|-------------|
| 1 | Bienvenida al curso | `sections/IntroCursoSection.tsx` | — |
| 2 | Calendario del curso (3 × 2 h) | `sections/CalendarioSection.tsx` | CompareTable |
| 3 | Prerrequisitos | `sections/PrerrequisitosSection.tsx` | Callout |
| 4 | Empezar el curso | `sections/NavegacionClasesSection.tsx` | — |
| 5 | Objetivos del tema | `sections/ObjetivosSection.tsx` | Callout |
| 6 | Resultados del curso | `sections/CierreHubSection.tsx` | — |

## lesson-meta.ts

- track: configuracion-sistemas-operativos
- slug: index
- order: 1
- next: clase-01-arquitectura-computador
