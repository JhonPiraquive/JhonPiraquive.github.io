export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Abstracción dibujó los contratos; polimorfismo los hace vivir en runtime. Si Checkout sigue limpio después de Nequi, llevas la idea al código."
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" principios SOLID — convierten estos hábitos en criterios explícitos (SRP, OCP, LSP, ISP, DIP) sobre Tienda Andes."}
      </p>
    </section>
  );
}
