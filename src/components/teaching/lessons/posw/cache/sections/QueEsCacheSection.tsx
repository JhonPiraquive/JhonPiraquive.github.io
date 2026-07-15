import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsCacheSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es la caché?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Caché: guarda copias de datos costosos para servir solicitudes idénticas más rápido."
          }
        </li>
        <li>
          {
            "Principio: si ya calculaste o buscaste algo, guarda el resultado y reutilízalo."
          }
        </li>
        <li>
          {
            "Cache Hit Rate: (Hits / Total Requests) × 100; objetivo en producción > 90%."
          }
        </li>
        <li>{"Latencia: sin caché 100–500 ms (BD/red); con Redis < 1 ms."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Cache"
        chart={`mindmap
  root((Cache))
    Caché
    Principio
    Cache Hit Rate
    Latencia`}
      />

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
      <PracticeExercise
        prompt="De 10 000 requests, 9 200 fueron HIT y 800 MISS. Calcula el Cache Hit Rate. ¿Cumple el objetivo de > 90%? ¿Qué implica para la base de datos?"
        hints={["Hits / Total × 100", "9200/10000", "Menos consultas a BD"]}
        expectedKeywords={["92%", "90%", "HIT", "base de datos"]}
        successMessage="Correcto. Hit Rate = 92%; cumple > 90% y reduce drásticamente consultas a la fuente original."
      />
    </section>
  );
}
