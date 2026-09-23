import { CompareTable } from "@/components/teaching/CompareTable";

export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Diagrama de clases:"}</strong>
          {" estructura estática de Tienda Andes — no flujo de pantallas."}
        </li>
        <li>
          <strong>{"Herencia"}</strong>
          {" <|--; "}
          <strong>{"interfaz"}</strong>
          {" <|..; Producto y derivadas en catálogo."}
        </li>
        <li>
          <strong>{"Relaciones:"}</strong>
          {" --> asociación; o-- carrito; *-- pedido y líneas."}
        </li>
        <li>
          <strong>{"Hábito:"}</strong>
          {" diagrama pequeño, actualizado cuando cambia AgregarLinea o el catálogo."}
        </li>
        <li>
          <strong>{"Siguiente:"}</strong>
          {" practica-y-cierre — implementar parte 2 de Tienda Andes en consola."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Símbolos Mermaid (chuleta)"}</h3>
      <CompareTable
        headers={["Concepto", "Sintaxis Mermaid"]}
        rows={[
          ["Herencia", "Producto <|-- Libro"],
          ["Implementación interfaz", "IPasarelaPago <|.. PasarelaTarjeta"],
          ["Asociación", "Cliente --> Pedido"],
          ["Agregación", "CarritoCompras o-- Producto"],
          ["Composición", "Pedido *-- LineaPedido"],
          ['Cardinalidad', '"1" --> "0..*"'],
        ]}
      />
    </section>
  );
}
