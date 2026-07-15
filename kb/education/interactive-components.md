# Catálogo de componentes interactivos TSX

Usados por `lesson-developer` en `src/components/teaching/lessons/`.

## Cuándo usar cada uno

| Tipo de ejercicio (brief) | Componente | Props clave |
|---------------------------|------------|-------------|
| Preguntas opción múltiple | `Quiz` | `questions[]` con `feedback` |
| Respuesta abierta / reflexión | `PracticeExercise` | `prompt`, `hints[]`, `expectedKeywords[]` |
| Completar código (ejercicio) | `CodeChallenge` | `template`, `blanks[]` con `answer` |
| Caso real paso a paso | `StepReveal` | `steps[]` con `title`, `content` |
| Comparar conceptos | `CompareTable` | `headers[]`, `rows[]` |
| Diagrama / mapa mental / flujo / ciclo / timeline | `MermaidDiagram` | `chart`, opcional `title`/`description` |
| Advertencia / tip pedagógico | `Callout` | `title`, children |
| Bloque de código (lectura) | `CodeFiddle` | `code`, `language`, opcional `title`/`filename` |
| ~~Bloque de código~~ | ~~`CodeBlock`~~ | **Obsoleto** — usar `CodeFiddle` |

## Tipografía Mermaid (ADR 013)

| Relación | Tipo `chart` |
|----------|--------------|
| Mapa mental | `mindmap` |
| Flujo / capas / ciclo | `flowchart TD` / `LR` |
| Intercambio HTTP/TLS/auth | `sequenceDiagram` |
| Modelo OO | `classDiagram` |
| Modelo datos | `erDiagram` |
| Cronología | `timeline` |

Props opcionales: `title` (figcaption), `description` (aria-label).

**Nunca** poner entidades HTML (`&quot;`) dentro del string `chart`.

1. `PracticeExercise` o `CodeChallenge` (1+)
2. `Quiz` (3–5 preguntas)
3. `MermaidDiagram` o `StepReveal` con animación (1+)

## Ejemplo TSX (sección con código)

```tsx
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { Quiz } from "@/components/teaching/Quiz";

export function CaseStudySection() {
  return (
    <>
      <CodeFiddle
        language="json"
        title="Respuesta API"
        code={`{\n  "ok": true\n}`}
      />
      <StepReveal
        title="Caso paso a paso"
        steps={[
          { title: "Detección", content: "El IDS alerta tráfico anómalo." },
          { title: "Contención", content: "Se aísla el segmento afectado." },
        ]}
      />
      <PracticeExercise
        prompt="¿Qué principio CIA viola un ataque de integridad?"
        hints={["Piensa en modificación de datos"]}
        expectedKeywords={["integridad"]}
      />
      <Quiz questions={[/* ... */]} />
    </>
  );
}
```

## education-expert

Marcar bloques interactivos en lesson-draft.md:

```markdown
<!-- interactive: StepReveal -->
{ "steps": [...] }
```

Marcar bloques de código (obligatorio antes de cada fence):

```markdown
<!-- code: javascript -->
\`\`\`javascript
const x = 1;
\`\`\`
```

Lenguajes comunes: `javascript`, `typescript`, `json`, `http`, `bash`, `csharp`, `php`, `sql`, `xml`, `css`, `html`.

## lesson-developer

Convertir marcadores + layout-spec.md → componentes TSX en `sections/`.

- Snippets de lectura → `CodeFiddle` (`code`, `language`)
- Ejercicios de huecos → `CodeChallenge`
- No usar `CodeBlock` en lecciones nuevas

Para quizzes extensos, datos en `src/lib/teaching-quizzes/{track}.ts`.
