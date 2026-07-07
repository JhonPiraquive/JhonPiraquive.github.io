import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ProyectoIntegradorIntroSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Proyecto integrador: un juego completo en el navegador
      </h2>
      <p className="my-4">
        Este proyecto aplica en un solo minijuego lo visto en el track: estado en variables, decisiones,
        funciones, arrays, DOM, eventos y (opcional) asincronía. La CPU simula al oponente con elección{" "}
        <strong>aleatoria</strong> cada ronda; tú eliges con botones y ves feedback inmediato en pantalla.
      </p>
      <p className="my-4">
        <strong>Flujo fijo de una ronda:</strong> (1) usuario elige → (2) CPU elige al azar → (3) comparar
        → (4) actualizar marcador → (5) pintar resultado en DOM. Saltar pasos produce bugs visibles
        (marcador sin mensaje, texto de la ronda anterior, etc.).
      </p>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant B as Botón DOM
  participant J as jugarRonda()
  participant C as obtenerEleccionCpu()
  participant D as determinarGanador()
  participant M as Marcador / DOM

  U->>B: click en piedra/papel/tijera
  B->>J: data-choice
  J->>C: OPCIONES
  C-->>J: elección CPU
  J->>D: jugador, cpu
  D-->>J: jugador | cpu | empate
  J->>M: actualizarMarcador + textContent
  M-->>U: feedback visual`}
      />
    </section>
  );
}
