import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const INTERFACES_SEGREGADAS = `public interface IImpresoraTicket
{
    void Imprimir(string texto);
}

public interface IEscanerFactura
{
    void Escanear();
}

public class ImpresoraCaja : IImpresoraTicket
{
    public void Imprimir(string texto) => Console.WriteLine(texto);
}

public class MultifuncionalBodega : IImpresoraTicket, IEscanerFactura
{
    public void Imprimir(string texto) => Console.WriteLine(texto);
    public void Escanear() => Console.WriteLine("Escaneando factura proveedor...");
}`;

export function IspSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"I — Interfaces pequeñas (ISP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"La impresora de caja no escanea"}</h3>
      <p className="my-4">
        {
          "ISP (Interface Segregation Principle) evita que IEquipoDeTienda obligue a la impresora del mostrador a implementar Escanear con NotImplementedException. En Tienda Andes: contrato de ticket separado del contrato de bodega."
        }
      </p>
      <CodeFiddle language="csharp" code={INTERFACES_SEGREGADAS} />
      <MermaidDiagram
        chart={`classDiagram
  class IImpresoraTicket {
    <<interface>>
    +Imprimir(string texto)
  }
  class IEscanerFactura {
    <<interface>>
    +Escanear()
  }
  IImpresoraTicket <|.. ImpresoraCaja
  IImpresoraTicket <|.. MultifuncionalBodega
  IEscanerFactura <|.. MultifuncionalBodega`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señal de alerta"}</h3>
      <p className="my-4">
        {
          "Métodos vacíos o throw NotImplemented en implementaciones «simples» suelen gritar interfaz hinchada. Parte el contrato por rol real, no por «por si acaso»."
        }
      </p>
    </section>
  );
}
