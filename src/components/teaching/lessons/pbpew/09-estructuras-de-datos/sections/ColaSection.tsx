import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ColaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cola (FIFO) en JavaScript"}</h2>
      <p className="my-4">
        <strong>{"FIFO"}</strong>
        {" = First In, First Out. El primero en entrar es el primero en salir. Metáfora: "}
        <strong>{"fila en el banco"}</strong>
        {"."}
      </p>
      <p className="my-4">
        {
          "Con un array (patrón didáctico PBPEW): push al final para encolar; shift al inicio para desencolar. `shift` en arrays muy grandes puede ser costoso en tiempo; en producción a veces se usan índices o estructuras dedicadas."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart LR
  subgraph cola [Cola — FIFO]
    IN["push ticket1"] --> IN2["push ticket2"]
    IN2 --> OUT["shift → ticket1"]
    OUT --> REST["queda ticket2"]
  end`}
      />
      <CodeFiddle
        language="javascript"
        code={`const cola = [];
cola.push("ticket1");
cola.push("ticket2");
cola.push("ticket3");

console.log(cola.shift()); // "ticket1" — primero en entrar
console.log(cola.shift()); // "ticket2"
console.log(cola); // ["ticket3"]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Misma secuencia, distinto patrón"}</h3>
      <CodeFiddle
        language="javascript"
        code={`const elementos = ["x", "y", "z"];

const pila = [...elementos];
console.log(pila.pop()); // "z" — LIFO

const cola = [...elementos];
console.log(cola.shift()); // "x" — FIFO`}
      />
      <Callout title="Caso real: cola de tickets al revés">
        {
          "Un equipo modela tickets con push + pop pensando en «el más reciente primero». Los clientes que esperan desde ayer nunca son atendidos. El bug es de patrón: implementaron una pila donde el negocio exige cola FIFO (push + shift). Elige la estructura según la regla de negocio, no según el método que recuerdes primero."
        }
      </Callout>
      <p className="my-4">
        {"El mismo array admite ambos patrones; lo que cambia es qué extremo usas al sacar:"}
      </p>
      <CompareTable
        headers={["Patrón", "Entrada", "Salida", "Métodos típicos", "Ejemplo mental"]}
        rows={[
          ["Pila LIFO", "push (final)", "pop (final)", "push / pop", "Deshacer en editor"],
          ["Cola FIFO", "push (final)", "shift (inicio)", "push / shift", "Tickets de soporte"],
        ]}
      />
      <PracticeExercise
        prompt="Explica con tus palabras la diferencia entre LIFO y FIFO usando la metáfora de platos (pila) vs fila del banco (cola)."
        hints={["LIFO: último en entrar, primero en salir", "FIFO: primero en entrar, primero en salir"]}
        expectedKeywords={["último", "primero", "LIFO", "FIFO"]}
        successMessage="Correcto. Pila = último apilado sale primero; cola = quien llegó primero es atendido primero."
      />
    </section>
  );
}
