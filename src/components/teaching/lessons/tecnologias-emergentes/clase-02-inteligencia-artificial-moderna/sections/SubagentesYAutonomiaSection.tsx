import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SubagentesYAutonomiaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Subagentes y niveles de autonomía</h2>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Subagentes</h3>
      <p className="my-4">
        Un <strong>subagente</strong> es un agente que otro agente lanza para resolver una parte de la tarea. Recibe
        instrucciones propias, trabaja en su propia ventana de contexto y devuelve solo un resumen del resultado. Es como un
        jefe de obra que envía a un especialista a revisar la instalación eléctrica y solo recibe el informe final, sin
        tener que mirar cada cable.
      </p>
      <MermaidDiagram
        title="Un agente principal con subagentes"
        description="Diagrama: el agente principal delega en tres subagentes (buscar en el código, revisar seguridad y escribir pruebas); cada uno trabaja con su propio contexto y devuelve un resumen."
        chart={`flowchart TD
  P["Agente principal<br/>coordina la tarea"] --> A["Subagente: buscar<br/>dónde está el código"]
  P --> B["Subagente: revisar<br/>seguridad"]
  P --> C["Subagente: escribir<br/>pruebas"]
  A -- resumen --> P
  B -- resumen --> P
  C -- resumen --> P`}
      />
      <CompareTable
        headers={["Ventaja", "Costo"]}
        rows={[
          ["La ventana del agente principal no se llena de detalles.", "Más llamadas al modelo: más tokens y más dinero."],
          ["Varias subtareas pueden ejecutarse en paralelo.", "El subagente no sabe lo que el principal no le contó."],
          ["Cada subagente puede tener herramientas y permisos limitados.", "Coordinar muchos agentes agrega complejidad y puntos de falla."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Niveles de autonomía</h3>
      <p className="my-4">
        No todos los usos de IA dan la misma libertad al sistema. Una escala, parecida a la de los vehículos autónomos,
        ayuda a decidir cuánta autonomía conviene en cada caso.
      </p>
      <CompareTable
        headers={["Nivel", "Quién decide", "Ejemplo"]}
        rows={[
          ["1. Sugerencia", "La persona hace todo; la IA sugiere.", "Autocompletado de código en el editor."],
          ["2. Asistente", "La IA responde o propone; la persona aplica.", "Pedir que explique un error y corregirlo a mano."],
          ["3. Agente supervisado", "La IA ejecuta pasos; la persona aprueba las acciones importantes.", "Un agente que edita archivos y pide permiso antes de ejecutar comandos."],
          ["4. Agente autónomo con límites", "La IA ejecuta la tarea completa dentro de un entorno aislado; la persona revisa el resultado.", "Un agente que trabaja en la nube y entrega una propuesta de cambios para revisión."],
        ]}
      />
      <Callout title="Regla para elegir el nivel" variant="callout-tip">
        <p className="mb-0">
          Cuanto más difícil sea deshacer un error, menos autonomía. Un agente puede tener libertad total para leer
          archivos, pero debería pedir permiso para borrar datos, publicar o gastar dinero.
        </p>
      </Callout>
    </section>
  );
}
