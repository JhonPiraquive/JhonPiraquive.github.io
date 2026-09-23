export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Ya diste nombres concretos a los contratos de Tienda Andes: pagos, persistencia, avisos y catálogo. Lo importante no es la palabra «interfaz», sino que el código que orquesta pedidos deje de conocer implementaciones frágiles."
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" página "}
        <code>{"polimorfismo"}</code>
        {" — verás cómo esos contratos se comportan distinto en runtime sin if por tipo en el cliente."}
      </p>
    </section>
  );
}
