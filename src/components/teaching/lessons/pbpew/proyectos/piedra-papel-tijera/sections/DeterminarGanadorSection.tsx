import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function DeterminarGanadorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        Determinar el ganador: lógica pura
      </h2>
      <p className="my-4">
        Separa <strong>calcular</strong> el resultado de <strong>mutar</strong> el marcador.{" "}
        <code>determinarGanador</code> no toca el DOM ni incrementa contadores; solo devuelve un string.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold">Enfoque mantenible: objeto VENCE_A</h3>
      <CodeFiddle
        language="javascript"
        code={`const VENCE_A = {
  piedra: "tijera",
  tijera: "papel",
  papel: "piedra",
};

function determinarGanador(jugador, cpu) {
  if (jugador === cpu) return "empate";
  if (VENCE_A[jugador] === cpu) return "jugador";
  return "cpu";
}`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold">Alternativa didáctica: if/else explícito</h3>
      <CodeFiddle
        language="javascript"
        code={`function determinarGanador(jugador, cpu) {
  if (jugador === cpu) return "empate";
  if (
    (jugador === "piedra" && cpu === "tijera") ||
    (jugador === "tijera" && cpu === "papel") ||
    (jugador === "papel" && cpu === "piedra")
  ) {
    return "jugador";
  }
  return "cpu";
}`}
      />
      <CompareTable
        headers={["Criterio", "Cadenas if/else", "Objeto / Map de reglas"]}
        rows={[
          ["Legibilidad con 3 opciones", "Alta", "Alta"],
          ["Escalar a más símbolos", "Baja (combinaciones explotan)", "Alta"],
          ["Riesgo de regla invertida", "Medio (copy-paste)", "Bajo si el mapa es la única fuente"],
          ["Adecuado para PBPEW inicial", "Sí (didáctico)", "Sí (refactor sugerido)"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TD
  A[jugador y cpu] --> B{¿Iguales?}
  B -->|Sí| E[empate]
  B -->|No| C{¿VENCE_A jugador === cpu?}
  C -->|Sí| V[victoria jugador]
  C -->|No| P[victoria CPU]`}
      />
      <CodeChallenge
        title="Resultado tijera vs papel"
        template={`// determinarGanador("tijera", "papel") debe devolver:
const resultado = determinarGanador("tijera", "papel");
// resultado === "{{blank1}}"`}
        blanks={[{ id: "blank1", answer: "jugador", placeholder: "jugador | cpu | empate" }]}
      />
      <PracticeExercise
        prompt="¿Por qué conviene separar determinarGanador de actualizarMarcador?"
        hints={["Una función calcula; la otra muta estado", "Facilita pruebas y cambios de reglas"]}
        expectedKeywords={["lógica", "estado", "prueba", "separar"]}
        successMessage="Bien. La lógica pura es testeable; el marcador depende del resultado calculado."
      />
    </section>
  );
}
