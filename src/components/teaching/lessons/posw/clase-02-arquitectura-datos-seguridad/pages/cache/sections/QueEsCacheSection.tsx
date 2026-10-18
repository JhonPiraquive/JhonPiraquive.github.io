import { CompareTable } from "@/components/teaching/CompareTable";

export function QueEsCacheSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es la caché?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"En síntesis"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Caché: guarda copias de datos costosos para servir solicitudes idénticas más rápido."
          }
        </li>
        <li>
          {
            "Principio: si ya se calculó o se buscó algo, se guarda el resultado y se reutiliza."
          }
        </li>
        <li>
          {
            "Cache Hit Rate: (Hits / Total Requests) × 100; objetivo en producción > 90%."
          }
        </li>
        <li>{"Latencia: sin caché 100–500 ms (BD/red); con Redis < 1 ms."}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Analogía de apuntes"}
      </h3>
      <p className="my-4">
        {
          "La primera vez lees del libro (lento); después consultas apuntes (rápido). Si el libro se actualiza, los apuntes quedan inválidos — eso es invalidación."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Métricas clave"}</h3>
      <CompareTable
        headers={["Métrica", "Fórmula / valor", "Implicación"]}
        rows={[
          [
            "Cache Hit Rate",
            "(Hits / Total) × 100",
            "> 90% reduce carga en BD",
          ],
          ["Latencia sin caché", "100–500 ms", "Consulta SQL, API externa"],
          ["Latencia con Redis", "< 1 ms", "Memoria en servidor"],
          [
            "Cache MISS",
            "Dato no en caché",
            "Consulta fuente original + SET en caché",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Práctica: calcular hit rate"}
      </h3>
    </section>
  );
}
