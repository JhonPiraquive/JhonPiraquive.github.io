import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RestSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"REST"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Estilo arquitectónico"}</strong>
          {" (Roy Fielding, 2000), no un protocolo único."}
        </li>
        <li>{"URIs = recursos; métodos HTTP = verbos; códigos de estado = resultado."}</li>
        <li>
          {"Principios: Stateless, Client-Server, Cacheable, Layered System, Uniform Interface."}
        </li>
        <li>
          {"En la práctica: "}
          <strong>{"JSON"}</strong>
          {" predominante; contrato opcional con "}
          <strong>{"OpenAPI"}</strong>
          {"."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Principios REST en la práctica"}</h3>
      <CompareTable
        headers={["Principio", "Significado en API"]}
        rows={[
          ["Stateless", "Cada petición lleva toda la info necesaria; sin sesión en servidor"],
          ["Client-Server", "Cliente presenta; servidor expone recursos"],
          ["Cacheable", "GET cacheable con ETag y Cache-Control"],
          ["Uniform Interface", "URIs de recursos + verbos HTTP semánticos"],
          ["Layered System", "Proxies, gateways y balanceadores transparentes"],
        ]}
      />
      <CodeFiddle
        language="http"
        title="Endpoints REST (recursos + verbos)"
        code={`GET    /api/v1/productos        → Lista productos
GET    /api/v1/productos/42     → Obtener producto 42
POST   /api/v1/productos        → Crear producto
PUT    /api/v1/productos/42     → Reemplazar producto 42
PATCH  /api/v1/productos/42     → Actualizar parcialmente
DELETE /api/v1/productos/42     → Eliminar producto 42`}
      />
      <CodeFiddle
        language="json"
        title="Respuesta REST con HATEOAS ligero"
        code={`{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": 4500000,
  "stock": 12,
  "_links": {
    "self": "/api/v1/productos/42",
    "categoria": "/api/v1/categorias/3"
  }
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{'Anti-patrón: "REST" con todo POST'}</h3>
      <p className="my-4">
        {
          'Un RPC que usa solo POST para leer, crear y borrar no es RESTful. REST exige verbos semánticos, recursos identificables y statelessness.'
        }
      </p>
      <PracticeExercise
        prompt="Para una API pública de e-commerce consumida por web y Android, ¿SOAP o REST? Justifica con formato, contrato y curva de aprendizaje."
        hints={["JSON es ligero", "OpenAPI documenta REST", "SOAP es verboso para móvil"]}
        expectedKeywords={["REST", "JSON", "OpenAPI"]}
        successMessage="Correcto. REST+JSON con OpenAPI es el estándar de facto para APIs públicas web y móvil."
      />
    </section>
  );
}
