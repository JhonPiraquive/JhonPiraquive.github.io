---
track: pbpew
slug: 08-this-scope-clases
title: "Ámbito, this y clases en JavaScript: scope, métodos e herencia"
order: 8
prev: "07-arrays-json-objetos"
next: "09-estructuras-de-datos"
interactive_blocks:
  - type: compare-table
    id: tipos-ambito-scope
  - type: mermaid
    id: capas-ambito-scope
  - type: step-reveal
    id: capas-scope-entrar-salir
  - type: callout
    id: error-ambito-bloque-vs-funcion
  - type: code-challenge
    id: completa-ambito-bloque
  - type: practice-exercise
    id: ambito-funcion-vs-bloque
  - type: compare-table
    id: function-vs-flecha-this
  - type: mermaid
    id: perdida-this-callback
  - type: callout
    id: caso-contador-clics-nan
  - type: practice-exercise
    id: this-no-es-variable
  - type: practice-exercise
    id: addEventListener-contexto-this
  - type: step-reveal
    id: flujo-new-rectangulo
  - type: mermaid
    id: flujo-new-constructor
  - type: callout
    id: error-olvidar-new
  - type: code-challenge
    id: completa-clase-circulo
  - type: practice-exercise
    id: objeto-contador-subir
  - type: mermaid
    id: herencia-extends-super
  - type: callout
    id: caso-subclase-sin-super
  - type: callout
    id: error-this-antes-super
  - type: code-challenge
    id: completa-subclase-cuadrado
  - type: practice-exercise
    id: orden-pasos-new-rectangulo
  - type: practice-exercise
    id: comprension-cajas-scope
  - type: practice-exercise
    id: comprension-clase-circulo
  - type: practice-exercise
    id: comprension-flecha-vs-metodo
  - type: practice-exercise
    id: reto-mini-carrito
  - type: quiz
    id: cierre-quiz
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track PBPEW. Referencia de formato: `kb/education/pipeline/pbpew/06-funciones-y-callbacks/lesson-spec.md` (§ Brand).

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; preciso, didáctico y orientado a código ejecutable en consola o `<script>`.
- **Persona:** segunda persona (*tú*) en ejercicios, retos y miniquiz; tercera persona o impersonal en objetivos y definiciones (*el estudiante podrá…*, *el ámbito es la región…*).
- **Voz:** profesional, clara, confiable; enfatiza *invocación frente a definición* para `this`, *bloque frente a función* para scope, y *super antes de this* en herencia como reglas de producción.
- **Evitar:** jerga vacía, tono infantil, humor forzado, metáforas gamer o estilo blog informal; no trivializar `class` como «atajo mágico» sin mencionar instancias y `new`.
- **Preferir:** verbos de acción concretos (*explicar*, *distinguir*, *predecir*, *contrastar*, *definir*, *instanciar*, *implementar*, *diagnosticar*).

### Título de lección refinado

**ES:** `Ámbito, this y clases en JavaScript: scope, métodos e herencia`

- Añade *en JavaScript* para contexto académico y coherencia con lecciones 05–07 del track PBPEW.
- Sigue el orden pedagógico del borrador: scope → `this` → clases → herencia.
- Sustituye la lista plana del brief por subtítulo con dos puntos; mantiene *scope* como término técnico reconocible en el subtítulo.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos de aprendizaje | Neutro, catalogable; alinear con lista medible del draft |
| Ámbito (scope) | Ámbito (scope) en JavaScript | H2 nominal; definir scope en una oración antes de la tabla |
| ↳ Tipos de ámbito | Tipos de ámbito: global, función y bloque | H3 o intro a `CompareTable`; no repetir la tabla en el H2 |
| ↳ Sombreado y bucles | Sombreado y `let` frente a `var` en bucles | H3 preventivo; enlazar con lección 05 sin repetir sintaxis de `for` |
| `this` | El contexto de ejecución: `this` | H2 con término técnico; distinguir de variable declarativa en primer párrafo |
| ↳ Método vs llamada suelta | Método de objeto frente a llamada suelta | H3 o bloque prose; modo estricto en subpárrafo, no en el H2 |
| ↳ Flechas y callbacks | `this` en funciones flecha y callbacks | H3 clave; puente con lección 06 (`addEventListener`) |
| Clases y métodos | Clases ES6: constructor y métodos de instancia | H2; contrastar con objetos literales de lección 07 en apertura |
| ↳ Flujo `new` | Instanciar con `new`: flujo del constructor | H3 o título de `StepReveal`; pasos en presente indicativo |
| ↳ Flecha en métodos | Flechas dentro de métodos de clase | H3 breve; cuándo sí y cuándo no |
| Herencia | Herencia con `extends` y `super` | H2; mencionar azúcar sintáctico sobre prototipos en una línea |
| ↳ Preview lección 9 | Puente hacia estructuras de datos | Prosa, no H3 obligatorio; pilas/colas con estado interno |
| Resumen | Resumen | Viñetas paralelas; scope, `this`, clases, herencia, anti-patrones |
| Comprueba tu comprensión | Comprueba tu comprensión | Imperativo amable; autoevaluación formativa |
| Reto integrador | Reto integrador: mini carrito con clases y contexto | Subtítulo en minúsculas tras dos puntos; escenario de inventario |
| Cierre | Cierre de la lección | Formal breve; enlace explícito a lección 09 |
| Mini-quiz | Mini-quiz | Consistente con PBPEW 02–07; sin guión en slug del componente |

**Reglas transversales para headings:**

- H2: tema nominal o concepto clave; sin emojis ni mayúsculas innecesarias.
- H3/H4: concreto y escaneable; reservar nombres de API (`extends`, `super`, `new`) para subtítulos técnicos.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Error frecuente — ámbito de bloque frente a ámbito de función

- **Título:** `Error frecuente`
- **Tono:** preventivo, didáctico; señala confusión típica sin culpar al estudiante.
- **Copy refinado:** `if (true) { let x = 1; } console.log(x) provoca ReferenceError: x no existe fuera del bloque. Con var no habría error, pero x sería undefined fuera — otro bug sutil. Usa let o const y respeta los límites del bloque { }.`
- **Variante Clay (referencia):** `callout-warning`.

#### 2. Caso real — contador de clics con badge en `NaN`

- **Título:** `Caso real: contador de clics — el badge no se actualiza`
- **Tono:** narrativa breve de incidente en UI; síntoma → causa → decisión técnica.
- **Copy refinado:** `Un panel define const panel = { total: 0, registrar() { this.total++; } } y registra boton.addEventListener("click", panel.registrar). Cada clic incrementa this.total del contexto equivocado (undefined o window), no de panel. El badge ligado a panel.total no cambia. Decisión clave: panel.registrar.bind(panel), () => panel.registrar(), o diseño con flecha que cierre sobre panel.`
- **Variante Clay:** `callout-info`; borde secondary — incidente de interfaz, no error del estudiante.

#### 3. Error frecuente — olvidar `new`

- **Título:** `Error frecuente`
- **Tono:** preventivo; conecta sintaxis de clase con error de runtime explícito.
- **Copy refinado:** `const r = Rectangulo(4, 5) sin new falla o produce comportamiento inesperado. Con clases ES6 suele lanzar TypeError: Class constructor Rectangulo cannot be invoked without 'new'. Instancia siempre con new Rectangulo(...).`
- **Variante Clay:** `callout-warning`.

#### 4. Caso real — subclase sin `super` rompe el despliegue

- **Título:** `Caso real: subclase sin super en CI`
- **Tono:** incidente profesional; una línea de código bloquea release.
- **Copy refinado:** `class ProductoDigital extends Producto con constructor que asigna this.sku sin llamar super(sku, precio). Los tests fallan con ReferenceError: Must call super constructor. En herencia ES6, el constructor hijo debe invocar super(...) antes de tocar this; los métodos del padre siguen disponibles en la instancia hija.`
- **Variante Clay:** `callout-info`.

#### 5. Error frecuente — `this` antes de `super()`

- **Título:** `Error frecuente`
- **Tono:** preventivo; regla de orden en constructores hijos.
- **Copy refinado:** `class B extends A { constructor() { this.x = 1; super(); } } lanza ReferenceError. Orden correcto: primero super(...), luego asignaciones a this en la subclase.`
- **Variante Clay:** `callout-warning`.

### Otros bloques interactivos — títulos y tono

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| `CompareTable` | Tipos de ámbito | Introducir con: «El scope determina dónde un nombre es visible y usable»; headers del draft sin abreviar |
| `MermaidDiagram` | Capas de ámbito | Sin título H3 obligatorio; párrafo puente: «Sigue qué nombres desaparecen al salir de cada capa» |
| `StepReveal` | Capas de scope | Título: `Capas de scope: entrar y salir`; pasos en presente; paso 4 enfatiza que enBloque deja de existir |
| `CodeChallenge` | Ámbito de bloque | Título: `Completa el código: ámbito de bloque` — dos puntos, minúsculas en subtítulo |
| `PracticeExercise` | Función vs bloque | Éxito: `Correcto. let/const viven solo en el bloque { }; var se eleva a toda la función, no al bloque.` |
| `CompareTable` | function vs flecha (`this`) | Introducir con: «Elige la forma según si necesitas this dinámico del llamador o léxico del exterior» |
| `MermaidDiagram` | Pérdida de `this` en callback | Subgraphs: *Correcto: wrapper flecha* / *Incorrecto: método suelto* |
| `PracticeExercise` | `this` no es variable | Éxito: `Correcto. this es un binding especial determinado por la forma de llamada (o reglas léxicas en flechas), no una variable declarativa.` |
| `PracticeExercise` | addEventListener y contexto | Éxito: `Correcto. Pasar el método suelto pierde el enlace this = objeto; el wrapper flecha llama objeto.manejar() con el punto, restaurando el contexto.` |
| `StepReveal` | Flujo `new Rectangulo` | Título: `Flujo: new Rectangulo(4, 5)`; paso 5: `r.area() — dentro de area(), this es r` |
| `MermaidDiagram` | Flujo constructor | Complementa `StepReveal`; sin duplicar texto del paso 3 |
| `CodeChallenge` | Clase Circulo | Título: `Completa el código: clase Circulo` |
| `PracticeExercise` | Objeto contador | Éxito: `Correcto. Tras dos llamadas a subir(), contador.valor debe ser 2.` |
| `MermaidDiagram` | Herencia extends/super | Nota en diagrama: `super(lado, lado) en constructor` — tono factual |
| `CodeChallenge` | Subclase Cuadrado | Título: `Completa la subclase Cuadrado` |
| `PracticeExercise` | Orden pasos `new` | Éxito: `Correcto. Orden: (a) crear objeto → (b) constructor con this → (c) asignar propiedades → (d) devolver a r → (e) r.area() con this = r.` |
| `PracticeExercise` | Cajas anidadas scope | Éxito: `Correcto. global en el nivel superior; enFuncion dentro de demo; enBloque solo dentro del if.` |
| `PracticeExercise` | Clase Circulo | Éxito: `Correcto. new Circulo(5) y c.diametro() debe devolver 10.` |
| `PracticeExercise` | Flecha vs método instancia | Éxito: `Correcto. La flecha como campo hereda this del constructor; el método normal() es el patrón habitual y enlaza this dinámicamente a la instancia que llama.` |
| `PracticeExercise` | Reto mini carrito | Éxito: `Excelente. Has integrado clases, herencia, super, this y callbacks flecha en un caso real de inventario.` |
| `Quiz` | Feedback general | Una oración por ítem; mencionar invocación, bloque, super, léxico o new según la pregunta |
| Cierre | Ideas clave | Viñetas paralelas del draft; anti-patrones al final |
| Cierre | Siguiente paso | `Siguiente lección: estructuras de datos — pilas, colas y modelado con clases u objetos con estado interno.` — tono de itinerario académico |

### Prosa de apertura y cierre (ajustes de voz)

**Objetivos del tema (primer párrafo opcional):**

> Esta lección profundiza en tres pilares del JavaScript moderno: dónde viven los nombres (scope), a qué objeto apunta una función en ejecución (`this`) y cómo modelar entidades con clases ES6 e herencia. El dominio técnico sigue el brief del topic-expert; los objetivos medibles se listan arriba.

**Cierre (párrafo intro):**

> Has completado el estudio de ámbito, `this`, clases y herencia en JavaScript. Estos conceptos conectan los objetos literales de la lección 7 con el modelado orientado a objetos que aplicarás en estructuras de datos (lección 9).

### Reto integrador — copy de marca

- **Título H2:** `Reto integrador: mini carrito con clases y contexto`
- **Enunciado (lead):** `Modela un carrito de compras mínimo con clases ES6, herencia y un callback flecha que no pierda el contexto del carrito.`
- **Tono:** escenario de inventario/e-commerce neutro; reglas numeradas claras; sin gamificación.
- **Criterio de éxito (voz):** afirmar uso de `class`, `extends`, `super` en constructor y método, `this` coherente, `let`/`const` locales y callback flecha — sin variables globales sueltas.

### Notas EN (fase i18n)

- Título EN sugerido: `Scope, this, and classes in JavaScript: methods and inheritance`
- Mantener equivalencia terminológica: *scope*, *lexical binding*, *instance method*, *extends*, *super*, *constructor*.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Mini carrito con clases y contexto» → `Mini cart with classes and context`.
- «Caso real: contador de clics — el badge no se actualiza» → `Real case: click counter — badge never updates`; conservar escenario UI neutro.
- «Ámbito (scope)» → `Scope` en H2 EN; primera mención puede ser `Scope (lexical visibility)`.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

