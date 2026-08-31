export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar qué es un modelo de datos y por qué se diseña antes de improvisar CREATE TABLE."
          }
        </li>
        <li>{"Diferenciar modelo conceptual, lógico y físico."}</li>
        <li>
          {
            "Crear e interpretar un diagrama ER (Entity-Relationship — entidad-relación) con entidades, atributos, relaciones y cardinalidad (1:1, 1:N, N:M), incluyendo Mermaid erDiagram."
          }
        </li>
        <li>
          {
            "Transformar un ER a tablas SQL eligiendo tipos, PK (Primary Key — llave primaria) y FK (Foreign Key — llave foránea): padres primero, mismos tipos, N:M → tabla puente."
          }
        </li>
        <li>
          {
            "Ubicar familias relacional / NoSQL / grafos como contexto de elección de diseño (sin recontar toda la historia de la clase 01)."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Haber completado Clase 2 — Fundamentos, motores y estructura (clase-02-fundamentos-motores-estructura): BD, SGBD, tablas/campos, motor vs GUI."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente clase:"}</strong>{" "}
        {
          "Clase 4 — DDL y DML relacional: implementar el diseño con SQL (incluye JOINs)."
        }
      </p>
    </section>
  );
}
