import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HerenciaYVentajasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Herencia y ventajas</h2>
      <p className="my-4">
        La herencia es el mecanismo por el cual una clase incorpora lo de una clase superior y añade lo propio.
        Lo común queda arriba. Lo específico queda abajo.
      </p>
      <MermaidDiagram
        title="Herencia entre clases"
        description="Taxi y Autobus reutilizan lo de Vehiculo y agregan lo suyo"
        chart={`classDiagram
  class Vehiculo {
    +placa : String
    +capacidad : Integer
    +mover()
  }
  class Taxi {
    +numeroInterno : String
  }
  class Autobus {
    +ruta : String
  }
  Vehiculo <|-- Taxi
  Vehiculo <|-- Autobus`}
      />
      <p className="my-4">
        Taxi y Autobús tienen placa y capacidad porque son vehículos. El número interno solo existe en el taxi.
        La ruta solo existe en el autobús. En Logística SAS, Cliente y Empleado pueden heredar de Persona
        (nombre, documento, teléfono) y añadir código de cliente o cargo. Eso se dibuja en la clase 3.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ventajas de este enfoque</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Reutilización.</strong> Se ahorra tiempo sin reescribir lo que ya está bien modelado.
        </li>
        <li>
          <strong>Menos duplicidad.</strong> Lo compartido vive en un solo lugar.
        </li>
        <li>
          <strong>Estructura clara.</strong> Se distingue la plantilla (clase) del ejemplar (objeto).
        </li>
        <li>
          <strong>Protección de la información.</strong> El encapsulamiento limita quién toca los atributos.
        </li>
        <li>
          <strong>Corrección de errores.</strong> Una estructura simple hace más visible el fallo.
        </li>
      </ul>
      <Callout title="Siguiente página de esta clase" variant="callout-tip">
        <p className="mb-0">
          Con el vocabulario listo, la página siguiente recorre la cascada y las entrevistas. En la clase 3 ese
          material se convierte en el caso Logística SAS: actores, clases, casos de uso y Scrum.
        </p>
      </Callout>
    </section>
  );
}
