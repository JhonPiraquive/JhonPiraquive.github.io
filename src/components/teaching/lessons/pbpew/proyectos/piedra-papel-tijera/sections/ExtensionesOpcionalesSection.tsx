import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ExtensionesOpcionalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Extensiones opcionales (nivel avanzado)
      </h2>
      <CodeFiddle
        language="javascript"
        code={`function jugarRondaConRetraso(eleccionJugador) {
  const elCpu = document.querySelector("#jugada-cpu");
  elCpu.textContent = "CPU: pensando…";

  setTimeout(() => {
    const eleccionCpu = obtenerEleccionCpu(OPCIONES);
    const resultado = determinarGanador(eleccionJugador, eleccionCpu);
    actualizarMarcador(resultado);
    renderizarRonda(eleccionJugador, eleccionCpu, resultado);
  }, 400);
}`}
      />
      <p className="my-4">Retos adicionales para quien termine el núcleo:</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>Historial:</strong> <code>appendChild</code> de <code>&lt;li&gt;</code> en{" "}
          <code>#historial</code> con resumen de cada ronda.
        </li>
        <li>
          <strong>Reinicio:</strong> botón <code>#reiniciar</code> que pone contadores en 0 y limpia textos.
        </li>
        <li>
          <strong>CPU adaptativa:</strong> contar frecuencia de elecciones del jugador y elegir la opción que
          más suele vencerle (arrays + bucles).
        </li>
        <li>
          <strong>Persistencia:</strong> guardar <code>marcador</code> en <code>localStorage</code> y
          restaurar al cargar.
        </li>
      </ol>
      <PracticeExercise
        prompt="Implementa botón #reiniciar que ponga los tres contadores en 0 y resetee los textos de la UI."
        hints={[
          "marcador.victorias = 0; empates y derrotas igual",
          "textContent en #jugada-jugador, #jugada-cpu, #resultado, #marcador",
        ]}
        expectedKeywords={["reiniciar", "0", "textContent"]}
        successMessage="Excelente. El estado y la vista vuelven al inicio sin recargar la página."
      />
    </section>
  );
}
