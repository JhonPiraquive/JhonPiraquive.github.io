export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el panorama del backend: responsabilidades, capas, frameworks y criterios de elección. Un backend bien estructurado separa concerns y valida en servidor."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"El backend no es solo la API; incluye lógica, BD, colas e integraciones internas."}</li>
        <li>{"Controlador orquesta; servicio decide — no mezcles reglas de negocio con routing HTTP."}</li>
        <li>{"Valida siempre en servidor — el cliente es manipulable."}</li>
        <li>{"Elige stack por equipo y proyecto, no solo por benchmarks de lenguajes."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"cache"}</code>
        {" — Redis, CDN y headers HTTP para reducir carga en el backend."}
      </p>
    </section>
  );
}
