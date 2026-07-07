import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección presenta los seis constraints REST de Roy Fielding: stateless, cliente-servidor, cacheable, capas, interfaz uniforme y code on demand."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir REST como estilo arquitectónico (no protocolo) de Roy Fielding (2000) y enumerar sus seis constraints."
          }
        </li>
        <li>
          {
            "Explicar Stateless, Client-Server, Cacheable, Layered System, Uniform Interface y Code on Demand (opcional) con ejemplos HTTP."
          }
        </li>
        <li>
          {
            "Describir los cuatro sub-constraints de Uniform Interface: identificación de recursos, manipulación por representaciones, mensajes autodescriptivos y HATEOAS."
          }
        </li>
        <li>
          {
            'Diferenciar API REST real de "HTTP API" que solo usa verbos HTTP sin cumplir todos los constraints (especialmente HATEOAS).'
          }
        </li>
        <li>
          {
            "Ubicar una API en el modelo de madurez de Richardson (niveles 0–3) y proponer mejoras hacia mayor RESTfulness."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección apis: contrato API, endpoints y diseño básico."}</li>
        <li>{"Lección http-metodos-status: verbos HTTP y códigos de estado semánticos."}</li>
        <li>{"Lección cache: headers Cache-Control, ETag y cacheabilidad."}</li>
      </ul>
      <Callout title="REST ≠ cualquier API con JSON">
        {
          "Muchas APIs llamadas REST son HTTP APIs de nivel 2 en Richardson: usan verbos HTTP pero omiten HATEOAS. Fielding reserva REST para quien cumple todos los constraints."
        }
      </Callout>
    </section>
  );
}
