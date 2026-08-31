export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar redundancia y anomalías de inserción, actualización y borrado con un ejemplo de matrículas/facturas."
          }
        </li>
        <li>
          {
            "Definir dependencia funcional (DF: si conozco A, determino B) y detectarlas en una tabla sucia."
          }
        </li>
        <li>
          {
            "Ejecutar el procedimiento 1FN → 2FN → 3FN con checklist y antes/después; mencionar BCNF sin exigir dominio formal completo."
          }
        </li>
        <li>
          {
            "Argumentar cuándo desnormalizar de forma consciente (snapshot, lecturas) y qué riesgo aceptas."
          }
        </li>
        <li>
          {
            "Distinguir esquema en estrella vs copo de nieve y relacionarlos con normalización de dimensiones en BI."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Clase 4 — DDL, DML y consultas SQL (clase-04-ddl-dml-relacional): ya sabes crear tablas y consultarlas; ahora limpias el diseño."
          }
        </li>
        <li>
          {
            "El ER de la Clase 3 ayuda de contexto (entidad, atributo, PK/FK), pero el prerrequisito inmediato es SQL — no basta solo con el diagrama."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente clase:"}</strong> {"clase-06-dcl-tcl-objetos-bd."}
      </p>
    </section>
  );
}
