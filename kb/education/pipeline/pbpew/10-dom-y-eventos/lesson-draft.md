---
track: pbpew
slug: 10-dom-y-eventos
title: "Manipulación del DOM y eventos"
order: 10
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
related:
  - 01-intro-js-y-dom
  - 06-funciones-y-callbacks
  - 09-estructuras-de-datos
  - 11-asincronia
source_brief: kb/education/pipeline/pbpew/10-dom-y-eventos/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Seleccionar** nodos del DOM con `querySelector`, `querySelectorAll` y `getElementById`, **comprobando** `null` cuando no hay coincidencias.
- **Leer y modificar** contenido con `textContent` e `innerHTML`, **explicando** cuándo cada uno es seguro frente a entrada de usuario (XSS).
- **Aplicar** estilos inline y clases con `style` y `classList` (`.add`, `.remove`, `.toggle`, `.contains`).
- **Crear y eliminar** nodos con `createElement`, `appendChild` y `remove` / `removeChild`.
- **Registrar** reacciones con `addEventListener`, **usar** el objeto evento (`target`, `currentTarget`, `key`, `preventDefault`) y **implementar** delegación en listas dinámicas.
- **Integrar** selección, mutación del DOM y eventos en una lista de tareas en la página (reto integrador).

## Prerrequisitos

- **Lección 01 (`01-intro-js-y-dom`):** concepto de DOM como árbol en memoria y objeto `document`.
- **Lección 02 (`02-js-en-html`):** enlazar `<script>`, orden de carga y `DOMContentLoaded` / script al final del `<body>`.
- **Lecciones 03–05:** variables, operadores, bucles y manejo básico de errores.
- **Lección 06 (`06-funciones-y-callbacks`):** funciones y callbacks — base de los listeners.
- **Lección 09 (`09-estructuras-de-datos`):** cola FIFO — paralelo con la cola de eventos del navegador.
- Saber leer HTML básico (`id`, `class`, formularios, botones, listas).

## Contenido

### Introducción: DOM mutable

En la lección 1 viste que el DOM es la representación viva del HTML en memoria. Aquí aplicas las **APIs concretas** para leer, crear, actualizar y borrar nodos en tiempo de ejecución, y para **reaccionar** a acciones del usuario con eventos.

El navegador encola eventos (FIFO, como la cola de la lección 9) y despacha los callbacks de `addEventListener` en el hilo principal. Los listeners son **callbacks** de la lección 6.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  S[\"Seleccionar querySelector\"] --> R[\"Leer textContent\"]\n  S --> U[\"Actualizar classList / innerHTML\"]\n  S --> C[\"createElement + appendChild\"]\n  C --> D[\"remove / removeChild\"]"
}

---

### Seleccionar nodos

Cualquier manipulación empieza por **obtener una referencia** al nodo. En PBPEW se prefiere `querySelector` / `querySelectorAll` por flexibilidad (combinan etiqueta, clase, `id`, atributos).

| API | Devuelve | Notas |
|-----|----------|-------|
| `document.querySelector(selectorCSS)` | Primer nodo o `null` | Selectores CSS (`#app`, `.card`, `button.item`) |
| `document.querySelectorAll(selectorCSS)` | `NodeList` estática | No es array; usa `forEach` o `[...lista]` |
| `document.getElementById("id")` | Un elemento o `null` | Válido cuando solo tienes un `id` único |
| `document.getElementsByClassName("clase")` | Colección **viva** | Menos flexible que `querySelectorAll` |

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Si querySelector no encuentra nada devuelve null. Llamar .textContent sin comprobar lanza TypeError. Valida la referencia o usa optional chaining con cuidado."
}

<!-- code: javascript -->
```javascript
const titulo = document.querySelector("h1");
const botones = document.querySelectorAll("button.item");
const porId = document.getElementById("app");
const porClase = document.getElementsByClassName("card");

console.log(titulo?.textContent);
botones.forEach((btn) => console.log(btn));
```

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el selector",
  "template": "const items = document.{{blank1}}(\".item\");\nconst app = document.{{blank2}}(\"#app\");\n\nif (app) {\n  console.log(app.textContent);\n}",
  "blanks": [
    { "id": "blank1", "answer": "querySelectorAll", "placeholder": "todos los .item" },
    { "id": "blank2", "answer": "querySelector", "placeholder": "primer #app" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Selecciona el elemento con id titulo y cambia su textContent a tu nombre. Describe qué API usaste y por qué.",
  "hints": ["document.querySelector(\"#titulo\")", "Comprueba que no sea null antes de asignar"],
  "expectedKeywords": ["querySelector", "textContent", "titulo"],
  "successMessage": "Correcto. querySelector(\"#titulo\") devuelve el nodo; textContent actualiza el texto visible."
}

---

### Modificar DOM

Una vez seleccionado el nodo, puedes **leer y escribir** contenido, **cambiar estilos** y **añadir o quitar** nodos del árbol.

#### Contenido: `textContent` vs `innerHTML`

- **`textContent`** — texto plano; al asignar, el navegador **no interpreta** etiquetas HTML. Más seguro con datos de usuario.
- **`innerHTML`** — interpreta marcado HTML; útil para plantillas **controladas por ti**, **peligroso** con entrada no confiable (riesgo XSS).

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "textContent", "innerHTML"],
  "rows": [
    ["Interpreta HTML", "No (texto plano)", "Sí"],
    ["Riesgo con usuario", "Bajo", "Alto (XSS)"],
    ["Uso PBPEW", "Mensajes, contadores, datos", "Plantillas fijas controladas por ti"],
    ["Ejemplo", "p.textContent = userInput", "p.innerHTML = \"<strong>OK</strong>\""]
  ]
}

<!-- code: javascript -->
```javascript
const p = document.querySelector("#mensaje");

p.textContent = "Nuevo texto"; // seguro: muestra texto literal
p.innerHTML = "<strong>Importante</strong>"; // interpreta etiquetas

const usuario = "<img src=x onerror=alert(1)>";
p.textContent = usuario; // se ve como texto — correcto
// p.innerHTML = usuario; // ⚠️ peligroso con entrada externa
```

#### Estilos y clases

- **`elemento.style.propiedad = valor`** — estilo inline puntual (`color`, `display`, etc.).
- **`elemento.classList`** — API moderna: `.add("activo")`, `.remove("oculto")`, `.toggle("visible")`, `.contains("activo")`. Preferible a pelear con `className` como string (pisarías otras clases).

<!-- code: javascript -->
```javascript
const tarjeta = document.querySelector(".card");

tarjeta.style.color = "#0f766e"; // inline puntual
tarjeta.classList.add("activa");
tarjeta.classList.toggle("oculta");
console.log(tarjeta.classList.contains("activa")); // true
```

#### Crear y eliminar nodos

- **`document.createElement("li")`** — crea nodo vacío en memoria (aún no visible).
- **`padre.appendChild(hijo)`** — inserta al final del padre.
- **`hijo.remove()`** o **`padre.removeChild(hijo)`** — elimina del árbol.

<!-- code: javascript -->
```javascript
const lista = document.querySelector("#lista");
const li = document.createElement("li");
li.textContent = "Elemento nuevo";
lista.appendChild(li);

// más tarde:
li.remove(); // o lista.removeChild(li);
```

<!-- interactive: Callout -->
{
  "title": "Caso real: formulario que recarga y pierde datos",
  "children": "Una landing valida campos con JS pero el form sigue haciendo submit nativo. La página se recarga, se pierde lo escrito y el equipo cree que el JavaScript no funciona. El handler sí corrió, pero no llamó event.preventDefault(). En submit, valida y usa preventDefault si quieres manejar el envío en cliente."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué textContent es más seguro que innerHTML cuando muestras un comentario escrito por un usuario?",
  "hints": ["innerHTML interpreta etiquetas y scripts", "textContent trata todo como texto plano"],
  "expectedKeywords": ["texto", "HTML", "XSS", "segur"],
  "successMessage": "Correcto. innerHTML parsea marcado arbitrario; textContent muestra el valor como texto literal."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la creación de un ítem",
  "template": "const lista = document.querySelector(\"#lista\");\nconst li = document.{{blank1}}(\"li\");\nli.{{blank2}} = \"Tarea nueva\";\nlista.{{blank3}}(li);",
  "blanks": [
    { "id": "blank1", "answer": "createElement", "placeholder": "crear nodo" },
    { "id": "blank2", "answer": "textContent", "placeholder": "asignar texto" },
    { "id": "blank3", "answer": "appendChild", "placeholder": "insertar en padre" }
  ]
}

---

### Eventos

El navegador **notifica** acciones del usuario o del sistema: `click`, `input`, `keydown`, `submit`. El patrón PBPEW es **`addEventListener(tipo, callback)`** — separa HTML (estructura) de comportamiento (JS) y permite **varios listeners** por evento.

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "onclick en HTML", "addEventListener"],
  "rows": [
    ["Separación de capas", "Mezcla HTML y JS", "JS aparte"],
    ["Varios handlers", "Uno (se pisan)", "Varios por evento"],
    ["Patrón PBPEW", "Evitar", "Preferido"]
  ]
}

#### Objeto evento

El callback recibe un objeto (p. ej. `evento` o `e`):

| Propiedad / método | Uso |
|--------------------|-----|
| `evento.type` | Nombre del evento (`"click"`) |
| `evento.target` | Nodo que **originó** el evento (p. ej. el `<button>` pulsado) |
| `evento.currentTarget` | Nodo donde está **registrado** el listener (en delegación, el contenedor) |
| `evento.key` | Tecla en eventos de teclado (`"Enter"`, `"Escape"`) |
| `evento.preventDefault()` | Cancela comportamiento por defecto (envío de formulario, seguir enlace) |

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant U as Usuario\n  participant N as Navegador\n  participant L as Listener JS\n  U->>N: click en botón\n  N->>N: encola evento (FIFO)\n  N->>L: dispara callback\n  L->>N: actualiza DOM (textContent, classList, etc.)"
}

<!-- code: javascript -->
```javascript
const btn = document.querySelector("#ok");

btn.addEventListener("click", (evento) => {
  console.log("clic en", evento.target);
  console.log("tipo", evento.type);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter pulsado");
  }
});
```

#### `preventDefault` en formularios

Sin interceptar `submit`, un `<form>` recarga la página. Con `preventDefault` controlas el flujo en cliente.

<!-- code: javascript -->
```javascript
const form = document.querySelector("#contacto");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("[name=email]").value;
  console.log("Enviar simulado:", email);
  // actualizar DOM con mensaje de éxito
});
```

<!-- interactive: CodeChallenge -->
{
  "title": "Completa preventDefault",
  "template": "form.addEventListener(\"submit\", (e) => {\n  e.{{blank1}}();\n  console.log(\"OK\");\n});",
  "blanks": [
    { "id": "blank1", "answer": "preventDefault", "placeholder": "cancelar envío nativo" }
  ]
}

#### Delegación de eventos

En listas largas o dinámicas, **no** enlaces un listener por cada hijo. Registra **uno** en un ancestro común y usa `event.target` (a veces con `closest`) para saber qué hijo disparó la acción. Los hijos añadidos **después** siguen funcionando sin re-enlazar.

<!-- interactive: StepReveal -->
{
  "title": "Delegación en lista — paso a paso",
  "steps": [
    {
      "title": "1. Lista con N hijos",
      "content": "Un <ul id=\"lista-tareas\"> con muchos <li>, cada uno con un botón .eliminar. Enlazar 200 listeners consume memoria."
    },
    {
      "title": "2. Un listener en el padre",
      "content": "lista.addEventListener(\"click\", handler) — un solo punto de enlace en el <ul>."
    },
    {
      "title": "3. event.target identifica el origen",
      "content": "Dentro del handler: const boton = e.target.closest(\"button.eliminar\"); if (!boton) return; — filtra clics que no son en eliminar."
    },
    {
      "title": "4. Hijos nuevos sin re-enlazar",
      "content": "Al appendChild un <li> nuevo, el listener del <ul> ya captura sus clics. Escala mejor que un bucle de addEventListener."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph malo [Muchos listeners]\n    B1[btn 1] --> L1[listener 1]\n    B2[btn 2] --> L2[listener 2]\n    B3[btn 3] --> L3[listener 3]\n  end\n\n  subgraph bueno [Delegación]\n  UL[ul listener único]\n  UL --> T{event.target.closest}\n  T --> H1[li 1]\n  T --> H2[li 2]\n  T --> H3[li 3]\n  end"
}

<!-- code: javascript -->
```javascript
const lista = document.querySelector("#lista-tareas");

lista.addEventListener("click", (e) => {
  const boton = e.target.closest("button.eliminar");
  if (!boton) return;

  const li = boton.closest("li");
  li.remove();
});
```

<!-- interactive: Callout -->
{
  "title": "Caso real: panel admin con 200 filas",
  "children": "Un panel renderiza 200 filas y enlaza addEventListener en cada una. Al añadir filas vía API, los botones nuevos no responden. Migran a un solo listener en tbody que lee event.target.closest(\"tr\") y actúa según data-id."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica la diferencia entre event.target y event.currentTarget en una lista con delegación (listener en el <ul>, clic en un <li>).",
  "hints": ["target = origen del clic", "currentTarget = nodo donde está el listener"],
  "expectedKeywords": ["target", "currentTarget", "deleg"],
  "successMessage": "Correcto. currentTarget es el <ul> (donde registraste el listener); target puede ser el <li>, un <span> interno o el botón pulsado."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo al pulsar un botón: (a) navegador encola evento, (b) callback actualiza DOM, (c) usuario hace clic, (d) navegador despacha evento al listener. Indica el orden correcto.",
  "hints": ["Primero el usuario, luego encolar, despachar, actualizar"],
  "expectedKeywords": ["c", "a", "d", "b"],
  "successMessage": "Correcto. Orden: (c) clic → (a) encola → (d) despacha → (b) callback actualiza DOM."
}

---

### Demo mini en la página

Practica el ciclo **seleccionar → escuchar → actualizar** con un contador de clics en vivo.

Estructura HTML mínima:

<!-- code: html -->
```html
<button id="pulsar">Pulsar</button>
<span id="contador">Clics: 0</span>
```

Lógica:

<!-- code: javascript -->
```javascript
let clics = 0;
const contador = document.querySelector("#contador");
const btn = document.querySelector("#pulsar");

btn.addEventListener("click", () => {
  clics += 1;
  contador.textContent = `Clics: ${clics}`;
});
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el contador de clics: botón #pulsar y span #contador que muestre Clics: N. Usa addEventListener y textContent (no innerHTML).",
  "hints": [
    "let clics = 0 al inicio",
    "btn.addEventListener(\"click\", () => { clics += 1; ... })",
    "contador.textContent = `Clics: ${clics}`"
  ],
  "expectedKeywords": ["addEventListener", "textContent", "clics"],
  "successMessage": "Excelente. Has cerrado el ciclo selección → evento → mutación del DOM."
}

---

### Resumen

- El DOM es **mutable**: leer, crear, actualizar y borrar nodos en tiempo de ejecución.
- **Selección:** preferir `querySelector` / `querySelectorAll`; comprobar `null` antes de usar el nodo.
- **Contenido:** `textContent` para datos y mensajes; `innerHTML` solo con plantillas controladas (riesgo XSS con usuario).
- **Estilos:** `style` puntual; `classList` para clases sin pisar otras.
- **Nodos:** `createElement` + `appendChild`; eliminar con `remove` o `removeChild`.
- **Eventos:** `addEventListener` separa comportamiento del HTML; objeto evento con `target`, `currentTarget`, `key`, `preventDefault`.
- **Delegación:** un listener en el ancestro + `closest` — escala en listas dinámicas.
- **Cola de eventos:** el navegador encola y despacha en FIFO (puente con lección 9).
- **Preview lección 11:** fetch y promesas actualizarán el DOM cuando lleguen datos del servidor.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "A un botón #alternar añade un listener que haga classList.toggle(\"activo\") en #panel. Describe el código en una o dos líneas.",
  "hints": ["document.querySelector para ambos nodos", "addEventListener(\"click\", ...)"],
  "expectedKeywords": ["toggle", "classList", "addEventListener"],
  "successMessage": "Correcto. toggle alterna la clase sin borrar las demás."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escucha keydown en document e imprime en consola solo cuando la tecla sea Escape. ¿Qué propiedad del evento usas?",
  "hints": ["e.key === \"Escape\""],
  "expectedKeywords": ["key", "Escape", "keydown"],
  "successMessage": "Correcto. event.key identifica la tecla en eventos de teclado."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué ejecutar JS en <head> sin defer que busca #app puede fallar? Indica al menos una solución.",
  "hints": ["El HTML aún no está parseado", "script al final del body, defer o DOMContentLoaded"],
  "expectedKeywords": ["DOM", "defer", "body", "DOMContentLoaded"],
  "successMessage": "Correcto. El nodo no existe hasta que el navegador construye el árbol; retrasa el script o espera DOMContentLoaded."
}

---

## Reto integrador

**«Lista de tareas en la página»**

Implementa en un `<script>` o bloque de práctica con HTML mínimo:

1. Estructura: `<input id="nueva">`, `<button id="agregar">`, `<ul id="lista"></ul>`, `<span id="total">0 tareas</span>`.
2. Al pulsar "Agregar" (o Enter en el input): lee el texto, crea `<li>` con `createElement`, muestra el texto con `textContent`, añade un `<button class="eliminar">×</button>` dentro del `<li>`, y `appendChild` al `<ul>`. Limpia el input.
3. **Delegación:** un solo `addEventListener("click")` en `#lista` que elimine el `<li>` si el clic fue en `.eliminar` (`closest`).
4. Actualiza `#total` con el número de `<li>` tras cada alta o baja (`querySelectorAll("#lista li").length`).
5. Intercepta el submit si usas `<form>` con `preventDefault` para no recargar.
6. Opcional: `classList.toggle("completada")` al hacer clic en el texto del ítem (no en eliminar).

**Criterio de éxito:** usa selección, creación de nodos, `textContent`, `classList`, `addEventListener`, objeto evento, `preventDefault` si aplica y delegación en la lista. **Sin** `innerHTML` con datos del input.

<!-- code: html -->
```html
<input id="nueva" type="text" placeholder="Nueva tarea" />
<button id="agregar" type="button">Agregar</button>
<ul id="lista"></ul>
<span id="total">0 tareas</span>
```

<!-- code: javascript -->
```javascript
// Esqueleto de partida — completa las funciones
const input = document.querySelector("#nueva");
const btnAgregar = document.querySelector("#agregar");
const lista = document.querySelector("#lista");
const total = document.querySelector("#total");

function actualizarTotal() {
  const n = document.querySelectorAll("#lista li").length;
  total.textContent = `${n} tareas`;
}

function agregarTarea() {
  const texto = input.value.trim();
  if (!texto) return;
  // createElement, textContent, botón eliminar, appendChild, limpiar input
  actualizarTotal();
}

btnAgregar.addEventListener("click", agregarTarea);

lista.addEventListener("click", (e) => {
  // delegación: closest("button.eliminar"), remove li, actualizarTotal
});
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto «Lista de tareas en la página». Pega tu código o describe cómo usas delegación, textContent (no innerHTML con el input) y actualizarTotal.",
  "hints": [
    "li.textContent para el texto del ítem; createElement(\"button\") con classList.add(\"eliminar\")",
    "lista.addEventListener(\"click\", ...) con e.target.closest(\"button.eliminar\")",
    "actualizarTotal: querySelectorAll(\"#lista li\").length",
    "No uses innerHTML con input.value"
  ],
  "expectedKeywords": ["createElement", "deleg", "textContent", "appendChild"],
  "successMessage": "Excelente. Has integrado selección, mutación del DOM, eventos y delegación en un flujo real."
}

---

## Cierre

Has completado la manipulación práctica del DOM y el manejo de eventos en JavaScript. Estas APIs son la base de interfaces interactivas en el navegador y conectan con callbacks (lección 6) y la cola FIFO de eventos (lección 9).

**Ideas clave para retener:**

- **Seleccionar** con `querySelector` / `querySelectorAll`; validar `null`.
- **`textContent`** para mostrar datos de usuario; **`innerHTML`** solo con marcado de confianza.
- **`classList`** para clases; **`createElement` + `appendChild`** para nodos nuevos.
- **`addEventListener`** en lugar de `onclick` en HTML; **`preventDefault`** en formularios.
- **Delegación** en listas: un listener en el padre + `closest`.

**Siguiente paso:** lección `11-asincronia` — fetch, promesas y `async/await` actualizarán el DOM cuando lleguen datos del servidor sin recargar la página.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué devuelve document.querySelector(\"#inexistente\")?",
      "options": [
        "undefined",
        "null",
        "Un elemento vacío",
        "Lanza error inmediato"
      ],
      "correctIndex": 1,
      "feedback": "Sin coincidencias, querySelector devuelve null. El error aparece si intentas usar propiedades sin comprobar."
    },
    {
      "question": "¿Cuál es la forma recomendada en PBPEW para reaccionar a un clic sin mezclar HTML y JS?",
      "options": [
        "Atributo onclick=\"...\" en el botón",
        "button.click = function() {}",
        "button.addEventListener(\"click\", handler)",
        "Etiqueta <click> personalizada"
      ],
      "correctIndex": 2,
      "feedback": "addEventListener separa comportamiento del marcado y permite varios listeners."
    },
    {
      "question": "¿Qué hace event.preventDefault() en un listener de submit?",
      "options": [
        "Borra el formulario del DOM",
        "Evita el envío/recarga por defecto del navegador",
        "Detiene todos los listeners de la página",
        "Convierte el evento en síncrono"
      ],
      "correctIndex": 1,
      "feedback": "Cancela la acción nativa (p. ej. recargar la página) para que tu JS controle el flujo."
    },
    {
      "question": "Para mostrar en pantalla un comentario de usuario sin interpretar HTML, ¿qué propiedad usas?",
      "options": [
        "innerHTML",
        "outerHTML",
        "textContent",
        "insertAdjacentHTML"
      ],
      "correctIndex": 2,
      "feedback": "textContent trata el valor como texto plano; innerHTML parsearía etiquetas y aumenta riesgo XSS."
    },
    {
      "question": "En delegación de eventos en un <ul>, ¿dónde registras el listener?",
      "options": [
        "En cada <li> dentro de un bucle",
        "En el <ul> padre y usas event.target / closest",
        "Solo en window.onload sin selector",
        "En el <body> con innerHTML del hijo"
      ],
      "correctIndex": 1,
      "feedback": "Un listener en el ancestro captura clics de hijos actuales y futuros; target identifica el origen."
    }
  ]
}
