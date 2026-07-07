import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: reservas de hotel"}
      </h2>
      <p className="my-4 font-semibold">{"Diseña el contrato HTTP de una API de reservas de hotel"}</p>
      <p className="my-4">
        {
          "Un frontend y una app móvil consumen la misma API para consultar habitaciones, crear reservas, modificar fechas y cancelar."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Define URIs y métodos HTTP para: listar habitaciones disponibles, obtener habitación por id, crear reserva, cambiar fecha (parcial), cancelar reserva."
          }
        </li>
        <li>{"Para cada operación indica si el método es Safe e Idempotente y justifica."}</li>
        <li>
          {
            "Escribe la respuesta HTTP completa (status + headers + JSON) para: reserva creada exitosamente, habitación inexistente, fechas inválidas (checkout antes de checkin)."
          }
        </li>
        <li>
          {
            "Explica qué pasa si el móvil reintenta POST /api/reservas tras timeout sin protección de idempotencia."
          }
        </li>
        <li>
          {
            "Indica qué código usarías si el hotel está en mantenimiento y la API no puede atender temporalmente."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: mapping CRUD correcto, distingue 401/403/404/422/503, respuestas HTTP bien formadas, menciona idempotencia en POST."
        }
      </p>
      <CodeFiddle
        language="http"
        title="POST reserva + 201 Created"
        code={`POST /api/reservas HTTP/1.1
Host: hotel.ejemplo.com
Content-Type: application/json

{"habitacionId": 12, "checkin": "2025-10-01", "checkout": "2025-10-05"}

HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/reservas/501

{"id": 501, "habitacionId": 12, "estado": "confirmada"}`}
      />
      <PracticeExercise
        prompt="Implementa el reto del hotel: lista operaciones con método y URI, indica Safe/Idempotente en cada una y escribe al menos una respuesta 422 para fechas inválidas."
        hints={[
          "Listar habitaciones → GET /api/habitaciones",
          "Crear reserva → POST /api/reservas",
          "Cambiar fecha → PATCH /api/reservas/{id}",
          "Cancelar → DELETE /api/reservas/{id}",
          "Mantenimiento → 503 Service Unavailable",
        ]}
        expectedKeywords={["GET", "POST", "PATCH", "DELETE", "201", "422"]}
        successMessage="Excelente. Has aplicado semántica HTTP, CRUD y códigos de estado en un contrato de API coherente."
        rows={6}
      />
    </section>
  );
}
