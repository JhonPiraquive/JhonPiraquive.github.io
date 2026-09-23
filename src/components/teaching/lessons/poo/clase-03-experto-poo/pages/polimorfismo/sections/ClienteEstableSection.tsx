import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ClienteEstableSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cliente estable: la prueba del polimorfismo"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"El beneficio en una frase"}</h3>
      <p className="my-4">
        {
          "El polimorfismo vale cuando Checkout, la caja o el bucle de descuentos no se reabren cada vez que llega Nequi o un nuevo tipo de producto. Main (o la raíz de composición) elige implementaciones; el dominio solo conoce contratos y bases abstractas."
        }
      </p>
      <CompareTable
        headers={["Situación", "switch / is por tipo", "Polimorfismo"]}
        rows={[
          ["Nueva pasarela", "Editar Checkout", "PasarelaNequi : IPasarelaPago"],
          ["Nuevo descuento", "Editar caja", "Nueva clase : Producto"],
          ["Tests", "Combinar todas las ramas", "Mock del contrato"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Extensión: Nequi sin tocar Checkout"}</h3>
      <CodeFiddle
        language="csharp"
        code={`public class PasarelaNequi : IPasarelaPago
{
    public string Nombre => "Nequi";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

var checkoutNequi = new Checkout(new PasarelaNequi());
checkoutNequi.Pagar(50);`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo no forzar polimorfismo"}</h3>
      <p className="my-4">
        {
          "Un solo método de pago sin variación prevista no necesita IPasarelaPago todavía. Jerarquías donde las hijas no cumplen el mismo contrato tampoco — ahí el foreach «uniforme» es una trampa."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comprueba"}</h3>
      <PracticeExercise
        prompt="¿Por qué List<Producto> admite Libro y Gadget, pero List<Libro> no admite Gadget polimórficamente?"
        hints={[
          "List<Producto> es el tipo del contrato de catálogo",
          "Libro y Gadget son sustituibles como Producto",
          "List<Libro> fija el concreto",
        ]}
        expectedKeywords={["base", "derivada", "sustituibilidad"]}
        successMessage="Correcto. Colecciona contra el contrato o la base, no contra un concreto."
      />
    </section>
  );
}
