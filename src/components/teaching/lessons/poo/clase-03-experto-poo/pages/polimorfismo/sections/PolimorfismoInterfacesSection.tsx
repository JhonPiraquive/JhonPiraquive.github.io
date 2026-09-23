import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function PolimorfismoInterfacesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Polimorfismo con interfaces: un checkout, muchas pasarelas"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Misma firma, distinto banco"}</h3>
      <p className="my-4">
        {
          "Polimorfismo significa que una misma llamada — por ejemplo Cobrar(monto) — ejecuta lógica distinta según el objeto real, aunque la variable sea del tipo contrato IPasarelaPago. El compilador conoce la interfaz; en runtime el objeto concreto decide."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"C#: Checkout y pasarelas"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;
using System.Collections.Generic;

public interface IPasarelaPago
{
    string Nombre { get; }
    void Cobrar(decimal monto);
}

public class PasarelaTarjeta : IPasarelaPago
{
    public string Nombre => "Tarjeta";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

public class PasarelaTransferencia : IPasarelaPago
{
    public string Nombre => "Transferencia";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

public class PasarelaEfectivo : IPasarelaPago
{
    public string Nombre => "Efectivo";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

public class Checkout
{
    private readonly IPasarelaPago _pasarela;

    public Checkout(IPasarelaPago pasarela) => _pasarela = pasarela;

    public void Pagar(decimal monto) => _pasarela.Cobrar(monto);
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Lista de checkouts, un solo bucle"}</h3>
      <CodeFiddle
        language="csharp"
        code={`var checkouts = new List<Checkout>
{
    new Checkout(new PasarelaTarjeta()),
    new Checkout(new PasarelaTransferencia()),
    new Checkout(new PasarelaEfectivo())
};

foreach (var c in checkouts)
    c.Pagar(100);`}
      />
      <StepReveal
        title="Qué pasa en runtime"
        steps={[
          { title: "Referencia al contrato", content: "Checkout guarda IPasarelaPago inyectada." },
          { title: "Llamada uniforme", content: "checkout.Pagar(100) — misma línea para todos." },
          { title: "Delegación", content: "Pagar llama _pasarela.Cobrar(100)." },
          { title: "Dispatch", content: "El runtime elige Tarjeta, Transferencia o Efectivo según la instancia real." },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Error que anula el beneficio"}</h3>
      <p className="my-4">
        {
          "Meter if (_pasarela is PasarelaTarjeta) dentro de Checkout devuelve el switch que IPasarelaPago debía eliminar. El polimorfismo pide confiar en el contrato."
        }
      </p>
      <CodeChallenge
        title="Completa el checkout"
        template="public void Pagar(decimal monto) => {{b1}}.Cobrar(monto);"
        blanks={[
          { id: "b1", answer: "_pasarela", placeholder: "Campo readonly del contrato inyectado" },
        ]}
      />
    </section>
  );
}
