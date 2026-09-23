import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const SERVICIO_REPOSITORIO_DIP = `using System.Collections.Generic;

public interface IRepositorioPedidos
{
    void Guardar(string pedidoId);
}

public class RepositorioPedidosSql : IRepositorioPedidos
{
    public void Guardar(string pedidoId) => Console.WriteLine($"SQL: INSERT {pedidoId}");
}

public class RepositorioPedidosMemoria : IRepositorioPedidos
{
    private readonly List<string> _ids = new();
    public void Guardar(string pedidoId) => _ids.Add(pedidoId);
}

public class ServicioPedidos
{
    private readonly IRepositorioPedidos _repo;

    public ServicioPedidos(IRepositorioPedidos repo) => _repo = repo;

    public void Confirmar(string pedidoId)
    {
        _repo.Guardar(pedidoId);
        Console.WriteLine("Pedido confirmado");
    }
}`;

export function DipSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"D — Depender de abstracciones (DIP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"El dominio no elige SQL"}</h3>
      <p className="my-4">
        {
          "DIP (Dependency Inversion Principle) invierte la flecha: ServicioPedidos (alto nivel) define qué necesita — IRepositorioPedidos — y la infraestructura (SQL, memoria) implementa. Main conecta piezas."
        }
      </p>
      <CodeFiddle language="csharp" code={SERVICIO_REPOSITORIO_DIP} />
      <MermaidDiagram
        chart={`classDiagram
  class IRepositorioPedidos {
    <<interface>>
    +Guardar(string pedidoId)
  }
  ServicioPedidos --> IRepositorioPedidos : depende_de
  IRepositorioPedidos <|.. RepositorioPedidosSql
  IRepositorioPedidos <|.. RepositorioPedidosMemoria`}
      />
      <Callout title="DIP ≠ «solo agregar interfaz»" variant="callout-warning">
        <p className="mb-0">
          {
            "Crear IRepositorioPedidos y seguir haciendo new RepositorioPedidosSql() dentro de ServicioPedidos no invierte nada. DIP exige que el alto nivel no conozca el concreto; la interfaz debe representar una necesidad real del dominio y el concreto vive en el borde (Main, DI)."
          }
        </p>
      </Callout>
      <PracticeExercise
        prompt="Usa ServicioPedidos con RepositorioPedidosMemoria en Main. ¿Qué archivo NO deberías editar al cambiar a SQL?"
        hints={[
          "ServicioPedidos solo ve IRepositorioPedidos",
          "Main elige implementación",
          "Dominio sin strings de conexión",
        ]}
        expectedKeywords={["ServicioPedidos", "Main", "IRepositorioPedidos"]}
        successMessage="Correcto. Flecha hacia abstracciones; concreto intercambiable en el borde."
      />
    </section>
  );
}
