import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function BucleDoWhileSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"El bucle do...while: garantizar al menos una ejecución"}
      </h2>
      <p className="my-4">
        {
          "El bucle do...while evalúa la condición después del cuerpo. Garantiza al menos una ejecución aunque la condición sea falsa al principio — útil en menús o acciones que deben correr al menos una vez (pedir contraseña y reintentar)."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`let k = 0;
do {
  console.log("al menos una vez", k);
  k++;
} while (k < 0); // condición falsa, pero el cuerpo ya corrió una vez`}
      />
      <CompareTable
        headers={["Bucle", "Cuándo", "Condición se evalúa", "Mínimo de ejecuciones"]}
        rows={[
          ["for", "Rango o contador conocido", "Antes de cada iteración", "0 si condición inicial es falsa"],
          ["while", 'Condición abierta ("hasta que…")', "Antes de cada iteración", "0"],
          ["do...while", "Al menos una ejecución necesaria", "Después del cuerpo", "1"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TD
  Q1{¿Número de iteraciones conocido?}
  Q1 -->|Sí| FOR[for]
  Q1 -->|No| Q2{¿Debe ejecutarse al menos 1 vez?}
  Q2 -->|Sí| DO[do...while]
  Q2 -->|No| WH[while]`}
      />
      <PracticeExercise
        prompt="¿Qué garantiza do...while que while no garantiza? Da un escenario de UI donde importe."
        hints={["¿Cuándo se evalúa la condición?", "Menús, formularios que deben mostrarse al menos una vez"]}
        expectedKeywords={["al menos", "una vez", "después"]}
        successMessage="Correcto. do...while ejecuta el cuerpo mínimo una vez antes de comprobar la condición; while puede no ejecutarse nunca si la condición es falsa al inicio."
      />
    </section>
  );
}
