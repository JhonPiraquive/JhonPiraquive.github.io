---
track: posw
slug: herramientas-desarrollo
title: "Herramientas de desarrollo: XAMPP y Docker"
order: 17
prev: modelo-cliente-servidor
next: bases-de-datos
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track POSW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; equilibra entorno local académico con prácticas de industria (contenedores).
- **Persona:** segunda persona (*tú*) en comandos y ejercicios; impersonal en comparativas XAMPP vs Docker.
- **Voz:** profesional, pragmática; reproducibilidad y portabilidad antes de comodidad inicial.
- **Evitar:** presentar XAMPP como solución de producción, jerga DevOps vacía, tono tutorial informal.
- **Preferir:** verbos de acción concretos (*describir*, *ejecutar*, *comparar*, *empaquetar*, *mapear*, *levantar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `XAMPP y Docker: entornos de desarrollo \| POSW` | 47 caracteres |
| `seo_description` | `Configura XAMPP (Apache, MariaDB, PHP), domina Docker (imagen, contenedor, Compose) y empaqueta React con build multi-etapa. Lección 17 del track POSW.` | 149 caracteres |
| `seo_title` (EN, fase i18n) | `XAMPP & Docker: dev environments \| POSW` | Direct, senior engineer voice |
| `seo_description` (EN) | `POSW Lesson 17: set up XAMPP, master Docker images and Compose, and package React with a multi-stage Nginx build.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Herramientas de desarrollo: XAMPP y Docker`

- Nombra las dos herramientas centrales del brief.
- Subtítulo con dos puntos; minúsculas en herramientas propias (convención POSW).
- Arco didáctico: stack local clásico → contenedores → deploy reproducible.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable |
| XAMPP: stack local | XAMPP: Apache, MariaDB y PHP en local | Componentes del paquete; puertos 80/443 y 3306 |
| ↳ Instalación y arranque | Instalación y arranque en Linux | Comandos `lampp start`; verificación con curl |
| ↳ Document root y htdocs | Document root: carpeta `htdocs` | Archivos fuera de `htdocs` no se sirven |
| Primer proyecto PHP | Primer proyecto PHP en `htdocs` | Hello World con `$_GET`; enlace con capa servidor |
| Docker: conceptos | Docker: imagen, contenedor y Dockerfile | VM vs contenedor; kernel compartido |
| ↳ Docker Compose | Docker Compose para varios servicios | Orquestación app + BD + volúmenes |
| Comandos esenciales de Docker | Comandos esenciales de Docker | `pull`, `run`, `ps`, `logs`, `build`; mapeo de puertos |
| XAMPP frente a Docker | XAMPP frente a Docker | CompareTable: reproducibilidad, producción, curva |
| React en Docker | React + Vite en imagen multi-etapa | Node build → Nginx serve; `.dockerignore` |
| ↳ Compose para desarrollo | Compose con hot reload en desarrollo | Volumen bind mount; puerto 5173 |
| Comprueba tu comprensión | Comprueba tu comprensión | Autoevaluación formativa |
| Resumen | Resumen | Viñetas con comandos y decisiones |
| Reto integrador | Reto integrador: entorno full-stack con Docker Compose | Mínimo 2 servicios + volumen BD |
| Cierre | Cierre de la lección | Puente a `bases-de-datos` |
| Miniquiz | Mini-quiz | Evaluación sumativa breve |

**Reglas transversales para headings:**

- H2: tema nominal o herramienta; sin emojis.
- H3: concreto; nombrar puerto o archivo solo si es foco del bloque.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. XAMPP es para desarrollo local

- **Título:** `XAMPP es para desarrollo local`
- **Tono:** preventivo; delimita alcance académico vs producción.
- **Copy refinado:** `XAMPP acelera el aprendizaje de Apache, PHP y MariaDB en tu máquina. No sustituye hardening, escalado ni pipelines de despliegue en producción.`
- **Variante Clay:** `callout-info`; borde secondary.

#### 2. Caso real — «en mi máquina funciona»

- **Título:** `Caso real: «en mi máquina funciona»`
- **Tono:** incidente de equipo; versiones PHP distintas rompen la demo.
- **Copy refinado:** `Cuatro estudiantes con XAMPP en Windows y Linux usan PHP y extensiones distintas; en la demo grupal fallan `mysqli` y rutas de `include`. Decisión: fijar versión PHP y migrar la entrega a `docker-compose.yml` con imágenes `php:8.2-apache` y `mariadb:11`.`
- **Variante Clay:** `callout-warning`.

#### 3. Caso real — deploy manual por FTP

- **Título:** `Caso real: deploy manual sin imagen Docker`
- **Tono:** lección de reproducibilidad y rollback.
- **Copy refinado:** `Un dev sube builds de React por FTP; cada release olvida un `.env` o usa Node distinto. Decisión: pipeline `docker build` → registry → `docker pull` en servidor; rollback = tag anterior; Nginx sirve `dist/` reproducible.`
- **Variante Clay:** `callout-warning`.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| CompareTable | XAMPP vs Docker | Filas: instalación, reproducibilidad, producción, curva de aprendizaje |
| StepReveal | Multi-stage Dockerfile | Pasos: `FROM node` → `npm run build` → copiar `dist/` a Nginx |
| PracticeExercise | Éxito (reproducibilidad) | `Correcto. Docker fija versiones y dependencias; XAMPP depende del SO y paquetes locales del host.` |
| CodeChallenge | Mapeo de puertos | `Completa: docker run -p ____ :80 para acceder en localhost:8080` |
| PracticeExercise | Éxito (reto Compose) | `Excelente. Compose válido, puertos documentados, volumen para BD y justificación alineada al tamaño del equipo.` |
| Quiz | Feedback general | Una oración; citar `htdocs`, imagen vs contenedor o `-p host:contenedor` |
| Cierre | Ideas clave | Viñetas: `htdocs` es document root · `-p 3000:80` mapea host · `.dockerignore` acelera build · multi-stage reduce imagen · Compose para equipos |
| Cierre | Siguiente paso | `Siguiente lección: bases de datos — SQL, NoSQL, claves e integridad referencial.` |

### Notas EN (fase i18n)

- Título EN sugerido: `Development tools: XAMPP and Docker`
- Mantener sin traducir: XAMPP, Apache, MariaDB, PHP, Docker, Dockerfile, Compose, Nginx, Node.js, Vite, `htdocs`, `.dockerignore`.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.

## SEO

Contribución de **seo-redirects-expert**. Lección 17 del track POSW; enlaza arquitectura cliente-servidor con persistencia de datos.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `XAMPP y Docker: entornos de desarrollo \| POSW` | 47 |
| `seoDescription` | `Configura XAMPP (Apache, MariaDB, PHP), domina Docker (imagen, contenedor, Compose) y empaqueta React con build multi-etapa. Lección 17 del track POSW.` | 149 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `XAMPP & Docker: dev environments \| POSW` | 42 |
| `seoDescription` | `POSW Lesson 17: set up XAMPP, master Docker images and Compose, and package React with a multi-stage Nginx build.` | 115 |

### Keywords (track POSW)

**Primarias:** XAMPP, Docker, entorno desarrollo, Apache, MariaDB, Dockerfile, POSW.

**Secundarias:** Docker Compose, multi-stage build, Nginx, PHP htdocs, mapeo puertos, contenedor, imagen Docker.

**Long-tail:** instalar XAMPP Linux, docker run mapear puertos, Dockerfile React Nginx multi etapa, XAMPP vs Docker reproducibilidad, docker compose desarrollo React.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `modelo-cliente-servidor` | Modelo cliente-servidor: flujo HTTP y arquitecturas en capas |
| `next` | `bases-de-datos` | Bases de datos: SQL, NoSQL y modelado relacional |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/posw/herramientas-desarrollo/` |
| EN (fase i18n) | `/en/teaching/posw/herramientas-desarrollo/` |
| Legacy | `/pages/teaching/posw/herramientas-desarrollo.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/posw/` |

### Headings con keywords naturales

| Nivel | Copy publicado (brief) | Copy SEO sugerido | Keyword objetivo |
|-------|------------------------|-------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | XAMPP: stack local | XAMPP: Apache, MariaDB y PHP local | XAMPP Apache PHP |
| H2 | Primer proyecto PHP | Primer proyecto PHP en htdocs | document root htdocs |
| H2 | Docker: conceptos | Docker: imagen, contenedor y Dockerfile | Docker imagen contenedor |
| H2 | Comandos esenciales de Docker | Comandos Docker: pull, run, build y logs | docker run puertos |
| H2 | XAMPP frente a Docker | XAMPP vs Docker: reproducibilidad y producción | XAMPP vs Docker |
| H2 | React en Docker | React en Docker: build multi-etapa con Nginx | Dockerfile React Nginx |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: stack local con Docker Compose | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### Open Graph / social

| Campo | Valor |
|-------|-------|
| `og:title` | `XAMPP y Docker: entornos de desarrollo \| POSW` (igual que `seoTitle`) |
| `og:description` | Primer tramo de `seoDescription` hasta la coma tras «Compose» |
| `og:type` | `article` |
| `og:locale` | `es_ES` |
| `og:url` | Canonical ES |
| `twitter:card` | `summary` |
| Imagen sugerida | Diagrama XAMPP stack o flujo multi-stage Node→Nginx |

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`herramientas-desarrollo`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Development tools: XAMPP and Docker`.
- **Términos sin traducir:** XAMPP, Apache, MariaDB, PHP, Docker, Dockerfile, Compose, Nginx, Node.js, Vite.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.
