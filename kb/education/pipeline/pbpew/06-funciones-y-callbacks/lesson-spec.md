---
track: pbpew
slug: 06-funciones-y-callbacks
title: "Funciones en JavaScript: return, parámetros y callbacks"
order: 6
prev: "05-bucles-y-errores"
next: "07-arrays-json-objetos"
seo_title: "JavaScript: funciones, return y callbacks | PBPEW"
seo_description: "Lección 6 PBPEW: declaración y arrow functions, parámetros, return, alcance local y callbacks con addEventListener y funciones de orden superior."
hreflang_notes: "es primary; canonical /es/teaching/pbpew/06-funciones-y-callbacks/; EN mirror /en/teaching/pbpew/06-funciones-y-callbacks/; x-default es"
interactive_blocks:
  - type: callout
    id: caso-checkout-total-undefined
  - type: step-reveal
    id: flujo-llamada-return
  - type: mermaid
    id: flujo-sumar-return
  - type: callout
    id: error-return-vs-console-log
  - type: code-challenge
    id: area-rectangulo-challenge
  - type: practice-exercise
    id: parametro-vs-argumento
  - type: compare-table
    id: comparativa-formas-funcion
  - type: callout
    id: error-arrow-llaves
  - type: code-challenge
    id: mitad-arrow-challenge
  - type: practice-exercise
    id: convertir-espar-arrow
  - type: mermaid
    id: flujo-repetir-callback
  - type: code-challenge
    id: repetir-callback-challenge
  - type: step-reveal
    id: registrar-vs-ejecutar-callback
  - type: mermaid
    id: flujo-addEventListener-referencia
  - type: callout
    id: caso-boton-guardar-carga
  - type: practice-exercise
    id: addEventListener-parentesis
  - type: practice-exercise
    id: comprension-reutilizacion-funcion
  - type: practice-exercise
    id: comprension-flujo-sumar
  - type: practice-exercise
    id: comprension-calcular-total-undefined
  - type: practice-exercise
    id: reto-biblioteca-transformaciones
  - type: quiz
    id: cierre-quiz
clay_variants:
  - card
  - callout-warning
  - callout-info
  - stepper
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track PBPEW. Referencia de formato: `kb/education/pipeline/pbpew/01-intro-js-y-dom/lesson-spec.md` (§ Brand); alineación de headings con § SEO de este mismo archivo.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; preciso, didáctico y orientado a la práctica con consola y DOM.
- **Persona:** segunda persona (*tú*) en ejercicios, retos y miniquiz; tercera persona o impersonal en objetivos y definiciones (*el estudiante podrá…*, *una función agrupa…*).
- **Voz:** profesional, clara, confiable; enfatiza *referencia frente a invocación* y *return frente a console.log* como reglas de producción antes de atajos sintácticos.
- **Evitar:** jerga vacía, tono infantil, humor forzado, metáforas gamer o estilo blog informal; no trivializar callbacks como «trucos» sin explicar el patrón.
- **Preferir:** verbos de acción concretos (*definir*, *invocar*, *devolver*, *pasar*, *registrar*, *distinguir*, *implementar*).

### Título de lección refinado

**ES:** `Funciones en JavaScript: return, parámetros y callbacks`

- Añade *en JavaScript* para contexto académico y coherencia con el track PBPEW.
- Mantiene las tres ideas del borrador: `return`, parámetros/argumentos y callbacks.
- Sustituye la lista plana por subtítulo con dos puntos, alineado a lecciones 01 y 04.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos del tema | Neutro, catalogable; no repetir el título de la lección |
| Declaración de función | Declaración de función en JavaScript | H2 nominal; definir función en una oración antes del hoisting |
| ↳ Parámetros y return | Parámetros, argumentos y `return` | H3 o bloque prose; nombrar `return` con backticks en implementación |
| ↳ Alcance local | Alcance local de variables | H3 breve; enlazar con lección 03 sin repetir TDZ |
| Expresión y flecha | Expresión de función y arrow function | Mantener término técnico *arrow function* en primera mención |
| Callbacks | Callbacks en JavaScript | H2 clave del módulo; definir callback antes de HOF |
| ↳ Preview lección 7 | Puente hacia métodos de array | Prosa, no H3 obligatorio; mencionar `.forEach` y `.map` sin profundizar |
| Resumen | Resumen | Viñetas con sustantivos o infinitivos; callback al final |
| Comprueba tu comprensión | Comprueba tu comprensión | Imperativo amable; tono de autoevaluación formativa |
| Reto integrador | Reto integrador: mini biblioteca de transformaciones | Subtítulo en minúsculas tras dos puntos; escenario de transformación de datos |
| Cierre | Cierre de la lección | Formal breve; enlace explícito a lección 07 |
| Mini-quiz | Mini-quiz | Consistente con PBPEW 02–05; sin guión en slug del componente |

**Reglas transversales para headings:**

- H2: tema nominal o pregunta clave; sin emojis ni mayúsculas innecesarias.
- H3/H4: concreto y escaneable; reservar nombres de API (`addEventListener`, `setTimeout`) para subtítulos técnicos.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Caso real — checkout con total `undefined`

- **Título:** `Caso real: total undefined en checkout`
- **Tono:** narrativa breve de incidente profesional; síntoma → causa → decisión técnica.
- **Copy refinado:** `Un desarrollador escribe function calcularTotal(precio, cantidad) { precio * cantidad; } y el carrito muestra Total: undefined. No hay error en consola: la función se ejecuta, pero no devuelve valor. Decisión clave: añadir return precio * cantidad; y usar el valor retornado en quien invoca la función.`
- **Variante Clay (referencia):** `callout-info`; borde secondary — incidente de negocio, no error del estudiante.

#### 2. Error frecuente — `return` frente a `console.log`

- **Título:** `Error frecuente`
- **Tono:** preventivo, didáctico; señala confusión típica sin culpar al estudiante.
- **Copy refinado:** `No confundas return con console.log. console.log muestra en consola; no sustituye a return cuando otra parte del código necesita el valor. function doble(x) { x * 2; } devuelve undefined — hace falta return x * 2;`
- **Variante Clay:** `callout-warning`.

#### 3. Error frecuente — arrow con llaves sin `return`

- **Título:** `Error frecuente`
- **Tono:** preventivo; conecta sintaxis compacta con retorno implícito.
- **Copy refinado:** `(x) => { x * 2 }` con llaves pero sin return explícito devuelve undefined. Opciones correctas: `(x) => x * 2` sin llaves, o `(x) => { return x * 2; }` con return dentro de llaves.
- **Variante Clay:** `callout-warning`.

#### 4. Caso real — botón Guardar al cargar

- **Título:** `Caso real: botón Guardar al cargar la página`
- **Tono:** incidente en panel admin; refuerza patrón callback del DOM.
- **Copy refinado:** `En un panel admin registran boton.onclick = guardarCambios();. Al cargar se dispara un guardado no deseado y el clic posterior no funciona porque onclick recibió undefined. Lección: pasar referencia (guardarCambios o () => guardarCambios()) cuando quieres ejecutar después, en respuesta a un evento.`
- **Variante Clay:** `callout-info`.

### Otros bloques interactivos — títulos y tono

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| `StepReveal` | Flujo de llamada con return | Título: `Flujo de una llamada con return`; pasos en presente indicativo; paso 4 enfatiza que código tras return no corre |
| `MermaidDiagram` | Flujo sumar(2, 5) | Sin título H3 obligatorio; párrafo puente: «Sigue el valor desde la invocación hasta el llamador» |
| `CodeChallenge` | Área de rectángulo | Título: `Completa el código: área de rectángulo` — dos puntos, minúsculas en subtítulo |
| `PracticeExercise` | Parámetro vs argumento | Prompt mantiene ejemplo `resta(a, b)` y `resta(10, 3)`; éxito afirma definición vs llamada |
| `CompareTable` | Tres formas de definir funciones | Introducir con: «Elige la forma según legibilidad, hoisting y si necesitas callback corto» |
| `CompareTable` | Headers | `Forma` · `Sintaxis típica` · `Hoisting` · `Cuándo usar en PBPEW` — paralelismo del draft |
| `CodeChallenge` | Arrow retorno implícito | Título: `Completa el código: arrow con retorno implícito` |
| `PracticeExercise` | Convertir esPar a arrow | Éxito: const esPar = (n) => n % 2 === 0; sin exclamaciones |
| `MermaidDiagram` | Callback en repetir | Párrafo puente: «La función de orden superior decide cuándo invocar el callback» |
| `CodeChallenge` | Función repetir | Título: `Completa el código: función repetir` |
| `StepReveal` | Registrar vs ejecutar callback | Título: `Registrar callback frente a ejecutarlo al instante`; paso incorrecto enfatiza paréntesis al registrar |
| `MermaidDiagram` | addEventListener bien/mal | Complementa `StepReveal`; subtítulos de subgraph: *Correcto: pasar referencia* / *Incorrecto: ejecutar al registrar* |
| `PracticeExercise` | addEventListener con paréntesis | Éxito: «manejarClick() ejecuta al registrar; manejarClick pasa la función para el clic» |
| `PracticeExercise` | Ventaja de extraer función | Éxito: reutilización, un solo lugar para corregir, nombre que documenta intención |
| `PracticeExercise` | Orden flujo sumar | Éxito: orden (c) → (d) → (e) → (a) → (b) de forma didáctica |
| `PracticeExercise` | calcularTotal sin return | Éxito: imprime undefined; cálculo sin return no llega al llamador |
| `PracticeExercise` | Reto aplicarLista / filtrarLista | Éxito: `Excelente. Has integrado declaración, arrow, return, bucles y callbacks en un patrón similar a .map y .filter de la lección 7.` |
| `Quiz` | Feedback general | Una oración por ítem; mencionar return, parámetros, retorno implícito o referencia según la pregunta |
| Cierre | Ideas clave | Viñetas paralelas; *referencia frente a invocación* al cierre |
| Cierre | Siguiente paso | `Siguiente lección: arrays, objetos JSON y métodos .forEach, .map y .filter con callbacks.` — tono de itinerario académico |

### Prosa de apertura y cierre (ajustes de voz)

**Objetivos del tema (primer párrafo):**

> Esta lección introduce las funciones como unidad de lógica reutilizable en JavaScript: cómo definirlas, devolver valores, recibir parámetros y pasar otras funciones como callbacks. El dominio técnico sigue el brief del topic-expert; los objetivos medibles se listan arriba.

**Cierre (párrafo intro):**

> Has completado el estudio de funciones, return, parámetros y callbacks en JavaScript. Estos conceptos conectan la lógica reutilizable con los bucles de la lección 5 y preparan los métodos de array de la lección 7.

### Notas EN (fase i18n)

- Título EN sugerido: `Functions in JavaScript: return, parameters, and callbacks`
- Mantener equivalencia terminológica: *callback*, *higher-order function*, *implicit return*, *hoisting*, *parameter* vs *argument*.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Mini biblioteca de transformaciones» → `Mini transformation library`.
- «Caso real: total undefined en checkout» → `Real case: undefined total at checkout`; conservar escenario e-commerce neutro.

## SEO

Contribución de **seo-redirects-expert**. Lección 6 del track PBPEW; enlaza bucles (lección 5) con arrays y métodos `.map`/`.forEach` (lección 7).

### Meta (implementar en `lesson-meta.ts`)

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `JavaScript: funciones, return y callbacks \| PBPEW` | 51 |
| `seoDescription` | `Lección 6 PBPEW: declaración y arrow functions, parámetros, return, alcance local y callbacks con addEventListener y funciones de orden superior.` | 138 |

**EN (fase i18n):**

| Campo | Valor | Chars |
|-------|-------|-------|
| `seoTitle` | `JavaScript: functions, return & callbacks \| PBPEW` | 50 |
| `seoDescription` | `PBPEW Lesson 6: function declarations, arrow functions, parameters, return, local scope, and callbacks with addEventListener and higher-order functions.` | 130 |

### Keywords (track PBPEW)

**Primarias:** funciones JavaScript, return, parámetros, callbacks, arrow function, PBPEW.

**Secundarias:** función de orden superior, addEventListener, hoisting, parámetros por defecto, scope local, expresión de función, retorno implícito.

**Long-tail:** qué es un callback en JavaScript, diferencia parámetro y argumento, arrow function retorno implícito, addEventListener pasar referencia no invocación, aprender funciones JavaScript.

### Navegación (`prev` / `next`)

| Campo | Valor | Título destino |
|-------|-------|----------------|
| `prev` | `05-bucles-y-errores` | Bucles: for, while, do-while · break, continue · try/catch |
| `next` | `07-arrays-json-objetos` | Arrays, métodos útiles, JSON y objetos literales |

### URLs y redirects

| Tipo | Ruta |
|------|------|
| Canonical (ES) | `/es/teaching/pbpew/06-funciones-y-callbacks/` |
| EN (fase i18n) | `/en/teaching/pbpew/06-funciones-y-callbacks/` |
| Legacy | `/pages/teaching/pbpew/06-funciones-y-callbacks.html` → canonical ES (`kb/content/legacy-redirects.json`) |
| Hub track | `/es/teaching/pbpew/` |

### Headings con keywords naturales

Alinear H2 del draft con términos de búsqueda sin forzar ni duplicar el primer párrafo:

| Nivel | Copy publicado | Keyword objetivo |
|-------|----------------|------------------|
| H2 | Declaración de función en JavaScript | función JavaScript, return |
| H2 | Expresión de función y arrow function | arrow function, función flecha |
| H2 | Callbacks en JavaScript | callback, addEventListener |
| H2 | Resumen | — (síntesis; sin keyword stuffing) |
| H2 | Comprueba tu comprensión | — (formativo) |
| H2 | Reto integrador: mini biblioteca de transformaciones | callback, función de orden superior |
| H3 | Parámetros por defecto y alcance local | parámetros, scope |
| H3 | Registrar callback vs ejecutarlo al instante | addEventListener, referencia de función |

**Nota:** el draft usa «Declaración de función» y «Callbacks» como H3 bajo `## Contenido`; al publicar en TSX, promover a H2 de sección con el copy de la tabla para jerarquía SEO coherente.

### `hreflang_notes` (ES primary)

- **Idioma canónico:** `es` — meta y contenido fuente en producción inicial.
- **Pares hreflang:** `es` ↔ `en` con slug idéntico (`06-funciones-y-callbacks`); no traducir slug.
- **`x-default`:** `es`.
- **Título visible EN:** `Functions, return, parameters, and callbacks` (equivalente al título ES).
- **Términos sin traducir:** `return`, `addEventListener`, `setTimeout`, arrow function (aceptable como término técnico), HOF.
- **Traducciones preferidas:** «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «función de orden superior» → `higher-order function`.
- **Sitemap:** incluir ambas locales cuando exista `/en/`; `lastmod` sincronizado entre pares.

## Clay UI

Contribución de **clay-ui-expert**. Referencia: `kb/education/pipeline/pbpew/05-bucles-y-errores/lesson-spec.md` (§Clay UI), implementación `src/components/teaching/lessons/pbpew/01-intro-js-y-dom/`. Tokens: `kb/brand/visual-tokens.md`, ADR `kb/decisions/003-claymorphism-rules.md`.

### Tokens y reglas globales

| Token / regla | Valor | Uso en esta lección |
|---------------|-------|---------------------|
| `--color-primary` | `#0A2540` | H2 de sección, títulos internos `StepReveal`, `PracticeExercise`, `CodeChallenge`, nav track |
| `--color-secondary` | `#00C2FF` | Borde izquierdo `Callout` (info), thead `CompareTable`, barra activa `StepReveal`, enlaces nav |
| `--color-accent` | `#6B4EFF` | Borde izquierdo `PracticeExercise`, `Callout` preventivos, track en breadcrumb |
| `--color-neutral-light` | `#F4F6F8` | Fondo página (`LessonLayout` outer), filas alternas tabla |
| `--color-neutral-dark` | `#1E293B` | Fondo `CodeBlock` |
| `--clay-radius` | 20–28px | `ClayCard`, inputs, `CodeBlock` |
| Profundidad clay | máx. 2 niveles | Nivel 1: `ClayCard` de `LessonLayout`; nivel 2: interactivos (`Callout`, `CompareTable`, etc.) |

**Espaciado (convención PBPEW / SEA):**

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (`LessonLayout`).
- Entre secciones: cada `<section>` sin margen extra; el ritmo lo dan `h2` + bloques `my-6` / `my-8`.
- Párrafos: `my-4`.
- Interactivos: `my-6` (`Callout`, `MermaidDiagram`, `CodeBlock`) o `my-8` (`ClayCard` wrappers).
- Tabla markdown formas de función (draft L168–172): convertir a `CompareTable`; preferir componente clay sobre prose `<table>`.
- Preview avanzado `this`/`arguments` (draft L216): prose en cursiva o párrafo secundario; sin `Callout`.

**`clay_variants` globales (frontmatter):** `card`, `callout-warning`, `callout-info`, `stepper`.

### Jerarquía tipográfica

| Nivel | Clases Tailwind | Color | Ejemplo en lección |
|-------|-----------------|-------|-------------------|
| H1 | `text-3xl font-bold` + `var(--font-heading)` | inherit (dentro clay) | Título en `LessonLayout` → `ClayCard` |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | `Declaración de función en JavaScript`, `Callbacks en JavaScript` |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | `Parámetros por defecto y alcance local`, `Registrar callback vs ejecutarlo al instante` |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Título interno `StepReveal`, `PracticeExercise`, `CodeChallenge` |
| H4 | `mb-2 font-semibold` | inherit | Paso N en `StepReveal` («1. Definición», «Correcto — pasar referencia») |
| Cuerpo | `prose prose-slate` + `my-4` en párrafos | `--color-neutral-dark` | Definición función, HOF, preview lección 7 |

**Nota brand/SEO:** alinear H2 con tabla SEO («Declaración de función en JavaScript», «Expresión de función y arrow function», «Callbacks en JavaScript»); mantener clases clay.

### Mapa de secciones → componentes

| Orden | Componente TSX | H2 | `clay_variant` sección | Bloques hijos |
|-------|----------------|-----|------------------------|---------------|
| 1 | `ObjetivosSection` | Objetivos de aprendizaje | — (prose) | Lista `<ul>` 6 objetivos medibles |
| 2 | `DeclaracionDeFuncionSection` | Declaración de función en JavaScript | stepper | `Callout`, `StepReveal`, `MermaidDiagram`, `CodeBlock` ×5, H3 parámetros/scope, `Callout`, `CodeChallenge`, `PracticeExercise` |
| 3 | `ExpresionDeFuncionYArrowFunctionSection` | Expresión de función y arrow function | — | `CompareTable`, prose ×2, `Callout`, `CodeBlock` ×2, preview avanzado, `CodeChallenge`, `PracticeExercise` |
| 4 | `CallbacksSection` | Callbacks en JavaScript | stepper | prose HOF, `MermaidDiagram`, `CodeBlock`, `CodeChallenge`, H3 registro vs ejecución, `StepReveal`, `MermaidDiagram`, `Callout`, `CodeBlock` ×2, `PracticeExercise` |
| 5 | `ResumenSection` | Resumen | — | Viñetas prose 8 puntos |
| 6 | `CompruebaTuComprensionSection` | Comprueba tu comprensión | card | `PracticeExercise` ×3 |
| 7 | `RetoIntegradorSection` | Reto integrador: mini biblioteca de transformaciones | card | Enunciado prose + lista numerada + `CodeBlock` esqueleto + `PracticeExercise` |
| 8 | `CierreSection` | Cierre | card | Ideas clave + enlace lección 07 + `Quiz` |

### Bloques interactivos — mapeo detallado

#### `ObjetivosSection`

| Elemento | Clay |
|----------|------|
| Lista 6 objetivos (draft L20–27) | prose `<ul>`; sin `ClayCard` |

#### `DeclaracionDeFuncionSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro función / invocar | prose | definición, hoisting, referencia vs `()` (draft L40–46) | Sin clay |
| `caso-checkout-total-undefined` | `Callout` | title: «Caso real: checkout con total undefined»; falta `return` (draft L48–52) | `ClayCard` + `border-l-4 border-[var(--color-secondary)]` → **callout-info** |
| `flujo-llamada-return` | `StepReveal` | title: «Flujo de una llamada con return»; 5 steps (draft L54–79) | `ClayCard` **stepper**: barras `bg-[var(--color-secondary)]` / inactivo `neutral-mid/30` |
| `flujo-sumar-return` | `MermaidDiagram` | flowchart `sumar(2,5)` → return → resultado (draft L81–84) | `div` blanco `rounded-lg p-4 my-6`; sin `ClayCard` extra |
| `saludar-declaracion` | `CodeBlock` | hoisting + `saludar("Patricia")` (draft L86–93) | Fondo `--color-neutral-dark`, `rounded-xl`, `my-4` |
| `sumar-parametros` | `CodeBlock` | `sumar(a,b)` + comentario parámetros/argumentos (draft L95–101) | `my-4` |
| `return-definicion` | prose | `return` termina función; sin return → `undefined` (draft L103) | Sin clay |
| `error-return-vs-console-log` | `Callout` | title: «Error frecuente»; return vs `console.log` (draft L105–109) | `ClayCard` + `border-l-4 border-[var(--color-accent)]` → **callout-warning** |
| `avisar-sin-return` | `CodeBlock` | `avisar` + retorno undefined (draft L111–118) | `my-4` |
| Parámetros por defecto (H3) | `<h3>` | `mt-6 mb-2 text-xl font-semibold` — «Parámetros por defecto y alcance local» | — |
| `crear-saludo-default` | `CodeBlock` | `nombre = "invitado"` (draft L122–129) | `my-4` |
| Alcance local | prose | `let`/`const` dentro de función (draft L131) | Sin clay |
| `contar-scope-local` | `CodeBlock` | `let n` + ReferenceError comentado (draft L133–142) | `my-4` |
| `area-rectangulo-challenge` | `CodeChallenge` | blanks `base`, `altura` (draft L144–152) | `ClayCard` `my-8`; inputs `rounded-xl` |
| `parametro-vs-argumento` | `PracticeExercise` | `resta(a,b)` vs `resta(10,3)` (draft L154–160) | `ClayCard` `my-8 border-l-4 border-[var(--color-accent)]` |

#### `ExpresionDeFuncionYArrowFunctionSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Intro expresión / flecha | prose | tabla markdown → `CompareTable` (draft L164–172) | Sin clay |
| `comparativa-formas-funcion` | `CompareTable` | 4 columnas: Forma, Sintaxis, Hoisting, Cuándo usar (draft L174–182) | `ClayCard` `my-8`; thead `border-[var(--color-secondary)]` |
| Expresión / flecha | prose | hoisting asignación, retorno implícito (draft L184–186) | Sin clay |
| `error-arrow-llaves` | `Callout` | title: «Error frecuente — arrow con llaves»; `{ x * 2 }` sin return (draft L188–192) | **callout-warning**; borde accent |
| `duplicar-triple` | `CodeBlock` | expresión + flecha implícita (draft L194–206) | `my-4` |
| `espar-arrow` | `CodeBlock` | `const esPar = (n) => n % 2 === 0` (draft L208–214) | `my-4` |
| Preview `this`/`arguments` | prose `<p>` | texto secundario, no profundizar (draft L216) | Sin clay; `text-sm` opcional |
| `mitad-arrow-challenge` | `CodeChallenge` | blank `x / 2` (draft L218–225) | `ClayCard` `my-8` |
| `convertir-espar-arrow` | `PracticeExercise` | convertir `function esPar` a arrow (draft L227–233) | accent border |

#### `CallbacksSection`

| id | Componente | Props / contenido | Clay |
|----|------------|-------------------|------|
| Definición callback / HOF | prose | callback, `repetir(n,fn)`, preview `.map`/`.forEach` (draft L237–243) | Sin clay |
| `flujo-repetir-callback` | `MermaidDiagram` | flowchart `repetir(3, fn)` bucle → fn(i) (draft L245–248) | `my-6` |
| `repetir-ejemplo` | `CodeBlock` | `function repetir` + arrow callback (draft L250–262) | `my-4` |
| `repetir-callback-challenge` | `CodeChallenge` | blanks `n`, `fn` (draft L264–272) | `ClayCard` `my-8` |
| Callbacks navegador | prose | `addEventListener`, `setTimeout` (draft L274) | Sin clay |
| Registrar vs ejecutar (H3) | `<h3>` | «Registrar callback vs ejecutarlo al instante» | `mt-6 mb-2 text-xl font-semibold` |
| `registrar-vs-ejecutar-callback` | `StepReveal` | title coincide con H3; 5 steps correcto/incorrecto (draft L276–301) | **stepper** |
| `flujo-addEventListener-referencia` | `MermaidDiagram` | subgraph bien vs mal `alClic()` (draft L303–306) | `my-6` tras `StepReveal` |
| `caso-boton-guardar-carga` | `Callout` | title: «Caso real: botón Guardar al cargar la página» (draft L308–312) | **callout-info**; borde secondary |
| `addEventListener-ejemplo` | `CodeBlock` | `querySelector` + `addEventListener` (draft L314–321) | `my-4` |
| `alClic-referencia` | `CodeBlock` | mal `alClic()` vs bien `alClic` comentado (draft L323–334) | `my-4` |
| `addEventListener-parentesis` | `PracticeExercise` | por qué `manejarClick()` es incorrecto (draft L336–342) | accent border |

#### `ResumenSection`

| Elemento | Clay |
|----------|------|
| Viñetas 8 puntos (draft L346–355) | prose `<ul>`; sin `ClayCard` |

#### `CompruebaTuComprensionSection`

| id | Componente | Tema | Clay |
|----|------------|------|------|
| `comprension-reutilizacion-funcion` | `PracticeExercise` | ventaja extraer lógica repetida (draft L363–369) | accent border |
| `comprension-flujo-sumar` | `PracticeExercise` | orden flujo `sumar(2,3)` (draft L371–377) | accent border |
| `comprension-calcular-total-undefined` | `PracticeExercise` | predice `calcularTotal` sin return (draft L379–385) | accent border |

Apilar los tres ejercicios con `my-8` cada uno; H2 en **card** semántico (evaluación formativa).

#### `RetoIntegradorSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Enunciado | prose | «Mini biblioteca de transformaciones»; 6 tareas + criterio éxito (draft L391–402) | H2 primary |
| `reto-esqueleto-aplicar-lista` | `CodeBlock` | esqueleto `aplicarLista` + pruebas comentadas (draft L404–421) | `CodeBlock` `my-6`; fondo oscuro |
| `reto-biblioteca-transformaciones` | `PracticeExercise` | implementar `aplicarLista` y `filtrarLista`; 4 hints (draft L423–434) | `ClayCard` accent; textarea `rows={8}` |

#### `CierreSection`

| id | Componente | Notas | Clay |
|----|------------|-------|------|
| Intro cierre | prose | conexión lección 5 y 7 (draft L438–440) | Sin clay |
| Ideas clave | prose `<ul>` | 5 viñetas (draft L442–448) | Sin clay |
| Siguiente paso | prose `<p>` | enlace lección `07-arrays-json-objetos` (draft L450) | Sin clay |
| `cierre-quiz` | `Quiz` | 5 preguntas return/parámetros/arrow/callback/addEventListener (draft L454–515) | `ClayCard` `my-8` |

### Tipos de Callout por bloque

| Bloque | Variante | Borde izquierdo | Tono visual |
|--------|----------|-----------------|-------------|
| Caso checkout total undefined | `callout-info` | `--color-secondary` (`#00C2FF`) | Incidente profesional; `return` olvidado |
| Error return vs console.log | `callout-warning` | `--color-accent` (`#6B4EFF`) | Preventivo; confusión salida vs retorno |
| Error arrow con llaves | `callout-warning` | `--color-accent` | Preventivo; retorno implícito roto |
| Caso botón Guardar al cargar | `callout-info` | `--color-secondary` | `onclick = fn()` vs referencia; DOM |

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

No envolver `MermaidDiagram` ni `CodeBlock` en `ClayCard` adicional. Máximo un `ClayCard` por bloque interactivo. En `DeclaracionDeFuncionSection` y `CallbacksSection`: separar `StepReveal` y diagrama Mermaid con párrafo intermedio si la densidad es alta; no anidar `StepReveal` dentro de otro `ClayCard` padre.

### Densidad visual por sección

| Sección | Nivel clay dominante | Notas |
|---------|---------------------|-------|
| Objetivos de aprendizaje | 0 | Solo prose |
| Declaración de función | 2 | stepper return + 2 callouts + challenge; sección más densa del bloque «funciones» |
| Expresión y arrow function | 1–2 | `CompareTable` + callout + challenge + practice |
| Callbacks | 2 | 2 diagramas + stepper registro + callout caso real |
| Resumen | 0 | Viñetas |
| Comprueba tu comprensión | 2 | 3 `PracticeExercise` apilados |
| Reto integrador | 2 | `CodeBlock` esqueleto + practice abierta |
| Cierre + Quiz | 2 | Quiz en `ClayCard` final |

### Checklist implementación (lesson-developer)

- [ ] Refactorizar `DeclaracionDeFuncionSection`: reemplazar stub; poblar según tabla (2 callouts, stepper, mermaid, 5 code blocks, challenge, practice)
- [ ] Crear `ExpresionDeFuncionYArrowFunctionSection` con `CompareTable`, callout, 2 `CodeBlock`, challenge, practice
- [ ] Refactorizar `CallbacksSection`: 2 mermaid, stepper, callout, 2 `CodeBlock`, challenge, practice
- [ ] Crear `ObjetivosSection` con lista de objetivos
- [ ] Poblar `ResumenSection` con 8 viñetas del draft
- [ ] Crear `CompruebaTuComprensionSection` con 3 `PracticeExercise`
- [ ] Crear `RetoIntegradorSection` con `CodeBlock` esqueleto + `PracticeExercise`
- [ ] Crear `CierreSection` con ideas clave + `Quiz`
- [ ] Registrar preguntas quiz en `src/lib/teaching-quizzes/pbpew.ts`
- [ ] H2 alineados con SEO: «Declaración de función en JavaScript», «Expresión de función y arrow function», «Callbacks en JavaScript»
- [ ] H3: «Parámetros por defecto y alcance local», «Registrar callback vs ejecutarlo al instante»
- [ ] Actualizar `FuncionesYCallbacksLesson.tsx` con orden de secciones del mapa
