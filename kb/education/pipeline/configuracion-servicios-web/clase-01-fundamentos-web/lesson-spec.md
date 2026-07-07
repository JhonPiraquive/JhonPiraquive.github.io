---
track: configuracion-servicios-web
slug: clase-01-fundamentos-web
title: "Fundamentos web: navegadores, IP, dominios y DNS"
order: 2
prev: index
next: clase-02-hosting-correo-https
brand_tone: academico-universitario
prerequisites:
  - posw/modelo-cliente-servidor
  - posw/servicios-web
related:
  - clase-02-hosting-correo-https
  - posw/protocolos-seguridad
  - posw/http-metodos-status
  - posw/herramientas-desarrollo
source_brief: kb/education/pipeline/configuracion-servicios-web/clase-01-fundamentos-web/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - NavegadoresWebSection
  - Ipv4Section
  - Ipv6Section
  - DnsSection
  - DominioSubdominioSection
  - ConfigurarDominioSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
interactive_blocks:
  - type: callout
    id: del-nombre-al-paquete
  - type: compare-table
    id: navegadores-motores
  - type: practice-exercise
    id: aislar-lentitud-navegador
  - type: image
    id: ipv4-composicion
  - type: practice-exercise
    id: ip-privada-vs-publica
  - type: compare-table
    id: ipv4-vs-ipv6
  - type: step-reveal
    id: resolucion-dns-paso-a-paso
  - type: mermaid
    id: flujo-dns-sequence
  - type: practice-exercise
    id: ordenar-pasos-dns
  - type: mermaid
    id: jerarquia-dominio-subdominios
  - type: callout
    id: caso-fintech-bogota
  - type: practice-exercise
    id: elegir-tld-co
  - type: compare-table
    id: tipos-registro-dns
  - type: callout
    id: caso-pyme-camaras-ip-fija
  - type: practice-exercise
    id: registros-cname-txt
  - type: practice-exercise
    id: comprension-ipv4-bits
  - type: practice-exercise
    id: comprension-mx-duplicados
  - type: practice-exercise
    id: reto-creativosvalle
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track **Configuración de servicios web**.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; conecta la capa de usuario (navegador) con la infraestructura de red (IP, dominio, DNS) que sostiene cada servicio web.
- **Persona:** segunda persona (*tú*) en ejercicios, comandos y reto integrador; impersonal en definiciones (*el estudiante podrá…*, *el resolver consulta…*).
- **Voz:** profesional, diagnóstica, confiable; prioriza evidencia (DevTools, `dig`, `ipconfig`) antes de culpar al servidor.
- **Evitar:** tratar el navegador como caja negra, confundir IP privada con pública, prometer propagación DNS instantánea, tono informal de blog o hype de registradores.
- **Preferir:** verbos de acción concretos (*comparar*, *explicar*, *consultar*, *describir*, *configurar*, *delegar*, *verificar*, *diagnosticar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `Fundamentos web: navegadores, IP y DNS \| Servicios web` | 54 caracteres |
| `seo_description` | `Compara navegadores y DevTools, explica IPv4 e IPv6, estructura dominios y flujo DNS con registros A, AAAA, CNAME y MX. Clase 1 del curso Configuración de servicios web.` | 154 caracteres |
| `seo_title` (EN, fase i18n) | `Web fundamentals: browsers, IP & DNS \| Web services` | Direct, senior engineer voice |
| `seo_description` (EN) | `Lesson 1: browser engines, IPv4/IPv6, domain structure, DNS resolution, and A/AAAA/CNAME/MX records. Configuración de servicios web track.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Fundamentos web: navegadores, IP, dominios y DNS`

- Sustituye guión largo del brief por subtítulo académico con dos puntos.
- Prioriza el arco didáctico: cliente (navegador) → direccionamiento (IP) → nombres (dominio/DNS).
- Mantiene minúsculas tras dos puntos (convención del sitio docente).

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable; puente navegador → red |
| Navegadores web | Navegadores web: motores y DevTools | Blink, Gecko, WebKit; Red, Consola, Almacenamiento |
| ↳ Motores y variantes | Motores de renderizado y variantes | CompareTable; no reducir a «solo Chrome» |
| Dirección IP (IPv4) | Dirección IP: composición IPv4 | Octetos, RFC 1918, IP pública vs privada |
| ↳ Consultar IP | Consultar IP local y pública | `ipconfig`, `ip addr`, `curl ifconfig.me` |
| IPv6 | IPv6: direcciones de 128 bits | Dual stack; registro AAAA |
| DNS | DNS: resolución de nombres | 13 raíces, resolver recursivo, delegación jerárquica |
| ↳ Flujo paso a paso | Flujo DNS: de la URL a la IP | StepReveal + diagrama de secuencia |
| Dominio | Dominio: SLD, TLD y registro | NIC Colombia, `.co` LATAM |
| Subdominio | Subdominio: separar servicios | `www`, `api`, `staging`; FQDN |
| Configurar dominio | Configurar dominio: NS y registros DNS | A, AAAA, CNAME, MX, TXT, NS, SOA |
| Errores comunes | Errores frecuentes | Prose; caché navegador, MX duplicados, CNAME en apex |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Reto integrador | Reto integrador: agencia creativosvalle.co en Cali | Caso NIC Colombia + Google Workspace |
| Cierre | Cierre de la lección | Puente a `clase-02-hosting-correo-https` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: tema nominal o pregunta; sin emojis.
- H3: concreto y escaneable; nombrar protocolo, registro o herramienta solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Del nombre al paquete

- **Título:** `Del nombre al paquete`
- **Tono:** síntesis conceptual; une dominio legible con enrutamiento por IP.
- **Copy refinado:** `El usuario escribe un dominio legible; la red enruta por IP. El DNS es el puente. El navegador es la ventana de diagnóstico más accesible que tienes.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 2. Caso real — fintech en Bogotá

- **Título:** `Caso real: fintech en Bogotá`
- **Tono:** despliegue LATAM; registrador → NS → registros → verificación TLS.
- **Copy refinado:** `Una fintech registra pagosrapidos.co en NIC Colombia, delega NS a Cloudflare, publica A al VPS en AWS, MX a Google Workspace y TXT SPF. Tras 2 h el sitio resuelve globalmente; el equipo confirma TLS con DevTools → Red.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 3. IP dinámica vs fija para cámaras IP

- **Título:** `IP dinámica vs fija para cámaras IP`
- **Tono:** incidente operativo PyME; DHCP rompe port forwarding.
- **Copy refinado:** `Una PyME instala 8 cámaras con app que exige IP fija del NVR. Con DHCP dinámico, el port forwarding deja de funcionar tras reinicio. Contratan IP fija con el ISP, reservan 192.168.1.100 en el router y actualizan el registro A de cctv.empresa.co a la nueva IP pública.`
- **Variante Clay:** `callout-warning`; borde accent.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| CompareTable | Navegadores / motores | Filas: Chrome, Edge, Firefox, Safari; motor renderizado y JS |
| CompareTable | IPv4 vs IPv6 | Bits, notación, agotamiento, dual stack, registro DNS |
| CompareTable | Tipos de registro DNS | A, AAAA, CNAME, MX, TXT, NS, SOA — cuándo usar cada uno |
| StepReveal | Resolución DNS | Pasos: URL → caché → recursivo → delegaciones → A/AAAA → TCP |
| MermaidDiagram | Secuencia DNS | Usuario → navegador → resolver → raíz → TLD → NS → servidor |
| PracticeExercise | Éxito (lentitud navegador) | `Correcto. Aislar variables (sin extensiones, sin caché, otro navegador) evita culpar al servidor sin evidencia.` |
| PracticeExercise | Éxito (IP privada) | `Correcto. 192.168.x.x es de red local; el registro A público necesita la IP enrutable desde Internet.` |
| PracticeExercise | Éxito (orden DNS) | `Correcto: d → c → a → f → e → b. Delegación jerárquica antes de la conexión TCP.` |
| PracticeExercise | Éxito (TLD .co) | `Bien. El ccTLD .co refuerza presencia local, puede mejorar disponibilidad de nombre y SEO regional.` |
| PracticeExercise | Éxito (reto Cali) | `Excelente. Has integrado dominio, IP, DNS y diagnóstico con navegador en un caso real de despliegue.` |
| Quiz | Feedback general | Una oración; citar IPv4, delegación DNS, registro A o IP RFC 1918 cuando aplique |
| Cierre | Ideas clave | Viñetas: navegador como diagnóstico · A y AAAA · IP privada ≠ pública · DNS jerárquico · propagación con TTL |
| Cierre | Siguiente paso | `Siguiente lección: clase-02-hosting-correo-https — hosting, correo corporativo y certificados HTTPS.` |

### Notas EN (fase i18n)

- Título EN sugerido: `Web fundamentals: browsers, IP, domains and DNS`
- Mantener sin traducir: DNS, IPv4, IPv6, TCP, TLS, HTTP, HTTPS, DevTools, FQDN, TLD, SLD, RFC 1918, NAT, DHCP, A, AAAA, CNAME, MX, TXT, NS, SOA, TTL, NIC.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/protocolos-seguridad/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock`, imagen IPv4 |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención track docente):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`, imagen) o `my-8` (`ClayCard` wrappers).
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Tablas de tipos IP y TLD (draft): prose `<table>`; sin clay extra.
- Lista «Errores comunes» (draft L752–761): prose `<ul>` al final de `ConfigurarDominioSection` o sección dedicada; sin clay.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Navegadores web: motores y DevTools`, `Dirección IP: composición IPv4` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Mapa mental`, `Qué es`, `Estructura / Composición` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («4. Delegaciones», «5. Respuesta A/AAAA») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | IPv4, DNS, registros |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) Navegadores web` | Navegadores web: motores y DevTools | `NavegadoresWebSection` |
| `### 2) Dirección IP (IPv4)` | Dirección IP: composición IPv4 | `Ipv4Section` |
| `### 3) IPv6` | IPv6: direcciones de 128 bits | `Ipv6Section` |
| `### 4) DNS` | DNS: resolución de nombres | `DnsSection` |
| `### 5) Dominio` | Dominio: SLD, TLD y registro | `DominioSubdominioSection` (parte 1) |
| `### 6) Subdominio` | Subdominio: separar servicios | `DominioSubdominioSection` (parte 2) |
| `### 7) Configurar dominio` | Configurar dominio: NS y registros DNS | `ConfigurarDominioSection` |
| Errores comunes | Errores frecuentes | Prose al cierre de configuración DNS |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: agencia creativosvalle.co en Cali | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `NavegadoresWebSection`:** Mapa mental, Qué es, Para qué sirve, Cómo funciona, Estructura / Composición, Tipos / Variantes, Ventajas y desventajas, Ejemplo concreto, Señales de buen y mal uso, Práctica guiada.

**H3 dentro de `Ipv4Section`:** Mapa mental, Qué es, Estructura / Composición (IPv4), Tipos / Variantes, Ventajas y desventajas, Ejemplo concreto — consultar IP, Conversión octeto a binario, Señales de buen y mal uso, Práctica guiada.

**H3 dentro de `Ipv6Section`:** Mapa mental, Qué es, Estructura / Composición, Tipos / Variantes, Ventajas y desventajas, Ejemplo concreto.

**H3 dentro de `DnsSection`:** Mapa mental, Qué es, Cómo funciona — flujo paso a paso, Estructura / Composición, Tipos / Variantes, Visual — flujo DNS, Ejemplo concreto — consultas con dig, Señales de buen y mal uso, Práctica guiada.

**H3 dentro de `DominioSubdominioSection`:** (dominio) Mapa mental, Qué es, Estructura / Composición, Tipos TLD; (subdominio) Qué es, Tipos / Variantes, Ejemplo concreto, Práctica guiada.

**H3 dentro de `ConfigurarDominioSection`:** Mapa mental, Estructura / Composición — tipos de registro, Ejemplo concreto — zona mínima, Caso real PyME, Práctica guiada.

### Layout notes — imagen IPv4

| Campo | Valor |
|-------|-------|
| **Asset** | `public/teaching/configuracion-servicios-web/ipv4-composicion.png` |
| **URL pública** | `/teaching/configuracion-servicios-web/ipv4-composicion.png` |
| **Sección** | `Ipv4Section` — bloque «Estructura / Composición (IPv4)» |
| **Ubicación** | Tras el bloque ASCII de octetos (`192.168.1.1`); **antes** de la tabla decimal ↔ binario |
| **Componente** | `<figure className="my-6">` + `<img>` (o `next/image` con `width`/`height` fijos); **no** envolver en `ClayCard` |
| **Alt** | `Composición IPv4: 4 octetos de 8 bits = 32 bits, ejemplo 192.168.1.1` |
| **Clases** | `mx-auto max-w-full rounded-[var(--clay-radius)]` |
| **Caption** | Opcional `<figcaption className="mt-2 text-center text-sm text-slate-600">` — mismo texto que alt |
| **OG sugerida** | Reutilizar este asset como imagen social de la lección (diagrama octetos) |

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `NavegadoresWebSection` | Navegadores web: motores y DevTools | — | prose, `CompareTable`, `PracticeExercise` |
| 3 | `Ipv4Section` | Dirección IP: composición IPv4 | — | prose, imagen IPv4, tablas, `CodeBlock` ×3, `PracticeExercise` |
| 4 | `Ipv6Section` | IPv6: direcciones de 128 bits | — | prose, `CompareTable`, `CodeBlock` ×2 |
| 5 | `DnsSection` | DNS: resolución de nombres | stepper | prose, `StepReveal`, `MermaidDiagram`, `CodeBlock` ×2, `PracticeExercise` |
| 6 | `DominioSubdominioSection` | Dominio y subdominio | — | prose ×2 H2 internos o un H2 compuesto, `MermaidDiagram`, `Callout`, `PracticeExercise` |
| 7 | `ConfigurarDominioSection` | Configurar dominio: NS y registros DNS | — | prose, `CompareTable`, `CodeBlock` ×4, `Callout`, `PracticeExercise`, errores comunes |
| 8 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×2 |
| 9 | `RetoIntegradorSection` | Reto integrador: agencia creativosvalle.co en Cali | card | Enunciado prose + `PracticeExercise` |
| 10 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `clase-02-hosting-correo-https` |
| 11 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L34–38) | Sin clay |
| Prerrequisitos | prose `<ul>` | modelo-cliente-servidor, servicios-web (draft L42–44) | Sin clay |
| `del-nombre-al-paquete` | `Callout` | title: «Del nombre al paquete» (draft L54–58) | **callout-info**; borde secondary |

#### `NavegadoresWebSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué es / Estructura | prose | capas UI, red, renderizado (draft L66–100) | Sin clay |
| `navegadores-motores` | `CompareTable` | 6 filas Navegador/Motor/JS/Notas (draft L104–115) | `ClayCard` `my-8`; thead secondary |
| Ventajas por enfoque | prose `<table>` | Chromium vs Firefox vs Safari (draft L125–129) | Sin clay |
| Ejemplo DevTools | prose | tienda.ejemplo.co 404 (draft L131–133) | Sin clay |
| `aislar-lentitud-navegador` | `PracticeExercise` | factores lentitud + aislamiento (draft L144–150) | `ClayCard` `my-8` accent |

#### `Ipv4Section`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué es | prose | 32 bits, octetos (draft L158–177) | Sin clay |
| ASCII octetos | prose `<pre>` | diagrama 192.168.1.1 (draft L183–190) | Sin clay |
| `ipv4-composicion` | `<figure>` + `<img>` | src `/teaching/configuracion-servicios-web/ipv4-composicion.png` (draft L192) | `my-6`; ver Layout notes |
| Tabla decimal ↔ binario | prose `<table>` | octetos 192.168.1.1 (draft L196–201) | Sin clay |
| Tipos IP | prose `<table>` | pública, privada, fija, dinámica (draft L207–212) | Sin clay |
| Consultar IP | `CodeBlock` | powershell `ipconfig` (draft L224–228) | `my-6` |
| Consultar IP | `CodeBlock` | bash `ip addr`, `curl ifconfig.me` (draft L230–235) | `my-4` |
| Conversión binario | `CodeBlock` | bash `bc` octeto 192 (draft L241–246) | `my-4` |
| `ip-privada-vs-publica` | `PracticeExercise` | 192.168.0.15 en registro A (draft L255–261) | `ClayCard` `my-8` accent |

#### `Ipv6Section`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué es / Abreviaciones | prose | 128 bits, `::` (draft L269–299) | Sin clay |
| `ipv4-vs-ipv6` | `CompareTable` | 6 filas Aspecto/IPv4/IPv6 (draft L311–322) | `ClayCard` `my-8`; thead secondary |
| Registro AAAA | `CodeBlock` | dns `www.ejemplo.co AAAA` (draft L328–331) | `my-4` |
| Consulta IPv6 | `CodeBlock` | bash `curl -6 ifconfig.me` (draft L335–338) | `my-4` |

#### `DnsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Flujo texto | prose `<ol>` | 5 pasos + 13 raíces (draft L351–377) | Sin clay |
| `resolucion-dns-paso-a-paso` | `StepReveal` | title: «Resolución DNS paso a paso»; 6 steps (draft L403–414) | **stepper** `my-8` |
| `flujo-dns-sequence` | `MermaidDiagram` | sequenceDiagram URL→IP (draft L416–419) | `my-6` |
| Consultas dig | `CodeBlock` | bash `dig A`, `dig NS` (draft L423–431) | `my-4` |
| Petición HTTP | `CodeBlock` | http GET /productos (draft L435–441) | `my-4` |
| `ordenar-pasos-dns` | `PracticeExercise` | orden d→c→a→f→e→b (draft L450–456) | `ClayCard` `my-8` accent |

#### `DominioSubdominioSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Dominio — estructura | prose + `<pre>` | api.tienda.ejemplo.co (draft L486–502) | Sin clay |
| `jerarquia-dominio-subdominios` | `MermaidDiagram` | flowchart raíz→TLD→SLD→subdominios (draft L504–507) | `my-6` |
| Tabla TLD | prose `<table>` | gTLD, ccTLD, patrocinados (draft L511–516) | Sin clay |
| `caso-fintech-bogota` | `Callout` | title: «Caso real: fintech en Bogotá» (draft L530–534) | **callout-info** |
| Subdominio — usos | prose `<table>` | www, api, staging… (draft L570–577) | Sin clay |
| Registros subdominio | `CodeBlock` | dns api + staging CNAME (draft L589–593) | `my-4` |
| `elegir-tld-co` | `PracticeExercise` | .co vs .com Colombia (draft L602–608) | `ClayCard` `my-8` accent |

#### `ConfigurarDominioSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `tipos-registro-dns` | `CompareTable` | 7 filas Tipo/Propósito/Cuándo (draft L641–653) | `ClayCard` `my-8`; thead secondary |
| Nameservers | `CodeBlock` | dns NS Cloudflare (draft L657–661) | `my-4` |
| Zona mínima | `CodeBlock` | dns comentado apex/www/MX (draft L681–693) | `my-6` |
| Zona BIND | `CodeBlock` | dns SOA completo (draft L697–713) | `my-6` |
| Verificación dig | `CodeBlock` | bash 6 consultas (draft L717–725) | `my-4` |
| `caso-pyme-camaras-ip-fija` | `Callout` | title: «IP dinámica vs fija para cámaras IP» (draft L734–738) | **callout-warning** |
| `registros-cname-txt` | `PracticeExercise` | blog CNAME + TXT verificación (draft L742–748) | `ClayCard` `my-8` accent |
| Errores comunes | prose `<ul>` | 8 ítems (draft L752–761) | Sin clay |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-ipv4-bits` | `PracticeExercise` | 32 bits, 4 octetos, binario 192 (draft L769–775) | accent border |
| `comprension-mx-duplicados` | `PracticeExercise` | MX misma prioridad dos proveedores (draft L777–783) | accent border |

Apilar los dos ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | creativosvalle.co — 6 tareas (draft L791–802) | H2 primary |
| `reto-creativosvalle` | `PracticeExercise` | integración dominio/IP/DNS (draft L804–816) | `ClayCard` accent; `rows={8}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 5 viñetas (draft L826–832) | Sin clay |
| Siguiente paso | enlace `clase-02-hosting-correo-https` (draft L834) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas IPv4/IPv6/DNS/A/RFC1918 (draft L842–901) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Del nombre al paquete | `callout-info` | `--color-secondary` | Puente conceptual dominio → IP |
| Caso real: fintech en Bogotá | `callout-info` | `--color-secondary` | Despliegue LATAM con NS y MX |
| IP dinámica vs fija para cámaras IP | `callout-warning` | `--color-accent` | Operaciones PyME; DHCP y registro A |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / Quiz
        ├── MermaidDiagram (blanco, no clay)
        ├── CodeBlock (oscuro, no clay)
        └── Imagen IPv4 (figura, no clay)
```

En `NavegadoresWebSection`: tabla navegadores → practice; prose entre tabla ventajas y ejercicio. En `Ipv4Section`: ASCII → **imagen** → tabla binario → codes → practice; no envolver imagen en card. En `DnsSection`: stepreveal → mermaid; intercalar prose entre diagramas. En `DominioSubdominioSection`: mermaid jerarquía → callout fintech → subdominios. En `ConfigurarDominioSection`: tabla registros → 4 code blocks → callout warning → practice.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| Navegadores web | 2 | tabla + practice |
| IPv4 | 2 | **imagen fija** + 3 code blocks + practice |
| IPv6 | 2 | tabla comparativa + 2 codes |
| DNS | 2 | stepper + sequence + practice |
| Dominio y subdominio | 2 | mermaid + callout + practice |
| Configurar dominio | 2 | tabla + 4 codes + warning + practice |
| Comprueba tu comprensión | 2 | 2 practice `my-8` |
| Reto integrador | 2 | practice abierta creativosvalle |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Refactorizar secciones monolíticas actuales (`DominiosIpSection`, `DominiosDnsSection`) en 6 secciones del mapa (Ipv4, Ipv6, Dns, DominioSubdominio, ConfigurarDominio)
- [ ] Poblar `ObjetivosSection` con `Callout` del-nombre-al-paquete
- [ ] Poblar `NavegadoresWebSection`: `CompareTable` navegadores, `PracticeExercise` lentitud
- [ ] Poblar `Ipv4Section`: imagen `ipv4-composicion.png`, 3 `CodeBlock`, `PracticeExercise` IP privada
- [ ] Poblar `Ipv6Section`: `CompareTable` IPv4 vs IPv6, 2 `CodeBlock`
- [ ] Poblar `DnsSection`: `StepReveal`, mermaid secuencia, 2 `CodeBlock`, `PracticeExercise` orden DNS
- [ ] Poblar `DominioSubdominioSection`: mermaid jerarquía, callout fintech, `PracticeExercise` .co
- [ ] Poblar `ConfigurarDominioSection`: `CompareTable` registros, 4 `CodeBlock`, callout cámaras, practice CNAME/TXT, errores comunes
- [ ] Crear `RetoIntegradorSection`, actualizar `CierreSection`, renombrar `MiniquizSection` → `MiniquizFinalSection` si aplica
- [ ] Registrar quiz en `src/lib/teaching-quizzes/configuracion-servicios-web.ts` → clave `clase-01-fundamentos-web`
- [ ] Verificar asset `public/teaching/configuracion-servicios-web/ipv4-composicion.png` existe antes de deploy

## SEO

Contribución de **seo-redirects-expert**. Clase 1 del track **Configuración de servicios web**; enlaza prerrequisitos POSW (`modelo-cliente-servidor`, `servicios-web`) con hosting y HTTPS en clase 2.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Fundamentos web: navegadores, IP y DNS \| Servicios web` | 54 |
| `seoDescription` | `Compara navegadores y DevTools, explica IPv4 e IPv6, estructura dominios y flujo DNS con registros A, AAAA, CNAME y MX. Clase 1 del curso Configuración de servicios web.` | 154 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Web fundamentals: browsers, IP & DNS \| Web services` | 52 |
| `seoDescription` | `Lesson 1: browser engines, IPv4/IPv6, domain structure, DNS resolution, and A/AAAA/CNAME/MX records. Configuración de servicios web track.` | 130 |

### Keywords (track Configuración de servicios web)

**Primarias:** navegadores web, dirección IP, IPv4, IPv6, DNS, dominio, subdominio, registros DNS.

**Secundarias:** DevTools, Blink Gecko WebKit, RFC 1918, IP pública privada, registro A, AAAA, CNAME, MX, TXT, nameserver, NIC Colombia, .co.

**Long-tail:** qué es una dirección IP IPv4, flujo DNS paso a paso, diferencia IP privada y pública, cómo configurar registros DNS dominio, registrar dominio .co Colombia, consultar IP con ipconfig dig.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `index` | Configuración de Servicios Web — Introducción al curso |
| `next` | `clase-02-hosting-correo-https` | Clase 2: Hosting, correo y HTTPS |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/configuracion-servicios-web/clase-01-fundamentos-web/` |
| EN (fase i18n) | `/en/teaching/configuracion-servicios-web/clase-01-fundamentos-web/` |
| Hub track | `/es/teaching/configuracion-servicios-web/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | Navegadores web | Navegadores web: motores y DevTools | navegadores web DevTools |
| H2 | Dirección IP (IPv4) | Dirección IP: composición IPv4 y tipos | dirección IP IPv4 |
| H2 | IPv6 | IPv6: direcciones de 128 bits y registro AAAA | IPv6 AAAA |
| H2 | DNS | DNS: resolución de nombres paso a paso | DNS resolución nombres |
| H2 | Dominio | Dominio: SLD, TLD y registro en LATAM | dominio TLD .co |
| H2 | Subdominio | Subdominio: www, api y staging | subdominio DNS |
| H2 | Configurar dominio | Configurar dominio: NS y registros DNS | registros DNS A CNAME MX |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: despliegue creativosvalle.co | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `Fundamentos web: navegadores, IP y DNS \| Servicios web` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «IPv6» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary_large_image` |
| Imagen sugerida | `public/teaching/configuracion-servicios-web/ipv4-composicion.png` — diagrama composición IPv4 (4 octetos × 8 bits) |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`clase-01-fundamentos-web`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Web fundamentals: browsers, IP, domains and DNS`.
- **Términos sin traducir:** DNS, IPv4, IPv6, TCP, TLS, HTTP, HTTPS, DevTools, FQDN, TLD, SLD, RFC 1918, NAT, DHCP, A, AAAA, CNAME, MX, TXT, NS, SOA, TTL.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
