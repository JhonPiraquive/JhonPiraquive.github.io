---
track: configuracion-servicios-web
slug: clase-02-hosting-correo-https
title: "Clase 2: Hosting, correo corporativo y HTTPS"
order: 3
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
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** hosting y describir cómo un servidor publica un sitio web 24/7 tras resolver DNS y desplegar archivos.
- **Comparar** hosting compartido, VPS, dedicado y nube (IaaS/PaaS) y **elegir** según costo, control, escala y caso de uso.
- **Explicar** HTTP como protocolo de aplicación (puerto 80, mensajes en texto plano) y su rol en el despliegue web.
- **Describir** HTTPS como HTTP sobre TLS (puerto 443), su relación con HTTP y por qué es obligatorio en producción.
- **Diferenciar** SSL (obsoleto) de TLS (1.2/1.3), instalar/renovar certificados (Let's Encrypt, certbot) y forzar redirección HTTP→HTTPS.
- **Configurar** correo corporativo: registros MX, SPF, DKIM y cliente IMAP/SMTP sin romper la entrega al migrar.

## Prerrequisitos

- Haber completado **Clase 1: Fundamentos web** (`clase-01-fundamentos-web`): dominios, registros DNS (A, AAAA, NS, CNAME), resolución de nombres e IP pública.
- Familiaridad básica con el modelo cliente-servidor y con el uso de un navegador y la barra de direcciones.
- No se requiere experiencia previa administrando servidores; los ejemplos con SSH/certbot son de referencia para VPS.

## Contenido

### Objetivos de la clase

**Sección TSX:** `ObjetivosSection`

Esta lección conecta el dominio (clase anterior) con la presencia operativa en Internet: dónde viven los archivos del sitio, cómo se sirven por HTTP/HTTPS y cómo configurar correo profesional `@tudominio`. El hilo conductor es el despliegue seguro y confiable para equipos y PYMEs en LATAM.

<!-- interactive: Callout -->
{
  "title": "De dominio a sitio publicado",
  "children": "Un dominio sin hosting es solo un nombre; un hosting sin DNS correcto es un servidor invisible. Esta clase une ambas piezas y añade TLS y correo corporativo."
}

---

### 1) Hosting: alojamiento web

**Sección TSX:** `HostingSection`

#### Qué es

**Hosting** (alojamiento web) es un servicio que provee espacio en un servidor conectado a Internet 24/7 para almacenar y servir los archivos, bases de datos y configuraciones de un sitio web. El proveedor mantiene hardware, red, energía y —según el plan— panel de control, backups y certificados.

#### Para qué sirve / Por qué importa

Sin hosting, los archivos de tu proyecto solo existen en tu laptop: nadie en Internet puede acceder a ellos de forma estable. El hosting es el paso operativo que convierte un dominio (resuelto por DNS en la clase anterior) en un sitio accesible mundialmente. Para equipos en LATAM, elegir región de datacenter (Bogotá, São Paulo, Miami) impacta latencia percibida y costo en pesos o dólares.

#### Cómo funciona

El flujo típico de publicación sigue cinco pasos encadenados:

1. Contratas un plan y recibes IP o nameservers del proveedor.
2. Configuras DNS: registro **A** (o **AAAA**) del dominio apunta a la IP del hosting, o delegas **NS** al proveedor.
3. Subes archivos (FTP/SFTP, panel, Git deploy) y creas la base de datos si aplica.
4. El servidor web (Nginx, Apache, LiteSpeed) escucha en puertos 80/443 y responde peticiones HTTP/HTTPS.
5. Activas TLS y optimizas (CDN, compresión, caché) según tráfico.

<!-- interactive: StepReveal -->
{
  "title": "Despliegue en hosting",
  "steps": [
    {
      "title": "1. Contratar plan",
      "content": "Recibes IP pública o nameservers del proveedor. Elige región cercana a tu audiencia (Bogotá, Miami, São Paulo)."
    },
    {
      "title": "2. Configurar DNS",
      "content": "Registro A/AAAA apunta al hosting, o delegas NS al proveedor para que él gestione la zona."
    },
    {
      "title": "3. Subir archivos",
      "content": "SFTP, panel o Git deploy. Nunca FTP plano en redes públicas."
    },
    {
      "title": "4. Base de datos",
      "content": "Crear MySQL/PostgreSQL en cPanel o por CLI si el stack lo requiere (WordPress, Laravel, etc.)."
    },
    {
      "title": "5. Activar HTTPS",
      "content": "Let's Encrypt desde panel o certbot en VPS. Forzar redirect HTTP→HTTPS."
    }
  ]
}

#### Estructura / Composición

Un despliegue típico combina varios componentes que el proveedor —o tú en un VPS— administra:

| Componente | Función |
|------------|---------|
| Servidor web | Sirve HTML, estáticos, proxy a apps |
| Runtime | PHP, Node.js, Python según stack |
| Base de datos | MySQL, PostgreSQL, MongoDB |
| Panel | cPanel, Plesk, o solo SSH |
| Almacenamiento | SSD/NVMe, cuota de disco |
| Red | Ancho de banda, IP pública, firewall |

Cada pieza cumple un rol distinto: el servidor web atiende peticiones; el runtime ejecuta código dinámico; la base de datos persiste datos; el panel simplifica tareas repetitivas para quien no administra por terminal.

#### Ventajas y desventajas (visión general)

Contratar hosting evita mantener hardware propio y ofrece disponibilidad 24/7 con paneles que simplifican SSL y correo. El costo es recurrente y existe dependencia del proveedor; los planes baratos comparten recursos y pueden ralentizar en picos. Escalar es posible (VPS/nube), pero una migración mal hecha puede romper DNS, correo o certificados.

| Ventaja | Desventaja |
|---------|------------|
| Disponibilidad 24/7 sin mantener hardware propio | Costo recurrente y dependencia del proveedor |
| Paneles que simplifican SSL y correo | Planes baratos pueden compartir recursos y ralentizar picos |
| Escalado posible (VPS/nube) | Migrar mal puede romper DNS, correo o certificados |

#### Ejemplo concreto

Tienda en Medellín contrata hosting en proveedor colombiano con datacenter en Bogotá. Apunta `tienda.co` (registro A) a `190.x.x.x`, sube WordPress por SFTP, crea MySQL en cPanel y activa Let's Encrypt desde el panel. Usuarios en Antioquia cargan la página en ~40 ms frente a ~180 ms si el servidor estuviera en Europa.

<!-- code: bash -->
```bash
sftp usuario@190.48.xxx.xxx
# put -r ./dist/* /var/www/tienda.com.co/public_html/
```

#### Señales de buen y mal uso

| Buen uso | Mal uso |
|----------|---------|
| Backups automáticos probados con restauración | Sin backups; confiar solo en el disco del hosting |
| SSD, SSL activo, región cercana a la audiencia | Elegir solo por precio más bajo ignorando latencia |
| Credenciales SFTP/SSH fuertes, no FTP plano | Subir archivos por FTP sin cifrar en redes públicas |
| Monitorear espacio en disco y límites de BD | Llenar disco con logs sin rotación |

---

### 2) Tipos de hosting: compartido, VPS, dedicado, nube

**Sección TSX:** `HostingSection` (continuación)

#### Qué es

Clasificación según **cuántos recursos compartes**, **nivel de control** del sistema operativo y **modelo de facturación/escala**. No existe un tipo «mejor» en abstracto: la elección depende del tráfico, presupuesto y habilidades del equipo.

#### Para qué sirve / Por qué importa

Elegir mal el tipo genera sobrecosto (VPS para un blog estático) o incidentes (compartido para e-commerce con picos de Black Friday). La decisión combina presupuesto, tráfico esperado, compliance y capacidad de administración del equipo.

#### Cómo funciona (criterio de elección)

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  START[¿Nuevo proyecto web?] --> Q1{¿Tráfico bajo y sin root?}\n  Q1 -->|Sí| SHARED[Hosting compartido]\n  Q1 -->|No| Q2{¿Necesitas root o stack custom?}\n  Q2 -->|Sí, tráfico medio| VPS[VPS]\n  Q2 -->|Alto tráfico / compliance| DED[Dedicado]\n  Q2 -->|Picos impredecibles / auto-scale| CLOUD[Nube IaaS/PaaS]"
}

#### Tipos / Variantes

##### Hosting compartido

Varios sitios coexisten en la misma máquina física. Es muy económico (USD 3–15/mes en LATAM), incluye panel listo (correo, SSL, BD en clics) e ideal para WordPress, landing y portafolios. La contrapartida: CPU/RAM/disco compartidos, sin acceso root, versiones de PHP/Node fijas y un vecino con tráfico alto puede afectar el rendimiento.

**Ideal para:** blogs, ONG, sitios informativos, MVPs con poco tráfico.

##### VPS (Virtual Private Server)

Recursos garantizados (vCPU, RAM), acceso root, libertad para instalar Nginx, Node o Docker. Requiere administrar SO, parches, firewall y backups; más caro que compartido (USD 10–50/mes). Escalado vertical manual al cambiar de plan.

**Ideal para:** APIs pequeñas, tiendas con tráfico medio, equipos que ya dominan SSH.

##### Servidor dedicado

Hardware físico exclusivo: máximo rendimiento y control, cumplimiento estricto de residencia de datos. Costo alto (cientos USD/mes), aprovisionamiento más lento y escalar implica comprar otra máquina.

**Ideal para:** alto tráfico, bases de datos pesadas, requisitos legales de datos en servidor propio.

##### Nube (IaaS / PaaS)

**IaaS** (AWS EC2, GCP Compute, Azure VM): VMs elásticas y snapshots; facturación por uso puede sorprender sin alertas. **PaaS** (Heroku, Railway, Vercel): deploy Git con menos operaciones; menos control del SO. Auto-scaling, balanceadores y CDN integrados; curva de aprendizaje y posible vendor lock-in. Regiones globales (p. ej. `sa-east-1` São Paulo).

**Ideal para:** startups con picos, SaaS, equipos que priorizan velocidad de deploy sobre costo fijo.

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo", "Costo relativo", "Control", "Escala", "Ideal para"],
  "rows": [
    ["Compartido", "Muy bajo", "Panel, sin root", "Limitada", "Blog, ONG, MVP"],
    ["VPS", "Medio", "Root completo", "Vertical manual", "API, tienda mediana"],
    ["Dedicado", "Alto", "Hardware exclusivo", "Nueva máquina", "Alto tráfico, compliance"],
    ["Nube IaaS/PaaS", "Variable", "IaaS alto / PaaS medio", "Auto-scale", "Picos, SaaS, deploy rápido"]
  ]
}

#### Ejemplo concreto

ONG en Bogotá con sitio informativo y 500 visitas/día → **compartido** + Cloudflare CDN gratis. Startup fintech en CDMX con API Node y picos → **VPS** o **IaaS** en región cercana con auto-scaling del balanceador.

<!-- interactive: Callout -->
{
  "title": "Caso real: tienda Medellín + Cloudflare",
  "children": "E-commerce de ropa usa hosting compartido en datacenter Bogotá. Campaña en Instagram satura ancho de banda con imágenes pesadas. Activan Cloudflare (plan free): CDN, compresión Brotli, SSL full strict. Latencia percibida baja 60% sin migrar a VPS aún."
}

#### Señales de buen y mal uso

| Buen uso | Mal uso |
|----------|---------|
| Compartido para sitio estático; VPS cuando necesitas cron custom | VPS para un blog que nadie administra |
| Revisar SLA y ubicación del datacenter | Dedicado para proyecto escolar sin tráfico |
| Alertas de facturación en nube | PaaS caro para sitio PHP legacy no soportado |

#### Optimización en hosting (complemento operativo)

Más allá del tipo de plan, estas prácticas mejoran rendimiento sin cambiar de categoría de hosting:

- **CDN** (Cloudflare): cachea estáticos en nodos cercanos (Miami para Centroamérica).
- **Compresión** Gzip/Brotli en Nginx/Apache.
- **HTTP/2 y HTTP/3**: multiplexación y menor latencia.
- **Caché** de servidor y cabeceras `Cache-Control`.
- **Región**: datacenter Bogotá/Miami para audiencia Colombia frente a Europa.

---

### 3) HTTP: protocolo de aplicación

**Sección TSX:** `HttpHttpsSection`

#### Qué es

**HTTP** (HyperText Transfer Protocol) es el protocolo de **capa de aplicación** que define el formato de mensajes entre cliente (navegador, `curl`) y servidor web. Es **stateless**: cada petición es independiente. Puerto por defecto: **80**. Los mensajes viajan en **texto plano** (sin cifrado TLS).

#### Para qué sirve / Por qué importa

HTTP es el lenguaje con el que el navegador pide `index.html`, APIs JSON, imágenes y CSS. Al desplegar en hosting, el servidor debe responder correctamente en el puerto 80 (o redirigir a 443). Entender HTTP ayuda a diagnosticar errores 404, 500 y cabeceras de caché.

#### Cómo funciona

1. Cliente abre conexión **TCP** al puerto 80 del servidor.
2. Envía una **request** (método, ruta, cabeceras, cuerpo opcional).
3. Servidor procesa y devuelve **response** (código de estado, cabeceras, cuerpo).
4. Conexión puede cerrarse o reutilizarse (HTTP/1.1 keep-alive, HTTP/2 multiplexado).

#### Estructura / Composición

**Request:**

<!-- code: http -->
```http
GET /index.html HTTP/1.1
Host: tienda.com.co
User-Agent: curl/8.5.0
Accept: text/html
Connection: close
```

**Response:**

<!-- code: http -->
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1234

<!DOCTYPE html>...
```

Versiones comunes: HTTP/1.1, HTTP/2 (multiplexación), HTTP/3 (sobre QUIC). En esta lección el foco es HTTP como transporte de la aplicación web en hosting; métodos detallados (GET, POST, PUT…) se profundizan en POSW `http-metodos-status`.

#### Ventajas y desventajas

HTTP es simple de depurar (mensajes legibles) y universal: todo hosting lo soporta. Sin cifrado, credenciales y cookies son visibles en la red; es vulnerable a interceptación en Wi-Fi pública. Aceptable en `localhost` para desarrollo; **no** aceptable en producción para datos sensibles.

| Ventajas | Desventajas |
|----------|-------------|
| Simple de depurar (mensajes legibles) | Sin cifrado: credenciales visibles en red |
| Universal; todo hosting lo soporta | Vulnerable a interceptación en Wi-Fi pública |
| Aceptable en `localhost` para desarrollo | No aceptable en producción para datos sensibles |

#### Ejemplo concreto

Tras subir archivos al hosting, el estudiante prueba la respuesta del servidor:

<!-- code: bash -->
```bash
curl -v http://miempresa.com.co/
# Debe devolver HTTP/1.1 200 OK (o 301 si redirige a HTTPS)
```

#### Señales de buen y mal uso

| Buen uso | Mal uso |
|----------|---------|
| HTTP solo en desarrollo local | Login o pagos por HTTP en producción |
| Redirigir todo HTTP→HTTPS en hosting real | Servir sitio mixto: página HTTPS con API HTTP |
| Revisar códigos de estado al desplegar | Asumir que «carga en el navegador» = configuración correcta |

---

### 4) HTTPS: HTTP sobre TLS

**Sección TSX:** `HttpHttpsSection` (continuación)

#### Qué es

**HTTPS** es **HTTP ejecutándose sobre una capa de cifrado TLS**. Puerto por defecto: **443**. La URL usa el esquema `https://`. El navegador muestra candado cuando el certificado es válido y confiable.

#### Para qué sirve / Por qué importa

Protege **confidencialidad** (nadie lee el tráfico en tránsito), **integridad** (detecta alteraciones) y **autenticación del servidor** (el sitio es quien dice ser, no un impostor). Google penaliza sitios sin HTTPS en SEO; navegadores marcan HTTP como «No seguro». En LATAM, pasarelas de pago y bancos exigen HTTPS para integraciones.

#### Cómo funciona

1. Cliente conecta por TCP al puerto **443**.
2. **Handshake TLS** negocia versión, cifrados y claves; servidor presenta **certificado**.
3. Navegador valida certificado contra CAs de confianza.
4. Canal cifrado establecido → mensajes **HTTP idénticos en semántica** pero cifrados en la red.
5. Servidor web (Nginx/Apache) termina TLS y pasa la request HTTP al backend.

#### Relación con HTTP

HTTPS **no reemplaza** HTTP como protocolo de aplicación; lo **envuelve** con TLS. Una vez establecido el túnel, el servidor sigue hablando HTTP internamente.

| Aspecto | HTTP | HTTPS |
|---------|------|-------|
| Semántica | GET, POST, headers, códigos | **La misma** |
| Puerto | 80 | 443 |
| Cifrado | No | Sí (TLS debajo) |
| Certificado | No requerido | Requerido (CA o Let's Encrypt) |
| URL | `http://` | `https://` |

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph HTTP_only [Sitio solo HTTP — puerto 80]\n    H1[Mensajes HTTP texto plano]\n    T1[TCP]\n    H1 --> T1\n  end\n  subgraph HTTPS_site [Sitio HTTPS — puerto 443]\n    H2[Mensajes HTTP misma semántica]\n    TLS[TLS 1.2/1.3 cifrado]\n    T2[TCP]\n    H2 --> TLS --> T2\n  end"
}

#### Estructura / Composición en el hosting

- Certificado (`.crt` / fullchain)
- Clave privada (`.key`, nunca pública)
- Cadena intermedia (CA bundle)
- Configuración virtual host (Nginx `listen 443 ssl`)
- Regla redirect 80→443

#### Ventajas y desventajas

HTTPS protege en tránsito y genera confianza del usuario; Let's Encrypt es gratuito. Los certificados deben renovarse (~90 días con LE); configuración incorrecta produce errores de cadena; hay overhead mínimo de handshake (mitigado con TLS 1.3).

#### Ejemplo concreto

Migración de hosting: tras copiar archivos, el sitio carga por HTTP pero no HTTPS. En cPanel → SSL/TLS → AutoSSL, o con certbot en VPS. Luego regla Nginx:

<!-- code: nginx -->
```nginx
server {
    listen 80;
    server_name tienda.com.co www.tienda.com.co;
    return 301 https://$host$request_uri;
}
```

Misma semántica HTTP, cifrada en red:

<!-- code: http -->
```http
GET /api/productos HTTP/1.1
Host: tienda.com.co
Accept: application/json
# Viaja cifrado por TLS 1.3 tras el handshake
```

#### Señales de buen y mal uso

| Buen uso | Mal uso |
|----------|---------|
| HTTPS en todo el sitio; HSTS en prod madura | Certificado vencido sin cron `certbot renew` |
| Renovar antes de 30 días al vencimiento | Mixed content: imágenes `http://` en página HTTPS |
| Probar con SSL Labs o `curl -vI https://...` | Instalar cert solo en `www` y olvidar apex |

<!-- interactive: Callout -->
{
  "title": "Caso real: migración Lima — «No seguro»",
  "children": "Consultora migra WordPress a nuevo VPS. Sitio carga por HTTP; clientes reportan «No seguro» y formulario no envía (mixed content + cert autofirmado). Resolución: certbot --nginx, URLs en BD a HTTPS, redirect 80→443."
}

---

### 5) SSL y TLS: certificados y versiones

**Sección TSX:** `SslTlsSection`

#### Qué es

- **SSL** (Secure Sockets Layer): protocolo de cifrado histórico (Netscape, SSL 2.0/3.0). **Obsoleto** por vulnerabilidades (POODLE, etc.).
- **TLS** (Transport Layer Security): sucesor estandarizado por IETF (TLS 1.0 → 1.3). Es lo que realmente usa **HTTPS** hoy.

En la industria se dice coloquialmente «certificado SSL», pero técnicamente se instala **TLS 1.2 o 1.3**.

#### Para qué sirve / Por qué importa

TLS cifra el canal entre cliente y servidor. Sin TLS válido, hosting y correo (SMTP/IMAP con SSL) quedan expuestos. Proveedores y estándares (PCI-DSS, OWASP) exigen TLS moderno; SSL 3.0 y TLS 1.0/1.1 están deprecados desde 2020.

#### Cómo funciona (handshake TLS 1.3 simplificado)

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant B as Navegador\n  participant S as Servidor hosting\n  B->>S: ClientHello TLS 1.3\n  S->>B: ServerHello + Certificate\n  B->>B: Valida CA Let's Encrypt\n  B->>S: Finished\n  Note over B,S: Canal cifrado\n  B->>S: GET / (HTTP cifrado)\n  S->>B: 200 OK (cifrado)"
}

1. **ClientHello** — versiones y cipher suites soportadas.
2. **ServerHello + Certificate** — elige parámetros y envía certificado.
3. **Finished** — ambas partes confirman; canal simétrico activo.
4. Tráfico HTTP cifrado sobre ese canal.

#### Diferencias SSL vs TLS

| Criterio | SSL (2.0/3.0) | TLS (1.2/1.3) |
|----------|---------------|---------------|
| Estado 2025 | **Prohibido** | **Aceptable** (1.2/1.3) |
| Handshake | Más lento, cifrados débiles | 1.3: 1-RTT, PFS obligatorio |
| Estándar | Propietario / obsoleto | IETF RFC 8446 (1.3) |
| En paneles hosting | Opción «SSL» suele mean TLS | Configurar mínimo TLS 1.2 |

#### Estructura / Composición del certificado

- **Sujeto (CN/SAN):** dominios cubiertos (`ejemplo.com`, `www.ejemplo.com`)
- **Emisor:** CA (Let's Encrypt, DigiCert, etc.)
- **Validez:** fechas notBefore / notAfter
- **Clave pública** del servidor + firma de la CA
- **Clave privada** guardada solo en el servidor

#### Validación al emitir (Let's Encrypt)

| Método | Cómo funciona |
|--------|---------------|
| **HTTP-01** | Archivo en `/.well-known/acme-challenge/` |
| **DNS-01** | Registro TXT `_acme-challenge.dominio` |
| **Email** | Menos común en automatización |

#### Ventajas y desventajas

TLS 1.2/1.3 con Let's Encrypt es gratis, con renovación automatizable y confianza del navegador. SSL obsoleto tiene vulnerabilidades conocidas; certificado autofirmado en producción muestra advertencia roja al usuario.

#### Ejemplo concreto

<!-- code: bash -->
```bash
# Instalar y obtener certificado (VPS con Nginx, Ubuntu)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d ong.org.co -d www.ong.org.co

# Verificar renovación automática
sudo certbot renew --dry-run

# Comprobar versión TLS negociada
openssl s_client -connect ong.org.co:443 -tls1_2 </dev/null 2>/dev/null | grep Protocol
```

#### Señales de buen y mal uso

| Buen uso | Mal uso |
|----------|---------|
| TLS 1.2+ únicamente; deshabilitar SSLv3 | Panel con «SSL 3.0» habilitado «por compatibilidad» |
| Cron semanal `certbot renew` | Cert vencido en Black Friday sin monitor |
| Cadena completa (fullchain.pem) | Instalar solo `.crt` sin intermediarios → error en móviles |

---

### 6) Instalación HTTPS: certbot, redirect y renovación

**Sección TSX:** `ProtocolosHttpsSection`

#### Qué es

El bloque operativo que transforma un sitio HTTP en HTTPS de producción: obtener certificado, configurar el servidor web, forzar redirect y automatizar renovación.

#### Para qué sirve / Por qué importa

Un certificado instalado una sola vez sin cron de renovación deja el sitio «No seguro» a los ~90 días (Let's Encrypt). Sin redirect 80→443, usuarios y buscadores siguen entrando por HTTP. Sin cadena completa, algunos clientes (móviles) fallan aunque desktop «funcione».

#### Cómo funciona

<!-- interactive: StepReveal -->
{
  "title": "Certificado Let's Encrypt",
  "steps": [
    {
      "title": "1. Validación",
      "content": "HTTP-01: archivo en /.well-known/acme-challenge/ — o DNS-01: TXT _acme-challenge.dominio"
    },
    {
      "title": "2. Emisión e instalación",
      "content": "certbot --nginx o panel AutoSSL. Guardar fullchain.pem y privkey.pem."
    },
    {
      "title": "3. Redirect HTTP→HTTPS",
      "content": "Regla en Nginx o .htaccess para que todo el tráfico use puerto 443."
    },
    {
      "title": "4. Renovación automática",
      "content": "Cron certbot renew; probar con certbot renew --dry-run antes de confiar."
    }
  ]
}

#### Ejemplo: Nginx completo SSL + redirect

<!-- code: nginx -->
```nginx
server {
    listen 443 ssl http2;
    server_name tienda.com.co;
    ssl_certificate     /etc/letsencrypt/live/tienda.com.co/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tienda.com.co/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    root /var/www/tienda.com.co;
}

server {
    listen 80;
    server_name tienda.com.co;
    return 301 https://$host$request_uri;
}
```

#### Ejemplo: Apache (.htaccess)

<!-- code: apache -->
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

#### Señales de buen y mal uso

| Buen uso | Mal uso |
|----------|---------|
| `certbot renew --dry-run` tras configurar cron | Descubrir cron roto el día del vencimiento |
| HTTPS en apex y www | Cert solo en www, apex sin cubrir |
| Actualizar URLs en BD tras migración | Mixed content por imágenes `http://` hardcodeadas |

---

### 7) Correo corporativo: MX, SPF, DKIM, IMAP/SMTP

**Sección TSX:** `CorreoCorporativoSection`

#### Qué es

**Correo corporativo** usa direcciones `@tudominio.com` (no `@gmail.com`) gestionadas por un proveedor (Google Workspace, Microsoft 365, Zoho, cPanel del hosting). La entrega y autenticidad dependen de registros **DNS** y protocolos de acceso **IMAP** (entrada) y **SMTP** (salida).

#### Para qué sirve / Por qué importa

Transmite profesionalismo (`ventas@empresa.co`), centraliza buzones al crecer el equipo y permite políticas de seguridad (2FA, retención, DLP). Sin MX/SPF/DKIM correctos, el correo llega a spam o se pierde al migrar proveedores — error frecuente en PYMEs LATAM.

#### Cómo funciona

**Flujo de correo entrante:**

1. Remitente envía a `contacto@miempresa.com`.
2. DNS consulta registros **MX** del dominio → servidor de correo del proveedor.
3. Servidor receptor valida **SPF** (¿envía desde IP autorizada?) y **DKIM** (firma criptográfica del mensaje).
4. Mensaje se deposita en buzón; usuario lo lee vía webmail o **IMAP**.

**Flujo de correo saliente:**

1. Cliente (Outlook, Thunderbird) usa **SMTP** autenticado al proveedor.
2. Proveedor firma con **DKIM** y envía respetando **SPF**.

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant R as Remitente\n  participant DNS as DNS MX\n  participant M as Servidor correo Zoho/Google\n  participant U as Usuario IMAP\n  R->>DNS: ¿MX de miempresa.org.co?\n  DNS-->>R: mx.zoho.com prioridad 10\n  R->>M: SMTP entrega mensaje\n  M->>M: Verifica SPF/DKIM del remitente\n  U->>M: IMAP 993 lee bandeja"
}

#### Estructura / Composición de registros DNS

##### MX (Mail Exchange)

Indica **qué servidor recibe** correo para el dominio. Prioridad numérica menor = preferido.

<!-- code: dns -->
```dns
; Zoho Mail — ejemplo ONG .org.co
miempresa.org.co.  3600  IN  MX  10  mx.zoho.com.
miempresa.org.co.  3600  IN  MX  20  mx2.zoho.com.
```

##### SPF (Sender Policy Framework)

Registro **TXT** que lista servidores autorizados para enviar correo **por tu dominio**.

<!-- code: dns -->
```dns
miempresa.org.co.  3600  IN  TXT  "v=spf1 include:zoho.com ~all"
```

- `include:` delega en otro dominio (Google, Zoho).
- `~all` softfail para no autorizados; `-all` hardfail (más estricto).

##### DKIM (DomainKeys Identified Mail)

Registro **TXT** con clave pública; el proveedor firma cada mensaje saliente con la clave privada. Receptores verifican integridad y origen.

<!-- code: dns -->
```dns
; Nombre típico: selector._domainkey.dominio
zmail._domainkey.miempresa.org.co.  3600  IN  TXT  "v=DKIM1; k=rsa; p=MIGfMA0GCSq..."
```

##### IMAP y SMTP (acceso del usuario)

| Protocolo | Rol | Puertos típicos |
|-----------|-----|-----------------|
| **IMAP** | Sincroniza bandeja, carpetas, leído/no leído | 993 (SSL/TLS) |
| **SMTP** | Envía correo saliente | 587 (STARTTLS) o 465 (SSL) |

<!-- code: text -->
```text
IMAP entrante: imap.gmail.com:993 (SSL) — usuario: contacto@miempresa.com
SMTP saliente: smtp.gmail.com:587 (STARTTLS) — autenticación obligatoria
Contraseña: de aplicación si hay 2FA (no la personal)
```

#### Tipos / Variantes de proveedor

| Proveedor | Perfil | Nota LATAM |
|-----------|--------|------------|
| Google Workspace | Integración Gmail, Drive | Facturación USD; dominio .com.co común |
| Microsoft 365 | Outlook, Teams | Común en empresas con licencias M365 |
| Zoho Mail | Económico para ONG/startup | Plan gratuito limitado; popular en ONG |
| cPanel del hosting | Incluido en compartido | Menos features; SPF/DKIM manual |

#### Ventajas y desventajas

Correo en proveedor dedicado (Google/Zoho) ofrece mejor entregabilidad y antispam, con DKIM/SPF guiados en panel. Correo solo en hosting compartido tiene límites de envío bajos y más riesgo de listas negras compartidas; al migrar el sitio es fácil olvidar los MX.

#### Ejemplo concreto: migración a Zoho

ONG en Cali migra de correo del hosting a Zoho Mail:

1. Crear cuenta Zoho y verificar dominio (TXT).
2. **Antes de cambiar MX:** exportar buzones antiguos.
3. Actualizar MX a Zoho; esperar propagación (TTL, hasta 48 h).
4. Añadir SPF y DKIM desde panel Zoho.
5. Configurar IMAP/SMTP en celulares del equipo.

Registros DNS completos de ejemplo:

<!-- code: dns -->
```dns
; Verificación dominio
miempresa.org.co.     IN TXT "zoho-verification=zb12345678.zmverify.zoho.com"

; Correo entrante
miempresa.org.co.     IN MX 10 mx.zoho.com.
miempresa.org.co.     IN MX 20 mx2.zoho.com.

; Autenticación envío
miempresa.org.co.     IN TXT "v=spf1 include:zoho.com ~all"
zmail._domainkey.miempresa.org.co. IN TXT "v=DKIM1; k=rsa; p=MIIBIjAN..."
```

Diagnóstico:

<!-- code: bash -->
```bash
dig MX miempresa.org.co +short
dig TXT miempresa.org.co +short | grep spf
dig TXT zmail._domainkey.miempresa.org.co +short
```

<!-- interactive: StepReveal -->
{
  "title": "Configuración correo corporativo",
  "steps": [
    {
      "title": "1. Elegir proveedor",
      "content": "Google Workspace, Zoho, M365 o cPanel según presupuesto y features."
    },
    {
      "title": "2. Verificar dominio",
      "content": "Registro TXT de verificación en DNS antes de activar buzones."
    },
    {
      "title": "3. Configurar MX",
      "content": "Un solo conjunto de MX activo. Eliminar MX del proveedor anterior."
    },
    {
      "title": "4. SPF y DKIM",
      "content": "TXT SPF con include del proveedor; DKIM con selector del panel."
    },
    {
      "title": "5. Buzones e IMAP/SMTP",
      "content": "Crear usuarios; configurar clientes con puertos 993/587 y contraseña de aplicación si hay 2FA."
    }
  ]
}

<!-- interactive: Callout -->
{
  "title": "Caso real: ONG Bogotá — MX duplicados",
  "children": "fundacionejemplo.org.co configuró MX de Zoho pero dejó MX del hosting con prioridad 10. Mitad del correo a info@ nunca llegó dos semanas. Resolución: eliminar MX viejos, un solo par Zoho, SPF include:zoho.com, DKIM del panel."
}

#### Señales de buen y mal uso

| Buen uso | Mal uso |
|----------|---------|
| Un solo conjunto de MX activo | MX duplicados de hosting viejo + Zoho → correo perdido |
| SPF + DKIM + DMARC (avanzado) alineados | SPF con demasiados `include` (>10 lookups) |
| Contraseñas de aplicación con 2FA | Usar contraseña personal en SMTP |
| Probar envío a Gmail y revisar cabeceras `Authentication-Results` | Cambiar MX sin avisar al equipo durante horario laboral |

<!-- interactive: Callout -->
{
  "title": "Registro A ≠ MX",
  "children": "El sitio web puede estar en una IP (registro A) y el correo en otro proveedor (MX distinto). Es correcto y habitual; hay que configurar cada registro por separado."
}

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué una tienda pequeña en Medellín podría empezar en hosting compartido y cuándo migraría a VPS? Menciona costo, tráfico y control.",
  "hints": ["Compartido es económico para poco tráfico", "VPS cuando necesitas root, cron o stack custom"],
  "expectedKeywords": ["compartido", "costo", "VPS", "tráfico", "control"],
  "successMessage": "Correcto. Compartido cubre MVPs y bajo tráfico; VPS cuando el control, el stack o el tráfico superan los límites del plan compartido."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Tras migrar hosting, el sitio muestra «No seguro». Lista al menos tres causas posibles relacionadas con TLS/HTTPS.",
  "hints": ["Certificado", "Redirect", "Mixed content"],
  "expectedKeywords": ["certificado", "vencido", "redirect", "mixed", "autofirmado"],
  "successMessage": "Correcto. Causas típicas: cert no instalado o vencido, sin redirect 80→443, mixed content, cert autofirmado o cadena incompleta."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Registros DNS de correo",
  "template": "El registro DNS que indica el servidor de correo entrante es ___; el que autoriza servidores de envío es ___ (tipo TXT).",
  "blanks": [
    { "id": "blank1", "answer": "MX", "placeholder": "tipo de registro entrante" },
    { "id": "blank2", "answer": "SPF", "placeholder": "framework de envío" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué pasaría si dejas registros MX del hosting viejo y del proveedor nuevo (Zoho/Google) al mismo tiempo?",
  "hints": ["Prioridad MX", "Reparto impredecible del correo entrante"],
  "expectedKeywords": ["reparte", "pierde", "duplicado", "prioridad"],
  "successMessage": "Correcto. El correo entrante se distribuye según prioridad MX de forma impredecible; parte se pierde o llega al buzón viejo."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena la configuración de correo corporativo con Google Workspace: (a) crear buzones (b) TXT verificación (c) contratar plan (d) registros MX (e) SPF y DKIM. Indica el orden correcto.",
  "hints": ["Primero contratar y verificar dominio", "MX antes o junto con buzones, SPF/DKIM al final"],
  "expectedKeywords": ["c", "b", "d", "e", "a"],
  "successMessage": "Correcto. Orden típico: (c) contratar → (b) TXT verificación → (d) MX → (e) SPF/DKIM → (a) crear buzones."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Comando certbot",
  "template": "sudo certbot --nginx -d ___ -d www.___",
  "blanks": [
    { "id": "blank1", "answer": "ejemplo.com", "placeholder": "dominio apex" },
    { "id": "blank2", "answer": "ejemplo.com", "placeholder": "mismo dominio para www" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué decimos «certificado SSL» pero debemos configurar TLS 1.2+?",
  "hints": ["SSL está obsoleto", "TLS es el sucesor estándar"],
  "expectedKeywords": ["SSL", "obsoleto", "TLS", "IETF"],
  "successMessage": "Correcto. «SSL» es lenguaje coloquial heredado; técnicamente HTTPS usa TLS 1.2/1.3. SSL 2.0/3.0 está prohibido por vulnerabilidades."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**«Lanza la presencia digital de `artesaniasdelcaribe.co`»**

Contexto: cooperativa en Cartagena vende artesanías. Tienen dominio `.co`, presupuesto limitado y 3 personas que necesitan correo `@artesaniasdelcaribe.co`.

**Entregables que debes proponer:**

1. **Tipo de hosting** justificado (tráfico bajo, catálogo WordPress, presupuesto PYME).
2. **Pasos de despliegue:** DNS (A/NS), subida archivos, BD, HTTPS.
3. **Proveedor de correo** (Zoho/Google/hosting) con registros **MX**, **SPF** y **DKIM** de ejemplo.
4. **Configuración IMAP/SMTP** para la gerente en Outlook móvil.
5. **Plan TLS:** Let's Encrypt, redirect HTTP→HTTPS, cron renovación.
6. **Un riesgo** si mezclan MX viejos al migrar y **cómo evitarlo**.

**Criterio de éxito:** hosting coherente con escala, HTTPS completo, correo con autenticación DNS correcta, sin MX duplicados, al menos un comando `certbot` o paso de panel SSL.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Para artesaniasdelcaribe.co, redacta en 5–8 líneas: tipo de hosting elegido, proveedor de correo, un registro MX de ejemplo y el comando certbot (o paso de panel) para HTTPS.",
  "hints": ["Compartido + WordPress", "Zoho o Google para 3 usuarios", "Un solo par MX", "certbot --nginx"],
  "expectedKeywords": ["compartido", "MX", "SPF", "certbot", "HTTPS"],
  "successMessage": "Revisa tu propuesta: hosting acorde al tráfico, MX únicos, SPF/DKIM y plan TLS con renovación."
}

---

## Cierre

**Sección TSX:** `CierreSection`

### Resumen

- **Hosting** publica el sitio 24/7; conecta DNS (clase 1) con archivos en servidor y puertos 80/443.
- **Tipos:** compartido (económico), VPS (control), dedicado (alto tráfico), nube (escala elástica). Elegir según tráfico, presupuesto y habilidades.
- **HTTP** (puerto 80, texto plano) sirve la aplicación web; **HTTPS** envuelve la misma semántica con **TLS** en puerto 443.
- **SSL** está obsoleto; en producción usar **TLS 1.2+** con Let's Encrypt y renovación automatizada.
- **Correo corporativo** requiere **MX** (entrada), **SPF** y **DKIM** (autenticación de envío), más **IMAP/SMTP** en clientes.
- **Errores frecuentes:** MX duplicados al migrar, certificado vencido, FTP plano, mixed content, confundir registro A del sitio con MX del correo.
- **Siguiente clase:** `clase-03-administracion-remota` — SSH, SFTP y paneles de nube.

### Miniquiz

**Sección TSX:** `MiniquizSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué registro DNS dirige el correo entrante a un servidor?",
      "options": ["A", "CNAME", "MX", "NS"],
      "correctIndex": 2,
      "feedback": "MX (Mail Exchange) indica qué servidor recibe correo para el dominio; prioridad menor = preferido."
    },
    {
      "question": "¿Qué tipo de hosting comparte CPU, RAM y disco con otros sitios en el mismo servidor?",
      "options": ["Dedicado", "VPS", "Compartido", "Bare metal exclusivo"],
      "correctIndex": 2,
      "feedback": "En hosting compartido varios sitios coexisten en una misma máquina; es económico pero con recursos compartidos."
    },
    {
      "question": "¿Cuál es la relación correcta entre HTTP y HTTPS?",
      "options": [
        "HTTPS es un protocolo distinto que reemplaza los métodos GET y POST",
        "HTTPS es HTTP con la misma semántica, cifrado por TLS en el puerto 443",
        "HTTP es más seguro porque no usa certificados",
        "Solo HTTPS puede servir archivos HTML"
      ],
      "correctIndex": 1,
      "feedback": "HTTPS envuelve HTTP con TLS; métodos y cabeceras son los mismos, el canal de red va cifrado."
    },
    {
      "question": "¿Qué registro TXT ayuda a que receptores confíen en que tu servidor está autorizado para enviar correo por tu dominio?",
      "options": ["AAAA", "SPF (v=spf1 ...)", "CNAME", "PTR"],
      "correctIndex": 1,
      "feedback": "SPF lista servidores autorizados para enviar; sin él, Gmail/Outlook pueden marcar como spam o spoofing."
    },
    {
      "question": "¿Qué debes renovar periódicamente al usar Let's Encrypt en producción?",
      "options": [
        "El dominio en el registrador cada mes",
        "El certificado TLS (cada ~90 días; automatizar con certbot renew)",
        "La IP pública del router doméstico",
        "La contraseña del navegador"
      ],
      "correctIndex": 1,
      "feedback": "Let's Encrypt emite certificados de 90 días; un cron de renovación evita el candado roto y caída de confianza."
    }
  ]
}

**Pregunta bonus (reflexión):** ¿Por qué no debes dejar registros MX del proveedor anterior al migrar a Google Workspace? — Porque el correo entrante se reparte impredeciblemente y parte se pierde o va al buzón viejo.
