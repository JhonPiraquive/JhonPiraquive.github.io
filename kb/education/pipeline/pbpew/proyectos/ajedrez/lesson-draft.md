---
track: pbpew
slug: proyectos/ajedrez
title: "Ajedrez en el navegador"
order: 100
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
  - 08-this-scope-clases
  - 09-estructuras-de-datos
  - 10-dom-y-eventos
  - 12-ajax-fetch
  - proyectos/calculadora
  - proyectos/todo-list
  - proyectos/piedra-papel-tijera
source_brief: kb/education/pipeline/pbpew/proyectos/ajedrez/brief.md
lesson_type: proyecto-integrador
---

## Objetivos de aprendizaje

Al finalizar este proyecto integrador, el estudiante podrá:

- **Representar** un tablero de ajedrez como matriz 2D `tablero[fila][col]` con códigos de pieza (`"wP"`, `"bK"`, `null`) como **fuente de verdad** del estado.
- **Renderizar** un tablero 8×8 en el DOM con CSS Grid, símbolos Unicode y atributos `data-fila` / `data-col` para identificar casillas sin depender del texto visible.
- **Implementar** el flujo de dos clics (seleccionar → mover) con delegación de eventos en el contenedor padre y estado centralizado (`turno`, `seleccion`).
- **Validar** movimientos legales con funciones puras (mínimo rey y peón; ampliar a torre, alfil, caballo en reto avanzado) sin mutar el tablero durante la comprobación.
- **Gestionar** turnos, capturas, promoción automática de peón a dama, pila LIFO para deshacer y persistencia con `localStorage` + JSON.
- **Diseñar** el proyecto en capas modelo-vista-controlador e **integrar** opcionalmente chess.js solo en la capa de reglas para jaque/mate.

## Prerrequisitos

- **Lecciones 01–02:** DOM, `<script>`, estructura HTML básica.
- **Lecciones 03–04:** variables, tipos, operadores y condicionales (`if`, comparaciones).
- **Lección 05:** bucles anidados para renderizar 64 casillas; `try/catch` al cargar JSON corrupto.
- **Lección 06:** funciones reutilizables y callbacks en listeners.
- **Lección 07:** arrays 2D, objetos de estado, `JSON.stringify` / `JSON.parse`.
- **Lección 08 (recomendada):** clases opcionales para organizar piezas (`class Pieza`, `class Tablero`).
- **Lección 09:** pila LIFO — patrón del botón "Deshacer".
- **Lección 10:** delegación de eventos, `classList`, `dataset`, `textContent`.
- **Lección 12:** `localStorage` para guardar y cargar partidas.
- Proyectos previos del track (calculadora, todo-list, piedra-papel-tijera) como referencia de complejidad creciente; **ajedrez es el capstone más exigente**.

## Contenido

### Proyecto capstone: integrar todo el track

Este proyecto combina representación de datos (matriz 2D), renderizado DOM, eventos de clic, validación con condicionales, funciones reutilizables, estado mutable controlado, estructuras auxiliares (pila para deshacer, `localStorage` para guardar) y —opcionalmente— clases para modelar piezas.

La progresión recomendada:

1. Tablero estático → 2. Clic y selección → 3. Movimiento con reglas mínimas → 4. Turnos y varias piezas → 5. Deshacer/guardar → 6. Jaque/mate con chess.js o lógica propia reducida.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph vista [Vista]\n    GRID[CSS Grid 8x8]\n    SYM[Unicode piezas]\n    EVT[Delegacion click]\n  end\n  subgraph control [Controlador]\n    SEL[seleccion dos clics]\n    UND[Deshacer pila]\n    IO[Guardar Cargar]\n  end\n  subgraph modelo [Modelo]\n    MAT[tablero fila col]\n    VAL[movimientoLegal]\n    TUR[turno w b]\n  end\n  EVT --> SEL\n  SEL --> VAL\n  VAL --> MAT\n  SEL --> GRID\n  UND --> MAT\n  IO --> MAT"
}

<!-- interactive: Callout -->
{
  "title": "Convención PBPEW",
  "children": "Usa siempre tablero[fila][col] con fila y col entre 0 y 7. Elige si fila 0 es la fila superior del array (piezas negras) o la inferior, documenta la convención y no inviertas fila/columna en validación y render."
}

---

### Demo: tablero interactivo

Antes del detalle teórico, prueba el tablero simplificado: selecciona una pieza propia (resaltado), segundo clic para mover con reglas mínimas de rey o peón, alternar turno y usar la barra de acciones.

<!-- interactive: ChessBoardDemo -->
{
  "title": "Tablero de ajedrez — demo PBPEW",
  "rules": "minimal",
  "pieces": ["K", "P"],
  "showToolbar": true,
  "toolbarActions": ["nueva", "deshacer", "guardar", "cargar"],
  "highlightSelection": true,
  "promotePawnToQueen": true
}

---

### Modelo: tablero como matriz 2D

Cada celda guarda `null` (vacía) o un código de pieza: primera letra = color (`w` blanco, `b` negro), segunda = tipo (`K` rey, `Q` dama, `R` torre, `B` alfil, `N` caballo, `P` peón).

La matriz es la **fuente de verdad**; el DOM solo refleja su estado. Si mueves nodos sin actualizar la matriz, la lógica y la pantalla se desincronizan.

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "tablero[fila][col]", "casillas[64] plano"],
  "rows": [
    ["Legibilidad", "Alta (tablero[3][4])", "Requiere fila = Math.floor(i / 8)"],
    ["Renderizado", "Bucles anidados naturales", "Un solo bucle"],
    ["Copia para deshacer", "map por fila", "slice() o spread"],
    ["Caso PBPEW", "Recomendado", "Válido si documentas conversión"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  subgraph grid [tablero fila col]\n    R0[\"fila 0: piezas negras\"]\n    R7[\"fila 7: piezas blancas\"]\n  end\n  R0 --> C0[\"col 0-7\"]\n  R7 --> C7[\"col 0-7\"]"
}

<!-- code: javascript -->
```javascript
const PIEZA_VACIA = null;

const POSICION_INICIAL = [
  ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
  ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
  [PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA],
  [PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA],
  [PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA],
  [PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA, PIEZA_VACIA],
  ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
  ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
];

const SIMBOLOS = {
  wK: "♔", wQ: "♕", wR: "♖", wB: "♗", wN: "♘", wP: "♙",
  bK: "♚", bQ: "♛", bR: "♜", bB: "♝", bN: "♞", bP: "♟",
};

const estado = {
  tablero: POSICION_INICIAL.map((fila) => [...fila]),
  turno: "w",
  seleccion: null,
};

function colorDePieza(codigo) {
  return codigo ? codigo[0] : null;
}

function aNotacionAlgebraica(fila, col) {
  return String.fromCharCode(97 + col) + (8 - fila);
}
```

**Coordenadas internas vs notación algebraica:** en código usa índices `0–7`; en UI puedes mostrar `a1–h8` con `String.fromCharCode(97 + col) + (8 - fila)`. No mezcles ambos sistemas sin funciones de conversión explícitas.

<!-- interactive: CodeChallenge -->
{
  "title": "Coloca los reyes en la matriz",
  "template": "const tablero = Array.from({ length: 8 }, () => Array(8).fill(null));\ntablero[{{blank1}}][4] = \"wK\";\ntablero[{{blank2}}][4] = \"bK\";",
  "blanks": [
    { "id": "blank1", "answer": "7", "placeholder": "fila rey blanco" },
    { "id": "blank2", "answer": "0", "placeholder": "fila rey negro" }
  ]
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué la matriz tablero[fila][col] debe ser la fuente de verdad y no las posiciones visuales de los nodos DOM?",
  "hints": ["El DOM es solo la vista", "Si solo mueves nodos sin actualizar datos, estado lógico y pantalla se desincronizan"],
  "expectedKeywords": ["matriz", "fuente", "DOM", "vista"],
  "successMessage": "Correcto. La lógica lee y escribe la matriz; el render solo refleja ese estado."
}

---

### Vista: renderizado en el DOM

Contenedor con CSS Grid `8×8` o tabla semántica. Por cada celda: `data-fila` y `data-col` para identificar clics. Piezas con `textContent` y símbolos Unicode — seguro y sin imágenes externas.

<!-- code: html -->
```html
<div id="tablero" class="tablero-ajedrez" aria-label="Tablero de ajedrez"></div>
<div class="barra-acciones">
  <button type="button" id="nueva">Nueva partida</button>
  <button type="button" id="deshacer">Deshacer</button>
  <button type="button" id="guardar">Guardar</button>
  <button type="button" id="cargar">Cargar</button>
</div>
<p id="estado" aria-live="polite">Turno: blancas</p>
```

<!-- code: css -->
```css
.tablero-ajedrez {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: min(90vw, 400px);
  aspect-ratio: 1;
}

.tablero-ajedrez button {
  font-size: 2rem;
  border: none;
  cursor: pointer;
}

.tablero-ajedrez .clara { background: #f0d9b5; }
.tablero-ajedrez .oscura { background: #b58863; }
.tablero-ajedrez .seleccionada { outline: 3px solid var(--color-accent, #3b82f6); }
.tablero-ajedrez .ultimo-movimiento { background: rgba(59, 130, 246, 0.35); }
```

<!-- code: javascript -->
```javascript
function crearTableroHTML(contenedor, tablero, seleccion) {
  contenedor.innerHTML = "";
  contenedor.className = "tablero-ajedrez";

  for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {
      const celda = document.createElement("button");
      celda.type = "button";
      celda.dataset.fila = String(fila);
      celda.dataset.col = String(col);
      celda.setAttribute("aria-label", aNotacionAlgebraica(fila, col));
      celda.classList.add((fila + col) % 2 === 0 ? "clara" : "oscura");

      if (seleccion && seleccion.fila === fila && seleccion.col === col) {
        celda.classList.add("seleccionada");
      }

      const pieza = tablero[fila][col];
      celda.textContent = pieza ? SIMBOLOS[pieza] : "";
      contenedor.appendChild(celda);
    }
  }
}
```

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "No uses innerHTML con datos dinámicos para piezas. textContent con Unicode es suficiente y evita riesgo XSS si en el futuro mezclas nombres de usuario."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Escribe function simbolo(codigo) que devuelva el Unicode correcto desde SIMBOLOS o cadena vacía si codigo es null.",
  "hints": ["SIMBOLOS[codigo] ?? \"\"", "Comprueba null antes de indexar"],
  "expectedKeywords": ["SIMBOLOS", "null", "textContent"],
  "successMessage": "Correcto. Una función pura centraliza el mapeo código → símbolo."
}

---

### Controlador: eventos y flujo de dos clics

**Delegación de eventos:** un solo `addEventListener("click")` en `#tablero`; leer `event.target.closest("[data-fila]")`. Escala cuando regeneras el tablero entero tras cada movimiento — evita listeners duplicados.

**Flujo:**

1. Primer clic en pieza propia → guardar `seleccion` y resaltar casilla.
2. Segundo clic en destino → validar → si es legal, actualizar matriz, limpiar selección, alternar turno, re-renderizar.
3. Si el segundo clic es ilegal → limpiar selección sin mover.

<!-- interactive: StepReveal -->
{
  "title": "Flujo de dos clics",
  "steps": [
    { "title": "Tablero inicial", "content": "POSICION_INICIAL renderizada. turno = \"w\". seleccion = null." },
    { "title": "Clic en pieza blanca", "content": "Si colorDePieza(pieza) === turno, estado.seleccion = { fila, col }. Casilla con clase .seleccionada." },
    { "title": "Clic en destino vacío legal", "content": "movimientoLegal devuelve true. aplicarMovimiento actualiza la matriz. turno alterna a \"b\". Re-render." },
    { "title": "Matriz actualizada", "content": "tablero refleja el movimiento. DOM sincronizado desde la matriz, no al revés." },
    { "title": "Clic ilegal", "content": "movimientoLegal devuelve false. seleccion = null. Sin cambio en tablero ni turno." }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant U as Usuario\n  participant V as Vista DOM\n  participant C as Controlador\n  participant M as Modelo tablero\n  U->>V: clic casilla origen\n  V->>C: fila, col\n  C->>M: leer pieza\n  C->>C: guardar seleccion\n  U->>V: clic casilla destino\n  V->>C: fila, col destino\n  C->>M: movimientoLegal?\n  alt legal\n    C->>M: aplicarMovimiento\n    C->>M: alternar turno\n    C->>V: re-render\n  else ilegal\n    C->>C: limpiar seleccion\n  end"
}

<!-- code: javascript -->
```javascript
const contenedor = document.querySelector("#tablero");

contenedor.addEventListener("click", (e) => {
  const celda = e.target.closest("[data-fila]");
  if (!celda) return;
  const fila = Number(celda.dataset.fila);
  const col = Number(celda.dataset.col);
  manejarClic(fila, col);
});

function manejarClic(fila, col) {
  const pieza = estado.tablero[fila][col];

  if (!estado.seleccion) {
    if (pieza && colorDePieza(pieza) === estado.turno) {
      estado.seleccion = { fila, col };
    }
    crearTableroHTML(contenedor, estado.tablero, estado.seleccion);
    return;
  }

  const { fila: f0, col: c0 } = estado.seleccion;

  if (movimientoLegal(estado.tablero, f0, c0, fila, col)) {
    registrarMovimiento(estado);
    aplicarMovimiento(estado, f0, c0, fila, col);
    estado.turno = estado.turno === "w" ? "b" : "w";
    actualizarEstadoUI();
  }

  estado.seleccion = null;
  crearTableroHTML(contenedor, estado.tablero, estado.seleccion);
}

function actualizarEstadoUI() {
  const el = document.querySelector("#estado");
  if (el) {
    el.textContent = `Turno: ${estado.turno === "w" ? "blancas" : "negras"}`;
  }
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica el flujo de dos clics (seleccionar → mover) y qué ocurre si el segundo clic es ilegal.",
  "hints": ["Primer clic guarda seleccion si la pieza es del turno", "Segundo clic valida con movimientoLegal", "Si es ilegal, solo se limpia seleccion"],
  "expectedKeywords": ["seleccion", "legal", "turno", "limpiar"],
  "successMessage": "Correcto. La validación ocurre antes de mutar la matriz; un clic ilegal no cambia el tablero."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el alternado de turno",
  "template": "estado.turno = estado.turno === \"w\" ? {{blank1}} : {{blank2}};",
  "blanks": [
    { "id": "blank1", "answer": "\"b\"", "placeholder": "turno negro" },
    { "id": "blank2", "answer": "\"w\"", "placeholder": "turno blanco" }
  ]
}

---

### Validación de movimientos

Funciones puras `movimientoLegal(tablero, f0, c0, f1, c1)` que comprueben: índices en rango, no capturar pieza propia, reglas por tipo. **No mutar** el tablero durante la validación — usa copia superficial o calcula sin mover piezas.

Progresión MVP: **rey** (1 casilla cualquier dirección) y **peón** (1 adelante, 2 desde inicio, captura diagonal) antes de torre/alfil/caballo.

<!-- code: javascript -->
```javascript
function movimientoLegal(tablero, f0, c0, f1, c1) {
  if (f1 < 0 || f1 > 7 || c1 < 0 || c1 > 7) return false;

  const pieza = tablero[f0][c0];
  const destino = tablero[f1][c1];
  if (!pieza) return false;
  if (destino && colorDePieza(destino) === colorDePieza(pieza)) return false;

  const tipo = pieza[1];
  const color = colorDePieza(pieza);
  const df = Math.abs(f1 - f0);
  const dc = Math.abs(c1 - c0);

  if (tipo === "K") return df <= 1 && dc <= 1;
  if (tipo === "P") return movimientoPeon(tablero, f0, c0, f1, c1, color);

  return false;
}

function movimientoPeon(tablero, f0, c0, f1, c1, color) {
  const dir = color === "w" ? -1 : 1;
  const filaInicio = color === "w" ? 6 : 1;
  const destino = tablero[f1][c1];

  if (c0 === c1 && !destino) {
    if (f1 === f0 + dir) return true;
    if (f0 === filaInicio && f1 === f0 + 2 * dir && !tablero[f0 + dir][c0]) return true;
  }
  if (Math.abs(c1 - c0) === 1 && f1 === f0 + dir && destino && colorDePieza(destino) !== color) {
    return true;
  }
  return false;
}

function aplicarMovimiento(estado, f0, c0, f1, c1) {
  const pieza = estado.tablero[f0][c0];
  estado.tablero[f1][c1] = pieza;
  estado.tablero[f0][c0] = null;

  if (pieza === "wP" && f1 === 0) estado.tablero[f1][c1] = "wQ";
  if (pieza === "bP" && f1 === 7) estado.tablero[f1][c1] = "bQ";
}
```

<!-- interactive: CodeChallenge -->
{
  "title": "Validación del rey",
  "template": "if (tipo === \"K\") return df <= {{blank1}} && dc <= {{blank2}};",
  "blanks": [
    { "id": "blank1", "answer": "1", "placeholder": "máx filas" },
    { "id": "blank2", "answer": "1", "placeholder": "máx columnas" }
  ]
}

<!-- interactive: Callout -->
{
  "title": "No implementes todo de golpe",
  "children": "Entrega valor con tablero + rey y peón bien hechos antes de enroque, jaque, mate y captura al paso. Bloqueo típico: intentar todas las reglas del ajedrez a la vez."
}

---

### Deshacer y persistencia

**Pila LIFO (lección 9):** antes de cada movimiento legal, `historial.push` copia superficial del tablero + turno. "Deshacer" hace `pop` y restaura — incluye pieza capturada y turno previo.

**localStorage (lección 12):** `JSON.stringify` al guardar; `JSON.parse` al cargar con `try/catch`. Esquema versionado `{ version: 1, tablero, turno }`. Si no hay partida o el JSON está corrupto, posición inicial.

<!-- interactive: StepReveal -->
{
  "title": "Pila deshacer (LIFO)",
  "steps": [
    { "title": "Antes del movimiento 1", "content": "historial = []. push copia del estado inicial opcional." },
    { "title": "Movimiento 1 legal", "content": "push({ tablero: copia, turno }). Aplicar movimiento." },
    { "title": "Movimiento 2 legal", "content": "push otra copia. historial tiene 2 entradas." },
    { "title": "Deshacer", "content": "pop() devuelve el estado anterior al último movimiento. Restaurar tablero y turno." }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  M1[\"movimiento 1 push\"] --> M2[\"movimiento 2 push\"]\n  M2 --> M3[\"movimiento 3 push\"]\n  M3 --> POP[\"Deshacer pop\"]\n  POP --> REST[\"restaura tablero anterior\"]"
}

<!-- code: javascript -->
```javascript
const historial = [];
const CLAVE = "pbpew-ajedrez-partida";

function registrarMovimiento(estado) {
  historial.push({
    tablero: estado.tablero.map((fila) => [...fila]),
    turno: estado.turno,
  });
}

function deshacer(estado) {
  const anterior = historial.pop();
  if (!anterior) return;
  estado.tablero = anterior.tablero;
  estado.turno = anterior.turno;
  estado.seleccion = null;
}

function guardarPartida(estado) {
  const datos = { version: 1, tablero: estado.tablero, turno: estado.turno };
  localStorage.setItem(CLAVE, JSON.stringify(datos));
}

function cargarPartida(estado) {
  try {
    const raw = localStorage.getItem(CLAVE);
    if (!raw) return false;
    const datos = JSON.parse(raw);
    if (!datos.tablero || !datos.turno) return false;
    estado.tablero = datos.tablero;
    estado.turno = datos.turno;
    return true;
  } catch {
    return false;
  }
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa deshacer con un array como pila: push antes de mover, pop al pulsar el botón. ¿Qué debe restaurar además del tablero?",
  "hints": ["turno previo", "seleccion = null", "pieza capturada queda en la copia del tablero"],
  "expectedKeywords": ["turno", "pop", "push", "pila"],
  "successMessage": "Correcto. El pop debe devolver tablero y turno coherentes; la capturada ya está en la copia de la matriz."
}

---

### Casos reales

#### Bug de coordenadas invertidas

Un equipo representa el tablero como `squares[64]` pero pinta con `fila` y `col` intercambiados. Los movimientos legales en backend (FEN) fallan en frontend: el caballo en `b1` aparece en `a2`. **Decisión:** una sola convención y funciones `aCoordenadas(indice)` / `aIndice(fila, col)` compartidas entre modelo, vista y API.

#### Partida corrupta en localStorage

Una PWA guarda estado tras cada movimiento. `JSON.parse` falla porque una versión anterior guardó referencias no serializables. **Lección:** persistir solo datos planos; validar al cargar; botones explícitos Guardar / Cargar / Nueva partida con fallback a posición inicial.

---

### Retos avanzados (Nivel C)

Elige uno o más tras completar el MVP (Nivel A) y persistencia (Nivel B).

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Validación manual", "chess.js"],
  "rows": [
    ["Aprendizaje JS/DOM", "Máximo", "Menor en reglas"],
    ["Reglas completas", "Muy laborioso", "Listo"],
    ["Uso PBPEW", "MVP rey/peón/torre", "Reto final jaque/mate"],
    ["Dependencia", "Ninguna", "npm o CDN"]
  ]
}

**11. Reglas ampliadas:** torre (línea recta libre), alfil (diagonal), caballo (L), dama (torre+alfil) — sin atravesar piezas (excepto caballo).

**12. Jaque simplificado:** tras mover, comprobar si el rey enemigo está bajo ataque reutilizando lógica de movimientos sin aplicarlos.

**13. chess.js:** motor de reglas; tu DOM refleja `chess.board()`; deshacer con `chess.undo()` si aplica.

<!-- code: javascript -->
```javascript
import { Chess } from "chess.js";

const juego = new Chess();
// juego.move({ from: "e2", to: "e4" });
// juego.in_check(), juego.isGameOver()
// Sincronizar tu matriz DOM con juego.board() tras cada movimiento legal
```

**14. UX:** resaltar último movimiento, casillas legales al seleccionar, contador de movimientos.

**15. Clases (lección 8):** refactor a `class Tablero` y métodos por tipo de pieza.

<!-- code: javascript -->
```javascript
class Pieza {
  constructor(tipo, color) {
    this.tipo = tipo;
    this.color = color;
  }
  codigo() {
    return this.color + this.tipo;
  }
  puedeMoverA(tablero, f0, c0, f1, c1) {
    if (this.tipo === "K") {
      return Math.abs(f1 - f0) <= 1 && Math.abs(c1 - c0) <= 1;
    }
    return false;
  }
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuándo tendría sentido usar chess.js en lugar de escribir todas las reglas a mano?",
  "hints": ["Jaque, mate, enroque, captura al paso", "Ya dominas modelo-vista-controlador con reglas simples"],
  "expectedKeywords": ["jaque", "reglas", "completas", "motor"],
  "successMessage": "Correcto. chess.js aporta reglas completas cuando tu capa DOM ya funciona; la validación manual enseña más JS en el MVP."
}

---

## Reto integrador

**«Ajedrez en el navegador» — capstone PBPEW (tres niveles)**

### Nivel A — Demo obligatoria

1. HTML: `#tablero`, botones `#nueva`, `#deshacer`, `#guardar`, `#cargar`, `#estado`.
2. Modelo: `tablero` 8×8, `POSICION_INICIAL`, `estado` con `turno` y `seleccion`.
3. Vista: render completo con Unicode; casillas claras/oscuras; clase `.seleccionada`.
4. Control: delegación de clics; movimiento legal al menos para **rey** y **peón**; alternar turno; captura.
5. Promoción automática de peón a dama en la última fila.
6. Re-render tras cada movimiento legal.

### Nivel B — Persistencia e historial

7. `historial.push` copia superficial antes de cada movimiento legal.
8. "Deshacer" con `pop` (mínimo un nivel).
9. "Guardar" / "Cargar" con `localStorage` y JSON; "Nueva partida" resetea a inicial.
10. Manejo de error si la carga falla (mensaje en `#estado`).

### Nivel C — Desafío profundo (elige uno o más)

11. Reglas ampliadas (torre, alfil, caballo, dama).
12. Jaque simplificado con lógica propia.
13. Integración chess.js solo en modelo.
14. UX: último movimiento, casillas legales, contador.
15. Refactor con clases.

**Criterio de éxito mínimo (Nivel A):** matriz 2D coherente, render 8×8, delegación, dos clics, validación no trivial, turnos, estado centralizado, `textContent` para piezas.

**Criterio excelencia:** Nivel B completo + al menos un ítem de Nivel C documentado en comentarios.

**Integración curricular:**

| Lección | Aplicación |
|---------|------------|
| 01–02 | DOM, script en página |
| 03–04 | tipos, `if`, validación |
| 05 | bucles render, `try/catch` en carga |
| 06 | callbacks en listeners |
| 07 | matriz, objetos estado, JSON |
| 08 | clases opcionales |
| 09 | pila deshacer |
| 10 | delegación, `classList`, `dataset` |
| 11–12 | `localStorage` + JSON |

<!-- code: html -->
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ajedrez PBPEW</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <main>
    <div id="tablero" class="tablero-ajedrez"></div>
    <div class="barra-acciones">
      <button type="button" id="nueva">Nueva partida</button>
      <button type="button" id="deshacer">Deshacer</button>
      <button type="button" id="guardar">Guardar</button>
      <button type="button" id="cargar">Cargar</button>
    </div>
    <p id="estado">Turno: blancas</p>
  </main>
  <script src="modelo.js"></script>
  <script src="vista.js"></script>
  <script src="controlador.js"></script>
</body>
</html>
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el Nivel A del capstone: tablero 8×8, delegación de clics, movimiento legal de rey y peón, turnos y re-render. Describe o pega tu estructura modelo-vista-controlador.",
  "hints": [
    "estado.tablero como fuente de verdad",
    "un solo addEventListener en #tablero",
    "movimientoLegal antes de aplicarMovimiento",
    "textContent para símbolos Unicode"
  ],
  "expectedKeywords": ["tablero", "deleg", "movimientoLegal", "turno"],
  "successMessage": "Excelente. Has integrado matriz 2D, DOM, eventos y validación en el capstone del track PBPEW."
}

---

## Cierre

Has completado el proyecto integrador más exigente del track PBPEW. Combina matriz 2D, renderizado DOM, delegación de eventos, validación con funciones puras, pila LIFO y persistencia JSON — la síntesis de las lecciones 01–12.

**Ideas clave para retener:**

- **`tablero[fila][col]`** es la fuente de verdad; el DOM solo refleja el modelo.
- **Delegación** en el contenedor padre evita listeners duplicados al re-renderizar.
- **Validar sin mutar** — copia superficial o cálculo puro antes de `aplicarMovimiento`.
- **Pila LIFO** para deshacer; **JSON plano** para `localStorage`.
- **Progresión incremental** — MVP con rey/peón antes de reglas completas o chess.js.

**Siguiente paso:** repasa proyectos hermanos (`calculadora`, `todo-list`, `piedra-papel-tijera`) y compara cómo cada uno prioriza estado, eventos y persistencia.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué estructura es la fuente de verdad del estado del tablero en este proyecto?",
      "options": [
        "El HTML generado en #tablero",
        "Un array 2D tablero[fila][col] en JavaScript",
        "Las clases CSS de cada casilla",
        "localStorage en todo momento"
      ],
      "correctIndex": 1,
      "feedback": "El DOM refleja el modelo; la lógica lee y escribe la matriz. localStorage solo persiste una copia serializada."
    },
    {
      "question": "¿Por qué conviene un solo addEventListener(\"click\") en el contenedor del tablero?",
      "options": [
        "Porque los botones no soportan clics",
        "Delegación: funciona con celdas recreadas al re-render sin re-enlazar N listeners",
        "Es obligatorio por chess.js",
        "Para evitar usar dataset"
      ],
      "correctIndex": 1,
      "feedback": "Al regenerar el tablero, los nodos nuevos burbujean al padre; un listener central escala (lección 10)."
    },
    {
      "question": "Un peón blanco en tablero[6][4] se mueve adelante con fila decreciente. ¿Qué error típico causa que vaya al revés?",
      "options": [
        "Usar textContent en lugar de innerHTML",
        "Invertir fila/columna o mezclar fila 0 arriba del array con fila 0 abajo del tablero visual",
        "No usar const",
        "Olvidar preventDefault en un formulario"
      ],
      "correctIndex": 1,
      "feedback": "La convención fila/col debe ser consistente entre matriz, validación y render."
    },
    {
      "question": "¿Qué patrón de la lección 9 usa el botón Deshacer?",
      "options": [
        "Cola FIFO",
        "Pila LIFO",
        "Set de movimientos únicos",
        "Map clave-valor de piezas"
      ],
      "correctIndex": 1,
      "feedback": "El último movimiento guardado es el primero en revertirse (push al mover, pop al deshacer)."
    },
    {
      "question": "Al guardar la partida en localStorage, ¿qué formato es el adecuado?",
      "options": [
        "Guardar el elemento DOM directamente",
        "JSON.stringify de un objeto con tablero y turno",
        "Solo el string FEN sin turno",
        "Un Map sin convertir"
      ],
      "correctIndex": 1,
      "feedback": "localStorage guarda strings; serializa datos planos con JSON. Al cargar, JSON.parse y validar (lección 12)."
    }
  ]
}
