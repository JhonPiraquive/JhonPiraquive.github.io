---
track: configuracion-servicios-web
slug: clase-03-administracion-remota
title: "Administración remota y computación en la nube"
order: 3
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
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** los principios de computación en la nube (NIST) y **distinguir** IaaS, PaaS y SaaS con ejemplos reales y criterio de elección.
- **Describir** el modelo cliente-servidor aplicado a administración remota: quién inicia la conexión, qué protocolo usa y qué servicio escucha.
- **Comparar** FTP, SFTP y SSH: puertos, cifrado, casos de uso y por qué FTP plano no debe usarse en producción.
- **Configurar** acceso remoto con SSH (claves, `authorized_keys`, hardening básico) y transferir archivos con SFTP/FileZilla.
- **Elegir** la herramienta adecuada de administración remota (PuTTY, FileZilla, cPanel, RDP, VNC) según el escenario y aplicar buenas prácticas de seguridad.

## Prerrequisitos

- **`clase-01-fundamentos-web`:** direccionamiento IP, DNS y modelo cliente-servidor básico.
- **`clase-02-hosting-correo-https`:** tipos de hosting, TLS/HTTPS y servicios web en producción.
- **Lecciones POSW relacionadas:** `modelo-cliente-servidor` (roles y puertos), `protocolos-seguridad` (cifrado y autenticación).

## Contenido

### Introducción

**Sección TSX:** `ObjetivosSection`

La mayoría de equipos en LATAM no están físicamente junto al servidor: el hosting puede estar en Miami, São Paulo o Bogotá vía partners, mientras el desarrollador opera desde Cali, Lima o Ciudad de México. Esta lección conecta la **computación en la nube** con los **protocolos y herramientas** que hacen posible esa operación remota de forma segura.

<!-- interactive: Callout -->
{
  "title": "Administración remota = canal operativo 24/7",
  "children": "Sin SSH, SFTP o paneles web no podrías desplegar código, revisar logs ni responder incidentes fuera del horario de oficina. Elegir protocolo y herramienta correctos es tan importante como elegir el hosting."
}

---

### 1. Computación en la nube

**Sección TSX:** `NubeSection`

#### Qué es

La **computación en la nube** es la entrega bajo demanda de recursos de TI — servidores, almacenamiento, bases de datos, redes y software — a través de Internet. El usuario paga por consumo, obtiene provisión casi instantánea y **no administra físicamente** el hardware del datacenter.

#### Para qué sirve / Por qué importa

Permite a startups, agencias y equipos de desarrollo en LATAM lanzar servicios sin comprar servidores en un datacenter local. Un desarrollador en Cali puede desplegar una API en DigitalOcean (Virginia o São Paulo) en minutos, pagando solo las horas de uso. Esto transforma inversión inicial en hardware (CapEx) en gasto operativo medido (OpEx).

#### Cómo funciona

El proveedor cloud opera datacenters regionales. El cliente crea recursos vía panel web o API (CLI, Terraform). La red pública o privada (VPC) conecta instancias, balanceadores y almacenamiento. La facturación se basa en consumo medido: horas de VM, GB almacenados, requests HTTP, tráfico de salida.

#### Estructura / Composición — Principios NIST (esenciales)

Los cinco principios esenciales de la definición NIST definen qué hace «cloud» en la práctica:

| Principio | Significado en la práctica |
|-----------|---------------------------|
| **Autoservicio bajo demanda** | Crear una VM o bucket S3 sin abrir ticket al proveedor |
| **Acceso amplio por red** | Administrar desde laptop, oficina o café vía Internet |
| **Agrupación de recursos (pooling)** | Tu VM comparte físico con otros clientes; tú ves recursos lógicos aislados |
| **Elasticidad rápida** | Escalar de 1 a 10 instancias en pico de ventas y reducir después |
| **Servicio medido** | Dashboard de costos por hora, GB o request |

Cada principio tiene implicación directa en administración remota: el autoservicio implica que **tú** abres puertos y configuras SSH; el acceso por red implica que esos puertos deben estar protegidos.

#### Ventajas y desventajas

**Ventajas:** sin inversión inicial en hardware; escala global con regiones en Miami, São Paulo o Bogotá vía partners; alta disponibilidad y backups gestionados por el proveedor; actualizaciones de infraestructura sin downtime físico en tu oficina.

**Desventajas:** costos pueden crecer sin control de presupuesto si no hay alertas; dependencia parcial del proveedor (vendor lock-in); latencia si el datacenter está lejos del usuario final colombiano; curva de aprendizaje en IAM, redes y seguridad cloud.

#### Ejemplo concreto

Una fintech en Medellín migra su API de un servidor en oficina a AWS EC2 en `us-east-1`. Durante el día escala de `t3.small` a `t3.medium`; los fines de semana reduce instancias y ahorra aproximadamente un 40 % en compute. La administración diaria — logs, deploys, reinicios — se hace por SSH desde las laptops del equipo.

#### Señales de buen y mal uso

- **Buen uso:** elegir región cercana a usuarios LATAM, etiquetar recursos para facturación, alertas de presupuesto, backups automatizados, SSH con claves y firewall restrictivo.
- **Mal uso:** dejar instancias 24/7 sin uso, credenciales root en repositorio Git, puertos de administración abiertos a `0.0.0.0/0`.

---

### 2. IaaS, PaaS y SaaS

**Sección TSX:** `NubeSection` (continuación)

#### Qué es

Los modelos de servicio cloud definen **qué capas gestiona el proveedor** y **qué gestiona el cliente**:

- **IaaS (Infrastructure as a Service):** infraestructura virtualizada — VMs, redes, discos.
- **PaaS (Platform as a Service):** plataforma para desplegar aplicaciones sin administrar SO ni runtime.
- **SaaS (Software as a Service):** aplicación lista para usar vía navegador o cliente ligero.

#### Para qué sirve / Por qué importa

Elegir mal el modelo genera sobrecarga operativa o falta de control. Un equipo que solo necesita hospedar un sitio estático no debería administrar un IaaS completo si un PaaS (Vercel, Netlify) resuelve el caso en minutos con `git push`.

#### Tipos / Variantes — Criterio de elección

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "IaaS", "PaaS", "SaaS"],
  "rows": [
    ["Ejemplos", "AWS EC2, DigitalOcean Droplet, Azure VM", "Heroku, Railway, Vercel, Render", "Google Workspace, Microsoft 365, Salesforce"],
    ["Tú gestionas", "SO, runtime, app, datos (parcial)", "App y datos; runtime parcial", "Solo configuración y datos de usuario"],
    ["Proveedor gestiona", "Hypervisor, red física, hardware", "SO, parches, escalado de plataforma", "Todo el stack de aplicación"],
    ["Control", "Máximo", "Medio", "Mínimo"],
    ["Velocidad de despliegue", "Lenta (VM, firewall, SSH)", "Rápida (git push)", "Inmediata (registro y uso)"]
  ]
}

#### Cuándo elegir cada uno

- **IaaS:** necesitas control total — firewall custom, múltiples servicios en una VM, compliance estricto, VPN site-to-site.
- **PaaS:** equipo pequeño que despliega API o frontend sin querer parchear Linux ni configurar Nginx manualmente.
- **SaaS:** correo corporativo, CRM, herramientas de productividad; no quieres operar el software.

#### Ejemplo concreto (LATAM)

| Escenario | Modelo recomendado | Por qué |
|-----------|-------------------|---------|
| Agencia en Bogotá con WordPress en hosting compartido + cPanel | SaaS / hosting gestionado | Panel y stack ya administrados por el proveedor |
| Startup Node.js que hace deploy desde GitHub | PaaS (Railway, Render) | Sin administrar servidor ni SSH diario |
| Banco con política de hardening propio en RHEL | IaaS (VM dedicada en cloud) | Control de SO y auditoría |

#### Señales de buen y mal uso

- **Buen uso:** PaaS para MVP; IaaS cuando el contrato exige control de SO; SaaS para correo y colaboración.
- **Mal uso:** IaaS para un blog estático de 3 páginas; PaaS para cargas que requieren kernel custom; SaaS para datos ultra-sensibles sin evaluar residencia y cifrado.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  START[Nuevo proyecto web] --> Q1{¿Necesitas control total del SO?}\n  Q1 -->|Sí| IaaS[IaaS — EC2, Droplet]\n  Q1 -->|No| Q2{¿Solo usar software listo?}\n  Q2 -->|Sí| SaaS[SaaS — Workspace, M365]\n  Q2 -->|No| PaaS[PaaS — Railway, Vercel, Heroku]"
}

---

### 3. Modelo cliente-servidor en administración remota

**Sección TSX:** `ModeloClienteServidorRemotoSection`

#### Qué es

Paradigma donde un **cliente** inicia solicitudes y un **servidor** escucha en un puerto y responde. En administración remota, tu laptop es casi siempre el cliente; el VPS o hosting es el servidor.

#### Para qué sirve / Por qué importa

Toda sesión SSH, transferencia SFTP o login en cPanel sigue este modelo. Entenderlo evita confusiones frecuentes: «¿por qué debo abrir el puerto 22 en el firewall del servidor y no en mi PC?» — porque el **servidor escucha**; el **cliente conecta hacia afuera**.

#### Cómo funciona

1. El **servidor** ejecuta un daemon (`sshd`, `vsftpd`, panel web en Apache/Nginx).
2. El daemon **escucha** en un puerto (22 SSH, 21 FTP, 443 HTTPS para cPanel).
3. El **cliente** (PuTTY, FileZilla, navegador) resuelve DNS/IP y abre conexión TCP.
4. Tras autenticación (clave, contraseña, MFA), el cliente envía comandos o peticiones; el servidor ejecuta y devuelve resultado.

#### Estructura / Composición

```
[Cliente: PuTTY / FileZilla / Navegador]
        │  TCP + protocolo (SSH / SFTP / HTTPS)
        ▼
[Servidor: VPS / hosting]
        ├── sshd (puerto 22)
        ├── vsftpd (puerto 21) — evitar en producción sin cifrar
        └── Apache/Nginx + cPanel (puerto 443)
```

#### Ejemplo concreto

Dev en Cali con IP dinámica de ISP → **cliente** SSH. VPS en DigitalOcean (IP fija `157.245.x.x`) → **servidor**. Comando: `ssh -i ~/.ssh/id_ed25519 deploy@157.245.x.x`. El cliente inicia; `sshd` acepta si la clave pública está en `~/.ssh/authorized_keys`.

#### Señales de buen y mal uso

- **Buen uso:** identificar siempre cliente vs servidor al diagnosticar «connection refused» (servicio no escucha o firewall bloquea en el servidor).
- **Mal uso:** abrir puertos en el router de casa pensando que eso «habilita SSH al servidor» — es al revés: el servidor debe permitir entrada en el puerto correspondiente.

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant Dev as Cliente (laptop Cali)\n  participant VPS as Servidor (cloud)\n  Dev->>VPS: TCP 22 — handshake SSH\n  Dev->>VPS: Autenticación (clave pública)\n  VPS-->>Dev: Sesión shell o subsistema SFTP\n  Dev->>VPS: put index.html / chmod / systemctl reload nginx\n  VPS-->>Dev: OK + salida comando"
}

---

### 4. FTP (File Transfer Protocol)

**Sección TSX:** `FtpSection`

#### Qué es

Protocolo de aplicación (capa 7) para **transferir archivos** entre hosts, definido originalmente en los años 70. Usa **puerto 21** para control (comandos) y **puerto 20** (modo activo) o puertos dinámicos altos (modo pasivo) para datos.

#### Para qué sirve / Por qué importa

Históricamente fue el estándar para subir sitios a hosting compartido. Hoy se encuentra en legado y paneles antiguos, pero **no debe usarse en producción** sin cifrado: usuario y contraseña viajan en texto plano, interceptables en redes no confiables.

<!-- interactive: Callout -->
{
  "title": "FTP plano: no en producción",
  "children": "FTP sin TLS envía credenciales y contenido sin cifrar. En Wi‑Fi público, cyber o ISP compartido un atacante puede capturar usuario y contraseña. Usa SFTP (puerto 22) o FTPS en cualquier entorno real."
}

#### Cómo funciona — Modo activo vs pasivo

**Modo activo (Active):**

1. Cliente conecta al puerto **21** del servidor (canal de control).
2. Cliente informa su IP y un puerto local alto (ej. 50001) con comando `PORT`.
3. El **servidor** inicia conexión de datos desde puerto **20** hacia el puerto del cliente.
4. Problema: firewalls y NAT del cliente bloquean la conexión entrante del servidor → fallos frecuentes en redes domésticas LATAM.

**Modo pasivo (Passive):**

1. Cliente conecta al puerto **21** (control).
2. Servidor responde con `PASV` e indica IP + puerto alto propio (ej. 50000–51000).
3. El **cliente** inicia la segunda conexión hacia ese puerto del servidor.
4. Funciona mejor detrás de NAT porque **ambas conexiones las inicia el cliente**.

#### Estructura / Composición

| Canal | Puerto típico | Contenido |
|-------|---------------|-----------|
| Control | 21 | USER, PASS, LIST, RETR, STOR |
| Datos (activo) | 20 → puerto cliente | Archivo o listado |
| Datos (pasivo) | 50000+ en servidor | Archivo o listado |

#### Ventajas y desventajas

**Ventajas:** ampliamente soportado en hosting antiguo; clientes gráficos maduros (FileZilla); modo pasivo atraviesa NAT del cliente.

**Desventajas:** **sin cifrado** en FTP plano; credenciales interceptables (sniffing en Wi‑Fi público); modo activo falla con firewalls estrictos; requiere abrir rango de puertos pasivos en el servidor.

#### Ejemplo concreto

Técnico en una cyber de Barranquilla usa FileZilla en modo **pasivo** contra `ftp.empresa.com.co:21`. Aunque la transferencia funcione, un atacante en la misma red podría capturar la contraseña. La decisión correcta es migrar a **SFTP puerto 22**.

#### Señales de buen y mal uso

- **Buen uso:** solo en laboratorio o red aislada; preferir SFTP/FTPS en cualquier entorno real.
- **Mal uso:** FTP plano sobre Internet para desplegar producción; dejar puerto 21 abierto a todo el mundo sin necesidad.

#### Visual: FTP activo vs pasivo

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente (FileZilla)\n  participant S as Servidor FTP\n  Note over C,S: MODO ACTIVO — canal CONTROL puerto 21\n  C->>S: Conexión TCP puerto 21\n  C->>S: USER / PASS\n  C->>S: PORT (IP cliente + puerto alto)\n  Note over C,S: Canal DATOS — servidor inicia desde puerto 20\n  S->>C: Conexión puerto 20 → puerto cliente\n  C-->>S: LIST / RETR"
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente (FileZilla)\n  participant S as Servidor FTP\n  Note over C,S: MODO PASIVO — canal CONTROL puerto 21\n  C->>S: Conexión TCP puerto 21\n  C->>S: USER / PASS\n  C->>S: PASV\n  S-->>C: IP servidor + puerto alto (ej. 50023)\n  Note over C,S: Canal DATOS — cliente inicia\n  C->>S: Conexión TCP a puerto 50023\n  C-->>S: STOR / RETR"
}

---

### 5. SFTP (SSH File Transfer Protocol)

**Sección TSX:** `SftpSection`

#### Qué es

Protocolo para **transferir y gestionar archivos** sobre un canal **cifrado SSH**. No confundir con **FTPS** (FTP + TLS). SFTP es subsistema de SSH en el **puerto 22** (por defecto).

#### Para qué sirve / Por qué importa

Es el método recomendado para subir código, plantillas de `.env`, backups y assets a un VPS o hosting que expone SSH. Cifra autenticación y contenido de archivos en un solo puerto, simplificando el firewall frente a FTP (21 + rango pasivo).

#### Cómo funciona

1. Cliente establece sesión **SSH** (handshake, intercambio de claves, autenticación).
2. Cliente solicita subsistema `sftp`.
3. Comandos (`put`, `get`, `ls`, `chmod`) viajan cifrados dentro del túnel SSH.
4. Un solo puerto (22) simplifica reglas de firewall.

#### Estructura / Composición

| Capa | Protocolo |
|------|-----------|
| Aplicación | SFTP (comandos de archivo) |
| Seguridad | SSH (cifrado simétrico + autenticación) |
| Transporte | TCP puerto 22 |

#### Ventajas y desventajas

**Ventajas:** cifrado extremo a extremo; misma clave SSH para terminal y archivos; auditoría centralizada en logs de `sshd`.

**Desventajas:** requiere SSH habilitado en servidor; hosting compartido a veces solo ofrece FTP legado; sin resume parcial estándar como algunos clientes FTP avanzados.

#### Ejemplo concreto

En FileZilla: Protocolo **SFTP**, host `vps.agencia.co`, puerto **22**, autenticación por **archivo de clave** (`id_ed25519`). Subir carpeta `dist/` de React a `/var/www/html`.

<!-- code: text -->
```
Protocolo: SFTP - SSH File Transfer Protocol
Host: vps.miempresa.co
Puerto: 22
Tipo de inicio de sesión: Archivo de clave
Usuario: deploy
Archivo de clave: /home/user/.ssh/id_ed25519
```

#### Señales de buen y mal uso

- **Buen uso:** claves SSH en lugar de contraseña; permisos `chmod 600` en clave privada; verificar que el sitio guardado en FileZilla dice **SFTP**, no FTP.
- **Mal uso:** elegir «FTP» en FileZilla por inercia; compartir la misma contraseña de cPanel y SFTP.

#### Comparativa FTP / SFTP / FTPS

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "FTP plano", "SFTP", "FTPS"],
  "rows": [
    ["Puerto típico", "21 (+ datos 20 o altos)", "22", "21 + TLS"],
    ["Cifrado", "No", "Sí (SSH)", "Sí (TLS sobre FTP)"],
    ["Autenticación", "USER/PASS texto claro", "Clave SSH o contraseña cifrada", "USER/PASS cifrado"],
    ["Uso recomendado", "Solo laboratorio", "Producción (VPS, cloud)", "Legado que exige FTP+TLS"]
  ]
}

---

### 6. SSH (Secure Shell)

**Sección TSX:** `SshSection`

#### Qué es

Protocolo de red para **acceso remoto seguro** a línea de comandos y túneles. Sustituye a Telnet (puerto 23, sin cifrar). La implementación libre más usada es **OpenSSH** (cliente y servidor).

#### Para qué sirve / Por qué importa

Administración de VPS, despliegues, revisión de logs, reinicio de servicios y copias con `scp`/`rsync` sobre SSH. Es la herramienta diaria del desarrollador backend en LATAM que opera servidores en Miami o São Paulo.

#### Cómo funciona

1. **TCP** al puerto 22 (o puerto custom).
2. **Handshake SSH:** intercambio de versiones y algoritmos.
3. **Verificación de host:** el servidor presenta huella (fingerprint); el cliente la compara con `known_hosts`.
4. **Autenticación:** clave pública (recomendado) o contraseña.
5. **Canal de sesión:** shell interactivo o comando remoto (`ssh user@host 'systemctl status nginx'`).

#### Estructura / Composición

| Componente | Ubicación | Rol |
|------------|-----------|-----|
| Clave privada | Cliente (`~/.ssh/id_ed25519`) | Nunca compartir |
| Clave pública | Servidor (`~/.ssh/authorized_keys`) | Identifica al cliente autorizado |
| `sshd` | Servidor | Daemon que escucha |
| `ssh` / PuTTY | Cliente | Inicia conexión |

#### Tipos / Variantes de cliente

- **OpenSSH** (Linux, macOS, Windows 10+ nativo)
- **PuTTY** (Windows clásico, `.ppk` convertible a OpenSSH)
- **WSL** (Ubuntu dentro de Windows, usa OpenSSH)

#### Ventajas y desventajas

**Ventajas:** cifrado fuerte y ampliamente auditado; port forwarding y túneles; estándar en cloud y CI/CD.

**Desventajas:** mal configurado expone brute force en puerto 22; gestión de claves en equipos rotativos requiere proceso; root login habilitado = riesgo crítico.

#### Ejemplo concreto — Generación y uso de claves

<!-- code: bash -->
```bash
# Generar par de claves Ed25519
ssh-keygen -t ed25519 -C "dev@cali.agencia.com" -f ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519

# Copiar clave pública al servidor (primera vez)
ssh-copy-id -i ~/.ssh/id_ed25519.pub deploy@157.245.80.42

# Conexión con clave explícita
ssh -i ~/.ssh/id_ed25519 deploy@157.245.80.42
```

#### Hardening básico en servidor

<!-- code: bash -->
```bash
# /etc/ssh/sshd_config — fragmentos recomendados
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
MaxAuthTries 3

sudo systemctl reload sshd
```

#### Copia segura de archivos (SCP sobre SSH)

<!-- code: bash -->
```bash
# Subir carpeta build al servidor
scp -i ~/.ssh/id_ed25519 -r ./dist/ deploy@157.245.80.42:/var/www/html/

# Descargar logs
scp deploy@157.245.80.42:/var/log/nginx/error.log ./error.log
```

#### Verificación de puertos en servidor

<!-- code: bash -->
```bash
# Ver qué escucha el servidor
sudo ss -tlnp | grep -E ':21|:22|:443'

# Prueba de conectividad SSH (verbose)
ssh -v deploy@servidor.ejemplo.co
```

#### Señales de buen y mal uso

- **Buen uso:** claves Ed25519, usuario no-root con `sudo`, `ufw allow 22/tcp` solo desde IP de oficina o VPN, fail2ban.
- **Mal uso:** contraseña `admin123`, root login, puerto 22 abierto a `0.0.0.0/0` sin rate limiting, subir clave privada al servidor o a GitHub.

#### Flujo SSH paso a paso

<!-- interactive: StepReveal -->
{
  "title": "De clave local a shell remoto",
  "steps": [
    { "title": "ssh-keygen", "content": "Generas par Ed25519 en el cliente. La privada queda en ~/.ssh/id_ed25519 (chmod 600); la pública en id_ed25519.pub." },
    { "title": "Registrar clave pública", "content": "Copias el contenido de .pub al servidor: panel cloud, ssh-copy-id o manualmente en ~/.ssh/authorized_keys del usuario deploy." },
    { "title": "ssh usuario@host", "content": "El cliente inicia TCP al puerto 22. Handshake SSH, verificación de fingerprint, autenticación con clave privada." },
    { "title": "Shell remoto", "content": "Sesión interactiva o comando único: revisar logs, reiniciar servicios, aplicar hardening." },
    { "title": "SFTP en FileZilla", "content": "Misma clave y puerto 22: protocolo SFTP para subir builds sin segundo canal ni FTP plano." }
  ]
}

#### Práctica: completar comando SSH

<!-- interactive: CodeChallenge -->
{
  "template": "ssh ___ ~/.ssh/id_ed25519 deploy@203.0.113.10",
  "blanks": [
    { "answer": "-i", "hint": "Flag para indicar archivo de clave privada" }
  ]
}

---

### 7. Administración remota — Herramientas y casos de uso

**Sección TSX:** `HerramientasAdminRemotaSection`

#### Qué es

Conjunto de **métodos y aplicaciones** para operar un servidor o hosting sin acceso físico al datacenter: terminal (SSH), transferencia de archivos (SFTP), escritorio remoto (RDP/VNC) y **paneles web** (cPanel, Plesk, paneles cloud).

#### Para qué sirve / Por qué importa

En LATAM, la mayoría de equipos no están junto al servidor: hosting en Miami, equipo en Ciudad de México o Lima. La administración remota es el único canal operativo 24/7 para deploys, soporte y respuesta a incidentes.

#### Tipos / Variantes — Cuándo usar cada herramienta

| Herramienta | Protocolo / canal | Para qué | Cómo se usa (resumen) |
|-------------|-------------------|----------|------------------------|
| **PuTTY** | SSH (22) | Terminal en Windows sin WSL | Host, puerto, clave `.ppk` o contraseña → sesión shell |
| **OpenSSH / terminal** | SSH | Terminal en Linux/macOS/WSL | `ssh user@host` |
| **FileZilla** | SFTP (22), evitar FTP plano | Subir/bajar archivos, permisos | Site Manager → SFTP → host, usuario, clave |
| **WinSCP** | SFTP/SCP | Similar a FileZilla en Windows | Sesión guardada con clave SSH |
| **cPanel** | HTTPS (443) | Hosting compartido: correo, DNS, archivos, BD | Navegador → login → File Manager / phpMyAdmin |
| **Plesk** | HTTPS (443) | Alternativa a cPanel en VPS | Panel web multi-sitio |
| **RDP** | 3389 | Escritorio Windows Server | Cliente Escritorio remoto → IP + credenciales |
| **VNC** | 5900+ | Escritorio Linux/GUI remoto | Viewer + contraseña VNC (menos seguro que SSH) |

#### Cómo funciona — Flujo típico agencia LATAM

1. **Sitio en hosting compartido:** cPanel para archivos y correo; sin SSH root.
2. **API en VPS DigitalOcean:** SSH (PuTTY/OpenSSH) para logs y `docker compose`; FileZilla SFTP para assets.
3. **Windows Server en Azure:** RDP para GUI; PowerShell remoto en entornos enterprise.

#### Ventajas y desventajas de paneles vs SSH

**Paneles (cPanel):** curva baja para no-devs; MFA y backups integrados a veces; limitado en hosting compartido.

**SSH + SFTP:** control total y scriptable; ideal para VPS y automatización; requiere conocimiento Linux.

#### Ejemplo concreto

Agencia en Medellín con clientes en hosting colombiano: diseñadores usan **cPanel File Manager**; desarrollador usa **SFTP** al mismo servidor para deploy de Node. VPS de staging: solo **SSH** + **FileZilla SFTP**, cPanel no instalado.

#### Señales de buen y mal uso

- **Buen uso:** MFA en panel, restringir cPanel por IP, VPN antes de RDP, SFTP con claves.
- **Mal uso:** cPanel en `https://IP:2083` expuesto sin restricción; RDP abierto a Internet sin VPN; reutilizar contraseña de correo en SSH.

<!-- interactive: StepReveal -->
{
  "title": "Caso agencia: cPanel vs SSH/SFTP",
  "steps": [
    { "title": "Diseñador — WordPress", "content": "cPanel File Manager o instalador WordPress: sube imágenes sin shell. MFA activo; acceso solo desde IP de oficina." },
    { "title": "Desarrollador — mismo hosting", "content": "SFTP con clave dedicada por sitio; nunca comparte contraseña de cPanel. Deploy de temas o plugins vía Git + SFTP." },
    { "title": "VPS staging — API Node", "content": "Solo SSH + FileZilla SFTP. Firewall ufw: 22, 80, 443. fail2ban activo. FTP puerto 21 rechazado." },
    { "title": "Incidente evitado", "content": "Cliente pidió FTP «como antes»; se documentó que SFTP usa el mismo 22 ya abierto, sin credenciales en texto claro." }
  ]
}

---

### Casos reales LATAM

**Sección TSX:** `CasosRealesLatamSection`

#### Caso 1: Dev remoto en Cali administra VPS en DigitalOcean

Carlos, desarrollador freelance, mantiene la API de un cliente retail en un Droplet en Nueva York. Desde su PC en Cali:

1. Genera clave Ed25519 y registra la pública en el Droplet al crearlo.
2. Conecta con `ssh deploy@157.245.80.42` para ver logs de PM2.
3. Usa FileZilla en **SFTP** para subir builds del frontend a `/var/www/app`.
4. Firewall `ufw`: solo 22, 80, 443; fail2ban activo.

**Incidente evitado:** rechazó habilitar FTP en puerto 21 que el cliente «usaba antes en hosting compartido»; documentó que SFTP usa el mismo 22 ya abierto.

#### Caso 2: Agencia en Bogotá con cPanel en hosting compartido

Agencia de 8 personas, sitios WordPress de clientes locales. Perfil mixto:

- **Diseñadores:** cPanel → File Manager, instalador WordPress, correo `@cliente.com.co`.
- **Dev senior:** SFTP con clave dedicada por sitio, sin compartir contraseña de cPanel.
- **Política:** MFA en cPanel, acceso panel solo desde IP de oficina tras incidente de login desde Rusia en log.

**Decisión clave:** nuevos proyectos con tráfico medio migran a VPS con SSH; cPanel solo donde el cliente paga hosting compartido económico.

---

### Errores comunes (referencia rápida)

- **FTP sin cifrar en producción:** credenciales y archivos visibles en la red; usar SFTP o FTPS.
- **Confundir SFTP con FTPS:** SFTP = sobre SSH (puerto 22); FTPS = FTP con capa TLS.
- **SSH con contraseña débil y `PermitRootLogin yes`:** objetivo #1 de bots de fuerza bruta.
- **Puerto 22 abierto a `0.0.0.0/0` sin fail2ban:** miles de intentos diarios en VPS con IP pública.
- **FileZilla en modo FTP por defecto:** verificar que el sitio guardado dice **SFTP**.
- **Exponer cPanel/RDP sin MFA ni filtro IP:** paneles son objetivo de credential stuffing.
- **Subir clave privada SSH al servidor o a GitHub:** solo la pública va en `authorized_keys`.

---

### Prácticas guiadas

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué SFTP es preferible a FTP plano cuando subes código desde una red Wi‑Fi pública en un café de Lima?",
  "hints": [
    "Piensa en qué viaja cifrado y qué en texto claro",
    "Considera quién comparte la red contigo"
  ],
  "expectedKeywords": ["cifrado", "texto claro", "credenciales", "interceptar", "SSH"]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Tu startup tiene 3 desarrolladores y un MVP en Node.js sin requisitos de SO custom. ¿Recomendarías IaaS o PaaS? Justifica con un criterio de tiempo y operación.",
  "hints": [
    "¿Quién parchea Linux y configura Nginx?",
    "¿Cuánto tarda un git push vs provisionar una VM?"
  ],
  "expectedKeywords": ["PaaS", "Railway", "Render", "Heroku", "git push", "sin administrar servidor"]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo SSH con clave pública: (a) cliente inicia TCP a puerto 22, (b) servidor verifica clave en authorized_keys, (c) usuario genera par con ssh-keygen, (d) shell remoto disponible, (e) copiar .pub al servidor. Escribe la secuencia correcta.",
  "hints": [
    "Primero generas las claves en el cliente",
    "La clave pública debe estar en el servidor antes de conectar"
  ],
  "expectedKeywords": ["c", "e", "a", "b", "d"]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe el comando scp para subir index.html a /var/www/html/ en user@192.0.2.50 usando la clave ~/.ssh/deploy_key.",
  "hints": [
    "scp usa la misma flag -i que ssh para la clave privada"
  ],
  "expectedKeywords": ["scp", "-i", "deploy_key", "index.html", "192.0.2.50", "/var/www/html"]
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Diseña el plan de administración remota para una agencia en Medellín"**

Contexto: la agencia tiene (A) 12 sitios WordPress en hosting compartido con cPanel en Colombia, y (B) una API Node.js en un VPS DigitalOcean en NYC para un cliente e-commerce.

**Tareas:**

1. Para cada entorno (A y B), indica: herramienta principal, protocolo, puerto y tipo de autenticación recomendada.
2. Justifica por qué **no** habilitarías FTP plano en el VPS aunque el hosting compartido aún lo ofrezca.
3. Propón reglas de firewall (`ufw` o equivalente) para el VPS (mínimo 3 puertos/reglas).
4. El diseñador junior pide «la contraseña root del servidor» para subir fotos. Redacta la respuesta correcta y la alternativa segura.
5. El cliente pregunta si conviene migrar la API a **Heroku (PaaS)**. Responde con un criterio IaaS vs PaaS aplicado a su caso.

**Criterio de éxito:** SFTP/SSH en VPS con claves y sin root; cPanel con MFA y SFTP para dev; FTP plano rechazado en producción; firewall documentado; distinción clara IaaS actual vs PaaS propuesto.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Reto integrador: completa el plan de administración remota para la agencia de Medellín (entornos A y B, firewall VPS, respuesta al diseñador junior y criterio Heroku).",
  "hints": [
    "Entorno A: cPanel HTTPS 443 + SFTP con clave para dev",
    "Entorno B: SSH/SFTP puerto 22, ufw allow 22/80/443, sin root",
    "Diseñador: cPanel File Manager, no root",
    "Heroku: evaluar si necesitan control de SO custom"
  ],
  "expectedKeywords": ["cPanel", "SFTP", "SSH", "clave", "ufw", "443", "MFA", "File Manager", "PaaS", "IaaS"]
}

---

## Cierre

**Sección TSX:** `CierreSection`

En esta lección vinculaste la **nube** (NIST, IaaS/PaaS/SaaS) con la **operación remota segura**: modelo cliente-servidor, SSH con claves, SFTP en lugar de FTP plano y elección de herramienta según perfil (diseñador en cPanel vs dev en terminal). La siguiente lección (`clase-04-virtualizacion-diagnostico`) profundiza en contenedores, máquinas virtuales y diagnóstico de servicios.

**Referencias:**

- Fuente docente: `kb/education/sources/clases/configuracion-servicios-web/clase-03-administracion-remota.md`
- NIST cloud definition: [SP 800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf)
- OpenSSH manual: [openssh.com/manual.html](https://www.openssh.com/manual.html)

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué pasaría si usas FTP plano (puerto 21) desde una red Wi‑Fi pública para subir código de producción?",
      "options": [
        "Los archivos se comprimen automáticamente y viajan más rápido",
        "Usuario y contraseña pueden ser interceptados porque el canal no está cifrado",
        "El servidor bloquea la conexión por defecto",
        "FTP siempre usa el mismo cifrado que HTTPS"
      ],
      "correctIndex": 1,
      "feedback": "FTP legado envía credenciales en texto claro. En redes no confiables debes usar SFTP o FTPS."
    },
    {
      "question": "En FTP modo pasivo, ¿quién inicia la conexión de datos?",
      "options": [
        "El servidor desde el puerto 20 hacia el cliente",
        "El cliente hacia un puerto alto indicado por el servidor",
        "Ninguno; es una sola conexión en puerto 21",
        "El router del ISP automáticamente"
      ],
      "correctIndex": 1,
      "feedback": "En pasivo el servidor anuncia un puerto alto con PASV y el cliente conecta hacia él; funciona mejor detrás de NAT."
    },
    {
      "question": "¿Cuál es la diferencia principal entre IaaS y PaaS?",
      "options": [
        "IaaS solo sirve para correo electrónico",
        "En IaaS gestionas el sistema operativo y la infra virtual; en PaaS despliegas la app sobre plataforma gestionada",
        "PaaS no permite bases de datos",
        "IaaS es siempre gratis"
      ],
      "correctIndex": 1,
      "feedback": "IaaS = VMs y redes bajo tu administración; PaaS = runtime y escalado de plataforma los lleva el proveedor (Heroku, App Engine)."
    },
    {
      "question": "¿Por qué se recomienda autenticación por clave pública en SSH en lugar de solo contraseña?",
      "options": [
        "Las claves públicas son más cortas y fáciles de memorizar",
        "Resiste mejor ataques automatizados de fuerza bruta y evita reutilizar contraseñas débiles",
        "SSH sin clave no cifra la sesión",
        "Las contraseñas no están permitidas en ningún servidor Linux"
      ],
      "correctIndex": 1,
      "feedback": "La clave privada no viaja en cada intento; combinar con PasswordAuthentication no reduce superficie de ataque."
    },
    {
      "question": "Un diseñador sin experiencia Linux debe subir imágenes a WordPress en hosting compartido. ¿Herramienta más adecuada sin abrir SSH root?",
      "options": [
        "PuTTY con usuario root",
        "cPanel File Manager o SFTP con cuenta limitada del hosting",
        "FTP plano en cyber café sin cifrado",
        "RDP al servidor del datacenter"
      ],
      "correctIndex": 1,
      "feedback": "cPanel o SFTP con usuario de hosting permiten gestionar archivos sin shell root; RDP no aplica en hosting compartido típico."
    }
  ]
}
