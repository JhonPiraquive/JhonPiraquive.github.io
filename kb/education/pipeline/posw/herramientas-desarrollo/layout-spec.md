---
track: posw
slug: herramientas-desarrollo
title: "Herramientas de desarrollo: XAMPP y Docker"
order: 17
prev: modelo-cliente-servidor
next: bases-de-datos
---

## HerramientasDesarrolloLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<XamppSection />
<HelloPhpSection />
<DockerConceptosSection />
<DockerComandosSection />
<ComparativaSection />
<ReactDockerSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection` si existe; dividir en 6 secciones temáticas + 4 bloques pedagógicos (11 secciones totales).

Imports a añadir: `ObjetivosSection`, `XamppSection`, `HelloPhpSection`, `DockerConceptosSection`, `DockerComandosSection`, `ComparativaSection`, `ReactDockerSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L29–57). |
| 2 | XAMPP: Apache, MariaDB y PHP en local | `sections/XamppSection.tsx` | `MermaidDiagram`, `CodeFiddle` | **Nuevo.** H2 sin prefijo «1)». `bash` ×1. Tabla rutas draft L95–99 en prose. |
| 3 | Primer proyecto PHP en htdocs | `sections/HelloPhpSection.tsx` | `CodeFiddle`, `StepReveal` | **Nuevo.** H2 sin prefijo «2)». `php` ×1. |
| 4 | Docker: imagen, contenedor y Dockerfile | `sections/DockerConceptosSection.tsx` | `CompareTable`, `Callout` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Comandos Docker: pull, run, build y logs | `sections/DockerComandosSection.tsx` | `CodeFiddle`, `CodeChallenge`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «4)». `bash` ×1. |
| 6 | XAMPP vs Docker: reproducibilidad y producción | `sections/ComparativaSection.tsx` | `CompareTable` | **Nuevo.** H2 sin prefijo «5)». |
| 7 | React en Docker: build multi-etapa con Nginx | `sections/ReactDockerSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×3, `StepReveal`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «6)». `dockerfile` ×1, `bash` ×1, `yaml` ×1. |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×1 | **Nuevo.** Ejercicio `my-8`. |
| 9 | Reto integrador: stack local con Docker Compose | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Enunciado + criterio éxito (draft L358–385). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `bases-de-datos` (draft L389–403). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="herramientas-desarrollo" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `herramientas-desarrollo` con 5 preguntas del draft L411–469:

| # | Tema |
|---|------|
| 1 | «M» en XAMPP = MariaDB |
| 2 | `index.php` en `htdocs` (document root) |
| 3 | Imagen Docker = plantilla de solo lectura |
| 4 | `-p 3000:80` mapea host:contenedor |
| 5 | Docker para equipo con entorno idéntico dev/CI/prod |

**Infra:** `<QuizSection slug="herramientas-desarrollo" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `XAMPP y Docker: entornos de desarrollo \| POSW` |
| `seoDescription` | `Configura XAMPP (Apache, MariaDB, PHP), domina Docker (imagen, contenedor, Compose) y empaqueta React con build multi-etapa. Lección 17 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `bash`, `php`, `dockerfile`, `yaml`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L33–37 |
| Prerrequisitos | prose `<ul>` | draft L41–43 |
| Intro | prose | draft L51 |
| `desarrollo-local-no-produccion` | `Callout` | `variant="callout-info"`; title: «XAMPP es para desarrollo local»; children draft L55–56 (lesson-spec L73) |

### `XamppSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L67–72 |
| `stack-xampp-local` | `MermaidDiagram` | chart draft L78 |
| `instalar-arrancar-xampp` | `CodeFiddle` | `language="bash"`; title: «Instalar y arrancar XAMPP (Linux)»; code draft L85–91 |
| Tabla rutas | prose `<table>` o lista | draft L95–99 |
| Errores comunes | prose `<ul>` | draft L103–105 |

### `HelloPhpSection`

| id | componente | props |
|----|------------|-------|
| `hello-php-htdocs` | `CodeFiddle` | `language="php"`; title: «Ejemplo en htdocs»; code draft L117–123 |
| URL de prueba | prose | draft L125 |
| Flujo request/response | prose `<ol>` | draft L129–132 |
| `peticion-php-xampp` | `StepReveal` | title: «Petición PHP en XAMPP»; steps[4] draft L137–142 |

### `DockerConceptosSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L153–158 |
| `tabla-vm-vs-contenedor` | `CompareTable` | headers draft L164; rows draft L165–171 |
| `caso-en-mi-maquina-funciona` | `Callout` | `variant="callout-warning"`; title: «Caso real: «en mi máquina funciona»»; children draft L178–179 (lesson-spec L80) |

### `DockerComandosSection`

| id | componente | props |
|----|------------|-------|
| `comandos-docker-referencia` | `CodeFiddle` | `language="bash"`; title: «Comandos Docker esenciales»; code draft L191–200 |
| `completar-mapeo-puertos` | `CodeChallenge` | title: «Completa el mapeo de puertos»; template draft L207; blanks draft L208–210 |
| Regla del mapeo | prose | draft L215 |
| `practica-reproducibilidad-docker` | `PracticeExercise` | prompt draft L221; hints draft L222; expectedKeywords draft L223; successMessage draft L224 |

### `ComparativaSection`

| id | componente | props |
|----|------------|-------|
| `tabla-xampp-vs-docker` | `CompareTable` | headers draft L235; rows draft L236–242 |

### `ReactDockerSection`

| id | componente | props |
|----|------------|-------|
| `flujo-multi-stage` | `MermaidDiagram` | chart draft L255 |
| `dockerfile-react-nginx` | `CodeFiddle` | `language="dockerfile"`; title: «Dockerfile multi-etapa React + Nginx»; code draft L262–275 |
| `crear-proyecto-build` | `CodeFiddle` | `language="bash"`; title: «Crear proyecto y construir imagen»; code draft L280–286 |
| `compose-hot-reload` | `CodeFiddle` | `language="yaml"`; title: «Docker Compose para desarrollo con hot reload»; code draft L291–303 |
| Ejecutar compose | prose | draft L305 |
| `etapas-multi-stage` | `StepReveal` | title: «Multi-stage Dockerfile React»; steps[5] draft L312–318 |
| `ordenar-build-react` | `CodeChallenge` | title: «Ordena el build React en Docker»; template draft L326; blanks draft L327–333 |
| Errores comunes | prose `<ul>` | draft L338–340 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-htdocs` | `PracticeExercise` | prompt draft L350; hints draft L351; expectedKeywords draft L352; successMessage draft L353 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Entorno full-stack local con Docker Compose»; tareas 1–5 + criterio éxito (draft L362–372) |
| `reto-compose-fullstack` | `PracticeExercise` | prompt draft L376; hints draft L377–382; expectedKeywords draft L383; successMessage draft L384; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L393 |
| Ideas clave | `<ul>` 5 viñetas draft L397–401 |
| Siguiente paso | enlace `bases-de-datos` draft L403 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="herramientas-desarrollo" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosSection.tsx` | `ObjetivosSection` | `Callout` |
| `sections/XamppSection.tsx` | `XamppSection` | `MermaidDiagram`, `CodeFiddle` |
| `sections/HelloPhpSection.tsx` | `HelloPhpSection` | `CodeFiddle`, `StepReveal` |
| `sections/DockerConceptosSection.tsx` | `DockerConceptosSection` | `CompareTable`, `Callout` |
| `sections/DockerComandosSection.tsx` | `DockerComandosSection` | `CodeFiddle`, `CodeChallenge`, `PracticeExercise` |
| `sections/ComparativaSection.tsx` | `ComparativaSection` | `CompareTable` |
| `sections/ReactDockerSection.tsx` | `ReactDockerSection` | `MermaidDiagram`, `CodeFiddle`, `StepReveal`, `CodeChallenge` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** si existe — contenido repartido en 6 secciones temáticas |
| `HerramientasDesarrolloLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«6)»)
- [ ] Migrar todo código → `CodeFiddle` (`bash`, `php`, `dockerfile`, `yaml`)
- [ ] Crear 11 secciones; eliminar `ContenidoSection` si existe
- [ ] Registrar quiz `herramientas-desarrollo` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `modelo-cliente-servidor` |
| `next` | `bases-de-datos` |
