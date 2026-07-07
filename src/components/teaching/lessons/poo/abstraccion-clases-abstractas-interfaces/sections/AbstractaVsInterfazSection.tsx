import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function AbstractaVsInterfazSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Clase abstracta vs interfaz"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Abstracta cuando hay código y estado compartidos."}</li>
        <li>{"Interfaz cuando solo necesitas contrato y posible multi-rol."}</li>
        <li>{"Un tipo puede combinar ambos."}</li>
      </ul>
      <CompareTable
        headers={["Criterio", "Clase abstracta", "Interfaz"]}
        rows={[
          ["Instanciable con new", "No", "No (la interfaz sola)"],
          ["Estado / campos compartidos", "Sí", "No"],
          ["Código común en base", "Sí", "No (solo contrato)"],
          ["Múltiples roles por clase", "Una base", "Varias interfaces"],
          ["Caso típico", "Template Method", "Capacidad intercambiable"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo combinado: Documento + IFirmable"}</h3>
      <CodeFiddle
        language="csharp"
        code={`public interface IFirmable
{
    void Firmar();
}

public abstract class Documento
{
    public abstract void Validar();
    public void Archivar() => Console.WriteLine("Archivado.");
}

public class Contrato : Documento, IFirmable
{
    public override void Validar() => Console.WriteLine("Contrato válido.");
    public void Firmar() => Console.WriteLine("Firmado.");
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama: Documento abstracto + IFirmable"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class IFirmable {
    <<interface>>
    +Firmar()
  }
  class Documento {
    <<abstract>>
    +Validar()*
    +Archivar()
  }
  Documento <|-- Contrato
  IFirmable <|.. Contrato`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Criterio de decisión rápida"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Pagos intercambiables sin estado compartido:"}</strong>
          {" interfaz IPago."}
        </li>
        <li>
          <strong>{"Notificaciones con validación común:"}</strong>
          {" clase abstracta Notificacion."}
        </li>
        <li>
          <strong>{"Documento con validación variable + capacidad de firmar:"}</strong>
          {" abstracta + interfaz."}
        </li>
      </ul>
      <Callout title="Error frecuente">
        {
          "Duplicar el mismo contrato en interfaz y clase abstracta sin criterio. Elige según si necesitas estado/código compartido (abstracta) o solo capacidad intercambiable (interfaz)."
        }
      </Callout>
    </section>
  );
}
