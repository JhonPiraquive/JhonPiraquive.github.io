export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"HTTP:"}</strong>
          {" stateless, puerto 80, texto plano; adecuado solo en localhost o redes aisladas."}
        </li>
        <li>
          <strong>{"HTTPS:"}</strong>
          {" HTTP + TLS, puerto 443; confidencialidad, integridad y autenticación del servidor."}
        </li>
        <li>
          <strong>{"SSL obsoleto;"}</strong>
          {" usar TLS 1.2 o 1.3 en 2025."}
        </li>
        <li>
          <strong>{"Handshake TLS 1.3:"}</strong>
          {" ClientHello → ServerHello + Certificate → Finished → canal cifrado."}
        </li>
        <li>
          <strong>{"Producción siempre HTTPS;"}</strong>
          {" TLS no reemplaza autenticación de aplicación (tokens, sesiones)."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" http-metodos-status — métodos HTTP y códigos de estado."}
        </li>
      </ul>
    </section>
  );
}
