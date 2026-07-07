import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function DisenoApiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diseño de APIs"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"URIs con sustantivos, no verbos; métodos HTTP expresan la acción."}</li>
        <li>{"Versionado desde el día uno (/api/v1/)."}</li>
        <li>{"HTTPS en producción; códigos de estado correctos; errores JSON descriptivos."}</li>
        <li>{"Paginación, documentación OpenAPI, rate limiting y autenticación (JWT/OAuth)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Buenas prácticas vs anti-patrones"}</h3>
      <CompareTable
        headers={["Buena práctica", "Anti-patrón", "Por qué importa"]}
        rows={[
          [
            "GET /api/v1/productos",
            "GET /obtenerProductos",
            "El verbo va en el método HTTP, no en la URI",
          ],
          [
            "/api/v1/productos?page=1&limit=20",
            "Listar todo sin paginación",
            "Evita respuestas enormes y timeouts",
          ],
          [
            "404 Not Found para recurso inexistente",
            "200 OK con { error: true }",
            "El status code comunica el resultado real",
          ],
          [
            "Versionar /api/v1/ desde el lanzamiento",
            "Cambios breaking en /api/productos",
            "Protege integraciones de partners y clientes",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Respuesta de error bien diseñada"}</h3>
      <CodeFiddle
        language="json"
        title="Respuesta de error bien diseñada"
        code={`{
  "error": "VALIDATION_ERROR",
  "mensaje": "El precio debe ser mayor a 0.",
  "campos": {
    "precio": "Valor inválido: -500"
  },
  "documentacion": "https://api.ejemplo.com/docs/v1/productos"
}`}
      />
      <Callout title="Caso real: fintech sin versionado">
        {
          "Una fintech expone POST /api/pagos sin versión. Seis meses después cambia el campo monto de entero a objeto { valor, moneda }. Tres partners dejan de procesar pagos. Decisión: versionar desde el lanzamiento (/api/v1/pagos); cambios breaking en /api/v2/ con periodo de deprecación."
        }
      </Callout>
      <CodeChallenge
        title="Completa el mapping de endpoints"
        template={`Listar usuarios → GET {{blank1}}
Crear producto → POST {{blank2}}
Nunca usar → GET {{blank3}}`}
        blanks={[
          { id: "blank1", answer: "/api/v1/usuarios", placeholder: "URI" },
          { id: "blank2", answer: "/api/v1/productos", placeholder: "URI" },
          { id: "blank3", answer: "/eliminarProducto/42", placeholder: "anti-patrón" },
        ]}
      />
    </section>
  );
}
