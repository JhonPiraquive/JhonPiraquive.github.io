import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function GrpcWebsocketsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"gRPC y WebSockets"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"gRPC — microservicios internos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Framework RPC de "}
          <strong>{"alto rendimiento"}</strong>
          {" (Google, 2015)."}
        </li>
        <li>
          <strong>{"HTTP/2"}</strong>
          {" + "}
          <strong>{"Protocol Buffers"}</strong>
          {" (binario, 3–10× más compacto que JSON)."}
        </li>
        <li>{"Contrato en .proto; generación de código multi-lenguaje."}</li>
        <li>
          <strong>{"Streaming bidireccional"}</strong>
          {"; ideal servidor-a-servidor en datacenter."}
        </li>
        <li>
          <strong>{"No expuesto directo al navegador"}</strong>
          {" — usar gRPC-Web o gateway REST/GraphQL."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Contrato gRPC (.proto)"}</h3>
      <pre className="my-4 overflow-x-auto rounded-lg bg-[var(--color-neutral-light)] p-4 text-sm">
        {`syntax = "proto3";

service ProductoService {
  rpc ObtenerProducto (ProductoRequest) returns (ProductoResponse);
}

message ProductoRequest {
  int32 id = 1;
}

message ProductoResponse {
  int32 id = 1;
  string nombre = 2;
  double precio = 3;
  int32 stock = 4;
}`}
      </pre>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"WebSockets — tiempo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Protocolo "}
          <strong>{"full-duplex"}</strong>
          {" sobre TCP persistente."}
        </li>
        <li>
          {"Handshake HTTP con Upgrade: websocket → respuesta "}
          <strong>{"101 Switching Protocols"}</strong>
          {"."}
        </li>
        <li>{"Mensajes en ambas direcciones sin nueva petición HTTP por mensaje."}</li>
        <li>{"Casos: chat, notificaciones push, dashboards live, trading, juegos multijugador."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Handshake WebSocket"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente
  participant S as Servidor
  C->>S: GET /ws (Upgrade: websocket)
  S-->>C: 101 Switching Protocols
  C->>S: mensaje JSON
  S-->>C: respuesta JSON
  C->>S: close`}
      />
      <CodeFiddle
        language="javascript"
        title="Cliente WebSocket (JavaScript)"
        code={`const ws = new WebSocket('wss://api.ejemplo.com/chat');
ws.onopen = () => ws.send(JSON.stringify({ tipo: 'unirse', sala: 'general' }));
ws.onmessage = (e) => console.log(JSON.parse(e.data));`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"gRPC vs WebSockets"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="px-3 py-2 text-left font-semibold">{"Tecnología"}</th>
            <th className="px-3 py-2 text-left font-semibold">{"Dirección"}</th>
            <th className="px-3 py-2 text-left font-semibold">{"Formato"}</th>
            <th className="px-3 py-2 text-left font-semibold">{"Ideal para"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-light)]">
            <td className="px-3 py-2">{"gRPC"}</td>
            <td className="px-3 py-2">{"RPC request/response + streaming"}</td>
            <td className="px-3 py-2">{"Protobuf binario"}</td>
            <td className="px-3 py-2">{"Microservicios internos"}</td>
          </tr>
          <tr>
            <td className="px-3 py-2">{"WebSockets"}</td>
            <td className="px-3 py-2">{"Full-duplex persistente"}</td>
            <td className="px-3 py-2">{"JSON/texto típico"}</td>
            <td className="px-3 py-2">{"Push tiempo real al cliente"}</td>
          </tr>
        </tbody>
      </table>
      <Callout title="Caso real: panel admin">
        {
          "8 requests REST para cargar pedido+cliente+items (under-fetching). Migración: GraphQL en BFF con query anidada; WebSockets para push de nuevo_pedido; microservicios internos a gRPC por eficiencia protobuf."
        }
      </Callout>
      <PracticeExercise
        prompt="¿Por qué gRPC es preferible entre microservicios en el mismo datacenter pero no se expone directo al navegador del usuario?"
        hints={["Protobuf binario", "HTTP/2", "Browsers no hablan gRPC nativo"]}
        expectedKeywords={["protobuf", "HTTP/2", "navegador", "gRPC-Web"]}
        successMessage="Correcto. gRPC brilla servidor-a-servidor; el browser necesita gRPC-Web o un gateway REST/GraphQL."
      />
    </section>
  );
}
