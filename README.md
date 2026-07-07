# Jhon Alejandro Piraquive — Portafolio & Portal Docente

Sitio personal y portal de enseñanza universitaria desplegado en [GitHub Pages](https://jhonpiraquive.github.io).

**Marca:** *Construyendo el futuro digital.*

---

## Qué incluye este repositorio

| Área | Descripción |
|------|-------------|
| **Portafolio** | Hoja de vida interactiva bilingüe (ES/EN): experiencia, habilidades, certificaciones, publicaciones e intereses. |
| **Portal docente** | Lecciones TSX interactivas para 5 tracks académicos con quizzes, ejercicios guiados, diagramas Mermaid y demos en vivo. |
| **Knowledge Base (`kb/`)** | Documentación interna: ADRs, identidad de marca, pipeline pedagógico, inventarios de contenido y playbooks de migración. |
| **Pipeline IA docente** | Agentes y skills de Cursor para crear lecciones de forma sistemática (brief → draft → spec → layout → TSX). |

---

## Stack técnico

- **Next.js 15** (App Router) con export estático (`output: 'export'`)
- **React 19** + **TypeScript**
- **next-intl** — internacionalización ES/EN
- **Tailwind CSS 4** + design system **claymorphism** (tokens en `src/styles/`)
- **Framer Motion**, **Mermaid**, **react-pdf**, **highlight.js**
- Deploy automático vía **GitHub Actions** → carpeta `out/`

---

## Tracks docentes

| Track | Slug | Contenido |
|-------|------|-----------|
| Programación básica para entornos web | `pbpew` | 12 lecciones + 4 proyectos (JS, DOM, async, fetch) |
| Programación Orientada a Objetos | `poo` | 10 lecciones (C#, SOLID, diagramas UML) |
| Seguridad en aplicaciones | `sea` | 12 lecciones (CIA, ISO 27001, JWT, SQLi, criptografía) |
| Programación Orientada a Sitios Web | `posw` | 22 lecciones (HTTP, REST, APIs, React, Angular) |
| Configuración de Servicios Web | `configuracion-servicios-web` | 4 clases (DNS, hosting, correo, SSH, Docker, VMs) |

Rutas: `/es/teaching/{track}/{slug}/` y `/en/teaching/{track}/{slug}/`

---

## Inicio rápido

### Requisitos

- Node.js 20+
- npm

### Desarrollo local

```bash
npm ci
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) — redirige a `/es/`.

### Build de producción

```bash
npm run build
```

Genera la carpeta `out/` con el sitio estático, redirects legacy (`scripts/generate-redirects.mjs`) y sitemap (`scripts/generate-sitemap.mjs`).

### Lint

```bash
npm run lint
```

---

## Estructura del proyecto

```
src/
  app/[locale]/              # Rutas Next.js (portafolio + teaching)
  components/
    brand/ clay/ layout/ portfolio/ teaching/
    teaching/lessons/{track}/{slug}/   # Lecciones TSX
  content/portfolio/{es,en}.json         # Contenido del CV
  lib/                                   # Registro de lecciones, i18n, quizzes
  messages/{es,en}.json                  # Traducciones UI
  styles/                                # tokens.css, clay, globals
public/assets/                           # Imágenes, certificaciones, media docente
kb/                                      # Knowledge base (ver kb/README.md)
scripts/                                 # Redirects, sitemap (post-build)
.cursor/                                 # Agentes, rules y skills de Cursor
.github/workflows/deploy.yml             # CI/CD GitHub Pages
```

---

## Documentación

Consultar **[kb/README.md](kb/README.md)** antes de cualquier cambio. Índice principal:

| Carpeta | Contenido |
|---------|-----------|
| [kb/decisions/](kb/decisions/) | ADRs — decisiones de arquitectura y marca |
| [kb/brand/](kb/brand/) | Identidad visual, tokens, copy ES/EN |
| [kb/architecture/](kb/architecture/) | Next.js, schema TSX, deploy GitHub Pages |
| [kb/content/](kb/content/) | Inventarios de portafolio y tracks docentes |
| [kb/education/](kb/education/) | Pedagogía, pipeline, briefs y outputs por lección |
| [kb/agents/](kb/agents/) | Roster de agentes IA y flujo del pipeline docente |
| [kb/migration/](kb/migration/) | Playbooks de migración HTML → TSX |

### Pipeline de lecciones (Cursor)

Para crear o mejorar lecciones docentes, usar el skill `.cursor/skills/create-lesson/SKILL.md` y el agente `lesson-orchestrator`. Flujo:

```
topic-expert → brief.md → education-expert → lesson-draft.md
  → brand + clay + seo → lesson-spec.md
  → teaching-layout-expert → layout-spec.md
  → lesson-developer → src/components/teaching/lessons/{track}/{slug}/
```

Estado por track: `kb/education/pipeline/{track}/status.md`

---

## Deploy

Push a `main` o `master` dispara `.github/workflows/deploy.yml`:

1. `npm ci` + `npm run build`
2. Upload del artefacto `out/`
3. Deploy a GitHub Pages

Configuración: `next.config.ts` (`output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`).

---

## Seguridad e información sensible

Este repositorio es **público**. Antes de hacer commit, revisar lo siguiente:

### No subir nunca

| Tipo | Acción |
|------|--------|
| Archivos `.env`, `.env.local`, claves API, tokens, certificados (`.pem`, `.key`) | Cubiertos por `.gitignore` |
| Guías internas de docente con credenciales de laboratorio | `kb/education/instructor/` — versionadas en este repo; no se renderizan en el sitio |
| Secretos reales de producción | Usar variables de entorno locales, nunca en el código |

### Contenido público intencional

- **Contacto del portafolio** (LinkedIn, GitHub, WhatsApp) en `src/content/portfolio/*.json` — datos de contacto profesional visibles en el sitio.
- **PDFs de certificaciones** en `public/assets/img/certificaciones/` — documentos académicos mostrados en el CV.
- **Contraseñas y tokens de ejemplo** en lecciones docentes — valores ficticios para fines pedagógicos (p. ej. `DemoDns2026!`, `Bearer eyJhbGci...`).

### Buenas prácticas

- Mantener `.env.example` (sin valores reales) en repos de laboratorio separados, no en este sitio.
- Material docente interno (guías de laboratorio, rúbricas): `kb/education/instructor/`. No aparece en el portal; solo contraseñas ficticias de demo.
- Ejecutar `git diff` antes de push para verificar que no se incluyan archivos ignorados.

---

## Licencia

Contenido docente y portafolio © Jhon Alejandro Piraquive. Uso educativo permitido con atribución.
