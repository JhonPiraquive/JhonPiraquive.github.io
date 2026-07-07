import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: arquitectura de reservas de cine"}
      </h2>
      <p className="my-4 font-semibold">{"Diseña la arquitectura de un sistema de reservas de cine"}</p>
      <p className="my-4">
        {
          "Requisitos: app web React, app móvil, API de butacas en tiempo real, pasarela de pago externa, panel admin."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Identifica al menos 3 tipos de cliente y 2 tipos de servidor (o servicios)."}</li>
        <li>{"Elige entre 3-Tier o microservicios y justifica con un criterio de escala o equipo."}</li>
        <li>
          {"Enumera el flujo HTTP cuando un usuario reserva la butaca F-12 (desde clic hasta confirmación)."}
        </li>
        <li>
          {
            "Indica qué protocolo usarías para actualizar butacas ocupadas en tiempo real (HTTP polling vs WebSockets)."
          }
        </li>
        <li>{"Señala un error de diseño si la app móvil se conectara directo a PostgreSQL."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: separación clara de capas, BD no expuesta al cliente, flujo DNS→HTTP documentado, justificación de variante arquitectónica."
        }
      </p>
      <PracticeExercise
        prompt="Completa el reto de reservas de cine: nombra clientes, servidores, flujo HTTP de reserva F-12 y protocolo para butacas en tiempo real."
        hints={[
          "React, móvil y panel admin como clientes",
          "API de butacas + pasarela de pago",
          "DNS → TLS → POST reserva",
          "WebSockets para tiempo real",
        ]}
        expectedKeywords={["WebSocket", "API", "DNS", "PostgreSQL"]}
        successMessage="Excelente. Capas separadas, BD no expuesta, flujo DNS→HTTP documentado y variante arquitectónica justificada."
        rows={6}
      />
    </section>
  );
}
