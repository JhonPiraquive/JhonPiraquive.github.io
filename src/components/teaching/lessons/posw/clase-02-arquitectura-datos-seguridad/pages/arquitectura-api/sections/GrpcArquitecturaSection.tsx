import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function GrpcArquitecturaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"gRPC: Protobuf y HTTP/2"}
      </h2>
      <MermaidDiagram
        title="Llamada gRPC unary"
        description="Cliente usa stub generado desde .proto sobre HTTP/2"
        chart={`sequenceDiagram
  participant C as Cliente
  participant Stub as Stub generado
  participant S as Servidor gRPC
  C->>Stub: ObtenerProducto id=42
  Stub->>S: Protobuf sobre HTTP/2
  S-->>Stub: Producto binario
  Stub-->>C: Objeto tipado
`}
      />
      <CodeFiddle
        language="plaintext"
        title="Definición .proto"
        code={`syntax = "proto3";

service ProductoService {
  rpc ObtenerProducto(ProductoId) returns (Producto);
  rpc ListarProductos(ListarRequest) returns (stream Producto);
}

message ProductoId { int32 id = 1; }

message Producto {
  int32 id = 1;
  string nombre = 2;
  double precio = 3;
}`}
      />
      <CodeFiddle
        language="csharp"
        title="Cliente gRPC en C#"
        code={`var channel = GrpcChannel.ForAddress("https://localhost:5001");
var client = new ProductoService.ProductoServiceClient(channel);

var response = await client.ObtenerProductoAsync(
    new ProductoId { Id = 42 }
);
Console.WriteLine(response.Nombre);`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Características"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"HTTP/2 + Protobuf binario — bajo overhead."}</li>
        <li>{"Stubs generados desde .proto."}</li>
        <li>{"Unary y streaming (server, client, bidireccional)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Malas prácticas en el mundo real"}
      </h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "gRPC expuesto al navegador sin proxy/gateway — incompatibilidad con clientes web puros."
          }
        </li>
        <li>
          {"Usar gRPC para APIs públicas simples cuando REST/JSON basta."}
        </li>
      </ul>
    </section>
  );
}
