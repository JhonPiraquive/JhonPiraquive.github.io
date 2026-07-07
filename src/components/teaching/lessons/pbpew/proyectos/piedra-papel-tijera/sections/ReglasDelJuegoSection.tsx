import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ReglasDelJuegoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Reglas del juego y modelo mental
      </h2>
      <p className="my-4">
        Dos jugadores eligen en secreto entre tres opciones discretas (<code>piedra</code>,{" "}
        <code>papel</code>, <code>tijera</code>). No hay valor numérico intrínseco — la lógica es{" "}
        <strong>relacional</strong> (<code>jugador</code> vs <code>cpu</code>):
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>Piedra vence tijera.</li>
        <li>Tijera vence papel.</li>
        <li>Papel vence piedra.</li>
        <li>Misma elección → empate.</li>
      </ul>
      <MermaidDiagram
        chart={`flowchart LR
  subgraph reglas [Quién vence]
    P[piedra] -->|vence| T[tijera]
    T -->|vence| PA[papel]
    PA -->|vence| P
  end`}
      />
      <StepReveal
        title="Una ronda completa (paso a paso)"
        steps={[
          {
            title: "1. Clic del usuario",
            content:
              'El listener lee data-choice del botón (p. ej. "piedra") y llama a jugarRonda(eleccionJugador). No se ejecuta jugarRonda al cargar la página.',
          },
          {
            title: "2. CPU elige al azar",
            content:
              "obtenerEleccionCpu(OPCIONES) usa Math.floor(Math.random() * opciones.length) y devuelve un string del array.",
          },
          {
            title: "3. Comparar",
            content:
              'determinarGanador(jugador, cpu) devuelve "jugador", "cpu" o "empate" según las reglas.',
          },
          {
            title: "4. Incrementar contador",
            content:
              "actualizarMarcador(resultado) muta victorias, empates o derrotas solo después de conocer el resultado.",
          },
          {
            title: "5. Pintar en pantalla",
            content:
              "renderizarRonda asigna textContent en #jugada-jugador, #jugada-cpu, #resultado y #marcador.",
          },
        ]}
      />
    </section>
  );
}
