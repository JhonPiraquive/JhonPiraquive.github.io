import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: biblioteca universitaria"}
      </h2>
      <p className="my-4 font-semibold">{"Diseña y documenta una API de biblioteca universitaria"}</p>
      <p className="my-4">
        {
          "Un frontend web y una app móvil compartirán la misma API para consultar libros, reservar ejemplares y ver préstamos activos."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Clasifica la API (pública, privada o partner) y justifica."}</li>
        <li>
          {
            "Define al menos 5 endpoints con método HTTP, URI versionada y descripción breve (listar libros, buscar por ISBN, crear reserva, ver préstamos del usuario, devolver libro)."
          }
        </li>
        <li>
          {
            "Escribe un ejemplo de request y response JSON para búsqueda y para error de libro no encontrado (con código HTTP correcto)."
          }
        </li>
        <li>
          {
            "Indica qué herramienta usarías para probar manualmente y cuál para automatizar en CI."
          }
        </li>
        <li>
          {
            "Lista dos anti-patrones que evitarías y la buena práctica equivalente."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: URIs con sustantivos y versión, códigos HTTP semánticos, paginación en listados, mención de autenticación y rate limiting, herramientas adecuadas por contexto."
        }
      </p>
      <CodeFiddle
        language="http"
        title="GET libro por ISBN"
        code={`GET /api/v1/libros?isbn=9780123456789 HTTP/1.1
Host: biblioteca.universidad.edu
Authorization: Bearer eyJ...
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

{"isbn": "9780123456789", "titulo": "Algoritmos", "disponibles": 3}`}
      />
      <PracticeExercise
        prompt="Implementa el reto de la biblioteca: clasifica la API, lista 5 endpoints versionados y escribe la respuesta 404 para ISBN inexistente."
        hints={[
          "Partner o privada con auth para estudiantes",
          "GET /api/v1/libros con paginación",
          "POST /api/v1/reservas para crear",
          "404 con JSON estructurado para libro no encontrado",
        ]}
        expectedKeywords={["GET", "POST", "v1", "404", "paginación"]}
        successMessage="Excelente. Has diseñado un contrato API coherente con buenas prácticas de versionado y códigos semánticos."
        rows={6}
      />
    </section>
  );
}
