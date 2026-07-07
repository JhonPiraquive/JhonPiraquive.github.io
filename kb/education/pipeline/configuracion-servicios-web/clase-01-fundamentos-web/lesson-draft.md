---
track: configuracion-servicios-web
slug: clase-01-fundamentos-web
title: "Fundamentos web — Navegadores, IP, dominios y DNS"
order: 2
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
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Comparar** navegadores web y sus motores de renderizado (Blink, Gecko, WebKit); configurar cookies, caché y privacidad; usar DevTools (Red, Consola, Almacenamiento) para diagnosticar problemas.
- **Explicar** qué es una dirección IP, su composición en IPv4 (octetos, bits) e IPv6 (hexadecimal, 128 bits); distinguir IP pública, privada, fija y dinámica.
- **Consultar** la IP local y pública con comandos en Windows (`ipconfig`) y Linux (`ip addr`, `curl ifconfig.me`).
- **Describir** la estructura de un dominio (subdominio, SLD, TLD), tipos de TLD y ventajas de un dominio propio; registrar un dominio en LATAM (p. ej. `.co` vía NIC Colombia).
- **Explicar** el flujo DNS paso a paso (URL → resolver → respuesta A) y configurar registros DNS (A, AAAA, CNAME, MX, TXT, NS, SOA) con nameservers y subdominios.

## Prerrequisitos

- **Lección `posw/modelo-cliente-servidor`:** paradigma cliente-servidor, flujo DNS → TCP → TLS → HTTP al abrir una URL.
- **Lección `posw/servicios-web`:** concepto de servicio web, roles de cliente y servidor en la web.
- Familiaridad básica con la línea de comandos en Windows o Linux.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosSection`

Esta lección conecta la capa de usuario (navegador) con la capa de red (IP, dominio, DNS). Sin entender estos fundamentos, configurar hosting, correo o HTTPS en lecciones posteriores se vuelve adivinanza.

<!-- interactive: Callout -->
{
  "title": "Del nombre al paquete",
  "children": "El usuario escribe un dominio legible; la red enruta por IP. El DNS es el puente. El navegador es la ventana de diagnóstico más accesible que tienes."
}

---

### 1) Navegadores web

**Sección TSX:** `NavegadoresWebSection`

#### Mapa mental

- **Navegador web:** aplicación cliente que interpreta HTML, CSS y JavaScript, gestiona sesiones y presenta la interfaz.
- **Motor de renderizado:** construye el DOM, aplica estilos y compone capas (Blink, Gecko, WebKit).
- **Motor de red:** DNS, HTTP, TLS y caché HTTP.
- **DevTools:** Red, Consola y Almacenamiento para aislar fallos de servidor, red, caché o extensiones.

#### Qué es

Un **navegador web** es una aplicación cliente que interpreta documentos hipertexto (HTML, CSS, JavaScript), gestiona sesiones con servidores remotos y presenta la interfaz al usuario. Es el punto de entrada más común al modelo cliente-servidor en la web.

#### Para qué sirve / Por qué importa

Sin navegador (o cliente equivalente), el usuario no puede consumir sitios ni APIs desde una interfaz gráfica. Para un administrador de servicios web, entender el navegador permite diagnosticar si un fallo es del servidor, de la red, de la caché local o de extensiones que alteran el tráfico.

#### Cómo funciona

1. El usuario escribe una URL o hace clic en un enlace.
2. El navegador resuelve el dominio (DNS), abre conexión TCP/TLS y envía peticiones HTTP(S).
3. Recibe HTML, CSS, JS, imágenes y otros recursos; el **motor de renderizado** construye el DOM, aplica estilos y ejecuta scripts.
4. Almacena cookies, caché y datos locales según políticas de sitio y configuración del usuario.

#### Estructura / Composición

Un navegador moderno se organiza en capas cooperativas:

| Componente | Función |
|----------|---------|
| **UI** | Barra de direcciones, pestañas, favoritos |
| **Motor de red** | DNS, HTTP, TLS, caché HTTP |
| **Motor de renderizado** | Layout, pintura, composición de capas |
| **Motor JavaScript** | Ejecuta scripts (V8, SpiderMonkey, JavaScriptCore) |
| **Almacenamiento** | Cookies, `localStorage`, IndexedDB, Service Workers |

Cada capa puede ser el origen de un problema distinto: la Red muestra si el servidor respondió 404; la Consola revela errores de JavaScript; Almacenamiento expone cookies o caché obsoleta.

#### Tipos / Variantes (navegadores y motores)

<!-- interactive: CompareTable -->
{
  "headers": ["Navegador", "Motor renderizado", "Motor JS", "Notas"],
  "rows": [
    ["Chrome", "Blink", "V8", "Mayor cuota de mercado; DevTools de referencia"],
    ["Edge", "Blink", "V8", "Sucesor de Edge Legacy (EdgeHTML); integración Windows"],
    ["Opera", "Blink", "V8", "Basado en Chromium; VPN y ahorro de datos integrados"],
    ["Brave", "Blink", "V8", "Chromium con bloqueo de rastreadores por defecto"],
    ["Firefox", "Gecko", "SpiderMonkey", "Motor independiente; fuerte en privacidad y estándares abiertos"],
    ["Safari", "WebKit", "JavaScriptCore", "Predeterminado en macOS/iOS; motor base de Blink"]
  ]
}

**Motores clave:**

- **Blink** — fork de WebKit mantenido por Google; usado por Chrome, Edge, Opera, Brave.
- **Gecko** — Mozilla; motor propio de Firefox.
- **WebKit** — Apple; base histórica de Safari y ancestro de Blink.

#### Ventajas y desventajas (por enfoque)

| Enfoque | Ventaja | Desventaja |
|---------|---------|------------|
| Chromium/Blink (Chrome, Edge, Brave) | Compatibilidad amplia con sitios modernos; DevTools potentes | Monocultivo: muchos sitios se prueban solo en Chromium |
| Firefox/Gecko | Independencia del ecosistema Google; buen soporte de estándares | Algunos sitios corporativos optimizan solo para Chrome |
| Safari/WebKit | Rendimiento y batería en Apple; políticas estrictas de privacidad | En Windows/Linux no está disponible; diferencias en APIs web |

#### Ejemplo concreto

Un desarrollador abre DevTools → pestaña **Red**, recarga `https://tienda.ejemplo.co` y ve: resolución DNS, TLS, `GET /` (200), luego 40+ peticiones de assets. Si una imagen devuelve 404, el problema es del servidor o la ruta, no del motor del navegador.

#### Señales de buen y mal uso

- **Buen uso:** limpiar caché solo al diagnosticar; revisar Red/Consola antes de culpar al backend; probar en un segundo navegador sin extensiones.
- **Mal uso:** culpar al servidor sin revisar caché del navegador; extensiones de bloqueo de ads/scripts que rompen sitios legítimos; desactivar JavaScript globalmente y esperar que SPAs funcionen.

**Configuración relevante:** cookies (sesión, preferencias), caché (acelera recargas pero oculta cambios recientes), privacidad (terceros, rastreadores), DevTools (Red, Consola, Almacenamiento).

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Enumera al menos cuatro factores que pueden ralentizar la carga de un sitio en el navegador (motor, extensiones, caché, red, tamaño de assets). ¿Cómo los aislarías uno a uno?",
  "hints": ["Ventana privada sin extensiones", "Pestaña Red en DevTools", "Recarga forzada Ctrl+Shift+R", "Probar otro navegador"],
  "expectedKeywords": ["caché", "extensiones", "red", "DevTools"],
  "successMessage": "Correcto. Aislar variables (sin extensiones, sin caché, otro navegador) evita culpar al servidor sin evidencia."
}

---

### 2) Dirección IP (IPv4)

**Sección TSX:** `Ipv4Section`

#### Mapa mental

- **Dirección IP:** identificador numérico de cada interfaz de red; la "dirección postal" del equipo.
- **IPv4:** 32 bits = 4 octetos de 8 bits; notación decimal (`192.168.1.1`).
- **Pública vs privada:** enrutable en Internet vs RFC 1918 (LAN).
- **Fija vs dinámica:** reserva DHCP o manual vs asignación que puede cambiar.

#### Qué es

Una **dirección IP** (Internet Protocol) es un identificador numérico asignado a cada interfaz de red conectada a una red IP. Permite que routers y hosts enruten paquetes hasta el destino correcto — la "dirección postal" de un equipo en Internet o en una red local.

#### Para qué sirve / Por qué importa

Toda comunicación cliente-servidor en Internet necesita una IP de destino. El DNS traduce nombres legibles (`ejemplo.com`) a IP; sin IP no hay conexión TCP. Distinguir IP pública vs privada evita errores al exponer servicios o al diagnosticar conectividad.

#### Cómo funciona

1. El emisor encapsula datos en paquetes con IP origen y destino.
2. Routers consultan tablas de enrutamiento y reenvían hop a hop.
3. En redes locales, DHCP asigna IP dinámica; en servidores de producción suele usarse IP fija o reserva DHCP.

#### Estructura / Composición (IPv4)

IPv4 usa **32 bits** divididos en **4 octetos** de **8 bits** cada uno, separados por puntos en notación decimal.

```
192 . 168 . 1 . 1
 │     │     │   └── octeto 4 (8 bits): 0–255
 │     │     └────── octeto 3
 │     └──────────── octeto 2
 └────────────────── octeto 1
Total: 4 × 8 = 32 bits
```

![Composición IPv4: 4 octetos × 8 bits = 32 bits](/teaching/configuracion-servicios-web/ipv4-composicion.png)

**Conversión decimal ↔ binario (ejemplo `192.168.1.1`):**

| Octeto | Decimal | Binario (8 bits) |
|--------|---------|------------------|
| 1 | 192 | `11000000` |
| 2 | 168 | `10101000` |
| 3 | 1 | `00000001` |
| 4 | 1 | `00000001` |

IP completa en binario: `11000000.10101000.00000001.00000001`

#### Tipos / Variantes

| Tipo | Rango / origen | Uso |
|------|----------------|-----|
| **Pública** | Enrutable en Internet; asignada por ISP | Servidor web, API expuesta, router hacia WAN |
| **Privada** (RFC 1918) | `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` | LAN, Wi‑Fi casa/oficina; no enrutable en Internet |
| **Fija (estática)** | Reserva DHCP o configuración manual | Servidores, cámaras IP, impresoras de red |
| **Dinámica** | Asignada por DHCP del router/ISP | PCs, móviles; puede cambiar al reconectar |

#### Ventajas y desventajas

| Tipo | Ventaja | Desventaja |
|------|---------|------------|
| Pública fija | Siempre alcanzable en la misma IP; ideal para DNS A directo | Costo ISP; superficie de ataque si no hay firewall |
| Privada | Seguridad por NAT; sin costo de IP pública por dispositivo | No accesible desde Internet sin port forwarding o túnel |
| Dinámica | Simple para usuarios finales | Cambia la IP; rompe DNS si no hay DDNS o IP fija |

#### Ejemplo concreto — consultar IP

<!-- code: powershell -->
```powershell
ipconfig
ipconfig /all
```

<!-- code: bash -->
```bash
ip addr show
hostname -I
curl -4 ifconfig.me    # IP pública IPv4
```

Un estudiante ejecuta `ipconfig` en Windows y ve `192.168.1.45` — es IP **privada** de su PC en la red Wi‑Fi. Luego `curl ifconfig.me` devuelve `190.25.80.42` — IP **pública** del router vista desde Internet.

#### Conversión octeto a binario

<!-- code: bash -->
```bash
# Octeto 192 → binario
printf '%08d\n' $(echo "obase=2;192" | bc)
# 11000000
```

#### Señales de buen y mal uso

- **Buen uso:** consultar IP pública al configurar registro A; usar IP privada solo detrás de NAT; reservar IP fija en router para servidor casero.
- **Mal uso:** creer que `192.168.x.x` es la IP que ve el mundo; exponer servicios sensibles en IP pública sin firewall; confundir IP del router con IP del servidor web detrás de proxy.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un compañero dice: «Mi IP es 192.168.0.15, así que ya puedo poner esa IP en el registro A del dominio». ¿Qué le explicas sobre IP privada vs pública?",
  "hints": ["RFC 1918", "NAT", "IP pública del servidor o balanceador"],
  "expectedKeywords": ["privada", "pública", "Internet", "NAT"],
  "successMessage": "Correcto. 192.168.x.x es de red local; el registro A público necesita la IP enrutable desde Internet."
}

---

### 3) IPv6

**Sección TSX:** `Ipv6Section`

#### Mapa mental

- **IPv6:** 128 bits en 8 grupos hexadecimales de 16 bits.
- **Motivación:** agotamiento del espacio IPv4 (~4.300 millones de direcciones).
- **Dual stack:** IPv4 e IPv6 en paralelo en redes modernas.
- **Registro AAAA:** equivalente IPv6 del registro A.

#### Qué es

**IPv6** (Internet Protocol version 6) es la evolución de IPv4 que usa direcciones de **128 bits**, escritas en **notación hexadecimal** con ocho grupos de 16 bits separados por dos puntos.

#### Para qué sirve / Por qué importa

IPv4 tiene ~4.300 millones de direcciones; con el crecimiento de móviles, IoT y cloud se agotó el espacio. IPv6 ofrece un espacio de direcciones prácticamente ilimitado y simplifica el enrutamiento en redes modernas. Los servicios web deben soportar **registros AAAA** además de **A**.

#### Cómo funciona

Misma lógica de enrutamiento que IPv4, pero con cabeceras optimizadas y direcciones más largas. Los clientes intentan IPv6 si hay registro AAAA; muchos proveedores ofrecen **dual stack** (IPv4 + IPv6 en paralelo).

#### Estructura / Composición

Formato: `XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX` (8 grupos × 16 bits = 128 bits).

Ejemplo completo: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

**Abreviaciones:**

- Ceros a la izquierda en un grupo se omiten: `0db8` → `db8`
- Secuencia de grupos `0000` consecutivos → `::` (una sola vez por dirección)

Ejemplo abreviado: `2001:db8:85a3::8a2e:370:7334`

#### Tipos / Variantes

| Tipo | Prefijo típico | Uso |
|------|----------------|-----|
| Global unicast | `2000::/3` | Internet público (equivalente a IP pública IPv4) |
| Link-local | `fe80::/10` | Comunicación en el mismo enlace |
| Unique local | `fc00::/7` | Similar a privadas RFC 1918 |

#### Ventajas y desventajas

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "IPv4", "IPv6"],
  "rows": [
    ["Bits", "32 bits (4 octetos)", "128 bits (8 grupos hex)"],
    ["Notación", "Decimal con puntos (192.168.1.1)", "Hexadecimal con dos puntos"],
    ["Espacio de direcciones", "Agotado (~4.300 millones)", "Prácticamente ilimitado"],
    ["Convivencia", "Estándar histórico", "Dual stack con IPv4 en producción"],
    ["Registro DNS", "A", "AAAA"],
    ["Adopción LATAM", "Documentación y herramientas predominantes", "Creciente pero desigual por ISP"]
  ]
}

#### Ejemplo concreto

Registro DNS **AAAA** para el mismo host:

<!-- code: dns -->
```dns
www.ejemplo.co.  300  IN  AAAA  2001:db8:85a3::1
```

Consulta de IP pública IPv6 (si disponible):

<!-- code: bash -->
```bash
curl -6 ifconfig.me
```

#### Señales de buen y mal uso

- **Buen uso:** publicar A y AAAA en sitios de producción; probar conectividad IPv6 con `ping6` o `curl -6`.
- **Mal uso:** ignorar AAAA y perder tráfico IPv6-only; copiar direcciones sin validar abreviatura `::`; asumir que IPv6 reemplazó IPv4 de la noche a la mañana.

---

### 4) DNS (Domain Name System)

**Sección TSX:** `DnsSection`

#### Mapa mental

- **DNS:** traduce nombres de dominio a IP y otros datos (correo, verificación).
- **Jerarquía:** Raíz (.) → TLD (.co) → dominio registrado → subdominio.
- **13 servidores raíz:** delegan a TLD; no resuelven el A final.
- **Resolver recursivo:** hace el trabajo de búsqueda por el cliente (ISP, `1.1.1.1`, `8.8.8.8`).

#### Qué es

El **DNS** es el sistema distribuido que traduce **nombres de dominio** legibles (`www.ejemplo.co`) a **direcciones IP** (`190.25.80.42`) y otros datos (correo, verificación, delegación). Es la "guía telefónica" de Internet.

#### Para qué sirve / Por qué importa

Los humanos memorizan dominios; las redes enrutan por IP. Sin DNS, cada cambio de servidor obligaría a actualizar IPs en todos los clientes. DNS permite mover servicios entre hosts manteniendo el mismo nombre.

#### Cómo funciona — flujo paso a paso

1. **Usuario** escribe `https://www.tienda.ejemplo.co/productos` en el navegador.
2. **Navegador** consulta su caché DNS local; si no hay entrada, pregunta al **resolver** del SO (o DoH/DoT según configuración).
3. **Resolver recursivo** (p. ej. del ISP o `1.1.1.1`) busca la respuesta:
   - Consulta un **servidor raíz** (`.`) → devuelve delegación a servidores **TLD** (`.co`).
   - Consulta TLD **`.co`** → devuelve delegación a **nameservers** del dominio `ejemplo.co`.
   - Consulta **NS** de `ejemplo.co` → obtiene registro **A** (o **AAAA**) de `www.tienda.ejemplo.co`.
4. **Respuesta A:** `www.tienda.ejemplo.co` → `190.25.80.42`.
5. **Navegador** abre TCP/TLS a esa IP y envía `GET /productos`.

**Los 13 servidores raíz DNS** (letras A–M, operados por distintas organizaciones) son el punto de entrada de la jerarquía DNS global. No resuelven dominios completos; delegan a TLD. Ejemplos: `a.root-servers.net`, `b.root-servers.net`, … `m.root-servers.net`. En la práctica, anycast replica estos servidores en cientos de ubicaciones.

#### Estructura / Composición

Jerarquía: **Raíz (.)** → **TLD (.co, .com)** → **Dominio registrado (ejemplo.co)** → **Subdominio (www, api, mail)**.

Cada zona autoritativa publica registros en archivos o paneles DNS.

#### Tipos / Variantes

| Rol | Descripción |
|-----|-------------|
| Resolver recursivo | Hace el trabajo de búsqueda por el cliente (ISP, Cloudflare `1.1.1.1`, Google `8.8.8.8`) |
| Servidor autoritativo | Tiene la "verdad" de una zona (`ejemplo.co`) |
| Caché DNS | Almacena respuestas con TTL para reducir latencia |

#### Ventajas y desventajas

| Ventaja | Desventaja |
|---------|------------|
| Nombres estables aunque cambie la IP | Propagación y caché pueden tardar (minutos a 48 h) |
| Delegación por subdominio y servicio | Configuración incorrecta tumba sitio y correo |
| Estándar universal | Vector de ataque (DNS spoofing, hijacking) si no hay DNSSEC |

#### Visual — flujo DNS

<!-- interactive: StepReveal -->
{
  "title": "Resolución DNS paso a paso",
  "steps": [
    { "title": "1. URL en el navegador", "content": "El usuario escribe https://www.tienda.ejemplo.co/productos." },
    { "title": "2. Caché local", "content": "El navegador y el SO consultan caché DNS; si no hay entrada, envían consulta al resolver." },
    { "title": "3. Resolver recursivo", "content": "El resolver (ISP o 1.1.1.1) inicia la búsqueda en la jerarquía global." },
    { "title": "4. Delegaciones", "content": "Raíz → TLD (.co) → nameservers de ejemplo.co." },
    { "title": "5. Respuesta A/AAAA", "content": "El NS autoritativo devuelve la IP (ej. 190.25.80.42)." },
    { "title": "6. Conexión HTTP", "content": "El navegador abre TCP/TLS a esa IP y envía GET /productos." }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant U as Usuario\n  participant B as Navegador\n  participant R as Resolver (ISP/1.1.1.1)\n  participant Root as Raíz DNS (.)\n  participant TLD as TLD (.co)\n  participant NS as NS autoritativo (ejemplo.co)\n  participant S as Servidor web\n\n  U->>B: https://www.ejemplo.co\n  B->>R: ¿IP de www.ejemplo.co?\n  R->>Root: Consulta www.ejemplo.co\n  Root-->>R: Delega a .co\n  R->>TLD: Consulta ejemplo.co\n  TLD-->>R: NS ns1.cloudflare.com\n  R->>NS: Consulta www.ejemplo.co A\n  NS-->>R: 190.25.80.42\n  R-->>B: A = 190.25.80.42\n  B->>S: TCP 443 + TLS + GET /\n  S-->>B: HTTP 200 HTML"
}

#### Ejemplo concreto — consultas con dig

<!-- code: bash -->
```bash
dig www.ejemplo.co A +short
# 190.25.80.42

dig ejemplo.co NS +short
# ns1.proveedor-dns.net.
# ns2.proveedor-dns.net.
```

Petición HTTP tras resolución DNS:

<!-- code: http -->
```http
GET /productos HTTP/1.1
Host: www.ejemplo.co
User-Agent: Mozilla/5.0
Accept: text/html
```

#### Señales de buen y mal uso

- **Buen uso:** entender TTL antes de migrar; verificar con `dig`/`nslookup` desde varias redes; delegar nameservers al proveedor correcto tras comprar dominio.
- **Mal uso:** editar registro A y esperar cambio instantáneo global; duplicar registros MX en dos proveedores; olvidar que el navegador también cachea DNS.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena los pasos del flujo DNS: (a) consulta TLD .co, (b) navegador abre TCP a la IP, (c) resolver pregunta a raíz, (d) usuario escribe URL, (e) respuesta A devuelta, (f) consulta NS de empresa.co.",
  "hints": ["Empieza por el usuario", "Termina con TCP", "Raíz antes que TLD"],
  "expectedKeywords": ["d", "c", "a", "f", "e", "b"],
  "successMessage": "Correcto: d → c → a → f → e → b. Delegación jerárquica antes de la conexión TCP."
}

---

### 5) Dominio

**Sección TSX:** `DominioSubdominioSection` (parte 1)

#### Mapa mental

- **Dominio:** nombre registrado bajo un TLD; identidad en el espacio DNS.
- **SLD:** nombre que registras (`ejemplo` en `ejemplo.co`).
- **TLD:** categoría o país (`.co`, `.com`, `.mx`).
- **FQDN:** nombre completo resoluble (`api.tienda.ejemplo.co`).

#### Qué es

Un **dominio** es un nombre registrado bajo un **TLD** (Top-Level Domain) que identifica de forma única a una organización o persona en el espacio de nombres DNS. Es la parte que el registrador gestiona y renueva anualmente.

#### Para qué sirve / Por qué importa

Marca, credibilidad y control: `empresa.co` transmite más confianza que `empresa.wordpress.com`. Permite correo corporativo (`@empresa.co`), subdominios (`api.empresa.co`) y certificados TLS propios.

#### Cómo funciona

1. El usuario elige nombre disponible en un **registrador** (NIC Colombia para `.co`, Namecheap, GoDaddy, Cloudflare Registrar).
2. Paga y registra el dominio por 1–10 años.
3. Configura **nameservers** (delegación DNS) hacia el proveedor que hospedará los registros.
4. Publica registros A, MX, TXT, etc.

#### Estructura / Composición

De derecha a izquierda en la jerarquía DNS:

```
api.tienda.ejemplo.co.
│   │     │      └── TLD (Top-Level Domain): .co
│   │     └───────── SLD (Second-Level Domain / dominio registrado): ejemplo
│   └─────────────── subdominio: tienda
└─────────────────── subdominio: api
```

| Parte | Ejemplo | Rol |
|-------|---------|-----|
| **TLD** | `.co`, `.com`, `.org`, `.mx` | Categoría o país |
| **SLD** | `ejemplo` | Nombre que registras |
| **FQDN** | `api.tienda.ejemplo.co` | Nombre completo resoluble |

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  ROOT[\". (raíz)\"]\n  TLD[\".co (TLD)\"]\n  SLD[\"ejemplo.co (SLD registrado)\"]\n  WWW[\"www.ejemplo.co\"]\n  API[\"api.ejemplo.co\"]\n  MAIL[\"mail.ejemplo.co\"]\n  ROOT --> TLD\n  TLD --> SLD\n  SLD --> WWW\n  SLD --> API\n  SLD --> MAIL"
}

#### Tipos / Variantes (TLD)

| Categoría | Ejemplos | Cuándo elegir |
|-----------|----------|---------------|
| **Genéricos (gTLD)** | `.com`, `.org`, `.net`, `.io` | Marca global, startups tech |
| **Geográficos (ccTLD)** | `.co` (Colombia), `.mx` (México), `.ar` (Argentina) | Presencia local, SEO regional, requisitos legales |
| **Patrocinados / restringidos** | `.edu`, `.gov` | Instituciones acreditadas |
| **Personalizados (brand)** | `.google`, `.microsoft` | Grandes empresas con TLD propio |

#### Ventajas y desventajas de dominio propio

| Ventaja | Desventaja |
|---------|------------|
| Marca y correo profesional | Costo anual de renovación |
| Control total de DNS y subdominios | Responsabilidad de renovar (riesgo de perder dominio) |
| TLS y APIs bajo tu nombre | Curva de aprendizaje DNS/hosting |

#### Ejemplo concreto

Startup bogotana registra `empresatech.co` en **NIC Colombia**, apunta nameservers a **Cloudflare** y publica `A` → IP del hosting y `MX` → Google Workspace.

<!-- interactive: Callout -->
{
  "title": "Caso real: fintech en Bogotá",
  "children": "Una fintech registra pagosrapidos.co en NIC Colombia, delega NS a Cloudflare, publica A al VPS en AWS, MX a Google Workspace y TXT SPF. Tras 2 h el sitio resuelve globalmente; el equipo confirma TLS con DevTools → Red."
}

#### Señales de buen y mal uso

- **Buen uso:** renovación automática; WHOIS privacy; registrar variantes críticas de marca.
- **Mal uso:** comprar dominio y no configurar NS; usar `.com` cuando el mercado es 100 % Colombia y `.co` refuerza confianza local; registrar en registrador opaco sin acceso a DNS.

---

### 6) Subdominio

**Sección TSX:** `DominioSubdominioSection` (parte 2)

#### Qué es

Un **subdominio** es un prefijo bajo un dominio registrado que forma un FQDN independiente en DNS (`api.ejemplo.co`, `mail.ejemplo.co`). Se crea con un registro (típicamente **A**, **AAAA** o **CNAME**) en la zona del dominio padre.

#### Para qué sirve / Por qué importa

Separa servicios sin comprar dominios nuevos: API, blog, staging, correo, CDN. Permite certificados TLS por subdominio y políticas de firewall distintas.

#### Cómo funciona

El administrador añade en la zona `ejemplo.co` un registro para el host `api` → IP o alias. Los resolvers consultan `api.ejemplo.co` como cualquier otro nombre.

#### Estructura / Composición

```
[subdominio].[SLD].[TLD]
     api  . ejemplo . co
```

Puede haber varios niveles: `v2.api.ejemplo.co` (subdominio anidado).

#### Tipos / Variantes (usos habituales)

| Subdominio | Uso típico |
|------------|------------|
| `www` | Sitio web principal (a menudo CNAME al apex o CDN) |
| `api` | Backend REST/GraphQL |
| `mail` | Webmail o puntero MX auxiliar |
| `blog` | CMS separado (WordPress, Ghost) |
| `staging` / `dev` | Entorno de pruebas |
| `cdn` / `static` | Assets estáticos |

#### Ventajas y desventajas

| Ventaja | Desventaja |
|---------|------------|
| Aislamiento de servicios y equipos | Más registros DNS que mantener |
| Sin costo de dominio adicional | Certificados wildcard vs individuales |
| Facilita blue/green y entornos | Subdominio mal configurado expone staging públicamente |

#### Ejemplo concreto

<!-- code: dns -->
```dns
api.ejemplo.co.    300  IN  A      190.25.80.50
staging.ejemplo.co. 300  IN  CNAME  servidor-dev.hosting.com.
```

#### Señales de buen y mal uso

- **Buen uso:** `staging` con autenticación o IP restringida; documentar qué subdominio apunta a qué servicio.
- **Mal uso:** dejar `staging.ejemplo.co` indexable en Google con datos reales; CNAME en apex cuando el proveedor exige registro A/ALIAS; subdominios huérfanos tras migración.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué una startup en Colombia podría elegir .co en lugar de .com? Menciona al menos dos razones.",
  "hints": ["Confianza local", "Disponibilidad de nombre", "SEO regional", "NIC Colombia"],
  "expectedKeywords": ["confianza", "local", "disponibilidad"],
  "successMessage": "Bien. El ccTLD .co refuerza presencia local, puede mejorar disponibilidad de nombre y SEO regional."
}

---

### 7) Configurar dominio (nameservers y registros DNS)

**Sección TSX:** `ConfigurarDominioSection`

#### Mapa mental

- **Nameservers (NS):** delegan la zona DNS a un proveedor autoritativo.
- **Registros A/AAAA:** nombre → IP.
- **CNAME:** alias a otro nombre.
- **MX / TXT:** correo y verificaciones (SPF, DKIM).
- **SOA:** metadatos de la zona (serial, TTL mínimo).

#### Qué es

**Configurar un dominio** es delegar la zona DNS a uno o más **nameservers** (NS) y publicar **registros** que definen IP, correo, alias y metadatos. Es el puente entre el dominio comprado en el registrador y los servicios reales (web, email, APIs).

#### Para qué sirve / Por qué importa

Sin NS y registros correctos, el dominio no resuelve, el correo rebota y los certificados TLS fallan. Es la primera tarea tras registrar un dominio y antes de ir a producción.

#### Cómo funciona

1. En el **registrador**, cambias los NS al proveedor DNS (Cloudflare, Route53, panel del hosting).
2. Esperas **propagación** (TTL y caché global, típicamente minutos a 48 h).
3. En el panel DNS autoritativo creas registros.
4. Verificas con `dig` y pruebas de navegador/correo.

#### Estructura / Composición — tipos de registro

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo", "Propósito", "Cuándo usarlo"],
  "rows": [
    ["A", "Nombre → IPv4", "Servidor web, API, apex con IP fija"],
    ["AAAA", "Nombre → IPv6", "Dual stack en producción"],
    ["CNAME", "Alias → otro nombre", "www, blog en hosting externo, CDN"],
    ["MX", "Servidor de correo (prioridad + host)", "Google Workspace, correo propio"],
    ["TXT", "Texto libre (SPF, DKIM, verificación)", "Seguridad de correo, dominio verificado"],
    ["NS", "Nameserver autoritativo de la zona", "Delegación al proveedor DNS"],
    ["SOA", "Metadatos de zona (serial, refresh, TTL)", "Gestionado por el proveedor; autoridad primaria"]
  ]
}

**Nameservers:** par (o más) de hosts que responden autoritativamente por tu zona. Ejemplo tras migrar a Cloudflare:

<!-- code: dns -->
```dns
ejemplo.co.  NS  ada.ns.cloudflare.com.
ejemplo.co.  NS  bob.ns.cloudflare.com.
```

#### Tipos / Variantes (estrategias de delegación)

| Estrategia | Descripción |
|------------|-------------|
| NS en hosting compartido | Simple para sitio único; menos flexible |
| NS en Cloudflare / Route53 | CDN, DDoS, API DNS, múltiples servicios |
| DNS en registrador | Válido para dominios parking; limitado para producción |

#### Ventajas y desventajas

| Ventaja | Desventaja |
|---------|------------|
| Control granular por servicio | Errores de tipeo afectan producción |
| Cambiar IP sin cambiar dominio | Propagación no instantánea |
| TXT para seguridad de correo y verificación | Curva de aprendizaje MX/SPF/DKIM |

#### Ejemplo concreto — zona mínima de producción

<!-- code: dns -->
```dns
; Apex y web
ejemplo.co.       3600  IN  A      190.25.80.42
www.ejemplo.co.   3600  IN  CNAME  ejemplo.co.

; Correo Google Workspace
ejemplo.co.       3600  IN  MX  1  aspmx.l.google.com.
ejemplo.co.       3600  IN  TXT     "v=spf1 include:_spf.google.com ~all"

; API en subdominio
api.ejemplo.co.   300   IN  A      190.25.80.50
```

Zona completa en formato BIND:

<!-- code: dns -->
```dns
$ORIGIN ejemplo.co.
@       3600  IN  SOA   ns1.cloudflare.com. admin.ejemplo.co. (
                        2025062301 ; serial
                        7200       ; refresh
                        3600       ; retry
                        1209600    ; expire
                        3600 )     ; minimum TTL
@       3600  IN  NS    ns1.cloudflare.com.
@       3600  IN  NS    ns2.cloudflare.com.
@       3600  IN  A     190.25.80.42
www     3600  IN  CNAME @
api     300   IN  A     190.25.80.50
@       3600  IN  MX    10 aspmx.l.google.com.
@       3600  IN  TXT   "v=spf1 include:_spf.google.com ~all"
```

Consultas de verificación:

<!-- code: bash -->
```bash
dig ejemplo.co A +short
dig ejemplo.co AAAA +short
dig ejemplo.co MX +short
dig www.ejemplo.co CNAME +short
dig ejemplo.co NS +short
dig ejemplo.co SOA +short
```

#### Señales de buen y mal uso

- **Buen uso:** TTL bajo (300 s) antes de migración; un solo proveedor autoritativo para MX; documentar zona en repo o wiki.
- **Mal uso:** MX duplicados en dos hosts distintos; CNAME en apex cuando no está soportado; olvidar actualizar A al cambiar de hosting; no verificar propagación con `dig @ns1.proveedor.com`.

#### Caso real: PyME en Medellín

<!-- interactive: Callout -->
{
  "title": "IP dinámica vs fija para cámaras IP",
  "children": "Una PyME instala 8 cámaras con app que exige IP fija del NVR. Con DHCP dinámico, el port forwarding deja de funcionar tras reinicio. Contratan IP fija con el ISP, reservan 192.168.1.100 en el router y actualizan el registro A de cctv.empresa.co a la nueva IP pública."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe el registro CNAME para que blog.ejemplo.co apunte a sites.github.io. y un TXT de verificación google-site-verification=abc123.",
  "hints": ["CNAME termina en punto", "TXT entre comillas", "Host blog en la zona ejemplo.co"],
  "expectedKeywords": ["CNAME", "TXT", "blog.ejemplo.co"],
  "successMessage": "Correcto. CNAME blog.ejemplo.co. IN CNAME sites.github.io. y TXT con el valor de verificación."
}

---

### Errores comunes

- **Culpar al servidor sin revisar caché del navegador:** recarga forzada (Ctrl+Shift+R) o ventana privada antes de escalar al backend.
- **Extensiones que bloquean scripts o ads rompen sitios:** probar sin extensiones.
- **Confundir IP privada con pública:** `192.168.x.x` no es alcanzable desde Internet; para DNS A se necesita IP pública del servidor o balanceador.
- **Ignorar propagación DNS:** tras cambiar A o NS, esperar según TTL; verificar con `dig` en resolver externo.
- **MX duplicados o contradictorios:** correo repartido entre dos proveedores sin migración planificada → pérdida de mensajes.
- **CNAME mal aplicado:** CNAME en apex donde el proveedor no ofrece ALIAS/ANAME.
- **No renovar dominio:** sitio y correo caen; riesgo de cybersquatting.
- **Subdominio staging público sin protección:** datos de prueba indexados o atacables.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "IPv4 tiene ___ bits, divididos en ___ octetos de ___ bits. Completa los valores y explica por qué el primer octeto de 192.168.1.1 empieza con 11000000 en binario.",
  "hints": ["4 × 8 = ?", "Cada octeto va de 0 a 255", "192 en binario usa los 8 bits del primer octeto"],
  "expectedKeywords": ["32", "4", "8"],
  "successMessage": "Correcto: 32 bits, 4 octetos de 8 bits. 192 decimal = 11000000 en binario de 8 posiciones."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué pasaría si configuras dos registros MX con la misma prioridad en proveedores distintos sin migrar buzones?",
  "hints": ["Entrega de correo", "Proveedores distintos", "Sin sincronización"],
  "expectedKeywords": ["reparto", "pérdida", "duplicado", "proveedores"],
  "successMessage": "Correcto. El correo se reparte aleatoriamente entre proveedores; mensajes pueden perderse o quedar en buzones no sincronizados."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Pon en línea la presencia web de una agencia en Cali"**

La agencia `creativosvalle.co` acaba de registrar el dominio en NIC Colombia. Necesitan: sitio en `www`, API en `api`, correo `@creativosvalle.co` con Google Workspace y entorno `staging` para el equipo.

1. Dibuja la **estructura de dominio** (TLD, SLD, subdominios necesarios).
2. Indica qué **nameservers** delegarías (ej. Cloudflare) y por qué.
3. Escribe los registros **A**, **CNAME** (si aplica), **MX** y **TXT** (SPF) mínimos.
4. Explica el **flujo DNS** cuando un cliente en México abre `https://api.creativosvalle.co`.
5. El practicante ve `192.168.1.20` en `ipconfig` y propone usarla en el registro A. **Corrige** el error y di qué IP necesita realmente.
6. Lista **dos comprobaciones** con DevTools o `dig` antes de dar por cerrada la migración.

**Criterio de éxito:** jerarquía DNS clara, registros válidos sin CNAME en apex conflictivo, distinción IP privada/pública, flujo raíz→TLD→NS→A documentado, mención de propagación y TTL.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Completa el reto de creativosvalle.co: estructura de dominio, NS delegados, registros A/CNAME/MX/TXT mínimos, flujo DNS para api.creativosvalle.co y corrección del error 192.168.1.20.",
  "hints": [
    "TLD .co, SLD creativosvalle",
    "Subdominios www, api, staging",
    "NS en Cloudflare para CDN y DDoS",
    "IP pública del servidor, no RFC 1918",
    "Verificar con dig y DevTools → Red"
  ],
  "expectedKeywords": ["A", "MX", "NS", "pública", "DNS"],
  "successMessage": "Excelente. Has integrado dominio, IP, DNS y diagnóstico con navegador en un caso real de despliegue."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has conectado la experiencia del usuario (navegador) con la infraestructura invisible (IP, dominio, DNS) que hace posible cada clic.

**Ideas clave para retener:**

- El **navegador** es cliente y herramienta de diagnóstico: DevTools aísla fallos de servidor, red, caché y extensiones.
- **IPv4** (32 bits, 4 octetos) e **IPv6** (128 bits, hex) conviven en dual stack; el registro **A** y **AAAA** los publican en DNS.
- **IP privada** (RFC 1918) ≠ **IP pública**; el registro A de producción necesita la IP enrutable desde Internet.
- El **dominio** da identidad; los **subdominios** separan servicios sin comprar dominios nuevos.
- El **DNS** delega jerárquicamente: raíz → TLD → NS autoritativo → respuesta A/AAAA; la propagación no es instantánea.

**Siguiente paso:** lección `clase-02-hosting-correo-https` — hosting, correo corporativo y certificados HTTPS.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Cuántos bits tiene una dirección IPv4 y cómo se agrupan en notación decimal?",
      "options": [
        "64 bits en 2 grupos",
        "32 bits en 4 octetos de 8 bits",
        "128 bits en 8 hexadecimales",
        "16 bits en 2 octetos"
      ],
      "correctIndex": 1,
      "feedback": "IPv4 = 4 × 8 = 32 bits; cada octeto va de 0 a 255 en decimal."
    },
    {
      "question": "¿Por qué existe IPv6 además de IPv4?",
      "options": [
        "Porque IPv4 no soporta DNS",
        "Por el agotamiento del espacio de direcciones IPv4 y la necesidad de más direcciones",
        "Porque IPv6 elimina la necesidad de routers",
        "Solo para redes Wi‑Fi"
      ],
      "correctIndex": 1,
      "feedback": "IPv6 ofrece 128 bits de dirección; convive con IPv4 en dual stack."
    },
    {
      "question": "En el flujo DNS, ¿qué devuelve un servidor raíz ante una consulta por www.ejemplo.co?",
      "options": [
        "Directamente la IP del servidor web",
        "Delegación hacia los servidores del TLD (.co)",
        "El certificado TLS del dominio",
        "El contenido HTML de la página"
      ],
      "correctIndex": 1,
      "feedback": "Los 13 servidores raíz delegan; no resuelven el A final."
    },
    {
      "question": "¿Qué registro DNS asocia un nombre de host con una dirección IPv4?",
      "options": [
        "MX",
        "CNAME",
        "A",
        "TXT"
      ],
      "correctIndex": 2,
      "feedback": "Registro A → IPv4; AAAA → IPv6; CNAME es alias a otro nombre."
    },
    {
      "question": "Un técnico configura 192.168.1.100 en el registro A público de servidor.empresa.co. ¿Qué problema hay?",
      "options": [
        "Ninguno; es la IP correcta si ping responde",
        "Es una IP privada RFC 1918; no es enrutable desde Internet",
        "Falta el registro MX",
        "Debe ser registro AAAA obligatoriamente"
      ],
      "correctIndex": 1,
      "feedback": "Las IP 192.168.x.x son de red local; desde Internet se necesita la IP pública del servidor o balanceador."
    }
  ]
}
