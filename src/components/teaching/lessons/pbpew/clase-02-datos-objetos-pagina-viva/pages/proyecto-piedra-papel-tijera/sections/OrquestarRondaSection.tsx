import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function OrquestarRondaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Orquestar la ronda y conectar eventos
      </h2>
      <p className="my-4">Función principal que une aleatoriedad, comparación, marcador y DOM:</p>
      <CodeFiddle
        language="javascript"
        code={`function jugarRonda(eleccionJugador) {
  const eleccionCpu = obtenerEleccionCpu(OPCIONES);
  const resultado = determinarGanador(eleccionJugador, eleccionCpu);
  actualizarMarcador(resultado);
  renderizarRonda(eleccionJugador, eleccionCpu, resultado);
}`}
      />
      <p className="my-4">
        Patrón PBPEW: <strong>delegación</strong> en el contenedor — un solo listener, escalable si el
        tablero crece:
      </p>
      <CodeFiddle
        language="javascript"
        code={`const contenedor = document.querySelector("#opciones");

contenedor.addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-choice]");
  if (!boton) return;

  const eleccion = boton.dataset.choice; // "piedra" | "papel" | "tijera"
  jugarRonda(eleccion);
});`}
      />
      <p className="my-4">HTML mínimo de referencia:</p>
      <CodeFiddle
        language="html"
        code={`<div id="opciones">
  <button type="button" data-choice="piedra">✊ Piedra</button>
  <button type="button" data-choice="papel">✋ Papel</button>
  <button type="button" data-choice="tijera">✌️ Tijera</button>
</div>
<p id="jugada-jugador">Tú: —</p>
<p id="jugada-cpu">CPU: —</p>
<p id="resultado">Elige una opción.</p>
<p id="marcador">Victorias: 0 · Empates: 0 · Derrotas: 0</p>`}
      />
      <Callout title="Error frecuente: callback mal pasado">
        <code>addEventListener(&quot;click&quot;, jugar(&quot;piedra&quot;))</code> ejecuta la función al
        registrar el listener, no al hacer clic. Pasa una función:{" "}
        <code>() =&gt; jugarRonda(&quot;piedra&quot;)</code> o usa delegación con{" "}
        <code>dataset.choice</code>.
      </Callout>
      <MermaidDiagram
        title="Flujo de una ronda"
        chart={`flowchart TD
  A[Usuario hace clic en una opción] --> B[Leer data-choice]
  B --> C[CPU elige al azar]
  C --> D[Comparar jugador y CPU]
  D --> E[Actualizar marcador]
  E --> F[Renderizar elecciones y resultado]`}
      />
    </section>
  );
}
