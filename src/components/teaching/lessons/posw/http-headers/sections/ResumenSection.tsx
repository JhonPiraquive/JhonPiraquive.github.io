export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Los headers son metadatos clave-valor; una línea en blanco los separa del body."}
        </li>
        <li>
          <strong>{"Request:"}</strong>
          {" Host (obligatorio), Authorization, Accept, Content-Type, Origin."}
        </li>
        <li>
          <strong>{"Response:"}</strong>
          {" Content-Type, ETag, Cache-Control, Location (201), Set-Cookie, WWW-Authenticate (401)."}
        </li>
        <li>
          <strong>{"CORS"}</strong>
          {" aplica solo en navegador; peticiones complejas requieren preflight OPTIONS con Access-Control-*."}
        </li>
        <li>
          <strong>{"Seguridad:"}</strong>
          {" HSTS, CSP, X-Frame-Options, nosniff — habilitar en producción."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"tipos-servicios-web"}</code>
          {" — SOAP, REST, GraphQL, gRPC y WebSockets."}
        </li>
      </ul>
    </section>
  );
}
