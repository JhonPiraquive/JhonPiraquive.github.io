import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoProtocolosSeguridadSection() {
  return (
    <section>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">
        {"Reto integrador: audita el despliegue"}
      </h3>
      <p className="my-4 font-semibold">{"Audita y corrige el despliegue de una API"}</p>
      <p className="my-4">{"Se entrega este inventario:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Frontend: https://tienda.ejemplo.com (certificado válido)"}</li>
        <li>{"API producción: http://api.ejemplo.com (puerto 80)"}</li>
        <li>{"Staging: http://staging-api.ejemplo.com accesible desde internet"}</li>
        <li>{'Documentación interna: "usamos SSL 3.0 para compatibilidad"'}</li>
      </ul>
      <p className="my-4 font-semibold">{"Tareas:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {"Lista cada hallazgo de seguridad y su impacto (confidencialidad, integridad, autenticación, SEO)."}
        </li>
        <li>{"Propón URL, puerto y versión TLS correctos para producción."}</li>
        <li>{"Diferencia qué cambios exiges en staging vs desarrollo local (localhost)."}</li>
        <li>{"Escribe un mensaje HTTP de ejemplo que no debe viajar sin TLS en producción."}</li>
        <li>{"Esboza los primeros tres mensajes del handshake que ocurrirían tras migrar a HTTPS."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: identifica HTTP en prod y SSL obsoleto, propone TLS 1.2+ y Let's Encrypt, distingue local vs staging público, handshake ordenado correctamente."
        }
      </p>
      <CodeFiddle
        language="http"
        title="Mensaje que no debe viajar sin TLS"
        code={`POST /login HTTP/1.1
Host: api.ejemplo.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...

{"email":"ana@ejemplo.com","password":"secreta123"}`}
      />
      <PracticeExercise
        prompt="Audita el inventario: lista hallazgos (API HTTP en prod, SSL 3.0, staging HTTP), propone correcciones TLS 1.2+ y describe los tres primeros pasos del handshake tras migrar."
        hints={[
          "API prod en HTTP → confidencialidad rota",
          "SSL 3.0 → obsoleto",
          "Staging público = mismo riesgo que prod",
          "ClientHello → ServerHello+Certificate → Finished",
        ]}
        expectedKeywords={["HTTP", "TLS 1.2", "ClientHello", "certificado"]}
        successMessage="Excelente. Se identificaron riesgos de transporte, se propuso TLS moderno y se describió el inicio del handshake."
        rows={6}
      />
    </section>
  );
}
