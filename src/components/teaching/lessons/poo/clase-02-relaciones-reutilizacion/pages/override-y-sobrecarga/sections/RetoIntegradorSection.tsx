import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: notificaciones y operaciones"}
      </h2>
      <p className="my-4 font-semibold">{"Notificaciones y operaciones con override y overload"}</p>
      <p className="my-4">
        {"Sistema consola .NET que combine especialización por herencia y API sobrecargada."}
      </p>
      <p className="my-4 font-semibold">{"Parte A — Override (notificaciones)"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Mensaje con virtual void Enviar(string texto)."}</li>
        <li>{"MensajeEmail y MensajeSms con override."}</li>
        <li>
          {
            "Clase ServicioNotificaciones con método EnviarATodos(List<Mensaje> mensajes, string texto) — bucle sin if por tipo."
          }
        </li>
        <li>{"En Main, crear lista con ambos canales y ejecutar."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Overload (calculadora de pedidos)"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>{"CalculadoraPedido con decimal Total(decimal precio, int cantidad)."}</li>
        <li>{"Sobrecarga decimal Total(decimal precio, int cantidad, decimal descuentoPorcentaje)."}</li>
        <li>{"Sobrecarga decimal Total(params decimal[] precios) para sumar líneas sueltas."}</li>
        <li>{"En Main, llamar las tres versiones e imprimir resultados coherentes."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Comparación `new` vs `override`"}</p>
      <ol className="my-4 list-decimal pl-6" start={9}>
        <li>{"Clase MensajePush : Mensaje con override correcto."}</li>
        <li>
          {
            "Documentar en comentario qué pasaría si se usara new en lugar de override con variable Mensaje."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: compila; foreach polimórfico sin ramas por tipo; tres sobrecargas de Total resolviendo sin ambigüedad; estudiante explica runtime vs compile time."
        }
      </p>
      <PracticeExercise
        prompt="En el reto, enumera qué partes usan resolución en runtime y cuáles en compile time. Justifica con un ejemplo de cada una."
        hints={[
          "Override Enviar en foreach — runtime",
          "Total con distintos argumentos — compile time",
          "MensajePush override vs new — contraste runtime",
        ]}
        expectedKeywords={["runtime", "compile", "override", "overload"]}
        successMessage="Excelente. Has integrado ambos mecanismos en un mismo sistema."
        rows={6}
      />
    </section>
  );
}
