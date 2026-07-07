---
track: pbpew
slug: 02-js-en-html
title: "JavaScript en HTML, Hola mundo y consola"
order: 2
prerequisites:
  - 01-intro-js-y-dom
related:
  - 03-variables-y-tipos
source_brief: kb/education/pipeline/pbpew/02-js-en-html/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Diferenciar** JavaScript inline (entre etiquetas `<script>` o en atributos de evento) y JavaScript externo (archivo `.js` enlazado con `src`), **nombrando** al menos una ventaja del enfoque externo (reutilización, caché o separación de responsabilidades).
- **Colocar** etiquetas `<script>` en HTML sin romper el parseo del DOM: **explicar** cuándo usar script al final del `<body>`, `defer` en el `<head>` o `async`, y **reconocer** el riesgo de acceder al DOM antes de que exista.
- **Escribir** un programa “Hola mundo” con `console.log` y **usar** al menos tres métodos de consola (`log`, `warn`, `error` o `table`) para depurar en DevTools.
- **Aplicar** comentarios de una y varias líneas (`//`, `/* */`) para documentar el propósito del código, no lo obvio.
- **Diagnosticar** un script externo que no carga (404 en Network) o un script en `<head>` sin `defer` que falla al acceder al DOM, **proponiendo** correcciones concretas.

## Prerrequisitos

- Lección `01-intro-js-y-dom`: concepto de DOM, diferencia entre HTML en disco y representación en memoria, uso básico de DevTools → Consola con `console.log`.
- Conocimientos básicos de HTML: estructura `html`, `head`, `body`, etiquetas comunes (`p`, `h1`, `button`).
- Capacidad para abrir DevTools (F12) y navegar entre las pestañas **Console** y **Network**.

## Contenido

### Objetivos

Esta lección profundiza en **cómo vincular JavaScript al HTML**: formas de inclusión (inline vs externo), ubicación del `<script>` y herramientas de depuración en consola. Los objetivos medibles se listan en la sección anterior.

---

### JavaScript inline y externo

El navegador solo ejecuta JavaScript si está incluido en la página mediante la etiqueta `<script>`. Hay dos enfoques principales:

**JavaScript inline:** código escrito directamente en el HTML — entre `<script>...</script>` o en atributos de evento (`onclick`, `onload`, etc.). Útil para prototipos y pruebas rápidas; en proyectos reales se usa con moderación porque mezcla estructura y comportamiento.

**JavaScript externo:** código en un archivo `.js` separado, enlazado con `<script src="ruta.js">`. Ventajas: reutilización entre páginas, caché del navegador, HTML más limpio y posibilidad de que distintos miembros del equipo trabajen archivos separados.

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "No uses <link> para JavaScript: <link> es para CSS. JavaScript externo siempre va en <script src=\"...\">."
}

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "Inline", "Externo (src)"],
  "rows": [
    ["Ubicación", "Dentro del HTML", "Archivo .js aparte"],
    ["Caché", "No separado", "Sí, reutilizable entre páginas"],
    ["Mantenimiento", "Mezclado con markup", "HTML y JS separados"],
    ["Uso típico", "Prototipos, snippets", "Proyectos reales"]
  ]
}

#### Hola mundo inline

<!-- code: html -->
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primera página JS</title>
  </head>
  <body>
    <h1>JavaScript en HTML</h1>
    <script>
      console.log("Hola mundo");
    </script>
  </body>
</html>
```

Abre el archivo en el navegador y verifica el mensaje en **DevTools → Console** (F12). La salida aparece en consola; no modifica la página visible.

#### JavaScript externo con defer

<!-- code: html -->
```html
<head>
  <meta charset="utf-8" />
  <title>Ejemplo defer</title>
  <script src="js/app.js" defer></script>
</head>
<body>
  <p id="msg">Hola</p>
</body>
```

<!-- code: javascript -->
```javascript
// js/app.js — se ejecuta tras parsear el HTML gracias a defer
console.log("Script externo cargado");
console.log(document.getElementById("msg").textContent); // "Hola"
```

**Rutas relativas en `src`:** `./js/app.js`, `js/app.js` o `/assets/app.js` dependen de la carpeta del HTML y la estructura del proyecto. Una ruta mal escrita impide cargar el script (404 en Network).

<!-- interactive: Callout -->
{
  "title": "Caso real: deploy en subcarpeta",
  "children": "Un equipo publica la web en https://empresa.com/producto/ pero el HTML referencia <script src=\"/js/analytics.js\"> (ruta absoluta desde la raíz del dominio). El archivo real está en /producto/js/analytics.js. Network muestra 404; métricas y eventos no se registran aunque el diseño se vea intacto."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuándo preferirías JavaScript externo sobre inline? Menciona al menos dos razones.",
  "hints": ["Piensa en proyectos medianos o grandes", "¿Qué gana el navegador con archivos separados?"],
  "expectedKeywords": ["reutiliz", "caché", "mantenimiento", "separación"],
  "successMessage": "Correcto. JS externo favorece reutilización, caché del navegador, separación de responsabilidades y mantenimiento en proyectos reales."
}

---

### ¿Dónde poner el `<script>`?

El navegador parsea HTML de arriba abajo. Un script sin `defer` ni `async` en el `<head>` **bloquea** el parseo hasta descargarlo y ejecutarlo; si el script usa el DOM antes de que exista, falla.

**Patrones recomendados:**

- **Al final del `<body>` (clásico):** cuando el script se ejecuta, el DOM ya está construido; no necesita `defer` para acceder a elementos del body.
- **`defer` en `<head>`:** descarga el script en paralelo mientras parsea HTML; ejecuta el script **después** de parsear todo el documento, en orden de aparición. Recomendado para JS externo que manipula DOM.
- **`async`:** descarga en paralelo y ejecuta **en cuanto termina la descarga**, sin esperar al parseo completo ni garantizar orden entre varios scripts async. Útil para analytics o widgets independientes del DOM inicial.

<!-- interactive: CompareTable -->
{
  "headers": ["Estrategia", "¿Bloquea parseo?", "¿Espera al DOM?", "Orden entre scripts"],
  "rows": [
    ["Head sin atributos", "Sí", "No", "Sí"],
    ["defer", "No (descarga paralela)", "Sí", "Sí"],
    ["async", "No", "No", "No garantizado"],
    ["Final del body", "Solo al llegar ahí", "Sí", "Sí"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph malo [Head sin defer — riesgo]\n    H1[Parsea head] --> H2[Descarga y ejecuta JS]\n    H2 --> H3[DOM incompleto — getElementById puede fallar]\n    H3 --> H4[Continúa parseo body]\n  end\n  subgraph bueno1 [Head con defer]\n    D1[Parsea HTML completo] --> D2[Ejecuta JS defer]\n    D2 --> D3[DOM listo]\n  end\n  subgraph bueno2 [Final del body]\n    B1[Parsea todo el body] --> B2[Ejecuta script inline/externo]\n    B2 --> B3[DOM listo]\n  end"
}

#### Script al final del body

<!-- code: html -->
```html
<body>
  <p id="msg">Hola</p>
  <script>
    console.log("Script al final del body");
    document.getElementById("msg").textContent = "Hola desde JS";
  </script>
</body>
```

#### Comparación defer vs async

<!-- code: html -->
```html
<!-- defer: espera al DOM, orden preservado -->
<script src="a.js" defer></script>
<script src="b.js" defer></script>

<!-- async: ejecuta en cuanto descarga; orden no garantizado -->
<script src="analytics.js" async></script>
```

<!-- interactive: Callout -->
{
  "title": "Caso real: landing corporativa",
  "children": "Un desarrollador coloca <script src=\"main.js\"></script> en el <head> sin defer. main.js hace document.querySelector(\"#cta\").addEventListener(...). El botón CTA no responde y la consola muestra error de null. Solución: mover el script al final del <body> o añadir defer."
}

<!-- interactive: StepReveal -->
{
  "title": "Flujo: desde HTML hasta consola",
  "steps": [
    {
      "title": "1. Escribes HTML + script",
      "content": "Incluyes <script> inline o <script src=\"...\"> en tu documento HTML."
    },
    {
      "title": "2. Navegador parsea",
      "content": "El parser construye el DOM de arriba abajo. Con defer, la descarga del .js ocurre en paralelo."
    },
    {
      "title": "3. Motor ejecuta JS",
      "content": "Tras el parseo (o al llegar al script sin defer), el motor JavaScript ejecuta el código."
    },
    {
      "title": "4. console.log envía salida",
      "content": "Los métodos de consola envían mensajes al entorno de depuración, no al DOM visible."
    },
    {
      "title": "5. DevTools Console la muestra",
      "content": "Abre F12 → Console para ver logs, warnings, errores y ejecutar JS ad hoc."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  A[Archivo HTML] --> B[Parser navegador]\n  B --> C[DOM construido]\n  D[script inline o src] --> E[Motor JavaScript]\n  E --> F[console.log / DOM]\n  F --> G[DevTools Console]\n  C --> E"
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué poner un script al final del <body> evita errores al acceder al DOM?",
  "hints": ["¿En qué orden parsea el navegador?", "¿Cuándo existen los nodos del body?"],
  "expectedKeywords": ["parse", "dom", "construido", "existe"],
  "successMessage": "Correcto. Al final del body el HTML ya fue parseado y los nodos existen cuando corre el script."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el HTML — script externo con defer",
  "template": "<script {{blank1}}=\"js/main.js\" {{blank2}}></script>",
  "blanks": [
    { "id": "blank1", "answer": "src", "placeholder": "atributo de ruta" },
    { "id": "blank2", "answer": "defer", "placeholder": "atributo de carga" }
  ]
}

---

### Hola mundo, consola y comentarios

#### Consola del navegador

La consola de DevTools (F12 → **Console**) muestra logs, warnings, errores y permite ejecutar JavaScript ad hoc. La pestaña **Network** ayuda a confirmar si un `.js` cargó (200) o falló (404).

`console.log()` es la primera herramienta de salida y depuración; **no modifica la página visible**. Para cambiar la UI hay que tocar el DOM (por ejemplo, `document.body.innerHTML`).

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "No confundas console.log con cambio de página: solo imprime en consola. Para modificar lo visible debes manipular el DOM."
}

#### Métodos de consola

- `console.log`: mensaje general de depuración.
- `console.info`: informativo (apariencia puede variar según navegador).
- `console.warn`: advertencias (suele mostrarse en amarillo).
- `console.error`: errores con traza.
- `console.table`: datos tabulares a partir de arrays u objetos.
- `console.time` / `console.timeEnd`: medir duración de un bloque.

<!-- code: javascript -->
```javascript
console.log("Paso 1: inicio");
console.info("Información para el desarrollador");
console.warn("Cuidado: valor límite alcanzado");
console.error("Algo falló — revisa la traza");

console.table([
  { nombre: "Ana", nota: 5 },
  { nombre: "Luis", nota: 4.5 },
]);

console.time("bucle");
for (let i = 0; i < 1e6; i++) {}
console.timeEnd("bucle");
```

#### Comentarios en JavaScript

Los comentarios documentan el *por qué*, no lo obvio; el motor los ignora al ejecutar.

- Una línea: `//`
- Varias líneas: `/* ... */`

<!-- code: javascript -->
```javascript
// Comentario de una línea: explica el propósito del bloque siguiente

/*
  Comentario multilínea:
  documentamos una decisión de diseño temporal
*/

const MAX_INTENTOS = 3; // límite acordado con negocio, no un número mágico
console.log(MAX_INTENTOS);
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  A[Página carga HTML/CSS] --> B{Network: script.js?}\n  B -->|200 OK| C[Motor ejecuta JS]\n  B -->|404 Not Found| D[JS no ejecuta]\n  D --> E[Sin logs en consola / sin eventos]\n  C --> F[console.log visible en Console]"
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea index.html con un <script> inline que imprima console.log(\"Hola, PBPEW\"). Abre el archivo en el navegador y verifica el mensaje en DevTools → Console.",
  "hints": ["Usa etiquetas <script>...</script> antes de cerrar </body>", "F12 → pestaña Console"],
  "expectedKeywords": ["hola", "pbpew", "consola"],
  "successMessage": "Correcto. Has vinculado JS inline al HTML y verificado la salida en DevTools."
}

---

### Resumen

- El navegador ejecuta JS solo si está incluido con `<script>` (inline o `src`). Prefiere **JS externo + defer** o **script al final del body** en proyectos reales.
- La **ubicación** del script determina si el DOM ya existe: `<head>` sin `defer` que usa `getElementById` suele fallar; `defer` y final del body evitan ese riesgo.
- **`async`** no garantiza orden ni espera al DOM; úsalo para scripts independientes (analytics), no para lógica que manipula nodos del body.
- La **consola** es tu aliada: `log`, `warn`, `error`, `table`. **Network** diagnostica 404 en rutas incorrectas.
- Los **comentarios** (`//`, `/* */`) ayudan a futuros lectores; documenta el propósito, no lo obvio.
- La lección siguiente (`03-variables-y-tipos`) introduce variables y tipos primitivos.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Extrae el JS de un Hola mundo inline a saludo.js y enlázalo con <script src=\"saludo.js\" defer></script> en el <head>. ¿Qué ventaja obtienes respecto al inline?",
  "hints": ["El HTML queda más limpio", "¿Puede el navegador cachear el .js?"],
  "expectedKeywords": ["externo", "caché", "separación", "reutiliz"],
  "successMessage": "Correcto. JS externo separa responsabilidades, permite caché y reutilización entre páginas."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Confunde defer con async: ¿cuál usarías para un script que llama a document.getElementById al cargar la página? ¿Por qué?",
  "hints": ["¿Cuál espera al DOM?", "async no garantiza orden"],
  "expectedKeywords": ["defer", "dom", "async"],
  "successMessage": "Correcto. defer espera al parseo completo del HTML; async ejecuta en cuanto descarga y no garantiza que el DOM esté listo."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Abre DevTools → Network, recarga una página con un src incorrecto a propósito y describe qué ves (estado HTTP y efecto en el comportamiento).",
  "hints": ["Filtra por JS en Network", "¿Qué código HTTP indica archivo no encontrado?"],
  "expectedKeywords": ["404", "network", "no ejecuta"],
  "successMessage": "Correcto. Un 404 indica que el script no cargó; la página puede verse bien pero el comportamiento JS no aparece."
}

---

## Reto integrador

**“Arregla la página del evento”**

Te entregan este fragmento roto:

<!-- code: html -->
```html
<!doctype html>
<html lang="es">
  <head>
    <script src="scripts/main.js"></script>
  </head>
  <body>
    <button id="registro">Inscribirme</button>
    <script src="/js/contador.js"></script>
  </body>
</html>
```

`main.js` (ruta real: `js/main.js`) hace `document.getElementById("registro").addEventListener(...)`. `contador.js` existe en `js/contador.js` junto al HTML. En local la página se ve bien pero el botón no responde y Network muestra un 404.

En 8–10 líneas (lista numerada), entrega:

1. Dos errores concretos (ruta + ubicación del script).
2. Dos correcciones propuestas (ruta correcta + `defer` o mover script).
3. Qué comprobarías en DevTools (Console + Network).
4. Un `console.log` de prueba que añadirías para confirmar que `main.js` cargó.

**Criterio de éxito:** identifica 404 por ruta incorrecta, explica DOM no listo en head sin defer, propone `src="js/main.js" defer` o script al final del body, menciona verificación en Network/Console.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Redacta tu diagnóstico (8–10 líneas) para la página del evento: identifica errores de ruta y ubicación del script, propone correcciones y describe qué verificarías en DevTools.",
  "hints": [
    "main.js está en js/main.js, no en scripts/",
    "contador.js usa ruta absoluta /js/ pero el archivo está en js/ relativo al HTML",
    "Script en head sin defer puede ejecutarse antes de que exista #registro",
    "Añade console.log al inicio de main.js para confirmar carga"
  ],
  "expectedKeywords": ["404", "defer", "ruta", "network", "consola"],
  "successMessage": "Excelente diagnóstico. Has integrado ubicación del script, rutas relativas y verificación en DevTools."
}

---

## Cierre

Has aprendido a vincular JavaScript al HTML de forma segura y a usar la consola como primera herramienta de depuración. Estos conceptos son prerequisito para manipular el DOM, responder a eventos y depurar errores en el resto del track PBPEW.

**Ideas clave para retener:**

- Inline = rápido para prototipos; externo = estándar en proyectos reales.
- Ubicación del `<script>` importa: `defer`, final del body o `async` según el caso.
- `console.log` y Network son tus primeras herramientas de diagnóstico.
- Una ruta mal escrita en `src` produce 404 silencioso: la página se ve, el comportamiento no.

**Siguiente paso:** lección `03-variables-y-tipos` — variables, tipos primitivos y operadores básicos.

---

### Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué atributo enlaza un archivo JavaScript externo?",
      "options": [
        "href",
        "src",
        "link",
        "code"
      ],
      "correctIndex": 1,
      "feedback": "<script src=\"archivo.js\"> carga JS externo. href pertenece a <a> y <link> (CSS)."
    },
    {
      "question": "¿Qué hace defer en un <script src=\"...\"> del <head>?",
      "options": [
        "Ejecuta el script antes de descargar el HTML",
        "Descarga en paralelo y ejecuta tras parsear todo el HTML",
        "Impide que el script se cachee",
        "Convierte inline en externo"
      ],
      "correctIndex": 1,
      "feedback": "defer no bloquea el parseo y respeta el orden; el DOM suele estar listo al ejecutarse."
    },
    {
      "question": "¿Dónde aparece la salida de console.log(\"Hola\")?",
      "options": [
        "En el título de la pestaña",
        "En la consola de DevTools",
        "Automáticamente dentro del <body>",
        "En el archivo HTML en disco"
      ],
      "correctIndex": 1,
      "feedback": "console.log es salida de depuración en DevTools; no modifica el DOM ni el archivo fuente."
    },
    {
      "question": "Network muestra 404 para app.js. ¿Qué ocurre con ese script?",
      "options": [
        "El navegador lo ejecuta igual con código vacío",
        "No se ejecuta; el comportamiento asociado no aparece",
        "Se reemplaza automáticamente por inline",
        "Solo falla en Firefox"
      ],
      "correctIndex": 1,
      "feedback": "Sin archivo válido no hay ejecución. La página puede verse bien (HTML/CSS) pero el JS vinculado no corre."
    },
    {
      "question": "¿Cuál es la forma recomendada de comentar una sola línea en JavaScript?",
      "options": [
        "<!-- comentario -->",
        "# comentario",
        "// comentario",
        ":: comentario"
      ],
      "correctIndex": 2,
      "feedback": "// es comentario de línea en JS. <!-- --> es HTML; # no es comentario estándar en JS."
    }
  ]
}
