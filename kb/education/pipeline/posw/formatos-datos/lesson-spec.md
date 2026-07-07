---
track: posw
slug: formatos-datos
title: "Formatos de Datos: XML y JSON"
order: 2
prev: servicios-web
next: protocolos-seguridad
interactive_blocks:
  - type: callout
    id: regla-practica-formato
  - type: mermaid
    id: arbol-pedido-xml
  - type: callout
    id: error-xml-raiz-unico
  - type: practice-exercise
    id: domparser-atributo
  - type: callout
    id: error-json-sin-comentarios
  - type: code-challenge
    id: tipos-nativos-json
  - type: compare-table
    id: comparativa-xml-json
  - type: mermaid
    id: decision-formato-integracion
  - type: step-reveal
    id: regla-practica-cuando-cada-formato
  - type: callout
    id: caso-integracion-bancaria-soap
  - type: practice-exercise
    id: api-catalogo-json-o-xml
  - type: practice-exercise
    id: comprension-tamano-xml-json
  - type: practice-exercise
    id: comprension-estructura-xml
  - type: practice-exercise
    id: comprension-casos-xml-legado
  - type: practice-exercise
    id: reto-marketplace-formatos
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
- Tablas de casos de uso (draft L294–308): prose `<table>`; sin clay extra.
- Dos diagramas en `ComparativaXmlJsonSection`: separar con `StepReveal` entre ellos (`my-6` cada uno).

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `XML: eXtensible Markup Language`, `Comparativa XML vs JSON` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Estructura de un documento`, `Mismo pedido en JSON` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («API REST nueva», «Regulación») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | W3C 1996, tipos nativos JSON |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) XML` | XML: eXtensible Markup Language | `XmlSection` |
| `### 2) JSON` | JSON: JavaScript Object Notation | `JsonSection` |
| `### 3) Comparativa` | Comparativa XML vs JSON | `ComparativaXmlJsonSection` |
| `### 4) Casos de uso` | Casos de uso reales | `CasosDeUsoSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: formato del contrato | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `XmlSection`:** Mapa mental, Qué es, Estructura de un documento, Ejemplo pedido en XML, Árbol jerárquico, Parsear XML en el navegador.

**H3 dentro de `JsonSection`:** Mapa mental, Qué es, Mismo pedido en JSON, Parsear JSON en JavaScript, Anti-ejemplo JSON inválido.

**H3 dentro de `ComparativaXmlJsonSection`:** Tabla comparativa, ¿Por qué JSON es más compacto?, Decisión de formato.

**H3 dentro de `CasosDeUsoSection`:** Cuándo XML sigue siendo correcto, Cuándo JSON es la opción correcta.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `XmlSection` | XML: eXtensible Markup Language | — | prose, `CodeBlock` ×2, `MermaidDiagram`, `Callout`, `PracticeExercise` |
| 3 | `JsonSection` | JSON: JavaScript Object Notation | — | prose, `CodeBlock` ×3, `Callout`, `CodeChallenge` |
| 4 | `ComparativaXmlJsonSection` | Comparativa XML vs JSON | stepper | `CompareTable`, prose, `MermaidDiagram`, `StepReveal` |
| 5 | `CasosDeUsoSection` | Casos de uso reales | — | prose tablas, `Callout`, `PracticeExercise` |
| 6 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 7 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 8 | `RetoIntegradorSection` | Reto integrador: formato del contrato | card | Enunciado prose + `CodeBlock` ×2 + `PracticeExercise` |
| 9 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `protocolos-seguridad` |
| 10 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L31–35) | Sin clay |
| Prerrequisitos | prose `<ul>` | servicios-web, JS básico (draft L39–41) | Sin clay |
| `regla-practica-formato` | `Callout` | title: «Regla práctica»; JSON REST vs XML legado (draft L51–55) | **callout-info**; borde secondary |

#### `XmlSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué es | prose | W3C, raíz único (draft L63–72) | Sin clay |
| Pedido XML | `CodeBlock` | xml pedido completo (draft L83–105) | `my-6` |
| `arbol-pedido-xml` | `MermaidDiagram` | flowchart TD pedido (draft L109–112) | `my-6` |
| DOMParser | `CodeBlock` | javascript parse XML (draft L116–122) | `my-4` |
| `error-xml-raiz-unico` | `Callout` | title: «Error frecuente»; raíz único y escape (draft L124–128) | **callout-warning**; borde accent |
| `domparser-atributo` | `PracticeExercise` | getAttribute en documentElement (draft L132–138) | `ClayCard` `my-8` accent |

#### `JsonSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué es | prose | tipos nativos, sin comentarios (draft L146–155) | Sin clay |
| Pedido JSON | `CodeBlock` | json pedido equivalente (draft L159–183) | `my-6` |
| JSON.parse | `CodeBlock` | javascript tipos (draft L187–195) | `my-4` |
| JSON inválido | `CodeBlock` | anti-ejemplo comentarios (draft L199–205) | `my-4` |
| `error-json-sin-comentarios` | `Callout` | title: «Error frecuente»; // no permitido (draft L207–211) | **callout-warning**; borde accent |
| `tipos-nativos-json` | `CodeChallenge` | string, number, boolean, null (draft L215–225) | `ClayCard` `my-8` |

#### `ComparativaXmlJsonSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `comparativa-xml-json` | `CompareTable` | 8 filas Característica/XML/JSON (draft L235–248) | `ClayCard` `my-8`; thead secondary |
| ¿Por qué más compacto? | prose `<ul>` | etiquetas cierre, atributos (draft L250–254) | Sin clay |
| `decision-formato-integracion` | `MermaidDiagram` | flowchart decisión SOAP/REST (draft L258–261) | `my-6` |
| `regla-practica-cuando-cada-formato` | `StepReveal` | title: «Regla práctica: cuándo cada formato»; 4 steps (draft L263–284) | **stepper** `my-8` |

#### `CasosDeUsoSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Tablas casos | prose `<table>` ×2 | XML legado vs JSON REST (draft L294–308) | Sin clay |
| `caso-integracion-bancaria-soap` | `Callout` | title: «Caso real: integración bancaria» (draft L310–314) | **callout-info** |
| `api-catalogo-json-o-xml` | `PracticeExercise` | catálogo REST → JSON (draft L316–322) | `ClayCard` `my-8` accent |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L330–335) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-tamano-xml-json` | `PracticeExercise` | ~520 vs ~320 bytes (draft L343–349) | accent border |
| `comprension-estructura-xml` | `PracticeExercise` | orden b→a→c→d (draft L351–357) | accent border |
| `comprension-casos-xml-legado` | `PracticeExercise` | SOAP, facturación DIAN (draft L359–365) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 3 integraciones + 5 tareas (draft L373–389) | H2 primary |
| Ejemplos | `CodeBlock` | json + xml producto (draft L391–407) | `my-6` |
| `reto-marketplace-formatos` | `PracticeExercise` | API/DIAN/RSS + validación (draft L409–420) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 4 viñetas (draft L430–435) | Sin clay |
| Siguiente paso | enlace `protocolos-seguridad` (draft L437) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas XML/JSON (draft L445–504) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Regla práctica | `callout-info` | `--color-secondary` | Principio rector: JSON por defecto en REST |
| Error frecuente (XML raíz) | `callout-warning` | `--color-accent` | Documento mal formado |
| Error frecuente (JSON comentarios) | `callout-warning` | `--color-accent` | JSON.parse falla con // |
| Caso real: integración bancaria | `callout-info` | `--color-secondary` | Respetar contrato SOAP/XML |

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

En `XmlSection`: diagrama árbol → code DOMParser → callout warning → practice. En `ComparativaXmlJsonSection`: tabla (`my-8`) → diagrama decisión → stepper; no apilar tabla + stepper sin diagrama intermedio. En `JsonSection`: challenge al cierre tras callout warning.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| XML | 2 | diagrama + warning + practice |
| JSON | 2 | warning + challenge |
| Comparativa XML vs JSON | 2 | tabla + diagrama + stepper |
| Casos de uso reales | 2 | callout + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice final |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` regla práctica
- [ ] Poblar `XmlSection`: 2 `CodeBlock`, mermaid árbol, callout warning, `PracticeExercise`
- [ ] Poblar `JsonSection`: 3 `CodeBlock`, callout warning, `CodeChallenge`
- [ ] Poblar `ComparativaXmlJsonSection`: `CompareTable`, mermaid decisión, `StepReveal`
- [ ] Poblar `CasosDeUsoSection`: tablas prose, callout bancario, `PracticeExercise`
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «XML: eXtensible Markup Language», «JSON: JavaScript Object Notation», «Comparativa XML vs JSON», «Casos de uso reales»
