# Pedagogy standards

## Por lección
1. Objetivos de aprendizaje (2–5 bullets medibles)
2. Prerrequisitos explícitos
3. Progresión: concepto → señales → ejemplo → práctica
4. Cierre: reto + mini-quiz (3–5 preguntas)

## Profundidad explicativa (obligatoria)

Cada concepto técnico principal debe desarrollarse con **bloques pedagógicos** (no solo listas o tablas sueltas). Usar los que apliquen al tema:

| Bloque | Contenido mínimo |
|--------|------------------|
| **Qué es** | Definición clara en lenguaje accesible |
| **Para qué sirve / Por qué importa** | Motivación y contexto de uso real |
| **Cómo funciona** | Mecanismo, flujo o pasos (diagrama si ayuda) |
| **Estructura / Composición** | Partes, formatos, capas (ej. octetos IPv4, labels de dominio) |
| **Tipos / Variantes** | Clasificación con criterio de elección |
| **Ventajas y desventajas** | Cuándo conviene y cuándo no |
| **Ejemplo concreto** | Caso real, comando, registro DNS, petición HTTP |
| **Señales de buen y mal uso** | Errores frecuentes y anti-patrones |
| **Malas prácticas en el mundo real** | 3–5 escenarios concretos de producción/PYME/LATAM: qué se hizo mal, consecuencia, cómo evitarlo |

**Regla:** si una sección solo tiene una tabla o 2–3 bullets sin desarrollar el *qué*, el *por qué* y un ejemplo, está **incompleta**. Referencia de tono y estructura: lecciones POSW (`servicios-web`, `modelo-cliente-servidor`, `backend`) y POO (`fundamentos`).

## Malas prácticas en el mundo real (obligatorio cuando aplique)

En **cada sección de concepto técnico** (no en Objetivos, Cierre, Miniquiz, Reto integrador ni navegación de hub):

1. Incluir H3 **«Malas prácticas en el mundo real»** con **3–5 ítems** concretos.
2. Cada ítem debe describir: **situación real** → **error común** → **consecuencia** (caída, spam, brecha, costo) → **corrección**.
3. Priorizar escenarios de PYME, hosting compartido, migraciones DNS/correo, SSH/FTP/Docker mal configurados y contexto LATAM cuando encaje.
4. Si ya existe «Señales de buen y mal uso», **ampliar** con esta subsección dedicada (no repetir la misma frase genérica).
5. Opcional: un `Callout` con un caso memorable por sección.

**Omitir** cuando el tema no admite anti-patrones (p. ej. solo listado de objetivos).

Los `PracticeExercise` y preguntas de quiz deben incluir al menos una pregunta de tipo «¿por qué…?» o «¿qué pasaría si…?».

## Interactividad mínima (obligatoria)
- 1 bloque de práctica resoluble en página (`PracticeExercise`)
- 3–5 preguntas quiz con feedback (`Quiz`)
- Al menos 1 visual (`MermaidDiagram` o `StepReveal`)
- Progresión: concepto → ejemplo → práctica → cierre

## Promesas visuales (obligatorias) — ADR 013

Si el título o el copy dice **mapa mental**, **diagrama**, **flujo**, **ciclo**, **árbol**, **jerarquía**, **topología** o **línea de tiempo**, la sección **debe** incluir un visual contiguo:

| Promesa | Visual canónico |
|---------|-----------------|
| Mapa mental / resumen conceptual | `MermaidDiagram` `mindmap` |
| Flujo / handshake / request-response | `sequenceDiagram` o `flowchart` |
| Ciclo / proceso | `flowchart` (ciclo) o `StepReveal` + diagrama |
| Árbol / jerarquía / topología | `flowchart` / `mindmap` |
| Línea de tiempo | `timeline` |
| Modelo de clases / datos | `classDiagram` / `erDiagram` |
| Matriz / heatmap | `<table>` semántica con contraste, no párrafos sueltos |

**Prohibido:**

- Sustituir el visual solo con lista, tabla plana o párrafo.
- Entidades HTML (`&quot;`, `&#x27;`) dentro de `chart` / `code` de Mermaid o `CodeFiddle`.
- Publicar directivas de autoría («Debe incluir…», «El ejemplo debe…») en contenido estudiantil.
- `CodeFiddle` con `code` vacío.

Bullets breves pueden **acompañar** el diagrama; no lo reemplazan. Ver [013-visuales-obligatorios-en-lecciones.md](../decisions/013-visuales-obligatorios-en-lecciones.md).

## Quizzes
- Una respuesta correcta por pregunta
- Feedback breve al responder (por pregunta, no solo al final)
- Componente `<Quiz />` con props o datos en `src/lib/teaching-quizzes/{track}.ts`

## Pipeline IA
Usar skill `.cursor/skills/create-lesson/SKILL.md` y agente `lesson-orchestrator`.
Artefactos en `kb/education/pipeline/{track}/{slug}/`.

## Paginación interna por clase (ADR 011)

Módulos por sesiones/clases extensas (>8 secciones) deben dividirse en **páginas temáticas** dentro de cada clase:

| Criterio | Regla |
|----------|-------|
| Hub de clase | Objetivos resumidos + índice de páginas (~5 min) |
| Páginas | 3–5 por clase, 2–4 secciones, ~15–20 min lectura c/u |
| Progresión | Conceptos → ejemplos → práctica en última página |
| Audiencia | Contenido visual **solo estudiante**; guías docente en `kb/education/instructor/` |
| Nav | Prev/next entre páginas y entre clases |

Ver `kb/decisions/011-clases-con-paginas-internas.md`.

## Coherencia entre tracks
- Misma estructura de frontmatter
- Nav prev/next generado, no manual
- Tono académico universitario

## education-expert
Transforma briefs de topic-experts en lesson-draft.md. No inventa dominio técnico.

## lesson-developer
Convierte layout-spec.md en componentes TSX en `src/components/teaching/lessons/`.
