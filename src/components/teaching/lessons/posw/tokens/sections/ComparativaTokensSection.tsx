import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ComparativaTokensSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comparativa y regla de decisión"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tabla comparativa"}</h3>
      <CompareTable
        headers={["Mecanismo", "Identifica", "Stateless", "Revocación", "Mejor para"]}
        rows={[
          ["JWT", "Usuario (claims sub, rol)", "Sí", "Difícil antes de exp", "SPA, mobile, APIs stateless"],
          [
            "OAuth 2.0",
            "Acceso delegado a recursos de terceros",
            "Tokens stateless",
            "Revocable en Auth Server",
            "Login con Google/GitHub, APIs de terceros",
          ],
          [
            "API Key",
            "Aplicación (no usuario)",
            "Sí",
            "Manual (rotar key)",
            "Server-to-server, APIs públicas con cuota",
          ],
          [
            "Sesión (cookie)",
            "Usuario (session_id)",
            "No (stateful)",
            "Inmediata (borrar sesión)",
            "Web clásica SSR, apps con revocación urgente",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Regla de decisión"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"SPA / mobile propia → JWT (+ refresh token en almacenamiento seguro)."}</li>
        <li>{"Login con Google / GitHub → OAuth 2.0 + OIDC."}</li>
        <li>{"Server-to-server con cuota → API Key en header."}</li>
        <li>{"Web clásica SSR → Sesión + cookie HttpOnly."}</li>
      </ul>
      <PracticeExercise
        prompt="Una app necesita 'Login con Google' y acceso al calendario del usuario. ¿Qué mecanismo usarías? ¿Qué roles intervienen y qué scopes pedirías?"
        hints={["No es JWT solo", "OAuth Authorization Code", "Scopes limitan permisos"]}
        expectedKeywords={["OAuth", "Authorization Server", "scope", "calendar"]}
        successMessage="Correcto. OAuth 2.0 con scopes como calendar.readonly; roles: usuario (Resource Owner), tu app (Client), Google (Auth Server), Calendar API (Resource Server)."
      />
    </section>
  );
}
