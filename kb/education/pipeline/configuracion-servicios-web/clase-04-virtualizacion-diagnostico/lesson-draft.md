---
track: configuracion-servicios-web
slug: clase-04-virtualizacion-diagnostico
title: "Virtualización, contenedores y diagnóstico integrador"
order: 5
prerequisites:
  - configuracion-servicios-web/clase-01-fundamentos-web
  - configuracion-servicios-web/clase-02-hosting-correo-https
  - configuracion-servicios-web/clase-03-administracion-remota
related:
  - configuracion-servicios-web/index
  - posw/herramientas-desarrollo
  - posw/modelo-cliente-servidor
  - posw/protocolos-seguridad
source_brief: kb/education/pipeline/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - ContenedoresSection
  - VirtualizacionSection
  - SolucionProblemasSection
  - RetoIntegradorSection
  - CompruebaTuComprensionSection
  - MiniquizSection
  - CierreSection
  - GuiaDocenteSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

1. **Definir** qué es un contenedor, cómo se diferencia de una máquina virtual y cuándo conviene cada enfoque.
2. **Describir** Docker (imagen, contenedor, Dockerfile, Docker Compose) y ejecutar un stack de staging con `docker compose up`.
3. **Crear** una VM de laboratorio con snapshots (VirtualBox/Hyper-V) para practicar SSH y hosting sin riesgo en el host.
4. **Diagnosticar** fallos por capa (DNS, TLS, MX, SSH, contenedores, caché) usando síntoma → causa → acción.
5. **Completar** el reto integrador: subdominio staging → DNS → VPS con Nginx HTTPS → deploy SSH → `docker compose` con app de prueba.

## Prerrequisitos

- **Clase 1 — Fundamentos web:** dominios, DNS, IP, navegadores y caché.
- **Clase 2 — Hosting, correo y HTTPS:** tipos de hosting, registros MX/SPF, certificados TLS y `certbot`.
- **Clase 3 — Administración remota:** SSH con claves, SFTP/FileZilla, firewall básico (`ufw`) y despliegue por terminal.
- Equipo con virtualización habilitada en BIOS (recomendado para laboratorio de VMs y Docker Desktop en Windows).

Esta lección **cierra el curso** integrando lo aprendido: un operador que ve «sitio caído» debe saber si el fallo está en propagación DNS, certificado vencido o contenedor que no escucha el puerto — no reiniciar todo al azar.

## Contenido

### Introducción — De la administración remota al stack reproducible

**Sección TSX:** `ObjetivosSection`

En las clases anteriores configuraste dominio, HTTPS y acceso SSH a un VPS. Ahora el desafío es **reproducir entornos** sin instalar manualmente Node, PostgreSQL o Nginx en cada servidor, y **diagnosticar** fallos que cruzan capas (DNS, TLS, correo, SSH, contenedores).

<!-- interactive: Callout -->
{
  "title": "Regla de oro del curso",
  "children": "No cambies nameservers y MX el mismo día sin backup de registros. Exporta la zona DNS antes de migrar correo o hosting."
}

---

### 1) Contenedores: qué son y por qué importan

**Sección TSX:** `ContenedoresSection` (parte 1)

#### Qué es

Un **contenedor** empaqueta una aplicación junto con sus dependencias — binarios, librerías, variables de entorno y configuración — en una **imagen** portable. Al ejecutarse, el contenedor corre como proceso aislado que **comparte el kernel del sistema operativo host**. No virtualiza hardware ni un sistema operativo completo.

#### Para qué sirve / Por qué importa

En LATAM, equipos pequeños despliegan en VPS regionales (DigitalOcean, AWS sa-east-1, proveedores locales) sin presupuesto para clusters. Un contenedor garantiza que la API que funciona en la laptop del desarrollador en Bogotá se comporte igual en el servidor de São Paulo. Reduce el clásico *«en mi máquina sí corre»*.

#### Cómo funciona

El ciclo de vida de un contenedor sigue tres pasos claros:

1. Se construye una **imagen** (plantilla inmutable) a partir de un Dockerfile o se descarga de un registro como Docker Hub.
2. `docker run` crea un **contenedor** — la instancia en ejecución — a partir de esa imagen.
3. El motor de contenedores (containerd/runc en Docker) usa **namespaces** y **cgroups** del kernel Linux para aislar procesos, red y sistema de archivos sin arrancar un SO invitado.

#### Estructura / Composición

Un stack basado en contenedores se compone de piezas con roles distintos. La **imagen** es la plantilla de solo lectura formada por capas apiladas; el **contenedor** es la instancia viva de esa imagen. El **registro** (Docker Hub, GHCR) almacena imágenes remotas para compartir entre equipos. Los **volúmenes** persisten datos fuera del ciclo de vida del contenedor — sin ellos, al borrar el contenedor se pierde el estado. Las **redes** permiten que varios contenedores se comuniquen entre sí y con el host.

| Elemento | Rol |
|----------|-----|
| **Imagen** | Plantilla de solo lectura (capas apiladas) |
| **Contenedor** | Instancia en ejecución de una imagen |
| **Registro** | Repositorio remoto de imágenes (Docker Hub, GHCR) |
| **Volumen** | Persistencia de datos fuera del ciclo de vida del contenedor |
| **Red** | Comunicación entre contenedores y el host |

#### Ventajas y desventajas

Los contenedores arrancan en segundos y consumen menos RAM y CPU que una VM porque no duplican un kernel completo. La imagen es reproducible de desarrollo a CI y producción, y el escalado horizontal (más réplicas) es natural. Sin embargo, requieren un kernel compatible — Linux nativo o WSL 2 en Windows — y no sustituyen una VM si necesitas otro sistema operativo o kernel distinto. La curva de aprendizaje incluye redes, volúmenes y permisos; la orquestación manual no escala, y para muchos servicios se usa Compose o Kubernetes.

| Ventajas | Desventajas |
|----------|-------------|
| Arranque en segundos | Requiere kernel compatible (Linux nativo o WSL 2 en Windows) |
| Imagen reproducible dev → CI → prod | No sustituye una VM si necesitas otro SO o kernel |
| Menor consumo de RAM/CPU que una VM | Curva de aprendizaje (redes, volúmenes, permisos) |
| Escalado horizontal (más réplicas) | Orquestación manual no escala; Compose/K8s para muchos servicios |

#### Ejemplo concreto

Una fintech en Medellín empaqueta su API Node.js en una imagen `node:20-alpine`. En staging corre un contenedor; en producción, tres réplicas detrás de Nginx. Misma imagen, distinto `docker compose` o variables de entorno.

#### Señales de buen y mal uso

- **Buen uso:** imagen pequeña (Alpine), usuario no-root, variables sensibles fuera de la imagen, healthcheck definido.
- **Mal uso:** contenedor como root sin necesidad, secretos hardcodeados en Dockerfile, imagen de 2 GB con SO completo innecesario, tratar el contenedor como VM persistente sin volúmenes.

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Confundir contenedor con VM: no puedes instalar Windows dentro de un contenedor Linux. Para otro SO completo, usa una máquina virtual."
}

---

### 2) Docker: plataforma, Dockerfile y Docker Compose

**Sección TSX:** `ContenedoresSection` (parte 2)

#### Qué es

**Docker** es la plataforma más extendida para crear, distribuir y ejecutar contenedores. Incluye el **Docker Engine** (daemon que gestiona imágenes y contenedores), la **Docker CLI** (`docker build`, `docker run`, `docker compose`) y **Docker Desktop** (entorno gráfico para Windows/macOS que usa WSL 2 o un hypervisor ligero).

**Kubernetes (K8s)** orquesta cientos de contenedores en clusters; **Docker Compose** orquesta pocos servicios en un solo host — ideal para staging y laboratorio POSW.

#### Para qué sirve / Por qué importa

Docker estandariza el despliegue en el curso: el estudiante no instala Node, PostgreSQL ni Nginx directamente en el VPS de prueba; levanta un `docker-compose.yml` y replica el entorno en minutos. Es el puente entre administración remota (clase 3) y el stack web completo.

#### Cómo funciona — Dockerfile

El **Dockerfile** es un script declarativo que define cómo construir la imagen. Cada instrucción añade una capa:

1. `FROM` — imagen base.
2. `WORKDIR` — directorio de trabajo.
3. `COPY` / `ADD` — archivos al contexto de build.
4. `RUN` — comandos durante la construcción.
5. `EXPOSE` — puerto documentado.
6. `CMD` / `ENTRYPOINT` — comando al arrancar el contenedor.

<!-- code: dockerfile -->
```dockerfile
FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 3000
CMD ["node", "server.js"]
```

Este Dockerfile instala dependencias de producción, copia el código, crea un usuario no-root y expone el puerto 3000. Es el patrón recomendado para staging de una API Node.js.

#### Cómo funciona — Docker Compose

**Docker Compose** lee un archivo `docker-compose.yml` y levanta varios servicios (app, base de datos, proxy) con redes y volúmenes compartidos. Un solo `docker compose up -d` despliega el stack completo.

<!-- code: yaml -->
```yaml
services:
  api:
    build: .
    environment:
      DATABASE_URL: postgres://app:secret@db:5432/staging
      NODE_ENV: staging
    depends_on:
      db:
        condition: service_healthy
    networks:
      - backend

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: staging
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 5s
      retries: 5
    networks:
      - backend

  web:
    image: nginx:1.25-alpine
    ports:
      - "8080:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - api
    networks:
      - backend

volumes:
  pgdata:

networks:
  backend:
```

Observa el `depends_on` con `condition: service_healthy`: la API no arranca hasta que PostgreSQL responda a `pg_isready`. Sin ese healthcheck, la API puede entrar en crash loop al intentar conectar a una BD que aún no escucha.

#### Tipos / Variantes

| Herramienta | Alcance | Cuándo usarla |
|-------------|---------|---------------|
| `docker run` | Un contenedor | Prueba rápida, laboratorio |
| Dockerfile + `docker build` | Imagen propia | App custom |
| Docker Compose | Multi-servicio, un host | Staging, desarrollo local |
| Kubernetes | Cluster, autoescalado | Producción a escala (mención) |

#### Comandos esenciales

<!-- code: bash -->
```bash
# Construir imagen desde Dockerfile
docker build -t mi-api:staging .

# Primer contenedor de prueba
docker pull nginx:alpine
docker run -d -p 8080:80 --name web nginx:alpine
docker ps
docker logs web

# Stack completo con Compose
docker compose up -d --build
docker compose ps
docker compose logs -f api
docker compose down
```

#### Señales de buen y mal uso

- **Buen uso:** `.dockerignore`, multi-etapa para reducir tamaño, `depends_on` con healthcheck, puertos mapeados explícitos (`8080:80`).
- **Mal uso:** `latest` sin fijar versión en producción, montar `/` del host, olvidar `docker compose down` y dejar contenedores huérfanos consumiendo puertos.

<!-- interactive: StepReveal -->
{
  "title": "Docker Desktop en Windows",
  "steps": [
    {
      "title": "1. Requisitos de hardware",
      "content": "Habilita virtualización en BIOS/UEFI. Docker Desktop en Windows requiere WSL 2 o un hypervisor compatible."
    },
    {
      "title": "2. Instalar WSL 2",
      "content": "Ejecuta `wsl --install` en PowerShell como administrador. Reinicia el equipo y verifica con `wsl --status`."
    },
    {
      "title": "3. Instalar Docker Desktop",
      "content": "Descarga Docker Desktop, activa la integración con WSL 2 y reinicia el daemon si aparece error de virtualización."
    },
    {
      "title": "4. Verificar instalación",
      "content": "Ejecuta `docker run hello-world`. Si el contenedor imprime mensaje de éxito, el motor está operativo."
    }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué un contenedor arranca en segundos y una VM en minutos? Relaciona tu respuesta con el kernel compartido frente al SO invitado completo.",
  "hints": ["Piensa en qué capas arranca cada tecnología", "¿Cuántos kernels corren en el host?"],
  "expectedKeywords": ["kernel", "SO invitado", "segundos", "virtualiza"],
  "successMessage": "Correcto. El contenedor reutiliza el kernel del host; la VM debe arrancar un sistema operativo completo con su propio kernel."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completar docker-compose.yml",
  "template": "services:\n  web:\n    image: nginx:1.25-alpine\n    ports:\n      - \"{{PUERTO}}\"\n  api:\n    build: .\n    depends_on:\n      - {{SERVICIO}}",
  "blanks": [
  { "id": "PUERTO", "answer": "8080:80", "hint": "Mapea el puerto del host al 80 del contenedor" },
  { "id": "SERVICIO", "answer": "db", "hint": "La API depende de la base de datos" }
  ]
}

---

### 3) Contenedor vs máquina virtual: cuándo elegir cada uno

**Sección TSX:** `ContenedoresSection` (parte 3) + `VirtualizacionSection` (intro comparativa)

#### Qué es

Una **máquina virtual (VM)** emula hardware completo mediante un **hipervisor** (VirtualBox, Hyper-V, KVM, VMware) y ejecuta un **sistema operativo invitado** independiente con su propio kernel. Un **contenedor** comparte el kernel del host y solo aísla el espacio de procesos del usuario.

#### Para qué sirve / Por qué importa

Elegir mal cuesta tiempo y dinero: una startup en CDMX no necesita una VM Windows completa para servir una API Node; un contenedor basta. Pero si el laboratorio requiere practicar Ubuntu Server + `systemd` + firewall como en un VPS real, la VM reproduce mejor ese escenario.

#### Cómo funciona — comparación de capas

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph VM[\"Máquina virtual\"]\n    H1[Hardware físico]\n    HV[Hipervisor<br/>VirtualBox / Hyper-V / KVM]\n    SO1[SO invitado completo<br/>kernel + userspace]\n    APP1[Aplicación]\n    H1 --> HV --> SO1 --> APP1\n  end\n\n  subgraph CTR[\"Contenedor Docker\"]\n    H2[Hardware físico]\n    SO2[SO host — un solo kernel]\n    ENG[Motor Docker<br/>containerd / runc]\n    APP2[Contenedor<br/>proceso aislado]\n    H2 --> SO2 --> ENG --> APP2\n  end"
}

En la VM, cada capa inferior sostiene un SO invitado completo. En el contenedor, el kernel del host es compartido; Docker solo aísla procesos, red y filesystem.

#### Tipos / Variantes de hipervisores

| Hipervisor | Plataforma | Uso típico en POSW |
|------------|------------|-------------------|
| VirtualBox | Win/macOS/Linux | Laboratorio gratuito, snapshots |
| Hyper-V | Windows Pro/Enterprise | VMs en equipos institucionales |
| KVM | Linux | Base de muchos clouds |
| VMware Workstation/Fusion | Multi | Rendimiento y snapshots avanzados |

#### Ventajas y desventajas

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "VM", "Contenedor"],
  "rows": [
    ["SO", "Completo por instancia", "Comparte kernel del host"],
    ["Tamaño", "Gigabytes", "Megabytes"],
    ["Arranque", "Minutos", "Segundos"],
    ["Aislamiento", "Fuerte (hardware virtualizado)", "Proceso/red (namespaces)"],
    ["Uso típico", "SO distinto, laboratorio GUI, legacy", "Microservicios, APIs, staging web"],
    ["Snapshots", "Sí (estado de disco completo)", "No equivalente; imágenes inmutables"]
  ]
}

#### Ejemplo concreto

**Escenario VM:** practicar `certbot --nginx` en Ubuntu Server 22.04 dentro de VirtualBox antes de tocar el VPS de la universidad. Snapshot «limpio» antes de romper `ufw`.

**Escenario contenedor:** levantar `nginx:alpine` + API en staging con Compose; si falla, `docker compose down && docker compose up` en segundos.

#### Señales de buen y mal uso

- **Elegir VM cuando:** necesitas kernel/SO distinto al host, GUI completa, simular servidor bare-metal, probar Hyper-V en Windows.
- **Elegir contenedor cuando:** empaquetar app web/API, CI/CD, mismo kernel Linux en host y destino, despliegue rápido en VPS.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un equipo en Buenos Aires debe probar `ufw` y `systemd` en Ubuntu Server antes de tocar el VPS de producción. ¿Recomendarías VM o contenedor? Justifica en una frase.",
  "hints": ["¿Necesitas un SO completo con su propio kernel?", "¿El laboratorio simula un servidor bare-metal?"],
  "expectedKeywords": ["VM", "Ubuntu", "snapshot", "laboratorio"],
  "successMessage": "Correcto. La VM reproduce mejor un servidor completo con firewall y systemd; los snapshots permiten volver atrás si algo sale mal."
}

---

### 4) Virtualización (VMs) y laboratorio seguro

**Sección TSX:** `VirtualizacionSection`

#### Qué es

La **virtualización de SO** permite ejecutar varias máquinas lógicas sobre un host físico. En POSW se usa para **laboratorio seguro**: experimentar con SSH, Nginx y firewall sin comprometer el equipo principal.

#### Para qué sirve / Por qué importa

Antes de ejecutar `certbot` o abrir puertos en un VPS pagado, conviene practicar en un entorno aislado. Los **snapshots** guardan el estado del disco en un punto conocido; si una práctica de `ufw` bloquea el SSH, restauras el snapshot en lugar de reinstalar el SO.

#### Cómo funciona — crear VM de laboratorio

<!-- interactive: StepReveal -->
{
  "title": "Crear VM de laboratorio",
  "steps": [
    {
      "title": "1. Descargar ISO",
      "content": "Obtén Ubuntu Server 22.04 LTS desde el sitio oficial. Verifica el checksum si el laboratorio lo exige."
    },
    {
      "title": "2. Configurar recursos",
      "content": "Asigna RAM (mínimo 2 GB), disco (20 GB) y adaptador de red NAT o bridge según necesites acceso externo."
    },
    {
      "title": "3. Instalar SO invitado",
      "content": "Completa la instalación, crea usuario con sudo y habilita OpenSSH Server durante el setup o con `apt install openssh-server`."
    },
    {
      "title": "4. Snapshot antes de experimentar",
      "content": "Toma un snapshot con nombre descriptivo, por ejemplo `pre-nginx-20250623`, no «Snapshot 1»."
    },
    {
      "title": "5. Probar Nginx y SSH",
      "content": "Instala Nginx, configura un virtual host de prueba y conéctate por SSH desde el host. Si algo falla, restaura el snapshot."
    }
  ]
}

#### Snapshot desde CLI (referencia VirtualBox)

<!-- code: bash -->
```bash
# Crear snapshot desde CLI (opcional en laboratorio)
VBoxManage snapshot "Ubuntu-Lab" take "pre-nginx-$(date +%Y%m%d)" --description "Antes de instalar Nginx"
```

#### Señales de buen y mal uso

- **Buen uso:** snapshots con fecha y propósito (`pre-ufw-20250623`), red bridge/NAT documentada, guest additions instaladas si aplica.
- **Mal uso:** snapshots sin nomenclatura, VM sin red por adaptador mal configurado, usar la VM de producción para experimentos destructivos.

<!-- interactive: Callout -->
{
  "title": "Síntoma: VM sin red",
  "children": "Si `ping` al gateway falla desde el invitado, revisa el modo del adaptador (NAT vs bridge) en VirtualBox o Hyper-V antes de reinstalar el SO."
}

---

### 5) Troubleshooting integrador por capas

**Sección TSX:** `SolucionProblemasSection`

#### Qué es

El **troubleshooting integrador** aplica la metodología de capas del curso completo: DNS → hosting/TLS → correo → SSH → contenedores/VM → caché cliente. Cada síntoma apunta a una capa; el operador confirma con una herramienta antes de cambiar configuración.

#### Para qué sirve / Por qué importa

Un operador en Buenos Aires que ve «sitio caído» debe saber si el fallo está en propagación DNS, certificado vencido o contenedor que no escucha el puerto. Diagnosticar TLS cuando el fallo es DNS desperdicia tiempo y puede empeorar la situación si se tocan registros innecesariamente.

#### Cómo funciona — metodología de diagnóstico

1. **Reproducir** el fallo y anotar el mensaje exacto (navegador, cliente correo, terminal).
2. **Acotar la capa:** ¿DNS resuelve? ¿HTTPS válido? ¿Puerto abierto? ¿Servicio activo?
3. **Consultar logs:** DevTools → Red, `journalctl -u nginx`, `docker logs`, panel del hosting.
4. **Un cambio a la vez** y verificar antes del siguiente.
5. **Documentar** la solución (runbook interno).

#### Tabla de diagnóstico por síntoma

<!-- interactive: CompareTable -->
{
  "headers": ["Síntoma", "Capa", "Causa probable", "Acción de diagnóstico", "Corrección"],
  "rows": [
    ["Dominio no abre / no resuelve", "DNS", "Registro A/CNAME incorrecto, TTL alto, propagación pendiente", "`dig ejemplo.com`, `nslookup`, whatsmydns.net", "Corregir registro; esperar TTL; limpiar caché DNS local"],
    ["Sitio carga por IP pero no por dominio", "DNS", "Mismo que arriba; caché del resolver", "Comparar `curl http://IP` vs `curl http://dominio`", "Arreglar zona DNS; verificar que A apunta a IP correcta"],
    ["Navegador muestra «No seguro» / certificado inválido", "TLS", "Certificado vencido, SAN incorrecto, HTTP sin redirección", "`openssl s_client -connect dominio:443`, DevTools → Seguridad", "`certbot renew` o `certbot --nginx`; forzar HTTPS en Nginx"],
    ["Correo rebota o va a spam", "Correo/DNS", "MX incorrectos, SPF/DKIM ausentes, MX duplicados", "`dig MX dominio`, revisar TXT SPF", "Un solo proveedor MX; añadir SPF/DKIM; eliminar registros obsoletos"],
    ["`ssh: Connection refused`", "SSH/Red", "`sshd` detenido, firewall, puerto erróneo", "`ssh -v usuario@IP`, `systemctl status ssh`, `ufw status`", "Iniciar servicio; abrir puerto 22; verificar IP y clave"],
    ["FileZilla no conecta", "SFTP", "FTP plano bloqueado, protocolo o credenciales incorrectas", "Confirmar SFTP puerto 22, no FTP 21", "Usar SFTP con clave SSH; verificar usuario"],
    ["Contenedor caído / puerto no responde", "Contenedor", "Imagen corrupta, puerto no mapeado, crash al inicio", "`docker ps -a`, `docker logs <nombre>`, `docker port <nombre>`", "Revisar Dockerfile/CMD; mapear `-p 8080:80`; `docker compose up` de nuevo"],
    ["`docker run` falla en Windows", "Host/Docker", "WSL 2 o virtualización deshabilitada en BIOS", "Mensaje de Docker Desktop, `wsl --status`", "Habilitar virtualización; `wsl --install`; reiniciar Docker Desktop"],
    ["VM sin red", "VM", "Adaptador NAT/bridge mal configurado", "`ping` gateway desde invitado; revisar VirtualBox/Hyper-V", "Cambiar modo de red; reinstalar guest additions si aplica"],
    ["Sitio muestra versión antigua", "Caché", "Caché navegador o CDN", "Hard refresh; ventana incógnito", "Ctrl+Shift+R; purgar CDN; revisar `Cache-Control`"]
  ]
}

#### Comandos de diagnóstico por capa

<!-- code: bash -->
```bash
# DNS
dig +short staging.tienda.com.co A
dig MX tienda.com.co

# TLS
curl -vI https://staging.tienda.com.co 2>&1 | grep -E 'expire|SSL'

# Contenedor caído
docker ps -a
docker logs tienda-api-1 --tail 50

# SSH verboso
ssh -v deploy@190.25.80.42
```

#### Casos reales

**E-commerce en Lima (`moda.pe`):** Sin staging, los cambios iban directo a producción. Un error en variables de entorno tumbaron el checkout 2 horas en Black Friday. La decisión fue crear `staging.moda.pe` → registro A al VPS → Nginx reverse proxy → `docker compose` con imagen etiquetada `moda-api:v1.4.2`. Lección: contenedor + Compose no reemplaza DNS ni HTTPS; integra con lo aprendido en clases 1–3.

**Consultora en Santiago:** Cliente reporta «sitio no seguro». El desarrollador asume DNS porque «ayer cambiaron el hosting». Diagnóstico: `dig cliente.cl` resuelve bien; `curl -vI https://cliente.cl` muestra certificado expirado hace 12 días. Acción: `certbot renew --dry-run` → timer systemd → `certbot renew`. Lección: IP que responde y DNS correcto no implican TLS válido; acotar capa antes de tocar registros.

#### Señales de buen y mal uso

- **Buen diagnóstico:** parte del síntoma, confirma capa con una herramienta (`dig`, `curl -vI`, `docker logs`), documenta.
- **Mal diagnóstico:** reiniciar servidor sin revisar logs, cambiar DNS y TLS simultáneamente, asumir «propagación» sin verificar el registro, hard refresh como única solución cuando un CDN también cachea.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Síntoma: `curl http://IP` funciona, pero `curl http://dominio` falla. Escribe tres comprobaciones en orden y la causa más probable.",
  "hints": ["Empieza por la capa DNS", "Compara resolución con `dig`", "¿El registro A apunta a la IP correcta?"],
  "expectedKeywords": ["dig", "DNS", "registro A", "propagación"],
  "successMessage": "Correcto. La causa más probable es un registro DNS incorrecto o propagación pendiente, no TLS ni contenedores."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el diagnóstico «dominio resuelve pero certificado expirado»: (a) `certbot renew`, (b) confirmar DNS con `dig`, (c) verificar fechas con `curl -vI`, (d) probar en navegador incógnito. Indica el orden correcto.",
  "hints": ["Primero confirma que DNS resuelve", "Luego verifica el certificado", "La renovación va después de confirmar el problema"],
  "expectedKeywords": ["b", "c", "a", "d"],
  "successMessage": "Orden: (b) dig → (c) curl -vI → (a) certbot renew → (d) incógnito para descartar caché."
}

---

### 6) Flujo integrador — deploy por SSH + Compose

**Sección TSX:** `ContenedoresSection` (cierre) + `RetoIntegradorSection` (intro)

#### Secuencia staging completa

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant Dev as Desarrollador\n  participant DNS as DNS\n  participant VPS as VPS + Nginx HTTPS\n  participant DC as Docker Compose\n\n  Dev->>DNS: Crear A staging.tienda.mx → IP VPS\n  Dev->>VPS: ssh deploy@IP\n  Dev->>VPS: certbot --nginx -d staging.tienda.mx\n  Dev->>DC: docker compose up -d --build\n  DC-->>Dev: API en puerto interno 3000\n  VPS-->>Dev: https://staging.tienda.mx responde 200"
}

#### Deploy por SSH + Compose

<!-- code: bash -->
```bash
# Desde la laptop del desarrollador
ssh deploy@190.25.80.42
cd /opt/staging-tienda
git pull origin main
docker compose pull
docker compose up -d --build
curl -I http://localhost:8080/health
```

Este flujo conecta la clase 3 (SSH sin contraseña root) con contenedores: el usuario `deploy` tiene permisos Docker y el stack se actualiza de forma reproducible.

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

### «Stack staging para startup LATAM»

Una startup en Guadalajara lanza `tienda.ejemplo.mx` y necesita entorno de pruebas en `staging.tienda.ejemplo.mx` antes de producción.

#### Requisitos

1. **DNS:** registro A de `staging` apuntando al VPS; documentar TTL elegido.
2. **HTTPS:** Nginx en VPS con certificado Let's Encrypt (`certbot --nginx`).
3. **Deploy:** acceso por SSH con clave (sin contraseña root); usuario `deploy` con permisos Docker.
4. **Contenedores:** `docker-compose.yml` con API de prueba (Node o nginx estático) + healthcheck.
5. **Fallo simulado:** documentar un incidente (ej. certificado expirado, contenedor sin puerto mapeado, DNS sin propagar) y cómo lo diagnosticaste con la tabla de la lección.

#### Entregables

- Lista de registros DNS (mínimo A para staging).
- Fragmento de `Dockerfile` o `docker-compose.yml` usado.
- Comandos: `ssh`, `certbot`, `docker compose up`, herramienta de diagnóstico (`dig`, `docker logs`, etc.).
- Decisión justificada: ¿por qué contenedor para staging y no VM completa?

#### Criterio de éxito

DNS coherente, HTTPS activo en staging, deploy reproducible por SSH + Compose, fallo simulado resuelto con metodología por capas documentada.

<!-- interactive: PracticeExercise -->
{
  "prompt": "En el reto integrador, documenta un fallo simulado (certificado expirado, puerto no mapeado o DNS sin propagar). Escribe: síntoma → capa → herramienta de diagnóstico → corrección aplicada.",
  "hints": ["Usa la tabla de diagnóstico de la lección", "Un cambio a la vez", "Incluye al menos un comando (`dig`, `docker logs`, `curl -vI`)"],
  "expectedKeywords": ["síntoma", "capa", "dig", "docker", "certbot"],
  "successMessage": "Buen enfoque. Documentar síntoma → capa → acción es la base de un runbook operativo."
}

---

## Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe un `Dockerfile` mínimo que copie `index.html` a una imagen `nginx:alpine` y exponga el puerto 80. Indica las instrucciones clave (`FROM`, `COPY`, `EXPOSE`).",
  "hints": ["La imagen base es nginx:alpine", "COPY index.html a /usr/share/nginx/html/", "EXPOSE 80"],
  "expectedKeywords": ["FROM", "nginx", "COPY", "EXPOSE", "80"],
  "successMessage": "Ejemplo válido: FROM nginx:alpine, COPY index.html /usr/share/nginx/html/, EXPOSE 80."
}

---

## Miniquiz

**Sección TSX:** `MiniquizSection`

Datos de implementación en `src/lib/teaching-quizzes/configuracion-servicios-web.ts` → clave `clase-04-virtualizacion-diagnostico`.

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Cuál es la ventaja principal de un contenedor Docker frente a una VM?",
      "options": [
        "Virtualiza un SO completo distinto al host",
        "Arranque rápido y menor consumo al compartir kernel",
        "No requiere imágenes",
        "Elimina la necesidad de red"
      ],
      "correctIndex": 1,
      "feedback": "Los contenedores comparten el kernel del host; las VMs virtualizan hardware y SO completo."
    },
    {
      "question": "El dominio no resuelve pero la IP responde ping. ¿Qué revisar primero?",
      "options": [
        "Certificado TLS",
        "Registros DNS y propagación",
        "`docker logs`",
        "Caché del navegador"
      ],
      "correctIndex": 1,
      "feedback": "Si la IP funciona pero el nombre no, el problema suele estar en DNS, no en TLS ni en contenedores."
    },
    {
      "question": "¿Para qué sirven los snapshots en una VM de laboratorio?",
      "options": [
        "Acelerar Internet",
        "Restaurar un estado conocido antes de experimentos",
        "Renovar certificados TLS",
        "Configurar registros MX"
      ],
      "correctIndex": 1,
      "feedback": "Un snapshot guarda el estado del disco para volver atrás si una práctica de SSH o firewall sale mal."
    },
    {
      "question": "¿Qué pasaría si la API en Compose arranca antes que PostgreSQL sin healthcheck?",
      "options": [
        "Docker instala PostgreSQL automáticamente",
        "La API puede fallar al conectar y quedar en crash loop hasta reinicio manual",
        "Nginx renueva el certificado solo",
        "El kernel del host cambia a Windows"
      ],
      "correctIndex": 1,
      "feedback": "Sin `depends_on` + healthcheck, la app puede intentar conectar a una BD que aún no escucha. `depends_on: condition: service_healthy` mitiga esto."
    },
    {
      "question": "En el reto integrador, ¿qué debe forzarse en producción además del staging funcional?",
      "options": [
        "FTP en puerto 21",
        "HTTP sin cifrar para mayor velocidad",
        "HTTPS en todo el tráfico web",
        "SSH con contraseña de root"
      ],
      "correctIndex": 2,
      "feedback": "HTTPS protege datos en tránsito; es estándar en producción. SSH debe usar claves, no root por contraseña."
    }
  ]
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el curso **Configuración de Servicios Web**. Integraste:

- **Fundamentos** (clase 1): dominio, DNS, IP y navegadores.
- **Hosting y seguridad** (clase 2): HTTPS, correo y certificados.
- **Administración remota** (clase 3): SSH, SFTP y despliegue por terminal.
- **Virtualización y diagnóstico** (clase 4): contenedores Docker, VMs de laboratorio y troubleshooting por capas.

La competencia del curso — *instalar y configurar artefactos de software relacionados con protocolos y servicios de Internet* — se cumple cuando puedes levantar un staging reproducible, protegerlo con HTTPS y diagnosticar fallos sin reiniciar servicios al azar.

Para profundizar en Docker avanzado (Dockerfile multi-etapa, empaquetado React), consulta la lección `posw/herramientas-desarrollo`.

---

## Guía docente

**Sección TSX:** `GuiaDocenteSection`

| Bloque | Minutos | Contenido |
|--------|---------|-----------|
| 0–20 | Introducción + contenedores (qué es, ciclo imagen/contenedor) | Objetivos, Callout regla de oro, bloques pedagógicos concepto 1 |
| 20–45 | Docker: Dockerfile, Compose, comandos | CodeFiddle dockerfile/yaml/bash, StepReveal Docker Desktop |
| 45–70 | VM vs contenedor + laboratorio VM | MermaidDiagram capas, CompareTable, StepReveal VM, PracticeExercise |
| 70–110 | Troubleshooting integrador + casos reales | Tabla diagnóstico, comandos bash, PracticeExercise dominio vs IP |
| 110–120 | Reto integrador, quiz y cierre | RetoIntegradorSection, Miniquiz (5 preguntas), CierreSection |

**Errores frecuentes a anticipar en clase:**

- Confundir contenedor con VM (Windows dentro de contenedor Linux).
- Olvidar mapear puertos (`-p 8080:80`).
- Imagen `nginx:latest` sin tag fijo en producción.
- Diagnosticar TLS cuando el fallo es DNS.
- MX duplicados tras migrar correo.
- Snapshots sin nomenclatura descriptiva.
