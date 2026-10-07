import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PrototiposYHibridasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Prototipo e híbridos</h2>
      <p className="my-4">
        El prototipo de interfaz muestra qué verá el usuario y cómo se pasa de una pantalla a otra. No es el
        sistema terminado. Tiene que ser usable: en Logística SAS, botones con el verbo de la acción, el logo y
        poco texto técnico.
      </p>
      <MermaidDiagram
        title="Flujo de pantallas del empleado"
        description="Prototipo de navegación, no de colores"
        chart={`flowchart TD
  Login[Ingreso empleado] --> Menu[Menu de funciones]
  Menu --> Cli[Administrar clientes]
  Menu --> Ord[Registrar orden]
  Menu --> Rep[Reportes]
  Ord --> Num[Numero de orden]
  Menu --> Salir[Cerrar sesion]`}
      />
      <p className="my-4">
        Una pantalla de «Registrar orden» muestra la identificación del cliente, su nombre (solo lectura si ya
        existe), la dirección del servicio, las observaciones y dos acciones: Guardar y Cancelar. Al guardar,
        aparece el número de orden. Eso es el prototipo mínimo de este caso de uso. El entregable de la
        actividad es el conjunto de pantallas del sistema, no una sola.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Metodologías híbridas</h3>
      <p className="my-4">
        Un híbrido toma prácticas de la cascada y de lo ágil según el proyecto. Por ejemplo: el alcance se
        acuerda en un documento (cascada) y la construcción se parte en sprints con tablero y retrospectiva
        (ágil). La prueba puede ocurrir dentro del mismo sprint, no al final de todo. Sirve cuando la empresa
        quiere control del contrato y, a la vez, ver el producto antes del cierre.
      </p>
    </section>
  );
}
