import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: modelo de datos tienda online"}
      </h2>
      <p className="my-4 font-semibold">
        {"Diseña el modelo de datos de una tienda online"}
      </p>
      <p className="my-4">
        {
          "Entidades: categorias, productos, usuarios, pedidos, detalle_pedido (cantidad, precio unitario)."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Escribe DDL con PK, FK y al menos un CHECK (precio > 0)."}</li>
        <li>{"Inserta datos de ejemplo con DML (mínimo 3 productos, 1 pedido con 2 ítems)."}</li>
        <li>{"Consulta: total vendido por categoría (JOIN + SUM)."}</li>
        <li>
          {
            "Simula compra del último ítem en stock con BEGIN/COMMIT o ROLLBACK si stock < 1."
          }
        </li>
        <li>
          {
            "Argumenta qué parte iría en SQL vs Redis vs MongoDB si añades carrito temporal y logs de clics."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: integridad referencial, transacción de stock coherente, consulta agregada correcta, justificación políglota razonada."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="Esqueleto DDL (completar en el reto)"
        code={`-- Esqueleto DDL (completar en el reto)
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  creado_en TIMESTAMP DEFAULT NOW()
);

CREATE TABLE detalle_pedido (
  id SERIAL PRIMARY KEY,
  pedido_id INTEGER REFERENCES pedidos(id),
  producto_id INTEGER REFERENCES productos(id),
  cantidad INTEGER NOT NULL CHECK (cantidad > 0),
  precio_unitario DECIMAL(12, 2) NOT NULL CHECK (precio_unitario > 0)
);`}
      />
      <PracticeExercise
        prompt="Completa el reto de la tienda: DDL con FK, INSERT de ejemplo, SUM por categoría y transacción de stock con ROLLBACK si stock < 1."
        hints={[
          "REFERENCES en producto_id y pedido_id",
          "BEGIN antes de UPDATE stock",
          "JOIN categorias + SUM(cantidad * precio_unitario)",
        ]}
        expectedKeywords={["DDL", "JOIN", "COMMIT", "ROLLBACK"]}
        successMessage="Excelente. Has diseñado un modelo relacional con integridad y transacciones coherentes."
        rows={6}
      />
    </section>
  );
}
