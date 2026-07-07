---
track: pbpew
slug: 12-ajax-fetch
title: "AJAX y la API fetch"
order: 12
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
  - 11-asincronia
related:
  - 11-asincronia
  - 07-arrays-json-objetos
  - 10-dom-y-eventos
prev: 11-asincronia
next: null
source_brief: kb/education/pipeline/pbpew/12-ajax-fetch/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** qué es AJAX y por qué permite actualizar parte de la página sin recargarla completa.
- **Realizar** peticiones HTTP con `fetch`, **comprobando** `response.ok` antes de parsear el cuerpo.
- **Leer** respuestas JSON con `await response.json()` y **enviar** objetos en POST con `JSON.stringify` y cabecera `Content-Type: application/json`.
- **Distinguir** errores de red, códigos HTTP no exitosos y JSON inválido, **mostrando** mensajes claros en la UI.
- **Integrar** `fetch` con DOM y eventos (`async/await`, `try/catch`) para cargar y mostrar datos remotos.
- **Reconocer** XMLHttpRequest como API legada y CORS como restricción del navegador entre orígenes distintos.

## Prerrequisitos

- **Lección 07 (`07-arrays-json-objetos`):** objetos literales, `JSON.stringify` y `JSON.parse`.
- **Lección 10 (`10-dom-y-eventos`):** seleccionar nodos, `addEventListener`, actualizar `textContent`.
- **Lección 11 (`11-asincronia`):** Promises, `.then()` / `.catch()`, `async` / `await`, `try/catch`.
- Servidor local o extensión Live Server para evitar problemas con `file://` en demos de red.
- Conexión a internet para practicar con [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/).

## Contenido

### ¿Qué es AJAX? {#QueEsAjaxSection}

**AJAX** (Asynchronous JavaScript And XML) es un **patrón**, no una librería: usar JavaScript para enviar peticiones HTTP **en segundo plano** y actualizar solo la zona del DOM que hace falta, **sin recargar toda la página**. El nombre menciona XML por historia; hoy casi todo es **JSON**.

Una **petición HTTP en el navegador** incluye:

- **URL** del recurso.
- **Método:** `GET` (leer), `POST` (enviar/crear), etc.
- **Cabeceras (`headers`):** metadatos como `Content-Type` o `Accept`.
- **Cuerpo (`body`):** en `POST`/`PUT`, los datos enviados (texto o JSON serializado).

El **servidor responde** con un **código de estado** (`200`, `404`, `500`…) y un cuerpo (JSON, HTML, texto).

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant U as Usuario\n  participant UI as Página / DOM\n  participant JS as JavaScript\n  participant API as Servidor API\n\n  U->>UI: Clic \"Cargar datos\"\n  UI->>JS: handler async\n  JS->>API: fetch GET /todos/1\n  API-->>JS: 200 + JSON\n  JS->>JS: response.ok + response.json()\n  JS->>UI: actualiza #titulo\n  UI-->>U: ve título sin recargar"
}

<!-- interactive: Callout -->
{
  "title": "AJAX ≠ fetch",
  "children": "AJAX es el enfoque (datos en segundo plano + actualización parcial). fetch y XMLHttpRequest son herramientas para implementarlo. En código nuevo del curso: usar fetch."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué AJAX mejoró la experiencia frente a recargar la página entera al enviar un formulario?",
  "hints": ["Piensa en qué parte de la pantalla cambia", "¿Qué percibe el usuario: parpadeo o fluidez?"],
  "expectedKeywords": ["actualizar", "recargar", "parte", "rápido"],
  "successMessage": "Correcto. Solo se actualiza la zona necesaria; menos parpadeo y sensación de mayor velocidad."
}

---

### XMLHttpRequest (legado) y fetch moderno {#XmlhttprequestLegadoSection}

#### XMLHttpRequest — solo referencia

**XMLHttpRequest (XHR)** es la API antigua del navegador. Sigue en código legacy y algunas librerías, pero es más verbosa (`open`, `send`, callbacks `onload` / `onerror`).

<!-- code: javascript -->
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);
    console.log(data.title);
  } else {
    console.error("HTTP", xhr.status);
  }
};
xhr.onerror = function () {
  console.error("Error de red");
};
xhr.send();
```

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "XMLHttpRequest", "fetch"],
  "rows": [
    ["Estilo", "Callbacks (onload, onerror)", "Promises / async/await"],
    ["API", "Verbosa (open, send)", "Más compacta"],
    ["Errores HTTP", "Revisar status manualmente", "Igual: revisar ok / status"],
    ["Uso en PBPEW", "Solo mención legado", "Estándar del curso"]
  ]
}

#### `fetch(url, options)` — API moderna

`fetch` devuelve una **Promise** que se resuelve con un objeto `Response` — **no** con los datos ya parseados. Encaja con promesas y `async/await` de la lección 11.

**Flujo típico:**

1. Llamar `fetch(url, options)`.
2. Comprobar `response.ok` o el rango de `status`.
3. Leer el cuerpo con `.json()`, `.text()` u otro método (**una sola vez** por `Response`).
4. Usar los datos en la UI o en lógica.

**`response.ok`:** atajo booleano — `true` si `status` está entre 200 y 299.

<!-- interactive: Callout -->
{
  "title": "Error frecuente — fetch no falla en 404/500",
  "children": "fetch solo rechaza la Promise en errores de red (sin conexión, CORS bloqueado, URL inválida). Un HTTP 404 o 500 sigue resolviendo; debes comprobar response.ok o response.status y lanzar error si hace falta."
}

##### GET básico con `.then()`

<!-- code: javascript -->
```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    return response.json();
  })
  .then((todo) => {
    console.log(todo.title);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
```

##### GET con `async/await` (recomendado)

<!-- code: javascript -->
```javascript
async function obtenerTodo(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("No se pudo cargar el todo:", error);
    return null;
  }
}

obtenerTodo(1).then((todo) => {
  if (todo) console.log(todo.title);
});
```

<!-- interactive: StepReveal -->
{
  "title": "Flujo fetch GET",
  "steps": [
    { "title": "1. Evento del usuario", "content": "El usuario hace clic en un botón; se dispara un handler async." },
    { "title": "2. fetch sale del navegador", "content": "await fetch(url) envía la petición HTTP GET al servidor." },
    { "title": "3. Servidor responde", "content": "Llega un Response con status 200 y cuerpo JSON en texto." },
    { "title": "4. Validar y parsear", "content": "Comprueba response.ok; luego const datos = await response.json()." },
    { "title": "5. Actualizar DOM", "content": "Pinta datos.title en un elemento sin recargar la página." }
  ]
}

<!-- interactive: CodeChallenge -->
{
  "template": "async function getTodo(id) {\n  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);\n  if (!res.___) throw new Error(\"HTTP \" + res.status);\n  return await res.___();\n}",
  "blanks": [
    { "id": "ok", "answer": "ok", "hint": "Atajo booleano para status 200–299" },
    { "id": "json", "answer": "json", "hint": "Método que parsea el cuerpo como JSON" }
  ]
}

##### POST con JSON y cabeceras

**GET** pide datos (sin cuerpo en la práctica didáctica). **POST** envía datos al servidor con `body` y suele usar `Content-Type: application/json`.

<!-- interactive: CompareTable -->
{
  "headers": ["", "GET", "POST"],
  "rows": [
    ["Uso típico", "Leer / listar", "Crear / enviar formulario"],
    ["Cuerpo", "No (en práctica PBPEW)", "Sí (JSON.stringify)"],
    ["Cabecera frecuente", "Accept: application/json", "Content-Type: application/json"]
  ]
}

<!-- code: http -->
```http
POST /posts HTTP/1.1
Host: jsonplaceholder.typicode.com
Content-Type: application/json

{"title":"Hola","body":"Mundo","userId":1}
```

<!-- code: javascript -->
```javascript
async function crearPost(titulo, cuerpo) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titulo,
      body: cuerpo,
      userId: 1,
    }),
  });

  if (!response.ok) {
    throw new Error("Error al crear: " + response.status);
  }

  const creado = await response.json();
  console.log("ID asignado (simulado):", creado.id);
  return creado;
}
```

<!-- interactive: Callout -->
{
  "title": "POST sin stringify no funciona",
  "children": "Enviar body: { email, mensaje } sin JSON.stringify produce cuerpo inválido. Serializa con JSON.stringify y declara Content-Type: application/json."
}

<!-- interactive: CodeChallenge -->
{
  "template": "await fetch(url, {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/___\" },\n  body: JSON.___({ nombre: \"Ana\" })\n});",
  "blanks": [
    { "id": "json-type", "answer": "json", "hint": "Tipo MIME del cuerpo" },
    { "id": "stringify", "answer": "stringify", "hint": "Convierte objeto JS a texto JSON" }
  ]
}

##### Manejo de errores

Distingue tres tipos de fallo:

| Tipo | Cuándo ocurre | Cómo detectarlo |
|------|---------------|-----------------|
| **Red / CORS** | Sin conexión, origen bloqueado | `fetch` rechaza → `catch` |
| **HTTP no exitoso** | 404, 401, 500 | `!response.ok` → lanzar error manual |
| **JSON inválido** | Cuerpo no es JSON válido | `response.json()` lanza en `catch` |

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  F[\"await fetch(url)\"]\n  F -->|rechaza| R[\"Error de red / CORS\"]\n  F -->|resuelve| OK{\"response.ok?\"}\n  OK -->|No| H[\"throw Error HTTP status\"]\n  OK -->|Sí| J[\"await response.json()\"]\n  J -->|falla parse| P[\"Error JSON inválido\"]\n  J -->|ok| D[\"Usar datos\"]\n  R --> M[\"Mostrar mensaje al usuario\"]\n  H --> M\n  P --> M"
}

<!-- code: javascript -->
```javascript
const tituloEl = document.querySelector("#titulo-todo");
const boton = document.querySelector("#cargar");

boton.addEventListener("click", async () => {
  tituloEl.textContent = "Cargando…";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (!data.title) throw new Error("Respuesta sin título");
    tituloEl.textContent = data.title;
  } catch (e) {
    tituloEl.textContent = "Error al cargar datos";
    console.error(e);
  }
});
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica por qué fetch puede resolver con response.status === 404 sin entrar en .catch() si no lanzas error manualmente.",
  "hints": ["¿Qué rechaza fetch?", "¿Un 404 es una respuesta HTTP válida?"],
  "expectedKeywords": ["red", "ok", "comprobar", "404"],
  "successMessage": "Correcto. fetch solo rechaza en fallos de red; un 404 es una Response válida con ok === false. Hay que comprobar ok o status."
}

##### CORS y origen

**CORS** (Cross-Origin Resource Sharing) es una política del **navegador**. Una página en `https://mi-sitio.com` solo puede leer la respuesta de `fetch` a otro origen (dominio o puerto distinto) si el **servidor destino** envía cabeceras que lo permiten (`Access-Control-Allow-Origin`).

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  subgraph mismo [Mismo origen — sin CORS extra]\n    A[\"https://app.com\"] --> B[\"https://app.com/api\"]\n  end\n  subgraph cruzado [Origen cruzado — servidor debe permitir]\n    C[\"https://app.com\"] --> D[\"https://api.otro.com\"]\n    D --> H[\"Access-Control-Allow-Origin\"]\n  end"
}

<!-- interactive: Callout -->
{
  "title": "Demos locales",
  "children": "Abrir HTML como file:// o sin servidor estático puede romper peticiones. Usa npx serve, Live Server o similar. Para practicar, jsonplaceholder.typicode.com permite CORS."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué es CORS y quién debe permitirlo: el navegador del usuario, tu JavaScript o el servidor de la API?",
  "hints": ["¿Quién envía Access-Control-Allow-Origin?", "¿El navegador bloquea o el script?"],
  "expectedKeywords": ["servidor", "origen", "navegador"],
  "successMessage": "Correcto. CORS lo controla el navegador según cabeceras del servidor de la API; tu JS no puede saltárselo."
}

---

### Demo en vivo (API pública) {#DemoEnVivoApiSection}

Practica con una API real que permite CORS. El botón pide un todo de ejemplo y muestra el título en pantalla.

**Estados de la UI:** idle → loading → éxito o error (red / HTTP).

<!-- code: json -->
```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

<!-- interactive: DemoEnVivoApi -->
{
  "buttonLabel": "Cargar título de ejemplo",
  "url": "https://jsonplaceholder.typicode.com/todos/1",
  "targetSelector": "#demo-titulo",
  "loadingMessage": "Cargando…",
  "errorMessage": "Error al cargar datos"
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe async function getTodo(id) que haga GET a https://jsonplaceholder.typicode.com/todos/${id}, compruebe ok y devuelva el objeto JSON o null si falla.",
  "hints": [
    "try/catch envuelve await fetch",
    "if (!response.ok) return null o throw",
    "return await response.json()"
  ],
  "expectedKeywords": ["async", "fetch", "ok", "json"],
  "successMessage": "Correcto. Patrón: fetch → comprobar ok → await response.json() → return o null en catch."
}

---

### Resumen {#ResumenSection}

- **AJAX** es el patrón de pedir datos en segundo plano y actualizar el DOM sin recarga completa; hoy las respuestas suelen ser **JSON**.
- **`fetch`** devuelve una Promise con `Response`; comprueba **`response.ok`** antes de **`await response.json()`**.
- **POST con JSON** requiere `JSON.stringify` en `body` y cabecera **`Content-Type: application/json`**.
- **Errores:** red (catch), HTTP (`!ok`), parseo JSON (catch tras `.json()`). La UI debe mostrar mensaje claro.
- **XMLHttpRequest** es legado; en proyectos nuevos usa **fetch** con `async/await`.
- **CORS** lo resuelve el servidor de la API; usa servidor local y APIs públicas de práctica.
- **Cierre del track núcleo:** ya puedes combinar DOM, eventos, asincronía y datos remotos — base para los **proyectos** PBPEW.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo correcto de un GET con fetch: (a) await response.json(), (b) await fetch(url), (c) comprobar response.ok, (d) usar datos en la UI. Indica el orden b → ? → ? → ?.",
  "hints": ["Primero la petición", "Luego validar", "Después parsear", "Al final pintar"],
  "expectedKeywords": ["b", "c", "a", "d"],
  "successMessage": "Correcto. Orden: (b) fetch → (c) comprobar ok → (a) response.json() → (d) usar en UI."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Con el mismo endpoint jsonplaceholder, muestra todo.title en console.log usando .then() encadenado (sin async/await). Describe los pasos o pega el código.",
  "hints": [
    "fetch(url).then(r => …)",
    "if (!r.ok) throw …",
    "return r.json()",
    ".then(todo => console.log(todo.title))"
  ],
  "expectedKeywords": ["then", "json", "ok"],
  "successMessage": "Correcto. Encadena: fetch → validar ok → return response.json() → then con console.log."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "POST a https://jsonplaceholder.typicode.com/posts con title: \"Hola\", body: \"Mundo\", userId: 1. ¿Qué dos piezas faltan casi siempre si envías un objeto directo en body?",
  "hints": ["El cuerpo HTTP es texto", "El servidor necesita saber el tipo"],
  "expectedKeywords": ["stringify", "Content-Type", "json"],
  "successMessage": "Correcto. Faltan JSON.stringify en body y Content-Type: application/json en headers."
}

---

## Reto integrador

**«Mini panel de tareas remotas»**

En una página HTML con **servidor local**:

1. **UI:** input `#nuevo-titulo`, botón «Añadir», lista `#lista-tareas`, zona `#estado` para mensajes (cargando / error).
2. **Cargar al inicio:** `GET https://jsonplaceholder.typicode.com/todos?_limit=5` — pinta cada `title` en `#lista-tareas` como `<li>`. Muestra «Cargando…» mientras tanto.
3. **Añadir:** al clic, `POST` a `https://jsonplaceholder.typicode.com/todos` con `title` del input, `completed: false`, `userId: 1`; cabeceras y `JSON.stringify` correctos. Al éxito, añade el título a la lista y limpia el input.
4. **Errores:** si `!response.ok` o fallo de red, escribe en `#estado` un mensaje claro (no dejes la lista vacía sin explicación).
5. **Async:** implementa con `async/await` y una función `async function cargarTareas()` reutilizable.

**Criterio de éxito:** GET y POST con `fetch`, comprobación de `ok`, JSON parseado, manejo de errores visible, DOM actualizado sin recargar. Sin jQuery ni librerías HTTP externas.

<!-- code: html -->
```html
<input id="nuevo-titulo" type="text" placeholder="Nueva tarea" />
<button id="btn-anadir">Añadir</button>
<ul id="lista-tareas"></ul>
<p id="estado"></p>
```

<!-- code: javascript -->
```javascript
async function cargarTareas() {
  const lista = document.querySelector("#lista-tareas");
  const estado = document.querySelector("#estado");
  lista.innerHTML = "";
  estado.textContent = "Cargando…";
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    if (!res.ok) throw new Error("HTTP " + res.status);
    const tareas = await res.json();
    estado.textContent = "";
    tareas.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t.title;
      lista.appendChild(li);
    });
  } catch (e) {
    estado.textContent = "Error al cargar tareas";
    console.error(e);
  }
}

// Completa: listener en #btn-anadir con POST y actualización de lista
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto «Mini panel de tareas remotas»: cargarTareas con GET, POST al añadir, mensajes en #estado y lista en DOM. Pega tu código o describe cómo manejas ok y errores.",
  "hints": [
    "cargarTareas() al cargar la página",
    "POST: method, headers Content-Type, body JSON.stringify",
    "if (!res.ok) throw antes de res.json()",
    "try/catch en ambas operaciones"
  ],
  "expectedKeywords": ["fetch", "POST", "ok", "json"],
  "successMessage": "Excelente. Has integrado GET, POST, validación HTTP, JSON y actualización del DOM sin recargar la página."
}

---

## Cierre

Has completado la última lección núcleo del track PBPEW: **AJAX y fetch**. Unes lo aprendido en DOM y eventos (lección 10), asincronía (lección 11) y JSON (lección 7) para hablar con APIs reales desde el navegador.

**Ideas clave para retener:**

- **AJAX** actualiza solo lo necesario; **fetch** es la API estándar del curso.
- **`response.ok`** y **`await response.json()`** son obligatorios en el flujo mental; no asumas que un 404 entra en `catch` solo.
- **POST** exige serialización y cabeceras coherentes con el servidor.
- **Errores visibles** en la UI evitan pantallas en blanco o «undefined» en producción.
- **CORS** y **servidor local** son parte del entorno de desarrollo front, no detalles opcionales.

**Siguiente paso:** proyectos PBPEW (calculadora, todo-list, piedra-papel-tijera, ajedrez) — aplicarás DOM, eventos, asincronía y fetch en escenarios completos.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué devuelve fetch(url) cuando el servidor responde con HTTP 404?",
      "options": [
        "Rechaza la Promise inmediatamente",
        "Resuelve con un Response cuyo ok es false",
        "Devuelve null",
        "Lanza SyntaxError"
      ],
      "correctIndex": 1,
      "feedback": "fetch solo rechaza en errores de red. Un 404 sigue siendo una respuesta HTTP válida; debes comprobar response.ok o status."
    },
    {
      "question": "¿Cuál es la forma correcta de enviar un objeto JavaScript como JSON en un POST con fetch?",
      "options": [
        "body: objeto sin más",
        "body: JSON.stringify(objeto) y Content-Type: application/json",
        "body: objeto.toString()",
        "Solo headers: { JSON: true }"
      ],
      "correctIndex": 1,
      "feedback": "El cuerpo HTTP es texto; hay que serializar con JSON.stringify y declarar el tipo con Content-Type."
    },
    {
      "question": "Tras const res = await fetch(url) con respuesta 200 y cuerpo JSON, ¿qué expresión obtiene el objeto parseado?",
      "options": [
        "res.data",
        "res.body",
        "await res.json()",
        "JSON.parse(res)"
      ],
      "correctIndex": 2,
      "feedback": "Response expone métodos asíncronos .json(), .text(), etc. No hay propiedad .data automática."
    },
    {
      "question": "¿Qué describe mejor AJAX en el contexto del curso?",
      "options": [
        "Una librería que hay que instalar con npm",
        "Un patrón: pedir datos en segundo plano y actualizar parte de la página sin recarga completa",
        "Un reemplazo de HTML5",
        "Solo sirve para archivos XML"
      ],
      "correctIndex": 1,
      "feedback": "AJAX es el enfoque; fetch y XHR son medios para implementarlo. Hoy las respuestas suelen ser JSON."
    },
    {
      "question": "Una página en https://mi-app.com no puede leer la respuesta de fetch(\"https://api.externa.com/datos\"). ¿Cuál es la causa más habitual en el navegador?",
      "options": [
        "JavaScript no soporta HTTPS",
        "Falta async en la función",
        "El servidor no permite CORS para ese origen",
        "Hay que usar XMLHttpRequest obligatoriamente"
      ],
      "correctIndex": 2,
      "feedback": "El navegador bloquea respuestas de otro origen si el servidor no envía cabeceras CORS adecuadas."
    }
  ]
}
