import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function QueEsBackendSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es el backend?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Backend (server-side): código que corre en el servidor, invisible para el usuario final."
          }
        </li>
        <li>
          {
            "Responsabilidades centrales: lógica de negocio, persistencia, autenticación, integraciones."
          }
        </li>
        <li>
          {
            "Contrato con el frontend: expone APIs (REST, GraphQL, gRPC) que el cliente consume."
          }
        </li>
        <li>
          {
            "Analogía restaurante: frontend = salón y menú; backend = cocina; API = mesero que traduce pedidos."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Que Es Backend"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Que Es Backend))
    Backend server side código que corre en el servidor invisible para el usuari
    Responsabilidades centrales lógica de negocio persistencia autenticación int
    Contrato con el frontend expone APIs REST GraphQL gRPC que el cliente consum
    Analogía restaurante frontend salón y menú`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Analogía del restaurante"}
      </h3>
      <p className="my-4">{"En una app de reservas de hotel:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Frontend (salón): formularios, calendario, UX."}</li>
        <li>
          {
            "API (mesero): traduce GET /api/v1/habitaciones a operaciones internas."
          }
        </li>
        <li>
          {
            "Backend (cocina): valida disponibilidad, consulta BD, aplica reglas de precio y cancelación."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Arquitectura en capas"}
      </h3>
      <MermaidDiagram
        chart={`flowchart TD
  C[Cliente / Frontend] -->|HTTP| GW[API Gateway]
  GW --> BE[Backend]
  BE --> R[Rutas]
  R --> CT[Controladores]
  CT --> S[Servicios]
  S --> M[Modelos]
  M --> DB[(Base de datos)]
  S --> CACHE[(Redis)]
  S --> EXT[Servicios externos]`}
      />
      <StepReveal
        title="Capas de una petición GET /api/v1/productos/42"
        steps={[
          {
            title: "1. Request HTTP del cliente",
            content:
              "El navegador o app móvil envía GET con headers (Accept, Authorization).",
          },
          {
            title: "2. Gateway y rutas",
            content:
              "El API Gateway enruta a la instancia correcta; las rutas mapean URI a controlador.",
          },
          {
            title: "3. Controlador orquesta",
            content:
              "Recibe el request, valida formato básico y delega al servicio. No ejecuta SQL directo.",
          },
          {
            title: "4. Servicio aplica reglas de negocio",
            content:
              "Cálculos, validaciones complejas, coordinación con caché o APIs externas.",
          },
          {
            title: "5. Modelo consulta persistencia",
            content:
              "ORM o consulta SQL devuelve datos; respuesta JSON con código HTTP semántico.",
          },
        ]}
      />
      <CodeFiddle
        language="http"
        title="GET producto con Bearer"
        code={`GET /api/v1/productos/42 HTTP/1.1
Host: api.tienda.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Explica la analogía del restaurante para una app de reservas de hotel. ¿Qué hace el frontend, qué hace el backend y qué papel tiene la API?"
        hints={[
          "Frontend = salón/UX",
          "Backend = cocina/lógica",
          "API = mesero/contrato",
        ]}
        expectedKeywords={[
          "frontend",
          "backend",
          "API",
          "lógica",
          "persistencia",
        ]}
        successMessage="Correcto. El frontend muestra la UI; la API traduce pedidos HTTP; el backend procesa reglas y datos."
      />
    </section>
  );
}
