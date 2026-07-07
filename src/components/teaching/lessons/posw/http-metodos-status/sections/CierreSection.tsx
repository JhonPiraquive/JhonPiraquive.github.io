export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado métodos HTTP y códigos de estado. Estos elementos son el vocabulario que comparten cliente y servidor: el verbo dice qué quieres hacer; el código dice qué pasó."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"No uses GET para modificar ni 200 OK para ocultar errores en el cuerpo JSON."}</li>
        <li>
          {
            "POST no es idempotente — protege pagos y creaciones con claves de idempotencia o verificación de duplicados."
          }
        </li>
        <li>{"401 ≠ 403: autenticación vs autorización."}</li>
        <li>{"201 + Location comunica dónde quedó el recurso nuevo."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"http-headers"}</code>
        {" — metadatos del mensaje, CORS preflight y headers de seguridad."}
      </p>
    </section>
  );
}
