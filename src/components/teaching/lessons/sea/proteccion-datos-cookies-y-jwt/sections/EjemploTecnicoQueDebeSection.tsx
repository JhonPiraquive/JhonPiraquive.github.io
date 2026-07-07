import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoQueDebeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué debe mostrar)"}</h2>
      <p className="my-4">{"El ejemplo debe mostrar: (1) una respuesta de servidor que crea una cookie de sesión con banderas correctas, (2) un JWT típico (en partes) para ilustrar estructura, y (3) una decisión: cuándo cookie de sesión vs JWT. No se debe enseñar a “poner JWT en localStorage” como recomendación sin advertencias."}</p>
      <CodeFiddle language="http" code={`HTTP/1.1 200 OK
Set-Cookie: session_id=sess_abc123; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=3600
Content-Type: application/json

{&quot;ok&quot;:true}`} />
      <CodeFiddle language="json" code={`{
  &quot;sub&quot;: &quot;u_12345&quot;,
  &quot;iat&quot;: 1713700000,
  &quot;exp&quot;: 1713703600,
  &quot;roles&quot;: [&quot;user&quot;]
}`} />
    </section>
  );
}
