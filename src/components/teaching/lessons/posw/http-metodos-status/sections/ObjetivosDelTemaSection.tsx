import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre la semántica de los verbos HTTP y el significado de los códigos de estado en respuestas. Son la base para diseñar APIs REST coherentes y para depurar integraciones cliente-servidor."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir métodos HTTP (verbos) como indicadores de intención del cliente sobre un recurso, citando RFC 9110 y al menos cinco métodos comunes (GET, POST, PUT, PATCH, DELETE)."
          }
        </li>
        <li>
          {
            "Clasificar métodos según propiedades Safe (no modifica estado) e Idempotente (múltiples requests idénticos = mismo efecto) y aplicar esa distinción al diseño de APIs."
          }
        </li>
        <li>
          {
            "Mapear operaciones CRUD a métodos HTTP y URIs de ejemplo (POST /api/productos, GET /api/productos/42, etc.)."
          }
        </li>
        <li>
          {
            "Agrupar códigos de estado en familias 1xx–5xx y elegir el código adecuado en escenarios concretos (200, 201, 204, 400, 401, 403, 404, 422, 429, 500, 503)."
          }
        </li>
        <li>
          {
            "Interpretar respuestas HTTP completas (línea de estado, headers, cuerpo JSON) y distinguir errores del cliente (4xx) de errores del servidor (5xx)."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección protocolos-seguridad: HTTP/HTTPS, TLS y capas de red."}</li>
        <li>{"Lección formatos-datos: lectura de JSON en respuestas API."}</li>
        <li>{"Familiaridad con el concepto de recurso identificado por URI."}</li>
      </ul>
      <Callout title="Contrato semántico">
        {
          "El método y el código de estado no son decoración: comunican intención y resultado. Un cliente que ignora 404 y solo lee el cuerpo JSON tendrá bugs difíciles de detectar."
        }
      </Callout>
    </section>
  );
}
