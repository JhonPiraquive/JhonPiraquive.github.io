import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CodeOnDemandSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Code on Demand (opcional)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Único constraint opcional de REST."}</li>
        <li>
          {
            "El servidor puede enviar código ejecutable al cliente (JavaScript)."
          }
        </li>
        <li>
          {
            "Las SPAs modernas lo implementan al descargar bundles JS desde el servidor."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — CodeOnDemand"
        chart={`mindmap
  root((CodeOnDemand))
    Único constraint opcional de REST
    El servidor puede enviar código ejecutable al cliente JavaS
    Las SPAs modernas lo implementan al descargar bundles JS des`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo implícito"}</h3>
      <p className="my-4">
        {
          "Cuando un frontend React carga app.a3f9b2.js desde el servidor y lo ejecuta en el navegador, el servidor transfirió código que el cliente ejecuta — Code on Demand en la práctica."
        }
      </p>
      <Callout title="Opcional pero omnipresente en la web">
        {
          "Casi toda SPA cumple Code on Demand al servir JavaScript. Los otros cinco constraints son obligatorios para llamar al sistema RESTful según Fielding."
        }
      </Callout>
    </section>
  );
}
