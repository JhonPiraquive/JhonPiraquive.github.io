import { Callout } from "@/components/teaching/Callout";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto capstone — Tienda Andes"}
      </h2>
      <p className="my-4">
        {
          "Entregable único del módulo POO. Los retos de páginas anteriores son borradores; aquí juntas diagrama, C# y checklist con evidencia."
        }
      </p>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>
          {
            "Parte del diagrama de Clase 2: añade IPasarelaPago, IRepositorioPedidos e INotificador donde haya variación real."
          }
        </li>
        <li>
          {
            "Refactoriza TiendaMonolito (≤ ~40 líneas mezcladas) hacia dominio + contratos; Main compone implementaciones."
          }
        </li>
        <li>
          {
            "Entrega: Mermaid (dominio → abstracciones ← infra) + checklist SRP/OCP/LSP/ISP/DIP con ✓/✗ y una frase de evidencia por ítem."
          }
        </li>
      </ol>
      <Callout title="Criterio de éxito" variant="callout-info">
        <p className="mb-0">
          {
            "Un compañero cambia la pasarela en Main sin tocar Pedido; el checklist nombra al menos una violación LSP o DIP que evitaste (por ejemplo Gadget que no lanza en descuento, o dominio sin new Sql)."
          }
        </p>
      </Callout>
    </section>
  );
}
