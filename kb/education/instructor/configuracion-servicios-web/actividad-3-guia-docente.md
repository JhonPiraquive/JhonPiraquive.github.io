---
track: configuracion-servicios-web
slug: actividad-3-laboratorio-ftp
audience: instructor
updated: 2026-07-06
repo_laboratorio: https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-3
repo_status: pendiente_publicacion
---

# Guía del docente — Actividad 3 (interna)

Laboratorio local con **Docker Compose** que levanta un contenedor **Linux (Debian/Ubuntu)** con **vsftpd** configurado, usuario dedicado de transferencia, directorio de trabajo con chroot y puertos FTP mapeados al host. Los estudiantes instalan Docker (si aplica), despliegan el entorno, configuran/verifican el servicio FTP, conectan con FileZilla u otro cliente, transfieren archivos con verificación de integridad y administran directorios remotos.

**No publicar en TSX estudiantil.** El portal cubre competencias transferibles (Docker básico, vsftpd, clientes FTP, transferencia, integridad, permisos, FTP vs FTPS vs SFTP) sin mencionar actividad, laboratorio, entrega, grupos ni repo Docker.

---

## 1. Rol del docente

| Hacéis | No hacéis |
|--------|-----------|
| Demostrar pull/run/ps/exec y reconocimiento SO (uname, os-release) | Configurar vsftpd por cada alumno en su máquina |
| Verificar puertos libres (2121, rango pasivo) y coexistencia con actividades 1–2 | Publicar esta guía ni `GUIA_DOCENTE.md` del repo en el portal |
| Entregar credenciales FTP de ejemplo en pizarra o `.env` demo | Entregar soluciones escritas de checksums sin que el alumno ejecute |
| Validar rúbrica con checklist §6 | Revelar respuestas de quiz del portal |

---

## 2. Enunciado de referencia (competencias)

Los estudiantes deben demostrar:

1. **Servidor Linux con Docker** — instalar Docker (o usar Docker Desktop), descargar imagen, crear/ejecutar contenedor, verificar con `docker ps`, documentar comandos y evidencias; información básica del SO (`uname`, `cat /etc/os-release`).
2. **Configuración servicio FTP** — instalar/habilitar FTP (vsftpd), crear usuario de transferencia, directorio de trabajo (home/chroot), verificar servicio (`systemctl status vsftpd`), documentar config, archivos modificados y parámetros de seguridad (chroot, anónimos deshabilitados, permisos).
3. **Conexión cliente FTP** — FileZilla, WinSCP, Cyberduck o cliente del SO; documentar dirección, puerto, usuario, herramienta y evidencia de conexión exitosa.
4. **Transferencia de archivos** — subir PDF, imagen y texto; descargar; verificar integridad (`md5sum`, `sha256sum`, comparar tamaños).
5. **Administración remota de archivos** — crear carpetas remotas, organizar, eliminar, permisos básicos (`chmod`, `chown` conceptual desde cliente o SSH).
6. **Validación** — demostrar FTP operativo, conexión cliente-servidor, carga/descarga y administración de directorios.
7. **Análisis conceptual** — qué es FTP, ventajas/limitaciones, diferencias FTP vs FTPS vs SFTP, casos de uso empresariales.

**Guía obligatoria para alumnos:** `README.md` del repo de laboratorio (cuando se publique). Sin `GUIA_DOCENTE.md` en manos del estudiante.

---

## 3. Preparación desde cero

### Requisitos

- Docker Engine 20.10+ y **Docker Compose v2** (`docker compose`).
- Puertos libres en el host: **2121** (FTP control, sugerido) + rango **50000–50100** (modo pasivo).
- Cliente FTP en PC docente: FileZilla (recomendado).

### Fase A — Clonar y configurar `.env` (cuando exista el repo)

```bash
git clone https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-3.git
cd configuracion-servicios-web-actividad-3/actividad3
cp .env.example .env
```

Editar `.env` — campos clave esperados:

| Variable | Default sugerido | Descripción |
|----------|------------------|-------------|
| `COMPOSE_PROJECT_NAME` | `act3-demo` | Prefijo de contenedores |
| `FTP_PORT` | `2121` | Puerto FTP control en host (evita 21 ocupado) |
| `PASV_MIN_PORT` | `50000` | Inicio rango pasivo en contenedor |
| `PASV_MAX_PORT` | `50100` | Fin rango pasivo |
| `FTP_USER` | `transferencia` | Usuario dedicado FTP |
| `FTP_PASS` | `Transferencia1!` | Contraseña demo (cambiar por grupo) |
| `FTP_HOME` | `/home/transferencia/archivos` | Directorio de trabajo |
| `LINUX_IMAGE` | `debian:bookworm-slim` | Imagen base del contenedor |

### Fase B — Arrancar stack

```bash
docker compose down
docker compose up -d --build
docker compose ps
```

Espere **30–60 segundos** hasta que arranquen systemd (si aplica), vsftpd y usuario creado por entrypoint.

### Fase C — Verificación docente (host)

```bash
# Contenedor activo
docker compose ps

# SO dentro del contenedor
docker compose exec ftp-server uname -a
docker compose exec ftp-server cat /etc/os-release

# Servicio vsftpd
docker compose exec ftp-server systemctl status vsftpd

# Puerto mapeado
ss -tlnp | grep 2121
```

Conexión FileZilla: Host `localhost`, Puerto `2121`, Usuario `transferencia`, Modo **Pasivo**.

---

## 4. Demostración docente paso a paso

Guion primera sesión (~40–50 min demo + práctica alumno).

### Paso 1 — Docker básico (8 min)

```bash
docker --version
docker compose version
docker compose ps
docker compose exec ftp-server uname -a
docker compose exec ftp-server cat /etc/os-release
```

Documentar en pizarra: imagen usada, STATUS Up, PRETTY_NAME del SO.

### Paso 2 — Servicio vsftpd (10 min)

Dentro del contenedor (o vía exec):

```bash
sudo systemctl status vsftpd
sudo ss -tlnp | grep :21
grep -E 'anonymous_enable|chroot_local_user|pasv_' /etc/vsftpd.conf
```

Explicar: anónimo NO, chroot YES, rango pasivo documentado.

### Paso 3 — Usuario y directorio (5 min)

```bash
id transferencia
ls -la /home/transferencia/archivos
```

Mostrar permisos 750/755 y propietario transferencia.

### Paso 4 — Cliente FileZilla (8 min)

- Site Manager → FTP, Host localhost, Port 2121
- Modo pasivo
- Conectar → captura listado remoto vacío o con archivos seed

### Paso 5 — Transferencia e integridad (10 min)

En laptop docente:

```bash
md5sum informe.pdf
sha256sum logo.png
```

Subir PDF, PNG y notas.txt por FileZilla. Descargar copia. Recalcular checksums en servidor:

```bash
docker compose exec ftp-server md5sum /home/transferencia/archivos/informe.pdf
```

Comparar hashes y tamaños (`ls -l`).

### Paso 6 — Administración remota (5 min)

- Crear carpeta `2026/contratos` (FileZilla o `mkdir -p` vía exec)
- Mover un archivo
- `chmod 644` en PDF vía SSH/exec
- Captura jerarquía final

### Paso 7 — Validación checklist (4 min)

Recorrer tabla §6 con alumnos; marcar ítems 1–10.

---

## 5. Matriz de verificación / rúbrica

| Criterio | Peso sugerido | Indicadores |
|----------|---------------|-------------|
| Docker y evidencias SO | 15 % | docker ps, uname, os-release documentados |
| Configuración vsftpd | 20 % | status active; conf documentada; chroot + anónimo off |
| Conexión cliente FTP | 15 % | Ficha host/puerto/herramienta; captura sesión conectada |
| Transferencia + integridad | 25 % | 3 tipos archivo; md5/sha256 o tamaños coincidentes |
| Admin directorios + permisos | 15 % | mkdir, organizar, chmod conceptual documentado |
| Análisis FTP/FTPS/SFTP | 10 % | Tabla o párrafo con ventajas, limitaciones, caso empresa |

### Evidencias mínimas por entrega

- [ ] Bitácora comandos Docker (pull/run/ps/exec o compose ps/exec)
- [ ] Salida systemctl status vsftpd + fragmento vsftpd.conf modificado
- [ ] Ficha conexión FileZilla (u otro cliente)
- [ ] Capturas subida/descarga + checksums o tamaños
- [ ] Captura estructura carpetas remota
- [ ] Párrafo comparativo FTP vs FTPS vs SFTP (≥ 150 palabras)

---

## 6. Coexistencia de puertos con Actividades 1 y 2

| Recurso | Actividad 1 (default) | Actividad 2 (default) | Actividad 3 (sugerido) | ¿Conflicto? |
|---------|----------------------|----------------------|------------------------|-------------|
| HTTP web | 8088 | 8082 | — | No |
| SSH | — | 2222 | — (opcional 2223 si SSH en act3) | No |
| DNS | 5354 | — | — | No |
| Hosting panel | 8080 | — | — | No |
| FTP control | — | — | **2121** (`FTP_PORT`) | No si 2121 libre |
| FTP pasivo | — | — | **50000–50100** mapeados | Verificar firewall host |

**Recomendación:** usar `FTP_PORT=2121` en `.env` de actividad 3 para no chocar con puerto 21 del sistema ni con otros stacks. Mapear rango pasivo 1:1 host:contenedor.

```yaml
# Fragmento docker-compose.yml esperado
ports:
  - "${FTP_PORT:-2121}:21"
  - "50000-50100:50000-50100"
```

Los tres stacks (act1, act2, act3) pueden correr simultáneamente si cada `.env` usa puertos distintos.

---

## 7. Problemas frecuentes

| Síntoma | Causa habitual | Acción |
|---------|----------------|--------|
| `Connection refused` FTP | Contenedor no Up; vsftpd no iniciado | `docker compose ps`; `systemctl start vsftpd`; esperar arranque |
| `425 Can't open data connection` | Modo activo o rango pasivo no expuesto | FileZilla → modo pasivo; verificar pasv_min/max y ports en compose |
| `530 Login incorrect` | Usuario/contraseña desincronizados con `.env` | Recrear contenedor: `docker compose up -d --force-recreate` |
| Timeout en listado tras login OK | Firewall bloquea 50000–50100 | Abrir rango en host; verificar `-p 50000-50100:50000-50100` |
| `553 Could not create file` | Permisos directorio o chroot | `chown transferencia:transferencia`; chmod 755/750 en home |
| `Permission denied` en chmod remoto | Cliente FTP sin SITE CHMOD | Usar SSH/exec: `chmod 644 archivo` |
| Puerto 2121 en uso | Otra actividad o servicio | Cambiar `FTP_PORT` a 2122 en `.env` |
| Checksums distintos | Transferencia incompleta | Re-subir; verificar espacio disco `df -h` |

---

## 8. Plantilla evidencias estudiante

```markdown
# Bitácora — Servidor de transferencia FTP

## 1. Entorno Docker
- Versión Docker: 
- Imagen: 
- Comando run/compose: 
- docker ps (pegar salida): 
- uname -a: 
- cat /etc/os-release: 

## 2. Servicio vsftpd
- systemctl status vsftpd: 
- Archivos modificados: /etc/vsftpd.conf (líneas: )
- anonymous_enable: 
- chroot_local_user: 
- pasv_min_port / pasv_max_port: 

## 3. Conexión cliente
- Herramienta: 
- Host: 
- Puerto: 
- Usuario: 
- Modo: Pasivo / Activo
- Evidencia (captura): 

## 4. Transferencias
| Archivo | Tipo | Tamaño local | Tamaño remoto | md5/sha256 local | md5/sha256 remoto |
|---------|------|--------------|---------------|------------------|-------------------|
|         | PDF  |              |               |                  |                   |
|         | PNG  |              |               |                  |                   |
|         | TXT  |              |               |                  |                   |

## 5. Administración remota
- Carpetas creadas: 
- Archivos movidos/eliminados: 
- Permisos aplicados (chmod): 

## 6. Análisis conceptual
- ¿Qué es FTP y para qué se usa en empresas?
- Ventajas y limitaciones de FTP plano:
- Diferencia FTPS vs SFTP:
- Caso de uso LATAM (ejemplo): 
```

---

## 9. Repo pendiente de publicación

**Estado:** https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-3 → **404** (aún no publicado).

Estructura esperada cuando el docente publique el repo:

```
configuracion-servicios-web-actividad-3/
├── README.md                 # Enunciado alumnos (sin guía docente)
├── actividad3/
│   ├── .env.example
│   ├── docker-compose.yml
│   ├── Dockerfile            # Debian/Ubuntu + systemd + vsftpd
│   ├── config/
│   │   └── vsftpd.conf.template
│   ├── scripts/
│   │   ├── entrypoint.sh     # Crear usuario FTP, permisos, start vsftpd
│   │   └── healthcheck.sh
│   ├── samples/              # informe.pdf, logo.png, notas.txt de prueba
│   └── volumes/
│       └── ftp-data/         # Persistencia archivos (opcional)
└── docs/
    └── TROUBLESHOOTING.md    # Modo pasivo, permisos (opcional, no para alumnos)
```

**docker-compose.yml esperado (resumen):**

- Servicio `ftp-server`: build Dockerfile, `privileged: true` si usa systemd, ports `FTP_PORT:21` y rango pasivo, env `FTP_USER`, `FTP_PASS`, volumen para `/home/transferencia/archivos`.
- Healthcheck: `nc -z localhost 21` o script que verifique vsftpd.

**README alumnos debe incluir:** requisitos Docker, clonar, `.env`, `docker compose up`, datos conexión FileZilla, lista de entregables (sin referencia a portal docente).

---

## 10. Relación con el portal docente

| Competencia actividad 3 | Lección TSX | Sección |
|-------------------------|-------------|---------|
| Docker pull/run/ps/exec, uname, os-release | `clase-04-virtualizacion-diagnostico` | DespliegueContenedorBasicoSection |
| vsftpd, usuario, seguridad | `clase-03-administracion-remota` | ConfiguracionServidorFtpSection |
| FileZilla, WinSCP, Cyberduck | `clase-03` | ClientesFtpSection |
| Subida/descarga, md5/sha256 | `clase-03` | TransferenciaArchivosSection |
| mkdir, chmod, organizar | `clase-03` | AdministracionRemotaArchivosSection |
| FTP vs FTPS vs SFTP | `clase-03` | ComparativaProtocolosTransferenciaSection |
| Modos activo/pasivo (base) | `clase-03` | FtpSection (existente) |
| Checklist validación FTP | `clase-04` | ValidacionServicioFtpSection |
| Objetivos curso | `index` | ObjetivosSection |

Usad el portal para teoría previa; esta guía + repo (cuando exista) para la sesión práctica.

---

## 11. Notas pedagógicas

- Enfatizar **modo pasivo** en FileZilla desde el primer intento de conexión.
- FTP plano solo en red de laboratorio; mencionar migración a SFTP en producción (portal → ComparativaProtocolosTransferenciaSection).
- No exigir que alumnos instalen vsftpd en host nativo si el laboratorio ya lo trae en contenedor; sí exigir que **documenten** parámetros y status.
- Windows: Docker Desktop + FileZilla; WinSCP como alternativa si el enunciado lo permite.
- Sudo dentro del contenedor: limitado a systemctl vsftpd, chmod/chown en home FTP, lectura vsftpd.conf — no instalar paquetes arbitrarios.
