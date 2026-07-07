import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ValidacionDefensivaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Validación defensiva y errores comunes
      </h2>
      <p className="my-4">
        Si <code>determinarGanador</code> recibe un valor no listado en <code>OPCIONES</code>, devuelve{" "}
        <code>null</code> o muestra «Opción no válida» <strong>sin</strong> modificar el marcador.
      </p>
      <CodeFiddle
        language="javascript"
        code={`function jugarRondaSegura(eleccionJugador) {
  if (!OPCIONES.includes(eleccionJugador)) {
    document.querySelector("#resultado").textContent = "Opción no válida";
    return;
  }
  jugarRonda(eleccionJugador);
}`}
      />
      <p className="my-4 font-semibold">Errores típicos en consola o en producto:</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          Llamar <code>jugarRonda(&quot;piedra&quot;)</code> al cargar — distorsiona el marcador sin
          interacción.
        </li>
        <li>
          Mezclar <code>&quot;Piedra&quot;</code> y <code>&quot;piedra&quot;</code> — normaliza o usa{" "}
          <code>data-choice</code> idénticos.
        </li>
        <li>
          Actualizar el DOM antes de calcular — el usuario ve «¡Ganaste!» de la ronda anterior en empate.
        </li>
        <li>
          Olvidar el caso empate — el span <code>#resultado</code> conserva texto viejo (caso real en
          landings promocionales).
        </li>
        <li>
          <code>querySelector</code> sin comprobar <code>null</code> — <code>TypeError</code> si falta{" "}
          <code>#marcador</code> en el HTML.
        </li>
      </ul>
      <Callout title="Caso real: marcador que «miente»">
        Una campaña publicó piedra-papel-tijera para sorteos. El handler olvidó empate: al empatar, #resultado
        conservaba «¡Ganaste!» de la ronda anterior. Usuarios denunciaron fraude. Lección: siempre llamar
        renderizarRonda al final, incluso en empate.
      </Callout>
      <PracticeExercise
        prompt="Implementa validación: si eleccionJugador no está en OPCIONES, muestra en #resultado «Opción no válida» y no modifiques el marcador."
        hints={["OPCIONES.includes(eleccionJugador)", "return temprano antes de actualizarMarcador"]}
        expectedKeywords={["includes", "return", "no válida"]}
        successMessage="Bien. La UI refleja el estado calculado y el marcador no se falsea."
      />
    </section>
  );
}
