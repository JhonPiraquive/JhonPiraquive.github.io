---
track: pbpew
slug: proyectos/piedra-papel-tijera
title: "Piedra, papel o tijera"
order: 102
lesson_type: proyecto-integrador
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
  - 04-operadores-y-decisiones
  - 06-funciones-y-callbacks
  - 10-dom-y-eventos
source_brief: kb/education/pipeline/pbpew/proyectos/piedra-papel-tijera/brief.md
---

## Objetivos de aprendizaje

Al finalizar el proyecto, el estudiante podrá:

- **Construir** un minijuego piedra-papel-tijera en el navegador integrando variables, funciones, arrays, DOM y eventos sin librerías externas.
- **Implementar** elección aleatoria de la CPU con `Math.floor(Math.random() * opciones.length)` y **explicar** por qué el índice es seguro.
- **Centralizar** la lógica de victoria en `determinarGanador` con salidas explícitas `"jugador"`, `"cpu"` o `"empate"`.
- **Mantener** un marcador persistente entre rondas y **actualizar** la UI con `textContent` tras calcular el resultado.
- **Registrar** interacción con `addEventListener` (delegación con `data-choice` o listeners por botón) **sin** ejecutar la ronda al cargar el script.
- **(Opcional)** Extender con historial, reinicio, CPU adaptativa, suspense con `setTimeout` o persistencia en `localStorage`.

## Prerrequisitos

- **Lecciones 01–05:** DOM, script en HTML, variables, operadores, bucles y errores básicos.
- **Lección 06 (`06-funciones-y-callbacks`):** funciones con responsabilidad única y callbacks — base de listeners y de `jugarRonda`.
- **Lección 07 (`07-arrays-json-objetos`):** arrays y objetos para `OPCIONES`, `marcador` y mapas de reglas.
- **Lección 10 (`10-dom-y-eventos`):** `querySelector`, `textContent`, `classList`, `addEventListener`, delegación con `closest`.
- **Lección 11 (`11-asincronia`):** opcional para retraso “CPU pensando…” con `setTimeout`.
- Haber completado o repasado las 12 lecciones núcleo PBPEW; este proyecto las integra en un solo flujo jugable.

## Contenido

### Proyecto integrador: un juego completo en el navegador

Este proyecto aplica en un solo minijuego lo visto en el track: estado en variables, decisiones, funciones, arrays, DOM, eventos y (opcional) asincronía. La CPU simula al oponente con elección **aleatoria** cada ronda; tú eliges con botones y ves feedback inmediato en pantalla.

**Flujo fijo de una ronda:** (1) usuario elige → (2) CPU elige al azar → (3) comparar → (4) actualizar marcador → (5) pintar resultado en DOM. Saltar pasos produce bugs visibles (marcador sin mensaje, texto de la ronda anterior, etc.).

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant U as Usuario\n  participant B as Botón DOM\n  participant J as jugarRonda()\n  participant C as obtenerEleccionCpu()\n  participant D as determinarGanador()\n  participant M as Marcador / DOM\n\n  U->>B: click en piedra/papel/tijera\n  B->>J: data-choice\n  J->>C: OPCIONES\n  C-->>J: elección CPU\n  J->>D: jugador, cpu\n  D-->>J: jugador | cpu | empate\n  J->>M: actualizarMarcador + textContent\n  M-->>U: feedback visual"
}

---

### Demo interactiva: juega una ronda ahora

**Prioridad máxima del layout.** Antes de leer el código, prueba el juego embebido: tres botones, panel de jugadas, mensaje de ronda y marcador que persiste durante la sesión. Debe funcionar sin consola.

<!-- interactive: RockPaperScissorsDemo -->
{
  "opciones": ["piedra", "papel", "tijera"],
  "emoji": { "piedra": "✊", "papel": "✋", "tijera": "✌️" },
  "showMarcador": true,
  "showJugadas": true,
  "highlightResultado": true,
  "mensajeInicial": "Elige una opción para empezar."
}

<!-- interactive: Callout -->
{
  "title": "Qué observar en la demo",
  "children": "Tras cada clic: la CPU elige distinto en la mayoría de rondas; empate no suma victoria ni derrota; el mensaje de #resultado siempre coincide con el resultado calculado."
}

---

### Reglas del juego y modelo mental

Dos jugadores eligen en secreto entre tres opciones discretas (`piedra`, `papel`, `tijera`). No hay valor numérico intrínseco — la lógica es **relacional** (`jugador` vs `cpu`):

- Piedra vence tijera.
- Tijera vence papel.
- Papel vence piedra.
- Misma elección → empate.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  subgraph reglas [Quién vence]\n    P[piedra] -->|vence| T[tijera]\n    T -->|vence| PA[papel]\n    PA -->|vence| P\n  end"
}

<!-- interactive: StepReveal -->
{
  "title": "Una ronda completa (paso a paso)",
  "steps": [
    { "title": "1. Clic del usuario", "content": "El listener lee data-choice del botón (p. ej. \"piedra\") y llama a jugarRonda(eleccionJugador). No se ejecuta jugarRonda al cargar la página." },
    { "title": "2. CPU elige al azar", "content": "obtenerEleccionCpu(OPCIONES) usa Math.floor(Math.random() * opciones.length) y devuelve un string del array." },
    { "title": "3. Comparar", "content": "determinarGanador(jugador, cpu) devuelve \"jugador\", \"cpu\" o \"empate\" según las reglas." },
    { "title": "4. Incrementar contador", "content": "actualizarMarcador(resultado) muta victorias, empates o derrotas solo después de conocer el resultado." },
    { "title": "5. Pintar en pantalla", "content": "renderizarRonda asigna textContent en #jugada-jugador, #jugada-cpu, #resultado y #marcador." }
  ]
}

---

### Constantes y estado inicial

Declara opciones y emojis como **solo lectura** (`const`). El marcador vive en el scope del script y persiste entre rondas hasta reinicio manual o recarga.

<!-- code: javascript -->
```javascript
const OPCIONES = ["piedra", "papel", "tijera"];

const EMOJI = {
  piedra: "✊",
  papel: "✋",
  tijera: "✌️",
};

let marcador = { victorias: 0, empates: 0, derrotas: 0 };
```

<!-- interactive: CodeChallenge -->
{
  "title": "Estado inicial del marcador",
  "template": "const OPCIONES = [\"piedra\", \"papel\", \"tijera\"];\n\nlet marcador = {\n  victorias: {{blank1}},\n  empates: {{blank2}},\n  derrotas: {{blank3}}\n};",
  "blanks": [
    { "id": "blank1", "answer": "0", "placeholder": "contador inicial" },
    { "id": "blank2", "answer": "0", "placeholder": "contador inicial" },
    { "id": "blank3", "answer": "0", "placeholder": "contador inicial" }
  ]
}

---

### Elección aleatoria de la CPU

`Math.random()` devuelve un número en `[0, 1)`. El patrón PBPEW para índice válido:

<!-- code: javascript -->
```javascript
function obtenerEleccionCpu(opciones) {
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}

// Prueba en consola:
// for (let i = 0; i < 10; i++) console.log(obtenerEleccionCpu(OPCIONES));
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Math.random() * 3 sin Math.floor, o Math.random() * 4 con array de 3 elementos, puede devolver undefined al acceder al array. Siempre Math.floor(Math.random() * opciones.length)."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Índice aleatorio seguro",
  "template": "function obtenerEleccionCpu(opciones) {\n  const indice = Math.{{blank1}}(Math.random() * opciones.{{blank2}});\n  return opciones[indice];\n}",
  "blanks": [
    { "id": "blank1", "answer": "floor", "placeholder": "redondea hacia abajo" },
    { "id": "blank2", "answer": "length", "placeholder": "tamaño del array" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué devuelve Math.floor(Math.random() * 3) y por qué es seguro como índice de un array de 3 elementos?",
  "hints": ["Math.random() está en [0, 1)", "Math.floor convierte a enteros 0, 1 o 2"],
  "expectedKeywords": ["0", "2", "índice", "floor"],
  "successMessage": "Correcto. Produce enteros 0, 1 o 2 — válidos para OPCIONES[0..2]."
}

---

### Determinar el ganador: lógica pura

Separa **calcular** el resultado de **mutar** el marcador. `determinarGanador` no toca el DOM ni incrementa contadores; solo devuelve un string.

#### Enfoque mantenible: objeto `VENCE_A`

<!-- code: javascript -->
```javascript
const VENCE_A = {
  piedra: "tijera",
  tijera: "papel",
  papel: "piedra",
};

function determinarGanador(jugador, cpu) {
  if (jugador === cpu) return "empate";
  if (VENCE_A[jugador] === cpu) return "jugador";
  return "cpu";
}
```

#### Alternativa didáctica: `if/else` explícito

<!-- code: javascript -->
```javascript
function determinarGanador(jugador, cpu) {
  if (jugador === cpu) return "empate";
  if (
    (jugador === "piedra" && cpu === "tijera") ||
    (jugador === "tijera" && cpu === "papel") ||
    (jugador === "papel" && cpu === "piedra")
  ) {
    return "jugador";
  }
  return "cpu";
}
```

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Cadenas if/else", "Objeto / Map de reglas"],
  "rows": [
    ["Legibilidad con 3 opciones", "Alta", "Alta"],
    ["Escalar a más símbolos", "Baja (combinaciones explotan)", "Alta"],
    ["Riesgo de regla invertida", "Medio (copy-paste)", "Bajo si el mapa es la única fuente"],
    ["Adecuado para PBPEW inicial", "Sí (didáctico)", "Sí (refactor sugerido)"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  A[jugador y cpu] --> B{¿Iguales?}\n  B -->|Sí| E[empate]\n  B -->|No| C{¿VENCE_A jugador === cpu?}\n  C -->|Sí| V[victoria jugador]\n  C -->|No| P[victoria CPU]"
}

<!-- interactive: CodeChallenge -->
{
  "title": "Resultado tijera vs papel",
  "template": "// determinarGanador(\"tijera\", \"papel\") debe devolver:\nconst resultado = determinarGanador(\"tijera\", \"papel\");\n// resultado === \"{{blank1}}\"",
  "blanks": [
    { "id": "blank1", "answer": "jugador", "placeholder": "jugador | cpu | empate" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué conviene separar determinarGanador de actualizarMarcador?",
  "hints": ["Una función calcula; la otra muta estado", "Facilita pruebas y cambios de reglas"],
  "expectedKeywords": ["lógica", "estado", "prueba", "separar"],
  "successMessage": "Bien. La lógica pura es testeable; el marcador depende del resultado calculado."
}

---

### Marcador y renderizado en el DOM

Incrementa contadores **solo** tras `determinarGanador`. Actualiza nodos existentes con `textContent` — no hace falta recrear todo el HTML cada ronda.

<!-- code: javascript -->
```javascript
function actualizarMarcador(resultado) {
  if (resultado === "jugador") marcador.victorias += 1;
  else if (resultado === "cpu") marcador.derrotas += 1;
  else marcador.empates += 1;
}

function renderizarRonda(jugador, cpu, resultado) {
  const elJugador = document.querySelector("#jugada-jugador");
  const elCpu = document.querySelector("#jugada-cpu");
  const elResultado = document.querySelector("#resultado");
  const elMarcador = document.querySelector("#marcador");

  elJugador.textContent = `Tú: ${EMOJI[jugador]} ${jugador}`;
  elCpu.textContent = `CPU: ${EMOJI[cpu]} ${cpu}`;

  const mensajes = {
    jugador: "¡Ganaste esta ronda!",
    cpu: "Gana la CPU.",
    empate: "Empate.",
  };
  elResultado.textContent = mensajes[resultado];

  elMarcador.textContent =
    `Victorias: ${marcador.victorias} · Empates: ${marcador.empates} · Derrotas: ${marcador.derrotas}`;
}
```

<!-- interactive: CompareTable -->
{
  "headers": ["Enfoque", "Este proyecto", "Cuándo"],
  "rows": [
    ["Mutar marcador + actualizar nodos existentes", "Recomendado", "Pocos elementos en DOM"],
    ["Borrar y recrear todo el HTML cada ronda", "Evitar", "Innecesario y propenso a perder listeners"]
  ]
}

<!-- interactive: CodeChallenge -->
{
  "title": "Actualizar pantalla con textContent",
  "template": "const elMarcador = document.querySelector(\"#marcador\");\nelMarcador.{{blank1}} = `Victorias: ${marcador.victorias}`;",
  "blanks": [
    { "id": "blank1", "answer": "textContent", "placeholder": "propiedad segura para texto" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dado let v = 0, escribe el if que incrementa v solo cuando determinarGanador devuelve \"jugador\".",
  "hints": ["Compara resultado === \"jugador\"", "Usa += 1 o v++"],
  "expectedKeywords": ["if", "jugador", "v"],
  "successMessage": "Correcto. El marcador solo crece cuando el resultado calculado es victoria del jugador."
}

---

### Orquestar la ronda y conectar eventos

Función principal que une aleatoriedad, comparación, marcador y DOM:

<!-- code: javascript -->
```javascript
function jugarRonda(eleccionJugador) {
  const eleccionCpu = obtenerEleccionCpu(OPCIONES);
  const resultado = determinarGanador(eleccionJugador, eleccionCpu);
  actualizarMarcador(resultado);
  renderizarRonda(eleccionJugador, eleccionCpu, resultado);
}
```

Patrón PBPEW: **delegación** en el contenedor — un solo listener, escalable si el tablero crece:

<!-- code: javascript -->
```javascript
const contenedor = document.querySelector("#opciones");

contenedor.addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-choice]");
  if (!boton) return;

  const eleccion = boton.dataset.choice; // "piedra" | "papel" | "tijera"
  jugarRonda(eleccion);
});
```

HTML mínimo de referencia:

<!-- code: html -->
```html
<div id="opciones">
  <button type="button" data-choice="piedra">✊ Piedra</button>
  <button type="button" data-choice="papel">✋ Papel</button>
  <button type="button" data-choice="tijera">✌️ Tijera</button>
</div>
<p id="jugada-jugador">Tú: —</p>
<p id="jugada-cpu">CPU: —</p>
<p id="resultado">Elige una opción.</p>
<p id="marcador">Victorias: 0 · Empates: 0 · Derrotas: 0</p>
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente: callback mal pasado",
  "children": "addEventListener(\"click\", jugar(\"piedra\")) ejecuta la función al registrar el listener, no al hacer clic. Pasa una función: () => jugarRonda(\"piedra\") o usa delegación con dataset.choice."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Delegación con data-choice",
  "template": "contenedor.addEventListener(\"{{blank1}}\", (evento) => {\n  const boton = evento.target.closest(\"[data-choice]\");\n  if (!boton) return;\n  const eleccion = boton.dataset.{{blank2}};\n  jugarRonda(eleccion);\n});",
  "blanks": [
    { "id": "blank1", "answer": "click", "placeholder": "evento de ratón" },
    { "id": "blank2", "answer": "choice", "placeholder": "atributo data-choice" }
  ]
}

<!-- interactive: CodeChallenge -->
{
  "title": "Orden del flujo de una ronda",
  "template": "Ordena mentalmente:\n1) {{blank1}}\n2) CPU elige al azar\n3) {{blank2}}\n4) Se actualiza #marcador\n5) Se muestra mensaje en #resultado",
  "blanks": [
    { "id": "blank1", "answer": "usuario hace clic", "placeholder": "primer paso" },
    { "id": "blank2", "answer": "se compara jugador vs CPU", "placeholder": "antes del marcador" }
  ]
}

---

### Validación defensiva y errores comunes

Si `determinarGanador` recibe un valor no listado en `OPCIONES`, devuelve `null` o muestra “Opción no válida” **sin** modificar el marcador.

<!-- code: javascript -->
```javascript
function jugarRondaSegura(eleccionJugador) {
  if (!OPCIONES.includes(eleccionJugador)) {
    document.querySelector("#resultado").textContent = "Opción no válida";
    return;
  }
  jugarRonda(eleccionJugador);
}
```

**Errores típicos en consola o en producto:**

- Llamar `jugarRonda("piedra")` al cargar — distorsiona el marcador sin interacción.
- Mezclar `"Piedra"` y `"piedra"` — normaliza o usa `data-choice` idénticos.
- Actualizar el DOM antes de calcular — el usuario ve “¡Ganaste!” de la ronda anterior en empate.
- Olvidar el caso empate — el span `#resultado` conserva texto viejo (caso real en landings promocionales).
- `querySelector` sin comprobar `null` — `TypeError` si falta `#marcador` en el HTML.

<!-- interactive: Callout -->
{
  "title": "Caso real: marcador que «miente»",
  "children": "Una campaña publicó piedra-papel-tijera para sorteos. El handler olvidó empate: al empatar, #resultado conservaba «¡Ganaste!» de la ronda anterior. Usuarios denunciaron fraude. Lección: siempre llamar renderizarRonda al final, incluso en empate."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa validación: si eleccionJugador no está en OPCIONES, muestra en #resultado «Opción no válida» y no modifiques el marcador.",
  "hints": ["OPCIONES.includes(eleccionJugador)", "return temprano antes de actualizarMarcador"],
  "expectedKeywords": ["includes", "return", "no válida"],
  "successMessage": "Bien. La UI refleja el estado calculado y el marcador no se falsea."
}

---

### Extensiones opcionales (nivel avanzado)

<!-- code: javascript -->
```javascript
function jugarRondaConRetraso(eleccionJugador) {
  const elCpu = document.querySelector("#jugada-cpu");
  elCpu.textContent = "CPU: pensando…";

  setTimeout(() => {
    const eleccionCpu = obtenerEleccionCpu(OPCIONES);
    const resultado = determinarGanador(eleccionJugador, eleccionCpu);
    actualizarMarcador(resultado);
    renderizarRonda(eleccionJugador, eleccionCpu, resultado);
  }, 400);
}
```

Retos adicionales para quien termine el núcleo:

1. **Historial:** `appendChild` de `<li>` en `#historial` con resumen de cada ronda.
2. **Reinicio:** botón `#reiniciar` que pone contadores en 0 y limpia textos.
3. **CPU adaptativa:** contar frecuencia de elecciones del jugador y elegir la opción que más suele vencerle (arrays + bucles).
4. **Persistencia:** guardar `marcador` en `localStorage` y restaurar al cargar.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa botón #reiniciar que ponga los tres contadores en 0 y resetee los textos de la UI.",
  "hints": ["marcador.victorias = 0; empates y derrotas igual", "textContent en #jugada-jugador, #jugada-cpu, #resultado, #marcador"],
  "expectedKeywords": ["reiniciar", "0", "textContent"],
  "successMessage": "Excelente. El estado y la vista vuelven al inicio sin recargar la página."
}

---

## Reto integrador

**«Piedra, papel o tijera en el navegador»** — construye el proyecto completo en HTML + JS (o bloque embebido) sin librerías externas.

### Requisitos obligatorios

1. **UI:** tres controles con `data-choice`, zonas `#jugada-jugador`, `#jugada-cpu`, `#resultado`, `#marcador`.
2. **Aleatoriedad:** CPU con `Math.random()` y array `OPCIONES` — no hardcodear la jugada de la CPU.
3. **Lógica:** `determinarGanador` con retorno `"jugador"`, `"cpu"` o `"empate"`; reglas correctas.
4. **Marcador:** objeto o tres `let`; persiste entre rondas hasta reinicio o recarga.
5. **DOM:** `textContent`; opcional `classList` en `#resultado` (`ganaste`, `perdiste`, `empate`).
6. **Eventos:** `addEventListener`; prohibido `onclick` inline para la lógica principal.
7. **Funciones:** al menos `obtenerEleccionCpu`, `determinarGanador`, `jugarRonda` (o nombres equivalentes claros).

### Criterios de éxito

- Tras 10 rondas manuales, los tres contadores suman 10.
- Empate incrementa solo `empates`.
- Clic repetido en la misma opción produce jugadas CPU distintas en la mayoría de rondas.
- Sin errores en consola al jugar.

### Extensiones (opcionales en la entrega)

Historial en lista, reinicio, CPU adaptativa, suspense 300–500 ms, `localStorage`.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Construye el proyecto completo siguiendo los requisitos obligatorios. Pega tu HTML+JS o describe cómo separaste obtenerEleccionCpu, determinarGanador, actualizarMarcador y renderizarRonda.",
  "hints": [
    "Un solo listener en #opciones con closest(\"[data-choice]\")",
    "Nunca jugarRonda() fuera del handler de clic",
    "Siempre tres salidas en determinarGanador incluido empate",
    "Comprueba que victorias + empates + derrotas === número de rondas jugadas"
  ],
  "expectedKeywords": ["determinarGanador", "addEventListener", "textContent", "marcador"],
  "successMessage": "Proyecto integrador completado. Has unido funciones, DOM, eventos y estado en un producto jugable."
}

---

## Cierre

Has integrado las 12 lecciones núcleo PBPEW en un minijuego real: estado, funciones con responsabilidad única, arrays, decisiones, DOM, eventos y (opcional) asincronía.

**Ideas clave para retener:**

- **Orden de la ronda:** clic → CPU aleatoria → comparar → marcador → DOM.
- **`determinarGanador`** es lógica pura; **`actualizarMarcador`** muta estado solo con el resultado calculado.
- **`Math.floor(Math.random() * opciones.length)`** para índices seguros.
- **`addEventListener` + delegación** escala mejor que N listeners o `onclick` inline.
- **`textContent`** para mensajes fijos; siempre pintar resultado incluso en empate.

**Proyectos hermanos:** `proyectos/calculadora`, `proyectos/todo-list`, `proyectos/ajedrez` — cada uno refuerza un patrón distinto del mismo stack.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué patrón es correcto para elegir un índice aleatorio válido en OPCIONES de longitud 3?",
      "options": [
        "Math.random() * 4",
        "Math.floor(Math.random() * 3)",
        "Math.ceil(Math.random() * 3)",
        "Math.random() + 1"
      ],
      "correctIndex": 1,
      "feedback": "Math.floor(Math.random() * n) produce enteros de 0 a n - 1, válidos como índices del array."
    },
    {
      "question": "Si el jugador elige tijera y la CPU papel, ¿qué devuelve determinarGanador con las reglas estándar?",
      "options": [
        "empate",
        "cpu",
        "jugador",
        "undefined"
      ],
      "correctIndex": 2,
      "feedback": "Tijera vence a papel; la victoria es del jugador."
    },
    {
      "question": "¿Dónde debe incrementarse marcador.victorias?",
      "options": [
        "En el momento del clic, antes de conocer la jugada de la CPU",
        "Solo cuando determinarGanador devuelve \"jugador\"",
        "En cada ronda, sin importar el resultado",
        "Solo al recargar la página"
      ],
      "correctIndex": 1,
      "feedback": "El marcador refleja el resultado calculado; actualizar antes de comparar falsea las estadísticas."
    },
    {
      "question": "¿Cuál es la forma PBPEW de reaccionar al clic en Piedra sin mezclar HTML y JS?",
      "options": [
        "<button onclick=\"jugar('piedra')\">",
        "button.click = jugar('piedra')",
        "addEventListener(\"click\", () => jugarRonda(\"piedra\")) o delegación con data-choice",
        "innerHTML con script embebido en el botón"
      ],
      "correctIndex": 2,
      "feedback": "addEventListener separa comportamiento del marcado y evita ejecutar la ronda al cargar si pasas la referencia mal."
    },
    {
      "question": "¿Qué propiedad del DOM es la más adecuada para mostrar el mensaje «Empate.» tras una ronda?",
      "options": [
        "innerHTML con HTML del usuario",
        "textContent",
        "outerHTML del body",
        "document.write"
      ],
      "correctIndex": 1,
      "feedback": "textContent muestra texto plano de forma segura; es suficiente para mensajes fijos del juego."
    }
  ]
}
