import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PilaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Pila (LIFO) en JavaScript"}</h2>
      <p className="my-4">
        <strong>{"LIFO"}</strong>
        {" = Last In, First Out. El último elemento insertado es el primero en salir. Metáfora: "}
        <strong>{"pila de platos"}</strong>
        {"."}
      </p>
      <p className="my-4">
        {
          "Con un array: push añade al final; pop quita y devuelve el último. Operaciones O(1) en la práctica para el final del array."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart TB
  subgraph pila [Pila — LIFO]
    E1["push 'A'"] --> E2["push 'B'"]
    E2 --> E3["push 'C'"]
    E3 --> S1["pop → 'C'"]
    S1 --> S2["pop → 'B'"]
  end`}
      />
      <CodeFiddle
        language="javascript"
        code={`const pila = [];
pila.push("A");
pila.push("B");
pila.push("C");

console.log(pila.pop()); // "C" — último en entrar
console.log(pila.pop()); // "B"
console.log(pila.length); // 1`}
      />
      <p className="my-4">
        <strong>{"Caso de uso:"}</strong>{" historial «deshacer» en un editor — la última acción es la primera en revertirse."}
      </p>
      <Callout title="Error frecuente">
        {
          "Pensar que pop saca el primero. En una pila LIFO, pop saca el último que entró con push. Si necesitas FIFO — primero en entrar, primero en salir — no uses pop en la cola de atención."
        }
      </Callout>
      <CodeChallenge
        title="Completa la pila — historial de acciones"
        template={`const historial = [];
historial.{{blank1}}("borrador");
historial.{{blank2}}("guardado");
console.log(historial.{{blank3}}()); // "guardado"`}
        blanks={[
          { id: "blank1", answer: "push", placeholder: "apilar" },
          { id: "blank2", answer: "push", placeholder: "apilar" },
          { id: "blank3", answer: "pop", placeholder: "desapilar" },
        ]}
      />
    </section>
  );
}
