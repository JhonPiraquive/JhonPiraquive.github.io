import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: diagrama Tienda Andes"}
      </h2>
      <p className="my-4">
        {
          "Actividad de diseño (diagrama Mermaid + breve mapeo a C#). Implementación en consola opcional."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Núcleo del negocio"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cliente, Producto <|-- Libro/Gadget, Pedido, LineaPedido con Total(), AgregarLinea, Subtotal()."}</li>
        <li>{"Cliente 1 → 0..* Pedido; Pedido *-- 1..* LineaPedido."}</li>
        <li>{"CarritoCompras o-- Producto (agregación explícita)."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Estado del pedido"}</p>
      <ol className="my-4 list-decimal pl-6" start={4}>
        <li>{"Campo o tipo Estado (Creado, Pagado, Enviado) en Pedido."}</li>
        <li>{"Párrafo: ¿enum o clase EstadoPedido? Justifica para Tienda Andes."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Pago"}</p>
      <ol className="my-4 list-decimal pl-6" start={6}>
        <li>{"<<interface>> IPasarelaPago y dos implementaciones."}</li>
        <li>{"Checkout (o Pedido) asociado a IPasarelaPago, no a PasarelaTarjeta concreta."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Validación"}</p>
      <ol className="my-4 list-decimal pl-6" start={8}>
        <li>{"Tres reglas diagrama → C# (ej. no borrar Producto al quitar línea)."}</li>
        <li>{"Señala una caja que violaría SRP si crece sin límite."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Éxito: Mermaid válido; <|-- y <|.. correctos; cardinalidades; texto sobre composición vs agregación."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Referencia: checkout y pasarela"}</h3>
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
