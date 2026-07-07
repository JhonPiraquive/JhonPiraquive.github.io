---
track: posw
slug: react
title: "React: Fundamentos"
order: 15
prev: angular
next: modelo-cliente-servidor
interactive_blocks:
  - type: callout
    id: react-libreria-no-framework
  - type: mermaid
    id: flujo-unidireccional
  - type: compare-table
    id: react-vs-angular
  - type: callout
    id: race-condition-detalle
  - type: compare-table
    id: reglas-jsx
  - type: practice-exercise
    id: convertir-html-jsx
  - type: code-challenge
    id: completar-key-map
  - type: compare-table
    id: props-vs-estado
  - type: practice-exercise
    id: comparar-angular-react-flujo
  - type: compare-table
    id: hooks-principales
  - type: callout
    id: reglas-hooks
  - type: code-challenge
    id: completar-set-cuenta
  - type: step-reveal
    id: ciclo-useeffect
  - type: mermaid
    id: ciclo-useeffect-visual
  - type: code-challenge
    id: ordenar-ciclo-useeffect
  - type: callout
    id: tipos-compartidos-hibrido
  - type: practice-exercise
    id: comprension-setter-funcional
  - type: practice-exercise
    id: comprension-useeffect-deps
  - type: practice-exercise
    id: comprension-key-lista
  - type: practice-exercise
    id: reto-catalogo-react
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/backend/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track POSW |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención POSW / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Errores comunes (`PropsEstadoSection` draft L315–319): prose `<ul>`; sin clay.
- En `QueEsReactSection`: mermaid → tabla → code bash → warning.
- En `JsxSection`: code → tabla → practice.
- En `ComponentesFuncionalesSection`: code ×2 → challenge.
- En `HooksSection`: tabla → callout warning → challenge; no apilar tabla + challenge sin prose intermedio.
- En `EfectosSection`: stepreveal → mermaid → code → challenge → callout info; intercalar prose entre diagramas y código.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué es React?`, `JSX`, `Efectos con useEffect` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Flujo unidireccional`, `Props vs estado` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («useEffect ejecuta fetch») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Virtual DOM, hooks |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) ¿Qué es React?` | ¿Qué es React? | `QueEsReactSection` |
| `### 2) JSX` | JSX | `JsxSection` |
| `### 3) Componentes funcionales` | Componentes funcionales | `ComponentesFuncionalesSection` |
| `### 4) Props y estado` | Props y estado | `PropsEstadoSection` |
| `### 5) Hooks principales` | Hooks principales | `HooksSection` |
| `### 6) Efectos con useEffect` | Efectos con useEffect | `EfectosSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: catálogo React consumiendo API REST | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace `modelo-cliente-servidor` |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `QueEsReactSection`:** Mapa mental, Flujo unidireccional de datos, React vs Angular, Crear proyecto con Vite, Caso real race condition.

**H3 dentro de `JsxSection`:** Mapa mental, JSX vs React.createElement, Reglas de JSX, Práctica guiada.

**H3 dentro de `ComponentesFuncionalesSection`:** Mapa mental, Componente con props tipadas, Composición y lista con key, Completar key y map.

**H3 dentro de `PropsEstadoSection`:** Mapa mental, Props vs estado, useState contador, useState formulario, Errores comunes, Práctica guiada.

**H3 dentro de `HooksSection`:** Mapa mental, Hooks principales, Reglas de los hooks, Completar actualización de estado.

**H3 dentro de `EfectosSection`:** Mapa mental, Ciclo de useEffect, Ciclo visual, Fetch con limpieza, Ordenar ciclo useEffect, Caso real tipos compartidos.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `QueEsReactSection` | ¿Qué es React? | — | prose, `MermaidDiagram`, `CompareTable`, `CodeBlock`, `Callout` |
| 3 | `JsxSection` | JSX | — | prose, `CodeBlock`, `CompareTable`, `PracticeExercise` |
| 4 | `ComponentesFuncionalesSection` | Componentes funcionales | — | prose, `CodeBlock` ×2, `CodeChallenge` |
| 5 | `PropsEstadoSection` | Props y estado | — | prose, `CompareTable`, `CodeBlock` ×2, `PracticeExercise` |
| 6 | `HooksSection` | Hooks principales | — | prose, `CompareTable`, `Callout`, `CodeChallenge` |
| 7 | `EfectosSection` | Efectos con useEffect | stepper | prose, `StepReveal`, `MermaidDiagram`, `CodeBlock`, `CodeChallenge`, `Callout` |
| 8 | `ResumenSection` | Resumen | — | Viñetas prose 8 puntos |
| 9 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 10 | `RetoIntegradorSection` | Reto integrador: catálogo React consumiendo API REST | card | Enunciado prose + `CodeBlock` + `PracticeExercise` |
| 11 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `modelo-cliente-servidor` |
| 12 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L36–40) | Sin clay |
| Prerrequisitos | prose `<ul>` | typescript, angular, SPA (draft L44–46) | Sin clay |
| `react-libreria-no-framework` | `Callout` | title: «React es librería, no framework» (draft L57–59) | **callout-info**; borde secondary |

#### `QueEsReactSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | componentes, Virtual DOM, hooks (draft L70–73) | Sin clay |
| `flujo-unidireccional` | `MermaidDiagram` | flowchart estado→props→render (draft L78–79) | `my-6` |
| `react-vs-angular` | `CompareTable` | 5 filas Aspecto/React/Angular (draft L85–93) | `ClayCard` `my-8`; thead secondary |
| Crear proyecto | `CodeBlock` | bash vite react-ts (draft L99–104) | `my-6` |
| `race-condition-detalle` | `Callout` | title: «Producto equivocado al navegar rápido» (draft L109–111) | **callout-warning** |

#### `JsxSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | className, raíz única, {} (draft L122–126) | Sin clay |
| JSX vs createElement | `CodeBlock` | javascript comparación (draft L131–147) | `my-6` |
| `reglas-jsx` | `CompareTable` | 5 filas Regla/HTML/JSX (draft L152–160) | `ClayCard` `my-8`; thead secondary |
| `convertir-html-jsx` | `PracticeExercise` | HTML a JSX válido (draft L166–171) | `ClayCard` `my-8` accent |

#### `ComponentesFuncionalesSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | props tipadas, key (draft L181–184) | Sin clay |
| TarjetaProducto | `CodeBlock` | tsx props tipadas (draft L189–213) | `my-6` |
| Catálogo lista | `CodeBlock` | tsx map con key (draft L218–243) | `my-6` |
| `completar-key-map` | `CodeChallenge` | completar key={p.id} (draft L248–254) | `ClayCard` `my-8` |

#### `PropsEstadoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | props read-only, useState (draft L264–267) | Sin clay |
| `props-vs-estado` | `CompareTable` | 3 filas Props/Estado/Callback (draft L272–278) | `ClayCard` `my-8`; thead secondary |
| Contador | `CodeBlock` | tsx useState (draft L284–296) | `my-6` |
| Formulario | `CodeBlock` | tsx objeto en estado (draft L301–313) | `my-6` |
| Errores comunes | prose `<ul>` | mutar estado, índice key (draft L317–319) | Sin clay |
| `comparar-angular-react-flujo` | `PracticeExercise` | props vs @Input/@Output (draft L324–329) | `ClayCard` `my-8` accent |

#### `HooksSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | useState, useEffect, useContext (draft L339–344) | Sin clay |
| `hooks-principales` | `CompareTable` | 6 filas Hook/Propósito/Cuándo (draft L349–358) | `ClayCard` `my-8`; thead secondary |
| `reglas-hooks` | `Callout` | title: «Solo en el nivel superior» (draft L364–366) | **callout-warning** |
| `completar-set-cuenta` | `CodeChallenge` | completar setCuenta(c => c + 1) (draft L372–377) | `ClayCard` `my-8` |

#### `EfectosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | deps, cleanup, fetch (draft L388–391) | Sin clay |
| `ciclo-useeffect` | `StepReveal` | title: «Ciclo de useEffect con dependencia [id]»; 5 steps (draft L396–419) | **stepper** `my-8` |
| `ciclo-useeffect-visual` | `MermaidDiagram` | flowchart montaje→limpieza (draft L425–426) | `my-6` |
| Fetch limpieza | `CodeBlock` | tsx ProductoDetalle useEffect (draft L432–458) | `my-6` |
| `ordenar-ciclo-useeffect` | `CodeChallenge` | ordenar 4 pasos ciclo (draft L463–471) | `ClayCard` `my-8` |
| `tipos-compartidos-hibrido` | `Callout` | title: «Equipo híbrido Angular + React» (draft L476–479) | **callout-info**; borde secondary |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 8 puntos (draft L488–495) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-setter-funcional` | `PracticeExercise` | setCuenta forma funcional (draft L504–508) | accent border |
| `comprension-useeffect-deps` | `PracticeExercise` | deps y cleanup (draft L512–516) | accent border |
| `comprension-key-lista` | `PracticeExercise` | key id vs índice (draft L520–524) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas catálogo REST (draft L535–543) | H2 primary |
| Solución Catalogo | `CodeBlock` | tsx useState + useEffect + map (draft L546–596) | `my-6` |
| `reto-catalogo-react` | `PracticeExercise` | implementar catálogo completo (draft L599–608) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 5 viñetas (draft L621–625) | Sin clay |
| Siguiente paso | enlace `modelo-cliente-servidor` (draft L627) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas React (draft L637–693) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| React es librería, no framework | `callout-info` | `--color-secondary` | UI core; routing y data fetching del ecosistema |
| Producto equivocado al navegar rápido | `callout-warning` | `--color-accent` | useEffect con deps y cleanup/AbortController |
| Solo en el nivel superior | `callout-warning` | `--color-accent` | Reglas de hooks; no en condicionales ni bucles |
| Equipo híbrido Angular + React | `callout-info` | `--color-secondary` | Paquete @empresa/api-types desde OpenAPI |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (blanco, no clay)
        └── CodeBlock (oscuro, no clay)
```

En `QueEsReactSection`: mermaid → tabla → code → warning. En `EfectosSection`: stepreveal → mermaid → code → challenge → callout; prose entre mermaid y code. En `HooksSection`: tabla → warning → challenge con prose intermedio.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| ¿Qué es React? | 2 | mermaid + tabla + warning |
| JSX | 2 | tabla + practice |
| Componentes funcionales | 2 | challenge |
| Props y estado | 2 | tabla + practice |
| Hooks principales | 2 | tabla + warning + challenge |
| Efectos con useEffect | 2 | stepper + mermaid + challenge + callout info |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice catálogo |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` React librería vs framework
- [ ] Poblar `QueEsReactSection`: mermaid flujo, `CompareTable`, `CodeBlock` vite, callout warning
- [ ] Poblar `JsxSection`: `CodeBlock`, `CompareTable`, `PracticeExercise`
- [ ] Poblar `ComponentesFuncionalesSection`: 2 `CodeBlock`, `CodeChallenge` key
- [ ] Poblar `PropsEstadoSection`: `CompareTable`, 2 `CodeBlock`, `PracticeExercise`
- [ ] Poblar `HooksSection`: `CompareTable`, callout warning reglas, `CodeChallenge`
- [ ] Poblar `EfectosSection`: `StepReveal`, mermaid ciclo, `CodeBlock`, `CodeChallenge`, callout info
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «¿Qué es React?», «JSX», «Componentes funcionales», «Props y estado», «Hooks principales», «Efectos con useEffect»
