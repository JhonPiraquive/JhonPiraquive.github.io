import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador — TiendaMonolito → SOLID"}
      </h2>
      <p className="my-4">
        {
          "Punto de partida: TiendaMonolito (~40 líneas) que calcula total, aplica descuento, guarda pedido, notifica y elige envío con switch(tipo). Llegar a diseño alineado con los cinco principios."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — SRP"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Extraer CalculadoraTotal, AplicadorDescuento, CreadorPedido, INotificador."}</li>
        <li>{"OrquestadorTienda coordina; sin reglas mezcladas con Console.WriteLine de infra."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — OCP + ISP"}</p>
      <ol className="my-4 list-decimal pl-6" start={3}>
        <li>{"IEnvio con Normal/Express; eliminar switch de envío."}</li>
        <li>{"INotificador pequeña; no mezclar impresión de ticket en la misma interfaz."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — LSP + DIP"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>{"Ningún Producto rompe CalcularDescuento() en el foreach de la caja."}</li>
        <li>{"IRepositorioPedidos inyectado; Memoria/SQL intercambiables en Main."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Evidencia"}</p>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>{"Diagrama Mermaid dominio → abstracciones ← infra."}</li>
        <li>{"EnvioGratis y NotificadorSms sin editar OrquestadorTienda."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Éxito: sin switch de envío en orquestador; roles claros; extensión por clases nuevas; diagrama = código."
        }
      </p>
      <CodeChallenge
        title="Reemplaza el switch de envío"
        template={`var costo = {{b1}}.Calcular(pesoKg);`}
        blanks={[
          {
            id: "b1",
            answer: "_envio",
            placeholder: "Campo IEnvio inyectado en el orquestador",
          },
        ]}
      />
    </section>
  );
}
