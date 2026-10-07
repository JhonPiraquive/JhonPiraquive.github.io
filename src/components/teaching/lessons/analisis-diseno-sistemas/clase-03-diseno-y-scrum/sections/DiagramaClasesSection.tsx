import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaClasesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Diagrama de clases de análisis</h2>
      <p className="my-4">
        El diagrama de análisis es la primera versión: organiza lo recogido, no el diseño final de la base de
        datos. Esta versión usa herencia para no repetir nombre y documento en cada clase.
      </p>
      <MermaidDiagram
        title="Diagrama de clases inicial"
        description="Persona es la clase superior. Cliente y Empleado añaden lo propio. La orden conoce a un cliente y a un empleado."
        chart={`classDiagram
  class Persona {
    +nombreCompleto : String
    +documento : String
    +telefono : String
  }
  class Cliente {
    +codigoCliente : String
    +fechaRegistro : Date
  }
  class Empleado {
    +codigoEmpleado : String
    +cargo : String
  }
  class OrdenServicio {
    +numero : String
    +direccion : String
    +estado : String
    +observaciones : String
  }
  Persona <|-- Cliente
  Persona <|-- Empleado
  Cliente "1" --> "0..*" OrdenServicio : solicita
  Empleado "1" --> "0..*" OrdenServicio : atiende`}
      />
      <p className="my-4">Para refinar el diagrama, revisa después:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>El rol de cada clase (qué responsabilidad tiene).</li>
        <li>La navegabilidad: desde qué clase se llega a la otra.</li>
        <li>La cardinalidad: uno, muchos, cero o uno.</li>
        <li>Si una clase es parte de otra, y si esa parte puede existir sola (agregación) o no (composición).</li>
        <li>Los métodos, cuando el caso de uso ya diga qué operaciones hacen falta.</li>
      </ul>
      <p className="my-4">
        El entregable es el diagrama completo. El producto de toda la fase de análisis es un documento que
        reúna entrevistas, problemática, objetivos, restricciones, actores, clases y este diagrama.
      </p>
      <Callout title="Lectura de la cardinalidad" variant="callout-info">
        <p className="mb-0">
          «1» del lado de Cliente y «0..*» del lado de OrdenServicio significa: un cliente puede tener muchas
          órdenes, y cada orden pertenece a un cliente. Si una orden pudiera no tener cliente, el modelo estaría
          mal respecto al caso.
        </p>
      </Callout>
    </section>
  );
}
