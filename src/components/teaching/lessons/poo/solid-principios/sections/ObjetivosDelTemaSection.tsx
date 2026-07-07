import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "SOLID son cinco principios prácticos para código más fácil de cambiar: menos acoplamiento, más cohesión, contratos claros. Conectan polimorfismo, abstracción y modelado visual del track."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Enunciar los cinco principios SOLID y su propósito en mantenibilidad y cambio seguro."
          }
        </li>
        <li>
          {
            "Identificar violaciones típicas (God class, switch, interfaz hinchada, new de concretos) en fragmentos C#."
          }
        </li>
        <li>{"Refactorizar un anti-ejemplo hacia SRP + interfaces y orquestación mínima."}</li>
        <li>
          {
            "Aplicar OCP con contrato + nuevas clases (IEnvio, EnvioGratis) sin modificar cliente."
          }
        </li>
        <li>
          {
            "Reconocer ruptura de LSP y proponer diseño alternativo (IVolador); aplicar DIP con inyección por constructor."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección polimorfismo: extensión por nuevas implementaciones, cliente estable."}</li>
        <li>{"Lección abstraccion-clases-abstractas-interfaces: interfaces, inyección por constructor."}</li>
        <li>{"Lección herencia: sustituibilidad, override, preview LSP."}</li>
        <li>{"Lección diagramas-de-clases: visualizar dependencias y contratos antes de refactor."}</li>
      </ul>
      <Callout title="SOLID en una frase">
        {
          "S — un motivo de cambio. O — extender sin editar cliente. L — sustituir sin sorpresas. I — interfaces pequeñas. D — depender de abstracciones."
        }
      </Callout>
      <CompareTable
        headers={["Letra", "Principio", "Idea clave"]}
        rows={[
          ["S", "Single Responsibility", "Un motivo principal de cambio por clase"],
          ["O", "Open/Closed", "Abierto a extensión, cerrado a modificación del cliente"],
          ["L", "Liskov Substitution", "Derivada sustituye a base sin romper contrato"],
          ["I", "Interface Segregation", "Interfaces pequeñas y específicas por rol"],
          ["D", "Dependency Inversion", "Alto nivel depende de abstracciones, no concretos"],
        ]}
      />
    </section>
  );
}
