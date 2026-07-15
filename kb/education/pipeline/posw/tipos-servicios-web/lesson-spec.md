---
track: posw
slug: tipos-servicios-web
title: "Tipos de Servicios Web"
order: 6
prev: http-headers
next: apis
interactive_blocks:
  - type: callout
    id: regla-seleccion-arquitectura
  - type: callout
    id: caso-banco-colombiano-soap
  - type: compare-table
    id: principios-rest-practica
  - type: practice-exercise
    id: rest-vs-soap-ecommerce
  - type: compare-table
    id: rest-vs-graphql-aspectos
  - type: callout
    id: graphql-no-es-base-datos
  - type: mermaid
    id: websocket-handshake-sequence
  - type: callout
    id: caso-panel-admin-hibrido
  - type: practice-exercise
    id: grpc-microservicios-vs-browser
  - type: mermaid
    id: panorama-arquitecturas-servicio
  - type: compare-table
    id: tabla-comparativa-tipos
  - type: step-reveal
    id: que-tecnologia-elegir
  - type: practice-exercise
    id: comprension-over-fetching
  - type: practice-exercise
    id: comprension-grpc-gateway
  - type: practice-exercise
    id: comprension-trading-websockets
  - type: practice-exercise
    id: reto-arquitectura-delivery
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
---

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/posw/formatos-datos/lesson-spec.md` (§ Clay UI). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear H2 con § Brand/SEO cuando existan.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, nav track POSW |
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
- Tabla gRPC vs WebSockets (draft L312–315): prose `<table>`; sin clay.
- En `ComparativaTiposSection`: panorama mermaid → tabla general → stepreveal selección.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `SOAP`, `GraphQL`, `Comparativa y selección` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Over-fetching y under-fetching`, `gRPC — microservicios internos` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («¿API pública web/mobile?», «¿Partner legacy exige XML?») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | WSDL, protobuf, handshake 101 |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) SOAP` | SOAP | `SoapSection` |
| `### 2) REST` | REST | `RestSection` |
| `### 3) GraphQL` | GraphQL | `GraphqlSection` |
| `### 4) gRPC y WebSockets` | gRPC y WebSockets | `GrpcWebsocketsSection` |
| `### 5) Comparativa` | Comparativa y selección | `ComparativaTiposSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: plataforma de delivery | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `SoapSection`:** Mapa mental, Qué es SOAP, Mensaje SOAP (XML), Cuándo usar SOAP.

**H3 dentro de `RestSection`:** Mapa mental, Principios REST en la práctica, Endpoints REST, Respuesta REST con HATEOAS ligero, Anti-patrón «REST» con todo POST.

**H3 dentro de `GraphqlSection`:** Mapa mental, Over-fetching y under-fetching, Query GraphQL, Respuesta GraphQL (JSON).

**H3 dentro de `GrpcWebsocketsSection`:** gRPC — microservicios internos, Contrato gRPC (.proto), WebSockets — tiempo real, Handshake WebSocket, Cliente WebSocket (JavaScript), gRPC vs WebSockets, Práctica guiada.

**H3 dentro de `ComparativaTiposSection`:** Panorama de arquitecturas, Tabla comparativa general, Regla de selección paso a paso.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `SoapSection` | SOAP | — | prose, `CodeBlock`, `Callout` |
| 3 | `RestSection` | REST | — | prose, `CompareTable`, `CodeBlock` ×2, `PracticeExercise` |
| 4 | `GraphqlSection` | GraphQL | — | prose, `CodeBlock` ×3, `CompareTable`, `Callout` |
| 5 | `GrpcWebsocketsSection` | gRPC y WebSockets | — | prose, `CodeBlock` ×2, `MermaidDiagram`, `Callout`, `PracticeExercise` |
| 6 | `ComparativaTiposSection` | Comparativa y selección | stepper | `MermaidDiagram`, `CompareTable`, `StepReveal` |
| 7 | `ResumenSection` | Resumen | — | Viñetas prose 7 puntos |
| 8 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 9 | `RetoIntegradorSection` | Reto integrador: plataforma de delivery | card | Enunciado prose + `CodeBlock` ×2 + `PracticeExercise` |
| 10 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `apis` |
| 11 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L32–38) | Sin clay |
| Prerrequisitos | prose `<ul>` | servicios-web, formatos-datos, http-metodos-status (draft L42–44) | Sin clay |
| `regla-seleccion-arquitectura` | `Callout` | title: «Regla de selección»; REST/GraphQL/gRPC/WS/SOAP por contexto (draft L54–58) | **callout-info**; borde secondary |

#### `SoapSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué es | prose | envelope, WSDL, WS-Security (draft L66–76) | Sin clay |
| Mensaje SOAP | `CodeBlock` | xml envelope (draft L80–92) | `my-6` |
| Cuándo usar | prose `<ul>` | legacy, banca, HL7 (draft L94–98) | Sin clay |
| `caso-banco-colombiano-soap` | `Callout` | title: «Caso real: banco colombiano» (draft L100–104) | **callout-info** |

#### `RestSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | Fielding, stateless, JSON (draft L112–117) | Sin clay |
| `principios-rest-practica` | `CompareTable` | 5 filas Principio/Significado (draft L121–131) | `ClayCard` `my-8`; thead secondary |
| Endpoints REST | `CodeBlock` | http verbos recursos (draft L135–143) | `my-4` |
| HATEOAS | `CodeBlock` | json _links (draft L147–159) | `my-4` |
| Anti-patrón POST | prose | RPC con solo POST (draft L161–163) | Sin clay |
| `rest-vs-soap-ecommerce` | `PracticeExercise` | API pública e-commerce (draft L165–171) | `ClayCard` `my-8` accent |

#### `GraphqlSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / over-under | prose `<ul>` | over-fetching, under-fetching (draft L179–190) | Sin clay |
| Query GraphQL | `CodeBlock` | graphql pedido (draft L194–213) | `my-4` |
| Respuesta JSON | `CodeBlock` | json data.pedido (draft L217–231) | `my-4` |
| `rest-vs-graphql-aspectos` | `CompareTable` | 5 filas Aspecto/REST/GraphQL (draft L233–243) | `ClayCard` `my-8`; thead secondary |
| `graphql-no-es-base-datos` | `Callout` | title: «GraphQL no es base de datos»; N+1 (draft L245–249) | **callout-warning** |

#### `GrpcWebsocketsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| gRPC intro | prose `<ul>` | HTTP/2, protobuf, streaming (draft L257–263) | Sin clay |
| Contrato .proto | `CodeBlock` | protobuf ProductoService (draft L267–285) | `my-4` |
| WebSockets intro | prose `<ul>` | full-duplex, 101 (draft L287–292) | Sin clay |
| `websocket-handshake-sequence` | `MermaidDiagram` | sequenceDiagram Upgrade 101 (draft L296–299) | `my-6` |
| Cliente JS | `CodeBlock` | javascript WebSocket (draft L303–308) | `my-4` |
| gRPC vs WS | prose `<table>` | dirección, formato, ideal (draft L310–315) | Sin clay |
| `caso-panel-admin-hibrido` | `Callout` | title: «Caso real: panel admin»; GraphQL BFF + WS + gRPC (draft L317–321) | **callout-info** |
| `grpc-microservicios-vs-browser` | `PracticeExercise` | protobuf vs gRPC-Web (draft L325–331) | `ClayCard` `my-8` accent |

#### `ComparativaTiposSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `panorama-arquitecturas-servicio` | `MermaidDiagram` | flowchart público/interno (draft L341–344) | `my-6` |
| `tabla-comparativa-tipos` | `CompareTable` | 5 filas Tecnología/Tipo/Formato/Contrato/Ideal (draft L348–358) | `ClayCard` `my-8`; thead secondary |
| `que-tecnologia-elegir` | `StepReveal` | title: «¿Qué tecnología elegir?»; 5 steps (draft L362–387) | **stepper** `my-8` |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 7 puntos (draft L395–401) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-over-fetching` | `PracticeExercise` | REST vs GraphQL 3 campos (draft L409–415) | accent border |
| `comprension-grpc-gateway` | `PracticeExercise` | gRPC sin gateway móvil (draft L417–423) | accent border |
| `comprension-trading-websockets` | `PracticeExercise` | trading tiempo real vs polling (draft L425–431) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | 5 tareas delivery (draft L441–449) | H2 primary |
| Query GraphQL | `CodeBlock` | graphql PedidoCompleto (draft L451–461) | `my-4` |
| Handshake WS | `CodeBlock` | http Upgrade 101 (draft L463–473) | `my-4` |
| `reto-arquitectura-delivery` | `PracticeExercise` | SOAP/gRPC/REST/WS por canal (draft L475–487) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 5 viñetas (draft L497–503) | Sin clay |
| Siguiente paso | enlace `apis` (draft L505) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas SOAP/REST/GraphQL/gRPC/WS (draft L513–572) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Regla de selección | `callout-info` | `--color-secondary` | Principio rector: contexto sobre moda |
| Caso real: banco colombiano | `callout-info` | `--color-secondary` | SOAP legacy vs REST móvil |
| GraphQL no es base de datos | `callout-warning` | `--color-accent` | N+1 sin DataLoader |
| Caso real: panel admin | `callout-info` | `--color-secondary` | Arquitectura híbrida BFF + WS + gRPC |

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1)
    ├── section × N (prose)
    └── Interactivos (nivel 2)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / Quiz
        ├── MermaidDiagram (blanco, no clay)
        └── CodeBlock (oscuro, no clay)
```

En `RestSection`: tabla principios → code endpoints → practice; no apilar tabla + practice sin code intermedio. En `GraphqlSection`: 2 code blocks → tabla REST vs GraphQL → warning. En `ComparativaTiposSection`: panorama → tabla → stepreveal; máximo 3 interactivos consecutivos.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout info |
| SOAP | 1 | callout banco |
| REST | 2 | tabla + practice |
| GraphQL | 2 | tabla + warning |
| gRPC y WebSockets | 2 | sequence + callout + practice |
| Comparativa y selección | 2 | panorama + tabla + stepper |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice delivery |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` regla de selección
- [ ] Poblar `SoapSection`: `CodeBlock` XML, callout banco
- [ ] Poblar `RestSection`: `CompareTable` principios, 2 `CodeBlock`, `PracticeExercise`
- [ ] Poblar `GraphqlSection`: 2 `CodeBlock`, `CompareTable`, callout warning N+1
- [ ] Poblar `GrpcWebsocketsSection`: 2 `CodeBlock`, mermaid handshake, callout panel, `PracticeExercise`
- [ ] Poblar `ComparativaTiposSection`: mermaid panorama, `CompareTable`, `StepReveal` 5 pasos
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «SOAP», «REST», «GraphQL», «gRPC y WebSockets», «Comparativa y selección»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

