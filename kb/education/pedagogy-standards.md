# Pedagogy standards

## Por lección
1. Objetivos de aprendizaje (2–5 bullets medibles) cuando apliquen al tipo de página
2. Prerrequisitos explícitos si la clase los necesita
3. Progresión acorde al **modo** (narrativa → hitos; concepto → ejemplo → práctica; procedimiento → pasos → práctica)
4. Cierre: reto y/o mini-quiz cuando el módulo lo pida (3–5 preguntas)

## Profundidad y foco del módulo (obligatorio)

**Primero el propósito del módulo; después la forma.** No forzar en todas las secciones los H3 *Qué es* / *Para qué sirve* / *Por qué importa*.

| Modo del módulo (ejemplos) | Qué debe priorizar el contenido |
|----------------------------|----------------------------------|
| **Narrativa / historia** (p. ej. historia de las BD) | Contar el relato con claridad: etapas, hitos, causa→efecto, lenguaje simple. Timeline y ejemplos bastan; no convertir cada etapa en ficha «qué es / para qué». |
| **Concepto / definición** (p. ej. qué es un SGBD, DDL) | Definir, motivar y mostrar cómo opera — ahí sí encajan *Qué es*, *Para qué*, *Cómo funciona* cuando aporten. |
| **Procedimiento / práctica** (p. ej. normalizar, GRANT) | Pasos ejecutables, checklist, antes/después, errores frecuentes. |
| **Comparación / elección** (p. ej. relacional vs NoSQL) | Criterios, tablas, escenarios de decisión. |

**Reglas:**
- Cada clase/módulo desarrolla **su** contenido (el brief y la fuente), con comprensión simple y tono de enseñanza a una persona.
- Usar bloques *Qué es* / *Para qué* / *Cómo funciona* **solo si el tema es definitorio o técnico-operativo** y el bloque añade claridad — no como plantilla automática.
- **No** forzar *Malas prácticas en el mundo real* ni *Señales de buen y mal uso* en cada sección; ver sección siguiente.
- Prohibido rellenar historia o contexto con fichas mecánicas que rompan el hilo narrativo.
- Sí exigir: claridad y ejemplo cuando ayuden a entender el tema del módulo.
- Al mejorar lecciones: alinear al **modo del módulo**, no imponer el patrón POSW/POO de definición en módulos narrativos.

## Malas prácticas y señales de buen/mal uso (opcionales — solo si aportan)

**No son obligatorias por sección ni por clase.** Incluirlas únicamente cuando el contenido sea técnico-operativo y el anti-patrón o la señal ayuden a aprender.

| Bloque | Cuándo sí | Cuándo no |
|--------|-----------|-----------|
| **Malas prácticas en el mundo real** | Procedimiento, seguridad, DDL/DML, config, operación (error → consecuencia → corrección) | Historia, objetivos literales, relato contextual, comparación pura sin riesgo operativo |
| **Señales de buen y mal uso** | Criterio de diseño/elección donde el estudiante pueda equivocarse al aplicar | Narrativa, timelines, listados de hechos, secciones sin decisión práctica |

Si se incluyen malas prácticas:
1. Preferir H3 dedicado con **2–5** escenarios concretos (situación → error → consecuencia → corrección).
2. Priorizar PYME / LATAM cuando encaje.
3. No repetir el mismo mensaje genérico en cada sección de la clase.

Los `PracticeExercise` y quizzes: en módulos técnicos, al menos una pregunta «¿por qué…?» o «¿qué pasaría si…?» ayuda; en módulos narrativos, preguntas de comprensión del relato bastan.

## Interactividad mínima (adaptar al módulo)
- 1 bloque de práctica resoluble cuando el tema lo permita (`PracticeExercise`)
- 3–5 preguntas quiz con feedback (`Quiz`) — comprensión del relato o del procedimiento según el modo
- Al menos 1 visual si aporta (`MermaidDiagram` o `StepReveal`)
- No inventar práctica/anti-patrones solo para “cumplir checklist”

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
