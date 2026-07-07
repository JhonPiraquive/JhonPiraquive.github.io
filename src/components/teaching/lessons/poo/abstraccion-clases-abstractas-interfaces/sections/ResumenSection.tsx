export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Abstracción:"}</strong>
          {" programar contra contratos; ocultar detalles de implementación."}
        </li>
        <li>
          <strong>{"Interfaz:"}</strong>
          {" capacidad intercambiable; inyección por constructor (Caja + IPago, Servicio + ILogger)."}
        </li>
        <li>
          <strong>{"Clase abstracta:"}</strong>
          {" estado y flujo común; métodos abstract obligatorios (Notificacion / EnviarCore)."}
        </li>
        <li>
          <strong>{"Elección:"}</strong>
          {" abstracta con Template Method; interfaz para contrato puro y multi-rol."}
        </li>
        <li>
          <strong>{"Evitar:"}</strong>
          {" abstracción prematura e interfaces sobredimensionadas."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" polimorfismo — misma llamada, distinto comportamiento en runtime."}
        </li>
      </ul>
    </section>
  );
}
