export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el panorama de APIs: contrato, tipos, herramientas y diseño. Una API bien diseñada es un producto: versionada, documentada y probada antes de que los clientes dependan de ella."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"La API es el contrato expuesto; no confundirla con todo el backend."}</li>
        <li>
          {
            "Versiona desde el día uno — los cambios breaking sin /api/v2/ rompen integraciones reales."
          }
        </li>
        <li>{"curl en CI, Postman/Swagger para humanos; OpenAPI como fuente de verdad del contrato."}</li>
        <li>{"Anti-patrón grave: siempre 200 OK con error en el cuerpo JSON."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"tokens"}</code>
        {" — cómo autenticar y autorizar el acceso a esas APIs."}
      </p>
    </section>
  );
}
