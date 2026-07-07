import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function DmlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DML: consultar e insertar datos"}
      </h2>
      <CodeFiddle
        language="sql"
        title="Insertar, consultar, actualizar"
        code={`INSERT INTO productos (nombre, precio, stock, categoria_id)
VALUES ('Laptop Pro 15', 4500000.00, 10, 1);

SELECT p.id, p.nombre, p.precio, c.nombre AS categoria
FROM productos p
INNER JOIN categorias c ON p.categoria_id = c.id
WHERE p.precio BETWEEN 100000 AND 1000000
  AND p.stock > 0
ORDER BY p.precio ASC
LIMIT 10;

UPDATE productos
SET precio = precio * 0.9, stock = stock - 1
WHERE id = 42;

DELETE FROM productos WHERE stock = 0;`}
      />
      <CodeFiddle
        language="sql"
        title="Agregaciones con GROUP BY"
        code={`SELECT
  c.nombre AS categoria,
  COUNT(p.id) AS total_productos,
  AVG(p.precio) AS precio_promedio
FROM productos p
JOIN categorias c ON p.categoria_id = c.id
GROUP BY c.nombre
HAVING COUNT(p.id) > 5
ORDER BY precio_promedio DESC;`}
      />
      <CodeChallenge
        title="Completa la consulta GROUP BY"
        template={`SELECT {{blank1}}, AVG(precio) FROM productos GROUP BY categoria_id HAVING {{blank2}} > 3`}
        blanks={[
          { id: "blank1", answer: "categoria_id", placeholder: "columnas SELECT" },
          { id: "blank2", answer: "COUNT(*)", placeholder: "condición HAVING" },
        ]}
      />
      <CodeFiddle
        language="javascript"
        title="Cliente JavaScript (API como capa)"
        code={`// El frontend NO debe conectar directo a la BD en producción
async function listarProductos() {
  const res = await fetch("/api/productos?stock_gt=0");
  if (!res.ok) throw new Error("Error al consultar productos");
  return res.json();
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"DELETE sin WHERE: borra toda la tabla."}</li>
        <li>{"Omitir COMMIT: cambios pendientes que otros no ven."}</li>
      </ul>
    </section>
  );
}
