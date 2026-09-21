import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function PolimorfismoInterfacesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Polimorfismo con interfaces"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Polimorfismo = invocación uniforme; dispatch según tipo real."}</li>
        <li>{"Variable IPasarelaPago apunta a implementaciones intercambiables."}</li>
        <li>{"El cliente (Checkout) solo conoce el contrato."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Polimorfismo significa que una misma llamada (Pagar, Cobrar) ejecuta comportamiento distinto según la implementación concreta del objeto, aunque la variable sea del tipo contrato (IPasarelaPago)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de polimorfismo con interfaz"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Cliente recibe contrato por constructor; no instancia concretos internamente."}</li>
        <li>{"Nuevas pasarelas = nueva clase; Checkout no cambia."}</li>
        <li>{"Lista List<Checkout> procesable en bucle uniforme."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: pasarelas de pago"}</h3>
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
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Lista polimórfica de checkouts"}</h3>
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
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Llamada polimórfica paso a paso"}</h3>
      <StepReveal
        title="Checkout.Pagar en runtime"
        steps={[
          {
            title: "Checkout guarda contrato",
            content: "Checkout almacena IPasarelaPago inyectada en el constructor.",
          },
          {
            title: "Cliente llama Pagar",
            content: "checkout.Pagar(100) — firma uniforme para todos los checkouts.",
          },
          {
            title: "Delegación",
            content: "Pagar delega en _pasarela.Cobrar(100) del contrato.",
          },
          {
            title: "Dispatch runtime",
            content: "El runtime resuelve Tarjeta, Transferencia o Efectivo según el objeto real.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: checkout multi-pasarela"}</h3>
      <p className="my-4">
        {
          "Un SaaS mantenía switch(metodoPago) de 400 líneas. Cada integración rompía tests. Con IPasarelaPago, nuevos métodos = nueva clase + registro; Checkout intacto."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama: flujo Checkout → IPasarelaPago"}</h3>
      <MermaidDiagram
        chart={`flowchart LR
  Cliente[Checkout.Pagar] --> Contrato[IPasarelaPago.Cobrar]
  Contrato --> Tarjeta[PasarelaTarjeta]
  Contrato --> Transfer[PasarelaTransferencia]
  Contrato --> Efectivo[PasarelaEfectivo]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"if (pasarela is PasarelaTarjeta) en Checkout — anula el beneficio."}</li>
        <li>{"List<PasarelaTarjeta> en lugar de List<IPasarelaPago>."}</li>
      </ul>
      <CodeChallenge
        title="Completa el checkout polimórfico"
        template="public void Pagar(decimal monto) => {{b1}}.Cobrar(monto);"
        blanks={[
          { id: "b1", answer: "_pasarela", placeholder: "Campo readonly del contrato inyectado" },
        ]}
      />
    </section>
  );
}
