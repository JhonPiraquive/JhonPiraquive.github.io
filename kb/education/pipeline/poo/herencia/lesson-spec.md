---
track: poo
slug: herencia
title: "Herencia"
order: 3
prev: encapsulamiento
next: asociacion-agregacion-composicion
interactive_blocks:
  - type: callout
    id: regla-diseno-herencia
  - type: step-reveal
    id: construccion-derivada-base
  - type: step-reveal
    id: llamada-polimorfica-dispatch
  - type: mermaid
    id: jerarquia-vehiculos
  - type: callout
    id: error-frecuente-base-override
  - type: code-challenge
    id: completa-lista-polimorfica
  - type: compare-table
    id: herencia-vs-composicion
  - type: mermaid
    id: alarma-notificadores
  - type: mermaid
    id: decision-diseno-herencia-composicion
  - type: practice-exercise
    id: es-un-vs-tiene-un
  - type: practice-exercise
    id: comprension-override-moto-carro
  - type: practice-exercise
    id: senales-buen-mal-uso-herencia
  - type: practice-exercise
    id: orden-constructor-carro-base
  - type: practice-exercise
    id: reto-justificacion-diseno
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/07-arrays-json-objetos/lesson-spec.md` (§ Clay UI), implementación POO `src/components/teaching/lessons/poo/encapsulamiento/` y `src/components/teaching/lessons/poo/herencia/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track POO |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención POO / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: cada `<section>` sin margen extra; el ritmo lo dan `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Mapas mentales del draft (viñetas `ul`): prose sin `ClayCard`; no duplicar como callout.
- Casos reales en prose (flota de transporte, alertas de monitoreo): párrafo narrativo; sin clay extra salvo que Brand promueva a `Callout`.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Herencia: qué es y para qué sirve`, `¿Cuándo NO usar herencia?` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Constructor y base(...)`, `Herencia vs composición` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («1. Cliente», «3. Dispatch») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Definición is-a, polimorfismo, composición |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout diseño; puede fusionarse con lista de objetivos del draft |
| `### 1) Herencia…` | Herencia: qué es y para qué sirve | `HerenciaQueEsYSection` |
| `### 2) ¿Cuándo NO…` | ¿Cuándo NO usar herencia? (composición como alternativa) | `CuandoNoUsarHerenciaSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: sistema de flota y alertas | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `HerenciaQueEsYSection`:** Mapa mental (prose `ul`), Qué es, Para qué sirve, Constructor y `base(...)`, `virtual` y `override`, Ejemplo C#: Vehiculo/Carro/Moto, Polimorfismo con tipo base, Método heredado sin override: `Parar()`, Lista polimórfica, Caso real: flota de transporte, Diagrama: jerarquía de vehículos, Señales de buen y mal uso.

**H3 dentro de `CuandoNoUsarHerenciaSection`:** Mapa mental, Qué es composición, Para qué sirve, Caso real: alertas de monitoreo, Ejemplo C#: Alarma + `INotificador`, Extender sin modificar Alarma, Herencia vs composición, Diagrama: Alarma y notificadores, Decisión de diseño, Errores comunes a evitar.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` *(pendiente)* | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` regla diseño |
| 2 | `HerenciaQueEsYSection` | Herencia: qué es y para qué sirve | stepper | prose, `CodeBlock` ×6, `StepReveal` ×2, `MermaidDiagram`, `Callout`, `CodeChallenge` |
| 3 | `CuandoNoUsarHerenciaSection` | ¿Cuándo NO usar herencia? | — | prose, `CodeBlock` ×3, `CompareTable`, `MermaidDiagram` ×2, `PracticeExercise` |
| 4 | `ResumenSection` *(pendiente)* | Resumen | — | Viñetas prose 6 puntos |
| 5 | `CompruebaTuComprensionSection` *(pendiente)* | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 6 | `RetoIntegradorSection` *(pendiente)* | Reto integrador: sistema de flota y alertas | card | Enunciado prose (Partes A–C) + `PracticeExercise` |
| 7 | `CierreSection` *(pendiente)* | Cierre de la lección | card | Ideas clave + enlace `asociacion-agregacion-composicion` |
| 8 | `MiniquizFinalSection` *(pendiente)* | Mini-quiz | card | `Quiz` 5 preguntas |

**Nota implementación:** el stub actual (`HerenciaLesson.tsx`) solo incluye secciones 2–3; crear el resto según este mapa.

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L17–23) | Sin clay |
| Prerrequisitos | prose `<ul>` | encapsulamiento, C#, dotnet (draft L25–29) | Sin clay |
| `regla-diseno-herencia` | `Callout` | title: «Regla de diseño»; copy is-a vs composición (draft L37–41) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |

#### `HerenciaQueEsYSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | 4 viñetas is-a (draft L49–54) | Sin clay |
| Qué es / Para qué sirve | prose | definición `: Vehiculo`, beneficios (draft L56–71) | Sin clay |
| Sintaxis herencia | `CodeBlock` | `class Carro : Vehiculo { }` (draft L60–63) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| Constructor y `base(...)` | prose H3 | delegación obligatoria (draft L73–75) | Sin clay |
| `virtual` / `override` | prose H3 | lista 3 puntos (draft L77–81) | Sin clay |
| `construccion-derivada-base` | `StepReveal` | title: «Construcción de una derivada»; 4 steps Cliente→base→Vehiculo→listo (draft L83–92) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| Ejemplo Vehiculo/Carro/Moto | `CodeBlock` | clases completas (draft L96–131) | `my-6`; bloque ancla de la sección |
| Polimorfismo tipo base | `CodeBlock` | `v1`/`v2` Arrancar (draft L135–142) | `my-4` |
| `llamada-polimorfica-dispatch` | `StepReveal` | title: «Llamada polimórfica»; 3 steps declaración→objeto real→dispatch (draft L144–152) | **stepper**; colocar tras segundo `CodeBlock` |
| Parar() sin override | prose + `CodeBlock` | método común en base (draft L154–170) | `CodeBlock` `my-4` |
| Lista polimórfica | `CodeBlock` | `List<Vehiculo>` foreach (draft L172–187) | `my-4` |
| Caso real flota transporte | prose | narrativa CamionRefrigerado / Parar (draft L189–193) | Sin clay; párrafo `my-4` antes del diagrama |
| `jerarquia-vehiculos` | `MermaidDiagram` | classDiagram Vehiculo←Carro/Moto/Camion (draft L195–200) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| Señales buen/mal uso | prose `<ul>` | dos listas Aplica/No aplica (draft L202–213) | Sin clay |
| `error-frecuente-base-override` | `Callout` | title: «Error frecuente»; `base(placa)` y override sin virtual (draft L215–219) | **callout-warning**; borde accent |
| `completa-lista-polimorfica` | `CodeChallenge` | blanks Moto, Camion, Arrancar (draft L221–230) | `ClayCard` `my-8`; inputs `rounded-xl` |

Separar los dos `StepReveal` con al menos un `CodeBlock` entre ellos para no apilar steppers consecutivos.

#### `CuandoNoUsarHerenciaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | reutilizar ≠ heredar (draft L238–242) | Sin clay |
| Qué es / Para qué composición | prose | celular tiene cámara (draft L244–252) | Sin clay |
| Caso real alertas | prose | AlarmaEmail vs INotificador (draft L254–256) | Sin clay |
| Alarma + INotificador | `CodeBlock` | interfaz + clases (draft L260–293) | `my-6` |
| Extender WhatsApp | `CodeBlock` | NotificadorWhatsApp + uso (draft L297–308) | `my-4` |
| `herencia-vs-composicion` | `CompareTable` | 5 filas Criterio/Relación/… (draft L312–322) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| `alarma-notificadores` | `MermaidDiagram` | classDiagram Alarma→INotificador (draft L326–329) | `my-6` tras tabla |
| `decision-diseno-herencia-composicion` | `MermaidDiagram` | flowchart es un → herencia vs composición (draft L333–336) | `my-6`; párrafo puente antes si hace falta |
| Errores comunes | prose `<ul>` | 4 antipatrones (draft L338–343) | Sin clay |
| `es-un-vs-tiene-un` | `PracticeExercise` | biblioteca/hospital/e-commerce (draft L345–355) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L361–366) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-override-moto-carro` | `PracticeExercise` | Moto vs Carro override (draft L376–386) | accent border |
| `senales-buen-mal-uso-herencia` | `PracticeExercise` | señales buen/mal uso (draft L388–399) | accent border |
| `orden-constructor-carro-base` | `PracticeExercise` | orden new Carro (draft L401–411) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; H2 en **card** semántico (autoevaluación formativa).

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | «Sistema de flota y alertas»; Partes A–C + criterio éxito (draft L419–440) | H2 primary |
| Lista tareas | prose `<ol>` | 8 ítems numerados | `my-4` |
| `reto-justificacion-diseno` | `PracticeExercise` | Parte C justificación Camion vs canales (draft L442–452) | `ClayCard` accent; textarea `rows={6}` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro cierre | prose (draft L460) | Sin clay |
| Ideas clave | prose `<ul>` 4 viñetas (draft L462–467) | Sin clay |
| Siguiente paso | prose `<p>` enlace `asociacion-agregacion-composicion` (draft L469) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas is-a, virtual/override, reutilización, composición, dispatch (draft L477–534) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Regla de diseño (is-a vs composición) | `callout-info` | `--color-secondary` (`#00C2FF`) | Principio de diseño; guía antes del contenido técnico |
| Error frecuente (`base` / `override`) | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; errores de compilación típicos |

Implementación: `Callout.tsx` usa `border-secondary` por defecto; **callout-warning** → `border-[var(--color-accent)]` vía prop `variant` o `className`.

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1 — contenedor lección)
    ├── section × N (prose, sin card)
    └── Interactivos (nivel 2 — cada uno ClayCard o superficie plana)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (superficie blanca, no clay)
        └── CodeBlock (superficie oscura, no clay)
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. En `HerenciaQueEsYSection`: intercalar prose/`CodeBlock` entre `StepReveal`, diagrama y callout para evitar pila densa de clay. En `CuandoNoUsarHerenciaSection`: `CompareTable` → diagrama clase → diagrama flowchart sin card padre compartido.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| Herencia: qué es y para qué sirve | 2 | Sección más densa: 2 steppers + diagrama + callout + challenge + 6 code blocks |
| ¿Cuándo NO usar herencia? | 2 | tabla + 2 diagramas + 1 practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 `PracticeExercise` apilados |
| Reto integrador | 2 | practice abierta Parte C |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | `Quiz` en card final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con objetivos, prerrequisitos y `Callout` regla diseño
- [ ] Poblar `HerenciaQueEsYSection`: mapa mental, 6 `CodeBlock`, 2 `StepReveal`, mermaid, callout, `CodeChallenge`
- [ ] Poblar `CuandoNoUsarHerenciaSection`: 3 `CodeBlock`, `CompareTable`, 2 `MermaidDiagram`, `PracticeExercise`
- [ ] Crear `ResumenSection` con 6 viñetas del draft
- [ ] Crear `CompruebaTuComprensionSection` con 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection` con enunciado Partes A–C + `PracticeExercise` justificación
- [ ] Crear `CierreSection` con ideas clave y enlace siguiente lección
- [ ] Crear `MiniquizFinalSection` con `Quiz` 5 preguntas
- [ ] Actualizar `HerenciaLesson.tsx` con orden de secciones del mapa
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/poo.ts` (patrón track POO)
- [ ] H2: «Herencia: qué es y para qué sirve», «¿Cuándo NO usar herencia? (composición como alternativa)»
