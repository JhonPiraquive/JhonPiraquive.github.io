import { Callout } from "@/components/teaching/Callout";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador — Tienda Andes (parte 1)"}
      </h2>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>
          {
            "Dibuja solo la caja UML de Producto (Sku, Precio, constructor, al menos un método de dominio)."
          }
        </li>
        <li>
          {
            "Implementa Producto en C# con { get; private set; }, validación en el constructor y AplicarDescuento (o equivalente)."
          }
        </li>
        <li>
          {
            "Escribe 3 frases: qué invariantes proteges (SKU, precio, descuento) y por qué no usas setters públicos."
          }
        </li>
      </ol>
      <Callout title="Criterio de éxito" variant="callout-info">
        <p className="mb-0">
          {
            "Un compañero lee tu diagrama y nombra atributos/métodos sin mirar el código; un SKU vacío debe fallar al construir."
          }
        </p>
      </Callout>
    </section>
  );
}
