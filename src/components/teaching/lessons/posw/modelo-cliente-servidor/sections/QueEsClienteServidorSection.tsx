import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function QueEsClienteServidorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es el modelo cliente-servidor?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Modelo cliente-servidor: paradigma de red donde el cliente solicita servicios y el servidor los provee."
          }
        </li>
        <li>
          {
            "Request / Response: intercambio por turnos; el cliente inicia, el servidor responde."
          }
        </li>
        <li>
          {
            "Cliente: navegador, app móvil, curl, Postman. Presenta interfaz o consume API."
          }
        </li>
        <li>
          {
            "Servidor: Apache, Nginx, Node.js, Spring Boot, clusters cloud. Procesa lógica, consulta datos y devuelve respuesta."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Que Es Cliente Servidor"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Que Es Cliente Servidor))
    Modelo cliente servidor paradigma de red donde el cliente solicita servicios
    Request y Response intercambio por turnos
    Cliente navegador app móvil curl Postman
    Servidor Apache Nginx Node`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Analogía del banco"}
      </h3>
      <p className="my-4">
        {
          "Imagina una ventanilla: tú (cliente) pides un servicio; el cajero (servidor) valida, consulta el sistema (BD) y te entrega el resultado. En HTTP: GET /api/cuenta/saldo es la petición; el JSON con el saldo es la respuesta."
        }
      </p>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente
  participant S as Servidor
  C->>S: Request (GET /recurso)
  S->>S: Procesar lógica
  S-->>C: Response (200 + datos)`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Petición y respuesta HTTP"}
      </h3>
      <CodeFiddle
        language="http"
        title="Petición HTTP cruda"
        code={`GET /productos HTTP/1.1
Host: ejemplo.com
Accept: application/json
User-Agent: Mozilla/5.0
Connection: close`}
      />
      <CodeFiddle
        language="http"
        title="Respuesta del servidor"
        code={`HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 87

[{"id":1,"nombre":"Laptop Pro 15","precio":4500000},{"id":2,"nombre":"Mouse","precio":85000}]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Roles de cliente y servidor"}
      </h3>
      <CodeFiddle
        language="bash"
        title="Cliente con curl"
        code={`# Resolver y solicitar recurso (curl hace DNS + TCP + TLS internamente)
curl -v https://ejemplo.com/productos

# Solo cabeceras de respuesta
curl -I https://ejemplo.com/productos`}
      />
      <CodeFiddle
        language="javascript"
        title="Cliente JavaScript (fetch desde React)"
        code={`// El navegador actúa como cliente HTTP
async function cargarProductos() {
  const response = await fetch("https://ejemplo.com/api/productos");
  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
  return response.json();
}`}
      />
      <CodeFiddle
        language="javascript"
        title="Servidor mínimo Node.js"
        code={`import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/productos") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{ id: 1, nombre: "Laptop Pro 15" }]));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => console.log("Servidor en puerto 3000"));`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Malas prácticas en el mundo real"}
      </h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Confundir cliente con frontend solamente (también puede ser curl, app móvil o ATM)."
          }
        </li>
        <li>
          {
            "Asumir que el servidor es un solo equipo (en producción suele ser cluster, CDN o balanceador)."
          }
        </li>
        <li>{"Omitir DNS y TLS al explicar «abrir una web»."}</li>
      </ul>
      <PracticeExercise
        prompt="Explica la analogía banco/ventanilla aplicada a GET /api/cuenta/saldo. ¿Quién es cliente, servidor y qué sería la base de datos?"
        hints={[
          "Tú inicias la petición",
          "El API procesa",
          "La BD almacena saldos",
        ]}
        expectedKeywords={["cliente", "servidor", "base de datos", "petición"]}
        successMessage="Correcto. El cliente solicita; el servidor procesa y consulta la BD; la respuesta vuelve al cliente."
      />
    </section>
  );
}
