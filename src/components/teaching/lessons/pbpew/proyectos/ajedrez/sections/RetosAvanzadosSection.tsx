import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetosAvanzadosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Retos avanzados (Nivel C)"}</h2>
      <p className="my-4">{"Elige uno o más tras completar el MVP (Nivel A) y persistencia (Nivel B)."}</p>
      <CompareTable
        headers={["Criterio", "Validación manual", "chess.js"]}
        rows={[
          ["Aprendizaje JS/DOM", "Máximo", "Menor en reglas"],
          ["Reglas completas", "Muy laborioso", "Listo"],
          ["Uso PBPEW", "MVP rey/peón/torre", "Reto final jaque/mate"],
          ["Dependencia", "Ninguna", "npm o CDN"],
        ]}
      />
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>{"11. Reglas ampliadas:"}</strong>
          {" torre (línea recta libre), alfil (diagonal), caballo (L), dama (torre+alfil) — sin atravesar piezas (excepto caballo)."}
        </li>
        <li>
          <strong>{"12. Jaque simplificado:"}</strong>
          {" tras mover, comprobar si el rey enemigo está bajo ataque reutilizando lógica de movimientos sin aplicarlos."}
        </li>
        <li>
          <strong>{"13. chess.js:"}</strong>
          {" motor de reglas; tu DOM refleja chess.board(); deshacer con chess.undo() si aplica."}
        </li>
        <li>
          <strong>{"14. UX:"}</strong>
          {" resaltar último movimiento, casillas legales al seleccionar, contador de movimientos."}
        </li>
        <li>
          <strong>{"15. Clases (lección 8):"}</strong>
          {" refactor a class Tablero y métodos por tipo de pieza."}
        </li>
      </ol>
      <CodeFiddle
        language="javascript"
        code={`import { Chess } from "chess.js";

const juego = new Chess();
// juego.move({ from: "e2", to: "e4" });
// juego.in_check(), juego.isGameOver()
// Sincronizar tu matriz DOM con juego.board() tras cada movimiento legal`}
      />
      <CodeFiddle
        language="javascript"
        code={`class Pieza {
  constructor(tipo, color) {
    this.tipo = tipo;
    this.color = color;
  }
  codigo() {
    return this.color + this.tipo;
  }
  puedeMoverA(tablero, f0, c0, f1, c1) {
    if (this.tipo === "K") {
      return Math.abs(f1 - f0) <= 1 && Math.abs(c1 - c0) <= 1;
    }
    return false;
  }
}`}
      />
      <PracticeExercise
        prompt="¿Cuándo tendría sentido usar chess.js en lugar de escribir todas las reglas a mano?"
        hints={["Jaque, mate, enroque, captura al paso", "Ya dominas modelo-vista-controlador con reglas simples"]}
        expectedKeywords={["jaque", "reglas", "completas", "motor"]}
        successMessage="Correcto. chess.js aporta reglas completas cuando tu capa DOM ya funciona; la validación manual enseña más JS en el MVP."
      />
    </section>
  );
}
