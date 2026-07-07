---
track: pbpew
slug: proyectos/calculadora
title: "Calculadora interactiva"
order: 101
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
  - 10-dom-y-eventos
  - 04-operadores-y-decisiones
  - 03-variables-y-tipos
  - 06-funciones-y-callbacks
source_brief: kb/education/pipeline/pbpew/proyectos/calculadora/brief.md
---

## Objetivos de aprendizaje

Al finalizar el proyecto, el estudiante podrá:

- **Construir** una calculadora funcional en HTML + JavaScript sin librerías ni `eval`, integrando variables, operadores, funciones y DOM.
- **Modelar** el estado de la calculadora con `operandoActual`, `operandoAnterior`, `operadorPendiente` y `esperandoNuevoOperando`, **sincronizando** la pantalla con `textContent`.
- **Implementar** delegación de eventos en el contenedor del teclado con `data-action` / `data-value` y `closest("button")`.
- **Separar** la lógica de cálculo en una función pura `calcular(a, operador, b)` con validación de `NaN` y división por cero.
- **Manejar** errores de usuario (divisor cero, entrada inválida) con mensajes claros y reset coherente mediante `C`.
- **Encadenar** operaciones aritméticas con comportamiento de calculadora básica antes de pulsar `=`.

## Prerrequisitos

- **Lecciones 01–12 del track PBPEW:** DOM, eventos, variables, tipos, operadores, funciones, estructuras de datos y manejo básico de errores.
- **Lección 10 (`10-dom-y-eventos`):** `querySelector`, `textContent`, `addEventListener`, delegación de eventos.
- **Lección 04 (`04-operadores-y-decisiones`):** operadores aritméticos, `if`/`switch`, división por cero en JavaScript.
- **Lección 03 (`03-variables-y-tipos`):** `parseFloat`, `Number.isNaN`, strings vs números.
- **Lección 06 (`06-funciones-y-callbacks`):** funciones con `return`, callbacks en listeners.
- Saber enlazar un `<script>` al final del `<body>` o con `defer` (lección 02).

## Contenido

### Proyecto integrador: calculadora interactiva

Esta es la **primera de cuatro lecciones-proyecto** del track PBPEW. No introduce APIs nuevas: consolida en un solo artefacto lo visto en las lecciones 01–12 — variables, operadores, funciones, DOM, eventos y manejo básico de errores — en un front sin servidor.

La calculadora combina una **pantalla de lectura** (`#display`) y una **rejilla de botones** (dígitos `0`–`9`, punto decimal, operadores `+` `−` `×` `÷`, `C` y `=`). El HTML define la estructura; JavaScript define el comportamiento.

**Regla pedagógica del curso:** el display es la **vista** del estado; la **fuente de verdad** vive en variables JavaScript. No uses `eval()` ni `Function()` para evaluar expresiones.

---

### Demo en vivo: prueba la calculadora {#DemoCalculadoraSection}

Antes de escribir código, interactúa con la calculadora embebida. Observa cómo responde a operaciones normales, resultados encadenados y el caso `÷ 0`.

**Estados visibles:** normal, resultado tras `=`, error (`División por cero`).

<!-- interactive: DemoCalculadora -->
{
  "ariaLive": "polite",
  "buttons": ["C", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "="],
  "displayLabels": { "plus": "+", "minus": "−", "times": "×", "divide": "÷" },
  "errorMessages": ["División por cero", "Error"],
  "hint": "Prueba 12 + 5 =, luego × 2 =, y finalmente 8 ÷ 0 ="
}

---

### Estado en memoria y pantalla

Además del texto visible, el programa guarda en memoria:

| Variable | Rol |
|----------|-----|
| `operandoActual` | Cadena o número en edición (lo que muestra la pantalla salvo error) |
| `operandoAnterior` | Primer operando guardado al pulsar un operador |
| `operadorPendiente` | `+`, `-`, `*`, `/` pendiente de aplicar |
| `esperandoNuevoOperando` | Tras operador o `=`, el siguiente dígito **reemplaza** la pantalla en lugar de concatenar |

Actualiza la pantalla con `display.textContent = valor`. Es seguro para números y mensajes de error; no interpreta HTML.

<!-- interactive: CompareTable -->
{
  "headers": ["Capa", "Responsabilidad"],
  "rows": [
    ["HTML", "Estructura, etiquetas de botones, atributos data-*"],
    ["CSS", "Rejilla, tamaño táctil (~44px mín.), contraste"],
    ["JavaScript", "Estado, listeners, cálculo, errores"],
    ["DOM (#display)", "Vista del estado — no base de datos"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "stateDiagram-v2\n  [*] --> Inicio: cargar página\n  Inicio --> Editando: dígito / punto\n  Editando --> Editando: más dígitos\n  Editando --> OperadorPendiente: + − × ÷\n  OperadorPendiente --> Editando: dígito (nuevo operando)\n  OperadorPendiente --> Resultado: =\n  Editando --> Resultado: = (si hay operador)\n  Resultado --> Editando: dígito (nuevo cálculo)\n  OperadorPendiente --> Error: división por 0\n  Editando --> Error: división por 0 en =\n  Error --> Inicio: C\n  Resultado --> OperadorPendiente: operador tras resultado\n  Inicio --> Inicio: C"
}

<!-- interactive: Callout -->
{
  "title": "Sin eval()",
  "children": "No uses eval(expresion) ni Function() para evaluar. Construye la lógica con if/switch y operadores aritméticos: evitas riesgos de seguridad y refuerzas el control de flujo de la lección 04."
}

---

### Maqueta HTML

El marcado define la estructura y los atributos `data-action` / `data-value` que el JavaScript leerá. En la UI se muestran `×` y `÷`, pero internamente se mapean a `*` y `/`.

<!-- code: html -->
```html
<div class="calculadora">
  <output id="display" class="pantalla" aria-live="polite">0</output>
  <div class="teclado" role="group" aria-label="Teclado calculadora">
    <button type="button" data-action="clear">C</button>
    <button type="button" data-action="operator" data-value="/">÷</button>
    <button type="button" data-action="operator" data-value="*">×</button>
    <button type="button" data-action="digit" data-value="7">7</button>
    <button type="button" data-action="digit" data-value="8">8</button>
    <button type="button" data-action="digit" data-value="9">9</button>
    <button type="button" data-action="operator" data-value="-">−</button>
    <!-- … resto de dígitos, punto y operadores … -->
    <button type="button" data-action="decimal">.</button>
    <button type="button" data-action="equals">=</button>
  </div>
</div>
```

---

### Variables de estado y referencias DOM

Enlaza eventos solo cuando existan `#display` y `.teclado` (script al final del body, `defer` o `DOMContentLoaded`).

<!-- code: javascript -->
```javascript
const display = document.querySelector("#display");
const teclado = document.querySelector(".teclado");

let operandoActual = "0";
let operandoAnterior = "";
let operadorPendiente = null;
let esperandoNuevoOperando = false;

function actualizarPantalla() {
  display.textContent = operandoActual;
}
```

<!-- interactive: CodeChallenge -->
{
  "id": "cc-calc-estado-inicial",
  "title": "Completa la inicialización del estado",
  "template": "let operandoActual = \"{{blank1}}\";\nlet operandoAnterior = \"{{blank2}}\";\nlet operadorPendiente = {{blank3}};\nlet esperandoNuevoOperando = {{blank4}};",
  "blanks": [
    { "id": "blank1", "answer": "0", "placeholder": "valor inicial en pantalla" },
    { "id": "blank2", "answer": "\"\"", "placeholder": "sin operando guardado" },
    { "id": "blank3", "answer": "null", "placeholder": "sin operación pendiente" },
    { "id": "blank4", "answer": "false", "placeholder": "aún no esperamos nuevo dígito" }
  ]
}

---

### Función pura `calcular`

Separa el cálculo del DOM. Convierte con `parseFloat` solo al evaluar; en la fase de armar operando todo es string.

<!-- code: javascript -->
```javascript
function calcular(a, operador, b) {
  const x = parseFloat(a);
  const y = parseFloat(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return { ok: false, mensaje: "Error" };
  }
  if (operador === "/" && y === 0) {
    return { ok: false, mensaje: "División por cero" };
  }
  let resultado;
  switch (operador) {
    case "+":
      resultado = x + y;
      break;
    case "-":
      resultado = x - y;
      break;
    case "*":
      resultado = x * y;
      break;
    case "/":
      resultado = x / y;
      break;
    default:
      return { ok: false, mensaje: "Error" };
  }
  return { ok: true, valor: resultado };
}
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  A[\"calcular(a, op, b)\"] --> B{\"NaN en a o b?\"}\n  B -->|Sí| E[\"ok: false, Error\"]\n  B -->|No| C{\"op es / y b === 0?\"}\n  C -->|Sí| Z[\"ok: false, División por cero\"]\n  C -->|No| D[\"switch op → resultado\"]\n  D --> F[\"ok: true, valor\"]"
}

<!-- interactive: CodeChallenge -->
{
  "id": "cc-calc-calcular-switch",
  "title": "Completa las ramas del switch en calcular",
  "template": "function calcular(a, operador, b) {\n  const x = parseFloat(a);\n  const y = parseFloat(b);\n  if (Number.isNaN(x) || Number.isNaN(y)) {\n    return { ok: false, mensaje: \"Error\" };\n  }\n  if (operador === \"/\" && y === 0) {\n    return { ok: false, mensaje: \"División por cero\" };\n  }\n  let resultado;\n  switch (operador) {\n    case \"+\":\n      resultado = x {{blank1}} y;\n      break;\n    case \"-\":\n      resultado = x {{blank2}} y;\n      break;\n    case \"*\":\n      resultado = x {{blank3}} y;\n      break;\n    case \"/\":\n      resultado = x {{blank4}} y;\n      break;\n    default:\n      return { ok: false, mensaje: \"Error\" };\n  }\n  return { ok: true, valor: resultado };\n}",
  "blanks": [
    { "id": "blank1", "answer": "+", "placeholder": "suma" },
    { "id": "blank2", "answer": "-", "placeholder": "resta" },
    { "id": "blank3", "answer": "*", "placeholder": "multiplicación" },
    { "id": "blank4", "answer": "/", "placeholder": "división" }
  ]
}

---

### Delegación de eventos en el teclado

Un solo listener en `.teclado` escala mejor que dieciséis listeners sueltos. Usa `closest("button")` porque el clic puede caer en un hijo del botón.

<!-- code: javascript -->
```javascript
teclado.addEventListener("click", (event) => {
  const boton = event.target.closest("button");
  if (!boton || !teclado.contains(boton)) return;

  const accion = boton.dataset.action;

  if (accion === "digit") {
    manejarDigito(boton.dataset.value);
  } else if (accion === "decimal") {
    manejarPunto();
  } else if (accion === "operator") {
    manejarOperador(boton.dataset.value);
  } else if (accion === "equals") {
    manejarIgual();
  } else if (accion === "clear") {
    limpiar();
  }
});
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant U as Usuario\n  participant T as .teclado\n  participant JS as manejarDigito\n  participant D as #display\n\n  U->>T: clic en botón \"8\"\n  T->>JS: listener (delegación)\n  JS->>JS: actualizar operandoActual\n  JS->>D: textContent = operandoActual\n  D-->>U: ve \"8\""
}

<!-- interactive: CodeChallenge -->
{
  "id": "cc-calc-delegacion-listener",
  "title": "Completa el listener con delegación",
  "template": "const teclado = document.querySelector(\".teclado\");\nteclado.addEventListener(\"{{blank1}}\", (event) => {\n  const boton = event.target.{{blank2}}(\"button\");\n  if (!boton) return;\n  const accion = boton.dataset.{{blank3}};\n  if (accion === \"digit\") manejarDigito(boton.dataset.value);\n});",
  "blanks": [
    { "id": "blank1", "answer": "click", "placeholder": "evento de ratón" },
    { "id": "blank2", "answer": "closest", "placeholder": "sube al botón padre" },
    { "id": "blank3", "answer": "action", "placeholder": "atributo data-action" }
  ]
}

---

### Dígitos, punto decimal y operadores

Al pulsar un operador sin `=`, si ya había uno pendiente, calcula primero el resultado intermedio (comportamiento de calculadora básica).

<!-- code: javascript -->
```javascript
function manejarDigito(digito) {
  if (esperandoNuevoOperando) {
    operandoActual = digito;
    esperandoNuevoOperando = false;
  } else {
    operandoActual =
      operandoActual === "0" ? digito : operandoActual + digito;
  }
  actualizarPantalla();
}

function manejarPunto() {
  if (esperandoNuevoOperando) {
    operandoActual = "0.";
    esperandoNuevoOperando = false;
  } else if (!operandoActual.includes(".")) {
    operandoActual += ".";
  }
  actualizarPantalla();
}

function manejarOperador(nuevoOperador) {
  if (operadorPendiente !== null && !esperandoNuevoOperando) {
    const res = calcular(
      operandoAnterior,
      operadorPendiente,
      operandoActual
    );
    if (!res.ok) {
      mostrarError(res.mensaje);
      return;
    }
    operandoActual = String(res.valor);
    actualizarPantalla();
  }
  operandoAnterior = operandoActual;
  operadorPendiente = nuevoOperador;
  esperandoNuevoOperando = true;
}
```

<!-- interactive: StepReveal -->
{
  "title": "Construye la calculadora en 6 pasos",
  "steps": [
    {
      "title": "1. Maqueta HTML",
      "content": "Define #display y botones con data-action (digit, operator, decimal, equals, clear) y data-value donde aplique."
    },
    {
      "title": "2. Referencias y estado",
      "content": "querySelector para #display y .teclado. Inicializa operandoActual, operandoAnterior, operadorPendiente y esperandoNuevoOperando."
    },
    {
      "title": "3. Delegación",
      "content": "Un addEventListener(\"click\") en .teclado; closest(\"button\") y switch por dataset.action."
    },
    {
      "title": "4. Dígitos y punto",
      "content": "manejarDigito respeta el flag esperandoNuevoOperando; manejarPunto impide dos puntos en el mismo operando."
    },
    {
      "title": "5. Operadores e igual",
      "content": "manejarOperador encadena cálculo intermedio; manejarIgual llama calcular() y limpia operador pendiente."
    },
    {
      "title": "6. Clear y errores",
      "content": "limpiar() resetea todo; mostrarError() muestra mensaje y deja el estado listo para un nuevo dígito tras C."
    }
  ]
}

---

### Igual, limpiar y errores

`8 / 0` en JavaScript devuelve `Infinity` sin lanzar excepción. La calculadora debe detectar divisor cero **antes** de mostrar el resultado.

<!-- code: javascript -->
```javascript
function manejarIgual() {
  if (operadorPendiente === null) return;
  const res = calcular(
    operandoAnterior,
    operadorPendiente,
    operandoActual
  );
  if (!res.ok) {
    mostrarError(res.mensaje);
    return;
  }
  operandoActual = String(res.valor);
  operadorPendiente = null;
  operandoAnterior = "";
  esperandoNuevoOperando = true;
  actualizarPantalla();
}

function limpiar() {
  operandoActual = "0";
  operandoAnterior = "";
  operadorPendiente = null;
  esperandoNuevoOperando = false;
  actualizarPantalla();
}

function mostrarError(mensaje) {
  operandoActual = mensaje;
  operadorPendiente = null;
  operandoAnterior = "";
  esperandoNuevoOperando = true;
  actualizarPantalla();
}
```

<!-- interactive: StepReveal -->
{
  "title": "Flujo de un clic en =",
  "steps": [
    {
      "title": "1. Leer estado",
      "content": "Toma operandoAnterior, operadorPendiente y operandoActual."
    },
    {
      "title": "2. Calcular",
      "content": "Llama calcular(...) con parseFloat interno."
    },
    {
      "title": "3. Si error",
      "content": "mostrarError(mensaje): pantalla con el texto, operador pendiente a null, flag para nuevo dígito."
    },
    {
      "title": "4. Si ok",
      "content": "Muestra resultado, limpia operador pendiente, esperandoNuevoOperando = true."
    }
  ]
}

<!-- interactive: Callout -->
{
  "title": "Precisión de flotantes",
  "children": "0.1 + 0.2 no es exactamente 0.3 en binario. En calculadora básica puedes usar toFixed al mostrar (p. ej. 8 decimales máx.) o aceptar el redondeo visible; no exijas precisión binaria perfecta."
}

---

### Casos reales

#### Widget de cotización en dashboard financiero

Un fintech muestra un mini-calc para probar comisiones. Al pulsar «%» dos veces seguidas, la pantalla mostraba `150%%` y `parseFloat` devolvía `NaN`. Reestructuraron con el mismo patrón que una calculadora: operando en edición, operando guardado, operación pendiente, validación antes de `parseFloat`, mensaje `"Entrada no válida"` y botón `C` que resetea todo.

**Decisión clave:** tratar la UI como reflejo del estado en memoria, no como base de datos.

#### App de propinas que mostraba `Infinity`

La calculadora de propinas dividía la cuenta entre número de comensales sin validar cero comensales. `total / 0` mostraba `Infinity`; usuarios reportaron que la app estaba rota. Añadieron guarda explícita: si el divisor es `0`, mostrar mensaje localizado, bloquear `=` hasta `C`, y registrar el caso en analytics.

**Lección:** en JavaScript la división por cero no lanza error; la UX debe anticipar el caso.

---

### Práctica profunda

Consolida delegación, estado y manejo de errores antes del reto integrador.

<!-- interactive: PracticeExercise -->
{
  "id": "pe-calc-flujo-operador",
  "prompt": "Tras pulsar 12, luego +, luego 5 (sin pulsar =), describe qué valores tienen operandoActual, operandoAnterior, operadorPendiente y esperandoNuevoOperando.",
  "hints": [
    "operandoAnterior guarda el primer número al pulsar +",
    "La pantalla muestra el operando en edición (5)"
  ],
  "expectedKeywords": ["12", "+", "5", "true", "operandoAnterior"],
  "successMessage": "Correcto. operandoAnterior = \"12\", operadorPendiente = \"+\", operandoActual = \"5\", esperandoNuevoOperando = true."
}

<!-- interactive: PracticeExercise -->
{
  "id": "pe-calc-debug-display",
  "prompt": "Se da un fragmento que solo hace display.textContent += digito sin variables de estado. Explica en 5–8 líneas qué falla al encadenar 3 * 4 + 2 y qué variables añadirías.",
  "hints": [
    "Sin operador pendiente no puedes encadenar operaciones",
    "Necesitas operandoAnterior, operadorPendiente y esperandoNuevoOperando"
  ],
  "expectedKeywords": ["estado", "operador", "encaden", "operandoAnterior"],
  "successMessage": "Correcto. Solo concatenar en pantalla pierde el operador pendiente y el primer operando; hace falta estado en memoria."
}

<!-- interactive: PracticeExercise -->
{
  "id": "pe-calc-division-cero",
  "prompt": "Escribe el bloque if que detecta división por cero antes de calcular y llama a mostrarError(\"División por cero\").",
  "hints": [
    "Comprueba operador === \"/\" y el divisor parseado",
    "y === 0 o parseFloat(b) === 0"
  ],
  "expectedKeywords": ["/", "0", "mostrarError", "División"],
  "successMessage": "Correcto. if (operador === \"/\" && y === 0) { mostrarError(\"División por cero\"); return; }"
}

<!-- interactive: PracticeExercise -->
{
  "id": "pe-calc-parseFloat",
  "prompt": "¿Por qué parseFloat(\"12.5.3\") devuelve 12.5 y cómo previene la calculadora el segundo punto en el mismo operando?",
  "hints": [
    "parseFloat lee hasta el segundo punto inválido",
    "includes(\".\") antes de concatenar"
  ],
  "expectedKeywords": ["12.5", "includes", "punto"],
  "successMessage": "Correcto. parseFloat para en el segundo punto; manejarPunto comprueba !operandoActual.includes(\".\") antes de añadir."
}

<!-- interactive: PracticeExercise -->
{
  "id": "pe-calc-textcontent-vs-innerhtml",
  "prompt": "En una sola frase: ¿por qué textContent es preferible a innerHTML en la pantalla de la calculadora?",
  "hints": ["La pantalla solo muestra texto", "innerHTML interpreta etiquetas"],
  "expectedKeywords": ["texto", "segur", "HTML"],
  "successMessage": "Correcto. textContent muestra texto plano sin interpretar HTML; basta para números y mensajes de error."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué conviene guardar el estado en variables JavaScript y no solo leer/escribir el texto del #display en cada clic?",
  "hints": [
    "El display no guarda el operador pendiente",
    "Flags como esperandoNuevoOperando no son visibles en pantalla"
  ],
  "expectedKeywords": ["operador", "pendiente", "flag", "vista"],
  "successMessage": "Correcto. El display es la vista; el estado lógico incluye operador pendiente y flags que no siempre se ven."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo al pulsar 7, luego +, luego 3, luego =: (a) guardar operador y marcar esperandoNuevoOperando, (b) mostrar 3 como nuevo operando, (c) calcular(7, +, 3), (d) concatenar 7 en operando actual, (e) mostrar resultado 10. Indica el orden correcto.",
  "hints": ["Primero el dígito 7", "El = dispara calcular al final"],
  "expectedKeywords": ["d", "a", "b", "c", "e"],
  "successMessage": "Correcto. Orden: (d) 7 → (a) + guarda operador → (b) 3 → (c) calcular → (e) muestra 10."
}

---

### Comprueba tu comprensión

Antes del reto integrador, verifica que dominas estado, eventos y errores.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe function limpiar() que resetee operandoActual, operandoAnterior, operadorPendiente, esperandoNuevoOperando y deje la pantalla en \"0\".",
  "hints": [
    "operandoActual = \"0\"; operandoAnterior = \"\"",
    "operadorPendiente = null; esperandoNuevoOperando = false",
    "Llama actualizarPantalla() al final"
  ],
  "expectedKeywords": ["0", "null", "false", "actualizarPantalla"],
  "successMessage": "Correcto. Las cuatro variables vuelven a su valor inicial y actualizarPantalla sincroniza el DOM."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué ocurre en JavaScript con 8 / 0 y por qué la calculadora debe comprobar el divisor explícitamente?",
  "hints": ["No lanza excepción", "Devuelve Infinity"],
  "expectedKeywords": ["Infinity", "excepción", "divisor", "cero"],
  "successMessage": "Correcto. 8 / 0 es Infinity sin error; la UX debe validar y mostrar un mensaje controlado."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué evitamos eval() para evaluar la expresión de la calculadora?",
  "hints": ["Riesgo de seguridad", "Refuerza switch e if de la lección 04"],
  "expectedKeywords": ["seguridad", "eval", "control"],
  "successMessage": "Correcto. eval ejecuta código arbitrario; switch e if dan control explícito y son más seguros."
}

---

## Reto integrador

**«Calculadora interactiva completa»**

Construye la calculadora en un único HTML + JS (o sección equivalente), sin librerías de terceros ni `eval`.

**Requisitos funcionales**

1. **UI:** pantalla `#display` y teclado con `C`, dígitos `0`–`9`, `.`, `+`, `−`, `×`, `÷`, `=`. Layout legible en móvil (botones mín. ~44px).
2. **Estado:** variables `operandoActual`, `operandoAnterior`, `operadorPendiente`, `esperandoNuevoOperando`.
3. **Eventos:** `addEventListener` con **delegación** en el contenedor del teclado; `data-action` / `data-value` en botones.
4. **Operaciones:** suma, resta, multiplicación, división; encadenar operaciones sin pulsar `=` entre cada par.
5. **Errores:** división por cero → `"División por cero"`; entrada inválida → `"Error"`; botón `C` restaura estado inicial desde cualquier estado.
6. **Código limpio:** función `calcular(a, operador, b)` separada de la manipulación DOM; función `actualizarPantalla()`.
7. **Extra (opcional):** historial de las últimas 3 operaciones en `<ul id="historial">`; soporte de teclado numérico con `keydown`.

**Criterio de éxito:** demo usable en navegador; sin errores en consola en flujo normal; división por cero manejada; estado coherente tras `C` y tras `=`; código legible en funciones pequeñas.

<!-- code: html -->
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Calculadora PBPEW</title>
</head>
<body>
  <div class="calculadora">
    <output id="display" aria-live="polite">0</output>
    <div class="teclado" role="group" aria-label="Teclado calculadora">
      <!-- Completa la rejilla de botones con data-action y data-value -->
    </div>
  </div>
  <script src="calculadora.js" defer></script>
</body>
</html>
```

<!-- code: javascript -->
```javascript
// Esqueleto de partida — completa las funciones marcadas
const display = document.querySelector("#display");
const teclado = document.querySelector(".teclado");

let operandoActual = "0";
let operandoAnterior = "";
let operadorPendiente = null;
let esperandoNuevoOperando = false;

function actualizarPantalla() {
  display.textContent = operandoActual;
}

function calcular(a, operador, b) {
  // Implementa validación NaN, división por cero y switch
}

function manejarDigito(digito) { /* … */ }
function manejarPunto() { /* … */ }
function manejarOperador(op) { /* … */ }
function manejarIgual() { /* … */ }
function limpiar() { /* … */ }
function mostrarError(mensaje) { /* … */ }

teclado.addEventListener("click", (event) => {
  // Delegación: closest, dataset.action
});
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto «Calculadora interactiva completa». Pega tu código o enlaza tu repositorio. Indica qué parte fue más difícil: estado, eventos o errores.",
  "hints": [
    "Empieza por estado + actualizarPantalla antes del listener",
    "Prueba 3 * 4 + 2 sin pulsar = entre operadores",
    "Prueba 8 ÷ 0 = y luego C",
    "Separa calcular() del DOM"
  ],
  "expectedKeywords": ["calcular", "deleg", "operando", "textContent"],
  "successMessage": "Excelente. Has integrado estado, delegación, funciones puras y manejo de errores en un proyecto front completo."
}

---

## Cierre

Has completado el primer proyecto integrador del track PBPEW: una calculadora que une variables, operadores, funciones, DOM y eventos en una interfaz usable.

**Ideas clave para retener:**

- **Estado en memoria** — el `#display` es vista; `operadorPendiente` y `esperandoNuevoOperando` no viven solo en pantalla.
- **`textContent`** — seguro para números y mensajes de error; evita `innerHTML` y `eval()`.
- **Delegación** — un listener en `.teclado` + `closest("button")` escala sin re-enlazar botones.
- **`calcular()` pura** — separa lógica aritmética del DOM; valida `NaN` y divisor cero.
- **División por cero** — JavaScript devuelve `Infinity`; la UX debe detectar y resetear con `C`.

**Siguiente paso:** proyecto `proyectos/todo-list` (orden 102) — persistencia en memoria, listas dinámicas y más delegación de eventos.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Cuál es el rol principal de operadorPendiente en la calculadora?",
      "options": [
        "Guardar el color del botón pulsado",
        "Recordar qué operación aplicar entre el operando anterior y el actual",
        "Sustituir a parseFloat",
        "Evitar que el DOM se actualice"
      ],
      "correctIndex": 1,
      "feedback": "El operador pendiente conecta el primer número con el segundo cuando el usuario pulsa = o encadena otra operación."
    },
    {
      "question": "¿Por qué usar delegación de eventos en .teclado?",
      "options": [
        "Porque un solo botón puede tener solo un listener en JavaScript",
        "Para manejar clics en botones actuales y futuros con un solo listener en el contenedor",
        "Porque click no funciona en <button>",
        "Para no usar addEventListener"
      ],
      "correctIndex": 1,
      "feedback": "Un listener en el padre lee event.target / closest(\"button\") y reduce enlace repetitivo."
    },
    {
      "question": "Tras const x = parseFloat(\"12.5\");, ¿qué valor tiene x?",
      "options": [
        "\"12.5\" (string)",
        "12.5 (number)",
        "NaN siempre",
        "125"
      ],
      "correctIndex": 1,
      "feedback": "parseFloat convierte cadena numérica válida a número de punto flotante."
    },
    {
      "question": "¿Qué debe hacer la calculadora ante 5 ÷ 0 antes de mostrar el resultado?",
      "options": [
        "Confiar en que JavaScript lanzará un error automático",
        "Mostrar Infinity sin comentario",
        "Detectar divisor cero y mostrar un mensaje de error controlado",
        "Ignorar el clic en ="
      ],
      "correctIndex": 2,
      "feedback": "10 / 0 da Infinity sin excepción; la UX debe validar el divisor y resetear estado."
    },
    {
      "question": "¿Qué propiedad del DOM es más adecuada para mostrar el número en pantalla?",
      "options": [
        "innerHTML con plantilla HTML",
        "textContent",
        "outerHTML",
        "hidden"
      ],
      "correctIndex": 1,
      "feedback": "textContent muestra texto sin interpretar etiquetas; basta para números y mensajes de error."
    }
  ]
}
