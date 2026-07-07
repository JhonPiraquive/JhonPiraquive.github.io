export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Modularidad:"}</strong>
          {" piezas con límites, API y dependencias controladas — no solo carpetas."}
        </li>
        <li>
          <strong>{"Cohesión:"}</strong>
          {" responsabilidades relacionadas dentro de la clase — evitar Utilidades mezclada."}
        </li>
        <li>
          <strong>{"Acoplamiento:"}</strong>
          {" pocas dependencias fuertes entre módulos — contratos e inyección."}
        </li>
        <li>
          <strong>{"Checklist:"}</strong>
          {" SRP, OCP, LSP, ISP, DIP + cohesión + acoplamiento."}
        </li>
        <li>
          <strong>{"Track POO completo:"}</strong>
          {" de clases y encapsulamiento a diseño mantenible con SOLID y módulos."}
        </li>
        <li>
          <strong>{"Esta es la lección final del track POO"}</strong>
          {" — aplica el checklist en proyectos reales."}
        </li>
      </ul>
    </section>
  );
}
