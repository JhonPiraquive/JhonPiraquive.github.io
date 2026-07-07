import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function IntroduccionDomMutableSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Introducción: DOM mutable"}</h2>
      <p className="my-4">
        {
          "En la lección 1 viste que el DOM es la representación viva del HTML en memoria. Aquí aplicas las APIs concretas para leer, crear, actualizar y borrar nodos en tiempo de ejecución, y para reaccionar a acciones del usuario con eventos."
        }
      </p>
      <p className="my-4">
        {
          "El navegador encola eventos (FIFO, como la cola de la lección 9) y despacha los callbacks de `addEventListener` en el hilo principal. Los listeners son callbacks de la lección 6."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart LR
  S["Seleccionar querySelector"] --> R["Leer textContent"]
  S --> U["Actualizar classList / innerHTML"]
  S --> C["createElement + appendChild"]
  C --> D["remove / removeChild"]`}
      />
    </section>
  );
}
