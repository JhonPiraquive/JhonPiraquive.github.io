import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const DOMINIO_INFRA_CODE = `public interface IRepositorioPedidos
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
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Modularidad"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Organizar el sistema en módulos con propósito claro, API definida y límites."}</li>
        <li>{"Módulo ≠ carpeta vacía — requiere dependencias controladas."}</li>
        <li>{"API pública (IRepositorioPedidos) oculta detalles (RepositorioSql)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Modularidad divide el sistema en piezas intercambiables. El dominio expone contratos; la infraestructura implementa. Cambiar RepositorioPedidosMemoria por RepositorioPedidosSql sin tocar ServicioPedidos es modularidad + DIP."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: dominio separado de infraestructura"}</h3>
      <CodeFiddle language="csharp" code={DOMINIO_INFRA_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Módulos dominio ↔ infra"}</h3>
      <MermaidDiagram
        chart={`flowchart LR
  Dominio[ModuloDominio\\nServicioPedidos] -->|contrato| Repo[IRepositorioPedidos]
  Infra[ModuloInfraestructura] -->|implementa| Repo
  Infra --> Sql[RepositorioPedidosSql]
  Infra --> Mem[RepositorioPedidosMemoria]`}
      />
      <StepReveal
        title="Sustituir implementación sin tocar dominio"
        steps={[
          {
            title: "ServicioPedidos depende de IRepositorioPedidos",
            content: "El dominio solo conoce el contrato, no SQL ni memoria.",
          },
          {
            title: "Main usa RepositorioPedidosMemoria",
            content: "Composición raíz elige implementación para desarrollo o tests.",
          },
          {
            title: "Se cambia a RepositorioPedidosSql en Main",
            content: "Solo el borde de la aplicación cambia la instancia concreta.",
          },
          {
            title: "ServicioPedidos sin modificaciones",
            content: "Modularidad real: cambio aislado gracias al contrato.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: migración de persistencia"}</h3>
      <p className="my-4">
        {
          "Un equipo sustituyó almacenamiento en memoria por SQL en producción cambiando solo la línea de composición en Main. ServicioPedidos y tests de dominio permanecieron intactos."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Muchas carpetas sin límites — Services/, Helpers/ que todo importa todo."}</li>
        <li>{"Módulo que filtra detalles — strings de conexión SQL en dominio."}</li>
        <li>{"Refactor cosmético — mover archivos sin interfaces ni responsabilidades claras."}</li>
      </ul>
    </section>
  );
}
