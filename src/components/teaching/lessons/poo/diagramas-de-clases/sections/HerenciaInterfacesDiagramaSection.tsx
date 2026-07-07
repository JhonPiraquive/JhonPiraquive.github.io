import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function HerenciaInterfacesDiagramaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Herencia e interfaces en el diagrama"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Herencia: Base <|-- Derivada — triángulo hacia la base."}</li>
        <li>{"Interfaz: <<interface>> + Interface <|.. ClaseImplementa."}</li>
        <li>{"Clase abstracta: <<abstract>> cuando no se instancia directamente."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Notificación abstracta + derivadas"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class Notificacion {
    <<abstract>>
    +Enviar(string mensaje)
  }
  Notificacion <|-- NotificacionEmail
  Notificacion <|-- NotificacionSms`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Interfaz y implementaciones (pasarelas)"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class IPasarelaPago {
    <<interface>>
    +Cobrar(decimal monto)
  }
  IPasarelaPago <|.. PasarelaTarjeta
  IPasarelaPago <|.. PasarelaTransferencia`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales en el diagrama"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"<|-- para herencia de clase — no para interfaz."}</li>
        <li>{"<|.. (línea punteada) para implementación de interfaz."}</li>
        <li>{"<<abstract>> y <<interface>> estereotipos UML en Mermaid."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Herencia vs implementación invertidas — interfaz requiere <|.."}</li>
        <li>{"Confundir diagrama de clases con diagrama de secuencia."}</li>
        <li>{"Jerarquías profundas sin necesidad de dominio."}</li>
      </ul>
      <PracticeExercise
        prompt="Añade al diagrama de Producto la clase abstracta Notificacion con NotificacionEmail y NotificacionSms. Usa estereotipos y herencia correctos en Mermaid."
        hints={[
          "Notificacion lleva <<abstract>>",
          "Herencia de clase usa <|--",
          "NotificacionEmail y NotificacionSms heredan de Notificacion",
        ]}
        expectedKeywords={["abstract", "<|--", "NotificacionEmail", "NotificacionSms"]}
        successMessage="Correcto. Has modelado jerarquía abstracta con sintaxis Mermaid válida."
      />
    </section>
  );
}
