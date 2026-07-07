---
track: pbpew
slug: 06-funciones-y-callbacks
title: "Funciones, return, parámetros y callbacks"
order: 6
prerequisites:
  - 01-intro-js-y-dom
  - 02-js-en-html
  - 03-variables-y-tipos
  - 04-operadores-y-decisiones
  - 05-bucles-y-errores
related:
  - 05-bucles-y-errores
  - 07-arrays-json-objetos
source_brief: kb/education/pipeline/pbpew/06-funciones-y-callbacks/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** qué es una función en JavaScript y **explicar** por qué agrupa lógica reutilizable.
- **Escribir** funciones con declaración, expresión y arrow function, **distinguiendo** hoisting y retorno implícito.
- **Diferenciar** parámetros de argumentos y **usar** parámetros por defecto y `return` correctamente.
- **Identificar** el alcance local de variables dentro de una función con `let`/`const`.
- **Explicar** qué es un callback y **pasar** referencias de función (no invocaciones accidentales) a funciones de orden superior y eventos del DOM.
- **Implementar** una función de orden superior simple con bucle `for` que ejecute un callback en cada iteración (preview de `.map`/`.forEach` en lección 7).

## Prerrequisitos

- **Lección 01 (`01-intro-js-y-dom`):** qué es JavaScript, `console.log`, acceso básico al DOM con `document`.
- **Lección 02 (`02-js-en-html`):** vincular scripts, ejecutar código en consola.
- **Lección 03 (`03-variables-y-tipos`):** `let`/`const`, alcance de bloque, tipos primitivos.
- **Lección 04 (`04-operadores-y-decisiones`):** operadores aritméticos, comparación, `if`.
- **Lección 05 (`05-bucles-y-errores`):** bucles `for`, `try/catch` básico — necesarios para implementar `repetir(n, fn)` y el reto integrador.
- Capacidad para escribir y ejecutar fragmentos en consola o `<script>` sin errores de sintaxis básica.

## Contenido

### Declaración de función

Una **función** es un bloque de código con nombre (o referencia) que agrupa lógica **reutilizable**. Evita repetir el mismo código, facilita pruebas y hace el programa más legible.

**Declaración de función:** el motor la registra antes de ejecutar el bloque (hoisting de la declaración completa). Puedes invocarla antes de su línea en el archivo.

**Invocar / llamar:** ejecutar la función con `()` — `saludar("Patricia")`. La expresión `saludar` sin paréntesis es solo la **referencia** a la función, no la ejecuta.

<!-- interactive: Callout -->
{
  "title": "Caso real: checkout con total undefined",
  "children": "Un desarrollador escribe function calcularTotal(precio, cantidad) { precio * cantidad; } y el carrito muestra Total: undefined. No hay error en consola — la función corre, pero no devuelve nada. Solución: return precio * cantidad; y usar el valor retornado en quien llama."
}

<!-- interactive: StepReveal -->
{
  "title": "Flujo de una llamada con return",
  "steps": [
    {
      "title": "1. Definición",
      "content": "function sumar(a, b) { return a + b; } — a y b son parámetros (nombres en la definición)."
    },
    {
      "title": "2. Invocación",
      "content": "const r = sumar(2, 5); — se invoca con argumentos 2 y 5. Dentro de sumar, a vale 2 y b vale 5."
    },
    {
      "title": "3. Cuerpo ejecuta",
      "content": "Se evalúa a + b → 7."
    },
    {
      "title": "4. return",
      "content": "return envía 7 al llamador y termina la función en ese punto. Código después de return en la misma rama no se ejecuta."
    },
    {
      "title": "5. Valor en el llamador",
      "content": "El resultado 7 se asigna a r."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  A[\"sumar(2, 5)\"] --> B[\"Entra a sumar\\na=2, b=5\"]\n  B --> C[\"return a + b\"]\n  C --> D[\"Resultado 5\\nal llamador\"]"
}

<!-- code: javascript -->
```javascript
// Declaración — hoisting: puedes llamarla antes de esta línea en el archivo
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar("Patricia")); // "Hola, Patricia"
```

<!-- code: javascript -->
```javascript
function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 5)); // 7 — argumentos 2 y 5; a y b son parámetros
```

**`return`:** devuelve un valor al código que llamó la función y **termina** la ejecución en ese punto. Si una función no tiene `return` o solo `return;`, devuelve **`undefined`**.

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "No confundas return con console.log. console.log muestra en consola; no sustituye a return cuando otra parte del código necesita el valor. function doble(x) { x * 2; } devuelve undefined — hace falta return x * 2;"
}

<!-- code: javascript -->
```javascript
function avisar(mensaje) {
  console.log(mensaje);
  // sin return → undefined
}
console.log(avisar("Listo")); // imprime "Listo", retorno undefined
```

**Parámetros por defecto:** si el argumento es `undefined` o falta, usa el valor por defecto.

<!-- code: javascript -->
```javascript
function crearSaludo(nombre = "invitado") {
  return `Bienvenido, ${nombre}`;
}
console.log(crearSaludo());        // "Bienvenido, invitado"
console.log(crearSaludo("Laura")); // "Bienvenido, Laura"
```

**Alcance (scope) local:** variables declaradas con `let`/`const` dentro de una función existen solo ahí.

<!-- code: javascript -->
```javascript
function contar() {
  let n = 0;
  n++;
  return n;
}
console.log(contar()); // 1
// console.log(n); // ReferenceError — n solo existe dentro de contar
```

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — área de rectángulo",
  "template": "function areaRectangulo(base, altura) {\n  return {{blank1}} * {{blank2}};\n}\nconsole.log(areaRectangulo(5, 4)); // debe imprimir 20",
  "blanks": [
    { "id": "blank1", "answer": "base", "placeholder": "parámetro ancho" },
    { "id": "blank2", "answer": "altura", "placeholder": "parámetro alto" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica la diferencia entre parámetro y argumento usando function resta(a, b) y la llamada resta(10, 3).",
  "hints": ["Parámetros = nombres en la definición", "Argumentos = valores concretos en la llamada"],
  "expectedKeywords": ["parámetro", "argumento", "definición", "llamada"],
  "successMessage": "Correcto. a y b son parámetros en la definición; 10 y 3 son argumentos en la llamada."
}

---

### Expresión de función y arrow function

Además de la declaración, puedes definir funciones como **expresiones** (asignadas a una variable) o con sintaxis **flecha** (arrow function, ES6).

| Forma | Sintaxis típica | Hoisting | Cuándo usar en PBPEW |
|-------|-----------------|----------|----------------------|
| Declaración | `function f() {}` | Sí (nombre) | Utilidades con nombre claro, handlers nombrados |
| Expresión | `const f = function () {}` | No | Asignar a variable/constante |
| Flecha | `const f = () => {}` | No | Callbacks cortos, una expresión |

<!-- interactive: CompareTable -->
{
  "headers": ["Forma", "Sintaxis típica", "Hoisting", "Cuándo usar en PBPEW"],
  "rows": [
    ["Declaración", "function f() {}", "Sí (nombre)", "Utilidades con nombre claro, handlers nombrados"],
    ["Expresión", "const f = function () {}", "No", "Asignar a variable/constante"],
    ["Flecha", "const f = () => {}", "No", "Callbacks cortos, una expresión"]
  ]
}

**Expresión de función:** la función se asigna a una variable. No tiene hoisting de la asignación: no puedes usar la variable antes de esa línea.

**Función flecha:** sintaxis compacta. Si el cuerpo es una sola expresión **sin llaves**, el `return` es **implícito**.

<!-- interactive: Callout -->
{
  "title": "Error frecuente — arrow con llaves",
  "children": "(x) => { x * 2 } con llaves pero sin return explícito devuelve undefined. Opciones: (x) => x * 2 sin llaves, o (x) => { return x * 2; } con return dentro de llaves."
}

<!-- code: javascript -->
```javascript
// Expresión — no puedes usar duplicar antes de esta línea
const duplicar = function (x) {
  return x * 2;
};

// Flecha — retorno implícito
const triple = (x) => x * 3;

console.log(duplicar(4)); // 8
console.log(triple(4));   // 12
```

<!-- code: javascript -->
```javascript
// Equivalente arrow de function esPar(n) { return n % 2 === 0; }
const esPar = (n) => n % 2 === 0;
console.log(esPar(4)); // true
console.log(esPar(7)); // false
```

**Preview avanzado (no profundizar aún):** arrow y `function` difieren en `this` y `arguments` en algunos contextos. En esta lección basta con la sintaxis.

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — arrow con retorno implícito",
  "template": "const mitad = (x) => {{blank1}};\nconsole.log(mitad(10)); // debe imprimir 5",
  "blanks": [
    { "id": "blank1", "answer": "x / 2", "placeholder": "expresión que devuelve la mitad" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Convierte function esPar(n) { return n % 2 === 0; } a arrow function equivalente y comprueba con esPar(4) y esPar(7). Pega tu código o describe el resultado esperado.",
  "hints": ["Una expresión sin llaves → return implícito", "n % 2 === 0 devuelve true o false"],
  "expectedKeywords": ["=>", "n % 2", "true", "false"],
  "successMessage": "Correcto. const esPar = (n) => n % 2 === 0; esPar(4) → true, esPar(7) → false."
}

---

### Callbacks

Un **callback** es una función que pasas como argumento para que otra función la ejecute **más tarde** o **en un momento concreto** (cada iteración de un bucle, tras un clic, tras un temporizador).

Una **función de orden superior (HOF, básico)** recibe otra función como argumento o devuelve una función. Ejemplo: `repetir(n, fn)` ejecuta `fn` varias veces.

**Preview lección 7:** métodos de array como `.forEach`, `.map` y `.filter` reciben callbacks; esta lección prepara ese patrón.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  R[\"repetir(3, fn)\"]\n  R --> L[\"bucle i = 0..2\"]\n  L --> C1[\"fn(0)\"]\n  L --> C2[\"fn(1)\"]\n  L --> C3[\"fn(2)\"]\n  C1 --> O[\"salida: paso 0...\"]\n  C2 --> O\n  C3 --> O"
}

<!-- code: javascript -->
```javascript
function repetir(n, fn) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

repetir(3, (i) => console.log("paso", i));
// paso 0
// paso 1
// paso 2
```

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — función repetir",
  "template": "function repetir(n, fn) {\n  for (let i = 0; i < {{blank1}}; i++) {\n    {{blank2}}(i);\n  }\n}",
  "blanks": [
    { "id": "blank1", "answer": "n", "placeholder": "condición del bucle" },
    { "id": "blank2", "answer": "fn", "placeholder": "callback a invocar" }
  ]
}

**Callbacks en el navegador:** `addEventListener("click", miCallback)`, `setTimeout(fn, 1000)` — el motor o la API “llaman de vuelta” tu función cuando ocurre el evento o expira el tiempo.

<!-- interactive: StepReveal -->
{
  "title": "Registrar callback vs ejecutarlo al instante",
  "steps": [
    {
      "title": "Correcto — pasar referencia",
      "content": "boton.addEventListener('click', alClic) — se registra la función. El navegador la ejecutará cuando el usuario haga clic."
    },
    {
      "title": "Usuario hace clic",
      "content": "Ocurre el evento click en el botón."
    },
    {
      "title": "Se ejecuta alClic",
      "content": "El motor invoca la función registrada; tu lógica corre en respuesta al evento."
    },
    {
      "title": "Incorrecto — ejecutar al registrar",
      "content": "boton.addEventListener('click', alClic()) — los paréntesis invocan alClic al cargar la página. Se pasa el retorno (a menudo undefined), no la función."
    },
    {
      "title": "Consecuencia del error",
      "content": "La acción corre al cargar (guardado no deseado) y el clic posterior no funciona porque onclick quedó con undefined."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph bien [Correcto: pasar referencia]\n    B1[\"addEventListener('click', alClic)\"]\n    B2[\"Usuario hace clic\"]\n    B3[\"Se ejecuta alClic\"]\n    B1 --> B2 --> B3\n  end\n  subgraph mal [Incorrecto: ejecutar al registrar]\n    M1[\"addEventListener('click', alClic())\"]\n    M2[\"alClic corre al cargar\"]\n    M3[\"onclick queda undefined\"]\n    M1 --> M2 --> M3\n  end"
}

<!-- interactive: Callout -->
{
  "title": "Caso real: botón Guardar al cargar la página",
  "children": "En un panel admin registran boton.onclick = guardarCambios();. Al cargar se dispara un guardado no deseado y el clic no funciona porque onclick recibió undefined. Lección: pasar referencia (guardarCambios o () => guardarCambios()) cuando quieres ejecutar después, en respuesta a un evento."
}

<!-- code: javascript -->
```javascript
const boton = document.querySelector("#enviar");
boton.addEventListener("click", function () {
  console.log("Clic registrado — callback ejecutado");
});
// Se pasa la función; el navegador la llama cuando hay clic
```

<!-- code: javascript -->
```javascript
function alClic() {
  console.log("Guardado");
}

// ❌ Mal — ejecuta al instante
// boton.onclick = alClic();

// ✅ Bien — referencia para más tarde
// boton.onclick = alClic;
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué addEventListener('click', manejarClick()) suele ser incorrecto frente a addEventListener('click', manejarClick)? Explica qué ocurre con los paréntesis.",
  "hints": ["() invoca la función de inmediato", "addEventListener espera una referencia de función"],
  "expectedKeywords": ["paréntesis", "referencia", "undefined", "inmediato"],
  "successMessage": "Correcto. manejarClick() ejecuta al registrar y pasa el retorno (undefined); manejarClick pasa la función para que el navegador la llame en el clic."
}

---

### Resumen

- Una **función** agrupa lógica reutilizable; evita repetir código y mejora legibilidad y pruebas.
- **Declaración** tiene hoisting del nombre; **expresión** y **flecha** se asignan a variables sin hoisting de la asignación.
- **Parámetros** = nombres en la definición; **argumentos** = valores en la llamada. **return** devuelve un valor y termina la función; sin return → `undefined`.
- **Arrow function** con una expresión sin llaves tiene **retorno implícito**; con llaves hace falta `return` explícito.
- Variables `let`/`const` dentro de una función tienen **alcance local**.
- Un **callback** es una función pasada como argumento para ejecutarse más tarde (bucle, evento, temporizador).
- Pasa **referencia** de función (`fn` o `() => fn()`) cuando quieres ejecutarla después; **`fn()`** la invoca al instante.
- **Preview lección 7:** `.forEach`, `.map` y `.filter` usan el mismo patrón de callbacks.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué ventaja tiene extraer lógica repetida a una función frente a copiar el mismo bloque en tres sitios del código?",
  "hints": ["Piensa en correcciones futuras", "Un nombre documenta la intención"],
  "expectedKeywords": ["reutiliz", "corregir", "nombre", "legib"],
  "successMessage": "Correcto. Reutilización, un solo lugar para corregir y un nombre que documenta la intención."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo de const r = sumar(2, 3);: (a) se devuelve 5 al llamador, (b) se asigna 5 a r, (c) se invoca sumar con argumentos 2 y 3, (d) dentro de sumar, a vale 2 y b vale 3, (e) se evalúa a + b. Indica el orden correcto.",
  "hints": ["Primero invocación, luego cuerpo, luego return, luego asignación"],
  "expectedKeywords": ["c", "d", "e", "a", "b"],
  "successMessage": "Correcto. Orden: (c) invocación → (d) parámetros → (e) evalúa → (a) return → (b) asigna a r."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Predice el resultado de function calcularTotal(precio, cantidad) { precio * cantidad; } seguido de console.log(calcularTotal(10, 3));. ¿Por qué?",
  "hints": ["Falta return", "Sin return la función devuelve undefined"],
  "expectedKeywords": ["undefined", "return"],
  "successMessage": "Correcto. Imprime undefined porque no hay return; el cálculo ocurre pero no se envía al llamador."
}

---

## Reto integrador

**“Mini biblioteca de transformaciones”**

Implementa en un solo archivo (consola o `<script>`):

1. `function aplicarLista(valores, transformar)` — recorre `valores` con un `for`, llama `transformar(valor)` en cada elemento y devuelve un **nuevo array** con los resultados (sin `.map` aún; usa bucle de la lección 5).
2. `const aMayusculas = (texto) => texto.toUpperCase();`
3. `const conPrefijo = (n) => "ID-" + n;`
4. Prueba: `aplicarLista(["hola", "pbpew"], aMayusculas)` → `["HOLA", "PBPEW"]`.
5. Prueba: `aplicarLista([1, 2, 3], conPrefijo)` → `["ID-1", "ID-2", "ID-3"]`.
6. Añade `function filtrarLista(valores, cumple)` que devuelva solo elementos donde `cumple(valor)` sea `true` (callback predicado).

**Criterio de éxito:** usa declaración y flecha, `return` correcto, callbacks como argumentos, bucles vistos en lección 5, sin modificar el array original de entrada.

<!-- code: javascript -->
```javascript
// Esqueleto de partida — completa aplicarLista y filtrarLista
function aplicarLista(valores, transformar) {
  const resultado = [];
  for (let i = 0; i < valores.length; i++) {
    // tu código aquí
  }
  return resultado;
}

const aMayusculas = (texto) => texto.toUpperCase();
const conPrefijo = (n) => "ID-" + n;

// Pruebas esperadas:
// console.log(aplicarLista(["hola", "pbpew"], aMayusculas)); // ["HOLA", "PBPEW"]
// console.log(aplicarLista([1, 2, 3], conPrefijo));             // ["ID-1", "ID-2", "ID-3"]
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa aplicarLista y filtrarLista según el reto. Pega tu código o describe cómo usas el callback transformar/cumple dentro del bucle for y qué devuelven las dos pruebas con aMayusculas y conPrefijo.",
  "hints": [
    "resultado.push(transformar(valores[i])) en cada iteración",
    "filtrarLista: if (cumple(valores[i])) resultado.push(valores[i])",
    "No modifiques el array valores original — crea uno nuevo",
    "return resultado al final de cada función"
  ],
  "expectedKeywords": ["push", "return", "for", "callback"],
  "successMessage": "Excelente. Has integrado declaración, arrow, return, bucles y callbacks en un patrón similar a .map y .filter de la lección 7."
}

---

## Cierre

Has completado el estudio de funciones, `return`, parámetros y callbacks en JavaScript. Estos conceptos conectan la lógica reutilizable con los bucles de la lección 5 y preparan los métodos de array de la lección 7.

**Ideas clave para retener:**

- **Funciones** agrupan lógica; **return** envía el resultado al llamador.
- **Parámetros** vs **argumentos**; **parámetros por defecto** para valores opcionales.
- **Declaración**, **expresión** y **flecha** — distinto hoisting y retorno implícito en arrow.
- **Callbacks** conectan tu código con quien decide cuándo ejecutarlo (bucles, eventos, APIs).
- Pasa **referencia** (`fn`), no **invocación** (`fn()`) cuando quieres ejecutar después.

**Siguiente paso:** lección `07-arrays-json-objetos` — arrays, objetos JSON y métodos `.forEach`, `.map`, `.filter` con callbacks.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué hace return dentro de una función?",
      "options": [
        "Reinicia el programa",
        "Devuelve un valor al llamador y termina la función en ese punto",
        "Imprime en consola automáticamente",
        "Declara una variable global"
      ],
      "correctIndex": 1,
      "feedback": "return envía el resultado hacia fuera y detiene la ejecución de la función en esa línea. Para ver valores en consola usas console.log, no confundir con return."
    },
    {
      "question": "En function sumar(a, b) { return a + b; } y la llamada sumar(2, 5), ¿qué son a y b?",
      "options": [
        "Argumentos",
        "Parámetros",
        "Callbacks",
        "Propiedades del objeto global"
      ],
      "correctIndex": 1,
      "feedback": "a y b son nombres en la definición (parámetros). Los valores 2 y 5 en la llamada son los argumentos."
    },
    {
      "question": "¿Cuál devuelve el triple de un número con retorno implícito?",
      "options": [
        "const triple = (x) => { x * 3; };",
        "const triple = (x) => x * 3;",
        "const triple = function (x) { x * 3 };",
        "function triple(x) { x * 3 }"
      ],
      "correctIndex": 1,
      "feedback": "Con flecha y una sola expresión sin llaves, el resultado se devuelve automáticamente. Las opciones con cuerpo sin return explícito devuelven undefined."
    },
    {
      "question": "¿Qué es un callback en JavaScript?",
      "options": [
        "Un error de sintaxis en un bucle",
        "Una función que pasas a otra para que la ejecute en el momento adecuado",
        "Un tipo de variable solo para números",
        "El archivo HTML que carga el script"
      ],
      "correctIndex": 1,
      "feedback": "Los callbacks conectan tu lógica con código que decide cuándo ejecutarla (bucles propios, eventos, temporizadores, APIs)."
    },
    {
      "question": "¿Por qué boton.addEventListener('click', guardar()); suele ser un error?",
      "options": [
        "Porque addEventListener no acepta strings",
        "Porque ejecuta guardar al registrar y pasa su retorno, no la función",
        "Porque los clics no usan callbacks",
        "Porque hay que usar var obligatoriamente"
      ],
      "correctIndex": 1,
      "feedback": "Los paréntesis () invocan la función de inmediato. Para el clic necesitas pasar la referencia: guardar o () => guardar()."
    }
  ]
}
