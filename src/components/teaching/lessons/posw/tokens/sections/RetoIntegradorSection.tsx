import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: plataforma de cursos"}
      </h2>
      <p className="my-4 font-semibold">
        {"Elige y diseña la autenticación de una plataforma de cursos online"}
      </p>
      <p className="my-4">
        {
          "La plataforma tiene: web SPA (React), app móvil (iOS/Android), integración server-to-server con un partner de certificados, y opción \"Continuar con GitHub\"."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Para cada cliente (SPA, móvil, partner, login social) indica el mecanismo (JWT, OAuth, API Key, sesión) y justifica."
          }
        </li>
        <li>
          {
            "Diseña el flujo de login JWT: endpoints, headers y respuesta JSON con access_token y refresh_token."
          }
        </li>
        <li>
          {
            "Para \"Login con GitHub\" describe el flujo OAuth Authorization Code y al menos dos scopes necesarios."
          }
        </li>
        <li>{"Explica cómo revocarías el acceso de un usuario en JWT vs sesión por cookie."}</li>
        <li>
          {
            "Lista tres errores de seguridad que evitarías (payload sensible, API Key en URL, refresh token en localStorage)."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: mecanismo correcto por contexto, flujos HTTP bien formados, distingue auth vs autorización, menciona revocación y buenas prácticas de almacenamiento."
        }
      </p>
      <CodeFiddle
        language="http"
        title="POST login + tokens"
        code={`POST /api/v1/auth/login HTTP/1.1
Content-Type: application/json

{"email": "estudiante@ejemplo.com", "password": "***"}

HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "eyJ...",
  "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2g...",
  "expires_in": 3600
}`}
      />
      <PracticeExercise
        prompt="Implementa el reto de la plataforma de cursos: asigna mecanismo por cliente, describe OAuth con GitHub (2 scopes) y explica revocación JWT vs sesión."
        hints={[
          "SPA/móvil → JWT",
          "Partner certificados → API Key",
          "GitHub → OAuth scopes read:user, user:email",
          "Revocar JWT = blacklist o esperar exp; sesión = borrar registro",
        ]}
        expectedKeywords={["JWT", "OAuth", "API Key", "revocación", "scope"]}
        successMessage="Excelente. Has diseñado autenticación multi-cliente con mecanismos apropiados y conciencia de seguridad."
        rows={6}
      />
    </section>
  );
}
