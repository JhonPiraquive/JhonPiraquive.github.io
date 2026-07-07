import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function AbstraccionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Abstracción: contrato y desacoplamiento"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Abstracción = enfocarse en lo esencial y ocultar detalles accidentales."}</li>
        <li>{"Contrato = define qué se puede hacer, no cómo."}</li>
        <li>{"El cliente depende del contrato, no de la implementación concreta."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Abstracción en Programación Orientada a Objetos (POO) significa programar contra un contrato (interfaz o clase base) en vez de una clase concreta. El consumidor no conoce si el pago es tarjeta o transferencia; solo llama Pagar(monto)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buena abstracción"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Hay al menos dos implementaciones reales o previstas."}</li>
        <li>{"El cliente (Caja, Checkout) no debe cambiar al añadir variantes."}</li>
        <li>{"Se reduce acoplamiento: nuevas clases en lugar de editar if/switch."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de abstracción prematura"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Crear IPersona, IPersonaRepository sin segunda implementación."}</li>
        <li>{"Interfaces gigantes que nadie implementa completa."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: IPago y Caja"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;

public interface IPago
{
    void Pagar(decimal monto);
}

public class PagoTarjeta : IPago
{
    public void Pagar(decimal monto) => Console.WriteLine($"Pagando {monto} con tarjeta");
}

public class PagoTransferencia : IPago
{
    public void Pagar(decimal monto) => Console.WriteLine($"Pagando {monto} por transferencia");
}

public class Caja
{
    private readonly IPago _pago;

    public Caja(IPago pago) => _pago = pago ?? throw new ArgumentNullException(nameof(pago));

    public void Cobrar(decimal monto) => _pago.Pagar(monto);
}`}
      />
      <StepReveal
        title="Nuevo método de pago"
        steps={[
          { title: "Cliente inicial", content: "`new Caja(new PagoTarjeta())` — `Caja` solo conoce `IPago`." },
          { title: "Nueva implementación", content: "Creas `PagoTransferencia : IPago` sin editar `Caja`." },
          { title: "Mismo Cobrar", content: "`caja.Cobrar(100)` delega en la implementación inyectada." },
          { title: "Salida distinta", content: "Cada `IPago` imprime su propio mensaje; el cliente no cambió." },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: pasarela de pagos"}</h3>
      <p className="my-4">
        {
          "Un checkout con if (tipo == \"tarjeta\") ... else if (tipo == \"transferencia\") obligaba a editar varios servicios por cada método nuevo. Bug en producción mezcló lógica de Nequi con tarjeta."
        }
      </p>
      <p className="my-4">
        <strong>{"Decisión:"}</strong>
        {" IPago con implementaciones por proveedor; Caja solo llama Pagar(monto)."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama: Caja depende de IPago"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class IPago {
    <<interface>>
    +Pagar(decimal monto)
  }
  class Caja {
    -IPago _pago
    +Cobrar(decimal monto)
  }
  Caja --> IPago : depende_de
  IPago <|.. PagoTarjeta
  IPago <|.. PagoTransferencia`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"El dominio Caja hace new PagoTarjeta() internamente en lugar de recibir IPago."}</li>
        <li>{"Abstraer “por si acaso” sin variación real."}</li>
      </ul>
      <CodeChallenge
        title="Completa la inyección"
        template="public Caja({{b1}} pago) => _pago = pago ?? throw new ArgumentNullException(nameof(pago));"
        blanks={[
          { id: "b1", answer: "IPago", placeholder: "Tipo del contrato que recibe el constructor" },
        ]}
      />
    </section>
  );
}
