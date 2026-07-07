export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Servicio web:"}</strong>
          {" máquina-a-máquina con interfaz estandarizada (HTTP); distinto de un sitio estático solo para humanos."}
        </li>
        <li>
          <strong>{"Objetivos clave:"}</strong>
          {
            " interoperabilidad, compartir lógica, escalabilidad, modularidad, estandarización y acceso remoto."
          }
        </li>
        <li>
          <strong>{"Cliente delgado + servicio centralizado"}</strong>
          {" evita inconsistencias entre web, móvil y batch."}
        </li>
        <li>
          <strong>{"Flujo típico:"}</strong>
          {" petición HTTP → validación → persistencia/consulta → respuesta JSON."}
        </li>
        <li>
          <strong>{"SOLID (preview):"}</strong>
          {" SRP en endpoints, OCP al extender, LSP/ISP en contratos, DIP en repositorios."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"formatos-datos"}</code>
          {" — XML y JSON como formatos de intercambio."}
        </li>
      </ul>
    </section>
  );
}
