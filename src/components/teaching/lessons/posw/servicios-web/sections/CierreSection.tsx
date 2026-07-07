export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado la introducción a los servicios web. Estos conceptos son la base del track Programación Orientada a Sitios Web (POSW): sin distinguir servicio de sitio estático, sin centralizar lógica y sin particionar responsabilidades, será difícil avanzar en formatos, protocolos y diseño de APIs."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Servicio web"}</strong>
          {" = máquina-a-máquina + interfaz estandarizada; el contrato es público y versionable."}
        </li>
        <li>
          <strong>{"Centralizar lógica"}</strong>
          {" en el servidor evita inconsistencias entre plataformas."}
        </li>
        <li>
          <strong>{"Escalar por módulo"}</strong>
          {" es más eficiente que escalar monolitos enteros."}
        </li>
        <li>
          <strong>{"SOLID (preview)"}</strong>
          {" guía endpoints y capas mantenibles; profundizarás en "}
          <code>{"principios-solid"}</code>
          {"."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"formatos-datos"}</code>
        {" — XML y JSON para el intercambio de datos entre clientes y servicios."}
      </p>
    </section>
  );
}
