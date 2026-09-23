import { Callout } from "@/components/teaching/Callout";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador — Tienda Andes (parte 2)"}
      </h2>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>
          {
            "Actualiza el diagrama: Producto <|-- Libro / Gadget; Pedido *-- LineaPedido; Cliente --> Pedido si aplica."
          }
        </li>
        <li>
          {
            "Implementa catálogo con override y Pedido con composición (AgregarLinea crea la línea)."
          }
        </li>
        <li>
          {
            "En tres frases: por qué Pedido no hereda de LineaPedido; por qué Libro sí hereda de Producto; un ejemplo tuyo de override vs overload (p. ej. Total del pedido)."
          }
        </li>
      </ol>
      <Callout title="Criterio de éxito" variant="callout-info">
        <p className="mb-0">
          {
            "Un compañero lee tu diagrama y distingue «es-un» de «tiene-un»; el proyecto compila con al menos un override."
          }
        </p>
      </Callout>
    </section>
  );
}
