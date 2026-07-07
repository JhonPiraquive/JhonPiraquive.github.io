import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: modelo de pedidos"}
      </h2>
      <p className="my-4 font-semibold">{"Modelo de pedidos: de UML a diseño C#"}</p>
      <p className="my-4">
        {"Actividad de diseño (diagrama + breve mapeo a clases); implementación mínima opcional en consola."}
      </p>
      <p className="my-4 font-semibold">{"Parte A — Diagrama base"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Dibuja Cliente, Producto, LineaPedido, Pedido con atributos esenciales y métodos Total(), AgregarLinea, Subtotal()."
          }
        </li>
        <li>{"Relación Cliente → Pedido con cardinalidad 1 a 0..*."}</li>
        <li>{"Pedido → LineaPedido como composición 1..*."}</li>
        <li>{"LineaPedido → Producto como referencia (no composición al catálogo)."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Estado y decisión de diseño"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>{"Añade Estado a Pedido (Creado, Pagado, Enviado)."}</li>
        <li>{"En párrafo corto: ¿enum EstadoPedido o clase EstadoPedido? Justifica para este dominio."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Contrato de pago"}</p>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>{"Incluye <<interface>> IPasarelaPago con al menos dos implementaciones en el mismo diagrama."}</li>
        <li>{"Asocia Pedido o un Checkout con IPasarelaPago (flecha a interfaz, no a concreto)."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Validación"}</p>
      <ol className="my-4 list-decimal pl-6" start={9}>
        <li>
          {
            "Lista tres reglas del diagrama que deben cumplirse al escribir C# (ej. no borrar Producto al eliminar línea)."
          }
        </li>
        <li>
          {
            "Señala una clase que podría violar SRP si se le añaden más de cinco responsabilidades — preview lección 9."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: Mermaid válido; símbolos correctos; cardinalidades presentes; justificación escrita de composición vs agregación; coherencia con lecciones previas del track."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Referencia Parte C — Checkout e IPasarelaPago"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class Checkout {
    +Pagar(decimal monto)
  }
  class IPasarelaPago {
    <<interface>>
    +Cobrar(decimal monto)
  }
  Checkout --> IPasarelaPago : usa
  IPasarelaPago <|.. PasarelaTarjeta
  IPasarelaPago <|.. PasarelaTransferencia`}
      />
    </section>
  );
}
