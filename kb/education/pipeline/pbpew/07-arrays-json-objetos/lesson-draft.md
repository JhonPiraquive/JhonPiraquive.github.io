---
track: pbpew
slug: 07-arrays-json-objetos
title: "Arrays, métodos útiles, JSON y objetos literales"
order: 7
prerequisites:
  - 01-intro-js-y-dom
  - 02-js-en-html
  - 03-variables-y-tipos
  - 04-operadores-y-decisiones
  - 05-bucles-y-errores
  - 06-funciones-y-callbacks
related:
  - 06-funciones-y-callbacks
  - 08-this-scope-clases
source_brief: kb/education/pipeline/pbpew/07-arrays-json-objetos/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Crear y manipular** arrays con índices, `length`, `push`/`pop` y `unshift`/`shift`, **distinguiendo** mutación del original frente a métodos que devuelven un nuevo array.
- **Aplicar** callbacks de la lección 6 con `.forEach`, `.map` y `.filter`, **eligiendo** el método adecuado según si necesita efecto secundario o un array transformado.
- **Serializar y deserializar** datos con `JSON.stringify` y `JSON.parse`, **reconociendo** qué tipos JS no son válidos en JSON.
- **Definir** objetos literales con propiedades y métodos, **acceder** con punto o corchetes y **usar** destructuración y spread para copiar o actualizar sin mutar directamente.
- **Explicar** referencia vs valor en arrays y objetos, **demostrando** cuándo dos variables comparten el mismo dato en memoria.

## Prerrequisitos

- **Lección 01 (`01-intro-js-y-dom`):** JavaScript en el navegador, `console.log`.
- **Lección 02 (`02-js-en-html`):** scripts en HTML, ejecutar código en consola.
- **Lección 03 (`03-variables-y-tipos`):** `let`/`const`, tipos primitivos (número, string, boolean).
- **Lección 04 (`04-operadores-y-decisiones`):** operadores, `if`, comparaciones.
- **Lección 05 (`05-bucles-y-errores`):** bucles `for`, índices `0` a `length - 1`.
- **Lección 06 (`06-funciones-y-callbacks`):** funciones, `return`, arrow functions, callbacks y funciones de orden superior — base para `.map`, `.filter` y `.forEach`.
- Capacidad para leer y escribir fragmentos en consola o `<script>` sin errores de sintaxis básica.

## Contenido

### Arrays

Un **array (arreglo)** es una lista **ordenada** de valores en una sola variable. Los índices empiezan en **0**: el primer elemento es `arr[0]`, el último `arr[arr.length - 1]`. Un índice fuera de rango devuelve `undefined` (no lanza error).

**Sintaxis literal:** elementos entre corchetes, separados por comas. Puedes mezclar tipos: `[1, "hola", true]`.

**Longitud:** propiedad `arr.length` — número de elementos.

**Mutación al final:** `push(valor)` añade al final y devuelve la nueva longitud; `pop()` quita el último y **lo devuelve**.

**Mutación al inicio:** `unshift(valor)` añade al inicio; `shift()` quita el primero y lo devuelve. Útil en colas simples; en arrays muy grandes es más costoso por la reindexación.

<!-- interactive: Callout -->
{
  "title": "Error frecuente — índice vs valor",
  "children": "El primer elemento tiene índice 0, no 1. arr[1] es el segundo elemento. Si esperas el primero, usa arr[0]."
}

<!-- code: javascript -->
```javascript
const nums = [2, 4, 6];
console.log(nums[0]);      // 2 — primer elemento
console.log(nums.length);  // 3
console.log(nums[nums.length - 1]); // 6 — último

nums.push(8);    // [2, 4, 6, 8]
const ultimo = nums.pop();  // ultimo === 8, nums === [2, 4, 6]

const cola = ["a", "b"];
cola.unshift("z");  // ["z", "a", "b"]
const primero = cola.shift();  // primero === "z"
```

**Callbacks en arrays (conexión lección 6):** `.forEach`, `.map` y `.filter` reciben una función que el motor invoca por cada elemento.

| Método | ¿Modifica original? | ¿Devuelve nuevo array? | Uso típico |
|--------|---------------------|------------------------|------------|
| `push` / `pop` / `shift` / `unshift` | Sí | No (longitud o elemento) | Añadir o quitar en extremos |
| `.map` / `.filter` | No | Sí | Transformar o filtrar |
| `.forEach` | No* | No (`undefined`) | Efectos por elemento (`console.log`, DOM) |

\* `.forEach` no cambia la estructura por sí solo, pero el callback puede mutar elementos si el programador lo hace.

<!-- interactive: CompareTable -->
{
  "headers": ["Operación", "¿Modifica original?", "¿Devuelve nuevo array?", "Ejemplo"],
  "rows": [
    ["push / pop / shift / unshift", "Sí", "No (longitud o elemento)", "arr.push(1)"],
    [".map / .filter", "No", "Sí", "arr.map(x => x * 2)"],
    [".forEach", "No*", "No (undefined)", "arr.forEach(console.log)"]
  ]
}

- **`.forEach(fn)`:** ejecuta `fn(elemento, indice, array)` por cada posición. **No devuelve** un array útil.
- **`.map(fn)`:** devuelve **nuevo array** con el resultado de `fn` en cada elemento. Misma longitud que el original.
- **`.filter(fn)`:** devuelve **nuevo array** solo con elementos donde `fn` devuelve valor truthy.

**Preview:** `.reduce`, `.find`, `.some` y `.every` se profundizan en lecciones posteriores.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  A[\"nums [2,4,6]\"]\n  A --> M[\".map(x => x * 2)\"]\n  M --> C[\"callback x=2 → 4\"]\n  M --> C2[\"callback x=4 → 8\"]\n  M --> C3[\"callback x=6 → 12\"]\n  C --> R[\"nuevo [4,8,12]\"]\n  C2 --> R\n  C3 --> R\n  A -.->|\"sin mutar\"| A"
}

<!-- code: javascript -->
```javascript
const nums = [2, 4, 6];

const dobles = nums.map((x) => x * 2);
// [4, 8, 12] — nums sigue [2, 4, 6]

const pares = nums.filter((x) => x % 2 === 0);
// [2, 4, 6]

nums.forEach((x) => console.log("valor:", x));
// efecto por elemento, sin array nuevo
```

<!-- interactive: Callout -->
{
  "title": "Caso real: totales en cero tras forEach",
  "children": "Un equipo escribe productos.forEach(p => p.precio * 1.19) esperando precios con IVA. Los precios no cambian porque forEach ignora el retorno del callback. Solución: const conIva = productos.map(p => p.precio * 1.19) y asignar el resultado."
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente — map sin asignar",
  "children": "nums.map(x => x * 2) sin asignar el resultado deja nums igual. .map devuelve un array nuevo; si no lo guardas, parece que no funcionó. Usa const dobles = nums.map(...)."
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente — return en callback con llaves",
  "children": "(x) => { x * 2 } devuelve undefined por elemento. Opciones: (x) => x * 2 sin llaves, o (x) => { return x * 2; } con return explícito."
}

<!-- code: javascript -->
```javascript
// Preview — combinar en un solo valor
const nums = [2, 4, 6];
const suma = nums.reduce((acc, x) => acc + x, 0);
console.log(suma); // 12
```

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — duplicar con map",
  "template": "const numeros = [3, 5, 7];\nconst dobles = numeros.___((n) => n * 2);\nconsole.log(dobles); // [6, 10, 14]",
  "blanks": [
    { "id": "blank1", "answer": "map", "placeholder": "método de transformación" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica la diferencia entre .forEach y .map cuando quieres duplicar cada número de una lista [1, 2, 3].",
  "hints": [".forEach no devuelve un array acumulado", ".map devuelve un nuevo array con los resultados del callback"],
  "expectedKeywords": ["forEach", "map", "nuevo", "devuelve", "undefined"],
  "successMessage": "Correcto. .map devuelve un nuevo array con los valores transformados; .forEach solo ejecuta el callback por elemento y retorna undefined."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea const notas = [6, 7, 8, 5] y obtén un array solo con notas ≥ 6 usando .filter. Pega tu código o describe el resultado.",
  "hints": ["El predicado devuelve true o false", "n => n >= 6"],
  "expectedKeywords": ["filter", "6", "7", "8"],
  "successMessage": "Correcto. const aprobadas = notas.filter(n => n >= 6); → [6, 7, 8]."
}

---

### JSON

**JSON (JavaScript Object Notation)** es un formato de **texto** para intercambiar datos: respuestas de APIs, `localStorage`, logs. Es un subconjunto de la sintaxis literal de objetos y arrays de JS — **no** admite funciones, `undefined` ni comentarios.

- **`JSON.stringify(obj)`:** convierte objeto o array JS → cadena JSON. Pierde métodos y tipos no serializables.
- **`JSON.parse(texto)`:** convierte cadena JSON → objeto o array JS. Lanza error si el texto no es JSON válido.

<!-- interactive: StepReveal -->
{
  "title": "Ciclo JSON: de objeto a texto y de vuelta",
  "steps": [
    {
      "title": "1. Objeto en memoria",
      "content": "const curso = { nombre: \"PBPEW\", horas: 40, activo: true }; — datos vivos en JavaScript con propiedades y tipos nativos."
    },
    {
      "title": "2. Serializar",
      "content": "const texto = JSON.stringify(curso); — convierte a cadena de texto lista para red o almacenamiento."
    },
    {
      "title": "3. Transmitir o guardar",
      "content": "El texto viaja por HTTP, se guarda en localStorage o en un archivo. Solo es texto, no código ejecutable."
    },
    {
      "title": "4. Deserializar",
      "content": "const otraVez = JSON.parse(texto); — reconstruye un objeto JS en memoria. Las funciones del original no vuelven."
    },
    {
      "title": "5. Usar en la app",
      "content": "Accedes a otraVez.nombre, filtras arrays, etc. JSON.parse solo valida sintaxis, no reglas de negocio (ej. edad negativa)."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  O[\"Objeto JS\\ncurso\"]\n  O --> S[\"JSON.stringify\"]\n  S --> T[\"'{\\\"nombre\\\":\\\"PBPEW\\\"...}'\"]\n  T --> P[\"JSON.parse\"]\n  P --> O2[\"Objeto JS\\notraVez\"]"
}

<!-- code: javascript -->
```javascript
const curso = {
  nombre: "PBPEW",
  horas: 40,
  activo: true,
};

const texto = JSON.stringify(curso);
console.log(texto);
// {"nombre":"PBPEW","horas":40,"activo":true}

const otraVez = JSON.parse(texto);
console.log(otraVez.nombre); // "PBPEW"
```

<!-- code: json -->
```json
{
  "nombre": "PBPEW",
  "horas": 40,
  "activo": true
}
```

<!-- interactive: Callout -->
{
  "title": "Caso real: carrito que revive ítems eliminados",
  "children": "Un frontend guarda el carrito con JSON.stringify en localStorage. El dev muta el array en memoria con push pero olvida volver a serializar. Al recargar, JSON.parse restaura la versión antigua. Lección: tras cada cambio, serializa de nuevo o trabaja con estado inmutable y guarda el nuevo array."
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente — stringify con funciones",
  "children": "JSON.stringify({ fn: () => {} }) produce \"{}\" — las funciones se omiten. Las propiedades con valor undefined en objetos también se excluyen del JSON."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — parsear JSON",
  "template": "const {{blank1}} = JSON.{{blank2}}('{\"ok\":true}');\nconsole.log(obj.ok); // true",
  "blanks": [
    { "id": "blank1", "answer": "obj", "placeholder": "nombre de variable" },
    { "id": "blank2", "answer": "parse", "placeholder": "método JSON" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo de persistir un carrito: (a) localStorage.setItem('carrito', texto), (b) const texto = JSON.stringify(carrito), (c) usuario modifica carrito, (d) al cargar JSON.parse(localStorage.getItem('carrito')). Indica el orden en uso normal.",
  "hints": ["Primero el usuario cambia datos", "Luego serializas", "Luego guardas", "Al cargar parseas"],
  "expectedKeywords": ["c", "b", "a", "d"],
  "successMessage": "Correcto. Orden habitual: (c) modifica → (b) stringify → (a) guarda → (d) al cargar parse."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué JSON.stringify({ fn: () => {} }) produce '{}' o omite fn?",
  "hints": ["JSON es solo datos", "No admite funciones ejecutables"],
  "expectedKeywords": ["función", "serializ", "texto", "datos"],
  "successMessage": "Correcto. JSON solo transporta datos estructurados (texto, números, booleanos, null, arrays, objetos). Las funciones no son datos serializables."
}

---

### Objetos literales

Un **objeto literal** agrupa propiedades con nombre (`clave: valor`) en una sola variable.

**Acceso:** notación de punto `alumno.nombre` o corchetes `alumno["nombre"]` — útiles si la clave es variable o tiene caracteres especiales.

**Método en objeto:** propiedad cuyo valor es una función. Preview de `this` en lección 8; aquí basta invocar `alumno.presentarse()`.

**Referencia vs valor:** primitivos (número, string, boolean) se copian por valor. Arrays y objetos se asignan por **referencia** — dos variables pueden apuntar al **mismo** objeto; mutar por una afecta a la otra.

**Copia superficial:** `const copia = { ...original }` o `const copiaArr = [...original]` crea un nuevo contenedor de primer nivel; objetos anidados pueden seguir compartiendo referencia (tema avanzado).

**Destructuración básica:** extraer propiedades o elementos en una línea.
- Array: `const [primero, segundo] = lista;`
- Objeto: `const { nombre, id } = alumno;`
- Renombrar: `const { nombre: nombreAlumno } = alumno;`
- Valor por defecto: `const { rol = "estudiante" } = usuario;`

**Spread en literales:** `const nuevo = { ...viejo, activo: true };` — clonar y actualizar sin mutar el original directamente.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph ref [Misma referencia]\n    V1[\"const a = { n: 1 }\"]\n    V2[\"const b = a\"]\n    V3[\"b.n = 9\"]\n    V1 --> V2 --> V3\n    V3 --> R1[\"a.n y b.n valen 9\"]\n  end\n  subgraph spread [Spread / nuevo objeto]\n    S1[\"const c = { ...a }\"]\n    S2[\"c.n = 5\"]\n    S1 --> S2\n    S2 --> R2[\"a.n sigue 9, c.n es 5\"]\n  end"
}

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo", "Asignación b = a", "Si b cambia el contenido, ¿afecta a a?"],
  "rows": [
    ["número, string, boolean", "copia el valor", "No"],
    ["array, objeto", "copia la referencia", "Sí, si mutas el contenido"]
  ]
}

<!-- code: javascript -->
```javascript
const alumno = {
  id: 42,
  nombre: "Sofía",
  presentarse() {
    return `Soy ${this.nombre}`;
  },
};

console.log(alumno.nombre);           // "Sofía"
console.log(alumno["nombre"]);        // "Sofía"
console.log(alumno.presentarse());    // "Soy Sofía"
```

<!-- code: javascript -->
```javascript
const original = { puntos: 10 };
const ref = original;      // misma referencia
ref.puntos = 99;
console.log(original.puntos); // 99 — mutación compartida

const copia = { ...original, puntos: 10 };
copia.puntos = 50;
console.log(original.puntos); // 99
console.log(copia.puntos);    // 50
```

<!-- code: javascript -->
```javascript
const lista = ["rojo", "verde", "azul"];
const [primero, , tercero] = lista;
console.log(primero, tercero); // "rojo" "azul"

const usuario = { id: 1, nombre: "Ana", rol: "admin" };
const { nombre, rol = "invitado" } = usuario;
console.log(nombre, rol); // "Ana" "admin"
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente — comparar objetos con ===",
  "children": "[1,2] === [1,2] es false — son referencias distintas aunque el contenido sea igual. Lo mismo con objetos literales distintos. Comparar contenido requiere lógica explícita o serialización."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dado const persona = { nombre: 'Luis', edad: 20 }, usa destructuración para extraer nombre y edad en constantes e imprímelas en consola.",
  "hints": ["const { nombre, edad } = persona", "Desestructuración en el lado izquierdo del ="],
  "expectedKeywords": ["{", "nombre", "edad", "persona"],
  "successMessage": "Correcto. const { nombre, edad } = persona; console.log(nombre, edad); → Luis 20."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dado const items = ['pan', 'leche'], añade 'huevos' al final con push (sin reasignar items). Luego crea const copia = [...items] y añade 'mantequilla' solo a copia. ¿Qué contiene cada array?",
  "hints": ["push muta items", "spread crea array nuevo", "push en copia no afecta items"],
  "expectedKeywords": ["pan", "leche", "huevos", "mantequilla"],
  "successMessage": "Correcto. items → ['pan','leche','huevos']; copia → ['pan','leche','huevos','mantequilla']."
}

---

### Resumen

- Un **array** es una lista ordenada con índices desde **0**; `length` indica cuántos elementos hay.
- **`push`/`pop`/`shift`/`unshift`** mutan el array original; **`.map` y `.filter`** devuelven arrays nuevos sin alterar el original.
- **`.forEach`** ejecuta un callback por elemento pero **no** devuelve un array transformado — usa **`.map`** cuando necesites resultados acumulados.
- Los **callbacks** de la lección 6 son el mismo patrón que `.forEach`, `.map` y `.filter`.
- **JSON** serializa datos a texto (`stringify`) y los reconstruye (`parse`); no incluye funciones ni `undefined`.
- Un **objeto literal** agrupa propiedades; acceso con `.` o `[]`; métodos son funciones como propiedades.
- **Arrays y objetos** se asignan por **referencia**; **spread** y destructuración ayudan a copiar o extraer sin mutar accidentalmente.
- **Preview lección 8:** `this` en métodos de objetos literales.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué el índice del primer elemento de un array es 0 y no 1?",
  "hints": ["Convención de offsets en memoria", "Coherencia con bucles i < arr.length"],
  "expectedKeywords": ["0", "offset", "longitud", "bucle"],
  "successMessage": "Correcto. El índice 0 es convención (offset desde el inicio); encaja con arr.length y bucles for desde 0 hasta length - 1."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Tras const a = { x: 1 }; const b = a; b.x = 5;, ¿qué vale a.x? Explica por qué.",
  "hints": ["Objetos por referencia", "a y b apuntan al mismo objeto"],
  "expectedKeywords": ["5", "referencia", "mismo"],
  "successMessage": "Correcto. a.x es 5 porque a y b comparten la misma referencia; mutar por b afecta a a."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuál es la diferencia principal entre push y unshift?",
  "hints": ["Ambos mutan", "Uno al final, otro al inicio"],
  "expectedKeywords": ["final", "inicio", "push", "unshift"],
  "successMessage": "Correcto. push añade al final; unshift añade al inicio del array."
}

---

## Reto integrador

**"Catálogo de cursos PBPEW"**

Partiendo del array de objetos literales:

<!-- code: javascript -->
```javascript
const cursos = [
  { id: 1, nombre: "JS básico", horas: 20, activo: true },
  { id: 2, nombre: "DOM", horas: 15, activo: false },
  { id: 3, nombre: "Fetch", horas: 10, activo: true },
];
```

1. Usa **`.filter`** para obtener `activos` (solo `activo === true`).
2. Usa **`.map`** en `activos` para crear `resumen` con strings `"ID-1: JS básico (20h)"` (plantilla con `id`, `nombre`, `horas`).
3. Calcula `totalHorasActivas` con **`.reduce`** sobre `activos`.
4. Serializa `activos` con **`JSON.stringify`** y simula envío a API; parsea de vuelta con **`JSON.parse`** en `importados`.
5. Usa **destructuración:** `const { nombre, horas } = importados[0]` y muestra en consola.
6. Demuestra **referencia:** asigna `const ref = cursos`, muta `ref[0].nombre` y comprueba que `cursos[0].nombre` cambió; luego crea `const clon = cursos.map(c => ({ ...c }))`, muta `clon[0].nombre` y verifica que `cursos[0].nombre` **no** cambia.

**Criterio de éxito:** callbacks correctos en map/filter/reduce, sin confundir `forEach` con `map`, JSON válido round-trip, comprensión de referencia vs copia superficial con spread.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto 'Catálogo de cursos PBPEW': filter de activos, map a resumen, reduce de horas, round-trip JSON y demostración de referencia vs clon con spread. Pega tu código o describe los resultados clave.",
  "hints": [
    "activos = cursos.filter(c => c.activo === true)",
    "resumen = activos.map(c => `ID-${c.id}: ${c.nombre} (${c.horas}h)`)",
    "totalHorasActivas = activos.reduce((acc, c) => acc + c.horas, 0)",
    "const importados = JSON.parse(JSON.stringify(activos))",
    "clon = cursos.map(c => ({ ...c })) — mutar clon[0] no afecta cursos[0]"
  ],
  "expectedKeywords": ["filter", "map", "reduce", "JSON", "spread"],
  "successMessage": "Excelente. Has integrado arrays, callbacks, JSON y referencia vs copia superficial en un flujo realista de catálogo."
}

---

## Cierre

Has completado el estudio de arrays, JSON y objetos literales en JavaScript. Estos conceptos conectan los callbacks de la lección 6 con datos estructurados que verás en APIs, `localStorage` y el DOM.

**Ideas clave para retener:**

- **Arrays** ordenan datos con índices desde 0; elige mutación (`push`) o transformación inmutable (`.map`, `.filter`).
- **Callbacks** en métodos de array: misma idea que en `repetir(n, fn)` — la función que pasas define qué hacer con cada elemento.
- **JSON** intercambia datos como texto; `stringify` y `parse` son el puente entre memoria y red o almacenamiento.
- **Objetos literales** modelan entidades con propiedades y métodos; **referencia** vs **spread** evita mutaciones accidentales.
- **Destructuración** extrae valores en una línea y admite valores por defecto.

**Siguiente paso:** lección `08-this-scope-clases` — `this`, alcance y clases en JavaScript.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué devuelve [10, 20].map((x) => x / 10)?",
      "options": [
        "undefined",
        "[1, 2] — un nuevo array",
        "[10, 20] modificado in place",
        "El número 2"
      ],
      "correctIndex": 1,
      "feedback": ".map aplica el callback a cada elemento y devuelve un nuevo array con los resultados. El original no se reemplaza automáticamente."
    },
    {
      "question": "¿Cuál es la diferencia principal entre push y unshift?",
      "options": [
        "push solo funciona con strings",
        "push añade al final; unshift al inicio",
        "unshift devuelve el elemento eliminado",
        "Ninguna; son alias"
      ],
      "correctIndex": 1,
      "feedback": "Ambos mutan el array, pero push/pop operan al final y unshift/shift al inicio."
    },
    {
      "question": "Tras const a = { x: 1 }; const b = a; b.x = 5;, ¿qué vale a.x?",
      "options": [
        "1",
        "5",
        "undefined",
        "Error de sintaxis"
      ],
      "correctIndex": 1,
      "feedback": "Los objetos se asignan por referencia. a y b apuntan al mismo objeto; mutar por b se ve en a."
    },
    {
      "question": "¿Para qué sirve JSON.stringify?",
      "options": [
        "Ejecutar funciones guardadas en un objeto",
        "Convertir un objeto o array JS a texto JSON para transmitir o guardar",
        "Validar que un usuario esté autenticado",
        "Ordenar un array alfabéticamente"
      ],
      "correctIndex": 1,
      "feedback": "stringify serializa a texto; parse hace el camino inverso. No serializa funciones."
    },
    {
      "question": "¿Qué hace const { nombre, edad = 18 } = usuario si usuario solo tiene { nombre: \"Eva\" }?",
      "options": [
        "Lanza TypeError",
        "nombre es \"Eva\" y edad es 18",
        "edad es undefined sin default",
        "Copia profunda de usuario"
      ],
      "correctIndex": 1,
      "feedback": "La destructuración extrae nombre existente y aplica el valor por defecto 18 a edad cuando falta o es undefined."
    }
  ]
}
