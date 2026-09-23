import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ComparacionRelacionesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tres formas de relacionar objetos en Tienda Andes"}
      </h2>
      <p className="my-4">
        {
          "La sintaxis List<T> puede engañar: lo decisivo es quién crea la parte y si puede vivir sin el todo."
        }
      </p>
      <CompareTable
        headers={["Criterio", "Asociación", "Agregación", "Composición"]}
        rows={[
          ["Metáfora", '"Te ayudo un momento"', '"Te llevo en el carrito"', '"Solo existes en este pedido"'],
          ["Parte sin todo", "Sí", "Sí (catálogo)", "No en el modelo"],
          ["Quién crea la parte", "Cualquiera", "Fuera del carrito", "Pedido en AgregarLinea"],
          ["UML en Mermaid", "-->", "o--", "*--"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TD
  A[¿A y B se relacionan?] --> B{¿La parte vive sin el todo?}
  B -->|Sí, solo colaboran| C[Asociación]
  B -->|Sí, pero el todo agrupa| D[Agregación]
  B -->|No, ciclo de vida junto| E[Composición]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplos del mismo negocio"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <th className="px-3 py-2 text-left font-semibold">{"Par"}</th>
              <th className="px-3 py-2 text-left font-semibold">{"Relación"}</th>
              <th className="px-3 py-2 text-left font-semibold">{"Por qué"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <td className="px-3 py-2">{"AsesorVentas – Cliente"}</td>
              <td className="px-3 py-2">{"Asociación"}</td>
              <td className="px-3 py-2">{"Se atienden en una sesión; siguen existiendo por separado."}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <td className="px-3 py-2">{"CarritoCompras – Producto"}</td>
              <td className="px-3 py-2">{"Agregación"}</td>
              <td className="px-3 py-2">{"El catálogo sobrevive si vacías el carrito."}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <td className="px-3 py-2">{"Pedido – LineaPedido"}</td>
              <td className="px-3 py-2">{"Composición"}</td>
              <td className="px-3 py-2">{"Precio congelado; la línea pertenece a ese pedido."}</td>
            </tr>
            <tr>
              <td className="px-3 py-2">{"Cliente – Pedido"}</td>
              <td className="px-3 py-2">{"Asociación"}</td>
              <td className="px-3 py-2">{"El cliente realiza pedidos; no es parte del pedido."}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <MermaidDiagram
        chart={`classDiagram
  AsesorVentas --> Cliente : atiende
  CarritoCompras o-- Producto : agrega
  Pedido *-- LineaPedido : compone
  Cliente --> Pedido : realiza`}
      />
      <Callout title="Error frecuente">
        {
          "CarritoCompras y Pedido usan lista privada, pero significan cosas distintas: en uno referencias al catálogo; en el otro partes que el pedido crea y controla."
        }
      </Callout>
    </section>
  );
}
