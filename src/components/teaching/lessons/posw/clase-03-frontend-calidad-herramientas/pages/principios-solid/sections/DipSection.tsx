import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const DIP_CSHARP = `public interface IProductoRepository
{
    Task GuardarAsync(Producto producto);
    Task<Producto?> BuscarPorIdAsync(int id);
}

public class ProductoService
{
    private readonly IProductoRepository _repo;

    public ProductoService(IProductoRepository repo) => _repo = repo;

    public async Task CrearAsync(Producto datos)
    {
        await _repo.GuardarAsync(datos);
    }
}

// Composición en Program.cs / Startup
// services.AddScoped<IProductoRepository, MySqlProductoRepository>();`;

export function DipSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DIP: depender de abstracciones, no de concreciones"}
      </h2>
      <p className="my-4">
        {
          "Las capas altas dependen de abstracciones; las concreciones se eligen al componer la app (inyección de dependencias)."
        }
      </p>
      <CodeFiddle language="csharp" title="ProductoService con IProductoRepository" code={DIP_CSHARP} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Capas con DIP"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  C[Controller HTTP] --> S[ProductoService]
  S --> I[IProductoRepository]
  I --> M[MySQLProductoRepository]
  I --> G[MongoProductoRepository]
  M --> DB[(PostgreSQL)]
  G --> MG[(MongoDB)]`}
      />
      <Callout title="Caso real: ProductoService acoplado a MySQL">
        {
          "ProductoService hace new MySQLProductoRepository(). El cliente exige MongoDB para catálogo flexible y el equipo duplica el servicio. Decisión: IProductoRepository inyectado; mismos tests con mock; cambio de motor solo en composición raíz."
        }
      </Callout>
    </section>
  );
}
