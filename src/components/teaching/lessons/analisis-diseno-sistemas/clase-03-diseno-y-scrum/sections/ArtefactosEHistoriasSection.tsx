import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ArtefactosEHistoriasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Artefactos e historias de usuario</h2>
      <p className="my-4">
        Una historia de usuario es un requisito en lenguaje del usuario. La frase de trabajo es: «Como [rol]
        quiero [funcionalidad] para [beneficio]». No dice cómo programarlo.
      </p>
      <Callout title="Ejemplo" variant="callout-info">
        <p className="mb-0">
          Como administrador quiero administrar los reportes del sistema para saber qué información obtendré de
          cada uno.
        </p>
      </Callout>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Product backlog</h3>
      <p className="my-4">
        Es la lista priorizada de deseos del Product Owner. Visible para todos. Cada fila lleva prioridad,
        estimación de esfuerzo y criterio de aceptación. No se estima con detalle lo que todavía es dudoso o de
        prioridad baja.
      </p>
      <div className="not-prose my-4 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <th className="py-2 pr-3">Pri.</th>
              <th className="py-2 pr-3">Historia</th>
              <th className="py-2 pr-3">Est.</th>
              <th className="py-2 pr-3">Estado</th>
              <th className="py-2">Criterio de aceptación</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <td className="py-2 pr-3">1</td>
              <td className="py-2 pr-3">Como empleado quiero registrar una orden para no depender del teléfono.</td>
              <td className="py-2 pr-3">5</td>
              <td className="py-2 pr-3">En curso</td>
              <td className="py-2">La orden queda con número. No se guarda sin cliente existente.</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <td className="py-2 pr-3">2</td>
              <td className="py-2 pr-3">Como cliente quiero consultar el estado de mi orden para no llamar a la empresa.</td>
              <td className="py-2 pr-3">3</td>
              <td className="py-2 pr-3">Pendiente</td>
              <td className="py-2">Con el número de orden se ve estado y observaciones.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Sprint backlog y tablero</h3>
      <p className="my-4">
        El sprint backlog parte cada ítem elegido en tareas de no más de un día de trabajo. Cada tarea muestra
        esfuerzo y responsable, y se mueve de pendiente a en curso y a terminada. En el tablero, las tareas son
        tarjetas al lado del objetivo; un color por persona ayuda a ver la carga.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Burndown</h3>
      <p className="my-4">
        El gráfico de trabajo pendiente tiene el tiempo del sprint en el eje horizontal y el trabajo comprometido
        (horas o puntos) en el vertical. Baja cuando se termina trabajo. Si la línea real se queda por encima de
        la ideal, el sprint va atrasado. Se dibuja uno por sprint.
      </p>
      <MermaidDiagram
        title="Lectura simple de un burndown"
        description="El trabajo pendiente debería bajar a lo largo de los días del sprint"
        chart={`flowchart LR
  D1[Dia 1 alto] --> D2[Dia 2]
  D2 --> D3[Dia 3]
  D3 --> D4[Dia 4 bajo]`}
      />
      <p className="my-4">
        Ágil no significa sin reglas. Significa transparencia, revisión frecuente y adaptación, con artefactos
        que cualquiera del equipo puede leer.
      </p>
    </section>
  );
}
