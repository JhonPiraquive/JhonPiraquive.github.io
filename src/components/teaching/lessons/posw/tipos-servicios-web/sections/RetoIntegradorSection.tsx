import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: plataforma delivery"}
      </h2>
      <p className="my-4 font-semibold">{"Arquitectura de servicios para una plataforma de delivery"}</p>
      <p className="my-4">
        {
          "Startup de domicilios con: app cliente (React Native), panel restaurante (web), riders con GPS en tiempo real, pasarela bancaria SOAP legacy y 12 microservicios internos."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Asigna SOAP, REST, GraphQL, gRPC o WebSockets a cada canal (app cliente, panel, tracking riders, pasarela bancaria, comunicación entre microservicios). Justifica cada elección."
          }
        </li>
        <li>
          {
            "Escribe un ejemplo de query GraphQL que obtenga pedido + restaurante + items en una sola petición."
          }
        </li>
        <li>
          {"Esboza el handshake WebSocket para actualizar posición del rider en el mapa del cliente."}
        </li>
        <li>
          {"Indica qué formato (XML vs JSON vs protobuf) usarías en cada capa y por qué."}
        </li>
        <li>{"Señala el anti-patrón de exponer gRPC directo a la app móvil."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: al menos 4 tecnologías bien justificadas, ejemplos GraphQL y WebSocket válidos, distingue público vs interno vs legacy."
        }
      </p>
      <CodeFiddle
        language="graphql"
        title="Query pedido completo"
        code={`query PedidoCompleto($id: ID!) {
  pedido(id: $id) {
    id
    estado
    restaurante { nombre direccion }
    items { producto { nombre } cantidad }
  }
}`}
      />
      <CodeFiddle
        language="http"
        title="Handshake WebSocket"
        code={`GET /ws/tracking HTTP/1.1
Host: api.delivery.ejemplo.com
Upgrade: websocket
Connection: Upgrade

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade`}
      />
      <PracticeExercise
        prompt="Implementa el reto delivery: asigna tecnología a cada canal (app, panel, riders, banco, microservicios) y justifica al menos cuatro elecciones."
        hints={[
          "App → REST o GraphQL BFF",
          "Riders GPS → WebSockets",
          "Pasarela → SOAP legacy",
          "Entre pods → gRPC",
          "No gRPC directo al móvil",
        ]}
        expectedKeywords={["REST", "WebSockets", "SOAP", "gRPC"]}
        successMessage="Excelente. Has diseñado una arquitectura híbrida coherente con público, interno y legacy."
        rows={6}
      />
    </section>
  );
}
