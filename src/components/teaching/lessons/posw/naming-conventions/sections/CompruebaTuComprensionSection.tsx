import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comprueba tu comprensión"}
      </h2>
      <div className="my-8">
        <CodeChallenge
          title="Elige la convención correcta"
          template={`Componente React → {{blank1}}
Columna SQL → {{blank2}}
URL de API → {{blank3}}
Constante global → {{blank4}}`}
          blanks={[
            { id: "blank1", answer: "PascalCase", placeholder: "React" },
            { id: "blank2", answer: "snake_case", placeholder: "SQL" },
            { id: "blank3", answer: "kebab-case", placeholder: "URL" },
            { id: "blank4", answer: "UPPER_SNAKE_CASE", placeholder: "constante" },
          ]}
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Una columna SQL se llama precio_unitario y el JSON de la API precioUnitario. ¿Es inconsistencia? Justifica."
          hints={["Convención por capa", "Mapeo en repositorio/DTO", "README del equipo"]}
          expectedKeywords={["capa", "camelCase", "snake_case", "mapeo"]}
          successMessage="Correcto. precio_unitario en BD y precioUnitario en JSON no es inconsistencia: es convención por capa."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Corrige el endpoint GET /getAllProducts y el campo JSON product_name según convenciones REST."
          hints={["Sustantivos plurales", "kebab-case en URL", "camelCase en JSON"]}
          expectedKeywords={["productos", "nombreProducto", "kebab-case", "camelCase"]}
          successMessage="Correcto. GET /api/v1/productos y nombreProducto en JSON — REST idiomático y camelCase coherente."
        />
      </div>
    </section>
  );
}
