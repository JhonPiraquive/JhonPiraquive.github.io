export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de abstracción, clases abstractas e interfaces en C#. Estos mecanismos permiten diseñar sistemas extensibles y desacoplados."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Abstracción"}</strong>
          {" = contrato + ocultamiento; no es “más complejidad por defecto”."}
        </li>
        <li>
          <strong>{"Interfaz"}</strong>
          {" para capacidades intercambiables; "}
          <strong>{"abstracta"}</strong>
          {" para flujo y estado compartidos."}
        </li>
        <li>
          <strong>{"Inyección por constructor"}</strong>
          {" conecta implementaciones con clientes sin acoplamiento."}
        </li>
        <li>
          <strong>{"Abstracción prematura"}</strong>
          {" e interfaces gigantes son anti-patrones frecuentes."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"polimorfismo"}</code>
        {" — una misma llamada, distintos comportamientos según el tipo real del objeto."}
      </p>
    </section>
  );
}
