---
track: pbpew
slug: 01-intro-js-y-dom
title: "Introducción a JavaScript y al DOM: conceptos, historia y consola"
order: 1
prev: null
next: "02-js-en-html"
interactive_blocks:
  - type: callout
    id: error-frecuente-html-vs-js
  - type: code-block
    id: console-log-intro
  - type: compare-table
    id: capas-web-html-css-js-dom
  - type: mermaid
    id: transpilacion-ts-js
  - type: practice-exercise
    id: ambitos-javascript
  - type: step-reveal
    id: linea-temporal-javascript
  - type: callout
    id: caso-checkout-roto
  - type: mermaid
    id: arbol-dom-basico
  - type: mermaid
    id: html-parser-dom-js
  - type: code-block
    id: document-consola
  - type: callout
    id: caso-spa-titulo
  - type: code-challenge
    id: completa-document-tagname
  - type: practice-exercise
    id: comprension-dom
  - type: practice-exercise
    id: comprension-typescript
  - type: practice-exercise
    id: comprension-document-title
  - type: practice-exercise
    id: reto-diagnostico-pagina-rota
  - type: quiz
    id: cierre-quiz
seo_title: "JavaScript y DOM: intro y consola | PBPEW"
seo_description: "Primera lección PBPEW: qué es JavaScript, cómo se relaciona con el DOM, historia breve y primer uso de DevTools con console.log en el navegador."
hreflang_notes: "es primary; canonical /es/teaching/pbpew/01-intro-js-y-dom/; EN mirror /en/teaching/pbpew/01-intro-js-y-dom/; x-default es"
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track PBPEW.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; preciso, didáctico y accesible para quien inicia programación.
- **Persona:** segunda persona (*tú*) en instrucciones prácticas y ejercicios; tercera persona o impersonal en objetivos y definiciones (*el estudiante podrá…*, *JavaScript es…*).
- **Voz:** profesional, clara, confiable; explica el *por qué* antes del *cómo* cuando ayuda a la comprensión.
- **Evitar:** jerga vacía, tono infantil, humor forzado, metáforas gamer o estilo blog informal.
- **Preferir:** verbos de acción concretos (*definir*, *distinguir*, *identificar*, *aplicar*, *verificar*).

### Meta sugeridos

| Campo | ES | Notas |
|-------|-----|-------|
| `seo_title` | `JavaScript y DOM: intro y consola \| PBPEW` | 42 caracteres; keywords naturales al inicio |
| `seo_description` | `Primera lección PBPEW: qué es JavaScript, cómo se relaciona con el DOM, historia breve y primer uso de DevTools con console.log en el navegador.` | 138 caracteres |
| `seo_title` (EN, fase i18n) | `JavaScript & the DOM: intro and console \| PBPEW` | Direct, senior engineer voice |
| `seo_description` (EN) | `PBPEW Lesson 1: what JavaScript is, how it connects to the DOM, a brief history, and your first steps with DevTools and console.log.` | Para `hreflang_notes` |

### Título de lección refinado

**ES:** `Introducción a JavaScript y al DOM: conceptos, historia y consola`

- Sustituye el separador `·` por subtítulo académico con dos puntos.
- Prioriza *introducción* y *consola* (herramienta concreta del aprendizaje).
- Mantiene las tres ideas del borrador: definición de JS, historia, DOM/consola.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable; no repetir el título de la lección |
| ¿Qué es JavaScript? | ¿Qué es JavaScript? | Pregunta directa; abre con definición en una oración |
| Características principales | Características principales del lenguaje | Añade *del lenguaje* para precisión académica |
| ¿Para qué se usa JavaScript? | Ámbitos de uso de JavaScript | Menos coloquial; mantiene enfoque profesional |
| ↳ Front-end | Desarrollo web (front-end) | Conservar paréntesis técnico |
| ↳ Servidor | Aplicaciones en servidor (Node.js) | Nombrar Node.js como referencia concreta |
| ↳ Móvil | Aplicaciones móviles | Subtítulo corto; detalle TS/JSX en cuerpo |
| ↳ Videojuegos | Videojuegos y experiencias interactivas | Evita lista de motores en el H3 |
| Historia breve y vídeo | Historia de JavaScript | Eliminar *y vídeo* del H2; el vídeo va como recurso complementario en cuerpo |
| StepReveal | Línea temporal de JavaScript | Cronología factual; títulos de paso en presente histórico |
| ¿Qué es el DOM? | ¿Qué es el DOM? | Pregunta clave del track; definir acrónimo en primera mención |
| Comprueba tu comprensión | Comprueba tu comprensión | Imperativo amable; tono de autoevaluación formativa |
| Resumen | Resumen | Cierre conceptual; viñetas con verbos en infinitivo o sustantivos |
| Reto integrador | Reto integrador: diagnóstico de página rota | Subtítulo en minúsculas tras dos puntos; escenario profesional |
| Cierre | Cierre de la lección | Formal breve; enlace explícito a lección 02 |

**Reglas transversales para headings:**

- H2: pregunta o tema nominal; sin emojis ni mayúsculas innecesarias.
- H3/H4: concreto y escaneable; incluir tecnología solo si es el foco del párrafo.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Error frecuente (HTML vs JavaScript)

- **Título:** `Error frecuente`
- **Tono:** preventivo, didáctico; señala confusión típica sin culpar al estudiante.
- **Copy refinado:** `No confundas HTML con JavaScript: HTML define la estructura; JavaScript define el comportamiento. Editar solo HTML no añade lógica interactiva.`
- **Variante Clay (referencia):** `callout-warning` o equivalente informativo.

#### 2. Caso real — tienda online (script roto)

- **Título:** `Caso real: checkout sin JavaScript`
- **Tono:** narrativa breve de incidente profesional; conecta síntoma → causa → herramienta de diagnóstico.
- **Copy refinado:** `Un e-commerce despliega una actualización y el archivo checkout.js queda con ruta incorrecta en <script src="...">. La página se ve bien (HTML y CSS cargan), pero el carrito no actualiza totales y el botón «Pagar» no responde. En DevTools → Network y Consola verifica si el script devuelve 404 o hay errores. Refuerza: estructura (HTML) ≠ comportamiento (JS).`
- **Variante Clay:** `callout-info` o card de caso.

#### 3. Caso real — panel admin (HTML en disco vs DOM)

- **Título:** `Caso real: cambio en HTML que no se refleja`
- **Tono:** mismo registro que el caso anterior; énfasis en SPA y DOM vivo.
- **Copy refinado:** `Un practicante edita el texto de un <h1> en el archivo HTML del repositorio, pero en el navegador sigue viendo el título antiguo. La aplicación es una SPA: el título se genera con JavaScript al cargar. DevTools → Elements muestra el árbol vivo, no solo el archivo fuente.`
- **Variante Clay:** `callout-info` o card de caso.

### Otros bloques interactivos — tono de mensajes

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| PracticeExercise | Éxito (ámbitos JS) | `Correcto. Has identificado los principales ecosistemas donde JavaScript opera hoy.` — afirmación breve, sin exclamaciones |
| PracticeExercise | Éxito (DOM) | `Correcto. Modificar el DOM permite interactividad, actualizar la interfaz sin recargar y dar feedback inmediato al usuario.` |
| PracticeExercise | Éxito (TypeScript) | `Correcto. Los navegadores ejecutan JavaScript; TypeScript añade tipos en desarrollo y debe transpilarse.` |
| PracticeExercise | Éxito (document.title) | `Correcto. document.title devuelve el texto del elemento <title>, visible en la pestaña del navegador.` |
| PracticeExercise | Éxito (reto integrador) | `Excelente diagnóstico. Has integrado DOM, DevTools y transpilación en un escenario realista.` |
| Quiz | Feedback general | Explicar el *por qué* de la respuesta correcta en una oración; mencionar DevTools o DOM cuando aplique |
| Cierre | Ideas clave | Viñetas paralelas: `HTML = estructura · CSS = presentación · JavaScript = comportamiento · DOM = puente en memoria` |
| Cierre | Siguiente paso | `Siguiente lección: vincular scripts al HTML con <script> (inline frente a externo).` — tono de itinerario académico |

### Notas EN (fase i18n)

- Título EN sugerido: `Introduction to JavaScript and the DOM: concepts, history, and the console`
- Mantener equivalencia terminológica: *DOM*, *DevTools*, *console.log*, *transpile* (verbo estándar en EN técnico).
- Evitar traducir literalmente «Comprueba tu comprensión»; preferir `Check your understanding`.

## SEO

Contribución de **seo-redirects-expert**. Primera lección del track PBPEW; sin `prev`; entrada natural desde el hub `/es/teaching/pbpew/`.

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `JavaScript y DOM: intro y consola \| PBPEW` | 41 |
| `seoDescription` | `Primera lección PBPEW: qué es JavaScript, cómo se relaciona con el DOM, historia breve y primer uso de DevTools con console.log en el navegador.` | 138 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `JavaScript & the DOM: intro and console \| PBPEW` | 48 |
| `seoDescription` | `PBPEW Lesson 1: what JavaScript is, how it connects to the DOM, a brief history, and your first steps with DevTools and console.log.` | 120 |

### Keywords (track PBPEW)

**Primarias:** JavaScript, DOM, Document Object Model, programación web, PBPEW, programación básica para entornos web.

**Secundarias:** DevTools, console.log, ECMAScript, HTML y JavaScript, Node.js, TypeScript transpilación, introducción JavaScript navegador.

**Long-tail:** qué es JavaScript, qué es el DOM, historia de JavaScript, aprender JavaScript desde cero, consola del navegador.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `null` | — (primera lección del track) |
| `next` | `02-js-en-html` | JavaScript en HTML: `<script>` inline y externo |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/pbpew/01-intro-js-y-dom/` |
| EN (fase i18n) | `/en/teaching/pbpew/01-intro-js-y-dom/` |
| Legacy | `/pages/teaching/pbpew/01-intro-js-y-dom.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/pbpew/` |

### Headings con keywords naturales

Alinear H2/H3 con la tabla de voz en **Brand**; priorizar términos de búsqueda sin forzar:

| Nivel | Copy publicado | Keyword objetivo |
|-------|----------------|------------------|
| H2 | ¿Qué es JavaScript? | JavaScript |
| H2 | Características principales del lenguaje | JavaScript, lenguaje |
| H2 | Ámbitos de uso de JavaScript | JavaScript, Node.js, front-end |
| H2 | Historia de JavaScript | historia JavaScript, ECMAScript |
| H2 | ¿Qué es el DOM? | DOM, Document Object Model |
| H2 | Comprueba tu comprensión | — (formativo; sin keyword stuffing) |
| H3 | Desarrollo web (front-end) | JavaScript navegador |
| H3 | Aplicaciones en servidor (Node.js) | Node.js |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slugs idénticos (`01-intro-js-y-dom`); no traducir slug.
- **`x-default`:** `es` (audiencia principal del material docente).
- **Título visible EN:** `Introduction to JavaScript and the DOM: concepts, history, and the console` (equivalente al título refinado ES).
- **Términos sin traducir:** DOM, DevTools, `console.log`, ECMAScript, Node.js, TypeScript.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Clay UI

Contribución de **clay-ui-expert**. Referencia de implementación: `src/components/teaching/lessons/sea/historia-redes-y-seguridad/` (patrón `section` + `h2` + componente interactivo). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos de `StepReveal`, `PracticeExercise`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención SEA / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: cada `<section>` sin margen extra; el ritmo lo dan `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `¿Qué es JavaScript?`, `¿Qué es el DOM?` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Desarrollo web (front-end)`, subsecciones de uso |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `PracticeExercise`, `StepReveal` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Texto expositivo |

**Nota brand:** aplicar copy de headings refinados de la sección Brand (p. ej. `Ámbitos de uso de JavaScript`, `Historia de JavaScript`) manteniendo las mismas clases.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 (refinado) | `clay_variant` sección | Bloques hijos |
|-------|----------------|---------------|------------------------|---------------|
| 1 | `ObjetivosDelTemaSection` | Objetivos del tema | — (prose) | Lista de objetivos en `<ul>` |
| 2 | `QueEsJavascriptSection` | ¿Qué es JavaScript? | — | `Callout`, `CodeBlock` |
| 3 | `CaracteristicasPrincipalesSection` | Características principales del lenguaje | — | `CompareTable` |
| 4 | `ParaQueSeUsaSection` | Ámbitos de uso de JavaScript | — | H3 ×4, `MermaidDiagram`, `PracticeExercise` |
| 5 | `HistoriaBreveYVideoSection` | Historia de JavaScript | stepper | `StepReveal`, blockquote vídeo, `Callout` |
| 6 | `QueEsElDomSection` | ¿Qué es el DOM? | — | `MermaidDiagram` ×2, `CodeBlock`, `Callout`, `CodeChallenge` |
| 7 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 8 | `ResumenSection` | Resumen | — | Viñetas en prose |
| 9 | `RetoIntegradorSection` *(pendiente)* | Reto integrador: diagnóstico de página rota | card | Enunciado + `PracticeExercise` |
| 10 | `CierreSection` *(pendiente)* | Cierre de la lección | card | Ideas clave + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `QueEsJavascriptSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `error-frecuente-html-vs-js` | `Callout` | title: «Error frecuente»; copy Brand §Callout 1 | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |
| `console-log-intro` | `CodeBlock` | 3 líneas `console.log` (draft L52–56) | Sin `ClayCard`; fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |

#### `CaracteristicasPrincipalesSection`

| id | Componente | Props | Clay |
|----|------------|-------|------|
| `capas-web-html-css-js-dom` | `CompareTable` | headers: Capa / Responsabilidad / Ejemplo; 4 filas (draft L71–78) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |

#### `ParaQueSeUsaSection`

| id | Componente | Props | Clay |
|----|------------|-------|------|
| `transpilacion-ts-js` | `MermaidDiagram` | flowchart TS → transpilador → JS → navegador/Node (draft L104–106) | `div` blanco `rounded-lg p-4 my-6`; sin segundo `ClayCard` (evitar 3 niveles) |
| `ambitos-javascript` | `PracticeExercise` | prompt + 3 hints + keywords (draft L108–114) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `HistoriaBreveYVideoSection`

| id | Componente | Props | Clay |
|----|------------|-------|------|
| `linea-temporal-javascript` | `StepReveal` | title: «Línea temporal de JavaScript»; 5 steps (draft L123–147) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30`; botones `clay-button` |
| `caso-checkout-roto` | `Callout` | title: «Caso real: checkout sin JavaScript»; copy Brand §Callout 2 | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| Vídeo sugerido | blockquote en prose | `> **Vídeo sugerido:** …` | Sin clay extra |

#### `QueEsElDomSection`

| id | Componente | Props | Clay |
|----|------------|-------|------|
| `arbol-dom-basico` | `MermaidDiagram` | árbol document → html → head/body (draft L167–170) | `my-6` entre párrafos |
| `html-parser-dom-js` | `MermaidDiagram` | HTML → parser → DOM → render; JS → motor → document (draft L172–175) | `my-6`; separar con párrafo si hace falta |
| `document-consola` | `CodeBlock` | `document.documentElement.tagName`, `document.body.children.length` | `my-4` tras segundo diagrama |
| `caso-spa-titulo` | `Callout` | title: «Caso real: cambio en HTML que no se refleja»; copy Brand §Callout 3 | **callout-info** |
| `completa-document-tagname` | `CodeChallenge` | template 2 blanks: `log`, `tagName` (draft L190–198) | `ClayCard` `my-8`; inputs `rounded-xl` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-dom` | `PracticeExercise` | DOM e interactividad | accent border |
| `comprension-typescript` | `PracticeExercise` | Transpilación TS | accent border |
| `comprension-document-title` | `PracticeExercise` | `console.log(document.title)` | accent border |

Apilar los tres ejercicios con `gap` implícito vía `my-8` cada uno; no anidar en un `ClayCard` padre (mantener 2 niveles).

#### `RetoIntegradorSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | Blockquote del reporte + lista numerada criterios | H2 primary; texto normal |
| `reto-diagnostico-pagina-rota` | `PracticeExercise` | 4 hints, keywords dom/devtools/transpil (draft L259–270) | `ClayCard` accent; textarea `rows={5}` por respuesta larga |

#### `CierreSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Ideas clave | prose `<ul>` | 3 viñetas Brand | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas con feedback (draft L286–345) | `ClayCard` `my-8`; opciones como botones/lista dentro de card |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Error frecuente (HTML vs JS) | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; destaca confusión típica |
| Caso checkout roto | `callout-info` | `--color-secondary` (`#00C2FF`) | Narrativa incidente profesional |
| Caso SPA título | `callout-info` | `--color-secondary` | Mismo registro que caso anterior |

Implementación actual de `Callout.tsx` usa solo `border-secondary`; para **callout-warning** aplicar `border-[var(--color-accent)]` en ese bloque (prop `variant` futura o `className`).

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

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo.

### Checklist implementación (lesson-developer)

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] Añadir `Callout` + `CodeBlock` en `QueEsJavascriptSection`
- [ ] Añadir `CompareTable` en `CaracteristicasPrincipalesSection`
- [ ] Añadir `PracticeExercise` en `ParaQueSeUsaSection`
- [ ] Añadir `StepReveal` + `Callout` en `HistoriaBreveYVideoSection`
- [ ] Completar `QueEsElDomSection`: 2º diagrama, `Callout`, `CodeChallenge`
- [ ] Poblar `CompruebaTuComprensionSection` con 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection` y `CierreSection` con `Quiz`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/pbpew.ts` (patrón SEA)
