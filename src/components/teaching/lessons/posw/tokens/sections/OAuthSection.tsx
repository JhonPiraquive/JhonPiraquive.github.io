import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function OAuthSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"OAuth 2.0"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "OAuth 2.0 (RFC 6749): framework de autorización delegada — acceso sin compartir credenciales con el tercero."
          }
        </li>
        <li>{"Analogía: llave de valet del coche — acceso limitado, revocable, sin acceso a la guantera."}</li>
        <li>
          {
            "Roles: Resource Owner (usuario), Client (app tercera), Authorization Server (emite tokens), Resource Server (protege recursos)."
          }
        </li>
        <li>{"OpenID Connect (OIDC): capa de identidad sobre OAuth; agrega id_token y /userinfo."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Authorization Code flow"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant App as App Cliente
  participant Auth as Auth Server
  participant API as Resource Server
  U->>App: Login con Google
  App->>Auth: Redirect client_id
  U->>Auth: Autentica
  Auth-->>App: Redirect ?code=XYZ
  App->>Auth: POST /token code=XYZ
  Auth-->>App: access_token
  App->>API: GET /userinfo Bearer token
  API-->>App: {datos user}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Scopes"}</h3>
      <p className="my-4">
        {
          "Los scopes limitan permisos del token: read:email, write:repos, openid. El usuario aprueba qué acceso concede; la app no recibe la contraseña de Google."
        }
      </p>
      <StepReveal
        title="OAuth Authorization Code paso a paso"
        steps={[
          {
            title: "1. Redirect al proveedor",
            content: "La app redirige al usuario a Google/GitHub con client_id y scopes solicitados.",
          },
          {
            title: "2. Usuario autentica y aprueba",
            content:
              "El Authorization Server valida credenciales y muestra pantalla de consentimiento de scopes.",
          },
          {
            title: "3. Redirect con authorization code",
            content: "El proveedor redirige a la app con ?code=XYZ (código de un solo uso, corta duración).",
          },
          {
            title: "4. Intercambio en backend",
            content:
              "El backend de la app intercambia el code por access_token (nunca en el navegador con client_secret).",
          },
          {
            title: "5. Acceso a API protegida",
            content: "La app llama al Resource Server con Authorization: Bearer access_token.",
          },
        ]}
      />
    </section>
  );
}
