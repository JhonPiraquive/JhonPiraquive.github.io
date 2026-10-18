import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function SqlVsNosqlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SQL vs NoSQL: cuándo elegir cada motor"}
      </h2>
      <CompareTable
        headers={["Aspecto", "SQL relacional", "NoSQL"]}
        rows={[
          ["Esquema", "Rígido, tablas normalizadas", "Flexible (documentos, clave-valor, grafos)"],
          ["Escala", "Vertical (más CPU/RAM al servidor)", "Horizontal (más nodos)"],
          ["JOINs", "Nativos y potentes", "Limitados o modelados en aplicación"],
          ["ACID", "Fuerte en OLTP (PostgreSQL, MySQL)", "Variable según motor y configuración"],
          [
            "Motores ejemplo",
            "PostgreSQL, MySQL, SQLite",
            "MongoDB, Redis, Cassandra, Neo4j",
          ],
          [
            "Cuándo elegir",
            "Pedidos, facturación, relaciones complejas",
            "Logs variables, sesiones, escala masiva",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Regla práctica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Relaciones complejas + transacciones fuertes → SQL."}</li>
        <li>{"Esquema muy variable + escala horizontal masiva → NoSQL."}</li>
        <li>{"Proyectos reales suelen combinar ambos."}</li>
      </ul>
      <Callout title="Caso real: un solo motor para todo el catálogo">
        {
          "Catálogo y pedidos en PostgreSQL (ACID); sesiones y carrito en Redis; logs de clics en MongoDB por esquema variable. Meter logs en tablas SQL rígidas bloqueó releases semanales."
        }
      </Callout>
    </section>
  );
}
