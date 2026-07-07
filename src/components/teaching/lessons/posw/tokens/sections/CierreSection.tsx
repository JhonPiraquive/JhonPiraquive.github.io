export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado tokens y autenticación. Elegir el mecanismo correcto no es moda: depende del tipo de cliente, necesidad de revocación y si delegas acceso a terceros."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"JWT payload ≠ secreto — codificado, no cifrado; solo claims mínimos."}</li>
        <li>{"OAuth delega autorización — no compartas contraseñas con apps de terceros."}</li>
        <li>{"API Key en header, nunca en URL; rota al filtrar."}</li>
        <li>{"Sesión = revocación inmediata; JWT = escala fácil pero revocación difícil antes de exp."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"frontend"}</code>
        {" — capa cliente, frameworks y consumo de APIs autenticadas."}
      </p>
    </section>
  );
}
