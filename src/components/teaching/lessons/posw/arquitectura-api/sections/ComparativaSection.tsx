import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ComparativaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"REST vs SOAP vs GraphQL vs gRPC"}
      </h2>
      <CompareTable
        headers={["Aspecto", "REST", "SOAP", "GraphQL", "gRPC"]}
        rows={[
          ["Contrato", "OpenAPI (opcional)", "WSDL obligatorio", "SDL Schema", ".proto"],
          ["Formato", "JSON típico", "XML", "JSON", "Protobuf binario"],
          ["Punto de entrada", "Múltiples URIs", "Endpoint SOAP", "Un /graphql", "Servicios RPC"],
          ["Tipado", "Débil (JSON)", "Fuerte (XSD)", "Fuerte (Schema)", "Fuerte (generado)"],
          ["Overhead", "Bajo-medio", "Alto", "Medio (riesgo N+1)", "Bajo"],
          [
            "Cuándo elegir",
            "APIs públicas CRUD",
            "Banca/legado WS-*",
            "Cliente define forma",
            "Comunicación interna microservicios",
          ],
        ]}
      />
      <CodeFiddle
        language="json"
        title="JSON de error consistente"
        code={`{
  "error": {
    "code": "PRODUCTO_NO_ENCONTRADO",
    "message": "No existe producto con id 42",
    "status": 404
  }
}`}
      />
      <PracticeExercise
        prompt="¿Por qué GraphQL puede sufrir N+1 y cómo ayuda DataLoader? Responde en 2–3 frases."
        hints={["Resolvers anidados", "Batch de IDs", "Una query por tipo"]}
        expectedKeywords={["N+1", "DataLoader", "batch", "resolver"]}
        successMessage="Correcto. DataLoader agrupa y deduplica cargas de entidades relacionadas en una sola consulta por tipo."
      />
    </section>
  );
}
