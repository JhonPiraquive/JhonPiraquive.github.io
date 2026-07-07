import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena la evaluación de edad >= 18 && tieneTicket === true: (a) si el primer operando es falsy, && cortocircuita sin evaluar el segundo, (b) se evalúa edad >= 18, (c) si es truthy, se evalúa tieneTicket === true, (d) el resultado es true solo si ambos son truthy. ¿Cuál es el orden correcto?"
          hints={["Primero se evalúa la expresión izquierda de &&", "Cortocircuito solo si la izquierda es falsy"]}
          expectedKeywords={["b", "c", "cortocircuito", "&&"]}
          successMessage="Correcto. Orden: (b) edad >= 18 → si falsy (a) cortocircuita; si truthy (c) tieneTicket === true → (d) ambos truthy dan true."
        />
      </div>
      <div className="my-8">
        <CodeChallenge
          title="Completa el código: operadores aritméticos"
          template={`let puntos = 17;
console.log(puntos {{blank1}} 5);   // resto: 2
console.log(puntos {{blank2}} 2);   // potencia: 289`}
          blanks={[
            { id: "blank1", answer: "%", placeholder: "módulo" },
            { id: "blank2", answer: "**", placeholder: "potencia" },
          ]}
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Dibuja o describe el flujo de if (a) { ... } else if (b) { ... } else { ... } cuando a es falsy y b es truthy. ¿Qué bloque se ejecuta?"
          hints={["Se evalúan en orden", "La primera condición truthy gana"]}
          expectedKeywords={["else if", "b", "falsy", "truthy"]}
          successMessage="Correcto. a falsy → se salta el if; b truthy → se ejecuta el bloque else if; no se llega al else."
        />
      </div>
    </section>
  );
}
