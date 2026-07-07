---
track: posw
slug: herramientas-desarrollo
title: "Herramientas de Desarrollo"
order: 17
prerequisites:
  - modelo-cliente-servidor
related:
  - backend
  - react
  - bases-de-datos
  - frontend
source_brief: kb/education/pipeline/posw/herramientas-desarrollo/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - XamppSection
  - HelloPhpSection
  - DockerConceptosSection
  - DockerComandosSection
  - ComparativaSection
  - ReactDockerSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Describir** XAMPP (Apache, MariaDB, PHP, phpMyAdmin) y levantar un entorno local con `htdocs` como document root.
- **Explicar** conceptos Docker: imagen, contenedor, Dockerfile, Compose y registro (Docker Hub).
- **Ejecutar** comandos esenciales de Docker (`pull`, `run`, `ps`, `logs`, `build`) y mapear puertos host→contenedor.
- **Comparar** XAMPP vs Docker en reproducibilidad, portabilidad y aptitud para producción.
- **Empaquetar** una app React + Vite en imagen multi-etapa (build Node + serve Nginx) y opcionalmente usar Compose para desarrollo.

## Prerrequisitos

- **Lección `modelo-cliente-servidor`:** roles cliente/servidor, HTTP y capas de una app web.
- Familiaridad con terminal y comandos básicos (`cd`, `ls`, `curl`).
- Conocimiento básico de React y npm (lección `react`).

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosSection`

Esta lección cubre dos formas de montar un entorno de desarrollo web local: XAMPP para stacks PHP clásicos y Docker para entornos reproducibles y portables.

<!-- interactive: Callout -->
{
  "title": "Desarrollo local ≠ producción",
  "children": "XAMPP acelera el aprendizaje en PHP local. Docker prioriza que dev, CI y producción corran el mismo entorno. Ninguno reemplaza hardening y escalado industrial por sí solo."
}

---

### 1) XAMPP: stack local en un paso

**Sección TSX:** `XamppSection`

#### Mapa mental

- **XAMPP:** paquete cross-platform — **X** (cross-platform), **A**pache, **M**ariaDB, **P**HP, **P**erl.
- **Apache:** servidor HTTP en puertos 80/443; sirve archivos desde `htdocs/`.
- **MariaDB/MySQL:** motor relacional en puerto 3306.
- **PHP:** lenguaje interpretado por Apache; genera HTML dinámico.
- **phpMyAdmin:** interfaz web en `/phpmyadmin` para administrar la BD.
- **Document root:** carpeta que Apache expone (`htdocs/mi-proyecto/index.php`).

#### Stack XAMPP local

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  BR[Navegador] -->|HTTP :80| AP[Apache]\n  AP --> PHP[PHP en htdocs]\n  PHP --> DB[(MariaDB :3306)]\n  BR --> PMA[phpMyAdmin]\n  PMA --> DB"
}

#### Instalar y arrancar XAMPP (Linux)

<!-- code: bash -->
```bash
chmod +x xampp-linux-x64-*.run
sudo ./xampp-linux-x64-*.run
sudo /opt/lampp/lampp start

# Verificar Apache y MariaDB
curl -I http://localhost
```

#### Estructura de carpetas clave

| Ruta | Propósito |
|------|-----------|
| `/opt/lampp/htdocs/` | Document root — aquí van tus `.php` |
| `/opt/lampp/mysql/data/` | Datos de MariaDB |
| `http://localhost/phpmyadmin` | Admin web de la BD |

#### Errores comunes

- Editar archivos fuera de `htdocs`: Apache no los sirve.
- Olvidar `lampp start`: MySQL o la página no responden.
- Usar XAMPP en producción sin hardening.

---

### 2) Hello World en PHP

**Sección TSX:** `HelloPhpSection`

#### Ejemplo en htdocs

<!-- code: php -->
```php
<?php
// /opt/lampp/htdocs/hola/index.php
$nombre = $_GET['nombre'] ?? 'Mundo';
echo "<h1>Hola, {$nombre}!</h1>";
echo "<p>Servidor: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";
?>
```

URL de prueba: `http://localhost/hola/?nombre=Angular`

#### Flujo request/response en XAMPP

1. Navegador solicita `GET /hola/?nombre=Angular`.
2. Apache recibe la petición y delega a PHP.
3. PHP lee `$_GET`, genera HTML.
4. Apache devuelve la respuesta al cliente.

<!-- interactive: StepReveal -->
{
  "title": "Petición PHP en XAMPP",
  "steps": [
    { "title": "1. Request HTTP", "content": "El navegador envía GET /hola/?nombre=Angular al puerto 80." },
    { "title": "2. Apache + PHP", "content": "Apache ejecuta index.php y PHP procesa $_GET." },
    { "title": "3. Respuesta HTML", "content": "Se genera HTML dinámico con el nombre recibido." },
    { "title": "4. Renderizado", "content": "El navegador muestra Hola, Angular!" }
  ]
}

---

### 3) Conceptos Docker

**Sección TSX:** `DockerConceptosSection`

#### Mapa mental

- **Docker:** plataforma de contenedores; empaqueta app + dependencias en unidad portable que comparte el kernel del host.
- **Imagen (Image):** plantilla de solo lectura; se construye con `Dockerfile` o se descarga de un registry.
- **Contenedor (Container):** instancia en ejecución de una imagen; efímera salvo volúmenes persistentes.
- **Dockerfile:** instrucciones declarativas (`FROM`, `COPY`, `RUN`, `EXPOSE`, `CMD`).
- **Docker Compose:** orquesta varios contenedores desde `docker-compose.yml`.
- **Mapeo de puertos:** `-p 8080:80` expone puerto 80 del contenedor en 8080 del host.

#### VM vs contenedor

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "Máquina virtual", "Contenedor Docker"],
  "rows": [
    ["SO virtualizado", "SO completo por VM", "Comparte kernel del host"],
    ["Tamaño típico", "Gigabytes", "Megabytes"],
    ["Arranque", "Minutos", "Segundos"],
    ["Aislamiento", "Muy fuerte", "Proceso aislado, kernel compartido"],
    ["Uso típico", "SO distintos en un host", "Empaquetar apps con dependencias"]
  ]
}

#### Caso real: "en mi máquina funciona"

<!-- interactive: Callout -->
{
  "title": "Equipo académico con PHP distinto",
  "children": "Cuatro estudiantes con PHP 8.2 en Windows y 8.0 en Linux fallan en demo por extensiones distintas. Decisión: docker-compose.yml con php:8.2-apache y mariadb:11 fijas para todos y para CI."
}

---

### 4) Comandos Docker esenciales

**Sección TSX:** `DockerComandosSection`

#### Referencia rápida

<!-- code: bash -->
```bash
docker pull nginx:alpine
docker run -d -p 8080:80 --name mi-nginx nginx:alpine
docker ps
docker logs mi-nginx
docker exec -it mi-nginx sh
docker stop mi-nginx && docker rm mi-nginx
docker build -t mi-app:1.0 .
docker images
```

#### Completar mapeo de puertos

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el mapeo de puertos",
  "template": "docker run -d -p ___:80 --name web nginx:alpine",
  "blanks": [
    { "id": "blank1", "answer": "8080", "placeholder": "puerto host" }
  ]
}

#### Regla del mapeo

Formato `-p HOST:CONTENEDOR`. Con `-p 8080:80` accedes en `http://localhost:8080`, no en `:80`.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué Docker tiene mayor reproducibilidad que XAMPP si ambos corren en tu laptop?",
  "hints": ["Imagen fija", "Versiones declaradas", "Mismo Dockerfile en todo el equipo"],
  "expectedKeywords": ["imagen", "reproducible", "versión", "contenedor"],
  "successMessage": "Correcto. Docker fija versiones en la imagen; XAMPP depende de lo instalado en cada máquina."
}

---

### 5) XAMPP vs Docker

**Sección TSX:** `ComparativaSection`

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "XAMPP", "Docker"],
  "rows": [
    ["Instalación", "Un instalador gráfico", "Requiere Docker Engine y terminal"],
    ["Reproducibilidad", "Depende del SO y versiones locales", "Imagen idéntica en dev, CI y prod"],
    ["Producción", "No recomendado", "Estándar en deploy moderno"],
    ["Curva de aprendizaje", "Baja para PHP local", "Mayor al inicio"],
    ["Caso ideal", "Proyecto PHP académico individual", "Equipo que necesita entorno idéntico"]
  ]
}

---

### 6) React + Docker: multi-stage build

**Sección TSX:** `ReactDockerSection`

#### Flujo multi-stage

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  SRC[Código fuente] --> B[Etapa build<br/>node:20-alpine]\n  B --> DIST[dist/ estáticos]\n  DIST --> N[Etapa runtime<br/>nginx:alpine]\n  N --> RUN[Contenedor :80]\n  RUN --> HOST[localhost:3000]"
}

#### Dockerfile multi-etapa React + Nginx

<!-- code: docker -->
```dockerfile
# Etapa 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Crear proyecto y construir imagen

<!-- code: bash -->
```bash
npm create vite@latest hola-react -- --template react
cd hola-react
docker build -t hola-react:1.0 .
docker run -d -p 3000:80 --name hola-react hola-react:1.0
# Abrir http://localhost:3000
```

#### Docker Compose para desarrollo con hot reload

<!-- code: docker -->
```yaml
version: '3.8'
services:
  frontend:
    image: node:20-alpine
    working_dir: /app
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "5173:5173"
    command: sh -c "npm install && npm run dev -- --host"
```

Ejecutar: `docker compose up`

#### StepReveal: etapas del build

<!-- interactive: StepReveal -->
{
  "title": "Multi-stage Dockerfile React",
  "steps": [
    { "title": "1. FROM node:20-alpine AS build", "content": "Etapa temporal con Node para compilar." },
    { "title": "2. npm ci && npm run build", "content": "Instala dependencias y genera dist/ con assets estáticos." },
    { "title": "3. FROM nginx:alpine", "content": "Imagen final ligera sin Node." },
    { "title": "4. COPY --from=build", "content": "Solo copia dist/ a /usr/share/nginx/html." },
    { "title": "5. docker run -p 3000:80", "content": "El contenedor sirve la app en localhost:3000." }
  ]
}

#### Ordenar pasos del build

<!-- interactive: CodeChallenge -->
{
  "title": "Ordena el build React en Docker",
  "template": "1. ___\n2. ___\n3. ___\n4. ___\n5. ___",
  "blanks": [
    { "id": "blank1", "answer": "FROM node:20-alpine AS build", "placeholder": "paso a" },
    { "id": "blank2", "answer": "COPY package*.json", "placeholder": "paso b" },
    { "id": "blank3", "answer": "npm run build", "placeholder": "paso c" },
    { "id": "blank4", "answer": "copiar dist/ a imagen Nginx", "placeholder": "paso d" },
    { "id": "blank5", "answer": "docker build -t app .", "placeholder": "paso e" }
  ]
}

#### Errores comunes

- No usar `.dockerignore`: copia `node_modules` gigantes.
- Un solo stage: incluir Node en imagen final cuando solo necesitas Nginx.
- Persistir datos de BD en contenedor sin volumen: se pierden al `docker rm`.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Dónde debe ir index.php para que Apache en XAMPP lo sirva por defecto? ¿Qué pasa si lo guardas en tu carpeta home?",
  "hints": ["Document root", "htdocs"],
  "expectedKeywords": ["htdocs", "document root"],
  "successMessage": "Correcto. Solo htdocs es el document root; fuera de ahí Apache no sirve el archivo."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Entorno full-stack local con Docker Compose"**

Necesitas: frontend React (Vite), API PHP o Node, MariaDB, phpMyAdmin opcional.

1. Escribe un `docker-compose.yml` con al menos **2 servicios** (app + BD) y volúmenes para persistir datos.
2. Mapea puertos para acceder al frontend y a la BD desde el host.
3. Explica por qué no copiarías `node_modules` al contexto de build (`.dockerignore`).
4. Compara: ¿levantarías este mismo stack con XAMPP o Docker en un equipo de 5 devs? Justifica reproducibilidad.
5. Indica el comando para ver logs del servicio que falla al arrancar.

**Criterio de éxito:** compose válido, puertos documentados, volumen para BD, justificación XAMPP vs Docker alineada al tamaño del equipo.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Completa el reto: enumera servicios del compose, puertos mapeados, contenido de .dockerignore y comando para ver logs.",
  "hints": [
    "frontend + mariadb mínimo",
    "volumen para /var/lib/mysql",
    "node_modules y dist en .dockerignore",
    "docker compose logs -f servicio"
  ],
  "expectedKeywords": ["compose", "volumen", "dockerignore", "logs"],
  "successMessage": "Excelente. Has diseñado un entorno reproducible con Docker Compose."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has comparado XAMPP y Docker como herramientas para desarrollo web local.

**Ideas clave para retener:**

- **XAMPP** instala Apache + MariaDB + PHP + phpMyAdmin; el código va en `htdocs/`.
- **Docker** empaqueta app y dependencias en **imágenes**; los **contenedores** son instancias en ejecución.
- **`-p host:contenedor`** mapea puertos; navegas al puerto del host.
- **Multi-stage build** separa compilación (Node) de runtime (Nginx) para imágenes más pequeñas.
- **Docker** gana en reproducibilidad para equipos; **XAMPP** gana en simplicidad inicial para PHP solo.

**Siguiente paso:** lección `bases-de-datos` — SQL, integridad referencial y cuándo elegir NoSQL.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué significa la \"M\" en XAMPP?",
      "options": [
        "MongoDB",
        "MariaDB (MySQL)",
        "Memcached",
        "Microsoft SQL Server"
      ],
      "correctIndex": 1,
      "feedback": "XAMPP incluye MariaDB como motor relacional local."
    },
    {
      "question": "¿Dónde debe ir index.php para que Apache lo sirva por defecto?",
      "options": [
        "/opt/lampp/mysql/data/",
        "/opt/lampp/htdocs/ (document root)",
        "/etc/httpd/ssl/",
        "Carpeta home del usuario"
      ],
      "correctIndex": 1,
      "feedback": "htdocs es el document root de Apache en XAMPP."
    },
    {
      "question": "¿Qué es una imagen Docker?",
      "options": [
        "Un contenedor en ejecución",
        "Una plantilla de solo lectura para crear contenedores",
        "Una máquina virtual con su propio kernel",
        "Un archivo .php dinámico"
      ],
      "correctIndex": 1,
      "feedback": "La imagen es la plantilla; el contenedor es la instancia en ejecución."
    },
    {
      "question": "¿Qué hace -p 3000:80 en docker run?",
      "options": [
        "Limita la RAM a 3000 MB",
        "Mapea puerto 80 del contenedor al 3000 del host",
        "Expone solo HTTPS",
        "Elimina el contenedor al cabo de 3000 s"
      ],
      "correctIndex": 1,
      "feedback": "Formato host:contenedor; accedes vía localhost:3000."
    },
    {
      "question": "¿Cuándo es más adecuado Docker que XAMPP?",
      "options": [
        "Proyecto PHP académico de una sola persona sin DevOps",
        "Equipo que necesita entorno idéntico en dev, CI y producción",
        "Instalación rápida sin aprender terminal",
        "Solo editar WordPress local sin contenedores"
      ],
      "correctIndex": 1,
      "feedback": "Docker prioriza reproducibilidad y portabilidad; XAMPP prioriza simplicidad inicial en PHP."
    }
  ]
}
