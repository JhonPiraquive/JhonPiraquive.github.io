import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: feature con IA en el flujo"}
      </h2>
      <p className="my-4 font-semibold">{"Integra IA en el flujo de un feature real"}</p>
      <p className="my-4">
        {"Tarea: endpoint POST /api/v1/productos en NestJS + PostgreSQL."}
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Redacta un prompt completo (stack, DIP, validación, códigos HTTP, sin any)."
          }
        </li>
        <li>{"Simula revisión: lista 3 cosas que verificarías en el código generado."}</li>
        <li>{"Escribe un test unitario mínimo que debe pasar antes del merge."}</li>
        <li>{"Crea esqueleto de CLAUDE.md (10 líneas) para tu repo ficticio."}</li>
        <li>{"Describe qué datos nunca pegarías en un chat público."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: prompt accionable, checklist de verificación concreta, test con caso de error, política de privacidad clara."
        }
      </p>
      <PracticeExercise
        prompt="Completa el reto: escribe las 3 verificaciones obligatorias y 2 datos que nunca enviarías a IA pública."
        hints={[
          "Verificar paquetes en npm",
          "Test de caso 404 o validación",
          "No API keys ni PII",
        ]}
        expectedKeywords={["DIP", "test", "secrets", "PII"]}
        successMessage="Excelente. Has integrado IA con verificación y política de privacidad."
        rows={6}
      />
    </section>
  );
}
