import { DemoCalculadora } from "@/components/teaching/DemoCalculadora";

export function DemoCalculadoraSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Demo en vivo: prueba la calculadora"}
      </h2>
      <p className="my-4">
        {
          "Antes de escribir código, interactúa con la calculadora embebida. Observa cómo responde a operaciones normales, resultados encadenados y el caso `÷ 0`."
        }
      </p>
      <p className="my-4">
        <strong>{"Estados visibles:"}</strong>{" normal, resultado tras `=`, error (`División por cero`)."}
      </p>
      <DemoCalculadora
        ariaLive="polite"
        displayLabels={{ plus: "+", minus: "−", times: "×", divide: "÷" }}
        errorMessages={["División por cero", "Error"]}
        hint="Prueba 12 + 5 =, luego × 2 =, y finalmente 8 ÷ 0 ="
      />
    </section>
  );
}
