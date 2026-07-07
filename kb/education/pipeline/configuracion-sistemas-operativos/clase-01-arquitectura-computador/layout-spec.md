---
track: configuracion-sistemas-operativos
slug: clase-01-arquitectura-computador
title: "Arquitectura del computador: chasis, CPU y memoria"
order: 2
prev: index
next: clase-02-dispositivos-almacenamiento
---

## Páginas (paginación interna ADR 011)

| slug | component | secciones | layout |
|------|-----------|-----------|--------|
| `clase-01-arquitectura-computador` | `Clase01ArquitecturaComputadorHubLesson` | ObjetivosSection + ClassPagesNavSection | LessonLayout |
| `clase-01-arquitectura-computador/chasis-y-carcasas` | `ChasisYCarcasasPageLesson` | ArquitecturaComputadorSection, ChasisCarcasasSection, RefrigeracionSection | ClassPageLayout |
| `clase-01-arquitectura-computador/cpu-y-microprocesador` | `CpuYMicroprocesadorPageLesson` | CpuSection, MicroprocesadorSection | ClassPageLayout |
| `clase-01-arquitectura-computador/memoria-cache-binario` | `MemoriaCacheBinarioPageLesson` | MemoriaCacheSection, BinarioAsciiSection, BusDatosSection | ClassPageLayout |
| `clase-01-arquitectura-computador/memoria-ram-rom` | `MemoriaRamRomPageLesson` | RamSection, RomBiosSection | ClassPageLayout |
| `clase-01-arquitectura-computador/practica-y-cierre` | `PracticaYCierrePageLesson` | CompruebaTuComprensionSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | ClassPageLayout |

Nav prev/next: `class-navigation.ts` → `getPageNavChain()`.

---

## Hub — Clase01ArquitecturaComputadorHubLesson.tsx

```tsx
<ObjetivosSection />
<ClassPagesNavSection track={meta.track} classSlug={CLASE_01.classSlug} pages={CLASE_01.pages} />
```

**TSX target:** `src/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/`

## Secciones compartidas

| component file | H3 Malas prácticas | interactive |
|----------------|-------------------|-------------|
| ObjetivosSection.tsx | — | Callout |
| ArquitecturaComputadorSection.tsx | ✓ | MermaidDiagram, img |
| ChasisCarcasasSection.tsx | ✓ | CompareTable, img |
| RefrigeracionSection.tsx | ✓ | CompareTable, img |
| CpuSection.tsx | ✓ | MermaidDiagram, CodeFiddle ×2 |
| MicroprocesadorSection.tsx | ✓ | CompareTable, img |
| MemoriaCacheSection.tsx | ✓ | CompareTable |
| BinarioAsciiSection.tsx | ✓ | CodeFiddle ×2, PracticeExercise |
| BusDatosSection.tsx | ✓ | CompareTable |
| RamSection.tsx | ✓ | CompareTable, img |
| RomBiosSection.tsx | ✓ | CodeFiddle ×2 |
| CompruebaTuComprensionSection.tsx | — | PracticeExercise ×2 |
| RetoIntegradorSection.tsx | — | PracticeExercise |
| CierreSection.tsx | — | — |
| MiniquizFinalSection.tsx | — | QuizSection |

## Quiz

`<QuizSection slug="clase-01-arquitectura-computador" track="configuracion-sistemas-operativos" />`

## lesson-meta páginas internas

`showInTrackIndex: false` en todas las páginas.
