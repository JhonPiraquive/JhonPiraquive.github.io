import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CrudHttpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"CRUD y métodos HTTP"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"CRUD: Create, Read, Update, Delete sobre recursos."}</li>
        <li>{"Cada operación se mapea a un verbo HTTP y una URI de recurso."}</li>
        <li>{"Create → POST en colección; Read → GET; Update total → PUT; Update parcial → PATCH; Delete → DELETE."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tabla CRUD ↔ HTTP"}</h3>
      <CompareTable
        headers={["Operación", "Método", "URI ejemplo"]}
        rows={[
          ["Create (crear)", "POST", "/api/productos"],
          ["Read (leer uno)", "GET", "/api/productos/42"],
          ["Read (listar)", "GET", "/api/productos"],
          ["Update total", "PUT", "/api/productos/42"],
          ["Update parcial", "PATCH", "/api/productos/42"],
          ["Delete", "DELETE", "/api/productos/42"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ciclo CRUD completo"}</h3>
      <CodeFiddle
        language="http"
        title="Ciclo CRUD completo"
        code={`# Crear
POST /api/productos HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{"nombre": "Teclado mecánico", "precio": 320000}

# Leer
GET /api/productos/7 HTTP/1.1
Host: tienda.ejemplo.com
Accept: application/json

# Actualizar parcialmente
PATCH /api/productos/7 HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{"precio": 295000}

# Eliminar
DELETE /api/productos/7 HTTP/1.1
Host: tienda.ejemplo.com`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flujo secuencia CRUD"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente
  participant S as Servidor
  C->>S: POST /api/productos
  S-->>C: 201 Created + Location
  C->>S: GET /api/productos/7
  S-->>C: 200 OK + JSON
  C->>S: PATCH /api/productos/7
  S-->>C: 200 OK
  C->>S: DELETE /api/productos/7
  S-->>C: 204 No Content`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-patrón: POST para todo"}</h3>
      <p className="my-4">
        {
          "Usar POST para actualizar o eliminar rompe la semántica HTTP, dificulta caché y proxies, y confunde a los consumidores de la API. Las actualizaciones deben ser PUT o PATCH; la eliminación, DELETE."
        }
      </p>
      <CodeChallenge
        title="Completa el mapping CRUD"
        template={`Listar todos los productos → {{blank1}} \`/api/productos\`
Eliminar producto 42 → {{blank2}} \`/api/productos/42\``}
        blanks={[
          { id: "blank1", answer: "GET", placeholder: "método" },
          { id: "blank2", answer: "DELETE", placeholder: "método" },
        ]}
      />
    </section>
  );
}
