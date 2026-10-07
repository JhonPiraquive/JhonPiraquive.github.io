import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function TiposPorUsoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Para qué sirve en la organización</h2>
      <p className="my-4">
        Dentro de un negocio, un sistema de información suele perseguir tres objetivos: automatizar la operación,
        aportar información para decidir y sostener una ventaja frente a otros. De ahí salen cuatro tipos que
        vas a escuchar en cualquier proyecto.
      </p>
      <MermaidDiagram
        title="De la operación diaria a la estrategia"
        description="Cada tipo apoya un nivel distinto de la organización"
        chart={`flowchart TB
  TPS[TPS Transaccional] --> DSS[DSS Apoyo a decisiones]
  DSS --> EST[Sistemas estrategicos]
  ERP[ERP Integral] --> TPS
  ERP --> DSS`}
      />
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Tipo</th>
            <th className="py-2 pr-4 text-left font-semibold">Qué hace</th>
            <th className="py-2 text-left font-semibold">Ejemplo en Logística SAS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">TPS</td>
            <td className="py-2 pr-4">Registra las operaciones del día a día.</td>
            <td className="py-2">Guardar cada orden de servicio con su número y estado.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">DSS</td>
            <td className="py-2 pr-4">Ayuda a decidir con consultas y reportes.</td>
            <td className="py-2">Reporte de servicios por estado para el gerente.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Estratégico</td>
            <td className="py-2 pr-4">Busca una ventaja que la competencia no tiene igual.</td>
            <td className="py-2">Que el cliente haga seguimiento por internet sin llamar.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">ERP</td>
            <td className="py-2 pr-4">Integra varias áreas en un solo sistema.</td>
            <td className="py-2">Unir servicios, insumos y proveedores en lugar de cuadernos separados.</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        El proyecto de este módulo empieza como un TPS (órdenes) y deja listos los reportes de un DSS. No
        pretende, todavía, un ERP de toda la empresa. Saber decir eso es parte del alcance.
      </p>
    </section>
  );
}
