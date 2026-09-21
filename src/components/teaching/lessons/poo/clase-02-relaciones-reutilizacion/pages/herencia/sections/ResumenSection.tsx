export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Herencia"}</strong>
          {
            " modela relación “es un”: la derivada especializa o redefine comportamiento de la base (virtual / override, base(...))."
          }
        </li>
        <li>
          <strong>{"Polimorfismo básico:"}</strong>
          {" Vehiculo v = new Carro(...) — v.Arrancar() ejecuta la versión del tipo real."}
        </li>
        <li>
          {
            "No todo método necesita override: comportamiento común (Parar()) se define una vez en la base."
          }
        </li>
        <li>
          <strong>{"Composición + interfaz"}</strong>
          {" (Alarma + INotificador) extiende canales sin jerarquías rígidas ni editar la clase cliente."}
        </li>
        <li>
          {
            "Criterio principal: sustituibilidad y “es un” válido; reutilizar código es beneficio secundario."
          }
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" asociacion-agregacion-composicion — matiza “tiene un” (asociación, agregación, composición)."}
        </li>
      </ul>
    </section>
  );
}
