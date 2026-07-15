import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function StatelessSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Stateless (sin estado)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Cada petición contiene toda la información necesaria."}</li>
        <li>{"El servidor no guarda contexto de sesión entre requests."}</li>
        <li>{"El token viaja en cada llamada (Authorization: Bearer)."}</li>
        <li>
          {
            "Beneficios: escalabilidad horizontal, caching más simple, resiliencia."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Stateless"
        chart={`mindmap
  root((Stateless))
    Cada petición contiene toda la información necesaria
    El servidor no guarda contexto de sesión entre requests
    El token viaja en cada llamada Authorization
    Beneficios`}
      />
      <MermaidDiagram
        title="Dos nodos validan el mismo Bearer"
        description="Secuencia stateless: cualquier nodo atiende cualquier request"
        chart={`sequenceDiagram
  participant C as Cliente
  participant N1 as Nodo_1
  participant N2 as Nodo_2
  C->>N1: GET /pedidos Bearer JWT
  N1-->>C: 200 OK
  C->>N2: POST /pedidos Bearer JWT
  N2-->>C: 201 Created
`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Stateless vs stateful"}
      </h3>
      <CompareTable
        headers={["Aspecto", "Stateless (RESTful)", "Stateful (no RESTful)"]}
        rows={[
          [
            "Quién guarda estado",
            "Cliente (token en cada request)",
            "Servidor (sesión en memoria)",
          ],
          [
            "Escalabilidad",
            "Cualquier nodo atiende cualquier request",
            "Sticky sessions o estado compartido",
          ],
          [
            "Ejemplo auth",
            "JWT en header Authorization",
            "Cookie de sesión opaca tras POST /login",
          ],
          [
            "Fallo de nodo",
            "Otro nodo continúa sin pérdida",
            "401 si sesión estaba en otro nodo",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Request stateless con token"}
      </h3>
      <CodeFiddle
        language="http"
        title="GET pedidos con Bearer"
        code={`GET /api/v1/pedidos HTTP/1.1
Host: api.tienda.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept: application/json`}
      />
      <CodeFiddle
        language="http"
        title="POST pedido stateless"
        code={`POST /api/v1/pedidos HTTP/1.1
Host: api.tienda.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{"producto_id": 42, "cantidad": 1}`}
      />
      <Callout title="Pagos con sesión en memoria">
        {
          "La API guarda sesión tras login. En pico de quincena el load balancer envía requests a instancias distintas; usuarios reciben 401 intermitente. Decisión: migrar a JWT stateless; cada instancia valida el token sin estado compartido."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="¿Por qué POST /login que guarda sesión en memoria del servidor viola Stateless? ¿Qué alternativa RESTful usarías?"
        hints={[
          "Servidor recuerda estado",
          "JWT en cada request",
          "Sin sticky sessions",
        ]}
        expectedKeywords={["stateless", "JWT", "token", "sesión"]}
        successMessage="Correcto. Stateless exige que cada request sea autosuficiente; JWT en Authorization evita sesión server-side."
      />
    </section>
  );
}
