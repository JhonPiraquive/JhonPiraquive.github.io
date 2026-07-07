---
track: pbpew
slug: 11-asincronia
title: "Sincronía vs asincronía · temporizadores · promesas · async/await"
order: 11
prerequisites:
  - 01-intro-js-y-dom
  - 02-js-en-html
  - 03-variables-y-tipos
  - 04-operadores-y-decisiones
  - 05-bucles-y-errores
  - 06-funciones-y-callbacks
  - 07-arrays-json-objetos
  - 08-this-scope-clases
  - 09-estructuras-de-datos
  - 10-dom-y-eventos
related:
  - 06-funciones-y-callbacks
  - 10-dom-y-eventos
  - 12-ajax-fetch
source_brief: kb/education/pipeline/pbpew/11-asincronia/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Distinguir** código sincrónico de asíncrono y **explicar** por qué temporizadores y red no bloquean el hilo principal de la UI.
- **Usar** `setTimeout`, `clearTimeout`, `setInterval` y `clearInterval`, **reconociendo** que el retardo es mínimo y que los intervalos deben limpiarse al terminar.
- **Crear y encadenar** promesas con `new Promise`, `.then`, `.catch` y `.finally`, **manejando** rechazos sin dejar errores sin capturar.
- **Escribir** funciones `async` con `await` y `try/catch` para flujos lineales que consumen promesas (preview de `fetch`).
- **Aplicar** template literals con interpolación `${}` para mensajes dinámicos en logs y errores.
- **Describir** el event loop de forma básica: call stack, Web APIs y cola de tareas.

## Prerrequisitos

- **Lección 06 (`06-funciones-y-callbacks`):** funciones, callbacks — base de temporizadores y handlers de promesas.
- **Lección 10 (`10-dom-y-eventos`):** eventos, `addEventListener`, cola de eventos del navegador.
- **Lecciones 01–05 y 07–09:** variables, bucles, `try/catch`, objetos y estructuras de datos para leer respuestas JSON.
- Capacidad para ejecutar fragmentos en consola o `<script>` y leer salida en orden.

## Contenido

### ¿Qué cambia con lo asíncrono?

**Código sincrónico** se ejecuta **línea a línea**; cada instrucción espera a que termine la anterior. Si una operación tarda mucho (un bucle enorme, procesamiento masivo), el hilo principal queda **bloqueado** y la interfaz puede congelarse.

**Código asíncrono** **programa** trabajo que se completará más tarde (temporizador, red, disco) y sigue ejecutando el resto del script. El navegador puede seguir respondiendo a clics y pintar la UI mientras espera.

JavaScript en el navegador corre en un **solo hilo principal** (call stack). No hay paralelismo real de tu código de aplicación; la coordinación la hacen el motor y las **Web APIs** del navegador.

**Event loop (idea básica):**

1. El call stack ejecuta código sincrónico.
2. Tareas asíncronas (`setTimeout`, `fetch`, eventos DOM) las gestionan las Web APIs.
3. Cuando terminan, sus callbacks van a una **cola de tareas**.
4. Cuando el stack está vacío, el event loop saca el siguiente callback y lo ejecuta.

No hace falta memorizar la implementación interna — sí entender que **“más tarde” ≠ inmediatamente después de la línea actual**.

Un **callback** (repaso lección 6) es una función que pasas para que se ejecute cuando algo ocurre. `setTimeout(fn, 1000)` y `addEventListener("click", fn)` son asíncronos porque `fn` corre **después**, no en la misma vuelta del stack.

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Sincrónico", "Asíncrono"],
  "rows": [
    ["Orden", "Línea a línea, inmediato", "Resultado «más tarde»"],
    ["Bloqueo UI", "Sí, si tarda mucho", "No; el hilo sigue atendiendo eventos"],
    ["Ejemplos PBPEW", "`for`, cálculos, DOM inmediato", "`setTimeout`, `fetch`, listeners"],
    ["Lectura del código", "Secuencial arriba-abajo", "Callbacks, `.then`, `await`"]
  ]
}

<!-- interactive: Callout -->
{
  "title": "Caso real: dashboard que se congela",
  "children": "Un equipo pinta un spinner y luego ejecuta un bucle pesado sincrónico para «procesar» 50 000 filas antes de ocultar el spinner. Los usuarios no pueden cerrar modales ni hacer scroll durante 8 segundos. El bug no es el spinner — es bloquear el hilo principal. La corrección: trocear el trabajo o no mezclar procesamiento masivo sincrónico con expectativa de UI viva."
}

<!-- interactive: StepReveal -->
{
  "title": "Orden de impresión A → C → B",
  "steps": [
    {
      "title": "1. Código en el editor",
      "content": "console.log(\"A\"); setTimeout(() => console.log(\"B\"), 0); console.log(\"C\");"
    },
    {
      "title": "2. Ejecución sincrónica",
      "content": "Se imprime A. setTimeout registra el callback en Web API (delay 0 ms mínimo). Se imprime C. El stack sincrónico termina."
    },
    {
      "title": "3. Event loop",
      "content": "Cuando el stack está vacío, el callback de setTimeout pasa de la cola al stack. Se imprime B al final."
    },
    {
      "title": "4. Resultado",
      "content": "Salida: A, C, B — aunque el delay sea 0, el timeout siempre corre después del código sincrónico pendiente."
    }
  ]
}

<!-- code: javascript -->
```javascript
console.log("1: inicio");

setTimeout(() => {
  console.log("3: timeout");
}, 0);

console.log("2: fin");
// Imprime: 1 → 2 → 3
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué setTimeout(() => console.log(\"B\"), 0) se imprime después de console.log(\"A\") aunque el delay sea 0?",
  "hints": ["El callback entra en la cola de tareas", "El stack sincrónico debe terminar primero"],
  "expectedKeywords": ["cola", "stack", "sincrónico", "event loop"],
  "successMessage": "Correcto. El callback se encola y el event loop lo ejecuta cuando el código sincrónico actual termina."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica con tus palabras la diferencia entre sincrónico y asíncrono usando la analogía de «pedir comida y quedarte mirando el móvil sin poder hacer nada» frente a «pedir y seguir charlando hasta que llegue».",
  "hints": ["Sincrónico = esperas bloqueado", "Asíncrono = sigues haciendo otras cosas"],
  "expectedKeywords": ["bloque", "espera", "después", "interfaz"],
  "successMessage": "Correcto. Sincrónico bloquea hasta terminar; asíncrono programa el resultado y el programa (y la UI) sigue respondiendo."
}

---

### setTimeout y setInterval

**`setTimeout(callback, delayMs)`** programa `callback` tras **al menos** `delayMs` milisegundos. Devuelve un **id numérico** del temporizador. El retardo es mínimo, no exacto — el navegador puede demorar más si el hilo está ocupado.

**`clearTimeout(id)`** cancela un `setTimeout` pendiente. Si ya se ejecutó, no hace nada.

**`setInterval(callback, intervalMs)`** ejecuta `callback` **repetidamente** cada `intervalMs` (mínimo). También devuelve un id.

**`clearInterval(id)`** detiene un `setInterval`. Sin esto, el intervalo sigue hasta cerrar la pestaña — fuga de memoria y trabajo innecesario.

<!-- interactive: Callout -->
{
  "title": "Caso real: polling sin clearInterval",
  "children": "Un checkout consulta cada 2 s si el pago se confirmó con setInterval(consultarEstado, 2000). Al redirigir a «gracias», nadie llama clearInterval. En segundo plano siguen las peticiones y a veces aparecen toasts en la página equivocada. Todo temporizador recurrente necesita ciclo de vida: crear al montar, limpiar al salir."
}

<!-- code: javascript -->
```javascript
const avisoId = setTimeout(() => {
  console.log("Este mensaje no debería verse");
}, 5000);

clearTimeout(avisoId);

setTimeout(() => console.log("Hola tras 1 s"), 1000);
```

<!-- code: javascript -->
```javascript
let segundos = 0;
const tickId = setInterval(() => {
  segundos += 1;
  console.log(`tic ${segundos}`);
  if (segundos >= 3) {
    clearInterval(tickId);
    console.log("intervalo detenido");
  }
}, 1000);
```

<!-- interactive: Callout -->
{
  "title": "Errores frecuentes",
  "children": "No confundas clearTimeout con clearInterval — cada función limpia su propio tipo. setTimeout(fn, 1000) es un mínimo de 1 s, no una garantía exacta. setTimeout(..., 0) no es instantáneo: significa «cuando el stack esté libre»."
}

#### Promesas

Una **Promise** representa un **valor futuro**: puede estar **pendiente** (*pending*), **cumplida** (*fulfilled/resolved*) o **rechazada** (*rejected*). Encapsula éxito o error de operaciones asíncronas sin anidar callbacks infinitos (*callback hell*).

**Constructor:** `new Promise((resolve, reject) => { ... })` — `resolve(valor)` marca éxito; `reject(error)` marca fallo. El ejecutor corre **sincrónicamente** al crear la promesa; lo asíncrono suele estar dentro (p. ej. un `setTimeout` que llama a `resolve`).

**Patrón `esperar(ms)`:** promesa que se cumple cuando pasa el tiempo. Base para encadenar con `.then`.

<!-- interactive: MermaidDiagram -->
{
  "chart": "stateDiagram-v2\n  [*] --> pending\n  pending --> fulfilled: resolve(valor)\n  pending --> rejected: reject(error)\n  fulfilled --> [*]\n  rejected --> [*]"
}

<!-- code: javascript -->
```javascript
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

esperar(500).then(() => console.log("listo tras medio segundo"));

const promesa = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) resolve({ id: 1, nombre: "Ana" });
  else reject(new Error("falló"));
});
```

<!-- interactive: StepReveal -->
{
  "title": "Promesa pendiente → fulfilled",
  "steps": [
    {
      "title": "1. Crear la promesa",
      "content": "const p = new Promise((resolve) => { setTimeout(() => resolve(42), 500); }); — estado pending."
    },
    {
      "title": "2. Registrar .then",
      "content": "p.then((valor) => console.log(valor)); — el handler queda en cola hasta que la promesa se settle."
    },
    {
      "title": "3. Tras el timeout",
      "content": "resolve(42) marca fulfilled. El callback de .then se ejecuta con 42."
    }
  ]
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa esperar y el encadenamiento",
  "template": "function esperar(ms) {\n  return new Promise((resolve) => {{blank1}}(resolve, ms));\n}\n\nesperar(500)\n  .then(() => console.log(\"uno\"))\n  .then(() => esperar(500))\n  .then(() => console.log({{blank2}}));",
  "blanks": [
    { "id": "blank1", "answer": "setTimeout", "placeholder": "temporizador" },
    { "id": "blank2", "answer": "\"dos\"", "placeholder": "segundo mensaje" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe esperar(ms) que devuelva una promesa resuelta tras ms milisegundos. Encadénala para imprimir \"uno\", esperar 500 ms e imprimir \"dos\".",
  "hints": ["return new Promise((resolve) => setTimeout(resolve, ms))", "Encadena con .then(() => esperar(500))"],
  "expectedKeywords": ["Promise", "setTimeout", "then"],
  "successMessage": "Correcto. esperar envuelve setTimeout en una promesa; .then encadena pasos en orden."
}

---

### then, catch, finally

- **`.then(onFulfilled)`** registra qué hacer cuando la promesa se cumple. Devuelve **otra promesa**, lo que permite **encadenar** pasos.
- **`.catch(onRejected)`** maneja rechazos en la promesa actual o en cualquier `.then` anterior de la cadena.
- **`.finally(onFinally)`** se ejecuta **siempre** al terminar (éxito o error). Útil para ocultar spinners o logging; **no** recibe el valor resuelto ni sustituye a `catch`.

**Preview lección 12:** `fetch`, cabeceras y `response.ok` se profundizan en HTTP; aquí el foco es el **flujo** de promesas.

<!-- interactive: Callout -->
{
  "title": "Error frecuente — olvidar return en .then",
  "children": ".then(x => { procesar(x); }) sin return hace que el siguiente .then reciba undefined. Si el siguiente paso necesita el valor, usa return procesar(x) o una arrow de expresión."
}

<!-- code: javascript -->
```javascript
fetch("/api/datos.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Fallo", err))
  .finally(() => console.log("Fin del intento"));
```

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la cadena fetch",
  "template": "fetch(\"/api/user\")\n  .{{blank1}}(r => r.json())\n  .{{blank2}}(user => console.log(user.nombre))\n  .{{blank3}}(err => console.error(err));",
  "blanks": [
    { "id": "blank1", "answer": "then", "placeholder": "primer paso" },
    { "id": "blank2", "answer": "then", "placeholder": "segundo paso" },
    { "id": "blank3", "answer": "catch", "placeholder": "errores" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo del event loop simplificado: (a) Web API completa el timer, (b) callback a la cola, (c) stack ejecuta código sincrónico, (d) stack vacío, event loop saca callback, (e) se registra setTimeout. Indica el orden correcto.",
  "hints": ["Primero se registra setTimeout", "Luego código sync", "Al final el callback"],
  "expectedKeywords": ["e", "c", "a", "b", "d"],
  "successMessage": "Correcto. Orden: (e) registra → (c) sync → (a) timer completa → (b) a cola → (d) event loop ejecuta."
}

---

### async / await

**`async function`** — una función marcada `async` **siempre devuelve una promesa**. Si haces `return 42`, el llamador recibe una promesa resuelta con `42`.

**`await`** — solo dentro de funciones `async`. **Pausa** la ejecución de esa función hasta que la promesa a la derecha se settle; mientras tanto, el hilo principal sigue libre. El código **parece** sincrónico pero no bloquea la UI.

**`try/catch` con `await`:** errores de promesas rechazadas se capturan igual que excepciones sincrónicas — lectura más clara que `.catch` anidado para flujos lineales.

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Cadena .then", "async/await"],
  "rows": [
    ["Estilo", "Funcional, encadenado", "Imperativo, parecido a sync"],
    ["Errores", ".catch al final", "try/catch local"],
    ["Cuándo usar en PBPEW", "Transformaciones cortas", "Flujos lineales largos"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  A[\"async function cargar()\"] --> B[\"await fetch(url)\"]\n  B --> C{\"¿ok?\"}\n  C -->|sí| D[\"await res.json()\"]\n  C -->|no| E[\"throw / catch\"]\n  D --> F[\"usar data\"]\n  E --> G[\"console.error\"]"
}

<!-- code: javascript -->
```javascript
async function cargar() {
  try {
    const res = await fetch("/api/datos.json");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

cargar();
```

<!-- code: javascript -->
```javascript
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function tresPasos() {
  console.log("paso 1");
  await esperar(300);
  console.log("paso 2");
  await esperar(300);
  console.log("paso 3");
}

tresPasos();
```

<!-- interactive: CodeChallenge -->
{
  "title": "Completa async y await",
  "template": "{{blank1}} function leer() {\n  try {\n    const res = {{blank2}} fetch(\"/api\");\n    const data = await res.json();\n  } catch (e) {\n    console.error(e);\n  }\n}",
  "blanks": [
    { "id": "blank1", "answer": "async", "placeholder": "palabra clave función" },
    { "id": "blank2", "answer": "await", "placeholder": "esperar promesa" }
  ]
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente — await fuera de async",
  "children": "const data = await fetch(\"/api\") en el cuerpo global del script da SyntaxError en PBPEW. Envuelve en async function obtener() { ... } y llama obtener(). await solo pausa esa función async; no bloquea todo el navegador."
}

<!-- code: javascript -->
```javascript
// ❌ SyntaxError en script clásico
// const data = await fetch("/api");

// ✅
async function obtener() {
  const data = await fetch("/api");
  return data;
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa async function tresPasos() que espere 300 ms entre tres console.log consecutivos usando await esperar(300).",
  "hints": ["Reutiliza function esperar(ms) con Promise + setTimeout", "await esperar(300) entre cada log"],
  "expectedKeywords": ["async", "await", "esperar", "300"],
  "successMessage": "Correcto. async/await aplana el flujo sin bloquear la UI entre pasos."
}

---

### Template literals

Las **template literals** usan **backticks** `` ` `` y permiten **interpolar** expresiones con `${expresion}` y saltos de línea sin concatenar con `+`. Muy útiles para mensajes de log, UI y URLs con parámetros.

**Error típico:** `'Hola ${nombre}'` no interpola — hacen falta backticks.

<!-- code: javascript -->
```javascript
const nombre = "Diana";
const saludo = `Hola ${nombre}, bienvenida a PBPEW`;

const multilinea = `
Línea 1
Línea 2
`;

console.log(saludo);
console.log(multilinea);
```

<!-- code: javascript -->
```javascript
const nombre = "Luis";
const puntos = 120;
const mensaje = `Usuario ${nombre} tiene ${puntos} puntos`;
console.log(mensaje);
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Código (call stack)\n  participant W as Web API\n  participant Q as Cola de tareas\n  C->>W: setTimeout(fn, 1000)\n  C->>C: sigue código sincrónico\n  W->>Q: fn lista tras 1 s\n  Q->>C: event loop ejecuta fn"
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea const mensaje = `Usuario ${nombre} tiene ${puntos} puntos` con nombre y puntos dados e imprímela. ¿Por qué no funciona con comillas simples?",
  "hints": ["Interpolación solo con backticks", "${} dentro de backticks"],
  "expectedKeywords": ["backtick", "${", "interpol"],
  "successMessage": "Correcto. Solo los template literals con backticks evalúan ${expresion}; comillas simples tratan ${} como texto literal."
}

---

### Resumen

- **Sincrónico** ejecuta línea a línea; **asíncrono** programa trabajo futuro sin bloquear la UI.
- **Temporizadores** (`setTimeout`, `setInterval`) devuelven ids; **limpia** con `clearTimeout` / `clearInterval` cuando ya no los necesitas.
- **Promesas** modelan valores futuros; encadena con `.then`, maneja errores con `.catch` y limpia con `.finally`.
- **`async/await`** hace legibles flujos lineales; errores con `try/catch`; `await` solo dentro de `async`.
- **Template literals** interpolan con `${}` dentro de backticks.
- **Preview lección 12:** `fetch`, HTTP y APIs REST con más detalle.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea un setInterval que cuente de 1 a 5 cada segundo y se detenga solo con clearInterval al llegar a 5. ¿Qué pasa si olvidas clearInterval?",
  "hints": ["Guarda el id del intervalo", "if (contador >= 5) clearInterval(id)"],
  "expectedKeywords": ["setInterval", "clearInterval", "5"],
  "successMessage": "Correcto. Sin clearInterval el intervalo sigue ejecutándose hasta cerrar la pestaña — fuga de memoria y CPU."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "En una cadena de promesas, ¿qué hace .catch(fn) frente a .finally(fn)? ¿Puede .finally sustituir a .catch?",
  "hints": [".catch maneja rechazos", ".finally corre siempre pero no captura errores para transformar"],
  "expectedKeywords": ["rechazo", "siempre", "no sustituye"],
  "successMessage": "Correcto. .catch captura errores de la cadena; .finally corre siempre para limpieza pero no reemplaza el manejo de errores."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué llamar async function cargar() sin try/catch ni .catch en el llamador puede «perder» un error de red?",
  "hints": ["async devuelve una promesa", "Rechazo sin manejador → unhandled rejection"],
  "expectedKeywords": ["promesa", "rechaz", "catch"],
  "successMessage": "Correcto. cargar() devuelve una promesa; si falla dentro y nadie la captura, el error queda sin manejar."
}

---

## Reto integrador

**«Panel de carga con reintentos»**

Implementa en consola o `<script>`:

1. `function esperar(ms)` — promesa que resuelve tras `ms` ms (reutiliza el patrón de la lección).
2. `function simularFetch(intentos)` — devuelve una `Promise` que tras `esperar(400)` **rechaza** si `intentos < 2`, y **resuelve** `{ ok: true, datos: "PBPEW" }` si `intentos >= 2` (simula red inestable).
3. `async function cargarConReintentos(max = 3)` — bucle `for` con `await simularFetch(i)`; en `catch`, si quedan intentos, espera 300 ms con `await esperar(300)` y reintenta; si se agotan, muestra error con template literal `` `Falló tras ${max} intentos` ``.
4. `let spinnerId = setInterval(() => console.log("..."), 500)` — al iniciar carga; en `finally` (o bloque al terminar), `clearInterval(spinnerId)`.
5. Flujo de prueba: llamar `cargarConReintentos(3)` y ver spinner hasta éxito en el segundo intento simulado; luego probar con `max = 1` y ver mensaje de fallo.

**Criterio de éxito:** usa promesa + `async/await` + temporizadores con limpieza; maneja rechazos; template literal en mensaje de error; no deja `setInterval` activo al terminar.

<!-- code: javascript -->
```javascript
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function simularFetch(intentos) {
  return esperar(400).then(() => {
    if (intentos < 2) {
      return Promise.reject(new Error("Red inestable"));
    }
    return { ok: true, datos: "PBPEW" };
  });
}

async function cargarConReintentos(max = 3) {
  let spinnerId = setInterval(() => console.log("..."), 500);
  try {
    for (let i = 1; i <= max; i++) {
      try {
        const resultado = await simularFetch(i);
        console.log("Éxito:", resultado);
        return resultado;
      } catch (err) {
        if (i === max) throw err;
        await esperar(300);
      }
    }
  } catch (err) {
    console.error(`Falló tras ${max} intentos`, err.message);
  } finally {
    clearInterval(spinnerId);
  }
}

// Pruebas:
// cargarConReintentos(3);  // éxito en intento 2
// cargarConReintentos(1);  // fallo con mensaje template literal
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto «Panel de carga con reintentos»: esperar, simularFetch, cargarConReintentos con spinner, reintentos y clearInterval en finally. Pega tu código o describe el flujo con max=3 y max=1.",
  "hints": [
    "simularFetch: reject si intentos < 2, resolve si >= 2",
    "Bucle for con try/catch interno para reintentos",
    "clearInterval(spinnerId) en finally",
    "Template literal en mensaje de error final"
  ],
  "expectedKeywords": ["async", "await", "clearInterval", "finally", "reintento"],
  "successMessage": "Excelente. Has integrado promesas, async/await, temporizadores con limpieza y manejo de errores en un flujo realista."
}

---

## Cierre

Has completado el estudio de sincronía, asincronía, temporizadores, promesas y `async/await` en JavaScript. Estos conceptos conectan los callbacks de la lección 6 y los eventos del DOM (lección 10) con el consumo de APIs en la lección 12.

**Ideas clave para retener:**

- **Sincrónico** bloquea el hilo si tarda; **asíncrono** programa el resultado y la UI sigue viva.
- **setTimeout / setInterval** devuelven ids — **limpia** siempre que dejes de necesitar el timer.
- **Promesas** evitan callback hell; **`.catch`** o **`try/catch`** son obligatorios para errores.
- **`async/await`** aplana flujos largos; `await` solo dentro de `async`.
- **Template literals** con backticks interpolan `${expresion}` en mensajes dinámicos.
- **Event loop:** código sync primero; callbacks asíncronos después, vía cola de tareas.

**Siguiente paso:** lección `12-ajax-fetch` — `fetch`, respuestas HTTP, cabeceras y consumo de APIs REST.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué imprime este código? console.log(\"A\"); setTimeout(() => console.log(\"B\"), 0); console.log(\"C\");",
      "options": [
        "A B C",
        "A C B",
        "B A C",
        "C B A"
      ],
      "correctIndex": 1,
      "feedback": "El setTimeout, aunque sea 0 ms, encola el callback; el código sincrónico (C) termina antes de que el event loop ejecute B."
    },
    {
      "question": "¿Qué devuelve setInterval(() => {}, 1000)?",
      "options": [
        "undefined",
        "Un id numérico del intervalo",
        "Una promesa",
        "El número de ejecuciones"
      ],
      "correctIndex": 1,
      "feedback": "Tanto setTimeout como setInterval devuelven un id para poder cancelar con clearTimeout / clearInterval."
    },
    {
      "question": "En una cadena de promesas, ¿qué hace .catch(fn)?",
      "options": [
        "Solo captura errores del primer then",
        "Captura rechazos en la promesa o en cualquier then anterior de la cadena",
        "Reemplaza a finally",
        "Convierte la promesa en sincrónica"
      ],
      "correctIndex": 1,
      "feedback": ".catch es el manejador de rechazo de toda la cadena previa; .finally corre siempre pero no sustituye el manejo de errores."
    },
    {
      "question": "¿Cuál es la forma correcta de usar await?",
      "options": [
        "En cualquier función normal",
        "Solo dentro de una función declarada async (o contexto módulo avanzado)",
        "Solo después de .catch",
        "Solo con setTimeout"
      ],
      "correctIndex": 1,
      "feedback": "await pausa una función async hasta que la promesa se settle; fuera de async hay error de sintaxis en el script clásico de PBPEW."
    },
    {
      "question": "¿Cuál cadena usa template literal con interpolación?",
      "options": [
        "'Hola ' + nombre",
        "\"Hola ${nombre}\"",
        "`Hola ${nombre}`",
        "'Hola ${nombre}'"
      ],
      "correctIndex": 2,
      "feedback": "La interpolación ${} solo funciona dentro de backticks; comillas simples o dobles tratan ${nombre} como texto literal."
    }
  ]
}
