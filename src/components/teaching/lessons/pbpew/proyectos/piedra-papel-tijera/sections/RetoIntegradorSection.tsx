import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Reto integrador</h2>
      <p className="my-4">
        <strong>«Piedra, papel o tijera en el navegador»</strong> — construye el proyecto completo en HTML +
        JS (o bloque embebido) sin librerías externas.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold">Requisitos obligatorios</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>UI:</strong> tres controles con <code>data-choice</code>, zonas{" "}
          <code>#jugada-jugador</code>, <code>#jugada-cpu</code>, <code>#resultado</code>,{" "}
          <code>#marcador</code>.
        </li>
        <li>
          <strong>Aleatoriedad:</strong> CPU con <code>Math.random()</code> y array <code>OPCIONES</code> —
          no hardcodear la jugada de la CPU.
        </li>
        <li>
          <strong>Lógica:</strong> <code>determinarGanador</code> con retorno <code>&quot;jugador&quot;</code>
          , <code>&quot;cpu&quot;</code> o <code>&quot;empate&quot;</code>; reglas correctas.
        </li>
        <li>
          <strong>Marcador:</strong> objeto o tres <code>let</code>; persiste entre rondas hasta reinicio o
          recarga.
        </li>
        <li>
          <strong>DOM:</strong> <code>textContent</code>; opcional <code>classList</code> en{" "}
          <code>#resultado</code> (<code>ganaste</code>, <code>perdiste</code>, <code>empate</code>).
        </li>
        <li>
          <strong>Eventos:</strong> <code>addEventListener</code>; prohibido <code>onclick</code> inline para
          la lógica principal.
        </li>
        <li>
          <strong>Funciones:</strong> al menos <code>obtenerEleccionCpu</code>,{" "}
          <code>determinarGanador</code>, <code>jugarRonda</code> (o nombres equivalentes claros).
        </li>
      </ol>
      <h3 className="mb-2 mt-6 text-xl font-semibold">Criterios de éxito</h3>
      <ul className="my-4 list-disc pl-6">
        <li>Tras 10 rondas manuales, los tres contadores suman 10.</li>
        <li>Empate incrementa solo <code>empates</code>.</li>
        <li>
          Clic repetido en la misma opción produce jugadas CPU distintas en la mayoría de rondas.
        </li>
        <li>Sin errores en consola al jugar.</li>
      </ul>
      <p className="my-4">
        <strong>Extensiones (opcionales en la entrega):</strong> historial en lista, reinicio, CPU
        adaptativa, suspense 300–500 ms, <code>localStorage</code>.
      </p>
      <PracticeExercise
        prompt="Construye el proyecto completo siguiendo los requisitos obligatorios. Pega tu HTML+JS o describe cómo separaste obtenerEleccionCpu, determinarGanador, actualizarMarcador y renderizarRonda."
        hints={[
          'Un solo listener en #opciones con closest("[data-choice]")',
          "Nunca jugarRonda() fuera del handler de clic",
          "Siempre tres salidas en determinarGanador incluido empate",
          "Comprueba que victorias + empates + derrotas === número de rondas jugadas",
        ]}
        expectedKeywords={["determinarGanador", "addEventListener", "textContent", "marcador"]}
        successMessage="Proyecto integrador completado. Has unido funciones, DOM, eventos y estado en un producto jugable."
        rows={8}
      />
    </section>
  );
}
