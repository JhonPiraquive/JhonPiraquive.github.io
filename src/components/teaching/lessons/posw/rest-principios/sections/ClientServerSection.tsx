import { StepReveal } from "@/components/teaching/StepReveal";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ClientServerSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Client-Server"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Componentes separados con responsabilidades distintas."}</li>
        <li>{"Cliente: UI/UX, estado de pantalla, rutas SPA."}</li>
        <li>{"Servidor: lógica, persistencia, auth, integraciones."}</li>
        <li>
          {"Conectados por interfaz uniforme; evolucionan independientemente."}
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — ClientServer"
        chart={`mindmap
  root((ClientServer))
    Componentes separados con responsabilidades distintas
    Cliente
    Servidor
    Conectados por interfaz uniforme evolucionan independientem`}
      />
      <MermaidDiagram
        title="Flujo Client-Server"
        description="El cliente consume la interfaz HTTP y el servidor gestiona lógica y datos."
        chart={`flowchart LR
  C[Cliente UI] -->|Request HTTP| S[Servidor API]
  S --> L[Lógica de negocio]
  L --> D[(Persistencia)]
  D --> L
  L --> S
  S -->|Response JSON| C`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Separación de responsabilidades"}
      </h3>
      <StepReveal
        title="Client-Server en una app de e-commerce"
        steps={[
          {
            title: "Cliente (frontend)",
            content:
              "Renderiza catálogo, carrito y checkout; consume JSON; no accede directo a la BD.",
          },
          {
            title: "Interfaz uniforme (HTTP + JSON)",
            content:
              "Contrato estable: métodos, URIs, Content-Type, códigos de estado.",
          },
          {
            title: "Servidor (backend)",
            content:
              "Valida pedidos, calcula totales, persiste en PostgreSQL, integra pasarela de pago.",
          },
          {
            title: "Evolución independiente",
            content:
              "Rediseñar la UI no fuerza cambios en la capa de persistencia si la API se mantiene.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Beneficio clave"}</h3>
      <p className="my-4">
        {
          "Cambios en la UI no deberían forzar cambios en persistencia si la API está bien diseñada — y viceversa."
        }
      </p>
    </section>
  );
}
