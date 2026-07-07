import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ResumenContextoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Convención por capa en una app web"}
      </h2>
      <MermaidDiagram
        chart={`flowchart TD
  URL["URL kebab-case<br/>/api/tipos-de-usuario"]
  JSON["JSON camelCase<br/>precioUnitario"]
  TS["TS camelCase / PascalCase<br/>calcularIva / ProductoService"]
  SQL["SQL snake_case<br/>precio_unitario"]
  ENV[".env UPPER_SNAKE<br/>DATABASE_URL"]
  URL --> JSON
  JSON --> TS
  TS --> SQL`}
      />
      <CompareTable
        headers={["Contexto", "Convención", "Ejemplo"]}
        rows={[
          ["Variable TS", "camelCase", "precioUnitario"],
          ["Clase / componente", "PascalCase", "ProductoService / TarjetaProducto"],
          ["Tabla / columna SQL", "snake_case", "pedidos_detalle / precio_unitario"],
          ["URL REST", "kebab-case", "/api/v1/tipos-de-usuario"],
          ["Constante global", "UPPER_SNAKE_CASE", "MAX_REINTENTOS"],
          ["Archivo React", "kebab-case", "tarjeta-producto.tsx"],
        ]}
      />
      <StepReveal
        title="Tarjeta de producto en cada convención"
        steps={[
          { title: "camelCase", content: "tarjetaProducto — variable o prop en TS/JSON" },
          { title: "PascalCase", content: "TarjetaProducto — componente React o clase" },
          { title: "snake_case", content: "tarjeta_producto — tabla o columna SQL" },
          { title: "kebab-case", content: "tarjeta-producto — URL o nombre de archivo" },
          { title: "UPPER_SNAKE", content: "MAX_TARJETAS_POR_PAGINA — constante global" },
        ]}
      />
      <PracticeExercise
        prompt="Renombra según convenciones TS: class usr_svc { getPr(id) {} } → clase, método y parámetro correctos."
        hints={["PascalCase para clase", "camelCase para método", "nombre de dominio expresivo"]}
        expectedKeywords={["UsuarioService", "getProducto", "productoId"]}
        successMessage="Correcto. class UsuarioService { getProducto(productoId: number) {} }"
      />
    </section>
  );
}
