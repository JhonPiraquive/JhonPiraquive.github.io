import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ComparacionRelacionesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comparación y decisión de diseño"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Criterio decisivo: ciclo de vida y quién crea la parte."}</li>
        <li>{"Misma sintaxis (List<T>) no implica el mismo patrón."}</li>
        <li>{"Herencia solo para “es un”, nunca para “tiene un”."}</li>
      </ul>
      <CompareTable
        headers={["Criterio", "Asociación", "Agregación", "Composición"]}
        rows={[
          ["Metáfora", '"Te uso"', '"Te agrupo"', '"Estoy hecho de ti"'],
          ["Parte sin todo", "Sí", "Sí", "No (en el modelo)"],
          ["Quién crea la parte", "Cualquiera", "Usualmente afuera", "El todo"],
          ["UML (preview)", "-->", "o--", "*--"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TD
  A[¿A y B se relacionan?] --> B{¿Parte puede vivir sin todo?}
  B -->|Sí, solo uso puntual| C[Asociación]
  B -->|Sí, pero hay agrupación| D[Agregación]
  B -->|No, ciclo de vida junto| E[Composición]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuatro casos de dominio"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <th className="px-3 py-2 text-left font-semibold">{"Par"}</th>
              <th className="px-3 py-2 text-left font-semibold">{"Relación sugerida"}</th>
              <th className="px-3 py-2 text-left font-semibold">{"Justificación breve"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <td className="px-3 py-2">{"Universidad – Departamento"}</td>
              <td className="px-3 py-2">{"Agregación"}</td>
              <td className="px-3 py-2">
                {
                  "El departamento puede reestructurarse; la universidad agrupa sin destruir entidades académicas independientes."
                }
              </td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <td className="px-3 py-2">{"CarritoDeCompras – Producto"}</td>
              <td className="px-3 py-2">{"Agregación"}</td>
              <td className="px-3 py-2">
                {"Productos del catálogo existen sin carrito; referencias temporales."}
              </td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <td className="px-3 py-2">{"Factura – LineaFactura"}</td>
              <td className="px-3 py-2">{"Composición"}</td>
              <td className="px-3 py-2">
                {"La línea congela datos del momento; no tiene sentido fuera de esa factura."}
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2">{"Usuario – Sesion"}</td>
              <td className="px-3 py-2">{"Composición"}</td>
              <td className="px-3 py-2">
                {"La sesión pertenece a un usuario y expira con él en el modelo."}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tres relaciones en un vistazo"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Doctor --> Paciente : atiende
  Biblioteca o-- Libro : agrega
  Pedido *-- LineaPedido : compone`}
      />
      <Callout title="Error frecuente">
        {
          "Confundir agregación con composición por el contenedor: Biblioteca y Pedido usan List<T> privada — la diferencia está en origen y ciclo de vida, no en la sintaxis."
        }
      </Callout>
    </section>
  );
}
