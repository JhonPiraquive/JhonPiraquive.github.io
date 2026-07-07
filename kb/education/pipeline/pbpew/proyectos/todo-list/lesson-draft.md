---
track: pbpew
slug: proyectos/todo-list
title: "Lista de tareas"
order: 103
lesson_kind: project
locale: es
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
  - 12-ajax-fetch
related:
  - 07-arrays-json-objetos
  - 10-dom-y-eventos
  - 12-ajax-fetch
  - proyectos/calculadora
  - proyectos/piedra-papel-tijera
prev: proyectos/piedra-papel-tijera
next: null
source_brief: kb/education/pipeline/pbpew/proyectos/todo-list/brief.md
---

## Objetivos de aprendizaje

Al finalizar el proyecto, el estudiante podrá:

- **Modelar** el estado de una app en un **array de objetos** (`{ id, texto, completada }`) como fuente de verdad, **distinguiendo** modelo en memoria de vista en el DOM.
- **Implementar** el flujo CRUD mínimo (añadir, listar, marcar completada, eliminar) con **formulario sin recarga** (`preventDefault`) y función central `render()`.
- **Aplicar** **delegación de eventos** en `#lista` para acciones por ítem sin acumular listeners en cada re-render.
- **Filtrar** la vista entre Todas / Pendientes / Completadas **sin borrar** datos del array.
- **(Opcional)** **Persistir** el array en `localStorage` con `JSON.stringify` / `JSON.parse` y manejo de errores.
- **Preparar** funciones puras (`agregarTarea`, `eliminarPorId`) separadas de `render()` y `guardar()` para una futura sincronización con `fetch` (lección 12).

## Prerrequisitos

- **Lección 07 (`07-arrays-json-objetos`):** arrays, objetos literales, `.filter`, `.forEach`, `JSON.stringify` / `JSON.parse`.
- **Lección 10 (`10-dom-y-eventos`):** `querySelector`, `createElement`, `textContent`, `addEventListener`, `preventDefault`, delegación con `closest`.
- **Lección 12 (`12-ajax-fetch`):** serialización JSON como puente hacia APIs REST (este proyecto usa estado local; el modelo es reutilizable).
- Proyectos previos PBPEW: `proyectos/calculadora`, `proyectos/piedra-papel-tijera` — experiencia con eventos y estado en el navegador.
- Mini lista DOM en lección 10 — aquí se **evoluciona** hacia array + `render()` + filtros + persistencia opcional.

## Contenido

### Introducción: de nodos sueltos a gestión de estado {#ObjetivosSection}

Este es el **primer proyecto integrador de gestión de estado** del track PBPEW. No usas frameworks: unes un **array de objetos** (lección 7) con **manipulación del DOM y eventos** (lección 10) en un flujo completo: **add → render → toggle → remove → filter**.

La regla de oro: el **array `tareas`** es la fuente de verdad; el DOM (`#lista`) es solo la **vista** que refleja ese array.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph datos [Capa de datos]\n    A[\"tareas[]\\n{id, texto, completada}\"]\n    F[\"filtroActivo\"]\n  end\n\n  subgraph logica [Capa de lógica]\n    AG[agregarTarea]\n    TG[toggleCompletada]\n    EL[eliminarPorId]\n    RV[tareasVisibles]\n    RD[render]\n    GV[guardar / cargar]\n  end\n\n  subgraph vista [Capa de vista]\n    FORM[form submit]\n    UL[\"#lista DOM\"]\n    NAV[filtros Todas/Pendientes/Completadas]\n    LS[(localStorage opcional)]\n  end\n\n  FORM -->|preventDefault| AG --> A\n  NAV --> F --> RV --> RD\n  A --> RD --> UL\n  UL -->|delegación click| TG --> A\n  UL -->|delegación click| EL --> A\n  A --> GV --> LS\n  LS -->|DOMContentLoaded| A"
}

---

### Demo interactiva: prueba la app antes de codificar {#TodoListDemoSection}

Explora una **réplica funcional** embebida. Observa cómo cada acción muta el estado interno y vuelve a pintar la lista.

**Qué debes probar:**

1. Escribir una tarea y pulsar Agregar (formulario sin recarga).
2. Clic en el texto para marcar completada (feedback visual).
3. Botón × para eliminar (delegación).
4. Pestañas **Todas / Pendientes / Completadas** y contadores.
5. Mensaje vacío contextual al filtrar sin resultados.
6. *(Opcional)* Activar «Persistir en localStorage» o «Simular recarga» para ver recuperación de datos.

<!-- interactive: TodoListDemo -->
{
  "title": "Lista de tareas PBPEW",
  "storageKey": "pbpew-tareas-demo",
  "showPersistenceToggle": true,
  "showSimulateReload": true,
  "emptyMessages": {
    "todas": "No hay tareas. ¡Agrega la primera!",
    "pendientes": "No hay pendientes.",
    "completadas": "No hay tareas completadas aún."
  }
}

<!-- interactive: Callout -->
{
  "title": "Cómo usar la demo",
  "children": "Cada clic sigue el patrón: mutar el array → render() → (opcional) guardar(). Antes de escribir tu código, predice qué función se ejecuta en cada acción."
}

---

### Arquitectura: datos, lógica y vista {#ArquitecturaSection}

Separa tres capas en tu mente (y en el código):

| Capa | Responsabilidad | Ejemplos |
|------|-----------------|----------|
| **Datos** | Estado en memoria | `tareas[]`, `filtroActivo`, `siguienteId` |
| **Lógica** | Mutar datos, decidir qué mostrar | `agregarTarea`, `eliminarPorId`, `tareasVisibles`, `render` |
| **Vista** | HTML que el usuario ve | `#form-tarea`, `#lista`, `#filtros`, `#resumen` |

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Solo DOM (appendChild)", "Array + render()"],
  "rows": [
    ["Filtrar", "Frágil (ocultar nodos)", ".filter + re-pintar"],
    ["Persistir", "Difícil de serializar", "JSON.stringify(tareas)"],
    ["Eliminar por id", "Índices inconsistentes", ".filter(t => t.id !== id)"],
    ["Patrón PBPEW", "Evitar como única fuente", "Preferido"]
  ]
}

<!-- interactive: StepReveal -->
{
  "title": "Ciclo de una acción (agregar tarea)",
  "steps": [
    { "title": "1. Usuario envía formulario", "content": "Enter o clic en Agregar dispara submit." },
    { "title": "2. preventDefault", "content": "Evitas la recarga de la página." },
    { "title": "3. Mutar array", "content": "push con { id, texto, completada: false } tras validar trim()." },
    { "title": "4. render()", "content": "Vaciar #lista y crear nodos con createElement + textContent." },
    { "title": "5. guardar() (opcional)", "content": "localStorage.setItem con JSON.stringify." },
    { "title": "6. DOM actualizado", "content": "El usuario ve la lista sin recarga completa." }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant U as Usuario\n  participant F as Formulario\n  participant JS as agregarTarea + render\n  participant DOM as ul#lista\n  participant LS as localStorage\n\n  U->>F: Enter / clic Agregar\n  F->>JS: submit (preventDefault)\n  JS->>JS: push en tareas[]\n  JS->>DOM: replaceChildren + createElement\n  opt persistencia\n    JS->>LS: JSON.stringify\n  end"
}

---

### Casos reales: por qué importa el modelo {#CasosRealesSection}

#### Panel de soporte: tareas que «desaparecen» al cambiar de pestaña

Un equipo construye tickets solo con `appendChild` y oculta filas con `display: none`. Al contar pendientes usan `querySelectorAll("li:not(.oculto)")` y los totales no cuadran. **Refactorizan** con `tickets[]`, `render()` según filtro y un solo `fetch` al guardar.

**Decisión clave:** el filtro es una **vista**, no un borrado.

#### App de notas que pierde todo al refrescar

Los usuarios pierden la lista porque solo existía en el DOM. El dev añade `localStorage` pero olvida `guardar()` tras eliminar — al recargar, la tarea «revive». **Lección:** persistir **después de cada mutación** (add, toggle, delete) o tras una función `commit()` central.

---

### Modelo de datos {#ModeloDatosSection}

Cada tarea es un objeto literal:

<!-- code: javascript -->
```javascript
{ id: 1, texto: "Estudiar DOM", completada: false }
```

| Propiedad | Tipo | Rol |
|-----------|------|-----|
| `id` | número | Identificador estable (`siguienteId++`, `Date.now()` o `crypto.randomUUID()`) |
| `texto` | string | Entrada del usuario; mostrar siempre con `textContent` |
| `completada` | boolean | Estilos (`classList`) y filtros Pendientes / Completadas |

Estado global mínimo:

<!-- code: javascript -->
```javascript
let tareas = [];
let filtroActivo = "todas"; // "todas" | "pendientes" | "completadas"
let siguienteId = 1;
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué conviene guardar las tareas en un array en lugar de leer solo lo que hay en el <ul>?",
  "hints": ["Piensa en filtrar, contar y persistir", "¿Qué pasa si sincronizas con una API?"],
  "expectedKeywords": ["fuente", "verdad", "array", "filtrar", "persistir"],
  "successMessage": "Correcto. El array modela el estado; facilita filtrar, contar, serializar y sincronizar con API."
}

<!-- interactive: CodeChallenge -->
{
  "title": "eliminarPorId con filter",
  "template": "const tareas = [{ id: 1, texto: \"A\", completada: false }];\n\nfunction eliminarPorId(id) {\n  return tareas.{{blank1}}(t => t.id !== id);\n}\n\nconsole.log(eliminarPorId(1)); // []",
  "blanks": [
    { "id": "blank1", "answer": "filter", "placeholder": "método que devuelve nuevo array" }
  ]
}

---

### HTML del proyecto {#EstructuraHtmlSection}

Estructura semántica mínima. El formulario captura Enter automáticamente vía `submit`.

<!-- code: html -->
```html
<main id="app">
  <h1>Mis tareas</h1>
  <form id="form-tarea">
    <input id="input-tarea" type="text" placeholder="Nueva tarea" maxlength="120" required />
    <button type="submit">Agregar</button>
  </form>
  <nav id="filtros" aria-label="Filtrar tareas">
    <button type="button" data-filtro="todas" class="activo">Todas</button>
    <button type="button" data-filtro="pendientes">Pendientes</button>
    <button type="button" data-filtro="completadas">Completadas</button>
  </nav>
  <p id="resumen">0 pendientes · 0 completadas</p>
  <ul id="lista"></ul>
</main>
```

---

### Formulario y alta de tareas {#FormularioYEstadoSection}

Referencias al DOM y función de alta:

<!-- code: javascript -->
```javascript
const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");

function agregarTarea(texto) {
  const limpio = texto.trim();
  if (!limpio) return;
  tareas.push({ id: siguienteId++, texto: limpio, completada: false });
  render();
  guardar(); // opcional
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarTarea(input.value);
  input.value = "";
  input.focus();
});
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Sin preventDefault el navegador recarga la página y pierdes el estado en memoria. Parece que JavaScript no funciona."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa preventDefault",
  "template": "form.addEventListener(\"submit\", (e) => {\n  e.{{blank1}}();\n  agregarTarea(input.value);\n});",
  "blanks": [
    { "id": "blank1", "answer": "preventDefault", "placeholder": "evita recarga" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena mentalmente el flujo al pulsar Agregar: (a) render(), (b) usuario envía formulario, (c) push al array, (d) preventDefault, (e) leer y validar texto. Escribe la secuencia correcta (ej. d-e-c-a).",
  "hints": ["Primero evitas recarga", "Luego validas y mutas", "Al final pintas"],
  "expectedKeywords": ["d", "e", "c", "a", "preventDefault", "push", "render"],
  "successMessage": "Secuencia: d → e → c → a (y opcionalmente guardar). Mutar primero, pintar después."
}

---

### render(): la vista desde el array {#RenderYDelegacionSection}

`render()` es el **patrón central**: vacía el contenedor, recorre las tareas visibles y crea nodos con `createElement` + `textContent`. Evita duplicar lógica en cada acción.

<!-- code: javascript -->
```javascript
function tareasVisibles() {
  if (filtroActivo === "pendientes") return tareas.filter((t) => !t.completada);
  if (filtroActivo === "completadas") return tareas.filter((t) => t.completada);
  return tareas;
}

function actualizarResumen() {
  const pendientes = tareas.filter((t) => !t.completada).length;
  const completadas = tareas.filter((t) => t.completada).length;
  resumen.textContent = `${pendientes} pendientes · ${completadas} completadas`;
}

function render() {
  lista.replaceChildren();
  tareasVisibles().forEach((tarea) => {
    const li = document.createElement("li");
    li.dataset.id = String(tarea.id);
    if (tarea.completada) li.classList.add("completada");

    const texto = document.createElement("span");
    texto.className = "texto";
    texto.textContent = tarea.texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "eliminar";
    btnEliminar.setAttribute("aria-label", "Eliminar tarea");
    btnEliminar.textContent = "×";

    li.append(texto, btnEliminar);
    lista.appendChild(li);
  });
  actualizarResumen();
}
```

<!-- interactive: Callout -->
{
  "title": "Seguridad",
  "children": "Nunca uses innerHTML con el texto que escribe el usuario. textContent no interpreta HTML y reduce riesgo XSS."
}

**Delegación de eventos** — un solo listener en `#lista` para eliminar y marcar completada:

<!-- code: javascript -->
```javascript
lista.addEventListener("click", (e) => {
  const btn = e.target.closest("button.eliminar");
  if (btn) {
    const id = Number(btn.closest("li").dataset.id);
    tareas = tareas.filter((t) => t.id !== id);
    render();
    guardar();
    return;
  }

  const texto = e.target.closest("span.texto");
  if (texto) {
    const id = Number(texto.closest("li").dataset.id);
    const tarea = tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      render();
      guardar();
    }
  }
});
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente — listeners duplicados",
  "children": "Si enlazas click en cada <li> dentro de render() sin limpiar, acumulas listeners. Preferir un listener delegado en el contenedor padre."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe toggleCompletada(id) que invierta completada en el objeto correcto dentro de tareas y llame a render(). Pega tu función o descríbela.",
  "hints": ["tareas.find(t => t.id === id)", "tarea.completada = !tarea.completada", "render() al final"],
  "expectedKeywords": ["find", "completada", "render"],
  "successMessage": "Bien. Mutación controlada en el array + re-pintado completo."
}

---

### Filtros de vista {#FiltrosSection}

La variable `filtroActivo` controla qué subset muestra `render()`. **Los datos en el array no se borran** al filtrar.

<!-- code: javascript -->
```javascript
const filtros = document.querySelector("#filtros");

filtros.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-filtro]");
  if (!btn) return;
  filtroActivo = btn.dataset.filtro;
  filtros.querySelectorAll("button").forEach((b) => b.classList.remove("activo"));
  btn.classList.add("activo");
  render();
});
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué diferencia hay entre filtrar tareas y eliminarlas del array?",
  "hints": ["¿Cambia tareas.length?", "¿Qué pasa al volver a Todas?"],
  "expectedKeywords": ["filtro", "vista", "array", "borrar", "eliminar"],
  "successMessage": "Filtrar solo cambia qué muestra render(); eliminar quita objetos del array con filter o similar."
}

Implementa mensajes vacíos por filtro, por ejemplo: «No hay pendientes» cuando `tareasVisibles().length === 0`.

---

### Persistencia opcional con localStorage {#PersistenciaOpcionalSection}

Conecta serialización JSON (lección 7) con UX real. Persiste **después de cada mutación**.

<!-- code: javascript -->
```javascript
const STORAGE_KEY = "pbpew-tareas";

function guardar() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));
}

function cargar() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const datos = JSON.parse(raw);
    if (!Array.isArray(datos)) return;
    tareas = datos;
    siguienteId = tareas.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  } catch {
    tareas = [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargar();
  render();
});
```

<!-- interactive: CodeChallenge -->
{
  "title": "Completa JSON.stringify",
  "template": "localStorage.setItem(\"tareas\", JSON.{{blank1}}(tareas));",
  "blanks": [
    { "id": "blank1", "answer": "stringify", "placeholder": "serializar array" }
  ]
}

<!-- interactive: Callout -->
{
  "title": "Errores de persistencia",
  "children": "setItem sin stringify guarda \"[object Object]\". JSON.parse sin try/catch lanza si el usuario corrompe datos en DevTools — resetea a []."
}

---

### Puente hacia API REST {#PuenteApiSection}

Hoy el estado es local; mañana el mismo modelo podría sincronizarse con `fetch`. Mantén funciones puras separadas de `render()` y `guardar()`:

<!-- code: javascript -->
```javascript
function exportarJson() {
  console.log(JSON.stringify(tareas, null, 2));
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Si mañana sincronizas con fetch, ¿qué funciones separarías de la lógica de pintado?",
  "hints": ["agregarTarea, eliminarPorId", "render y guardar", "¿Qué devuelve el servidor?"],
  "expectedKeywords": ["agregar", "eliminar", "render", "guardar", "fetch", "API"],
  "successMessage": "Separa mutaciones de datos (agregar, toggle, eliminar) y persistencia (guardar/cargar/fetch) de render(), que solo pinta."
}

---

## Reto integrador {#RetoSection}

**«Lista de tareas PBPEW»** — implementación completa en un solo HTML + JS. Integra lecciones 01–12 en un mini-producto.

### Nivel base (obligatorio)

1. Estructura: `#form-tarea`, input, botón Agregar, `#lista`, `#resumen` con totales.
2. Array `tareas` con objetos `{ id, texto, completada }`.
3. `submit` con `preventDefault`; no aceptar texto vacío (`trim`).
4. `render()` desde el array; `textContent` para el texto de la tarea.
5. Eliminar con delegación en `#lista` (botón `.eliminar` + `closest`).
6. Toggle `completada` al clic en el texto; clase CSS `.completada` (tachado u opacidad).

### Nivel intermedio

7. Filtros **Todas / Pendientes / Completadas** sin borrar datos del array.
8. Resumen: `N pendientes · M completadas`.
9. Limpiar input y devolver foco tras agregar.
10. Estado vacío por filtro («No hay tareas completadas aún»).

### Nivel avanzado (desafíos profundos)

11. **Persistencia:** `localStorage` con clave `pbpew-tareas`; cargar al inicio; `try/catch` en `parse`; recalcular `siguienteId`.
12. **Editar en línea:** doble clic en el texto abre `<input>`; Enter guarda, Escape cancela; validar no vacío.
13. **Atajo de teclado:** `Ctrl+Backspace` o botón «Limpiar completadas» → `tareas = tareas.filter(t => !t.completada)`.
14. **Orden:** añadir `creadaEn: Date.now()` y botón para ordenar pendientes por más recientes primero.
15. **Preparación API:** función `exportarJson()` con `console.log(JSON.stringify(tareas, null, 2))` simulando payload REST.
16. **Accesibilidad mínima:** `aria-label` en eliminar, `aria-pressed` o clase `activo` en el filtro seleccionado.

**Criterio de éxito:** una sola fuente de verdad en el array; DOM siempre derivado de `render()`; formulario sin recarga; delegación para acciones por ítem; filtros funcionales; código listo para añadir `localStorage` o `fetch` sin reescribir todo.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Reto integrador: implementa la Lista de tareas PBPEW (nivel base como mínimo). Usa este checklist: [ ] array como fuente de verdad [ ] preventDefault [ ] render() central [ ] delegación [ ] textContent [ ] filtros (intermedio) [ ] localStorage (avanzado). Describe qué nivel alcanzaste y un fragmento clave de tu código.",
  "hints": [
    "Empieza por HTML + agregarTarea + render vacío",
    "Añade delegación antes de filtros",
    "localStorage al final: guardar() tras cada mutación"
  ],
  "expectedKeywords": ["render", "preventDefault", "filter", "deleg", "textContent"],
  "successMessage": "Excelente. Has integrado arrays, DOM, eventos y (opcionalmente) persistencia en un producto completo."
}

---

## Cierre {#CierreSection}

Has construido tu primera **app de gestión de estado** en el navegador sin frameworks. El patrón **array → render() → delegación** es la base de React, Vue y cualquier SPA; aquí lo viste en JavaScript puro.

**Ideas clave para retener:**

- El **array** modela el estado; el **DOM** solo lo muestra.
- **`render()`** centraliza la vista; muta el array primero, pinta después.
- **`preventDefault`** evita recargas que destruyen el estado en memoria.
- **`textContent`** para entrada de usuario; **`filter` por `id`** para eliminar con seguridad.
- El **filtro** afecta la vista, no borra datos.
- **`localStorage`** es una copia opcional; llama `guardar()` tras cada mutación.

**Siguiente paso:** proyectos hermanos (`proyectos/ajedrez`) o reutilizar este modelo con `fetch` para sincronizar tareas con un backend REST.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Cuál debe ser la fuente de verdad de las tareas en este proyecto?",
      "options": [
        "El número de <li> en el DOM",
        "Un array de objetos en JavaScript",
        "El valor del input",
        "localStorage siempre, aunque no se haya guardado"
      ],
      "correctIndex": 1,
      "feedback": "El array modela el estado; el DOM solo lo muestra. localStorage es una copia opcional persistida."
    },
    {
      "question": "¿Qué hace event.preventDefault() en el submit del formulario de nueva tarea?",
      "options": [
        "Borra el array de tareas",
        "Evita la recarga de la página",
        "Deshabilita el teclado",
        "Guarda automáticamente en el servidor"
      ],
      "correctIndex": 1,
      "feedback": "Sin preventDefault, el navegador recarga y pierdes el estado en memoria."
    },
    {
      "question": "Para eliminar la tarea con id: 3, ¿qué patrón es el más seguro?",
      "options": [
        "tareas.splice(3, 1) siempre",
        "tareas = tareas.filter(t => t.id !== 3)",
        "lista.children[3].remove() sin tocar el array",
        "delete tareas[3]"
      ],
      "correctIndex": 1,
      "feedback": "Filtrar por id mantiene coherencia aunque cambie el orden o el filtro activo."
    },
    {
      "question": "Al mostrar el texto que escribió el usuario en un <span>, ¿qué propiedad debes usar?",
      "options": [
        "innerHTML",
        "outerHTML",
        "textContent",
        "insertAdjacentHTML"
      ],
      "correctIndex": 2,
      "feedback": "textContent no interpreta HTML; reduce riesgo XSS con entrada libre."
    },
    {
      "question": "¿Qué ocurre al activar el filtro «Pendientes»?",
      "options": [
        "Se borran las tareas completadas del array",
        "Solo cambia qué tareas muestra render(); el array completo sigue intacto",
        "Se vacía localStorage",
        "Se desactiva preventDefault"
      ],
      "correctIndex": 1,
      "feedback": "El filtro afecta la vista (tareasVisibles), no elimina datos del modelo."
    }
  ]
}
