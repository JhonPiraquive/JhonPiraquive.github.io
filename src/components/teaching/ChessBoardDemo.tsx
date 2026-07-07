"use client";

import { useCallback, useState } from "react";
import { ClayCard } from "@/components/clay/ClayCard";

export type ChessBoardDemoProps = {
  title?: string;
  rules?: "minimal" | "full";
  pieces?: Array<"K" | "Q" | "R" | "B" | "N" | "P">;
  showToolbar?: boolean;
  toolbarActions?: Array<"nueva" | "deshacer" | "guardar" | "cargar">;
  highlightSelection?: boolean;
  promotePawnToQueen?: boolean;
};

type PieceCode = string | null;
type Board = PieceCode[][];
type Selection = { fila: number; col: number } | null;
type GameState = { tablero: Board; turno: "w" | "b"; seleccion: Selection };

const SIMBOLOS: Record<string, string> = {
  wK: "♔",
  wQ: "♕",
  wR: "♖",
  wB: "♗",
  wN: "♘",
  wP: "♙",
  bK: "♚",
  bQ: "♛",
  bR: "♜",
  bB: "♝",
  bN: "♞",
  bP: "♟",
};

const CLAVE = "pbpew-ajedrez-partida";

const POSICION_COMPLETA: Board = [
  ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
  ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
  ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
];

function crearPosicionInicial(pieces: Array<"K" | "Q" | "R" | "B" | "N" | "P">): Board {
  const soloReyPeon = pieces.length <= 2 && pieces.every((p) => p === "K" || p === "P");
  if (!soloReyPeon) {
    return POSICION_COMPLETA.map((fila) => [...fila]);
  }
  const tablero: Board = Array.from({ length: 8 }, () => Array(8).fill(null));
  tablero[0][4] = "bK";
  for (let c = 0; c < 8; c++) tablero[1][c] = "bP";
  for (let c = 0; c < 8; c++) tablero[6][c] = "wP";
  tablero[7][4] = "wK";
  return tablero;
}

function colorDePieza(codigo: PieceCode): "w" | "b" | null {
  return codigo ? (codigo[0] as "w" | "b") : null;
}

function movimientoPeon(tablero: Board, f0: number, c0: number, f1: number, c1: number, color: "w" | "b"): boolean {
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

function movimientoLegal(tablero: Board, f0: number, c0: number, f1: number, c1: number, rules: "minimal" | "full"): boolean {
  if (f1 < 0 || f1 > 7 || c1 < 0 || c1 > 7) return false;

  const pieza = tablero[f0][c0];
  const destino = tablero[f1][c1];
  if (!pieza) return false;
  if (destino && colorDePieza(destino) === colorDePieza(pieza)) return false;

  const tipo = pieza[1];
  const color = colorDePieza(pieza)!;
  const df = Math.abs(f1 - f0);
  const dc = Math.abs(c1 - c0);

  if (tipo === "K") return df <= 1 && dc <= 1;
  if (tipo === "P") return movimientoPeon(tablero, f0, c0, f1, c1, color);

  if (rules === "full") {
    if (tipo === "R") return (f0 === f1 || c0 === c1) && caminoLibre(tablero, f0, c0, f1, c1);
    if (tipo === "B") return df === dc && caminoLibre(tablero, f0, c0, f1, c1);
    if (tipo === "N") return (df === 2 && dc === 1) || (df === 1 && dc === 2);
    if (tipo === "Q") {
      return (
        ((f0 === f1 || c0 === c1) || df === dc) && caminoLibre(tablero, f0, c0, f1, c1)
      );
    }
  }

  return false;
}

function caminoLibre(tablero: Board, f0: number, c0: number, f1: number, c1: number): boolean {
  const df = Math.sign(f1 - f0);
  const dc = Math.sign(c1 - c0);
  let f = f0 + df;
  let c = c0 + dc;
  while (f !== f1 || c !== c1) {
    if (tablero[f][c]) return false;
    f += df;
    c += dc;
  }
  return true;
}

function aplicarMovimiento(
  tablero: Board,
  f0: number,
  c0: number,
  f1: number,
  c1: number,
  promotePawnToQueen: boolean
): Board {
  const nuevo = tablero.map((fila) => [...fila]);
  const pieza = nuevo[f0][c0];
  nuevo[f1][c1] = pieza;
  nuevo[f0][c0] = null;

  if (promotePawnToQueen && pieza) {
    if (pieza === "wP" && f1 === 0) nuevo[f1][c1] = "wQ";
    if (pieza === "bP" && f1 === 7) nuevo[f1][c1] = "bQ";
  }

  return nuevo;
}

export function ChessBoardDemo({
  title = "Tablero de ajedrez",
  rules = "minimal",
  pieces = ["K", "P"],
  showToolbar = true,
  toolbarActions = ["nueva", "deshacer", "guardar", "cargar"],
  highlightSelection = true,
  promotePawnToQueen = true,
}: ChessBoardDemoProps) {
  const [estado, setEstado] = useState<GameState>(() => ({
    tablero: crearPosicionInicial(pieces),
    turno: "w",
    seleccion: null,
  }));
  const [historial, setHistorial] = useState<Array<{ tablero: Board; turno: "w" | "b" }>>([]);
  const [mensaje, setMensaje] = useState("Turno: blancas");

  const nuevaPartida = useCallback(() => {
    setEstado({ tablero: crearPosicionInicial(pieces), turno: "w", seleccion: null });
    setHistorial([]);
    setMensaje("Turno: blancas — nueva partida");
  }, [pieces]);

  const deshacer = useCallback(() => {
    setHistorial((prev) => {
      const copia = [...prev];
      const anterior = copia.pop();
      if (anterior) {
        setEstado({ tablero: anterior.tablero.map((f) => [...f]), turno: anterior.turno, seleccion: null });
        setMensaje(`Turno: ${anterior.turno === "w" ? "blancas" : "negras"} — deshecho`);
      } else {
        setMensaje("No hay movimientos para deshacer");
      }
      return copia;
    });
  }, []);

  const guardar = useCallback(() => {
    const datos = { version: 1, tablero: estado.tablero, turno: estado.turno };
    localStorage.setItem(CLAVE, JSON.stringify(datos));
    setMensaje("Partida guardada en localStorage");
  }, [estado]);

  const cargar = useCallback(() => {
    try {
      const raw = localStorage.getItem(CLAVE);
      if (!raw) {
        setMensaje("No hay partida guardada");
        return;
      }
      const datos = JSON.parse(raw);
      if (!datos.tablero || !datos.turno) {
        setMensaje("Partida corrupta — usa Nueva partida");
        return;
      }
      setEstado({ tablero: datos.tablero, turno: datos.turno, seleccion: null });
      setHistorial([]);
      setMensaje(`Turno: ${datos.turno === "w" ? "blancas" : "negras"} — cargada`);
    } catch {
      setMensaje("Error al cargar — JSON corrupto");
    }
  }, []);

  const manejarClic = (fila: number, col: number) => {
    const pieza = estado.tablero[fila][col];

    if (!estado.seleccion) {
      if (pieza && colorDePieza(pieza) === estado.turno) {
        setEstado((e) => ({ ...e, seleccion: { fila, col } }));
      }
      return;
    }

    const { fila: f0, col: c0 } = estado.seleccion;

    if (f0 === fila && c0 === col) {
      setEstado((e) => ({ ...e, seleccion: null }));
      return;
    }

    if (pieza && colorDePieza(pieza) === estado.turno) {
      setEstado((e) => ({ ...e, seleccion: { fila, col } }));
      return;
    }

    if (movimientoLegal(estado.tablero, f0, c0, fila, col, rules)) {
      setHistorial((h) => [
        ...h,
        { tablero: estado.tablero.map((f) => [...f]), turno: estado.turno },
      ]);
      const nuevoTablero = aplicarMovimiento(estado.tablero, f0, c0, fila, col, promotePawnToQueen);
      const nuevoTurno = estado.turno === "w" ? "b" : "w";
      setEstado({ tablero: nuevoTablero, turno: nuevoTurno, seleccion: null });
      setMensaje(`Turno: ${nuevoTurno === "w" ? "blancas" : "negras"}`);
    } else {
      setEstado((e) => ({ ...e, seleccion: null }));
    }
  };

  const btnClass =
    "rounded-xl border border-[var(--color-secondary)]/30 bg-white px-3 py-2 text-sm transition hover:border-[var(--color-secondary)] hover:bg-[var(--color-neutral-light)]";

  return (
    <ClayCard className="my-10 border border-[var(--color-secondary)]/20 p-6">
      <h3 className="mb-4 text-lg font-semibold text-[var(--color-primary)]">{title}</h3>

      <div
        className="mx-auto grid w-full max-w-[400px] grid-cols-8 border border-[var(--color-neutral-mid)]/30"
        style={{ aspectRatio: "1" }}
        role="grid"
        aria-label="Tablero de ajedrez 8 por 8"
      >
        {estado.tablero.map((fila, fi) =>
          fila.map((pieza, ci) => {
            const clara = (fi + ci) % 2 === 0;
            const seleccionada =
              highlightSelection &&
              estado.seleccion?.fila === fi &&
              estado.seleccion?.col === ci;

            return (
              <button
                key={`${fi}-${ci}`}
                type="button"
                className={`flex items-center justify-center text-2xl sm:text-3xl ${clara ? "bg-[#f0d9b5]" : "bg-[#b58863]"} ${seleccionada ? "outline outline-3 outline-[var(--color-accent)]" : ""}`}
                style={seleccionada ? { backgroundColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)" } : undefined}
                onClick={() => manejarClic(fi, ci)}
                aria-label={`Casilla ${String.fromCharCode(97 + ci)}${8 - fi}`}
              >
                {pieza ? SIMBOLOS[pieza] ?? "" : ""}
              </button>
            );
          })
        )}
      </div>

      {showToolbar && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {toolbarActions.includes("nueva") && (
            <button type="button" className={btnClass} onClick={nuevaPartida}>
              Nueva partida
            </button>
          )}
          {toolbarActions.includes("deshacer") && (
            <button type="button" className={btnClass} onClick={deshacer}>
              Deshacer
            </button>
          )}
          {toolbarActions.includes("guardar") && (
            <button type="button" className={btnClass} onClick={guardar}>
              Guardar
            </button>
          )}
          {toolbarActions.includes("cargar") && (
            <button type="button" className={btnClass} onClick={cargar}>
              Cargar
            </button>
          )}
        </div>
      )}

      <p className="mt-4 text-center text-sm text-[var(--color-neutral-mid)]" aria-live="polite">
        {mensaje}
      </p>
    </ClayCard>
  );
}
