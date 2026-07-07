import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ModeloMatriz2DSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Modelo: tablero como matriz 2D"}</h2>
      <p className="my-4">
        {
          "Cada celda guarda null (vacía) o un código de pieza: primera letra = color (w blanco, b negro), segunda = tipo (K rey, Q dama, R torre, B alfil, N caballo, P peón)."
        }
      </p>
      <p className="my-4">
        {
          "La matriz es la fuente de verdad; el DOM solo refleja su estado. Si mueves nodos sin actualizar la matriz, la lógica y la pantalla se desincronizan."
        }
      </p>
      <CompareTable
        headers={["Criterio", "tablero[fila][col]", "casillas[64] plano"]}
        rows={[
          ["Legibilidad", "Alta (tablero[3][4])", "Requiere fila = Math.floor(i / 8)"],
          ["Renderizado", "Bucles anidados naturales", "Un solo bucle"],
          ["Copia para deshacer", "map por fila", "slice() o spread"],
          ["Caso PBPEW", "Recomendado", "Válido si documentas conversión"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart LR
  subgraph grid [tablero fila col]
    R0["fila 0: piezas negras"]
    R7["fila 7: piezas blancas"]
  end
  R0 --> C0["col 0-7"]
  R7 --> C7["col 0-7"]`}
      />
      <CodeFiddle
        language="javascript"
        code={`const PIEZA_VACIA = null;

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
}`}
      />
      <p className="my-4">
        <strong>{"Coordenadas internas vs notación algebraica:"}</strong>
        {" en código usa índices 0–7; en UI puedes mostrar a1–h8 con "}
        <code>{"String.fromCharCode(97 + col) + (8 - fila)"}</code>
        {". No mezcles ambos sistemas sin funciones de conversión explícitas."}
      </p>
      <CodeChallenge
        title="Coloca los reyes en la matriz"
        template={`const tablero = Array.from({ length: 8 }, () => Array(8).fill(null));
tablero[{{blank1}}][4] = "wK";
tablero[{{blank2}}][4] = "bK";`}
        blanks={[
          { id: "blank1", answer: "7", placeholder: "fila rey blanco" },
          { id: "blank2", answer: "0", placeholder: "fila rey negro" },
        ]}
      />
      <PracticeExercise
        prompt="¿Por qué la matriz tablero[fila][col] debe ser la fuente de verdad y no las posiciones visuales de los nodos DOM?"
        hints={[
          "El DOM es solo la vista",
          "Si solo mueves nodos sin actualizar datos, estado lógico y pantalla se desincronizan",
        ]}
        expectedKeywords={["matriz", "fuente", "DOM", "vista"]}
        successMessage="Correcto. La lógica lee y escribe la matriz; el render solo refleja ese estado."
      />
    </section>
  );
}
