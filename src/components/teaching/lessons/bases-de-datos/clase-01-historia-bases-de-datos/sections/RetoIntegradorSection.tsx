import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: AndinaMarket"}
      </h2>
      <p className="my-4 font-semibold">{"“Cuenta la historia de AndinaMarket”"}</p>
      <p className="my-4">
        {
          "AndinaMarket es un marketplace PYME (Colombia/Perú) con catálogo flexible, pedidos/pagos con integridad, sesiones y recomendaciones futuras con embeddings."
        }
      </p>
      <p className="my-4">{"Debes:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Narrar en orden las 7 etapas (títulos + una frase de causa→efecto cada una)."
          }
        </li>
        <li>
          {
            "Explicar qué problemas pre-BD reaparecerían si todo viviera en Google Sheets."
          }
        </li>
        <li>{"Indicar qué aporte de Codd protege pedidos/pagos."}</li>
        <li>
          {
            "Ubicar en la timeline dónde nace la idea que usan para pedidos (SQL/relacional) y dónde encajan sesiones/recomendaciones (familias posteriores)."
          }
        </li>
        <li>
          {
            "Cerrar con una frase de convergencia: no un solo hype, sino modelo según el problema."
          }
        </li>
      </ol>
      <p className="my-4">
        <strong>{"Criterio de éxito:"}</strong>{" "}
        {
          "orden correcto, causa→efecto explícita, Codd ≠ SQL, sin lista de “malas prácticas” inventada por etapa."
        }
      </p>
      <ChallengeCard
        title="Cuenta la historia de AndinaMarket"
        difficulty="integrador"
        prompt="Narra las 7 etapas con causa→efecto; explica qué fallaría en Sheets; nombra el aporte de Codd para pedidos/pagos; ubica en la timeline SQL/relacional vs sesiones/recomendaciones; cierra con una frase de convergencia (modelo según el problema)."
        acceptanceCriteria={[
          "Siete etapas en orden correcto con una frase causa→efecto cada una",
          "Mención de duplicidad/inconsistencia si todo fuera Sheets",
          "Codd: relaciones + independencia de datos (no “inventó SQL”)",
          "Pedidos anclados en etapa relacional/SQL; sesiones/recomendaciones en etapas posteriores",
          "Cierre de convergencia sin un solo hype",
        ]}
        hints={[
          "Orden: planos → navegacional → Codd → SQL comercial → imperio → NoSQL → hoy",
          "Codd protege integridad compartida; SQL nace después en System R",
          "Sesiones → clave-valor / web-scale; embeddings → vectoriales / convergencia",
        ]}
      />
    </section>
  );
}
