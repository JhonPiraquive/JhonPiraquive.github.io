---
track: pbpew
slug: 05-bucles-y-errores
title: "Bucles: for, while, do-while · break, continue · try/catch"
order: 5
prerequisites:
  - 01-intro-js-y-dom
  - 02-js-en-html
  - 03-variables-y-tipos
  - 04-operadores-y-decisiones
related:
  - 04-operadores-y-decisiones
  - 06-funciones-y-callbacks
source_brief: kb/education/pipeline/pbpew/05-bucles-y-errores/brief.md
source_legacy: kb/archive/legacy-pages/teaching/pbpew/05-bucles-y-errores.html
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Escribir** bucles `for`, `while` y `do...while` eligiendo la estructura adecuada según el número de iteraciones y si el cuerpo debe ejecutarse al menos una vez.
- **Usar** `break` y `continue` para controlar el flujo dentro de un bucle sin confundir sus efectos.
- **Reconocer** bucles infinitos por lógica incorrecta y **proponer** condiciones de salida o límites de seguridad.
- **Aplicar** `try / catch / finally` y `throw new Error(...)` para atrapar errores en tiempo de ejecución y evitar que un fallo detenga toda la interfaz.
- **Combinar** bucles con condicionales y operadores de la lección 04 (`if`, `===`, `&&`, `||`) en patrones reales como acumuladores, filtros y reintentos limitados.

## Prerrequisitos

- **Lección 01 (`01-intro-js-y-dom`):** qué es JavaScript, `console.log`, acceso básico al DOM.
- **Lección 02 (`02-js-en-html`):** vincular scripts, ejecutar código en la consola del navegador.
- **Lección 03 (`03-variables-y-tipos`):** `let`/`const`, alcance de bloque, tipos primitivos y `typeof`.
- **Lección 04 (`04-operadores-y-decisiones`):** operadores aritméticos, comparación estricta (`===`), lógicos (`&&`, `||`) y estructuras `if/else` dentro de bloques de código.

## Contenido

### Objetivos del tema

Esta lección introduce **bucles** para repetir bloques de código sin duplicarlos, y **manejo de errores** con `try/catch` para que un fallo puntual no congele la pestaña ni deje la UI sin respuesta. Los bucles se combinan con condicionales de la lección anterior; en la lección 06 envolverán llamadas a funciones y callbacks.

Un **bucle (loop)** repite un bloque mientras se cumpla una condición o hasta recorrer un rango. Cada **iteración** es una pasada del bucle; el contador o la condición deben avanzar hacia una salida clara.

<!-- interactive: Callout -->
{
  "title": "Caso real: dashboard con pestaña congelada",
  "children": "Un panel ejecutaba while (true) { refrescarDatos(); } esperando datos siempre actualizados. Los navegadores quedaron al 100 % CPU y el equipo revirtió el commit. Moraleja: todo bucle necesita condición de salida, break o delegar la repetición a APIs asíncronas (setInterval, eventos — lecciones posteriores)."
}

---

### Bucle `for`

El bucle **`for`** es ideal cuando conoces **cuántas veces** repetir o tienes un **rango claro** (contador de 0 a N, recorrer índices).

Sintaxis clásica:

<!-- code: javascript -->
```javascript
for (inicialización; condición; actualización) {
  // cuerpo — se ejecuta mientras la condición sea verdadera
}
```

**Partes del `for`:**

1. **Inicialización** — suele declarar el contador (`let i = 0`).
2. **Condición** — se evalúa **antes** de cada iteración; si es falsa, el bucle termina.
3. **Actualización** — se ejecuta al **final** de cada iteración (`i++`, `i += 2`).

<!-- interactive: StepReveal -->
{
  "title": "Anatomía del bucle for",
  "steps": [
    {
      "title": "1. Inicialización",
      "content": "Se ejecuta una sola vez al entrar al bucle. Ejemplo: let i = 0."
    },
    {
      "title": "2. Evaluar condición",
      "content": "Antes de cada iteración se comprueba la condición (p. ej. i < 5). Si es falsa, el bucle termina."
    },
    {
      "title": "3. Ejecutar cuerpo",
      "content": "Si la condición es verdadera, se ejecuta el bloque entre llaves."
    },
    {
      "title": "4. Actualización",
      "content": "Al final de la iteración se ejecuta la actualización (p. ej. i++). Luego vuelve al paso 2."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  start([Inicio for]) --> init[\"inicialización: let i = 0\"]\n  init --> cond{\"¿i < límite?\"}\n  cond -->|Sí| body[\"ejecutar cuerpo\"]\n  body --> update[\"actualización: i++\"]\n  update --> cond\n  cond -->|No| end([Fin del bucle])"
}

<!-- code: javascript -->
```javascript
for (let i = 0; i < 3; i++) {
  console.log("iteración", i);
}
// 0, 1, 2
```

**Patrón acumulador** — sumar valores en un bucle:

<!-- code: javascript -->
```javascript
let suma = 0;
for (let i = 1; i <= 5; i++) {
  suma += i;
}
console.log(suma); // 15
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente: off-by-one",
  "children": "Al indexar arrays usa i < array.length, no i <= array.length. El último índice válido es length - 1; un índice extra devuelve undefined (preview lección 7)."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuándo elegirías for en lugar de while? Responde con un ejemplo concreto (rango, contador o número fijo de iteraciones).",
  "hints": ["Piensa en cuántas vueltas conoces de antemano", "Contador let i = 0; i < N; i++"],
  "expectedKeywords": ["rango", "contador", "iteraciones", "conocido"],
  "successMessage": "Correcto. for encaja cuando el número de repeticiones o el rango están definidos (p. ej. imprimir pares del 0 al 8, sumar del 1 al 5)."
}

---

### Bucle `while`

El bucle **`while`** repite **mientras** la condición sea verdadera. La condición se comprueba **antes** de cada iteración: si es falsa desde el inicio, el cuerpo **no se ejecuta nunca**.

<!-- code: javascript -->
```javascript
let n = 0;
while (n < 3) {
  console.log(n);
  n++; // crítico: avanzar hacia la salida
}
```

Úsalo cuando la condición es más **abierta**: “seguir hasta que…”, leer input, esperar un dato o reintentar hasta un límite.

<!-- interactive: Callout -->
{
  "title": "Error frecuente: bucle infinito",
  "children": "let n = 0; while (n < 5) { console.log(n); } — olvidaste n++ y n nunca cambia. En el navegador puede congelar la pestaña. Siempre debe haber una salida: condición que cambie, break o límite de seguridad."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe un while que cuente de 10 a 1 (cuenta regresiva) e imprima cada número con console.log.",
  "hints": ["Empieza con let n = 10", "Condición n >= 1 o n > 0", "Decrementa con n--"],
  "expectedKeywords": ["while", "10", "n--", "console.log"],
  "successMessage": "Correcto. Ejemplo: let n = 10; while (n >= 1) { console.log(n); n--; }"
}

---

### Bucle `do...while`

El bucle **`do...while`** evalúa la condición **después** del cuerpo. Garantiza **al menos una ejecución** aunque la condición sea falsa al principio — útil en menús o acciones que deben correr al menos una vez (pedir contraseña y reintentar).

<!-- code: javascript -->
```javascript
let k = 0;
do {
  console.log("al menos una vez", k);
  k++;
} while (k < 0); // condición falsa, pero el cuerpo ya corrió una vez
```

<!-- interactive: CompareTable -->
{
  "headers": ["Bucle", "Cuándo", "Condición se evalúa", "Mínimo de ejecuciones"],
  "rows": [
    ["for", "Rango o contador conocido", "Antes de cada iteración", "0 si condición inicial es falsa"],
    ["while", "Condición abierta (\"hasta que…\")", "Antes de cada iteración", "0"],
    ["do...while", "Al menos una ejecución necesaria", "Después del cuerpo", "1"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  Q1{¿Número de iteraciones conocido?}\n  Q1 -->|Sí| FOR[for]\n  Q1 -->|No| Q2{¿Debe ejecutarse al menos 1 vez?}\n  Q2 -->|Sí| DO[do...while]\n  Q2 -->|No| WH[while]"
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué garantiza do...while que while no garantiza? Da un escenario de UI donde importe.",
  "hints": ["¿Cuándo se evalúa la condición?", "Menús, formularios que deben mostrarse al menos una vez"],
  "expectedKeywords": ["al menos", "una vez", "después"],
  "successMessage": "Correcto. do...while ejecuta el cuerpo mínimo una vez antes de comprobar la condición; while puede no ejecutarse nunca si la condición es falsa al inicio."
}

---

### `break` y `continue`

Dos palabras clave controlan el flujo **dentro** de un bucle (`for`, `while`, `do...while`) o `switch`:

- **`break`** — sale **inmediatamente** del bucle más interno. Las iteraciones restantes no se ejecutan.
- **`continue`** — salta el resto del cuerpo en la iteración actual y pasa a la **siguiente** iteración.

<!-- interactive: CompareTable -->
{
  "headers": ["Palabra clave", "Efecto en la iteración actual", "Efecto en el bucle"],
  "rows": [
    ["break", "Detiene de inmediato", "Termina el bucle"],
    ["continue", "Salta el resto del cuerpo", "Sigue con la siguiente iteración"]
  ]
}

<!-- code: javascript -->
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // salta el 2
  if (i === 4) break;    // sale antes del 4
  console.log(i);
}
// Imprime: 0, 1, 3
```

**Combinar bucle + condición (lección 04):**

<!-- code: javascript -->
```javascript
const notas = [4, 2, 5, 0, 3];
let aprobadas = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 3) continue;
  aprobadas++;
}
console.log("Aprobadas:", aprobadas); // 3
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  iter([Nueva iteración]) --> check{if dentro del cuerpo}\n  check -->|continue| next[Siguiente iteración]\n  check -->|break| exit([Sale del bucle])\n  check -->|ninguno| rest[Resto del cuerpo]\n  rest --> next\n  next --> iter"
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "break y continue solo son válidos dentro de for, while, do...while o switch. Fuera de un bucle provocan SyntaxError. No confundas break (salir del bucle) con continue (saltar a la siguiente vuelta)."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Usando continue, escribe un for que imprima del 1 al 6 excepto el 3 y el 5.",
  "hints": ["if (i === 3 || i === 5) continue;", "for (let i = 1; i <= 6; i++)"],
  "expectedKeywords": ["continue", "3", "5", "for"],
  "successMessage": "Correcto. continue ignora el resto del cuerpo en esas iteraciones; el bucle sigue con 4 y 6."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el bucle for",
  "template": "for (let i = 0; i {{blank1}} 5; i{{blank2}}) {\n  console.log(i);\n}",
  "blanks": [
    { "id": "blank1", "answer": "<", "placeholder": "operador" },
    { "id": "blank2", "answer": "++", "placeholder": "actualización" }
  ]
}

---

### Bucles infinitos (reconocer y evitar)

Un **bucle infinito** ocurre cuando la condición nunca se vuelve falsa: olvidar incrementar el contador, condición siempre `true`. El parser no lo detecta — es un error de **lógica**, no de sintaxis.

<!-- code: javascript -->
```javascript
// NO ejecutar en producción sin límite
let x = 0;
while (true) {
  if (x === 3) break; // salida de emergencia
  console.log(x);
  x++;
}
```

En producción, prefiere condiciones que cambien naturalmente o delega repetición periódica a `setInterval` y eventos (lecciones posteriores).

<!-- interactive: Callout -->
{
  "title": "Caso real: checkout bloqueado",
  "children": "Un script calculaba precioFinal = total / cantidadCupones. Con cantidadCupones = 0 el motor falla o devuelve Infinity y el botón Pagar nunca se habilita. Solución: validar con if antes de dividir y/o try/catch para mostrar feedback al usuario."
}

---

### `try / catch / finally` y `throw`

**Errores en tiempo de ejecución (runtime):** el código es sintácticamente válido pero falla al ejecutarse (dividir por cero, acceder a propiedad de `null`, variable no declarada). Sin manejo, el script se detiene en ese punto.

**Tipos habituales:**

| Error | Causa típica |
|-------|--------------|
| `SyntaxError` | Código mal escrito; detectado al parsear |
| `ReferenceError` | Variable no definida |
| `TypeError` | Operación inválida para ese tipo (`null.foo`) |
| `RangeError` | Valor fuera de rango |

El objeto `Error` y sus subclases llevan `.message` y `.name`.

**Bloques:**

- **`try { ... }`** — envuelve código que puede fallar.
- **`catch (err) { ... }`** — se ejecuta si hay excepción; lee `err.message` o `err.name`.
- **`finally { ... }`** — se ejecuta **siempre** (con o sin error); útil para limpieza o logging.
- **`throw new Error("mensaje")`** — lanza un error a propósito para validar reglas (división por cero, dato inválido).

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  A[Entrar a try] --> B{¿Error en try?}\n  B -->|Sí| C[catch: manejar err]\n  B -->|No| D[Saltar catch]\n  C --> E[finally]\n  D --> E\n  E --> F[Continuar después del bloque]"
}

<!-- code: javascript -->
```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("División por cero");
  }
  return a / b;
}

try {
  console.log(dividir(4, 0));
} catch (err) {
  console.error("No se pudo dividir:", err.message);
} finally {
  console.log("Esto se ejecuta siempre");
}
```

**Validación + throw** en lugar de fallar en silencio:

<!-- code: javascript -->
```javascript
function parseEdad(texto) {
  const n = Number(texto);
  if (Number.isNaN(n) || n < 0) {
    throw new Error("Edad inválida: " + texto);
  }
  return n;
}
```

**Errores típicos (demostración controlada — no ejecutar sin comentar):**

<!-- code: javascript -->
```javascript
// ReferenceError — variable no declarada
// console.log(noExiste);

// TypeError — operación inválida
// const n = null;
// n.toUpperCase();
```

<!-- interactive: Callout -->
{
  "title": "Buenas prácticas en catch",
  "children": "Evita catch (e) {} vacío: oculta fallos y dificulta depuración. Al menos console.error(e.message) o un mensaje claro al usuario. Usa throw new Error(...) en lugar de throw \"texto\" para conservar stack trace."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa dividir(a, b) con throw si b === 0 y llámala dentro de try/catch mostrando err.message en consola.",
  "hints": ["if (b === 0) throw new Error(...)", "try { dividir(4, 0); } catch (err) { console.error(err.message); }"],
  "expectedKeywords": ["throw", "try", "catch", "message"],
  "successMessage": "Correcto. throw interrumpe el flujo; catch recupera el control y permite loguear o informar sin tumbar toda la UI."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa try/catch",
  "template": "{{blank1}} {\n  risky();\n} catch (e) {\n  console.error(e.{{blank2}});\n}",
  "blanks": [
    { "id": "blank1", "answer": "try", "placeholder": "bloque que puede fallar" },
    { "id": "blank2", "answer": "message", "placeholder": "propiedad del error" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué un catch vacío es mala práctica? ¿Qué harías en su lugar en una app web?",
  "hints": ["Depuración y soporte", "console.error o mensaje al usuario"],
  "expectedKeywords": ["oculta", "depur", "mensaje", "error"],
  "successMessage": "Correcto. Un catch vacío traga el error; mejor loguear err.message y mostrar feedback recuperable al usuario."
}

---

### Resumen

- Un **bucle** repite un bloque; cada **iteración** debe avanzar hacia una **salida** clara.
- **`for`** → rango o contador conocido · **`while`** → condición abierta · **`do...while`** → al menos una ejecución.
- **`break`** termina el bucle · **`continue`** salta a la siguiente iteración.
- **Bucle infinito** = condición que nunca cambia; puede congelar la pestaña — siempre incrementa contadores o usa `break`.
- **`try/catch/finally`** atrapa errores runtime; **`throw new Error(...)`** valida reglas de negocio.
- En PBPEW el foco es **atrapar, loguear y no tumbar toda la UI**; combina validación preventiva (`if`) con recuperación (`catch`).
- **Preview lección 06:** los bucles envolverán llamadas a funciones y callbacks (`repetir(n, fn)`).

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar bucles, control de flujo y manejo de errores.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuántas veces se ejecuta el cuerpo de este while? Explica: let x = 5; while (x < 5) { console.log(x); x++; }",
  "hints": ["¿Cuándo se evalúa la condición?", "Compara con do...while"],
  "expectedKeywords": ["cero", "0", "falsa", "inicio"],
  "successMessage": "Correcto. Cero veces: x < 5 es falsa desde el inicio (x es 5). A diferencia de do...while, while no garantiza ninguna ejecución."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Predice la salida antes de ejecutar: for (let i = 0; i < 3; i++) { if (i === 1) break; console.log(i); }",
  "hints": ["break sale del bucle en i === 1", "¿Se alcanza console.log cuando i es 1?"],
  "expectedKeywords": ["0", "break", "uno"],
  "successMessage": "Correcto. Solo imprime 0. En i === 1, break sale antes del console.log; nunca se imprime 1 ni 2."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo try/catch: (a) se ejecuta catch si hay error, (b) se ejecuta el bloque try, (c) se ejecuta finally si existe, (d) si no hay error, catch se omite. ¿Orden lógico de ejecución?",
  "hints": ["try siempre entra primero", "finally siempre al final del bloque"],
  "expectedKeywords": ["try", "catch", "finally", "b"],
  "successMessage": "Correcto. Orden: (b) try → (a) catch solo si hay error, o (d) se omite catch → (c) finally siempre."
}

---

## Reto integrador

**“Validador de PIN con reintentos”**

Un cajero simulado en JavaScript debe pedir un PIN correcto (`const PIN_CORRECTO = "1234"`). Reglas:

1. Máximo **3 intentos** usando un bucle (`for` o `while` con contador).
2. Si el intento es **vacío** o no numérico, usar `continue` **sin consumir** intento.
3. Si el PIN es correcto, imprimir “Acceso concedido” y salir con `break`.
4. Si tras 3 intentos fallidos no acertó, imprimir “Tarjeta bloqueada”.
5. Envolver la lectura simulada en `try/catch`: una función `leerPinSimulado(valor)` lanza `Error` si `valor` es `null` (simula fallo de hardware).
6. En `catch`, mostrar “Error de lectura, reintente” y **no** contar ese intento como fallo de PIN.

**Datos de prueba sugeridos:** `["", "12ab", "0000", "1234"]` o entrada por `prompt` en consola del navegador.

**Esqueleto de referencia:**

<!-- code: javascript -->
```javascript
const PIN_CORRECTO = "1234";
const MAX_INTENTOS = 3;
let accesoConcedido = false;

function leerPinSimulado(valor) {
  if (valor === null) {
    throw new Error("Fallo de lectura del teclado");
  }
  return valor;
}

function esPinValido(texto) {
  return texto !== "" && /^\d+$/.test(texto);
}

// Simula entradas (reemplaza por prompt en navegador)
const entradas = ["", "12ab", null, "0000", "1234"];
let indiceEntrada = 0;
let intentosFallidos = 0;

while (intentosFallidos < MAX_INTENTOS && !accesoConcedido) {
  const valor = entradas[indiceEntrada++] ?? "0000";

  try {
    const pin = leerPinSimulado(valor);

    if (!esPinValido(pin)) {
      console.log("Entrada inválida, reintente");
      continue; // no consume intento fallido
    }

    if (pin === PIN_CORRECTO) {
      console.log("Acceso concedido");
      accesoConcedido = true;
      break;
    }

    intentosFallidos++;
    console.log(`PIN incorrecto (${intentosFallidos}/${MAX_INTENTOS})`);
  } catch (err) {
    console.log("Error de lectura, reintente");
    // no incrementar intentosFallidos
  }
}

if (!accesoConcedido && intentosFallidos >= MAX_INTENTOS) {
  console.log("Tarjeta bloqueada");
}
```

**Criterio de éxito:** usa al menos un bucle, `break` o `continue` con propósito claro, `throw` + `try/catch`, límite de 3 intentos fallidos de PIN, mensajes distintos para éxito, bloqueo y error de lectura.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa o completa el validador de PIN según las 6 reglas. Documenta qué hace continue en entradas inválidas y qué hace catch cuando valor es null.",
  "hints": [
    "continue cuando pin vacío o no numérico — no sumes al contador de fallos",
    "break tras Acceso concedido",
    "leerPinSimulado(null) → throw; catch → Error de lectura, reintente",
    "Tras 3 fallos de PIN (no lectura) → Tarjeta bloqueada"
  ],
  "expectedKeywords": ["break", "continue", "try", "catch", "throw", "3"],
  "successMessage": "Excelente. Has integrado bucles, control de flujo y manejo de errores en un flujo con reintentos limitados — patrón habitual en formularios y APIs."
}

---

## Cierre

Has completado el estudio de bucles y manejo de errores en JavaScript. Estas estructuras evitan duplicar código, controlan repeticiones con límites claros y permiten que un fallo puntual no deje la interfaz muerta.

**Ideas clave para retener:**

- **`for`** cuando conoces el rango · **`while`** para condiciones abiertas · **`do...while`** cuando necesitas al menos una ejecución.
- **`break`** sale del bucle · **`continue`** salta a la siguiente vuelta — no los intercambies.
- Todo bucle necesita **salida**; los infinitos son incidentes reales en producción.
- **`try/catch/finally`** + **`throw new Error(...)`** para validar y recuperarte sin detener todo el script.
- Combina bucles con **`if`** y operadores de la lección 04 para filtrar (`continue`) o parar (`break`).

**Siguiente paso:** lección `06-funciones-y-callbacks` — funciones llamadas desde bucles, callbacks y el patrón `repetir(n, fn)`.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Cuántas veces se ejecuta el cuerpo de este while? let x = 5; while (x < 5) { console.log(x); x++; }",
      "options": [
        "Una vez",
        "Infinitas veces",
        "Cero veces",
        "Cinco veces"
      ],
      "correctIndex": 2,
      "feedback": "La condición x < 5 es falsa desde el inicio (x es 5), así que el cuerpo del while nunca se ejecuta. A diferencia de do...while, no hay ejecución garantizada."
    },
    {
      "question": "¿Qué hace continue dentro de un bucle?",
      "options": [
        "Termina el bucle por completo",
        "Salta al siguiente paso de actualización del for y la siguiente iteración",
        "Reinicia el programa",
        "Solo funciona en switch"
      ],
      "correctIndex": 1,
      "feedback": "continue abandona la iteración actual y vuelve al inicio del bucle (condición o actualización). Para salir del bucle entero se usa break."
    },
    {
      "question": "¿Cuál es la salida de este código? for (let i = 0; i < 3; i++) { if (i === 1) break; console.log(i); }",
      "options": [
        "0, 1, 2",
        "0, 1",
        "0",
        "1, 2"
      ],
      "correctIndex": 2,
      "feedback": "Imprime 0. En i === 1, break sale del bucle antes de imprimir 1. Solo se alcanza un console.log con i === 0."
    },
    {
      "question": "¿Qué bloque se ejecuta siempre, haya o no error en try?",
      "options": [
        "Solo catch",
        "Solo try",
        "finally",
        "Ninguno"
      ],
      "correctIndex": 2,
      "feedback": "finally corre tras try (y tras catch si hubo error). Es útil para limpieza o logging que debe ocurrir en ambos casos."
    },
    {
      "question": "¿Cuál es la mejor forma de lanzar un error personalizado al detectar división por cero?",
      "options": [
        "return Error(\"cero\")",
        "throw new Error(\"División por cero\")",
        "catch new Error(\"cero\")",
        "console.log(\"error\")"
      ],
      "correctIndex": 1,
      "feedback": "throw new Error(...) interrumpe el flujo normal y puede ser atrapado por catch. return no lanza; catch no lanza; console.log solo muestra texto."
    }
  ]
}
