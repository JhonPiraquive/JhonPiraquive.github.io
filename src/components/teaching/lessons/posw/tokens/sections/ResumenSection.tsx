export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "JWT: header.payload.signature; payload codificado, no cifrado; stateless; validar exp en servidor."
          }
        </li>
        <li>
          {
            "OAuth 2.0: autorización delegada; Authorization Code flow; scopes limitan permisos; OIDC añade identidad."
          }
        </li>
        <li>
          {
            "API Key: identifica la app; header X-API-Key; rotar si se filtra; no sustituye auth de usuario."
          }
        </li>
        <li>
          {
            "Sesión por cookie: stateful; revocación inmediata; ideal para SSR con HttpOnly; Secure; SameSite."
          }
        </li>
        <li>
          {
            "Regla: SPA/mobile → JWT; login social → OAuth; server-to-server → API Key; web clásica → sesión."
          }
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"frontend"}</code>
          {" — tecnologías y frameworks del lado cliente."}
        </li>
      </ul>
    </section>
  );
}
