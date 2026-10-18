import { Callout } from "@/components/teaching/Callout";
import { RockPaperScissorsDemo } from "@/components/teaching/RockPaperScissorsDemo";

export function DemoInteractivaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Demo interactiva: juega una ronda ahora
      </h2>
      <p className="my-4">
        <strong>Prioridad máxima del layout.</strong> Antes de leer el código, prueba el juego embebido:
        tres botones, panel de jugadas, mensaje de ronda y marcador que persiste durante la sesión. Debe
        funcionar sin consola.
      </p>
      <RockPaperScissorsDemo
        opciones={["piedra", "papel", "tijera"]}
        emoji={{ piedra: "✊", papel: "✋", tijera: "✌️" }}
        showMarcador
        showJugadas
        highlightResultado
        mensajeInicial="Elige una opción para empezar."
      />
      <Callout title="Qué observar en la demo">
        Tras cada clic: la CPU elige distinto en la mayoría de rondas; empate no suma victoria ni derrota;
        el mensaje de #resultado siempre coincide con el resultado calculado.
      </Callout>
    </section>
  );
}
