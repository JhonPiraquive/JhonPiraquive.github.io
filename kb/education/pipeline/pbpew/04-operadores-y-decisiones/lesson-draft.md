---
track: pbpew
slug: 04-operadores-y-decisiones
title: "Operadores y control de flujo: if / switch"
order: 4
prerequisites:
  - 01-intro-js-y-dom
  - 02-js-en-html
  - 03-variables-y-tipos
related:
  - 05-bucles-y-errores
source_brief: kb/education/pipeline/pbpew/04-operadores-y-decisiones/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Aplicar** operadores aritméticos (`+`, `-`, `*`, `/`, `%`, `**`) y **explicar** precedencia y el efecto de `+` con strings (coerción).
- **Comparar** valores con `===` y `!==`, **reconocer** cuándo `==` aplica coerción y **justificar** por qué se evita en código nuevo del curso.
- **Identificar** valores truthy y falsy y **usar** operadores lógicos (`&&`, `||`, `!`) con cortocircuito en expresiones condicionales.
- **Escribir** cadenas `if` / `else if` / `else` con validación previa (`Number.isNaN`) para clasificar rangos numéricos.
- **Implementar** `switch` con `break`, **distinguir** fall-through intencional de accidental y **elegir** entre `if` y `switch` según el criterio del problema.

## Prerrequisitos

- **Lección 01 (`01-intro-js-y-dom`):** qué es JavaScript, `console.log`, acceso básico al DOM y ejecución de scripts en el navegador.
- **Lección 02 (`02-js-en-html`):** vincular scripts al HTML, ejecutar código en DevTools → Consola, leer valores de formularios (`<input>`, `<select>`).
- **Lección 03 (`03-variables-y-tipos`):** declarar con `let`/`const`, tipos primitivos, `typeof`, coerción preview (`"5" + 1`), `Number()` y distinción entre número y string.
- Capacidad para ejecutar fragmentos en consola y usar `prompt` para simular entradas de usuario.

## Contenido

### Objetivos del tema

Esta lección introduce los **operadores** que transforman o comparan valores y las **estructuras de decisión** que ejecutan código solo cuando se cumplen condiciones. El dominio técnico proviene del brief del topic-expert; no se inventan conceptos fuera de ese alcance. Los objetivos medibles se listan en la sección anterior.

Un **operador** es un símbolo o palabra que actúa sobre uno o dos operandos (valores o variables) y produce un resultado. En esta lección cubrimos operadores aritméticos, de comparación y lógicos, además de `if` / `else if` / `else` y `switch`.

<!-- interactive: Callout -->
{
  "title": "Regla PBPEW",
  "children": "Preferir siempre === y !== en comparaciones. Usa == solo si dominas la coerción y tienes un motivo documentado. En formularios y APIs los datos suelen llegar como string — la comparación suelta oculta bugs."
}

---

### Operadores aritméticos

Los operadores aritméticos actúan sobre números (y en algunos casos sobre strings con `+`):

| Operador | Nombre | Ejemplo | Resultado |
|----------|--------|---------|-----------|
| `+` | Suma o concatenación | `10 + 3` | `13` |
| `-` | Resta | `10 - 3` | `7` |
| `*` | Multiplicación | `10 * 3` | `30` |
| `/` | División | `10 / 3` | `3.333…` |
| `%` | Módulo (resto entero) | `10 % 3` | `1` |
| `**` | Potencia (ES2016) | `2 ** 8` | `256` |

**Precedencia:** `*` y `/` se evalúan antes que `+` y `-` salvo que uses paréntesis: `(2 + 3) * 4` → `20`. Con strings, `+` concatena: `"10" + 5` → `"105"` (coerción — ver lección 03).

**División por cero:** `10 / 0` → `Infinity` (truthy); no lanza error — valida el divisor si el dominio lo exige.

<!-- code: javascript -->
```javascript
let a = 10 + 3;   // 13
let b = 10 - 3;   // 7
let c = 10 * 3;   // 30
let d = 10 / 3;   // 3.333...
let e = 10 % 3;   // 1 (resto)
let f = 2 ** 8;   // 256
```

<!-- code: javascript -->
```javascript
console.log((2 + 3) * 4);  // 20 — paréntesis primero
console.log("10" + 5);     // "105" — concatenación, no suma
```

#### Comparación estricta vs coerción

Los operadores de comparación devuelven `boolean`:

- **Igualdad estricta:** `===` y `!==` — valor **y** tipo deben coincidir.
- **Igualdad suelta:** `==` y `!=` — aplican coerción; evitar en código nuevo.
- **Relacionales:** `>`, `<`, `>=`, `<=`.

<!-- code: javascript -->
```javascript
console.log(5 === "5");   // false — tipos distintos
console.log(5 == "5");    // true — coerción (evitar)
console.log(10 > 3);      // true
console.log(10 <= 10);    // true
console.log("a" !== "b"); // true
```

<!-- interactive: Callout -->
{
  "title": "Caso real: login corporativo",
  "children": "Un portal comprueba if (rol == 0) con rol desde un select (string). La coerción == oculta bugs: 5 == \"5\" es true. Decisión clave: usar === y comparar contra strings explícitos (rol === \"admin\"). Validar lista blanca de roles."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica por qué === es más seguro que == cuando lees valores de un <input> o de una API. Menciona un ejemplo con número y string.",
  "hints": ["Los inputs devuelven string", "5 === \"5\" vs 5 == \"5\""],
  "expectedKeywords": ["===", "tipo", "string", "coerción"],
  "successMessage": "Correcto. === exige mismo tipo y valor; un input \"5\" no es estrictamente igual al número 5."
}

---

### Operadores lógicos

En contextos booleanos (condición de `if`, operadores lógicos), JavaScript convierte valores a **truthy** o **falsy**.

**Valores falsy:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

Casi todo lo demás es **truthy** (incluye `"0"`, `"false"`, `[]`, `{}`).

| Operador | Nombre | Comportamiento |
|----------|--------|----------------|
| `&&` | AND | Verdadero solo si **ambos** operandos son truthy |
| `\|\|` | OR | Verdadero si **al menos uno** es truthy |
| `!` | NOT | Invierte truthiness a boolean explícito |

**Cortocircuito (short-circuit):** `&&` deja de evaluar si el izquierdo es falsy; `||` si el izquierdo es truthy. Patrón común: `const nombre = input || "invitado";` — valor por defecto cuando `input` es falsy.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  V[Valor en if] --> Q{¿Es falsy?}\n  Q -->|false 0 '' null undefined NaN 0n| F[No entra al if]\n  Q -->|cualquier otro| T[Entra al if]"
}

<!-- code: javascript -->
```javascript
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

const nombre = "" || "invitado";  // "invitado"
const edad = 0 || 18;             // 18 — cuidado: 0 es válido a veces
const usuario = perfil && perfil.nombre; // undefined si perfil es null
```

<!-- code: javascript -->
```javascript
if ("0") console.log("truthy");     // se ejecuta — string "0" es truthy
if (0) console.log("no");           // no se ejecuta — número 0 es falsy
if ([]) console.log("array vacío es truthy"); // se ejecuta
```

<!-- interactive: StepReveal -->
{
  "title": "Evaluación de una condición compuesta",
  "steps": [
    {
      "title": "1. Sustituir variables",
      "content": "edad = 20, vip = false"
    },
    {
      "title": "2. Evaluar edad >= 18",
      "content": "20 >= 18 → true"
    },
    {
      "title": "3. Evaluar vip",
      "content": "false es falsy"
    },
    {
      "title": "4. Aplicar &&",
      "content": "true && false → false"
    },
    {
      "title": "5. Decisión del if",
      "content": "La condición es falsy → se salta el bloque if; se ejecuta else si existe."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  A[Evaluar A] -->|falsy| R[Resultado: A sin evaluar B]\n  A -->|truthy| B[Evaluar B]\n  B --> R2[Resultado: valor de B]"
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "if (\"0\") entra al bloque porque el string \"0\" es truthy; if (0) no. Revisa inputs de <input> que llegan como string. Agrupa condiciones con paréntesis: (a && b) || c."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Lista cinco valores falsy en JavaScript y un valor que parezca \"vacío\" pero sea truthy.",
  "hints": ["Falsy: false, 0, \"\", null, undefined, NaN, 0n", "¿Un array vacío [] es truthy o falsy?"],
  "expectedKeywords": ["false", "0", "null", "undefined", "truthy"],
  "successMessage": "Correcto. Falsy clásicos: false, 0, \"\", null, undefined, NaN. [] y {} son truthy aunque estén vacíos."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — acceso condicional",
  "template": "const edad = 20;\nconst tieneLicencia = true;\n\nif (edad >= 18 {{blank1}} tieneLicencia) {\n  console.log(\"Puede conducir\");\n} else if (edad >= 18 {{blank2}} !tieneLicencia) {\n  console.log(\"Necesita licencia\");\n} else {\n  console.log(\"Menor de edad\");\n}",
  "blanks": [
    { "id": "blank1", "answer": "&&", "placeholder": "operador AND" },
    { "id": "blank2", "answer": "&&", "placeholder": "operador AND" }
  ]
}

---

### if / else if / else

La estructura `if` ejecuta un bloque solo si la condición es **truthy**.

- **`else if`:** prueba condiciones adicionales en orden; la primera truthy gana.
- **`else`:** bloque por defecto cuando ninguna condición anterior fue truthy. Solo puede haber un `else` al final.
- **Bloques `{}`:** aunque una sola línea puede ir sin llaves, en PBPEW y producción se recomiendan siempre llaves.

**Validación antes de comparar rangos:** tras `Number(prompt("..."))`, comprueba `Number.isNaN(nota)` antes de evaluar `nota >= 3`.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  A[Evaluar condición 1] -->|truthy| B[Bloque if]\n  A -->|falsy| C{¿Condición 2?}\n  C -->|truthy| D[Bloque else if]\n  C -->|falsy| E{¿Hay else?}\n  E -->|sí| F[Bloque else]\n  E -->|no| G[Continuar después del if]"
}

<!-- code: javascript -->
```javascript
const nota = Number(prompt("Nota (0-5):"));

if (Number.isNaN(nota)) {
  console.log("No escribiste un número válido");
} else if (nota >= 3.0) {
  console.log("Aprobado");
} else {
  console.log("Debes mejorar");
}
```

<!-- code: javascript -->
```javascript
const temperatura = 15;

if (temperatura < 0) {
  console.log("hielo");
} else if (temperatura <= 30) {
  console.log("templado");
} else {
  console.log("calor");
}
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "No confundas = con === en condiciones: if (x = 5) asigna y el valor asignado es truthy — casi siempre un bug. La condición debe comparar: if (x === 5)."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — validar usuario activo",
  "template": "const usuario = { activo: true };\n\nif (usuario {{blank1}} null {{blank2}} usuario.activo === {{blank3}}) {\n  console.log(\"Bienvenido\");\n}",
  "blanks": [
    { "id": "blank1", "answer": "!==", "placeholder": "comparación estricta" },
    { "id": "blank2", "answer": "&&", "placeholder": "operador lógico" },
    { "id": "blank3", "answer": "true", "placeholder": "boolean" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe un if/else if/else que clasifique una variable temperatura (número): < 0 → \"hielo\", 0–30 → \"templado\", > 30 → \"calor\". Incluye la validación con Number.isNaN si la temperatura viene de prompt.",
  "hints": ["Primero valida Number.isNaN(temperatura)", "Usa else if para el rango medio", "Comparaciones con <, <=, >"],
  "expectedKeywords": ["if", "else if", "temperatura", "Number.isNaN"],
  "successMessage": "Correcto. Validar NaN primero evita mensajes confusos; los rangos se evalúan en orden con else if."
}

---

### switch

`switch` elige una rama según el **valor** de una expresión (`switch (expresión)`). Cada `case` compara con `===` (igualdad estricta).

- **`break`:** sale del `switch`; sin `break`, la ejecución **cae** al siguiente `case` (fall-through).
- **`default`:** cubre valores no listados.
- **Rangos:** `switch` no evalúa `case nota >= 3`; para rangos usa `if/else if`.

**Cuándo `if` vs `switch`:** `if` para rangos, condiciones compuestas o pocos casos; `switch` cuando comparas la misma variable contra muchos valores discretos constantes.

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "if / else if", "switch"],
  "rows": [
    ["Mejor para", "Rangos, condiciones compuestas", "Un valor vs muchas constantes"],
    ["Comparación", "Cualquier expresión booleana", "Igualdad estricta === con case"],
    ["Riesgo típico", "Orden de condiciones incorrecto", "Olvidar break"],
    ["Rama por defecto", "else final", "default"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  S[switch expresión] --> M{Coincide case}\n  M -->|sí| E1[Ejecutar código del case]\n  E1 --> B{¿break?}\n  B -->|sí| OUT[Salir del switch]\n  B -->|no| E2[Caer al siguiente case — fall-through]\n  E2 --> B\n  M -->|no| D[default o siguiente case]\n  D --> OUT"
}

<!-- code: javascript -->
```javascript
const dia = "lunes";

switch (dia) {
  case "lunes":
  case "miércoles":
    console.log("Hay clase de PBPEW");
    break;
  case "viernes":
    console.log("Repaso");
    break;
  default:
    console.log("Otro día");
}
```

<!-- code: javascript -->
```javascript
let mensaje = "";
const codigo = "A";

switch (codigo) {
  case "A":
    mensaje = "Opción A";
    // falta break — cae a B
  case "B":
    mensaje += " + Opción B";
    break;
}
console.log(mensaje); // "Opción A + Opción B" — bug típico
```

<!-- interactive: StepReveal -->
{
  "title": "Ejecución de switch",
  "steps": [
    {
      "title": "1. Calcular expresión",
      "content": "Se evalúa el valor dentro de switch (expresión), p. ej. dia = \"lunes\"."
    },
    {
      "title": "2. Buscar case coincidente",
      "content": "Se salta al case cuyo valor coincide con ===. Si no hay coincidencia, se va a default."
    },
    {
      "title": "3. Ejecutar líneas",
      "content": "Se ejecuta el código del case encontrado línea a línea."
    },
    {
      "title": "4. ¿Hay break?",
      "content": "Con break → sale del switch. Sin break → cae al siguiente case (fall-through)."
    },
    {
      "title": "5. default",
      "content": "Si ningún case coincide, se ejecuta default si existe; si no, el switch termina sin acción."
    }
  ]
}

<!-- interactive: Callout -->
{
  "title": "Caso real: e-commerce — descuento duplicado",
  "children": "Un switch sin break tras case \"electronica\" hace que el producto reciba el descuento de \"hogar\" también. Cada case que no debe caer al siguiente necesita break. Si varios casos comparten acción, agrúpalos sin código entre ellos (fall-through intencional)."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el switch — fin de semana",
  "template": "const dia = \"sabado\";\n\nswitch (dia) {\n  case \"sabado\":\n  case \"domingo\":\n    console.log(\"Fin de semana\");\n    {{blank1}}\n  default:\n    console.log(\"Día laboral\");\n}",
  "blanks": [
    { "id": "blank1", "answer": "break", "placeholder": "salir del switch" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Predice y ejecuta en consola: console.log(0 == false, 0 === false, \"\" == false, \"\" === false). Anota qué pares usan coerción y cuáles no.",
  "hints": ["== aplica coerción", "=== no convierte tipos", "false se convierte a 0 con =="],
  "expectedKeywords": ["true", "false", "coerción", "==="],
  "successMessage": "Correcto. 0 == false y \"\" == false son true (coerción); con === ambos son false."
}

---

### Resumen

- Los **operadores aritméticos** transforman números; `+` con string concatena; respeta precedencia y paréntesis.
- **`===` y `!==`** comparan valor y tipo; evita `==` en código nuevo del curso.
- **Truthy/falsy** determinan si una condición entra al `if`; `"0"` y `[]` son truthy; `0` y `""` son falsy.
- **`&&`, `||`, `!`** combinan condiciones; el cortocircuito evita evaluar el segundo operando cuando no hace falta.
- **`if` / `else if` / `else`** clasifican rangos y validan con `Number.isNaN` antes de comparar.
- **`switch`** compara con `===`; cada `case` necesita `break` salvo fall-through intencional; `default` cubre el resto.
- **`if` vs `switch`:** rangos y condiciones compuestas → `if`; un valor vs muchas constantes → `switch`.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena la evaluación de edad >= 18 && tieneTicket === true: (a) si el primer operando es falsy, && cortocircuita sin evaluar el segundo, (b) se evalúa edad >= 18, (c) si es truthy, se evalúa tieneTicket === true, (d) el resultado es true solo si ambos son truthy. ¿Cuál es el orden correcto?",
  "hints": ["Primero se evalúa la expresión izquierda de &&", "Cortocircuito solo si la izquierda es falsy"],
  "expectedKeywords": ["b", "c", "cortocircuito", "&&"],
  "successMessage": "Correcto. Orden: (b) edad >= 18 → si falsy (a) cortocircuita; si truthy (c) tieneTicket === true → (d) ambos truthy dan true."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — operadores aritméticos",
  "template": "let puntos = 17;\nconsole.log(puntos {{blank1}} 5);   // resto: 2\nconsole.log(puntos {{blank2}} 2);   // potencia: 289",
  "blanks": [
    { "id": "blank1", "answer": "%", "placeholder": "módulo" },
    { "id": "blank2", "answer": "**", "placeholder": "potencia" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja o describe el flujo de if (a) { ... } else if (b) { ... } else { ... } cuando a es falsy y b es truthy. ¿Qué bloque se ejecuta?",
  "hints": ["Se evalúan en orden", "La primera condición truthy gana"],
  "expectedKeywords": ["else if", "b", "falsy", "truthy"],
  "successMessage": "Correcto. a falsy → se salta el if; b truthy → se ejecuta el bloque else if; no se llega al else."
}

---

## Reto integrador

**“Motor de tarifas del gimnasio”**

Un script en la página de inscripción recibe (simulados en consola):

<!-- code: javascript -->
```javascript
const edad = Number(prompt("Edad:"));
const plan = prompt("Plan (basico/premium/familiar):");
const esEstudiante = prompt("¿Estudiante? (si/no)") === "si";
```

**Requisitos:**

1. Si `edad` no es un número válido (`Number.isNaN`), mostrar error y no calcular precio.
2. Con `if/else if/else`, asignar precio base: menor de 12 → no permitido (mensaje y salir); 12–17 → 25; 18–59 → 40; 60 o más → 30.
3. Con `switch (plan)`, aplicar multiplicador al precio base: `basico` ×1, `premium` ×1.5, `familiar` ×2.2; plan desconocido → mensaje de error.
4. Si `esEstudiante` es verdadero **y** `edad` está entre 18 y 25 inclusive, restar 5 al precio final (mínimo 0) usando operadores lógicos y aritméticos.
5. Mostrar un resumen: `"Plan X, edad Y, total Z"` con `console.log`.

**Bonus:** reescribe la parte del `plan` con `if` y explica en una línea cuándo preferirías `switch`.

**Criterio de éxito:** usa `===` en comparaciones de strings, valida `NaN`, combina `if` para rangos y `switch` para valores discretos, aplica descuento solo cuando ambas condiciones (`&&`) se cumplen, y el precio nunca es negativo.

<!-- code: javascript -->
```javascript
const edad = Number(prompt("Edad:"));
const plan = prompt("Plan (basico/premium/familiar):");
const esEstudiante = prompt("¿Estudiante? (si/no)") === "si";

if (Number.isNaN(edad)) {
  console.log("Error: edad no válida");
} else if (edad < 12) {
  console.log("No permitido: edad mínima 12 años");
} else {
  let precioBase;

  if (edad <= 17) {
    precioBase = 25;
  } else if (edad <= 59) {
    precioBase = 40;
  } else {
    precioBase = 30;
  }

  let multiplicador;
  switch (plan) {
    case "basico":
      multiplicador = 1;
      break;
    case "premium":
      multiplicador = 1.5;
      break;
    case "familiar":
      multiplicador = 2.2;
      break;
    default:
      console.log("Error: plan desconocido");
      multiplicador = null;
  }

  if (multiplicador !== null) {
    let total = precioBase * multiplicador;

    if (esEstudiante && edad >= 18 && edad <= 25) {
      total = total - 5;
      if (total < 0) total = 0;
    }

    console.log(`Plan ${plan}, edad ${edad}, total ${total}`);
  }
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa o adapta el motor de tarifas del gimnasio. Verifica con: edad 20, plan premium, estudiante si → total esperado 55 (40×1.5−5). Explica qué operadores usaste en cada paso.",
  "hints": [
    "Number.isNaN(edad) antes de rangos",
    "switch (plan) con break en cada case",
    "Descuento: esEstudiante && edad >= 18 && edad <= 25",
    "Math.max(0, total) o if (total < 0) total = 0"
  ],
  "expectedKeywords": ["switch", "===", "&&", "Number.isNaN", "break"],
  "successMessage": "Excelente. Has integrado validación, rangos con if, valores discretos con switch y descuento condicional con &&."
}

---

## Cierre

Has completado el estudio de operadores y estructuras de decisión en JavaScript. Estos conceptos permiten que tus scripts reaccionen a datos del usuario, validen formularios y apliquen reglas de negocio — base indispensable antes de bucles y manejo de errores en la lección 05.

**Ideas clave para retener:**

- **`===` y `!==`** por defecto; la coerción de `==` oculta bugs con strings de formularios.
- **Truthy/falsy** no coincide con “vacío visual”: `"0"` y `[]` son truthy.
- **`&&` y `||`** cortocircuitan; úsalos para valores por defecto y condiciones compuestas.
- **`if`** para rangos y validación; **`switch`** para un valor contra muchas constantes — no olvides `break`.
- **Valida `Number.isNaN`** antes de comparar rangos numéricos.

**Siguiente paso:** lección `05-bucles-y-errores` — bucles `for`/`while` y `try/catch`.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué imprime console.log(5 === \"5\");?",
      "options": [
        "true",
        "false",
        "\"5\"",
        "Error de sintaxis"
      ],
      "correctIndex": 1,
      "feedback": "=== exige mismo tipo y valor. Un número y un string nunca son estrictamente iguales aunque se \"vean\" igual."
    },
    {
      "question": "¿Cuál de estos valores es falsy en JavaScript?",
      "options": [
        "\"0\"",
        "[]",
        "0",
        "{}"
      ],
      "correctIndex": 2,
      "feedback": "El número 0 es falsy. El string \"0\", arrays y objetos vacíos son truthy — un error frecuente con datos de formularios."
    },
    {
      "question": "¿Qué hace falta tras un case si no quieres que la ejecución continúe en el siguiente case?",
      "options": [
        "return obligatorio en todo script",
        "break",
        "else",
        "continue"
      ],
      "correctIndex": 1,
      "feedback": "Sin break, el switch hace fall-through y ejecuta los casos siguientes. continue aplica a bucles, no a switch (salvo en contextos de loop anidados)."
    },
    {
      "question": "Dado const ok = edad >= 18 && tieneDocumento;, ¿cuándo ok es true?",
      "options": [
        "Cuando al menos una condición es verdadera",
        "Solo cuando ambas condiciones son truthy",
        "Cuando edad es exactamente 18",
        "Siempre que tieneDocumento exista como variable"
      ],
      "correctIndex": 1,
      "feedback": "&& es AND lógico: las dos expresiones deben ser truthy. Si la primera es falsy, la segunda ni se evalúa (cortocircuito)."
    },
    {
      "question": "¿Qué operador devuelve el resto de dividir 10 entre 3?",
      "options": [
        "/",
        "%",
        "**",
        "//"
      ],
      "correctIndex": 1,
      "feedback": "% es módulo: 10 % 3 → 1. / devuelve cociente decimal; ** es potencia."
    }
  ]
}
