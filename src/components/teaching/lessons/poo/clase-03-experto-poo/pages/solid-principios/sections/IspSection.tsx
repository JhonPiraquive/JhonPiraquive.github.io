import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const INTERFACES_SEGREGADAS = `public interface IImpresora
{
    void Imprimir(string texto);
}

public interface IEscaner
{
    void Escanear();
}

public class ImpresoraBasica : IImpresora
{
    public void Imprimir(string texto) => Console.WriteLine(texto);
}

public class ImpresoraTodoEnUno : IImpresora, IEscaner
{
    public void Imprimir(string texto) => Console.WriteLine(texto);
    public void Escanear() => Console.WriteLine("Escaneando...");
}`;

export function IspSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"I — Segregación de interfaces (ISP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Interfaces pequeñas y específicas por rol."}</li>
        <li>{"No forzar a implementar métodos que la clase no usa."}</li>
        <li>{"Dividir interfaz \"comodín\" en contratos enfocados."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-patrón: interfaz hinchada"}</h3>
      <p className="my-4">
        {
          "Una IImpresoraMultiuso con fax obliga a impresora básica a métodos vacíos o NotImplementedException."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Interfaces segregadas"}</h3>
      <CodeFiddle language="csharp" code={INTERFACES_SEGREGADAS} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama ISP"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class IImpresora {
    <<interface>>
    +Imprimir(string texto)
  }
  class IEscaner {
    <<interface>>
    +Escanear()
  }
  IImpresora <|.. ImpresoraBasica
  IImpresora <|.. ImpresoraTodoEnUno
  IEscaner <|.. ImpresoraTodoEnUno`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Interfaz gigante \"por si acaso\"."}</li>
        <li>{"Implementaciones con métodos vacíos — señal de ISP violado."}</li>
        <li>{"Confundir ISP con \"una interfaz por método\"."}</li>
      </ul>
    </section>
  );
}
