---
track: poo
slug: solid-principios
title: "Principios SOLID"
order: 9
prev: diagramas-de-clases
next: modularidad-cohesion-acoplamiento
interactive_blocks:
  - type: callout
    id: solid-en-una-frase
  - type: compare-table
    id: tabla-solid-letras
  - type: mermaid
    id: flujo-responsabilidades-srp
  - type: compare-table
    id: monolito-vs-separado-srp
  - type: mermaid
    id: jerarquia-ienvio
  - type: step-reveal
    id: extender-sin-editar-cliente
  - type: practice-exercise
    id: implementa-envio-gratis
  - type: mermaid
    id: ruptura-contrato-lsp
  - type: practice-exercise
    id: pinguino-lsp-rediseno
  - type: mermaid
    id: diagrama-isp-impresoras
  - type: mermaid
    id: diagrama-dip-repositorio
  - type: practice-exercise
    id: repositorio-memoria-dip
  - type: practice-exercise
    id: comprension-envio-gratis-ocp
  - type: practice-exercise
    id: comprension-pinguino-lsp
  - type: practice-exercise
    id: comprension-pedido-service-srp-dip
  - type: code-challenge
    id: elimina-switch-envio
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/poo/polimorfismo/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección (S/O/L/I/D), títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track POO |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención POO / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`, `CompareTable`) o `my-8` (`ClayCard` wrappers, `StepReveal`, `CodeChallenge`).
- **`PracticeExercise`:** siempre `ClayCard` con `my-8` y `border-l-4 border-[var(--color-accent)]`.
- **`MermaidDiagram`:** siempre `my-6`; fondo blanco, sin `ClayCard`.
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Casos reales (ERP 800 líneas, logística switch): párrafo narrativo.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `S — Responsabilidad única (SRP)`, `O — Abierto/Cerrado (OCP)` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Anti-ejemplo: PedidoService monolítico`, `Contrato IEnvio` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Principios interconectados |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | `Callout` + tabla SOLID |
| `### 1) S — SRP` | S — Responsabilidad única (SRP) | `SrpSection` |
| `### 2) O — OCP` | O — Abierto/Cerrado (OCP) | `OcpSection` |
| `### 3) L — LSP` | L — Sustitución de Liskov (LSP) | `LspSection` |
| `### 4) I — ISP` | I — Segregación de interfaces (ISP) | `IspSection` |
| `### 5) D — DIP` | D — Inversión de dependencias (DIP) | `DipSection` |
| Resumen | Resumen | Viñetas 7 puntos |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: tienda refactorizada con SOLID | Subtítulo |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | `Callout`, `CompareTable` |
| 2 | `SrpSection` | S — Responsabilidad única (SRP) | — | prose, `CodeBlock` ×2, `MermaidDiagram`, `CompareTable` |
| 3 | `OcpSection` | O — Abierto/Cerrado (OCP) | stepper | prose, `CodeBlock`, `MermaidDiagram`, `StepReveal`, `PracticeExercise` |
| 4 | `LspSection` | L — Sustitución de Liskov (LSP) | — | prose, `CodeBlock` ×2, `MermaidDiagram`, `PracticeExercise` |
| 5 | `IspSection` | I — Segregación de interfaces (ISP) | — | prose, `CodeBlock`, `MermaidDiagram` |
| 6 | `DipSection` | D — Inversión de dependencias (DIP) | — | prose, `CodeBlock`, `MermaidDiagram`, `PracticeExercise` |
| 7 | `ResumenSection` | Resumen | — | Viñetas prose |
| 8 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 9 | `RetoIntegradorSection` | Reto integrador: tienda refactorizada con SOLID | card | Enunciado prose + `CodeChallenge` |
| 10 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `modularidad-cohesion-acoplamiento` |
| 11 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro prose | prose | SOLID práctico (draft L40) | Sin clay |
| `solid-en-una-frase` | `Callout` | title: «SOLID en una frase»; S/O/L/I/D (draft L42–46) | **callout-info**; borde secondary; `my-6` |
| `tabla-solid-letras` | `CompareTable` | 5 filas Letra/Principio/Idea (draft L48–58) | `ClayCard` `my-8`; thead secondary |

#### `SrpSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | un motivo de cambio (draft L66–70) | Sin clay |
| Anti-ejemplo | `CodeBlock` | PedidoService monolítico (draft L74–86) | `my-6` |
| Refactor | `CodeBlock` | CreadorPedido + INotificador + Orquestador (draft L90–129) | `my-6` |
| `flujo-responsabilidades-srp` | `MermaidDiagram` | flowchart Orquestador (draft L133–136) | **`my-6`** |
| Caso real ERP | prose | 800 líneas (draft L138–140) | Sin clay |
| Errores comunes | prose `<ul>` | 3 ítems (draft L142–146) | Sin clay |
| `monolito-vs-separado-srp` | `CompareTable` | 3 filas motivos/test/email (draft L148–156) | `ClayCard` `my-8`; thead secondary |

#### `OcpSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | extensión sin editar cliente (draft L164–168) | Sin clay |
| IEnvio | `CodeBlock` | interfaz + 3 envíos (draft L172–193) | `my-6` |
| `jerarquia-ienvio` | `MermaidDiagram` | classDiagram IEnvio (draft L197–200) | **`my-6`** |
| `extender-sin-editar-cliente` | `StepReveal` | title: «Extender sin editar cliente»; 4 steps (draft L204–213) | **stepper** `my-8` |
| Caso real logística | prose | switch trimestral (draft L215–217) | Sin clay |
| Errores comunes | prose `<ul>` | 2 ítems (draft L219–222) | Sin clay |
| `implementa-envio-gratis` | `PracticeExercise` | EnvioGratis OCP (draft L224–234) | `ClayCard` **`my-8`** accent |

#### `LspSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | sustituibilidad (draft L242–246) | Sin clay |
| Anti-ejemplo Ave | `CodeBlock` | Pinguino lanza (draft L250–264) | `my-6` |
| `ruptura-contrato-lsp` | `MermaidDiagram` | flowchart Ave→Pinguino (draft L268–271) | **`my-6`** |
| Rediseño IVolador | `CodeBlock` | Aguila + Pinguino (draft L275–291) | `my-6` |
| Errores comunes | prose `<ul>` | 3 ítems (draft L293–297) | Sin clay |
| `pinguino-lsp-rediseno` | `PracticeExercise` | LSP + IVolador (draft L299–309) | `ClayCard` **`my-8`** accent |

#### `IspSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | interfaces pequeñas (draft L317–321) | Sin clay |
| Anti-patrón | prose | IImpresoraMultiuso (draft L323–325) | Sin clay |
| Interfaces segregadas | `CodeBlock` | IImpresora + IEscaner (draft L329–351) | `my-6` |
| `diagrama-isp-impresoras` | `MermaidDiagram` | classDiagram impresoras (draft L355–358) | **`my-6`** |
| Errores comunes | prose `<ul>` | 3 ítems (draft L360–364) | Sin clay |

#### `DipSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | alto nivel → abstracciones (draft L372–376) | Sin clay |
| Servicio + repos | `CodeBlock` | IRepositorioUsuarios + ServicioUsuarios (draft L380–410) | `my-6` |
| `diagrama-dip-repositorio` | `MermaidDiagram` | classDiagram DIP (draft L414–417) | **`my-6`** |
| Errores comunes | prose `<ul>` | 3 ítems (draft L419–423) | Sin clay |
| `repositorio-memoria-dip` | `PracticeExercise` | RepositorioMemoria en Main (draft L425–435) | `ClayCard` **`my-8`** accent |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 7 puntos (draft L443–449) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-envio-gratis-ocp` | `PracticeExercise` | EnvioGratis OCP (draft L459–469) | accent; **`my-8`** |
| `comprension-pinguino-lsp` | `PracticeExercise` | Pinguino LSP (draft L471–481) | accent; **`my-8`** |
| `comprension-pedido-service-srp-dip` | `PracticeExercise` | PedidoService violaciones (draft L483–493) | accent; **`my-8`** |

H2 en **card** semántico; apilar con **`my-8`**.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | Partes A–D TiendaMonolito (draft L501–527) | H2 primary |
| Lista tareas | prose `<ol>` | 8 ítems | `my-4` |
| `elimina-switch-envio` | `CodeChallenge` | blank `_envio` (draft L529–536) | `ClayCard` `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 5 viñetas (draft L546–552) | Sin clay |
| Siguiente paso | enlace `modularidad-cohesion-acoplamiento` (draft L554) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas SOLID (draft L562–596) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| SOLID en una frase | `callout-info` | `--color-secondary` | Mnemotecnia S/O/L/I/D |
| God class / switch | — (prose) | — | Opcional **callout-warning** en `SrpSection` anti-ejemplo |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose) — 5 bloques principio + cierre
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / Quiz
        ├── MermaidDiagram (blanco, my-6, no clay)
        └── CodeBlock (oscuro, my-6, no clay)
```

Ritmo por principio: prose → CodeBlock → mermaid `my-6` → interactivo clay (`CompareTable`, `StepReveal` o `PracticeExercise` `my-8`). Evitar triple clay consecutivo en una sección.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 2 | callout + tabla SOLID |
| SRP | 2 | mermaid + tabla comparativa |
| OCP | 2 | stepper + practice |
| LSP | 2 | mermaid + practice |
| ISP | 1 | mermaid + code |
| DIP | 2 | mermaid + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | code challenge |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` y `CompareTable` tabla SOLID
- [ ] Poblar `SrpSection`: 2 `CodeBlock`, mermaid `my-6`, `CompareTable`
- [ ] Poblar `OcpSection`: `CodeBlock`, mermaid `my-6`, `StepReveal`, `PracticeExercise` `my-8`
- [ ] Poblar `LspSection`: 2 `CodeBlock`, mermaid `my-6`, `PracticeExercise` `my-8`
- [ ] Poblar `IspSection`: `CodeBlock`, mermaid `my-6`
- [ ] Poblar `DipSection`: `CodeBlock`, mermaid `my-6`, `PracticeExercise` `my-8`
- [ ] Comprueba (3 practice `my-8`), Reto con `CodeChallenge`, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/poo.ts`
