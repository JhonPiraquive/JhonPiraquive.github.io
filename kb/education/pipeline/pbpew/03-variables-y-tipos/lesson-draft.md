---
track: pbpew
slug: 03-variables-y-tipos
title: "Variables, hoisting y tipos de datos"
order: 3
prerequisites:
  - 01-intro-js-y-dom
  - 02-js-en-html
related:
  - 04-operadores-y-decisiones
source_brief: kb/education/pipeline/pbpew/03-variables-y-tipos/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** qué es una variable en JavaScript y **distinguir** declaración de asignación.
- **Elegir** entre `const`, `let` y `var` según la regla práctica del curso (`const` por defecto, `let` si hay reasignación, evitar `var` en código nuevo).
- **Explicar** hoisting y la zona muerta temporal (TDZ) con `let`/`const`, y **contrastar** el comportamiento de `var`.
- **Identificar** los tipos primitivos principales y **usar** `typeof` para inspeccionarlos, incluyendo la peculiaridad de `typeof null`.
- **Distinguir** copia por valor (primitivos) de copia por referencia (objetos) y **reconocer** mutación válida frente a reasignación prohibida con `const`.
- **Detectar** errores comunes de coerción de tipos en contextos básicos (preview de la lección 04).

## Prerrequisitos

- **Lección 01 (`01-intro-js-y-dom`):** qué es JavaScript, tipado dinámico, uso de `console.log` y acceso básico al DOM con `document`.
- **Lección 02 (`02-js-en-html`):** vincular scripts al HTML (`<script>` inline y externo), ejecutar código en DevTools → Consola, orden de carga de scripts.
- Capacidad para abrir la consola del navegador y ejecutar fragmentos de JavaScript sin errores de sintaxis básica.

## Contenido

### Objetivos del tema

Esta lección introduce cómo JavaScript guarda datos en memoria mediante variables, qué palabras clave usar para declararlas y qué tipos de valores pueden almacenar. Los objetivos medibles se listan en la sección anterior. El dominio técnico proviene del brief del topic-expert; no se inventan conceptos fuera de ese alcance.

---

### Qué es una variable

Una **variable** es un **identificador** (nombre) que el programa asocia a un **valor en memoria**. Permite guardar datos que cambian —contador, texto del usuario— o referencias a configuración estable —URL de API, objeto de perfil.

Dos operaciones distintas:

- **Declaración:** reserva el nombre (`let x;`, `const PI = 3.14;`).
- **Asignación:** guarda un valor (`x = 5;`). Con `const`, la declaración **debe** incluir inicialización.

JavaScript es de **tipado dinámico**: no declaras el tipo al crear la variable; el tipo lo determina el **valor** en tiempo de ejecución. Con `let`, una misma variable puede apuntar a distintos tipos si reasignas.

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "No confundas el nombre de la variable con el valor que guarda. `let edad = 22` crea un enlace llamado edad que apunta al número 22; el enlace y el valor son cosas distintas."
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  subgraph primitivo [Primitivo — copia por valor]\n    v1[let edad = 22]\n    m1[(valor 22)]\n    v1 --> m1\n  end\n  subgraph referencia [Objeto — copia por referencia]\n    v2[const a = objeto]\n    v3[const b = a]\n    m2[(objeto en memoria)]\n    v2 --> m2\n    v3 --> m2\n  end"
}

<!-- code: javascript -->
```javascript
let contador = 0;           // declaración + asignación
contador = contador + 1;    // reasignación (válida con let)

const URL_API = "https://api.ejemplo.com";
// URL_API = "otro";       // TypeError: no puedes reasignar const
```

<!-- interactive: Callout -->
{
  "title": "Caso real: checkout e-commerce",
  "children": "Un input envía la cantidad como string (\"3\"). Si sumas precio (number) + cantidad (string), JavaScript concatena: 29.99 + \"3\" → \"29.993\". Solución: convertir con Number() o parseInt() y validar con typeof o Number.isNaN."
}

---

### var, let y const

Desde ES6 (2015), el estándar recomienda `let` y `const`. `var` es estilo **legacy** (pre-ES6).

**Regla práctica del curso:**

1. **`const` por defecto** — valores que no reasignarás.
2. **`let` solo cuando necesites reasignar** — contadores, acumuladores, estado temporal.
3. **Evitar `var` en código nuevo** — alcance de función, hoisting confuso, sombreado impredecible.

| Palabra | Reasignar | Redeclarar en mismo ámbito | Alcance | Hoisting inicial |
|---------|-----------|----------------------------|---------|------------------|
| `var` | Sí | Sí | Función | `undefined` |
| `let` | Sí | No | Bloque `{}` | TDZ (error si accedes) |
| `const` | No | No | Bloque `{}` | TDZ (error si accedes) |

**`const` y objetos:** no puedes **reasignar** la variable a otro valor, pero sí **mutar** propiedades o elementos si el valor es un objeto o array. `const` protege la **referencia**, no un clon profundo.

<!-- interactive: CompareTable -->
{
  "headers": ["Palabra", "Reasignar", "Redeclarar", "Alcance", "Hoisting inicial"],
  "rows": [
    ["var", "Sí", "Sí", "Función", "undefined"],
    ["let", "Sí", "No", "Bloque", "TDZ (ReferenceError si accedes)"],
    ["const", "No", "No", "Bloque", "TDZ (ReferenceError si accedes)"]
  ]
}

<!-- code: javascript -->
```javascript
let contador = 0;
contador = contador + 1;

const URL_API = "https://api.ejemplo.com";
// URL_API = "otro"; // TypeError: Assignment to constant variable
```

<!-- code: javascript -->
```javascript
const usuario = { nombre: "Ana", activo: true };
usuario.nombre = "Luis";   // válido: mutación de propiedad
usuario.activo = false;    // válido
// usuario = { nombre: "Pedro" }; // TypeError: reasignación prohibida
```

<!-- code: javascript -->
```javascript
if (true) {
  var xVar = 1;
  let xLet = 2;
}
console.log(xVar); // 1 — var ignora el bloque
// console.log(xLet); // ReferenceError — let respeta el bloque
```

#### Hoisting (“elevación”)

Antes de ejecutar el código línea a línea, el motor **procesa las declaraciones** (hoisting):

- Con **`var`**, la declaración se eleva al inicio de su función y queda inicializada como `undefined`. Por eso `console.log(a); var a = 5;` imprime `undefined`, no error.
- Con **`let` y `const`**, también hay hoisting, pero entran en la **zona muerta temporal (TDZ)**: no puedes leerlas antes de la línea de declaración → `ReferenceError`.

<!-- interactive: StepReveal -->
{
  "title": "Ciclo de vida de una variable",
  "steps": [
    {
      "title": "1. Declaración",
      "content": "El motor registra el identificador (`let`, `const` o `var`) en el ámbito correspondiente (bloque o función)."
    },
    {
      "title": "2. Fase de hoisting",
      "content": "`var` → el identificador existe como `undefined`. `let`/`const` → identificador en TDZ; leer antes de la línea de declaración lanza ReferenceError."
    },
    {
      "title": "3. Inicialización",
      "content": "En la línea de código (`let x = 10`), se asigna el valor. Con `const`, la inicialización es obligatoria en la misma línea."
    },
    {
      "title": "4. Uso",
      "content": "Lectura del valor, reasignación (`let` sí, `const` no). Mutación de propiedades en objetos referenciados por `const` sí está permitida."
    },
    {
      "title": "5. Fin de alcance",
      "content": "Al salir del bloque `{}`, los enlaces de `let`/`const` dejan de existir. `var` persiste fuera del bloque si el ámbito es función."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph fase [Fases al ejecutar un bloque]\n    P[Parseo / compilación]\n    H[Hoisting de declaraciones]\n    E[Ejecución línea a línea]\n  end\n  P --> H --> E\n  H --> V[var: identificador existe como undefined]\n  H --> L[let/const: identificador en TDZ]\n  E --> OK[Tras let/const x = valor: x usable]\n  E --> ERR[Leer x antes de declaración: ReferenceError]"
}

<!-- code: javascript -->
```javascript
console.log(a); // undefined (declaración elevada, aún no asignada)
var a = 5;
console.log(a); // 5
```

<!-- code: javascript -->
```javascript
try {
  console.log(b);
} catch (e) {
  console.error(e.name); // "ReferenceError"
}
let b = 10;
```

<!-- interactive: Callout -->
{
  "title": "Caso real: panel de configuración",
  "children": "Un equipo define const CONFIG = { apiUrl: \"https://v1.api.com\" }. Reasignar CONFIG = {} falla (TypeError). Mutar CONFIG.apiUrl funciona, pero genera confusión en code review si se documentó como inmutable. const protege la referencia, no un clon profundo del objeto."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — contador con let y const",
  "template": "{{blank1}} intentos = 0;\nintentos = intentos + 1;\nintentos = intentos + 1;\nconsole.log(intentos); // debe imprimir 2\n\n{{blank2}} MAX_INTENTOS = 3;\n// MAX_INTENTOS = 5; // ¿qué error esperarías?",
  "blanks": [
    { "id": "blank1", "answer": "let", "placeholder": "palabra clave reasignable" },
    { "id": "blank2", "answer": "const", "placeholder": "palabra clave para constante" }
  ]
}

---

### Tipos de datos principales

JavaScript distingue **valores primitivos** (7 en ES2024) y **objetos** (tipo referencia).

#### Tipos primitivos

| Tipo | Descripción | Ejemplo de uso |
|------|-------------|----------------|
| `string` | Texto entre comillas | Nombre de usuario, mensaje de error |
| `number` | Enteros y decimales (IEEE 754) | Precio, edad, coordenada |
| `boolean` | `true` o `false` | ¿Aceptó términos?, ¿formulario válido? |
| `undefined` | Valor por defecto sin asignar | Variable declarada sin valor |
| `null` | Vacío intencional del programador | “Sin usuario activo” |
| `symbol` | Identificador único (ES6) | Claves de propiedades avanzadas |
| `bigint` | Enteros grandes (`123n`) | IDs que exceden Number.MAX_SAFE_INTEGER |

Los primitivos se **copian por valor** al asignar o pasar como argumento.

#### Objetos (tipo referencia)

Objetos `{}`, arrays `[]`, funciones, instancias de `Date`, etc. Al asignar o pasar un objeto, se copia la **referencia** (apuntan al mismo dato en memoria), no un clon.

#### Inspeccionar tipos con `typeof`

Operador unario que devuelve un string: `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"object"`, `"function"`, `"symbol"`, `"bigint"`.

**Peculiaridad histórica:** `typeof null === "object"`. Para comprobar null usa `valor === null`.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  JS[Valores en JavaScript]\n  JS --> P[Primitivos]\n  JS --> O[Objetos / referencias]\n  P --> S[string]\n  P --> N[number]\n  P --> B[boolean]\n  P --> U[undefined]\n  P --> NU[null]\n  P --> SY[symbol]\n  P --> BI[bigint]\n  O --> OBJ[Object]\n  O --> ARR[Array]\n  O --> FUN[Function]"
}

<!-- code: javascript -->
```javascript
const nombre = "María";
const edad = 22;
const aprobado = true;
let nota;                    // undefined
const sesion = null;         // null intencional
const id = Symbol("id");     // symbol
const grande = 9007199254740991n; // bigint

console.log(typeof nombre);   // "string"
console.log(typeof edad);     // "number"
console.log(typeof aprobado); // "boolean"
console.log(typeof nota);     // "undefined"
console.log(typeof sesion);   // "object" (peculiaridad con null)
console.log(typeof id);       // "symbol"
console.log(typeof grande);   // "bigint"
```

<!-- interactive: StepReveal -->
{
  "title": "typeof en consola — resultado esperado",
  "steps": [
    { "title": "typeof \"María\"", "content": "Devuelve \"string\" — texto entre comillas." },
    { "title": "typeof 22", "content": "Devuelve \"number\" — enteros y decimales comparten el tipo number." },
    { "title": "typeof true", "content": "Devuelve \"boolean\" — solo true o false." },
    { "title": "typeof (variable sin asignar)", "content": "Devuelve \"undefined\" — declarada pero sin valor." },
    { "title": "typeof null", "content": "Devuelve \"object\" — bug histórico del lenguaje. Usa valor === null para comprobar null." }
  ]
}

<!-- code: javascript -->
```javascript
const original = { puntos: 10 };
const copiaReferencia = original;
copiaReferencia.puntos = 99;

console.log(original.puntos);              // 99 — mismo objeto en memoria
console.log(copiaReferencia === original); // true
```

<!-- interactive: Callout -->
{
  "title": "Coerción de tipos (preview lección 04)",
  "children": "JavaScript convierte tipos en contextos como concatenación (\"5\" + 1 → \"51\") o comparaciones sueltas (==). El operador === evita sorpresas al exigir mismo tipo y valor. Profundizarás en la lección 04-operadores-y-decisiones."
}

<!-- code: javascript -->
```javascript
console.log("5" + 1);    // "51" — concatenación
console.log("5" - 1);    // 4 — resta fuerza número
console.log(5 == "5");   // true — coerción con ==
console.log(5 === "5");  // false — sin coerción, tipos distintos
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica con tus palabras por qué se recomienda const por defecto y let solo cuando hace falta reasignar. Incluye qué problema evita const en equipos de desarrollo.",
  "hints": ["Piensa en valores que no cambian: URLs, límites", "const no impide mutar objetos, solo reasignar"],
  "expectedKeywords": ["const", "let", "reasign", "referencia"],
  "successMessage": "Correcto. const comunica intención de estabilidad; let reserva reasignación explícita cuando el valor debe cambiar."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuál es la diferencia entre undefined y null? Da un ejemplo de cuándo usarías cada uno en una app web.",
  "hints": ["undefined = no se asignó valor", "null = vacío intencional del programador"],
  "expectedKeywords": ["undefined", "null", "asign"],
  "successMessage": "Correcto. undefined es el default sin asignar; null indica ausencia deliberada (p. ej. usuarioActivo = null cuando no hay sesión)."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — inspeccionar tipos",
  "template": "const mensaje = \"Hola\";\nconst activo = true;\nlet sinValor;\n\nconsole.log(typeof {{blank1}}, typeof {{blank2}}, typeof {{blank3}});",
  "blanks": [
    { "id": "blank1", "answer": "mensaje", "placeholder": "variable string" },
    { "id": "blank2", "answer": "activo", "placeholder": "variable boolean" },
    { "id": "blank3", "answer": "sinValor", "placeholder": "variable sin asignar" }
  ]
}

---

### Resumen

- Una **variable** es un identificador asociado a un valor en memoria; JavaScript usa **tipado dinámico**.
- **Regla práctica:** `const` por defecto, `let` si reasignas, evita `var` en código nuevo.
- **`const`** impide reasignar el enlace, pero permite **mutar** objetos y arrays referenciados.
- **Hoisting:** `var` → `undefined` antes de la línea; `let`/`const` → TDZ hasta la declaración.
- **Primitivos** se copian por valor; **objetos** se comparten por referencia.
- **`typeof`** inspecciona tipos; `typeof null` devuelve `"object"` — usa `=== null` para null.
- **Coerción** puede sorprender en sumas y comparaciones; preview de `===` en la lección 04.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Predice y luego ejecuta en consola: const a = { n: 1 }; const b = a; b.n = 2; console.log(a.n); — ¿qué imprime y por qué?",
  "hints": ["Objetos se asignan por referencia", "a y b apuntan al mismo objeto en memoria"],
  "expectedKeywords": ["2", "referencia", "mismo"],
  "successMessage": "Correcto. Imprime 2 porque a y b comparten la misma referencia; mutar vía b afecta a a."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Declara let intentos = 0, incrementa dos veces y muestra el resultado con console.log. Luego declara const MAX_INTENTOS = 3 e intenta reasignarla; anota el nombre del error que obtienes.",
  "hints": ["intentos = intentos + 1", "Reasignar const lanza TypeError"],
  "expectedKeywords": ["2", "TypeError", "const"],
  "successMessage": "Correcto. intentos llega a 2; reasignar MAX_INTENTOS produce TypeError: Assignment to constant variable."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena mentalmente la fase de hoisting con let: (a) motor entra en TDZ para x, (b) se ejecuta let x = 10, (c) lectura de x antes de su línea lanza ReferenceError, (d) tras la línea de declaración, x es legible. ¿Cuál ocurre primero y cuál último?",
  "hints": ["Hoisting ocurre antes de ejecutar línea a línea", "TDZ existe desde hoisting hasta la declaración"],
  "expectedKeywords": ["TDZ", "ReferenceError", "declaración"],
  "successMessage": "Correcto. Orden: (a) TDZ al hoisting → (c) error si lees antes → (b) declaración inicializa → (d) x usable."
}

---

## Reto integrador

**“Depurar el módulo de perfil”**

Te pasan este fragmento de un script vinculado al final del `<body>` (lección 02). El QA reporta: contador de visitas siempre `0`, nombre de usuario no actualiza y a veces aparece `undefined` en pantalla.

<!-- code: javascript -->
```javascript
var visitas = 0;
const perfil = { nombre: "Invitado", nivel: 1 };

function registrarVisita() {
  visitas = visitas + 1;
  if (visitas > 5) {
    let visitas = visitas; // intención: “guardar copia” — bug
    console.log("Visitas en bloque:", visitas);
  }
  return visitas;
}

function cambiarNombre(nuevoNombre) {
  perfil = { nombre: nuevoNombre, nivel: perfil.nivel };
}

let usuarioActivo = null;
function obtenerSaludo() {
  if (usuarioActivo) {
    return "Hola, " + usuarioActivo.nombre;
  }
  return "Hola, " + perfil.nombre;
}

// Simulación desde consola
registrarVisita();
registrarVisita();
cambiarNombre("Laura");
console.log(obtenerSaludo());
console.log(typeof usuarioActivo, typeof perfil.nivel);
```

**Tareas:**

1. Identifica al menos **tres errores o malas prácticas** (hoisting/`var`, sombreado con `let`, reasignación de `const`, `null` vs objeto, coerción, etc.).
2. Propón correcciones concretas usando `let`/`const` adecuados y **mutación** de `perfil` en lugar de reasignar.
3. Escribe qué imprimiría `typeof` para `usuarioActivo` y `perfil.nivel` y qué valor debería mostrar `registrarVisita()` tras dos llamadas.
4. Añade una validación: si `nuevoNombre` es string vacío, no mutar y usar `console.warn`.

**Criterio de éxito:** distingue referencia vs reasignación, corrige sombreado en el `if`, explica TDZ/hoisting donde aplique, usa `typeof`/`=== null` correctamente, y el contador global llega a `2` tras dos llamadas.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Redacta tu diagnóstico y correcciones para el módulo de perfil. Incluye: (1) al menos tres bugs o malas prácticas, (2) código corregido para cambiarNombre con mutación, (3) typeof esperado para usuarioActivo y perfil.nivel, (4) validación de string vacío.",
  "hints": [
    "let visitas dentro del if sombrea la variable global — el contador no incrementa como esperas",
    "perfil = {} intenta reasignar const — usa perfil.nombre = nuevoNombre",
    "var visitas → preferir let visitas = 0",
    "typeof null es \"object\"; typeof perfil.nivel es \"number\"",
    "if (nuevoNombre === \"\") { console.warn(...); return; }"
  ],
  "expectedKeywords": ["sombreado", "const", "mutar", "typeof", "let"],
  "successMessage": "Excelente. Has integrado variables, alcance, const vs mutación y typeof en un caso real de depuración."
}

---

## Cierre

Has completado el estudio de variables, hoisting y tipos de datos en JavaScript. Estos conceptos son la base para operadores, decisiones con `if` y manipulación del DOM en lecciones posteriores: sin dominar `let`/`const`, alcance y tipos, los errores de referencia y coerción aparecerán en cada script que escribas.

**Ideas clave para retener:**

- **const por defecto, let si reasignas, evita var** en código nuevo.
- **Hoisting + TDZ:** `var` imprime `undefined` antes de la línea; `let`/`const` lanzan ReferenceError.
- **Primitivos** = copia por valor · **Objetos** = copia por referencia.
- **`typeof null`** devuelve `"object"` — usa `=== null` para comprobar null.
- **Coerción** puede alterar sumas y comparaciones; la lección 04 profundiza operadores y `===`.

**Siguiente paso:** lección `04-operadores-y-decisiones` — operadores aritméticos, lógicos, comparación estricta (`===`) y estructuras de decisión.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Cuál es la forma recomendada de declarar una URL de API que no cambiará?",
      "options": [
        "var URL_API = \"...\"",
        "let URL_API = \"...\"",
        "const URL_API = \"...\"",
        "URL_API = \"...\" sin declarar"
      ],
      "correctIndex": 2,
      "feedback": "const indica que no reasignarás el enlace; es el default para valores estables. Sin declarar es mala práctica y falla en modo estricto."
    },
    {
      "question": "¿Qué ocurre al ejecutar console.log(x); let x = 5;",
      "options": [
        "Imprime undefined",
        "Imprime 5",
        "ReferenceError por zona muerta temporal",
        "SyntaxError"
      ],
      "correctIndex": 2,
      "feedback": "let sí tiene hoisting, pero no puedes leer la variable antes de su declaración. No confundir con var, que imprimiría undefined."
    },
    {
      "question": "Dado const lista = [1, 2]; lista.push(3);, ¿es válido?",
      "options": [
        "No, const prohíbe cualquier cambio",
        "Sí, mutar el array está permitido",
        "Solo si usas let",
        "Solo en modo estricto"
      ],
      "correctIndex": 1,
      "feedback": "const impide reasignar lista a otro array, pero push muta el mismo objeto en memoria — eso es válido."
    },
    {
      "question": "¿Qué devuelve typeof null?",
      "options": [
        "\"null\"",
        "\"undefined\"",
        "\"object\"",
        "\"number\""
      ],
      "correctIndex": 2,
      "feedback": "Es un bug histórico del lenguaje. Para comprobar null usa valor === null, no confíes solo en typeof."
    },
    {
      "question": "Tras const a = { n: 1 }; const b = a; b.n = 2;, ¿cuánto vale a.n?",
      "options": [
        "1 — son copias independientes",
        "2 — comparten la misma referencia",
        "undefined",
        "Error de ejecución"
      ],
      "correctIndex": 1,
      "feedback": "Objetos se asignan por referencia. a y b apuntan al mismo objeto; mutar vía b afecta a a."
    }
  ]
}
