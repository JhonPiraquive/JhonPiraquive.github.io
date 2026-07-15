---
track: poo
slug: abstraccion-clases-abstractas-interfaces
title: "Abstracción, Clases abstractas e Interfaces"
order: 5
prev: asociacion-agregacion-composicion
next: polimorfismo
interactive_blocks:
  - type: callout
    id: abstraer-variacion-real
  - type: step-reveal
    id: nuevo-metodo-pago
  - type: mermaid
    id: caja-depende-ipago
  - type: code-challenge
    id: completa-inyeccion
  - type: mermaid
    id: jerarquia-notificacion
  - type: practice-exercise
    id: enviar-enviarcore-template
  - type: code-challenge
    id: implementa-interfaz-ilogger
  - type: compare-table
    id: abstracta-vs-interfaz
  - type: mermaid
    id: documento-ifirmable
  - type: callout
    id: error-frecuente-duplicar-contrato
  - type: practice-exercise
    id: comprension-pago-transferencia
  - type: practice-exercise
    id: comprension-notificacion-sms
  - type: practice-exercise
    id: comprension-reporte-factura-contrato
  - type: practice-exercise
    id: reto-justificacion-parte-d
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/poo/herencia/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track POO |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos |

**Espaciado (convención POO / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: ritmo vía `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Mapas mentales: prose `<ul>` sin `ClayCard`.
- Tabla «Criterio de decisión rápida» (draft L383–389): prose; la comparación formal va en `CompareTable`.
- Casos reales (pasarela pagos, notificaciones): párrafo narrativo; sin clay extra.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Abstracción: contrato y desacoplamiento`, `Clase abstracta vs interfaz` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Ejemplo C#: IPago y Caja`, ``abstract` vs `virtual`` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («Cliente inicial», «Salida distinta») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Contratos, Template Method, segregación |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout diseño |
| `### 1) Abstracción…` | Abstracción: contrato y desacoplamiento | `AbstraccionSection` |
| `### 2) Clases abstractas` | Clases abstractas | `ClasesAbstractasSection` |
| `### 3) Interfaces` | Interfaces | `InterfacesSection` |
| `### 4) Clase abstracta vs interfaz` | Clase abstracta vs interfaz | `AbstractaVsInterfazSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: caja registradora y alertas de sistema | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `AbstraccionSection`:** Mapa mental, Qué es, Señales de buena abstracción, Señales de abstracción prematura, Ejemplo C#: IPago y Caja, Extender sin tocar Caja, Caso real: pasarela de pagos, Diagrama: Caja depende de IPago, Errores comunes.

**H3 dentro de `ClasesAbstractasSection`:** Mapa mental, Qué es, Señales de clase abstracta, Ejemplo C#: Notificacion (Template Method), `abstract` vs `virtual`, Caso real: notificaciones, Diagrama: jerarquía Notificacion, Errores comunes.

**H3 dentro de `InterfacesSection`:** Mapa mental, Qué es, Señales de interfaz, Ejemplo C#: ILogger y Servicio, Intercambiar logger sin editar Servicio, Segregación (preview SOLID), Errores comunes.

**H3 dentro de `AbstractaVsInterfazSection`:** Mapa mental, Tabla comparativa, Ejemplo combinado: Documento + IFirmable, Diagrama: Documento abstracto + IFirmable, Criterio de decisión rápida.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `AbstraccionSection` | Abstracción: contrato y desacoplamiento | stepper | prose, `CodeBlock`, `StepReveal`, `MermaidDiagram`, `CodeChallenge` |
| 3 | `ClasesAbstractasSection` | Clases abstractas | — | prose, `CodeBlock`, `MermaidDiagram`, `PracticeExercise` |
| 4 | `InterfacesSection` | Interfaces | — | prose, `CodeBlock` ×2, `CodeChallenge` |
| 5 | `AbstractaVsInterfazSection` | Clase abstracta vs interfaz | — | prose, `CompareTable`, `CodeBlock`, `MermaidDiagram`, `Callout` |
| 6 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 7 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 8 | `RetoIntegradorSection` | Reto integrador: caja registradora y alertas de sistema | card | Enunciado prose (Partes A–D) + `PracticeExercise` |
| 9 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `polimorfismo` |
| 10 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L17–24) | Sin clay |
| Prerrequisitos | prose `<ul>` | asociación, herencia, encapsulamiento (draft L25–29) | Sin clay |
| `abstraer-variacion-real` | `Callout` | title: «Abstraer con variación real»; copy abstracción prematura (draft L39–43) | **callout-info**; borde secondary |

#### `AbstraccionSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | contrato / esencial (draft L51–55) | Sin clay |
| Qué es / Señales buena y prematura | prose + listas | IPago, anti-patrones (draft L57–70) | Sin clay |
| IPago y Caja | `CodeBlock` | interfaz + implementaciones + Caja (draft L74–101) | `my-6` |
| `nuevo-metodo-pago` | `StepReveal` | title: «Nuevo método de pago»; 4 steps (draft L105–114) | **stepper** `my-8` |
| Caso real pasarela | prose | checkout con if/switch (draft L116–120) | Sin clay |
| `caja-depende-ipago` | `MermaidDiagram` | classDiagram Caja→IPago (draft L124–127) | `my-6` tras stepper |
| Errores comunes | prose `<ul>` | 2 ítems (draft L129–132) | Sin clay |
| `completa-inyeccion` | `CodeChallenge` | blank `IPago` en constructor (draft L134–141) | `ClayCard` `my-8` |

Intercalar `CodeBlock` entre `StepReveal` y diagrama para evitar pila densa de clay.

#### `ClasesAbstractasSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | abstract + Template Method (draft L149–153) | Sin clay |
| Qué es / Señales | prose | estado común, Enviar/EnviarCore (draft L155–163) | Sin clay |
| Notificacion ejemplo | `CodeBlock` | abstract class + Email/Sms (draft L167–207) | `my-6` |
| abstract vs virtual | prose + lista | 3 bullets (draft L209–213) | Sin clay |
| Caso real notificaciones | prose | duplicación sin base (draft L215–217) | Sin clay |
| `jerarquia-notificacion` | `MermaidDiagram` | classDiagram Notificacion (draft L221–224) | `my-6` |
| Errores comunes | prose `<ul>` | 2 ítems (draft L226–229) | Sin clay |
| `enviar-enviarcore-template` | `PracticeExercise` | Enviar vs EnviarCore / Template Method (draft L231–241) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `InterfacesSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | capacidad, multi-rol (draft L249–253) | Sin clay |
| Qué es / Señales | prose | ILogger, inyección (draft L255–263) | Sin clay |
| ILogger y Servicio | `CodeBlock` | interfaz + 3 loggers + Servicio (draft L267–299) | `my-6` |
| Intercambiar logger | `CodeBlock` | Main servicio1/servicio2 (draft L303–308) | `my-4` |
| Segregación SOLID | prose | interfaces gigantes (draft L310–312) | Sin clay |
| Errores comunes | prose `<ul>` | 2 ítems (draft L314–317) | Sin clay |
| `implementa-interfaz-ilogger` | `CodeChallenge` | blank `ILogger` en LoggerConsola (draft L319–326) | `ClayCard` `my-8` |

#### `AbstractaVsInterfazSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | estado compartido vs contrato (draft L334–338) | Sin clay |
| `abstracta-vs-interfaz` | `CompareTable` | 5 filas Instanciable/Estado/… (draft L342–352) | `ClayCard` `my-8`; thead secondary |
| Documento + IFirmable | `CodeBlock` | ejemplo combinado (draft L356–374) | `my-6` tras tabla |
| `documento-ifirmable` | `MermaidDiagram` | classDiagram Contrato (draft L378–381) | `my-6` |
| Criterio decisión rápida | prose tabla | 3 escenarios (draft L383–389) | Sin clay |
| `error-frecuente-duplicar-contrato` | `Callout` | title: «Error frecuente»; duplicar contrato (draft L391–395) | **callout-warning**; `my-6` |

Secuencia: `CompareTable` (`my-8`) → `CodeBlock` → `MermaidDiagram` (`my-6`) → prose criterios → callout.

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L403–408) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-pago-transferencia` | `PracticeExercise` | PagoTransferencia sin editar Caja (draft L418–428) | accent border |
| `comprension-notificacion-sms` | `PracticeExercise` | NotificacionSms validación (draft L430–440) | accent border |
| `comprension-reporte-factura-contrato` | `PracticeExercise` | abstracta vs interfaz por tipo (draft L442–452) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | Partes A–D + criterio éxito (draft L460–484) | H2 primary |
| Lista tareas | prose `<ol>` | 8 ítems | `my-4` |
| `reto-justificacion-parte-d` | `PracticeExercise` | interfaz vs abstracta (draft L486–496) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L504–511) | Sin clay |
| Siguiente paso | enlace `polimorfismo` (draft L513) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas abstracción/abstract/override (draft L521–565) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Abstraer con variación real | `callout-info` | `--color-secondary` | Guía de diseño; evitar abstracción prematura |
| Error frecuente (duplicar contrato) | `callout-warning` | `--color-accent` | Preventivo; elegir abstracta vs interfaz con criterio |

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

En `AbstraccionSection`: un solo `StepReveal`; separar de `CodeChallenge` con errores comunes en prose. En `AbstractaVsInterfazSection`: no apilar `CompareTable` + callout sin diagrama o prose entre ellos.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| Abstracción | 2 | stepper + diagrama + challenge |
| Clases abstractas | 2 | diagrama + practice |
| Interfaces | 2 | 1 challenge |
| Clase abstracta vs interfaz | 2 | tabla + diagrama + callout |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice Parte D |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` abstraer con variación real
- [ ] Poblar `AbstraccionSection`: `CodeBlock`, `StepReveal`, mermaid, `CodeChallenge`
- [ ] Poblar `ClasesAbstractasSection`: `CodeBlock`, mermaid, `PracticeExercise`
- [ ] Poblar `InterfacesSection`: 2 `CodeBlock`, `CodeChallenge`
- [ ] Poblar `AbstractaVsInterfazSection`: `CompareTable`, `CodeBlock`, mermaid, `Callout`
- [ ] Crear secciones Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/poo.ts`
- [ ] H2: «Abstracción: contrato y desacoplamiento», «Clases abstractas», «Interfaces», «Clase abstracta vs interfaz»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

