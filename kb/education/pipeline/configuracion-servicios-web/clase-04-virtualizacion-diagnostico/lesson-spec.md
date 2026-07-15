---
track: configuracion-servicios-web
slug: clase-04-virtualizacion-diagnostico
title: "Virtualización, contenedores y diagnóstico integrador"
order: 5
prev: clase-03-administracion-remota
next: null
prerequisites:
  - configuracion-servicios-web/clase-01-fundamentos-web
  - configuracion-servicios-web/clase-02-hosting-correo-https
  - configuracion-servicios-web/clase-03-administracion-remota
related:
  - configuracion-servicios-web/index
  - posw/herramientas-desarrollo
  - posw/modelo-cliente-servidor
  - posw/protocolos-seguridad
source_brief: kb/education/pipeline/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - ContenedoresSection
  - VirtualizacionSection
  - SolucionProblemasSection
  - RetoIntegradorSection
  - CompruebaTuComprensionSection
  - MiniquizSection
  - CierreSection
  - GuiaDocenteSection
interactive_blocks:
  - type: callout
    id: regla-oro-dns-mx
  - type: callout
    id: error-contenedor-vs-vm
  - type: step-reveal
    id: docker-desktop-windows
  - type: practice-exercise
    id: kernel-compartido-vs-vm
  - type: code-challenge
    id: completar-docker-compose
  - type: mermaid
    id: capas-vm-vs-contenedor
  - type: compare-table
    id: comparativa-vm-contenedor
  - type: practice-exercise
    id: elegir-vm-ubuntu-lab
  - type: step-reveal
    id: crear-vm-laboratorio
  - type: callout
    id: sintoma-vm-sin-red
  - type: compare-table
    id: tabla-diagnostico-capas
  - type: practice-exercise
    id: diagnostico-dominio-vs-ip
  - type: practice-exercise
    id: orden-diagnostico-certificado
  - type: mermaid
    id: secuencia-staging-integrador
  - type: practice-exercise
    id: reto-fallo-simulado
  - type: practice-exercise
    id: dockerfile-nginx-minimo
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
brand_tone: academico-universitario
seo_title: "Docker, VMs y diagnóstico web por capas | CSW"
seo_description: "Contenedores Docker, VMs de laboratorio, troubleshooting DNS/TLS/SSH/Compose y reto integrador staging. Cierra el curso Configuración de Servicios Web (clase 4)."
hreflang_notes: "Traducir título y meta a EN en fase i18n; mantener slug idéntico"
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (autoridad operativa) + **Guía** (cierre integrador del curso). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track Configuración de Servicios Web (clase 4, cierre de curso).

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; conecta contenedores y VMs con operación real en VPS LATAM.
- **Persona:** segunda persona (*tú*) en ejercicios, reto y troubleshooting; impersonal en definiciones (*el estudiante podrá…*, *el contenedor comparte el kernel…*).
- **Voz:** profesional, clara, orientada a operaciones; prioriza diagnóstico por capas antes de reiniciar servicios al azar.
- **Evitar:** hype de Kubernetes, simplificar «Docker = virtualización», tono de blog DevOps, mezclar DNS y TLS en un solo paso de diagnóstico.
- **Preferir:** verbos de acción concretos (*definir*, *describir*, *crear*, *diagnosticar*, *completar*, *documentar*, *justificar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Docker, VMs y diagnóstico web por capas \| CSW` | 43 caracteres |
| `seo_description` | `Contenedores Docker, VMs de laboratorio, troubleshooting DNS/TLS/SSH/Compose y reto integrador staging. Cierra el curso Configuración de Servicios Web (clase 4).` | 154 caracteres |
| `seo_title` (EN, fase i18n) | `Docker, VMs & layered web troubleshooting \| CSW` | Voz senior engineer |
| `seo_description` (EN) | `CSW Lesson 4: Docker containers, lab VMs, DNS/TLS/SSH troubleshooting, staging deploy with Compose, and integrative challenge.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Virtualización, contenedores y diagnóstico integrador`

- Sustituye numeración «Clase 4» en título visible; el orden queda en meta y navegación.
- Prioriza *diagnóstico integrador* (competencia de cierre) y *contenedores* (herramienta principal de staging).
- Mantiene minúsculas tras dos puntos (convención del track).

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos de aprendizaje | Objetivos de aprendizaje | Neutro, catalogable; 5 objetivos medibles |
| Introducción | De la administración remota al stack reproducible | Puente clase 3 → contenedores; sin repetir definición de SSH |
| ↳ Contenedores: qué son | Contenedores: qué son y por qué importan | Imagen vs contenedor; kernel compartido |
| ↳ Docker | Docker: Dockerfile y Docker Compose | Plataforma + comandos; Compose para staging |
| ↳ VM vs contenedor | Contenedor frente a máquina virtual | Cuándo elegir cada enfoque; no binario absoluto |
| ↳ Virtualización (VMs) | Virtualización y laboratorio seguro | Snapshots, VirtualBox/Hyper-V; práctica sin riesgo |
| ↳ Troubleshooting | Troubleshooting integrador por capas | Síntoma → capa → herramienta → acción |
| ↳ Flujo integrador | Deploy por SSH y Docker Compose | Secuencia staging; cierra clases 1–3 |
| Reto integrador | Reto integrador: stack staging para startup LATAM | Escenario Guadalajara; entregables operativos |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa (Dockerfile mínimo) |
| Miniquiz | Mini-quiz | Evaluación sumativa breve (5 preguntas) |
| Cierre | Cierre del curso | Recapitula clases 1–4; puente a `posw/herramientas-desarrollo` |
| Guía docente | Guía docente | Bloques 0–120 min; solo docentes |

**Reglas transversales para headings:**

- H2: tema nominal o pregunta; sin emojis.
- H3: concreto y escaneable; nombrar herramienta (`dig`, `certbot`, `docker compose`) solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Regla de oro del curso

- **Título:** `Regla de oro del curso`
- **Tono:** preventivo; operaciones DNS/correo con respaldo.
- **Copy refinado:** `No cambies nameservers y MX el mismo día sin backup de registros. Exporta la zona DNS antes de migrar correo o hosting.`
- **Variante Clay:** `callout-warning`; borde accent.

#### 2. Error frecuente — contenedor vs VM

- **Título:** `Error frecuente`
- **Tono:** aclaratorio; desmonta confusión habitual en laboratorio.
- **Copy refinado:** `Confundir contenedor con VM: no puedes instalar Windows dentro de un contenedor Linux. Para otro SO completo, usa una máquina virtual.`
- **Variante Clay:** `callout-warning`; borde accent.

#### 3. Síntoma: VM sin red

- **Título:** `Síntoma: VM sin red`
- **Tono:** diagnóstico puntual; evita reinstalar el SO invitado.
- **Copy refinado:** `Si ping al gateway falla desde el invitado, revisa el modo del adaptador (NAT vs bridge) en VirtualBox o Hyper-V antes de reinstalar el SO.`
- **Variante Clay:** `callout-info`; borde secondary.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| StepReveal | Título | `Docker Desktop en Windows` — pasos: BIOS → WSL 2 → instalación → `hello-world` |
| StepReveal | Título | `Crear VM de laboratorio` — pasos: ISO → recursos → SO → snapshot → Nginx/SSH |
| CompareTable | VM vs contenedor | Filas: SO, tamaño, arranque, aislamiento, uso típico, snapshots |
| CompareTable | Diagnóstico por capas | 10 filas síntoma/capa/causa/acción/corrección; tono runbook |
| MermaidDiagram | Capas VM vs contenedor | Comparativa lateral; sin texto marketing |
| MermaidDiagram | Secuencia staging | Dev → DNS → VPS HTTPS → Compose → 200 OK |
| PracticeExercise | Éxito (kernel) | `Correcto. El contenedor reutiliza el kernel del host; la VM debe arrancar un sistema operativo completo con su propio kernel.` |
| PracticeExercise | Éxito (VM Ubuntu) | `Correcto. La VM reproduce mejor un servidor completo con firewall y systemd; los snapshots permiten volver atrás si algo sale mal.` |
| PracticeExercise | Éxito (dominio vs IP) | `Correcto. La causa más probable es un registro DNS incorrecto o propagación pendiente, no TLS ni contenedores.` |
| PracticeExercise | Éxito (orden cert) | `Orden: (b) dig → (c) curl -vI → (a) certbot renew → (d) incógnito para descartar caché.` |
| PracticeExercise | Éxito (reto) | `Buen enfoque. Documentar síntoma → capa → acción es la base de un runbook operativo.` |
| CodeChallenge | Completar compose | Blanks `8080:80` y `db`; hint operativo, no adivinanza |
| Quiz | Feedback general | Una oración; citar capa (DNS, TLS, contenedor) o herramienta cuando aplique |
| Cierre | Ideas clave | Viñetas: fundamentos · hosting HTTPS · SSH/SFTP · Docker/VM · diagnóstico por capas |
| Cierre | Siguiente paso | `Para profundizar en Docker avanzado (Dockerfile multi-etapa, empaquetado React), consulta la lección herramientas de desarrollo del track POSW.` |

### Notas EN (fase i18n)

- Título EN sugerido: `Virtualization, containers and integrative troubleshooting`
- Mantener sin traducir: Docker, Dockerfile, Docker Compose, Kubernetes, WSL, SSH, SFTP, DNS, TLS, HTTPS, MX, SPF, Nginx, VirtualBox, Hyper-V, VPS, Compose.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Guía docente» → `Instructor guide`.

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/protocolos-seguridad/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track CSW |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención CSW / POSW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tablas de composición contenedor (draft L88–94) y ventajas/desventajas (L100–105): prose `<table>`; sin clay.
- Tabla hipervisores (draft L320–325): prose `<table>`; sin clay.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Contenedores: qué son y por qué importan` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Qué es`, `Cómo funciona`, `Dockerfile` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Instalar WSL 2») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | namespaces/cgroups, metodología 5 pasos |

**H2 sugeridos (promover bloques del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Introducción | De la administración remota al stack reproducible | `ObjetivosSection` (intro + objetivos) |
| `### 1)` | Contenedores: qué son y por qué importan | `ContenedoresSection` parte 1 |
| `### 2)` | Docker: Dockerfile y Docker Compose | `ContenedoresSection` parte 2 |
| `### 3)` | Contenedor frente a máquina virtual | `ContenedoresSection` parte 3 |
| `### 4)` | Virtualización y laboratorio seguro | `VirtualizacionSection` |
| `### 5)` | Troubleshooting integrador por capas | `SolucionProblemasSection` |
| `### 6)` | Deploy por SSH y Docker Compose | Cierre de `ContenedoresSection` o intro `RetoIntegradorSection` |
| Reto integrador | Reto integrador: stack staging para startup LATAM | `RetoIntegradorSection` |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |
| Cierre | Cierre del curso | `CierreSection` |
| Guía docente | Guía docente | `GuiaDocenteSection`; tono docente, sin clay dominante |

**H3 dentro de `ContenedoresSection`:** Qué es, Para qué sirve, Cómo funciona, Estructura, Ventajas y desventajas, Ejemplo concreto, Dockerfile, Docker Compose, Comandos esenciales, Tipos/variantes.

**H3 dentro de `VirtualizacionSection`:** Qué es, Crear VM de laboratorio, Snapshot desde CLI, Señales de buen y mal uso.

**H3 dentro de `SolucionProblemasSection`:** Metodología de diagnóstico, Tabla por síntoma, Comandos por capa, Casos reales.

### Mapa de secciones → componentes

| Orden pedagógico | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|------------------|----------------|-----|--------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista 5 objetivos + prerrequisitos + intro + `Callout` |
| 2 | `ContenedoresSection` | Contenedores y Docker | — | prose tablas, `CodeBlock` ×3, `StepReveal`, `MermaidDiagram`, `CompareTable`, `CodeChallenge`, callouts |
| 3 | `VirtualizacionSection` | Virtualización y laboratorio seguro | stepper | prose, `StepReveal` VM, `Callout`, `CodeBlock` snapshot |
| 4 | `SolucionProblemasSection` | Troubleshooting integrador por capas | — | prose, `CompareTable` diagnóstico, `CodeBlock`, casos reales, `PracticeExercise` ×2 |
| 5 | `RetoIntegradorSection` | Reto integrador: stack staging para startup LATAM | card | prose requisitos + `MermaidDiagram` secuencia + `PracticeExercise` |
| 6 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` Dockerfile |
| 7 | `MiniquizSection` | Mini-quiz | card | `Quiz` 5 preguntas |
| 8 | `CierreSection` | Cierre del curso | card | Viñetas integración + enlace POSW |
| 9 | `GuiaDocenteSection` | Guía docente | — | Tabla bloques tiempo + errores frecuentes |

> **Nota implementación:** el TSX actual coloca `GuiaDocenteSection` tras objetivos; alinear con `layout-spec.md` o mover al final según convención docente del track.

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos + prerrequisitos | prose `<ul>` | 5 objetivos + 3 clases previas (draft L31–46) | Sin clay |
| Intro stack reproducible | prose | draft L52–54 | Sin clay |
| `regla-oro-dns-mx` | `Callout` | title: «Regla de oro del curso» (draft L56–60) | **callout-warning** |

#### `ContenedoresSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Bloques pedagógicos 1–3 | prose + tablas | contenedor, Docker, VM vs contenedor (draft L64–351) | Tablas prose |
| Dockerfile / compose / bash | `CodeBlock` ×3 | dockerfile, yaml, bash (draft L149–247) | `my-6` |
| `error-contenedor-vs-vm` | `Callout` | title: «Error frecuente» (draft L116–120) | **callout-warning** |
| `docker-desktop-windows` | `StepReveal` | 4 pasos Windows/WSL (draft L254–275) | **stepper** `my-8` |
| `kernel-compartido-vs-vm` | `PracticeExercise` | arranque segundos vs minutos (draft L277–283) | `ClayCard` accent; `my-8` |
| `completar-docker-compose` | `CodeChallenge` | puerto y depends_on (draft L285–293) | `ClayCard` accent; `my-8` |
| `capas-vm-vs-contenedor` | `MermaidDiagram` | flowchart TB comparativo (draft L311–314) | `my-6` |
| `comparativa-vm-contenedor` | `CompareTable` | 6 filas criterio (draft L329–340) | `ClayCard` `my-8`; thead secondary |
| `elegir-vm-ubuntu-lab` | `PracticeExercise` | ufw/systemd en Buenos Aires (draft L353–359) | `ClayCard` accent; `my-8` |
| Secuencia staging | `MermaidDiagram` | sequenceDiagram deploy (draft L518–521) | `my-6` |
| Deploy SSH | `CodeBlock` | bash ssh + compose (draft L525–534) | `my-6` |

#### `VirtualizacionSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Bloques VM | prose | hipervisores, snapshots (draft L363–415) | Sin clay |
| `crear-vm-laboratorio` | `StepReveal` | 5 pasos ISO → Nginx (draft L377–402) | **stepper** `my-8` |
| Snapshot CLI | `CodeBlock` | VBoxManage (draft L406–410) | `my-4` |
| `sintoma-vm-sin-red` | `Callout` | title: «Síntoma: VM sin red» (draft L417–421) | **callout-info** |

#### `SolucionProblemasSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Metodología 5 pasos | prose `<ol>` | draft L437–443 | Sin clay |
| `tabla-diagnostico-capas` | `CompareTable` | 10 filas síntoma→corrección (draft L447–462) | `ClayCard` `my-8`; thead secondary |
| Comandos diagnóstico | `CodeBlock` | dig, curl, docker, ssh (draft L466–481) | `my-6` |
| Casos reales | prose | Lima e-commerce, Santiago cert (draft L483–487) | Sin clay |
| `diagnostico-dominio-vs-ip` | `PracticeExercise` | curl IP vs dominio (draft L494–500) | accent; `my-8` |
| `orden-diagnostico-certificado` | `PracticeExercise` | orden b→c→a→d (draft L502–508) | accent; `my-8` |

#### `RetoIntegradorSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Enunciado + requisitos | prose | Guadalajara staging (draft L544–565) | H2 primary |
| `reto-fallo-simulado` | `PracticeExercise` | síntoma→capa→acción (draft L567–573) | `ClayCard` accent; `rows={5}`; `my-8` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `dockerfile-nginx-minimo` | `PracticeExercise` | FROM/COPY/EXPOSE nginx (draft L581–587) | accent; H2 en **card** |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Recapitulación clases 1–4 | prose `<ul>` (draft L664–669) | Sin clay |
| Competencia curso + enlace POSW | prose (draft L671–673) | Sin clay |

#### `MiniquizSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas (draft L597–656); clave `clase-04-virtualizacion-diagnostico` | `ClayCard` `my-8` |

#### `GuiaDocenteSection`

| Elemento | Clay |
|----------|------|
| Tabla bloques 0–120 min | prose `<table>` (draft L681–687) | Sin clay |
| Errores frecuentes | prose `<ul>` (draft L689–696) | Sin clay |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Regla de oro del curso | `callout-warning` | `--color-accent` | Operaciones DNS/correo; backup obligatorio |
| Error frecuente: contenedor vs VM | `callout-warning` | `--color-accent` | Confusión conceptual en laboratorio |
| Síntoma: VM sin red | `callout-info` | `--color-secondary` | Diagnóstico de red en hipervisor |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (blanco, no clay)
        └── CodeBlock (oscuro, no clay)
```

En `ContenedoresSection`: intercalar prose entre los tres `CodeBlock`; no apilar diagrama + stepreveal sin párrafo. En `SolucionProblemasSection`: tabla diagnóstico (`my-8`) antes de practice exercises. En `VirtualizacionSection`: stepreveal VM → callout red → code snapshot opcional.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos de aprendizaje | 1 | 1 callout warning |
| Contenedores y Docker | 2 | stepreveal + 2 compare + challenge + 2 practice |
| Virtualización y laboratorio | 2 | stepper + callout info |
| Troubleshooting integrador | 2 | tabla grande + 2 practice |
| Reto integrador | 2 | practice documentación |
| Comprueba tu comprensión | 2 | 1 practice |
| Mini-quiz | 2 | Quiz final |
| Cierre del curso | 0 | Prose |
| Guía docente | 0 | Tabla tiempo |

### Checklist implementación (lesson-developer)

- [ ] Poblar `ObjetivosSection` con intro, objetivos, prerrequisitos y `Callout` regla de oro
- [ ] Poblar `ContenedoresSection`: tablas prose, 3 `CodeBlock`, 2 `MermaidDiagram`, `CompareTable`, `StepReveal` Docker Desktop, `CodeChallenge`, 2 callouts, 2 `PracticeExercise`
- [ ] Poblar `VirtualizacionSection`: `StepReveal` VM, `Callout` sin red, `CodeBlock` snapshot
- [ ] Poblar `SolucionProblemasSection`: `CompareTable` 10 filas, `CodeBlock` diagnóstico, casos reales, 2 `PracticeExercise`
- [ ] Poblar `RetoIntegradorSection`: requisitos + secuencia + `PracticeExercise` fallo simulado
- [ ] Poblar `CompruebaTuComprensionSection`, `MiniquizSection`, `CierreSection`, `GuiaDocenteSection`
- [ ] Actualizar `lesson-meta.ts` con `seoTitle` / `seoDescription` de § SEO
- [ ] Verificar quiz en `src/lib/teaching-quizzes/configuracion-servicios-web.ts`
- [ ] H2: «Contenedores: qué son y por qué importan», «Docker: Dockerfile y Docker Compose», «Contenedor frente a máquina virtual», «Virtualización y laboratorio seguro», «Troubleshooting integrador por capas»

## SEO

Contribución de **seo-redirects-expert**. Clase 5 (order 5) del track Configuración de Servicios Web; **cierra el curso** (`next: null`). Integra DNS, HTTPS, SSH y contenedores.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Docker, VMs y diagnóstico web por capas \| CSW` | 43 |
| `seoDescription` | `Contenedores Docker, VMs de laboratorio, troubleshooting DNS/TLS/SSH/Compose y reto integrador staging. Cierra el curso Configuración de Servicios Web (clase 4).` | 154 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Docker, VMs & layered web troubleshooting \| CSW` | 48 |
| `seoDescription` | `CSW Lesson 4: Docker containers, lab VMs, DNS/TLS/SSH troubleshooting, staging deploy with Compose, and integrative challenge.` | 121 |

### Keywords (track Configuración de Servicios Web)

**Primarias:** Docker, contenedores, máquina virtual, virtualización, troubleshooting, DNS, HTTPS, SSH, configuración servicios web.

**Secundarias:** Docker Compose, Dockerfile, VirtualBox, Hyper-V, WSL 2, staging, VPS, Nginx, certbot, Let's Encrypt, SFTP, MX, SPF.

**Long-tail:** diferencia contenedor vs máquina virtual, docker compose staging VPS, diagnosticar sitio web caído por capas, snapshot VirtualBox laboratorio, deploy SSH docker compose.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `clase-03-administracion-remota` | Clase 3: Administración remota |
| `next` | `null` | — (última lección del track; volver al índice del curso) |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/` |
| EN (fase i18n) | `/en/teaching/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/` |
| Hub track | `/es/teaching/configuracion-servicios-web/` |
| Relacionada POSW | `/es/teaching/posw/herramientas-desarrollo/` (profundización Docker) |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos de aprendizaje | Objetivos de aprendizaje | — |
| H2 | Contenedores: qué son | Contenedores Docker: qué son y por qué importan | contenedores Docker |
| H2 | Docker: Dockerfile y Compose | Docker: Dockerfile y Docker Compose para staging | Docker Compose |
| H2 | Contenedor vs máquina virtual | Contenedor frente a máquina virtual: cuándo elegir | contenedor vs máquina virtual |
| H2 | Virtualización (VMs) | Virtualización y laboratorio seguro con snapshots | máquina virtual VirtualBox |
| H2 | Troubleshooting integrador | Troubleshooting web por capas: DNS, TLS y contenedores | troubleshooting DNS TLS |
| H2 | Reto integrador | Reto integrador: stack staging HTTPS y Compose | staging docker compose |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Cierre | Cierre del curso Configuración de Servicios Web | configuración servicios web |
| H2 | Guía docente | Guía docente | — (noindex opcional en fase futura) |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Docker, VMs y diagnóstico web por capas \| CSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta «troubleshooting» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama capas VM vs contenedor o secuencia staging DNS→HTTPS→Compose |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-04-virtualizacion-diagnostico`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Virtualization, containers and integrative troubleshooting`.
- **Términos sin traducir:** Docker, Dockerfile, Docker Compose, WSL, SSH, DNS, TLS, HTTPS, Nginx, VirtualBox, Hyper-V, VPS, Compose, Kubernetes.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Guía docente» → `Instructor guide`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

