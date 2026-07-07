import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const OPENAPI_EJEMPLO = `{
  "paths": {
    "/api/v1/productos": {
      "get": {
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "productoId": { "type": "integer" },
                      "nombreProducto": { "type": "string" },
                      "precioUnitario": { "type": "number" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: estandarizar mini e-commerce"}
      </h2>
      <p className="my-4 font-semibold">{"Estandariza el naming de un mini-proyecto e-commerce"}</p>
      <p className="my-4">{"Código inconsistente recibido:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Tabla OrdersDetail, columna ProductID."}</li>
        <li>{"API GET /getAllProducts, JSON con product_name."}</li>
        <li>{"Clase prodHelper, componente tarjeta_producto.tsx."}</li>
      </ul>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Propón nombres correctos para tabla, columnas, endpoint, JSON y archivos."}</li>
        <li>{"Escribe un fragmento OpenAPI con propiedades camelCase coherentes."}</li>
        <li>{"Lista 5 reglas para el README del equipo."}</li>
        <li>{"Sugiere regla ESLint para enforcear PascalCase en componentes."}</li>
        <li>{"Indica qué renombrarías primero (breaking vs interno)."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: convención por capa clara, endpoint REST idiomático, JSON camelCase, sin abreviaciones opacas."
        }
      </p>
      <CodeFiddle language="json" title="OpenAPI con camelCase" code={OPENAPI_EJEMPLO} />
      <PracticeExercise
        prompt="Completa el reto: nombra la tabla SQL, el endpoint REST y el componente React correctos para el e-commerce inconsistente."
        hints={["pedidos_detalle / producto_id", "GET /api/v1/productos", "TarjetaProducto.tsx"]}
        expectedKeywords={["snake_case", "kebab-case", "PascalCase", "camelCase"]}
        successMessage="Excelente. Convención por capa aplicada de forma coherente."
        rows={6}
      />
    </section>
  );
}
