import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function MetodosHttpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Métodos HTTP (verbos)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Los métodos indican la acción sobre un recurso en una URI."}</li>
        <li>{"Semántica definida en RFC 9110."}</li>
        <li>
          {
            "Propiedades clave: Safe (no cambia estado) e Idempotente (repetir = mismo efecto)."
          }
        </li>
        <li>
          {
            "GET, HEAD, OPTIONS son Safe; POST y PATCH en general no son idempotentes."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — MetodosHttp"
        chart={`mindmap
  root((MetodosHttp))
    Los métodos indican la acción sobre un recurso en una URI
    Semántica definida en RFC 9110
    Propiedades clave
    GET HEAD OPTIONS son Safe POST y PATCH en general no son`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Qué son los métodos HTTP"}
      </h3>
      <p className="my-4">
        {
          "Un método HTTP (verbo) expresa la intención del cliente: leer, crear, reemplazar, modificar parcialmente o eliminar un recurso. El servidor interpreta método + URI + headers + cuerpo para ejecutar la operación."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Métodos principales"}
      </h3>
      <CompareTable
        headers={["Método", "Safe", "Idempotente", "Uso típico"]}
        rows={[
          [
            "GET",
            "Sí",
            "Sí",
            "Obtener representación del recurso (solo lectura)",
          ],
          [
            "POST",
            "No",
            "No",
            "Crear recurso o procesar acción no idempotente",
          ],
          ["PUT", "No", "Sí", "Reemplazar recurso completo en el URI"],
          ["PATCH", "No", "No (en general)", "Actualización parcial de campos"],
          ["DELETE", "No", "Sí", "Eliminar el recurso del URI"],
          [
            "HEAD",
            "Sí",
            "Sí",
            "Como GET sin cuerpo; verificar existencia o headers",
          ],
          ["OPTIONS", "Sí", "Sí", "Métodos soportados; preflight CORS"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Ejemplo: GET vs POST"}
      </h3>
      <CodeFiddle
        language="http"
        title="GET producto"
        code={`GET /api/productos/42 HTTP/1.1
Host: tienda.ejemplo.com
Accept: application/json`}
      />
      <CodeFiddle
        language="http"
        title="POST producto"
        code={`POST /api/productos HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{"nombre": "Teclado mecánico", "precio": 320000}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Safe e Idempotente explicados"}
      </h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Safe: el método no modifica estado en el servidor. GET solo lee; nunca uses GET para eliminar (GET /api/usuarios/5/eliminar es un anti-patrón grave: se cachea y se re-ejecuta)."
          }
        </li>
        <li>
          {
            "Idempotente: enviar la misma petición N veces produce el mismo efecto que una vez. PUT y DELETE son idempotentes; POST no lo es — repetir POST /api/pagos puede duplicar cobros."
          }
        </li>
      </ul>
      <StepReveal
        title="Safe e Idempotente en la práctica"
        steps={[
          {
            title: "1. GET es Safe",
            content:
              "Solicitar GET /api/productos/42 diez veces no crea ni borra productos; solo lee la representación actual.",
          },
          {
            title: "2. POST no es idempotente",
            content:
              "Dos POST idénticos a /api/pagos pueden generar dos transacciones distintas si no hay clave de idempotencia.",
          },
          {
            title: "3. PUT es idempotente",
            content:
              "Reemplazar el producto 42 con el mismo JSON varias veces deja el recurso en el mismo estado final.",
          },
          {
            title: "4. DELETE es idempotente",
            content:
              "Eliminar el recurso 42 dos veces: la primera devuelve 204; la segunda puede devolver 404, pero el estado final es 'no existe'.",
          },
        ]}
      />
      <Callout title="Caso real: doble cobro por reintento">
        {
          "Un móvil con mala conexión reenvía POST /api/pagos al no recibir respuesta. Sin Idempotency-Key ni verificación de duplicados, el backend cobra dos veces. Documenta que POST no es idempotente; usa PUT/PATCH para actualizaciones de estado."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Para cada método indica Safe e Idempotente: GET, POST, PUT, DELETE. Explica por qué POST no es idempotente con un ejemplo de pago."
        hints={[
          "Safe = no modifica estado",
          "POST crea efectos nuevos en cada envío",
          "Piensa en doble cobro",
        ]}
        expectedKeywords={["GET", "Safe", "POST", "idempotente", "pago"]}
        successMessage="Correcto. GET es Safe e idempotente; POST no es idempotente porque cada envío puede crear un nuevo efecto (p. ej. otro cargo)."
      />
    </section>
  );
}
