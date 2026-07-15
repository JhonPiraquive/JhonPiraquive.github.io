import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function IntroRestSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Introducción a REST"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "REST (Representational State Transfer): estilo arquitectónico de Roy Fielding (tesis 2000)."
          }
        </li>
        <li>
          {
            "No es protocolo ni estándar — se implementa sobre HTTP en la práctica."
          }
        </li>
        <li>{"Seis constraints definen si un sistema es RESTful."}</li>
        <li>{"Modelo de Richardson: niveles 0–3 de madurez REST."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Intro Rest"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Intro Rest))
    REST Representational State Transfer estilo arquitectónico de Roy Fielding t
    No es protocolo ni estándar se implementa sobre HTTP en la práctica
    Seis constraints definen si un sistema es RESTful
    Modelo de Richardson niveles 0 3 de madurez REST`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Los seis constraints"}
      </h3>
      <MermaidDiagram
        chart={`flowchart TD
  REST[REST - 6 constraints] --> S1[1. Stateless]
  REST --> S2[2. Client-Server]
  REST --> S3[3. Cacheable]
  REST --> S4[4. Layered System]
  REST --> S5[5. Uniform Interface]
  REST --> S6[6. Code on Demand - opcional]
  S5 --> U1[Identificación recursos]
  S5 --> U2[Representaciones]
  S5 --> U3[Mensajes autodescriptivos]
  S5 --> U4[HATEOAS]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Modelo de madurez Richardson"}
      </h3>
      <CompareTable
        headers={["Nivel", "Características", "Ejemplo", "% APIs reales"]}
        rows={[
          [
            "0 — POX",
            "Un URI, POST para todo",
            "POST /api con action en body",
            "Legacy",
          ],
          [
            "1 — Recursos",
            "Múltiples URIs por recurso",
            "GET /libros, GET /usuarios",
            "Pocas",
          ],
          [
            "2 — Verbos HTTP",
            "Métodos + códigos de estado",
            "GET /productos/42 → 404",
            "Mayoría",
          ],
          [
            "3 — HATEOAS",
            "_links en respuestas",
            "agregar_al_carrito.href",
            "Muy pocas",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Recurso vs acción (anti-patrón)"}
      </h3>
      <CodeFiddle
        language="http"
        title="Recurso vs acción (anti-patrón)"
        code={`# ❌ Identifica acción, no recurso
GET /api/obtenerProducto/42 HTTP/1.1

# ✅ Identifica recurso
GET /api/v1/productos/42 HTTP/1.1`}
      />
    </section>
  );
}
