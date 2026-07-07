export function CierreTrackSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cierre del track Programación Orientada a Sitios Web"}
      </h2>
      <p className="my-4">
        {
          "Con arquitectura-api cierras el track POSW. Has pasado del modelo cliente-servidor hasta REST, GraphQL, gRPC, bases de datos, SOLID, naming e IA en el flujo de desarrollo."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave del recorrido:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"HTTP y REST como base de servicios web."}</li>
        <li>{"Capas y SOLID para código mantenible."}</li>
        <li>{"Naming y convenciones para equipos coherentes."}</li>
        <li>{"IA con verificación antes del merge."}</li>
        <li>{"Arquitectura de API con criterio, no moda."}</li>
      </ul>
      <p className="my-4">
        {
          "Has completado el track POSW. Repasa lecciones clave o explora proyectos del portafolio."
        }
      </p>
    </section>
  );
}
