"use client";

import { useState } from "react";
import { ClayCard } from "@/components/clay";

const VENCE_A: Record<string, string> = {
  piedra: "tijera",
  tijera: "papel",
  papel: "piedra",
};

function determinarGanador(jugador: string, cpu: string): "jugador" | "cpu" | "empate" {
  if (jugador === cpu) return "empate";
  if (VENCE_A[jugador] === cpu) return "jugador";
  return "cpu";
}

function obtenerEleccionCpu(opciones: string[]): string {
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice]!;
}

export type RockPaperScissorsDemoProps = {
  opciones?: string[];
  emoji?: Record<string, string>;
  showMarcador?: boolean;
  showJugadas?: boolean;
  highlightResultado?: boolean;
  mensajeInicial?: string;
};

export function RockPaperScissorsDemo({
  opciones = ["piedra", "papel", "tijera"],
  emoji = { piedra: "✊", papel: "✋", tijera: "✌️" },
  showMarcador = true,
  showJugadas = true,
  highlightResultado = true,
  mensajeInicial = "Elige una opción para empezar.",
}: RockPaperScissorsDemoProps) {
  const [marcador, setMarcador] = useState({ victorias: 0, empates: 0, derrotas: 0 });
  const [jugadaJugador, setJugadaJugador] = useState<string | null>(null);
  const [jugadaCpu, setJugadaCpu] = useState<string | null>(null);
  const [resultado, setResultado] = useState<"jugador" | "cpu" | "empate" | null>(null);
  const [mensaje, setMensaje] = useState(mensajeInicial);

  function jugar(eleccionJugador: string) {
    const eleccionCpu = obtenerEleccionCpu(opciones);
    const res = determinarGanador(eleccionJugador, eleccionCpu);

    setJugadaJugador(eleccionJugador);
    setJugadaCpu(eleccionCpu);
    setResultado(res);

    setMarcador((m) => {
      if (res === "jugador") return { ...m, victorias: m.victorias + 1 };
      if (res === "cpu") return { ...m, derrotas: m.derrotas + 1 };
      return { ...m, empates: m.empates + 1 };
    });

    const mensajes = {
      jugador: "¡Ganaste esta ronda!",
      cpu: "Gana la CPU.",
      empate: "Empate.",
    };
    setMensaje(mensajes[res]);
  }

  const resultadoClass =
    highlightResultado && resultado
      ? resultado === "jugador"
        ? "ganaste border-l-4 border-[var(--color-accent)] pl-3"
        : resultado === "empate"
          ? "empate border-l-4 border-[var(--color-secondary)] pl-3"
          : "perdiste border-l-4 border-[var(--color-neutral-mid)] pl-3"
      : "";

  return (
    <ClayCard className="my-8 p-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {opciones.map((op) => (
          <button
            key={op}
            type="button"
            data-choice={op}
            className="clay-button min-h-[44px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]"
            onClick={() => jugar(op)}
          >
            {emoji[op]} {op.charAt(0).toUpperCase() + op.slice(1)}
          </button>
        ))}
      </div>
      {showJugadas && (
        <div className="mt-4 space-y-2 text-sm">
          <p>{jugadaJugador ? `Tú: ${emoji[jugadaJugador]} ${jugadaJugador}` : "Tú: —"}</p>
          <p>{jugadaCpu ? `CPU: ${emoji[jugadaCpu]} ${jugadaCpu}` : "CPU: —"}</p>
        </div>
      )}
      <p aria-live="polite" className={`mt-4 rounded-xl p-3 ${resultadoClass}`}>
        {mensaje}
      </p>
      {showMarcador && (
        <p className="mt-2 text-sm">
          Victorias: {marcador.victorias} · Empates: {marcador.empates} · Derrotas: {marcador.derrotas}
        </p>
      )}
    </ClayCard>
  );
}
