---
track: configuracion-servicios-web
slug: clase-04-virtualizacion-diagnostico
title: "Virtualización, contenedores y diagnóstico integrador"
order: 5
prev: clase-03-administracion-remota
next: null
tsx_target: src/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/
---

## Páginas (paginación interna ADR 011)

| slug | component | secciones | layout |
|------|-----------|-----------|--------|
| `clase-04-virtualizacion-diagnostico` | `Clase04VirtualizacionDiagnosticoHubLesson` | ObjetivosSection + ClassPagesNavSection | LessonLayout |
| `clase-04-virtualizacion-diagnostico/contenedores-docker` | `ContenedoresDockerPageLesson` | ObjetivosSection, ContenedoresSection, DespliegueContenedorBasicoSection | ClassPageLayout |
| `clase-04-virtualizacion-diagnostico/virtualizacion` | `VirtualizacionPageLesson` | VirtualizacionSection | ClassPageLayout |
| `clase-04-virtualizacion-diagnostico/diagnostico-troubleshooting` | `DiagnosticoTroubleshootingPageLesson` | SolucionProblemasSection, DiagnosticoSistematicoSection, NginxTroubleshootingSection, ValidacionPostCorreccionSection, InformeTecnicoSection | ClassPageLayout |
| `clase-04-virtualizacion-diagnostico/flujo-integrado` | `FlujoIntegradoPageLesson` | ResolucionLocalSection, FlujoIntegradoSection, ChecklistPruebasSection, ValidacionServicioFtpSection | ClassPageLayout |
| `clase-04-virtualizacion-diagnostico/practica-y-cierre` | `PracticaYCierrePageLesson` | RetoIntegradorSection, CompruebaTuComprensionSection, CierreSection, MiniquizSection | ClassPageLayout |

Nav prev/next: `class-navigation.ts` → `getPageNavChain()`.

---

## Clase04VirtualizacionDiagnosticoLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<ContenedoresSection />
<VirtualizacionSection />
<SolucionProblemasSection />
<RetoIntegradorSection />
<CompruebaTuComprensionSection />
<CierreSection />
<MiniquizSection />
<GuiaDocenteSection />
```

**Refactor vs TSX actual:** mover `GuiaDocenteSection` al final (convención docente del track). Poblar las 9 secciones con contenido del draft; reemplazar stubs syllabus 3.x por H2 del lesson-spec § Brand.

Imports: `ObjetivosSection`, `ContenedoresSection`, `VirtualizacionSection`, `SolucionProblemasSection`, `RetoIntegradorSection`, `CompruebaTuComprensionSection`, `CierreSection`, `MiniquizSection`, `GuiaDocenteSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | `Callout` | Intro «De la administración remota al stack reproducible» + 5 objetivos + prerrequisitos (draft L29–46, L52–54). |
| 2 | Contenedores y Docker | `sections/ContenedoresSection.tsx` | `Callout` ×2, `CodeFiddle` ×4, `StepReveal`, `MermaidDiagram`, `CompareTable`, `CodeChallenge`, `PracticeExercise` ×2 | **Un archivo, 4 H2 internos** (sin prefijos «1)»–«3)»). Ver subsecciones abajo. |
| 3 | Virtualización y laboratorio seguro | `sections/VirtualizacionSection.tsx` | `StepReveal`, `Callout`, `CodeFiddle` | H2 sin prefijo «4)». Tabla hipervisores prose. |
| 4 | Troubleshooting integrador por capas | `sections/SolucionProblemasSection.tsx` | `CompareTable`, `CodeFiddle`, `PracticeExercise` ×2 | H2 sin prefijo «5)». Tabla 10 filas síntoma→corrección. |
| 5 | Reto integrador: stack staging para startup LATAM | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | Enunciado Guadalajara + requisitos + criterio éxito (draft L540–565). |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` | Dockerfile mínimo nginx (draft L577–587). |
| 7 | Cierre del curso | `sections/CierreSection.tsx` | — | Recapitula clases 1–4 + enlace `posw/herramientas-desarrollo` (draft L660–673). |
| 8 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | `QuizSection slug="clase-04-virtualizacion-diagnostico" track="configuracion-servicios-web"`. |
| 9 | Guía docente | `sections/GuiaDocenteSection.tsx` | — | Tabla 0–120 min + errores frecuentes (draft L677–696). Solo docentes; al final. |

### H2 internos en `ContenedoresSection`

| H2 visible | draft | bloques clave |
|------------|-------|---------------|
| Contenedores: qué son y por qué importan | `### 1)` L64–120 | prose, tablas composición y ventajas/desventajas, `Callout` error-contenedor-vs-vm |
| Docker: Dockerfile y Docker Compose | `### 2)` L124–293 | `CodeFiddle` dockerfile + yaml + bash, `StepReveal` Docker Desktop, `CodeChallenge`, `PracticeExercise` kernel |
| Contenedor frente a máquina virtual | `### 3)` L297–359 | `MermaidDiagram` capas VM vs contenedor, `CompareTable`, `PracticeExercise` elegir VM |
| Deploy por SSH y Docker Compose | `### 6)` L512–536 | `MermaidDiagram` secuencia staging, `CodeFiddle` bash deploy |

## Quiz — `src/lib/teaching-quizzes/configuracion-servicios-web.ts`

Registrar slug `clase-04-virtualizacion-diagnostico` con 5 preguntas del draft L597–656:

| # | Tema |
|---|------|
| 1 | Contenedor vs VM: arranque rápido y kernel compartido |
| 2 | Dominio no resuelve pero IP responde → DNS primero |
| 3 | Snapshots VM: restaurar estado conocido |
| 4 | Compose sin healthcheck → crash loop API |
| 5 | Reto integrador: HTTPS obligatorio en producción |

**Infra:** `<QuizSection slug="clase-04-virtualizacion-diagnostico" track="configuracion-servicios-web" />` en `MiniquizSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `title` | `Virtualización, contenedores y diagnóstico integrador` |
| `seoTitle` | `Docker, VMs y diagnóstico web por capas \| CSW` |
| `seoDescription` | `Contenedores Docker, VMs de laboratorio, troubleshooting DNS/TLS/SSH/Compose y reto integrador staging. Cierra el curso Configuración de Servicios Web (clase 4).` |
| `prev` | `clase-03-administracion-remota` |
| `next` | `null` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `dockerfile`, `yaml`, `bash`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L33–37 |
| Prerrequisitos | prose `<ul>` | clases 1–3 + BIOS virtualización draft L41–44 |
| Intro stack reproducible | prose | draft L52–54 |
| `regla-oro-dns-mx` | `Callout` | `variant="callout-warning"`; title: «Regla de oro del curso»; children draft L58–59 |

### `ContenedoresSection`

#### H2 — Contenedores: qué son y por qué importan

| id | componente | props |
|----|------------|-------|
| Bloques pedagógicos | prose + tablas | qué es, ciclo imagen/contenedor, composición L68–105, ejemplo Medellín L109, señales buen/mal uso L113–114 |
| `error-contenedor-vs-vm` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L118–119 |

#### H2 — Docker: Dockerfile y Docker Compose

| id | componente | props |
|----|------------|-------|
| Bloques Docker | prose + tabla herramientas | plataforma, K8s vs Compose L128–137, tipos L220–227 |
| `dockerfile-api-node` | `CodeFiddle` | `language="dockerfile"`; title: «Dockerfile API Node.js»; `filename="Dockerfile"`; code draft L150–163 |
| `docker-compose-staging` | `CodeFiddle` | `language="yaml"`; title: «docker-compose.yml staging»; `filename="docker-compose.yml"`; code draft L172–216 |
| `comandos-docker-esenciales` | `CodeFiddle` | `language="bash"`; title: «Comandos esenciales Docker»; code draft L232–247 |
| `docker-desktop-windows` | `StepReveal` | title: «Docker Desktop en Windows»; steps[4] draft L257–274 |
| `kernel-compartido-vs-vm` | `PracticeExercise` | prompt draft L279; hints draft L280; expectedKeywords draft L281; successMessage draft L282 |
| `completar-docker-compose` | `CodeChallenge` | title: «Completar docker-compose.yml»; template draft L288; blanks draft L289–292 |

#### H2 — Contenedor frente a máquina virtual

| id | componente | props |
|----|------------|-------|
| Bloques comparativa | prose + tabla hipervisores | qué es, por qué importa L301–325, ejemplos VM/contenedor L342–346, señales L349–351 |
| `capas-vm-vs-contenedor` | `MermaidDiagram` | chart draft L313 — flowchart TB comparativo VM (hipervisor + SO invitado) vs contenedor (kernel compartido + motor Docker) |
| `comparativa-vm-contenedor` | `CompareTable` | headers draft L331; rows draft L332–339 |
| `elegir-vm-ubuntu-lab` | `PracticeExercise` | prompt draft L355; hints draft L356; expectedKeywords draft L357; successMessage draft L358 |

#### H2 — Deploy por SSH y Docker Compose

| id | componente | props |
|----|------------|-------|
| `secuencia-staging-integrador` | `MermaidDiagram` | chart draft L520 — sequenceDiagram Dev → DNS → VPS HTTPS → Compose → 200 OK |
| Deploy SSH prose | prose | draft L536 |
| `deploy-ssh-compose` | `CodeFiddle` | `language="bash"`; title: «Deploy por SSH + Compose»; code draft L527–534 |

### `VirtualizacionSection`

| id | componente | props |
|----|------------|-------|
| Bloques VM | prose | qué es, snapshots, tabla hipervisores draft L367–325, señales L412–415 |
| `crear-vm-laboratorio` | `StepReveal` | title: «Crear VM de laboratorio»; steps[5] draft L380–401 |
| `snapshot-vbox-cli` | `CodeFiddle` | `language="bash"`; title: «Snapshot VirtualBox (CLI)»; code draft L408–410 |
| `sintoma-vm-sin-red` | `Callout` | `variant="callout-info"`; title: «Síntoma: VM sin red»; children draft L420 |

### `SolucionProblemasSection`

| id | componente | props |
|----|------------|-------|
| Metodología 5 pasos | prose `<ol>` | draft L439–443 |
| `tabla-diagnostico-capas` | `CompareTable` | headers draft L449; rows draft L451–460 (10 filas) |
| `comandos-diagnostico-capas` | `CodeFiddle` | `language="bash"`; title: «Comandos de diagnóstico por capa»; code draft L468–481 |
| Casos reales | prose | Lima e-commerce + Santiago certificado draft L485–487 |
| Señales buen/mal diagnóstico | prose `<ul>` | draft L491–492 |
| `diagnostico-dominio-vs-ip` | `PracticeExercise` | prompt draft L496; hints draft L497; expectedKeywords draft L498; successMessage draft L499 |
| `orden-diagnostico-certificado` | `PracticeExercise` | prompt draft L504; hints draft L505; expectedKeywords draft L506; successMessage draft L507 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose | «Stack staging para startup LATAM» Guadalajara draft L544–546 |
| Requisitos | prose `<ol>` | 5 requisitos draft L550–554 |
| Entregables | prose `<ul>` | draft L558–561 |
| Criterio de éxito | prose | draft L565 |
| `reto-fallo-simulado` | `PracticeExercise` | prompt draft L569; hints draft L570; expectedKeywords draft L571; successMessage draft L572; `rows={5}` |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `dockerfile-nginx-minimo` | `PracticeExercise` | prompt draft L582; hints draft L583; expectedKeywords draft L584; successMessage draft L585 |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Recapitulación curso | `<ul>` clases 1–4 draft L666–669 |
| Competencia + siguiente paso | prose + enlace `posw/herramientas-desarrollo` draft L671–673 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="clase-04-virtualizacion-diagnostico" track="configuracion-servicios-web" />` |

### `GuiaDocenteSection`

| elemento | contenido |
|----------|-----------|
| Tabla bloques 0–120 min | prose `<table>` draft L681–687 |
| Errores frecuentes | prose `<ul>` draft L691–696 |

## Componentes TSX — estado

| archivo | export | dependencias | estado |
|---------|--------|--------------|--------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` | Existe — poblar |
| `sections/ContenedoresSection.tsx` | `ContenedoresSection` | `Callout`, `CodeFiddle`, `StepReveal`, `MermaidDiagram`, `CompareTable`, `CodeChallenge`, `PracticeExercise` | Existe — refactor 4 H2 + diagrama VM vs contenedor |
| `sections/VirtualizacionSection.tsx` | `VirtualizacionSection` | `StepReveal`, `Callout`, `CodeFiddle` | Existe — poblar |
| `sections/SolucionProblemasSection.tsx` | `SolucionProblemasSection` | `CompareTable`, `CodeFiddle`, `PracticeExercise` | Existe — poblar |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` | Existe — poblar |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` | Existe — poblar |
| `sections/CierreSection.tsx` | `CierreSection` | prose only | Existe — poblar |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) | Existe — verificar slug |
| `sections/GuiaDocenteSection.tsx` | `GuiaDocenteSection` | prose only | Existe — mover al final en lesson root |

**No requiere componentes nuevos en `sections/`** — escalar a lesson-developer para poblar stubs existentes.

## Clay / marca (lesson-spec § Clay UI)

| Token / variante | Uso |
|------------------|-----|
| `callout-warning` | `regla-oro-dns-mx`, `error-contenedor-vs-vm` — borde `--color-accent` |
| `callout-info` | `sintoma-vm-sin-red` — borde `--color-secondary` |
| `stepper` | `StepReveal` Docker Desktop y crear VM — barra activa secondary |
| Tablas prose | composición contenedor, ventajas/desventajas, hipervisores — sin clay |
| `CompareTable` | VM vs contenedor, diagnóstico 10 filas — `ClayCard` `my-8`, thead secondary |
| `MermaidDiagram` | capas VM vs contenedor, secuencia staging — `my-6`, sin clay |
| `CodeFiddle` | fondo oscuro `--color-neutral-dark`, `my-6` |

Profundidad clay máx. 2 niveles (ADR 003): `LessonLayout` → `ClayCard` → interactivos.

## Checklist lesson-developer

- [ ] H2 según lesson-spec § Brand (sin prefijos «1)»–«6)» ni labels syllabus 3.x)
- [ ] Migrar todo código → `CodeFiddle` (`dockerfile`, `yaml`, `bash`)
- [ ] `MermaidDiagram` capas VM vs contenedor (flowchart TB) en `ContenedoresSection`
- [ ] `MermaidDiagram` secuencia staging en `ContenedoresSection` (H2 deploy)
- [ ] Reordenar `Clase04VirtualizacionDiagnosticoLesson.tsx`: `GuiaDocenteSection` al final
- [ ] Registrar/verificar quiz `clase-04-virtualizacion-diagnostico` en `teaching-quizzes/configuracion-servicios-web.ts`
- [ ] `lesson-meta.ts`: `title`, `seoTitle`, `seoDescription` desde lesson-spec § SEO
- [ ] 17 bloques interactivos del lesson-spec `interactive_blocks` implementados

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `clase-03-administracion-remota` |
| `next` | `null` (última lección del track; volver al índice CSW) |
| Canonical | `/es/teaching/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/` |
