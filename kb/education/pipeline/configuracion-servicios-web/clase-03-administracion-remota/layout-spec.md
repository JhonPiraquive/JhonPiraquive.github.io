---
track: configuracion-servicios-web
slug: clase-03-administracion-remota
title: "Administración remota: nube, SSH y SFTP"
order: 3
prev: clase-02-hosting-correo-https
next: clase-04-virtualizacion-diagnostico
tsx_target: src/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/
---

## Clase03AdministracionRemotaLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<NubeSection />
<ModeloClienteServidorRemotoSection />
<FtpSection />
<SftpSection />
<SshSection />
<HerramientasAdminRemotaSection />
<CasosRealesLatamSection />
<RetoIntegradorSection />
<CompruebaTuComprensionSection />
<CierreSection />
```

**Refactor:** eliminar `GuiaDocenteSection`, `MiniquizSection`, `ComputacionNubeSection`, `FtpFileZillaSection`, `AdministracionRemotaSection`; dividir en 11 secciones temáticas según `tsx_sections` del draft.

Imports a añadir: `NubeSection`, `ModeloClienteServidorRemotoSection`, `FtpSection`, `SftpSection`, `HerramientasAdminRemotaSection`, `CasosRealesLatamSection`, `RetoIntegradorSection`. Actualizar `ObjetivosSection`, `SshSection`, `CompruebaTuComprensionSection`, `CierreSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosSection.tsx` | `Callout` | Objetivos + prerrequisitos + intro LATAM + callout 24/7 (draft L30–57). |
| 2 | Computación en la nube y principios NIST | `sections/NubeSection.tsx` | `CompareTable`, `MermaidDiagram` | Unifica draft §1–2 (NIST, IaaS/PaaS/SaaS). **Nuevo** (reemplaza `ComputacionNubeSection`). |
| 3 | Modelo cliente-servidor en administración remota | `sections/ModeloClienteServidorRemotoSection.tsx` | `CodeFiddle`, `MermaidDiagram` | **Nuevo.** Diagrama ASCII → `CodeFiddle` `text`; secuencia SSH+SFTP. |
| 4 | FTP: modo activo y pasivo | `sections/FtpSection.tsx` | `Callout`, `MermaidDiagram` ×2 | **Nuevo** (extraído de `FtpFileZillaSection`). Activo/pasivo → `MermaidDiagram`. |
| 5 | SFTP: transferencia cifrada sobre SSH | `sections/SftpSection.tsx` | `CodeFiddle`, `CompareTable` | **Nuevo.** Config FileZilla + comparativa FTP/SFTP/FTPS. |
| 6 | SSH: claves, hardening y SCP | `sections/SshSection.tsx` | `CodeFiddle` ×4, `StepReveal`, `CodeChallenge` | 4 bloques bash + errores comunes (draft L560–566). |
| 7 | Herramientas de administración remota | `sections/HerramientasAdminRemotaSection.tsx` | `StepReveal` | **Nuevo** (reemplaza `AdministracionRemotaSection`). Tabla PuTTY/FileZilla/cPanel/RDP/VNC. |
| 8 | Casos reales en LATAM | `sections/CasosRealesLatamSection.tsx` | — | **Nuevo.** Carlos Cali→DO; agencia Bogotá+cPanel. |
| 9 | Reto integrador: plan de administración remota | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Agencia Medellín; 5 tareas + criterio éxito. |
| 10 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×4, `QuizSection` | Prácticas guiadas + quiz sumativo (draft L570–720). |
| 11 | Cierre de la lección | `sections/CierreSection.tsx` | — | Ideas clave + referencias NIST/OpenSSH + puente `clase-04`. |

## Quiz — `src/lib/teaching-quizzes/configuracion-servicios-web.ts`

Registrar slug `clase-03-administracion-remota` con 5 preguntas del draft L663–719:

| # | Tema |
|---|------|
| 1 | FTP plano en Wi‑Fi pública — credenciales sin cifrar |
| 2 | FTP modo pasivo — cliente inicia canal de datos |
| 3 | IaaS vs PaaS — quién gestiona el SO |
| 4 | SSH clave pública vs contraseña — fuerza bruta |
| 5 | Diseñador WordPress — cPanel File Manager sin root |

**Infra:** `<QuizSection slug="clase-03-administracion-remota" track="configuracion-servicios-web" />` al final de `CompruebaTuComprensionSection` (eliminar `MiniquizSection`).

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `title` | `Administración remota: nube, SSH y SFTP` |
| `order` | `3` |
| `seoTitle` | `Administración remota: SSH, SFTP y nube \| CSW` |
| `seoDescription` | `Clase 3 CSW: principios NIST, IaaS/PaaS/SaaS, modelo cliente-servidor remoto, FTP vs SFTP, SSH con claves, FileZilla, cPanel y hardening básico.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `text`, `bash`.
> **Regla:** FTP activo/pasivo → `MermaidDiagram` (sequenceDiagram), no prose-only.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | clase-01, clase-02, POSW (draft L42–44) |
| Intro LATAM | prose | párrafo hosting remoto (draft L52) |
| `admin-remota-canal-24-7` | `Callout` | `variant="callout-info"`; title: «Administración remota = canal operativo 24/7»; children draft L56–57 |

### `NubeSection`

| id | componente | props |
|----|------------|-------|
| Definición cloud | prose | qué es, para qué sirve, cómo funciona (draft L68–76) |
| Tabla NIST | prose `<table>` | 5 principios (draft L82–88) |
| Implicación admin remota | prose | draft L90 |
| Ventajas / desventajas | prose | draft L94–96 |
| Ejemplo fintech Medellín | prose | draft L100 |
| Señales buen/mal uso | prose `<ul>` | draft L104–105 |
| IaaS/PaaS/SaaS definición | prose | draft L115–119 |
| Criterio elección intro | prose | «Elige el modelo según control, velocidad de despliegue y carga operativa» (lesson-spec L151) |
| `iaas-paas-saas` | `CompareTable` | headers: `["Criterio", "IaaS", "PaaS", "SaaS"]`; rows draft L130–136 |
| Cuándo elegir cada uno | prose `<ul>` | draft L141–143 |
| Tabla escenarios LATAM | prose `<table>` | agencia Bogotá, startup Node, banco RHEL (draft L147–151) |
| Señales buen/mal uso modelos | prose `<ul>` | draft L155–156 |
| `eleccion-modelo-nube` | `MermaidDiagram` | chart draft L160: flowchart IaaS/PaaS/SaaS |

### `ModeloClienteServidorRemotoSection`

| id | componente | props |
|----|------------|-------|
| Qué es / por qué importa | prose | draft L171–175 |
| Flujo 4 pasos | prose `<ol>` | daemon escucha, cliente conecta (draft L179–182) |
| `diagrama-cliente-servidor-remoto` | `CodeFiddle` | `language="text"`; title: «Cliente-servidor remoto»; code draft L186–194 |
| Ejemplo Cali→DO | prose | `ssh -i` (draft L198) |
| Señales buen/mal uso | prose `<ul>` | draft L202–203 |
| `cliente-servidor-remoto-sequence` | `MermaidDiagram` | chart draft L207: sequenceDiagram SSH+SFTP |

### `FtpSection`

| id | componente | props |
|----|------------|-------|
| Definición FTP | prose | puertos 21/20 (draft L218–222) |
| `ftp-plano-no-produccion` | `Callout` | `variant="callout-warning"`; title: «FTP plano: no en producción»; children draft L227 |
| Modo activo | prose `<ol>` | 4 pasos (draft L233–237) |
| `ftp-activo-sequence` | `MermaidDiagram` | chart draft L273: sequenceDiagram modo activo puerto 20 |
| Modo pasivo | prose `<ol>` | 4 pasos (draft L241–244) — **entre** los dos diagramas |
| Tabla canales | prose `<table>` | control/datos (draft L248–252) |
| Ventajas / desventajas | prose | draft L256–258 |
| Ejemplo Barranquilla | prose | draft L262 |
| Señales buen/mal uso | prose `<ul>` | draft L266–267 |
| `ftp-pasivo-sequence` | `MermaidDiagram` | chart draft L278: sequenceDiagram modo pasivo puerto alto |

### `SftpSection`

| id | componente | props |
|----|------------|-------|
| Definición SFTP vs FTPS | prose | subsistema SSH puerto 22 (draft L287–300) |
| Estructura capas | prose `<table>` | draft L304–308 |
| Ventajas / desventajas | prose | draft L312–314 |
| Ejemplo FileZilla | prose | draft L318 |
| `filezilla-sftp-config` | `CodeFiddle` | `language="text"`; title: «FileZilla — Site Manager SFTP»; code draft L321–328 |
| Señales buen/mal uso | prose `<ul>` | draft L333–334 |
| `ftp-sftp-ftps` | `CompareTable` | headers: `["Criterio", "FTP plano", "SFTP", "FTPS"]`; rows draft L340–345 |

### `SshSection`

| id | componente | props |
|----|------------|-------|
| Qué es / por qué importa | prose | draft L356–360 |
| Cómo funciona | prose `<ol>` | 5 pasos handshake (draft L364–368) |
| Componentes clave | prose `<table>` | clave privada/pública, sshd (draft L372–377) |
| Variantes cliente | prose `<ul>` | OpenSSH, PuTTY, WSL (draft L381–383) |
| Ventajas / desventajas | prose | draft L387–389 |
| `ssh-keygen-copy-id` | `CodeFiddle` | `language="bash"`; title: «Generación y uso de claves Ed25519»; code draft L395–404 |
| `sshd-hardening` | `CodeFiddle` | `language="bash"`; title: «Hardening básico en servidor»; code draft L410–417 |
| `scp-transfer` | `CodeFiddle` | `language="bash"`; title: «Copia segura con SCP»; code draft L423–428 |
| `verificacion-puertos` | `CodeFiddle` | `language="bash"`; title: «Verificación de puertos en servidor»; code draft L434–439 |
| Señales buen/mal uso | prose `<ul>` | draft L443–444 |
| `ssh-clave-a-shell` | `StepReveal` | title: «De clave local a shell remoto»; steps[5] draft L451–457 |
| `ssh-flag-i` | `CodeChallenge` | template: `ssh ___ ~/.ssh/id_ed25519 deploy@203.0.113.10`; blanks: `[{ answer: "-i", hint: "Flag para indicar archivo de clave privada" }]`; successMessage: «Correcto. \`-i\` indica el archivo de clave privada en el cliente.» |
| Errores comunes | prose `<ul>` H3 | 7 errores draft L560–566 |

### `HerramientasAdminRemotaSection`

| id | componente | props |
|----|------------|-------|
| Qué es / por qué importa | prose | draft L478–482 |
| Tabla herramientas | prose `<table>` | PuTTY, FileZilla, cPanel, RDP, VNC (draft L486–495) |
| Flujo agencia LATAM | prose `<ol>` | 3 escenarios (draft L499–501) |
| Paneles vs SSH | prose | draft L505–507 |
| Ejemplo Medellín | prose | draft L511 |
| Señales buen/mal uso | prose `<ul>` | draft L515–516 |
| `agencia-cpanel-vs-ssh` | `StepReveal` | title: «Caso agencia: cPanel vs SSH/SFTP»; steps[4] draft L522–526 |

### `CasosRealesLatamSection`

| id | componente | props |
|----|------------|-------|
| Caso 1 Carlos Cali→DO | prose numerado | draft L535–544 |
| Caso 2 agencia Bogotá | prose numerado | draft L546–554 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Diseña el plan de administración remota para una agencia en Medellín»; tareas 1–5 + criterio éxito (draft L617–629) |
| `reto-agencia-medellin` | `PracticeExercise` | prompt draft L633; hints draft L634–639; expectedKeywords draft L640; successMessage lesson-spec L163; `rows={8}` |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `sftp-wifi-publica` | `PracticeExercise` | prompt draft L574; hints draft L575–578; expectedKeywords draft L579 |
| `iaas-vs-paas-mvp` | `PracticeExercise` | prompt draft L584; hints draft L585–588; expectedKeywords draft L589 |
| `orden-flujo-ssh` | `PracticeExercise` | prompt draft L594; hints draft L595–598; expectedKeywords draft L599 |
| `scp-index-html` | `PracticeExercise` | prompt draft L604; hints draft L605–607; expectedKeywords draft L608 |
| Quiz | `QuizSection` | `slug="clase-03-administracion-remota"` `track="configuracion-servicios-web"` |

Apilar los cuatro `PracticeExercise` con `my-8` cada uno; quiz al final.

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L649 |
| Ideas clave | `<ul>` 5 viñetas: NIST · IaaS/PaaS/SaaS · cliente inicia · SFTP no FTP plano · claves SSH · herramienta según perfil (lesson-spec L165) |
| Referencias | NIST SP 800-145, OpenSSH manual (draft L653–655) |
| Siguiente paso | enlace `clase-04-virtualizacion-diagnostico` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/NubeSection.tsx` | `NubeSection` | `CompareTable`, `MermaidDiagram` |
| `sections/ModeloClienteServidorRemotoSection.tsx` | `ModeloClienteServidorRemotoSection` | `CodeFiddle`, `MermaidDiagram` |
| `sections/FtpSection.tsx` | `FtpSection` | `Callout`, `MermaidDiagram` |
| `sections/SftpSection.tsx` | `SftpSection` | `CodeFiddle`, `CompareTable` |
| `sections/HerramientasAdminRemotaSection.tsx` | `HerramientasAdminRemotaSection` | `StepReveal` |
| `sections/CasosRealesLatamSection.tsx` | `CasosRealesLatamSection` | prose only |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `sections/ComputacionNubeSection.tsx` | **Eliminar** — contenido en `NubeSection` |
| `sections/FtpFileZillaSection.tsx` | **Eliminar** — dividir en `FtpSection` + `SftpSection` |
| `sections/AdministracionRemotaSection.tsx` | **Eliminar** — reemplazar por `HerramientasAdminRemotaSection` |
| `sections/GuiaDocenteSection.tsx` | **Eliminar** — no está en `tsx_sections` del draft |
| `sections/MiniquizSection.tsx` | **Eliminar** — quiz integrado en `CompruebaTuComprensionSection` |
| `sections/ObjetivosSection.tsx` | **Actualizar** — objetivos, prerrequisitos, intro, callout |
| `sections/SshSection.tsx` | **Actualizar** — 4 `CodeFiddle`, `StepReveal`, `CodeChallenge`, errores comunes |
| `sections/CompruebaTuComprensionSection.tsx` | **Actualizar** — 4 practice + `QuizSection` |
| `sections/CierreSection.tsx` | **Actualizar** — ideas clave, referencias, puente clase-04 |
| `Clase03AdministracionRemotaLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec § Brand/SEO (sin prefijos «1)»–«7)» ni numeración «2.2»)
- [ ] Migrar todo código → `CodeFiddle` (`text` ×2, `bash` ×4)
- [ ] FTP activo/pasivo → 2× `MermaidDiagram` con prose intermedio
- [ ] Crear 7 secciones nuevas; eliminar 5 obsoletas
- [ ] Registrar quiz `clase-03-administracion-remota` en `teaching-quizzes/configuracion-servicios-web.ts`
- [ ] `lesson-meta.ts`: `title`, `order`, `seoTitle`, `seoDescription` desde lesson-spec § SEO
- [ ] Errores comunes en `SshSection` (H3), no sección aparte
- [ ] Prácticas guiadas en `CompruebaTuComprensionSection`, no antes del reto

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `clase-02-hosting-correo-https` |
| `next` | `clase-04-virtualizacion-diagnostico` |
