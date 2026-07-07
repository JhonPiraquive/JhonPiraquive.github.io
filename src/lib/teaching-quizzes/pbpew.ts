import type { QuizQuestion } from "@/components/teaching/Quiz";

export const PBPEW_QUIZZES: Record<string, QuizQuestion[]> = {
  "01-intro-js-y-dom": [
    {
      question: "¿Qué es el DOM?",
      options: [
        "Un editor de HTML",
        "La representación en memoria del documento como árbol de nodos",
        "Un framework de JavaScript",
        "El archivo CSS de la página",
      ],
      correctIndex: 1,
      feedback:
        "El navegador parsea HTML y construye el DOM; JavaScript lo manipula en runtime. No es el archivo en disco ni un framework.",
    },
    {
      question: "¿Dónde se ejecuta principalmente el JavaScript en Programación básica para entornos web (PBPEW)?",
      options: [
        "Solo en el servidor",
        "En el navegador del usuario",
        "En la base de datos",
        "En el compilador de TypeScript",
      ],
      correctIndex: 1,
      feedback:
        "El track PBPEW empieza por JS en el navegador (DOM, consola). Node.js y otros entornos se mencionan como contexto, pero el foco inicial es el cliente.",
    },
    {
      question: "¿Qué herramienta del navegador usas para ver errores y probar console.log?",
      options: [
        "DevTools → Consola",
        "Bloc de notas",
        "Git",
        "El inspector de red únicamente",
      ],
      correctIndex: 0,
      feedback:
        "F12 abre DevTools; la pestaña Consola muestra logs y errores. Network ayuda a ver si cargan scripts, pero la consola es la herramienta de depuración directa.",
    },
    {
      question: "¿Qué etiqueta HTML incluye un archivo JavaScript externo?",
      options: ['<link>', '<script src="...">', "<js>", "<style>"],
      correctIndex: 1,
      feedback:
        '<script src="ruta.js"> vincula JS externo. <link> es para CSS; sin script el navegador no ejecuta tu código.',
    },
    {
      question: '¿Qué hace console.log("Hola")?',
      options: [
        "Cambia el título de la pestaña del navegador",
        'Escribe "Hola" en la consola de DevTools',
        'Inserta "Hola" en el DOM automáticamente',
        "Compila TypeScript a JavaScript",
      ],
      correctIndex: 1,
      feedback: "console.log envía salida a la consola para depurar; no modifica el DOM ni compila TS.",
    },
  ],
  "02-js-en-html": [
    {
      question: "¿Qué atributo enlaza un archivo JavaScript externo?",
      options: ["href", "src", "link", "code"],
      correctIndex: 1,
      feedback:
        '<script src="archivo.js"> carga JS externo. href pertenece a <a> y <link> (CSS).',
    },
    {
      question: '¿Qué hace defer en un <script src="..."> del <head>?',
      options: [
        "Ejecuta el script antes de descargar el HTML",
        "Descarga en paralelo y ejecuta tras parsear todo el HTML",
        "Impide que el script se cachee",
        "Convierte inline en externo",
      ],
      correctIndex: 1,
      feedback:
        "defer no bloquea el parseo y respeta el orden; el DOM suele estar listo al ejecutarse.",
    },
    {
      question: '¿Dónde aparece la salida de console.log("Hola")?',
      options: [
        "En el título de la pestaña",
        "En la consola de DevTools",
        "Automáticamente dentro del <body>",
        "En el archivo HTML en disco",
      ],
      correctIndex: 1,
      feedback:
        "console.log es salida de depuración en DevTools; no modifica el DOM ni el archivo fuente.",
    },
    {
      question: "Network muestra 404 para app.js. ¿Qué ocurre con ese script?",
      options: [
        "El navegador lo ejecuta igual con código vacío",
        "No se ejecuta; el comportamiento asociado no aparece",
        "Se reemplaza automáticamente por inline",
        "Solo falla en Firefox",
      ],
      correctIndex: 1,
      feedback:
        "Sin archivo válido no hay ejecución. La página puede verse bien (HTML/CSS) pero el JS vinculado no corre.",
    },
    {
      question: "¿Cuál es la forma recomendada de comentar una sola línea en JavaScript?",
      options: ["<!-- comentario -->", "# comentario", "// comentario", ":: comentario"],
      correctIndex: 2,
      feedback: "// es comentario de línea en JS. <!-- --> es HTML; # no es comentario estándar en JS.",
    },
  ],
  "03-variables-y-tipos": [
    {
      question: "¿Cuál es la forma recomendada de declarar una URL de API que no cambiará?",
      options: [
        'var URL_API = "..."',
        'let URL_API = "..."',
        'const URL_API = "..."',
        'URL_API = "..." sin declarar',
      ],
      correctIndex: 2,
      feedback:
        "const indica que no reasignarás el enlace; es el default para valores estables. Sin declarar es mala práctica y falla en modo estricto.",
    },
    {
      question: "¿Qué ocurre al ejecutar console.log(x); let x = 5;",
      options: [
        "Imprime undefined",
        "Imprime 5",
        "ReferenceError por zona muerta temporal",
        "SyntaxError",
      ],
      correctIndex: 2,
      feedback:
        "let sí tiene hoisting, pero no puedes leer la variable antes de su declaración. No confundir con var, que imprimiría undefined.",
    },
    {
      question: "Dado const lista = [1, 2]; lista.push(3);, ¿es válido?",
      options: [
        "No, const prohíbe cualquier cambio",
        "Sí, mutar el array está permitido",
        "Solo si usas let",
        "Solo en modo estricto",
      ],
      correctIndex: 1,
      feedback:
        "const impide reasignar lista a otro array, pero push muta el mismo objeto en memoria — eso es válido.",
    },
    {
      question: "¿Qué devuelve typeof null?",
      options: ['"null"', '"undefined"', '"object"', '"number"'],
      correctIndex: 2,
      feedback:
        "Es un bug histórico del lenguaje. Para comprobar null usa valor === null, no confíes solo en typeof.",
    },
    {
      question: "Tras const a = { n: 1 }; const b = a; b.n = 2;, ¿cuánto vale a.n?",
      options: [
        "1 — son copias independientes",
        "2 — comparten la misma referencia",
        "undefined",
        "Error de ejecución",
      ],
      correctIndex: 1,
      feedback:
        "Objetos se asignan por referencia. a y b apuntan al mismo objeto; mutar vía b afecta a a.",
    },
  ],
  "04-operadores-y-decisiones": [
    {
      question: '¿Qué imprime console.log(5 === "5");?',
      options: ["true", "false", '"5"', "Error de sintaxis"],
      correctIndex: 1,
      feedback:
        '=== exige mismo tipo y valor. Un número y un string nunca son estrictamente iguales aunque se "vean" igual.',
    },
    {
      question: "¿Cuál de estos valores es falsy en JavaScript?",
      options: ['"0"', "[]", "0", "{}"],
      correctIndex: 2,
      feedback:
        'El número 0 es falsy. El string "0", arrays y objetos vacíos son truthy — un error frecuente con datos de formularios.',
    },
    {
      question: "¿Qué hace falta tras un case si no quieres que la ejecución continúe en el siguiente case?",
      options: [
        "return obligatorio en todo script",
        "break",
        "else",
        "continue",
      ],
      correctIndex: 1,
      feedback:
        "Sin break, el switch hace fall-through y ejecuta los casos siguientes. continue aplica a bucles, no a switch (salvo en contextos de loop anidados).",
    },
    {
      question: "Dado const ok = edad >= 18 && tieneDocumento;, ¿cuándo ok es true?",
      options: [
        "Cuando al menos una condición es verdadera",
        "Solo cuando ambas condiciones son truthy",
        "Cuando edad es exactamente 18",
        "Siempre que tieneDocumento exista como variable",
      ],
      correctIndex: 1,
      feedback:
        "&& es AND lógico: las dos expresiones deben ser truthy. Si la primera es falsy, la segunda ni se evalúa (cortocircuito).",
    },
    {
      question: "¿Qué operador devuelve el resto de dividir 10 entre 3?",
      options: ["/", "%", "**", "//"],
      correctIndex: 1,
      feedback: "% es módulo: 10 % 3 → 1. / devuelve cociente decimal; ** es potencia.",
    },
  ],
  "06-funciones-y-callbacks": [
    {
      question: "¿Qué hace return dentro de una función?",
      options: [
        "Reinicia el programa",
        "Devuelve un valor al llamador y termina la función en ese punto",
        "Imprime en consola automáticamente",
        "Declara una variable global",
      ],
      correctIndex: 1,
      feedback:
        "return envía el resultado hacia fuera y detiene la ejecución de la función en esa línea. Para ver valores en consola usas console.log, no confundir con return.",
    },
    {
      question: "En function sumar(a, b) { return a + b; } y la llamada sumar(2, 5), ¿qué son a y b?",
      options: ["Argumentos", "Parámetros", "Callbacks", "Propiedades del objeto global"],
      correctIndex: 1,
      feedback:
        "a y b son nombres en la definición (parámetros). Los valores 2 y 5 en la llamada son los argumentos.",
    },
    {
      question: "¿Cuál devuelve el triple de un número con retorno implícito?",
      options: [
        "const triple = (x) => { x * 3; };",
        "const triple = (x) => x * 3;",
        "const triple = function (x) { x * 3 };",
        "function triple(x) { x * 3 }",
      ],
      correctIndex: 1,
      feedback:
        "Con flecha y una sola expresión sin llaves, el resultado se devuelve automáticamente. Las opciones con cuerpo sin return explícito devuelven undefined.",
    },
    {
      question: "¿Qué es un callback en JavaScript?",
      options: [
        "Un error de sintaxis en un bucle",
        "Una función que pasas a otra para que la ejecute en el momento adecuado",
        "Un tipo de variable solo para números",
        "El archivo HTML que carga el script",
      ],
      correctIndex: 1,
      feedback:
        "Los callbacks conectan tu lógica con código que decide cuándo ejecutarla (bucles propios, eventos, temporizadores, APIs).",
    },
    {
      question: "¿Por qué boton.addEventListener('click', guardar()); suele ser un error?",
      options: [
        "Porque addEventListener no acepta strings",
        "Porque ejecuta guardar al registrar y pasa su retorno, no la función",
        "Porque los clics no usan callbacks",
        "Porque hay que usar var obligatoriamente",
      ],
      correctIndex: 1,
      feedback:
        "Los paréntesis () invocan la función de inmediato. Para el clic necesitas pasar la referencia: guardar o () => guardar().",
    },
  ],
  "07-arrays-json-objetos": [
    {
      question: "¿Qué devuelve [10, 20].map((x) => x / 10)?",
      options: [
        "undefined",
        "[1, 2] — un nuevo array",
        "[10, 20] modificado in place",
        "El número 2",
      ],
      correctIndex: 1,
      feedback:
        ".map aplica el callback a cada elemento y devuelve un nuevo array con los resultados. El original no se reemplaza automáticamente.",
    },
    {
      question: "¿Cuál es la diferencia principal entre push y unshift?",
      options: [
        "push solo funciona con strings",
        "push añade al final; unshift al inicio",
        "unshift devuelve el elemento eliminado",
        "Ninguna; son alias",
      ],
      correctIndex: 1,
      feedback:
        "Ambos mutan el array, pero push/pop operan al final y unshift/shift al inicio.",
    },
    {
      question: "Tras const a = { x: 1 }; const b = a; b.x = 5;, ¿qué vale a.x?",
      options: ["1", "5", "undefined", "Error de sintaxis"],
      correctIndex: 1,
      feedback:
        "Los objetos se asignan por referencia. a y b apuntan al mismo objeto; mutar por b se ve en a.",
    },
    {
      question: "¿Para qué sirve JSON.stringify?",
      options: [
        "Ejecutar funciones guardadas en un objeto",
        "Convertir un objeto o array JS a texto JSON para transmitir o guardar",
        "Validar que un usuario esté autenticado",
        "Ordenar un array alfabéticamente",
      ],
      correctIndex: 1,
      feedback: "stringify serializa a texto; parse hace el camino inverso. No serializa funciones.",
    },
    {
      question: '¿Qué hace const { nombre, edad = 18 } = usuario si usuario solo tiene { nombre: "Eva" }?',
      options: [
        "Lanza TypeError",
        'nombre es "Eva" y edad es 18',
        "edad es undefined sin default",
        "Copia profunda de usuario",
      ],
      correctIndex: 1,
      feedback:
        "La destructuración extrae nombre existente y aplica el valor por defecto 18 a edad cuando falta o es undefined.",
    },
  ],
  "08-this-scope-clases": [
    {
      question: "En caja.mostrar() donde mostrar es método de caja, ¿qué suele ser this dentro de mostrar?",
      options: [
        "El objeto global window siempre",
        "El objeto caja",
        "undefined siempre",
        "El archivo HTML",
      ],
      correctIndex: 1,
      feedback:
        "En una llamada como objeto.metodo(), el punto antes del método enlaza this al objeto que está a la izquierda.",
    },
    {
      question: "¿Qué ámbito tiene una variable declarada con let dentro de un bloque { }?",
      options: [
        "Global en todo el programa",
        "Solo dentro de ese bloque",
        "Solo en el navegador, no en Node",
        "En todos los archivos del proyecto",
      ],
      correctIndex: 1,
      feedback:
        "let y const respetan ámbito de bloque. Fuera del { } el nombre no existe — ReferenceError si intentas usarlo.",
    },
    {
      question: "¿Qué hace super(lado, lado) en el constructor de class Cuadrado extends Rectangulo?",
      options: [
        "Elimina la clase padre",
        "Invoca el constructor de Rectangulo con esos argumentos",
        "Crea una variable global super",
        "Convierte la clase en función flecha",
      ],
      correctIndex: 1,
      feedback:
        "super(...) en un constructor hijo delega la inicialización al padre. Debe ejecutarse antes de usar this en la subclase.",
    },
    {
      question:
        "¿Cuál es la diferencia principal de this en una función flecha frente a una function normal usada como método?",
      options: [
        "La flecha no tiene this propio; lo toma del ámbito donde se escribió",
        "La flecha siempre usa window",
        "No hay diferencia",
        "La flecha no puede usarse en callbacks",
      ],
      correctIndex: 0,
      feedback:
        "Las flechas heredan this léxicamente. Las funciones normales lo fijan según quién las llama — crucial en métodos y callbacks.",
    },
    {
      question: "¿Por qué const r = Rectangulo(4, 5) sin new suele fallar con clases ES6?",
      options: [
        "Porque Rectangulo es un array",
        "Porque los constructores de clase deben invocarse con new",
        "Porque falta extends",
        "Porque 4 y 5 no son números",
      ],
      correctIndex: 1,
      feedback:
        "class define constructores que esperan new. Sin new obtienes TypeError en entornos modernos.",
    },
  ],
  "05-bucles-y-errores": [
    {
      question:
        "¿Cuántas veces se ejecuta el cuerpo de este while? let x = 5; while (x < 5) { console.log(x); x++; }",
      options: ["Una vez", "Infinitas veces", "Cero veces", "Cinco veces"],
      correctIndex: 2,
      feedback:
        "La condición x < 5 es falsa desde el inicio (x es 5), así que el cuerpo del while nunca se ejecuta. A diferencia de do...while, no hay ejecución garantizada.",
    },
    {
      question: "¿Qué hace continue dentro de un bucle?",
      options: [
        "Termina el bucle por completo",
        "Salta al siguiente paso de actualización del for y la siguiente iteración",
        "Reinicia el programa",
        "Solo funciona en switch",
      ],
      correctIndex: 1,
      feedback:
        "continue abandona la iteración actual y vuelve al inicio del bucle (condición o actualización). Para salir del bucle entero se usa break.",
    },
    {
      question:
        "¿Cuál es la salida de este código? for (let i = 0; i < 3; i++) { if (i === 1) break; console.log(i); }",
      options: ["0, 1, 2", "0, 1", "0", "1, 2"],
      correctIndex: 2,
      feedback:
        "Imprime 0. En i === 1, break sale del bucle antes de imprimir 1. Solo se alcanza un console.log con i === 0.",
    },
    {
      question: "¿Qué bloque se ejecuta siempre, haya o no error en try?",
      options: ["Solo catch", "Solo try", "finally", "Ninguno"],
      correctIndex: 2,
      feedback:
        "finally corre tras try (y tras catch si hubo error). Es útil para limpieza o logging que debe ocurrir en ambos casos.",
    },
    {
      question: "¿Cuál es la mejor forma de lanzar un error personalizado al detectar división por cero?",
      options: [
        'return Error("cero")',
        'throw new Error("División por cero")',
        'catch new Error("cero")',
        'console.log("error")',
      ],
      correctIndex: 1,
      feedback:
        "throw new Error(...) interrumpe el flujo normal y puede ser atrapado por catch. return no lanza; catch no lanza; console.log solo muestra texto.",
    },
  ],
  "11-asincronia": [
    {
      question:
        '¿Qué imprime este código? console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");',
      options: ["A B C", "A C B", "B A C", "C B A"],
      correctIndex: 1,
      feedback:
        "El setTimeout, aunque sea 0 ms, encola el callback; el código sincrónico (C) termina antes de que el event loop ejecute B.",
    },
    {
      question: "¿Qué devuelve setInterval(() => {}, 1000)?",
      options: ["undefined", "Un id numérico del intervalo", "Una promesa", "El número de ejecuciones"],
      correctIndex: 1,
      feedback:
        "Tanto setTimeout como setInterval devuelven un id para poder cancelar con clearTimeout / clearInterval.",
    },
    {
      question: "En una cadena de promesas, ¿qué hace .catch(fn)?",
      options: [
        "Solo captura errores del primer then",
        "Captura rechazos en la promesa o en cualquier then anterior de la cadena",
        "Reemplaza a finally",
        "Convierte la promesa en sincrónica",
      ],
      correctIndex: 1,
      feedback:
        ".catch es el manejador de rechazo de toda la cadena previa; .finally corre siempre pero no sustituye el manejo de errores.",
    },
    {
      question: "¿Cuál es la forma correcta de usar await?",
      options: [
        "En cualquier función normal",
        "Solo dentro de una función declarada async (o contexto módulo avanzado)",
        "Solo después de .catch",
        "Solo con setTimeout",
      ],
      correctIndex: 1,
      feedback:
        "await pausa una función async hasta que la promesa se settle; fuera de async hay error de sintaxis en el script clásico de PBPEW.",
    },
    {
      question: "¿Cuál cadena usa template literal con interpolación?",
      options: ["'Hola ' + nombre", '"Hola ${nombre}"', "`Hola ${nombre}`", "'Hola ${nombre}'"],
      correctIndex: 2,
      feedback:
        "La interpolación ${} solo funciona dentro de backticks; comillas simples o dobles tratan ${nombre} como texto literal.",
    },
  ],
  "10-dom-y-eventos": [
    {
      question: '¿Qué devuelve document.querySelector("#inexistente")?',
      options: ["undefined", "null", "Un elemento vacío", "Lanza error inmediato"],
      correctIndex: 1,
      feedback:
        "Sin coincidencias, querySelector devuelve null. El error aparece si intentas usar propiedades sin comprobar.",
    },
    {
      question: "¿Cuál es la forma recomendada en PBPEW para reaccionar a un clic sin mezclar HTML y JS?",
      options: [
        'Atributo onclick="..." en el botón',
        "button.click = function() {}",
        'button.addEventListener("click", handler)',
        "Etiqueta <click> personalizada",
      ],
      correctIndex: 2,
      feedback: "addEventListener separa comportamiento del marcado y permite varios listeners.",
    },
    {
      question: "¿Qué hace event.preventDefault() en un listener de submit?",
      options: [
        "Borra el formulario del DOM",
        "Evita el envío/recarga por defecto del navegador",
        "Detiene todos los listeners de la página",
        "Convierte el evento en síncrono",
      ],
      correctIndex: 1,
      feedback: "Cancela la acción nativa (p. ej. recargar la página) para que tu JS controle el flujo.",
    },
    {
      question: "Para mostrar en pantalla un comentario de usuario sin interpretar HTML, ¿qué propiedad usas?",
      options: ["innerHTML", "outerHTML", "textContent", "insertAdjacentHTML"],
      correctIndex: 2,
      feedback: "textContent trata el valor como texto plano; innerHTML parsearía etiquetas y aumenta riesgo XSS.",
    },
    {
      question: "En delegación de eventos en un <ul>, ¿dónde registras el listener?",
      options: [
        "En cada <li> dentro de un bucle",
        "En el <ul> padre y usas event.target / closest",
        "Solo en window.onload sin selector",
        "En el <body> con innerHTML del hijo",
      ],
      correctIndex: 1,
      feedback:
        "Un listener en el ancestro captura clics de hijos actuales y futuros; target identifica el origen.",
    },
  ],
  "09-estructuras-de-datos": [
    {
      question: "¿Qué devuelve const pila = []; pila.push(1); pila.push(2); console.log(pila.pop());?",
      options: ["1", "2", "undefined", "[1, 2]"],
      correctIndex: 1,
      feedback: "push añade al final; pop quita el último elemento (LIFO). El último en entrar es 2.",
    },
    {
      question: "¿Cuál es la forma correcta de guardar un par en un Map llamado m?",
      options: [
        "m.clave = valor",
        "m[clave] = valor sin set",
        "m.set(clave, valor)",
        "m.add(clave, valor)",
      ],
      correctIndex: 2,
      feedback: "Map usa .set / .get. .add pertenece a Set; la notación de objeto no es la API de Map.",
    },
    {
      question: "¿Qué imprime console.log(new Set([1, 2, 2, 3]).size);?",
      options: ["4", "2", "3", "undefined"],
      correctIndex: 2,
      feedback: "Set almacena valores únicos; el 2 repetido solo cuenta una vez → tamaño 3.",
    },
    {
      question: "Para una cola FIFO con array, ¿qué combinación es la habitual en esta lección?",
      options: ["push + pop", "unshift + pop", "push + shift", "shift + shift"],
      correctIndex: 2,
      feedback:
        "FIFO: entras por un lado (push al final) y sales por el otro (shift al inicio). push + pop sería pila (LIFO).",
    },
    {
      question: "¿Cuándo suele preferirse un Map frente a un objeto literal?",
      options: [
        "Siempre, porque JSON no soporta objetos",
        "Cuando las claves son dinámicas, de tipos variados o hay muchas altas/bajas de entradas",
        "Solo para guardar funciones, nunca datos",
        "Cuando necesitas JSON.stringify directo sin conversión",
      ],
      correctIndex: 1,
      feedback:
        "Los objetos brillan en JSON y esquemas fijos; Map gana en cachés y claves no string. Map no serializa a JSON de forma útil sin convertir.",
    },
  ],
  "12-ajax-fetch": [
    {
      question: "¿Qué devuelve fetch(url) cuando el servidor responde con HTTP 404?",
      options: [
        "Rechaza la Promise inmediatamente",
        "Resuelve con un Response cuyo ok es false",
        "Devuelve null",
        "Lanza SyntaxError",
      ],
      correctIndex: 1,
      feedback:
        "fetch solo rechaza en errores de red. Un 404 sigue siendo una respuesta HTTP válida; debes comprobar response.ok o status.",
    },
    {
      question: "¿Cuál es la forma correcta de enviar un objeto JavaScript como JSON en un POST con fetch?",
      options: [
        "body: objeto sin más",
        "body: JSON.stringify(objeto) y Content-Type: application/json",
        "body: objeto.toString()",
        "Solo headers: { JSON: true }",
      ],
      correctIndex: 1,
      feedback:
        "El cuerpo HTTP es texto; hay que serializar con JSON.stringify y declarar el tipo con Content-Type.",
    },
    {
      question:
        "Tras const res = await fetch(url) con respuesta 200 y cuerpo JSON, ¿qué expresión obtiene el objeto parseado?",
      options: ["res.data", "res.body", "await res.json()", "JSON.parse(res)"],
      correctIndex: 2,
      feedback:
        "Response expone métodos asíncronos .json(), .text(), etc. No hay propiedad .data automática.",
    },
    {
      question: "¿Qué describe mejor AJAX en el contexto del curso?",
      options: [
        "Una librería que hay que instalar con npm",
        "Un patrón: pedir datos en segundo plano y actualizar parte de la página sin recarga completa",
        "Un reemplazo de HTML5",
        "Solo sirve para archivos XML",
      ],
      correctIndex: 1,
      feedback:
        "AJAX es el enfoque; fetch y XHR son medios para implementarlo. Hoy las respuestas suelen ser JSON.",
    },
    {
      question:
        'Una página en https://mi-app.com no puede leer la respuesta de fetch("https://api.externa.com/datos"). ¿Cuál es la causa más habitual en el navegador?',
      options: [
        "JavaScript no soporta HTTPS",
        "Falta async en la función",
        "El servidor no permite CORS para ese origen",
        "Hay que usar XMLHttpRequest obligatoriamente",
      ],
      correctIndex: 2,
      feedback:
        "El navegador bloquea respuestas de otro origen si el servidor no envía cabeceras CORS adecuadas.",
    },
  ],
  "proyectos/todo-list": [
    {
      question: "¿Cuál debe ser la fuente de verdad de las tareas en este proyecto?",
      options: [
        "El número de <li> en el DOM",
        "Un array de objetos en JavaScript",
        "El valor del input",
        "localStorage siempre, aunque no se haya guardado",
      ],
      correctIndex: 1,
      feedback:
        "El array modela el estado; el DOM solo lo muestra. localStorage es una copia opcional persistida.",
    },
    {
      question: "¿Qué hace event.preventDefault() en el submit del formulario de nueva tarea?",
      options: [
        "Borra el array de tareas",
        "Evita la recarga de la página",
        "Deshabilita el teclado",
        "Guarda automáticamente en el servidor",
      ],
      correctIndex: 1,
      feedback: "Sin preventDefault, el navegador recarga y pierdes el estado en memoria.",
    },
    {
      question: "Para eliminar la tarea con id: 3, ¿qué patrón es el más seguro?",
      options: [
        "tareas.splice(3, 1) siempre",
        "tareas = tareas.filter(t => t.id !== 3)",
        "lista.children[3].remove() sin tocar el array",
        "delete tareas[3]",
      ],
      correctIndex: 1,
      feedback:
        "Filtrar por id mantiene coherencia aunque cambie el orden o el filtro activo.",
    },
    {
      question: "Al mostrar el texto que escribió el usuario en un <span>, ¿qué propiedad debes usar?",
      options: ["innerHTML", "outerHTML", "textContent", "insertAdjacentHTML"],
      correctIndex: 2,
      feedback: "textContent no interpreta HTML; reduce riesgo XSS con entrada libre.",
    },
    {
      question: "¿Qué ocurre al activar el filtro «Pendientes»?",
      options: [
        "Se borran las tareas completadas del array",
        "Solo cambia qué tareas muestra render(); el array completo sigue intacto",
        "Se vacía localStorage",
        "Se desactiva preventDefault",
      ],
      correctIndex: 1,
      feedback: "El filtro afecta la vista (tareasVisibles), no elimina datos del modelo.",
    },
  ],
  "proyectos/piedra-papel-tijera": [
    {
      question: "¿Qué patrón es correcto para elegir un índice aleatorio válido en OPCIONES de longitud 3?",
      options: [
        "Math.random() * 4",
        "Math.floor(Math.random() * 3)",
        "Math.ceil(Math.random() * 3)",
        "Math.random() + 1",
      ],
      correctIndex: 1,
      feedback:
        "Math.floor(Math.random() * n) produce enteros de 0 a n - 1, válidos como índices del array.",
    },
    {
      question: "Si el jugador elige tijera y la CPU papel, ¿qué devuelve determinarGanador con las reglas estándar?",
      options: ["empate", "cpu", "jugador", "undefined"],
      correctIndex: 2,
      feedback: "Tijera vence a papel; la victoria es del jugador.",
    },
    {
      question: "¿Dónde debe incrementarse marcador.victorias?",
      options: [
        "En el momento del clic, antes de conocer la jugada de la CPU",
        'Solo cuando determinarGanador devuelve "jugador"',
        "En cada ronda, sin importar el resultado",
        "Solo al recargar la página",
      ],
      correctIndex: 1,
      feedback:
        "El marcador refleja el resultado calculado; actualizar antes de comparar falsea las estadísticas.",
    },
    {
      question: "¿Cuál es la forma PBPEW de reaccionar al clic en Piedra sin mezclar HTML y JS?",
      options: [
        '<button onclick="jugar(\'piedra\')">',
        'button.click = jugar("piedra")',
        'addEventListener("click", () => jugarRonda("piedra")) o delegación con data-choice',
        "innerHTML con script embebido en el botón",
      ],
      correctIndex: 2,
      feedback:
        "addEventListener separa comportamiento del marcado y evita ejecutar la ronda al cargar si pasas la referencia mal.",
    },
    {
      question: "¿Qué propiedad del DOM es la más adecuada para mostrar el mensaje «Empate.» tras una ronda?",
      options: ["innerHTML con HTML del usuario", "textContent", "outerHTML del body", "document.write"],
      correctIndex: 1,
      feedback: "textContent muestra texto plano de forma segura; es suficiente para mensajes fijos del juego.",
    },
  ],
  "proyectos/calculadora": [
    {
      question: "¿Cuál es el rol principal de operadorPendiente en la calculadora?",
      options: [
        "Guardar el color del botón pulsado",
        "Recordar qué operación aplicar entre el operando anterior y el actual",
        "Sustituir a parseFloat",
        "Evitar que el DOM se actualice",
      ],
      correctIndex: 1,
      feedback:
        "El operador pendiente conecta el primer número con el segundo cuando el usuario pulsa = o encadena otra operación.",
    },
    {
      question: "¿Por qué usar delegación de eventos en .teclado?",
      options: [
        "Porque un solo botón puede tener solo un listener en JavaScript",
        "Para manejar clics en botones actuales y futuros con un solo listener en el contenedor",
        "Porque click no funciona en <button>",
        "Para no usar addEventListener",
      ],
      correctIndex: 1,
      feedback: 'Un listener en el padre lee event.target / closest("button") y reduce enlace repetitivo.',
    },
    {
      question: 'Tras const x = parseFloat("12.5");, ¿qué valor tiene x?',
      options: ['"12.5" (string)', "12.5 (number)", "NaN siempre", "125"],
      correctIndex: 1,
      feedback: "parseFloat convierte cadena numérica válida a número de punto flotante.",
    },
    {
      question: "¿Qué debe hacer la calculadora ante 5 ÷ 0 antes de mostrar el resultado?",
      options: [
        "Confiar en que JavaScript lanzará un error automático",
        "Mostrar Infinity sin comentario",
        "Detectar divisor cero y mostrar un mensaje de error controlado",
        "Ignorar el clic en =",
      ],
      correctIndex: 2,
      feedback: "10 / 0 da Infinity sin excepción; la UX debe validar el divisor y resetear estado.",
    },
    {
      question: "¿Qué propiedad del DOM es más adecuada para mostrar el número en pantalla?",
      options: ["innerHTML con plantilla HTML", "textContent", "outerHTML", "hidden"],
      correctIndex: 1,
      feedback: "textContent muestra texto sin interpretar etiquetas; basta para números y mensajes de error.",
    },
  ],
  "proyectos/ajedrez": [
    {
      question: "¿Qué estructura es la fuente de verdad del estado del tablero en este proyecto?",
      options: [
        "El HTML generado en #tablero",
        "Un array 2D tablero[fila][col] en JavaScript",
        "Las clases CSS de cada casilla",
        "localStorage en todo momento",
      ],
      correctIndex: 1,
      feedback:
        "El DOM refleja el modelo; la lógica lee y escribe la matriz. localStorage solo persiste una copia serializada.",
    },
    {
      question: '¿Por qué conviene un solo addEventListener("click") en el contenedor del tablero?',
      options: [
        "Porque los botones no soportan clics",
        "Delegación: funciona con celdas recreadas al re-render sin re-enlazar N listeners",
        "Es obligatorio por chess.js",
        "Para evitar usar dataset",
      ],
      correctIndex: 1,
      feedback:
        "Al regenerar el tablero, los nodos nuevos burbujean al padre; un listener central escala (lección 10).",
    },
    {
      question:
        "Un peón blanco en tablero[6][4] se mueve adelante con fila decreciente. ¿Qué error típico causa que vaya al revés?",
      options: [
        "Usar textContent en lugar de innerHTML",
        "Invertir fila/columna o mezclar fila 0 arriba del array con fila 0 abajo del tablero visual",
        "No usar const",
        "Olvidar preventDefault en un formulario",
      ],
      correctIndex: 1,
      feedback: "La convención fila/col debe ser consistente entre matriz, validación y render.",
    },
    {
      question: "¿Qué patrón de la lección 9 usa el botón Deshacer?",
      options: ["Cola FIFO", "Pila LIFO", "Set de movimientos únicos", "Map clave-valor de piezas"],
      correctIndex: 1,
      feedback: "El último movimiento guardado es el primero en revertirse (push al mover, pop al deshacer).",
    },
    {
      question: "Al guardar la partida en localStorage, ¿qué formato es el adecuado?",
      options: [
        "Guardar el elemento DOM directamente",
        "JSON.stringify de un objeto con tablero y turno",
        "Solo el string FEN sin turno",
        "Un Map sin convertir",
      ],
      correctIndex: 1,
      feedback:
        "localStorage guarda strings; serializa datos planos con JSON. Al cargar, JSON.parse y validar (lección 12).",
    },
  ],
};
