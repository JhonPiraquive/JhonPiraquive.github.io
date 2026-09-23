import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const PEDIDO_CODE = `using System;

public class Pedido
{
    public string Id { get; }
    public string Estado { get; private set; }

    public Pedido(string id)
    {
        if (string.IsNullOrWhiteSpace(id))
            throw new ArgumentException("Id requerido");
        Id = id;
        Estado = "Creado";
    }

    public void Pagar()
    {
        if (Estado != "Creado")
            throw new InvalidOperationException("Solo se paga un pedido creado");
        Estado = "Pagado";
    }
}`;

export function QueEsUnConstructorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"El constructor: nacer en buen estado"}
      </h2>
      <p className="my-4">
        {
          "Cuando un pedido de Tienda Andes aparece en el sistema, no debería nacer “a medias”: sin id, con estado null, o ya marcado como pagado sin pasar por el flujo. El constructor es el método especial que corre al hacer new y deja el objeto listo."
        }
      </p>
      <p className="my-4">
        {
          "En C#, el constructor se llama igual que la clase, no declara tipo de retorno, y suele validar lo mínimo indispensable. Una invariante — regla que siempre debe cumplirse — puede ser: “todo Pedido tiene Id no vacío y Estado inicial Creado”."
        }
      </p>
      <CodeFiddle language="csharp" code={PEDIDO_CODE} />
      <MermaidDiagram
        chart={`flowchart TD
  New["new Pedido(id)"] --> Ctor["Constructor valida + inicializa"]
  Ctor --> Ready["Objeto listo\nEstado = Creado"]`}
      />
      <Callout title="Anti-patrón que verás en proyectos reales">
        {
          "Constructor vacío + una lluvia de setters desde otro lado. El pedido queda sin Id o con Estado raro. Mejor: exigir lo esencial al crear y cambiar el estado solo con métodos de dominio (Pagar, Cancelar)."
        }
      </Callout>
      <p className="my-4">
        {
          "No pongas en el constructor llamadas pesadas a red o base de datos. Crear un objeto debería ser barato y predecible; la I/O vive en servicios que usan el objeto."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Convenciones C# que usaremos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Proyecto consola: dotnet new console"}</li>
        <li>{"PascalCase en clases y métodos públicos"}</li>
        <li>{"camelCase en variables locales y parámetros"}</li>
        <li>{"new para instanciar; { get; private set; } para proteger estado"}</li>
      </ul>
      <PracticeExercise
        prompt='Prueba mental: new Pedido("") debe fallar. new Pedido("P-1") + Pagar() dos veces: la segunda falla. ¿Qué regla protege el constructor y cuál el método Pagar?'
        hints={["Constructor: Id", "Pagar: transición de estado"]}
        expectedKeywords={["Id", "Creado", "Pagado", "estado"]}
        successMessage="El constructor garantiza Id y Estado=Creado; Pagar solo permite la transición Creado→Pagado una vez."
      />
    </section>
  );
}