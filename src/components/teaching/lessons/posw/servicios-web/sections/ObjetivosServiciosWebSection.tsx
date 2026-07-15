import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { StepReveal } from "@/components/teaching/StepReveal";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ObjetivosServiciosWebSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Objetivos de los servicios web"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Interoperabilidad: Java, Python, Go, C# se comunican con estándares abiertos."
          }
        </li>
        <li>
          {
            "Compartir datos y lógica: una sola fuente de verdad para web, móvil y batch."
          }
        </li>
        <li>
          {"Escalabilidad independiente: escalar solo el módulo con más carga."}
        </li>
        <li>{"Modularidad: microservicios con responsabilidades acotadas."}</li>
        <li>
          {"Estandarización: HTTP, JSON, REST reducen fricción entre equipos."}
        </li>
        <li>
          {
            "Acceso remoto: servicios alcanzables por internet entre organizaciones."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — ObjetivosServiciosWeb"
        chart={`mindmap
  root((ObjetivosServiciosWeb))
    Interoperabilidad
    Compartir datos y lógica
    Escalabilidad independiente
    Modularidad
    Estandarización
    Acceso remoto`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Para qué sirve cada objetivo"}
      </h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Objetivo"}</th>
            <th className="py-2 pr-4 text-left font-semibold">
              {"Qué resuelve"}
            </th>
            <th className="py-2 text-left font-semibold">
              {"Ejemplo concreto"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Interoperabilidad"}</td>
            <td className="py-2 pr-4">
              {"Integrar stacks distintos sin librerías nativas compartidas"}
            </td>
            <td className="py-2">
              {"App Kotlin consume API Java vía HTTP+JSON"}
            </td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Compartir datos"}</td>
            <td className="py-2 pr-4">
              {"Evitar reglas duplicadas en cada cliente"}
            </td>
            <td className="py-2">
              {"Un solo servicio de pagos para web y móvil"}
            </td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Escalabilidad"}</td>
            <td className="py-2 pr-4">
              {"No escalar todo el monolito por un cuello de botella"}
            </td>
            <td className="py-2">
              {"Solo el servicio de catálogo en Black Friday"}
            </td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Modularidad"}</td>
            <td className="py-2 pr-4">
              {"Cambios localizados y despliegues independientes"}
            </td>
            <td className="py-2">
              {"Servicio de notificaciones separado de usuarios"}
            </td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Estandarización"}</td>
            <td className="py-2 pr-4">{"Menor curva de integración"}</td>
            <td className="py-2">{"Contrato REST documentado con OpenAPI"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Acceso remoto"}</td>
            <td className="py-2 pr-4">{"Colaboración entre organizaciones"}</td>
            <td className="py-2">
              {"Partner externo consume tu API de inventario"}
            </td>
          </tr>
        </tbody>
      </table>
      <StepReveal
        title="Objetivos de los servicios web"
        steps={[
          {
            title: "1. Interoperabilidad",
            content:
              "Sistemas en distintos lenguajes y SO se comunican con HTTP y formatos estándar, sin compartir el mismo runtime.",
          },
          {
            title: "2. Compartir datos y lógica",
            content:
              "El servicio centraliza reglas de negocio; los clientes solo presentan UI o ejecutan scripts delgados.",
          },
          {
            title: "3. Escalabilidad independiente",
            content:
              "Si el catálogo recibe más tráfico, escalas ese componente sin tocar checkout ni usuarios.",
          },
          {
            title: "4. Modularidad",
            content:
              "Cada servicio encapsula una responsabilidad; el sistema completo se compone de piezas independientes.",
          },
          {
            title: "5. Estandarización y acceso remoto",
            content:
              "Protocolos ampliamente adoptados facilitan integración; los servicios son alcanzables desde cualquier red con internet.",
          },
        ]}
      />
      <Callout title="Caso real: e-commerce en Black Friday">
        {
          "Un monolito escala horizontalmente pero la base de datos colapsa. El equipo separa servicio de catálogo (lectura intensiva, cacheable) del de pedidos. Escala independiente del componente con más carga."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Flujo típico de una operación"}
      </h3>
      <p className="my-4">
        {
          "Ordena mentalmente: (a) cliente envía petición HTTP → (b) servicio valida y ejecuta lógica → (c) servicio persiste o consulta datos → (d) servicio responde con JSON → (e) cliente muestra resultado."
        }
      </p>
      <MermaidDiagram
        title="Flujo típico cliente-servicio"
        description="Secuencia HTTP de una operación de servicio web"
        chart={`sequenceDiagram
  participant Cli as Cliente
  participant Svc as Servicio
  participant DB as Datos
  Cli->>Svc: Peticion HTTP
  Svc->>Svc: Validar y ejecutar logica
  Svc->>DB: Consultar o persistir
  DB-->>Svc: Resultado
  Svc-->>Cli: Respuesta JSON
  Cli->>Cli: Mostrar resultado
`}
      />
      <CodeChallenge
        title="Completa la definición"
        template="Un servicio web permite interacción ___-a-___ mediante interfaces ___."
        blanks={[
          { id: "blank1", answer: "máquina", placeholder: "tipo de actor" },
          { id: "blank2", answer: "máquina", placeholder: "receptor" },
          {
            id: "blank3",
            answer: "estandarizadas",
            placeholder: "característica de la interfaz",
          },
        ]}
      />
    </section>
  );
}
