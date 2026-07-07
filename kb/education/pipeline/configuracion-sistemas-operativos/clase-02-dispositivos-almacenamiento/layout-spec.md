---
track: configuracion-sistemas-operativos
slug: clase-02-dispositivos-almacenamiento
title: "Clase 2: Dispositivos de almacenamiento y periféricos"
order: 8
prev: clase-01-arquitectura-computador
next: clase-03-sistemas-operativos
---

## Páginas (paginación interna ADR 011)

| slug | component | secciones | layout |
|------|-----------|-----------|--------|
| `clase-02-dispositivos-almacenamiento` | `Clase02DispositivosAlmacenamientoHubLesson` | ObjetivosSection + ClassPagesNavSection | LessonLayout |
| `clase-02-dispositivos-almacenamiento/discos-almacenamiento` | `DiscosAlmacenamientoPageLesson` | DiscosAlmacenamientoSection, DiscoOpticoSection | ClassPageLayout |
| `clase-02-dispositivos-almacenamiento/perifericos-monitor` | `PerifericosMonitorPageLesson` | PerifericosSection, MonitorSection | ClassPageLayout |
| `clase-02-dispositivos-almacenamiento/hoja-vida-licencias` | `HojaVidaLicenciasPageLesson` | HojaVidaPcSection, LicenciasSoftwareSection | ClassPageLayout |
| `clase-02-dispositivos-almacenamiento/practica-y-cierre` | `PracticaYCierrePageLesson` | CompruebaTuComprensionSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | ClassPageLayout |

Nav prev/next: `class-navigation.ts` → `getPageNavChain()`.

**Target:** `src/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/`

## Secciones

| orden | heading | component file | interactive components |
|-------|---------|----------------|------------------------|
| 1 | Objetivos de la clase | `sections/ObjetivosSection.tsx` | `Callout` |
| 2 | Discos y dispositivos de almacenamiento | `sections/DiscosAlmacenamientoSection.tsx` | `CompareTable`, `StepReveal`, `CodeFiddle` ×2, `Callout`, imágenes HDD/SSD |
| 3 | Unidad de disco óptico | `sections/DiscoOpticoSection.tsx` | imagen optical-drive, `Callout` |
| 4 | Periféricos de entrada y salida | `sections/PerifericosSection.tsx` | `CompareTable`, `Callout` |
| 5 | Monitor: resolución y píxeles | `sections/MonitorSection.tsx` | imagen monitor, `CodeFiddle`, `Callout` |
| 6 | Hoja de vida del PC | `sections/HojaVidaPcSection.tsx` | `StepReveal`, `CodeFiddle` ×2, `Callout` |
| 7 | Licencias de software | `sections/LicenciasSoftwareSection.tsx` | `CompareTable`, `Callout` |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×5, `CodeChallenge` ×1 |
| 9 | Reto integrador | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — |
| 11 | Mini-quiz final | `sections/MiniquizFinalSection.tsx` | `QuizSection` |

## Quiz

Slug `clase-02-dispositivos-almacenamiento` en `src/lib/teaching-quizzes/configuracion-sistemas-operativos.ts` — 6 preguntas.

`<QuizSection slug="clase-02-dispositivos-almacenamiento" track="configuracion-sistemas-operativos" />`

## lesson-meta.ts

| Campo | Valor |
|-------|-------|
| seoTitle | `Discos, periféricos y licencias \| CSO` |
| seoDescription | `HDD, SSD, SAS, periféricos, monitor, hoja de vida del PC y tipos de licencia de software. Índice paginado de la Clase 2.` |

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `clase-01-arquitectura-computador` (vía chain: `clase-01-arquitectura-computador/practica-y-cierre`) |
| `next` | `clase-02-dispositivos-almacenamiento/discos-almacenamiento` |
