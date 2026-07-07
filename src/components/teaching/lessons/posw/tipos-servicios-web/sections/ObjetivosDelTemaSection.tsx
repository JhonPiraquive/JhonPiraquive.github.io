import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "No existe un único tipo de servicio web. Esta lección recorre las arquitecturas más usadas — SOAP, REST, GraphQL, gRPC y WebSockets — y cuándo elegir cada una según público, rendimiento y legado."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Diferenciar SOAP (protocolo XML + WSDL) de REST (estilo arquitectónico sobre HTTP) y ubicar su contexto histórico y de uso."
          }
        </li>
        <li>
          {
            "Explicar GraphQL como lenguaje de consulta con endpoint único, resolviendo over-fetching y under-fetching de REST."
          }
        </li>
        <li>
          {
            "Describir gRPC (HTTP/2 + protobuf) y WebSockets (conexión bidireccional persistente) con sus casos de uso típicos."
          }
        </li>
        <li>
          {
            "Comparar SOAP, REST, GraphQL, gRPC y WebSockets en protocolo, formato, contrato, rendimiento y curva de aprendizaje."
          }
        </li>
        <li>
          {
            "Elegir la arquitectura adecuada según escenario: API pública web/mobile, BFF flexible, microservicios internos, tiempo real o integración bancaria legacy."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Lección servicios-web:"}</strong>
          {" concepto de servicio web y arquitectura cliente-servidor."}
        </li>
        <li>
          <strong>{"Lección formatos-datos:"}</strong>
          {" XML y JSON como formatos de intercambio."}
        </li>
        <li>
          <strong>{"Lección http-metodos-status:"}</strong>
          {" verbos HTTP y código 101 Switching Protocols (WebSocket upgrade)."}
        </li>
      </ul>
      <Callout title="Regla de selección">
        {
          "API pública web/mobile → REST; frontend con datos muy específicos → GraphQL; microservicios internos → gRPC; tiempo real → WebSockets; integración bancaria legacy → SOAP. No uses la moda; usa el contexto."
        }
      </Callout>
    </section>
  );
}
