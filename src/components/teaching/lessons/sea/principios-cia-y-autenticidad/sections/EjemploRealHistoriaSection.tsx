export function EjemploRealHistoriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo real (historia)"}</h2>
      <p className="my-4">{"Historia: “El descuento infinito”. Una tienda online envía al cliente el precio final y el porcentaje de descuento en el request de compra. Un usuario descubre que puede modificar el descuento en el navegador y compra por $0. Aquí la disponibilidad está bien (la app funciona), pero la integridad está rota (la orden fue alterada) y la autenticidad es dudosa (el sistema confió en datos del cliente)."}</p>
    </section>
  );
}
