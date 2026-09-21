import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: tienda refactorizada"}
      </h2>
      <p className="my-4 font-semibold">{"Tienda refactorizada con SOLID"}</p>
      <p className="my-4">
        {
          "Partir de un mini-monolito y llegar a diseño alineado a los cinco principios."
        }
      </p>
      <p className="my-4">
        {
          "Código inicial: clase TiendaMonolito que calcula total con descuento, guarda pedido en consola, envía notificación y elige envío con switch(tipo)."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — SRP"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Extraer CalculadoraTotal, AplicadorDescuento, CreadorPedido, NotificadorConsola (o INotificador)."
          }
        </li>
        <li>{"OrquestadorTienda solo coordina; sin reglas de negocio mezcladas con formato de salida."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — OCP + ISP"}</p>
      <ol className="my-4 list-decimal pl-6" start={3}>
        <li>{"IEnvio con EnvioNormal y EnvioExpress; eliminar switch de tipo de envío."}</li>
        <li>{"INotificador pequeña; no incluir métodos de impresión o reporte en la misma interfaz."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — LSP + DIP"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>
          {
            "Si hay jerarquía de productos, asegurar que ninguna derivada rompa CalcularPrecio() del contrato base."
          }
        </li>
        <li>
          {
            "IRepositorioPedidos inyectado en orquestador; RepositorioConsola y RepositorioMemoria intercambiables en Main."
          }
        </li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Diagrama y extensión"}</p>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>{"Diagrama Mermaid con dependencias (dominio → abstracciones ← infra)."}</li>
        <li>
          {
            "Añadir EnvioGratis y NotificadorSms sin editar OrquestadorTienda (solo composición en Main)."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: compila; sin switch por tipo de envío en orquestador; clases con un rol claro; nueva estrategia de envío/notificación por nueva clase; diagrama coherente con código."
        }
      </p>
      <CodeChallenge
        title="Elimina el switch de envío"
        template={`// En OrquestadorTienda, reemplaza switch por:
var costo = {{b1}}.Calcular(peso);`}
        blanks={[
          {
            id: "b1",
            answer: "_envio",
            placeholder: "Campo readonly de tipo IEnvio inyectado por constructor",
          },
        ]}
      />
    </section>
  );
}
