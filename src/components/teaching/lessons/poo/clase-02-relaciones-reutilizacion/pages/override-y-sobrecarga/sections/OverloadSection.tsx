import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const TOTAL_PEDIDO_CODE = `using System;
using System.Linq;

public class CalculadoraPedido
{
    public decimal Total(decimal precioUnitario, int cantidad)
        => precioUnitario * cantidad;

    public decimal Total(decimal precioUnitario, int cantidad, decimal descuentoPorcentaje)
    {
        var bruto = precioUnitario * cantidad;
        return bruto * (1 - descuentoPorcentaje / 100m);
    }

    public decimal Total(params decimal[] preciosLinea)
    {
        return preciosLinea.Sum();
    }
}`;

export function OverloadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Overload: un nombre, varias firmas"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Total del pedido de muchas formas"}</h3>
      <p className="my-4">
        {
          "En caja a veces sumas una línea (precio × cantidad), otras aplicas descuento del 10 %, otras sumas varios subtotales ya calculados. Sobrecarga (overload) permite varios métodos Total con el mismo nombre y parámetros distintos en la misma clase. No usa herencia: el compilador elige la firma al compilar."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Código"}</h3>
      <CodeFiddle language="csharp" code={TOTAL_PEDIDO_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Quién elige la firma"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  Call1["Total(49.99m, 2)"] --> PickA["Total(decimal, int)"]
  Call2["Total(49.99m, 2, 10m)"] --> PickB["Total(decimal, int, decimal)"]
  Call3["Total(10m, 20m, 5m)"] --> PickC["Total(params decimal[])"]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malentendido típico"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Sobrecargas con intenciones distintas (Total y Cancelar con el mismo nombre) confunden la API."}</li>
        <li>{"Demasiadas variantes — a veces conviene un objeto opciones."}</li>
        <li>{"Overload no es override: no hay jerarquía ni dispatch en runtime por tipo de objeto."}</li>
      </ul>
      <PracticeExercise
        prompt="Antes de ejecutar: ¿qué Total usa CalculadoraPedido para Total(15m, 25m, 40m)?"
        hints={[
          "Tres decimales no encajan en (decimal, int)",
          "params decimal[] agrupa los tres",
          "La decisión es en compile time",
        ]}
        expectedKeywords={["params", "decimal", "80"]}
        successMessage="Correcto. La variante params suma 15 + 25 + 40."
      />
    </section>
  );
}
