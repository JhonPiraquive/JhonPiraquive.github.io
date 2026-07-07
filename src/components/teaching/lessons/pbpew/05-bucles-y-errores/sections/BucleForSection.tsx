import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function BucleForSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"El bucle for: repetición con contador conocido"}
      </h2>
      <p className="my-4">
        {
          "El bucle for es ideal cuando conoces cuántas veces repetir o tienes un rango claro (contador de 0 a N, recorrer índices)."
        }
      </p>
      <p className="my-4 font-semibold">{"Sintaxis clásica:"}</p>
      <CodeFiddle
        language="javascript"
        code={`for (inicialización; condición; actualización) {
  // cuerpo — se ejecuta mientras la condición sea verdadera
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Partes del bucle for"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>{"Inicialización"}</strong>{" — suele declarar el contador (`let i = 0`)."}
        </li>
        <li>
          <strong>{"Condición"}</strong>{" — se evalúa antes de cada iteración; si es falsa, el bucle termina."}
        </li>
        <li>
          <strong>{"Actualización"}</strong>{" — se ejecuta al final de cada iteración (`i++`, `i += 2`)."}
        </li>
      </ol>
      <StepReveal
        title="Anatomía del bucle for"
        steps={[
          {
            title: "1. Inicialización",
            content: "Se ejecuta una sola vez al entrar al bucle. Ejemplo: let i = 0.",
          },
          {
            title: "2. Evaluar condición",
            content:
              "Antes de cada iteración se comprueba la condición (p. ej. i < 5). Si es falsa, el bucle termina.",
          },
          {
            title: "3. Ejecutar cuerpo",
            content: "Si la condición es verdadera, se ejecuta el bloque entre llaves.",
          },
          {
            title: "4. Actualización",
            content: "Al final de la iteración se ejecuta la actualización (p. ej. i++). Luego vuelve al paso 2.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TD
  start([Inicio for]) --> init["inicialización: let i = 0"]
  init --> cond{"¿i < límite?"}
  cond -->|Sí| body["ejecutar cuerpo"]
  body --> update["actualización: i++"]
  update --> cond
  cond -->|No| end([Fin del bucle])`}
      />
      <CodeFiddle
        language="javascript"
        code={`for (let i = 0; i < 3; i++) {
  console.log("iteración", i);
}
// 0, 1, 2`}
      />
      <p className="my-4 font-semibold">{"Patrón acumulador"}</p>
      <p className="my-4">{"Sumar valores en un bucle:"}</p>
      <CodeFiddle
        language="javascript"
        code={`let suma = 0;
for (let i = 1; i <= 5; i++) {
  suma += i;
}
console.log(suma); // 15`}
      />
      <Callout title="Error frecuente">
        {
          "Al indexar arrays usa i < array.length, no i <= array.length. El último índice válido es length - 1; un índice extra devuelve undefined (preview lección 7)."
        }
      </Callout>
      <PracticeExercise
        prompt="¿Cuándo elegirías for en lugar de while? Responde con un ejemplo concreto (rango, contador o número fijo de iteraciones)."
        hints={["Piensa en cuántas vueltas conoces de antemano", "Contador let i = 0; i < N; i++"]}
        expectedKeywords={["rango", "contador", "iteraciones", "conocido"]}
        successMessage="Correcto. for encaja cuando el número de repeticiones o el rango están definidos (p. ej. imprimir pares del 0 al 8, sumar del 1 al 5)."
      />
    </section>
  );
}
