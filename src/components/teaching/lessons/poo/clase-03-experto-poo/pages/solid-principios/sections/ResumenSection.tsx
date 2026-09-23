export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"S:"}</strong>
          {" un motivo de cambio — PedidoService partido en roles."}
        </li>
        <li>
          <strong>{"O:"}</strong>
          {" EnvioGratis sin tocar calculadora — polimorfismo útil."}
        </li>
        <li>
          <strong>{"L:"}</strong>
          {" Producto/Gadget y pingüino — contrato semántico."}
        </li>
        <li>
          <strong>{"I:"}</strong>
          {" ticket vs escaneo — contratos por rol."}
        </li>
        <li>
          <strong>{"D:"}</strong>
          {" ServicioPedidos → IRepositorioPedidos; SQL en Main."}
        </li>
        <li>
          <strong>{"Siguiente página:"}</strong>
          {" modularidad-cohesion-acoplamiento — empaquetar SOLID en módulos."}
        </li>
      </ul>
    </section>
  );
}
