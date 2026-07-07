import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function ColumnarGrafosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Bases columnares y de grafos (OLAP y Cypher)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"OLTP vs OLAP"}</h3>
      <table className="my-4 w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 font-semibold">{"Tipo"}</th>
            <th className="py-2 pr-4 font-semibold">{"Patrón"}</th>
            <th className="py-2 font-semibold">{"Motor típico"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <td className="py-2 pr-4">{"OLTP"}</td>
            <td className="py-2 pr-4">{"Transacciones fila a fila (compras, saldos)"}</td>
            <td className="py-2">{"PostgreSQL, MySQL"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <td className="py-2 pr-4">{"OLAP"}</td>
            <td className="py-2 pr-4">{"Agregaciones masivas (AVG(precio) millones de filas)"}</td>
            <td className="py-2">{"BigQuery, ClickHouse"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Grafos"}</td>
            <td className="py-2 pr-4">
              {"Relaciones entre entidades (recomendaciones, fraude)"}
            </td>
            <td className="py-2">{"Neo4j"}</td>
          </tr>
        </tbody>
      </table>
      <CodeFiddle
        language="plaintext"
        title="Grafo en Cypher (Neo4j)"
        code={`CREATE (ana:Persona {nombre: "Ana"})
CREATE (luis:Persona {nombre: "Luis"})
CREATE (laptop:Producto {nombre: "Laptop Pro 15"})
CREATE (ana)-[:CONOCE]->(luis)
CREATE (ana)-[:COMPRO {fecha: "2025-01-15"}]->(laptop)
CREATE (luis)-[:COMPRO]->(laptop)

MATCH (ana:Persona {nombre: "Ana"})-[:CONOCE]->(amigo)-[:COMPRO]->(p)
WHERE (ana)-[:COMPRO]->(p)
RETURN amigo.nombre, p.nombre`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo no usar grafos"}</h3>
      <p className="my-4">
        {
          "No uses Neo4j para CRUD tabular simple que PostgreSQL resuelve mejor. Reserva grafos para consultas de rutas, recomendaciones o detección de patrones en relaciones."
        }
      </p>
    </section>
  );
}
