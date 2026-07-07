---
track: pbpew
slug: 02-js-en-html
title: "JavaScript en HTML, Hola mundo y consola"
order: 2
prev: "01-intro-js-y-dom"
next: "03-variables-y-tipos"
interactive_blocks:
  - type: callout
    id: error-frecuente-link-vs-script
  - type: compare-table
    id: inline-vs-externo
  - type: callout
    id: caso-deploy-subcarpeta
  - type: practice-exercise
    id: preferir-js-externo
  - type: compare-table
    id: estrategias-ubicacion-script
  - type: mermaid
    id: head-defer-body-flow
  - type: callout
    id: caso-landing-head-sin-defer
  - type: step-reveal
    id: flujo-html-hasta-consola
  - type: mermaid
    id: flujo-parse-ejecuta-consola
  - type: practice-exercise
    id: script-final-body-dom
  - type: code-challenge
    id: completa-script-defer
  - type: callout
    id: error-console-log-vs-dom
  - type: mermaid
    id: network-404-consola
  - type: practice-exercise
    id: hola-mundo-inline-practica
  - type: practice-exercise
    id: comprension-extraer-externo
  - type: practice-exercise
    id: comprension-defer-vs-async
  - type: practice-exercise
    id: comprension-network-404
  - type: practice-exercise
    id: reto-pagina-evento
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/01-intro-js-y-dom/lesson-spec.md` (§Clay UI), implementación SEA `src/components/teaching/lessons/sea/historia-redes-y-seguridad/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal` |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` warning |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout`), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención PBPEW / SEA):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `JavaScript inline y externo`, `¿Dónde poner el <script>?` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Hola mundo inline`, `Consola del navegador`, `Comentarios en JavaScript` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título `PracticeExercise`, `StepReveal`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` | `--color-neutral-dark` | Texto expositivo |

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos del tema | — (prose) | Lista `<ul>` de objetivos |
| 2 | `JavascriptInlineYExternoSection` | JavaScript inline y externo | — | H3 ×2, `Callout`, `CompareTable`, `CodeBlock` ×3, `Callout`, `PracticeExercise` |
| 3 | `DondePonerElScriptSection` | ¿Dónde poner el `<script>`? | stepper | `CompareTable`, `MermaidDiagram`, H3 ×2, `CodeBlock` ×2, `Callout`, `StepReveal`, `MermaidDiagram`, `PracticeExercise`, `CodeChallenge` |
| 4 | `HolaMundoConsolaSection` *(pendiente)* | Hola mundo, consola y comentarios | — | H3 ×3, `Callout`, `CodeBlock` ×2, `MermaidDiagram`, `PracticeExercise` |
| 5 | `ResumenSection` | Resumen | — | Viñetas prose |
| 6 | `CompruebaTuComprensionSection` *(pendiente)* | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 7 | `RetoIntegradorSection` *(pendiente)* | Reto integrador: arregla la página del evento | card | Enunciado + `CodeBlock` + `PracticeExercise` |
| 8 | `CierreSection` *(pendiente)* | Cierre de la lección | card | Ideas clave + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `JavascriptInlineYExternoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `error-frecuente-link-vs-script` | `Callout` | title: «Error frecuente»; no usar `<link>` para JS (draft L45–49) | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |
| `inline-vs-externo` | `CompareTable` | headers: Aspecto / Inline / Externo (src); 4 filas (draft L51–60) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| `hola-mundo-inline` | `CodeBlock` | HTML hola mundo inline (draft L64–79) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4`; sin `ClayCard` |
| `defer-head-ejemplo` | `CodeBlock` | HTML head + defer (draft L85–95) | `my-4` |
| `app-js-defer` | `CodeBlock` | JS externo con defer (draft L97–102) | `my-4` |
| `caso-deploy-subcarpeta` | `Callout` | title: «Caso real: deploy en subcarpeta» (draft L106–110) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| `preferir-js-externo` | `PracticeExercise` | prompt externo vs inline; 2 hints (draft L112–118) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `DondePonerElScriptSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `estrategias-ubicacion-script` | `CompareTable` | 4 estrategias: bloqueo, DOM, orden (draft L132–141) | `ClayCard` `my-8`; thead secondary |
| `head-defer-body-flow` | `MermaidDiagram` | flowchart TB: head sin defer / defer / final body (draft L143–146) | `div` blanco `rounded-lg p-4 my-6`; sin segundo `ClayCard` |
| `script-final-body` | `CodeBlock` | HTML script al final body (draft L150–159) | `my-4` |
| `defer-vs-async` | `CodeBlock` | HTML comparación defer/async (draft L163–171) | `my-4` |
| `caso-landing-head-sin-defer` | `Callout` | title: «Caso real: landing corporativa» (draft L173–177) | **callout-info**; borde secondary |
| `flujo-html-hasta-consola` | `StepReveal` | title: «Flujo: desde HTML hasta consola»; 5 pasos (draft L179–204) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30`; botones `clay-button` |
| `flujo-parse-ejecuta-consola` | `MermaidDiagram` | flowchart LR: HTML → parser → DOM → motor → consola (draft L206–209) | `my-6` tras `StepReveal`; no anidar en card padre |
| `script-final-body-dom` | `PracticeExercise` | ¿Por qué script al final del body? (draft L211–217) | accent border |
| `completa-script-defer` | `CodeChallenge` | template `<script {{blank1}}="js/main.js" {{blank2}}>`; blanks: src, defer (draft L219–227) | `ClayCard` `my-8`; inputs `rounded-xl` |

#### `HolaMundoConsolaSection` *(pendiente)*

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `error-console-log-vs-dom` | `Callout` | title: «Error frecuente»; console.log ≠ cambio de página (draft L239–243) | **callout-warning**; borde accent |
| `metodos-consola` | `CodeBlock` | log, info, warn, error, table, time (draft L254–269) | `my-4` |
| `comentarios-js` | `CodeBlock` | // y /* */ (draft L278–289) | `my-4` |
| `network-404-consola` | `MermaidDiagram` | flowchart TD: Network 200 vs 404 → consola (draft L291–294) | `my-6` |
| `hola-mundo-inline-practica` | `PracticeExercise` | crear index.html + verificar consola (draft L296–302) | accent border |

#### `CompruebaTuComprensionSection` *(pendiente)*

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-extraer-externo` | `PracticeExercise` | Extraer inline a saludo.js + defer (draft L321–327) | accent border |
| `comprension-defer-vs-async` | `PracticeExercise` | defer vs async para getElementById (draft L329–335) | accent border |
| `comprension-network-404` | `PracticeExercise` | Network + src incorrecto (draft L337–343) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; no anidar en `ClayCard` padre (mantener 2 niveles).

#### `RetoIntegradorSection` *(pendiente)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose + `CodeBlock` | HTML roto del evento (draft L353–365) | H2 primary; código en `CodeBlock` oscuro |
| `reto-pagina-evento` | `PracticeExercise` | diagnóstico 8–10 líneas; 4 hints (draft L378–389) | `ClayCard` accent; textarea `rows={8}` por respuesta larga |

#### `CierreSection` *(pendiente)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Ideas clave | prose `<ul>` | 4 viñetas draft L397–402 | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas: src, defer, console.log, 404, comentarios (draft L410–469) | `ClayCard` `my-8`; opciones dentro de card |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Error frecuente (`<link>` vs `<script>`) | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; confusión HTML/CSS vs JS |
| Error frecuente (console.log vs DOM) | `callout-warning` | `--color-accent` | Preventivo; salida consola ≠ UI |
| Caso deploy subcarpeta | `callout-info` | `--color-secondary` (`#00C2FF`) | Incidente 404 silencioso en producción |
| Caso landing head sin defer | `callout-info` | `--color-secondary` | DOM no listo; botón CTA roto |

Implementación: `Callout.tsx` usa `border-secondary` por defecto; **callout-warning** → `border-[var(--color-accent)]` (prop `variant` o `className`).

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1 — contenedor lección)
    ├── section × N (prose, sin card)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (superficie blanca, no clay)
        └── CodeBlock (superficie oscura, no clay)
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Esta lección concentra diagramas en `DondePonerElScriptSection` y `HolaMundoConsolaSection`: separar con párrafo si hay dos `MermaidDiagram` seguidos para no superar 2 niveles visuales.

### Checklist implementación (lesson-developer)

- [ ] Refactorizar `JavascriptInlineYExternoSection`: prose draft + `Callout`, `CompareTable`, 3 `CodeBlock`, `PracticeExercise`
- [ ] Refactorizar `DondePonerElScriptSection`: separar hola mundo/consola a su sección; añadir `CompareTable`, 2 `MermaidDiagram`, `StepReveal`, `Callout`, `PracticeExercise`, `CodeChallenge`
- [ ] Crear `HolaMundoConsolaSection`: `Callout`, 2 `CodeBlock`, `MermaidDiagram`, `PracticeExercise`
- [ ] Crear `CompruebaTuComprensionSection`: 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection`: enunciado + `CodeBlock` + `PracticeExercise`
- [ ] Crear `CierreSection`: ideas clave + `Quiz`
- [ ] Registrar quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
