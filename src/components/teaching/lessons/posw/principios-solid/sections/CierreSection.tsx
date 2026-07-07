export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {"Has recorrido los cinco principios SOLID y su aplicación en capas de API/backend."}
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"SRP mide razón para cambiar, no cantidad de archivos."}</li>
        <li>{"OCP extiende con nuevas clases, no con más if/else."}</li>
        <li>{"LSP exige contratos sustituibles; no heredar comportamientos imposibles."}</li>
        <li>{"ISP divide interfaces para que cada cliente use solo lo necesario."}</li>
        <li>{"DIP inyecta abstracciones; la concreción vive en el punto de composición."}</li>
        <li>{"SOLID es guía práctica, no dogma: evita 15 interfaces en un CRUD estable."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"naming-conventions"}</code>
        {" — convenciones de nomenclatura en frontend, backend, SQL y APIs."}
      </p>
    </section>
  );
}
