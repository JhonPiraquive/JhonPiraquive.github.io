import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: catálogo y avisos en consola"}
      </h2>
      <p className="my-4">
        {
          "Prototipo .NET para Tienda Andes: herencia donde el «es un» es real y composición para los avisos de pedido."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Catálogo"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Producto con SKU, precio, constructor validado y virtual DescripcionEtiqueta()."}</li>
        <li>{"Libro y Gadget con override (mensajes distintos y creíbles)."}</li>
        <li>{"Método que reciba List<Producto> e imprima DescripcionEtiqueta() de cada ítem."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Avisos (sin herencia entre canales)"}</p>
      <ol className="my-4 list-decimal pl-6" start={4}>
        <li>{"Interfaz ICanalAviso con Enviar(string)."}</li>
        <li>{"AvisoEmail, AvisoSms y al menos un tercer canal."}</li>
        <li>{"ConfirmacionPedido con constructor que recibe ICanalAviso y PedidoListo(id)."}</li>
        <li>{"En Main, dos confirmaciones con canales distintos."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Justificación"}</p>
      <ol className="my-4 list-decimal pl-6" start={8}>
        <li>
          {
            "Comentario breve: por qué Gadget hereda de Producto y por qué AvisoEmail no hereda de ConfirmacionPedido."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Éxito: compila; cada producto imprime su etiqueta; nuevos canales no editan ConfirmacionPedido; la justificación distingue «es un» y «tiene un»."
        }
      </p>
      <PracticeExercise
        prompt="Redacta la Parte C: ¿Gadget es un Producto? ¿AvisoEmail es un ConfirmacionPedido?"
        hints={[
          "Gadget comparte rol de ítem de catálogo",
          "Email es medio de entrega, no tipo de confirmación",
          "Menciona composición o interfaz",
        ]}
        expectedKeywords={["es un", "tiene un", "composición", "interfaz"]}
        successMessage="Excelente. Separaste especialización de catálogo y estrategia de aviso."
        rows={6}
      />
    </section>
  );
}
