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

**Regla:** si una sección solo tiene una tabla o 2–3 bullets sin desarrollar el *qué*, el *por qué* y un ejemplo, está **incompleta**. Referencia de tono y estructura: lecciones POSW (`servicios-web`, `modelo-cliente-servidor`, `backend`) y POO (`fundamentos`).

Los `PracticeExercise` y preguntas de quiz deben incluir al menos una pregunta de tipo «¿por qué…?» o «¿qué pasaría si…?».

## Interactividad mínima (obligatoria)
- 1 bloque de práctica resoluble en página (`PracticeExercise`)
- 3–5 preguntas quiz con feedback (`Quiz`)
- Al menos 1 visual (`MermaidDiagram` o `StepReveal`)
- Progresión: concepto → ejemplo → práctica → cierre

## Quizzes
- Una respuesta correcta por pregunta
- Feedback breve al responder (por pregunta, no solo al final)
- Componente `<Quiz />` con props o datos en `src/lib/teaching-quizzes/{track}.ts`

## Pipeline IA
Usar skill `.cursor/skills/create-lesson/SKILL.md` y agente `lesson-orchestrator`.
Artefactos en `kb/education/pipeline/{track}/{slug}/`.

## Coherencia entre tracks
- Misma estructura de frontmatter
- Nav prev/next generado, no manual
- Tono académico universitario

## education-expert
Transforma briefs de topic-experts en lesson-draft.md. No inventa dominio técnico.

## lesson-developer
Convierte layout-spec.md en componentes TSX en `src/components/teaching/lessons/`.
