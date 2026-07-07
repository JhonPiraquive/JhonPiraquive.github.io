---
track: poo
slug: encapsulamiento
title: "Encapsulamiento"
order: 2
prev: fundamentos
next: herencia
interactive_blocks:
  - type: compare-table
    id: saldo-public-set-vs-private-set
  - type: callout
    id: error-setter-publico-todo
  - type: mermaid
    id: class-diagram-cuenta-bancaria
  - type: step-reveal
    id: ciclo-retirar-encapsulado
  - type: mermaid
    id: flujo-cliente-objeto-encapsulado
  - type: practice-exercise
    id: analogia-cajero-automatico
  - type: callout
    id: error-constructor-sin-validar
  - type: mermaid
    id: flujo-validacion-invariantes
  - type: code-challenge
    id: reserva-constructor-invariante
  - type: practice-exercise
    id: dto-vs-dominio
  - type: practice-exercise
    id: saldo-get-set-vs-private-set
  - type: practice-exercise
    id: comprension-asignacion-directa-cantidad
  - type: practice-exercise
    id: comprension-validacion-solo-ui
  - type: practice-exercise
    id: comprension-orden-constructor-reserva
  - type: practice-exercise
    id: reto-auditar-inventario
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/06-funciones-y-callbacks/lesson-spec.md` (§ Clay UI), implementación parcial `src/components/teaching/lessons/poo/encapsulamiento/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track POO |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info / casos reales), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos (error frecuente), track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` (C#) |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención POO / teaching):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tabla modificadores de acceso (draft L57–62): convertir a `CompareTable` en `ClayCard`; no tabla markdown plana.
- Mapa mental (draft L36–41, L247–250): lista `<ul>` en prose; sin `ClayCard` — evitar clay en viñetas introductorias.
- Preview lección `herencia` (`protected`): párrafo secundario en Resumen/Cierre; sin `Callout` dedicado.
- Extensión opcional límite diario (draft L441–463): `CodeBlock` + nota prose; sin interactivo extra.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Encapsulamiento: qué es y para qué sirve`, `Invariantes (reglas que el objeto protege)` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Mapa mental`, `Modificadores de acceso en C#`, `DTO vs objeto de dominio` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («1. Cliente llama cuenta.Retirar(30)») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Definiciones, analogía cajero, incidente bancario, orden constructor |

**Notas de headings:**

- Quitar prefijo numérico del draft en H2 de producción si Brand lo refinó (`1)` → título nominal); TSX actual conserva `1)` — unificar en fase layout.
- H3 «Estado interno vs interfaz pública»: subbloque bajo «Qué es»; no duplicar en H2.
- H3 «Señales de buen/mal uso»: lista con viñetas buen/mal; sin clay.
- «Anti-ejemplo — setter público rompe invariante»: H3 o lead prose antes de `CodeBlock`; tono preventivo, no `Callout` duplicado del error frecuente.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` *(pendiente)* | Objetivos de aprendizaje | — (prose) | Lista 6 objetivos + prerrequisitos |
| 2 | `EncapsulamientoQueEsYSection` | Encapsulamiento: qué es y para qué sirve | stepper | mapa mental, prose, `CompareTable`, `Callout`, casos reales, `CodeBlock` ×4, `MermaidDiagram` ×2, `StepReveal`, `PracticeExercise` |
| 3 | `InvariantesReglasQueElSection` | Invariantes (reglas que el objeto protege) | card | mapa mental, prose, `Callout`, `CodeBlock`, `MermaidDiagram`, `CodeChallenge`, DTO vs dominio, `PracticeExercise` ×2 |
| 4 | `ResumenSection` *(pendiente)* | Resumen | — | Viñetas 7 puntos + preview `herencia` |
| 5 | `CompruebaTuComprensionSection` *(pendiente)* | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 6 | `RetoIntegradorSection` *(pendiente)* | Reto integrador: auditar el módulo de inventario | card | Enunciado prose + lista tareas + `CodeBlock` esqueleto + `PracticeExercise` + extensión opcional `CodeBlock` |
| 7 | `CierreSection` *(pendiente)* | Cierre | card | Ideas clave + enlace lección `herencia` |
| 8 | `MiniquizSection` *(pendiente)* | Mini-quiz | card | `Quiz` slug `encapsulamiento` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection` *(pendiente)*

| Elemento | Clay |
|----------|------|
| Lista 6 objetivos (draft L17–24) | prose `<ul>`; sin `ClayCard` |
| Prerrequisitos (draft L26–30) | prose `<p>` + `<ul>`; sin clay |

#### `EncapsulamientoQueEsYSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | 4 viñetas (draft L36–41) | Sin clay |
| Qué es / interfaz pública | prose `<p>` | definición + estado vs interfaz (draft L43–47) | Sin clay |
| Para qué sirve | prose `<ul>` | 3 viñetas (draft L49–53) | Sin clay |
| Modificadores (H3) | `<h3>` | «Modificadores de acceso en C#» | `mt-6 mb-2 text-xl font-semibold` |
| `tabla-modificadores-acceso` | `CompareTable` | 4 filas: public, private, protected, internal (draft L57–62) | `ClayCard` `my-6`; thead `border-[var(--color-secondary)]` |
| Patrón private set | prose `<p>` | `{ get; private set; }` (draft L64) | Sin clay |
| `saldo-public-set-vs-private-set` | `CompareTable` | 4 filas aspecto/comparación (draft L67–75) | `ClayCard` `my-8`; thead secondary |
| Señales buen/mal uso | prose `<ul>` | aplica / no aplica / buen / mal (draft L77–82) | Sin clay |
| `error-setter-publico-todo` | `Callout` | title: «Error frecuente — setter público en todo» (draft L84–88) | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |
| Ejemplo vida real | prose `<p>` | analogía cajero (draft L90–92) | Sin clay |
| `caso-incidente-bancario` | `Callout` | narrativa saldo `-847.50` por migración (draft L94–96) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| `cuenta-bancaria-basica` | `CodeBlock` | `CuentaBancaria` + `Main` (draft L100–142) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| Anti-ejemplo (H3) | prose + `CodeBlock` | `CuentaInsegura` (draft L144–155) | `CodeBlock` `my-4`; sin `Callout` extra |
| `ejemplo-acceso-modificadores` | `CodeBlock` | `EjemploAcceso` (draft L157–168) | `my-4` |
| `class-diagram-cuenta-bancaria` | `MermaidDiagram` | classDiagram CuentaBancaria (draft L170–173) | `ClayCard` `my-6` |
| `ciclo-retirar-encapsulado` | `StepReveal` | title: «Ciclo de una operación encapsulada (Retirar)»; 5 steps (draft L175–200) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| `flujo-cliente-objeto-encapsulado` | `MermaidDiagram` | flowchart cliente/objeto (draft L202–205) | `ClayCard` `my-6` |
| Propiedad campo privado (H3) | `<h3>` + prose | intro validación en set (draft L207–209) | H3 estándar |
| `producto-cantidad-privada` | `CodeBlock` | `Producto` con `_cantidad` (draft L211–233) | `my-4` |
| `analogia-cajero-automatico` | `PracticeExercise` | prompt cajero (draft L235–241) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `InvariantesReglasQueElSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | 2 viñetas (draft L247–250) | Sin clay |
| Qué es / ejemplos | prose `<p>` + `<ul>` | Saldo, Cantidad, Fin>Inicio (draft L252–259) | Sin clay |
| Para qué sirve | prose `<ul>` | 3 viñetas (draft L261–265) | Sin clay |
| Señales buen/mal uso | prose `<ul>` | bien / mal ×2 (draft L267–271) | Sin clay |
| `error-constructor-sin-validar` | `Callout` | title: «Error frecuente — olvidar validar en el constructor» (draft L273–277) | **callout-warning** (accent) |
| Ejemplo vida real | prose `<p>` | reserva hotel fechas invertidas (draft L279–281) | Sin clay |
| `reserva-invariante-fechas` | `CodeBlock` | clase `Reserva` (draft L283–303) | `my-4` |
| `flujo-validacion-invariantes` | `MermaidDiagram` | Input → Validate → Error/Create (draft L305–308) | `ClayCard` `my-6` |
| `reserva-constructor-invariante` | `CodeChallenge` | title: «Completa la validación en el constructor de Reserva» (draft L310–317) | `ClayCard` `my-8`; título H3 interactivo primary |
| DTO vs dominio (H3) | prose `<ul>` | 2 viñetas (draft L319–322) | Sin clay |
| `dto-vs-dominio` | `PracticeExercise` | cuándo DTO vs dominio (draft L324–330) | accent border |
| Orden constructor | prose `<p>` | flujo c→a→d→b→e (draft L332–334) | Sin clay |
| `saldo-get-set-vs-private-set` | `PracticeExercise` | comparar patrones Saldo (draft L336–342) | accent border |

#### `ResumenSection` *(pendiente)*

| Elemento | Clay |
|----------|------|
| Viñetas 7 puntos (draft L346–354) | prose `<ul>`; sin clay |
| Preview `protected` / herencia | prose `<p>` final | Sin clay |

#### `CompruebaTuComprensionSection` *(pendiente)*

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro | prose `<p>` | «Antes del cierre…» (draft L360) | Sin clay |
| `comprension-asignacion-directa-cantidad` | `PracticeExercise` | producto.Cantidad = 0 (draft L362–368) | `ClayCard` `my-6` accent |
| `comprension-validacion-solo-ui` | `PracticeExercise` | validar solo en UI (draft L370–376) | accent |
| `comprension-orden-constructor-reserva` | `PracticeExercise` | orden validar/asignar (draft L378–384) | accent |

#### `RetoIntegradorSection` *(pendiente)*

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Lead | prose `<p>` | escenario QA stock negativo (draft L390–392) | Sin clay |
| `codigo-inventario-inseguro` | `CodeBlock` | `Producto` + `InventarioService` (draft L394–416) | `my-4` |
| Tareas numeradas | prose `<ol>` | 4 tareas + criterio éxito (draft L418–425) | Sin clay |
| `reto-auditar-inventario` | `PracticeExercise` | refactor completa (draft L427–439) | `ClayCard` `my-8` accent |
| Extensión opcional (H3) | `<h3>` + `CodeBlock` | `CuentaConLimiteDiario` (draft L441–463) | H3 + `CodeBlock` `my-4`; sin clay en extensión |

#### `CierreSection` *(pendiente)*

| Elemento | Clay |
|----------|------|
| Párrafo cierre + ideas clave (draft L467–477) | prose; `ClayCard` opcional nivel 1 si se agrupa con quiz |
| Siguiente paso `herencia` | prose con enlace track | Sin clay adicional |

#### `MiniquizSection` *(pendiente)*

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas V/F y opción múltiple (draft L485–540) | `ClayCard` `my-8`; opciones en prose dentro card |

### Callouts — tipo Clay por bloque

| id / bloque | Título (draft) | Variante | Borde | Notas |
|-------------|----------------|----------|-------|-------|
| `error-setter-publico-todo` | Error frecuente — setter público en todo | **callout-warning** | `--color-accent` | Preventivo; patrón anti `public set` |
| `caso-incidente-bancario` | Caso real — incidente bancario | **callout-info** | `--color-secondary` | Narrativa producción; no culpar al estudiante |
| `error-constructor-sin-validar` | Error frecuente — olvidar validar en el constructor | **callout-warning** | `--color-accent` | Primer punto de defensa de invariantes |

**Regla:** máximo un `Callout` clay cada ~2 pantallas de scroll en la misma sección; alternar con `CodeBlock` y diagramas para no saturar accent/secondary.

### Jerarquía H2 / H3 — resumen por sección

| Sección | H2 | H3 principales |
|---------|-----|----------------|
| Objetivos | Objetivos de aprendizaje | — (prerrequisitos como prose, no H3) |
| Encapsulamiento | Encapsulamiento: qué es y para qué sirve | Mapa mental · Qué es · Para qué sirve · Modificadores de acceso en C# · Señales de buen/mal uso · Anti-ejemplo · Propiedad con campo privado y validación |
| Invariantes | Invariantes (reglas que el objeto protege) | Mapa mental · Qué es · Para qué sirve · Señales de buen/mal uso · DTO vs objeto de dominio |
| Resumen | Resumen | — |
| Comprueba | Comprueba tu comprensión | — |
| Reto | Reto integrador: auditar el módulo de inventario | Extensión opcional — límite diario de retiro |
| Cierre | Cierre | — |
| Quiz | Mini-quiz | — |

### Profundidad clay por vista (ADR 003)

- **Vista lección completa:** nivel 1 = `LessonLayout` `ClayCard` contenedor; nivel 2 = interactivos dentro de cada `<section>`.
- **Sección `EncapsulamientoQueEsYSection`:** variant **stepper** por `StepReveal` central; no anidar `ClayCard` dentro de `StepReveal`.
- **Sección `InvariantesReglasQueElSection`:** variant **card** en `CodeChallenge` + `PracticeExercise`; diagrama y `Callout` como hermanos, no apilados en triple card.
