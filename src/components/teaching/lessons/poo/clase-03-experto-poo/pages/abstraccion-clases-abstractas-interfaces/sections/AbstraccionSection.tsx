import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function AbstraccionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Abstracción: el checkout no debe conocer Nequi"}
      </h2>
      <p className="my-4">
        {
          "Abstracción, en POO (programación orientada a objetos), es enfocarte en lo esencial y ocultar detalles que pueden cambiar. En C# lo materializas con un contrato — una interfaz o una clase base abstracta — y el cliente solo conoce ese contrato."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Historia: cada método de pago rompía la caja"}</h3>
      <p className="my-4">
        {
          "En Tienda Andes la clase CajaDelDia empezó con un if (metodo == \"efectivo\"). Llegó tarjeta, transferencia y Nequi: cada uno añadió ramas en Caja, en Pedido y en un reporte. Un bug mezcló la lógica de Nequi con la de tarjeta porque el mismo switch se copió en tres archivos."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"La idea: contrato en lugar de clase concreta"}</h3>
      <p className="my-4">
        {
          "Con abstracción, la caja no pregunta «¿es Nequi?»; solo llama Pagar(monto). Quién implementa el cobro puede cambiar sin reescribir Caja."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"C# mínimo: IPago y Caja"}</h3>
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
        title="Registrar Nequi sin tocar Caja"
        steps={[
          { title: "Hoy", content: "`new Caja(new PagoTarjeta())` — `Caja` solo ve `IPago`." },
          { title: "Mañana", content: "Creas `PagoNequi : IPago`; `Caja` no se edita." },
          { title: "Misma llamada", content: "`caja.Cobrar(100)` delega en la implementación inyectada." },
          { title: "Comportamiento distinto", content: "Cada `IPago` imprime su mensaje; el cliente permanece igual." },
        ]}
      />
      <MermaidDiagram
        title="Caja depende del contrato, no del banco"
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
      <Callout title="Malentendido frecuente" variant="callout-warning">
        {
          "Abstracción no es «meter interfaces por si acaso». Si solo hay efectivo y no hay segunda implementación a la vista, IPago puede esperar. Abstrae cuando hay variación real y quieres que Caja (u otro cliente) no cambie cada trimestre."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comprueba en una frase"}</h3>
      <p className="my-4">
        {
          "¿Qué tipo debe recibir el constructor de Caja para que Nequi sea solo una clase nueva? Si respondiste el contrato de pago, vas bien."
        }
      </p>
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
