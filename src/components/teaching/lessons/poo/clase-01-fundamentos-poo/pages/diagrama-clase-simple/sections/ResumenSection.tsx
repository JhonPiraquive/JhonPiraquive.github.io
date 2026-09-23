import { CompareTable } from "@/components/teaching/CompareTable";

export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Diagrama de clases (intro):"}</strong>
          {" una caja con nombre, atributos y métodos — mapa estático, no el algoritmo."}
        </li>
        <li>
          <strong>{"Visibilidad en Mermaid:"}</strong>
          {" + público, - privado (cuando lo indiques)."}
        </li>
        <li>
          <strong>{"Mapeo a C#:"}</strong>
          {" atributos → propiedades/campos; operaciones → métodos; constructor en el compartimento de métodos."}
        </li>
        <li>
          <strong>{"Caso:"}</strong>
          {" guarda la caja de Producto; en Clase 2 le agregas Libro/Gadget y las flechas del pedido."}
        </li>
        <li>
          <strong>{"Siguiente:"}</strong>
          {" práctica y cierre de Clase 1 (reto Tienda Andes parte 1 + miniquiz)."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist caja simple"}</h3>
      <CompareTable
        headers={["Parte de la caja", "Ejemplo Producto"]}
        rows={[
          ["Nombre", "Producto"],
          ["Atributos", "Sku, Precio"],
          ["Métodos", "constructor, AplicarDescuento"],
          ["Aún no", "herencia <|--, composición *--"],
        ]}
      />
    </section>
  );
}
