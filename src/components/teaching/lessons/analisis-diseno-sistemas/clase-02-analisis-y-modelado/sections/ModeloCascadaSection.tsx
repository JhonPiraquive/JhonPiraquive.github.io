import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ModeloCascadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Modelo en cascada</h2>
      <p className="my-4">
        El modelo en cascada organiza el desarrollo en fases que se recorren en orden. Se planea el conjunto:
        fechas, presupuesto y el sistema completo. Cada fase queda documentada. La siguiente no empieza hasta
        que la anterior está cerrada, y no se vuelve atrás. Por eso es poco flexible.
      </p>
      <MermaidDiagram
        title="Fases del modelo en cascada"
        description="Cada fase espera a que la anterior esté cerrada y documentada"
        chart={`flowchart TD
  P[1 Planificacion] --> A[2 Analisis de requerimientos]
  A --> D[3 Diseno]
  D --> C[4 Construccion]
  C --> T[5 Pruebas]
  T --> I[6 Implantacion]`}
      />
      <p className="my-4">
        Conviene cuando los requisitos están claros desde el inicio y el cambio no es la norma: un trámite
        regulado, un sistema que reemplaza un proceso estable. No conviene cuando el cliente va a descubrir lo
        que quiere mientras ve pantallas. Para eso está el enfoque ágil de la clase 4.
      </p>
      <Callout title="Documento de conciliación" variant="callout-info">
        <p className="mb-0">
          En cascada, el acuerdo con el cliente se escribe. Las actas de esta página son ese acuerdo: qué entra,
          qué queda fuera, si es viable y cuánto cuesta. Ese escrito es el documento de conciliación de la fase
          de planificación.
        </p>
      </Callout>
      <p className="my-4">
        Analizar y diseñar, antes de estas actas, es estudiar cómo se hace hoy el proceso para ver si hay que
        cambiarlo: productividad, costo, tiempo de respuesta. Las técnicas de levantamiento (la página de
        entrevistas) alimentan el análisis. El diseño, en la clase 4, convierte eso en casos de uso y pantallas.
      </p>
    </section>
  );
}
