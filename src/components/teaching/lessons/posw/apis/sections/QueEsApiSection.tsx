import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function QueEsApiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es una API?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "API: conjunto de definiciones y protocolos que permite que dos aplicaciones se comuniquen."
          }
        </li>
        <li>
          {
            "Abstracción: oculta la implementación interna (lenguaje, BD, arquitectura)."
          }
        </li>
        <li>
          {
            "Contrato: define qué se puede pedir y qué se recibirá (método, URI, headers, cuerpo, códigos de estado)."
          }
        </li>
        <li>
          {
            "Interoperabilidad: sistemas distintos (móvil, web, servidor) colaboran mediante el mismo contrato."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Que Es Api"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Que Es Api))
    API conjunto de definiciones y protocolos que permite que dos aplicaciones s
    Abstracción oculta la implementación interna lenguaje BD arquitectura
    Contrato define qué se puede pedir y qué se recibirá método URI headers cuer
    Interoperabilidad sistemas distintos móvil web servidor colaboran mediante e`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Definición y analogía del menú"}
      </h3>
      <p className="my-4">
        {
          "Una API es el contrato por el cual una aplicación solicita operaciones a otra sin conocer su interior. La analogía del restaurante: el cliente no entra a la cocina (backend); pide al mesero (API) usando el vocabulario del menú (endpoints) y recibe la respuesta preparada."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Cliente: app móvil o web que consume datos."}</li>
        <li>{"Mesero (API): traduce el pedido a operaciones del servidor."}</li>
        <li>{"Cocina (backend): lógica, base de datos, reglas de negocio."}</li>
        <li>
          {
            "Menú (contrato): endpoints documentados con método, URI y formato de respuesta."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Flujo básico cliente → API → datos"}
      </h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as App Cliente
  participant A as API Gateway
  participant S as Servicio / BD
  C->>A: GET /api/clima?ciudad=Medellin
  A->>S: Consulta datos
  S-->>A: Datos meteorológicos
  A-->>C: 200 OK + JSON`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Ejemplo: consulta a API pública"}
      </h3>
      <CodeFiddle
        language="http"
        title="GET clima con API Key"
        code={`GET /api/clima?ciudad=Medellin HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
X-API-Key: sk_live_abc123XYZ`}
      />
      <CodeFiddle
        language="json"
        title="Respuesta JSON clima"
        code={`{
  "ciudad": "Medellin",
  "temperatura": 24,
  "unidad": "C",
  "condicion": "Parcialmente nublado"
}`}
      />
      <StepReveal
        title="Flujo de una petición API"
        steps={[
          {
            title: "1. El cliente construye el request",
            content:
              "Método HTTP, URI, headers (Accept, API Key) y opcionalmente cuerpo JSON.",
          },
          {
            title: "2. La API valida y enruta",
            content:
              "Gateway o servidor verifica autenticación, rate limits y delega al servicio correcto.",
          },
          {
            title: "3. El servicio consulta la fuente de datos",
            content:
              "Base de datos, otro microservicio o API externa; el cliente no ve este paso.",
          },
          {
            title: "4. Respuesta HTTP estructurada",
            content:
              "Código de estado semántico + JSON. El cliente interpreta el resultado sin conocer la implementación.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Explica la analogía del menú de restaurante aplicada a GET /api/clima?ciudad=Bogota. ¿Quién es el cliente, el mesero, la cocina y el menú?"
        hints={[
          "Cliente = quien pide",
          "Mesero = API",
          "Cocina = backend",
          "Menú = endpoints documentados",
        ]}
        expectedKeywords={["cliente", "API", "backend", "endpoint", "menú"]}
        successMessage="Correcto. El cliente es la app; la API traduce el pedido; el backend procesa; el menú es el contrato de endpoints."
      />
    </section>
  );
}
