import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function IfElseIfElseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Estructuras condicionales: if, else if y else"}
      </h2>
      <p className="my-4">
        {"La estructura `if` ejecuta un bloque solo si la condición es truthy."}
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"`else if`:"}</strong>{" prueba condiciones adicionales en orden; la primera truthy gana."}
        </li>
        <li>
          <strong>{"`else`:"}</strong>{" bloque por defecto cuando ninguna condición anterior fue truthy. Solo puede haber un `else` al final."}
        </li>
        <li>
          <strong>{"Bloques `{}`:"}</strong>{" aunque una sola línea puede ir sin llaves, en PBPEW y producción se recomiendan siempre llaves."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Validación antes de comparar rangos:"}</strong>
        {
          " tras `Number(prompt(\"...\"))`, comprueba `Number.isNaN(nota)` antes de evaluar `nota >= 3`."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart TD
  A[Evaluar condición 1] -->|truthy| B[Bloque if]
  A -->|falsy| C{¿Condición 2?}
  C -->|truthy| D[Bloque else if]
  C -->|falsy| E{¿Hay else?}
  E -->|sí| F[Bloque else]
  E -->|no| G[Continuar después del if]`}
      />
      <CodeFiddle
        language="javascript"
        code={`const nota = Number(prompt("Nota (0-5):"));

if (Number.isNaN(nota)) {
  console.log("No escribiste un número válido");
} else if (nota >= 3.0) {
  console.log("Aprobado");
} else {
  console.log("Debes mejorar");
}`}
      />
      <CodeFiddle
        language="javascript"
        code={`const temperatura = 15;

if (temperatura < 0) {
  console.log("hielo");
} else if (temperatura <= 30) {
  console.log("templado");
} else {
  console.log("calor");
}`}
      />
      <Callout title="Error frecuente">
        {
          "No confundas = con === en condiciones: if (x = 5) asigna y el valor asignado es truthy — casi siempre un bug. La condición debe comparar: if (x === 5)."
        }
      </Callout>
      <CodeChallenge
        title="Completa el código: validar usuario activo"
        template={`const usuario = { activo: true };

if (usuario {{blank1}} null {{blank2}} usuario.activo === {{blank3}}) {
  console.log("Bienvenido");
}`}
        blanks={[
          { id: "blank1", answer: "!==", placeholder: "comparación estricta" },
          { id: "blank2", answer: "&&", placeholder: "operador lógico" },
          { id: "blank3", answer: "true", placeholder: "boolean" },
        ]}
      />
      <PracticeExercise
        prompt='Escribe un if/else if/else que clasifique una variable temperatura (número): < 0 → "hielo", 0–30 → "templado", > 30 → "calor". Incluye la validación con Number.isNaN si la temperatura viene de prompt.'
        hints={["Primero valida Number.isNaN(temperatura)", "Usa else if para el rango medio", "Comparaciones con <, <=, >"]}
        expectedKeywords={["if", "else if", "temperatura", "Number.isNaN"]}
        successMessage="Correcto. Validar NaN primero evita mensajes confusos; los rangos se evalúan en orden con else if."
      />
    </section>
  );
}
