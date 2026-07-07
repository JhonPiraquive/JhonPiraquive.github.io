import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: stack staging para startup LATAM"}
      </h2>
      <p className="my-4">
        {
          "Una startup en Guadalajara lanza `tienda.ejemplo.mx` y necesita entorno de pruebas en `staging.tienda.ejemplo.mx` antes de producción."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Requisitos"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>{"DNS:"}</strong>
          {" registro A de `staging` apuntando al VPS; documentar TTL elegido."}
        </li>
        <li>
          <strong>{"HTTPS:"}</strong>
          {" Nginx en VPS con certificado Let's Encrypt (`certbot --nginx`)."}
        </li>
        <li>
          <strong>{"Deploy:"}</strong>
          {" acceso por SSH con clave (sin contraseña root); usuario `deploy` con permisos Docker."}
        </li>
        <li>
          <strong>{"Contenedores:"}</strong>
          {" `docker-compose.yml` con API de prueba (Node o nginx estático) + healthcheck."}
        </li>
        <li>
          <strong>{"Fallo simulado:"}</strong>
          {
            " documentar un incidente (ej. certificado expirado, contenedor sin puerto mapeado, DNS sin propagar) y cómo lo diagnosticaste con la tabla de la lección."
          }
        </li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Entregables"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lista de registros DNS (mínimo A para staging)."}</li>
        <li>{"Fragmento de `Dockerfile` o `docker-compose.yml` usado."}</li>
        <li>{"Comandos: `ssh`, `certbot`, `docker compose up`, herramienta de diagnóstico (`dig`, `docker logs`, etc.)."}</li>
        <li>{"Decisión justificada: ¿por qué contenedor para staging y no VM completa?"}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Criterio de éxito"}</h3>
      <p className="my-4">
        {
          "DNS coherente, HTTPS activo en staging, deploy reproducible por SSH + Compose, fallo simulado resuelto con metodología por capas documentada."
        }
      </p>
      <PracticeExercise
        prompt="En el reto integrador, documenta un fallo simulado (certificado expirado, puerto no mapeado o DNS sin propagar). Escribe: síntoma → capa → herramienta de diagnóstico → corrección aplicada."
        hints={[
          "Usa la tabla de diagnóstico de la lección",
          "Un cambio a la vez",
          "Incluye al menos un comando (`dig`, `docker logs`, `curl -vI`)",
        ]}
        expectedKeywords={["síntoma", "capa", "dig", "docker", "certbot"]}
        successMessage="Buen enfoque. Documentar síntoma → capa → acción es la base de un runbook operativo."
        rows={5}
      />
    </section>
  );
}
