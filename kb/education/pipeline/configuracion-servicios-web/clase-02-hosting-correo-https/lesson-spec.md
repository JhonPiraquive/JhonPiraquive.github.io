---
track: configuracion-servicios-web
slug: clase-02-hosting-correo-https
title: "Clase 2: Hosting, correo corporativo y HTTPS"
order: 3
prev: clase-01-fundamentos-web
next: clase-03-administracion-remota
brand_tone: academico-operativo-latam
prerequisites:
  - clase-01-fundamentos-web
related:
  - clase-03-administracion-remota
  - posw/protocolos-seguridad
  - posw/modelo-cliente-servidor
source_brief: kb/education/pipeline/configuracion-servicios-web/clase-02-hosting-correo-https/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - HostingSection
  - HttpHttpsSection
  - SslTlsSection
  - ProtocolosHttpsSection
  - CorreoCorporativoSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizSection
interactive_blocks:
  - type: callout
    id: de-dominio-a-sitio-publicado
  - type: step-reveal
    id: despliegue-en-hosting
  - type: mermaid
    id: eleccion-tipo-hosting
  - type: compare-table
    id: comparativa-tipos-hosting
  - type: callout
    id: caso-tienda-medellin-cloudflare
  - type: mermaid
    id: pila-http-vs-https
  - type: callout
    id: caso-migracion-lima-no-seguro
  - type: mermaid
    id: handshake-tls-sequence
  - type: step-reveal
    id: certificado-lets-encrypt
  - type: mermaid
    id: flujo-correo-mx-imap
  - type: step-reveal
    id: configuracion-correo-corporativo
  - type: callout
    id: caso-ong-bogota-mx-duplicados
  - type: callout
    id: registro-a-no-es-mx
  - type: practice-exercise
    id: comprension-hosting-compartido-vps
  - type: practice-exercise
    id: comprension-causas-no-seguro
  - type: code-challenge
    id: registros-dns-correo
  - type: practice-exercise
    id: comprension-mx-duplicados
  - type: practice-exercise
    id: comprension-orden-correo-workspace
  - type: code-challenge
    id: comando-certbot
  - type: practice-exercise
    id: comprension-ssl-vs-tls
  - type: practice-exercise
    id: reto-artesanias-del-caribe
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (guía operativa clara) con matiz **Cuidador** (prevención de errores frecuentes en PYMEs). Marca: **Jhon Alejandro Piraquive** — material docente del curso **Configuración de servicios web** (sesión presencial ~2 h).

### Tono (`brand_tone`)

- **Registro:** académico-operativo en español; conecta DNS (clase 1) con despliegue real, TLS y correo corporativo.
- **Persona:** segunda persona (*tú*) en ejercicios y reto; impersonal en definiciones (*el estudiante podrá…*, *el servidor web escucha…*).
- **Voz:** profesional, práctica, confiable; prioriza decisiones de hosting y migración segura antes de herramientas avanzadas.
- **Evitar:** hype de nube sin costos, jerga de venta de hosting, simplificar HTTPS como «solo instalar un candado», omitir riesgos de MX duplicados.
- **Preferir:** verbos de acción concretos (*definir*, *comparar*, *elegir*, *configurar*, *diferenciar*, *renovar*, *diagnosticar*); ejemplos LATAM (Bogotá, Medellín, Cartagena, Lima, CDMX).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Hosting, correo MX y HTTPS/TLS \| CSW` | 38 caracteres |
| `seo_description` | `Tipos de hosting, HTTP/HTTPS con TLS y Let's Encrypt, correo corporativo con MX, SPF y DKIM. Clase 2 del curso Configuración de servicios web.` | 155 caracteres |
| `seo_title` (EN, fase i18n) | `Web hosting, corporate email & HTTPS/TLS \| CSW` | Voz directa |
| `seo_description` (EN) | `CSW Lesson 2: shared/VPS/cloud hosting, HTTP vs HTTPS, TLS certificates with Let's Encrypt, and corporate email (MX, SPF, DKIM, IMAP/SMTP).` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Clase 2: Hosting, correo corporativo y HTTPS`

- Mantiene numeración de clase del track CSW.
- Agrupa las tres competencias medibles: alojamiento, correo `@dominio`, cifrado en producción.
- «HTTPS» en copy visible; «TLS» y «Let's Encrypt» en cuerpo y meta.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos de la clase | Objetivos de la clase | Puente desde DNS; hilo dominio → sitio → TLS → correo |
| ↳ Callout apertura | De dominio a sitio publicado | Dominio sin hosting = nombre; hosting sin DNS = invisible |
| Hosting: alojamiento web | Hosting: alojamiento web | Qué es, despliegue, componentes, señales buen/mal uso |
| ↳ Tipos de hosting | Tipos de hosting: compartido, VPS, dedicado y nube | CompareTable + flowchart de decisión |
| HTTP: protocolo de aplicación | HTTP: protocolo de aplicación (puerto 80) | Texto plano; diagnóstico con `curl` |
| HTTPS: HTTP sobre TLS | HTTPS: HTTP sobre TLS (puerto 443) | Misma semántica HTTP; candado y producción |
| SSL vs TLS | SSL vs TLS: certificados y versiones | «Certificado SSL» coloquial → TLS 1.2+ real |
| Instalación HTTPS | Instalación HTTPS: certbot, redirect y renovación | Operaciones Let's Encrypt; cron `renew` |
| Correo corporativo | Correo corporativo: MX, SPF, DKIM e IMAP/SMTP | Migración sin romper entrega |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Reto integrador | Reto integrador: presencia digital de artesaniasdelcaribe.co | PYME Cartagena; hosting + correo + HTTPS |
| Cierre | Cierre de la lección | Viñetas + puente a `clase-03-administracion-remota` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve (5 preguntas) |

**Reglas transversales para headings:**

- H2: tema nominal o pregunta; sin emojis.
- H3: concreto y escaneable; nombrar protocolo, registro DNS o tipo de hosting solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. De dominio a sitio publicado

- **Título:** `De dominio a sitio publicado`
- **Tono:** conector entre clases; refuerza dependencia DNS ↔ hosting.
- **Copy refinado:** `Un dominio sin hosting es solo un nombre; un hosting sin DNS correcto es un servidor invisible. Esta clase une ambas piezas y añade TLS y correo corporativo.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 2. Caso real — tienda Medellín + Cloudflare

- **Título:** `Caso real: tienda Medellín + Cloudflare`
- **Tono:** optimización sin sobre-ingeniería; CDN antes de VPS.
- **Copy refinado:** `E-commerce de ropa usa hosting compartido en datacenter Bogotá. Campaña en Instagram satura ancho de banda con imágenes pesadas. Activan Cloudflare (plan free): CDN, compresión Brotli, SSL full strict. Latencia percibida baja 60% sin migrar a VPS aún.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 3. Caso real — migración Lima «No seguro»

- **Título:** `Caso real: migración Lima — «No seguro»`
- **Tono:** incidente post-migración; síntoma → causa → resolución.
- **Copy refinado:** `Consultora migra WordPress a nuevo VPS. Sitio carga por HTTP; clientes reportan «No seguro» y formulario no envía (mixed content + cert autofirmado). Resolución: certbot --nginx, URLs en BD a HTTPS, redirect 80→443.`
- **Variante Clay:** `callout-warning`; borde accent.

#### 4. Caso real — ONG Bogotá MX duplicados

- **Título:** `Caso real: ONG Bogotá — MX duplicados`
- **Tono:** error frecuente PYME; prevención explícita.
- **Copy refinado:** `fundacionejemplo.org.co configuró MX de Zoho pero dejó MX del hosting con prioridad 10. Mitad del correo a info@ nunca llegó dos semanas. Resolución: eliminar MX viejos, un solo par Zoho, SPF include:zoho.com, DKIM del panel.`
- **Variante Clay:** `callout-warning`; borde accent.

#### 5. Registro A ≠ MX

- **Título:** `Registro A ≠ MX`
- **Tono:** aclaratorio; sitio y correo en proveedores distintos es válido.
- **Copy refinado:** `El sitio web puede estar en una IP (registro A) y el correo en otro proveedor (MX distinto). Es correcto y habitual; hay que configurar cada registro por separado.`
- **Variante Clay:** `callout-info`; borde secondary.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| StepReveal | Despliegue en hosting | 5 pasos: contratar → DNS → subir → BD → HTTPS |
| CompareTable | Tipos de hosting | Filas: costo, control, escala, ideal para |
| StepReveal | Certificado Let's Encrypt | Validación → instalación → redirect → renovación cron |
| StepReveal | Configuración correo corporativo | Proveedor → TXT → MX → SPF/DKIM → buzones → IMAP/SMTP |
| PracticeExercise | Éxito (compartido vs VPS) | `Correcto. Compartido cubre MVPs y bajo tráfico; VPS cuando el control, el stack o el tráfico superan los límites del plan compartido.` |
| PracticeExercise | Éxito (causas «No seguro») | `Correcto. Causas típicas: cert no instalado o vencido, sin redirect 80→443, mixed content, cert autofirmado o cadena incompleta.` |
| PracticeExercise | Éxito (MX duplicados) | `Correcto. El correo entrante se distribuye según prioridad MX de forma impredecible; parte se pierde o llega al buzón viejo.` |
| PracticeExercise | Éxito (SSL vs TLS) | `Correcto. «SSL» es lenguaje coloquial heredado; técnicamente HTTPS usa TLS 1.2/1.3. SSL 2.0/3.0 está prohibido por vulnerabilidades.` |
| PracticeExercise | Éxito (reto Cartagena) | `Revisa tu propuesta: hosting acorde al tráfico, MX únicos, SPF/DKIM y plan TLS con renovación.` |
| Quiz | Feedback general | Una oración; citar MX, hosting, TLS o redirect cuando aplique |
| Cierre | Ideas clave | Viñetas: hosting 24/7 · tipos según escala · HTTP/HTTPS · TLS 1.2+ · MX/SPF/DKIM · errores MX/cert/FTP |
| Cierre | Siguiente paso | `Siguiente clase: administración remota — SSH, SFTP y paneles de nube.` |

### Notas EN (fase i18n)

- Título EN sugerido: `Lesson 2: Web hosting, corporate email and HTTPS`
- Mantener sin traducir: HTTP, HTTPS, TLS, SSL, DNS, MX, SPF, DKIM, IMAP, SMTP, Let's Encrypt, certbot, VPS, IaaS, PaaS, CDN, Nginx, Apache, SFTP, SSH.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Mini-quiz» → `Mini quiz`.

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/protocolos-seguridad/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

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

**Espaciado (convención CSW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tablas de componentes hosting y señales buen/mal uso: prose `<table>`; sin clay extra.
- Dos bloques densos en `HostingSection` (StepReveal + CompareTable + Mermaid): intercalar prose entre diagramas.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Hosting: alojamiento web`, `Correo corporativo: MX, SPF, DKIM e IMAP/SMTP` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Qué es`, `Tipos / Variantes`, `Flujo de correo entrante` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Contratar plan», «Configurar MX») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Hosting, TLS, registros DNS |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos de la clase | Objetivos de la clase | `ObjetivosSection` |
| `### 1) Hosting` + `### 2) Tipos` | Hosting: alojamiento web | `HostingSection` (bloques H3 internos) |
| ↳ Tipos | Tipos de hosting: compartido, VPS, dedicado y nube | H3 dentro de `HostingSection` |
| `### 3) HTTP` + `### 4) HTTPS` | HTTP y HTTPS en el despliegue web | `HttpHttpsSection` |
| `### 5) SSL y TLS` | SSL vs TLS: certificados y versiones | `SslTlsSection` |
| `### 6) Instalación HTTPS` | Instalación HTTPS: certbot, redirect y renovación | `ProtocolosHttpsSection` |
| `### 7) Correo corporativo` | Correo corporativo: MX, SPF, DKIM e IMAP/SMTP | `CorreoCorporativoSection` |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: presencia digital de artesaniasdelcaribe.co | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `HostingSection`:** Qué es, Para qué sirve, Cómo funciona, Estructura / Composición, Ventajas y desventajas, Ejemplo concreto, Señales de buen y mal uso, Tipos de hosting, Optimización en hosting.

**H3 dentro de `HttpHttpsSection`:** HTTP — Qué es / Cómo funciona / Ejemplo `curl`; HTTPS — Relación con HTTP / Pila HTTP vs HTTPS / Señales.

**H3 dentro de `SslTlsSection`:** Diferencias SSL vs TLS, Handshake TLS 1.3, Estructura del certificado, Validación Let's Encrypt.

**H3 dentro de `ProtocolosHttpsSection`:** Pasos operativos, Nginx SSL + redirect, Apache `.htaccess`, Señales buen/mal uso.

**H3 dentro de `CorreoCorporativoSection`:** Flujo entrante/saliente, MX, SPF, DKIM, IMAP/SMTP, Proveedores, Migración a Zoho, Diagnóstico `dig`.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de la clase | — (prose) | 6 objetivos + prerrequisitos + `Callout` |
| 2 | `HostingSection` | Hosting: alojamiento web | stepper | prose, tablas, `StepReveal`, `MermaidDiagram`, `CompareTable`, `Callout`, `CodeBlock` |
| 3 | `HttpHttpsSection` | HTTP y HTTPS en el despliegue web | — | prose, tablas, `CodeBlock` ×2, `MermaidDiagram`, `Callout` |
| 4 | `SslTlsSection` | SSL vs TLS: certificados y versiones | — | prose, tablas, `MermaidDiagram`, `CodeBlock` |
| 5 | `ProtocolosHttpsSection` | Instalación HTTPS: certbot, redirect y renovación | stepper | `StepReveal`, `CodeBlock` nginx/apache |
| 6 | `CorreoCorporativoSection` | Correo corporativo: MX, SPF, DKIM e IMAP/SMTP | stepper | prose, `CodeBlock` dns, `MermaidDiagram`, `StepReveal`, `Callout` ×2 |
| 7 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×5, `CodeChallenge` ×2 |
| 8 | `RetoIntegradorSection` | Reto integrador: presencia digital de artesaniasdelcaribe.co | card | Enunciado prose + `PracticeExercise` |
| 9 | `CierreSection` | Cierre de la lección | card | Resumen viñetas + enlace `clase-03-administracion-remota` |
| 10 | `MiniquizSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos + prerrequisitos | prose `<ul>` | draft L31–42 | Sin clay |
| `de-dominio-a-sitio-publicado` | `Callout` | title: «De dominio a sitio publicado» (draft L52–56) | **callout-info** |

#### `HostingSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Qué es / composición | prose + tablas | draft L64–132 | Sin clay |
| `despliegue-en-hosting` | `StepReveal` | 5 pasos contratar→HTTPS (draft L82–107) | **stepper** `my-8` |
| Ejemplo SFTP | `CodeBlock` | bash sftp (draft L138–142) | `my-6` |
| `eleccion-tipo-hosting` | `MermaidDiagram` | flowchart decisión (draft L169–172) | `my-6` |
| Tipos compartido/VPS/… | prose H4 + tablas | draft L176–198 | Sin clay |
| `comparativa-tipos-hosting` | `CompareTable` | 4 filas tipos (draft L200–209) | `ClayCard` `my-8`; thead secondary |
| `caso-tienda-medellin-cloudflare` | `Callout` | CDN sin migrar VPS (draft L215–219) | **callout-info** |
| Optimización CDN | prose `<ul>` | draft L229–237 | Sin clay |

#### `HttpHttpsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| HTTP qué es / cómo | prose + tablas | draft L245–312 | Sin clay |
| Request/Response | `CodeBlock` | http ×2 (draft L264–282) | `my-4` cada uno |
| curl ejemplo | `CodeBlock` | bash (draft L300–304) | `my-6` |
| HTTPS relación | prose + tabla HTTP/HTTPS | draft L320–346 | Sin clay |
| `pila-http-vs-https` | `MermaidDiagram` | flowchart pilas (draft L348–351) | `my-6` |
| Redirect Nginx | `CodeBlock` | nginx 80→443 (draft L369–376) | `my-6` |
| `caso-migracion-lima-no-seguro` | `Callout` | mixed content + certbot (draft L396–400) | **callout-warning** |

#### `SslTlsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| SSL vs TLS | prose + tabla | draft L408–438 | Sin clay |
| `handshake-tls-sequence` | `MermaidDiagram` | sequenceDiagram (draft L421–424) | `my-6` |
| Validación LE | prose tabla HTTP-01/DNS-01 | draft L448–454 | Sin clay |
| certbot ejemplo | `CodeBlock` | bash certbot (draft L462–473) | `my-6` |

#### `ProtocolosHttpsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `certificado-lets-encrypt` | `StepReveal` | 4 pasos validación→cron (draft L499–520) | **stepper** `my-8` |
| Nginx SSL completo | `CodeBlock` | nginx 443+80 (draft L524–540) | `my-6` |
| Apache redirect | `CodeBlock` | .htaccess (draft L544–549) | `my-4` |

#### `CorreoCorporativoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Flujos entrante/saliente | prose | draft L573–585 | Sin clay |
| `flujo-correo-mx-imap` | `MermaidDiagram` | sequence MX→IMAP (draft L587–590) | `my-6` |
| MX / SPF / DKIM | `CodeBlock` | dns ×3 (draft L598–625) | `my-4` intercalados |
| IMAP/SMTP tabla + texto | prose + `CodeBlock` | draft L627–639 | Sin clay |
| Proveedores tabla | prose `<table>` | draft L641–648 | Sin clay |
| Migración Zoho + dig | prose + `CodeBlock` | draft L654–687 | `my-6` |
| `configuracion-correo-corporativo` | `StepReveal` | 5 pasos (draft L689–714) | **stepper** `my-8` |
| `caso-ong-bogota-mx-duplicados` | `Callout` | MX duplicados (draft L716–720) | **callout-warning** |
| `registro-a-no-es-mx` | `Callout` | A vs MX (draft L731–735) | **callout-info** |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-hosting-compartido-vps` | `PracticeExercise` | compartido vs VPS (draft L743–749) | accent border `my-8` |
| `comprension-causas-no-seguro` | `PracticeExercise` | TLS/HTTPS (draft L751–757) | accent border `my-8` |
| `registros-dns-correo` | `CodeChallenge` | MX + SPF (draft L759–767) | `ClayCard` `my-8` |
| `comprension-mx-duplicados` | `PracticeExercise` | MX viejos+nuevos (draft L769–775) | accent border `my-8` |
| `comprension-orden-correo-workspace` | `PracticeExercise` | orden Workspace (draft L777–783) | accent border `my-8` |
| `comando-certbot` | `CodeChallenge` | certbot --nginx (draft L785–793) | `ClayCard` `my-8` |
| `comprension-ssl-vs-tls` | `PracticeExercise` | SSL coloquial vs TLS (draft L795–801) | accent border `my-8` |

Apilar ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 6 entregables Cartagena (draft L809–822) | H2 primary |
| `reto-artesanias-del-caribe` | `PracticeExercise` | propuesta 5–8 líneas (draft L824–830) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Resumen 7 viñetas (draft L840–846) | prose `<ul>`; sin `ClayCard` extra |
| Siguiente clase | enlace `clase-03-administracion-remota` | Sin clay |

#### `MiniquizSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas MX/hosting/HTTP/SPF/LE (draft L852–896) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| De dominio a sitio publicado | `callout-info` | `--color-secondary` | Conector pedagógico inicio |
| Caso real: tienda Medellín + Cloudflare | `callout-info` | `--color-secondary` | Optimización pragmática |
| Caso real: migración Lima — «No seguro» | `callout-warning` | `--color-accent` | Incidente TLS post-migración |
| Caso real: ONG Bogotá — MX duplicados | `callout-warning` | `--color-accent` | Pérdida de correo entrante |
| Registro A ≠ MX | `callout-info` | `--color-secondary` | Aclaración DNS sitio vs correo |

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

En `HostingSection`: StepReveal → prose tipos → Mermaid → CompareTable → callout Cloudflare. En `CorreoCorporativoSection`: sequence → DNS blocks → StepReveal → dos callouts (warning + info). En `CompruebaTuComprensionSection`: alternar practice y code-challenge con `my-8`.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos de la clase | 1 | 1 callout info |
| Hosting | 2 | stepper + compare + 2 diagramas/callout |
| HTTP y HTTPS | 2 | mermaid pila + callout warning |
| SSL vs TLS | 1 | sequence + code |
| Instalación HTTPS | 2 | stepper + 2 code blocks |
| Correo corporativo | 2 | sequence + stepper + 2 callouts |
| Comprueba tu comprensión | 2 | 5 practice + 2 challenge |
| Reto integrador | 2 | 1 practice largo |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Dividir `HostingSection` actual: añadir `HttpHttpsSection` y `SslTlsSection` según draft
- [ ] Crear `RetoIntegradorSection` entre Comprueba y Cierre
- [ ] Poblar interactivos del draft en cada sección TSX
- [ ] H2 alineados con § Brand/SEO (sin duplicar primer párrafo)
- [ ] Registrar quiz en `src/lib/teaching-quizzes/configuracion-servicios-web.ts` (o track equivalente)
- [ ] Actualizar `Clase02HostingCorreoHttpsLesson.tsx` con orden de secciones del mapa
- [ ] Sincronizar `lesson-meta.ts` con meta SEO de § SEO

## SEO

Contribución de **seo-redirects-expert**. Clase 2 del track **Configuración de servicios web**; continúa desde DNS (`clase-01-fundamentos-web`) hacia administración remota (`clase-03-administracion-remota`).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Hosting, correo MX y HTTPS/TLS \| CSW` | 38 |
| `seoDescription` | `Tipos de hosting, HTTP/HTTPS con TLS y Let's Encrypt, correo corporativo con MX, SPF y DKIM. Clase 2 del curso Configuración de servicios web.` | 155 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Web hosting, corporate email & HTTPS/TLS \| CSW` | 47 |
| `seoDescription` | `CSW Lesson 2: shared/VPS/cloud hosting, HTTP vs HTTPS, TLS with Let's Encrypt, and corporate email (MX, SPF, DKIM, IMAP/SMTP).` | 118 |

### Keywords (track CSW)

**Primarias:** hosting web, HTTPS, TLS, correo corporativo, MX, SPF, DKIM, configuración servicios web.

**Secundarias:** hosting compartido, VPS, Let's Encrypt, certbot, IMAP, SMTP, HTTP puerto 80, SSL obsoleto, Cloudflare CDN, Zoho Mail, Google Workspace.

**Long-tail:** cómo elegir tipo de hosting, configurar correo corporativo MX SPF DKIM, instalar certificado Let's Encrypt certbot, diferencia HTTP HTTPS TLS, migrar correo sin perder emails.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `clase-01-fundamentos-web` | Clase 1: Fundamentos web — Navegadores, IP, dominios y DNS |
| `next` | `clase-03-administracion-remota` | Clase 3: Administración remota |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/configuracion-servicios-web/clase-02-hosting-correo-https/` |
| EN (fase i18n) | `/en/teaching/configuracion-servicios-web/clase-02-hosting-correo-https/` |
| Legacy | `/pages/teaching/configuracion-servicios-web/clase-02-hosting-correo-https.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/configuracion-servicios-web/` |

### Headings con keywords naturales

| Nivel | Copy publicado (draft) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos de la clase | Objetivos de la clase | — |
| H2 | Hosting: alojamiento web | Hosting web: alojamiento y despliegue 24/7 | hosting web |
| H2 | Tipos de hosting (H3 promovido) | Tipos de hosting: compartido, VPS, dedicado y nube | hosting compartido VPS |
| H2 | HTTP y HTTPS en el despliegue | HTTP y HTTPS: puertos 80 y 443 en producción | HTTP HTTPS |
| H2 | SSL vs TLS | SSL vs TLS: certificados Let's Encrypt | TLS Let's Encrypt |
| H2 | Instalación HTTPS | Instalación HTTPS: certbot y redirect 80→443 | certbot HTTPS |
| H2 | Correo corporativo | Correo corporativo: registros MX, SPF y DKIM | correo corporativo MX SPF DKIM |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: hosting, correo y HTTPS | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Hosting, correo MX y HTTPS/TLS \| CSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «Let's Encrypt» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama pila HTTP vs HTTPS o tabla tipos de hosting |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-02-hosting-correo-https`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Lesson 2: Web hosting, corporate email and HTTPS`.
- **Términos sin traducir:** HTTP, HTTPS, TLS, SSL, DNS, MX, SPF, DKIM, DMARC, IMAP, SMTP, Let's Encrypt, certbot, VPS, CDN, SFTP, SSH, Nginx, Apache.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Mini-quiz» → `Mini quiz`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
