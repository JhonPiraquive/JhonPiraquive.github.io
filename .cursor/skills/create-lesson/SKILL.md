---
name: create-lesson
description: Orquestar creación de lecciones docentes con Fase 0 (prerequisitos) + pipeline topic-expert → education → brand/clay/seo → layout → desarrollo TSX
---

# Skill: create-lesson

Usar cuando el usuario pida crear o mejorar contenido docente (lección única o track completo).

## Comandos reconocidos

| Frase | Acción |
|-------|--------|
| "Procesa el track `{track}` completo" | Fase 0 + `lesson-orchestrator` para todas las lecciones del track |
| "Crea lección `{slug}` en track `{track}`" | Fase 0 + una lección del pipeline |
| "Bootstrap track `{track}`" | Solo Fase 0 (infra + topic-expert si falta), sin lecciones |
| "Solo brief para `{slug}` en `{track}`" | Fase 0 + etapa 1 únicamente (topic-expert) |
| "Retomar track `{track}` desde paso N" | Fase 0 + leer `status.md` y continuar |

## Fase 0: Prerequisitos (automática)

`lesson-orchestrator` ejecuta esto **antes** de cualquier lección. No saltar.

### 0.1 Resolver track

- Leer `kb/content/teaching-tracks.md`, `src/lib/teaching.ts` → `TRACKS`, `kb/agents/topic-experts-registry.md`.
- Mapear carpeta fuente:

| track | carpeta en `kb/education/sources/clases/` |
|-------|-------------------------------------------|
| pbpew | `pbpew/` |
| sea | `sea/` |
| poo | `poo/` |
| posw | `programacion-orientada-sitios-web/` |
| otros | `{track}/` (mismo slug) |

### 0.2 Infra mínima (auto, sin pausa)

| Artefacto | Acción si falta |
|-----------|-----------------|
| `kb/education/pipeline/{track}/status.md` | Crear manifiesto YAML + tabla de lecciones (`pending`) |
| `kb/education/briefs/{track}/` | Crear carpeta |
| `kb/migration/track-{track}.md` | Crear playbook con estado inicial |
| Fila en `kb/content/teaching-tracks.md` | Añadir track (slug, conteo, hub) |
| Entrada en `src/lib/teaching.ts` → `TRACKS` | Añadir card portal (id, icono, títulos ES/EN, descripción) |

Si faltan títulos/descripciones para un track nuevo, inferir del catálogo del topic-expert o pedir **una** confirmación al usuario.

### 0.3 Topic-expert (bootstrap si falta)

1. Si el experto **no** está en `topic-experts-registry.md` → seguir `kb/agents/topic-expert-bootstrap.md` pasos 1–4.
2. **Pausar** solo si el experto es **nuevo**: mostrar catálogo, alcance y tono → esperar OK del usuario.
3. Si ya existe: validar que el slug pedido está en `kb/agents/topic-experts/{track}.md`.

### 0.4 Fuentes

- Listar `kb/education/sources/clases/{carpeta}/**/*.md`.
- Si vacío: anotar en `status.md` y usar catálogo del topic-expert como fuente.
- Si falta `00-indice.md`: generar índice numerado desde el catálogo o los `.md` existentes.

### 0.5 Lista de lecciones

| Modo | Qué procesar |
|------|--------------|
| Track completo | Todas las filas `pending` del catálogo (orden por `order`) |
| Lección única | Solo `{slug}` |
| Retomar | Primera fila `pending` o `failed` en `status.md` |

### Criterio de salida Fase 0

- [ ] Track registrado en KB + portal (`teaching-tracks.md` + `TRACKS`)
- [ ] `status.md` existe con filas para los slugs a procesar
- [ ] Topic-expert activo (o aprobado por el usuario si es nuevo)
- [ ] Slug(s) resueltos con `order`

→ Continuar pipeline paso 1.

## Fuentes (solo creación, nunca runtime)

| Fuente | Uso |
|--------|-----|
| `kb/education/sources/clases/**/*.md` | Material pedagógico original |
| `kb/education/pipeline/{track}/{slug}/*.md` | Artefactos del pipeline |
| Enlaces Canva (`canva.link/*`) | Extraer texto y estructura del diseño |

**Nunca** leer `.md` / `.mdx` en `src/` para renderizar contenido docente.

### Enlaces Canva (obligatorio si el usuario los provee)

1. **Extraer** el contenido del enlace (navegador, capturas o texto pegado por el usuario).
2. **Integrar** títulos, definiciones, listas y diagramas en `lesson-draft.md` y secciones TSX.
3. **Prohibido** citar el enlace como «recurso visual», «material de apoyo» o «consulta en Canva» en la lección publicada.
4. Si el enlace no es accesible → usar el esquema del usuario + fuentes KB; anotar en `brief.md` bajo `canva_merge: pending`.
5. Registrar en `brief.md` frontmatter: `canva_source: {url}` solo como trazabilidad interna del pipeline (no renderizar en TSX).

## Pipeline (orden estricto)

| # | Agente | Input | Output |
|---|--------|-------|--------|
| 0 | `lesson-orchestrator` | petición usuario | Fase 0 completa (infra + bootstrap si aplica) |
| 0b | `lesson-orchestrator` | track + slugs | `pipeline/{track}/status.md` actualizado |
| 1 | `topic-expert-*` | slug + fuentes | `pipeline/{track}/{slug}/brief.md` |
| 2 | `education-expert` | brief.md | `pipeline/{track}/{slug}/lesson-draft.md` |
| 3a | `brand-identity-expert` | lesson-draft.md | contribución a lesson-spec.md |
| 3b | `clay-ui-expert` | lesson-draft.md | contribución a lesson-spec.md |
| 3c | `seo-redirects-expert` | lesson-draft.md | contribución a lesson-spec.md |
| 4 | `teaching-layout-expert` | draft + spec | `pipeline/{track}/{slug}/layout-spec.md` |
| 5 | `lesson-developer` | layout-spec.md | `src/components/teaching/lessons/{track}/{slug}/` + registry + índices |
| 5b | `lesson-developer` / `Assistant` | lección nueva | Registrar en todos los índices (ver abajo) |
| 6 | shell | — | `npm run build` cada 3 lecciones |

## Reglas

- **Nunca** saltar Fase 0 ni `education-expert` (no publicar dominio sin brief)
- **Nunca** inventar dominio técnico en education-expert
- **Nunca** escribir MDX en `src/content/teaching/`
- Cada lección debe cumplir `kb/education/pedagogy-standards.md`
- **Profundidad explicativa obligatoria:** cada concepto principal lleva bloques *Qué es*, *Para qué sirve / Por qué*, *Cómo funciona* y al menos un ejemplo; ver `pedagogy-standards.md` → «Profundidad explicativa». Al **mejorar** lecciones existentes, reescribir secciones delgadas (solo tablas/bullets) siguiendo el patrón de POSW/POO
- Componentes interactivos: `kb/education/interactive-components.md`
- Infra faltante (carpetas, status, registry parcial) → crear en Fase 0 **sin pausa**
- Topic-expert o track **nuevo** → bootstrap + **pausar para aprobación** antes del paso 1

## Bloques de código → `CodeFiddle`

Toda sección con código fuente debe mostrarse en un fiddle con resaltado de sintaxis y botón **Copiar**.

| Etapa | Agente | Qué hacer |
|-------|--------|-----------|
| 2 | `education-expert` | Marcar cada snippet: `<!-- code: {lang} -->` antes del fence |
| 4 | `teaching-layout-expert` | Mapear a `CodeFiddle` en layout-spec (`code`, `language`, opcional `title`/`filename`) |
| 5 | `lesson-developer` | Implementar con `@/components/teaching/CodeFiddle` |

Ejemplo en lesson-draft.md:

```markdown
## Ejemplo técnico
<!-- code: javascript -->
\`\`\`javascript
const saludo = "Hola";
console.log(saludo);
\`\`\`
```

Ejemplo TSX:

```tsx
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

<CodeFiddle
  language="javascript"
  code={`const saludo = "Hola";\nconsole.log(saludo);`}
  title="Saludo básico"
/>
```

- **Usar** `CodeFiddle` para snippets de lectura (ejemplos, configs, requests HTTP, JSON).
- **Usar** `CodeChallenge` solo para ejercicios de completar huecos.
- **No usar** `CodeBlock` ni `<pre>` plano en lecciones nuevas o reescritas.

## Registro en índices (obligatorio)

Tras implementar TSX, **siempre** registrar la lección en todos los índices aplicables. Sin esto la lección no aparece en el portal ni queda trazada en KB.

| Archivo | Qué hacer |
|---------|-----------|
| `src/lib/teaching-lessons-registry.ts` | Entrada `{track}/{slug}` → component + meta (alimenta `/teaching/{track}/`) |
| `src/lib/teaching.ts` → `TRACKS` | Si es **track nuevo**: añadir card en portal `/teaching/` (id, títulos ES/EN, descripción, icono) |
| `src/lib/teaching-quizzes/{track}.ts` | Slug + 5 preguntas; registrar en `QuizSection.tsx` → `QUIZ_MAP` |
| `kb/education/pipeline/{track}/status.md` | Fila nueva o actualizar columnas |
| `kb/content/teaching-tracks.md` | Incrementar conteo de lecciones del track |
| `kb/education/sources/clases/{carpeta-track}/00-indice.md` | Añadir entrada numerada con enlace al `.md` fuente |
| `kb/agents/topic-experts/{track}.md` | Añadir fila al catálogo y actualizar total de temas |
| `kb/migration/track-{track}.md` | Actualizar conteo si existe |
| `kb/content/legacy-redirects.json` | Entrada `teaching/{track}/{slug}.html` → canonical ES |
| `lesson-meta.ts` de lección **anterior** | Actualizar `next` al slug nuevo |
| `lesson-meta.ts` de lección **siguiente** | Actualizar `prev` al slug nuevo (si aplica) |

**Validación:** abrir `/es/teaching/` (card del track) y `/es/teaching/{track}/` (lección en lista).

## Retomar trabajo

Leer `kb/education/pipeline/{track}/status.md`. Ejecutar Fase 0 (sincronizar infra si cambió). Procesar la siguiente lección con `status: pending` o `status: failed`.
