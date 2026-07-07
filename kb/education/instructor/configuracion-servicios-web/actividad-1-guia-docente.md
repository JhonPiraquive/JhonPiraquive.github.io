---
track: configuracion-servicios-web
slug: actividad-1-laboratorio-practico
audience: instructor
updated: 2026-07-06
repo_laboratorio: https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-1
---

# Guía del docente — Actividad 1 (interna)

Laboratorio multi-grupo: cada equipo define su `.env` (dominio, empresa, contraseñas, red y puertos) y configura **DNS → hosting → correo** en paneles web. Esta guía describe cómo **preparar todo desde cero** (aula o demo) y qué debe entregar cada grupo según la rúbrica.

**No publicar en TSX estudiantil.** Los alumnos usan el README del repo de laboratorio; el portal docente cubre conceptos transferibles sin mencionar la actividad.

---

## 1. Rol del docente

| Hacéis | No hacéis |
|--------|-----------|
| Explicar dominio, DNS, hosting, correo y su interacción | Entregar listados de contraseñas por grupo |
| Demostrar el flujo con **vuestro** `.env` de ejemplo | Configurar el `.env` de cada alumno |
| Indicar reglas de red/puertos si comparten PC | Crear registros DNS ni buzones por ellos |

---

## 2. Enunciado de la actividad (referencia)

Los estudiantes deben:

1. **Dominio** — Crear y documentar un dominio o subdominio (ej. `grupo1.miempresa.lab`): nombre, finalidad y estructura jerárquica del FQDN. Usad **`.lab`** (o `.test`), no `.local`: Mailu rechaza el login SSO con correos `@*.local`.
2. **DNS** — Registros **A** (web), **CNAME** (alias), **MX** (correo), **TXT** (descriptivo del grupo) y explicar la función de cada uno.
3. **Hosting** — Sitio con empresa ficticia, descripción, misión/servicios y contacto; verificar acceso por dominio.
4. **Correo** — Mínimo **3** cuentas (ej. gerencia, ventas, soporte) y explicar su propósito.
5. **Pruebas** — Resolución DNS, MX, web y envío/recepción entre buzones.
6. **Análisis** — Relación técnica entre dominio, DNS, hosting, correo y servicios de Internet.

---

## 3. Versiones bloqueadas del laboratorio

No modificar salvo actualización planificada del curso.

| Componente | Imagen / herramienta | Versión en `.env` |
|------------|----------------------|-------------------|
| DNS | `technitium/dns-server` | `TECHNITIUM_VERSION=15.2.0` |
| Hosting | `uozi/nginx-ui` | `NGINX_UI_VERSION=v2.3.10` |
| Redis (Mailu) | `redis` | `REDIS_VERSION=7.4.2-alpine` |
| Correo | `ghcr.io/mailu/*` | `MAILU_VERSION=2024.06` |
| Orquestación | Docker Engine + Compose plugin | ≥ 24.x / ≥ v2.20 |

Tras cambiar versiones en `.env.example`, avisad a los grupos para que ejecuten `docker compose pull`.

---

## 4. Configuración desde cero (paso a paso completo)

Usad este apartado como guion de la primera sesión o de la demostración. Sustituid `docente-demo.lab` y las IPs por las de **vuestro** `.env`.

**Orden de fases (evita fallos típicos):** A (arranque) → B (DNS) → **E (resolver nombres en el PC)** → C (hosting) → D (correo) → F (checklist).

### Fase 0 — Requisitos en la máquina del docente

```bash
docker --version          # ≥ 24.x
docker compose version    # ≥ v2.20
```

Instalad `dnsutils` si no hay `dig`:

```bash
sudo apt install -y dnsutils    # Debian/Ubuntu
```

Clonad o copiad la carpeta `actividad1` en el equipo de demostración.

---

### Fase A — Archivo `.env` y arranque de contenedores

**A.1.** Entrar en el laboratorio:

```bash
cd actividad1
cp .env.example .env
```

**A.2.** Editar `.env` con **todos** los campos completos. Ejemplo para demo del docente:

```env
GROUP_ID=docente
COMPOSE_PROJECT_NAME=docente

EMPRESA_DOMINIO=docente-demo.lab
EMPRESA_NOMBRE=Empresa Demo del Profesor

DNS_ADMIN_PASSWORD=DemoDns2026!
HOSTING_INSTALL_SECRET=DemoHostingInstall2026!
HOSTING_TERMINAL_USER=lab
HOSTING_TERMINAL_PASSWORD=DemoTerminal2026!
MAIL_ADMIN_USER=admin
MAIL_ADMIN_PASSWORD=DemoMail2026!
MAILU_SECRET_KEY=ClaveSecretaDemo16chars

SUBNET=172.28.1.0/24
DNS_IP=172.28.1.10
WEB_IP=172.28.1.20
MAIL_FRONT_IP=172.28.1.30

DNS_WEB_PORT=5380
DNS_PORT=5354
HOSTING_PANEL_PORT=8080
WEB_HTTP_PORT=8088
HOSTING_HTTPS_PORT=8444
MAIL_HTTPS_PORT=8443
MAIL_HTTP_PORT=8081

TZ=America/Bogota

TECHNITIUM_VERSION=15.2.0
NGINX_UI_VERSION=v2.3.10
REDIS_VERSION=7.4.2-alpine
MAILU_VERSION=2024.06
```

> Si otro stack usa los mismos puertos: `docker compose -p miempresa down` o cambiad puertos en `.env`.

**A.3.** Descargar imágenes y levantar:

```bash
docker compose pull
docker compose up -d
docker compose ps
```

**A.4.** Esperar 1–2 minutos. Si Mailu no responde:

```bash
docker compose logs -f admin
```

**A.5.** Verificar paneles:

| Servicio | URL (ejemplo docente) |
|----------|------------------------|
| DNS | http://localhost:5380 |
| Hosting | http://localhost:8080 |
| Correo admin | https://localhost:8443/admin |

**A.6.** **Antes de abrir el sitio por nombre de dominio**, configurar resolución en el PC (ver **Fase E**). Sin esto, el navegador muestra `DNS_PROBE_*` aunque Technitium responda bien a `dig @127.0.0.1 -p 5354`.

---

### Fase B — Panel DNS (Technitium)

**B.1.** http://localhost:`DNS_WEB_PORT` → usuario `admin`, clave `DNS_ADMIN_PASSWORD`.

**B.2.** **Zones** → **Add Zone** → **Primary** → nombre: `EMPRESA_DOMINIO` (ej. `docente-demo.lab`).

Para alumnos que usen subdominios por grupo, la zona puede ser `grupo1.miempresa.lab` (cada grupo su zona) o una zona común `miempresa.lab` con registros `grupo1`, `grupo2`… según el criterio que fijéis. **No uséis `.local`** en `EMPRESA_DOMINIO` (Mailu muestra «Email inválido» en el SSO).

**B.3.** Registros mínimos para la rúbrica:

| Tipo | Nombre | Valor | Para explicar en clase |
|------|--------|-------|-------------------------|
| **A** | `www` | `WEB_IP` | IP del sitio web principal |
| **A** | `mail` | `MAIL_FRONT_IP` | IP del servidor de correo |
| **A** | `ns` | `DNS_IP` | Servidor de nombres |
| **CNAME** | `portal` | `www.docente-demo.lab.` | Alias; mismo destino que la web |
| **MX** | `@` | `10 mail.docente-demo.lab.` | Prioridad + servidor de correo |
| **TXT** | `@` | `grupo=Docente; actividad=1` | Metadatos / SPF futuro |
| **NS** | `@` | `ns.docente-demo.lab.` | Delegación de la zona |

**B.4.** Pruebas en Technitium (sustituid dominio y `DNS_PORT`):

```bash
dig @127.0.0.1 -p 5354 www.docente-demo.lab A
dig @127.0.0.1 -p 5354 docente-demo.lab MX
dig @127.0.0.1 -p 5354 portal.docente-demo.lab
```

**B.5.** Aplicar **Fase E** (hosts o DNS manual) y comprobar resolución en el sistema:

```bash
ping -c1 www.docente-demo.lab
dig www.docente-demo.lab A +short
```

---

### Fase E — Resolución de nombres en el equipo (hacer antes de C.5)

El orden correcto del guion: **A → B → E → C (sitio) → D**. No dejar E para el final si queréis evitar `DNS_PROBE_*` en clase.

**Opción 1 — DNS del laboratorio:** DNS manual en la conexión → `DNS_IP` (ej. `172.28.1.10`). Comprobar que no quede un DNS público por delante que ignore Technitium.

**Opción 2 — `/etc/hosts` (rápida en el aula):**

```bash
sudo nano /etc/hosts
```

```text
172.28.1.20   www.docente-demo.lab docente-demo.lab portal.docente-demo.lab
172.28.1.30   mail.docente-demo.lab
```

**Opción 3 — Solo `dig @127.0.0.1 -p DNS_PORT`:** sirve como evidencia de Technitium; **no** permite navegar sin la opción 1 o 2.

---

### Fase C — Panel hosting (Nginx UI)

**C.1.** http://localhost:`HOSTING_PANEL_PORT`.

**C.2.** Pantalla **Install**: pegar `HOSTING_INSTALL_SECRET` del `.env`; completar usuario/clave del panel.

**C.2b.** **Terminal** (menú lateral): login de **Linux**, no del panel:

| Campo | Valor en demo docente |
|-------|------------------------|
| Usuario | `HOSTING_TERMINAL_USER` → `lab` |
| Contraseña | `HOSTING_TERMINAL_PASSWORD` → `DemoTerminal2026!` |

Con **nano** crear:

```bash
mkdir -p /var/www/www.docente-demo.lab
nano /var/www/www.docente-demo.lab/index.html
```

**C.3.** **Sites** → sitio `www.EMPRESA_DOMINIO`; `root` = carpeta del `index.html`, **nunca** solo `/var/www/` (403 Forbidden). El `index.html` debe incluir: nombre de empresa ficticia, descripción, misión/servicios y contacto.

**C.4.** Aplicar/recargar Nginx si el panel lo pide.

**C.5.** Verificar (con **Fase E** ya aplicada). HTTP va al puerto **`WEB_HTTP_PORT`** del host (ej. `8088`):

```bash
curl -sI "http://www.docente-demo.lab:8088/" | head -1
# HTTP/1.1 200 OK
```

---

### Fase D — Panel correo (Mailu)

**D.1.** https://localhost:`MAIL_HTTPS_PORT`/admin — certificado autofirmado: aceptar. Usad **`localhost`**, no `0.0.0.0`.

**D.2.** Login: `MAIL_ADMIN_USER@EMPRESA_DOMINIO` / `MAIL_ADMIN_PASSWORD`.

**D.3.** **Mail domains** — debe existir `EMPRESA_DOMINIO` (creado al primer arranque).

**D.4.** Crear **tres** usuarios: `gerencia@…`, `ventas@…`, `soporte@…`. Pedid que documenten el propósito de cada uno.

**D.5.** Copiar TXT DKIM/SPF desde Mailu → añadir en Technitium.

**D.6.** Webmail: enviar de `ventas@…` a `soporte@…` y comprobar recepción.

---

### Fase F — Checklist de verificación (docente o alumno)

- [ ] `dig @127.0.0.1 -p DNS_PORT` A de `www.…` → `WEB_IP`
- [ ] Resolución en el PC (Fase E): `ping` o `dig www.…` sin `@127.0.0.1`
- [ ] `dig` MX de `EMPRESA_DOMINIO` → `mail.EMPRESA_DOMINIO`
- [ ] `dig` CNAME `portal` → apunta a `www`
- [ ] Navegador: `http://www.EMPRESA_DOMINIO:WEB_HTTP_PORT`
- [ ] `curl` al sitio → **200**, no 403
- [ ] Tres cuentas de correo creadas y documentadas
- [ ] Correo enviado y recibido entre dos buzones
- [ ] Entrega escrita: dominio, registros, análisis dominio–DNS–hosting–correo

**Duración orientativa:** demo 25–35 min; práctica alumno 60–90 min.

---

## 5. Demostración rápida (15 minutos)

Si el tiempo es corto: **A.1–A.6**, **B.2–B.5**, **E opción 2** (`/etc/hosts`), **C.2–C.3** (página mínima con `root` correcto), **C.5** con `:WEB_HTTP_PORT`, **D.4 y D.6** (dos buzones y un correo de prueba). Dejad TXT/DKIM detallado y tercer buzón para la práctica guiada.

---

## 6. Qué entregan los estudiantes

| Entregable | Contenido |
|------------|-----------|
| Documentación dominio | Nombre, finalidad, jerarquía del FQDN |
| Tabla DNS | A, CNAME, MX, TXT + explicación de cada tipo |
| Evidencias | Salidas `dig`, capturas web y webmail |
| Sitio publicado | URL con puerto si aplica |
| Correo | ≥ 3 cuentas + propósito de cada una |
| Análisis | Cómo interactúan dominio, DNS, hosting, correo e Internet |

Guía obligatoria para alumnos: **`README.md`** del repo. Plantilla: **`.env.example`**.

---

## 7. Varios grupos en un aula

| Recurso | Grupo 1 | Grupo 2 | Grupo 3 |
|---------|---------|---------|---------|
| `SUBNET` | `172.28.1.0/24` | `172.28.2.0/24` | `172.28.3.0/24` |
| `DNS_IP` | `172.28.1.10` | `172.28.2.10` | `172.28.3.10` |
| `WEB_IP` | `172.28.1.20` | `172.28.2.20` | `172.28.3.20` |
| `MAIL_FRONT_IP` | `172.28.1.30` | `172.28.2.30` | `172.28.3.30` |
| `EMPRESA_DOMINIO` | `grupo1.miempresa.lab` | `grupo2.miempresa.lab` | `grupo3.miempresa.lab` |
| `DNS_WEB_PORT` | 5380 | 5390 | 5400 |
| `HOSTING_PANEL_PORT` | 8080 | 8090 | 8100 |
| `MAIL_HTTPS_PORT` | 8443 | 8453 | 8463 |

Cada grupo: `COMPOSE_PROJECT_NAME` único (`grupo1`, `grupo2`, …).

**Recomendación:** una VM o PC por grupo. Si comparten máquina, exigir la tabla de puertos.

---

## 8. Comandos de mantenimiento

```bash
cd actividad1
cp .env.example .env    # primera vez
docker compose pull
docker compose up -d
docker compose ps
```

Reset de un grupo (borra datos de paneles):

```bash
docker compose down -v
docker compose up -d
```

Logs Mailu:

```bash
docker compose logs -f admin
```

---

## 9. Estado inicial del laboratorio

- Sin zonas DNS, sitios ni buzones precargados.
- Credenciales: solo las del `.env` de cada grupo.
- Mailu crea `EMPRESA_DOMINIO` y `MAIL_ADMIN_USER@EMPRESA_DOMINIO` al primer arranque.
- Versiones de imágenes fijadas en `.env` (no `latest`).

---

## 10. Problemas frecuentes

| Síntoma | Causa habitual | Acción |
|---------|----------------|--------|
| Puerto en uso | Otro grupo o stack antiguo | Cambiar puertos en `.env` o `docker compose -p X down` |
| Mailu no inicia | `MAILU_SECRET_KEY` corta o `.env` incompleto | ≥ 16 caracteres; revisar logs `admin` |
| SSO Mailu: «Email inválido» | `EMPRESA_DOMINIO` termina en `.local` | Cambiar a `.lab` o `.test`, borrar volúmenes `mailu_*` |
| Login correo: vuelve al formulario | Mezclar `0.0.0.0` y `localhost`, o clave incorrecta | Solo `https://localhost:MAIL_HTTPS_PORT/…` |
| `DNS_PROBE_*` en el navegador | `dig @127.0.0.1` OK pero el PC no resuelve | Fase **E** antes de C.5; con `.local`, usar `/etc/hosts` |
| **403 Forbidden** en la web | `root` sin `index.html` o apunta a `/var/www/` vacío | C.2 + C.3: carpeta con HTML y mismo `root` |
| Sitio no carga (sin 403) | URL sin `WEB_HTTP_PORT` | `http://www.…:8088` (puerto del `.env`) |
| Terminal Nginx UI: Login incorrect | No es el usuario del panel; es `HOSTING_TERMINAL_*` | Tras cambiar `.env`: `docker compose up -d --force-recreate hosting` |

---

## 11. Criterios de evaluación (rúbrica resumida)

| Criterio | Peso sugerido | Indicadores |
|----------|---------------|-------------|
| Dominio documentado | 15 % | FQDN, jerarquía, finalidad clara |
| Registros DNS | 25 % | A, CNAME, MX, TXT correctos + explicación |
| Sitio web publicado | 20 % | Contenido mínimo, acceso por dominio, evidencia curl/captura |
| Correo corporativo | 20 % | ≥ 3 buzones con propósito, prueba envío/recepción |
| Análisis integrador | 20 % | Relación dominio–DNS–hosting–correo–Internet coherente |

---

## 12. Relación con el portal docente

Las lecciones TSX del track `configuracion-servicios-web` cubren los conceptos previos (clases 1–4) **sin** referencias a esta actividad. Usad el portal para teoría y esta guía + repo para la sesión práctica.
