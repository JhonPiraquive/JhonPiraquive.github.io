export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Modularidad:"}</strong>
          {" límites + contratos, no solo carpetas."}
        </li>
        <li>
          <strong>{"Cohesión:"}</strong>
          {" un objetivo por clase; adiós UtilidadesTienda."}
        </li>
        <li>
          <strong>{"Acoplamiento:"}</strong>
          {" reportes y repos intercambiables vía interfaz + Main."}
        </li>
        <li>
          <strong>{"Checklist:"}</strong>
          {" SOLID + cohesión + acoplamiento con evidencia."}
        </li>
        <li>
          <strong>{"Siguiente página:"}</strong>
          {" practica-y-cierre — capstone Tienda Andes y miniquiz de Clase 3."}
        </li>
      </ul>
    </section>
  );
}
