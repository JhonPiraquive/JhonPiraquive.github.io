---
track: pbpew
slug: 01-intro-js-y-dom
title: "¿Qué es JavaScript? · Historia · DOM"
order: 1
prerequisites: []
related:
  - 02-js-en-html
source_brief: kb/education/pipeline/pbpew/01-intro-js-y-dom/brief.md
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** JavaScript y **nombrar** al menos tres características clave del lenguaje (interpretado, tipado dinámico, orientado a eventos en el navegador).
- **Describir** al menos tres ámbitos de uso actuales de JavaScript (navegador, servidor con Node.js, y uno adicional: móvil, herramientas o videojuegos).
- **Explicar** qué es el DOM y **distinguir** el archivo HTML en disco de la representación viva en memoria que JavaScript puede modificar.
- **Identificar** DevTools → Consola como herramienta para depurar con `console.log` y **reconocer** que TypeScript debe transpilarse a JavaScript antes de ejecutarse en el navegador.
- **Aplicar** el objeto `document` en la consola del navegador para leer propiedades básicas del árbol DOM (por ejemplo, `document.documentElement.tagName`).

## Prerrequisitos

- Conocimientos básicos de HTML: etiquetas comunes (`html`, `head`, `body`, `p`, `h1`, `button`, `form`).
- Familiaridad con un navegador web moderno (Chrome, Firefox, Edge o Safari).
- Capacidad para abrir las herramientas de desarrollo del navegador (tecla **F12** o clic derecho → Inspeccionar).
- No se requiere experiencia previa en programación; esta es la primera lección del track PBPEW.

## Contenido

### Objetivos del tema

Esta lección introduce JavaScript como lenguaje de comportamiento en la web, sitúa su historia y ámbitos de uso, y presenta el DOM como puente entre HTML y la lógica ejecutable en el navegador. Los objetivos medibles se listan en la sección anterior.

---

### ¿Qué es JavaScript?

JavaScript (JS) es un lenguaje de programación diseñado al inicio para dar **comportamiento** a las páginas web en el navegador: validar formularios, reaccionar a clics, cambiar contenido sin recargar toda la página, etc.

Hoy también se usa fuera del navegador (servidores con Node.js, herramientas de desarrollo, scripts de automatización). El estándar oficial del lenguaje se publica como **ECMAScript**; cuando leas “ES2015”, “ES6” o “ES2024”, se refieren a versiones de ese estándar. “JavaScript” es la implementación práctica en motores y navegadores.

El motor JavaScript (V8, SpiderMonkey, etc.) lee y ejecuta el código cuando la página carga o cuando un script se dispara. **No modifica el archivo HTML en disco**, sino la representación en memoria.

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "No confundas HTML con JavaScript: HTML define estructura; JS define comportamiento. Editar solo HTML no añade lógica interactiva."
}

<!-- interactive: CodeBlock -->
```javascript
console.log("Hola desde JavaScript");
console.log(2 + 2);
console.log({ curso: "PBPEW", leccion: 1 });
```

---

### Características principales

JavaScript presenta rasgos que lo distinguen de lenguajes compilados clásicos como C o Java:

- **Interpretado:** el motor (navegador u otro entorno) lee y ejecuta el código sin un paso de compilación obligatorio; herramientas modernas pueden optimizar o empaquetar el código, pero no es requisito para empezar.
- **Tipado dinámico:** el tipo de una variable puede cambiar según el valor que guardes.
- **Multiparadigma:** puedes programar con funciones, objetos y, desde ES6, también con `class` para orientación a objetos.
- **Orientado a eventos en el navegador:** mucho código “reacciona” a eventos (clic, tecla, carga de página).
- **Modelo de un solo hilo** en el navegador para tu página; la asincronía (tratada más adelante en el curso) organiza tareas sin bloquear la interfaz.

<!-- interactive: CompareTable -->
{
  "headers": ["Capa", "Responsabilidad", "Ejemplo"],
  "rows": [
    ["HTML", "Estructura", "<form>, <button>"],
    ["CSS", "Presentación", "colores, layout"],
    ["JavaScript", "Comportamiento", "validar, reaccionar al clic"],
    ["DOM", "Puente en memoria", "árbol que JS manipula"]
  ]
}

---

### ¿Para qué se usa JavaScript?

#### Desarrollo web (front-end)

JS manipula el DOM, valida datos, comunica con APIs y construye experiencias interactivas. Muchos sitios combinan HTML (estructura), CSS (presentación) y JavaScript (comportamiento).

#### Aplicaciones en servidor (Node.js)

Node.js es un entorno que ejecuta JavaScript fuera del navegador. Sirve para APIs REST, herramientas de línea de comandos, automatización y servidores en tiempo real.

#### Aplicaciones móviles (TypeScript / JSX → React Native)

En ecosistemas como React Native sueles escribir en TypeScript o usar sintaxis JSX. Un transpilador (Babel, `tsc`) convierte ese código a JavaScript estándar. El framework ejecuta la lógica y, mediante su puente nativo, traduce la interfaz a componentes que en Android interactúan con Kotlin/Java y en iOS con Swift/Objective-C.

**JavaScript vs TypeScript:** TypeScript añade tipos estáticos sobre JS; los navegadores no ejecutan TS directamente — debe transpilarse a JavaScript antes de ejecutarse.

#### Videojuegos

Existen motores y bibliotecas (Phaser, Three.js, WebGL) que usan JavaScript para juegos en navegador o empaquetados como aplicación.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  subgraph dev [Código que escribes]\n    TS[TypeScript / JSX]\n  end\n  subgraph build [Herramientas]\n    TR[Transpilador Babel / tsc]\n  end\n  subgraph runtime [Ejecución]\n    JS[Código JavaScript]\n    BR[Navegador o Node.js]\n  end\n  TS --> TR --> JS --> BR"
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Enumera tres ámbitos donde se usa JavaScript hoy. Incluye al menos: navegador, servidor y uno más (móvil, herramientas, juegos, etc.).",
  "hints": ["Piensa en Node.js para servidor", "React Native es un ejemplo móvil", "Phaser o Three.js son ejemplos de juegos"],
  "expectedKeywords": ["navegador", "servidor", "node"],
  "successMessage": "Correcto. Has identificado los principales ecosistemas donde JavaScript opera hoy."
}

---

### Historia breve y vídeo

JavaScript nació en **1995** en Netscape, de la mano de Brendan Eich, con el nombre inicial “Mocha” y luego “LiveScript”. Se estandarizó bajo el nombre ECMAScript (1997). La historia incluye la “guerra de los navegadores”, la evolución por versiones ES (ES5, ES6/ES2015, ES2024…) y el auge de Node.js (2009) y los frameworks modernos.

<!-- interactive: StepReveal -->
{
  "title": "Línea temporal de JavaScript",
  "steps": [
    {
      "title": "1995 — Nacimiento en Netscape",
      "content": "Brendan Eich crea Mocha → LiveScript → JavaScript en apenas diez días para dar interactividad al navegador Netscape."
    },
    {
      "title": "1997 — ECMAScript",
      "content": "El lenguaje se estandariza bajo el nombre ECMAScript. “JavaScript” pasa a ser la implementación práctica en motores y navegadores."
    },
    {
      "title": "2000s — Guerra de navegadores y ES3/ES5",
      "content": "Competencia entre IE, Firefox y otros motores. ES3 (1999) y ES5 (2009) consolidan el lenguaje en la web."
    },
    {
      "title": "2015 — ES6 (ES2015)",
      "content": "Actualización mayor: `let`/`const`, clases, módulos, arrow functions. Marca el inicio de versiones anuales del estándar."
    },
    {
      "title": "2009–presente — Node.js y frameworks",
      "content": "Node.js lleva JS al servidor. React, Vue, Angular y React Native expanden el ecosistema más allá del navegador."
    }
  ]
}

> **Vídeo sugerido:** documental o charla breve sobre la historia de JavaScript (1995–presente). El estudiante puede buscar “historia JavaScript Brendan Eich” o consultar MDN — Introducción a JavaScript.

<!-- interactive: Callout -->
{
  "title": "Caso real: tienda online con JavaScript roto",
  "children": "Un e-commerce despliega una actualización y el archivo checkout.js queda con ruta incorrecta en <script src=\"...\">. La página se ve bien (HTML/CSS cargan), pero el carrito no actualiza totales y el botón “Pagar” no responde. En DevTools → Network/Consola se verifica si el script devuelve 404 o hay errores. Refuerza: estructura (HTML) ≠ comportamiento (JS)."
}

---

### ¿Qué es el DOM?

Cuando el navegador lee un documento HTML, construye una representación en memoria: el **Document Object Model (DOM)**. Es un árbol de nodos: documento, elementos (`<p>`, `<div>`), texto, atributos, etc.

JavaScript puede recorrer y modificar ese árbol: crear nodos, cambiar texto, estilos o escuchar eventos. **No confundas el DOM con el código fuente HTML en disco:** el archivo `.html` es estático; el DOM es la copia viva en memoria que puede cambiar sin volver a pedir el archivo al servidor.

El objeto global **`document`** es la entrada al DOM en el navegador (por ejemplo, `document.documentElement` apunta al nodo `<html>`).

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  doc[document]\n  html[html]\n  head[head]\n  body[body]\n  doc --> html\n  html --> head\n  html --> body\n  body --> h1[\"h1 — Texto del título\"]\n  body --> p[\"p — párrafo\"]"
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  A[Archivo HTML] --> B[Parser del navegador]\n  B --> C[Árbol DOM en memoria]\n  C --> D[Renderizado visual]\n  E[Archivo .js] --> F[Motor JavaScript]\n  F --> G[Lee y modifica DOM via document]\n  G --> D"
}

<!-- interactive: CodeBlock -->
```javascript
// Ejecutar en DevTools → Console con cualquier página abierta
console.log(document.documentElement.tagName); // "HTML"
console.log(document.body.children.length);     // nº de hijos directos de body
```

<!-- interactive: Callout -->
{
  "title": "Caso real: panel admin y HTML en disco",
  "children": "Un practicante edita el texto de un <h1> en el archivo HTML del repositorio, pero en el navegador sigue viendo el título antiguo. La app es una SPA: el título se genera con JavaScript que modifica el DOM al cargar. DevTools → Elements muestra el árbol vivo, no solo el archivo fuente."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — entrada al DOM",
  "template": "console.{{blank1}}(\"El tag raíz es:\", document.documentElement.{{blank2}});",
  "blanks": [
    { "id": "blank1", "answer": "log", "placeholder": "método de consola" },
    { "id": "blank2", "answer": "tagName", "placeholder": "propiedad del elemento" }
  ]
}

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica con tus palabras qué gana una página web al poder modificar el DOM.",
  "hints": ["Piensa en interactividad sin recargar", "¿Qué ve el usuario cuando hace clic?"],
  "expectedKeywords": ["interactividad", "recargar", "actualizar"],
  "successMessage": "Correcto. Modificar el DOM permite interactividad, actualizar la UI sin recargar y dar feedback inmediato al usuario."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué TypeScript suele convertirse a JavaScript antes de ejecutarse en muchos proyectos?",
  "hints": ["¿Qué entiende el motor del navegador?", "¿Qué aporta TS en tiempo de desarrollo?"],
  "expectedKeywords": ["navegador", "transpil", "tipos"],
  "successMessage": "Correcto. Los navegadores y muchos runtimes solo ejecutan JavaScript; TypeScript añade tipos en tiempo de desarrollo y debe transpilarse."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Abre DevTools en cualquier sitio web, ejecuta console.log(document.title) en la Consola y describe qué imprime.",
  "hints": ["F12 → pestaña Consola", "document.title devuelve el título de la pestaña del navegador"],
  "expectedKeywords": ["título", "title"],
  "successMessage": "Correcto. document.title devuelve el texto del elemento <title> de la página, visible en la pestaña del navegador."
}

---

### Resumen

- JavaScript da **comportamiento** a la web y se ha extendido a servidor (Node.js), herramientas, móvil y videojuegos.
- El **DOM** es el árbol de objetos en memoria que representa la página; JS lo manipula en tiempo de ejecución sin modificar el archivo HTML en disco.
- **DevTools → Consola** permite depurar con `console.log` y probar acceso al DOM mediante `document`.
- **TypeScript** añade tipos estáticos; debe transpilarse a JavaScript antes de ejecutarse en navegador o Node.js.
- La lección siguiente (`02-js-en-html`) profundiza en cómo vincular scripts al HTML (inline vs externo).

---

## Reto integrador

**“Diagnóstico de página rota”**

Te llega este reporte de un compañero:

> “Cambié el `<h1>` en `index.html` pero el título no cambia. Además el botón Agregar no hace nada. Uso TypeScript en el proyecto.”

En 6–8 líneas (o lista numerada), explica:

1. Qué es el DOM y por qué editar HTML en disco puede no coincidir con lo visible.
2. Dónde se ejecuta el JS de esa app (navegador) y qué herramienta usarías para investigar (DevTools: Elements, Console, Network).
3. Dos comprobaciones concretas (¿carga el `.js`? ¿hay errores en consola?).
4. Por qué TypeScript implica un paso extra antes de que el navegador ejecute código.

**Criterio de éxito:** distingue HTML fuente vs DOM vivo, nombra DevTools/consola, menciona transpilación TS→JS, propone verificar carga del script.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Redacta tu diagnóstico (6–8 líneas) para el reporte del compañero: título que no cambia, botón inerte y proyecto en TypeScript. Incluye DOM, DevTools y transpilación.",
  "hints": [
    "El DOM es la copia viva en memoria; una SPA puede generar el título con JS",
    "Revisa Network: ¿el .js carga o devuelve 404?",
    "Revisa Console: ¿hay errores de referencia?",
    "TypeScript debe compilarse/transpilarse a JS antes de ejecutarse"
  ],
  "expectedKeywords": ["dom", "devtools", "consola", "transpil", "script"],
  "successMessage": "Excelente diagnóstico. Has integrado los conceptos clave de la lección."
}

---

## Cierre

Has completado la introducción a JavaScript y al DOM. Los conceptos de esta lección son la base de todo el track PBPEW: sin entender la diferencia entre HTML estático y DOM vivo, y sin saber usar la consola del navegador, será difícil avanzar en manipulación del DOM, eventos y asincronía.

**Ideas clave para retener:**

- HTML = estructura · CSS = presentación · JavaScript = comportamiento · DOM = puente en memoria.
- El navegador ejecuta JavaScript; TypeScript es una capa de desarrollo que debe convertirse a JS.
- DevTools (F12) es tu primera herramienta de diagnóstico: Elements, Console y Network.

**Siguiente paso:** lección `02-js-en-html` — vincular scripts al HTML con `<script>` (inline vs externo).

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué es el DOM?",
      "options": [
        "Un editor de HTML",
        "La representación en memoria del documento como árbol de nodos",
        "Un framework de JavaScript",
        "El archivo CSS de la página"
      ],
      "correctIndex": 1,
      "feedback": "El navegador parsea HTML y construye el DOM; JavaScript lo manipula en runtime. No es el archivo en disco ni un framework."
    },
    {
      "question": "¿Dónde se ejecuta principalmente el JavaScript en este curso PBPEW?",
      "options": [
        "Solo en el servidor",
        "En el navegador del usuario",
        "En la base de datos",
        "En el compilador de TypeScript"
      ],
      "correctIndex": 1,
      "feedback": "PBPEW empieza por JS en el navegador (DOM, consola). Node.js y otros entornos se mencionan como contexto, pero el foco inicial es el cliente."
    },
    {
      "question": "¿Qué herramienta del navegador usas para ver errores y probar console.log?",
      "options": [
        "DevTools → Consola",
        "Bloc de notas",
        "Git",
        "El inspector de red únicamente"
      ],
      "correctIndex": 0,
      "feedback": "F12 abre DevTools; la pestaña Consola muestra logs y errores. Network ayuda a ver si cargan scripts, pero la consola es la herramienta de depuración directa."
    },
    {
      "question": "¿Qué etiqueta HTML incluye un archivo JavaScript externo?",
      "options": [
        "<link>",
        "<script src=\"...\">",
        "<js>",
        "<style>"
      ],
      "correctIndex": 1,
      "feedback": "<script src=\"ruta.js\"> vincula JS externo. <link> es para CSS; sin script el navegador no ejecuta tu código."
    },
    {
      "question": "¿Qué hace console.log(\"Hola\")?",
      "options": [
        "Cambia el título de la pestaña del navegador",
        "Escribe \"Hola\" en la consola de DevTools",
        "Inserta \"Hola\" en el DOM automáticamente",
        "Compila TypeScript a JavaScript"
      ],
      "correctIndex": 1,
      "feedback": "console.log envía salida a la consola para depurar; no modifica el DOM ni compila TS."
    }
  ]
}
