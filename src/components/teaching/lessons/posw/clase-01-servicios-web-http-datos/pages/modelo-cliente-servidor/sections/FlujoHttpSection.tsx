import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function FlujoHttpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Flujo al abrir una URL: DNS, TCP, TLS y HTTP"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Los 8 pasos al escribir https://ejemplo.com/productos"}
      </h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Resolución DNS: ejemplo.com → dirección IP."}</li>
        <li>{"Conexión TCP al puerto 443 (HTTPS)."}</li>
        <li>{"Handshake TLS: canal cifrado."}</li>
        <li>{"HTTP Request: GET /productos."}</li>
        <li>{"Servidor procesa: lógica de negocio."}</li>
        <li>{"Consulta BD (si aplica): SELECT productos."}</li>
        <li>{"HTTP Response: status + cuerpo JSON/HTML."}</li>
        <li>{"Renderizado en el cliente (navegador pinta la UI)."}</li>
      </ol>
      <CompareTable title="Flujo al abrir una URL" headers={["Paso", "Qué ocurre"]} rows={[
          {
            title: "1. DNS",
            content: "El navegador resuelve ejemplo.com a una IP (ej. 190.25.80.42).",
          },
          {
            title: "2. TCP + TLS",
            content: "Se abre conexión fiable al puerto 443 y se negocia cifrado HTTPS.",
          },
          {
            title: "3. HTTP Request",
            content: "El cliente envía GET /productos con cabeceras Accept y Host.",
          },
          {
            title: "4. Servidor + BD",
            content: "El backend ejecuta lógica y puede consultar PostgreSQL u otro motor.",
          },
          {
            title: "5. HTTP Response",
            content: "El servidor devuelve 200 OK con JSON o HTML.",
          },
          {
            title: "6. Renderizado",
            content:
              "El navegador parsea la respuesta y pinta la interfaz; puede disparar más requests.",
          },
        ].map((s) => [s.title, s.content])} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Secuencia de carga de página"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente (Navegador)
  participant D as DNS
  participant S as Servidor
  participant DB as Base de Datos
  C->>D: Resolver ejemplo.com
  D-->>C: IP 190.25.80.42
  C->>S: TCP + TLS + GET /productos
  S->>DB: SELECT productos
  DB-->>S: Filas
  S-->>C: HTTP 200 + JSON
  C->>C: Renderizar UI`}
      />
      <p className="my-4">
        <strong>{"Dato clave:"}</strong>
        {
          " Una sola URL puede disparar 50–100 requests HTTP adicionales: JS, CSS, fuentes, imágenes y llamadas API. Optimizar solo el HTML inicial no basta."
        }
      </p>
    </section>
  );
}
