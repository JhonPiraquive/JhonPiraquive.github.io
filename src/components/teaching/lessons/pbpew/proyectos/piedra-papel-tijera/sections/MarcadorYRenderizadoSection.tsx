import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function MarcadorYRenderizadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Marcador y renderizado en el DOM
      </h2>
      <p className="my-4">
        Incrementa contadores <strong>solo</strong> tras <code>determinarGanador</code>. Actualiza nodos
        existentes con <code>textContent</code> — no hace falta recrear todo el HTML cada ronda.
      </p>
      <CodeFiddle
        language="javascript"
        code={`function actualizarMarcador(resultado) {
  if (resultado === "jugador") marcador.victorias += 1;
  else if (resultado === "cpu") marcador.derrotas += 1;
  else marcador.empates += 1;
}

function renderizarRonda(jugador, cpu, resultado) {
  const elJugador = document.querySelector("#jugada-jugador");
  const elCpu = document.querySelector("#jugada-cpu");
  const elResultado = document.querySelector("#resultado");
  const elMarcador = document.querySelector("#marcador");

  elJugador.textContent = \`Tú: \${EMOJI[jugador]} \${jugador}\`;
  elCpu.textContent = \`CPU: \${EMOJI[cpu]} \${cpu}\`;

  const mensajes = {
    jugador: "¡Ganaste esta ronda!",
    cpu: "Gana la CPU.",
    empate: "Empate.",
  };
  elResultado.textContent = mensajes[resultado];

  elMarcador.textContent =
    \`Victorias: \${marcador.victorias} · Empates: \${marcador.empates} · Derrotas: \${marcador.derrotas}\`;
}`}
      />
      <CompareTable
        headers={["Enfoque", "Este proyecto", "Cuándo"]}
        rows={[
          ["Mutar marcador + actualizar nodos existentes", "Recomendado", "Pocos elementos en DOM"],
          ["Borrar y recrear todo el HTML cada ronda", "Evitar", "Innecesario y propenso a perder listeners"],
        ]}
      />
      <CodeChallenge
        title="Actualizar pantalla con textContent"
        template={`const elMarcador = document.querySelector("#marcador");
elMarcador.{{blank1}} = \`Victorias: \${marcador.victorias}\`;`}
        blanks={[{ id: "blank1", answer: "textContent", placeholder: "propiedad segura para texto" }]}
      />
      <PracticeExercise
        prompt='Dado let v = 0, escribe el if que incrementa v solo cuando determinarGanador devuelve "jugador".'
        hints={['Compara resultado === "jugador"', "Usa += 1 o v++"]}
        expectedKeywords={["if", "jugador", "v"]}
        successMessage="Correcto. El marcador solo crece cuando el resultado calculado es victoria del jugador."
      />
    </section>
  );
}
