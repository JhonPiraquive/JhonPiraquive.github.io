import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección explica qué es la caché, sus tipos, tecnologías (Redis, CDN), headers HTTP y cuándo cachear o invalidar datos."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir caché como almacenamiento temporal de alta velocidad que reutiliza resultados costosos de computar u obtener."
          }
        </li>
        <li>
          {
            "Clasificar los cuatro tipos de caché: navegador, servidor, CDN y base de datos; indicar tecnología y caso de uso de cada uno."
          }
        </li>
        <li>
          {
            "Calcular e interpretar el Cache Hit Rate y relacionar latencia sin caché (100–500 ms) vs con caché Redis (< 1 ms)."
          }
        </li>
        <li>
          {
            "Configurar headers HTTP de caché (Cache-Control, ETag, Last-Modified, Vary) y elegir directivas según tipo de dato."
          }
        </li>
        <li>
          {
            "Implementar el patrón cache-aside con Redis en Node.js y aplicar estrategias de invalidación (TTL, event-based, versioning)."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección backend: capas servidor, APIs y acceso a base de datos."}</li>
        <li>{"Lección http-headers: headers de request/response y semántica HTTP."}</li>
        <li>{"Familiaridad con JSON y peticiones GET."}</li>
      </ul>
      <Callout title="Invalidar caché es difícil">
        {
          "Cache invalidation is one of the two hard problems in Computer Science. Un caché mal invalidado sirve precios, stock o datos de otro usuario a clientes reales."
        }
      </Callout>
    </section>
  );
}
