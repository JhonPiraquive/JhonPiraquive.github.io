import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

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
      <CodeChallenge
        title="Delegación con data-choice"
        template={`contenedor.addEventListener("{{blank1}}", (evento) => {
  const boton = evento.target.closest("[data-choice]");
  if (!boton) return;
  const eleccion = boton.dataset.{{blank2}};
  jugarRonda(eleccion);
});`}
        blanks={[
          { id: "blank1", answer: "click", placeholder: "evento de ratón" },
          { id: "blank2", answer: "choice", placeholder: "atributo data-choice" },
        ]}
      />
      <CodeChallenge
        title="Orden del flujo de una ronda"
        template={`Ordena mentalmente:
1) {{blank1}}
2) CPU elige al azar
3) {{blank2}}
4) Se actualiza #marcador
5) Se muestra mensaje en #resultado`}
        blanks={[
          { id: "blank1", answer: "usuario hace clic", placeholder: "primer paso" },
          { id: "blank2", answer: "se compara jugador vs CPU", placeholder: "antes del marcador" },
        ]}
      />
    </section>
  );
}
