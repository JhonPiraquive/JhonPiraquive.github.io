import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

const DOMINIO_INFRA_CODE = `using System.Collections.Generic;

public interface IRepositorioPedidos
{
    void Guardar(string pedidoId);
}

public class ServicioPedidos
{
    private readonly IRepositorioPedidos _repo;

    public ServicioPedidos(IRepositorioPedidos repo) => _repo = repo;

    public void Crear(string pedidoId) => _repo.Guardar(pedidoId);
}

public class RepositorioPedidosMemoria : IRepositorioPedidos
{
    private readonly List<string> _pedidos = new();
    public void Guardar(string pedidoId) => _pedidos.Add(pedidoId);
}

public class RepositorioPedidosSql : IRepositorioPedidos
{
    public void Guardar(string pedidoId)
        => Console.WriteLine($"SQL: INSERT pedido {pedidoId}");
}`;

export function ModularidadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Modularidad: dominio e infra con frontera clara"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Carpetas no bastan"}</h3>
      <p className="my-4">
        {
          "Modularidad es partir Tienda Andes en piezas con propósito y API (contratos). No es crear carpetas Services/ y Helpers/ si todo se importa mutuamente. El módulo de dominio expone IRepositorioPedidos; la infraestructura implementa Memoria o SQL."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"C#: cambiar persistencia en una línea de Main"}</h3>
      <CodeFiddle language="csharp" code={DOMINIO_INFRA_CODE} />
      <StepReveal
        title="De memoria a SQL sin tocar ServicioPedidos"
        steps={[
          { title: "Dominio", content: "ServicioPedidos solo conoce IRepositorioPedidos." },
          { title: "Desarrollo", content: "Main usa RepositorioPedidosMemoria." },
          { title: "Producción", content: "Main usa RepositorioPedidosSql." },
          { title: "Servicio intacto", content: "Modularidad + DIP: el cambio queda en el borde." },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Error típico"}</h3>
      <p className="my-4">
        {
          "Mover archivos sin contratos: el «módulo» sigue acoplado porque Pedido aún hace new RepositorioPedidosSql(). Refactor cosmético."
        }
      </p>
    </section>
  );
}
