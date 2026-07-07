import { CodeBlock } from "@/components/teaching/CodeBlock";

export function LogsDeAplicacionPhpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Logs de aplicación (PHP): útiles, mínimos, seguros"}</h2>
      <p className="my-4">{"Un log es evidencia. Debe permitir responder: qué pasó, cuándo, a quién afectó, desde dónde, y con qué resultado. Pero un log también puede ser una fuga si guarda contraseñas, tokens, números completos de tarjeta o datos sensibles sin necesidad."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué sí registrar"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"request_id"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"user_id (si aplica)"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"endpoint"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"método"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"ip"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"resultado"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"tiempo de respuesta"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"evento de seguridad (login, cambio de contraseña, permisos)"}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué nunca registrar"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"contraseñas"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"tokens completos"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"códigos 2FA"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"secret keys"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"datos sensibles completos (documento, tarjeta)"}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"payloads completos sin enmascarar"}</li>
      </ul>
      <CodeBlock className="language-json">{`{
  &quot;log_correcto&quot;: {
    &quot;event&quot;: &quot;login_failed&quot;,
    &quot;request_id&quot;: &quot;req_91b6c8&quot;,
    &quot;user_id&quot;: null,
    &quot;ip&quot;: &quot;203.0.113.9&quot;,
    &quot;result&quot;: &quot;denied&quot;,
    &quot;reason&quot;: &quot;invalid_credentials&quot;,
    &quot;email_masked&quot;: &quot;j***@example.com&quot;
  },
  &quot;log_incorrecto&quot;: {
    &quot;event&quot;: &quot;login_failed&quot;,
    &quot;password&quot;: &quot;PlainTextPassword123!&quot;,
    &quot;token&quot;: &quot;FULL_JWT_OR_SESSION_TOKEN&quot;
  },
  &quot;por_que_es_incorrecto&quot;: &quot;Guarda secretos/credenciales y puede convertirse en fuga de datos.&quot;
}`}</CodeBlock>
    </section>
  );
}
