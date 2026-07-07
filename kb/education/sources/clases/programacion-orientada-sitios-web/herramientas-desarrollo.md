# Instrucciones para frontend-developer: herramientas-desarrollo.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/herramientas-desarrollo.html`

---

1. Crear `clases/programacion-orientada-sitios-web/herramientas-desarrollo.html`. `<html lang="es">`. Título: "XAMPP y Docker | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "XAMPP", "Docker", "Comparativa", "Hello World React en Docker".
4. Hero: badge "Tema 18", `<h1>` "Herramientas de Desarrollo", subtítulo "XAMPP y Docker: entornos de desarrollo locales para aplicaciones web." Botón scroll a `#xampp`.
5. Crear `<section id="xampp">` padding 80px 0. Contiene:
   - `<h2>` "XAMPP".
   - Párrafo: "XAMPP es un paquete de software libre que instala en un solo paso un entorno de servidor web completo. El nombre es un acrónimo: X (cross-platform), Apache, MariaDB, PHP, Perl."
   - Componentes en tabla: Componente | Función | Puerto por defecto. Datos:
     - Apache | Servidor web HTTP | 80 / 443
     - MariaDB (MySQL) | Base de datos relacional | 3306
     - PHP | Lenguaje de servidor para generar HTML dinámico | — (ejecutado por Apache)
     - phpMyAdmin | Interfaz web para gestionar la BD | 80/phpmyadmin
     - Perl | Lenguaje de scripting adicional | — (menos usado)
   - Instalación en tres pasos con bloques de código:
     - Paso 1: descargar el instalador de `https://apachefriends.org` según el SO.
     - Paso 2 (Linux): dar permisos y ejecutar:
       ```bash
       chmod +x xampp-linux-x64-*.run
       sudo ./xampp-linux-x64-*.run
       sudo /opt/lampp/lampp start
       ```
     - Paso 3: verificar acceso en `http://localhost` y `http://localhost/phpmyadmin`.
   - Estructura de carpetas relevante:
     ```
     /opt/lampp/              (Linux) o C:\xampp\  (Windows)
     ├── htdocs/              ← Aquí van tus archivos web (Document Root)
     │   └── mi-proyecto/
     │       └── index.php
     ├── etc/
     │   └── httpd.conf       ← Configuración Apache
     └── mysql/
         └── data/            ← Datos de la BD
     ```
   - Hello World en PHP:
     ```php
     <?php
     // /opt/lampp/htdocs/hola/index.php
     $nombre = $_GET['nombre'] ?? 'Mundo';
     echo "<h1>Hola, {$nombre}!</h1>";
     echo "<p>Servidor: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";
     ?>
     ```
   - URL de acceso: `http://localhost/hola/?nombre=Angular`
   - Cuándo usar XAMPP: desarrollo con PHP (Laravel, WordPress), proyectos académicos que requieren un entorno local rápido sin aprender DevOps.
6. Crear `<section id="docker">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Docker".
   - Párrafo: "Docker es una plataforma de contenedores que permite empaquetar una aplicación con todas sus dependencias en una unidad portátil y reproducible llamada contenedor. A diferencia de las máquinas virtuales, los contenedores comparten el kernel del SO y son mucho más ligeros."
   - Conceptos clave en tarjetas:
     - Imagen (Image): plantilla de solo lectura con todo lo necesario para ejecutar la app. Se construye desde un `Dockerfile`.
     - Contenedor (Container): instancia en ejecución de una imagen. Es efímero: si se elimina, los datos internos se pierden (a menos que uses volúmenes).
     - Dockerfile: archivo de instrucciones para construir una imagen personalizada.
     - Docker Compose: herramienta para definir y ejecutar aplicaciones multi-contenedor (ej: app + base de datos + cache).
     - Registro (Registry): repositorio de imágenes. Docker Hub es el público más popular.
   - Diferencia VM vs Contenedor en diagrama:
     ```
     MÁQUINA VIRTUAL                 CONTENEDOR DOCKER
     ┌──────────────────┐           ┌──────────────────┐
     │  App A │  App B  │           │  App A │  App B  │
     │  Libs  │  Libs   │           │  Libs  │  Libs   │
     │   OS A │   OS B  │           ├─────────────────-┤
     │ (4GB)  │ (4GB)   │           │  Docker Engine   │
     ├─────────────────-┤           │ (kernel del host)│
     │    Hypervisor    │           ├──────────────────┤
     ├──────────────────┤           │     SO Host      │
     │     SO Host      │           └──────────────────┘
     └──────────────────┘
     Pesado: 8+ GB, arranque lento   Ligero: MBs, arranque < 1s
     ```
   - Instalación: "Descargar Docker Desktop desde `https://docker.com/products/docker-desktop` para Windows y Mac. En Linux: `curl -fsSL https://get.docker.com | sh`."
   - Comandos esenciales en bloque código:
     ```bash
     # Descargar imagen
     docker pull nginx:alpine

     # Ejecutar contenedor
     docker run -d -p 8080:80 --name mi-nginx nginx:alpine

     # Ver contenedores en ejecución
     docker ps

     # Ver logs
     docker logs mi-nginx

     # Entrar al contenedor
     docker exec -it mi-nginx sh

     # Detener y eliminar
     docker stop mi-nginx && docker rm mi-nginx

     # Construir imagen desde Dockerfile
     docker build -t mi-app:1.0 .

     # Listar imágenes locales
     docker images
     ```
7. Crear `<section id="comparativa">` padding 80px 0. Contiene:
   - `<h2>` "XAMPP vs Docker".
   - Tabla: Criterio | XAMPP | Docker. Datos:
     - Instalación | Simple (instalador gráfico) | Moderada (línea de comandos)
     - Reproducibilidad | Baja (depende del SO) | Alta (idéntico en cualquier máquina)
     - Portabilidad | Baja | Muy alta (imagen portable)
     - Uso en producción | No recomendado | Estándar industrial
     - Múltiples versiones | Difícil | Trivial (una imagen por versión)
     - Curva de aprendizaje | Baja | Media
     - Ideal para | PHP académico, WordPress, inicio rápido | Proyectos reales, microservicios, CI/CD
8. Crear `<section id="hello-react">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Hello World: React en Docker".
   - Guía paso a paso numerada con bloques de código:
     - Paso 1: Crear proyecto React con Vite:
       ```bash
       npm create vite@latest hola-react -- --template react
       cd hola-react
       ```
     - Paso 2: Crear el `Dockerfile` en la raíz del proyecto:
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
     - Paso 3: Crear `.dockerignore`:
       ```
       node_modules
       dist
       .git
       *.md
       ```
     - Paso 4: Construir la imagen:
       ```bash
       docker build -t hola-react:1.0 .
       ```
     - Paso 5: Ejecutar el contenedor:
       ```bash
       docker run -d -p 3000:80 --name hola-react hola-react:1.0
       ```
     - Paso 6: Abrir `http://localhost:3000` en el navegador.
     - Paso 7 (bonus): `docker-compose.yml` para desarrollo con hot reload:
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
       Ejecutar con: `docker compose up`
9. Sección recursos: `frontend.html`, `backend.html`, `react.html`, `bases-de-datos.html`.
10. Footer estándar. Highlight.js. Animaciones. Responsivo.
