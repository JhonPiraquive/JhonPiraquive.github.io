export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">Al finalizar el proyecto, el estudiante podrá:</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>Construir</strong> un minijuego piedra-papel-tijera en el navegador integrando variables,
          funciones, arrays, DOM y eventos sin librerías externas.
        </li>
        <li>
          <strong>Implementar</strong> elección aleatoria de la CPU con{" "}
          <code>Math.floor(Math.random() * opciones.length)</code> y <strong>explicar</strong> por qué el
          índice es seguro.
        </li>
        <li>
          <strong>Centralizar</strong> la lógica de victoria en <code>determinarGanador</code> con salidas
          explícitas <code>&quot;jugador&quot;</code>, <code>&quot;cpu&quot;</code> o{" "}
          <code>&quot;empate&quot;</code>.
        </li>
        <li>
          <strong>Mantener</strong> un marcador persistente entre rondas y <strong>actualizar</strong> la UI
          con <code>textContent</code> tras calcular el resultado.
        </li>
        <li>
          <strong>Registrar</strong> interacción con <code>addEventListener</code> (delegación con{" "}
          <code>data-choice</code> o listeners por botón) <strong>sin</strong> ejecutar la ronda al cargar
          el script.
        </li>
        <li>
          <strong>(Opcional)</strong> Extender con historial, reinicio, CPU adaptativa, suspense con{" "}
          <code>setTimeout</code> o persistencia en <code>localStorage</code>.
        </li>
      </ul>
    </section>
  );
}
