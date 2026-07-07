import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ArquitecturasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Arquitecturas en capas: 2-Tier, 3-Tier y microservicios"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "2 capas (2-Tier): cliente ↔ servidor con BD integrada o acceso directo. Simple pero riesgoso si el cliente toca la BD."
          }
        </li>
        <li>{"3 capas (3-Tier): presentación → lógica/API → datos. Estándar en la web."}</li>
        <li>
          {
            "N capas / microservicios: API Gateway, servicios independientes, BDs por dominio. Escala por servicio; mayor complejidad operacional."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Arquitectura 3 capas"}</h3>
      <MermaidDiagram
        chart={`flowchart TB
  P[Capa 1: Presentación<br/>React / App móvil]
  L[Capa 2: Lógica<br/>API REST Node/Spring]
  D[Capa 3: Datos<br/>PostgreSQL / Redis]
  P -->|HTTPS JSON| L
  L -->|SQL / protocolo BD| D`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparativa 2 capas frente a 3 capas"}</h3>
      <CompareTable
        headers={["Aspecto", "2 capas", "3 capas"]}
        rows={[
          ["Seguridad", "Riesgo si el cliente accede directo a BD", "La BD queda detrás de la API"],
          ["Escalabilidad", "La BD recibe conexiones directas del cliente", "Pool de conexiones y caché en el backend"],
          ["Separación", "Lógica mezclada en cliente o servidor único", "Presentación, lógica y datos separados"],
          ["Complejidad", "Menor al inicio", "Mayor, pero mantenible en equipos"],
          ["Ejemplo", "App escritorio + MySQL directo", "React → REST API → PostgreSQL"],
        ]}
      />
      <Callout title="Caso real: e-commerce con acceso directo a la BD">
        {
          "Una tienda con app de escritorio conectada directo a MySQL colapsa en Black Friday: 200 cajeros saturan la BD sin pool ni caché. Decisión: migrar a 3 capas — React, API REST con pool, Redis para stock cacheado; el cliente nunca ve credenciales de BD."
        }
      </Callout>
      <PracticeExercise
        prompt="Dibuja (o describe) una arquitectura 3 capas para una app de pedidos: React, API Spring Boot, PostgreSQL. ¿Qué capa no debe ser accesible desde internet?"
        hints={["Capa de datos", "Solo HTTPS al frontend", "API como intermediaria"]}
        expectedKeywords={["PostgreSQL", "datos", "API", "no expuesta"]}
        successMessage="Correcto. La capa de datos (PostgreSQL) nunca debe quedar expuesta directamente a internet."
      />
    </section>
  );
}
