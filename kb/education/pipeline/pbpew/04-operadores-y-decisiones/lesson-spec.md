---
track: pbpew
slug: 04-operadores-y-decisiones
title: "Operadores y control de flujo: comparación estricta, if y switch"
order: 4
prev: "03-variables-y-tipos"
next: "05-bucles-y-errores"
seo_title: "Operadores JS: ===, if/else y switch | PBPEW"
seo_description: "Aprende operadores aritméticos y lógicos, comparación estricta (===), truthy/falsy, if/else y switch en JavaScript. Lección 4 PBPEW con ejercicios prácticos."
hreflang_notes: "es primary; canonical /es/teaching/pbpew/04-operadores-y-decisiones/; EN mirror /en/teaching/pbpew/04-operadores-y-decisiones/; x-default es"
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track PBPEW. Referencia de formato: `kb/education/pipeline/pbpew/01-intro-js-y-dom/lesson-spec.md` (§ Brand); alineación de secciones con `kb/education/pipeline/pbpew/02-js-en-html/lesson-spec.md` (mapa H2 → componentes).

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; preciso, didáctico y orientado a la práctica con consola y formularios.
- **Persona:** segunda persona (*tú*) en ejercicios, retos y miniquiz; tercera persona o impersonal en objetivos y definiciones (*el estudiante podrá…*, *un operador actúa sobre…*).
- **Voz:** profesional, clara, confiable; enfatiza reglas de producción (`===`, `break`, `Number.isNaN`) antes de atajos.
- **Evitar:** jerga vacía, tono infantil, humor forzado, metáforas gamer o estilo blog informal; no trivializar `==` sin explicar el riesgo.
- **Preferir:** verbos de acción concretos (*comparar*, *validar*, *clasificar*, *implementar*, *distinguir*, *elegir*).

### Título de lección refinado

**ES:** `Operadores y control de flujo: comparación estricta, if y switch`

- Sustituye la barra `if / switch` por enumeración académica con comas.
- Incorpora *comparación estricta* como eje transversal del curso (puente desde lección 03).
- Mantiene *control de flujo* como marco conceptual del módulo.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable; abrir con una oración que enlace operadores y decisiones |
| Operadores aritméticos | Operadores aritméticos | H2 nominal; tabla de símbolos en cuerpo, no en el título |
| ↳ Comparación | Comparación estricta frente a coerción | H3/H4; nombrar `===` y `==` en cuerpo, no en H2 |
| Operadores lógicos | Operadores lógicos y valores truthy | Añade *truthy* porque es prerequisito del `if` |
| if / else if / else | Estructuras condicionales: if, else if y else | Formal; evita solo siglas sin contexto |
| switch | La sentencia `switch` | Incluir backticks en implementación TSX si el patrón lo permite; en markdown usar comillas tipográficas |
| Resumen | Resumen | Viñetas con sustantivos o infinitivos; regla `===` al inicio |
| Comprueba tu comprensión | Comprueba tu comprensión | Imperativo amable; tono de autoevaluación formativa |
| Reto integrador | Reto integrador: motor de tarifas del gimnasio | Subtítulo en minúsculas tras dos puntos; escenario de negocio creíble |
| Cierre | Cierre de la lección | Formal breve; enlace explícito a lección 05 |
| Mini-quiz | Mini-quiz | Consistente con PBPEW 02 (`MiniquizSection`); sin guión en slug |

**Reglas transversales para headings:**

- H2: tema nominal o estructura nombrada; sin emojis ni mayúsculas innecesarias.
- H3/H4: concreto y escaneable; reservar nombres de operadores (`&&`, `break`) para subtítulos técnicos.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Regla PBPEW (`===` por defecto)

- **Título:** `Regla del curso`
- **Tono:** normativo, didáctico; establece estándar sin tono punitivo.
- **Copy refinado:** `En PBPEW y en código nuevo de producción, usa siempre === y !== en comparaciones. Reserva == solo si dominas la coerción y documentas el motivo. En formularios y APIs los datos suelen llegar como string — la igualdad suelta oculta errores difíciles de depurar.`
- **Variante Clay (referencia):** `callout-info`; borde secondary — regla de curso, no error del estudiante.

#### 2. Caso real — login corporativo

- **Título:** `Caso real: portal con roles`
- **Tono:** narrativa breve de incidente profesional; síntoma → causa → decisión técnica.
- **Copy refinado:** `Un portal interno evalúa if (rol == 0) con rol leído de un <select> (string). La coerción hace que valores distintos parezcan equivalentes: 5 == "5" es true. Decisión clave: comparar con === contra strings explícitos (rol === "admin") y validar contra una lista blanca de roles permitidos.`
- **Variante Clay:** `callout-info`.

#### 3. Error frecuente — `"0"` es truthy

- **Título:** `Error frecuente`
- **Tono:** preventivo; conecta con inputs de formulario de la lección 02.
- **Copy refinado:** `if ("0") ejecuta el bloque porque el string "0" es truthy; if (0) no. Los valores de <input> llegan como string — no confundas "vacío visual" con falsy. Agrupa condiciones compuestas con paréntesis: (a && b) || c.`
- **Variante Clay:** `callout-warning`.

#### 4. Error frecuente — `=` frente a `===`

- **Título:** `Error frecuente`
- **Tono:** preventivo; señala bug clásico sin culpar al estudiante.
- **Copy refinado:** `No confundas = con === en condiciones: if (x = 5) asigna y el valor asignado es truthy — casi siempre un bug. La condición debe comparar: if (x === 5).`
- **Variante Clay:** `callout-warning`.

#### 5. Caso real — e-commerce, descuento duplicado

- **Título:** `Caso real: descuento duplicado en e-commerce`
- **Tono:** incidente de negocio; enlaza fall-through con consecuencia económica.
- **Copy refinado:** `Un switch sin break tras case "electronica" hace que el producto reciba también el descuento de "hogar". Cada case que no debe continuar al siguiente necesita break. Si varios casos comparten la misma acción, agrúpalos sin código intermedio — fall-through intencional, no accidental.`
- **Variante Clay:** `callout-info`.

### Otros bloques interactivos — títulos y tono

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| `CompareTable` | Título implícito (prose previo) | Introducir con una oración: «Elige la estructura según el criterio del problema» antes de la tabla if vs switch |
| `CompareTable` | Headers | `Criterio` · `if / else if` · `switch` — mantener paralelismo del draft |
| `StepReveal` | Evaluación condición compuesta | Título: `Evaluación de una condición compuesta`; pasos en presente indicativo |
| `StepReveal` | Ejecución switch | Título: `Ejecución paso a paso de switch`; paso 4 enfatiza break vs fall-through |
| `MermaidDiagram` | Truthy/falsy | Sin título H3 obligatorio; párrafo puente: «Antes del if, JavaScript evalúa truthiness» |
| `MermaidDiagram` | Cortocircuito `&&` | Párrafo puente: «El operador && puede evitar evaluar el segundo operando» |
| `MermaidDiagram` | Flujo if/else if/else | Sin duplicar el H2; refuerza orden de evaluación |
| `MermaidDiagram` | Flujo switch | Complementa `StepReveal`; no repetir texto del callout e-commerce |
| `CodeChallenge` | Acceso condicional | Título: `Completa el código: acceso condicional` — dos puntos, minúsculas en subtítulo |
| `CodeChallenge` | Validar usuario activo | Título: `Completa el código: validar usuario activo` |
| `CodeChallenge` | Fin de semana (switch) | Título: `Completa el código: switch de fin de semana` |
| `CodeChallenge` | Operadores aritméticos | Título: `Completa el código: operadores aritméticos` |
| `PracticeExercise` | `===` vs `==` | Prompt mantiene referencia a `<input>` y API; tono interrogativo directo |
| `PracticeExercise` | Valores falsy | Éxito: afirmación breve sobre falsy clásicos y truthy engañoso (`[]`, `{}`) |
| `PracticeExercise` | Clasificar temperatura | Éxito: validar `Number.isNaN` primero — tono de buena práctica |
| `PracticeExercise` | Coerción en consola | Éxito: contrastar pares `==` / `===` sin exclamaciones |
| `PracticeExercise` | Orden cortocircuito `&&` | Éxito: enumerar orden (b) → (a)/(c) → (d) de forma didáctica |
| `PracticeExercise` | Flujo else if | Éxito: «La primera condición truthy gana» — regla memorable |
| `PracticeExercise` | Motor de tarifas | Éxito: `Excelente. Has integrado validación, rangos con if, valores discretos con switch y descuento condicional con &&.` |
| `Quiz` | Feedback general | Una oración por ítem; mencionar coerción, break o cortocircuito según la pregunta |
| Cierre | Ideas clave | Viñetas paralelas; `===` primero; enlace explícito a bucles y `try/catch` en lección 05 |
| Cierre | Siguiente paso | `Siguiente lección: bucles for y while, y manejo de errores con try/catch.` — tono de itinerario académico |

### Prosa de apertura y cierre (ajustes de voz)

**Objetivos del tema (primer párrafo):**

> Esta lección presenta los operadores que transforman o comparan valores y las estructuras de decisión que ejecutan código solo cuando se cumplen condiciones. El dominio técnico sigue el brief del topic-expert; los objetivos medibles se listan arriba.

**Cierre (párrafo intro):**

> Has completado el estudio de operadores y estructuras de decisión en JavaScript. Con ellos, tus scripts pueden reaccionar a datos del usuario, validar formularios y aplicar reglas de negocio — base indispensable antes de bucles y manejo de errores en la lección 05.

### Notas EN (fase i18n)

- Título EN sugerido: `Operators and control flow: strict comparison, if, and switch`
- Mantener equivalencia terminológica: *truthy*, *falsy*, *short-circuit*, *fall-through*, `Number.isNaN`, `===`.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Regla del curso» → `Course rule`.
- «Motor de tarifas del gimnasio» → `Gym membership pricing engine` (escenario neutro, no marca ficticia).

## SEO

Contribución de **seo-redirects-expert**. Cuarta lección del track PBPEW; continúa variables y tipos (03) y prepara bucles y manejo de errores (05).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `Operadores JS: ===, if/else y switch \| PBPEW` | 44 |
| `seoDescription` | `Aprende operadores aritméticos y lógicos, comparación estricta (===), truthy/falsy, if/else y switch en JavaScript. Lección 4 PBPEW con ejercicios prácticos.` | 157 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `JavaScript operators: ===, if/else & switch \| PBPEW` | 51 |
| `seoDescription` | `PBPEW Lesson 4: arithmetic and logical operators, strict equality (===), truthy/falsy, if/else chains, and switch with break. Hands-on Number.isNaN validation.` | 159 |

### Keywords (track PBPEW)

**Primarias:** operadores JavaScript, if else, switch, comparación estricta, ===, control de flujo, PBPEW.

**Secundarias:** operadores lógicos, truthy falsy, cortocircuito, break, fall-through, Number.isNaN, coerción, operadores aritméticos.

**Long-tail:** operador igualdad estricta JavaScript, diferencia if y switch JavaScript, valores truthy falsy JavaScript, switch break fall-through ejemplo, operadores lógicos && || JavaScript.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `03-variables-y-tipos` | Variables, hoisting y tipos de datos |
| `next` | `05-bucles-y-errores` | Bucles: for, while, do-while · break, continue · try/catch |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/pbpew/04-operadores-y-decisiones/` |
| EN (fase i18n) | `/en/teaching/pbpew/04-operadores-y-decisiones/` |
| Legacy | `/pages/teaching/pbpew/04-operadores-y-decisiones.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/pbpew/` |

### Headings con keywords naturales

Alinear H2/H3 con Brand y el draft; priorizar términos de búsqueda sin forzar:

| Nivel | Copy publicado (draft) | Copy SEO sugerido (Brand) | Keyword objetivo |
|-------|------------------------|---------------------------|------------------|
| H2 | Objetivos del tema | Objetivos del tema | — |
| H2 | Operadores aritméticos | Operadores aritméticos | operadores aritméticos JavaScript |
| H3/H4 | Comparación estricta vs coerción | Comparación estricta frente a coerción | === JavaScript, igualdad estricta |
| H2 | Operadores lógicos | Operadores lógicos y valores truthy | operadores lógicos JavaScript, truthy falsy |
| H2 | if / else if / else | Estructuras condicionales: if, else if y else | if else JavaScript |
| H2 | switch | La sentencia `switch` | switch JavaScript |
| H2 | Resumen | Resumen | — |
| H2 | Comprueba tu comprensión | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador | Reto integrador: motor de tarifas del gimnasio | — |
| H2 | Cierre | Cierre de la lección | — |

Evitar duplicar en H2 y primer párrafo la misma frase literal (mejor para snippet y lectura).

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — contenido fuente y meta ES en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slugs idénticos (`04-operadores-y-decisiones`); no traducir slug.
- **`x-default`:** `es` (audiencia principal del material docente).
- **Título visible EN:** `Operators and control flow: strict comparison, if, and switch` (equivalente al título refinado ES).
- **Términos sin traducir:** `===`, `!==`, `==`, `&&`, `||`, `!`, `break`, `switch`, `Number.isNaN`, truthy, falsy, fall-through, short-circuit.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Regla del curso» → `Course rule`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Clay UI

Contribución de **clay-ui-expert**. Referencia de implementación: `src/components/teaching/lessons/pbpew/03-variables-y-tipos/` y `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/` (patrón `section` + `h2` + componente interactivo). Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`. Alinear headings con § Brand de este spec.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos de `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención SEA / PBPEW):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: cada `<section>` sin margen extra; el ritmo lo dan `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tabla operadores aritméticos (draft L52–59): convertir a `CompareTable` dentro de `ClayCard`; preferir `CompareTable` para consistencia clay.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Operadores aritméticos`, `Operadores lógicos y valores truthy`, `La sentencia switch` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Comparación estricta frente a coerción` — subsección bajo operadores aritméticos |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 (interactivo) | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Texto expositivo, precedencia, truthy/falsy |

**Nota brand:** usar copy refinado de § Brand (p. ej. `Estructuras condicionales: if, else if y else` en TSX); mantener las mismas clases clay.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos del tema | — (prose) | Prosa apertura, `Callout` regla curso, lista objetivos |
| 2 | `OperadoresAritmeticosSection` | Operadores aritméticos | — | `CompareTable` operadores, `CodeBlock` ×2, H3 comparación, `CodeBlock`, `Callout`, `PracticeExercise` |
| 3 | `OperadoresLogicosSection` | Operadores lógicos y valores truthy | stepper | Prose truthy/falsy, `CompareTable` lógicos, `MermaidDiagram`, `CodeBlock` ×2, `StepReveal`, `MermaidDiagram`, `Callout`, `PracticeExercise`, `CodeChallenge` |
| 4 | `IfElseIfElseSection` | Estructuras condicionales: if, else if y else | — | `MermaidDiagram`, `CodeBlock` ×2, `Callout`, `CodeChallenge`, `PracticeExercise` |
| 5 | `SwitchSection` | La sentencia `switch` | stepper | `CompareTable` if vs switch, `MermaidDiagram`, `CodeBlock` ×2, `StepReveal`, `Callout`, `CodeChallenge`, `PracticeExercise` |
| 6 | `ResumenSection` | Resumen | — | Viñetas en prose |
| 7 | `CompruebaTuComprensionSection` *(pendiente)* | Comprueba tu comprensión | card | `PracticeExercise`, `CodeChallenge`, `PracticeExercise` |
| 8 | `RetoIntegradorSection` *(pendiente)* | Reto integrador: motor de tarifas del gimnasio | card | `CodeBlock` enunciado + lista requisitos + `CodeBlock` solución + `PracticeExercise` |
| 9 | `CierreSection` *(pendiente)* | Cierre de la lección | card | Ideas clave + enlace lección 05 (sin quiz inline) |
| 10 | `MiniquizSection` *(pendiente)* | Mini-quiz | card | `QuizSection` slug `04-operadores-y-decisiones` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Prosa apertura | prose `<p>` | Enlace operadores y decisiones (draft L36–38; copy Brand L122–124) | Sin clay |
| `regla-curso-strict-eq` | `Callout` | title: «Regla del curso»; `===` por defecto (draft L40–44; Brand L58–63) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| Objetivos medibles | prose `<ul>` | 5 ítems draft L17–23 | Sin clay |

#### `OperadoresAritmeticosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| `tabla-operadores-aritmeticos` | `CompareTable` | 4 columnas: Operador, Nombre, Ejemplo, Resultado — 6 filas (draft L52–59) | `ClayCard` `my-6`; thead `border-[var(--color-secondary)]` |
| Precedencia / división por cero | prose `<p>` | Precedencia y `10 / 0` → `Infinity` (draft L61–63) | Sin clay |
| `aritmetica-basica` | `CodeBlock` | `let a` … `let f = 2 ** 8` (draft L66–73) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| `precedencia-concatenacion` | `CodeBlock` | `(2 + 3) * 4`, `"10" + 5` (draft L76–79) | `my-4` |
| Comparación (H3) | `<h3>` | «Comparación estricta frente a coerción» (Brand L40) | `mt-6 mb-2 text-xl font-semibold` |
| `comparacion-estricta-coercion` | `CodeBlock` | `5 === "5"`, `==`, relacionales (draft L90–96) | `my-4` |
| `caso-portal-roles` | `Callout` | title: «Caso real: portal con roles» (draft L98–102; Brand L65–70) | **callout-info** |
| `practice-strict-eq-input` | `PracticeExercise` | prompt `===` vs `==` con input/API (draft L104–110) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `OperadoresLogicosSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Truthy/falsy intro | prose | Lista falsy + nota `"0"`, `[]` (draft L116–120) | Sin clay |
| `tabla-operadores-logicos` | `CompareTable` | 3 columnas: Operador, Nombre, Comportamiento — `&&`, `\|\|`, `!` (draft L122–126) | `ClayCard` `my-6`; thead secondary |
| Cortocircuito | prose `<p>` | Patrón `input \|\| "invitado"` (draft L128) | Sin clay |
| `mermaid-truthy-falsy` | `MermaidDiagram` | flowchart valor → falsy? → if (draft L130–133) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `operadores-logicos-basico` | `CodeBlock` | `&&`, `\|\|`, `!`, defaults (draft L136–144) | `my-4` |
| `ejemplos-truthy-falsy` | `CodeBlock` | `if ("0")`, `if (0)`, `if ([])` (draft L147–151) | `my-4` |
| `stepreveal-condicion-compuesta` | `StepReveal` | title: «Evaluación de una condición compuesta»; 5 steps (draft L153–178) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| `mermaid-cortocircuito-and` | `MermaidDiagram` | flowchart evaluar A → B (draft L180–183) | `my-6` tras `StepReveal` |
| `error-frecuente-truthy-cero` | `Callout` | title: «Error frecuente»; `"0"` truthy vs `0` falsy (draft L185–189; Brand L72–77) | **callout-warning** (accent) |
| `practice-valores-falsy` | `PracticeExercise` | cinco falsy + truthy engañoso (draft L191–197) | accent border |
| `challenge-acceso-condicional` | `CodeChallenge` | blanks `&&` ×2 (draft L199–207) | `ClayCard` `my-8`; inputs `rounded-xl` |

#### `IfElseIfElseSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Validación NaN | prose `<p>` | `Number.isNaN` antes de rangos (draft L217–219) | Sin clay |
| `mermaid-flujo-if-elseif` | `MermaidDiagram` | flowchart if → else if → else (draft L221–224) | `my-6` |
| `if-nota-aprobacion` | `CodeBlock` | nota con `Number.isNaN` (draft L227–237) | `my-4` |
| `if-temperatura-rangos` | `CodeBlock` | hielo / templado / calor (draft L240–250) | `my-4` |
| `error-frecuente-asignacion` | `Callout` | title: «Error frecuente»; `=` vs `===` (draft L252–256; Brand L79–84) | **callout-warning** |
| `challenge-usuario-activo` | `CodeChallenge` | blanks `!==`, `&&`, `true` (draft L258–267) | `ClayCard` `my-8` |
| `practice-clasificar-temperatura` | `PracticeExercise` | if/else if con `Number.isNaN` (draft L269–275) | accent border |

#### `SwitchSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Prose switch | prose | `break`, `default`, rangos → if (draft L281–287) | Sin clay |
| `compare-if-vs-switch` | `CompareTable` | 4 filas criterio if vs switch (draft L289–298) | `ClayCard` `my-8`; thead secondary |
| `mermaid-flujo-switch` | `MermaidDiagram` | flowchart case → break → fall-through (draft L300–303) | `my-6` |
| `switch-dias-clase` | `CodeBlock` | lunes/miércoles/viernes (draft L306–320) | `my-4` |
| `switch-fall-through-bug` | `CodeBlock` | case A sin break (draft L323–336) | `my-4` |
| `stepreveal-ejecucion-switch` | `StepReveal` | title: «Ejecución paso a paso de switch»; 5 steps (draft L338–363) | **stepper** |
| `caso-ecommerce-descuento` | `Callout` | title: «Caso real: descuento duplicado en e-commerce» (draft L365–369; Brand L86–91) | **callout-info** |
| `challenge-switch-fin-semana` | `CodeChallenge` | blank `break` (draft L371–378) | `ClayCard` `my-8` |
| `practice-coercion-consola` | `PracticeExercise` | `0 == false` vs `===` (draft L380–386) | accent border |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 7 puntos (draft L391–398) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection` *(pendiente en TSX)*

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-cortocircuito-and` | `PracticeExercise` | orden evaluación `&&` (draft L406–412) | accent border |
| `comprension-operadores-aritmeticos` | `CodeChallenge` | blanks `%`, `**` (draft L414–422) | `ClayCard` `my-8` |
| `comprension-flujo-elseif` | `PracticeExercise` | a falsy, b truthy → else if (draft L424–430) | accent border |

Apilar ejercicios con `my-8` cada uno; H2 en **card** semántico (evaluación formativa).

#### `RetoIntegradorSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose + `CodeBlock` | variables edad/plan/estudiante (draft L438–445) | `CodeBlock` `my-6` |
| Requisitos | prose `<ol>` | 5 criterios + bonus (draft L447–457) | Lista numerada `my-4` |
| `reto-solucion-referencia` | `CodeBlock` | motor tarifas completo (draft L460–507) | `my-6`; colapsable opcional en fase 2 |
| `reto-motor-tarifas` | `PracticeExercise` | implementar/adaptar; caso edad 20 premium si (draft L509–520) | `ClayCard` accent; textarea `rows={6}` |

#### `CierreSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Párrafo cierre | prose `<p>` | copy Brand L126–128 | Sin clay |
| Ideas clave | prose `<ul>` | 5 viñetas (draft L528–534) | Sin clay |
| Siguiente paso | prose `<p>` | enlace lección 05 (draft L536) | Sin clay |

#### `MiniquizSection` *(pendiente en TSX)*

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| `miniquiz-operadores-decisiones` | `QuizSection` | `slug="04-operadores-y-decisiones"` `track="pbpew"`; 5 preguntas draft L542–601 | `ClayCard` `my-8`; H2 «Mini-quiz» |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Regla del curso (`===` por defecto) | `callout-info` | `--color-secondary` (`#00C2FF`) | Norma de curso; estándar PBPEW |
| Caso portal con roles | `callout-info` | `--color-secondary` | Incidente profesional; coerción en login |
| Error frecuente (`"0"` truthy) | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; inputs como string |
| Error frecuente (`=` vs `===`) | `callout-warning` | `--color-accent` | Preventivo; bug de asignación en condición |
| Descuento duplicado e-commerce | `callout-info` | `--color-secondary` | Fall-through accidental; consecuencia de negocio |

Implementación: `Callout.tsx` usa `border-secondary` por defecto; **callout-warning** → `border-[var(--color-accent)]` vía prop `variant` o `className`.

### Profundidad clay (ADR 003)

```
LessonLayout
└── ClayCard (nivel 1 — contenedor lección)
    ├── section × N (prose, sin card)
    └── Interactivos (nivel 2 — cada uno ClayCard o superficie plana)
        ├── Callout / CompareTable / StepReveal / PracticeExercise / CodeChallenge / QuizSection
        ├── MermaidDiagram (superficie blanca, no clay)
        └── CodeBlock (superficie oscura, no clay)
```

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. Evitar `StepReveal` dentro de otro `ClayCard` padre.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos del tema | 1 | 1 callout regla curso + lista |
| Operadores aritméticos | 1–2 | Tabla símbolos + H3 comparación + practice |
| Operadores lógicos y valores truthy | 2 | Sección más densa: 2 diagramas + stepper + challenge |
| Estructuras condicionales | 1 | Diagrama + 2 codeblocks + callout + challenge + practice |
| La sentencia switch | 2 | CompareTable + stepper + 2 codeblocks + callout + challenge |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 2 practice + 1 challenge apilados |
| Reto integrador | 2 | 2 CodeBlock + practice abierta |
| Cierre + Mini-quiz | 2 | Quiz en sección dedicada `MiniquizSection` |

### Checklist implementación (lesson-developer)

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] H3 «Comparación estricta frente a coerción» bajo `OperadoresAritmeticosSection`
- [ ] Poblar `ObjetivosSection`: prosa apertura + `Callout` regla curso + lista objetivos
- [ ] Poblar `OperadoresAritmeticosSection`: `CompareTable`, 2 `CodeBlock`, `Callout`, `PracticeExercise`
- [ ] Poblar `OperadoresLogicosSection`: `CompareTable`, 2 `MermaidDiagram`, 2 `CodeBlock`, `StepReveal`, `Callout`, `PracticeExercise`, `CodeChallenge`
- [ ] Poblar `IfElseIfElseSection`: `MermaidDiagram`, 2 `CodeBlock`, `Callout`, `CodeChallenge`, `PracticeExercise`
- [ ] Poblar `SwitchSection`: `CompareTable`, `MermaidDiagram`, 2 `CodeBlock`, `StepReveal`, `Callout`, `CodeChallenge`, `PracticeExercise`
- [ ] Actualizar `ResumenSection`: 7 viñetas del draft
- [ ] Crear `CompruebaTuComprensionSection` con 2 `PracticeExercise` + 1 `CodeChallenge`
- [ ] Crear `RetoIntegradorSection` con 2 `CodeBlock` + `PracticeExercise`
- [ ] Crear `CierreSection` (prose) y `MiniquizSection` con `QuizSection`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] Actualizar `interactive_blocks` en frontmatter al cerrar ids

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

