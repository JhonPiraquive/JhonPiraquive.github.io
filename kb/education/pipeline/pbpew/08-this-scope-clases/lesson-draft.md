---
track: pbpew
slug: 08-this-scope-clases
title: "this, ámbito (scope), clases y herencia"
order: 8
prerequisites:
  - 01-intro-js-y-dom
  - 02-js-en-html
  - 03-variables-y-tipos
  - 04-operadores-y-decisiones
  - 05-bucles-y-errores
  - 06-funciones-y-callbacks
  - 07-arrays-json-objetos
related:
  - 06-funciones-y-callbacks
  - 07-arrays-json-objetos
  - 09-estructuras-de-datos
source_brief: kb/education/pipeline/pbpew/08-this-scope-clases/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** qué es el ámbito (scope) en JavaScript y **distinguir** ámbito global, de función y de bloque con `let`/`const` frente a `var`.
- **Describir** qué es `this` y **predecir** su valor según la forma de invocación (método de objeto, llamada suelta, modo estricto).
- **Contrastar** `this` en funciones normales y en funciones flecha, y **aplicar** flechas como callbacks que conservan el contexto del objeto.
- **Definir** clases ES6 con `constructor` y métodos de instancia, **instanciar** con `new` y **usar** `this` coherente en la instancia.
- **Implementar** herencia con `extends` y `super`, respetando la regla de invocar `super(...)` antes de usar `this` en constructores hijos.
- **Diagnosticar** errores frecuentes: pérdida de `this` en callbacks, olvidar `new`, contaminar el global y sombreado de variables.

## Prerrequisitos

- **Lección 06 (`06-funciones-y-callbacks`):** declaración, expresión, arrow functions, callbacks y `addEventListener`.
- **Lección 07 (`07-arrays-json-objetos`):** objetos literales, propiedades y métodos abreviados (`metodo() {}`).
- **Lección 05 (`05-bucles-y-errores`):** bucles `for` para el reto integrador.
- **Lección 03 (`03-variables-y-tipos`):** `let`/`const`, tipos primitivos.
- Capacidad para ejecutar fragmentos en consola o `<script>` sin errores de sintaxis básica.

## Contenido

### Ámbito (scope)

El **ámbito (scope)** es la región del código donde un identificador (variable, función) es **visible** y puede usarse. Si el nombre no está en scope, obtienes `ReferenceError`.

**Tipos de ámbito en PBPEW:**

| Tipo | Declaración típica | Visible fuera de... |
|------|--------------------|---------------------|
| Global | top-level `let`/`const` | N/A (todo el módulo/script) |
| Función | dentro de `function` | La función |
| Bloque | `let`/`const` en `{ }` | Ese bloque |

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo", "Declaración típica", "Visible fuera de..."],
  "rows": [
    ["Global", "top-level let/const", "N/A (todo el módulo/script)"],
    ["Función", "dentro de function", "La función"],
    ["Bloque", "let/const en { }", "Ese bloque"]
  ]
}

**Ámbito global:** declaraciones en el nivel superior del script o módulo. En apps grandes conviene **no** llenar el global de nombres sueltos — riesgo de colisiones y bugs difíciles de rastrear.

**Ámbito de función:** variables declaradas con `var`, `let` o `const` **dentro** de una función existen solo ahí (y en closures internas). Los parámetros también son locales a la función.

**Ámbito de bloque:** `let` y `const` dentro de `{ }` (bloque `if`, `for`, etc.) no son visibles fuera del bloque. `var` **no** respeta bloque — solo función — (legacy; preferir `let`/`const`).

**Sombreado (shadowing):** declarar `let x` dentro de un bloque interno oculta el `x` del bloque exterior en esa región; puede confundir al depurar.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  G[\"Ámbito global\\nlet global\"]\n  G --> F[\"Ámbito de función demo()\\nlet enFuncion\"]\n  F --> B[\"Ámbito de bloque if {}\\nlet enBloque\"]\n  B --> X[\"enBloque no visible fuera del if\"]\n  F --> Y[\"enFuncion no visible fuera de demo\"]"
}

<!-- interactive: StepReveal -->
{
  "title": "Capas de scope — entrar y salir",
  "steps": [
    {
      "title": "1. Ámbito global",
      "content": "let global = 'visible arriba' — accesible en todo el script o módulo (con matices de módulos ES)."
    },
    {
      "title": "2. Entrar a función demo()",
      "content": "let enFuncion = 'solo aquí' — existe solo dentro de demo. Fuera de demo → ReferenceError."
    },
    {
      "title": "3. Entrar a bloque if { }",
      "content": "let enBloque = 'solo en el if' — visible dentro del if. Fuera del if pero dentro de demo → ReferenceError para enBloque."
    },
    {
      "title": "4. Salir del bloque",
      "content": "enBloque ya no existe. enFuncion sigue disponible dentro de demo."
    },
    {
      "title": "5. Salir de la función",
      "content": "enFuncion desaparece. global sigue accesible en el nivel superior."
    }
  ]
}

<!-- code: javascript -->
```javascript
let global = "visible arriba";

function demo() {
  let enFuncion = "solo aquí";
  if (true) {
    let enBloque = "solo en el if";
    console.log(enBloque); // OK
  }
  // console.log(enBloque); // ReferenceError
  return enFuncion;
}

console.log(global); // OK
// console.log(enFuncion); // ReferenceError
```

**`let` en bucle vs `var`:** con `let`, cada iteración del `for` tiene su propia variable; con `var`, todas las callbacks comparten la misma — bug clásico con `setTimeout`.

<!-- code: javascript -->
```javascript
// Con let — cada iteración tiene su i
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 50);
}
// 0, 1, 2

// Con var — un solo i compartido (evitar)
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 50);
}
// 3, 3, 3
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente — confundir ámbito de bloque con ámbito de función",
  "children": "if (true) { let x = 1; } console.log(x) → ReferenceError. Con var no habría error pero x sería undefined fuera — otro bug sutil. Usa siempre let/const y respeta el bloque."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — ámbito de bloque",
  "template": "if (true) {\n  {{blank1}} x = 10;\n}\n// console.log(x) → ReferenceError si usaste let/const",
  "blanks": [
    { "id": "blank1", "answer": "let", "placeholder": "let o const (no var)" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica la diferencia entre ámbito de función y ámbito de bloque con let frente a var en un if.",
  "hints": ["let/const respetan { }", "var solo respeta function"],
  "expectedKeywords": ["bloque", "función", "let", "var"],
  "successMessage": "Correcto. let/const viven solo en el bloque { }; var se eleva a toda la función, no al bloque."
}

---

### `this`

**`this`** es una palabra clave que apunta al **contexto de ejecución** de una función — no es un argumento ni una variable que declares. Su valor depende de **cómo** se invoca la función, no solo de dónde está escrita.

**Método de objeto:** función almacenada como propiedad (`obj.mostrar`). Al llamar `obj.mostrar()`, `this` suele ser `obj` — puedes acceder a otras propiedades con `this.propiedad`.

<!-- code: javascript -->
```javascript
const caja = {
  valor: 10,
  mostrar() {
    console.log(this.valor);
  },
};

caja.mostrar(); // 10 — this es caja
```

**Llamada suelta:** al extraer el método y llamarlo sin el objeto delante, `this` puede ser `undefined` (modo estricto) o el objeto global `window` (legacy). Es la causa clásica del bug "`this` es undefined".

**Modo estricto (`"use strict"`):** en funciones normales, `this` en llamada suelta es `undefined`; evita contaminar el global por accidente.

<!-- code: javascript -->
```javascript
"use strict";

const cuenta = {
  total: 0,
  incrementar() {
    this.total++;
  },
};

cuenta.incrementar(); // OK — this es cuenta

const fn = cuenta.incrementar;
// fn(); // TypeError o this undefined — perdió el contexto
```

**`this` en funciones flecha:** **no** tiene su propio `this`; lo **hereda léxicamente** del ámbito donde se definió la flecha. Ideal para callbacks que deben conservar el `this` del objeto que los creó.

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "function método", "Flecha =>"],
  "rows": [
    ["this en obj.metodo()", "Suele ser obj", "Léxico (del scope exterior)"],
    ["Callback suelta", "undefined (strict) o global", "Igual que donde se definió"],
    ["Uso típico PBPEW", "Métodos de objeto/clase", "Callbacks dentro de métodos"]
  ]
}

<!-- code: javascript -->
```javascript
"use strict";

const objeto = {
  etiqueta: "demo",
  metodoNormal() {
    console.log(this.etiqueta);
  },
  metodoFlecha: () => {
    console.log(this.etiqueta); // this léxico — NO es objeto
  },
};

objeto.metodoNormal(); // "demo"
objeto.metodoFlecha(); // undefined (this exterior, p. ej. undefined en módulo)
```

**Pérdida de `this` en callbacks:** pasar un método directamente a `addEventListener` hace que, al hacer clic, `this` ya no sea el objeto original.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph bien [Correcto]\n    B1[\"() => cuenta.incrementar()\"]\n    B2[\"incrementar con this = cuenta\"]\n    B1 --> B2\n  end\n  subgraph mal [Incorrecto]\n    M1[\"addEventListener('click', cuenta.incrementar)\"]\n    M2[\"this sin cuenta al hacer clic\"]\n    M1 --> M2\n  end"
}

<!-- interactive: Callout -->
{
  "title": "Caso real: contador de clics — badge siempre NaN",
  "children": "const panel = { total: 0, registrar() { this.total++; } } y boton.addEventListener('click', panel.registrar). Cada clic incrementa this.total del contexto equivocado (undefined o window), no de panel. El badge ligado a panel.total no cambia. Solución: panel.registrar.bind(panel), () => panel.registrar(), o flecha que cierra sobre panel."
}

<!-- code: javascript -->
```javascript
const cuenta = {
  total: 0,
  incrementar() {
    this.total++;
  },
};

// ❌ Pierde contexto
// boton.addEventListener("click", cuenta.incrementar);

// ✅ Wrapper flecha conserva cuenta del closure; incrementar usa this = cuenta
boton.addEventListener("click", () => cuenta.incrementar());
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué this no es una variable que puedas asignar como let x = 5?",
  "hints": ["Es un binding especial", "Depende de cómo se invoca la función"],
  "expectedKeywords": ["binding", "invoc", "llamada", "contexto"],
  "successMessage": "Correcto. this es un binding especial determinado por la forma de llamada (o reglas léxicas en flechas), no una variable declarativa."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué boton.addEventListener('click', objeto.manejar) puede fallar mientras boton.addEventListener('click', () => objeto.manejar()) suele funcionar?",
  "hints": ["Al hacer clic, manejar se invoca sin el punto objeto.", "La flecha conserva la referencia a objeto del closure"],
  "expectedKeywords": ["contexto", "this", "flecha", "callback"],
  "successMessage": "Correcto. Pasar el método suelto pierde el enlace this = objeto; el wrapper flecha llama objeto.manejar() con el punto, restaurando el contexto."
}

---

### Clases y métodos

En la lección 7 viste objetos literales `{ clave: valor, metodo() {} }`. Las **clases ES6** (`class`) ofrecen sintaxis clara para **plantillas** de objetos con constructor y métodos compartidos en el prototipo.

**`class Nombre { }`:** declaración de una "molde" para instancias. No es un objeto en sí: hay que usar `new` para crear instancias.

**`constructor`:** método especial que se ejecuta al hacer `new Clase(args)`. Inicializa propiedades de instancia con `this.prop = valor`.

**`this` en clases:** dentro del constructor y métodos de instancia, `this` es la **instancia** recién creada o la que recibe la llamada (`r.area()` → `this` es `r`).

<!-- interactive: StepReveal -->
{
  "title": "Flujo: new Rectangulo(4, 5)",
  "steps": [
    {
      "title": "1. new Rectangulo(4, 5)",
      "content": "JavaScript crea un objeto vacío y lo prepara para ser instancia de Rectangulo."
    },
    {
      "title": "2. Enlazar this",
      "content": "this apunta al objeto recién creado dentro del constructor."
    },
    {
      "title": "3. Ejecutar constructor",
      "content": "constructor(ancho, alto) asigna this.ancho = ancho y this.alto = alto."
    },
    {
      "title": "4. Devolver instancia",
      "content": "La instancia se asigna a const r = ..."
    },
    {
      "title": "5. Llamar método",
      "content": "r.area() — dentro de area(), this es r; devuelve this.ancho * this.alto."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  N[\"new Rectangulo(4, 5)\"]\n  N --> O[\"Crear objeto\"]\n  O --> C[\"constructor(ancho, alto)\"]\n  C --> T[\"this.ancho = ancho\\nthis.alto = alto\"]\n  T --> R[\"Instancia r\"]\n  R --> A[\"r.area() → this es r\"]"
}

<!-- code: javascript -->
```javascript
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  area() {
    return this.ancho * this.alto;
  }
}

const r = new Rectangulo(4, 5);
console.log(r.area()); // 20
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente — olvidar new",
  "children": "const r = Rectangulo(4, 5) sin new falla o da comportamiento inesperado. Con clases ES6 suele lanzar TypeError: Class constructor Rectangulo cannot be invoked without 'new'."
}

**Flecha dentro de método de clase:** útil en callbacks internos para conservar `this` de la instancia.

<!-- code: javascript -->
```javascript
class Lista {
  constructor() {
    this.items = [];
  }
  agregar(valor) {
    this.items.push(valor);
  }
  cadaUno(fn) {
    this.items.forEach((item) => fn(item, this)); // this de Lista disponible
  }
}
```

**Cuándo usar flecha en métodos:** evita flecha como **método de instancia** si necesitas `this` dinámico de la instancia — la flecha no enlaza `this` al objeto que llama. Úsala en callbacks dentro de métodos (`items.forEach((x) => this.procesar(x))`).

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — clase Circulo",
  "template": "class Circulo {\n  constructor(radio) {\n    this.radio = {{blank1}};\n  }\n  diametro() {\n    return this.radio * {{blank2}};\n  }\n}\n\nconst c = new Circulo(5);\nconsole.log(c.diametro()); // 10",
  "blanks": [
    { "id": "blank1", "answer": "radio", "placeholder": "parámetro del constructor" },
    { "id": "blank2", "answer": "2", "placeholder": "factor del diámetro" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea un objeto contador con valor: 0 y método subir() que haga this.valor++. Llama contador.subir() dos veces y muestra contador.valor. Pega tu código o indica el resultado.",
  "hints": ["Objeto literal con método abreviado", "this.valor++ dentro de subir"],
  "expectedKeywords": ["valor", "2", "subir", "this"],
  "successMessage": "Correcto. Tras dos llamadas a subir(), contador.valor debe ser 2."
}

---

### Herencia

**Herencia con `extends`:** `class Cuadrado extends Rectangulo` — `Cuadrado` hereda métodos y comportamiento de `Rectangulo`.

**`super`:** dentro de una subclase, llama al constructor o métodos de la **clase padre**. En el constructor hijo, `super(...)` debe ejecutarse **antes** de usar `this` en la subclase.

**Azúcar sintáctico sobre prototipos:** `class` / `extends` / `super` son una capa legible sobre el modelo de prototipos de JavaScript; en PBPEW basta con la sintaxis moderna.

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class Rectangulo {\n    +ancho\n    +alto\n    +constructor(ancho, alto)\n    +area()\n  }\n  class Cuadrado {\n    +constructor(lado)\n  }\n  Rectangulo <|-- Cuadrado\n  note for Cuadrado \"super(lado, lado) en constructor\""
}

<!-- code: javascript -->
```javascript
class Cuadrado extends Rectangulo {
  constructor(lado) {
    super(lado, lado); // inicializa ancho y alto en el padre
  }
}

const c = new Cuadrado(3);
console.log(c.area()); // 9 — hereda area() del padre
```

<!-- interactive: Callout -->
{
  "title": "Caso real: subclase sin super rompe el despliegue",
  "children": "class ProductoDigital extends Producto con constructor que asigna this.sku sin super(sku, precio). Los tests fallan con ReferenceError: Must call super constructor. En herencia ES6, el constructor hijo debe invocar super(...) antes de tocar this."
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente — this antes de super()",
  "children": "class B extends A { constructor() { this.x = 1; super(); } } → ReferenceError. Primero super(...), luego this en la subclase."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la subclase Cuadrado",
  "template": "class Cuadrado extends {{blank1}} {\n  constructor(lado) {\n    {{blank2}}(lado, lado);\n  }\n}",
  "blanks": [
    { "id": "blank1", "answer": "Rectangulo", "placeholder": "clase padre" },
    { "id": "blank2", "answer": "super", "placeholder": "llamada al constructor padre" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena los pasos de const r = new Rectangulo(2, 3): (a) se crea objeto vacío, (b) se ejecuta constructor con this enlazado, (c) se asignan this.ancho y this.alto, (d) se devuelve la instancia a r, (e) r.area() usa this = r. Indica el orden correcto.",
  "hints": ["Primero new crea el objeto", "Luego constructor, luego asignación, luego devolución"],
  "expectedKeywords": ["a", "b", "c", "d", "e"],
  "successMessage": "Correcto. Orden: (a) crear objeto → (b) constructor con this → (c) asignar propiedades → (d) devolver a r → (e) r.area() con this = r."
}

**Preview lección 9:** estructuras de datos (pilas, colas) suelen modelarse con clases u objetos con métodos que usan `this` para el estado interno.

---

### Resumen

- **Ámbito (scope):** global, de función y de bloque. `let`/`const` respetan bloque; `var` solo función (legacy).
- **Sombreado** y bucles con `let` vs `var` en callbacks — cada iteración con `let` tiene su propia variable.
- **`this`** no es una variable declarativa; depende de **cómo** se invoca la función (método de objeto vs llamada suelta).
- **Modo estricto:** `this` en llamada suelta es `undefined`. **Flechas:** `this` léxico del scope exterior — ideal para callbacks internos.
- **Clases ES6:** `class`, `constructor`, métodos de instancia, instanciar con `new`. `this` es la instancia.
- **Herencia:** `extends`, `super(...)` en constructor hijo **antes** de usar `this`. Métodos del padre disponibles en la hija.
- **Evitar:** perder `this` en callbacks, flecha como método de instancia cuando necesitas `this` dinámico, olvidar `new`, contaminar el global.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja o describe tres cajas anidadas: global → función demo → bloque if, y coloca dónde viven global, enFuncion y enBloque.",
  "hints": ["Global envuelve todo", "enFuncion solo en demo", "enBloque solo en el if"],
  "expectedKeywords": ["global", "función", "bloque", "if"],
  "successMessage": "Correcto. global en el nivel superior; enFuncion dentro de demo; enBloque solo dentro del if."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Define class Circulo con constructor(radio), propiedad this.radio y método diametro() que devuelva this.radio * 2. Instancia con new Circulo(5) y comprueba el resultado.",
  "hints": ["constructor asigna this.radio", "diametro devuelve radio * 2"],
  "expectedKeywords": ["Circulo", "10", "diametro", "new"],
  "successMessage": "Correcto. new Circulo(5) y c.diametro() debe devolver 10."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué class Foo { incrementar = () => this.n++ } funciona distinto de incrementar() { this.n++ } respecto a this? ¿Cuál es el patrón habitual en PBPEW?",
  "hints": ["Flecha hereda this léxico", "Método normal enlaza this al llamador"],
  "expectedKeywords": ["léxico", "método", "instancia", "flecha"],
  "successMessage": "Correcto. La flecha como campo hereda this del constructor; el método normal() es el patrón habitual y enlaza this dinámicamente a la instancia que llama."
}

---

## Reto integrador

**"Mini carrito con clases y contexto"**

Implementa en un solo archivo (consola o `<script>`):

1. `class Producto` con `constructor(nombre, precio)`, propiedades `this.nombre`, `this.precio` y método `resumen()` que devuelva `` `${this.nombre}: $${this.precio}` ``.
2. `class ProductoConDescuento extends Producto` con constructor `(nombre, precio, porcentaje)` que llame `super(nombre, precio)` y guarde `this.porcentaje`. Sobrescribe `resumen()` para devolver el texto del padre más ` (desc. ${this.porcentaje}%)` — usa `super.resumen()` dentro del método hijo.
3. `class Carrito` con `constructor()` que inicialice `this.items = []`, método `agregar(producto)` que haga `push`, y `total()` que sume `producto.precio` de cada item con un bucle `for` (lección 5).
4. Crea instancias, agrega al carrito y muestra `carrito.total()` y cada `item.resumen()`.
5. Simula un botón: función `registrarAgregar(carrito, producto)` que devuelve **una flecha** `() => carrito.agregar(producto)` para usar como callback sin perder `this` del carrito.

**Criterio de éxito:** usa `class`, `extends`, `super` en constructor y método, `this` coherente en métodos de instancia, ámbito local con `let`/`const`, callback flecha que no pierde el carrito, sin variables globales sueltas.

<!-- code: javascript -->
```javascript
// Esqueleto de partida — completa las clases y las pruebas
class Producto {
  constructor(nombre, precio) {
    // tu código
  }
  resumen() {
    // tu código
  }
}

class ProductoConDescuento extends Producto {
  constructor(nombre, precio, porcentaje) {
    // super(...) y this.porcentaje
  }
  resumen() {
    // super.resumen() + descuento
  }
}

class Carrito {
  constructor() {
    this.items = [];
  }
  agregar(producto) {
    // push
  }
  total() {
    // bucle for sumando precios
  }
}

function registrarAgregar(carrito, producto) {
  return () => carrito.agregar(producto);
}

// Pruebas esperadas:
// const carrito = new Carrito();
// const p = new ProductoConDescuento("Libro", 20, 10);
// carrito.agregar(p);
// console.log(carrito.total()); // 20
// console.log(p.resumen());     // "Libro: $20 (desc. 10%)"
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el mini carrito según el reto. Pega tu código o describe cómo usas super en constructor y en resumen(), y por qué registrarAgregar devuelve una flecha.",
  "hints": [
    "super(nombre, precio) antes de this.porcentaje",
    "super.resumen() en el método hijo",
    "total() con for y let acumulador",
    "La flecha cierra sobre carrito y producto sin perder this"
  ],
  "expectedKeywords": ["extends", "super", "this", "flecha", "carrito"],
  "successMessage": "Excelente. Has integrado clases, herencia, super, this y callbacks flecha en un caso real de inventario."
}

---

## Cierre

Has completado el estudio de `this`, ámbito (scope), clases y herencia en JavaScript. Estos conceptos conectan los objetos de la lección 7 con el modelado orientado a objetos que usarás en estructuras de datos (lección 9).

**Ideas clave para retener:**

- **Scope:** global, función, bloque — `let`/`const` respetan `{ }`; evita `var` en bucles con callbacks.
- **`this`:** depende de la invocación; métodos de objeto enlazan `this` al objeto; flechas heredan `this` léxico.
- **Callbacks:** wrapper flecha, `.bind(obj)` o diseño cuidadoso para no perder contexto.
- **Clases:** molde con `constructor` y métodos; instanciar siempre con `new`.
- **Herencia:** `extends` + `super(...)` en constructor hijo antes de `this`; `super.metodo()` para reutilizar lógica del padre.

**Siguiente paso:** lección `09-estructuras-de-datos` — pilas, colas y modelado con clases u objetos con estado interno.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "En caja.mostrar() donde mostrar es método de caja, ¿qué suele ser this dentro de mostrar?",
      "options": [
        "El objeto global window siempre",
        "El objeto caja",
        "undefined siempre",
        "El archivo HTML"
      ],
      "correctIndex": 1,
      "feedback": "En una llamada como objeto.metodo(), el punto antes del método enlaza this al objeto que está a la izquierda."
    },
    {
      "question": "¿Qué ámbito tiene una variable declarada con let dentro de un bloque { }?",
      "options": [
        "Global en todo el programa",
        "Solo dentro de ese bloque",
        "Solo en el navegador, no en Node",
        "En todos los archivos del proyecto"
      ],
      "correctIndex": 1,
      "feedback": "let y const respetan ámbito de bloque. Fuera del { } el nombre no existe — ReferenceError si intentas usarlo."
    },
    {
      "question": "¿Qué hace super(lado, lado) en el constructor de class Cuadrado extends Rectangulo?",
      "options": [
        "Elimina la clase padre",
        "Invoca el constructor de Rectangulo con esos argumentos",
        "Crea una variable global super",
        "Convierte la clase en función flecha"
      ],
      "correctIndex": 1,
      "feedback": "super(...) en un constructor hijo delega la inicialización al padre. Debe ejecutarse antes de usar this en la subclase."
    },
    {
      "question": "¿Cuál es la diferencia principal de this en una función flecha frente a una function normal usada como método?",
      "options": [
        "La flecha no tiene this propio; lo toma del ámbito donde se escribió",
        "La flecha siempre usa window",
        "No hay diferencia",
        "La flecha no puede usarse en callbacks"
      ],
      "correctIndex": 0,
      "feedback": "Las flechas heredan this léxicamente. Las funciones normales lo fijan según quién las llama — crucial en métodos y callbacks."
    },
    {
      "question": "¿Por qué const r = Rectangulo(4, 5) sin new suele fallar con clases ES6?",
      "options": [
        "Porque Rectangulo es un array",
        "Porque los constructores de clase deben invocarse con new",
        "Porque falta extends",
        "Porque 4 y 5 no son números"
      ],
      "correctIndex": 1,
      "feedback": "class define constructores que esperan new. Sin new obtienes TypeError en entornos modernos."
    }
  ]
}
