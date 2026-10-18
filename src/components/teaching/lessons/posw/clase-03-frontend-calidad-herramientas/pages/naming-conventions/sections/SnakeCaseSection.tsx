import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SNAKE_SQL = `CREATE TABLE pedidos_detalle (
  pedido_id       INTEGER REFERENCES pedidos(id),
  producto_id     INTEGER REFERENCES productos(id),
  cantidad        INTEGER NOT NULL,
  precio_unitario DECIMAL(12, 2) NOT NULL,
  PRIMARY KEY (pedido_id, producto_id)
);`;

export function SnakeCaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"snake_case: tablas y columnas SQL"}
      </h2>
      <p className="my-4">
        {"Minúsculas con guión bajo. Estándar en tablas y columnas SQL, y en Python/Ruby."}
      </p>
      <CodeFiddle language="sql" title="DDL con snake_case" code={SNAKE_SQL} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"¿Inconsistencia o convención por capa?"}</h3>
      <p className="my-4">
        {
          "precio_unitario en SQL y precioUnitario en JSON no es inconsistencia: cada capa tiene su idioma. El mapeo ocurre en el repositorio o DTO."
        }
      </p>
    </section>
  );
}
