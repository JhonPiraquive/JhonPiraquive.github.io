import { ClayCard } from "@/components/clay/ClayCard";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function ValidacionMovimientosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Validación de movimientos"}</h2>
      <p className="my-4">
        {
          "Funciones puras movimientoLegal(tablero, f0, c0, f1, c1) que comprueben: índices en rango, no capturar pieza propia, reglas por tipo. No mutar el tablero durante la validación — usa copia superficial o calcula sin mover piezas."
        }
      </p>
      <p className="my-4">
        {"Progresión MVP: "}
        <strong>{"rey"}</strong>
        {" (1 casilla cualquier dirección) y "}
        <strong>{"peón"}</strong>
        {" (1 adelante, 2 desde inicio, captura diagonal) antes de torre/alfil/caballo."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`function movimientoLegal(tablero, f0, c0, f1, c1) {
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
}`}
      />
      <CodeChallenge
        title="Validación del rey"
        template={`if (tipo === "K") return df <= {{blank1}} && dc <= {{blank2}};`}
        blanks={[
          { id: "blank1", answer: "1", placeholder: "máx filas" },
          { id: "blank2", answer: "1", placeholder: "máx columnas" },
        ]}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"No implementes todo de golpe"}</strong>
        {
          "Entrega valor con tablero + rey y peón bien hechos antes de enroque, jaque, mate y captura al paso. Bloqueo típico: intentar todas las reglas del ajedrez a la vez."
        }
      </ClayCard>
    </section>
  );
}
