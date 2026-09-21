import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: caja registradora y alertas de sistema"}
      </h2>
      <p className="my-4">
        {
          "Prototipo .NET que combine interfaces y clase abstracta sin mezclar responsabilidades."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Pagos (interfaz)"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"IPago con Pagar(decimal monto)."}</li>
        <li>{"Implementaciones PagoTarjeta, PagoTransferencia, PagoEfectivo."}</li>
        <li>
          {
            "Caja con constructor que recibe IPago; en Main, tres cajas con métodos distintos cobrando el mismo monto."
          }
        </li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Notificaciones (clase abstracta)"}</p>
      <ol className="my-4 list-decimal pl-6" start={4}>
        <li>{"abstract class Notificacion con Enviar (flujo común) y EnviarCore abstracto."}</li>
        <li>{"NotificacionEmail y NotificacionSms; al menos una validación en la base (mensaje no vacío)."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Logging (interfaz auxiliar)"}</p>
      <ol className="my-4 list-decimal pl-6" start={6}>
        <li>{"ILogger con Info(string); Servicio que recibe ILogger en constructor."}</li>
        <li>{"LoggerConsola y LoggerSilencioso; demostrar Servicio sin cambios al intercambiar logger."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Criterio de diseño"}</p>
      <ol className="my-4 list-decimal pl-6" start={8}>
        <li>
          {
            "Comentario breve: por qué pagos usan interfaz y notificaciones usan clase abstracta en este diseño."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: compila; nuevos pagos y loggers sin editar Caja ni Servicio; flujo común de notificación no duplicado en derivadas; justificación coherente con la lección."
        }
      </p>
      <PracticeExercise
        prompt="Redacta la justificación (Parte D): ¿por qué pagos usan interfaz y notificaciones usan clase abstracta?"
        hints={[
          "Pagos no comparten estado ni flujo común en la base",
          "Notificaciones comparten validación y secuencia Enviar",
          "IPago es contrato puro; Notificacion es Template Method",
        ]}
        expectedKeywords={["interfaz", "abstracta", "Template", "contrato"]}
        successMessage="Excelente. Has aplicado el criterio estado compartido vs contrato puro."
        rows={6}
      />
    </section>
  );
}
