import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoQueDebeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ejemplo técnico: cookie segura y JWT"}
      </h2>
      <p className="my-4">
        {
          "La respuesta crea una cookie de sesión con Secure, HttpOnly y SameSite. El JWT ilustra estructura (sub, iat, exp, roles). Preferir cookie HttpOnly para sesión web; JWT en localStorage no es recomendación sin mitigar XSS."
        }
      </p>
      <CodeFiddle
        language="http"
        title="Set-Cookie con banderas correctas"
        code={`HTTP/1.1 200 OK
Set-Cookie: session_id=sess_abc123; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=3600
Content-Type: application/json

{"ok":true}`}
      />
      <CodeFiddle
        language="json"
        title="Payload JWT (claims típicos)"
        code={`{
  "sub": "u_12345",
  "iat": 1713700000,
  "exp": 1713703600,
  "roles": ["user"]
}`}
      />
    </section>
  );
}
