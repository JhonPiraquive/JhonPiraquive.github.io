import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: API REST en producción"}
      </h2>
      <p className="my-4 font-semibold">{"Configura los headers de una API REST para producción"}</p>
      <p className="my-4">
        {
          "API en https://api.tienda.ejemplo.com consumida por SPA en https://tienda.ejemplo.com y app móvil nativa. Endpoints: catálogo (cacheable), checkout (autenticado), login (Set-Cookie)."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {"Lista los request headers mínimos para GET /api/productos/42 desde la SPA autenticada."}
        </li>
        <li>
          {"Diseña la respuesta de catálogo con headers de caché (Cache-Control, ETag) para permitir 304."}
        </li>
        <li>
          {"Escribe la secuencia OPTIONS + PUT para actualizar perfil desde la SPA, con todos los headers CORS necesarios."}
        </li>
        <li>{"Propón un bloque de headers de seguridad (HSTS, CSP, X-Frame-Options, nosniff)."}</li>
        <li>
          {"Explica por qué la app móvil no sufre CORS pero sí necesita Authorization y Content-Type en POST."}
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: distingue headers request/response, preflight completo, caché con ETag, seguridad básica, explica CORS solo en navegador."
        }
      </p>
      <CodeFiddle
        language="http"
        title="GET autenticado con If-None-Match"
        code={`GET /api/productos/42 HTTP/1.1
Host: api.tienda.ejemplo.com
Accept: application/json
Authorization: Bearer eyJhbGci...
If-None-Match: "v3-a3f9b2c1"`}
      />
      <PracticeExercise
        prompt="Implementa el reto de la tienda: request headers para GET autenticado, respuesta con ETag/Cache-Control y secuencia OPTIONS+PUT con CORS."
        hints={[
          "GET: Host, Accept, Authorization, If-None-Match",
          "Response: Cache-Control max-age, ETag",
          "OPTIONS con Allow-Origin específico (no *)",
          "HSTS max-age=31536000",
        ]}
        expectedKeywords={["ETag", "Cache-Control", "OPTIONS", "HSTS"]}
        successMessage="Excelente. Has configurado headers de producción: caché, CORS y seguridad."
        rows={6}
      />
    </section>
  );
}
