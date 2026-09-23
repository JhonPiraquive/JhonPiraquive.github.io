export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Abstracción:"}</strong>
          {" el cliente habla con contratos; los detalles (Nequi, SQL) quedan afuera."}
        </li>
        <li>
          <strong>{"Interfaz:"}</strong>
          {" capacidad intercambiable — IPago, IRepositorioPedidos — con inyección por constructor."}
        </li>
        <li>
          <strong>{"Clase abstracta:"}</strong>
          {" estado y flujo compartidos; Template Method (NotificacionPedido)."}
        </li>
        <li>
          <strong>{"C#:"}</strong>
          {" una base, varias interfaces; Producto + IExportable es un combo válido."}
        </li>
        <li>
          <strong>{"Siguiente página:"}</strong>
          {" polimorfismo — la misma llamada ejecuta distinto comportamiento en runtime."}
        </li>
      </ul>
    </section>
  );
}
