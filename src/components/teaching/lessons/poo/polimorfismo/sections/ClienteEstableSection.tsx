import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ClienteEstableSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cliente estable y extensión"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Extender = nueva clase; no editar cliente (preview abierto/cerrado)."}</li>
        <li>{"Anti-patrón: switch o is por tipo en el cliente."}</li>
        <li>{"Sustituibilidad (LSP preview): cada implementación cumple el contrato."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — ClienteEstable"
        chart={`mindmap
  root((ClienteEstable))
    Extender sin editar cliente
    Anti-patron switch por tipo
    Sustituibilidad LSP`}
      />
      <MermaidDiagram
        title="Checkout depende del contrato IPasarelaPago"
        description="Diagrama de clases: cliente estable con implementaciones intercambiables"
        chart={`classDiagram
  class IPasarelaPago {
    <<interface>>
    +Cobrar(monto)
  }
  class Checkout {
    -pasarela IPasarelaPago
    +Pagar()
  }
  class PagoTarjeta {
    +Cobrar(monto)
  }
  class PagoTransferencia {
    +Cobrar(monto)
  }
  IPasarelaPago <|.. PagoTarjeta
  IPasarelaPago <|.. PagoTransferencia
  Checkout --> IPasarelaPago
`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El beneficio central del polimorfismo es un cliente estable: Checkout, Factura.TotalImpuestos() o un foreach no cambian al añadir variantes. La composición raíz (Main o DI) instancia las concretas."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparación: if por tipo vs polimorfismo"}</h3>
      <CompareTable
        headers={["Aspecto", "switch / is en cliente", "Polimorfismo"]}
        rows={[
          ["Nueva variante", "Editar cliente", "Nueva clase"],
          ["Acoplamiento", "Alto", "Bajo (contrato)"],
          ["Legibilidad del bucle", "Ramas crecientes", "Una llamada uniforme"],
          ["Tests", "Combinar todas las ramas", "Mock del contrato"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo NO polimorfizar"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Un solo caso sin variación prevista."}</li>
        <li>{"Jerarquías que no comparten intención real."}</li>
        <li>{"Métodos con mismo nombre pero sin relación de contrato (no es polimorfismo de diseño)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Extensión demostrada"}</h3>
      <CodeFiddle
        language="csharp"
        code={`// Después de tener Checkout funcionando — sin editar Checkout:
public class PasarelaNequi : IPasarelaPago
{
    public string Nombre => "Nequi";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

var checkoutNequi = new Checkout(new PasarelaNequi());
checkoutNequi.Pagar(50);`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Casting innecesario (PasarelaTarjeta)pasarela — señal de contrato incompleto."}</li>
        <li>{"Asumir que el compilador elige por variable — el objeto decide en runtime."}</li>
        <li>{"Mezclar overload con override — temas distintos (lección override-y-sobrecarga)."}</li>
      </ul>
      <PracticeExercise
        prompt="Explica por qué List<Impuesto> puede contener Iva e ImpuestoCero pero List<Iva> no puede contener ImpuestoCero polimórficamente."
        hints={[
          "List<Impuesto> es tipo base del contrato",
          "Iva e ImpuestoCero son derivadas sustituibles",
          "List<Iva> solo admite instancias de Iva o sus hijas",
        ]}
        expectedKeywords={["base", "derivada", "sustituibilidad"]}
        successMessage="Correcto. La lista del tipo contrato/base admite todas las implementaciones compatibles."
      />
    </section>
  );
}
