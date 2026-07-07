---
track: configuracion-servicios-web
slug: clase-03-administracion-remota
title: "Administración remota: nube, SSH y SFTP"
order: 3
prev: clase-02-hosting-correo-https
next: clase-04-virtualizacion-diagnostico
prerequisites:
  - clase-01-fundamentos-web
  - clase-02-hosting-correo-https
related:
  - clase-04-virtualizacion-diagnostico
  - posw/modelo-cliente-servidor
  - posw/protocolos-seguridad
  - posw/herramientas-desarrollo
source_brief: kb/education/pipeline/configuracion-servicios-web/clase-03-administracion-remota/brief.md
topic_expert: topic-expert-web-services
brand_tone: academico-universitario
tsx_sections:
  - ObjetivosSection
  - NubeSection
  - ModeloClienteServidorRemotoSection
  - FtpSection
  - SftpSection
  - SshSection
  - HerramientasAdminRemotaSection
  - CasosRealesLatamSection
  - RetoIntegradorSection
  - CompruebaTuComprensionSection
  - CierreSection
interactive_blocks:
  - type: callout
    id: admin-remota-canal-24-7
  - type: compare-table
    id: iaas-paas-saas
  - type: mermaid
    id: eleccion-modelo-nube
  - type: mermaid
    id: cliente-servidor-remoto-sequence
  - type: callout
    id: ftp-plano-no-produccion
  - type: mermaid
    id: ftp-activo-sequence
  - type: mermaid
    id: ftp-pasivo-sequence
  - type: compare-table
    id: ftp-sftp-ftps
  - type: step-reveal
    id: ssh-clave-a-shell
  - type: code-challenge
    id: ssh-flag-i
  - type: step-reveal
    id: agencia-cpanel-vs-ssh
  - type: practice-exercise
    id: sftp-wifi-publica
  - type: practice-exercise
    id: iaas-vs-paas-mvp
  - type: practice-exercise
    id: orden-flujo-ssh
  - type: practice-exercise
    id: scp-index-html
  - type: practice-exercise
    id: reto-agencia-medellin
  - type: quiz
    id: comprueba-comprension-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
seo_title: "Administración remota: SSH, SFTP y nube | CSW"
seo_description: "Clase 3 CSW: principios NIST, IaaS/PaaS/SaaS, modelo cliente-servidor remoto, FTP vs SFTP, SSH con claves, FileZilla, cPanel y hardening básico."
hreflang_notes: "es primary; canonical /es/teaching/configuracion-servicios-web/clase-03-administracion-remota/; EN mirror /en/teaching/configuracion-servicios-web/clase-03-administracion-remota/; x-default es"
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track Configuración de servicios web (CSW). Referencia de formato: `kb/education/pipeline/posw/modelo-cliente-servidor/lesson-spec.md` (§ Brand); alineación de headings con § SEO y § Clay UI de este mismo archivo.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; conecta computación en la nube con operación remota segura en escenarios LATAM (hosting en Miami/São Paulo, equipo en Cali, Bogotá o Lima).
- **Persona:** segunda persona (*tú*) en ejercicios, retos y quiz; impersonal en objetivos y definiciones (*el estudiante podrá…*, *el servidor escucha…*, *el cliente inicia la conexión…*).
- **Voz:** profesional, clara, confiable; prioriza **cifrado y autenticación** antes de atajos operativos; rechaza FTP plano en producción sin dramatizar.
- **Evitar:** hype de cloud sin criterio de costo, tono de blog «hackea tu servidor», trivializar seguridad SSH, confundir SFTP con FTPS sin aclarar.
- **Preferir:** verbos de acción concretos (*explicar*, *distinguir*, *comparar*, *configurar*, *elegir*, *justificar*, *documentar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Administración remota: SSH, SFTP y nube \| CSW` | 48 caracteres |
| `seo_description` | `Clase 3 CSW: principios NIST, IaaS/PaaS/SaaS, modelo cliente-servidor remoto, FTP vs SFTP, SSH con claves, FileZilla, cPanel y hardening básico.` | 154 caracteres |
| `seo_title` (EN, fase i18n) | `Remote admin: SSH, SFTP & cloud \| CSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `CSW Lesson 3: NIST cloud principles, IaaS/PaaS/SaaS, remote client-server model, FTP vs SFTP, SSH keys, FileZilla, cPanel, and basic hardening.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Administración remota: nube, SSH y SFTP`

- Sustituye título nominal por subtítulo académico con dos puntos.
- Prioriza *administración remota* (competencia medible) y los tres pilares operativos: nube (NIST + modelos), SSH (terminal) y SFTP (archivos).
- Mantiene minúsculas tras dos puntos (convención CSW/POSW).

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos de aprendizaje | Objetivos de aprendizaje | Neutro, catalogable; lista medible del draft |
| Introducción | Introducción | Contexto LATAM: hosting lejos, operación remota 24/7 |
| Computación en la nube | Computación en la nube y principios NIST | Definición NIST antes de modelos de servicio |
| ↳ IaaS, PaaS y SaaS | IaaS, PaaS y SaaS: criterio de elección | CompareTable + diagrama de decisión |
| Modelo cliente-servidor remoto | Modelo cliente-servidor en administración remota | Quién inicia, qué puerto escucha |
| FTP | FTP: modo activo y pasivo | Histórico; advertencia de seguridad |
| SFTP | SFTP: transferencia cifrada sobre SSH | Diferenciar de FTPS en primera mención |
| SSH | SSH: claves, hardening y SCP | OpenSSH; Ed25519 recomendado |
| Herramientas de administración remota | Herramientas de administración remota | PuTTY, FileZilla, cPanel, RDP, VNC |
| Casos reales LATAM | Casos reales en LATAM | Cali→DigitalOcean; agencia Bogotá+cPanel |
| Errores comunes | Errores comunes | Referencia rápida; tono preventivo |
| Prácticas guiadas | Prácticas guiadas | Imperativo amable; autoevaluación formativa |
| Reto integrador | Reto integrador: plan de administración remota para una agencia | Escenario Medellín: hosting compartido + VPS |
| Comprueba tu comprensión | Comprueba tu comprensión | Quiz sumativo breve al final del bloque |
| Cierre | Cierre de la lección | Puente a `clase-04-virtualizacion-diagnostico` |

**Reglas transversales para headings:**

- H2: pregunta o tema nominal; sin emojis.
- H3: concreto y escaneable; nombrar protocolo o puerto solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Administración remota = canal operativo 24/7

- **Título:** `Administración remota = canal operativo 24/7`
- **Tono:** operativo; vincula hosting remoto con continuidad de negocio.
- **Copy refinado:** `Sin SSH, SFTP o paneles web no podrías desplegar código, revisar logs ni responder incidentes fuera del horario de oficina. Elegir protocolo y herramienta correctos es tan importante como elegir el hosting.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 2. FTP plano: no en producción

- **Título:** `FTP plano: no en producción`
- **Tono:** preventivo; riesgo concreto en Wi‑Fi público LATAM.
- **Copy refinado:** `FTP sin TLS envía credenciales y contenido sin cifrar. En Wi‑Fi público, cyber o ISP compartido un atacante puede capturar usuario y contraseña. Usa SFTP (puerto 22) o FTPS en cualquier entorno real.`
- **Variante Clay:** `callout-warning`.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| `CompareTable` | IaaS/PaaS/SaaS | Introducir con: «Elige el modelo según control, velocidad de despliegue y carga operativa» |
| `MermaidDiagram` | Elección modelo nube | Párrafo puente: «Sigue el árbol de decisión desde control del SO hasta software listo» |
| `MermaidDiagram` | Secuencia SSH remoto | Subtítulo implícito: dev en Cali → VPS cloud; comandos `put`, `chmod`, `systemctl` |
| `MermaidDiagram` | FTP activo / pasivo | Dos diagramas; H3 «Modo activo» y «Modo pasivo»; enfatizar quién inicia canal de datos |
| `CompareTable` | FTP / SFTP / FTPS | Headers: Criterio · FTP plano · SFTP · FTPS |
| `StepReveal` | De clave local a shell remoto | 5 pasos: keygen → authorized_keys → ssh → shell → SFTP FileZilla |
| `CodeChallenge` | Flag `-i` en ssh | Éxito: «Correcto. `-i` indica el archivo de clave privada en el cliente.» |
| `StepReveal` | Caso agencia cPanel vs SSH | 4 pasos: diseñador WordPress → dev SFTP → VPS staging → incidente FTP evitado |
| `PracticeExercise` | SFTP en café Lima | Éxito: cifrado SSH; credenciales no en texto claro |
| `PracticeExercise` | PaaS para MVP Node | Éxito: PaaS sin parchear Linux; git push vs provisionar VM |
| `PracticeExercise` | Orden flujo SSH | Éxito: secuencia c → e → a → b → d didáctica |
| `PracticeExercise` | Comando scp | Éxito: `scp -i ~/.ssh/deploy_key index.html user@192.0.2.50:/var/www/html/` |
| `PracticeExercise` | Reto agencia Medellín | Éxito: «Excelente. Plan con SFTP/SSH en VPS, cPanel+MFA en hosting, firewall documentado y criterio PaaS justificado.» |
| `Quiz` | Feedback general | Una oración; citar puerto, cifrado o modelo cloud cuando aplique |
| Cierre | Ideas clave | Viñetas: NIST · IaaS/PaaS/SaaS · cliente inicia · SFTP no FTP plano · claves SSH · herramienta según perfil |
| Cierre | Siguiente paso | `Siguiente lección: virtualización, contenedores y diagnóstico de servicios.` |

### Prosa de apertura y cierre (ajustes de voz)

**Introducción (primer párrafo):**

> La mayoría de equipos en LATAM no están físicamente junto al servidor: el hosting puede estar en Miami, São Paulo o Bogotá vía partners, mientras el desarrollador opera desde Cali, Lima o Ciudad de México. Esta lección conecta la computación en la nube con los protocolos y herramientas que hacen posible esa operación remota de forma segura.

**Cierre (párrafo intro):**

> En esta lección vinculaste la nube (NIST, IaaS/PaaS/SaaS) con la operación remota segura: modelo cliente-servidor, SSH con claves, SFTP en lugar de FTP plano y elección de herramienta según perfil (diseñador en cPanel vs dev en terminal).

### Notas EN (fase i18n)

- Título EN sugerido: `Remote administration: cloud, SSH, and SFTP`
- Mantener sin traducir: SSH, SFTP, FTPS, FTP, IaaS, PaaS, SaaS, NIST, VPC, OpenSSH, cPanel, RDP, VNC, PuTTY, FileZilla, `authorized_keys`, Ed25519.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- «Computación en la nube» → `Cloud computing`; «hardening» → `hardening` (término técnico aceptado).

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/http-headers/lesson-spec.md` (§ Clay UI), implementación existente `src/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

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
- Tablas NIST y herramientas (draft L80–88, L486–495): prose `<table>` en bloques densos; `CompareTable` solo para comparativas IaaS y FTP/SFTP.
- En `FtpSection`: diagrama activo → párrafo modo pasivo → diagrama pasivo; no apilar dos Mermaid sin texto intermedio.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Computación en la nube y principios NIST`, `SSH: claves y hardening` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Modo activo vs pasivo`, `Hardening básico en servidor` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («ssh-keygen», «Shell remoto») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Principios NIST, flujo cliente-servidor |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Introducción | Introducción | `ObjetivosSection` incluye intro + callout |
| `### 1. Computación en la nube` + `### 2. IaaS…` | Computación en la nube y principios NIST | `NubeSection` unifica bloques 1–2 |
| `### 3. Modelo cliente-servidor…` | Modelo cliente-servidor en administración remota | `ModeloClienteServidorRemotoSection` |
| `### 4. FTP` | FTP: modo activo y pasivo | `FtpSection` |
| `### 5. SFTP` | SFTP: transferencia cifrada sobre SSH | `SftpSection` |
| `### 6. SSH` | SSH: claves, hardening y SCP | `SshSection` |
| `### 7. Administración remota…` | Herramientas de administración remota | `HerramientasAdminRemotaSection` |
| Casos reales LATAM | Casos reales en LATAM | `CasosRealesLatamSection` |
| Errores comunes | Errores comunes | Prose dentro de `SshSection` o sección auxiliar; viñetas sin clay |
| Prácticas guiadas | Prácticas guiadas | Bloque antes del reto o dentro de `CompruebaTuComprensionSection` |
| Reto integrador | Reto integrador: plan de administración remota | Subtítulo tras dos puntos |
| Comprueba tu comprensión | Comprueba tu comprensión | `Quiz` al final |
| Cierre | Cierre de la lección | Referencias NIST + OpenSSH |

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista objetivos + prerrequisitos + intro LATAM + `Callout` |
| 2 | `NubeSection` | Computación en la nube y principios NIST | stepper | prose NIST, tabla, IaaS/PaaS/SaaS, `CompareTable`, `MermaidDiagram` |
| 3 | `ModeloClienteServidorRemotoSection` | Modelo cliente-servidor en administración remota | — | prose, diagrama ASCII, `MermaidDiagram` secuencia |
| 4 | `FtpSection` | FTP: modo activo y pasivo | — | prose, `Callout`, 2× `MermaidDiagram` |
| 5 | `SftpSection` | SFTP: transferencia cifrada sobre SSH | — | prose, `CodeBlock` FileZilla, `CompareTable` |
| 6 | `SshSection` | SSH: claves, hardening y SCP | stepper | prose, `CodeBlock` ×4, `StepReveal`, `CodeChallenge` |
| 7 | `HerramientasAdminRemotaSection` | Herramientas de administración remota | — | tabla herramientas, `StepReveal` agencia |
| 8 | `CasosRealesLatamSection` | Casos reales en LATAM | card | 2 casos prose numerados |
| 9 | `RetoIntegradorSection` | Reto integrador: plan de administración remota | card | Enunciado + `PracticeExercise` |
| 10 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×4 + `Quiz` |
| 11 | `CierreSection` | Cierre de la lección | card | Ideas clave + referencias + enlace `clase-04` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L34–38) | Sin clay |
| Prerrequisitos | prose `<ul>` | clase-01, clase-02, POSW (draft L42–44) | Sin clay |
| Intro LATAM | prose | párrafo hosting remoto (draft L52) | Sin clay |
| `admin-remota-canal-24-7` | `Callout` | title: «Administración remota = canal operativo 24/7» (draft L54–57) | **callout-info**; borde secondary |

#### `NubeSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Definición / NIST | prose + `<table>` | principios NIST (draft L68–90) | Tabla prose; sin clay |
| IaaS/PaaS/SaaS | prose | tipos y cuándo elegir (draft L113–156) | Sin clay |
| `iaas-paas-saas` | `CompareTable` | 5 filas criterio/ejemplos (draft L127–137) | `ClayCard` `my-8`; thead secondary |
| `eleccion-modelo-nube` | `MermaidDiagram` | flowchart decisión IaaS/PaaS/SaaS (draft L158–161) | `my-6` |
| Tabla escenarios LATAM | prose `<table>` | agencia Bogotá, startup Node, banco RHEL (draft L147–151) | Sin clay |

#### `ModeloClienteServidorRemotoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Flujo 4 pasos | prose | daemon escucha, cliente conecta (draft L177–182) | Sin clay |
| Diagrama ASCII | `CodeBlock` o `<pre>` | árbol sshd/vsftpd/cPanel (draft L186–194) | Fondo oscuro `my-6` |
| Ejemplo Cali→DO | prose | `ssh -i` ejemplo (draft L198) | Sin clay |
| `cliente-servidor-remoto-sequence` | `MermaidDiagram` | sequenceDiagram SSH+SFTP (draft L205–208) | `my-6` |

#### `FtpSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Definición FTP | prose | puertos 21/20 (draft L218–222) | Sin clay |
| `ftp-plano-no-produccion` | `Callout` | title: «FTP plano: no en producción» (draft L224–228) | **callout-warning**; borde accent |
| Modo activo/pasivo | prose | 4 pasos cada modo (draft L231–244) | Sin clay |
| Tabla canales | prose `<table>` | control/datos (draft L248–252) | Sin clay |
| `ftp-activo-sequence` | `MermaidDiagram` | sequence activo puerto 20 (draft L271–274) | `my-6` |
| `ftp-pasivo-sequence` | `MermaidDiagram` | sequence pasivo puerto alto (draft L276–279) | `my-6` |

#### `SftpSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Definición SFTP vs FTPS | prose | subsistema SSH puerto 22 (draft L287–300) | Sin clay |
| Config FileZilla | `CodeBlock` | text site manager (draft L320–328) | `my-6` |
| `ftp-sftp-ftps` | `CompareTable` | 4 filas criterio (draft L337–346) | `ClayCard` `my-8`; thead secondary |

#### `SshSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Componentes clave | prose + `<table>` | clave privada/pública, sshd (draft L370–377) | Sin clay |
| Generación claves | `CodeBlock` | bash ssh-keygen, ssh-copy-id (draft L393–404) | `my-4` |
| Hardening | `CodeBlock` | sshd_config fragmentos (draft L408–417) | `my-4` |
| SCP | `CodeBlock` | scp dist/ y logs (draft L421–428) | `my-4` |
| Verificación puertos | `CodeBlock` | ss -tlnp, ssh -v (draft L433–439) | `my-4` |
| `ssh-clave-a-shell` | `StepReveal` | 5 pasos keygen→SFTP (draft L448–458) | **stepper** `my-8` |
| `ssh-flag-i` | `CodeChallenge` | blank `-i` (draft L462–468) | `ClayCard` `my-8` |
| Errores comunes | prose `<ul>` | 7 errores (draft L560–566) | Sin clay; opcional H3 |

#### `HerramientasAdminRemotaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Tabla herramientas | prose `<table>` | PuTTY, FileZilla, cPanel… (draft L486–495) | Sin clay |
| Flujo agencia | prose | 3 escenarios (draft L497–501) | Sin clay |
| `agencia-cpanel-vs-ssh` | `StepReveal` | 4 pasos diseñador→incidente FTP (draft L518–527) | **stepper** `my-8` |

#### `CasosRealesLatamSection`

| Elemento | Clay |
|----------|------|
| Caso 1 Carlos Cali→DO (draft L535–544) | prose numerado; H2 en **card** semántico |
| Caso 2 agencia Bogotá (draft L546–554) | prose numerado |

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas agencia Medellín (draft L617–629) | H2 primary |
| `reto-agencia-medellin` | `PracticeExercise` | hints entorno A/B, ufw, diseñador, Heroku (draft L631–641) | `ClayCard` accent; `rows={8}`; `my-8` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `sftp-wifi-publica` | `PracticeExercise` | SFTP vs FTP café Lima (draft L572–580) | accent border |
| `iaas-vs-paas-mvp` | `PracticeExercise` | PaaS Node.js MVP (draft L582–590) | accent border |
| `orden-flujo-ssh` | `PracticeExercise` | secuencia c,e,a,b,d (draft L592–600) | accent border |
| `scp-index-html` | `PracticeExercise` | comando scp con -i (draft L602–609) | accent border |
| `comprueba-comprension-quiz` | `Quiz` | 5 preguntas FTP/SSH/IaaS/cPanel (draft L661–720) | `ClayCard` `my-8` |

Apilar los cuatro `PracticeExercise` con **`my-8` cada uno**; quiz al final del bloque.

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Párrafo cierre + puente clase-04 (draft L649) | prose |
| Referencias NIST SP 800-145, OpenSSH (draft L651–655) | prose enlaces |
| Ideas clave (derivar del draft) | prose `<ul>` 5 viñetas | Sin clay extra |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Administración remota 24/7 | `callout-info` | `--color-secondary` | Canal operativo; continuidad |
| FTP plano no producción | `callout-warning` | `--color-accent` | Riesgo credenciales texto claro |

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

En `NubeSection`: CompareTable → Mermaid decisión. En `FtpSection`: callout warning → diagrama activo → prose pasivo → diagrama pasivo. En `SshSection`: stepreveal → code challenge; no anidar stepreveal dentro de otro ClayCard padre.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos de aprendizaje | 1 | 1 callout info |
| Computación en la nube | 2 | tabla NIST prose + compare + diagrama |
| Modelo cliente-servidor remoto | 1 | 1 sequence diagram |
| FTP | 2 | warning + 2 sequences |
| SFTP | 2 | compare + code block |
| SSH | 2 | 4 code blocks + stepper + challenge |
| Herramientas admin remota | 2 | stepper agencia |
| Casos reales LATAM | 1 | card semántico |
| Reto integrador | 2 | practice abierta |
| Comprueba tu comprensión | 2 | 4 practice + quiz |
| Cierre | 0–1 | prose + referencias |

### Checklist implementación (lesson-developer)

- [ ] Refactorizar lección según `tsx_sections` del draft (separar `NubeSection`, `FtpSection`, `SftpSection`, etc.)
- [ ] Poblar `ObjetivosSection`: objetivos, prerrequisitos, intro, callout 24/7
- [ ] Poblar `NubeSection`: tabla NIST, `CompareTable` IaaS, mermaid decisión
- [ ] Poblar `ModeloClienteServidorRemotoSection`: diagrama ASCII + mermaid secuencia
- [ ] Poblar `FtpSection`: callout warning, 2 mermaid activo/pasivo
- [ ] Poblar `SftpSection`: `CodeBlock` FileZilla, `CompareTable` FTP/SFTP/FTPS
- [ ] Poblar `SshSection`: 4 `CodeBlock`, `StepReveal`, `CodeChallenge`, errores comunes
- [ ] Poblar `HerramientasAdminRemotaSection`: tabla + `StepReveal` agencia
- [ ] Crear `CasosRealesLatamSection` con 2 casos
- [ ] Crear `RetoIntegradorSection` + `CompruebaTuComprensionSection` (4 practice + quiz)
- [ ] Actualizar `CierreSection` con puente a clase-04
- [ ] Registrar quiz en `src/lib/teaching-quizzes/configuracion-servicios-web.ts`
- [ ] H2 alineados con SEO de la tabla inferior

## SEO

Contribución de **seo-redirects-expert**. Clase 3 del track Configuración de servicios web; enlaza hosting/HTTPS (`clase-02-hosting-correo-https`) con virtualización y diagnóstico (`clase-04-virtualizacion-diagnostico`).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Administración remota: SSH, SFTP y nube \| CSW` | 48 |
| `seoDescription` | `Clase 3 CSW: principios NIST, IaaS/PaaS/SaaS, modelo cliente-servidor remoto, FTP vs SFTP, SSH con claves, FileZilla, cPanel y hardening básico.` | 154 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Remote admin: SSH, SFTP & cloud \| CSW` | 38 |
| `seoDescription` | `CSW Lesson 3: NIST cloud principles, IaaS/PaaS/SaaS, remote client-server model, FTP vs SFTP, SSH keys, FileZilla, cPanel, and basic hardening.` | 130 |

### Keywords (track CSW)

**Primarias:** administración remota, SSH, SFTP, computación en la nube, IaaS PaaS SaaS, configuración servicios web.

**Secundarias:** FTP, FTPS, FileZilla, PuTTY, cPanel, OpenSSH, principios NIST, hardening SSH, modelo cliente-servidor, RDP, VNC, DigitalOcean.

**Long-tail:** qué es IaaS PaaS SaaS diferencia, configurar SSH con clave pública, SFTP vs FTP producción, FileZilla SFTP puerto 22, administrar VPS remoto LATAM, por qué no usar FTP plano.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `clase-02-hosting-correo-https` | Clase 2: Hosting, correo corporativo y HTTPS |
| `next` | `clase-04-virtualizacion-diagnostico` | Clase 4: Virtualización y diagnóstico de servicios |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/configuracion-servicios-web/clase-03-administracion-remota/` |
| EN (fase i18n) | `/en/teaching/configuracion-servicios-web/clase-03-administracion-remota/` |
| Legacy | `/pages/teaching/configuracion-servicios-web/clase-03-administracion-remota.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/configuracion-servicios-web/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos de aprendizaje | Objetivos de aprendizaje | — |
| H2 | Computación en la nube | Computación en la nube y principios NIST | computación en la nube NIST |
| H2 | IaaS, PaaS y SaaS | IaaS, PaaS y SaaS: criterio de elección | IaaS PaaS SaaS |
| H2 | Modelo cliente-servidor remoto | Modelo cliente-servidor en administración remota | modelo cliente-servidor |
| H2 | FTP | FTP: modo activo y pasivo | FTP puerto 21 |
| H2 | SFTP | SFTP: transferencia cifrada sobre SSH | SFTP SSH |
| H2 | SSH | SSH: claves, hardening y SCP | SSH clave pública |
| H2 | Herramientas administración remota | Herramientas de administración remota | FileZilla cPanel PuTTY |
| H2 | Casos reales LATAM | Casos reales en LATAM | administración remota LATAM |
| H2 | Reto integrador | Reto integrador: plan de administración remota | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Administración remota: SSH, SFTP y nube \| CSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «cliente-servidor remoto» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama secuencia SSH/SFTP o tabla IaaS vs PaaS vs SaaS |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-03-administracion-remota`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Remote administration: cloud, SSH, and SFTP`.
- **Términos sin traducir:** SSH, SFTP, FTPS, FTP, IaaS, PaaS, SaaS, NIST, OpenSSH, cPanel, RDP, VNC, PuTTY, FileZilla.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
