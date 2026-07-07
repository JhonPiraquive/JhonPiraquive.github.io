export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de HTTP, HTTPS y TLS. Proteger el transporte es prerequisito para servicios web confiables; sin HTTPS en producción, tokens y credenciales quedan expuestos."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"HTTP"}</strong>
          {" = stateless, puerto 80, sin cifrado; sesión se simula en aplicación."}
        </li>
        <li>
          <strong>{"HTTPS"}</strong>
          {" = HTTP + TLS, puerto 443; confidencialidad, integridad, autenticación."}
        </li>
        <li>
          <strong>{"TLS 1.2/1.3"}</strong>
          {" sí; SSL y TLS 1.0/1.1 no."}
        </li>
        <li>
          <strong>{"Handshake"}</strong>
          {" establece canal cifrado antes de enviar datos sensibles."}
        </li>
        <li>
          <strong>{"Producción y staging público"}</strong>
          {" siempre HTTPS; TLS no sustituye tokens ni login."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"http-metodos-status"}</code>
        {" — métodos GET, POST, PUT, DELETE y códigos de estado."}
      </p>
    </section>
  );
}
