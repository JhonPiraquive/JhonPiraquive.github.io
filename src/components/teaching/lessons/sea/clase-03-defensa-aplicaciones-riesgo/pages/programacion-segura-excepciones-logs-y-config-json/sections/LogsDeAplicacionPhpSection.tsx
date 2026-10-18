import { CodeFiddle } from "@/components/teaching/CodeFiddle";

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
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Log con password en texto plano:"}</strong>
          {" login_failed registró credencial; backup de logs filtró passwords. Corrección: nunca registrar secretos."}
        </li>
        <li>
          <strong>{"Logs públicos en /var/www:"}</strong>
          {" error.log accesible vía web por mala configuración nginx. Corrección: logs fuera del document root."}
        </li>
        <li>
          <strong>{"Sin request_id:"}</strong>
          {" Imposible correlacionar error de usuario con stack trace. Corrección: ID único por petición en toda la traza."}
        </li>
      </ul>
      <CodeFiddle language="json" code={`{
  "log_correcto": {
    "event": "login_failed",
    "request_id": "req_91b6c8",
    "user_id": null,
    "ip": "203.0.113.9",
    "result": "denied",
    "reason": "invalid_credentials",
    "email_masked": "j***@example.com"
  },
  "log_incorrecto": {
    "event": "login_failed",
    "password": "PlainTextPassword123!",
    "token": "FULL_JWT_OR_SESSION_TOKEN"
  },
  "por_que_es_incorrecto": "Guarda secretos/credenciales y puede convertirse en fuga de datos."
}`} />
    </section>
  );
}
