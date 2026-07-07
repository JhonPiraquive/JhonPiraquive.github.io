import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function JwtSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"JWT (JSON Web Token)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"JWT (RFC 7519): estándar para transmitir claims entre partes de forma compacta."}</li>
        <li>{"Tres partes separadas por puntos: header.payload.signature (Base64URL)."}</li>
        <li>{"Stateless: el servidor no almacena el token; verifica la firma."}</li>
        <li>
          {
            "Advertencia: el payload no está cifrado — solo codificado; nunca guardar contraseñas ni PII sensible."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura JWT"}</h3>
      <CodeFiddle
        language="json"
        title="Estructura JWT"
        code={`{
  "header": { "alg": "HS256", "typ": "JWT" },
  "payload": {
    "sub": "99",
    "nombre": "Ana García",
    "rol": "admin",
    "iat": 1725177600,
    "exp": 1725264000
  }
}`}
      />
      <ul className="my-4 list-disc pl-6">
        <li>{"Header: algoritmo (alg: HS256, RS256) y tipo (typ: JWT)."}</li>
        <li>{"Payload: claims — sub (subject), iat (issued at), exp (expiration), iss, aud."}</li>
        <li>
          {
            "Signature: HMACSHA256(base64Url(header) + \".\" + base64Url(payload), SECRET_KEY) — verifica integridad."
          }
        </li>
      </ul>
      <StepReveal
        title="Partes de un JWT"
        steps={[
          {
            title: "1. Header (rojo)",
            content:
              'JSON con algoritmo y tipo, codificado en Base64URL. Ejemplo: {"alg":"HS256","typ":"JWT"}.',
          },
          {
            title: "2. Payload (fucsia)",
            content:
              "Claims del usuario: sub, rol, iat, exp. Codificado, NO cifrado — cualquiera puede decodificarlo en jwt.io.",
          },
          {
            title: "3. Signature (azul)",
            content:
              "Firma criptográfica que prueba que el emisor es legítimo y que el token no fue alterado.",
          },
          {
            title: "4. Refresh token",
            content:
              "access_token expira rápido (15 min–1 h); refresh_token dura más (7–30 días) para obtener nuevo access sin re-login.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flujo JWT"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente
  participant S as Servidor
  C->>S: POST /login {email, password}
  S-->>C: 200 OK {token: eyJ...}
  C->>S: GET /api/perfil Authorization Bearer
  S-->>C: 200 OK {datos usuario}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Login y request autenticado"}</h3>
      <CodeFiddle
        language="http"
        title="Login y request autenticado"
        code={`POST /api/login HTTP/1.1
Host: api.ejemplo.com
Content-Type: application/json

{"email": "ana@ejemplo.com", "password": "***"}

HTTP/1.1 200 OK
Content-Type: application/json

{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}

GET /api/perfil HTTP/1.1
Host: api.ejemplo.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept: application/json`}
      />
      <Callout title="Caso real: PII en el payload JWT">
        {
          "Un equipo guarda últimos 4 dígitos de tarjeta y email en el JWT 'para no consultar la DB'. Un atacante decodifica el token en WiFi pública. Decisión: payload solo con sub, rol y metadatos mínimos; datos sensibles siempre en servidor tras validar firma."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Almacenar y enviar token en JavaScript"}</h3>
      <CodeFiddle
        language="javascript"
        title="Almacenar y enviar token en JavaScript"
        code={`async function login(email, password) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const { token } = await res.json();
  sessionStorage.setItem("access_token", token);
}

async function fetchPerfil() {
  const token = sessionStorage.getItem("access_token");
  const res = await fetch("/api/perfil", {
    headers: { Authorization: \`Bearer \${token}\` },
  });
  if (res.status === 401) throw new Error("Sesión expirada");
  return res.json();
}`}
      />
    </section>
  );
}
