---
track: pbpew
slug: 09-estructuras-de-datos
title: "Map, Set, pila (LIFO) y cola (FIFO)"
order: 9
prerequisites:
  - 01-intro-js-y-dom
  - 02-js-en-html
  - 03-variables-y-tipos
  - 04-operadores-y-decisiones
  - 05-bucles-y-errores
  - 06-funciones-y-callbacks
  - 07-arrays-json-objetos
  - 08-this-scope-clases
related:
  - 07-arrays-json-objetos
  - 10-dom-y-eventos
source_brief: kb/education/pipeline/pbpew/09-estructuras-de-datos/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** qué es una estructura de datos y **distinguir** entre tipos nativos (`Map`, `Set`) y patrones sobre arrays (pila LIFO, cola FIFO).
- **Crear y manipular** un `Map` con `.set`, `.get`, `.has`, `.delete` y **iterar** entradas con `for...of` o `.forEach`.
- **Usar** `Set` para garantizar valores únicos y **eliminar duplicados** de un array con spread.
- **Implementar** una pila con `push`/`pop` y una cola con `push`/`shift`, **explicando** el orden de salida LIFO vs FIFO.
- **Elegir** entre objeto literal y `Map` según el caso: JSON fijo vs claves dinámicas o de tipos mixtos.
- **Integrar** `Map`, `Set`, cola y pila en un flujo de caché y turnos (reto integrador).

## Prerrequisitos

- **Lección 07 (`07-arrays-json-objetos`):** arrays, objetos literales, `JSON.stringify`, métodos básicos de array — base para pila/cola sobre arrays.
- **Lección 08 (`08-this-scope-clases`):** objetos con propiedades, funciones como valores, scope — contexto para claves de tipo objeto en `Map`.
- **Lecciones 01–06:** variables, bucles, funciones y consola — para escribir y probar los ejemplos.
- Saber leer y ejecutar fragmentos en consola o `<script>` sin errores de sintaxis básica.

## Contenido

### Introducción: estructuras de datos

Una **estructura de datos** es la forma de organizar y acceder a información en memoria. En PBPEW ya usaste **arrays** y **objetos literales**; aquí amplías el repertorio con `Map`, `Set` y dos **patrones** clásicos: **pila** (LIFO) y **cola** (FIFO).

Pila y cola no son tipos nativos de JavaScript: son **convenciones** sobre cómo usar un array (u otra estructura). Lo importante es respetar el contrato de entrada y salida.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  Q[\"¿Qué necesitas?\"]\n  Q --> U[\"¿Valores únicos sin repetir?\"]\n  U -->|Sí| SET[\"Set\"]\n  Q --> K[\"¿Pares clave-valor?\"]\n  K -->|JSON/API fija| OBJ[\"Objeto literal\"]\n  K -->|Claves dinámicas o tipos mixtos| MAP[\"Map\"]\n  Q --> O[\"¿Orden de salida?\"]\n  O -->|Último entra, primero sale| STACK[\"Pila: push/pop\"]\n  O -->|Primero entra, primero sale| QUEUE[\"Cola: push/shift\"]"
}

---

### Map: pares clave → valor

`Map` es una colección de pares **clave → valor** donde la clave puede ser **cualquier tipo** (string, número, objeto, función). Se crea con `new Map()` y se manipula con la API dedicada.

| Método / propiedad | Acción |
|--------------------|--------|
| `.set(clave, valor)` | Añade o actualiza una entrada |
| `.get(clave)` | Lee el valor (o `undefined` si no existe) |
| `.has(clave)` | Comprueba si existe la clave |
| `.delete(clave)` | Elimina una entrada |
| `.clear()` | Vacía el mapa |
| `.size` | Número de entradas |

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "No uses Map como objeto plano: mapa.nombre = \"Ana\" no funciona. Hace falta mapa.set(\"nombre\", \"Ana\") y mapa.get(\"nombre\"). Confundir .size con .length también es habitual — Map y Set usan .size; los arrays usan .length."
}

<!-- code: javascript -->
```javascript
const edades = new Map();
edades.set("Ana", 21);
edades.set("Luis", 22);
console.log(edades.get("Ana")); // 21
console.log(edades.has("Luis")); // true
console.log(edades.size); // 2

edades.set("Ana", 22); // actualiza
console.log(edades.get("Ana")); // 22
```

**Ventaja sobre objeto literal:** la clave conserva su **tipo real**. Con un objeto, una clave objeto se convierte a string (`"[object Object]"`).

<!-- code: javascript -->
```javascript
const porId = new Map();
const usuario = { id: 1, nombre: "Ana" };
porId.set(usuario, "sesión activa");
console.log(porId.get(usuario)); // "sesión activa"

// Con objeto literal la clave sería "[object Object]" — frágil
```

**Iterar un Map:** no uses `for...in` (itera propiedades del wrapper). Usa `for...of` con desestructuración o `.forEach`.

<!-- code: javascript -->
```javascript
const precios = new Map([["manzana", 500], ["pera", 600]]);

for (const [fruta, precio] of precios) {
  console.log(fruta, precio);
}

precios.forEach((precio, fruta) => {
  console.log(`${fruta}: ${precio}`);
});
```

<!-- interactive: Callout -->
{
  "title": "Caso real: caché de sesión",
  "children": "Un dashboard guarda datos por userId (número) en un objeto: cache[userId] = datos. Al borrar usuarios inactivos notan claves convertidas a string y colisiones con el prototipo en tests. Migran a const cache = new Map() con .set(userId, datos) y .delete(userId) — altas/bajas claras y .size exacto para métricas."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el Map — inventario",
  "template": "const inventario = new Map();\ninventario.{{blank1}}(\"manzana\", 10);\ninventario.{{blank2}}(\"pera\", 5);\n\nfunction stock(nombre) {\n  return inventario.{{blank3}}(nombre) ?? 0;\n}\nconsole.log(stock(\"manzana\")); // 10\nconsole.log(stock(\"uva\"));     // 0",
  "blanks": [
    { "id": "blank1", "answer": "set", "placeholder": "método para guardar" },
    { "id": "blank2", "answer": "set", "placeholder": "método para guardar" },
    { "id": "blank3", "answer": "get", "placeholder": "método para leer" }
  ]
}

---

### Set: valores únicos

`Set` es una colección de **valores únicos** (sin duplicados). Se crea con `new Set(iterable)` o `new Set()` vacío.

| Método / propiedad | Acción |
|--------------------|--------|
| `.add(valor)` | Añade un valor (ignora duplicados) |
| `.has(valor)` | Comprueba pertenencia |
| `.delete(valor)` | Elimina un valor |
| `.clear()` | Vacía el conjunto |
| `.size` | Número de valores únicos |

La comparación usa `===`: `"2"` y `2` son distintos; dos objetos con el mismo contenido cuentan como **referencias distintas**.

<!-- code: javascript -->
```javascript
const ids = new Set([1, 2, 2, 3]);
console.log(ids.size); // 3 — el segundo 2 no se almacena otra vez
console.log(ids.has(2)); // true

const etiquetas = ["js", "web", "js", "pbpew"];
const unicas = [...new Set(etiquetas)];
console.log(unicas); // ["js", "web", "pbpew"]
```

<!-- interactive: StepReveal -->
{
  "title": "Set elimina duplicados — paso a paso",
  "steps": [
    {
      "title": "1. Array con repetidos",
      "content": "const nums = [1, 1, 2, 3, 3, 4]; — seis elementos, pero solo cuatro valores distintos."
    },
    {
      "title": "2. new Set(array)",
      "content": "const unicos = new Set(nums); — Set ignora duplicados según ===. unicos.size vale 4."
    },
    {
      "title": "3. Spread de vuelta a array",
      "content": "const limpio = [...unicos]; // [1, 2, 3, 4] — patrón habitual: [...new Set(arr)]"
    }
  ]
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el Set — registrar visitas",
  "template": "const vistos = new Set();\n\nfunction registrar(id) {\n  if (vistos.{{blank1}}(id)) return false;\n  vistos.{{blank2}}(id);\n  return true;\n}\n\nconsole.log(registrar(101)); // true\nconsole.log(registrar(101)); // false",
  "blanks": [
    { "id": "blank1", "answer": "has", "placeholder": "¿ya existe?" },
    { "id": "blank2", "answer": "add", "placeholder": "añadir valor" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué new Set([1, 2, 2, 3]).size es 3 y no 4? Explica con tus palabras qué hace Set con valores repetidos.",
  "hints": ["Set guarda solo valores únicos", "La comparación usa ==="],
  "expectedKeywords": ["único", "duplicad", "repet"],
  "successMessage": "Correcto. Set almacena cada valor una sola vez; el segundo 2 no aumenta el tamaño."
}

---

### Pila (stack) — LIFO

**LIFO** = *Last In, First Out*. El último elemento insertado es el primero en salir. Metáfora: **pila de platos**.

Con un array: **`push`** añade al final; **`pop`** quita y devuelve el último. Operaciones O(1) en la práctica para el final del array.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph pila [Pila — LIFO]\n    E1[\"push 'A'\"] --> E2[\"push 'B'\"]\n    E2 --> E3[\"push 'C'\"]\n    E3 --> S1[\"pop → 'C'\"]\n    S1 --> S2[\"pop → 'B'\"]\n  end"
}

<!-- code: javascript -->
```javascript
const pila = [];
pila.push("A");
pila.push("B");
pila.push("C");

console.log(pila.pop()); // "C" — último en entrar
console.log(pila.pop()); // "B"
console.log(pila.length); // 1
```

**Caso de uso:** historial «deshacer» en un editor — la última acción es la primera en revertirse.

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Pensar que pop saca el primero. En una pila LIFO, pop saca el último que entró con push. Si necesitas FIFO, no uses pop en la cola de atención."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la pila — historial",
  "template": "const historial = [];\nhistorial.{{blank1}}(\"borrador\");\nhistorial.{{blank2}}(\"guardado\");\nconsole.log(historial.{{blank3}}()); // \"guardado\"",
  "blanks": [
    { "id": "blank1", "answer": "push", "placeholder": "apilar" },
    { "id": "blank2", "answer": "push", "placeholder": "apilar" },
    { "id": "blank3", "answer": "pop", "placeholder": "desapilar" }
  ]
}

---

### Cola (queue) — FIFO

**FIFO** = *First In, First Out*. El primero en entrar es el primero en salir. Metáfora: **fila en el banco**.

Con un array (patrón didáctico PBPEW): **`push`** al final para encolar; **`shift`** al inicio para desencolar. `shift` en arrays muy grandes puede ser costoso en tiempo; en producción a veces se usan índices o estructuras dedicadas.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  subgraph cola [Cola — FIFO]\n    IN[\"push ticket1\"] --> IN2[\"push ticket2\"]\n    IN2 --> OUT[\"shift → ticket1\"]\n    OUT --> REST[\"queda ticket2\"]\n  end"
}

<!-- code: javascript -->
```javascript
const cola = [];
cola.push("ticket1");
cola.push("ticket2");
cola.push("ticket3");

console.log(cola.shift()); // "ticket1" — primero en entrar
console.log(cola.shift()); // "ticket2"
console.log(cola); // ["ticket3"]
```

**Misma secuencia, distinto patrón:**

<!-- code: javascript -->
```javascript
const elementos = ["x", "y", "z"];

const pila = [...elementos];
console.log(pila.pop()); // "z" — LIFO

const cola = [...elementos];
console.log(cola.shift()); // "x" — FIFO
```

<!-- interactive: Callout -->
{
  "title": "Caso real: cola de tickets al revés",
  "children": "Un equipo modela tickets con push + pop pensando en «el más reciente primero». Los clientes que esperan desde ayer nunca son atendidos. El bug es de patrón: implementaron una pila donde el negocio exige cola FIFO (push + shift). Elige la estructura según la regla de negocio."
}

<!-- interactive: CompareTable -->
{
  "headers": ["Patrón", "Entrada", "Salida", "Métodos típicos", "Ejemplo mental"],
  "rows": [
    ["Pila LIFO", "push (final)", "pop (final)", "push / pop", "Deshacer en editor"],
    ["Cola FIFO", "push (final)", "shift (inicio)", "push / shift", "Tickets de soporte"]
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica con tus palabras la diferencia entre LIFO y FIFO usando la metáfora de platos (pila) vs fila del banco (cola).",
  "hints": ["LIFO: último en entrar, primero en salir", "FIFO: primero en entrar, primero en salir"],
  "expectedKeywords": ["último", "primero", "LIFO", "FIFO"],
  "successMessage": "Correcto. Pila = último apilado sale primero; cola = quien llegó primero es atendido primero."
}

---

### Map vs objeto literal

Ambos guardan pares clave-valor, pero con reglas distintas.

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Objeto {}", "Map"],
  "rows": [
    ["Tipo de clave", "String/Symbol (otros se convierten)", "Cualquier tipo"],
    ["Tamaño", "Object.keys(obj).length", ".size"],
    ["Orden al iterar", "Orden parcial / reglas ES", "Orden de inserción"],
    ["JSON", "Nativo con JSON.stringify", "Requiere conversión"],
    ["Caso PBPEW", "Config, DTO, respuesta API", "Caché dinámica, claves no string"]
  ]
}

**Cuándo preferir objeto:** JSON estático, contratos de API, configuración con pocas propiedades fijas, serialización directa.

**Cuándo preferir Map:** claves dinámicas de tipos variados, muchas altas/bajas de entradas, `.size` fiable, iterar en orden de inserción sin sorpresas del prototipo.

<!-- code: javascript -->
```javascript
const configObj = { tema: "oscuro", idioma: "es" };
console.log(configObj.tema); // acceso directo — ideal JSON

const contadorMap = new Map();
contadorMap.set("clics", 0);
contadorMap.set("clics", contadorMap.get("clics") + 1);
console.log(contadorMap.get("clics")); // 1 — ideal claves dinámicas
```

<!-- interactive: Callout -->
{
  "title": "Serialización",
  "children": "JSON.stringify(new Map([[1, 2]])) devuelve \"{}\". Para persistir un Map hay que convertirlo (por ejemplo a array de pares con [...mapa]). Los objetos literales serializan de forma natural."
}

---

### Resumen

- Una **estructura de datos** organiza información; en esta lección: `Map`, `Set` y patrones **pila/cola** sobre arrays.
- **`Map`:** pares clave-valor con `.set`/`.get`; claves de cualquier tipo; `.size`; iterar con `for...of` o `.forEach`, no `for...in`.
- **`Set`:** valores únicos con `.add`/`.has`; eliminar duplicados con `[...new Set(arr)]`; comparación con `===`.
- **Pila LIFO:** `push` + `pop` — último en entrar, primero en salir (deshacer, historial).
- **Cola FIFO:** `push` + `shift` — primero en entrar, primero en salir (turnos, tickets).
- **Objeto vs Map:** objeto para JSON y esquemas fijos; `Map` para cachés dinámicas y claves no string.
- **Preview lección 10:** colas de eventos del DOM y callbacks encajan con FIFO; historial con pila LIFO.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dado const nums = [1, 1, 2, 3, 3, 4], escribe en una línea cómo obtener un array sin duplicados usando Set y spread.",
  "hints": ["new Set(nums)", "spread [...] convierte Set a array"],
  "expectedKeywords": ["Set", "spread", "..."],
  "successMessage": "Correcto. [...new Set(nums)] devuelve [1, 2, 3, 4]."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo FIFO con push(\"a\"), push(\"b\"), shift(): (a) queda [\"b\"], (b) se encola \"a\", (c) se desencola \"a\", (d) se encola \"b\". Indica el orden correcto de ejecución.",
  "hints": ["Primero encolar a, luego b, luego desencolar"],
  "expectedKeywords": ["b", "d", "c", "a"],
  "successMessage": "Correcto. Orden: (b) encola \"a\" → (d) encola \"b\" → (c) desencola \"a\" → (a) queda [\"b\"]."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué new Set([{ id: 1 }, { id: 1 }]).size es 2 y no 1? Explica el papel de las referencias.",
  "hints": ["Set usa ===", "Cada {} es un objeto distinto en memoria"],
  "expectedKeywords": ["referencia", "objeto", "distint"],
  "successMessage": "Correcto. Cada literal {} es una referencia distinta; Set no fusiona objetos por contenido."
}

---

## Reto integrador

**«Centro de turnos y caché de consultas»**

Implementa en consola o `<script>`:

1. `const cache = new Map()` — función `obtenerUsuario(id)` que, si `cache.has(id)`, devuelva el valor cacheado; si no, simule fetch con `{ id, nombre: "Usuario " + id }`, guárdalo con `cache.set` y devuélvelo.
2. `const atendidos = new Set()` — al «atender» un ticket, registra su id; si ya está en `atendidos`, ignora duplicados.
3. `const colaTickets = []` — funciones `encolar(id)` (`push`) y `atenderSiguiente()` (`shift`) que devuelva el id atendido o `null` si la cola está vacía.
4. `const historialAcciones = []` — cada vez que atiendes un ticket, `push` el id; función `deshacerUltimaAtencion()` hace `pop` y devuelve el id revertido (pila LIFO de acciones).
5. **Flujo de prueba:** encola 101, 102, 103 → atiende dos → comprueba orden FIFO (101, 102) → intenta registrar 101 otra vez en `atendidos` y verifica que `Set` evita duplicados → deshace una atención y muestra el id sacado de la pila.

**Criterio de éxito:** usa `Map`, `Set`, cola FIFO y pila LIFO con arrays; no mezcles `pop` en la cola de tickets; nombres de funciones que dejen claro el patrón.

<!-- code: javascript -->
```javascript
// Esqueleto de partida — completa las funciones
const cache = new Map();
const atendidos = new Set();
const colaTickets = [];
const historialAcciones = [];

function obtenerUsuario(id) {
  // tu código: cache.has / cache.set
}

function encolar(id) {
  // push
}

function atenderSiguiente() {
  // shift, registrar en atendidos e historialAcciones
  // devuelve id o null
}

function deshacerUltimaAtencion() {
  // pop del historial
}

// Pruebas esperadas:
// encolar(101); encolar(102); encolar(103);
// atenderSiguiente() → 101; atenderSiguiente() → 102
// atendidos.has(101) === true; registrar duplicado ignorado
// deshacerUltimaAtencion() → 102
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto «Centro de turnos y caché de consultas». Pega tu código o describe cómo obtenerUsuario usa Map, atenderSiguiente respeta FIFO y deshacerUltimaAtencion usa la pila LIFO.",
  "hints": [
    "obtenerUsuario: if (cache.has(id)) return cache.get(id); else crea objeto, cache.set, return",
    "atenderSiguiente: const id = colaTickets.shift(); if (id == null) return null; atendidos.add(id); historialAcciones.push(id); return id",
    "deshacerUltimaAtencion: return historialAcciones.pop()",
    "No uses pop en colaTickets — eso sería LIFO"
  ],
  "expectedKeywords": ["Map", "Set", "shift", "pop", "push"],
  "successMessage": "Excelente. Has integrado Map (caché), Set (sin duplicados), cola FIFO y pila LIFO en un flujo coherente."
}

---

## Cierre

Has completado el estudio de `Map`, `Set`, pila LIFO y cola FIFO en JavaScript. Estas estructuras amplían arrays y objetos de la lección 7 y conectan con eventos y callbacks de la lección 10.

**Ideas clave para retener:**

- **`Map`** — pares clave-valor con API `.set`/`.get`; claves de cualquier tipo; `.size`.
- **`Set`** — valores únicos; `[...new Set(arr)]` elimina duplicados.
- **Pila LIFO** — `push`/`pop`; último en entrar, primero en salir.
- **Cola FIFO** — `push`/`shift`; primero en entrar, primero en salir.
- **Objeto vs Map** — JSON fijo vs caché dinámica; no mezcles APIs ni patrones en la misma estructura sin convención clara.

**Siguiente paso:** lección `10-dom-y-eventos` — colas de eventos del navegador, listeners y callbacks en el DOM.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué devuelve const pila = []; pila.push(1); pila.push(2); console.log(pila.pop());?",
      "options": [
        "1",
        "2",
        "undefined",
        "[1, 2]"
      ],
      "correctIndex": 1,
      "feedback": "push añade al final; pop quita el último elemento (LIFO). El último en entrar es 2."
    },
    {
      "question": "¿Cuál es la forma correcta de guardar un par en un Map llamado m?",
      "options": [
        "m.clave = valor",
        "m[clave] = valor sin set",
        "m.set(clave, valor)",
        "m.add(clave, valor)"
      ],
      "correctIndex": 2,
      "feedback": "Map usa .set / .get. .add pertenece a Set; la notación de objeto no es la API de Map."
    },
    {
      "question": "¿Qué imprime console.log(new Set([1, 2, 2, 3]).size);?",
      "options": [
        "4",
        "2",
        "3",
        "undefined"
      ],
      "correctIndex": 2,
      "feedback": "Set almacena valores únicos; el 2 repetido solo cuenta una vez → tamaño 3."
    },
    {
      "question": "Para una cola FIFO con array, ¿qué combinación es la habitual en esta lección?",
      "options": [
        "push + pop",
        "unshift + pop",
        "push + shift",
        "shift + shift"
      ],
      "correctIndex": 2,
      "feedback": "FIFO: entras por un lado (push al final) y sales por el otro (shift al inicio). push + pop sería pila (LIFO)."
    },
    {
      "question": "¿Cuándo suele preferirse un Map frente a un objeto literal?",
      "options": [
        "Siempre, porque JSON no soporta objetos",
        "Cuando las claves son dinámicas, de tipos variados o hay muchas altas/bajas de entradas",
        "Solo para guardar funciones, nunca datos",
        "Cuando necesitas JSON.stringify directo sin conversión"
      ],
      "correctIndex": 1,
      "feedback": "Los objetos brillan en JSON y esquemas fijos; Map gana en cachés y claves no string. Map no serializa a JSON de forma útil sin convertir."
    }
  ]
}
