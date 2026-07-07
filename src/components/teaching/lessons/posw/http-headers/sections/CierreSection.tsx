export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado HTTP headers. Junto con métodos y códigos de estado, puedes leer un mensaje HTTP completo de punta a punta."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Host"}</strong>
          {" y "}
          <strong>{"Content-Type"}</strong>
          {" son imprescindibles en HTTP/1.1 y POST con JSON."}
        </li>
        <li>
          <strong>{"CORS"}</strong>
          {" es del navegador — prueba con curl no garantiza que funcione en producción web."}
        </li>
        <li>
          <strong>{"Headers de seguridad"}</strong>
          {" (HSTS, CSP, X-Frame-Options) son obligatorios en APIs y SPAs expuestas a internet."}
        </li>
        <li>
          <strong>{"ETag + Cache-Control"}</strong>
          {" ahorran ancho de banda con respuestas 304."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"tipos-servicios-web"}</code>
        {" — comparar SOAP, REST, GraphQL, gRPC y WebSockets."}
      </p>
    </section>
  );
}
