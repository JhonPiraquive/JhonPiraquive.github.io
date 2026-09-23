import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador — borrador Tienda Andes"}
      </h2>
      <p className="my-4">
        {
          "Consola .NET que mezcle interfaz e abstracta en el mismo dominio de la tienda. El capstone final de Clase 3 está en la página practica-y-cierre; aquí calientas motores."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Cobro (interfaz)"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"IPago con Pagar(decimal monto)."}</li>
        <li>{"PagoTarjeta, PagoTransferencia, PagoEfectivo."}</li>
        <li>{"Caja(IPago); en Main, tres cajas cobran el mismo monto con métodos distintos."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Avisos (clase abstracta)"}</p>
      <ol className="my-4 list-decimal pl-6" start={4}>
        <li>{"NotificacionPedido con Enviar común y EnviarCore abstracto."}</li>
        <li>{"NotificacionEmail y NotificacionSms; validación de mensaje vacío solo en la base."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Persistencia (interfaz)"}</p>
      <ol className="my-4 list-decimal pl-6" start={6}>
        <li>{"IRepositorioPedidos + ServicioPedidos; RepositorioMemoria y RepositorioConsola."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Justificación"}</p>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>{"Comentario breve: por qué pagos y repo usan interfaz y avisos usan abstracta."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Éxito: compila; nuevos pagos o repos sin editar Caja ni ServicioPedidos; flujo Enviar no duplicado en Email/Sms."
        }
      </p>
      <PracticeExercise
        prompt="Redacta la Parte D: interfaz vs abstracta en este diseño de Tienda Andes."
        hints={[
          "Pagos no comparten flujo en una base",
          "Avisos comparten validación y secuencia Enviar",
          "Template Method en NotificacionPedido",
        ]}
        expectedKeywords={["interfaz", "abstracta", "Template", "contrato"]}
        successMessage="Excelente. Criterio: estado/flujo compartido vs contrato puro."
        rows={6}
      />
    </section>
  );
}
