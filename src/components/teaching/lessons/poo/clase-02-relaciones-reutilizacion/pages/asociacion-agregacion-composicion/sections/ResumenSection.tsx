export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Asociación:"}</strong>
          {" asesor y cliente colaboran; SesionMostrador guarda contexto."}
        </li>
        <li>
          <strong>{"Agregación:"}</strong>
          {" carrito referencia Producto del catálogo; Quitar no destruye ítems."}
        </li>
        <li>
          <strong>{"Composición:"}</strong>
          {" Pedido crea LineaPedido con precio congelado; lista privada."}
        </li>
        <li>
          <strong>{"Criterio:"}</strong>
          {" ciclo de vida + quién instancia, no solo List<T>."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" diagramas-relaciones — dibujar Tienda Andes en Mermaid."}
        </li>
      </ul>
    </section>
  );
}
