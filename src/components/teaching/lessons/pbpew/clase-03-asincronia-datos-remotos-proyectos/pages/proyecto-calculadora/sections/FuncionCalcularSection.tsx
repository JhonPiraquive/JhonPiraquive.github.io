import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function FuncionCalcularSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Función pura `calcular`"}</h2>
      <p className="my-4">
        {"El cálculo se separa del DOM. Se convierte con `parseFloat` solo al evaluar; en la fase de armar operando todo es string."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`function calcular(a, operador, b) {
  const x = parseFloat(a);
  const y = parseFloat(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return { ok: false, mensaje: "Error" };
  }
  if (operador === "/" && y === 0) {
    return { ok: false, mensaje: "División por cero" };
  }
  let resultado;
  switch (operador) {
    case "+":
      resultado = x + y;
      break;
    case "-":
      resultado = x - y;
      break;
    case "*":
      resultado = x * y;
      break;
    case "/":
      resultado = x / y;
      break;
    default:
      return { ok: false, mensaje: "Error" };
  }
  return { ok: true, valor: resultado };
}`}
      />
      <MermaidDiagram
        chart={`flowchart TD
  A["calcular(a, op, b)"] --> B{"NaN en a o b?"}
  B -->|Sí| E["ok: false, Error"]
  B -->|No| C{"op es / y b === 0?"}
  C -->|Sí| Z["ok: false, División por cero"]
  C -->|No| D["switch op → resultado"]
  D --> F["ok: true, valor"]`}
      />
    </section>
  );
}
