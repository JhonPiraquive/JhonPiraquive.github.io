import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function IntroSolidPreviewSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Introducción a SOLID en servicios web"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"SOLID = cinco principios de diseño OO (Robert C. Martin)."}</li>
        <li>{"Especialmente relevantes al estructurar y evolucionar APIs."}</li>
        <li>{"Mal particionado → endpoints frágiles y deuda en integraciones."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Los cinco principios"}</h3>
      <CompareTable
        headers={["Letra", "Principio", "Ejemplo en API"]}
        rows={[
          ["S", "Single Responsibility", "/usuarios no mezcla pagos ni emails de marketing"],
          ["O", "Open/Closed", "Nuevo tipo de auth sin modificar el controlador existente"],
          ["L", "Liskov Substitution", "RepositorioSQL y RepositorioMongo intercambiables vía IRepositorio"],
          ["I", "Interface Segregation", "ILector e IEscritor en lugar de una interfaz gigante"],
          ["D", "Dependency Inversion", "El servicio depende de IRepositorio, no de MySQLRepositorio"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Capas de una API bien particionada"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  EP[Endpoint /usuarios] --> SRV[Servicio Usuarios]
  SRV --> REPO[IRepositorio]
  REPO --> SQL[RepositorioSQL]
  REPO --> MONGO[RepositorioMongo]`}
      />
      <Callout title="Error frecuente">
        {
          "Tratar SOLID como teoría ajena a APIs. Si /usuarios/registro también procesa pagos y envía emails, violas SRP y dificultas pruebas y despliegues independientes."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Para el principio D (Dependency Inversion), ¿por qué el servicio no debería importar directamente MySQLRepositorio en su controlador?"
        hints={[
          "Piensa en pruebas con mock",
          "Cambiar de motor de BD sin tocar lógica de negocio",
        ]}
        expectedKeywords={["abstracción", "IRepositorio", "acoplamiento", "test"]}
        successMessage="Correcto. Depender de abstracciones desacopla la lógica de la implementación concreta y facilita pruebas y cambios de persistencia."
      />
    </section>
  );
}
