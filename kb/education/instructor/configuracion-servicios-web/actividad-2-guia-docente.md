---
track: configuracion-servicios-web
slug: actividad-2-laboratorio-diagnostico
audience: instructor
updated: 2026-07-06
repo_laboratorio: https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-2
---

# Guía del docente — Actividad 2 (interna)

Laboratorio local con **Docker Compose** que simula un servidor **Debian corporativo** con **SSH**, **Nginx** y una **falla intencional** en el sitio web. Los estudiantes deben conectarse remotamente, reconocer el entorno, diagnosticar sistemáticamente y restablecer el servicio.

**No publicar en TSX estudiantil.** El portal cubre competencias transferibles (SSH, reconocimiento, diagnóstico Nginx, informe técnico) sin mencionar actividad, laboratorio ni repo Docker.

---

## 1. Rol del docente

| Hacéis | No hacéis |
|--------|-----------|
| Elegir `FAULT_TYPE` antes de cada grupo/semestre | Revelar el tipo de falla a los estudiantes |
| Demostrar el flujo diagnóstico con un `.env` de ejemplo | Conectarse por ellos ni entregar soluciones escritas |
| Verificar puertos libres (8082, 2222) y coexistencia con actividad-1 | Publicar `GUIA_DOCENTE.md` del repo en el portal |

---

## 2. Enunciado de referencia (competencias)

Los estudiantes deben demostrar:

1. **Conexión remota SSH** — terminal (`ssh -p … user@host`) o cliente gráfico (PuTTY, MobaXterm, Bitvise): documentar IP, puerto, herramienta, procedimiento y evidencias de acceso.
2. **Reconocimiento del entorno** — identificar SO, usuario, IP del servidor, servicios activos y puertos abiertos; documentar comandos (`uname`, `whoami`, `hostname -I`, `systemctl`, `ss`/`netstat`) y explicar la función de cada uno.
3. **Diagnóstico sistemático** — verificar estado del servicio web (`systemctl status nginx`), configuración (`nginx -t`, `sites-available`), puertos (`ss -tlnp`), conectividad (`ping`, `curl`), logs (`journalctl`, `/var/log/nginx/`) y archivos del sitio; justificar cada acción.
4. **Solución del problema** — acciones correctivas (reiniciar servicio, corregir config, permisos, puerto, firewall, `/etc/hosts`, restaurar `index.html`); validar con `curl` local y navegador.
5. **Informe técnico** — estructura: problema, metodología, comandos, solución, validación, lecciones aprendidas.

**Guía obligatoria para alumnos:** `README.md` del repo de laboratorio (sin `GUIA_DOCENTE.md`).

---

## 3. Preparación desde cero

### Requisitos

- Docker Engine 20.10+ y **Docker Compose v2** (`docker compose`).
- Puertos libres en el host: **2222** (SSH) y **8082** (HTTP).

### Fase A — Clonar y configurar `.env`

```bash
git clone https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-2.git
cd configuracion-servicios-web-actividad-2/actividad2
cp .env.example .env
```

Editar `.env` — campos clave:

| Variable | Default | Descripción |
|----------|---------|-------------|
| `FAULT_TYPE` | `stopped` | Tipo de falla (ver matriz §5) |
| `SSH_PORT` | `2222` | Puerto SSH en el host |
| `HTTP_PORT` | `8082` | Puerto HTTP en el host |
| `STUDENT1_USER` / `STUDENT1_PASS` | `estudiante1` / `Estudiante1!` | Primera cuenta |
| `STUDENT2_USER` / `STUDENT2_PASS` | `estudiante2` / `Estudiante2!` | Segunda cuenta |

### Fase B — Arrancar contenedor

```bash
docker compose down
docker compose up -d --build
docker compose ps
```

Espere **30–60 segundos** hasta que arranquen `systemd`, SSH y Nginx.

### Fase C — Verificación docente (host)

```bash
# HTTP — debe fallar con falla activa (salvo FAULT_TYPE=none)
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8082

# SSH
ssh -p 2222 estudiante1@localhost

# Dentro del contenedor (root, opcional)
docker compose exec corp-server bash -c 'cat /var/log/lab/fault-applied.log; systemctl is-active nginx'
```

Registro de falla aplicada:

- Contenedor: `/var/log/lab/fault-applied.log`
- Host (montaje): `actividad2/logs/fault-applied.log`

---

## 4. Demostración docente paso a paso

Usad este guion en la primera sesión (~35–45 min demo + práctica alumno).

### Paso 1 — Conexión SSH (5 min)

```bash
ssh -p 2222 estudiante1@localhost
# Aceptar huella del host (yes)
```

Documentar en pizarra: Host `localhost`, Puerto `2222`, Usuario `estudiante1`, Herramienta OpenSSH.

**Windows:** PuTTY → Host `localhost`, Port `2222` → Open. Mencionar MobaXterm/Bitvise como alternativas.

Evidencia: captura de `whoami` y prompt.

### Paso 2 — Reconocimiento del entorno (8 min)

```bash
uname -a
whoami
hostname
hostname -I
systemctl status nginx
systemctl status ssh
sudo ss -tlnp | grep -E ':80|:8080|:22'
```

Explicar función de cada comando antes de ejecutar el siguiente.

### Paso 3 — Diagnóstico sistemático (12 min)

Checklist en orden:

1. `systemctl status nginx` → ¿active/inactive/failed?
2. `sudo nginx -t` → ¿config válida?
3. `sudo ss -tlnp` → ¿puerto 80 escuchando?
4. `curl -v http://127.0.0.1/` → ¿código HTTP?
5. `journalctl -u nginx -n 30 --no-pager`
6. `sudo tail /var/log/nginx/error.log`
7. `ls -la /var/www/intranet/index.html`

**No mencionar** `fault-applied.log` a alumnos; es auditoría docente.

### Paso 4 — Corrección según FAULT_TYPE (10 min)

Ver matriz §5. Siempre: `nginx -t` antes de `systemctl restart nginx`.

### Paso 5 — Validación (5 min)

```bash
curl -s -o /dev/null -w "HTTP %{http_code}\n" http://127.0.0.1/
curl -v http://intranet.corp.local/
```

Desde el host: navegador → `http://localhost:8082`.

### Paso 6 — Informe técnico (5 min)

Mostrar plantilla: problema → metodología → comandos → causa raíz → solución → validación → lecciones.

---

## 5. Matriz FAULT_TYPE → síntomas → solución

Cambiar falla: editar `.env` → `docker compose down` → `docker compose up -d --build`.

| FAULT_TYPE | Sinónimos | Falla simulada | Síntoma habitual | Solución referencia |
|------------|-----------|----------------|------------------|---------------------|
| `stopped` | `detenido`, `servicio` | Servicio web detenido | `curl` falla; `systemctl status nginx` → inactive | `sudo systemctl enable nginx && sudo systemctl start nginx` |
| `port` | `puerto` | Nginx en **8080**; host espera **80** | `ss` muestra :8080; curl :80 refused | Editar `listen 80` en `/etc/nginx/sites-available/intranet.conf`; `nginx -t`; restart |
| `config` | `configuracion` | Directiva inválida en virtual host | `nginx -t` falla; servicio failed | Eliminar línea inválida; `nginx -t`; restart |
| `permissions` | `permisos` | `index.html` no legible por www-data | HTTP 403/500 | `chown www-data:www-data`; `chmod 644` index.html |
| `missing` | `eliminada`, `index` | `index.html` eliminado | HTTP 404 | `cp /usr/share/lab/index.html.reference /var/www/intranet/index.html`; chown/chmod |
| `dns` | — | `/etc/hosts` erróneo | `curl http://intranet.corp.local` falla; 127.0.0.1 OK | Corregir hosts: `127.0.0.1 intranet.corp.local localhost` |
| `firewall` | `iptables`, `ufw` | iptables DROP puerto 80 | `ss` OK pero curl timeout | `sudo iptables -D INPUT -p tcp --dport 80 -j DROP` |
| `none` | `ok`, `correcto` | Sin falla | Sitio visible | Demo de laboratorio sano |

**Recomendación:** una sola falla por entrega. Para examen: mismo `FAULT_TYPE` para todo el grupo o variantes por último dígito de usuario.

### Comandos de solución detallados

**stopped:**
```bash
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx
```

**port:** Editar `/etc/nginx/sites-available/intranet.conf`: `listen 80` y `[::]:80`, no 8080.

**config:** Quitar `directiva_invalida_para_el_laboratorio` del virtual host.

**permissions:**
```bash
sudo chown www-data:www-data /var/www/intranet/index.html
sudo chmod 644 /var/www/intranet/index.html
sudo systemctl reload nginx
```

**missing:**
```bash
sudo cp /usr/share/lab/index.html.reference /var/www/intranet/index.html
sudo chown www-data:www-data /var/www/intranet/index.html
sudo chmod 644 /var/www/intranet/index.html
```

**dns:** Eliminar línea con `127.0.0.99`; dejar `127.0.0.1 intranet.corp.local localhost`.

**firewall:**
```bash
sudo iptables -L INPUT -n --line-numbers
sudo iptables -D INPUT -p tcp --dport 80 -j DROP
```

---

## 6. Rúbrica de evaluación / evidencias esperadas

| Criterio | Peso sugerido | Indicadores |
|----------|---------------|-------------|
| Conexión SSH documentada | 15 % | Ficha IP/puerto/usuario/herramienta; captura prompt; comando `ssh -p` correcto |
| Reconocimiento entorno | 20 % | Salidas uname, whoami, hostname -I, systemctl, ss; explicación de cada comando |
| Diagnóstico sistemático | 25 % | Checklist ordenado; nginx -t, logs, curl local; hipótesis antes de corregir |
| Solución y validación | 25 % | Causa raíz identificada; corrección mínima; curl 200 + navegador host |
| Informe técnico | 15 % | 7 secciones (problema, metodología, comandos, causa, solución, validación, lecciones) |

### Evidencias mínimas por entrega

- [ ] Ficha de conexión SSH (terminal o GUI)
- [ ] Capturas o transcripciones de reconocimiento del entorno
- [ ] Log de comandos de diagnóstico con interpretación
- [ ] Descripción de causa raíz (una frase clara)
- [ ] Evidencia post-fix: `curl` HTTP 200 + captura navegador `http://localhost:8082`
- [ ] Informe técnico en PDF o Markdown

---

## 7. Problemas frecuentes

| Síntoma | Causa habitual | Acción |
|---------|----------------|--------|
| `Connection refused` en SSH | Contenedor no Up; systemd aún arrancando | `docker compose ps`; esperar ~1 min; reintentar |
| «System is booting up» / `pam_nologin` | Imagen desactualizada o arranque lento | `docker compose up -d --build`; esperar 30 s |
| Puerto 2222 o 8082 en uso | Actividad-1 u otro stack | Cambiar `SSH_PORT`/`HTTP_PORT` en `.env` o `docker compose -p X down` |
| systemd no arranca | WSL2/Docker Desktop antiguo | Actualizar Docker Desktop; en Linux requiere `privileged: true` |
| Sitio OK en contenedor pero no en host | Puerto HTTP mal mapeado | Verificar `HTTP_PORT` en `.env` y `docker compose ps` |
| Estudiante edita nginx.conf global | Confusión sites-available vs nginx.conf | Redirigir a `/etc/nginx/sites-available/intranet.conf` |

---

## 8. Coexistencia con Actividad 1

| Recurso | Actividad 1 (default) | Actividad 2 (default) | ¿Conflicto? |
|---------|----------------------|----------------------|-------------|
| HTTP web | 8088 (`WEB_HTTP_PORT`) | 8082 (`HTTP_PORT`) | No |
| SSH | — (paneles web) | 2222 (`SSH_PORT`) | No |
| DNS | 5354 | — | No |
| Hosting panel | 8080 | — | No |

Ambos stacks pueden correr en la misma máquina docente si los puertos del `.env` no se solapan.

---

## 9. Personalización y mantenimiento

| Variable | Efecto |
|----------|--------|
| `SSH_PORT` / `HTTP_PORT` | Cambiar mapeo host |
| `STUDENT1_*` / `STUDENT2_*` | Credenciales alumnos |
| Tras cambio contraseñas | `docker compose up -d --force-recreate` |

**Nueva falla:** editar `scripts/apply-fault.sh`, documentar en `.env.example`, `docker compose build --no-cache`.

---

## 10. Relación con el portal docente

| Competencia actividad 2 | Lección TSX |
|-------------------------|-------------|
| SSH + documentación + GUI | `clase-03-administracion-remota` |
| Reconocimiento entorno | `clase-03` → ReconocimientoEntornoSection |
| Logs Nginx, permisos | `clase-02-hosting-correo-https` → LogsNginxPermisosSection |
| Diagnóstico sistemático, Nginx, informe | `clase-04-virtualizacion-diagnostico` |

Usad el portal para teoría previa; esta guía + repo para la sesión práctica.

---

## 11. Notas pedagógicas

- Los estudiantes **no** necesitan saber `FAULT_TYPE`; deben usar diagnóstico sistemático.
- Evite mencionar `fault-applied.log` en el enunciado alumnos.
- OpenSSH Client integrado en Windows 10/11; PuTTY como alternativa clásica.
- Sudo limitado: nginx, journalctl, nginx -t, iptables, permisos sitio, nano/vim — no instalar paquetes ni crear usuarios.
