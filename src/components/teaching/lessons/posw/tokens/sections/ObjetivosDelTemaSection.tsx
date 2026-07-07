import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre los mecanismos para autenticar y autorizar el acceso a APIs: JWT, OAuth 2.0, API Keys y sesiones por cookie. Saber cuándo usar cada uno evita vulnerabilidades y diseños difíciles de revocar."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar la estructura de un JWT (header.payload.signature), sus claims principales (sub, iat, exp) y por qué el payload no está cifrado."
          }
        </li>
        <li>
          {
            "Describir el flujo OAuth 2.0 Authorization Code con sus cuatro roles y el concepto de scopes."
          }
        </li>
        <li>
          {
            "Diferenciar API Key, JWT, OAuth 2.0 y sesión por cookie según qué identifican, si son stateless y facilidad de revocación."
          }
        </li>
        <li>
          {
            "Implementar el envío de credenciales en requests HTTP (Authorization: Bearer, X-API-Key, Set-Cookie) y reconocer cuándo usar cada mecanismo."
          }
        </li>
        <li>
          {
            "Aplicar la regla de decisión para elegir el mecanismo adecuado según tipo de app (SPA/mobile, login social, server-to-server, web clásica SSR)."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección apis: contratos HTTP, endpoints y consumo desde cliente."}</li>
        <li>{"Lección protocolos-seguridad: HTTPS y TLS."}</li>
        <li>{"Lección http-headers: headers Authorization, Set-Cookie, CORS."}</li>
      </ul>
      <Callout title="Autenticación vs autorización">
        {
          "Autenticación = ¿quién eres? (login, token válido). Autorización = ¿qué puedes hacer? (roles, scopes, permisos). OAuth 2.0 es principalmente un framework de autorización delegada."
        }
      </Callout>
    </section>
  );
}
