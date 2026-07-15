---
track: posw
slug: protocolos-seguridad
title: "Protocolos de Seguridad Web"
order: 3
prev: formatos-datos
next: http-metodos-status
interactive_blocks:
  - type: callout
    id: produccion-siempre-https
  - type: callout
    id: caso-cafeteria-token-robado
  - type: practice-exercise
    id: http-stateless-sesion
  - type: mermaid
    id: pila-http-vs-https
  - type: callout
    id: https-no-reemplaza-login
  - type: compare-table
    id: linea-tiempo-ssl-tls
  - type: callout
    id: error-decir-ssl-cuando-tls
  - type: code-challenge
    id: puertos-y-protocolos
  - type: mermaid
    id: handshake-tls-sequence
  - type: step-reveal
    id: handshake-tls-paso-a-paso
  - type: compare-table
    id: comparativa-http-https
  - type: callout
    id: caso-certificado-vencido
  - type: practice-exercise
    id: tres-pilares-https
  - type: practice-exercise
    id: comprension-orden-handshake
  - type: practice-exercise
    id: comprension-ssl-obsoleto
  - type: practice-exercise
    id: comprension-http-vs-https-entornos
  - type: practice-exercise
    id: reto-auditoria-api
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
- Tabla tres pilares HTTPS (draft L144–148): prose `<table>`; sin clay.
- Dos diagramas en `FlujoTlsSection`: sequence + stepreveal; no tercer mermaid sin prose.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `HTTP: HyperText Transfer Protocol`, `Flujo del handshake TLS 1.3` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Riesgo en red compartida`, `Los tres pilares` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («ClientHello», «Canal cifrado activo») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Stateless, TLS 1.3 |

**H2 sugeridos (promover `###` del draft a sección TSX):**

| Draft | H2 visible | Notas |
|-------|------------|-------|
| Objetivos del tema | Objetivos del tema | Prose + callout |
| `### 1) HTTP` | HTTP: HyperText Transfer Protocol | `HttpSection` |
| `### 2) HTTPS` | HTTPS: HTTP Secure | `HttpsSection` |
| `### 3) SSL vs TLS` | SSL vs TLS: evolución y versiones | `SslTlsSection` |
| `### 4) Flujo handshake` | Flujo del handshake TLS 1.3 | `FlujoTlsSection` |
| `### 5) Comparativa` | Comparativa HTTP vs HTTPS | `ComparativaHttpHttpsSection` |
| Resumen | Resumen | Viñetas prose |
| Comprueba tu comprensión | Comprueba tu comprensión | `card` semántico |
| Reto integrador | Reto integrador: audita el despliegue | Subtítulo tras dos puntos |
| Cierre | Cierre de la lección | Ideas clave + enlace siguiente |
| Miniquiz | Mini-quiz | `Quiz` en `ClayCard` |

**H3 dentro de `HttpSection`:** Mapa mental, Qué es, Ejemplo GET vulnerable, Anti-patrón login HTTP, Riesgo en red compartida, Stateless y sesión de usuario.

**H3 dentro de `HttpsSection`:** Mapa mental, Qué es, Los tres pilares, URL esquema, Misma petición tras HTTPS, Pila HTTP vs HTTPS.

**H3 dentro de `SslTlsSection`:** Mapa mental, Línea de tiempo, Mejoras de TLS 1.3.

**H3 dentro de `FlujoTlsSection`:** Pasos principales, Diagrama de secuencia, Orden del handshake.

**H3 dentro de `ComparativaHttpHttpsSection`:** Producción vs desarrollo local, Mixed content.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista objetivos + prerrequisitos + `Callout` |
| 2 | `HttpSection` | HTTP: HyperText Transfer Protocol | — | prose, `CodeBlock` ×2, `Callout`, `PracticeExercise` |
| 3 | `HttpsSection` | HTTPS: HTTP Secure | — | prose, tabla pilares, `CodeBlock` ×3, `MermaidDiagram`, `Callout` |
| 4 | `SslTlsSection` | SSL vs TLS: evolución y versiones | — | prose, `CompareTable`, `Callout`, `CodeChallenge` |
| 5 | `FlujoTlsSection` | Flujo del handshake TLS 1.3 | stepper | prose, `MermaidDiagram`, `StepReveal` |
| 6 | `ComparativaHttpHttpsSection` | Comparativa HTTP vs HTTPS | — | `CompareTable`, prose tablas, `Callout`, `PracticeExercise` |
| 7 | `ResumenSection` | Resumen | — | Viñetas prose 6 puntos |
| 8 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 9 | `RetoIntegradorSection` | Reto integrador: audita el despliegue | card | Enunciado prose + `CodeBlock` + `PracticeExercise` |
| 10 | `CierreSection` | Cierre de la lección | card | Ideas clave + enlace `http-metodos-status` |
| 11 | `MiniquizFinalSection` | Mini-quiz | card | `Quiz` 5 preguntas |

### Bloques interactivos — mapeo detallado

#### `ObjetivosDelTemaSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Objetivos medibles | prose `<ul>` | 5 objetivos (draft L33–37) | Sin clay |
| Prerrequisitos | prose `<ul>` | servicios-web, formatos-datos (draft L41–43) | Sin clay |
| `produccion-siempre-https` | `Callout` | title: «Producción siempre HTTPS»; tokens en HTTP (draft L53–57) | **callout-warning**; borde accent |

#### `HttpSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué es | prose | stateless, puerto 80 (draft L65–74) | Sin clay |
| GET vulnerable | `CodeBlock` | http con Bearer (draft L78–86) | `my-6` |
| Login HTTP | `CodeBlock` | POST credenciales texto plano (draft L90–97) | `my-4` |
| Riesgo Wi-Fi | prose | Wireshark (draft L101–103) | Sin clay |
| `caso-cafeteria-token-robado` | `Callout` | title: «Caso real: cafetería y token robado» (draft L105–109) | **callout-warning** |
| Stateless | prose | cookies/JWT (draft L111–113) | Sin clay |
| `http-stateless-sesion` | `PracticeExercise` | stateless + sesión aplicación (draft L117–123) | `ClayCard` `my-8` accent |

#### `HttpsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental / Qué es | prose | TLS, puerto 443 (draft L131–140) | Sin clay |
| Tres pilares | prose `<table>` | confidencialidad/integridad/autenticación (draft L144–148) | Sin clay |
| URLs | `CodeBlock` | http vs https esquemas (draft L152–156) | `my-4` |
| Petición cifrada | `CodeBlock` | http dentro túnel TLS (draft L160–174) | `my-4` |
| `pila-http-vs-https` | `MermaidDiagram` | flowchart TB stacks (draft L178–181) | `my-6` |
| `https-no-reemplaza-login` | `Callout` | title: «HTTPS no reemplaza login» (draft L183–187) | **callout-info** |

#### `SslTlsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Mapa mental | prose `<ul>` | SSL obsoleto, TLS 1.2/1.3 (draft L195–200) | Sin clay |
| `linea-tiempo-ssl-tls` | `CompareTable` | 6 versiones Estado 2025 (draft L204–215) | `ClayCard` `my-8`; thead secondary |
| Mejoras TLS 1.3 | prose `<ul>` | PFS, handshake (draft L217–222) | Sin clay |
| `error-decir-ssl-cuando-tls` | `Callout` | title: «Error frecuente: decir SSL cuando usas TLS» (draft L224–228) | **callout-warning** |
| `puertos-y-protocolos` | `CodeChallenge` | 443/TLS/80 (draft L232–241) | `ClayCard` `my-8` |

#### `FlujoTlsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Pasos principales | prose `<ol>` | 5 pasos handshake (draft L249–255) | Sin clay |
| `handshake-tls-sequence` | `MermaidDiagram` | sequenceDiagram ClientHello… (draft L259–262) | `my-6` |
| `handshake-tls-paso-a-paso` | `StepReveal` | title: «Handshake TLS 1.3 paso a paso»; 5 steps (draft L264–289) | **stepper** `my-8` |
| Orden handshake | prose | b→d→e→a→c (draft L291–293) | Sin clay |

#### `ComparativaHttpHttpsSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `comparativa-http-https` | `CompareTable` | 7 filas Aspecto/HTTP/HTTPS (draft L301–313) | `ClayCard` `my-8`; thead secondary |
| Prod vs local | prose `<table>` | entornos recomendación (draft L317–322) | Sin clay |
| `caso-certificado-vencido` | `Callout` | title: «Caso real: certificado vencido en Black Friday» (draft L324–328) | **callout-info** |
| Mixed content | prose | HTTPS + recursos HTTP (draft L330–332) | Sin clay |
| `tres-pilares-https` | `PracticeExercise` | confidencialidad/integridad/autenticación (draft L334–340) | `ClayCard` `my-8` accent |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 6 puntos (draft L348–353) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-orden-handshake` | `PracticeExercise` | orden b→d→e→a→c (draft L361–367) | accent border |
| `comprension-ssl-obsoleto` | `PracticeExercise` | SSL 3.0 / TLS 1.0 (draft L369–375) | accent border |
| `comprension-http-vs-https-entornos` | `PracticeExercise` | localhost vs prod (draft L377–383) | accent border |

Apilar los tres ejercicios con **`my-8` cada uno**; H2 en **card** semántico.

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | inventario + 5 tareas (draft L391–408) | H2 primary |
| POST login | `CodeBlock` | credenciales sin TLS (draft L410–418) | `my-6` |
| `reto-auditoria-api` | `PracticeExercise` | hallazgos + TLS 1.2+ + handshake (draft L420–431) | `ClayCard` accent; `rows={6}`; `my-8` |

#### `CierreSection`

| Elemento | Clay |
|----------|------|
| Intro + ideas clave | prose `<ul>` 5 viñetas (draft L441–447) | Sin clay |
| Siguiente paso | enlace `http-metodos-status` (draft L449) | Sin clay |

#### `MiniquizFinalSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `cierre-quiz` | `Quiz` | 5 preguntas HTTP/HTTPS/TLS (draft L457–516) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Producción siempre HTTPS | `callout-warning` | `--color-accent` | Regla de seguridad crítica al inicio |
| Caso real: cafetería y token robado | `callout-warning` | `--color-accent` | Riesgo HTTP en staging público |
| HTTPS no reemplaza login | `callout-info` | `--color-secondary` | Aclaración capa transporte vs aplicación |
| Error frecuente: decir SSL cuando usas TLS | `callout-warning` | `--color-accent` | Terminología y configuración obsoleta |
| Caso real: certificado vencido | `callout-info` | `--color-secondary` | Operaciones y SEO |

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

En `HttpSection`: 2 callouts warning (objetivos + cafetería) + practice; intercalar prose entre code blocks. En `FlujoTlsSection`: sequence diagram → stepreveal; no diagrama adicional sin prose. En `ComparativaHttpHttpsSection`: tabla (`my-8`) → callout certificado → practice.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout warning |
| HTTP | 2 | 2 warnings + practice |
| HTTPS | 2 | diagrama + callout info |
| SSL vs TLS | 2 | tabla + warning + challenge |
| Flujo handshake TLS 1.3 | 2 | sequence + stepper |
| Comparativa HTTP vs HTTPS | 2 | tabla + callout + practice |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 practice `my-8` |
| Reto integrador | 2 | practice auditoría |
| Cierre | 0 | Prose |
| Mini-quiz | 2 | Quiz final |

### Checklist implementación (lesson-developer)

- [ ] Crear `ObjetivosDelTemaSection` con `Callout` producción siempre HTTPS (warning)
- [ ] Poblar `HttpSection`: 2 `CodeBlock`, callout cafetería, `PracticeExercise`
- [ ] Poblar `HttpsSection`: 3 `CodeBlock`, mermaid pila, callout info login
- [ ] Poblar `SslTlsSection`: `CompareTable` timeline, callout warning SSL, `CodeChallenge`
- [ ] Poblar `FlujoTlsSection`: mermaid sequence, `StepReveal` 5 pasos
- [ ] Poblar `ComparativaHttpHttpsSection`: `CompareTable`, callout certificado, `PracticeExercise`
- [ ] Crear Resumen, Comprueba (3 practice `my-8`), Reto, Cierre, Miniquiz
- [ ] Registrar quiz en `src/lib/teaching-quizzes/posw.ts`
- [ ] H2: «HTTP: HyperText Transfer Protocol», «HTTPS: HTTP Secure», «SSL vs TLS: evolución y versiones», «Flujo del handshake TLS 1.3», «Comparativa HTTP vs HTTPS»

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

